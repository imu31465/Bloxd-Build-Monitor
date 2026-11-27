# Changed — Bundle Modifications Report (Part 027 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `27 / 82` (**399** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 026](part-026.md) · [Part 028 →](part-028.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/675.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/675.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-80f77804f5ced39042e50827b8396bb42e3b2aa3771679c53ecc3a2c23c81a70)

#### 3. `bundles/bloxd.io/chunks/js/675.js` (Changed code · before: `L8-L14` → after: `L11-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-80f77804f5ced39042e50827b8396bb42e3b2aa3771679c53ecc3a2c23c81a70R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-80f77804f5ced39042e50827b8396bb42e3b2aa3771679c53ecc3a2c23c81a70) · [After (L11-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/675.js#L11-L57) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/675.js#L8-L14)

```diff
-     var ye = He(40954);
-     const be = "lodPixelShader",
-       Me = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch( … [truncated]
-     ye.d.ShadersStore[be] || (ye.d.ShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
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

## `bloxd.io` · `bundles/bloxd.io/chunks/js/676.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/676.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c7d25d8ee537145c7fb4f33eccc682b964f4a595f75853953766b2ca2c8a3c4f)

#### 1. `bundles/bloxd.io/chunks/js/676.js` (Changed code · before: `L4` → after: `L4-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c7d25d8ee537145c7fb4f33eccc682b964f4a595f75853953766b2ca2c8a3c4fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c7d25d8ee537145c7fb4f33eccc682b964f4a595f75853953766b2ca2c8a3c4f) · [After (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/676.js#L4-L19) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/676.js#L4)

```diff
-   63985: (ee, ie, He) => {
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

#### 2. `bundles/bloxd.io/chunks/js/676.js` (Changed code · before: `L6-L15` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c7d25d8ee537145c7fb4f33eccc682b964f4a595f75853953766b2ca2c8a3c4fR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c7d25d8ee537145c7fb4f33eccc682b964f4a595f75853953766b2ca2c8a3c4f) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/676.js#L21-L23) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/676.js#L6-L15)

```diff
-       lod3DPixelShaderWGSL: () => Ke
-     });
-     var ye = He(40954);
-     const be = "lod3DPixelShader",
-       Me = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textu … [truncated]
-     ye.d.ShadersStoreWGSL[be] || (ye.d.ShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
+       makePackMeshWorld: () => EW,
+       packMat4IntoF32WithOffset: () => mW
+     })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/677.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/677.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-997ddf3991d29ae4ad4833b52808a1cec18d48ed3de2c245b06b1c96e0cd7e3f)

#### 1. `bundles/bloxd.io/chunks/js/677.js` (Changed code · before: `L4` → after: `L4-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-997ddf3991d29ae4ad4833b52808a1cec18d48ed3de2c245b06b1c96e0cd7e3fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-997ddf3991d29ae4ad4833b52808a1cec18d48ed3de2c245b06b1c96e0cd7e3f) · [After (L4-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/677.js#L4-L76) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/677.js#L4)

```diff
-   63989: (ee, ie, He) => {
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

#### 2. `bundles/bloxd.io/chunks/js/677.js` (Changed code · before: `L6-L15` → after: `L78-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-997ddf3991d29ae4ad4833b52808a1cec18d48ed3de2c245b06b1c96e0cd7e3fR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-997ddf3991d29ae4ad4833b52808a1cec18d48ed3de2c245b06b1c96e0cd7e3f) · [After (L78-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/677.js#L78-L84) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/677.js#L6-L15)

```diff
-       lodCubePixelShaderWGSL: () => Ke
-     });
-     var ye = He(40954);
-     const be = "lodCubePixelShader",
-       Me = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;\n#ifdef  … [truncated]
-     ye.d.ShadersStoreWGSL[be] || (ye.d.ShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
+       createGpuFrameTimer: () => EW,
+       destroyGpuFrameTimer: () => cW,
+       gpuFrameTimerBegin: () => NW,
+       gpuFrameTimerEnd: () => PW,
+       gpuFrameTimerResolve: () => LW,
+       gpuTimingSupportedFor: () => mW
+     })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/678.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/678.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f538967250f7f01b28112534d86fac580610ec67a0d4f28b2ff09db2c5810e3f)

#### 1. `bundles/bloxd.io/chunks/js/678.js` (Changed code · before: `L4` → after: `L4-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f538967250f7f01b28112534d86fac580610ec67a0d4f28b2ff09db2c5810e3fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f538967250f7f01b28112534d86fac580610ec67a0d4f28b2ff09db2c5810e3f) · [After (L4-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/678.js#L4-L22) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/678.js#L4)

```diff
-   63995: (ee, ie, He) => {
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

#### 2. `bundles/bloxd.io/chunks/js/678.js` (Changed code · before: `L6-L15` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f538967250f7f01b28112534d86fac580610ec67a0d4f28b2ff09db2c5810e3fR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f538967250f7f01b28112534d86fac580610ec67a0d4f28b2ff09db2c5810e3f) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/678.js#L24-L25) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/678.js#L6-L15)

```diff
-       lodPixelShaderWGSL: () => Ke
-     });
-     var ye = He(40954);
-     const be = "lodPixelShader",
-       Me = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureL … [truncated]
-     ye.d.ShadersStoreWGSL[be] || (ye.d.ShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
+       configureSwapchainOverlayScene: () => EW
+     })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/679.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/679.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-405d5609d776a9463b50b2dd6f45a6295c4815222d7e20dcdd7bec2612f81f72)

#### 1. `bundles/bloxd.io/chunks/js/679.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-405d5609d776a9463b50b2dd6f45a6295c4815222d7e20dcdd7bec2612f81f72R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-405d5609d776a9463b50b2dd6f45a6295c4815222d7e20dcdd7bec2612f81f72) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/679.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/679.js#L4-L6)

```diff
-   64004: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       passPixelShaderWGSL: () => Ke
+   64497: (WW, iW, OW) => {
+     OW.d(iW, {
+       createShadowTask: () => NW
```

#### 2. `bundles/bloxd.io/chunks/js/679.js` (Changed code · before: `L8-L14` → after: `L8-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-405d5609d776a9463b50b2dd6f45a6295c4815222d7e20dcdd7bec2612f81f72R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-405d5609d776a9463b50b2dd6f45a6295c4815222d7e20dcdd7bec2612f81f72) · [After (L8-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/679.js#L8-L74) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/679.js#L8-L14)

```diff
-     var ye = He(40954);
-     const be = "passPixelShader",
-       Me = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input. … [truncated]
-     ye.d.ShadersStoreWGSL[be] || (ye.d.ShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
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

## `bloxd.io` · `bundles/bloxd.io/chunks/js/680.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/680.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7f72618fbd90e401be90c6da4b90be84c9bdb2f8aa1cae8e7c51cbba8d869b79)

#### 1. `bundles/bloxd.io/chunks/js/680.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7f72618fbd90e401be90c6da4b90be84c9bdb2f8aa1cae8e7c51cbba8d869b79R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7f72618fbd90e401be90c6da4b90be84c9bdb2f8aa1cae8e7c51cbba8d869b79) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/680.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/680.js#L4)

```diff
-   64008: (ee, ie, He) => {
+   64503: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/680.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7f72618fbd90e401be90c6da4b90be84c9bdb2f8aa1cae8e7c51cbba8d869b79R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7f72618fbd90e401be90c6da4b90be84c9bdb2f8aa1cae8e7c51cbba8d869b79) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/680.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/680.js#L6)

```diff
-       passPixelShader: () => Ke
+       A: () => wW,
+       B: () => ZW,
+       C: () => tW,
+       X: () => xW
```

#### 3. `bundles/bloxd.io/chunks/js/680.js` (Changed code · before: `L8-L14` → after: `L11-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7f72618fbd90e401be90c6da4b90be84c9bdb2f8aa1cae8e7c51cbba8d869b79R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7f72618fbd90e401be90c6da4b90be84c9bdb2f8aa1cae8e7c51cbba8d869b79) · [After (L11-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/680.js#L11-L288) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/680.js#L8-L14)

```diff
-     var ye = He(40954);
-     const be = "passPixelShader",
-       Me = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
-     ye.d.ShadersStore[be] || (ye.d.ShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
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

## `bloxd.io` · `bundles/bloxd.io/chunks/js/681.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/681.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-272182aa78bacf75d20d30275b14c8b111735c56b50982a3f723ee38fd3834a5)

#### 1. `bundles/bloxd.io/chunks/js/681.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-272182aa78bacf75d20d30275b14c8b111735c56b50982a3f723ee38fd3834a5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-272182aa78bacf75d20d30275b14c8b111735c56b50982a3f723ee38fd3834a5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/681.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/681.js#L4)

```diff
-   64015: (ee, ie, He) => {
+   64531: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/681.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-272182aa78bacf75d20d30275b14c8b111735c56b50982a3f723ee38fd3834a5R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-272182aa78bacf75d20d30275b14c8b111735c56b50982a3f723ee38fd3834a5) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/681.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/681.js#L6)

```diff
-       passCubePixelShaderWGSL: () => Ke
+       postprocessVertexShaderWGSL: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/681.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-272182aa78bacf75d20d30275b14c8b111735c56b50982a3f723ee38fd3834a5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-272182aa78bacf75d20d30275b14c8b111735c56b50982a3f723ee38fd3834a5) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/681.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/681.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "passCubePixelShader",
-       Me = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=tex … [truncated]
-     ye.d.ShadersStoreWGSL[be] || (ye.d.ShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "postprocessVertexShader",
+       NW = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.posi … [truncated]
+     mW.c.ShadersStoreWGSL[EW] || (mW.c.ShadersStoreWGSL[EW] = NW);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/682.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/682.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0a848665eb3bc239298b0474e141c1cdfe894c1a80cfe5da200004f36d908dc2)

#### 1. `bundles/bloxd.io/chunks/js/682.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0a848665eb3bc239298b0474e141c1cdfe894c1a80cfe5da200004f36d908dc2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0a848665eb3bc239298b0474e141c1cdfe894c1a80cfe5da200004f36d908dc2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/682.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/682.js#L4)

```diff
-   64018: (ee, ie, He) => {
+   64554: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/682.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0a848665eb3bc239298b0474e141c1cdfe894c1a80cfe5da200004f36d908dc2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0a848665eb3bc239298b0474e141c1cdfe894c1a80cfe5da200004f36d908dc2) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/682.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/682.js#L6)

```diff
-       passCubePixelShader: () => Ke
+       lod3DPixelShader: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/682.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0a848665eb3bc239298b0474e141c1cdfe894c1a80cfe5da200004f36d908dc2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0a848665eb3bc239298b0474e141c1cdfe894c1a80cfe5da200004f36d908dc2) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/682.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/682.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "passCubePixelShader",
-       Me = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(te … [truncated]
-     ye.d.ShadersStore[be] || (ye.d.ShadersStore[be] = Me);
+     var mW = OW(41392);
+     const EW = "lod3DPixelShader",
+       NW = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(t … [truncated]
+     mW.c.ShadersStore[EW] || (mW.c.ShadersStore[EW] = NW);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/683.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/683.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a3b6936b6cec91a881897db99d63e593c7c0815b80995391cd932cce54f3b052)

#### 1. `bundles/bloxd.io/chunks/js/683.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a3b6936b6cec91a881897db99d63e593c7c0815b80995391cd932cce54f3b052R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a3b6936b6cec91a881897db99d63e593c7c0815b80995391cd932cce54f3b052) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/683.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/683.js#L4)

```diff
-   64060: (ee, ie, He) => {
+   64561: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/683.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a3b6936b6cec91a881897db99d63e593c7c0815b80995391cd932cce54f3b052R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a3b6936b6cec91a881897db99d63e593c7c0815b80995391cd932cce54f3b052) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/683.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/683.js#L6)

```diff
-       fxaaPixelShaderWGSL: () => Ke
+       lodCubePixelShader: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/683.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a3b6936b6cec91a881897db99d63e593c7c0815b80995391cd932cce54f3b052R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a3b6936b6cec91a881897db99d63e593c7c0815b80995391cd932cce54f3b052) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/683.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/683.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "fxaaPixelShader",
-       Me = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform texelSize: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying samp … [truncated]
-     ye.d.ShadersStoreWGSL[be] || (ye.d.ShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "lodCubePixelShader",
+       NW = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)\n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,u … [truncated]
+     mW.c.ShadersStore[EW] || (mW.c.ShadersStore[EW] = NW);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/684.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/684.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c3bcbf554aa82e62340a9b421671396faee1dd06d4b7be718fd2be7227a552fe)

#### 1. `bundles/bloxd.io/chunks/js/684.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c3bcbf554aa82e62340a9b421671396faee1dd06d4b7be718fd2be7227a552feR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c3bcbf554aa82e62340a9b421671396faee1dd06d4b7be718fd2be7227a552fe) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/684.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/684.js#L4)

```diff
-   64065: (ee, ie, He) => {
+   64565: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/684.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c3bcbf554aa82e62340a9b421671396faee1dd06d4b7be718fd2be7227a552feR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c3bcbf554aa82e62340a9b421671396faee1dd06d4b7be718fd2be7227a552fe) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/684.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/684.js#L6)

```diff
-       fxaaVertexShaderWGSL: () => Ke
+       lodPixelShader: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/684.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c3bcbf554aa82e62340a9b421671396faee1dd06d4b7be718fd2be7227a552feR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c3bcbf554aa82e62340a9b421671396faee1dd06d4b7be718fd2be7227a552fe) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/684.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/684.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "fxaaVertexShader",
-       Me = "attribute position: vec2f;uniform texelSize: vec2f;varying vUV: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f … [truncated]
-     ye.d.ShadersStoreWGSL[be] || (ye.d.ShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "lodPixelShader",
+       NW = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch( … [truncated]
+     mW.c.ShadersStore[EW] || (mW.c.ShadersStore[EW] = NW);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/685.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/685.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54cfb69588620163eb95adc63048b25438b5f807deaed31c1b98c9dc4eb1040d)

#### 1. `bundles/bloxd.io/chunks/js/685.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54cfb69588620163eb95adc63048b25438b5f807deaed31c1b98c9dc4eb1040dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54cfb69588620163eb95adc63048b25438b5f807deaed31c1b98c9dc4eb1040d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/685.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/685.js#L4)

```diff
-   64069: (ee, ie, He) => {
+   64572: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/685.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54cfb69588620163eb95adc63048b25438b5f807deaed31c1b98c9dc4eb1040dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54cfb69588620163eb95adc63048b25438b5f807deaed31c1b98c9dc4eb1040d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/685.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/685.js#L6)

```diff
-       fxaaPixelShader: () => Ke
+       lod3DPixelShaderWGSL: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/685.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54cfb69588620163eb95adc63048b25438b5f807deaed31c1b98c9dc4eb1040dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54cfb69588620163eb95adc63048b25438b5f807deaed31c1b98c9dc4eb1040d) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/685.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/685.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "fxaaPixelShader",
-       Me = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\nuniform sampler2D textureSampler;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS … [truncated]
-     ye.d.ShadersStore[be] || (ye.d.ShadersStore[be] = Me);
+     var mW = OW(41392);
+     const EW = "lod3DPixelShader",
+       NW = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textu … [truncated]
+     mW.c.ShadersStoreWGSL[EW] || (mW.c.ShadersStoreWGSL[EW] = NW);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/686.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/686.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-945bae06ee162af4146e298f47fd978f3e4a0c331b10b358e35cd2bbf6e78c4a)

