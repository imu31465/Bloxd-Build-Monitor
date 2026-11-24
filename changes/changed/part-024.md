# Changed — Bundle Modifications Report (Part 024 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `24 / 65` (**315** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 023](part-023.md) · [Part 025 →](part-025.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/317.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/317.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9)

#### 1. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/317.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/317.js#L4-L6)

```diff
-   41909: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD
+   42115: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       _HDRTextureLoader: () => Dp
```

#### 2. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L8-L14` → after: `L8-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L8-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/317.js#L8-L74) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/317.js#L8-L14)

```diff
-     var pD = wD(39776);
-     const sD = "bakedVertexAnimation",
-       KD = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
+     var Op = cp(37320);
+     class op {
+       static ConvertPanoramaToCubemap(pp, ip, cp, Op) {
+         let op, Ip = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           Sp = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+         if (!pp) throw "ConvertPanoramaToCubemap: input cannot be null";
+         if (pp.length != ip * cp * 3) {
+           if (pp.length != ip * cp * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
+           op = 4
+         } else op = 3;
+         return {
+           front: this.CreateCubemapTexture(Op, this.FACE_FRONT, pp, ip, cp, Ip, Sp, op),
+           back: this.CreateCubemapTexture(Op, this.FACE_BACK, pp, ip, cp, Ip, Sp, op),
+           left: this.CreateCubemapTexture(Op, this.FACE_LEFT, pp, ip, cp, Ip, Sp, op),
+           right: this.CreateCubemapTexture(Op, this.FACE_RIGHT, pp, ip, cp, Ip, Sp, op),
+           up: this.CreateCubemapTexture(Op, this.FACE_UP, pp, ip, cp, Ip, Sp, op),
+ ... (51 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L16-L27` → after: `L76-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L76-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/317.js#L76-L80) · [Before (L16-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/317.js#L16-L27)

```diff
-   },
-   41830: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "bakedVertexAnimationDeclaration",
-       KD = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
+ 
+     function Ip(pp, ip, cp, Op, op, Ip) {
+       op > 0 ? (op = function(pp, ip) {
+         return ip > 1023 ? pp * Math.pow(2, 1023) * Math.pow(2, ip - 1023) : ip < -1074 ? pp * Math.pow(2, -1074) * Math.pow(2, ip + 1074) : pp * Math.pow(2, ip)
+       }(1, op - 136), pp[Ip + 0] = ip * op, pp[Ip + 1] = cp * op, pp[Ip + 2] = Op * op) : (pp[Ip + 0] = 0, pp[Ip + 1] = 0, pp[Ip + 2] = 0)
```

#### 4. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L29-L40` → after: `L82-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L82-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/317.js#L82-L86) · [Before (L29-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/317.js#L29-L40)

```diff
-   },
-   41826: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "bonesDeclaration",
-       KD = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
+ 
+     function Sp(pp, ip) {
+       let cp, Op = "";
+       for (let op = ip; op < pp.length - ip && (cp = String.fromCharCode(pp[op]), "\n" != cp); op++) Op += cp;
+       return Op
```

#### 5. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L42-L53` → after: `L88-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L88-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/317.js#L88-L109) · [Before (L42-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/317.js#L42-L53)

```diff
-   },
-   41906: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "bonesVertex",
-       KD = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
+ 
+     function xp(pp) {
+       let ip = Sp(pp, 0);
+       if ("#" != ip[0] || "?" != ip[1]) throw "Bad HDR Format.";
+       let cp = !1,
+         Op = !1,
+         op = 0;
+       do {
+         op += ip.length + 1, ip = Sp(pp, op), "FORMAT=32-bit_rle_rgbe" == ip ? Op = !0 : 0 == ip.length && (cp = !0)
+       } while (!cp);
+       if (!Op) throw "HDR Bad header format, unsupported FORMAT";
+       op += ip.length + 1, ip = Sp(pp, op);
+       const Ip = /^-Y (.*) \+X (.*)$/g.exec(ip);
+       if (!Ip || Ip.length < 3) throw "HDR Bad header format, no size";
+       const xp = parseInt(Ip[2]),
+         Lp = parseInt(Ip[1]);
+ ... (6 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L55-L66` → after: `L111-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L111-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/317.js#L111-L137) · [Before (L55-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/317.js#L55-L66)

```diff
-   },
-   41937: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "clipPlaneVertex",
-       KD = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
+ 
+     function Lp(pp, ip) {
+       return function(pp, ip) {
+         let cp = ip.height;
+         const Op = ip.width;
+         let op, Sp, xp, Lp, Dp, Ap, Pp, Wp, yp = ip.dataPosition;
+         const Up = new ArrayBuffer(4 * Op),
+           wp = new Uint8Array(Up),
+           vp = new ArrayBuffer(ip.width * ip.height * 4 * 3),
+           tp = new Float32Array(vp);
+         for (; cp > 0;) {
+           if (op = pp[yp++], Sp = pp[yp++], xp = pp[yp++], Lp = pp[yp++], 2 != op || 2 != Sp || 128 & xp || ip.width < 8 || ip.width > 32767) return Yp(pp, ip);
+           if ((xp << 8 | Lp) != Op) throw "HDR Bad header format, wrong scan line width";
+           for (Ap = 0, Wp = 0; Wp < 4; Wp++)
+             for (Pp = (Wp + 1) * Op; Ap < Pp;)
+               if (op = pp[yp++], Sp = pp[yp++], op > 128) {
+ ... (11 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L68-L79` → after: `L139-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L139-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/317.js#L139-L150) · [Before (L68-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/317.js#L68-L79)

```diff
-   },
-   41856: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "clipPlaneVertexDeclaration",
-       KD = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
+ 
+     function Yp(pp, ip) {
+       let cp = ip.height;
+       const Op = ip.width;
+       let op, Sp, xp, Lp, Yp, Dp = ip.dataPosition;
+       const Ap = new ArrayBuffer(ip.width * ip.height * 4 * 3),
+         Pp = new Float32Array(Ap);
+       for (; cp > 0;) {
+         for (Yp = 0; Yp < ip.width; Yp++) op = pp[Dp++], Sp = pp[Dp++], xp = pp[Dp++], Lp = pp[Dp++], Ip(Pp, op, Sp, xp, Lp, (ip.height - cp) * Op * 3 + 3 * Yp);
+         cp--
+       }
+       return Pp
```

#### 8. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L81-L404` → after: `L152-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L152-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/317.js#L152-L171) · [Before (L81-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/317.js#L81-L404)

```diff
-   },
-   41790: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "decalVertexDeclaration",
-       KD = "#ifdef DECAL\nuniform vec4 vDecalInfos;uniform mat4 decalMatrix;\n#endif\n";
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   41942: (DD, zD, wD) => {
-     wD.d(zD, {
- ... (308 more removed lines; see GitHub link above)
+     op.FACE_LEFT = [new Op.o(-1, -1, -1), new Op.o(1, -1, -1), new Op.o(-1, 1, -1), new Op.o(1, 1, -1)], op.FACE_RIGHT = [new Op.o(1, -1, 1), new Op.o(-1, -1, 1), new Op.o(1, 1, 1), new Op.o(-1, 1, 1)], op.FACE_FRONT = [new Op.o(1, -1, -1), new Op.o(1, -1, 1), new Op.o(1, 1, -1), … [truncated]
+     class Dp {
+       constructor() {
+         this.supportCascades = !1
+       }
+       loadCubeData() {
+         throw ".hdr not supported in Cube."
+       }
+       loadData(pp, ip, cp) {
+         const Op = new Uint8Array(pp.buffer, pp.byteOffset, pp.byteLength),
+           op = xp(Op),
+           Ip = Lp(Op, op),
+           Sp = op.width * op.height,
+           Yp = new Float32Array(4 * Sp);
+         for (let xp = 0; xp < Sp; xp += 1) Yp[4 * xp] = Ip[3 * xp], Yp[4 * xp + 1] = Ip[3 * xp + 1], Yp[4 * xp + 2] = Ip[3 * xp + 2], Yp[4 * xp + 3] = 1;
+         cp(op.width, op.height, ip.generateMipMaps, !1, (() => {
+ ... (4 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/318.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/318.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c)

#### 1. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L4-L71` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/318.js#L4-L6) · [Before (L4-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/318.js#L4-L71)

```diff
-   41964: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "decalFragmentDeclaration",
-       KD = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42066: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => rD
- ... (52 more removed lines; see GitHub link above)
+   42119: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       _KTXTextureLoader: () => yp
```

#### 2. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L73-L79` → after: `L8-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L8-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/318.js#L8-L47) · [Before (L73-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/318.js#L73-L79)

```diff
-     var pD = wD(39776);
-     const sD = "mainUVVaryingDeclaration",
-       KD = "#ifdef MAINUV{X}\nvarying vec2 vMainUV{X};\n#endif\n";
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
+     var Op = cp(38905);
+     class op {
+       constructor(pp, ip) {
+         if (this.data = pp, this.isInvalid = !1, !op.IsValid(pp)) return this.isInvalid = !0, void Op.e.Error("texture missing KTX identifier");
+         const cp = Uint32Array.BYTES_PER_ELEMENT,
+           Ip = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * cp),
+           Sp = 67305985 === Ip.getUint32(0, !0);
+         return this.glType = Ip.getUint32(1 * cp, Sp), this.glTypeSize = Ip.getUint32(2 * cp, Sp), this.glFormat = Ip.getUint32(3 * cp, Sp), this.glInternalFormat = Ip.getUint32(4 * cp, Sp), this.glBaseInternalFormat = Ip.getUint32(5 * cp, Sp), this.pixelWidth = Ip.getUint32(6 *  … [truncated]
+       }
+       uploadLevels(pp, ip) {
+         switch (this.loadType) {
+           case op.COMPRESSED_2D:
+             this._upload2DCompressedLevels(pp, ip);
+           case op.TEX_2D:
+           case op.COMPRESSED_3D:
+           case op.TEX_3D:
+ ... (24 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L81-L92` → after: `L49-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L49-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/318.js#L49-L55) · [Before (L81-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/318.js#L81-L92)

```diff
-   },
-   41802: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "meshUboDeclaration",
-       KD = "#ifdef WEBGL2\nuniform mat4 world;uniform float visibility;\n#else\nlayout(std140,column_major) uniform;uniform Mesh\n{mat4 world;float visibility;};\n#endif\n#define WORLD_UBO\n";
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
+     op.HEADER_LEN = 64, op.COMPRESSED_2D = 0, op.COMPRESSED_3D = 1, op.TEX_2D = 2, op.TEX_3D = 3;
+     var Ip, Sp, xp, Lp = cp(42123),
+       Yp = cp(40304);
+ 
+     function Dp(pp, ip) {
+       const cp = ip?.jsDecoderModule || KTX2DECODER;
+       pp && (pp.wasmBaseUrl && (cp.Transcoder.WasmBaseUrl = pp.wasmBaseUrl), pp.wasmUASTCToASTC && (cp.LiteTranscoder_UASTC_ASTC.WasmModuleURL = pp.wasmUASTCToASTC), pp.wasmUASTCToBC7 && (cp.LiteTranscoder_UASTC_BC7.WasmModuleURL = pp.wasmUASTCToBC7), pp.wasmUASTCToRGBA_UNORM &&  … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L94-L105` → after: `L57-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L57-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/318.js#L57-L242) · [Before (L94-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/318.js#L94-L105)

```diff
-   },
-   41980: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "oitDeclaration",
-       KD = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#extension GL_EXT_draw_buffers : require\nlayout(location=0) out vec2 depth; \nlayout(location=1) out vec4 frontColor;layout(location=2) out vec4 backColor;\n#define MAX_DEPTH 99999.0\nhighp vec4 gl_FragColor;uniform sampler2D oi … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
+ 
+     function Ap(pp) {
+       let ip;
+       "undefined" === typeof pp && "undefined" !== typeof KTX2DECODER && (pp = KTX2DECODER), onmessage = cp => {
+         if (cp.data) switch (cp.data.action) {
+           case "init": {
+             const Op = cp.data.urls;
+             Op && (Op.jsDecoderModule && "undefined" === typeof pp && (importScripts(Op.jsDecoderModule), pp = KTX2DECODER), Dp(Op)), cp.data.wasmBinaries && Dp(void 0, {
+               ...cp.data.wasmBinaries,
+               jsDecoderModule: pp
+             }), ip = new pp.KTX2Decoder, postMessage({
+               action: "init"
+             });
+             break
+           }
+           case "setDefaultDecoderOptions":
+ ... (170 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L107-L118` → after: `L244-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L244-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/318.js#L244-L290) · [Before (L107-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/318.js#L107-L118)

```diff
-   },
-   42084: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "oitFragment",
-       KD = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\nfloat fragDepth=gl_FragCoord.z; \n#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS\nuint halfFloat=packHalf2x16(vec2(fragDepth));vec2 full=unpackHalf2x16(halfFloat);fragDepth=full.x;\n#endif\nivec2 fragCoord=ivec2(gl_FragCoord.xy);ve … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
+ 
+     function Wp(pp) {
+       switch (pp) {
+         case 35916:
+           return 33776;
+         case 35918:
+           return 33778;
+         case 35919:
+           return 33779;
+         case 37493:
+           return 37492;
+         case 37497:
+           return 37496;
+         case 37495:
+           return 37494;
+         case 37840:
+ ... (31 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L120-L131` → after: `L292-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L292-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/318.js#L292-L391) · [Before (L120-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/318.js#L120-L131)

```diff
-   },
-   42011: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "reflectionFunction",
-       KD = "vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)\n{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return  … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
+     Pp.URLConfig = {
+       jsDecoderModule: "https://cdn.babylonjs.com/babylon.ktx2Decoder.js",
+       wasmUASTCToASTC: null,
+       wasmUASTCToBC7: null,
+       wasmUASTCToRGBA_UNORM: null,
+       wasmUASTCToRGBA_SRGB: null,
+       wasmUASTCToR8_UNORM: null,
+       wasmUASTCToRG8_UNORM: null,
+       jsMSCTranscoder: null,
+       wasmMSCTranscoder: null,
+       wasmZSTDDecoder: null
+     }, Pp.DefaultNumWorkers = Pp.GetDefaultNumWorkers(), Pp.DefaultDecoderOptions = new class {
+       constructor() {
+         this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
+       }
+       get isDirty() {
+ ... (84 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L134-L147` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/318.js#L394) · [Before (L134-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/318.js#L134-L147)

```diff
-   42008: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "samplerFragmentDeclaration",
-       KD = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   41796: (DD, zD, wD) => {
+   42123: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L151-L157` → after: `L398-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L398-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/318.js#L398-L426) · [Before (L151-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/318.js#L151-L157)

```diff
-     var pD = wD(39776);
-     const sD = "sceneUboDeclaration",
-       KD = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
+     class Op {
+       constructor(pp) {
+         this._pendingActions = new Array, this._workerInfos = pp.map((pp => ({
+           workerPromise: Promise.resolve(pp),
+           idle: !0
+         })))
+       }
+       dispose() {
+         for (const pp of this._workerInfos) pp.workerPromise.then((pp => {
+           pp.terminate()
+         }));
+         this._workerInfos.length = 0, this._pendingActions.length = 0
+       }
+       push(pp) {
+         this._executeOnIdleWorker(pp) || this._pendingActions.push(pp)
+       }
+ ... (13 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L159-L170` → after: `L428-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L428-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/318.js#L428-L454) · [Before (L159-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/318.js#L159-L170)

```diff
-   },
-   42002: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "shadowsFragmentFunctions",
-       KD = "#ifdef SHADOWS\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\n#ifndef SHADOWFLOAT\nfloat unpack(vec4 color)\n{const vec4 bit_shift=vec4(1.0/(255 … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
+     class op extends Op {
+       constructor(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : op.DefaultOptions;
+         super([]), this._maxWorkers = pp, this._createWorkerAsync = ip, this._options = cp
+       }
+       push(pp) {
+         if (!this._executeOnIdleWorker(pp))
+           if (this._workerInfos.length < this._maxWorkers) {
+             const ip = {
+               workerPromise: this._createWorkerAsync(),
+               idle: !1
+             };
+             this._workerInfos.push(ip), this._execute(ip, pp)
+           } else this._pendingActions.push(pp)
+       }
+       _execute(pp, ip) {
+ ... (11 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L172-L183` → after: `L456-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/318.js#L456-L457) · [Before (L172-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/318.js#L172-L183)

```diff
-   },
-   42024: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "textureRepetitionFunctions",
-       KD = "#if TEXTURE_REPETITION_MODE>0\nvec4 _texRepHash4(vec2 p) {return fract(sin(vec4(\n1.0+dot(p,vec2(37.0,17.0)),\n2.0+dot(p,vec2(11.0,47.0)),\n3.0+dot(p,vec2(41.0,29.0)),\n4.0+dot(p,vec2(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nvec4 _texRepSample … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
+     op.DefaultOptions = {
+       idleTimeElapsedBeforeRelease: 1e3
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/319.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/319.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9)

#### 1. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L4-L252` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/319.js#L4) · [Before (L4-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/319.js#L4-L252)

```diff
-   42059: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "bumpFragment",
-       KD = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42038: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD
- ... (233 more removed lines; see GitHub link above)
+   42125: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L254-L264` → after: `L6-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L6-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/319.js#L6-L156) · [Before (L254-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/319.js#L254-L264)

```diff
-       geometryPixelShader: () => TD
-     });
-     var pD = wD(39776),
-       sD = wD(41971),
-       KD = wD(42041);
-     const rD = "mrtFragmentDeclaration",
-       LD = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#ifdef MESH_BLEND_TAG\n#if {X}>0\n#if MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if {X}>1\n#if MESH … [truncated]
-     pD.e.IncludesShadersStore[rD] || (pD.e.IncludesShadersStore[rD] = LD);
-     const cD = {
-       name: rD,
-       shader: LD
+       _TGATextureLoader: () => xp
+     });
+     var Op = cp(38905);
+ 
+     function op(pp) {
+       let ip = 0;
+       return {
+         id_length: pp[ip++],
+         colormap_type: pp[ip++],
+         image_type: pp[ip++],
+         colormap_index: pp[ip++] | pp[ip++] << 8,
+         colormap_length: pp[ip++] | pp[ip++] << 8,
+         colormap_size: pp[ip++],
+         origin: [pp[ip++] | pp[ip++] << 8, pp[ip++] | pp[ip++] << 8],
+         width: pp[ip++] | pp[ip++] << 8,
+         height: pp[ip++] | pp[ip++] << 8,
+ ... (135 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L266-L290` → after: `L158-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L158-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/319.js#L158-L171) · [Before (L266-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/319.js#L266-L290)

```diff
-     var gD = wD(42029),
-       RD = wD(42008),
-       AD = wD(42038),
-       UD = wD(41822),
-       fD = wD(61316),
-       ID = wD(61498),
-       BD = wD(41796),
-       GD = wD(61294),
-       hD = wD(61502),
-       nD = wD(61348),
-       MD = wD(42011),
-       OD = wD(61508),
-       JD = wD(61513),
-       ED = wD(42052),
-       QD = wD(42059),
-       XD = wD(61530),
- ... (9 more removed lines; see GitHub link above)
+     class xp {
+       constructor() {
+         this.supportCascades = !1
+       }
+       loadCubeData() {
+         throw ".env not supported in Cube."
+       }
+       loadData(pp, ip, cp) {
+         const Op = new Uint8Array(pp.buffer, pp.byteOffset, pp.byteLength),
+           Sp = op(Op);
+         cp(Sp.width, Sp.height, ip.generateMipMaps, !1, (() => {
+           Ip(ip, Op)
+         }))
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/320.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/320.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d)

#### 1. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L4-L199` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/320.js#L4) · [Before (L4-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/320.js#L4-L199)

```diff
-   41909: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "bakedVertexAnimation",
-       KD = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   41830: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
- ... (180 more removed lines; see GitHub link above)
+   42134: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L201` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/320.js#L6-L7) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/320.js#L201)

```diff
-       geometryVertexShader: () => xD
+       ReadExrDataAsync: () => Wi,
+       _ExrTextureLoader: () => Pi
```

#### 3. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L203-L240` → after: `L9-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L9-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/320.js#L9-L771) · [Before (L203-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/320.js#L203-L240)

```diff
-     var pD = wD(39776),
-       sD = wD(41826),
-       KD = wD(41830),
-       rD = wD(41873),
-       LD = wD(41882),
-       cD = wD(41832);
-     const gD = "geometryVertexDeclaration",
-       RD = "uniform mat4 viewProjection;uniform mat4 view;";
-     pD.e.IncludesShadersStore[gD] || (pD.e.IncludesShadersStore[gD] = RD);
-     const AD = {
-       name: gD,
-       shader: RD
-     };
-     var UD = wD(41796);
-     const fD = "geometryUboDeclaration",
-       ID = "#include<sceneUboDeclaration>\n";
- ... (22 more removed lines; see GitHub link above)
+     var Op = cp(38905),
+       op = cp(37356),
+       Ip = cp(40276);
+     const Sp = 4,
+       xp = 4,
+       Lp = 1,
+       Yp = 2,
+       Dp = 8,
+       Ap = 65536,
+       Pp = Ap >> 3,
+       Wp = 14,
+       yp = 65537,
+       Up = 1 << Wp,
+       wp = Up - 1,
+       vp = 59,
+       tp = 63,
+ ... (747 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/321.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/321.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49)

#### 1. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/321.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/321.js#L4)

```diff
-   41808: (DD, zD, wD) => {
+   42316: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/321.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/321.js#L6)

```diff
-       e: () => rD
+       d: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L8-L12` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/321.js#L8-L11) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/321.js#L8-L12)

```diff
-     var pD = wD(39776);
-     wD(41796), wD(41802);
-     const sD = "defaultUboDeclaration",
-       KD = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "bumpVertex",
+       Ip = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 4. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L18` → after: `L17-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L17-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/321.js#L17-L44) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/321.js#L18)

```diff
-   41955: (DD, zD, wD) => {
+   42220: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "bumpVertexDeclaration",
+       Ip = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42164: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+ ... (12 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L20` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/321.js#L46) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/321.js#L20)

```diff
-       defaultPixelShader: () => qD
+       defaultVertexShader: () => zp
```

#### 6. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L22-L26` → after: `L48-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L48-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/321.js#L48-L52) · [Before (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/321.js#L22-L26)

```diff
-     var pD = wD(39776),
-       sD = wD(41964);
-     const KD = "defaultFragmentDeclaration",
-       rD = "uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform vec2 vAmbientInfos;\n#endif\ … [truncated]
-     pD.e.IncludesShadersStore[KD] || (pD.e.IncludesShadersStore[KD] = rD);
+     var Op = cp(40062),
+       op = cp(42151);
+     const Ip = "defaultVertexDeclaration",
+       Sp = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nuniform mat4 view;\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;\n#endif\n#ifdef O … [truncated]
+     Op.b.IncludesShadersStore[Ip] || (Op.b.IncludesShadersStore[Ip] = Sp);
```

#### 7. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L31-L45` → after: `L57-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L57-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/321.js#L57-L91) · [Before (L31-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/321.js#L31-L45)

```diff
-     var cD = wD(41796),
-       gD = wD(41802),
-       RD = wD(41808),
-       AD = wD(41971),
-       UD = wD(41975),
-       fD = wD(41980),
-       ID = wD(41840),
-       BD = wD(41822),
-       GD = wD(41984),
-       hD = wD(41986),
-       nD = wD(41989),
-       MD = wD(41997);
-     const OD = "lightsFragmentFunctions",
-       JD = "struct lightingInfo\n{vec3 diffuse;\n#ifdef SPECULARTERM\nvec3 specular;\n#endif\n#ifdef NDOTL\nfloat ndl;\n#endif\n};lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {light … [truncated]
-     pD.e.IncludesShadersStore[OD] || (pD.e.IncludesShadersStore[OD] = JD);
+     var Lp = cp(42157),
+       Yp = cp(42159),
+       Dp = cp(42164),
+       Ap = cp(42166),
+       Pp = cp(42174),
+       Wp = cp(42178),
+       yp = cp(42182),
+       Up = cp(42190),
+       wp = cp(42198),
+       vp = cp(42206),
+       tp = cp(42215),
+       Hp = cp(42220),
+       dp = cp(42226),
+       ep = cp(42232),
+       jp = cp(42238),
+       kp = cp(42246),
+ ... (19 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L50-L87` → after: `L96-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L96-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/321.js#L96-L101) · [Before (L50-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/321.js#L50-L87)

```diff
-     var QD = wD(42002),
-       XD = wD(42008);
-     const VD = "fresnelFunction",
-       PD = "#ifdef FRESNEL\nfloat computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)\n{float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
-     pD.e.IncludesShadersStore[VD] || (pD.e.IncludesShadersStore[VD] = PD);
-     const CD = {
-       name: VD,
-       shader: PD
-     };
-     var xD = wD(42011),
-       TD = wD(42013),
-       bD = wD(42015),
-       jD = wD(42024),
-       dD = wD(42029),
-       SD = wD(42038),
-       iD = wD(42041),
- ... (22 more removed lines; see GitHub link above)
+     var gp = cp(42346);
+     const Gp = "defaultVertexShader",
+       rp = "#define CUSTOM_VERTEX_EXTENSION\n#include<__decl__defaultVertex>\n#define CUSTOM_VERTEX_BEGIN\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef TANGENT\nattribute vec4 tangent;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#include<uv … [truncated]
+     Op.b.ShadersStore[Gp] || (Op.b.ShadersStore[Gp] = rp);
+     const Zp = [op.e, xp, Lp.d, Yp.d, Dp.c, Ap.c, Pp.c, Wp.b, yp.c, Up.e, wp.c, vp.e, tp.e, Hp.e, dp.c, ep.e, jp.b, kp.d, mp.b, Rp.c, qp.e, Mp.e, Cp.b, Ep.b, Xp.d, lp.e, Qp.c, Jp.b, Bp.b, Np.d, Tp.c, fp.c, bp.e, hp.c, Fp, gp.b];
+     for (const sp of Zp) Op.b.IncludesShadersStore[sp.name] || (Op.b.IncludesShadersStore[sp.name] = sp.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/322.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/322.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c)

#### 1. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L4-L17` → after: `L4-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L4-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/322.js#L4-L43) · [Before (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/322.js#L4-L17)

```diff
-   42052: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "clipPlaneFragment",
-       KD = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42041: (DD, zD, wD) => {
+   42298: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "bakedVertexAnimation",
+       Ip = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42182: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+ ... (24 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L21-L60` → after: `L47-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L47-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/322.js#L47-L125) · [Before (L21-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/322.js#L21-L60)

```diff
-     var pD = wD(39776);
-     const sD = "clipPlaneFragmentDeclaration",
-       KD = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42079: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "fogFragment",
-       KD = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
- ... (24 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "bonesVertex",
+       Ip = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42319: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "clipPlaneVertex",
+       Ip = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+ ... (63 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L63-L82` → after: `L128-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L128-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/322.js#L128-L173) · [Before (L63-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/322.js#L63-L82)

```diff
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42013: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "imageProcessingDeclaration",
-       KD = "#ifdef EXPOSURE\nuniform float exposureLinear;\n#endif\n#ifdef CONTRAST\nuniform float contrast;\n#endif\n#ifdef WHITEBALANCE\nuniform mat3 whiteBalanceMatrix;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vec2 vInverseScreenSize;\n#endif\n#ifdef VIGNETTE … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
- ... (4 more removed lines; see GitHub link above)
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42190: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "instancesDeclaration",
+       Ip = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+ ... (30 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L86-L99` → after: `L177-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L177-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/322.js#L177-L190) · [Before (L86-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/322.js#L86-L99)

```diff
-     var pD = wD(39776);
-     const sD = "imageProcessingFunctions",
-       KD = "#if defined(COLORGRADING) && !defined(COLORGRADING3D)\n/** \n* Polyfill for SAMPLE_TEXTURE_3D,which is unsupported in WebGL.\n* sampler3dSetting.x=textureOffset (0.5/textureSize).\n* sampler3dSetting.y=textureSize.\n*/\n#define inline\nvec3 sampleTexture3D(sampler2D c … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   41887: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD
-     });
-     var pD = wD(39776);
+     var Op = cp(40062);
+     const op = "lightVxUboDeclaration",
+       Ip = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42266: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+     });
+     var Op = cp(40062);
```

#### 5. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L102-L142` → after: `L193-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L193-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/322.js#L193-L401) · [Before (L102-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/322.js#L102-L142)

```diff
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42076: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "logDepthFragment",
-       KD = "#ifdef LOGARITHMICDEPTH\ngl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;\n#endif\n";
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
- ... (25 more removed lines; see GitHub link above)
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42346: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "logDepthVertex",
+       Ip = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+ ... (193 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/323.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/323.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3)

#### 1. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/323.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/323.js#L4)

```diff
-   42052: (DD, zD, wD) => {
+   42359: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/323.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/323.js#L6)

```diff
-       c: () => rD
+       e: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/323.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/323.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "clipPlaneFragment",
-       KD = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "decalFragmentDeclaration",
+       Ip = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 4. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/323.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/323.js#L17)

```diff
-   42041: (DD, zD, wD) => {
+   42460: (pp, ip, cp) => {
```

#### 5. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/323.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/323.js#L19)

```diff
-       d: () => rD
+       c: () => Sp
```

#### 6. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/323.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/323.js#L21-L24)

```diff
-     var pD = wD(39776);
-     const sD = "clipPlaneFragmentDeclaration",
-       KD = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "depthPrePass",
+       Ip = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 7. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/323.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/323.js#L30)

```diff
-   42079: (DD, zD, wD) => {
+   42373: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/323.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/323.js#L34-L37)

```diff
-     var pD = wD(39776);
-     const sD = "fogFragment",
-       KD = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "lightFragmentDeclaration",
+       Ip = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 9. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/323.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/323.js#L43)

```diff
-   42046: (DD, zD, wD) => {
+   42376: (pp, ip, cp) => {
```

#### 10. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/323.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/323.js#L45)

```diff
-       e: () => rD
+       c: () => Sp
```

#### 11. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/323.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/323.js#L47-L50)

```diff
-     var pD = wD(39776);
-     const sD = "fogFragmentDeclaration",
-       KD = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "lightUboDeclaration",
+       Ip = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 12. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/323.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/323.js#L56)

```diff
-   41822: (DD, zD, wD) => {
+   42385: (pp, ip, cp) => {
```

#### 13. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/323.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/323.js#L58)

```diff
-       c: () => rD
+       b: () => Sp
```

#### 14. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/323.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/323.js#L60-L63)

```diff
-     var pD = wD(39776);
-     const sD = "helperFunctions",
-       KD = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "ltcHelperFunctions",
+       Ip = "vec2 LTCUv( const in vec3 N,const in vec3 V,const in float roughness ) {const float LUTSIZE=64.0;const float LUTSCALE=( LUTSIZE-1.0 )/LUTSIZE;const float LUTBIAS=0.5/LUTSIZE;float dotNV=saturate( dot( N,V ) );vec2 uv=vec2( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+ … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 15. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/323.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/323.js#L69)

```diff
-   41887: (DD, zD, wD) => {
+   42206: (pp, ip, cp) => {
```

#### 16. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/323.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/323.js#L73-L76)

```diff
-     var pD = wD(39776);
-     const sD = "logDepthDeclaration",
-       KD = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "mainUVVaryingDeclaration",
+       Ip = "#ifdef MAINUV{X}\nvarying vec2 vMainUV{X};\n#endif\n";
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 17. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L82` → after: `L82-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L82-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/323.js#L82-L95) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/323.js#L82)

```diff
-   42076: (DD, zD, wD) => {
+   42159: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "meshUboDeclaration",
+       Ip = "#ifdef WEBGL2\nuniform mat4 world;uniform float visibility;\n#else\nlayout(std140,column_major) uniform;uniform Mesh\n{mat4 world;float visibility;};\n#endif\n#define WORLD_UBO\n";
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42369: (pp, ip, cp) => {
```

#### 18. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L86-L89` → after: `L99-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L99-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/323.js#L99-L115) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/323.js#L86-L89)

```diff
-     var pD = wD(39776);
-     const sD = "logDepthFragment",
-       KD = "#ifdef LOGARITHMICDEPTH\ngl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;\n#endif\n";
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "oitDeclaration",
+       Ip = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#extension GL_EXT_draw_buffers : require\nlayout(location=0) out vec2 depth; \nlayout(location=1) out vec4 frontColor;layout(location=2) out vec4 backColor;\n#define MAX_DEPTH 99999.0\nhighp vec4 gl_FragColor;uniform sampler2D oi … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42484: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "oitFragment",
+       Ip = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\nfloat fragDepth=gl_FragCoord.z; \n#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS\nuint halfFloat=packHalf2x16(vec2(fragDepth));vec2 full=unpackHalf2x16(halfFloat);fragDepth=full.x;\n#endif\nivec2 fragCoord=ivec2(gl_FragCoord.xy);ve … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L95-L97` → after: `L121-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L121-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/323.js#L121-L123) · [Before (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/323.js#L95-L97)

```diff
-   61093: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       skyPixelShader: () => hD
+   42406: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Sp
```

#### 20. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L99-L109` → after: `L125-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/323.js#L125-L128) · [Before (L99-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/323.js#L99-L109)

```diff
-     var pD = wD(39776),
-       sD = wD(42041),
-       KD = wD(41887),
-       rD = wD(42046),
-       LD = wD(41822),
-       cD = wD(42052),
-       gD = wD(42076),
-       RD = wD(42079);
-     const AD = "imageProcessingCompatibility",
-       UD = "#ifdef IMAGEPROCESSINGPOSTPROCESS\ngl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));\n#endif\n";
-     pD.e.IncludesShadersStore[AD] || (pD.e.IncludesShadersStore[AD] = UD);
+     var Op = cp(40062);
+     const op = "reflectionFunction",
+       Ip = "vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)\n{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return  … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 21. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L111-L118` → after: `L130-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L130-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/323.js#L130-L180) · [Before (L111-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/323.js#L111-L118)

```diff
-         name: AD,
-         shader: UD
-       },
-       ID = "skyPixelShader",
-       BD = "precision highp float;varying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneFragmentDeclaration>\nuniform vec3 cameraPosition;uniform vec3 cameraOffset;uniform vec3 up;uniform float luminance;uniform float turbidity;uniform floa … [truncated]
-     pD.e.ShadersStore[ID] || (pD.e.ShadersStore[ID] = BD);
-     const GD = [sD.d, KD.e, rD.e, LD.c, cD.c, gD.b, RD.e, fD];
-     for (const nD of GD) pD.e.IncludesShadersStore[nD.name] || (pD.e.IncludesShadersStore[nD.name] = nD.shader);
+       name: op,
+       shader: Ip
+     }
+   },
+   42403: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "samplerFragmentDeclaration",
+       Ip = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+ ... (35 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/324.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/324.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2)

#### 1. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/324.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/324.js#L4)

```diff
-   41822: (DD, zD, wD) => {
+   42452: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L8` → after: `L8-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L8-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/324.js#L8-L74) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/324.js#L8)

```diff
-     var pD = wD(39776);
+     var Op = cp(40062);
+     const op = "bumpFragment",
+       Ip = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42429: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+     });
+     var Op = cp(40062);
+     cp(42403);
+     const op = "bumpFragmentFunctions",
+ ... (51 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L11` → after: `L77-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L77-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/324.js#L77-L233) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/324.js#L11)

```diff
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42362: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "objectIdFunctions",
+       Ip = "highp vec4 encodeObjectId(highp float objectId) {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4(objectId/255.0,0.0,0.0,1.0);\n#else\nhighp float id=floor(objectId);highp vec3 encodedId=vec3(\nfloor(mod(id,16777216.0)/65536.0),\nfloor(mod(id,65536.0)/256.0),\nmod(id,256.0) … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+ ... (141 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L17` → after: `L239-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L239-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/324.js#L239-L252) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/324.js#L17)

```diff
-   61150: (DD, zD, wD) => {
+   42157: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "sceneUboDeclaration",
+       Ip = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   61925: (pp, ip, cp) => {
```

#### 5. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L19-L27` → after: `L254-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L254-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/324.js#L254-L287) · [Before (L19-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/324.js#L19-L27)

```diff
-       rgbdDecodePixelShader: () => cD
-     });
-     var pD = wD(39776),
-       sD = wD(41822);
-     const KD = "rgbdDecodePixelShader",
-       rD = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}";
-     pD.e.ShadersStore[KD] || (pD.e.ShadersStore[KD] = rD);
-     const LD = [sD.c];
-     for (const gD of LD) pD.e.IncludesShadersStore[gD.name] || (pD.e.IncludesShadersStore[gD.name] = gD.shader);
+       geometryPixelShader: () => Ep
+     });
+     var Op = cp(40062),
+       op = cp(42362),
+       Ip = cp(42436);
+     const Sp = "mrtFragmentDeclaration",
+       xp = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#ifdef MESH_BLEND_TAG\n#if {X}>0\n#if MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if {X}>1\n#if MESH … [truncated]
+     Op.b.IncludesShadersStore[Sp] || (Op.b.IncludesShadersStore[Sp] = xp);
+     const Lp = {
+       name: Sp,
+       shader: xp
+     };
+     var Yp = cp(42423),
+       Dp = cp(42403),
+       Ap = cp(42429),
+       Pp = cp(42174),
+ ... (18 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/325.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/325.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5)

#### 1. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L4-L17` → after: `L4-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L4-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/325.js#L4-L199) · [Before (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/325.js#L4-L17)

```diff
-   41822: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "helperFunctions",
-       KD = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   61162: (DD, zD, wD) => {
+   42298: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "bakedVertexAnimation",
+       Ip = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42182: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+ ... (180 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L19-L27` → after: `L201-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L201-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/325.js#L201-L237) · [Before (L19-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/325.js#L19-L27)

```diff
-       rgbdEncodePixelShader: () => cD
-     });
-     var pD = wD(39776),
-       sD = wD(41822);
-     const KD = "rgbdEncodePixelShader",
-       rD = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}";
-     pD.e.ShadersStore[KD] || (pD.e.ShadersStore[KD] = rD);
-     const LD = [sD.c];
-     for (const gD of LD) pD.e.IncludesShadersStore[gD.name] || (pD.e.IncludesShadersStore[gD.name] = gD.shader);
+       geometryVertexShader: () => Cp
+     });
+     var Op = cp(40062),
+       op = cp(42178),
+       Ip = cp(42182),
+       Sp = cp(42251),
+       xp = cp(42257),
+       Lp = cp(42190);
+     const Yp = "geometryVertexDeclaration",
+       Dp = "uniform mat4 viewProjection;uniform mat4 view;";
+     Op.b.IncludesShadersStore[Yp] || (Op.b.IncludesShadersStore[Yp] = Dp);
+     const Ap = {
+       name: Yp,
+       shader: Dp
+     };
+     var Pp = cp(42157);
+ ... (21 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/326.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/326.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a)

#### 1. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/326.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/326.js#L4)

```diff
-   41909: (DD, zD, wD) => {
+   42164: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/326.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/326.js#L6)

```diff
-       e: () => rD
+       c: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L8-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/326.js#L8-L12) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/326.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "bakedVertexAnimation",
-       KD = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     cp(42157), cp(42159);
+     const op = "defaultUboDeclaration",
+       Ip = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 4. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L17-L19` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/326.js#L18-L20) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/326.js#L17-L19)

```diff
-   41830: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
+   42350: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       defaultPixelShader: () => ii
```

#### 5. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L21-L24` → after: `L22-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/326.js#L22-L26) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/326.js#L21-L24)

```diff
-     var pD = wD(39776);
-     const sD = "bakedVertexAnimationDeclaration",
-       KD = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062),
+       op = cp(42359);
+     const Ip = "defaultFragmentDeclaration",
+       Sp = "uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform vec2 vAmbientInfos;\n#endif\ … [truncated]
+     Op.b.IncludesShadersStore[Ip] || (Op.b.IncludesShadersStore[Ip] = Sp);
```

#### 6. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L28-L37` → after: `L30-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L30-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/326.js#L30-L45) · [Before (L28-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/326.js#L28-L37)

```diff
-     }
-   },
-   41826: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "bonesDeclaration",
-       KD = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     };
+     var Lp = cp(42157),
+       Yp = cp(42159),
+       Dp = cp(42164),
+       Ap = cp(42362),
+       Pp = cp(42365),
+       Wp = cp(42369),
+       yp = cp(42206),
+       Up = cp(42174),
+       wp = cp(42373),
+       vp = cp(42376),
+       tp = cp(42385),
+       Hp = cp(42392);
+     const dp = "lightsFragmentFunctions",
+       ep = "struct lightingInfo\n{vec3 diffuse;\n#ifdef SPECULARTERM\nvec3 specular;\n#endif\n#ifdef NDOTL\nfloat ndl;\n#endif\n};lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {light … [truncated]
+     Op.b.IncludesShadersStore[dp] || (Op.b.IncludesShadersStore[dp] = ep);
```

#### 7. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L41-L50` → after: `L49-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L49-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/326.js#L49-L54) · [Before (L41-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/326.js#L41-L50)

```diff
-     }
-   },
-   41906: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "bonesVertex",
-       KD = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     };
+     var kp = cp(42397),
+       mp = cp(42403);
+     const Rp = "fresnelFunction",
+       qp = "#ifdef FRESNEL\nfloat computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)\n{float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
+     Op.b.IncludesShadersStore[Rp] || (Op.b.IncludesShadersStore[Rp] = qp);
```

#### 8. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L54-L63` → after: `L58-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L58-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/326.js#L58-L73) · [Before (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/326.js#L54-L63)

```diff
-     }
-   },
-   41937: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "clipPlaneVertex",
-       KD = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     };
+     var Cp = cp(42406),
+       Ep = cp(42412),
+       Xp = cp(42416),
+       lp = cp(42418),
+       Qp = cp(42423),
+       Jp = cp(42429),
+       Bp = cp(42436),
+       Np = cp(42266),
+       Tp = cp(42443),
+       fp = cp(42449),
+       bp = cp(42452),
+       hp = cp(42457);
+     const ap = "defaultFragmentAlpha",
+       np = "#ifdef OPACITY\nvec4 opacityMap=TEXRD(opacitySampler,vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap.rgb=opacityMap.rgb*vec3(0.3,0.59,0.11);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*vOpacityInfos.y;\n#endif\n#en … [truncated]
+     Op.b.IncludesShadersStore[ap] || (Op.b.IncludesShadersStore[ap] = np);
```

#### 9. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L67-L167` → after: `L77-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L77-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/326.js#L77-L87) · [Before (L67-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/326.js#L67-L167)

```diff
-     }
-   },
-   41856: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "clipPlaneVertexDeclaration",
-       KD = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   41942: (DD, zD, wD) => {
- ... (85 more removed lines; see GitHub link above)
+     };
+     var gp = cp(42460),
+       Gp = cp(42466),
+       rp = cp(42470),
+       Zp = cp(42476),
+       zp = cp(42484);
+     const sp = "defaultPixelShader",
+       Kp = "#define CUSTOM_FRAGMENT_EXTENSION\n#include<__decl__defaultFragment>\n#if defined(BUMP) || !defined(NORMAL)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#define CUSTOM_FRAGMENT_BEGIN … [truncated]
+     Op.b.ShadersStore[sp] || (Op.b.ShadersStore[sp] = Kp);
+     const Vp = [op.e, xp, Lp.d, Yp.d, Dp.c, Ap.e, Pp.c, Wp.b, yp.e, Up.c, wp.e, vp.c, tp.b, Hp.e, jp, kp.b, mp.e, Mp, Cp.d, Ep.b, Xp.c, lp.e, Qp.c, Jp.e, Bp.e, Np.e, Tp.b, fp.d, bp.c, hp.e, Fp, gp.c, Gp.e, rp.c, Zp.b, zp.d];
+     for (const ci of Vp) Op.b.IncludesShadersStore[ci.name] || (Op.b.IncludesShadersStore[ci.name] = ci.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/327.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/327.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042)

#### 1. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/327.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/327.js#L4)

```diff
-   41832: (DD, zD, wD) => {
+   42449: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/327.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/327.js#L6)

```diff
-       e: () => rD
+       d: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/327.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/327.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "instancesDeclaration",
-       KD = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "clipPlaneFragment",
+       Ip = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 4. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/327.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/327.js#L17)

```diff
-   41900: (DD, zD, wD) => {
+   42436: (pp, ip, cp) => {
```

#### 5. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/327.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/327.js#L19)

```diff
-       b: () => rD
+       e: () => Sp
```

#### 6. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/327.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/327.js#L21-L24)

```diff
-     var pD = wD(39776);
-     const sD = "instancesVertex",
-       KD = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "clipPlaneFragmentDeclaration",
+       Ip = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 7. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L30-L32` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/327.js#L30-L32) · [Before (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/327.js#L30-L32)

```diff
-   61631: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       greasedLineVertexShader: () => gD
+   42476: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp
```

#### 8. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L34-L41` → after: `L34-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L34-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/327.js#L34-L142) · [Before (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/327.js#L34-L41)

```diff
-     var pD = wD(39776),
-       sD = wD(41832),
-       KD = wD(41900);
-     const rD = "greasedLineVertexShader",
-       LD = "precision highp float;\n#include<instancesDeclaration>\nattribute float grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute vec3 grl_offsets;\n#endif\nattribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;var … [truncated]
-     pD.e.ShadersStore[rD] || (pD.e.ShadersStore[rD] = LD);
-     const cD = [sD.e, KD.b];
-     for (const RD of cD) pD.e.IncludesShadersStore[RD.name] || (pD.e.IncludesShadersStore[RD.name] = RD.shader);
+     var Op = cp(40062);
+     const op = "fogFragment",
+       Ip = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42443: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "fogFragmentDeclaration",
+       Ip = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+ ... (93 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/328.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/328.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81)

#### 1. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/328.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/328.js#L4)

```diff
-   41932: (DD, zD, wD) => {
+   42449: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/328.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/328.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "bumpVertex",
-       KD = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "clipPlaneFragment",
+       Ip = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 3. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/328.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/328.js#L17)

```diff
-   41848: (DD, zD, wD) => {
+   42436: (pp, ip, cp) => {
```

#### 4. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/328.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/328.js#L21-L24)

```diff
-     var pD = wD(39776);
-     const sD = "bumpVertexDeclaration",
-       KD = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "clipPlaneFragmentDeclaration",
+       Ip = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 5. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/328.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/328.js#L30)

```diff
-   61302: (DD, zD, wD) => {
+   42476: (pp, ip, cp) => {
```

#### 6. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/328.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/328.js#L34-L37)

```diff
-     var pD = wD(39776);
-     const sD = "harmonicsFunctions",
-       KD = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "fogFragment",
+       Ip = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 7. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/328.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/328.js#L43)

```diff
-   61294: (DD, zD, wD) => {
+   42443: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/328.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/328.js#L47-L50)

```diff
-     var pD = wD(39776);
-     const sD = "pbrBRDFFunctions",
-       KD = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "fogFragmentDeclaration",
+       Ip = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 9. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/328.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/328.js#L56)

```diff
-   61291: (DD, zD, wD) => {
+   42174: (pp, ip, cp) => {
```

#### 10. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/328.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/328.js#L58)

```diff
-       d: () => rD
+       c: () => Sp
```

#### 11. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L60-L64` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/328.js#L60-L63) · [Before (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/328.js#L60-L64)

```diff
-     var pD = wD(39776);
-     wD(41796), wD(41802);
-     const sD = "pbrUboDeclaration",
-       KD = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "helperFunctions",
+       Ip = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 12. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L70-L72` → after: `L69-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/328.js#L69-L71) · [Before (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/328.js#L70-L72)

```diff
-   61288: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       pbrVertexShader: () => vD
+   42266: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
```

#### 13. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L74-L78` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/328.js#L73-L76) · [Before (L74-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/328.js#L74-L78)

```diff
-     var pD = wD(39776),
-       sD = wD(41790);
-     const KD = "pbrVertexDeclaration",
-       rD = "uniform mat4 view;uniform mat4 viewProjection;uniform vec4 vEyePosition;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif\n#ifdef ALBEDO\nuniform mat4 albedoMatrix;uniform vec2 vAlbedoInfos;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBase … [truncated]
-     pD.e.IncludesShadersStore[KD] || (pD.e.IncludesShadersStore[KD] = rD);
+     var Op = cp(40062);
+     const op = "logDepthDeclaration",
+       Ip = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 14. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L82-L122` → after: `L80-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L80-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/328.js#L80-L118) · [Before (L82-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/328.js#L82-L122)

```diff
-     };
-     var cD = wD(41796),
-       gD = wD(41802),
-       RD = wD(61291),
-       AD = wD(41814),
-       UD = wD(41840),
-       fD = wD(41822),
-       ID = wD(61294),
-       BD = wD(41826),
-       GD = wD(41830),
-       hD = wD(41832),
-       nD = wD(41836),
-       MD = wD(41844),
-       OD = wD(61302),
-       JD = wD(41848),
-       ED = wD(41856),
- ... (25 more removed lines; see GitHub link above)
+     }
+   },
+   42470: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "logDepthFragment",
+       Ip = "#ifdef LOGARITHMICDEPTH\ngl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;\n#endif\n";
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   61425: (pp, ip, cp) => {
+ ... (23 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/329.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/329.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab)

#### 1. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/329.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/329.js#L4)

```diff
-   41937: (DD, zD, wD) => {
+   42174: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/329.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/329.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "clipPlaneVertex",
-       KD = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "helperFunctions",
+       Ip = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 3. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/329.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/329.js#L17-L19)

```diff
-   41856: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
+   61491: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       rgbdDecodePixelShader: () => Lp
```

#### 4. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L21-L97` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/329.js#L21-L27) · [Before (L21-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/329.js#L21-L97)

```diff
-     var pD = wD(39776);
-     const sD = "clipPlaneVertexDeclaration",
-       KD = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   41942: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "fogVertex",
-       KD = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
- ... (61 more removed lines; see GitHub link above)
+     var Op = cp(40062),
+       op = cp(42174);
+     const Ip = "rgbdDecodePixelShader",
+       Sp = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}";
+     Op.b.ShadersStore[Ip] || (Op.b.ShadersStore[Ip] = Sp);
+     const xp = [op.c];
+     for (const Yp of xp) Op.b.IncludesShadersStore[Yp.name] || (Op.b.IncludesShadersStore[Yp.name] = Yp.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/330.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/330.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2)

#### 1. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/330.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/330.js#L4)

```diff
-   41937: (DD, zD, wD) => {
+   42174: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/330.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/330.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "clipPlaneVertex",
-       KD = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "helperFunctions",
+       Ip = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 3. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/330.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/330.js#L17-L19)

```diff
-   41856: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
+   61507: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       rgbdEncodePixelShader: () => Lp
```

#### 4. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L21-L97` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/330.js#L21-L27) · [Before (L21-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/330.js#L21-L97)

```diff
-     var pD = wD(39776);
-     const sD = "clipPlaneVertexDeclaration",
-       KD = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   41942: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "fogVertex",
-       KD = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
- ... (61 more removed lines; see GitHub link above)
+     var Op = cp(40062),
+       op = cp(42174);
+     const Ip = "rgbdEncodePixelShader",
+       Sp = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}";
+     Op.b.ShadersStore[Ip] || (Op.b.ShadersStore[Ip] = Sp);
+     const xp = [op.c];
+     for (const Yp of xp) Op.b.IncludesShadersStore[Yp.name] || (Op.b.IncludesShadersStore[Yp.name] = Yp.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/331.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/331.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430)

#### 1. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/331.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/331.js#L4)

```diff
-   42059: (DD, zD, wD) => {
+   42298: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/331.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/331.js#L6)

```diff
-       d: () => rD
+       e: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/331.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/331.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "bumpFragment",
-       KD = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "bakedVertexAnimation",
+       Ip = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 4. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/331.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/331.js#L17)

```diff
-   42038: (DD, zD, wD) => {
+   42182: (pp, ip, cp) => {
```

#### 5. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/331.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/331.js#L19)

```diff
-       e: () => rD
+       c: () => Sp
```

#### 6. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L21-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/331.js#L21-L24) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/331.js#L21-L25)

```diff
-     var pD = wD(39776);
-     wD(42008);
-     const sD = "bumpFragmentFunctions",
-       KD = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "bakedVertexAnimationDeclaration",
+       Ip = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 7. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/331.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/331.js#L31)

```diff
-   42029: (DD, zD, wD) => {
+   42178: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L33` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/331.js#L32) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/331.js#L33)

```diff
-       c: () => rD
+       b: () => Sp
```

#### 9. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/331.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/331.js#L35-L38)

```diff
-     var pD = wD(39776);
-     const sD = "bumpFragmentMainFunctions",
-       KD = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "bonesDeclaration",
+       Ip = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 10. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/331.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/331.js#L44)

```diff
-   41997: (DD, zD, wD) => {
+   42291: (pp, ip, cp) => {
```

#### 11. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L46` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/331.js#L45) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/331.js#L46)

```diff
-       e: () => rD
+       d: () => Sp
```

#### 12. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/331.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/331.js#L48-L51)

```diff
-     var pD = wD(39776);
-     const sD = "clusteredLightingFunctions",
-       KD = "struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};\n#define inline\nClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(\ntexelFetch(lightDataTexture,ivec2( … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "bonesVertex",
+       Ip = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 13. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L57` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/331.js#L56) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/331.js#L57)

```diff
-   42064: (DD, zD, wD) => {
+   42319: (pp, ip, cp) => {
```

#### 14. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L59` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/331.js#L58) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/331.js#L59)

```diff
-       d: () => rD
+       c: () => Sp
```

#### 15. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L61-L64` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/331.js#L60-L63) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/331.js#L61-L64)

```diff
-     var pD = wD(39776);
-     const sD = "decalFragment",
-       KD = "#ifdef DECAL\n#ifdef GAMMADECAL\ndecalColor.rgb=toLinearSpace(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalColor.a*=decalColor.a;\n#endif\nsurfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);\n#endif\n";
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "clipPlaneVertex",
+       Ip = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 16. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L70` → after: `L69-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L69-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/331.js#L69-L121) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/331.js#L70)

```diff
-   42068: (DD, zD, wD) => {
+   42226: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "clipPlaneVertexDeclaration",
+       Ip = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42327: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+ ... (37 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L74-L77` → after: `L125-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L125-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/331.js#L125-L167) · [Before (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/331.js#L74-L77)

```diff
-     var pD = wD(39776);
-     const sD = "lightFragment",
-       KD = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvec4 diffuse{X}=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X}) && defined(CLUST … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "instancesVertex",
+       Ip = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42341: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "vertexColorMixing",
+       Ip = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvColor=vec4(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvColor*=colorUpdated;\n#else\nvColor.rgb*=colorUpdated.rgb;\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvColor*=instanceColor;\n#endif\n#e … [truncated]
+ ... (27 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/332.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/332.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1)

#### 1. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/332.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/332.js#L4)

```diff
-   42052: (DD, zD, wD) => {
+   42190: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/332.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/332.js#L6)

```diff
-       c: () => rD
+       e: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/332.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/332.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "clipPlaneFragment",
-       KD = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "instancesDeclaration",
+       Ip = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 4. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/332.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/332.js#L17)

```diff
-   42041: (DD, zD, wD) => {
+   42286: (pp, ip, cp) => {
```

#### 5. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/332.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/332.js#L19)

```diff
-       d: () => rD
+       b: () => Sp
```

#### 6. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/332.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/332.js#L21-L24)

```diff
-     var pD = wD(39776);
-     const sD = "clipPlaneFragmentDeclaration",
-       KD = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
+     var Op = cp(40062);
+     const op = "instancesVertex",
+       Ip = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 7. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L30-L32` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/332.js#L30-L32) · [Before (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/332.js#L30-L32)

```diff
-   42079: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD
+   61972: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       greasedLineVertexShader: () => Yp
```

#### 8. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L34-L69` → after: `L34-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/332.js#L34-L41) · [Before (L34-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/332.js#L34-L69)

```diff
-     var pD = wD(39776);
-     const sD = "fogFragment",
-       KD = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
-     pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42046: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "fogFragmentDeclaration",
-       KD = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
- ... (20 more removed lines; see GitHub link above)
+     var Op = cp(40062),
+       op = cp(42190),
+       Ip = cp(42286);
+     const Sp = "greasedLineVertexShader",
+       xp = "precision highp float;\n#include<instancesDeclaration>\nattribute float grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute vec3 grl_offsets;\n#endif\nattribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;var … [truncated]
+     Op.b.ShadersStore[Sp] || (Op.b.ShadersStore[Sp] = xp);
+     const Lp = [op.e, Ip.b];
+     for (const Dp of Lp) Op.b.IncludesShadersStore[Dp.name] || (Op.b.IncludesShadersStore[Dp.name] = Dp.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/333.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/333.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613)

#### 1. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/333.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/333.js#L4)

```diff
-   42244: (DD, zD, wD) => {
+   42316: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/333.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/333.js#L8)

```diff
-     var pD = wD(39776);
+     var Op = cp(40062);
```

#### 3. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/333.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/333.js#L10-L11)

```diff
-       KD = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+       Ip = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 4. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/333.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/333.js#L17)

```diff
-   42152: (DD, zD, wD) => {
+   42220: (pp, ip, cp) => {
```

#### 5. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/333.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/333.js#L21)

```diff
-     var pD = wD(39776);
+     var Op = cp(40062);
```

#### 6. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L23-L24` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/333.js#L23-L24) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/333.js#L23-L24)

```diff
-       KD = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+       Ip = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 7. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/333.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/333.js#L30)

```diff
-   42109: (DD, zD, wD) => {
+   61640: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L34-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/333.js#L34-L37) · [Before (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/333.js#L34-L38)

```diff
-     var pD = wD(39776);
-     wD(42095), wD(42104);
-     const sD = "defaultUboDeclaration",
-       KD = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "harmonicsFunctions",
+       Ip = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 9. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/333.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/333.js#L44)

```diff
-   42114: (DD, zD, wD) => {
+   61632: (pp, ip, cp) => {
```

#### 10. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L46` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/333.js#L45) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/333.js#L46)

```diff
-       b: () => rD
+       e: () => Sp
```

#### 11. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/333.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/333.js#L48-L51)

```diff
-     var pD = wD(39776);
-     const sD = "helperFunctions",
-       KD = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "pbrBRDFFunctions",
+       Ip = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 12. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L57` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/333.js#L56) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/333.js#L57)

```diff
-   42095: (DD, zD, wD) => {
+   61627: (pp, ip, cp) => {
```

#### 13. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L59` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/333.js#L58) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/333.js#L59)

```diff
-       e: () => rD
+       b: () => Sp
```

#### 14. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L61-L64` → after: `L60-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/333.js#L60-L64) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/333.js#L61-L64)

```diff
-     var pD = wD(39776);
-     const sD = "sceneUboDeclaration",
-       KD = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     cp(42157), cp(42159);
+     const op = "pbrUboDeclaration",
+       Ip = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 15. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L70` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/333.js#L70) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/333.js#L70)

```diff
-   42087: (DD, zD, wD) => {
+   61624: (pp, ip, cp) => {
```

#### 16. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/333.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/333.js#L72)

```diff
-       defaultVertexShaderWGSL: () => aD
+       pbrVertexShader: () => Zp
```

#### 17. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L74-L91` → after: `L74-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L74-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/333.js#L74-L78) · [Before (L74-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/333.js#L74-L91)

```diff
-     var pD = wD(39776),
-       sD = wD(42095),
-       KD = wD(42104),
-       rD = wD(42109),
-       LD = wD(42112),
-       cD = wD(42114),
-       gD = wD(42122),
-       RD = wD(42127),
-       AD = wD(42132),
-       UD = wD(42139),
-       fD = wD(42141),
-       ID = wD(42143),
-       BD = wD(42152),
-       GD = wD(42159),
-       hD = wD(42168);
-     const nD = "lightVxFragmentDeclaration",
- ... (2 more removed lines; see GitHub link above)
+     var Op = cp(40062),
+       op = cp(42151);
+     const Ip = "pbrVertexDeclaration",
+       Sp = "uniform mat4 view;uniform mat4 viewProjection;uniform vec4 vEyePosition;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif\n#ifdef ALBEDO\nuniform mat4 albedoMatrix;uniform vec2 vAlbedoInfos;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBase … [truncated]
+     Op.b.IncludesShadersStore[Ip] || (Op.b.IncludesShadersStore[Ip] = Sp);
```

#### 18. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L96-L97` → after: `L83-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L83-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/333.js#L83-L90) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/333.js#L96-L97)

```diff
-     var JD = wD(42170),
-       ED = wD(42176),
+     var Lp = cp(42157),
+       Yp = cp(42159),
+       Dp = cp(61627),
+       Ap = cp(42166),
+       Pp = cp(42206),
+       Wp = cp(42174),
+       yp = cp(61632),
+       Up = cp(42178),
```

#### 19. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L100-L107` → after: `L93-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L93-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/333.js#L93-L97) · [Before (L100-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/333.js#L100-L107)

```diff
-       VD = wD(42192),
-       PD = wD(42194),
-       CD = wD(42197),
-       xD = wD(42204),
-       TD = wD(42208),
-       bD = wD(42216),
-       jD = wD(42225),
-       dD = wD(42230),
+       tp = cp(42198),
+       Hp = cp(42215),
+       dp = cp(61640),
+       ep = cp(42220),
+       jp = cp(42226),
```

#### 20. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L109-L113` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/333.js#L99-L102) · [Before (L109-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/333.js#L109-L113)

```diff
-       iD = wD(42235),
-       lD = wD(42244),
-       WD = wD(42252),
-       ND = wD(42255),
-       ZD = wD(42258),
+       mp = cp(42238),
+       Rp = cp(42246),
+       qp = cp(42251),
+       Mp = cp(42257),
```

#### 21. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L115-L120` → after: `L104-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L104-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/333.js#L104-L122) · [Before (L115-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/333.js#L115-L120)

```diff
-       kD = wD(42269);
-     const mD = "defaultVertexShader",
-       eD = "#include<defaultUboDeclaration>\n#define CUSTOM_VERTEX_BEGIN\n#ifndef USE_VERTEX_PULLING\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef TANGENT\nattribute tangent: vec4f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#include … [truncated]
-     pD.e.ShadersStoreWGSL[mD] || (pD.e.ShadersStoreWGSL[mD] = eD);
-     const oD = [sD.e, KD.b, rD.c, LD.c, cD.b, gD.c, RD.b, AD.d, UD.c, fD.e, ID.b, BD.e, GD.b, hD.b, OD, JD.c, ED.e, QD.d, XD.c, VD.d, PD.e, CD.d, xD.d, TD.e, bD.c, jD.e, dD.b, SD.c, iD.c, lD.d, WD.b, ND.d, ZD.c, yD.b, kD.b];
-     for (const uD of oD) pD.e.IncludesShadersStoreWGSL[uD.name] || (pD.e.IncludesShadersStoreWGSL[uD.name] = uD.shader);
+       Ep = cp(42272),
+       Xp = cp(42277),
+       lp = cp(42286),
+       Qp = cp(42291),
+       Jp = cp(42298),
+       Bp = cp(42302),
+       Np = cp(42305),
+       Tp = cp(42314),
+       fp = cp(42316),
+       bp = cp(42319),
+       hp = cp(42327),
+       ap = cp(42336),
+       np = cp(42341),
+       Fp = cp(42346);
+     const gp = "pbrVertexShader",
+       Gp = "#define PBR_VERTEX_SHADER\n#define CUSTOM_VERTEX_EXTENSION\nprecision highp float;\n#include<__decl__pbrVertex>\n#define CUSTOM_VERTEX_BEGIN\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef TANGENT\nattribute vec4 tangent;\n#endif\n#ifd … [truncated]
+ ... (3 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/334.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/334.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069)

#### 1. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/334.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/334.js#L4)

```diff
-   42132: (DD, zD, wD) => {
+   42319: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/334.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/334.js#L6)

```diff
-       d: () => rD
+       c: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/334.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/334.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "instancesDeclaration",
-       KD = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "clipPlaneVertex",
+       Ip = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 4. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/334.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/334.js#L17)

```diff
-   42208: (DD, zD, wD) => {
+   42226: (pp, ip, cp) => {
```

#### 5. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/334.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/334.js#L19)

```diff
-       e: () => rD
+       c: () => Sp
```

#### 6. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/334.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/334.js#L21-L24)

```diff
-     var pD = wD(39776);
-     const sD = "instancesVertex",
-       KD = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "clipPlaneVertexDeclaration",
+       Ip = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 7. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/334.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/334.js#L30)

```diff
-   42104: (DD, zD, wD) => {
+   42327: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/334.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/334.js#L32)

```diff
-       b: () => rD
+       c: () => Sp
```

#### 9. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/334.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/334.js#L34-L37)

```diff
-     var pD = wD(39776);
-     const sD = "meshUboDeclaration",
-       KD = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "fogVertex",
+       Ip = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 10. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/334.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/334.js#L43)

```diff
-   42095: (DD, zD, wD) => {
+   42232: (pp, ip, cp) => {
```

#### 11. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/334.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/334.js#L47-L50)

```diff
-     var pD = wD(39776);
-     const sD = "sceneUboDeclaration",
-       KD = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "fogVertexDeclaration",
+       Ip = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 12. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L56` → after: `L56-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L56-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/334.js#L56-L82) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/334.js#L56)

```diff
-   61624: (DD, zD, wD) => {
+   42266: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "logDepthDeclaration",
+       Ip = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42346: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp
+ ... (11 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L58` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/334.js#L84) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/334.js#L58)

```diff
-       greasedLineVertexShaderWGSL: () => AD
+       particlesVertexShader: () => Wp
```

#### 14. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L60-L69` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/334.js#L86-L97) · [Before (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/334.js#L60-L69)

```diff
-     var pD = wD(39776),
-       sD = wD(42132),
-       KD = wD(42095),
-       rD = wD(42104),
-       LD = wD(42208);
-     const cD = "greasedLineVertexShader",
-       gD = "#include<instancesDeclaration>\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\nattribute grl_widths: f32;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute grl_offsets: vec3f; \n#endif\nattribute grl_colorPointers: f32;attribute position: vec3f;varying grlCoun … [truncated]
-     pD.e.ShadersStoreWGSL[cD] || (pD.e.ShadersStoreWGSL[cD] = gD);
-     const RD = [sD.d, KD.e, rD.b, LD.e];
-     for (const UD of RD) pD.e.IncludesShadersStoreWGSL[UD.name] || (pD.e.IncludesShadersStoreWGSL[UD.name] = UD.shader);
+     var Op = cp(40062),
+       op = cp(42226),
+       Ip = cp(42232),
+       Sp = cp(42266),
+       xp = cp(42319),
+       Lp = cp(42327),
+       Yp = cp(42346);
+     const Dp = "particlesVertexShader",
+       Ap = "attribute vec3 position;attribute vec4 color;attribute float angle;attribute vec2 size;\n#ifdef ANIMATESHEET\nattribute float cellIndex;\n#endif\n#ifndef BILLBOARD\nattribute vec3 direction;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute vec3 direction;\n#endif\n#ifdef … [truncated]
+     Op.b.ShadersStore[Dp] || (Op.b.ShadersStore[Dp] = Ap);
+     const Pp = [op.c, Ip.e, Sp.e, xp.c, Lp.c, Yp.b];
+     for (const yp of Pp) Op.b.IncludesShadersStore[yp.name] || (Op.b.IncludesShadersStore[yp.name] = yp.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/335.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/335.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6)

#### 1. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/335.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/335.js#L4)

```diff
-   42109: (DD, zD, wD) => {
+   42319: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L8-L12` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/335.js#L8-L11) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/335.js#L8-L12)

```diff
-     var pD = wD(39776);
-     wD(42095), wD(42104);
-     const sD = "defaultUboDeclaration",
-       KD = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "clipPlaneVertex",
+       Ip = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 3. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L18` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/335.js#L17) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/335.js#L18)

```diff
-   42114: (DD, zD, wD) => {
+   42226: (pp, ip, cp) => {
```

#### 4. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L20` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/335.js#L19) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/335.js#L20)

```diff
-       b: () => rD
+       c: () => Sp
```

#### 5. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L22-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/335.js#L21-L24) · [Before (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/335.js#L22-L25)

```diff
-     var pD = wD(39776);
-     const sD = "helperFunctions",
-       KD = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "clipPlaneVertexDeclaration",
+       Ip = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 6. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/335.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/335.js#L31)

```diff
-   42095: (DD, zD, wD) => {
+   42327: (pp, ip, cp) => {
```

#### 7. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L33` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/335.js#L32) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/335.js#L33)

```diff
-       e: () => rD
+       c: () => Sp
```

#### 8. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/335.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/335.js#L35-L38)

```diff
-     var pD = wD(39776);
-     const sD = "sceneUboDeclaration",
-       KD = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "fogVertex",
+       Ip = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 9. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L44-L46` → after: `L43-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/335.js#L43-L45) · [Before (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/335.js#L44-L46)

```diff
-   42272: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       defaultPixelShaderWGSL: () => HD
+   42232: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
```

#### 10. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L48-L69` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/335.js#L47-L50) · [Before (L48-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/335.js#L48-L69)

```diff
-     var pD = wD(39776),
-       sD = wD(42095),
-       KD = wD(42104),
-       rD = wD(42109),
-       LD = wD(42280),
-       cD = wD(42285),
-       gD = wD(42288),
-       RD = wD(42141),
-       AD = wD(42114),
-       UD = wD(42291),
-       fD = wD(42295),
-       ID = wD(42303);
-     const BD = "clusteredLightingCompute",
-       GD = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nviewDirectionW: vec3f,\nvNormal: vec3f,\nlightData: vec4f,\nsliceRange: vec2u,\nglossiness: f32\n)->lightingInfo {var re … [truncated]
-     pD.e.IncludesShadersStoreWGSL[BD] || (pD.e.IncludesShadersStoreWGSL[BD] = GD);
-     const hD = {
- ... (6 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "fogVertexDeclaration",
+       Ip = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 11. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L73-L78` → after: `L54-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/335.js#L54-L63) · [Before (L73-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/335.js#L73-L78)

```diff
-     };
-     var JD = wD(42311),
-       ED = wD(42317);
-     const QD = "fresnelFunction",
-       XD = "#ifdef FRESNEL\nfn computeFresnelTerm(viewDirection: vec3f,worldNormal: vec3f,bias: f32,power: f32)->f32\n{let fresnelTerm: f32=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
-     pD.e.IncludesShadersStoreWGSL[QD] || (pD.e.IncludesShadersStoreWGSL[QD] = XD);
+     }
+   },
+   42266: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "logDepthDeclaration",
+       Ip = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 12. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L82-L97` → after: `L67-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L67-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/335.js#L67-L76) · [Before (L82-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/335.js#L82-L97)

```diff
-     };
-     var PD = wD(42326),
-       CD = wD(42335),
-       xD = wD(42341),
-       TD = wD(42344),
-       bD = wD(42348),
-       jD = wD(42352),
-       dD = wD(42357),
-       SD = wD(42190),
-       iD = wD(42359),
-       lD = wD(42365),
-       WD = wD(42374),
-       ND = wD(42377);
-     const ZD = "defaultFragmentAlpha",
-       yD = "#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpa … [truncated]
-     pD.e.IncludesShadersStoreWGSL[ZD] || (pD.e.IncludesShadersStoreWGSL[ZD] = yD);
+     }
+   },
+   42346: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "logDepthVertex",
+       Ip = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 13. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L101-L112` → after: `L80-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L80-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/335.js#L80-L97) · [Before (L101-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/335.js#L101-L112)

```diff
-     };
-     var mD = wD(42382),
-       eD = wD(42390),
-       oD = wD(42396),
-       aD = wD(42401),
-       uD = wD(42406),
-       vD = wD(42414);
-     const tD = "defaultPixelShader",
-       FD = "#include<defaultUboDeclaration>\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#define CUSTOM_FRAGMENT_BEGIN\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && … [truncated]
-     pD.e.ShadersStoreWGSL[tD] || (pD.e.ShadersStoreWGSL[tD] = FD);
-     const YD = [sD.e, KD.b, rD.c, LD.c, cD.c, gD.d, RD.e, AD.b, UD.d, fD.d, ID.b, hD, OD, JD.b, ED.d, VD, PD.c, CD.d, xD.e, TD.b, bD.e, jD.d, dD.c, SD.c, iD.e, lD.c, WD.b, ND.b, kD, mD.e, eD.c, oD.d, aD.c, uD.d, vD.d];
-     for (const qD of YD) pD.e.IncludesShadersStoreWGSL[qD.name] || (pD.e.IncludesShadersStoreWGSL[qD.name] = qD.shader);
+     }
+   },
+   61421: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       skyVertexShader: () => Wp
+     });
+     var Op = cp(40062),
+       op = cp(42266),
+       Ip = cp(42226),
+       Sp = cp(42232),
+       xp = cp(42319),
+       Lp = cp(42346),
+       Yp = cp(42327);
+     const Dp = "skyVertexShader",
+       Ap = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvary … [truncated]
+     Op.b.ShadersStore[Dp] || (Op.b.ShadersStore[Dp] = Ap);
+ ... (2 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/336.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/336.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028)

#### 1. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/336.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/336.js#L4)

```diff
-   42114: (DD, zD, wD) => {
+   42452: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/336.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/336.js#L6)

```diff
-       b: () => rD
+       c: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/336.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/336.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "helperFunctions",
-       KD = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "bumpFragment",
+       Ip = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 4. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/336.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/336.js#L17)

```diff
-   61380: (DD, zD, wD) => {
+   42429: (pp, ip, cp) => {
```

#### 5. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/336.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/336.js#L19)

```diff
-       d: () => rD
+       e: () => Sp
```

#### 6. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L21-L24` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/336.js#L21-L25) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/336.js#L21-L24)

```diff
-     var pD = wD(39776);
-     const sD = "pbrBRDFFunctions",
-       KD = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     cp(42403);
+     const op = "bumpFragmentFunctions",
+       Ip = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 7. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L30` → after: `L31-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L31-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/336.js#L31-L44) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/336.js#L30)

```diff
-   42095: (DD, zD, wD) => {
+   42423: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "bumpFragmentMainFunctions",
+       Ip = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42392: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L34-L37` → after: `L48-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L48-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/336.js#L48-L77) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/336.js#L34-L37)

```diff
-     var pD = wD(39776);
-     const sD = "sceneUboDeclaration",
-       KD = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "clusteredLightingFunctions",
+       Ip = "struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};\n#define inline\nClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(\ntexelFetch(lightDataTexture,ivec2( … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42457: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "decalFragment",
+       Ip = "#ifdef DECAL\n#ifdef GAMMADECAL\ndecalColor.rgb=toLinearSpace(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalColor.a*=decalColor.a;\n#endif\nsurfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);\n#endif\n";
+ ... (14 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/337.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/337.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557)

#### 1. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/337.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/337.js#L4)

```diff
-   42225: (DD, zD, wD) => {
+   42449: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/337.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/337.js#L6)

```diff
-       e: () => rD
+       d: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/337.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/337.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "bakedVertexAnimation",
-       KD = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "clipPlaneFragment",
+       Ip = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 4. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/337.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/337.js#L17)

```diff
-   42127: (DD, zD, wD) => {
+   42436: (pp, ip, cp) => {
```

#### 5. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/337.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/337.js#L19)

```diff
-       b: () => rD
+       e: () => Sp
```

#### 6. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/337.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/337.js#L21-L24)

```diff
-     var pD = wD(39776);
-     const sD = "bakedVertexAnimationDeclaration",
-       KD = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "clipPlaneFragmentDeclaration",
+       Ip = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 7. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/337.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/337.js#L30)

```diff
-   42122: (DD, zD, wD) => {
+   42476: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/337.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/337.js#L32)

```diff
-       c: () => rD
+       b: () => Sp
```

#### 9. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/337.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/337.js#L34-L37)

```diff
-     var pD = wD(39776);
-     const sD = "bonesDeclaration",
-       KD = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "fogFragment",
+       Ip = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 10. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/337.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/337.js#L43)

```diff
-   42216: (DD, zD, wD) => {
+   42443: (pp, ip, cp) => {
```

#### 11. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/337.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/337.js#L45)

```diff
-       c: () => rD
+       b: () => Sp
```

#### 12. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/337.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/337.js#L47-L50)

```diff
-     var pD = wD(39776);
-     const sD = "bonesVertex",
-       KD = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "fogFragmentDeclaration",
+       Ip = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 13. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L56-L58` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/337.js#L56-L58) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/337.js#L56-L58)

```diff
-   42244: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => rD
+   42863: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       colorPixelShader: () => Ap
```

#### 14. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L60-L223` → after: `L60-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/337.js#L60-L69) · [Before (L60-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/337.js#L60-L223)

```diff
-     var pD = wD(39776);
-     const sD = "bumpVertex",
-       KD = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42252: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "clipPlaneVertex",
-       KD = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
- ... (148 more removed lines; see GitHub link above)
+     var Op = cp(40062),
+       op = cp(42436),
+       Ip = cp(42443),
+       Sp = cp(42449),
+       xp = cp(42476);
+     const Lp = "colorPixelShader",
+       Yp = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoi … [truncated]
+     Op.b.ShadersStore[Lp] || (Op.b.ShadersStore[Lp] = Yp);
+     const Dp = [op.e, Ip.b, Sp.d, xp.b];
+     for (const Pp of Dp) Op.b.IncludesShadersStore[Pp.name] || (Op.b.IncludesShadersStore[Pp.name] = Pp.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/338.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/338.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07)

#### 1. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/338.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/338.js#L4)

```diff
-   42225: (DD, zD, wD) => {
+   42669: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/338.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/338.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "bakedVertexAnimation",
-       KD = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "bumpVertex",
+       Ip = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 3. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/338.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/338.js#L17)

```diff
-   42127: (DD, zD, wD) => {
+   42556: (pp, ip, cp) => {
```

#### 4. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/338.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/338.js#L21-L24)

```diff
-     var pD = wD(39776);
-     const sD = "bakedVertexAnimationDeclaration",
-       KD = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "bumpVertexDeclaration",
+       Ip = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 5. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L30-L121` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/338.js#L30) · [Before (L30-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/338.js#L30-L121)

```diff
-   42122: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "bonesDeclaration",
-       KD = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42216: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
- ... (76 more removed lines; see GitHub link above)
+   42505: (pp, ip, cp) => {
```

#### 6. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L125-L167` → after: `L34-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/338.js#L34-L38) · [Before (L125-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/338.js#L125-L167)

```diff
-     var pD = wD(39776);
-     const sD = "instancesVertex",
-       KD = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42170: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "lightVxUboDeclaration",
-       KD = "#ifdef LIGHT{X}\nstruct Light{X}\n{vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\n#ifdef SPOTLIGHT{X}\nvLightDirection: vec4f,\nvLightFalloff: vec4f,\n#elif defined(POINTLIGHT{X})\nvLightFalloff: vec4f,\n#elif defined(HEMILIGHT{X})\nvLightGround: v … [truncated]
- ... (27 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     cp(42496), cp(42498);
+     const op = "defaultUboDeclaration",
+       Ip = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 7. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L173` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/338.js#L44) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/338.js#L173)

```diff
-   42141: (DD, zD, wD) => {
+   42520: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L177-L362` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/338.js#L48-L51) · [Before (L177-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/338.js#L177-L362)

```diff
-     var pD = wD(39776);
-     const sD = "mainUVVaryingDeclaration",
-       KD = "#ifdef MAINUV{X}\nvarying vMainUV{X}: vec2f;\n#endif\n";
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42104: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "meshUboDeclaration",
-       KD = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
- ... (170 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "helperFunctions",
+       Ip = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 9. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L368` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/338.js#L57) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/338.js#L368)

```diff
-   42194: (DD, zD, wD) => {
+   42496: (pp, ip, cp) => {
```

#### 10. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L372-L375` → after: `L61-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L61-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/338.js#L61-L120) · [Before (L372-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/338.js#L372-L375)

```diff
-     var pD = wD(39776);
-     const sD = "vertexPullingVertex",
-       KD = "#ifdef USE_VERTEX_PULLING\nlet vpVertexIndex: u32=vp_readVertexIndex(vertexInputs.vertexIndex);positionUpdated=vp_readPosition(uniforms.vp_position_info,vpVertexIndex);\n#ifdef NORMAL\nnormalUpdated=vp_readNormal(uniforms.vp_normal_info,vpVertexIndex);\n#endif\n#ifdef … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "sceneUboDeclaration",
+       Ip = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42492: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       defaultVertexShaderWGSL: () => Gp
+     });
+     var Op = cp(40062),
+       op = cp(42496),
+       Ip = cp(42498),
+ ... (44 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/339.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/339.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2)

#### 1. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L4-L108` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/339.js#L4) · [Before (L4-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/339.js#L4-L108)

```diff
-   42365: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "clipPlaneFragment",
-       KD = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42357: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
- ... (89 more removed lines; see GitHub link above)
+   42531: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L112-L128` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/339.js#L8-L11) · [Before (L112-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/339.js#L112-L128)

```diff
-     var pD = wD(39776);
-     const sD = "lightUboDeclaration",
-       KD = "#ifdef LIGHT{X}\nstruct Light{X}\n{vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\n#ifdef SPOTLIGHT{X}\nvLightDirection: vec4f,\nvLightFalloff: vec4f,\n#elif defined(POINTLIGHT{X})\nvLightFalloff: vec4f,\n#elif defined(HEMILIGHT{X})\nvLightGround: v … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42190: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "logDepthDeclaration",
-       KD = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
- ... (1 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "instancesDeclaration",
+       Ip = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 3. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L134` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/339.js#L17) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/339.js#L134)

```diff
-   42396: (DD, zD, wD) => {
+   42624: (pp, ip, cp) => {
```

#### 4. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L136-L149` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/339.js#L19) · [Before (L136-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/339.js#L136-L149)

```diff
-       d: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "logDepthFragment",
-       KD = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42295: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => rD
+       b: () => Sp
```

#### 5. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L151-L154` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/339.js#L21-L24) · [Before (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/339.js#L151-L154)

```diff
-     var pD = wD(39776);
-     const sD = "ltcHelperFunctions",
-       KD = "fn LTCUv(N: vec3f,V: vec3f,roughness: f32)->vec2f {var LUTSIZE: f32=64.0;var LUTSCALE: f32=( LUTSIZE-1.0 )/LUTSIZE;var LUTBIAS:f32=0.5/LUTSIZE;var dotNV:f32=saturate( dot( N,V ) );var uv:vec2f=vec2f( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+LUTBIAS;return uv;}\nfn … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "instancesVertex",
+       Ip = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 6. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L160` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/339.js#L30) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/339.js#L160)

```diff
-   42141: (DD, zD, wD) => {
+   42498: (pp, ip, cp) => {
```

#### 7. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L164-L190` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/339.js#L34) · [Before (L164-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/339.js#L164-L190)

```diff
-     var pD = wD(39776);
-     const sD = "mainUVVaryingDeclaration",
-       KD = "#ifdef MAINUV{X}\nvarying vMainUV{X}: vec2f;\n#endif\n";
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42406: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "meshBlendTagFragmentOutput",
-       KD = "#if SCENE_MRT_COUNT>{X}\n#if defined(PREPASS_MESH_BLEND_TAG) && PREPASS_MESH_BLEND_TAG_INDEX=={X}\nfragmentOutputs.fragData{X}=meshBlendTagOutput;\n#else\nfragmentOutputs.fragData{X}=fragData[{X}];\n#endif\n#endif\n";
- ... (11 more removed lines; see GitHub link above)
+     var Op = cp(40062);
```

#### 8. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L193-L206` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/339.js#L37) · [Before (L193-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/339.js#L193-L206)

```diff
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42280: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "objectIdFunctions",
-       KD = "fn encodeObjectId(objectId: f32)->vec4f {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4f(objectId/255.0,0.0,0.0,1.0);\n#else\nlet id=i32(objectId);let encodedId=vec3f(\nf32((id>>16) & 0xFF),\nf32((id>>8) & 0xFF),\nf32(id & 0xFF)\n)/255.0;return vec4f(encodedId,select(0.0, … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 9. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L212` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/339.js#L43) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/339.js#L212)

```diff
-   42288: (DD, zD, wD) => {
+   42496: (pp, ip, cp) => {
```

#### 10. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L214-L280` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/339.js#L45) · [Before (L214-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/339.js#L214-L280)

```diff
-       d: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "oitDeclaration",
-       KD = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#define MAX_DEPTH 99999.0\nvar oitDepthSamplerSampler: sampler;var oitDepthSampler: texture_2d<f32>;var oitFrontColorSamplerSampler: sampler;var oitFrontColorSampler: texture_2d<f32>;\n#endif\n";
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42414: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => rD
-     });
-     var pD = wD(39776);
- ... (51 more removed lines; see GitHub link above)
+       e: () => Sp
```

#### 11. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L282-L285` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/339.js#L47-L50) · [Before (L282-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/339.js#L282-L285)

```diff
-     var pD = wD(39776);
-     const sD = "shadowsFragmentFunctions",
-       KD = "#ifdef SHADOWS\n#ifndef SHADOWFLOAT\nfn unpack(color: vec4f)->f32\n{const bit_shift: vec4f= vec4f(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}\n#endif\nfn computeFallOff(value: f32,clipSpace: vec2f,frustumEdgeFalloff: f32)->f3 … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "sceneUboDeclaration",
+       Ip = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 12. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L291-L293` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/339.js#L56-L58) · [Before (L291-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/339.js#L291-L293)

```diff
-   42344: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
+   61955: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       greasedLineVertexShaderWGSL: () => Ap
```

#### 13. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L295-L298` → after: `L60-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/339.js#L60-L69) · [Before (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/339.js#L295-L298)

```diff
-     var pD = wD(39776);
-     const sD = "textureRepetitionFunctions",
-       KD = "#if TEXTURE_REPETITION_MODE>0\nfn _texRepHash4(p: vec2f)->vec4f {return fract(sin(vec4f(\n1.0+dot(p,vec2f(37.0,17.0)),\n2.0+dot(p,vec2f(11.0,47.0)),\n3.0+dot(p,vec2f(41.0,29.0)),\n4.0+dot(p,vec2f(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nfn _te … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062),
+       op = cp(42531),
+       Ip = cp(42496),
+       Sp = cp(42498),
+       xp = cp(42624);
+     const Lp = "greasedLineVertexShader",
+       Yp = "#include<instancesDeclaration>\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\nattribute grl_widths: f32;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute grl_offsets: vec3f; \n#endif\nattribute grl_colorPointers: f32;attribute position: vec3f;varying grlCoun … [truncated]
+     Op.b.ShadersStoreWGSL[Lp] || (Op.b.ShadersStoreWGSL[Lp] = Yp);
+     const Dp = [op.d, Ip.e, Sp.e, xp.b];
+     for (const Pp of Dp) Op.b.IncludesShadersStoreWGSL[Pp.name] || (Op.b.IncludesShadersStoreWGSL[Pp.name] = Pp.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/340.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/340.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f)

#### 1. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L4-L43` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/340.js#L4) · [Before (L4-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/340.js#L4-L43)

```diff
-   42365: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "clipPlaneFragment",
-       KD = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42357: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
- ... (24 more removed lines; see GitHub link above)
+   42505: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L47-L50` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/340.js#L8-L12) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/340.js#L47-L50)

```diff
-     var pD = wD(39776);
-     const sD = "fogFragmentDeclaration",
-       KD = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     cp(42496), cp(42498);
+     const op = "defaultUboDeclaration",
+       Ip = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 3. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L56` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/340.js#L18) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/340.js#L56)

```diff
-   42114: (DD, zD, wD) => {
+   42520: (pp, ip, cp) => {
```

#### 4. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L58` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/340.js#L20) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/340.js#L58)

```diff
-       b: () => rD
+       e: () => Sp
```

#### 5. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L60` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/340.js#L22) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/340.js#L60)

```diff
-     var pD = wD(39776);
+     var Op = cp(40062);
```

#### 6. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L63-L76` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/340.js#L25) · [Before (L63-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/340.js#L63-L76)

```diff
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42335: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "imageProcessingDeclaration",
-       KD = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 7. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L82` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/340.js#L31) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/340.js#L82)

```diff
-   42341: (DD, zD, wD) => {
+   42496: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L86-L89` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/340.js#L35-L38) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/340.js#L86-L89)

```diff
-     var pD = wD(39776);
-     const sD = "imageProcessingFunctions",
-       KD = "#if TONEMAPPING==3\nconst PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;resu … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "sceneUboDeclaration",
+       Ip = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 9. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L95-L110` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/340.js#L44-L46) · [Before (L95-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/340.js#L95-L110)

```diff
-   42190: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "logDepthDeclaration",
-       KD = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42396: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => rD
+   42706: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       defaultPixelShaderWGSL: () => Vp
```

#### 10. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L112-L115` → after: `L48-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L48-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/340.js#L48-L62) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/340.js#L112-L115)

```diff
-     var pD = wD(39776);
-     const sD = "logDepthFragment",
-       KD = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062),
+       op = cp(42496),
+       Ip = cp(42498),
+       Sp = cp(42505),
+       xp = cp(42711),
+       Lp = cp(42714),
+       Yp = cp(42718),
+       Dp = cp(42542),
+       Ap = cp(42520),
+       Pp = cp(42721),
+       Wp = cp(42726),
+       yp = cp(42733);
+     const Up = "clusteredLightingCompute",
+       wp = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nviewDirectionW: vec3f,\nvNormal: vec3f,\nlightData: vec4f,\nsliceRange: vec2u,\nglossiness: f32\n)->lightingInfo {var re … [truncated]
+     Op.b.IncludesShadersStoreWGSL[Up] || (Op.b.IncludesShadersStoreWGSL[Up] = wp);
```

#### 11. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L117-L128` → after: `L64-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L64-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/340.js#L64-L69) · [Before (L117-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/340.js#L117-L128)

```diff
-       name: sD,
-       shader: KD
-     }
-   },
-   42406: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "meshBlendTagFragmentOutput",
-       KD = "#if SCENE_MRT_COUNT>{X}\n#if defined(PREPASS_MESH_BLEND_TAG) && PREPASS_MESH_BLEND_TAG_INDEX=={X}\nfragmentOutputs.fragData{X}=meshBlendTagOutput;\n#else\nfragmentOutputs.fragData{X}=fragData[{X}];\n#endif\n#endif\n";
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+         name: Up,
+         shader: wp
+       },
+       tp = "lightsFragmentFunctions",
+       Hp = "struct lightingInfo\n{diffuse: vec3f,\n#ifdef SPECULARTERM\nspecular: vec3f,\n#endif\n#ifdef NDOTL\nndl: f32,\n#endif\n};fn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->ligh … [truncated]
+     Op.b.IncludesShadersStoreWGSL[tp] || (Op.b.IncludesShadersStoreWGSL[tp] = Hp);
```

#### 12. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L132-L141` → after: `L73-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L73-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/340.js#L73-L78) · [Before (L132-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/340.js#L132-L141)

```diff
-     }
-   },
-   42280: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "objectIdFunctions",
-       KD = "fn encodeObjectId(objectId: f32)->vec4f {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4f(objectId/255.0,0.0,0.0,1.0);\n#else\nlet id=i32(objectId);let encodedId=vec3f(\nf32((id>>16) & 0xFF),\nf32((id>>8) & 0xFF),\nf32(id & 0xFF)\n)/255.0;return vec4f(encodedId,select(0.0, … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     };
+     var ep = cp(42736),
+       jp = cp(42742);
+     const kp = "fresnelFunction",
+       mp = "#ifdef FRESNEL\nfn computeFresnelTerm(viewDirection: vec3f,worldNormal: vec3f,bias: f32,power: f32)->f32\n{let fresnelTerm: f32=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
+     Op.b.IncludesShadersStoreWGSL[kp] || (Op.b.IncludesShadersStoreWGSL[kp] = mp);
```

#### 13. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L145-L155` → after: `L82-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L82-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/340.js#L82-L97) · [Before (L145-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/340.js#L145-L155)

```diff
-     }
-   },
-   42285: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
-     });
-     var pD = wD(39776);
-     wD(42280);
-     const sD = "prePassDeclaration",
-       KD = "#ifdef PREPASS\n#ifndef PREPASS_CUSTOM_VARYINGS\n#ifdef PREPASS_LOCAL_POSITION\nvarying vPosition : vec3f;\n#endif\n#ifdef PREPASS_DEPTH\nvarying vViewPos: vec3f;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvarying vNormViewDepth: f32;\n#endif\n#if (defined(PREPASS … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     };
+     var qp = cp(42749),
+       Mp = cp(42752),
+       Cp = cp(42759),
+       Ep = cp(42765),
+       Xp = cp(42771),
+       lp = cp(42777),
+       Qp = cp(42783),
+       Jp = cp(42598),
+       Bp = cp(42790),
+       Np = cp(42794),
+       Tp = cp(42797),
+       fp = cp(42803);
+     const bp = "defaultFragmentAlpha",
+       hp = "#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpa … [truncated]
+     Op.b.IncludesShadersStoreWGSL[bp] || (Op.b.IncludesShadersStoreWGSL[bp] = hp);
```

#### 14. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L159-L189` → after: `L101-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L101-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/340.js#L101-L112) · [Before (L159-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/340.js#L159-L189)

```diff
-     }
-   },
-   61072: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       particlesPixelShaderWGSL: () => ED
-     });
-     var pD = wD(39776),
-       sD = wD(42280),
-       KD = wD(42285),
-       rD = wD(42357),
-       LD = wD(42335),
-       cD = wD(42190),
-       gD = wD(42114),
-       RD = wD(42341),
-       AD = wD(42359),
-       UD = wD(42365),
- ... (15 more removed lines; see GitHub link above)
+     };
+     var np = cp(42807),
+       Fp = cp(42811),
+       gp = cp(42820),
+       Gp = cp(42825),
+       rp = cp(42831),
+       Zp = cp(42839);
+     const zp = "defaultPixelShader",
+       sp = "#include<defaultUboDeclaration>\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#define CUSTOM_FRAGMENT_BEGIN\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && … [truncated]
+     Op.b.ShadersStoreWGSL[zp] || (Op.b.ShadersStoreWGSL[zp] = sp);
+     const Kp = [op.e, Ip.e, Sp.e, xp.c, Lp.e, Yp.b, Dp.e, Ap.e, Pp.e, Wp.d, yp.c, vp, dp, ep.d, jp.d, Rp, qp.c, Mp.d, Cp.e, Ep.e, Xp.c, lp.c, Qp.d, Jp.d, Bp.b, Np.d, Tp.b, fp.d, ap, np.e, Fp.c, gp.b, Gp.d, rp.c, Zp.d];
+     for (const ii of Kp) Op.b.IncludesShadersStoreWGSL[ii.name] || (Op.b.IncludesShadersStoreWGSL[ii.name] = ii.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/341.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/341.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450)

#### 1. `bundles/bloxd.io/chunks/js/341.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/341.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/341.js#L4)

```diff
-   42365: (DD, zD, wD) => {
+   42520: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/341.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/341.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/341.js#L6)

```diff
-       c: () => rD
+       e: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/341.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/341.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/341.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "clipPlaneFragment",
-       KD = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "helperFunctions",
+       Ip = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 4. `bundles/bloxd.io/chunks/js/341.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/341.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/341.js#L17)

```diff
-   42357: (DD, zD, wD) => {
+   61745: (pp, ip, cp) => {
```

#### 5. `bundles/bloxd.io/chunks/js/341.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/341.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/341.js#L21-L24)

```diff
-     var pD = wD(39776);
-     const sD = "clipPlaneFragmentDeclaration",
-       KD = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "pbrBRDFFunctions",
+       Ip = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 6. `bundles/bloxd.io/chunks/js/341.js` (Changed code · before: `L30-L43` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/341.js#L30) · [Before (L30-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/341.js#L30-L43)

```diff
-   42401: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "fogFragment",
-       KD = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42359: (DD, zD, wD) => {
+   42496: (pp, ip, cp) => {
```

#### 7. `bundles/bloxd.io/chunks/js/341.js` (Changed code · before: `L47-L118` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/341.js#L34-L37) · [Before (L47-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/341.js#L47-L118)

```diff
-     var pD = wD(39776);
-     const sD = "fogFragmentDeclaration",
-       KD = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42114: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "helperFunctions",
-       KD = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
- ... (56 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "sceneUboDeclaration",
+       Ip = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/342.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/342.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2)

#### 1. `bundles/bloxd.io/chunks/js/342.js` (Changed code · before: `L4` → after: `L4-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2) · [After (L4-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/342.js#L4-L43) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/342.js#L4)

```diff
-   42114: (DD, zD, wD) => {
+   42639: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "bakedVertexAnimation",
+       Ip = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42527: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+ ... (24 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/342.js` (Changed code · before: `L8-L17` → after: `L47-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2) · [After (L47-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/342.js#L47-L199) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/342.js#L8-L17)

```diff
-     var pD = wD(39776);
-     const sD = "helperFunctions",
-       KD = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   61148: (DD, zD, wD) => {
+     var Op = cp(40062);
+     const op = "bonesVertex",
+       Ip = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42669: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "bumpVertex",
+       Ip = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+ ... (137 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/342.js` (Changed code · before: `L19-L27` → after: `L201-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2) · [After (L201-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/342.js#L201-L223) · [Before (L19-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/342.js#L19-L27)

```diff
-       rgbdDecodePixelShaderWGSL: () => cD
-     });
-     var pD = wD(39776),
-       sD = wD(42114);
-     const KD = "rgbdDecodePixelShader",
-       rD = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(t … [truncated]
-     pD.e.ShadersStoreWGSL[KD] || (pD.e.ShadersStoreWGSL[KD] = rD);
-     const LD = [sD.b];
-     for (const gD of LD) pD.e.IncludesShadersStoreWGSL[gD.name] || (pD.e.IncludesShadersStoreWGSL[gD.name] = gD.shader);
+       geometryVertexShaderWGSL: () => jp
+     });
+     var Op = cp(40062),
+       op = cp(42525),
+       Ip = cp(42527),
+       Sp = cp(42584),
+       xp = cp(42589),
+       Lp = cp(42531),
+       Yp = cp(42496),
+       Dp = cp(42565),
+       Ap = cp(61754),
+       Pp = cp(42612),
+       Wp = cp(42617),
+       yp = cp(42624),
+       Up = cp(42632),
+       wp = cp(42639),
+ ... (7 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/343.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/343.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2)

#### 1. `bundles/bloxd.io/chunks/js/343.js` (Changed code · before: `L4-L27` → after: `L4-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2) · [After (L4-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/343.js#L4-L375) · [Before (L4-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/343.js#L4-L27)

```diff
-   42114: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "helperFunctions",
-       KD = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   61169: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       rgbdEncodePixelShaderWGSL: () => cD
- ... (8 more removed lines; see GitHub link above)
+   42639: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "bakedVertexAnimation",
+       Ip = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42527: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+ ... (356 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/344.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/344.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5)

#### 1. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L4)

```diff
-   42225: (DD, zD, wD) => {
+   42794: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L6)

```diff
-       e: () => rD
+       d: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "bakedVertexAnimation",
-       KD = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "clipPlaneFragment",
+       Ip = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 4. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L17)

```diff
-   42127: (DD, zD, wD) => {
+   42783: (pp, ip, cp) => {
```

#### 5. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L19)

```diff
-       b: () => rD
+       d: () => Sp
```

#### 6. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L21-L24)

```diff
-     var pD = wD(39776);
-     const sD = "bakedVertexAnimationDeclaration",
-       KD = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "clipPlaneFragmentDeclaration",
+       Ip = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 7. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L30)

```diff
-   42122: (DD, zD, wD) => {
+   42733: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L34-L37)

```diff
-     var pD = wD(39776);
-     const sD = "bonesDeclaration",
-       KD = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "clusteredLightingFunctions",
+       Ip = "struct ClusteredLight {vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\nvLightDirection: vec4f,\nvLightFalloff: vec4f,}\nfn getClusteredLight(lightDataTexture: texture_2d<f32>,index: u32)->ClusteredLight {return ClusteredLight(\ntextureLoad(lightData … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 9. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L43)

```diff
-   42216: (DD, zD, wD) => {
+   42807: (pp, ip, cp) => {
```

#### 10. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L45)

```diff
-       c: () => rD
+       e: () => Sp
```

#### 11. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L47-L50)

```diff
-     var pD = wD(39776);
-     const sD = "bonesVertex",
-       KD = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "depthPrePass",
+       Ip = "#ifdef DEPTHPREPASS\n#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)\nfragmentOutputs.color= vec4f(0.,0.,0.,1.0);\n#endif\n#ifndef DEPTHPREPASS_SKIP_EARLY_RETURN\nreturn fragmentOutputs;\n#endif\n#endif\n";
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 12. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L56)

```diff
-   42252: (DD, zD, wD) => {
+   42825: (pp, ip, cp) => {
```

#### 13. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L58)

```diff
-       b: () => rD
+       d: () => Sp
```

#### 14. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L60-L63)

```diff
-     var pD = wD(39776);
-     const sD = "clipPlaneVertex",
-       KD = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "fogFragment",
+       Ip = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 15. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L69)

```diff
-   42159: (DD, zD, wD) => {
+   42790: (pp, ip, cp) => {
```

#### 16. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L73-L76)

```diff
-     var pD = wD(39776);
-     const sD = "clipPlaneVertexDeclaration",
-       KD = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "fogFragmentDeclaration",
+       Ip = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 17. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L82)

```diff
-   42255: (DD, zD, wD) => {
+   42752: (pp, ip, cp) => {
```

#### 18. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L86-L89` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L86-L89) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L86-L89)

```diff
-     var pD = wD(39776);
-     const sD = "fogVertex",
-       KD = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "imageProcessingDeclaration",
+       Ip = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 19. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L95` → after: `L95-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L95-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L95-L134) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L95)

```diff
-   42168: (DD, zD, wD) => {
+   42759: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "imageProcessingFunctions",
+       Ip = "#if TONEMAPPING==3\nconst PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;resu … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42721: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+ ... (24 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L99-L102` → after: `L138-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L138-L141) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L99-L102)

```diff
-     var pD = wD(39776);
-     const sD = "fogVertexDeclaration",
-       KD = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "logDepthFragment",
+       Ip = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 21. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L108` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L147) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L108)

```diff
-   42132: (DD, zD, wD) => {
+   42726: (pp, ip, cp) => {
```

#### 22. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L112-L115` → after: `L151-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L151-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L151-L180) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L112-L115)

```diff
-     var pD = wD(39776);
-     const sD = "instancesDeclaration",
-       KD = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "ltcHelperFunctions",
+       Ip = "fn LTCUv(N: vec3f,V: vec3f,roughness: f32)->vec2f {var LUTSIZE: f32=64.0;var LUTSCALE: f32=( LUTSIZE-1.0 )/LUTSIZE;var LUTBIAS:f32=0.5/LUTSIZE;var dotNV:f32=saturate( dot( N,V ) );var uv:vec2f=vec2f( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+LUTBIAS;return uv;}\nfn … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42542: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "mainUVVaryingDeclaration",
+       Ip = "#ifdef MAINUV{X}\nvarying vMainUV{X}: vec2f;\n#endif\n";
+ ... (14 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L121` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L186) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L121)

```diff
-   42208: (DD, zD, wD) => {
+   42498: (pp, ip, cp) => {
```

#### 24. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L125-L128` → after: `L190-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L190-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L190-L206) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L125-L128)

```diff
-     var pD = wD(39776);
-     const sD = "instancesVertex",
-       KD = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "meshUboDeclaration",
+       Ip = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42711: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "objectIdFunctions",
+       Ip = "fn encodeObjectId(objectId: f32)->vec4f {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4f(objectId/255.0,0.0,0.0,1.0);\n#else\nlet id=i32(objectId);let encodedId=vec3f(\nf32((id>>16) & 0xFF),\nf32((id>>8) & 0xFF),\nf32(id & 0xFF)\n)/255.0;return vec4f(encodedId,select(0.0, … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L134` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L212) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L134)

```diff
-   42266: (DD, zD, wD) => {
+   42718: (pp, ip, cp) => {
```

#### 26. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L138-L141` → after: `L216-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L216-L219) · [Before (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L138-L141)

```diff
-     var pD = wD(39776);
-     const sD = "vertexColorMixing",
-       KD = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertex … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "oitDeclaration",
+       Ip = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#define MAX_DEPTH 99999.0\nvar oitDepthSamplerSampler: sampler;var oitDepthSampler: texture_2d<f32>;var oitFrontColorSamplerSampler: sampler;var oitFrontColorSampler: texture_2d<f32>;\n#endif\n";
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 27. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L147-L149` → after: `L225-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L225-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L225-L293) · [Before (L147-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L147-L149)

```diff
-   42428: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       colorVertexShaderWGSL: () => nD
+   42839: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "oitFragment",
+       Ip = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\nvar fragDepth: f32=fragmentInputs.position.z; \n#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS\nvar halfFloat: u32=pack2x16float( vec2f(fragDepth));var full: vec2f=unpack2x16float(halfFloat);fragDepth=full.x;\n#endif\nvar fragCoord … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42714: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+ ... (53 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L151-L167` → after: `L295-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/344.js#L295-L298) · [Before (L151-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/344.js#L151-L167)

```diff
-     var pD = wD(39776),
-       sD = wD(42122),
-       KD = wD(42127),
-       rD = wD(42159),
-       LD = wD(42168),
-       cD = wD(42132),
-       gD = wD(42208),
-       RD = wD(42216),
-       AD = wD(42225),
-       UD = wD(42252),
-       fD = wD(42255),
-       ID = wD(42266);
-     const BD = "colorVertexShader",
-       GD = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#ifdef FOG\nuniform view: mat4x4f;\n#endif\n#i … [truncated]
-     pD.e.ShadersStoreWGSL[BD] || (pD.e.ShadersStoreWGSL[BD] = GD);
-     const hD = [sD.c, KD.b, rD.b, LD.b, cD.d, gD.e, RD.c, AD.e, UD.b, fD.d, ID.b];
- ... (1 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "textureRepetitionFunctions",
+       Ip = "#if TEXTURE_REPETITION_MODE>0\nfn _texRepHash4(p: vec2f)->vec4f {return fract(sin(vec4f(\n1.0+dot(p,vec2f(37.0,17.0)),\n2.0+dot(p,vec2f(11.0,47.0)),\n3.0+dot(p,vec2f(41.0,29.0)),\n4.0+dot(p,vec2f(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nfn _te … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/345.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/345.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89)

#### 1. `bundles/bloxd.io/chunks/js/345.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/345.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/345.js#L4)

```diff
-   42244: (DD, zD, wD) => {
+   42794: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/345.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/345.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/345.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "bumpVertex",
-       KD = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "clipPlaneFragment",
+       Ip = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 3. `bundles/bloxd.io/chunks/js/345.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/345.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/345.js#L17)

```diff
-   42152: (DD, zD, wD) => {
+   42783: (pp, ip, cp) => {
```

#### 4. `bundles/bloxd.io/chunks/js/345.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/345.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/345.js#L19)

```diff
-       e: () => rD
+       d: () => Sp
```

#### 5. `bundles/bloxd.io/chunks/js/345.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/345.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/345.js#L21-L24)

```diff
-     var pD = wD(39776);
-     const sD = "bumpVertexDeclaration",
-       KD = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "clipPlaneFragmentDeclaration",
+       Ip = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 6. `bundles/bloxd.io/chunks/js/345.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/345.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/345.js#L30)

```diff
-   61389: (DD, zD, wD) => {
+   42825: (pp, ip, cp) => {
```

#### 7. `bundles/bloxd.io/chunks/js/345.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/345.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/345.js#L34-L37)

```diff
-     var pD = wD(39776);
-     const sD = "harmonicsFunctions",
-       KD = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "fogFragment",
+       Ip = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 8. `bundles/bloxd.io/chunks/js/345.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/345.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/345.js#L43)

```diff
-   61374: (DD, zD, wD) => {
+   42790: (pp, ip, cp) => {
```

#### 9. `bundles/bloxd.io/chunks/js/345.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/345.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/345.js#L45)

```diff
-       e: () => rD
+       b: () => Sp
```

#### 10. `bundles/bloxd.io/chunks/js/345.js` (Changed code · before: `L47-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/345.js#L47-L50) · [Before (L47-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/345.js#L47-L51)

```diff
-     var pD = wD(39776);
-     wD(42095), wD(42104);
-     const sD = "pbrUboDeclaration",
-       KD = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "fogFragmentDeclaration",
+       Ip = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 11. `bundles/bloxd.io/chunks/js/345.js` (Changed code · before: `L57` → after: `L56-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89) · [After (L56-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/345.js#L56-L161) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/345.js#L57)

```diff
-   61365: (DD, zD, wD) => {
+   42520: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "helperFunctions",
+       Ip = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42752: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Sp
+ ... (90 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/345.js` (Changed code · before: `L59` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/345.js#L163) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/345.js#L59)

```diff
-       pbrVertexShaderWGSL: () => oD
+       particlesPixelShaderWGSL: () => jp
```

#### 13. `bundles/bloxd.io/chunks/js/345.js` (Changed code · before: `L61-L102` → after: `L165-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89) · [After (L165-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/345.js#L165-L189) · [Before (L61-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/345.js#L61-L102)

```diff
-     var pD = wD(39776),
-       sD = wD(42095),
-       KD = wD(42104),
-       rD = wD(61374),
-       LD = wD(42112),
-       cD = wD(42141),
-       gD = wD(42114),
-       RD = wD(61380),
-       AD = wD(42122),
-       UD = wD(42127),
-       fD = wD(42132),
-       ID = wD(42139),
-       BD = wD(42143),
-       GD = wD(61389),
-       hD = wD(42152),
-       nD = wD(42159),
- ... (26 more removed lines; see GitHub link above)
+     var Op = cp(40062),
+       op = cp(42711),
+       Ip = cp(42714),
+       Sp = cp(42783),
+       xp = cp(42752),
+       Lp = cp(42598),
+       Yp = cp(42520),
+       Dp = cp(42759),
+       Ap = cp(42790),
+       Pp = cp(42794),
+       Wp = cp(42820),
+       yp = cp(42825),
+       Up = cp(42831);
+     const wp = "geometryRenderingFragment",
+       vp = "#ifdef PREPASS\n#if SCENE_MRT_COUNT>0\nlet geometryCoverage=select(0.0,1.0,geometryColor.a>0.4);var fragData: array<vec4f,SCENE_MRT_COUNT>;\n#ifdef PREPASS_COLOR\nfragData[PREPASS_COLOR_INDEX]=geometryColor;\n#endif\n#ifdef PREPASS_POSITION\nfragData[PREPASS_POSITION_ … [truncated]
+     Op.b.IncludesShadersStoreWGSL[wp] || (Op.b.IncludesShadersStoreWGSL[wp] = vp);
+ ... (9 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/346.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/346.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a)

#### 1. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/346.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/346.js#L4)

```diff
-   42252: (DD, zD, wD) => {
+   42794: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/346.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/346.js#L6)

```diff
-       b: () => rD
+       d: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/346.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/346.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "clipPlaneVertex",
-       KD = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "clipPlaneFragment",
+       Ip = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 4. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/346.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/346.js#L17)

```diff
-   42159: (DD, zD, wD) => {
+   42783: (pp, ip, cp) => {
```

#### 5. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/346.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/346.js#L19)

```diff
-       b: () => rD
+       d: () => Sp
```

#### 6. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/346.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/346.js#L21-L24)

```diff
-     var pD = wD(39776);
-     const sD = "clipPlaneVertexDeclaration",
-       KD = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "clipPlaneFragmentDeclaration",
+       Ip = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 7. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/346.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/346.js#L30)

```diff
-   42255: (DD, zD, wD) => {
+   42825: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/346.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/346.js#L34-L37)

```diff
-     var pD = wD(39776);
-     const sD = "fogVertex",
-       KD = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "fogFragment",
+       Ip = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 9. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/346.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/346.js#L43)

```diff
-   42168: (DD, zD, wD) => {
+   42790: (pp, ip, cp) => {
```

#### 10. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/346.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/346.js#L47-L50)

```diff
-     var pD = wD(39776);
-     const sD = "fogVertexDeclaration",
-       KD = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "fogFragmentDeclaration",
+       Ip = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 11. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/346.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/346.js#L56)

```diff
-   42190: (DD, zD, wD) => {
+   42520: (pp, ip, cp) => {
```

#### 12. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/346.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/346.js#L58)

```diff
-       c: () => rD
+       e: () => Sp
```

#### 13. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/346.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/346.js#L60-L63)

```diff
-     var pD = wD(39776);
-     const sD = "logDepthDeclaration",
-       KD = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "helperFunctions",
+       Ip = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 14. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/346.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/346.js#L69)

```diff
-   42269: (DD, zD, wD) => {
+   42598: (pp, ip, cp) => {
```

#### 15. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/346.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/346.js#L71)

```diff
-       b: () => rD
+       d: () => Sp
```

#### 16. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/346.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/346.js#L73-L76)

```diff
-     var pD = wD(39776);
-     const sD = "logDepthVertex",
-       KD = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "logDepthDeclaration",
+       Ip = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 17. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L82` → after: `L82-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L82-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/346.js#L82-L95) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/346.js#L82)

```diff
-   61063: (DD, zD, wD) => {
+   42820: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "logDepthFragment",
+       Ip = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   61436: (pp, ip, cp) => {
```

#### 18. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L84` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/346.js#L97) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/346.js#L84)

```diff
-       particlesVertexShaderWGSL: () => fD
+       skyPixelShaderWGSL: () => vp
```

#### 19. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L86-L97` → after: `L99-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L99-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/346.js#L99-L118) · [Before (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/346.js#L86-L97)

```diff
-     var pD = wD(39776),
-       sD = wD(42159),
-       KD = wD(42168),
-       rD = wD(42190),
-       LD = wD(42252),
-       cD = wD(42255),
-       gD = wD(42269);
-     const RD = "particlesVertexShader",
-       AD = "attribute position: vec3f;attribute color: vec4f;attribute angle: f32;attribute size: vec2f;\n#ifdef ANIMATESHEET\nattribute cellIndex: f32;\n#endif\n#ifndef BILLBOARD\nattribute direction: vec3f;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute direction: vec3f;\n#endif … [truncated]
-     pD.e.ShadersStoreWGSL[RD] || (pD.e.ShadersStoreWGSL[RD] = AD);
-     const UD = [sD.b, KD.b, rD.c, LD.b, cD.d, gD.b];
-     for (const ID of UD) pD.e.IncludesShadersStoreWGSL[ID.name] || (pD.e.IncludesShadersStoreWGSL[ID.name] = ID.shader);
+     var Op = cp(40062),
+       op = cp(42783),
+       Ip = cp(42598),
+       Sp = cp(42790),
+       xp = cp(42520),
+       Lp = cp(42794),
+       Yp = cp(42820),
+       Dp = cp(42825);
+     const Ap = "imageProcessingCompatibility",
+       Pp = "#ifdef IMAGEPROCESSINGPOSTPROCESS\nfragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb, vec3f(2.2)),fragmentOutputs.color.a);\n#endif\n";
+     Op.b.IncludesShadersStoreWGSL[Ap] || (Op.b.IncludesShadersStoreWGSL[Ap] = Pp);
+     const Wp = {
+         name: Ap,
+         shader: Pp
+       },
+       yp = "skyPixelShader",
+ ... (4 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/347.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/347.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373)

#### 1. `bundles/bloxd.io/chunks/js/347.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/347.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/347.js#L4)

```diff
-   42252: (DD, zD, wD) => {
+   42520: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/347.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/347.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/347.js#L6)

```diff
-       b: () => rD
+       e: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/347.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/347.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/347.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "clipPlaneVertex",
-       KD = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "helperFunctions",
+       Ip = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```

#### 4. `bundles/bloxd.io/chunks/js/347.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/347.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/347.js#L17-L19)

```diff
-   42159: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
+   61482: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       rgbdDecodePixelShaderWGSL: () => Lp
```

#### 5. `bundles/bloxd.io/chunks/js/347.js` (Changed code · before: `L21-L97` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/347.js#L21-L27) · [Before (L21-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/347.js#L21-L97)

```diff
-     var pD = wD(39776);
-     const sD = "clipPlaneVertexDeclaration",
-       KD = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
-     const rD = {
-       name: sD,
-       shader: KD
-     }
-   },
-   42255: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => rD
-     });
-     var pD = wD(39776);
-     const sD = "fogVertex",
-       KD = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
- ... (61 more removed lines; see GitHub link above)
+     var Op = cp(40062),
+       op = cp(42520);
+     const Ip = "rgbdDecodePixelShader",
+       Sp = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(t … [truncated]
+     Op.b.ShadersStoreWGSL[Ip] || (Op.b.ShadersStoreWGSL[Ip] = Sp);
+     const xp = [op.e];
+     for (const Yp of xp) Op.b.IncludesShadersStoreWGSL[Yp.name] || (Op.b.IncludesShadersStoreWGSL[Yp.name] = Yp.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/348.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/348.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25)

#### 1. `bundles/bloxd.io/chunks/js/348.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/348.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/348.js#L4)

```diff
-   42374: (DD, zD, wD) => {
+   42520: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/348.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/348.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/348.js#L6)

```diff
-       b: () => rD
+       e: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/348.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/348.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/348.js#L8-L11)

```diff
-     var pD = wD(39776);
-     const sD = "bumpFragment",
-       KD = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
-     pD.e.IncludesShadersStoreWGSL[sD] || (pD.e.IncludesShadersStoreWGSL[sD] = KD);
+     var Op = cp(40062);
+     const op = "helperFunctions",
+       Ip = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
```
