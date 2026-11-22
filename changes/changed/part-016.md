# Changed — Bundle Modifications Report (Part 016 / 047)

- **Updated at**: `2026-11-22T23:29 JST`
- **Part**: `16 / 47` (**336** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 015](part-015.md) · [Part 017 →](part-017.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/310.js` (bqoxjr.2558012f → 3lwmg.ecbaa066 · continued)

- **File**: `bundles/bloxd.io/chunks/js/310.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d)

#### 23. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L230-L236` → after: `L1399-L1952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR1399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L1399-L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L1399-L1952) · [Before (L230-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L230-L236)

```diff
-     var LQ = wQ(39251);
-     const qQ = "sceneFragmentDeclaration",
-       oQ = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;uniform mat4 inverseProjection;\n";
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
+     var Dk = ik(39566),
+       fk = ik(39672),
+       Sk = ik(36726),
+       bk = ik(36698),
+       rk = ik(39403),
+       Pk = ik(39570),
+       mk = ik(39585),
+       Mk = ik(36734),
+       Kk = ik(39467),
+       xk = ik(39501),
+       nk = ik(41384);
+     let Uk = (() => {
+         var kk;
+         let ek, rk, Kk, Uk, Hk, lk, pk, yk, Yk, Lk, Ck, Ak, jk, sk, dk, Vk, Fk = [],
+           uk = [],
+           qk = [],
+ ... (538 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L239` → after: `L1955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR1955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L1955) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L239)

```diff
-   41280: (QQ, FQ, wQ) => {
+   41407: (kk, ek, ik) => {
```

#### 25. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L241` → after: `L1957-L1958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L1957-L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L1957-L1958) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L241)

```diff
-       d: () => DQ
+       d: () => bk,
+       h: () => Sk
```

#### 26. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L243-L249` → after: `L1960-L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L1960-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L1960-L1977) · [Before (L243-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L243-L249)

```diff
-     var LQ = wQ(39251);
-     const qQ = "sceneUboDeclaration",
-       oQ = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
+     var Dk = ik(41384),
+       fk = ik(36722);
+     class Sk extends Dk.f {
+       _gatherImports(kk, ek) {
+         kk ? (this._webGPUReady = !0, ek.push(Promise.all([ik.e(370).then((() => ik(60846)))]))) : ek.push(Promise.all([ik.e(371).then((() => ik(60851)))])), super._gatherImports(kk, ek)
+       }
+       constructor(kk) {
+         let ek = arguments.length > 2 ? arguments[2] : void 0;
+         const ik = {
+           name: kk,
+           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || fk.e.LastCreatedEngine,
+           useShaderStore: !0,
+           useAsPostProcess: !0,
+           fragmentShader: Sk.FragmentUrl,
+           ...ek
+         };
+ ... (2 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L251-L290` → after: `L1979-L2018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR1979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L1979-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/310.js#L1979-L2018) · [Before (L251-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/310.js#L251-L290)

```diff
-   },
-   61352: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       geometryPixelShader: () => rQ
-     });
-     var LQ = wQ(39251),
-       qQ = wQ(41458),
-       oQ = wQ(41548);
-     const DQ = "mrtFragmentDeclaration",
-       kQ = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#ifdef MESH_BLEND_TAG\n#if {X}>0\n#if MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if {X}>1\n#if MESH … [truncated]
-     LQ.c.IncludesShadersStore[DQ] || (LQ.c.IncludesShadersStore[DQ] = kQ);
-     const vQ = {
-       name: DQ,
-       shader: kQ
-     };
-     var mQ = wQ(41535),
- ... (24 more removed lines; see GitHub link above)
+     Sk.FragmentUrl = "pass";
+     class bk extends Dk.f {
+       _gatherImports(kk, ek) {
+         kk ? (this._webGPUReady = !0, ek.push(Promise.all([ik.e(372).then((() => ik(60857)))]))) : ek.push(Promise.all([ik.e(373).then((() => ik(60861)))])), super._gatherImports(kk, ek)
+       }
+       constructor(kk) {
+         super({
+           ...arguments.length > 2 ? arguments[2] : void 0,
+           name: kk,
+           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || fk.e.LastCreatedEngine,
+           useShaderStore: !0,
+           useAsPostProcess: !0,
+           fragmentShader: bk.FragmentUrl,
+           defines: "#define POSITIVEX"
+         }), this._face = 0
+       }
+ ... (24 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/311.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/311.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab)

#### 1. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/311.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/311.js#L4-L6)

```diff
-   41396: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => DQ
+   41426: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       _HDRTextureLoader: () => Mk
```

#### 2. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L8-L14` → after: `L8-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L8-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/311.js#L8-L74) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/311.js#L8-L14)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bakedVertexAnimation",
-       oQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
+     var Dk = ik(36698);
+     class fk {
+       static ConvertPanoramaToCubemap(kk, ek, ik, Dk) {
+         let fk, Sk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           bk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+         if (!kk) throw "ConvertPanoramaToCubemap: input cannot be null";
+         if (kk.length != ek * ik * 3) {
+           if (kk.length != ek * ik * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
+           fk = 4
+         } else fk = 3;
+         return {
+           front: this.CreateCubemapTexture(Dk, this.FACE_FRONT, kk, ek, ik, Sk, bk, fk),
+           back: this.CreateCubemapTexture(Dk, this.FACE_BACK, kk, ek, ik, Sk, bk, fk),
+           left: this.CreateCubemapTexture(Dk, this.FACE_LEFT, kk, ek, ik, Sk, bk, fk),
+           right: this.CreateCubemapTexture(Dk, this.FACE_RIGHT, kk, ek, ik, Sk, bk, fk),
+           up: this.CreateCubemapTexture(Dk, this.FACE_UP, kk, ek, ik, Sk, bk, fk),
+ ... (51 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L16-L27` → after: `L76-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L76-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/311.js#L76-L80) · [Before (L16-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/311.js#L16-L27)

```diff
-   },
-   41309: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "bakedVertexAnimationDeclaration",
-       oQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
+ 
+     function Sk(kk, ek, ik, Dk, fk, Sk) {
+       fk > 0 ? (fk = function(kk, ek) {
+         return ek > 1023 ? kk * Math.pow(2, 1023) * Math.pow(2, ek - 1023) : ek < -1074 ? kk * Math.pow(2, -1074) * Math.pow(2, ek + 1074) : kk * Math.pow(2, ek)
+       }(1, fk - 136), kk[Sk + 0] = ek * fk, kk[Sk + 1] = ik * fk, kk[Sk + 2] = Dk * fk) : (kk[Sk + 0] = 0, kk[Sk + 1] = 0, kk[Sk + 2] = 0)
```

#### 4. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L29-L40` → after: `L82-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L82-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/311.js#L82-L86) · [Before (L29-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/311.js#L29-L40)

```diff
-   },
-   41302: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "bonesDeclaration",
-       oQ = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
+ 
+     function bk(kk, ek) {
+       let ik, Dk = "";
+       for (let fk = ek; fk < kk.length - ek && (ik = String.fromCharCode(kk[fk]), "\n" != ik); fk++) Dk += ik;
+       return Dk
```

#### 5. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L42-L53` → after: `L88-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L88-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/311.js#L88-L109) · [Before (L42-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/311.js#L42-L53)

```diff
-   },
-   41387: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "bonesVertex",
-       oQ = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
+ 
+     function rk(kk) {
+       let ek = bk(kk, 0);
+       if ("#" != ek[0] || "?" != ek[1]) throw "Bad HDR Format.";
+       let ik = !1,
+         Dk = !1,
+         fk = 0;
+       do {
+         fk += ek.length + 1, ek = bk(kk, fk), "FORMAT=32-bit_rle_rgbe" == ek ? Dk = !0 : 0 == ek.length && (ik = !0)
+       } while (!ik);
+       if (!Dk) throw "HDR Bad header format, unsupported FORMAT";
+       fk += ek.length + 1, ek = bk(kk, fk);
+       const Sk = /^-Y (.*) \+X (.*)$/g.exec(ek);
+       if (!Sk || Sk.length < 3) throw "HDR Bad header format, no size";
+       const rk = parseInt(Sk[2]),
+         Pk = parseInt(Sk[1]);
+ ... (6 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L55-L66` → after: `L111-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L111-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/311.js#L111-L137) · [Before (L55-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/311.js#L55-L66)

```diff
-   },
-   41424: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "bumpVertex",
-       oQ = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
+ 
+     function Pk(kk, ek) {
+       return function(kk, ek) {
+         let ik = ek.height;
+         const Dk = ek.width;
+         let fk, bk, rk, Pk, Mk, Kk, xk, nk, Uk = ek.dataPosition;
+         const Hk = new ArrayBuffer(4 * Dk),
+           wk = new Uint8Array(Hk),
+           lk = new ArrayBuffer(ek.width * ek.height * 4 * 3),
+           pk = new Float32Array(lk);
+         for (; ik > 0;) {
+           if (fk = kk[Uk++], bk = kk[Uk++], rk = kk[Uk++], Pk = kk[Uk++], 2 != fk || 2 != bk || 128 & rk || ek.width < 8 || ek.width > 32767) return mk(kk, ek);
+           if ((rk << 8 | Pk) != Dk) throw "HDR Bad header format, wrong scan line width";
+           for (Kk = 0, nk = 0; nk < 4; nk++)
+             for (xk = (nk + 1) * Dk; Kk < xk;)
+               if (fk = kk[Uk++], bk = kk[Uk++], fk > 128) {
+ ... (11 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L68-L79` → after: `L139-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L139-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/311.js#L139-L150) · [Before (L68-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/311.js#L68-L79)

```diff
-   },
-   41428: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneVertex",
-       oQ = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
+ 
+     function mk(kk, ek) {
+       let ik = ek.height;
+       const Dk = ek.width;
+       let fk, bk, rk, Pk, mk, Mk = ek.dataPosition;
+       const Kk = new ArrayBuffer(ek.width * ek.height * 4 * 3),
+         xk = new Float32Array(Kk);
+       for (; ik > 0;) {
+         for (mk = 0; mk < ek.width; mk++) fk = kk[Mk++], bk = kk[Mk++], rk = kk[Mk++], Pk = kk[Mk++], Sk(xk, fk, bk, rk, Pk, (ek.height - ik) * Dk * 3 + 3 * mk);
+         ik--
+       }
+       return xk
```

#### 8. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L81-L240` → after: `L152-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L152-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/311.js#L152-L171) · [Before (L81-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/311.js#L81-L240)

```diff
-   },
-   41343: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneVertexDeclaration",
-       oQ = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   61038: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
- ... (144 more removed lines; see GitHub link above)
+     fk.FACE_LEFT = [new Dk.o(-1, -1, -1), new Dk.o(1, -1, -1), new Dk.o(-1, 1, -1), new Dk.o(1, 1, -1)], fk.FACE_RIGHT = [new Dk.o(1, -1, 1), new Dk.o(-1, -1, 1), new Dk.o(1, 1, 1), new Dk.o(-1, 1, 1)], fk.FACE_FRONT = [new Dk.o(1, -1, -1), new Dk.o(1, -1, 1), new Dk.o(1, 1, -1), … [truncated]
+     class Mk {
+       constructor() {
+         this.supportCascades = !1
+       }
+       loadCubeData() {
+         throw ".hdr not supported in Cube."
+       }
+       loadData(kk, ek, ik) {
+         const Dk = new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength),
+           fk = rk(Dk),
+           Sk = Pk(Dk, fk),
+           bk = fk.width * fk.height,
+           mk = new Float32Array(4 * bk);
+         for (let rk = 0; rk < bk; rk += 1) mk[4 * rk] = Sk[3 * rk], mk[4 * rk + 1] = Sk[3 * rk + 1], mk[4 * rk + 2] = Sk[3 * rk + 2], mk[4 * rk + 3] = 1;
+         ik(fk.width, fk.height, ek.generateMipMaps, !1, (() => {
+ ... (4 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/312.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/312.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986)

#### 1. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L4` → after: `L4-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L4-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/312.js#L4-L394) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/312.js#L4)

```diff
-   41294: (QQ, FQ, wQ) => {
+   41428: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       _KTXTextureLoader: () => Uk
+     });
+     var Dk = ik(38272);
+     class fk {
+       constructor(kk, ek) {
+         if (this.data = kk, this.isInvalid = !1, !fk.IsValid(kk)) return this.isInvalid = !0, void Dk.b.Error("texture missing KTX identifier");
+         const ik = Uint32Array.BYTES_PER_ELEMENT,
+           Sk = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * ik),
+           bk = 67305985 === Sk.getUint32(0, !0);
+         return this.glType = Sk.getUint32(1 * ik, bk), this.glTypeSize = Sk.getUint32(2 * ik, bk), this.glFormat = Sk.getUint32(3 * ik, bk), this.glInternalFormat = Sk.getUint32(4 * ik, bk), this.glBaseInternalFormat = Sk.getUint32(5 * ik, bk), this.pixelWidth = Sk.getUint32(6 *  … [truncated]
+       }
+       uploadLevels(kk, ek) {
+         switch (this.loadType) {
+           case fk.COMPRESSED_2D:
+ ... (375 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L6` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/312.js#L396) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/312.js#L6)

```diff
-       b: () => DQ
+       c: () => fk
```

#### 3. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L8-L90` → after: `L398-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L398-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/312.js#L398-L457) · [Before (L8-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/312.js#L8-L90)

```diff
-     var LQ = wQ(39251);
-     wQ(41280), wQ(41285);
-     const qQ = "defaultUboDeclaration",
-       oQ = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41453: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       defaultPixelShader: () => dQ
-     });
-     var LQ = wQ(39251),
-       qQ = wQ(41455);
- ... (67 more removed lines; see GitHub link above)
+     class Dk {
+       constructor(kk) {
+         this._pendingActions = new Array, this._workerInfos = kk.map((kk => ({
+           workerPromise: Promise.resolve(kk),
+           idle: !0
+         })))
+       }
+       dispose() {
+         for (const kk of this._workerInfos) kk.workerPromise.then((kk => {
+           kk.terminate()
+         }));
+         this._workerInfos.length = 0, this._pendingActions.length = 0
+       }
+       push(kk) {
+         this._executeOnIdleWorker(kk) || this._pendingActions.push(kk)
+       }
+ ... (44 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/313.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/313.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333)

#### 1. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/313.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/313.js#L4-L6)

```diff
-   41560: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => DQ
+   41438: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       _TGATextureLoader: () => rk
```

#### 2. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L8-L11` → after: `L8-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L8-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/313.js#L8-L86) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/313.js#L8-L11)

```diff
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneFragment",
-       oQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(38272);
+ 
+     function fk(kk) {
+       let ek = 0;
+       return {
+         id_length: kk[ek++],
+         colormap_type: kk[ek++],
+         image_type: kk[ek++],
+         colormap_index: kk[ek++] | kk[ek++] << 8,
+         colormap_length: kk[ek++] | kk[ek++] << 8,
+         colormap_size: kk[ek++],
+         origin: [kk[ek++] | kk[ek++] << 8, kk[ek++] | kk[ek++] << 8],
+         width: kk[ek++] | kk[ek++] << 8,
+         height: kk[ek++] | kk[ek++] << 8,
+         pixel_size: kk[ek++],
+         flags: kk[17]
+ ... (63 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L13-L145` → after: `L88-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L88-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/313.js#L88-L171) · [Before (L13-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/313.js#L13-L145)

```diff
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41548: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneFragmentDeclaration",
-       oQ = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
- ... (117 more removed lines; see GitHub link above)
+       GetTGAHeader: fk,
+       UploadContent: Sk,
+       _getImageData8bits: function(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
+         const mk = ik,
+           Mk = ek,
+           Kk = kk.width,
+           xk = kk.height;
+         let nk, Uk, Hk, wk = 0;
+         const lk = new Uint8Array(Kk * xk * 4);
+         for (Hk = Dk; Hk !== Sk; Hk += fk)
+           for (Uk = bk; Uk !== Pk; Uk += rk, wk++) nk = mk[wk], lk[4 * (Uk + Kk * Hk) + 3] = 255, lk[4 * (Uk + Kk * Hk) + 2] = Mk[3 * nk + 0], lk[4 * (Uk + Kk * Hk) + 1] = Mk[3 * nk + 1], lk[4 * (Uk + Kk * Hk) + 0] = Mk[3 * nk + 2];
+         return lk
+       },
+       _getImageData16bits: function(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
+         const mk = ik,
+           Mk = kk.width,
+ ... (68 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/314.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/314.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65)

#### 1. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/314.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/314.js#L4-L6)

```diff
-   41560: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => DQ
+   41444: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       ReadExrDataAsync: () => xe,
+       _ExrTextureLoader: () => Ke
```

#### 2. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L8-L121` → after: `L9-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L9-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/314.js#L9-L771) · [Before (L8-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/314.js#L8-L121)

```diff
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneFragment",
-       oQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41548: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneFragmentDeclaration",
-       oQ = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
- ... (98 more removed lines; see GitHub link above)
+     var Dk = ik(38272),
+       fk = ik(36729),
+       Sk = ik(39628);
+     const bk = 4,
+       rk = 4,
+       Pk = 1,
+       mk = 2,
+       Mk = 8,
+       Kk = 65536,
+       xk = Kk >> 3,
+       nk = 14,
+       Uk = 65537,
+       Hk = 1 << nk,
+       wk = Hk - 1,
+       lk = 59,
+       pk = 63,
+ ... (747 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/315.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/315.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b)

#### 1. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/315.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/315.js#L4)

```diff
-   41300: (QQ, FQ, wQ) => {
+   41597: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/315.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/315.js#L6)

```diff
-       e: () => DQ
+       b: () => bk
```

#### 3. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/315.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/315.js#L8-L11)

```diff
-     var LQ = wQ(39251);
-     const qQ = "helperFunctions",
-       oQ = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "bumpVertex",
+       Sk = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 4. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L17` → after: `L17-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L17-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/315.js#L17-L44) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/315.js#L17)

```diff
-   60885: (QQ, FQ, wQ) => {
+   41519: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "bumpVertexDeclaration",
+       Sk = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41471: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => bk
+ ... (12 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L19` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/315.js#L46) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/315.js#L19)

```diff
-       rgbdDecodePixelShader: () => vQ
+       defaultVertexShader: () => Gk
```

#### 6. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L21-L27` → after: `L48-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L48-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/315.js#L48-L101) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/315.js#L21-L27)

```diff
-     var LQ = wQ(39251),
-       qQ = wQ(41300);
-     const oQ = "rgbdDecodePixelShader",
-       DQ = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}";
-     LQ.c.ShadersStore[oQ] || (LQ.c.ShadersStore[oQ] = DQ);
-     const kQ = [qQ.e];
-     for (const mQ of kQ) LQ.c.IncludesShadersStore[mQ.name] || (LQ.c.IncludesShadersStore[mQ.name] = mQ.shader);
+     var Dk = ik(39412),
+       fk = ik(41455);
+     const Sk = "defaultVertexDeclaration",
+       bk = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nuniform mat4 view;\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;\n#endif\n#ifdef O … [truncated]
+     Dk.d.IncludesShadersStore[Sk] || (Dk.d.IncludesShadersStore[Sk] = bk);
+     const rk = {
+       name: Sk,
+       shader: bk
+     };
+     var Pk = ik(41462),
+       mk = ik(41467),
+       Mk = ik(41471),
+       Kk = ik(41477),
+       xk = ik(41479),
+       nk = ik(41487),
+       Uk = ik(41494),
+ ... (38 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/316.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/316.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064)

#### 1. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L4` → after: `L4-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L4-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/316.js#L4-L43) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/316.js#L4)

```diff
-   41300: (QQ, FQ, wQ) => {
+   41576: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "bakedVertexAnimation",
+       Sk = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41494: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => bk
+ ... (24 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L8` → after: `L47-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L47-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/316.js#L47-L125) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/316.js#L8)

```diff
-     var LQ = wQ(39251);
+     var Dk = ik(39412);
+     const fk = "bonesVertex",
+       Sk = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41606: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "clipPlaneVertex",
+       Sk = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+ ... (63 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L11-L27` → after: `L128-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L128-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/316.js#L128-L401) · [Before (L11-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/316.js#L11-L27)

```diff
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   60900: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       rgbdEncodePixelShader: () => vQ
-     });
-     var LQ = wQ(39251),
-       qQ = wQ(41300);
-     const oQ = "rgbdEncodePixelShader",
-       DQ = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}";
-     LQ.c.ShadersStore[oQ] || (LQ.c.ShadersStore[oQ] = DQ);
-     const kQ = [qQ.e];
- ... (1 more removed lines; see GitHub link above)
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41501: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "instancesDeclaration",
+       Sk = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     const bk = {
+       name: fk,
+ ... (258 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/317.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/317.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9)

#### 1. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L4)

```diff
-   41396: (QQ, FQ, wQ) => {
+   41636: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L8-L11)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bakedVertexAnimation",
-       oQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "decalFragmentDeclaration",
+       Sk = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 3. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L17)

```diff
-   41309: (QQ, FQ, wQ) => {
+   41750: (kk, ek, ik) => {
```

#### 4. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L19)

```diff
-       d: () => DQ
+       b: () => bk
```

#### 5. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L21-L24)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bakedVertexAnimationDeclaration",
-       oQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "depthPrePass",
+       Sk = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 6. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L30)

```diff
-   41302: (QQ, FQ, wQ) => {
+   41659: (kk, ek, ik) => {
```

#### 7. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L34-L37)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bonesDeclaration",
-       oQ = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "lightFragmentDeclaration",
+       Sk = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 8. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L43)

```diff
-   41387: (QQ, FQ, wQ) => {
+   41665: (kk, ek, ik) => {
```

#### 9. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L47-L50)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bonesVertex",
-       oQ = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "lightUboDeclaration",
+       Sk = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 10. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L56)

```diff
-   41428: (QQ, FQ, wQ) => {
+   41671: (kk, ek, ik) => {
```

#### 11. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L58` → after: `L58-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L58-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L58-L71) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L58)

```diff
-       e: () => DQ
+       b: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "ltcHelperFunctions",
+       Sk = "vec2 LTCUv( const in vec3 N,const in vec3 V,const in float roughness ) {const float LUTSIZE=64.0;const float LUTSCALE=( LUTSIZE-1.0 )/LUTSIZE;const float LUTBIAS=0.5/LUTSIZE;float dotNV=saturate( dot( N,V ) );vec2 uv=vec2( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+ … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41513: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => bk
```

#### 12. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L60-L63` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L73-L76) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L60-L63)

```diff
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneVertex",
-       oQ = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "mainUVVaryingDeclaration",
+       Sk = "#ifdef MAINUV{X}\nvarying vec2 vMainUV{X};\n#endif\n";
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 13. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L69` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L82) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L69)

```diff
-   41343: (QQ, FQ, wQ) => {
+   41467: (kk, ek, ik) => {
```

#### 14. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L71` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L84) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L71)

```diff
-       c: () => DQ
+       d: () => bk
```

#### 15. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L73-L76` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L86-L89) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L73-L76)

```diff
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneVertexDeclaration",
-       oQ = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "meshUboDeclaration",
+       Sk = "#ifdef WEBGL2\nuniform mat4 world;uniform float visibility;\n#else\nlayout(std140,column_major) uniform;uniform Mesh\n{mat4 world;float visibility;};\n#endif\n#define WORLD_UBO\n";
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 16. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L82` → after: `L95-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L95-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L95-L108) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L82)

```diff
-   41431: (QQ, FQ, wQ) => {
+   41653: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "oitDeclaration",
+       Sk = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#extension GL_EXT_draw_buffers : require\nlayout(location=0) out vec2 depth; \nlayout(location=1) out vec4 frontColor;layout(location=2) out vec4 backColor;\n#define MAX_DEPTH 99999.0\nhighp vec4 gl_FragColor;uniform sampler2D oi … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41769: (kk, ek, ik) => {
```

#### 17. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L86-L89` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L112-L115) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L86-L89)

```diff
-     var LQ = wQ(39251);
-     const qQ = "fogVertex",
-       oQ = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "oitFragment",
+       Sk = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\nfloat fragDepth=gl_FragCoord.z; \n#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS\nuint halfFloat=packHalf2x16(vec2(fragDepth));vec2 full=unpackHalf2x16(halfFloat);fragDepth=full.x;\n#endif\nivec2 fragCoord=ivec2(gl_FragCoord.xy);ve … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 18. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L95` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L121) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L95)

```diff
-   41347: (QQ, FQ, wQ) => {
+   41685: (kk, ek, ik) => {
```

#### 19. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L97` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L123) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L97)

```diff
-       e: () => DQ
+       b: () => bk
```

#### 20. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L99-L102` → after: `L125-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L125-L128) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L99-L102)

```diff
-     var LQ = wQ(39251);
-     const qQ = "fogVertexDeclaration",
-       oQ = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "reflectionFunction",
+       Sk = "vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)\n{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return  … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 21. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L108` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L134) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L108)

```diff
-   41311: (QQ, FQ, wQ) => {
+   41681: (kk, ek, ik) => {
```

#### 22. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L110` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L136) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L110)

```diff
-       c: () => DQ
+       b: () => bk
```

#### 23. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L112-L115` → after: `L138-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L138-L141) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L112-L115)

```diff
-     var LQ = wQ(39251);
-     const qQ = "instancesDeclaration",
-       oQ = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "samplerFragmentDeclaration",
+       Sk = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 24. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L121` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L147) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L121)

```diff
-   41385: (QQ, FQ, wQ) => {
+   41462: (kk, ek, ik) => {
```

#### 25. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L125-L128` → after: `L151-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L151-L154) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L125-L128)

```diff
-     var LQ = wQ(39251);
-     const qQ = "instancesVertex",
-       oQ = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "sceneUboDeclaration",
+       Sk = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 26. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L134` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L160) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L134)

```diff
-   41446: (QQ, FQ, wQ) => {
+   41677: (kk, ek, ik) => {
```

#### 27. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L136` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L162) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L136)

```diff
-       c: () => DQ
+       b: () => bk
```

#### 28. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L138-L141` → after: `L164-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L164-L167) · [Before (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L138-L141)

```diff
-     var LQ = wQ(39251);
-     const qQ = "vertexColorMixing",
-       oQ = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvColor=vec4(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvColor*=colorUpdated;\n#else\nvColor.rgb*=colorUpdated.rgb;\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvColor*=instanceColor;\n#endif\n#e … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "shadowsFragmentFunctions",
+       Sk = "#ifdef SHADOWS\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\n#ifndef SHADOWFLOAT\nfloat unpack(vec4 color)\n{const vec4 bit_shift=vec4(1.0/(255 … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 29. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L147-L149` → after: `L173-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L173-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L173-L175) · [Before (L147-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L147-L149)

```diff
-   41944: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       colorVertexShader: () => MQ
+   41702: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => bk
```

#### 30. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L151-L167` → after: `L177-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/317.js#L177-L180) · [Before (L151-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/317.js#L151-L167)

```diff
-     var LQ = wQ(39251),
-       qQ = wQ(41302),
-       oQ = wQ(41309),
-       DQ = wQ(41343),
-       kQ = wQ(41347),
-       vQ = wQ(41311),
-       mQ = wQ(41385),
-       uQ = wQ(41387),
-       HQ = wQ(41396),
-       bQ = wQ(41428),
-       YQ = wQ(41431),
-       xQ = wQ(41446);
-     const AQ = "colorVertexShader",
-       tQ = "attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#ifdef FOG\nuniform mat4 view;\n#endif\n#include<i … [truncated]
-     LQ.c.ShadersStore[AQ] || (LQ.c.ShadersStore[AQ] = tQ);
-     const eQ = [qQ.d, oQ.d, DQ.c, kQ.e, vQ.c, mQ.d, uQ.e, HQ.d, bQ.e, YQ.b, xQ.c];
- ... (1 more removed lines; see GitHub link above)
+     var Dk = ik(39412);
+     const fk = "textureRepetitionFunctions",
+       Sk = "#if TEXTURE_REPETITION_MODE>0\nvec4 _texRepHash4(vec2 p) {return fract(sin(vec4(\n1.0+dot(p,vec2(37.0,17.0)),\n2.0+dot(p,vec2(11.0,47.0)),\n3.0+dot(p,vec2(41.0,29.0)),\n4.0+dot(p,vec2(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nvec4 _texRepSample … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/318.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/318.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c)

#### 1. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L4` → after: `L4-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L4-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/318.js#L4-L44) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/318.js#L4)

```diff
-   41311: (QQ, FQ, wQ) => {
+   41737: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "bumpFragment",
+       Sk = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41710: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => bk
+ ... (25 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L8-L11` → after: `L48-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L48-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/318.js#L48-L64) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/318.js#L8-L11)

```diff
-     var LQ = wQ(39251);
-     const qQ = "instancesDeclaration",
-       oQ = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "clipPlaneFragment",
+       Sk = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41718: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "clipPlaneFragmentDeclaration",
+       Sk = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L17` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/318.js#L70) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/318.js#L17)

```diff
-   41385: (QQ, FQ, wQ) => {
+   41479: (kk, ek, ik) => {
```

#### 4. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L21-L24` → after: `L74-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/318.js#L74-L77) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/318.js#L21-L24)

```diff
-     var LQ = wQ(39251);
-     const qQ = "instancesVertex",
-       oQ = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "helperFunctions",
+       Sk = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 5. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L30` → after: `L83-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L83-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/318.js#L83-L252) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/318.js#L30)

```diff
-   61390: (QQ, FQ, wQ) => {
+   41639: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "objectIdFunctions",
+       Sk = "highp vec4 encodeObjectId(highp float objectId) {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4(objectId/255.0,0.0,0.0,1.0);\n#else\nhighp float id=floor(objectId);highp vec3 encodedId=vec3(\nfloor(mod(id,16777216.0)/65536.0),\nfloor(mod(id,65536.0)/256.0),\nmod(id,256.0) … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   61171: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => bk
+ ... (154 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L32-L41` → after: `L254-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L254-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/318.js#L254-L287) · [Before (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/318.js#L32-L41)

```diff
-       greasedLineVertexShader: () => mQ
-     });
-     var LQ = wQ(39251),
-       qQ = wQ(41311),
-       oQ = wQ(41385);
-     const DQ = "greasedLineVertexShader",
-       kQ = "precision highp float;\n#include<instancesDeclaration>\nattribute float grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute vec3 grl_offsets;\n#endif\nattribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;var … [truncated]
-     LQ.c.ShadersStore[DQ] || (LQ.c.ShadersStore[DQ] = kQ);
-     const vQ = [qQ.c, oQ.d];
-     for (const uQ of vQ) LQ.c.IncludesShadersStore[uQ.name] || (LQ.c.IncludesShadersStore[uQ.name] = uQ.shader);
+       geometryPixelShader: () => uk
+     });
+     var Dk = ik(39412),
+       fk = ik(41639),
+       Sk = ik(41718);
+     const bk = "mrtFragmentDeclaration",
+       rk = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#ifdef MESH_BLEND_TAG\n#if {X}>0\n#if MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if {X}>1\n#if MESH … [truncated]
+     Dk.d.IncludesShadersStore[bk] || (Dk.d.IncludesShadersStore[bk] = rk);
+     const Pk = {
+       name: bk,
+       shader: rk
+     };
+     var mk = ik(41704),
+       Mk = ik(41681),
+       Kk = ik(41710),
+       xk = ik(41479),
+ ... (18 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/319.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/319.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9)

#### 1. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L4` → after: `L4-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L4-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/319.js#L4-L43) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/319.js#L4)

```diff
-   41424: (QQ, FQ, wQ) => {
+   41576: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "bakedVertexAnimation",
+       Sk = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41494: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => bk
+ ... (24 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L8` → after: `L47-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L47-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/319.js#L47-L60) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/319.js#L8)

```diff
-     var LQ = wQ(39251);
+     var Dk = ik(39412);
+     const fk = "bonesVertex",
+       Sk = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41597: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => bk
+     });
+     var Dk = ik(39412);
```

#### 3. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L11` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/319.js#L63) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/319.js#L11)

```diff
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 4. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L17` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/319.js#L69) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/319.js#L17)

```diff
-   41334: (QQ, FQ, wQ) => {
+   41606: (kk, ek, ik) => {
```

#### 5. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L19` → after: `L71-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L71-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/319.js#L71-L84) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/319.js#L19)

```diff
-       b: () => DQ
+       c: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "clipPlaneVertex",
+       Sk = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41522: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => bk
```

#### 6. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L21-L24` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/319.js#L86-L89) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/319.js#L21-L24)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bumpVertexDeclaration",
-       oQ = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "clipPlaneVertexDeclaration",
+       Sk = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 7. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L30` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/319.js#L95) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/319.js#L30)

```diff
-   61038: (QQ, FQ, wQ) => {
+   60943: (kk, ek, ik) => {
```

#### 8. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L34` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/319.js#L99) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/319.js#L34)

```diff
-     var LQ = wQ(39251);
+     var Dk = ik(39412);
```

#### 9. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L37` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/319.js#L102) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/319.js#L37)

```diff
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 10. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L43` → after: `L108-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L108-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/319.js#L108-L121) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/319.js#L43)

```diff
-   61035: (QQ, FQ, wQ) => {
+   41501: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "instancesDeclaration",
+       Sk = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41570: (kk, ek, ik) => {
```

#### 11. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L47-L50` → after: `L125-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/319.js#L125-L128) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/319.js#L47-L50)

```diff
-     var LQ = wQ(39251);
-     const qQ = "pbrBRDFFunctions",
-       oQ = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "instancesVertex",
+       Sk = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 12. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L56` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/319.js#L134) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/319.js#L56)

```diff
-   61030: (QQ, FQ, wQ) => {
+   41568: (kk, ek, ik) => {
```

#### 13. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L58` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/319.js#L136) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/319.js#L58)

```diff
-       e: () => DQ
+       b: () => bk
```

#### 14. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L60-L64` → after: `L138-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/319.js#L138-L141) · [Before (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/319.js#L60-L64)

```diff
-     var LQ = wQ(39251);
-     wQ(41280), wQ(41285);
-     const qQ = "pbrUboDeclaration",
-       oQ = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "morphTargetsVertex",
+       Sk = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (int i=0; i<NUM_MORPH_INFLUENCERS; i++) {if (float(i)>=morphTargetCount) break;vertexID=float(gl_VertexID)*morphTargetTextureInfo.x;\n#ifdef MORPHTARGETS_POSITION\npositionUpdated+=(readVector3FromRawSa … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 15. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L70` → after: `L147-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L147-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/319.js#L147-L199) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/319.js#L70)

```diff
-   61024: (QQ, FQ, wQ) => {
+   41546: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "morphTargetsVertexDeclaration",
+       Sk = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute vec3 position{X};\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute vec3 normal{X};\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute vec3 tangent{X};\n#endif\n#ifdef MORPHTARGETS_UV … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41562: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => bk
+ ... (37 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L72` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/319.js#L201) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/319.js#L72)

```diff
-       pbrVertexShader: () => gQ
+       geometryVertexShader: () => Fk
```

#### 17. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L74-L78` → after: `L203-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L203-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/319.js#L203-L219) · [Before (L74-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/319.js#L74-L78)

```diff
-     var LQ = wQ(39251),
-       qQ = wQ(41276);
-     const oQ = "pbrVertexDeclaration",
-       DQ = "uniform mat4 view;uniform mat4 viewProjection;uniform vec4 vEyePosition;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif\n#ifdef ALBEDO\nuniform mat4 albedoMatrix;uniform vec2 vAlbedoInfos;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBase … [truncated]
-     LQ.c.IncludesShadersStore[oQ] || (LQ.c.IncludesShadersStore[oQ] = DQ);
+     var Dk = ik(39412),
+       fk = ik(41487),
+       Sk = ik(41494),
+       bk = ik(41538),
+       rk = ik(41546),
+       Pk = ik(41501);
+     const mk = "geometryVertexDeclaration",
+       Mk = "uniform mat4 viewProjection;uniform mat4 view;";
+     Dk.d.IncludesShadersStore[mk] || (Dk.d.IncludesShadersStore[mk] = Mk);
+     const Kk = {
+       name: mk,
+       shader: Mk
+     };
+     var xk = ik(41462);
+     const nk = "geometryUboDeclaration",
+       Uk = "#include<sceneUboDeclaration>\n";
+ ... (1 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L83-L122` → after: `L224-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L224-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/319.js#L224-L237) · [Before (L83-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/319.js#L83-L122)

```diff
-     var vQ = wQ(41280),
-       mQ = wQ(41285),
-       uQ = wQ(61030),
-       HQ = wQ(41297),
-       bQ = wQ(41322),
-       YQ = wQ(41300),
-       xQ = wQ(61035),
-       AQ = wQ(41302),
-       tQ = wQ(41309),
-       eQ = wQ(41311),
-       MQ = wQ(41315),
-       GQ = wQ(41329),
-       pQ = wQ(61038),
-       cQ = wQ(41334),
-       CQ = wQ(41343),
-       SQ = wQ(41347),
- ... (24 more removed lines; see GitHub link above)
+     var wk = ik(41522),
+       lk = ik(60943),
+       pk = ik(41562),
+       yk = ik(41568),
+       Yk = ik(41570),
+       Lk = ik(41572),
+       Ck = ik(41576),
+       Ak = ik(41606),
+       jk = ik(41597);
+     const sk = "geometryVertexShader",
+       dk = "precision highp float;\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<morphTargetsVertexGlobalDeclaration>\n#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]\n#include<instancesDeclaration>\n#include<__decl__geom … [truncated]
+     Dk.d.ShadersStore[sk] || (Dk.d.ShadersStore[sk] = dk);
+     const Vk = [fk.b, Sk.d, bk.c, rk.d, Pk.d, Kk, xk.d, Hk, wk.e, lk.c, pk.d, yk.b, Yk.b, Lk.e, Ck.c, Ak.c, jk.b];
+     for (const uk of Vk) Dk.d.IncludesShadersStore[uk.name] || (Dk.d.IncludesShadersStore[uk.name] = uk.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/320.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/320.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d)

#### 1. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/320.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/320.js#L4)

```diff
-   41428: (QQ, FQ, wQ) => {
+   41471: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/320.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/320.js#L6)

```diff
-       e: () => DQ
+       d: () => bk
```

#### 3. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L8-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/320.js#L8-L12) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/320.js#L8-L11)

```diff
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneVertex",
-       oQ = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     ik(41462), ik(41467);
+     const fk = "defaultUboDeclaration",
+       Sk = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 4. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L17-L19` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/320.js#L18-L20) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/320.js#L17-L19)

```diff
-   41343: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => DQ
+   41633: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       defaultPixelShader: () => ke
```

#### 5. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L21-L24` → after: `L22-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/320.js#L22-L26) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/320.js#L21-L24)

```diff
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneVertexDeclaration",
-       oQ = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412),
+       fk = ik(41636);
+     const Sk = "defaultFragmentDeclaration",
+       bk = "uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform vec2 vAmbientInfos;\n#endif\ … [truncated]
+     Dk.d.IncludesShadersStore[Sk] || (Dk.d.IncludesShadersStore[Sk] = bk);
```

#### 6. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L28-L37` → after: `L30-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L30-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/320.js#L30-L45) · [Before (L28-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/320.js#L28-L37)

```diff
-     }
-   },
-   41431: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "fogVertex",
-       oQ = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     };
+     var Pk = ik(41462),
+       mk = ik(41467),
+       Mk = ik(41471),
+       Kk = ik(41639),
+       xk = ik(41644),
+       nk = ik(41653),
+       Uk = ik(41513),
+       Hk = ik(41479),
+       wk = ik(41659),
+       lk = ik(41665),
+       pk = ik(41671),
+       yk = ik(41675);
+     const Yk = "lightsFragmentFunctions",
+       Lk = "struct lightingInfo\n{vec3 diffuse;\n#ifdef SPECULARTERM\nvec3 specular;\n#endif\n#ifdef NDOTL\nfloat ndl;\n#endif\n};lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {light … [truncated]
+     Dk.d.IncludesShadersStore[Yk] || (Dk.d.IncludesShadersStore[Yk] = Lk);
```

#### 7. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L41-L50` → after: `L49-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L49-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/320.js#L49-L54) · [Before (L41-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/320.js#L41-L50)

```diff
-     }
-   },
-   41347: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "fogVertexDeclaration",
-       oQ = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     };
+     var Ak = ik(41677),
+       jk = ik(41681);
+     const sk = "fresnelFunction",
+       dk = "#ifdef FRESNEL\nfloat computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)\n{float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
+     Dk.d.IncludesShadersStore[sk] || (Dk.d.IncludesShadersStore[sk] = dk);
```

#### 8. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L54-L63` → after: `L58-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L58-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/320.js#L58-L73) · [Before (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/320.js#L54-L63)

```diff
-     }
-   },
-   41368: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "logDepthDeclaration",
-       oQ = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     };
+     var Fk = ik(41685),
+       uk = ik(41694),
+       qk = ik(41700),
+       Ik = ik(41702),
+       zk = ik(41704),
+       Qk = ik(41710),
+       vk = ik(41718),
+       Ek = ik(41555),
+       hk = ik(41724),
+       ak = ik(41733),
+       Wk = ik(41737),
+       tk = ik(41745);
+     const Xk = "defaultFragmentAlpha",
+       Bk = "#ifdef OPACITY\nvec4 opacityMap=TEXRD(opacitySampler,vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap.rgb=opacityMap.rgb*vec3(0.3,0.59,0.11);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*vOpacityInfos.y;\n#endif\n#en … [truncated]
+     Dk.d.IncludesShadersStore[Xk] || (Dk.d.IncludesShadersStore[Xk] = Bk);
```

#### 9. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L67-L97` → after: `L77-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L77-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/320.js#L77-L87) · [Before (L67-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/320.js#L67-L97)

```diff
-     }
-   },
-   41449: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "logDepthVertex",
-       oQ = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   60684: (QQ, FQ, wQ) => {
- ... (15 more removed lines; see GitHub link above)
+     };
+     var Tk = ik(41750),
+       Zk = ik(41753),
+       Ok = ik(41756),
+       gk = ik(41760),
+       Gk = ik(41769);
+     const Nk = "defaultPixelShader",
+       Rk = "#define CUSTOM_FRAGMENT_EXTENSION\n#include<__decl__defaultFragment>\n#if defined(BUMP) || !defined(NORMAL)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#define CUSTOM_FRAGMENT_BEGIN … [truncated]
+     Dk.d.ShadersStore[Nk] || (Dk.d.ShadersStore[Nk] = Rk);
+     const Jk = [fk.d, rk, Pk.d, mk.d, Mk.d, Kk.e, xk.d, nk.d, Uk.d, Hk.d, wk.d, lk.e, pk.b, yk.b, Ck, Ak.b, jk.b, Vk, Fk.b, uk.c, qk.e, Ik.e, zk.d, Qk.d, vk.d, Ek.b, hk.e, ak.c, Wk.b, tk.c, ck, Tk.b, Zk.e, Ok.c, gk.d, Gk.b];
+     for (const ee of Jk) Dk.d.IncludesShadersStore[ee.name] || (Dk.d.IncludesShadersStore[ee.name] = ee.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/321.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/321.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49)

#### 1. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/321.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/321.js#L4)

```diff
-   41428: (QQ, FQ, wQ) => {
+   41733: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/321.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/321.js#L6)

```diff
-       e: () => DQ
+       c: () => bk
```

#### 3. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/321.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/321.js#L8-L11)

```diff
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneVertex",
-       oQ = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "clipPlaneFragment",
+       Sk = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 4. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/321.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/321.js#L17)

```diff
-   41343: (QQ, FQ, wQ) => {
+   41718: (kk, ek, ik) => {
```

#### 5. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/321.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/321.js#L19)

```diff
-       c: () => DQ
+       d: () => bk
```

#### 6. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/321.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/321.js#L21-L24)

```diff
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneVertexDeclaration",
-       oQ = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "clipPlaneFragmentDeclaration",
+       Sk = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 7. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/321.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/321.js#L30)

```diff
-   41431: (QQ, FQ, wQ) => {
+   41760: (kk, ek, ik) => {
```

#### 8. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/321.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/321.js#L32)

```diff
-       b: () => DQ
+       d: () => bk
```

#### 9. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/321.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/321.js#L34-L37)

```diff
-     var LQ = wQ(39251);
-     const qQ = "fogVertex",
-       oQ = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "fogFragment",
+       Sk = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 10. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/321.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/321.js#L43)

```diff
-   41347: (QQ, FQ, wQ) => {
+   41724: (kk, ek, ik) => {
```

#### 11. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/321.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/321.js#L47-L50)

```diff
-     var LQ = wQ(39251);
-     const qQ = "fogVertexDeclaration",
-       oQ = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "fogFragmentDeclaration",
+       Sk = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 12. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/321.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/321.js#L56)

```diff
-   41368: (QQ, FQ, wQ) => {
+   41479: (kk, ek, ik) => {
```

#### 13. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/321.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/321.js#L58)

```diff
-       c: () => DQ
+       d: () => bk
```

#### 14. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/321.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/321.js#L60-L63)

```diff
-     var LQ = wQ(39251);
-     const qQ = "logDepthDeclaration",
-       oQ = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "helperFunctions",
+       Sk = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 15. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/321.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/321.js#L69)

```diff
-   41449: (QQ, FQ, wQ) => {
+   41694: (kk, ek, ik) => {
```

#### 16. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/321.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/321.js#L73-L76)

```diff
-     var LQ = wQ(39251);
-     const qQ = "logDepthVertex",
-       oQ = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "imageProcessingDeclaration",
+       Sk = "#ifdef EXPOSURE\nuniform float exposureLinear;\n#endif\n#ifdef CONTRAST\nuniform float contrast;\n#endif\n#ifdef WHITEBALANCE\nuniform mat3 whiteBalanceMatrix;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vec2 vInverseScreenSize;\n#endif\n#ifdef VIGNETTE … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 17. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L82-L84` → after: `L82-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/321.js#L82-L84) · [Before (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/321.js#L82-L84)

```diff
-   60695: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       skyVertexShader: () => YQ
+   41700: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => bk
```

#### 18. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L86-L97` → after: `L86-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L86-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/321.js#L86-L142) · [Before (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/321.js#L86-L97)

```diff
-     var LQ = wQ(39251),
-       qQ = wQ(41368),
-       oQ = wQ(41343),
-       DQ = wQ(41347),
-       kQ = wQ(41428),
-       vQ = wQ(41449),
-       mQ = wQ(41431);
-     const uQ = "skyVertexShader",
-       HQ = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvary … [truncated]
-     LQ.c.ShadersStore[uQ] || (LQ.c.ShadersStore[uQ] = HQ);
-     const bQ = [qQ.c, oQ.c, DQ.e, kQ.e, vQ.c, mQ.b];
-     for (const xQ of bQ) LQ.c.IncludesShadersStore[xQ.name] || (LQ.c.IncludesShadersStore[xQ.name] = xQ.shader);
+     var Dk = ik(39412);
+     const fk = "imageProcessingFunctions",
+       Sk = "#if defined(COLORGRADING) && !defined(COLORGRADING3D)\n/** \n* Polyfill for SAMPLE_TEXTURE_3D,which is unsupported in WebGL.\n* sampler3dSetting.x=textureOffset (0.5/textureSize).\n* sampler3dSetting.y=textureSize.\n*/\n#define inline\nvec3 sampleTexture3D(sampler2D c … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41555: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "logDepthDeclaration",
+       Sk = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+ ... (41 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/322.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/322.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c)

#### 1. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/322.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/322.js#L4)

```diff
-   41568: (QQ, FQ, wQ) => {
+   41733: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/322.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/322.js#L6)

```diff
-       d: () => DQ
+       c: () => bk
```

#### 3. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/322.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/322.js#L8-L11)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bumpFragment",
-       oQ = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "clipPlaneFragment",
+       Sk = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 4. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/322.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/322.js#L17)

```diff
-   41543: (QQ, FQ, wQ) => {
+   41718: (kk, ek, ik) => {
```

#### 5. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L21-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/322.js#L21-L24) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/322.js#L21-L25)

```diff
-     var LQ = wQ(39251);
-     wQ(41503);
-     const qQ = "bumpFragmentFunctions",
-       oQ = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "clipPlaneFragmentDeclaration",
+       Sk = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 6. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/322.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/322.js#L31)

```diff
-   41535: (QQ, FQ, wQ) => {
+   41760: (kk, ek, ik) => {
```

#### 7. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L33` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/322.js#L32) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/322.js#L33)

```diff
-       e: () => DQ
+       d: () => bk
```

#### 8. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/322.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/322.js#L35-L38)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bumpFragmentMainFunctions",
-       oQ = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "fogFragment",
+       Sk = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 9. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/322.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/322.js#L44)

```diff
-   41487: (QQ, FQ, wQ) => {
+   41724: (kk, ek, ik) => {
```

#### 10. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/322.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/322.js#L48-L51)

```diff
-     var LQ = wQ(39251);
-     const qQ = "clusteredLightingFunctions",
-       oQ = "struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};\n#define inline\nClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(\ntexelFetch(lightDataTexture,ivec2( … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "fogFragmentDeclaration",
+       Sk = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 11. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L57` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/322.js#L56) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/322.js#L57)

```diff
-   41571: (QQ, FQ, wQ) => {
+   41479: (kk, ek, ik) => {
```

#### 12. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L59` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/322.js#L58) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/322.js#L59)

```diff
-       b: () => DQ
+       d: () => bk
```

#### 13. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L61-L64` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/322.js#L60-L63) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/322.js#L61-L64)

```diff
-     var LQ = wQ(39251);
-     const qQ = "decalFragment",
-       oQ = "#ifdef DECAL\n#ifdef GAMMADECAL\ndecalColor.rgb=toLinearSpace(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalColor.a*=decalColor.a;\n#endif\nsurfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);\n#endif\n";
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "helperFunctions",
+       Sk = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 14. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L70` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/322.js#L69) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/322.js#L70)

```diff
-   41586: (QQ, FQ, wQ) => {
+   41555: (kk, ek, ik) => {
```

#### 15. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L74-L77` → after: `L73-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L73-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/322.js#L73-L118) · [Before (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/322.js#L74-L77)

```diff
-     var LQ = wQ(39251);
-     const qQ = "lightFragment",
-       oQ = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvec4 diffuse{X}=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X}) && defined(CLUST … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "logDepthDeclaration",
+       Sk = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41756: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "logDepthFragment",
+       Sk = "#ifdef LOGARITHMICDEPTH\ngl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;\n#endif\n";
+ ... (30 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/323.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/323.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3)

#### 1. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/323.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/323.js#L4)

```diff
-   41560: (QQ, FQ, wQ) => {
+   41479: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/323.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/323.js#L6)

```diff
-       c: () => DQ
+       d: () => bk
```

#### 3. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/323.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/323.js#L8-L11)

```diff
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneFragment",
-       oQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "helperFunctions",
+       Sk = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 4. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/323.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/323.js#L17-L19)

```diff
-   41548: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ
+   60800: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       rgbdDecodePixelShader: () => Pk
```

#### 5. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L21-L69` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/323.js#L21-L27) · [Before (L21-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/323.js#L21-L69)

```diff
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneFragmentDeclaration",
-       oQ = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41596: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "fogFragment",
-       oQ = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
- ... (33 more removed lines; see GitHub link above)
+     var Dk = ik(39412),
+       fk = ik(41479);
+     const Sk = "rgbdDecodePixelShader",
+       bk = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}";
+     Dk.d.ShadersStore[Sk] || (Dk.d.ShadersStore[Sk] = bk);
+     const rk = [fk.d];
+     for (const mk of rk) Dk.d.IncludesShadersStore[mk.name] || (Dk.d.IncludesShadersStore[mk.name] = mk.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/324.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/324.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2)

#### 1. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/324.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/324.js#L4)

```diff
-   41760: (QQ, FQ, wQ) => {
+   41479: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/324.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/324.js#L6)

```diff
-       b: () => DQ
+       d: () => bk
```

#### 3. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/324.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/324.js#L8-L11)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bumpVertex",
-       oQ = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "helperFunctions",
+       Sk = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 4. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/324.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/324.js#L17-L19)

```diff
-   41678: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => DQ
+   60807: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       rgbdEncodePixelShader: () => Pk
```

#### 5. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L21-L120` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/324.js#L21-L27) · [Before (L21-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/324.js#L21-L120)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bumpVertexDeclaration",
-       oQ = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41632: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ
-     });
-     var LQ = wQ(39251);
-     wQ(41616), wQ(41625);
-     const qQ = "defaultUboDeclaration",
- ... (84 more removed lines; see GitHub link above)
+     var Dk = ik(39412),
+       fk = ik(41479);
+     const Sk = "rgbdEncodePixelShader",
+       bk = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}";
+     Dk.d.ShadersStore[Sk] || (Dk.d.ShadersStore[Sk] = bk);
+     const rk = [fk.d];
+     for (const mk of rk) Dk.d.IncludesShadersStore[mk.name] || (Dk.d.IncludesShadersStore[mk.name] = mk.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/325.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/325.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5)

#### 1. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/325.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/325.js#L4)

```diff
-   41653: (QQ, FQ, wQ) => {
+   41576: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/325.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/325.js#L6)

```diff
-       e: () => DQ
+       c: () => bk
```

#### 3. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/325.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/325.js#L8-L11)

```diff
-     var LQ = wQ(39251);
-     const qQ = "instancesDeclaration",
-       oQ = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "bakedVertexAnimation",
+       Sk = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 4. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/325.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/325.js#L17)

```diff
-   41727: (QQ, FQ, wQ) => {
+   41494: (kk, ek, ik) => {
```

#### 5. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/325.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/325.js#L19)

```diff
-       e: () => DQ
+       d: () => bk
```

#### 6. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/325.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/325.js#L21-L24)

```diff
-     var LQ = wQ(39251);
-     const qQ = "instancesVertex",
-       oQ = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "bakedVertexAnimationDeclaration",
+       Sk = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 7. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/325.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/325.js#L30)

```diff
-   41625: (QQ, FQ, wQ) => {
+   41487: (kk, ek, ik) => {
```

#### 8. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/325.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/325.js#L32)

```diff
-       e: () => DQ
+       b: () => bk
```

#### 9. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/325.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/325.js#L34-L37)

```diff
-     var LQ = wQ(39251);
-     const qQ = "meshUboDeclaration",
-       oQ = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "bonesDeclaration",
+       Sk = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 10. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/325.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/325.js#L43)

```diff
-   41616: (QQ, FQ, wQ) => {
+   41572: (kk, ek, ik) => {
```

#### 11. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/325.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/325.js#L45)

```diff
-       c: () => DQ
+       e: () => bk
```

#### 12. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/325.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/325.js#L47-L50)

```diff
-     var LQ = wQ(39251);
-     const qQ = "sceneUboDeclaration",
-       oQ = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "bonesVertex",
+       Sk = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 13. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L56` → after: `L56-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L56-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/325.js#L56-L147) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/325.js#L56)

```diff
-   61385: (QQ, FQ, wQ) => {
+   41606: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "clipPlaneVertex",
+       Sk = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41522: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => bk
+ ... (76 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L58` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/325.js#L149) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/325.js#L58)

```diff
-       greasedLineVertexShaderWGSL: () => HQ
+       colorVertexShader: () => pk
```

#### 15. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L60-L69` → after: `L151-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L151-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/325.js#L151-L167) · [Before (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/325.js#L60-L69)

```diff
-     var LQ = wQ(39251),
-       qQ = wQ(41653),
-       oQ = wQ(41616),
-       DQ = wQ(41625),
-       kQ = wQ(41727);
-     const vQ = "greasedLineVertexShader",
-       mQ = "#include<instancesDeclaration>\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\nattribute grl_widths: f32;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute grl_offsets: vec3f; \n#endif\nattribute grl_colorPointers: f32;attribute position: vec3f;varying grlCoun … [truncated]
-     LQ.c.ShadersStoreWGSL[vQ] || (LQ.c.ShadersStoreWGSL[vQ] = mQ);
-     const uQ = [qQ.e, oQ.c, DQ.e, kQ.e];
-     for (const bQ of uQ) LQ.c.IncludesShadersStoreWGSL[bQ.name] || (LQ.c.IncludesShadersStoreWGSL[bQ.name] = bQ.shader);
+     var Dk = ik(39412),
+       fk = ik(41487),
+       Sk = ik(41494),
+       bk = ik(41522),
+       rk = ik(41524),
+       Pk = ik(41501),
+       mk = ik(41570),
+       Mk = ik(41572),
+       Kk = ik(41576),
+       xk = ik(41606),
+       nk = ik(41608),
+       Uk = ik(41617);
+     const Hk = "colorVertexShader",
+       wk = "attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#ifdef FOG\nuniform mat4 view;\n#endif\n#include<i … [truncated]
+     Dk.d.ShadersStore[Hk] || (Dk.d.ShadersStore[Hk] = wk);
+     const lk = [fk.b, Sk.d, bk.e, rk.e, Pk.d, mk.b, Mk.e, Kk.c, xk.c, nk.b, Uk.c];
+ ... (1 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/326.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/326.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a)

#### 1. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/326.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/326.js#L4)

```diff
-   41632: (QQ, FQ, wQ) => {
+   41501: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/326.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/326.js#L6)

```diff
-       e: () => DQ
+       d: () => bk
```

#### 3. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L8-L12` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/326.js#L8-L11) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/326.js#L8-L12)

```diff
-     var LQ = wQ(39251);
-     wQ(41616), wQ(41625);
-     const qQ = "defaultUboDeclaration",
-       oQ = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "instancesDeclaration",
+       Sk = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 4. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L18` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/326.js#L17) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/326.js#L18)

```diff
-   41643: (QQ, FQ, wQ) => {
+   41570: (kk, ek, ik) => {
```

#### 5. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L20` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/326.js#L19) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/326.js#L20)

```diff
-       e: () => DQ
+       b: () => bk
```

#### 6. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L22-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/326.js#L21-L24) · [Before (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/326.js#L22-L25)

```diff
-     var LQ = wQ(39251);
-     const qQ = "helperFunctions",
-       oQ = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "instancesVertex",
+       Sk = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 7. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L31-L33` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/326.js#L30-L32) · [Before (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/326.js#L31-L33)

```diff
-   41616: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => DQ
+   61310: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       greasedLineVertexShader: () => mk
```

#### 8. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L35-L112` → after: `L34-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/326.js#L34-L41) · [Before (L35-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/326.js#L35-L112)

```diff
-     var LQ = wQ(39251);
-     const qQ = "sceneUboDeclaration",
-       oQ = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41795: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       defaultPixelShaderWGSL: () => BQ
-     });
-     var LQ = wQ(39251),
-       qQ = wQ(41616),
-       oQ = wQ(41625),
- ... (62 more removed lines; see GitHub link above)
+     var Dk = ik(39412),
+       fk = ik(41501),
+       Sk = ik(41570);
+     const bk = "greasedLineVertexShader",
+       rk = "precision highp float;\n#include<instancesDeclaration>\nattribute float grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute vec3 grl_offsets;\n#endif\nattribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;var … [truncated]
+     Dk.d.ShadersStore[bk] || (Dk.d.ShadersStore[bk] = rk);
+     const Pk = [fk.d, Sk.b];
+     for (const Mk of Pk) Dk.d.IncludesShadersStore[Mk.name] || (Dk.d.IncludesShadersStore[Mk.name] = Mk.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/327.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/327.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042)

#### 1. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/327.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/327.js#L4)

```diff
-   41643: (QQ, FQ, wQ) => {
+   41597: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/327.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/327.js#L6)

```diff
-       e: () => DQ
+       b: () => bk
```

#### 3. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/327.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/327.js#L8-L11)

```diff
-     var LQ = wQ(39251);
-     const qQ = "helperFunctions",
-       oQ = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "bumpVertex",
+       Sk = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 4. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/327.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/327.js#L17)

```diff
-   61119: (QQ, FQ, wQ) => {
+   41519: (kk, ek, ik) => {
```

#### 5. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/327.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/327.js#L21-L24)

```diff
-     var LQ = wQ(39251);
-     const qQ = "pbrBRDFFunctions",
-       oQ = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "bumpVertexDeclaration",
+       Sk = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 6. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/327.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/327.js#L30)

```diff
-   41616: (QQ, FQ, wQ) => {
+   60943: (kk, ek, ik) => {
```

#### 7. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L34-L37` → after: `L34-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L34-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/327.js#L34-L122) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/327.js#L34-L37)

```diff
-     var LQ = wQ(39251);
-     const qQ = "sceneUboDeclaration",
-       oQ = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "harmonicsFunctions",
+       Sk = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   60935: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "pbrBRDFFunctions",
+       Sk = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+ ... (73 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/328.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/328.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81)

#### 1. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/328.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/328.js#L4)

```diff
-   41741: (QQ, FQ, wQ) => {
+   41606: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/328.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/328.js#L6)

```diff
-       b: () => DQ
+       c: () => bk
```

#### 3. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/328.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/328.js#L8-L11)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bakedVertexAnimation",
-       oQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "clipPlaneVertex",
+       Sk = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 4. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/328.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/328.js#L17)

```diff
-   41650: (QQ, FQ, wQ) => {
+   41522: (kk, ek, ik) => {
```

#### 5. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/328.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/328.js#L19)

```diff
-       b: () => DQ
+       e: () => bk
```

#### 6. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/328.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/328.js#L21-L24)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bakedVertexAnimationDeclaration",
-       oQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "clipPlaneVertexDeclaration",
+       Sk = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 7. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/328.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/328.js#L30)

```diff
-   41646: (QQ, FQ, wQ) => {
+   41608: (kk, ek, ik) => {
```

#### 8. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/328.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/328.js#L34-L37)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bonesDeclaration",
-       oQ = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "fogVertex",
+       Sk = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 9. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/328.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/328.js#L43)

```diff
-   41733: (QQ, FQ, wQ) => {
+   41524: (kk, ek, ik) => {
```

#### 10. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/328.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/328.js#L45)

```diff
-       b: () => DQ
+       e: () => bk
```

#### 11. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/328.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/328.js#L47-L50)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bonesVertex",
-       oQ = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "fogVertexDeclaration",
+       Sk = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 12. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/328.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/328.js#L56)

```diff
-   41760: (QQ, FQ, wQ) => {
+   41555: (kk, ek, ik) => {
```

#### 13. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/328.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/328.js#L60-L63)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bumpVertex",
-       oQ = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "logDepthDeclaration",
+       Sk = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 14. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/328.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/328.js#L69)

```diff
-   41764: (QQ, FQ, wQ) => {
+   41624: (kk, ek, ik) => {
```

#### 15. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/328.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/328.js#L71)

```diff
-       e: () => DQ
+       b: () => bk
```

#### 16. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/328.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/328.js#L73-L76)

```diff
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneVertex",
-       oQ = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "logDepthVertex",
+       Sk = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 17. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L82-L84` → after: `L82-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/328.js#L82-L84) · [Before (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/328.js#L82-L84)

```diff
-   41682: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => DQ
+   60711: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       particlesVertexShader: () => nk
```

#### 18. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L86-L223` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/328.js#L86-L97) · [Before (L86-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/328.js#L86-L223)

```diff
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneVertexDeclaration",
-       oQ = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   61125: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "harmonicsFunctions",
-       oQ = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
- ... (122 more removed lines; see GitHub link above)
+     var Dk = ik(39412),
+       fk = ik(41522),
+       Sk = ik(41524),
+       bk = ik(41555),
+       rk = ik(41606),
+       Pk = ik(41608),
+       mk = ik(41624);
+     const Mk = "particlesVertexShader",
+       Kk = "attribute vec3 position;attribute vec4 color;attribute float angle;attribute vec2 size;\n#ifdef ANIMATESHEET\nattribute float cellIndex;\n#endif\n#ifndef BILLBOARD\nattribute vec3 direction;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute vec3 direction;\n#endif\n#ifdef … [truncated]
+     Dk.d.ShadersStore[Mk] || (Dk.d.ShadersStore[Mk] = Kk);
+     const xk = [fk.e, Sk.e, bk.b, rk.c, Pk.b, mk.b];
+     for (const Uk of xk) Dk.d.IncludesShadersStore[Uk.name] || (Dk.d.IncludesShadersStore[Uk.name] = Uk.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/329.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/329.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab)

#### 1. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/329.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/329.js#L4)

```diff
-   41741: (QQ, FQ, wQ) => {
+   41606: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/329.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/329.js#L6)

```diff
-       b: () => DQ
+       c: () => bk
```

#### 3. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/329.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/329.js#L8-L11)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bakedVertexAnimation",
-       oQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "clipPlaneVertex",
+       Sk = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 4. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/329.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/329.js#L17)

```diff
-   41650: (QQ, FQ, wQ) => {
+   41522: (kk, ek, ik) => {
```

#### 5. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/329.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/329.js#L19)

```diff
-       b: () => DQ
+       e: () => bk
```

#### 6. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/329.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/329.js#L21-L24)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bakedVertexAnimationDeclaration",
-       oQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "clipPlaneVertexDeclaration",
+       Sk = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 7. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/329.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/329.js#L30)

```diff
-   41646: (QQ, FQ, wQ) => {
+   41608: (kk, ek, ik) => {
```

#### 8. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/329.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/329.js#L34-L37)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bonesDeclaration",
-       oQ = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "fogVertex",
+       Sk = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 9. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/329.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/329.js#L43)

```diff
-   41733: (QQ, FQ, wQ) => {
+   41524: (kk, ek, ik) => {
```

#### 10. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/329.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/329.js#L45)

```diff
-       b: () => DQ
+       e: () => bk
```

#### 11. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/329.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/329.js#L47-L50)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bonesVertex",
-       oQ = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "fogVertexDeclaration",
+       Sk = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 12. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/329.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/329.js#L56)

```diff
-   41764: (QQ, FQ, wQ) => {
+   41555: (kk, ek, ik) => {
```

#### 13. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/329.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/329.js#L58)

```diff
-       e: () => DQ
+       b: () => bk
```

#### 14. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/329.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/329.js#L60-L63)

```diff
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneVertex",
-       oQ = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "logDepthDeclaration",
+       Sk = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 15. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/329.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/329.js#L69)

```diff
-   41682: (QQ, FQ, wQ) => {
+   41624: (kk, ek, ik) => {
```

#### 16. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/329.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/329.js#L71)

```diff
-       d: () => DQ
+       b: () => bk
```

#### 17. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/329.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/329.js#L73-L76)

```diff
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneVertexDeclaration",
-       oQ = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "logDepthVertex",
+       Sk = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 18. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L82-L84` → after: `L82-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/329.js#L82-L84) · [Before (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/329.js#L82-L84)

```diff
-   41768: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => DQ
+   60723: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       skyVertexShader: () => nk
```

#### 19. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L86-L375` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/329.js#L86-L97) · [Before (L86-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/329.js#L86-L375)

```diff
-     var LQ = wQ(39251);
-     const qQ = "fogVertex",
-       oQ = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41685: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "fogVertexDeclaration",
-       oQ = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
- ... (274 more removed lines; see GitHub link above)
+     var Dk = ik(39412),
+       fk = ik(41555),
+       Sk = ik(41522),
+       bk = ik(41524),
+       rk = ik(41606),
+       Pk = ik(41624),
+       mk = ik(41608);
+     const Mk = "skyVertexShader",
+       Kk = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvary … [truncated]
+     Dk.d.ShadersStore[Mk] || (Dk.d.ShadersStore[Mk] = Kk);
+     const xk = [fk.b, Sk.e, bk.e, rk.c, Pk.b, mk.b];
+     for (const Uk of xk) Dk.d.IncludesShadersStore[Uk.name] || (Dk.d.IncludesShadersStore[Uk.name] = Uk.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/330.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/330.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2)

#### 1. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L4-L30` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/330.js#L4) · [Before (L4-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/330.js#L4-L30)

```diff
-   41875: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneFragment",
-       oQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41866: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => DQ
- ... (11 more removed lines; see GitHub link above)
+   41737: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L34-L37` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/330.js#L8-L11) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/330.js#L34-L37)

```diff
-     var LQ = wQ(39251);
-     const qQ = "clusteredLightingFunctions",
-       oQ = "struct ClusteredLight {vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\nvLightDirection: vec4f,\nvLightFalloff: vec4f,}\nfn getClusteredLight(lightDataTexture: texture_2d<f32>,index: u32)->ClusteredLight {return ClusteredLight(\ntextureLoad(lightData … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "bumpFragment",
+       Sk = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 3. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L43` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/330.js#L17) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/330.js#L43)

```diff
-   41894: (QQ, FQ, wQ) => {
+   41710: (kk, ek, ik) => {
```

#### 4. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L47-L154` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/330.js#L21-L25) · [Before (L47-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/330.js#L47-L154)

```diff
-     var LQ = wQ(39251);
-     const qQ = "depthPrePass",
-       oQ = "#ifdef DEPTHPREPASS\n#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)\nfragmentOutputs.color= vec4f(0.,0.,0.,1.0);\n#endif\n#ifndef DEPTHPREPASS_SKIP_EARLY_RETURN\nreturn fragmentOutputs;\n#endif\n#endif\n";
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41909: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "fogFragment",
-       oQ = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
- ... (92 more removed lines; see GitHub link above)
+     var Dk = ik(39412);
+     ik(41681);
+     const fk = "bumpFragmentFunctions",
+       Sk = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 5. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L160-L173` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/330.js#L31) · [Before (L160-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/330.js#L160-L173)

```diff
-   41667: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "mainUVVaryingDeclaration",
-       oQ = "#ifdef MAINUV{X}\nvarying vMainUV{X}: vec2f;\n#endif\n";
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41911: (QQ, FQ, wQ) => {
+   41704: (kk, ek, ik) => {
```

#### 6. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L177-L180` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/330.js#L35-L38) · [Before (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/330.js#L177-L180)

```diff
-     var LQ = wQ(39251);
-     const qQ = "meshBlendTagFragmentOutput",
-       oQ = "#if SCENE_MRT_COUNT>{X}\n#if defined(PREPASS_MESH_BLEND_TAG) && PREPASS_MESH_BLEND_TAG_INDEX=={X}\nfragmentOutputs.fragData{X}=meshBlendTagOutput;\n#else\nfragmentOutputs.fragData{X}=fragData[{X}];\n#endif\n#endif\n";
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "bumpFragmentMainFunctions",
+       Sk = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 7. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L186-L199` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/330.js#L44) · [Before (L186-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/330.js#L186-L199)

```diff
-   41625: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "meshUboDeclaration",
-       oQ = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41804: (QQ, FQ, wQ) => {
+   41675: (kk, ek, ik) => {
```

#### 8. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L203-L232` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/330.js#L48-L51) · [Before (L203-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/330.js#L203-L232)

```diff
-     var LQ = wQ(39251);
-     const qQ = "objectIdFunctions",
-       oQ = "fn encodeObjectId(objectId: f32)->vec4f {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4f(objectId/255.0,0.0,0.0,1.0);\n#else\nlet id=i32(objectId);let encodedId=vec3f(\nf32((id>>16) & 0xFF),\nf32((id>>8) & 0xFF),\nf32(id & 0xFF)\n)/255.0;return vec4f(encodedId,select(0.0, … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41813: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "oitDeclaration",
-       oQ = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#define MAX_DEPTH 99999.0\nvar oitDepthSamplerSampler: sampler;var oitDepthSampler: texture_2d<f32>;var oitFrontColorSamplerSampler: sampler;var oitFrontColorSampler: texture_2d<f32>;\n#endif\n";
- ... (14 more removed lines; see GitHub link above)
+     var Dk = ik(39412);
+     const fk = "clusteredLightingFunctions",
+       Sk = "struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};\n#define inline\nClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(\ntexelFetch(lightDataTexture,ivec2( … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 9. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L238` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/330.js#L57) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/330.js#L238)

```diff
-   41811: (QQ, FQ, wQ) => {
+   41745: (kk, ek, ik) => {
```

#### 10. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L242-L259` → after: `L61-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/330.js#L61-L64) · [Before (L242-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/330.js#L242-L259)

```diff
-     var LQ = wQ(39251);
-     wQ(41804);
-     const qQ = "prePassDeclaration",
-       oQ = "#ifdef PREPASS\n#ifndef PREPASS_CUSTOM_VARYINGS\n#ifdef PREPASS_LOCAL_POSITION\nvarying vPosition : vec3f;\n#endif\n#ifdef PREPASS_DEPTH\nvarying vViewPos: vec3f;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvarying vNormViewDepth: f32;\n#endif\n#if (defined(PREPASS … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41838: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "reflectionFunction",
- ... (2 more removed lines; see GitHub link above)
+     var Dk = ik(39412);
+     const fk = "decalFragment",
+       Sk = "#ifdef DECAL\n#ifdef GAMMADECAL\ndecalColor.rgb=toLinearSpace(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalColor.a*=decalColor.a;\n#endif\nsurfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);\n#endif\n";
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 11. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L265` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/330.js#L70) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/330.js#L265)

```diff
-   41835: (QQ, FQ, wQ) => {
+   41753: (kk, ek, ik) => {
```

#### 12. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L269-L298` → after: `L74-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/330.js#L74-L77) · [Before (L269-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/330.js#L269-L298)

```diff
-     var LQ = wQ(39251);
-     const qQ = "samplerFragmentDeclaration",
-       oQ = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41832: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "shadowsFragmentFunctions",
-       oQ = "#ifdef SHADOWS\n#ifndef SHADOWFLOAT\nfn unpack(color: vec4f)->f32\n{const bit_shift: vec4f= vec4f(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}\n#endif\nfn computeFallOff(value: f32,clipSpace: vec2f,frustumEdgeFalloff: f32)->f3 … [truncated]
- ... (14 more removed lines; see GitHub link above)
+     var Dk = ik(39412);
+     const fk = "lightFragment",
+       Sk = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvec4 diffuse{X}=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X}) && defined(CLUST … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/331.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/331.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430)

#### 1. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/331.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/331.js#L4)

```diff
-   41875: (QQ, FQ, wQ) => {
+   41733: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/331.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/331.js#L6)

```diff
-       e: () => DQ
+       c: () => bk
```

#### 3. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/331.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/331.js#L8)

```diff
-     var LQ = wQ(39251);
+     var Dk = ik(39412);
```

#### 4. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/331.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/331.js#L10-L11)

```diff
-       oQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+       Sk = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 5. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/331.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/331.js#L17)

```diff
-   41866: (QQ, FQ, wQ) => {
+   41718: (kk, ek, ik) => {
```

#### 6. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/331.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/331.js#L19)

```diff
-       b: () => DQ
+       d: () => bk
```

#### 7. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/331.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/331.js#L21)

```diff
-     var LQ = wQ(39251);
+     var Dk = ik(39412);
```

#### 8. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L23-L24` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/331.js#L23-L24) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/331.js#L23-L24)

```diff
-       oQ = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+       Sk = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 9. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/331.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/331.js#L30)

```diff
-   41909: (QQ, FQ, wQ) => {
+   41760: (kk, ek, ik) => {
```

#### 10. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/331.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/331.js#L34)

```diff
-     var LQ = wQ(39251);
+     var Dk = ik(39412);
```

#### 11. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/331.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/331.js#L36-L37)

```diff
-       oQ = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+       Sk = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 12. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/331.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/331.js#L43)

```diff
-   41871: (QQ, FQ, wQ) => {
+   41724: (kk, ek, ik) => {
```

#### 13. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/331.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/331.js#L45)

```diff
-       b: () => DQ
+       e: () => bk
```

#### 14. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/331.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/331.js#L47)

```diff
-     var LQ = wQ(39251);
+     var Dk = ik(39412);
```

#### 15. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L49-L50` → after: `L49-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/331.js#L49-L50) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/331.js#L49-L50)

```diff
-       oQ = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+       Sk = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     Dk.d.IncludesShadersStore[fk] || (Dk.d.IncludesShadersStore[fk] = Sk);
```

#### 16. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L56-L58` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/331.js#L56-L58) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/331.js#L56-L58)

```diff
-   41643: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ
+   42174: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       colorPixelShader: () => Kk
```

#### 17. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L60-L189` → after: `L60-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/331.js#L60-L69) · [Before (L60-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/331.js#L60-L189)

```diff
-     var LQ = wQ(39251);
-     const qQ = "helperFunctions",
-       oQ = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41842: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "imageProcessingDeclaration",
-       oQ = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
- ... (114 more removed lines; see GitHub link above)
+     var Dk = ik(39412),
+       fk = ik(41718),
+       Sk = ik(41724),
+       bk = ik(41733),
+       rk = ik(41760);
+     const Pk = "colorPixelShader",
+       mk = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoi … [truncated]
+     Dk.d.ShadersStore[Pk] || (Dk.d.ShadersStore[Pk] = mk);
+     const Mk = [fk.d, Sk.e, bk.c, rk.d];
+     for (const xk of Mk) Dk.d.IncludesShadersStore[xk.name] || (Dk.d.IncludesShadersStore[xk.name] = xk.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/332.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/332.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1)

#### 1. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/332.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/332.js#L4)

```diff
-   41875: (QQ, FQ, wQ) => {
+   41959: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/332.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/332.js#L6)

```diff
-       e: () => DQ
+       c: () => bk
```

#### 3. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/332.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/332.js#L8-L11)

```diff
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneFragment",
-       oQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "bumpVertex",
+       Sk = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 4. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/332.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/332.js#L17)

```diff
-   41866: (QQ, FQ, wQ) => {
+   41847: (kk, ek, ik) => {
```

#### 5. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/332.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/332.js#L19)

```diff
-       b: () => DQ
+       e: () => bk
```

#### 6. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/332.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/332.js#L21-L24)

```diff
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneFragmentDeclaration",
-       oQ = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "bumpVertexDeclaration",
+       Sk = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 7. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/332.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/332.js#L30)

```diff
-   41909: (QQ, FQ, wQ) => {
+   41793: (kk, ek, ik) => {
```

#### 8. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/332.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/332.js#L32)

```diff
-       d: () => DQ
+       c: () => bk
```

#### 9. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L34-L37` → after: `L34-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/332.js#L34-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/332.js#L34-L37)

```diff
-     var LQ = wQ(39251);
-     const qQ = "fogFragment",
-       oQ = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     ik(41781), ik(41789);
+     const fk = "defaultUboDeclaration",
+       Sk = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 10. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L43` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/332.js#L44) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/332.js#L43)

```diff
-   41871: (QQ, FQ, wQ) => {
+   41806: (kk, ek, ik) => {
```

#### 11. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L45` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/332.js#L46) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/332.js#L45)

```diff
-       b: () => DQ
+       d: () => bk
```

#### 12. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L47-L50` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/332.js#L48-L51) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/332.js#L47-L50)

```diff
-     var LQ = wQ(39251);
-     const qQ = "fogFragmentDeclaration",
-       oQ = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "helperFunctions",
+       Sk = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 13. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L56` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/332.js#L57) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/332.js#L56)

```diff
-   41643: (QQ, FQ, wQ) => {
+   41781: (kk, ek, ik) => {
```

#### 14. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L58` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/332.js#L59) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/332.js#L58)

```diff
-       e: () => DQ
+       c: () => bk
```

#### 15. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L60-L63` → after: `L61-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/332.js#L61-L64) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/332.js#L60-L63)

```diff
-     var LQ = wQ(39251);
-     const qQ = "helperFunctions",
-       oQ = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "sceneUboDeclaration",
+       Sk = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 16. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L69-L71` → after: `L70-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/332.js#L70-L72) · [Before (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/332.js#L69-L71)

```diff
-   41702: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => DQ
+   41774: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       defaultVertexShaderWGSL: () => Zk
```

#### 17. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L73-L76` → after: `L74-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L74-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/332.js#L74-L91) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/332.js#L73-L76)

```diff
-     var LQ = wQ(39251);
-     const qQ = "logDepthDeclaration",
-       oQ = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412),
+       fk = ik(41781),
+       Sk = ik(41789),
+       bk = ik(41793),
+       rk = ik(41802),
+       Pk = ik(41806),
+       mk = ik(41808),
+       Mk = ik(41817),
+       Kk = ik(41824),
+       xk = ik(41826),
+       nk = ik(41832),
+       Uk = ik(41839),
+       Hk = ik(41847),
+       wk = ik(41854),
+       lk = ik(41863);
+     const pk = "lightVxFragmentDeclaration",
+ ... (2 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L80-L118` → after: `L95-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L95-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/332.js#L95-L120) · [Before (L80-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/332.js#L80-L118)

```diff
-     }
-   },
-   41905: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "logDepthFragment",
-       oQ = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   60709: (QQ, FQ, wQ) => {
- ... (23 more removed lines; see GitHub link above)
+     };
+     var Lk = ik(41868),
+       Ck = ik(41876),
+       Ak = ik(41878),
+       jk = ik(41885),
+       sk = ik(41894),
+       dk = ik(41901),
+       Vk = ik(41907),
+       Fk = ik(41910),
+       uk = ik(41917),
+       qk = ik(41926),
+       Ik = ik(41934),
+       zk = ik(41941),
+       Qk = ik(41948),
+       vk = ik(41956),
+       Ek = ik(41959),
+ ... (10 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/333.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/333.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613)

#### 1. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/333.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/333.js#L4)

```diff
-   41643: (QQ, FQ, wQ) => {
+   41824: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/333.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/333.js#L6)

```diff
-       e: () => DQ
+       b: () => bk
```

#### 3. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/333.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/333.js#L8-L11)

```diff
-     var LQ = wQ(39251);
-     const qQ = "helperFunctions",
-       oQ = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "instancesDeclaration",
+       Sk = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 4. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L17` → after: `L17-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L17-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/333.js#L17-L56) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/333.js#L17)

```diff
-   60878: (QQ, FQ, wQ) => {
+   41917: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "instancesVertex",
+       Sk = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41789: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => bk
+ ... (24 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L19` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/333.js#L58) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/333.js#L19)

```diff
-       rgbdDecodePixelShaderWGSL: () => vQ
+       greasedLineVertexShaderWGSL: () => Kk
```

#### 6. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L21-L27` → after: `L60-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/333.js#L60-L69) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/333.js#L21-L27)

```diff
-     var LQ = wQ(39251),
-       qQ = wQ(41643);
-     const oQ = "rgbdDecodePixelShader",
-       DQ = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(t … [truncated]
-     LQ.c.ShadersStoreWGSL[oQ] || (LQ.c.ShadersStoreWGSL[oQ] = DQ);
-     const kQ = [qQ.e];
-     for (const mQ of kQ) LQ.c.IncludesShadersStoreWGSL[mQ.name] || (LQ.c.IncludesShadersStoreWGSL[mQ.name] = mQ.shader);
+     var Dk = ik(39412),
+       fk = ik(41824),
+       Sk = ik(41781),
+       bk = ik(41789),
+       rk = ik(41917);
+     const Pk = "greasedLineVertexShader",
+       mk = "#include<instancesDeclaration>\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\nattribute grl_widths: f32;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute grl_offsets: vec3f; \n#endif\nattribute grl_colorPointers: f32;attribute position: vec3f;varying grlCoun … [truncated]
+     Dk.d.ShadersStoreWGSL[Pk] || (Dk.d.ShadersStoreWGSL[Pk] = mk);
+     const Mk = [fk.b, Sk.c, bk.d, rk.c];
+     for (const xk of Mk) Dk.d.IncludesShadersStoreWGSL[xk.name] || (Dk.d.IncludesShadersStoreWGSL[xk.name] = xk.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/334.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/334.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069)

#### 1. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/334.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/334.js#L4)

```diff
-   41643: (QQ, FQ, wQ) => {
+   41793: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/334.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/334.js#L6)

```diff
-       e: () => DQ
+       c: () => bk
```

#### 3. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L8-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/334.js#L8-L12) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/334.js#L8-L11)

```diff
-     var LQ = wQ(39251);
-     const qQ = "helperFunctions",
-       oQ = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     ik(41781), ik(41789);
+     const fk = "defaultUboDeclaration",
+       Sk = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 4. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L17` → after: `L18-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L18-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/334.js#L18-L44) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/334.js#L17)

```diff
-   60908: (QQ, FQ, wQ) => {
+   41806: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "helperFunctions",
+       Sk = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41781: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => bk
+ ... (11 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L19` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/334.js#L46) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/334.js#L19)

```diff
-       rgbdEncodePixelShaderWGSL: () => vQ
+       defaultPixelShaderWGSL: () => Jk
```

#### 6. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L21-L27` → after: `L48-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L48-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/334.js#L48-L112) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/334.js#L21-L27)

```diff
-     var LQ = wQ(39251),
-       qQ = wQ(41643);
-     const oQ = "rgbdEncodePixelShader",
-       DQ = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSa … [truncated]
-     LQ.c.ShadersStoreWGSL[oQ] || (LQ.c.ShadersStoreWGSL[oQ] = DQ);
-     const kQ = [qQ.e];
-     for (const mQ of kQ) LQ.c.IncludesShadersStoreWGSL[mQ.name] || (LQ.c.IncludesShadersStoreWGSL[mQ.name] = mQ.shader);
+     var Dk = ik(39412),
+       fk = ik(41781),
+       Sk = ik(41789),
+       bk = ik(41793),
+       rk = ik(41993),
+       Pk = ik(41999),
+       mk = ik(42008),
+       Mk = ik(41832),
+       Kk = ik(41806),
+       xk = ik(42010),
+       nk = ik(42019),
+       Uk = ik(42026);
+     const Hk = "clusteredLightingCompute",
+       wk = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nviewDirectionW: vec3f,\nvNormal: vec3f,\nlightData: vec4f,\nsliceRange: vec2u,\nglossiness: f32\n)->lightingInfo {var re … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[Hk] || (Dk.d.IncludesShadersStoreWGSL[Hk] = wk);
+     const lk = {
+ ... (49 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/335.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/335.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6)

#### 1. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/335.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/335.js#L4)

```diff
-   41741: (QQ, FQ, wQ) => {
+   41806: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/335.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/335.js#L6)

```diff
-       b: () => DQ
+       d: () => bk
```

#### 3. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/335.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/335.js#L8-L11)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bakedVertexAnimation",
-       oQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "helperFunctions",
+       Sk = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 4. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/335.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/335.js#L17)

```diff
-   41650: (QQ, FQ, wQ) => {
+   61036: (kk, ek, ik) => {
```

#### 5. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/335.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/335.js#L19)

```diff
-       b: () => DQ
+       e: () => bk
```

#### 6. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/335.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/335.js#L21-L24)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bakedVertexAnimationDeclaration",
-       oQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "pbrBRDFFunctions",
+       Sk = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 7. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L30-L82` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/335.js#L30) · [Before (L30-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/335.js#L30-L82)

```diff
-   41646: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "bonesDeclaration",
-       oQ = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41733: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => DQ
- ... (37 more removed lines; see GitHub link above)
+   41781: (kk, ek, ik) => {
```

#### 8. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L86-L167` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/335.js#L34-L37) · [Before (L86-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/335.js#L86-L167)

```diff
-     var LQ = wQ(39251);
-     const qQ = "fogVertex",
-       oQ = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41685: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "fogVertexDeclaration",
-       oQ = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
- ... (66 more removed lines; see GitHub link above)
+     var Dk = ik(39412);
+     const fk = "sceneUboDeclaration",
+       Sk = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/336.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/336.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028)

#### 1. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L4-L8` → after: `L4-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L4-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/336.js#L4-L60) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/336.js#L4-L8)

```diff
-   41760: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => DQ
-     });
-     var LQ = wQ(39251);
+   41934: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "bakedVertexAnimation",
+       Sk = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41817: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => bk
+ ... (41 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L11-L34` → after: `L63-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L63-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/336.js#L63-L99) · [Before (L11-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/336.js#L11-L34)

```diff
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41678: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => DQ
-     });
-     var LQ = wQ(39251);
-     const qQ = "bumpVertexDeclaration",
-       oQ = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
-     const DQ = {
-       name: qQ,
- ... (8 more removed lines; see GitHub link above)
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41966: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "clipPlaneVertex",
+       Sk = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
+     const bk = {
+       name: fk,
+ ... (21 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L37-L57` → after: `L102-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L102-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/336.js#L102-L199) · [Before (L37-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/336.js#L37-L57)

```diff
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   61114: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ
-     });
-     var LQ = wQ(39251);
-     wQ(41616), wQ(41625);
-     const qQ = "pbrUboDeclaration",
-       oQ = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
-     const DQ = {
- ... (5 more removed lines; see GitHub link above)
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41824: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "instancesDeclaration",
+       Sk = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
+     const bk = {
+       name: fk,
+ ... (82 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L59-L102` → after: `L201-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L201-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/336.js#L201-L223) · [Before (L59-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/336.js#L59-L102)

```diff
-       pbrVertexShaderWGSL: () => JQ
-     });
-     var LQ = wQ(39251),
-       qQ = wQ(41616),
-       oQ = wQ(41625),
-       DQ = wQ(61114),
-       kQ = wQ(41636),
-       vQ = wQ(41667),
-       mQ = wQ(41643),
-       uQ = wQ(61119),
-       HQ = wQ(41646),
-       bQ = wQ(41650),
-       YQ = wQ(41653),
-       xQ = wQ(41660),
-       AQ = wQ(41675),
-       tQ = wQ(61125),
- ... (28 more removed lines; see GitHub link above)
+       geometryVertexShaderWGSL: () => Ck
+     });
+     var Dk = ik(39412),
+       fk = ik(41808),
+       Sk = ik(41817),
+       bk = ik(41876),
+       rk = ik(41878),
+       Pk = ik(41824),
+       mk = ik(41781),
+       Mk = ik(41854),
+       Kk = ik(61044),
+       xk = ik(41907),
+       nk = ik(41910),
+       Uk = ik(41917),
+       Hk = ik(41926),
+       wk = ik(41934),
+ ... (7 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/337.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/337.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557)

#### 1. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L4` → after: `L4-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L4-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L4-L30) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L4)

```diff
-   41764: (QQ, FQ, wQ) => {
+   41934: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "bakedVertexAnimation",
+       Sk = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41817: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => bk
+ ... (11 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L8` → after: `L34-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L34-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L34-L60) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L8)

```diff
-     var LQ = wQ(39251);
+     var Dk = ik(39412);
+     const fk = "bonesDeclaration",
+       Sk = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41926: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "bonesVertex",
+       Sk = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
+ ... (11 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L11` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L63) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L11)

```diff
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 4. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L17` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L69) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L17)

```diff
-   41682: (QQ, FQ, wQ) => {
+   41854: (kk, ek, ik) => {
```

#### 5. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L19` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L71) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L19)

```diff
-       d: () => DQ
+       e: () => bk
```

#### 6. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L21` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L73) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L21)

```diff
-     var LQ = wQ(39251);
+     var Dk = ik(39412);
```

#### 7. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L24` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L76) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L24)

```diff
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 8. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L30` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L82) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L30)

```diff
-   41768: (QQ, FQ, wQ) => {
+   41969: (kk, ek, ik) => {
```

#### 9. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L32` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L84) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L32)

```diff
-       c: () => DQ
+       d: () => bk
```

#### 10. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L34` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L86) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L34)

```diff
-     var LQ = wQ(39251);
+     var Dk = ik(39412);
```

#### 11. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L37` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L89) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L37)

```diff
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 12. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L43` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L95) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L43)

```diff
-   41685: (QQ, FQ, wQ) => {
+   41863: (kk, ek, ik) => {
```

#### 13. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L45` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L97) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L45)

```diff
-       e: () => DQ
+       c: () => bk
```

#### 14. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L47` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L99) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L47)

```diff
-     var LQ = wQ(39251);
+     var Dk = ik(39412);
```

#### 15. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L50` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L102) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L50)

```diff
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 16. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L56` → after: `L108-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L108-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L108-L121) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L56)

```diff
-   41702: (QQ, FQ, wQ) => {
+   41824: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "instancesDeclaration",
+       Sk = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41917: (kk, ek, ik) => {
```

#### 17. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L60` → after: `L125-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L125-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L125-L151) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L60)

```diff
-     var LQ = wQ(39251);
+     var Dk = ik(39412);
+     const fk = "instancesVertex",
+       Sk = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41868: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "lightVxUboDeclaration",
+       Sk = "#ifdef LIGHT{X}\nstruct Light{X}\n{vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\n#ifdef SPOTLIGHT{X}\nvLightDirection: vec4f,\nvLightFalloff: vec4f,\n#elif defined(POINTLIGHT{X})\nvLightFalloff: vec4f,\n#elif defined(HEMILIGHT{X})\nvLightGround: v … [truncated]
+ ... (11 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L63` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L154) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L63)

```diff
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 19. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L69` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L160) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L69)

```diff
-   41792: (QQ, FQ, wQ) => {
+   41980: (kk, ek, ik) => {
```

#### 20. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L71` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L162) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L71)

```diff
-       e: () => DQ
+       c: () => bk
```

#### 21. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L73` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L164) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L73)

```diff
-     var LQ = wQ(39251);
+     var Dk = ik(39412);
```

#### 22. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L76` → after: `L167-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L167-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L167-L232) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L76)

```diff
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41832: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "mainUVVaryingDeclaration",
+       Sk = "#ifdef MAINUV{X}\nvarying vMainUV{X}: vec2f;\n#endif\n";
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
+     const bk = {
+       name: fk,
+ ... (50 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L82-L84` → after: `L238-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L238-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L238-L370) · [Before (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L82-L84)

```diff
-   60676: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       particlesVertexShaderWGSL: () => YQ
+   41876: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "morphTargetsVertexGlobalDeclaration",
+       Sk = "#ifdef MORPHTARGETS\nuniform morphTargetInfluences : array<f32,NUM_MORPH_INFLUENCERS>;\n#ifdef MORPHTARGETS_TEXTURE \nuniform morphTargetTextureIndices : array<f32,NUM_MORPH_INFLUENCERS>;uniform morphTargetTextureInfo : vec3<f32>;var morphTargets : texture_2d_array<f3 … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41941: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => bk
+ ... (117 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L86-L97` → after: `L372-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L372-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/337.js#L372-L375) · [Before (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/337.js#L86-L97)

```diff
-     var LQ = wQ(39251),
-       qQ = wQ(41682),
-       oQ = wQ(41685),
-       DQ = wQ(41702),
-       kQ = wQ(41764),
-       vQ = wQ(41768),
-       mQ = wQ(41792);
-     const uQ = "particlesVertexShader",
-       HQ = "attribute position: vec3f;attribute color: vec4f;attribute angle: f32;attribute size: vec2f;\n#ifdef ANIMATESHEET\nattribute cellIndex: f32;\n#endif\n#ifndef BILLBOARD\nattribute direction: vec3f;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute direction: vec3f;\n#endif … [truncated]
-     LQ.c.ShadersStoreWGSL[uQ] || (LQ.c.ShadersStoreWGSL[uQ] = HQ);
-     const bQ = [qQ.d, oQ.e, DQ.c, kQ.e, vQ.c, mQ.e];
-     for (const xQ of bQ) LQ.c.IncludesShadersStoreWGSL[xQ.name] || (LQ.c.IncludesShadersStoreWGSL[xQ.name] = xQ.shader);
+     var Dk = ik(39412);
+     const fk = "vertexPullingVertex",
+       Sk = "#ifdef USE_VERTEX_PULLING\nlet vpVertexIndex: u32=vp_readVertexIndex(vertexInputs.vertexIndex);positionUpdated=vp_readPosition(uniforms.vp_position_info,vpVertexIndex);\n#ifdef NORMAL\nnormalUpdated=vp_readNormal(uniforms.vp_normal_info,vpVertexIndex);\n#endif\n#ifdef … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/338.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/338.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07)

#### 1. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L4` → after: `L4-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L4-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/338.js#L4-L30) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/338.js#L4)

```diff
-   41764: (QQ, FQ, wQ) => {
+   42095: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "clipPlaneFragment",
+       Sk = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   42083: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => bk
+ ... (11 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L8-L11` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/338.js#L34-L37) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/338.js#L8-L11)

```diff
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneVertex",
-       oQ = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "clusteredLightingFunctions",
+       Sk = "struct ClusteredLight {vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\nvLightDirection: vec4f,\nvLightFalloff: vec4f,}\nfn getClusteredLight(lightDataTexture: texture_2d<f32>,index: u32)->ClusteredLight {return ClusteredLight(\ntextureLoad(lightData … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 3. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L17` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/338.js#L43) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/338.js#L17)

```diff
-   41682: (QQ, FQ, wQ) => {
+   42109: (kk, ek, ik) => {
```

#### 4. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L19` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/338.js#L45) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/338.js#L19)

```diff
-       d: () => DQ
+       b: () => bk
```

#### 5. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L21-L24` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/338.js#L47-L50) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/338.js#L21-L24)

```diff
-     var LQ = wQ(39251);
-     const qQ = "clipPlaneVertexDeclaration",
-       oQ = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "depthPrePass",
+       Sk = "#ifdef DEPTHPREPASS\n#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)\nfragmentOutputs.color= vec4f(0.,0.,0.,1.0);\n#endif\n#ifndef DEPTHPREPASS_SKIP_EARLY_RETURN\nreturn fragmentOutputs;\n#endif\n#endif\n";
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 6. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L30` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/338.js#L56) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/338.js#L30)

```diff
-   41768: (QQ, FQ, wQ) => {
+   42130: (kk, ek, ik) => {
```

#### 7. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L32` → after: `L58-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L58-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/338.js#L58-L71) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/338.js#L32)

```diff
-       c: () => DQ
+       e: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "fogFragment",
+       Sk = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   42089: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => bk
```

#### 8. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L34-L37` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/338.js#L73-L76) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/338.js#L34-L37)

```diff
-     var LQ = wQ(39251);
-     const qQ = "fogVertex",
-       oQ = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "fogFragmentDeclaration",
+       Sk = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 9. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L43` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/338.js#L82) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/338.js#L43)

```diff
-   41685: (QQ, FQ, wQ) => {
+   42053: (kk, ek, ik) => {
```

#### 10. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L47-L50` → after: `L86-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L86-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/338.js#L86-L102) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/338.js#L47-L50)

```diff
-     var LQ = wQ(39251);
-     const qQ = "fogVertexDeclaration",
-       oQ = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "imageProcessingDeclaration",
+       Sk = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   42057: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "imageProcessingFunctions",
+       Sk = "#if TONEMAPPING==3\nconst PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;resu … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L56` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/338.js#L108) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/338.js#L56)

```diff
-   41702: (QQ, FQ, wQ) => {
+   42010: (kk, ek, ik) => {
```

#### 12. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L60` → after: `L112-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L112-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/338.js#L112-L125) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/338.js#L60)

```diff
-     var LQ = wQ(39251);
+     var Dk = ik(39412);
+     const fk = "lightUboDeclaration",
+       Sk = "#ifdef LIGHT{X}\nstruct Light{X}\n{vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\n#ifdef SPOTLIGHT{X}\nvLightDirection: vec4f,\nvLightFalloff: vec4f,\n#elif defined(POINTLIGHT{X})\nvLightFalloff: vec4f,\n#elif defined(HEMILIGHT{X})\nvLightGround: v … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41885: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => bk
+     });
+     var Dk = ik(39412);
```

#### 13. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L63` → after: `L128-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L128-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/338.js#L128-L167) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/338.js#L63)

```diff
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   42123: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "logDepthFragment",
+       Sk = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
+     const bk = {
+       name: fk,
+ ... (24 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L69` → after: `L173-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L173-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/338.js#L173-L278) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/338.js#L69)

```diff
-   41792: (QQ, FQ, wQ) => {
+   42134: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => bk
+     });
+     var Dk = ik(39412);
+     const fk = "meshBlendTagFragmentOutput",
+       Sk = "#if SCENE_MRT_COUNT>{X}\n#if defined(PREPASS_MESH_BLEND_TAG) && PREPASS_MESH_BLEND_TAG_INDEX=={X}\nfragmentOutputs.fragData{X}=meshBlendTagOutput;\n#else\nfragmentOutputs.fragData{X}=fragData[{X}];\n#endif\n#endif\n";
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
+     const bk = {
+       name: fk,
+       shader: Sk
+     }
+   },
+   41789: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => bk
+ ... (90 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L73-L76` → after: `L282-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L282-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/338.js#L282-L285) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/338.js#L73-L76)

```diff
-     var LQ = wQ(39251);
-     const qQ = "logDepthVertex",
-       oQ = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "shadowsFragmentFunctions",
+       Sk = "#ifdef SHADOWS\n#ifndef SHADOWFLOAT\nfn unpack(color: vec4f)->f32\n{const bit_shift: vec4f= vec4f(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}\n#endif\nfn computeFallOff(value: f32,clipSpace: vec2f,frustumEdgeFalloff: f32)->f3 … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 16. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L82-L84` → after: `L291-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L291-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/338.js#L291-L293) · [Before (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/338.js#L82-L84)

```diff
-   60704: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       skyVertexShaderWGSL: () => YQ
+   42062: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => bk
```

#### 17. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L86-L97` → after: `L295-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/338.js#L295-L298) · [Before (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/338.js#L86-L97)

```diff
-     var LQ = wQ(39251),
-       qQ = wQ(41702),
-       oQ = wQ(41682),
-       DQ = wQ(41685),
-       kQ = wQ(41764),
-       vQ = wQ(41792),
-       mQ = wQ(41768);
-     const uQ = "skyVertexShader",
-       HQ = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying v … [truncated]
-     LQ.c.ShadersStoreWGSL[uQ] || (LQ.c.ShadersStoreWGSL[uQ] = HQ);
-     const bQ = [qQ.c, oQ.d, DQ.e, kQ.e, vQ.e, mQ.c];
-     for (const xQ of bQ) LQ.c.IncludesShadersStoreWGSL[xQ.name] || (LQ.c.IncludesShadersStoreWGSL[xQ.name] = xQ.shader);
+     var Dk = ik(39412);
+     const fk = "textureRepetitionFunctions",
+       Sk = "#if TEXTURE_REPETITION_MODE>0\nfn _texRepHash4(p: vec2f)->vec4f {return fract(sin(vec4f(\n1.0+dot(p,vec2f(37.0,17.0)),\n2.0+dot(p,vec2f(11.0,47.0)),\n3.0+dot(p,vec2f(41.0,29.0)),\n4.0+dot(p,vec2f(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nfn _te … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/339.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/339.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2)

#### 1. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/339.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/339.js#L4)

```diff
-   41882: (QQ, FQ, wQ) => {
+   42095: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L8-L48` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/339.js#L8) · [Before (L8-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/339.js#L8-L48)

```diff
-     var LQ = wQ(39251);
-     const qQ = "bumpFragment",
-       oQ = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
-     const DQ = {
-       name: qQ,
-       shader: oQ
-     }
-   },
-   41862: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => DQ
-     });
-     var LQ = wQ(39251);
-     wQ(41835);
-     const qQ = "bumpFragmentFunctions",
- ... (25 more removed lines; see GitHub link above)
+     var Dk = ik(39412);
```

#### 3. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L51` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/339.js#L11) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/339.js#L51)

```diff
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 4. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L57` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/339.js#L17) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/339.js#L57)

```diff
-   41866: (QQ, FQ, wQ) => {
+   42083: (kk, ek, ik) => {
```

#### 5. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L61` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/339.js#L21) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/339.js#L61)

```diff
-     var LQ = wQ(39251);
+     var Dk = ik(39412);
```

#### 6. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L64` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/339.js#L24) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/339.js#L64)

```diff
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 7. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L70` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/339.js#L30) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/339.js#L70)

```diff
-   41804: (QQ, FQ, wQ) => {
+   42130: (kk, ek, ik) => {
```

#### 8. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L72` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/339.js#L32) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/339.js#L72)

```diff
-       b: () => DQ
+       e: () => bk
```

#### 9. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L74-L77` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/339.js#L34-L37) · [Before (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/339.js#L74-L77)

```diff
-     var LQ = wQ(39251);
-     const qQ = "objectIdFunctions",
-       oQ = "fn encodeObjectId(objectId: f32)->vec4f {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4f(objectId/255.0,0.0,0.0,1.0);\n#else\nlet id=i32(objectId);let encodedId=vec3f(\nf32((id>>16) & 0xFF),\nf32((id>>8) & 0xFF),\nf32(id & 0xFF)\n)/255.0;return vec4f(encodedId,select(0.0, … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "fogFragment",
+       Sk = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 10. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L83` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/339.js#L43) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/339.js#L83)

```diff
-   61300: (QQ, FQ, wQ) => {
+   42089: (kk, ek, ik) => {
```

#### 11. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L87-L90` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/339.js#L47-L50) · [Before (L87-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/339.js#L87-L90)

```diff
-     var LQ = wQ(39251);
-     const qQ = "openpbrDielectricReflectance",
-       oQ = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "fogFragmentDeclaration",
+       Sk = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 12. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L96` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/339.js#L56) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/339.js#L96)

```diff
-   61303: (QQ, FQ, wQ) => {
+   41806: (kk, ek, ik) => {
```

#### 13. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L98` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/339.js#L58) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/339.js#L98)

```diff
-       e: () => DQ
+       d: () => bk
```

#### 14. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L100-L103` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/339.js#L60-L63) · [Before (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/339.js#L100-L103)

```diff
-     var LQ = wQ(39251);
-     const qQ = "openpbrGeometryInfo",
-       oQ = "struct geometryInfoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32};struct geometryInfoAnisoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32,\nanisotropy: f32,\nanisotropicTange … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "helperFunctions",
+       Sk = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 15. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L109` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/339.js#L69) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/339.js#L109)

```diff
-   61307: (QQ, FQ, wQ) => {
+   42053: (kk, ek, ik) => {
```

#### 16. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L111` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/339.js#L71) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/339.js#L111)

```diff
-       d: () => DQ
+       e: () => bk
```

#### 17. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L113-L116` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/339.js#L73-L76) · [Before (L113-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/339.js#L113-L116)

```diff
-     var LQ = wQ(39251);
-     const qQ = "openpbrIblFunctions",
-       oQ = "#ifdef REFLECTION\nfn sampleIrradiance(\nsurfaceNormal: vec3f\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,vEnvironmentIrradianceSH: vec3f\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defi … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "imageProcessingDeclaration",
+       Sk = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 18. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L122` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/339.js#L82) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/339.js#L122)

```diff
-   61320: (QQ, FQ, wQ) => {
+   42057: (kk, ek, ik) => {
```

#### 19. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L124` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/339.js#L84) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/339.js#L124)

```diff
-       e: () => DQ
+       c: () => bk
```

#### 20. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L126-L129` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/339.js#L86-L89) · [Before (L126-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/339.js#L126-L129)

```diff
-     var LQ = wQ(39251);
-     const qQ = "openpbrSubsurfaceLayerData",
-       oQ = "var subsurface_weight: f32=uniforms.vSubsurfaceWeight;var subsurface_color: vec3f=uniforms.vSubsurfaceColor.rgb;var subsurface_radius: f32=uniforms.vSubsurfaceRadius;var subsurface_radius_scale: vec3f=uniforms.vSubsurfaceRadiusScale;var subsurface_scatter_anisotropy:  … [truncated]
-     LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
+     var Dk = ik(39412);
+     const fk = "imageProcessingFunctions",
+       Sk = "#if TONEMAPPING==3\nconst PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;resu … [truncated]
+     Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
```

#### 21. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L135` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/339.js#L95) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/339.js#L135)

```diff
-   61315: (QQ, FQ, wQ) => {
+   41885: (kk, ek, ik) => {
```