#### 1. `bundles/bloxd.io/chunks/js/686.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-945bae06ee162af4146e298f47fd978f3e4a0c331b10b358e35cd2bbf6e78c4aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-945bae06ee162af4146e298f47fd978f3e4a0c331b10b358e35cd2bbf6e78c4a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/686.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/686.js#L4)

```diff
-   64076: (ee, ie, He) => {
+   64578: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/686.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-945bae06ee162af4146e298f47fd978f3e4a0c331b10b358e35cd2bbf6e78c4aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-945bae06ee162af4146e298f47fd978f3e4a0c331b10b358e35cd2bbf6e78c4a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/686.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/686.js#L6)

```diff
-       fxaaVertexShader: () => Ke
+       lodCubePixelShaderWGSL: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/686.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-945bae06ee162af4146e298f47fd978f3e4a0c331b10b358e35cd2bbf6e78c4aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-945bae06ee162af4146e298f47fd978f3e4a0c331b10b358e35cd2bbf6e78c4a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/686.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/686.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "fxaaVertexShader",
-       Me = "attribute vec2 position;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sample … [truncated]
-     ye.d.ShadersStore[be] || (ye.d.ShadersStore[be] = Me);
+     var mW = OW(41392);
+     const EW = "lodCubePixelShader",
+       NW = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;\n#ifdef  … [truncated]
+     mW.c.ShadersStoreWGSL[EW] || (mW.c.ShadersStoreWGSL[EW] = NW);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/687.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/687.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dabb9a3a2c77e330d497ecfd37cf60a7187ecac3ff5c30e454963d9598bf52e)

#### 1. `bundles/bloxd.io/chunks/js/687.js` (Changed code · before: `L4-L18` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dabb9a3a2c77e330d497ecfd37cf60a7187ecac3ff5c30e454963d9598bf52eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dabb9a3a2c77e330d497ecfd37cf60a7187ecac3ff5c30e454963d9598bf52e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/687.js#L4) · [Before (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/687.js#L4-L18)

```diff
-   64091: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
-     });
-     var ye = He(40954);
-     He(45085), He(45091);
-     const be = "pbrUboDeclaration",
-       Me = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   64110: (ee, ie, He) => {
+   64583: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/687.js` (Changed code · before: `L20` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dabb9a3a2c77e330d497ecfd37cf60a7187ecac3ff5c30e454963d9598bf52eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dabb9a3a2c77e330d497ecfd37cf60a7187ecac3ff5c30e454963d9598bf52e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/687.js#L6) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/687.js#L20)

```diff
-       pbrPixelShader: () => WH
+       lodPixelShaderWGSL: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/687.js` (Changed code · before: `L22-L242` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dabb9a3a2c77e330d497ecfd37cf60a7187ecac3ff5c30e454963d9598bf52eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dabb9a3a2c77e330d497ecfd37cf60a7187ecac3ff5c30e454963d9598bf52e) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/687.js#L8-L11) · [Before (L22-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/687.js#L22-L242)

```diff
-     var ye = He(40954),
-       be = He(45277),
-       Me = He(45283),
-       Ke = He(45290),
-       Ue = He(45269);
-     const Fe = "pbrFragmentDeclaration",
-       Je = "uniform vec4 vEyePosition;uniform vec3 vReflectionColor;uniform vec4 vAlbedoColor;uniform float baseWeight;uniform float baseDiffuseRoughness;uniform vec4 vLightingIntensity;uniform vec4 vReflectivityColor;uniform vec4 vMetallicReflectanceFactors;uniform vec3 vEmissiv … [truncated]
-     ye.d.IncludesShadersStore[Fe] || (ye.d.IncludesShadersStore[Fe] = Je);
-     const oe = {
-       name: Fe,
-       shader: Je
-     };
-     var Re = He(45085),
-       ke = He(45091),
-       qe = He(64091),
-       fe = He(45130),
- ... (205 more removed lines; see GitHub link above)
+     var mW = OW(41392);
+     const EW = "lodPixelShader",
+       NW = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureL … [truncated]
+     mW.c.ShadersStoreWGSL[EW] || (mW.c.ShadersStoreWGSL[EW] = NW);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/688.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/688.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2a9b2e032236359931612a0d6ed259e62182440f1a2388d10134639c3c204eee)

#### 1. `bundles/bloxd.io/chunks/js/688.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2a9b2e032236359931612a0d6ed259e62182440f1a2388d10134639c3c204eeeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2a9b2e032236359931612a0d6ed259e62182440f1a2388d10134639c3c204eee) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/688.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/688.js#L4-L6)

```diff
-   64101: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke
+   64585: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       passPixelShaderWGSL: () => PW
```

#### 2. `bundles/bloxd.io/chunks/js/688.js` (Changed code · before: `L8-L195` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2a9b2e032236359931612a0d6ed259e62182440f1a2388d10134639c3c204eeeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2a9b2e032236359931612a0d6ed259e62182440f1a2388d10134639c3c204eee) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/688.js#L8-L11) · [Before (L8-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/688.js#L8-L195)

```diff
-     var ye = He(40954);
-     const be = "harmonicsFunctions",
-       Me = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   64147: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
-     const be = "hdrFilteringFunctions",
-       Me = "#if NUM_SAMPLES\n#if NUM_SAMPLES>0\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\nprecision highp int;float radicalInverse_VdC(uint bits)\n{bits=(bits<<16u) | (bits>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x3333333 … [truncated]
- ... (172 more removed lines; see GitHub link above)
+     var mW = OW(41392);
+     const EW = "passPixelShader",
+       NW = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input. … [truncated]
+     mW.c.ShadersStoreWGSL[EW] || (mW.c.ShadersStoreWGSL[EW] = NW);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/689.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/689.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d10ea7bcadb2ecc0a5029f129ab782cf5bf3462e665a5399f5eaaa38d36c01a)

#### 1. `bundles/bloxd.io/chunks/js/689.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d10ea7bcadb2ecc0a5029f129ab782cf5bf3462e665a5399f5eaaa38d36c01aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d10ea7bcadb2ecc0a5029f129ab782cf5bf3462e665a5399f5eaaa38d36c01a) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/689.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/689.js#L4-L6)

```diff
-   64101: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke
+   64588: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       passPixelShader: () => PW
```

#### 2. `bundles/bloxd.io/chunks/js/689.js` (Changed code · before: `L8-L115` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d10ea7bcadb2ecc0a5029f129ab782cf5bf3462e665a5399f5eaaa38d36c01aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d10ea7bcadb2ecc0a5029f129ab782cf5bf3462e665a5399f5eaaa38d36c01a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/689.js#L8-L11) · [Before (L8-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/689.js#L8-L115)

```diff
-     var ye = He(40954);
-     const be = "harmonicsFunctions",
-       Me = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   64304: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
-     He(45085), He(45091);
-     const be = "openpbrUboDeclaration",
- ... (92 more removed lines; see GitHub link above)
+     var mW = OW(41392);
+     const EW = "passPixelShader",
+       NW = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
+     mW.c.ShadersStore[EW] || (mW.c.ShadersStore[EW] = NW);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/690.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/690.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-87542b2f174b36593b2e8ee90c636ff5f066d21887ee5edb430c04a3513ad421)

#### 1. `bundles/bloxd.io/chunks/js/690.js` (Changed code · before: `L4-L18` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-87542b2f174b36593b2e8ee90c636ff5f066d21887ee5edb430c04a3513ad421R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-87542b2f174b36593b2e8ee90c636ff5f066d21887ee5edb430c04a3513ad421) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/690.js#L4) · [Before (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/690.js#L4-L18)

```diff
-   64188: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
-     });
-     var ye = He(40954);
-     He(45438), He(45447);
-     const be = "pbrUboDeclaration",
-       Me = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   64209: (ee, ie, He) => {
+   64592: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/690.js` (Changed code · before: `L20` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-87542b2f174b36593b2e8ee90c636ff5f066d21887ee5edb430c04a3513ad421R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-87542b2f174b36593b2e8ee90c636ff5f066d21887ee5edb430c04a3513ad421) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/690.js#L6) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/690.js#L20)

```diff
-       pbrPixelShaderWGSL: () => pH
+       passCubePixelShaderWGSL: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/690.js` (Changed code · before: `L22-L222` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-87542b2f174b36593b2e8ee90c636ff5f066d21887ee5edb430c04a3513ad421R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-87542b2f174b36593b2e8ee90c636ff5f066d21887ee5edb430c04a3513ad421) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/690.js#L8-L11) · [Before (L22-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/690.js#L22-L222)

```diff
-     var ye = He(40954),
-       be = He(45630),
-       Me = He(45639),
-       Ke = He(45648),
-       Ue = He(45438),
-       Fe = He(45447),
-       Je = He(64188),
-       oe = He(45488),
-       Re = He(64216),
-       ke = He(45651),
-       qe = He(45670);
-     const fe = "samplerFragmentAlternateDeclaration",
-       Te = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     ye.d.IncludesShadersStoreWGSL[fe] || (ye.d.IncludesShadersStoreWGSL[fe] = Te);
-     const pe = {
-       name: fe,
- ... (185 more removed lines; see GitHub link above)
+     var mW = OW(41392);
+     const EW = "passCubePixelShader",
+       NW = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=tex … [truncated]
+     mW.c.ShadersStoreWGSL[EW] || (mW.c.ShadersStoreWGSL[EW] = NW);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/691.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/691.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-28f03ec08affa5218e7d5782ce2115edf4c5db3b3fec8d1add86aef607be5069)

#### 1. `bundles/bloxd.io/chunks/js/691.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-28f03ec08affa5218e7d5782ce2115edf4c5db3b3fec8d1add86aef607be5069R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-28f03ec08affa5218e7d5782ce2115edf4c5db3b3fec8d1add86aef607be5069) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/691.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/691.js#L4-L6)

```diff
-   64203: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
+   64598: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       passCubePixelShader: () => PW
```

#### 2. `bundles/bloxd.io/chunks/js/691.js` (Changed code · before: `L8-L210` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-28f03ec08affa5218e7d5782ce2115edf4c5db3b3fec8d1add86aef607be5069R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-28f03ec08affa5218e7d5782ce2115edf4c5db3b3fec8d1add86aef607be5069) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/691.js#L8-L11) · [Before (L8-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/691.js#L8-L210)

```diff
-     var ye = He(40954);
-     const be = "harmonicsFunctions",
-       Me = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   64262: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
-     const be = "hdrFilteringFunctions",
-       Me = "#ifdef NUM_SAMPLES\n#if NUM_SAMPLES>0\nfn radicalInverse_VdC(value: u32)->f32 \n{var bits=(value<<16u) | (value>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x33333333u)<<2u) | ((bits & 0xCCCCCCCCu)>>2u);bits=((bits & 0x0F0F0F0Fu)<< … [truncated]
- ... (187 more removed lines; see GitHub link above)
+     var mW = OW(41392);
+     const EW = "passCubePixelShader",
+       NW = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(te … [truncated]
+     mW.c.ShadersStore[EW] || (mW.c.ShadersStore[EW] = NW);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/692.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/692.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1435693f4cc20d388defa350c348f322b677a25b911bfa1cb9119a5b231a0ff)

#### 1. `bundles/bloxd.io/chunks/js/692.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1435693f4cc20d388defa350c348f322b677a25b911bfa1cb9119a5b231a0ffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1435693f4cc20d388defa350c348f322b677a25b911bfa1cb9119a5b231a0ff) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/692.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/692.js#L4-L6)

```diff
-   64203: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
+   64634: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       fxaaPixelShaderWGSL: () => PW
```

#### 2. `bundles/bloxd.io/chunks/js/692.js` (Changed code · before: `L8-L88` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1435693f4cc20d388defa350c348f322b677a25b911bfa1cb9119a5b231a0ffR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1435693f4cc20d388defa350c348f322b677a25b911bfa1cb9119a5b231a0ff) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/692.js#L8-L11) · [Before (L8-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/692.js#L8-L88)

```diff
-     var ye = He(40954);
-     const be = "harmonicsFunctions",
-       Me = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   64348: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
-     He(45438), He(45447);
-     const be = "openpbrUboDeclaration",
- ... (65 more removed lines; see GitHub link above)
+     var mW = OW(41392);
+     const EW = "fxaaPixelShader",
+       NW = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform texelSize: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying samp … [truncated]
+     mW.c.ShadersStoreWGSL[EW] || (mW.c.ShadersStoreWGSL[EW] = NW);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/693.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/693.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7389a33b770d65171220dd9c3b6e0f33b5b17851f9d184c6f952cbd54484c24c)

#### 1. `bundles/bloxd.io/chunks/js/693.js` (Changed code · before: `L4-L96` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7389a33b770d65171220dd9c3b6e0f33b5b17851f9d184c6f952cbd54484c24cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7389a33b770d65171220dd9c3b6e0f33b5b17851f9d184c6f952cbd54484c24c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/693.js#L4) · [Before (L4-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/693.js#L4-L96)

```diff
-   64317: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
-     const be = "openpbrDielectricReflectance",
-       Me = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   64319: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
- ... (77 more removed lines; see GitHub link above)
+   64641: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/693.js` (Changed code · before: `L98` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7389a33b770d65171220dd9c3b6e0f33b5b17851f9d184c6f952cbd54484c24cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7389a33b770d65171220dd9c3b6e0f33b5b17851f9d184c6f952cbd54484c24c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/693.js#L6) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/693.js#L98)

```diff
-       openpbrPixelShader: () => JH
+       fxaaVertexShaderWGSL: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/693.js` (Changed code · before: `L100-L285` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7389a33b770d65171220dd9c3b6e0f33b5b17851f9d184c6f952cbd54484c24cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7389a33b770d65171220dd9c3b6e0f33b5b17851f9d184c6f952cbd54484c24c) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/693.js#L8-L11) · [Before (L100-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/693.js#L100-L285)

```diff
-     var ye = He(40954),
-       be = He(45277),
-       Me = He(45283),
-       Ke = He(45290),
-       Ue = He(64313),
-       Fe = He(45269);
-     const Je = "openpbrFragmentDeclaration",
-       oe = "uniform float vBaseWeight;uniform vec4 vBaseColor;uniform float vBaseDiffuseRoughness;uniform vec4 vReflectanceInfo;uniform vec4 vSpecularColor;uniform vec3 vSpecularAnisotropy;uniform float vTransmissionWeight;uniform vec3 vTransmissionColor;uniform float vTransmissi … [truncated]
-     ye.d.IncludesShadersStore[Je] || (ye.d.IncludesShadersStore[Je] = oe);
-     const Re = {
-       name: Je,
-       shader: oe
-     };
-     var ke = He(45085),
-       qe = He(45091),
-       fe = He(64304),
- ... (170 more removed lines; see GitHub link above)
+     var mW = OW(41392);
+     const EW = "fxaaVertexShader",
+       NW = "attribute position: vec2f;uniform texelSize: vec2f;varying vUV: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f … [truncated]
+     mW.c.ShadersStoreWGSL[EW] || (mW.c.ShadersStoreWGSL[EW] = NW);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/694.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/694.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-95b25724e0207a6a788023efd4a71566cbe9ec33535d1d12449a94feba8e6d13)

#### 1. `bundles/bloxd.io/chunks/js/694.js` (Changed code · before: `L4-L83` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-95b25724e0207a6a788023efd4a71566cbe9ec33535d1d12449a94feba8e6d13R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-95b25724e0207a6a788023efd4a71566cbe9ec33535d1d12449a94feba8e6d13) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/694.js#L4) · [Before (L4-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/694.js#L4-L83)

```diff
-   64356: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke
-     });
-     var ye = He(40954);
-     const be = "openpbrDielectricReflectance",
-       Me = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   64365: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
- ... (64 more removed lines; see GitHub link above)
+   64650: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/694.js` (Changed code · before: `L85` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-95b25724e0207a6a788023efd4a71566cbe9ec33535d1d12449a94feba8e6d13R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-95b25724e0207a6a788023efd4a71566cbe9ec33535d1d12449a94feba8e6d13) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/694.js#L6) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/694.js#L85)

```diff
-       openpbrPixelShaderWGSL: () => UH
+       fxaaPixelShader: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/694.js` (Changed code · before: `L87-L266` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-95b25724e0207a6a788023efd4a71566cbe9ec33535d1d12449a94feba8e6d13R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-95b25724e0207a6a788023efd4a71566cbe9ec33535d1d12449a94feba8e6d13) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/694.js#L8-L11) · [Before (L87-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/694.js#L87-L266)

```diff
-     var ye = He(40954),
-       be = He(45630),
-       Me = He(45639),
-       Ke = He(45648),
-       Ue = He(45438),
-       Fe = He(45447),
-       Je = He(64348),
-       oe = He(45488),
-       Re = He(64216),
-       ke = He(45651),
-       qe = He(45670),
-       fe = He(64222);
-     const Te = "openpbrFragmentSamplersDeclaration",
-       pe = "#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_COLOR,_VARYINGNAME_,BaseColor,_SAMPLERNAME_,baseColor)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFIN … [truncated]
-     ye.d.IncludesShadersStoreWGSL[Te] || (ye.d.IncludesShadersStoreWGSL[Te] = pe);
-     const Xe = {
- ... (164 more removed lines; see GitHub link above)
+     var mW = OW(41392);
+     const EW = "fxaaPixelShader",
+       NW = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\nuniform sampler2D textureSampler;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS … [truncated]
+     mW.c.ShadersStore[EW] || (mW.c.ShadersStore[EW] = NW);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/695.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/695.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-39e8a4dddfb5ed0f32113aa9a3e7314ba227b3346303013699ee78e52f42ce9f)

#### 1. `bundles/bloxd.io/chunks/js/695.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-39e8a4dddfb5ed0f32113aa9a3e7314ba227b3346303013699ee78e52f42ce9fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-39e8a4dddfb5ed0f32113aa9a3e7314ba227b3346303013699ee78e52f42ce9f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/695.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/695.js#L4)

```diff
-   64416: (ee, ie, He) => {
+   64659: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/695.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-39e8a4dddfb5ed0f32113aa9a3e7314ba227b3346303013699ee78e52f42ce9fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-39e8a4dddfb5ed0f32113aa9a3e7314ba227b3346303013699ee78e52f42ce9f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/695.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/695.js#L6)

```diff
-       textureMergerPixelShaderWGSL: () => Ke
+       fxaaVertexShader: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/695.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-39e8a4dddfb5ed0f32113aa9a3e7314ba227b3346303013699ee78e52f42ce9fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-39e8a4dddfb5ed0f32113aa9a3e7314ba227b3346303013699ee78e52f42ce9f) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/695.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/695.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "textureMergerPixelShader",
-       Me = "#ifdef USE_TEXTURE0\nvar inputTexture0Sampler: sampler;var inputTexture0: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE1\nvar inputTexture1Sampler: sampler;var inputTexture1: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE2\nvar inputTexture2Sampler: sampler;var inputText … [truncated]
-     ye.d.ShadersStoreWGSL[be] || (ye.d.ShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "fxaaVertexShader",
+       NW = "attribute vec2 position;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sample … [truncated]
+     mW.c.ShadersStore[EW] || (mW.c.ShadersStore[EW] = NW);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/696.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/696.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b0b40260ea1a8f55d7ce3db63e7db8af692b2b78bcbb5fe6b6650be6a35e94e)

#### 1. `bundles/bloxd.io/chunks/js/696.js` (Changed code · before: `L4` → after: `L4-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b0b40260ea1a8f55d7ce3db63e7db8af692b2b78bcbb5fe6b6650be6a35e94eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b0b40260ea1a8f55d7ce3db63e7db8af692b2b78bcbb5fe6b6650be6a35e94e) · [After (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/696.js#L4-L18) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/696.js#L4)

```diff
-   64424: (ee, ie, He) => {
+   64673: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
+     OW(54061), OW(54070);
+     const EW = "pbrUboDeclaration",
+       NW = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   64686: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/696.js` (Changed code · before: `L6` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b0b40260ea1a8f55d7ce3db63e7db8af692b2b78bcbb5fe6b6650be6a35e94eR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b0b40260ea1a8f55d7ce3db63e7db8af692b2b78bcbb5fe6b6650be6a35e94e) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/696.js#L20) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/696.js#L6)

```diff
-       textureMergerPixelShader: () => Ke
+       pbrPixelShader: () => yO
```

#### 3. `bundles/bloxd.io/chunks/js/696.js` (Changed code · before: `L8-L11` → after: `L22-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b0b40260ea1a8f55d7ce3db63e7db8af692b2b78bcbb5fe6b6650be6a35e94eR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b0b40260ea1a8f55d7ce3db63e7db8af692b2b78bcbb5fe6b6650be6a35e94e) · [After (L22-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/696.js#L22-L242) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/696.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "textureMergerPixelShader",
-       Me = "#ifdef USE_TEXTURE0\nuniform sampler2D inputTexture0;\n#endif\n#ifdef USE_TEXTURE1\nuniform sampler2D inputTexture1;\n#endif\n#ifdef USE_TEXTURE2\nuniform sampler2D inputTexture2;\n#endif\n#ifdef USE_TEXTURE3\nuniform sampler2D inputTexture3;\n#endif\n#ifdef RED_FROM_ … [truncated]
-     ye.d.ShadersStore[be] || (ye.d.ShadersStore[be] = Me);
+     var mW = OW(41392),
+       EW = OW(54254),
+       NW = OW(54257),
+       PW = OW(54265),
+       LW = OW(54252);
+     const cW = "pbrFragmentDeclaration",
+       wW = "uniform vec4 vEyePosition;uniform vec3 vReflectionColor;uniform vec4 vAlbedoColor;uniform float baseWeight;uniform float baseDiffuseRoughness;uniform vec4 vLightingIntensity;uniform vec4 vReflectivityColor;uniform vec4 vMetallicReflectanceFactors;uniform vec3 vEmissiv … [truncated]
+     mW.c.IncludesShadersStore[cW] || (mW.c.IncludesShadersStore[cW] = wW);
+     const tW = {
+       name: cW,
+       shader: wW
+     };
+     var ZW = OW(54061),
+       xW = OW(54070),
+       lW = OW(64673),
+       AW = OW(54116),
+ ... (205 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/697.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/697.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-95737ea1a8b0773a0d3b9d503ec590ab0dc03d36486a1af23d067f9a1a2f2c64)

#### 1. `bundles/bloxd.io/chunks/js/697.js` (Changed code · before: `L4-L11` → after: `L4-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-95737ea1a8b0773a0d3b9d503ec590ab0dc03d36486a1af23d067f9a1a2f2c64R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-95737ea1a8b0773a0d3b9d503ec590ab0dc03d36486a1af23d067f9a1a2f2c64) · [After (L4-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/697.js#L4-L195) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/697.js#L4-L11)

```diff
-   64427: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       proceduralVertexShaderWGSL: () => Ke
-     });
-     var ye = He(40954);
-     const be = "proceduralVertexShader",
-       Me = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInput … [truncated]
-     ye.d.ShadersStoreWGSL[be] || (ye.d.ShadersStoreWGSL[be] = Me);
+   64684: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "harmonicsFunctions",
+       NW = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   64739: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+ ... (176 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/698.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/698.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2e2c8119aadd402a99556f6b5aa27367f27fbde37e0084a1fcca560cc1bcaaa2)

#### 1. `bundles/bloxd.io/chunks/js/698.js` (Changed code · before: `L4` → after: `L4-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2e2c8119aadd402a99556f6b5aa27367f27fbde37e0084a1fcca560cc1bcaaa2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2e2c8119aadd402a99556f6b5aa27367f27fbde37e0084a1fcca560cc1bcaaa2) · [After (L4-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/698.js#L4-L44) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/698.js#L4)

```diff
-   64431: (ee, ie, He) => {
+   64684: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "harmonicsFunctions",
+       NW = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   64900: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+ ... (25 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/698.js` (Changed code · before: `L6` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2e2c8119aadd402a99556f6b5aa27367f27fbde37e0084a1fcca560cc1bcaaa2R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2e2c8119aadd402a99556f6b5aa27367f27fbde37e0084a1fcca560cc1bcaaa2) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/698.js#L46) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/698.js#L6)

```diff
-       proceduralVertexShader: () => Ke
+       openpbrVertexShader: () => ii
```

#### 3. `bundles/bloxd.io/chunks/js/698.js` (Changed code · before: `L8-L11` → after: `L48-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2e2c8119aadd402a99556f6b5aa27367f27fbde37e0084a1fcca560cc1bcaaa2R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2e2c8119aadd402a99556f6b5aa27367f27fbde37e0084a1fcca560cc1bcaaa2) · [After (L48-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/698.js#L48-L115) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/698.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "proceduralVertexShader",
-       Me = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#defi … [truncated]
-     ye.d.ShadersStore[be] || (ye.d.ShadersStore[be] = Me);
+     var mW = OW(41392);
+     const EW = "sceneVertexDeclaration",
+       NW = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     };
+     var LW = OW(54054);
+     const cW = "openpbrVertexDeclaration",
+       wW = "#include<sceneVertexDeclaration>\n#ifdef BASE_COLOR\nuniform vec2 vBaseColorInfos;uniform mat4 baseColorMatrix;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBaseWeightInfos;\n#endif\nuniform float vBaseDiffuseRoughness;\n#ifdef BASE_DIFFUSE … [truncated]
+     mW.c.IncludesShadersStore[cW] || (mW.c.IncludesShadersStore[cW] = wW);
+     const tW = {
+       name: cW,
+       shader: wW
+     };
+ ... (52 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/699.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/699.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82b9945c5fcdc9bfa9b9047165fa6b7309340e642b8e01a69509ed942f6364f6)

#### 1. `bundles/bloxd.io/chunks/js/699.js` (Changed code · before: `L4` → after: `L4-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82b9945c5fcdc9bfa9b9047165fa6b7309340e642b8e01a69509ed942f6364f6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82b9945c5fcdc9bfa9b9047165fa6b7309340e642b8e01a69509ed942f6364f6) · [After (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/699.js#L4-L18) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/699.js#L4)

```diff
-   64447: (ee, ie, He) => {
+   64774: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
+     OW(54392), OW(54394);
+     const EW = "pbrUboDeclaration",
+       NW = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   64791: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/699.js` (Changed code · before: `L6` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82b9945c5fcdc9bfa9b9047165fa6b7309340e642b8e01a69509ed942f6364f6R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82b9945c5fcdc9bfa9b9047165fa6b7309340e642b8e01a69509ed942f6364f6) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/699.js#L20) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/699.js#L6)

```diff
-       greasedLinePixelShaderWGSL: () => Ke
+       pbrPixelShaderWGSL: () => jO
```

#### 3. `bundles/bloxd.io/chunks/js/699.js` (Changed code · before: `L8-L11` → after: `L22-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82b9945c5fcdc9bfa9b9047165fa6b7309340e642b8e01a69509ed942f6364f6R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82b9945c5fcdc9bfa9b9047165fa6b7309340e642b8e01a69509ed942f6364f6) · [After (L22-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/699.js#L22-L222) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/699.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "greasedLinePixelShader",
-       Me = "var grlColors: texture_2d<f32>;var grlColorsSampler: sampler;uniform grlUseColors: f32;uniform grlUseDash: f32;uniform grlDashArray: f32;uniform grlDashOffset: f32;uniform grlDashRatio: f32;uniform grlVisibility: f32;uniform grlColorsWidth: f32;uniform grl_colorModeAn … [truncated]
-     ye.d.ShadersStoreWGSL[be] || (ye.d.ShadersStoreWGSL[be] = Me);
+     var mW = OW(41392),
+       EW = OW(54586),
+       NW = OW(54588),
+       PW = OW(54592),
+       LW = OW(54392),
+       cW = OW(54394),
+       wW = OW(64774),
+       tW = OW(54432),
+       ZW = OW(64799),
+       xW = OW(54595),
+       lW = OW(54616);
+     const AW = "samplerFragmentAlternateDeclaration",
+       bW = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
+     mW.c.IncludesShadersStoreWGSL[AW] || (mW.c.IncludesShadersStoreWGSL[AW] = bW);
+     const jW = {
+       name: AW,
+ ... (185 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/700.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/700.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f538481869bc52c5221d7e43c33d8db6d6b9f3725ae62736f900544124b0b395)

#### 1. `bundles/bloxd.io/chunks/js/700.js` (Changed code · before: `L4-L11` → after: `L4-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f538481869bc52c5221d7e43c33d8db6d6b9f3725ae62736f900544124b0b395R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f538481869bc52c5221d7e43c33d8db6d6b9f3725ae62736f900544124b0b395) · [After (L4-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/700.js#L4-L210) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/700.js#L4-L11)

```diff
-   64461: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       greasedLinePixelShader: () => Ke
-     });
-     var ye = He(40954);
-     const be = "greasedLinePixelShader",
-       Me = "precision highp float;uniform sampler2D grlColors;uniform float grlUseColors;uniform float grlUseDash;uniform float grlDashArray;uniform float grlDashOffset;uniform float grlDashRatio;uniform float grlVisibility;uniform float grlColorsWidth;uniform vec2 grl_colorModeA … [truncated]
-     ye.d.ShadersStore[be] || (ye.d.ShadersStore[be] = Me);
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
+       shader: NW
+     }
+   },
+   64840: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+ ... (191 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/701.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/701.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e5312c46d1ed72038997264c83cbfc97d1d1625aff02828564fee45e2fb9438e)

#### 1. `bundles/bloxd.io/chunks/js/701.js` (Changed code · before: `L4` → after: `L4-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e5312c46d1ed72038997264c83cbfc97d1d1625aff02828564fee45e2fb9438eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e5312c46d1ed72038997264c83cbfc97d1d1625aff02828564fee45e2fb9438e) · [After (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/701.js#L4-L31) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/701.js#L4)

```diff
-   64466: (ee, ie, He) => {
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
+       shader: NW
+     }
+   },
+   64956: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+ ... (12 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/701.js` (Changed code · before: `L6-L7` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e5312c46d1ed72038997264c83cbfc97d1d1625aff02828564fee45e2fb9438eR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e5312c46d1ed72038997264c83cbfc97d1d1625aff02828564fee45e2fb9438e) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/701.js#L33) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/701.js#L6-L7)

```diff
-       rebuildScenePbrPipelines: () => Ue,
-       rebuildSceneRenderables: () => Fe
+       openpbrVertexShaderWGSL: () => aW
```

#### 3. `bundles/bloxd.io/chunks/js/701.js` (Changed code · before: `L9-L192` → after: `L35-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e5312c46d1ed72038997264c83cbfc97d1d1625aff02828564fee45e2fb9438eR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e5312c46d1ed72038997264c83cbfc97d1d1625aff02828564fee45e2fb9438e) · [After (L35-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/701.js#L35-L91) · [Before (L9-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/701.js#L9-L192)

```diff
-     var ye = He(44904),
-       be = (ee, ie) => ee.order - ie.order,
-       Me = 8,
-       Ke = ee => Fe(ee);
-     async function Ue(ee) {
-       let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       await Je(ee, "pbr", ie)
-     }
-     async function Fe(ee) {
-       await Je(ee, void 0, !1)
-     }
-     async function Je(ee, ie, Ue) {
-       const Fe = ee;
-       if (!Fe._built && !Ue) return;
-       const Je = Fe._lightListVersion ?? 0,
-         oe = Fe.surface.engine,
- ... (168 more removed lines; see GitHub link above)
+     var mW = OW(41392),
+       EW = OW(54392),
+       NW = OW(54394),
+       PW = OW(64956),
+       LW = OW(54405),
+       cW = OW(54432),
+       wW = OW(54407),
+       tW = OW(64779),
+       ZW = OW(54409),
+       xW = OW(54413),
+       lW = OW(54416),
+       AW = OW(54424),
+       bW = OW(54435),
+       jW = OW(64786);
+     const UW = "openpbrNormalMapVertexDeclaration",
+       kW = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+ ... (41 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/85.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/85.js` (1683 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20)

#### 1. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L4-L524` → after: `L4-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L4-L20) · [Before (L4-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L4-L524)

```diff
-   37869: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => ye
-     });
-     const ye = {
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
+   5727: (WW, iW) => {
+     iW.b = 8, iW.h = function(WW, iW, OW, mW) {
+       if (!Array.isArray(WW)) return !!WW;
+       iW -= Math.floor(iW), OW -= Math.floor(OW), mW -= Math.floor(mW);
+       for (var EW = 0; EW < WW.length; EW += 6)
+         if (iW >= WW[EW] && iW < WW[EW + 3] && OW >= WW[EW + 1] && OW < WW[EW + 4] && mW >= WW[EW + 2] && mW < WW[EW + 5]) return !0;
+       return !1
+     }, iW.d = function(WW) {
+       for (var iW = [], OW = 0; OW < WW.length; OW++) {
+         var mW = WW[OW];
+         if (2 !== mW.length || 3 !== mW[0].length || 3 !== mW[1].length) throw new Error("Subvoxel boxes must contain two three-dimensional bounds");
+         for (var EW = 0; EW < 3; EW++) {
+           var NW = mW[0][EW],
+             PW = mW[1][EW];
+           if (!Number.isInteger(NW) || !Number.isInteger(PW) || NW < 0 || PW > 8 || NW >= PW) throw new Error("Subvoxel bounds must be integers satisfying 0 <= start < end <= 8");
+           iW[6 * OW + EW] = NW / 8, iW[6 * OW + EW + 3] = PW / 8
+ ... (1 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L526-L527` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L22-L23) · [Before (L526-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L526-L527)

```diff
-     };
-     for (const be of Object.values(ye)) be.msPerRound = 60 / be.fireRate * 1e3, be.msPerRoundTouchScreen = void 0 !== be.fireRateWithHeldTouch ? 60 / be.fireRateWithHeldTouch * 1e3 : be.msPerRound, be.cadenceMs ??= be.msPerRound, be.altYVelocityInaccuracy ??= be.yVelocityInaccura … [truncated]
+       return iW
+     }
```

#### 3. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L529` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L25) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L529)

```diff
-   37875: (ee, ie, He) => {
+   5788: (WW, iW, OW) => {
```

#### 4. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L531` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L27-L28) · [Before (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L531)

```diff
-       b: () => Ke,
+       C: () => xW,
+       c: () => mW,
```

#### 5. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L534-L536` → after: `L31-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L31-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L31-L39) · [Before (L534-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L534-L536)

```diff
-       k: () => oe,
-       n: () => Ue,
-       o: () => pe
+       m: () => cW,
+       p: () => UW,
+       r: () => LW,
+       u: () => PW,
+       v: () => NW,
+       w: () => lW,
+       x: () => bW,
+       y: () => AW,
+       z: () => wW
```

#### 6. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L538-L541` → after: `L41-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L41-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L41-L46) · [Before (L538-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L538-L541)

```diff
-     var ye = He(347),
-       be = He(604),
-       Me = He(349);
-     const Ke = ["", "|meta|charging2", "|meta|charging3", "|meta|charging4"];
+     const mW = 47 == OW.j ? ["Conveyor Belt", "Splitter", "Sorting Gate", "Belt Loader", "Fast Belt", "Belt Lift", "Belt Drop", "Belt Tunnel", "Express Belt", "Fast Loader"] : null,
+       EW = .002,
+       NW = 2,
+       PW = 3,
+       LW = .5,
+       cW = 200;
```

#### 7. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L543-L544` → after: `L48-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L48-L50) · [Before (L543-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L543-L544)

```diff
-     function Ue(ee, ie) {
-       return "" === ie ? ee : `${ee} ${ie}`
+     function wW(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : EW;
+       return Math.max(0, Math.min((OW - WW) * mW, iW))
```

#### 8. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L547-L552` → after: `L53-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L53-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L53-L61) · [Before (L547-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L547-L552)

```diff
-     function Fe(ee, ie, He, be) {
-       const Me = ee.replace((0, ye.xe)(ie.material), (0, ye.xe)(He));
-       if (ie.kind === be || "" === ie.kind) return Me;
-       const Ke = (0, ye.xe)(ie.kind);
-       if (!Me.includes(Ke)) throw new Error(`Cannot name assets for "${Ue(He,be)}": "${Me}" has no "${Ke}" to replace`);
-       return Me.replace(Ke, (0, ye.xe)(be))
+     function tW(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : EW;
+       const NW = [];
+       let PW = iW;
+       for (const EW of WW) {
+         const WW = wW(EW.at, PW, OW, mW);
+         NW.push(WW), PW = WW - LW
+       }
+       return NW
```

#### 9. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L555-L559` → after: `L64-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L64-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L64-L66) · [Before (L555-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L555-L559)

```diff
-     function Je(ee) {
-       return ee.creativeKinds ? ee.creativeKinds.flatMap((ie => ee.materials.map((ee => Ue(ee, ie))))) : ee.materials.flatMap((ie => ee.kinds.filter((ie => {
-         var He;
-         return !(null !== (He = ee.hiddenKinds) && void 0 !== He && He.includes(ie))
-       })).map((ee => Ue(ie, ee)))))
+     function ZW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : EW;
+       return 0 === WW.length ? 1 / 0 : WW[0].at + iW / OW
```

#### 10. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L562-L563` → after: `L69-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L69-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L69-L76) · [Before (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L562-L563)

```diff
-     function oe(ee, ie) {
-       return ee.flatMap((ee => ee.kinds.includes(ie) ? ee.materials.map((ee => Ue(ee, ie))) : []))
+     function xW(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : EW,
+         NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
+       const PW = tW(WW, iW, OW, mW),
+         [LW] = WW.splice(NW, 1);
+       return PW.splice(NW, 1), WW.forEach(((WW, iW) => {
+         WW.at = OW - PW[iW] / mW
+       })), LW
```

#### 11. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L565-L578` → after: `L78-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L78-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L78-L83) · [Before (L565-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L565-L578)

```diff
-     const Re = {
-       name: "diamondVariants",
-       materials: Me.o,
-       kinds: Me.n.map((ee => ee.trimStart())),
-       inheritsFrom: ee => ({
-         material: "Diamond",
-         kind: ee
-       }),
-       hiddenKinds: ["Crossbow Charged"],
-       creativeKinds: ["", "Fragment", "Pickaxe", "Axe", "Spade", "Hoe", "Sword", "Bow", "Crossbow", "Spear", "Dagger", "Club", "Mace", "Whip", "Boomerang", "Helmet", "Chestplate", "Gauntlets", "Leggings", "Boots"],
-       description: (ee, ie) => {
-         if ("Fragment" === ie) return {
-           translationKey: "Magmasteel" === ee ? "item:forgeFragmentDescription" : "item:elementalShardDescription"
-         }
+ 
+     function lW(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : EW;
+       for (let EW = ZW(WW, iW, mW); EW <= OW; EW = ZW(WW, iW, mW)) {
+         const OW = xW(WW, iW, EW, mW);
+         OW.at = EW, WW.push(OW)
```

#### 12. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L580` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L85) · [Before (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L580)

```diff
-     };
+     }
```

#### 13. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L582` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L87) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L582)

```diff
-     function ke(ee) {
+     function AW(WW, iW, OW) {
```

#### 14. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L584` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L89-L90) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L584)

```diff
-         translationKey: `item:${(0,ye.ve)(ee)}`
+         name: WW,
+         at: OW - iW / (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : EW)
```

#### 15. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L588-L595` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L131-L132) · [Before (L588-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L588-L595)

```diff
-         name: "decorativeArmour",
-         materials: Me.f,
-         kinds: be.b,
-         inheritsFrom: ee => ({
-           material: "Diamond",
-           kind: ee
-         }),
-         displayName: ke
+         "Belt Lift": 1,
+         "Belt Drop": -1
```

#### 16. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L598-L607` → after: `L154-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L154-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L154-L156) · [Before (L598-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L598-L607)

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
-         displayName: ke
+         leftRight: "",
+         leftFront: "|leftFront",
+         frontRight: "|frontRight"
```

#### 17. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L610-L611` → after: `L159-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L159-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L159-L161) · [Before (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L610-L611)

```diff
-         Staff: "Club",
-         Shard: "Fragment"
+         leftRight: ["right", "left"],
+         leftFront: ["left", "front"],
+         frontRight: ["front", "right"]
```

#### 18. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L613-L631` → after: `L163-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L163-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L163-L203) · [Before (L613-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L613-L631)

```diff
-       pe = [Re, qe, {
-         name: "elemental",
-         materials: Me.p,
-         kinds: ["Shard", "Sword", "Bow", "Crossbow", "Crossbow Charged", "Spear", "Dagger", "Club", "Mace", "Whip", "Staff", ...be.b],
-         inheritsFrom: ee => {
-           var ie;
-           return {
-             material: "Diamond",
-             kind: null !== (ie = Te[ee]) && void 0 !== ie ? ie : ee
-           }
-         },
-         hiddenKinds: ["Crossbow Charged"],
-         displayName: ke,
-         description: (ee, ie) => {
-           if ("Shard" === ie) return {
-             translationKey: "Sanguine" === ee || "Astral" === ee ? "item:forgeFragmentDescription" : "item:elementalShardDescription"
- ... (3 more removed lines; see GitHub link above)
+       bW = "|right";
+ 
+     function jW(WW) {
+       return WW.split("|")[0] !== ZW ? null : WW.endsWith(lW.leftFront) ? "leftFront" : WW.endsWith(lW.frontRight) ? "frontRight" : "leftRight"
+     }
+ 
+     function UW(WW, iW, OW) {
+       return function(WW) {
+         const iW = jW(WW);
+         return null === iW ? [] : AW[iW]
+       }(WW).map((WW => "right" === WW ? [OW, -iW] : "left" === WW ? [-OW, iW] : [iW, OW]))
+     }
+ 
+     function kW(WW) {
+       return WW.split("|")[0] === xW && WW.endsWith(bW)
+     }
+ ... (25 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L633` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L205) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L633)

```diff
-   37853: (ee, ie, He) => {
+   5725: (WW, iW, OW) => {
```

#### 20. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L636` → after: `L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L208) · [Before (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L636)

```diff
-       g: () => Ee,
+       f: () => qW,
```

#### 21. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L638-L641` → after: `L210-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L210-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L210-L215) · [Before (L638-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L638-L641)

```diff
-       m: () => Be,
-       o: () => te,
-       s: () => we,
-       v: () => de
+       l: () => BW,
+       p: () => fW,
+       t: () => RW,
+       x: () => CW,
+       y: () => dW,
+       z: () => oW
```

#### 22. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L643-L656` → after: `L217-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L217-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L217-L240) · [Before (L643-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L643-L656)

```diff
-     var ye = He(347),
-       be = He(10008),
-       Me = He(4861),
-       Ke = He(9961),
-       Ue = He(9985),
-       Fe = He(37862),
-       Je = He(37875),
-       oe = He(37883),
-       Re = He(37890);
-     const ke = 16,
-       qe = {
-         comboWindowMs: 800,
-         comboMultipliers: [.5, 2 / 3, 5 / 6, 1],
-         backstabAngle: 2 * Math.PI / 3
+     var mW = OW(5727);
+     if (47 == OW.j) var EW = OW(192);
+     var NW = OW(5733),
+       PW = OW(5797),
+       LW = OW(5801),
+       cW = OW(5721),
+       wW = OW(5747),
+       tW = OW(4372),
+       ZW = OW(344),
+       xW = OW(5174),
+       lW = OW(5766),
+       AW = OW(639),
+       bW = OW(2932),
+       jW = OW(5745),
+       UW = OW(5780);
+     if (47 == OW.j) var kW = OW(5807);
+ ... (8 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L658-L659` → after: `L242-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L242-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L242-L611) · [Before (L658-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L658-L659)

```diff
-       fe = {
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
+       oA: [14, 8, 11],
+       drops: null,
+       specialToolDrop: {
+         tool: [...ZW.je],
+ ... (354 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L661` → after: `L613-L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L613-L614) · [Before (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L661)

```diff
-             translationKey: "item:woodPickaxe"
+             translationKey: "item:colouredChalkBricksStairs",
+             params: iW
```

#### 25. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L669` → after: `L617-L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L617-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L617-L618) · [Before (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L669)

```diff
-             translationKey: "item:pickaxeDescription"
+             translationKey: "item:colouredChalkBricksStairsDescription",
+             params: iW
```

#### 26. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L671-L674` → after: `L620-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L620-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L620-L627) · [Before (L671-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L671-L674)

```diff
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 2,
-           level: 1
+           ttb: 850,
+           textureInfo: `chalk_bricks_${(0,ZW.ue)(WW)}`,
+           harvestType: "rock"
+         }
+       }))],
+       TW = {
+         displayName: {
+           translationKey: "item:chest"
```

#### 27. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L676-L691` → after: `L629-L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L629-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L629-L636) · [Before (L676-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L676-L691)

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
+       JW = {
+         Unloaded: {
+           ttb: 100,
+           textureInfo: "unloaded",
+           harvestType: "granule"
```

#### 28. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L693` → after: `L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L638) · [Before (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L693)

```diff
-         "Iron Pickaxe": {
+         Dirt: {
```

#### 29. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L695-L703` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L640) · [Before (L695-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L695-L703)

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

#### 30. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L705-L708` → after: `L642-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L642-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L642-L644) · [Before (L705-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L705-L708)

```diff
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 6,
-           level: 3
+           ttb: 600,
+           textureInfo: "dirt",
+           harvestType: "granule"
```

#### 31. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L710` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L646) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L710)

```diff
-         "Gold Pickaxe": {
+         "Messy Dirt": {
```

#### 32. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L712` → after: `L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L648) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L712)

```diff
-             translationKey: "item:goldPickaxe"
+             translationKey: "item:messyDirt"
```

#### 33. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L714-L725` → after: `L650-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L650-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L650-L652) · [Before (L714-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L714-L725)

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

#### 34. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L727` → after: `L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L654) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L727)

```diff
-         "Diamond Pickaxe": {
+         "Grass Block": {
```

#### 35. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L729-L737` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L656) · [Before (L729-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L729-L737)

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

#### 36. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L739-L742` → after: `L658-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L658-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L658-L665) · [Before (L739-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L739-L742)

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

#### 37. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L744` → after: `L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L667) · [Before (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L744)

```diff
-         "Moonstone Pickaxe": {
+         Sand: {
```

#### 38. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L746-L754` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L669) · [Before (L746-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L746-L754)

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

#### 39. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L756-L759` → after: `L671-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L671-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L671-L677) · [Before (L756-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L756-L759)

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

#### 40. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L761` → after: `L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L679) · [Before (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L761)

```diff
-         "Golem Pickaxe": {
+         Clay: {
```

#### 41. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L763-L771` → after: `L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L681) · [Before (L763-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L763-L771)

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

#### 42. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L773-L776` → after: `L683-L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L683-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L683-L685) · [Before (L773-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L773-L776)

```diff
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 8,
-           level: 5
+           ttb: 720,
+           textureInfo: "clay",
+           harvestType: "granule"
```

#### 43. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L778` → after: `L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L687) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L778)

```diff
-         "Wood Axe": {
+         Gravel: {
```

#### 44. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L780-L788` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L689) · [Before (L780-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L780-L788)

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

#### 45. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L790-L793` → after: `L691-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L691-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L691-L693) · [Before (L790-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L790-L793)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 2,
-           level: 1
+           ttb: 720,
+           textureInfo: "gravel",
+           harvestType: "granule"
```

#### 46. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L795` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L695) · [Before (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L795)

```diff
-         "Stone Axe": {
+         Snow: {
```

#### 47. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L797-L805` → after: `L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L697) · [Before (L797-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L797-L805)

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

#### 48. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L807-L810` → after: `L699-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L699-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L699-L705) · [Before (L807-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L807-L810)

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

#### 49. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L812` → after: `L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L707) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L812)

```diff
-         "Iron Axe": {
+         "Maple Log": {
```

#### 50. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L814-L822` → after: `L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L709) · [Before (L814-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L814-L822)

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

#### 51. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L824-L827` → after: `L711-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L711-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L711-L713) · [Before (L824-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L824-L827)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 6,
-           level: 3
+           ttb: 2400,
+           textureInfo: "log_maple",
+           harvestType: "wood"
```

#### 52. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L829` → after: `L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L715) · [Before (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L829)

```diff
-         "Gold Axe": {
+         "Pine Log": {
```

#### 53. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L831` → after: `L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L717) · [Before (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L831)

```diff
-             translationKey: "item:goldAxe"
+             translationKey: "item:pineLog"
```

#### 54. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L833-L844` → after: `L719-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L719-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L719-L721) · [Before (L833-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L833-L844)

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

#### 55. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L846` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L723) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L846)

```diff
-         "Diamond Axe": {
+         "Plum Log": {
```

#### 56. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L848-L856` → after: `L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L725) · [Before (L848-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L848-L856)

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

#### 57. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L858-L861` → after: `L727-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L727-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L727-L729) · [Before (L858-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L858-L861)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 8,
-           level: 5
+           ttb: 2400,
+           textureInfo: "log_plum",
+           harvestType: "wood"
```

#### 58. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L863` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L731) · [Before (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L863)

```diff
-         "Moonstone Axe": {
+         "Cedar Log": {
```

#### 59. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L865-L889` → after: `L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L733) · [Before (L865-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L865-L889)

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

#### 60. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L891-L894` → after: `L735-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L735-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L735-L737) · [Before (L891-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L891-L894)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 6,
-           level: 3
+           ttb: 2400,
+           textureInfo: "log_cedar",
+           harvestType: "wood"
```

#### 61. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L896` → after: `L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L739) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L896)

```diff
-         "Wood Spade": {
+         "Aspen Log": {
```

#### 62. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L898-L906` → after: `L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L741) · [Before (L898-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L898-L906)

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

#### 63. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L908-L911` → after: `L743-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L743-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L743-L745) · [Before (L908-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L908-L911)

```diff
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 2,
-           level: 1
+           ttb: 2400,
+           textureInfo: "log_aspen",
+           harvestType: "wood"
```

#### 64. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L913` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L747) · [Before (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L913)

```diff
-         "Stone Spade": {
+         "Jungle Log": {
```

#### 65. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L915-L923` → after: `L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L749) · [Before (L915-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L915-L923)

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

#### 66. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L925-L928` → after: `L751-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L751-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L751-L753) · [Before (L925-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L925-L928)

```diff
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 3.5,
-           level: 2
+           ttb: 2400,
+           textureInfo: "log_jungle",
+           harvestType: "wood"
```

#### 67. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L930` → after: `L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L755) · [Before (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L930)

```diff
-         "Iron Spade": {
+         "Maple Wood Planks": {
```

#### 68. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L932-L940` → after: `L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L757) · [Before (L932-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L932-L940)

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

#### 69. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L942-L945` → after: `L759-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L759-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L759-L761) · [Before (L942-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L942-L945)

```diff
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 6,
-           level: 3
+           ttb: 1800,
+           textureInfo: "planks_maple",
+           harvestType: "wood"
```

#### 70. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L947` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L763) · [Before (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L947)

```diff
-         "Gold Spade": {
+         "Aspen Wood Planks": {
```

#### 71. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L949` → after: `L765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L765) · [Before (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L949)

```diff
-             translationKey: "item:goldSpade"
+             translationKey: "item:aspenWoodPlanks"
```

#### 72. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L951-L962` → after: `L767-L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L767-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L767-L769) · [Before (L951-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L951-L962)

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

#### 73. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L964` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L771) · [Before (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L964)

```diff
-         "Diamond Spade": {
+         "Plum Wood Planks": {
```

#### 74. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L966-L974` → after: `L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L773) · [Before (L966-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L966-L974)

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

#### 75. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L976-L979` → after: `L775-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L775-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L775-L777) · [Before (L976-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L976-L979)

```diff
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 8,
-           level: 5
+           ttb: 1800,
+           textureInfo: "planks_plum",
+           harvestType: "wood"
```

#### 76. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L981` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L779) · [Before (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L981)

```diff
-         "Wood Sword": {
+         "Jungle Wood Planks": {
```

#### 77. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L983-L991` → after: `L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L781) · [Before (L983-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L983-L991)

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

#### 78. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L993-L996` → after: `L783-L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L783-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L783-L785) · [Before (L993-L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L993-L996)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 1
+           ttb: 1800,
+           textureInfo: "planks_jungle",
+           harvestType: "wood"
```

#### 79. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L998` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L787) · [Before (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L998)

```diff
-         "Stone Sword": {
+         "Pine Wood Planks": {
```

#### 80. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1000` → after: `L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L789) · [Before (L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1000)

```diff
-             translationKey: "item:stoneSword"
+             translationKey: "item:pineWoodPlanks"
```

#### 81. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1002-L1013` → after: `L791-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L791-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L791-L793) · [Before (L1002-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1002-L1013)

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

#### 82. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1015` → after: `L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L795) · [Before (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1015)

```diff
-         "Iron Sword": {
+         "Cedar Wood Planks": {
```

#### 83. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1017-L1025` → after: `L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L797) · [Before (L1017-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1017-L1025)

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

#### 84. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1027-L1030` → after: `L799-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L799-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L799-L801) · [Before (L1027-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1027-L1030)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 3
+           ttb: 1800,
+           textureInfo: "planks_cedar",
+           harvestType: "wood"
```

#### 85. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1032` → after: `L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L803) · [Before (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1032)

```diff
-         "Gold Sword": {
+         "Barkless Maple Log": {
```

#### 86. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1034` → after: `L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L805) · [Before (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1034)

```diff
-             translationKey: "item:goldSword"
+             translationKey: "item:barklessMapleLog"
```

#### 87. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1036-L1047` → after: `L807-L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L807-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L807-L809) · [Before (L1036-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1036-L1047)

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

#### 88. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1049` → after: `L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L811) · [Before (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1049)

```diff
-         "Diamond Sword": {
+         "Barkless Aspen Log": {
```

#### 89. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1051-L1059` → after: `L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L813) · [Before (L1051-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1051-L1059)

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

#### 90. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1061-L1064` → after: `L815-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L815-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L815-L817) · [Before (L1061-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1061-L1064)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5
+           ttb: 2e3,
+           textureInfo: "stripped_aspen_log",
+           harvestType: "wood"
```

#### 91. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1066` → after: `L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L819) · [Before (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1066)

```diff
-         "Knight Sword": {
+         "Barkless Plum Log": {
```

#### 92. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1068` → after: `L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L821) · [Before (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1068)

```diff
-             translationKey: "item:knightSword"
+             translationKey: "item:barklessPlumLog"
```

#### 93. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1070-L1082` → after: `L823-L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L823-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L823-L825) · [Before (L1070-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1070-L1082)

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

#### 94. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1084` → after: `L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L827) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1084)

```diff
-         "Wood Hoe": {
+         "Barkless Jungle Log": {
```

#### 95. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1086-L1094` → after: `L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L829) · [Before (L1086-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1086-L1094)

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

#### 96. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1096-L1099` → after: `L831-L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L831-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L831-L833) · [Before (L1096-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1096-L1099)

```diff
-           stackable: !1,
-           harvests: "cuttable",
-           multiplier: 2,
-           level: 1
+           ttb: 2e3,
+           textureInfo: "stripped_jungle_log",
+           harvestType: "wood"
```

#### 97. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1101` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L835) · [Before (L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1101)

```diff
-         "Stone Hoe": {
+         "Barkless Pine Log": {
```

#### 98. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1103-L1111` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L837) · [Before (L1103-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1103-L1111)

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

#### 99. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1113-L1116` → after: `L839-L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L839-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L839-L841) · [Before (L1113-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1113-L1116)

```diff
-           stackable: !1,
-           harvests: "cuttable",
-           multiplier: 2.5,
-           level: 2
+           ttb: 2e3,
+           textureInfo: "stripped_pine_log",
+           harvestType: "wood"
```

#### 100. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1118` → after: `L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L843) · [Before (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1118)

```diff
-         "Iron Hoe": {
+         "Barkless Cedar Log": {
```

#### 101. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1120` → after: `L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L845) · [Before (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1120)

```diff
-             translationKey: "item:ironHoe"
+             translationKey: "item:barklessCedarLog"
```

#### 102. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1122-L1133` → after: `L847-L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L847-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L847-L849) · [Before (L1122-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1122-L1133)

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

#### 103. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1135-L1150` → after: `L851-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L851-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L851-L854) · [Before (L1135-L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1135-L1150)

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

#### 104. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1152` → after: `L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L856) · [Before (L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1152)

```diff
-         "Diamond Hoe": {
+         Stone: {
```

#### 105. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1154` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L858) · [Before (L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1154)

```diff
-             translationKey: "item:diamondHoe"
+             translationKey: "item:stone"
```

#### 106. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1156-L1167` → after: `L860-L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L860-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L860-L867) · [Before (L1156-L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1156-L1167)

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

#### 107. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1169` → after: `L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L869) · [Before (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1169)

```diff
-         Flashlight: {
+         "Messy Stone": {
```

#### 108. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1171` → after: `L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L871) · [Before (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1171)

```diff
-             translationKey: "item:flashlight"
+             translationKey: "item:messyStone"
```

#### 109. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1173-L1185` → after: `L873-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L873-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L873-L880) · [Before (L1173-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1173-L1185)

```diff
-           description: {
-             translationKey: "item:flashlightDescription"
-           },
-           type: "Item",
-           textureInfo: "flashlight",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           mf: [15, 15, 15],
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

#### 110. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1187` → after: `L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L882) · [Before (L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1187)

```diff
-         "Mining Helmet": {
+         "Smooth Stone": {
```

#### 111. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1189` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L884) · [Before (L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1189)

```diff
-             translationKey: "item:miningHelmet"
+             translationKey: "item:smoothStone"
```

#### 112. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1191-L1202` → after: `L886-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L886-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L886-L888) · [Before (L1191-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1191-L1202)

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
-           mf: [15, 14, 11],
-           spotlightRange: 12,
-           spotlightConeAngle: 90
+           ttb: 1800,
+           textureInfo: "smooth_stone",
+           harvestType: "rock"
```

#### 113. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1204` → after: `L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L890) · [Before (L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1204)

```diff
-         "Wood Helmet": {
+         Diorite: {
```

#### 114. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1206` → after: `L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L892) · [Before (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1206)

```diff
-             translationKey: "item:woodHelmet"
+             translationKey: "item:diorite"
```

#### 115. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1208-L1213` → after: `L894-L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L894-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L894-L896) · [Before (L1208-L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1208-L1213)

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

#### 116. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1215` → after: `L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L898) · [Before (L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1215)

```diff
-         "Iron Helmet": {
+         "Smooth Diorite": {
```

#### 117. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1217` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L900) · [Before (L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1217)

```diff
-             translationKey: "item:ironHelmet"
+             translationKey: "item:smoothDiorite"
```

#### 118. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1219-L1224` → after: `L902-L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L902-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L902-L904) · [Before (L1219-L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1219-L1224)

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

#### 119. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1226` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L906) · [Before (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1226)

```diff
-         "Gold Helmet": {
+         Andesite: {
```

#### 120. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1228` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L908) · [Before (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1228)

```diff
-             translationKey: "item:goldHelmet"
+             translationKey: "item:andesite"
```

#### 121. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1230-L1235` → after: `L910-L912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L910-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L910-L912) · [Before (L1230-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1230-L1235)

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

#### 122. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1237` → after: `L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L914) · [Before (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1237)

```diff
-         "Diamond Helmet": {
+         "Smooth Andesite": {
```

#### 123. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1239` → after: `L916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L916) · [Before (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1239)

```diff
-             translationKey: "item:diamondHelmet"
+             translationKey: "item:smoothAndesite"
```

#### 124. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1241-L1246` → after: `L918-L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L918-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L918-L920) · [Before (L1241-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1241-L1246)

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

#### 125. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1248` → after: `L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L922) · [Before (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1248)

```diff
-         "Wood Chestplate": {
+         Granite: {
```

#### 126. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1250` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L924) · [Before (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1250)

```diff
-             translationKey: "item:woodChestplate"
+             translationKey: "item:granite"
```

#### 127. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1252-L1257` → after: `L926-L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L926-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L926-L928) · [Before (L1252-L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1252-L1257)

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

#### 128. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1259` → after: `L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L930) · [Before (L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1259)

```diff
-         "Iron Chestplate": {
+         "Smooth Granite": {
```

#### 129. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1261` → after: `L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L932) · [Before (L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1261)

```diff
-             translationKey: "item:ironChestplate"
+             translationKey: "item:smoothGranite"
```

#### 130. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1263-L1268` → after: `L934-L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L934-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L934-L936) · [Before (L1263-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1263-L1268)

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

#### 131. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1270` → after: `L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L938) · [Before (L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1270)

```diff
-         "Gold Chestplate": {
+         Sandstone: {
```

#### 132. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1272` → after: `L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L940) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1272)

```diff
-             translationKey: "item:goldChestplate"
+             translationKey: "item:sandstone"
```

#### 133. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1274-L1279` → after: `L942-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L942-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L942-L944) · [Before (L1274-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1274-L1279)

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

#### 134. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1281` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L946) · [Before (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1281)

```diff
-         "Diamond Chestplate": {
+         Yellowstone: {
```

#### 135. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1283` → after: `L948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L948) · [Before (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1283)

```diff
-             translationKey: "item:diamondChestplate"
+             translationKey: "item:yellowstone"
```

#### 136. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1285-L1290` → after: `L950-L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L950-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L950-L952) · [Before (L1285-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1285-L1290)

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

#### 137. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1292` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L954) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1292)

```diff
-         "Fur Chestplate": {
+         "Coal Ore": {
```

#### 138. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1294` → after: `L956-L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L956-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L956-L967) · [Before (L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1294)

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
+             "Golem Pickaxe": xW.p
```

#### 139. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1301` → after: `L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L970) · [Before (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1301)

```diff
-             translationKey: "item:furChestplateDescription"
+             translationKey: "item:coalOreDescription"
```

#### 140. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1303-L1305` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L972) · [Before (L1303-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1303-L1305)

```diff
-           stackable: !1,
-           armourReduction: .22,
-           knockbackReduction: 1
+           onMinedAura: 5
```

#### 141. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1307` → after: `L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L974) · [Before (L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1307)

```diff
-         "Wood Leggings": {
+         "Iron Ore": {
```

#### 142. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1309` → after: `L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L976) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1309)

```diff
-             translationKey: "item:woodLeggings"
+             translationKey: "item:ironOre"
```

#### 143. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1311-L1320` → after: `L978-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L978-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L978-L984) · [Before (L1311-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1311-L1320)

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

#### 144. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1322-L1331` → after: `L986-L987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L986-L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L986-L987) · [Before (L1322-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1322-L1331)

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
+             "Golem Pickaxe": xW.p
```

#### 145. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1333-L1338` → after: `L989-L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L989-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L989-L990) · [Before (L1333-L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1333-L1338)

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

#### 146. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1340` → after: `L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L992) · [Before (L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1340)

```diff
-         "Diamond Leggings": {
+         "Gold Ore": {
```

#### 147. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1342` → after: `L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L994) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1342)

```diff
-             translationKey: "item:diamondLeggings"
+             translationKey: "item:goldOre"
```

#### 148. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1344-L1353` → after: `L996-L1002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L996-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L996-L1002) · [Before (L1344-L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1344-L1353)

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

#### 149. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1355-L1364` → after: `L1004-L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1004-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1004-L1005) · [Before (L1355-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1355-L1364)

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
+             "Golem Pickaxe": xW.p
```

#### 150. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1366-L1371` → after: `L1007-L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1007-L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1007-L1009) · [Before (L1366-L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1366-L1371)

```diff
-           type: "Armour",
-           textureInfo: "iron_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           harvestLevel: 3,
+           onMinedAura: 30,
+           oA: [4, 4, 0]
```

#### 151. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1373` → after: `L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1011) · [Before (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1373)

```diff
-         "Gold Boots": {
+         "Lapis Lazuli Ore": {
```

#### 152. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1375` → after: `L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1013) · [Before (L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1375)

```diff
-             translationKey: "item:goldBoots"
+             translationKey: "item:lapisLazuliOre"
```

#### 153. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1377-L1382` → after: `L1015-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1015-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1015-L1019) · [Before (L1377-L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1377-L1382)

```diff
-           type: "Armour",
-           textureInfo: "golden_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .09
+           ttb: 4200,
+           textureInfo: "lapis_ore",
+           harvestType: "rock",
+           harvestLevel: 3,
+           oA: [0, 0, 2]
```

#### 154. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1384` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1021) · [Before (L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1384)

```diff
-         "Diamond Boots": {
+         "Emerald Ore": {
```

#### 155. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1386` → after: `L1023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1023) · [Before (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1386)

```diff
-             translationKey: "item:diamondBoots"
+             translationKey: "item:emeraldOre"
```

#### 156. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1388-L1393` → after: `L1025-L1029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1025-L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1025-L1029) · [Before (L1388-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1388-L1393)

```diff
-           type: "Armour",
-           textureInfo: "diamond_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 4500,
+           textureInfo: "emerald_ore",
+           harvestType: "rock",
+           harvestLevel: 3,
+           oA: [1, 3, 1]
```

#### 157. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1395` → after: `L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1031) · [Before (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1395)

```diff
-         "Spiked Boots": {
+         "Diamond Ore": {
```

#### 158. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1397` → after: `L1033-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1033-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1033-L1045) · [Before (L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1397)

```diff
-             translationKey: "item:spikedBoots"
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
+             "Golem Pickaxe": xW.p
```

#### 159. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1404` → after: `L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1048) · [Before (L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1404)

```diff
-             translationKey: "item:spikedBootsDescription"
+             translationKey: "item:diamondOreDescription"
```

#### 160. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1406-L1407` → after: `L1050-L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1050-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1050-L1051) · [Before (L1406-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1406-L1407)

```diff
-           stackable: !1,
-           armourReduction: .09
+           onMinedAura: 40,
+           oA: [2, 5, 5]
```

#### 161. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1409` → after: `L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1053) · [Before (L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1409)

```diff
-         "Wood Gauntlets": {
+         "Block of Coal": {
```

#### 162. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1411` → after: `L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1055) · [Before (L1411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1411)

```diff
-             translationKey: "item:woodGauntlets"
+             translationKey: "item:blockOfCoal"
```

#### 163. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1413-L1418` → after: `L1057-L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1057-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1057-L1059) · [Before (L1413-L1418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1413-L1418)

```diff
-           type: "Armour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 4500,
+           textureInfo: "coal_block",
+           harvestType: "rock"
```

#### 164. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1420` → after: `L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1061) · [Before (L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1420)

```diff
-         "Iron Gauntlets": {
+         "Block of Iron": {
```

#### 165. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1422` → after: `L1063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1063) · [Before (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1422)

```diff
-             translationKey: "item:ironGauntlets"
+             translationKey: "item:blockOfIron"
```

#### 166. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1424-L1429` → after: `L1065-L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1065-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1065-L1067) · [Before (L1424-L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1424-L1429)

```diff
-           type: "Armour",
-           textureInfo: "iron_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .08
+           ttb: 5400,
+           textureInfo: "iron_block",
+           harvestType: "rock"
```

#### 167. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1431` → after: `L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1069) · [Before (L1431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1431)

```diff
-         "Gold Gauntlets": {
+         "Block of Gold": {
```

#### 168. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1433` → after: `L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1071) · [Before (L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1433)

```diff
-             translationKey: "item:goldGauntlets"
+             translationKey: "item:blockOfGold"
```

#### 169. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1435-L1440` → after: `L1073-L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1073-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1073-L1075) · [Before (L1435-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1435-L1440)

```diff
-           type: "Armour",
-           textureInfo: "golden_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 6300,
+           textureInfo: "gold_block",
+           harvestType: "rock"
```

#### 170. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1442` → after: `L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1077) · [Before (L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1442)

```diff
-         "Diamond Gauntlets": {
+         "Block of Lapis Lazuli": {
```

#### 171. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1444` → after: `L1079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1079) · [Before (L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1444)

```diff
-             translationKey: "item:diamondGauntlets"
+             translationKey: "item:blockOfLapisLazuli"
```

#### 172. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1446-L1451` → after: `L1081-L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1081-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1081-L1083) · [Before (L1446-L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1446-L1451)

```diff
-           type: "Armour",
-           textureInfo: "diamond_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .11
+           ttb: 6300,
+           textureInfo: "lapis_block",
+           harvestType: "rock"
```

#### 173. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1453` → after: `L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1085) · [Before (L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1453)

```diff
-         "Military Helmet": {
+         "Block of Emerald": {
```

#### 174. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1455` → after: `L1087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1087) · [Before (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1455)

```diff
-             translationKey: "item:militaryHelmet"
+             translationKey: "item:blockOfEmerald"
```

#### 175. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1457-L1462` → after: `L1089-L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1089-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1089-L1091) · [Before (L1457-L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1457-L1462)

```diff
-           type: "Armour",
-           textureInfo: "military_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .11
+           ttb: 6750,
+           textureInfo: "emerald_block",
+           harvestType: "rock"
```

#### 176. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1464` → after: `L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1093) · [Before (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1464)

```diff
-         "Military Chestplate": {
+         "White Wool": {
```

#### 177. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1466` → after: `L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1095) · [Before (L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1466)

```diff
-             translationKey: "item:militaryChestplate"
+             translationKey: "item:whiteWool"
```

#### 178. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1468-L1473` → after: `L1097-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1097-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1097-L1103) · [Before (L1468-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1468-L1473)

```diff
-           type: "Armour",
-           textureInfo: "military_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .21
+           ttb: 960,
+           textureInfo: "wool_colored_white",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 179. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1475` → after: `L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1105) · [Before (L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1475)

```diff
-         "Military Gauntlets": {
+         "Orange Wool": {
```

#### 180. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1477` → after: `L1107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1107) · [Before (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1477)

```diff
-             translationKey: "item:militaryGauntlets"
+             translationKey: "item:orangeWool"
```

#### 181. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1479-L1484` → after: `L1109-L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1109-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1109-L1115) · [Before (L1479-L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1479-L1484)

```diff
-           type: "Armour",
-           textureInfo: "military_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 960,
+           textureInfo: "wool_colored_orange",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 182. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1486` → after: `L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1117) · [Before (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1486)

```diff
-         "Military Leggings": {
+         "Magenta Wool": {
```

#### 183. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1488` → after: `L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1119) · [Before (L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1488)

```diff
-             translationKey: "item:militaryLeggings"
+             translationKey: "item:magentaWool"
```

#### 184. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1490-L1495` → after: `L1121-L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1121-L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1121-L1127) · [Before (L1490-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1490-L1495)

```diff
-           type: "Armour",
-           textureInfo: "military_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .16
+           ttb: 960,
+           textureInfo: "wool_colored_magenta",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 185. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1497` → after: `L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1129) · [Before (L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1497)

```diff
-         "Military Boots": {
+         "Light Blue Wool": {
```

#### 186. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1499` → after: `L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1131) · [Before (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1499)

```diff
-             translationKey: "item:militaryBoots"
+             translationKey: "item:lightBlueWool"
```

#### 187. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1501-L1506` → after: `L1133-L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1133-L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1133-L1139) · [Before (L1501-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1501-L1506)

```diff
-           type: "Armour",
-           textureInfo: "military_boots",
-           weight: 1,
-           heldItemScale: 1,
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

#### 188. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1508` → after: `L1141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1141) · [Before (L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1508)

```diff
-         "White Wood Helmet": {
+         "Yellow Wool": {
```

#### 189. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1510` → after: `L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1143) · [Before (L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1510)

```diff
-             translationKey: "item:whiteWoodHelmet"
+             translationKey: "item:yellowWool"
```

#### 190. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1512-L1517` → after: `L1145-L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1145-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1145-L1151) · [Before (L1512-L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1512-L1517)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 960,
+           textureInfo: "wool_colored_yellow",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 191. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1519` → after: `L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1153) · [Before (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1519)

```diff
-         "White Wood Chestplate": {
+         "Lime Wool": {
```

#### 192. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1521` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1155) · [Before (L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1521)

```diff
-             translationKey: "item:whiteWoodChestplate"
+             translationKey: "item:limeWool"
```

#### 193. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1523-L1528` → after: `L1157-L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1157-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1157-L1163) · [Before (L1523-L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1523-L1528)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 960,
+           textureInfo: "wool_colored_lime",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 194. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1530` → after: `L1165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1165) · [Before (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1530)

```diff
-         "White Wood Leggings": {
+         "Pink Wool": {
```

#### 195. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1532` → after: `L1167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1167) · [Before (L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1532)

```diff
-             translationKey: "item:whiteWoodLeggings"
+             translationKey: "item:pinkWool"
```

#### 196. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1534-L1539` → after: `L1169-L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1169-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1169-L1175) · [Before (L1534-L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1534-L1539)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
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

#### 197. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1541` → after: `L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1177) · [Before (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1541)

```diff
-         "White Wood Boots": {
+         "Gray Wool": {
```

#### 198. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1543` → after: `L1179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1179) · [Before (L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1543)

```diff
-             translationKey: "item:whiteWoodBoots"
+             translationKey: "item:grayWool"
```

#### 199. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1545-L1550` → after: `L1181-L1187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1181-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1181-L1187) · [Before (L1545-L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1545-L1550)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 960,
+           textureInfo: "wool_colored_gray",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 200. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1552` → after: `L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1189) · [Before (L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1552)

```diff
-         "White Wood Gauntlets": {
+         "Light Gray Wool": {
```

#### 201. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1554` → after: `L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1191) · [Before (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1554)

```diff
-             translationKey: "item:whiteWoodGauntlets"
+             translationKey: "item:lightGrayWool"
```

#### 202. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1556-L1561` → after: `L1193-L1199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1193-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1193-L1199) · [Before (L1556-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1556-L1561)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 960,
+           textureInfo: "wool_colored_light_grey",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 203. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1563` → after: `L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1201) · [Before (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1563)

```diff
-         "Orange Wood Helmet": {
+         "Cyan Wool": {
```

#### 204. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1565` → after: `L1203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1203) · [Before (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1565)

```diff
-             translationKey: "item:orangeWoodHelmet"
+             translationKey: "item:cyanWool"
```

#### 205. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1567-L1572` → after: `L1205-L1211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1205-L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1205-L1211) · [Before (L1567-L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1567-L1572)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 960,
+           textureInfo: "wool_colored_cyan",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 206. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1574` → after: `L1213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1213) · [Before (L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1574)

```diff
-         "Orange Wood Chestplate": {
+         "Purple Wool": {
```

#### 207. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1576` → after: `L1215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1215) · [Before (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1576)

```diff
-             translationKey: "item:orangeWoodChestplate"
+             translationKey: "item:purpleWool"
```

#### 208. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1578-L1583` → after: `L1217-L1223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1217-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1217-L1223) · [Before (L1578-L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1578-L1583)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 960,
+           textureInfo: "wool_colored_purple",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 209. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1585` → after: `L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1225) · [Before (L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1585)

```diff
-         "Orange Wood Leggings": {
+         "Blue Wool": {
```

#### 210. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1587` → after: `L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1227) · [Before (L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1587)

```diff
-             translationKey: "item:orangeWoodLeggings"
+             translationKey: "item:blueWool"
```

#### 211. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1589-L1594` → after: `L1229-L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1229-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1229-L1235) · [Before (L1589-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1589-L1594)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 960,
+           textureInfo: "wool_colored_blue",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 212. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1596` → after: `L1237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1237) · [Before (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1596)

```diff
-         "Orange Wood Boots": {
+         "Brown Wool": {
```

#### 213. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1598` → after: `L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1239) · [Before (L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1598)

```diff
-             translationKey: "item:orangeWoodBoots"
+             translationKey: "item:brownWool"
```

#### 214. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1600-L1605` → after: `L1241-L1247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1241-L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1241-L1247) · [Before (L1600-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1600-L1605)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 960,
+           textureInfo: "wool_colored_brown",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 215. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1607` → after: `L1249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1249) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1607)

```diff
-         "Orange Wood Gauntlets": {
+         "Green Wool": {
```

#### 216. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1609` → after: `L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1251) · [Before (L1609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1609)

```diff
-             translationKey: "item:orangeWoodGauntlets"
+             translationKey: "item:greenWool"
```

#### 217. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1611-L1616` → after: `L1253-L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1253-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1253-L1259) · [Before (L1611-L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1611-L1616)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 960,
+           textureInfo: "wool_colored_green",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 218. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1618` → after: `L1261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1261) · [Before (L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1618)

```diff
-         "Magenta Wood Helmet": {
+         "Red Wool": {
```

#### 219. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1620` → after: `L1263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1263) · [Before (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1620)

```diff
-             translationKey: "item:magentaWoodHelmet"
+             translationKey: "item:redWool"
```

#### 220. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1622-L1627` → after: `L1265-L1271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1265-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1265-L1271) · [Before (L1622-L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1622-L1627)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 960,
+           textureInfo: "wool_colored_red",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 221. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1629` → after: `L1273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1273) · [Before (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1629)

```diff
-         "Magenta Wood Chestplate": {
+         "Black Wool": {
```

#### 222. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1631` → after: `L1275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1275) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1631)

```diff
-             translationKey: "item:magentaWoodChestplate"
+             translationKey: "item:blackWool"
```

#### 223. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1633-L1638` → after: `L1277-L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1277-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1277-L1283) · [Before (L1633-L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1633-L1638)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 960,
+           textureInfo: "wool_colored_black",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 224. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1640` → after: `L1285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1285) · [Before (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1640)

```diff
-         "Magenta Wood Leggings": {
+         "Baked Clay": {
```

#### 225. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1642` → after: `L1287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1287) · [Before (L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1642)

```diff
-             translationKey: "item:magentaWoodLeggings"
+             translationKey: "item:bakedClay"
```

#### 226. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1644-L1649` → after: `L1289-L1291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1289-L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1289-L1291) · [Before (L1644-L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1644-L1649)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 1500,
+           textureInfo: "hardened_clay",
+           harvestType: "rock"
```

#### 227. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1651` → after: `L1293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1293) · [Before (L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1651)

```diff
-         "Magenta Wood Boots": {
+         "White Baked Clay": {
```

#### 228. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1653` → after: `L1295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1295) · [Before (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1653)

```diff
-             translationKey: "item:magentaWoodBoots"
+             translationKey: "item:whiteBakedClay"
```

#### 229. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1655-L1660` → after: `L1297-L1299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1297-L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1297-L1299) · [Before (L1655-L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1655-L1660)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_white",
+           harvestType: "rock"
```

#### 230. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1662` → after: `L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1301) · [Before (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1662)

```diff
-         "Magenta Wood Gauntlets": {
+         "Orange Baked Clay": {
```

#### 231. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1664` → after: `L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1303) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1664)

```diff
-             translationKey: "item:magentaWoodGauntlets"
+             translationKey: "item:orangeBakedClay"
```

#### 232. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1666-L1671` → after: `L1305-L1307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1305-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1305-L1307) · [Before (L1666-L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1666-L1671)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_orange",
+           harvestType: "rock"
```

#### 233. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1673` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1309) · [Before (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1673)

```diff
-         "Light Blue Wood Helmet": {
+         "Magenta Baked Clay": {
```

#### 234. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1675` → after: `L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1311) · [Before (L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1675)

```diff
-             translationKey: "item:lightBlueWoodHelmet"
+             translationKey: "item:magentaBakedClay"
```

#### 235. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1677-L1682` → after: `L1313-L1315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1313-L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1313-L1315) · [Before (L1677-L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1677-L1682)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_magenta",
+           harvestType: "rock"
```

#### 236. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1684` → after: `L1317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1317) · [Before (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1684)

```diff
-         "Light Blue Wood Chestplate": {
+         "Light Blue Baked Clay": {
```

#### 237. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1686` → after: `L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1319) · [Before (L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1686)

```diff
-             translationKey: "item:lightBlueWoodChestplate"
+             translationKey: "item:lightBlueBakedClay"
```

#### 238. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1688-L1693` → after: `L1321-L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1321-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1321-L1323) · [Before (L1688-L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1688-L1693)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_light_blue",
+           harvestType: "rock"
```

#### 239. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1695` → after: `L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1325) · [Before (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1695)

```diff
-         "Light Blue Wood Leggings": {
+         "Yellow Baked Clay": {
```

#### 240. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1697` → after: `L1327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1327) · [Before (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1697)

```diff
-             translationKey: "item:lightBlueWoodLeggings"
+             translationKey: "item:yellowBakedClay"
```

#### 241. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1699-L1704` → after: `L1329-L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1329-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1329-L1331) · [Before (L1699-L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1699-L1704)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_yellow",
+           harvestType: "rock"
```

#### 242. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1706` → after: `L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1333) · [Before (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1706)

```diff
-         "Light Blue Wood Boots": {
+         "Lime Baked Clay": {
```

#### 243. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1708` → after: `L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1335) · [Before (L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1708)

```diff
-             translationKey: "item:lightBlueWoodBoots"
+             translationKey: "item:limeBakedClay"
```

#### 244. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1710-L1715` → after: `L1337-L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1337-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1337-L1339) · [Before (L1710-L1715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1710-L1715)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_lime",
+           harvestType: "rock"
```

#### 245. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1717` → after: `L1341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1341) · [Before (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1717)

```diff
-         "Light Blue Wood Gauntlets": {
+         "Pink Baked Clay": {
```

#### 246. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1719` → after: `L1343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1343) · [Before (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1719)

```diff
-             translationKey: "item:lightBlueWoodGauntlets"
+             translationKey: "item:pinkBakedClay"
```

#### 247. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1721-L1726` → after: `L1345-L1347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1345-L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1345-L1347) · [Before (L1721-L1726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1721-L1726)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_pink",
+           harvestType: "rock"
```

#### 248. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1728` → after: `L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1349) · [Before (L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1728)

```diff
-         "Yellow Wood Helmet": {
+         "Gray Baked Clay": {
```

#### 249. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1730` → after: `L1351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1351) · [Before (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1730)

```diff
-             translationKey: "item:yellowWoodHelmet"
+             translationKey: "item:grayBakedClay"
```

#### 250. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1732-L1737` → after: `L1353-L1355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1353-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1353-L1355) · [Before (L1732-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1732-L1737)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_gray",
+           harvestType: "rock"
```

#### 251. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1739` → after: `L1357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1357) · [Before (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1739)

```diff
-         "Yellow Wood Chestplate": {
+         "Light Gray Baked Clay": {
```

#### 252. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1741` → after: `L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1359) · [Before (L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1741)

```diff
-             translationKey: "item:yellowWoodChestplate"
+             translationKey: "item:lightGrayBakedClay"
```

#### 253. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1743-L1748` → after: `L1361-L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1361-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1361-L1363) · [Before (L1743-L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1743-L1748)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_silver",
+           harvestType: "rock"
```

#### 254. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1750` → after: `L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1365) · [Before (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1750)

```diff
-         "Yellow Wood Leggings": {
+         "Cyan Baked Clay": {
```

#### 255. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1752` → after: `L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1367) · [Before (L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1752)

```diff
-             translationKey: "item:yellowWoodLeggings"
+             translationKey: "item:cyanBakedClay"
```

#### 256. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1754-L1759` → after: `L1369-L1371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1369-L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1369-L1371) · [Before (L1754-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1754-L1759)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_cyan",
+           harvestType: "rock"
```

#### 257. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1761` → after: `L1373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1373) · [Before (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1761)

```diff
-         "Yellow Wood Boots": {
+         "Purple Baked Clay": {
```

#### 258. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1763` → after: `L1375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1375) · [Before (L1763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1763)

```diff
-             translationKey: "item:yellowWoodBoots"
+             translationKey: "item:purpleBakedClay"
```

#### 259. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1765-L1770` → after: `L1377-L1379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1377-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1377-L1379) · [Before (L1765-L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1765-L1770)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_purple",
+           harvestType: "rock"
```

#### 260. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1772` → after: `L1381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1381) · [Before (L1772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1772)

```diff
-         "Yellow Wood Gauntlets": {
+         "Blue Baked Clay": {
```

#### 261. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1774` → after: `L1383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1383) · [Before (L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1774)

```diff
-             translationKey: "item:yellowWoodGauntlets"
+             translationKey: "item:blueBakedClay"
```

#### 262. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1776-L1781` → after: `L1385-L1387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1385-L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1385-L1387) · [Before (L1776-L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1776-L1781)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_blue",
+           harvestType: "rock"
```

#### 263. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1783` → after: `L1389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1389) · [Before (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1783)

```diff
-         "Lime Wood Helmet": {
+         "Brown Baked Clay": {
```

#### 264. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1785` → after: `L1391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1391) · [Before (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1785)

```diff
-             translationKey: "item:limeWoodHelmet"
+             translationKey: "item:brownBakedClay"
```

#### 265. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1787-L1792` → after: `L1393-L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1393-L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1393-L1395) · [Before (L1787-L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1787-L1792)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_brown",
+           harvestType: "rock"
```

#### 266. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1794` → after: `L1397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1397) · [Before (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1794)

```diff
-         "Lime Wood Chestplate": {
+         "Green Baked Clay": {
```

#### 267. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1796` → after: `L1399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1399) · [Before (L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1796)

```diff
-             translationKey: "item:limeWoodChestplate"
+             translationKey: "item:greenBakedClay"
```

#### 268. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1798-L1803` → after: `L1401-L1403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1401-L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1401-L1403) · [Before (L1798-L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1798-L1803)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_green",
+           harvestType: "rock"
```

#### 269. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1805` → after: `L1405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1405) · [Before (L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1805)

```diff
-         "Lime Wood Leggings": {
+         "Red Baked Clay": {
```

#### 270. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1807` → after: `L1407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1407) · [Before (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1807)

```diff
-             translationKey: "item:limeWoodLeggings"
+             translationKey: "item:redBakedClay"
```

#### 271. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1809-L1814` → after: `L1409-L1411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1409-L1411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1409-L1411) · [Before (L1809-L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1809-L1814)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_red",
+           harvestType: "rock"
```

#### 272. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1816` → after: `L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1413) · [Before (L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1816)

```diff
-         "Lime Wood Boots": {
+         "Black Baked Clay": {
```

#### 273. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1818` → after: `L1415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1415) · [Before (L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1818)

```diff
-             translationKey: "item:limeWoodBoots"
+             translationKey: "item:blackBakedClay"
```

#### 274. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1820-L1825` → after: `L1417-L1419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1417-L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1417-L1419) · [Before (L1820-L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1820-L1825)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 1500,
+           textureInfo: "hardened_clay_stained_black",
+           harvestType: "rock"
```

#### 275. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1827` → after: `L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1421) · [Before (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1827)

```diff
-         "Lime Wood Gauntlets": {
+         "Gray Concrete": {
```

#### 276. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1829` → after: `L1423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1423) · [Before (L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1829)

```diff
-             translationKey: "item:limeWoodGauntlets"
+             translationKey: "item:grayConcrete"
```

#### 277. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1831-L1836` → after: `L1425-L1427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1425-L1427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1425-L1427) · [Before (L1831-L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1831-L1836)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 2160,
+           textureInfo: "gray_concrete",
+           harvestType: "rock"
```

#### 278. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1838` → after: `L1429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1429) · [Before (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1838)

```diff
-         "Pink Wood Helmet": {
+         "Light Gray Concrete": {
```

#### 279. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1840` → after: `L1431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1431) · [Before (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1840)

```diff
-             translationKey: "item:pinkWoodHelmet"
+             translationKey: "item:lightGrayConcrete"
```

#### 280. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1842-L1847` → after: `L1433-L1435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1433-L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1433-L1435) · [Before (L1842-L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1842-L1847)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 2160,
+           textureInfo: "light_gray_concrete",
+           harvestType: "rock"
```

#### 281. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1849` → after: `L1437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1437) · [Before (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1849)

```diff
-         "Pink Wood Chestplate": {
+         "Black Concrete": {
```

#### 282. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1851` → after: `L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1439) · [Before (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1851)

```diff
-             translationKey: "item:pinkWoodChestplate"
+             translationKey: "item:blackConcrete"
```

#### 283. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1853-L1858` → after: `L1441-L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1441-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1441-L1443) · [Before (L1853-L1858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1853-L1858)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 2160,
+           textureInfo: "black_concrete",
+           harvestType: "rock"
```

#### 284. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1860` → after: `L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1445) · [Before (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1860)

```diff
-         "Pink Wood Leggings": {
+         "Blue Concrete": {
```

#### 285. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1862` → after: `L1447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1447) · [Before (L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1862)

```diff
-             translationKey: "item:pinkWoodLeggings"
+             translationKey: "item:blueConcrete"
```

#### 286. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1864-L1869` → after: `L1449-L1451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1449-L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1449-L1451) · [Before (L1864-L1869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1864-L1869)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 2160,
+           textureInfo: "blue_concrete",
+           harvestType: "rock"
```

#### 287. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1871` → after: `L1453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1453) · [Before (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1871)

```diff
-         "Pink Wood Boots": {
+         "Brown Concrete": {
```

#### 288. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1873` → after: `L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1455) · [Before (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1873)

```diff
-             translationKey: "item:pinkWoodBoots"
+             translationKey: "item:brownConcrete"
```

#### 289. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1875-L1880` → after: `L1457-L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1457-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1457-L1459) · [Before (L1875-L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1875-L1880)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 2160,
+           textureInfo: "brown_concrete",
+           harvestType: "rock"
```

#### 290. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1882` → after: `L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1461) · [Before (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1882)

```diff
-         "Pink Wood Gauntlets": {
+         "Cyan Concrete": {
```

#### 291. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1884` → after: `L1463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1463) · [Before (L1884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1884)

```diff
-             translationKey: "item:pinkWoodGauntlets"
+             translationKey: "item:cyanConcrete"
```

#### 292. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1886-L1891` → after: `L1465-L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1465-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1465-L1467) · [Before (L1886-L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1886-L1891)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 2160,
+           textureInfo: "cyan_concrete",
+           harvestType: "rock"
```

#### 293. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1893` → after: `L1469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1469) · [Before (L1893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1893)

```diff
-         "Gray Wood Helmet": {
+         "Light Blue Concrete": {
```

#### 294. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1895` → after: `L1471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1471) · [Before (L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1895)

```diff
-             translationKey: "item:grayWoodHelmet"
+             translationKey: "item:lightBlueConcrete"
```

#### 295. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1897-L1902` → after: `L1473-L1475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1473-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1473-L1475) · [Before (L1897-L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1897-L1902)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 2160,
+           textureInfo: "light_blue_concrete",
+           harvestType: "rock"
```

#### 296. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1904` → after: `L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1477) · [Before (L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1904)

```diff
-         "Gray Wood Chestplate": {
+         "Lime Concrete": {
```

#### 297. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1906` → after: `L1479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1479) · [Before (L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1906)

```diff
-             translationKey: "item:grayWoodChestplate"
+             translationKey: "item:limeConcrete"
```

#### 298. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1908-L1913` → after: `L1481-L1483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1481-L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1481-L1483) · [Before (L1908-L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1908-L1913)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 2160,
+           textureInfo: "lime_concrete",
+           harvestType: "rock"
```

#### 299. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1915` → after: `L1485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1485) · [Before (L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1915)

```diff
-         "Gray Wood Leggings": {
+         "Magenta Concrete": {
```

#### 300. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1917` → after: `L1487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1487) · [Before (L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1917)

```diff
-             translationKey: "item:grayWoodLeggings"
+             translationKey: "item:magentaConcrete"
```

#### 301. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1919-L1924` → after: `L1489-L1491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1489-L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1489-L1491) · [Before (L1919-L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1919-L1924)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 2160,
+           textureInfo: "magenta_concrete",
+           harvestType: "rock"
```

#### 302. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1926` → after: `L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1493) · [Before (L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1926)

```diff
-         "Gray Wood Boots": {
+         "Orange Concrete": {
```

#### 303. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1928` → after: `L1495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1495) · [Before (L1928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1928)

```diff
-             translationKey: "item:grayWoodBoots"
+             translationKey: "item:orangeConcrete"
```

#### 304. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1930-L1935` → after: `L1497-L1499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1497-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1497-L1499) · [Before (L1930-L1935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1930-L1935)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 2160,
+           textureInfo: "orange_concrete",
+           harvestType: "rock"
```

#### 305. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1937` → after: `L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1501) · [Before (L1937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1937)

```diff
-         "Gray Wood Gauntlets": {
+         "Pink Concrete": {
```

#### 306. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1939` → after: `L1503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1503) · [Before (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1939)

```diff
-             translationKey: "item:grayWoodGauntlets"
+             translationKey: "item:pinkConcrete"
```

#### 307. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1941-L1946` → after: `L1505-L1507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1505-L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1505-L1507) · [Before (L1941-L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1941-L1946)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 2160,
+           textureInfo: "pink_concrete",
+           harvestType: "rock"
```

#### 308. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1948` → after: `L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1509) · [Before (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1948)

```diff
-         "Light Gray Wood Helmet": {
+         "Purple Concrete": {
```

#### 309. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1950` → after: `L1511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1511) · [Before (L1950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1950)

```diff
-             translationKey: "item:lightGrayWoodHelmet"
+             translationKey: "item:purpleConcrete"
```

#### 310. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1952-L1957` → after: `L1513-L1515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1513-L1515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1513-L1515) · [Before (L1952-L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1952-L1957)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 2160,
+           textureInfo: "purple_concrete",
+           harvestType: "rock"
```

#### 311. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1959` → after: `L1517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1517) · [Before (L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1959)

```diff
-         "Light Gray Wood Chestplate": {
+         "Red Concrete": {
```

#### 312. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1961` → after: `L1519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1519) · [Before (L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1961)

```diff
-             translationKey: "item:lightGrayWoodChestplate"
+             translationKey: "item:redConcrete"
```

#### 313. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1963-L1968` → after: `L1521-L1523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1521-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1521-L1523) · [Before (L1963-L1968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1963-L1968)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 2160,
+           textureInfo: "red_concrete",
+           harvestType: "rock"
```

#### 314. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1970` → after: `L1525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1525) · [Before (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1970)

```diff
-         "Light Gray Wood Leggings": {
+         "White Concrete": {
```

#### 315. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1972` → after: `L1527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1527) · [Before (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1972)

```diff
-             translationKey: "item:lightGrayWoodLeggings"
+             translationKey: "item:whiteConcrete"
```

#### 316. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1974-L1979` → after: `L1529-L1531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1529-L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1529-L1531) · [Before (L1974-L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1974-L1979)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 2160,
+           textureInfo: "white_concrete",
+           harvestType: "rock"
```

#### 317. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1981` → after: `L1533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1533) · [Before (L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1981)

```diff
-         "Light Gray Wood Boots": {
+         "Green Concrete": {
```

#### 318. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1983` → after: `L1535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1535) · [Before (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1983)

```diff
-             translationKey: "item:lightGrayWoodBoots"
+             translationKey: "item:greenConcrete"
```

#### 319. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1985-L1990` → after: `L1537-L1539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1537-L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1537-L1539) · [Before (L1985-L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1985-L1990)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
+           ttb: 2160,
+           textureInfo: "green_concrete",
+           harvestType: "rock"
```

#### 320. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1992` → after: `L1541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1541) · [Before (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1992)

```diff
-         "Light Gray Wood Gauntlets": {
+         "Yellow Concrete": {
```

#### 321. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1994` → after: `L1543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1543) · [Before (L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1994)

```diff
-             translationKey: "item:lightGrayWoodGauntlets"
+             translationKey: "item:yellowConcrete"
```

#### 322. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L1996-L2001` → after: `L1545-L1547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1545-L1547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1545-L1547) · [Before (L1996-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L1996-L2001)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 2160,
+           textureInfo: "yellow_concrete",
+           harvestType: "rock"
```

#### 323. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L2003` → after: `L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1549) · [Before (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L2003)

```diff
-         "Cyan Wood Helmet": {
+         "Pine Leaves": {
```

#### 324. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L2005` → after: `L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1551) · [Before (L2005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L2005)

```diff
-             translationKey: "item:cyanWoodHelmet"
+             translationKey: "item:pineLeaves"
```

#### 325. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L2007-L2012` → after: `L1553-L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1553-L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1553-L1555) · [Before (L2007-L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L2007-L2012)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 350,
+           textureInfo: "leaves_pine",
+           harvestType: "cuttable"
```

#### 326. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L2014` → after: `L1557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1557) · [Before (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L2014)

```diff
-         "Cyan Wood Chestplate": {
+         "Aspen Leaves": {
```

#### 327. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L2016` → after: `L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1559) · [Before (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L2016)

```diff
-             translationKey: "item:cyanWoodChestplate"
+             translationKey: "item:aspenLeaves"
```

#### 328. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L2018-L2023` → after: `L1561-L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1561-L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1561-L1563) · [Before (L2018-L2023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L2018-L2023)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 350,
+           textureInfo: "leaves_aspen",
+           harvestType: "cuttable"
```

#### 329. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L2025` → after: `L1565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1565) · [Before (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L2025)

```diff
-         "Cyan Wood Leggings": {
+         "Maple Leaves": {
```

#### 330. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L2027` → after: `L1567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1567) · [Before (L2027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L2027)

```diff
-             translationKey: "item:cyanWoodLeggings"
+             translationKey: "item:mapleLeaves"
```

#### 331. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L2029-L2034` → after: `L1569-L1571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1569-L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1569-L1571) · [Before (L2029-L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L2029-L2034)

```diff
-           type: "GrayscaleArmour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 350,
+           textureInfo: "leaves_maple",
+           harvestType: "cuttable"
```

#### 332. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L2036` → after: `L1573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R1573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/85.js#L1573) · [Before (L2036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/85.js#L2036)

```diff
-         "Cyan Wood Boots": {
+         "Jungle Leaves": {
```
