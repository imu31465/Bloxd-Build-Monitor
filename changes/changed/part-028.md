# Changed — Bundle Modifications Report (Part 028 / 067)

- **Updated at**: `2026-11-20T22:47 JST`
- **Part**: `28 / 67` (**341** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 027](part-027.md) · [Part 029 →](part-029.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/302.js` (7rj44.0704ff61 → qepqb8.0352199c · continued)

- **File**: `bundles/bloxd.io/chunks/js/302.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a)

#### 14. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L152-L170` → after: `L1979-L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR1979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L1979-L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/302.js#L1979-L2017) · [Before (L152-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/302.js#L152-L170)

```diff
-     Wz.FACE_LEFT = [new Fz.p(-1, -1, -1), new Fz.p(1, -1, -1), new Fz.p(-1, 1, -1), new Fz.p(1, 1, -1)], Wz.FACE_RIGHT = [new Fz.p(1, -1, 1), new Fz.p(-1, -1, 1), new Fz.p(1, 1, 1), new Fz.p(-1, 1, 1)], Wz.FACE_FRONT = [new Fz.p(1, -1, -1), new Fz.p(1, -1, 1), new Fz.p(1, 1, -1), … [truncated]
-     class Kz {
-       constructor() {
-         this.supportCascades = !1
-       }
-       loadCubeData() {
-         throw ".hdr not supported in Cube."
-       }
-       loadData(zz, tz, sz) {
-         const Fz = new Uint8Array(zz.buffer, zz.byteOffset, zz.byteLength),
-           Wz = oz(Fz),
-           Xz = vz(Fz, Wz),
-           Oz = Wz.width * Wz.height,
-           Uz = new Float32Array(4 * Oz);
-         for (let oz = 0; oz < Oz; oz += 1) Uz[4 * oz] = Xz[3 * oz], Uz[4 * oz + 1] = Xz[3 * oz + 1], Uz[4 * oz + 2] = Xz[3 * oz + 2], Uz[4 * oz + 3] = 1;
-         sz(Wz.width, Wz.height, tz.generateMipMaps, !1, (() => {
- ... (3 more removed lines; see GitHub link above)
+     ev.FragmentUrl = "pass";
+     class gv extends hv.g {
+       _gatherImports(vv, zv) {
+         vv ? (this._webGPUReady = !0, zv.push(Promise.all([Pv.e(366).then((() => Pv(60878)))]))) : zv.push(Promise.all([Pv.e(367).then((() => Pv(60885)))])), super._gatherImports(vv, zv)
+       }
+       constructor(vv) {
+         super({
+           ...arguments.length > 2 ? arguments[2] : void 0,
+           name: vv,
+           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Sv.e.LastCreatedEngine,
+           useShaderStore: !0,
+           useAsPostProcess: !0,
+           fragmentShader: gv.FragmentUrl,
+           defines: "#define POSITIVEX"
+         }), this._face = 0
+       }
+ ... (23 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/303.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/303.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a)

#### 1. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/303.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/303.js#L4)

```diff
-   40957: (zz, tz, sz) => {
+   41157: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/303.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/303.js#L6)

```diff
-       _KTXTextureLoader: () => wz
+       _HDRTextureLoader: () => lv
```

#### 3. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/303.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/303.js#L8)

```diff
-     var Fz = sz(38097);
+     var hv = Pv(36594);
```

#### 4. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L10-L23` → after: `L10-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L10-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/303.js#L10-L28) · [Before (L10-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/303.js#L10-L23)

```diff
-       constructor(zz, tz) {
-         if (this.data = zz, this.isInvalid = !1, !Wz.IsValid(zz)) return this.isInvalid = !0, void Fz.e.Error("texture missing KTX identifier");
-         const sz = Uint32Array.BYTES_PER_ELEMENT,
-           Xz = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * sz),
-           Oz = 67305985 === Xz.getUint32(0, !0);
-         return this.glType = Xz.getUint32(1 * sz, Oz), this.glTypeSize = Xz.getUint32(2 * sz, Oz), this.glFormat = Xz.getUint32(3 * sz, Oz), this.glInternalFormat = Xz.getUint32(4 * sz, Oz), this.glBaseInternalFormat = Xz.getUint32(5 * sz, Oz), this.pixelWidth = Xz.getUint32(6 *  … [truncated]
-       }
-       uploadLevels(zz, tz) {
-         switch (this.loadType) {
-           case Wz.COMPRESSED_2D:
-             this._upload2DCompressedLevels(zz, tz);
-           case Wz.TEX_2D:
-           case Wz.COMPRESSED_3D:
-           case Wz.TEX_3D:
+       static ConvertPanoramaToCubemap(vv, zv, Pv, hv) {
+         let Sv, ev = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           gv = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+         if (!vv) throw "ConvertPanoramaToCubemap: input cannot be null";
+         if (vv.length != zv * Pv * 3) {
+           if (vv.length != zv * Pv * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
+           Sv = 4
+         } else Sv = 3;
+         return {
+           front: this.CreateCubemapTexture(hv, this.FACE_FRONT, vv, zv, Pv, ev, gv, Sv),
+           back: this.CreateCubemapTexture(hv, this.FACE_BACK, vv, zv, Pv, ev, gv, Sv),
+           left: this.CreateCubemapTexture(hv, this.FACE_LEFT, vv, zv, Pv, ev, gv, Sv),
+           right: this.CreateCubemapTexture(hv, this.FACE_RIGHT, vv, zv, Pv, ev, gv, Sv),
+           up: this.CreateCubemapTexture(hv, this.FACE_UP, vv, zv, Pv, ev, gv, Sv),
+           down: this.CreateCubemapTexture(hv, this.FACE_DOWN, vv, zv, Pv, ev, gv, Sv),
+           size: hv,
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L26-L36` → after: `L31-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L31-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/303.js#L31-L52) · [Before (L26-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/303.js#L26-L36)

```diff
-       _upload2DCompressedLevels(zz, tz) {
-         let sz = Wz.HEADER_LEN + this.bytesOfKeyValueData,
-           Fz = this.pixelWidth,
-           Xz = this.pixelHeight;
-         const Oz = tz ? this.numberOfMipmapLevels : 1;
-         for (let Wz = 0; Wz < Oz; Wz++) {
-           const tz = new Int32Array(this.data.buffer, this.data.byteOffset + sz, 1)[0];
-           sz += 4;
-           for (let Oz = 0; Oz < this.numberOfFaces; Oz++) {
-             const oz = new Uint8Array(this.data.buffer, this.data.byteOffset + sz, tz);
-             zz.FD()._uploadCompressedDataToTextureDirectly(zz, zz.format, Fz, Xz, oz, Oz, Wz), sz += tz, sz += 3 - (tz + 3) % 4
+       static CreateCubemapTexture(vv, zv, Pv, hv, Sv, ev, gv, pv) {
+         const dv = new ArrayBuffer(vv * vv * 4 * 3),
+           Nv = new Float32Array(dv),
+           lv = ev ? Math.max(1, Math.round(hv / 4 / vv)) : 1,
+           Tv = 1 / lv,
+           Wv = Tv * Tv,
+           wv = zv[1].subtract(zv[0]).scale(Tv / vv),
+           av = zv[3].subtract(zv[2]).scale(Tv / vv),
+           sv = 1 / vv;
+         let Cv = 0;
+         for (let iv = 0; iv < vv; iv++)
+           for (let ev = 0; ev < lv; ev++) {
+             let ev = zv[0],
+               dv = zv[2];
+             for (let zv = 0; zv < vv; zv++)
+               for (let Tv = 0; Tv < lv; Tv++) {
+ ... (6 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L38` → after: `L54-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L54-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/303.js#L54-L72) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/303.js#L38)

```diff
-           Fz = Math.max(1, .5 * Fz), Xz = Math.max(1, .5 * Xz)
+         return Nv
+       }
+       static CalcProjectionSpherical(vv, zv, Pv, hv, Sv, ev) {
+         let gv = Math.atan2(vv.z, vv.x);
+         const pv = Math.acos(vv.y);
+         for (; gv < -Math.PI;) gv += 2 * Math.PI;
+         for (; gv > Math.PI;) gv -= 2 * Math.PI;
+         let dv = gv / Math.PI;
+         const Nv = pv / Math.PI;
+         dv = .5 * dv + .5;
+         let lv = Math.round(dv * Pv);
+         lv < 0 ? lv = 0 : lv >= Pv && (lv = Pv - 1);
+         let Tv = Math.round(Nv * hv);
+         Tv < 0 ? Tv = 0 : Tv >= hv && (Tv = hv - 1);
+         const Wv = ev ? hv - Tv - 1 : Tv;
+         return {
+ ... (3 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L49-L51` → after: `L76-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L76-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/303.js#L76-L81) · [Before (L49-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/303.js#L49-L51)

```diff
-     Wz.HEADER_LEN = 64, Wz.COMPRESSED_2D = 0, Wz.COMPRESSED_3D = 1, Wz.TEX_2D = 2, Wz.TEX_3D = 3;
-     var Xz, Oz, oz, vz = sz(40962),
-       Uz = sz(39264);
+ 
+     function ev(vv, zv, Pv, hv, Sv, ev) {
+       Sv > 0 ? (Sv = function(vv, zv) {
+         return zv > 1023 ? vv * Math.pow(2, 1023) * Math.pow(2, zv - 1023) : zv < -1074 ? vv * Math.pow(2, -1074) * Math.pow(2, zv + 1074) : vv * Math.pow(2, zv)
+       }(1, Sv - 136), vv[ev + 0] = zv * Sv, vv[ev + 1] = Pv * Sv, vv[ev + 2] = hv * Sv) : (vv[ev + 0] = 0, vv[ev + 1] = 0, vv[ev + 2] = 0)
+     }
```

#### 8. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L54-L55` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/303.js#L84-L86) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/303.js#L54-L55)

```diff
-       const sz = tz?.jsDecoderModule || KTX2DECODER;
-       zz && (zz.wasmBaseUrl && (sz.Transcoder.WasmBaseUrl = zz.wasmBaseUrl), zz.wasmUASTCToASTC && (sz.LiteTranscoder_UASTC_ASTC.WasmModuleURL = zz.wasmUASTCToASTC), zz.wasmUASTCToBC7 && (sz.LiteTranscoder_UASTC_BC7.WasmModuleURL = zz.wasmUASTCToBC7), zz.wasmUASTCToRGBA_UNORM &&  … [truncated]
+       let Pv, hv = "";
+       for (let Sv = zv; Sv < vv.length - zv && (Pv = String.fromCharCode(vv[Sv]), "\n" != Pv); Sv++) hv += Pv;
+       return hv
```

#### 9. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L59-L241` → after: `L90-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L90-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/303.js#L90-L108) · [Before (L59-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/303.js#L59-L241)

```diff
-       let tz;
-       "undefined" === typeof zz && "undefined" !== typeof KTX2DECODER && (zz = KTX2DECODER), onmessage = sz => {
-         if (sz.data) switch (sz.data.action) {
-           case "init": {
-             const Fz = sz.data.urls;
-             Fz && (Fz.jsDecoderModule && "undefined" === typeof zz && (importScripts(Fz.jsDecoderModule), zz = KTX2DECODER), Kz(Fz)), sz.data.wasmBinaries && Kz(void 0, {
-               ...sz.data.wasmBinaries,
-               jsDecoderModule: zz
-             }), tz = new zz.KTX2Decoder, postMessage({
-               action: "init"
-             });
-             break
-           }
-           case "setDefaultDecoderOptions":
-             zz.KTX2Decoder.DefaultDecoderOptions = sz.data.options;
-             break;
- ... (167 more removed lines; see GitHub link above)
+       let zv = gv(vv, 0);
+       if ("#" != zv[0] || "?" != zv[1]) throw "Bad HDR Format.";
+       let Pv = !1,
+         hv = !1,
+         Sv = 0;
+       do {
+         Sv += zv.length + 1, zv = gv(vv, Sv), "FORMAT=32-bit_rle_rgbe" == zv ? hv = !0 : 0 == zv.length && (Pv = !0)
+       } while (!Pv);
+       if (!hv) throw "HDR Bad header format, unsupported FORMAT";
+       Sv += zv.length + 1, zv = gv(vv, Sv);
+       const ev = /^-Y (.*) \+X (.*)$/g.exec(zv);
+       if (!ev || ev.length < 3) throw "HDR Bad header format, no size";
+       const pv = parseInt(ev[2]),
+         dv = parseInt(ev[1]);
+       if (pv < 8 || pv > 32767) throw "HDR Bad header format, unsupported size";
+       return Sv += zv.length + 1, {
+ ... (3 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L245-L288` → after: `L112-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L112-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/303.js#L112-L148) · [Before (L245-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/303.js#L245-L288)

```diff
-     function bz(zz) {
-       switch (zz) {
-         case 35916:
-           return 33776;
-         case 35918:
-           return 33778;
-         case 35919:
-           return 33779;
-         case 37493:
-           return 37492;
-         case 37497:
-           return 37496;
-         case 37495:
-           return 37494;
-         case 37840:
-           return 37808;
- ... (28 more removed lines; see GitHub link above)
+     function dv(vv, zv) {
+       return function(vv, zv) {
+         let Pv = zv.height;
+         const hv = zv.width;
+         let Sv, gv, pv, dv, lv, Tv, Wv, wv, av = zv.dataPosition;
+         const sv = new ArrayBuffer(4 * hv),
+           Cv = new Uint8Array(sv),
+           iv = new ArrayBuffer(zv.width * zv.height * 4 * 3),
+           cv = new Float32Array(iv);
+         for (; Pv > 0;) {
+           if (Sv = vv[av++], gv = vv[av++], pv = vv[av++], dv = vv[av++], 2 != Sv || 2 != gv || 128 & pv || zv.width < 8 || zv.width > 32767) return Nv(vv, zv);
+           if ((pv << 8 | dv) != hv) throw "HDR Bad header format, wrong scan line width";
+           for (Tv = 0, wv = 0; wv < 4; wv++)
+             for (Wv = (wv + 1) * hv; Tv < Wv;)
+               if (Sv = vv[av++], gv = vv[av++], Sv > 128) {
+                 if (lv = Sv - 128, 0 == lv || lv > Wv - Tv) throw "HDR Bad Format, bad scanline data (run)";
+ ... (21 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L290` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/303.js#L150) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/303.js#L290)

```diff
-       return null
+       return Wv
```

#### 12. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L292-L361` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/303.js#L152) · [Before (L292-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/303.js#L292-L361)

```diff
-     Nz.URLConfig = {
-       jsDecoderModule: "https://cdn.babylonjs.com/babylon.ktx2Decoder.js",
-       wasmUASTCToASTC: null,
-       wasmUASTCToBC7: null,
-       wasmUASTCToRGBA_UNORM: null,
-       wasmUASTCToRGBA_SRGB: null,
-       wasmUASTCToR8_UNORM: null,
-       wasmUASTCToRG8_UNORM: null,
-       jsMSCTranscoder: null,
-       wasmMSCTranscoder: null,
-       wasmZSTDDecoder: null
-     }, Nz.DefaultNumWorkers = Nz.GetDefaultNumWorkers(), Nz.DefaultDecoderOptions = new class {
-       constructor() {
-         this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
-       }
-       get isDirty() {
- ... (54 more removed lines; see GitHub link above)
+     Sv.FACE_LEFT = [new hv.l(-1, -1, -1), new hv.l(1, -1, -1), new hv.l(-1, 1, -1), new hv.l(1, 1, -1)], Sv.FACE_RIGHT = [new hv.l(1, -1, 1), new hv.l(-1, -1, 1), new hv.l(1, 1, 1), new hv.l(-1, 1, 1)], Sv.FACE_FRONT = [new hv.l(1, -1, -1), new hv.l(1, -1, 1), new hv.l(1, 1, -1), … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L366-L374` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/303.js#L157-L158) · [Before (L366-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/303.js#L366-L374)

```diff
-       loadCubeData(zz, tz, sz, Fz) {
-         if (Array.isArray(zz)) return;
-         tz._invertVScale = !tz.invertY;
-         const Xz = tz.FD(),
-           Oz = new Wz(zz, 6),
-           oz = bz(Oz.glInternalFormat);
-         null !== oz ? (tz.format = oz, tz._useSRGBBuffer = Xz._getUseSRGBBuffer(!0, !tz.generateMipMaps), tz._gammaSpace = !0) : tz.format = Oz.glInternalFormat;
-         const vz = Oz.numberOfMipmapLevels > 1 && tz.generateMipMaps;
-         Xz._unpackFlipY(!0), Oz.uploadLevels(tz, tz.generateMipMaps), tz.width = Oz.pixelWidth, tz.height = Oz.pixelHeight, Xz._setCubeMapTextureParams(tz, vz, Oz.numberOfMipmapLevels - 1), tz.isReady = !0, tz.onLoadedObservable.notifyObservers(tz), tz.onLoadedObservable.clear(), … [truncated]
+       loadCubeData() {
+         throw ".hdr not supported in Cube."
```

#### 14. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L376-L424` → after: `L160-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L160-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/303.js#L160-L169) · [Before (L376-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/303.js#L376-L424)

```diff
-       loadData(zz, tz, sz, Xz) {
-         if (Wz.IsValid(zz)) {
-           tz._invertVScale = !tz.invertY;
-           const Fz = new Wz(zz, 1),
-             Xz = bz(Fz.glInternalFormat);
-           null !== Xz ? (tz.format = Xz, tz._useSRGBBuffer = tz.FD()._getUseSRGBBuffer(!0, !tz.generateMipMaps), tz._gammaSpace = !0) : tz.format = Fz.glInternalFormat, sz(Fz.pixelWidth, Fz.pixelHeight, tz.generateMipMaps, !0, (() => {
-             Fz.uploadLevels(tz, tz.generateMipMaps)
-           }), Fz.isInvalid)
-         } else if (Nz.IsValid(zz)) {
-           new Nz(tz.FD())._uploadAsync(zz, tz, Xz).then((() => {
-             sz(tz.width, tz.height, tz.generateMipMaps, !0, (() => {}), !1)
-           }), (zz => {
-             Fz.e.Warn(`Failed to load KTX2 texture data: ${zz.message}`), sz(0, 0, !1, !1, (() => {}), !0)
-           }))
-         } else Fz.e.Error("texture missing KTX identifier"), sz(0, 0, !1, !1, (() => {}), !0)
-       }
- ... (33 more removed lines; see GitHub link above)
+       loadData(vv, zv, Pv) {
+         const hv = new Uint8Array(vv.buffer, vv.byteOffset, vv.byteLength),
+           Sv = pv(hv),
+           ev = dv(hv, Sv),
+           gv = Sv.width * Sv.height,
+           Nv = new Float32Array(4 * gv);
+         for (let pv = 0; pv < gv; pv += 1) Nv[4 * pv] = ev[3 * pv], Nv[4 * pv + 1] = ev[3 * pv + 1], Nv[4 * pv + 2] = ev[3 * pv + 2], Nv[4 * pv + 3] = 1;
+         Pv(Sv.width, Sv.height, zv.generateMipMaps, !1, (() => {
+           const vv = zv.ma();
+           zv.type = 1, zv.format = 5, zv._gammaSpace = !1, vv._uploadDataToTextureDirectly(zv, Nv)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/304.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/304.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc)

#### 1. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/304.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/304.js#L4)

```diff
-   40969: (zz, tz, sz) => {
+   41166: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/304.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/304.js#L6)

```diff
-       _TGATextureLoader: () => oz
+       _KTXTextureLoader: () => av
```

#### 3. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L8` → after: `L8-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L8-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/304.js#L8-L56) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/304.js#L8)

```diff
-     var Fz = sz(38097);
+     var hv = Pv(38209);
+     class Sv {
+       constructor(vv, zv) {
+         if (this.data = vv, this.isInvalid = !1, !Sv.IsValid(vv)) return this.isInvalid = !0, void hv.d.Error("texture missing KTX identifier");
+         const Pv = Uint32Array.BYTES_PER_ELEMENT,
+           ev = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * Pv),
+           gv = 67305985 === ev.getUint32(0, !0);
+         return this.glType = ev.getUint32(1 * Pv, gv), this.glTypeSize = ev.getUint32(2 * Pv, gv), this.glFormat = ev.getUint32(3 * Pv, gv), this.glInternalFormat = ev.getUint32(4 * Pv, gv), this.glBaseInternalFormat = ev.getUint32(5 * Pv, gv), this.pixelWidth = ev.getUint32(6 *  … [truncated]
+       }
+       uploadLevels(vv, zv) {
+         switch (this.loadType) {
+           case Sv.COMPRESSED_2D:
+             this._upload2DCompressedLevels(vv, zv);
+           case Sv.TEX_2D:
+           case Sv.COMPRESSED_3D:
+           case Sv.TEX_3D:
+ ... (33 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L11-L23` → after: `L59-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L59-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/304.js#L59-L241) · [Before (L11-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/304.js#L11-L23)

```diff
-       let tz = 0;
-       return {
-         id_length: zz[tz++],
-         colormap_type: zz[tz++],
-         image_type: zz[tz++],
-         colormap_index: zz[tz++] | zz[tz++] << 8,
-         colormap_length: zz[tz++] | zz[tz++] << 8,
-         colormap_size: zz[tz++],
-         origin: [zz[tz++] | zz[tz++] << 8, zz[tz++] | zz[tz++] << 8],
-         width: zz[tz++] | zz[tz++] << 8,
-         height: zz[tz++] | zz[tz++] << 8,
-         pixel_size: zz[tz++],
-         flags: zz[17]
+       let zv;
+       "undefined" === typeof vv && "undefined" !== typeof KTX2DECODER && (vv = KTX2DECODER), onmessage = Pv => {
+         if (Pv.data) switch (Pv.data.action) {
+           case "init": {
+             const hv = Pv.data.urls;
+             hv && (hv.jsDecoderModule && "undefined" === typeof vv && (importScripts(hv.jsDecoderModule), vv = KTX2DECODER), lv(hv)), Pv.data.wasmBinaries && lv(void 0, {
+               ...Pv.data.wasmBinaries,
+               jsDecoderModule: vv
+             }), zv = new vv.KTX2Decoder, postMessage({
+               action: "init"
+             });
+             break
+           }
+           case "setDefaultDecoderOptions":
+             vv.KTX2Decoder.DefaultDecoderOptions = Pv.data.options;
+             break;
+ ... (167 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L27-L66` → after: `L245-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L245-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/304.js#L245-L357) · [Before (L27-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/304.js#L27-L66)

```diff
-     function Xz(zz, tz) {
-       if (tz.length < 19) return void Fz.e.Error("Unable to load TGA file - Not enough data to contain header");
-       let sz = 18;
-       const Xz = Wz(tz);
-       if (Xz.id_length + sz > tz.length) return void Fz.e.Error("Unable to load TGA file - Not enough data");
-       sz += Xz.id_length;
-       let oz, vz = !1,
-         Uz = !1,
-         Kz = !1;
-       switch (Xz.image_type) {
-         case 9:
-           vz = !0;
-         case 1:
-           Uz = !0;
-           break;
-         case 10:
- ... (24 more removed lines; see GitHub link above)
+     function wv(vv) {
+       switch (vv) {
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
+           return 37808;
+ ... (97 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L68-L155` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/304.js#L359) · [Before (L68-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/304.js#L68-L155)

```diff
-       } else oz = tz.subarray(sz, sz + (Uz ? Xz.width * Xz.height : Nz));
-       switch ((48 & Xz.flags) >> 4) {
-         default:
-         case 2:
-           wz = 0, gz = 1, Pz = Xz.width, Dz = 0, Hz = 1, Bz = Xz.height;
-           break;
-         case 0:
-           wz = 0, gz = 1, Pz = Xz.width, Dz = Xz.height - 1, Hz = -1, Bz = -1;
-           break;
-         case 3:
-           wz = Xz.width - 1, gz = -1, Pz = -1, Dz = 0, Hz = 1, Bz = Xz.height;
-           break;
-         case 1:
-           wz = Xz.width - 1, gz = -1, Pz = -1, Dz = Xz.height - 1, Hz = -1, Bz = -1
-       }
-       const rz = "_getImageData" + (Kz ? "Grey" : "") + Xz.pixel_size + "bits",
- ... (72 more removed lines; see GitHub link above)
+         }), this._ktx2DecoderOptions = vv, vv
```

#### 7. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L162-L169` → after: `L366-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L366-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/304.js#L366-L424) · [Before (L162-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/304.js#L162-L169)

```diff
-       loadCubeData() {
-         throw ".env not supported in Cube."
-       }
-       loadData(zz, tz, sz) {
-         const Fz = new Uint8Array(zz.buffer, zz.byteOffset, zz.byteLength),
-           Oz = Wz(Fz);
-         sz(Oz.width, Oz.height, tz.generateMipMaps, !1, (() => {
-           Xz(tz, Fz)
+       loadCubeData(vv, zv, Pv, hv) {
+         if (Array.isArray(vv)) return;
+         zv._invertVScale = !zv.invertY;
+         const ev = zv.ma(),
+           gv = new Sv(vv, 6),
+           pv = wv(gv.glInternalFormat);
+         null !== pv ? (zv.format = pv, zv._useSRGBBuffer = ev._getUseSRGBBuffer(!0, !zv.generateMipMaps), zv._gammaSpace = !0) : zv.format = gv.glInternalFormat;
+         const dv = gv.numberOfMipmapLevels > 1 && zv.generateMipMaps;
+         ev._unpackFlipY(!0), gv.uploadLevels(zv, zv.generateMipMaps), zv.width = gv.pixelWidth, zv.height = gv.pixelHeight, ev._setCubeMapTextureParams(zv, dv, gv.numberOfMipmapLevels - 1), zv.isReady = !0, zv.onLoadedObservable.notifyObservers(zv), zv.onLoadedObservable.clear(), … [truncated]
+       }
+       loadData(vv, zv, Pv, ev) {
+         if (Sv.IsValid(vv)) {
+           zv._invertVScale = !zv.invertY;
+           const hv = new Sv(vv, 1),
+             ev = wv(hv.glInternalFormat);
+           null !== ev ? (zv.format = ev, zv._useSRGBBuffer = zv.ma()._getUseSRGBBuffer(!0, !zv.generateMipMaps), zv._gammaSpace = !0) : zv.format = hv.glInternalFormat, Pv(hv.pixelWidth, hv.pixelHeight, zv.generateMipMaps, !0, (() => {
+ ... (43 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/305.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/305.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e)

#### 1. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/305.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/305.js#L4)

```diff
-   40972: (zz, tz, sz) => {
+   41176: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/305.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/305.js#L6-L7)

```diff
-       ReadExrDataAsync: () => ut,
-       _ExrTextureLoader: () => Kt
+       _TGATextureLoader: () => pv
```

#### 3. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L9-L165` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/305.js#L8) · [Before (L9-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/305.js#L9-L165)

```diff
-     var Fz = sz(38097),
-       Wz = sz(36507),
-       Xz = sz(39234);
-     const Oz = 4,
-       oz = 4,
-       vz = 1,
-       Uz = 2,
-       Kz = 8,
-       uz = 65536,
-       Nz = uz >> 3,
-       bz = 14,
-       wz = 65537,
-       Dz = 1 << bz,
-       gz = Dz - 1,
-       Hz = 59,
-       Bz = 63,
- ... (141 more removed lines; see GitHub link above)
+     var hv = Pv(38209);
```

#### 4. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L168-L170` → after: `L11-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L11-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/305.js#L11-L23) · [Before (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/305.js#L168-L170)

```diff
-       for (let tz = 1; tz < zz.length; tz++) {
-         const sz = zz[tz - 1] + zz[tz] - 128;
-         zz[tz] = sz
+       let zv = 0;
+       return {
+         id_length: vv[zv++],
+         colormap_type: vv[zv++],
+         image_type: vv[zv++],
+         colormap_index: vv[zv++] | vv[zv++] << 8,
+         colormap_length: vv[zv++] | vv[zv++] << 8,
+         colormap_size: vv[zv++],
+         origin: [vv[zv++] | vv[zv++] << 8, vv[zv++] | vv[zv++] << 8],
+         width: vv[zv++] | vv[zv++] << 8,
+         height: vv[zv++] | vv[zv++] << 8,
+         pixel_size: vv[zv++],
+         flags: vv[17]
```

#### 5. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L175-L207` → after: `L28-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L28-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/305.js#L28-L49) · [Before (L175-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/305.js#L175-L207)

```diff
-       let sz = 0,
-         Fz = Math.floor((zz.length + 1) / 2),
-         Wz = 0;
-       const Xz = zz.length - 1;
-       for (; !(Wz > Xz) && (tz[Wz++] = zz[sz++], !(Wz > Xz));) tz[Wz++] = zz[Fz++]
-     }! function(zz) {
-       zz[zz.NO_COMPRESSION = 0] = "NO_COMPRESSION", zz[zz.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", zz[zz.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", zz[zz.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", zz[zz.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", zz[zz.PXR24_COMPRESSION = 5] = "PX … [truncated]
-     }(rz || (rz = {})),
-     function(zz) {
-       zz[zz.INCREASING_Y = 0] = "INCREASING_Y", zz[zz.DECREASING_Y = 1] = "DECREASING_Y"
-     }(Yz || (Yz = {}));
-     const Mz = 20000630;
- 
-     function dz(zz, tz) {
-       if (zz.getUint32(0, !0) != Mz) throw new Error("Incorrect OpenEXR format");
-       const sz = zz.getUint8(4),
- ... (17 more removed lines; see GitHub link above)
+       if (zv.length < 19) return void hv.d.Error("Unable to load TGA file - Not enough data to contain header");
+       let Pv = 18;
+       const ev = Sv(zv);
+       if (ev.id_length + Pv > zv.length) return void hv.d.Error("Unable to load TGA file - Not enough data");
+       Pv += ev.id_length;
+       let pv, dv = !1,
+         Nv = !1,
+         lv = !1;
+       switch (ev.image_type) {
+         case 9:
+           dv = !0;
+         case 1:
+           Nv = !0;
+           break;
+         case 10:
+           dv = !0;
+ ... (6 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L209-L213` → after: `L51-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L51-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/305.js#L51-L81) · [Before (L209-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/305.js#L209-L213)

```diff
-       if (0 != (-5 & Wz)) throw new Error("Unsupported file format");
-       return {
-         version: sz,
-         spec: Xz,
-         ...Oz
+       const Tv = ev.pixel_size >> 3,
+         Wv = ev.width * ev.height * Tv;
+       let wv, av, sv, Cv, iv, cv, Gv;
+       if (Nv && (wv = zv.subarray(Pv, Pv += ev.colormap_length * (ev.colormap_size >> 3))), dv) {
+         let vv, hv, Sv;
+         pv = new Uint8Array(Wv);
+         let ev = 0;
+         const gv = new Uint8Array(Tv);
+         for (; Pv < Wv && ev < Wv;)
+           if (vv = zv[Pv++], hv = 1 + (127 & vv), 128 & vv) {
+             for (Sv = 0; Sv < Tv; ++Sv) gv[Sv] = zv[Pv++];
+             for (Sv = 0; Sv < hv; ++Sv) pv.set(gv, ev + Sv * Tv);
+             ev += Tv * hv
+           } else {
+             for (hv *= Tv, Sv = 0; Sv < hv; ++Sv) pv[ev + Sv] = zv[Pv++];
+             ev += hv
+ ... (15 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L216-L224` → after: `L87-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L87-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/305.js#L87-L155) · [Before (L216-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/305.js#L216-L224)

```diff
-     const hz = 32768,
-       Qz = 65535;
- 
-     function kz(zz, tz, sz, Fz, Wz) {
-       for (; sz < zz;) tz = tz << 8 | ez(Fz, Wz), sz += 8;
-       return {
-         l: tz >> (sz -= zz) & (1 << zz) - 1,
-         c: tz,
-         lc: sz
+     const gv = {
+       GetTGAHeader: Sv,
+       UploadContent: ev,
+       _getImageData8bits: function(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
+         const Nv = Pv,
+           lv = zv,
+           Tv = vv.width,
+           Wv = vv.height;
+         let wv, av, sv, Cv = 0;
+         const iv = new Uint8Array(Tv * Wv * 4);
+         for (sv = hv; sv !== ev; sv += Sv)
+           for (av = gv; av !== dv; av += pv, Cv++) wv = Nv[Cv], iv[4 * (av + Tv * sv) + 3] = 255, iv[4 * (av + Tv * sv) + 2] = lv[3 * wv + 0], iv[4 * (av + Tv * sv) + 1] = lv[3 * wv + 1], iv[4 * (av + Tv * sv) + 0] = lv[3 * wv + 2];
+         return iv
+       },
+       _getImageData16bits: function(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
+         const Nv = Pv,
+ ... (53 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L226-L720` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/305.js#L157) · [Before (L226-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/305.js#L226-L720)

```diff
-     }
- 
-     function iz(zz, tz, sz, Fz) {
-       return {
-         c: zz = zz << 8 | ez(sz, Fz),
-         lc: tz += 8
-       }
-     }
- 
-     function Lz(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
-       if (zz == tz) {
-         if (Fz < 8) {
-           const zz = iz(sz, Fz, Wz, Xz);
-           sz = zz.c, Fz = zz.lc
-         }
-         let zz = sz >> (Fz -= 8);
- ... (479 more removed lines; see GitHub link above)
+     };
```

#### 9. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L725-L726` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/305.js#L162-L163) · [Before (L725-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/305.js#L725-L726)

```diff
-       loadCubeData(zz, tz, sz, Fz, Wz) {
-         throw ".exr not supported in Cube."
+       loadCubeData() {
+         throw ".env not supported in Cube."
```

#### 10. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L729-L743` → after: `L166-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L166-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/305.js#L166-L169) · [Before (L729-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/305.js#L729-L743)

```diff
-         const Wz = new DataView(zz.buffer),
-           Xz = {
-             value: 0
-           },
-           Oz = dz(Wz, Xz);
-         vt(Oz, Wz, Xz, ot.DefaultOutputType).then((zz => {
-           Ut(zz, Oz, Wz, Xz);
-           const Fz = Oz.dataWindow.xMax - Oz.dataWindow.xMin + 1,
-             oz = Oz.dataWindow.yMax - Oz.dataWindow.yMin + 1;
-           sz(Fz, oz, tz.generateMipMaps, !1, (() => {
-             const sz = tz.FD();
-             tz.format = Oz.format, tz.type = zz.textureType, tz.invertY = !1, tz._gammaSpace = !Oz.linearSpace, zz.byteArray && sz._uploadDataToTextureDirectly(tz, zz.byteArray, 0, 0, void 0, !0)
-           }))
-         })).catch((zz => {
-           Fz.e.Error("Failed to load EXR texture: ", zz)
+         const hv = new Uint8Array(vv.buffer, vv.byteOffset, vv.byteLength),
+           gv = Sv(hv);
+         Pv(gv.width, gv.height, zv.generateMipMaps, !1, (() => {
+           ev(zv, hv)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/306.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/306.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2)

#### 1. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/306.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/306.js#L4-L6)

```diff
-   41114: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Oz
+   41184: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       ReadExrDataAsync: () => Tz,
+       _ExrTextureLoader: () => lz
```

#### 2. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L8-L104` → after: `L9-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L9-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/306.js#L9-L771) · [Before (L8-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/306.js#L8-L104)

```diff
-     var Fz = sz(39041);
-     const Wz = "bumpVertex",
-       Xz = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   41030: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "bumpVertexDeclaration",
-       Xz = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
- ... (81 more removed lines; see GitHub link above)
+     var hv = Pv(38209),
+       Sv = Pv(36620),
+       ev = Pv(39368);
+     const gv = 4,
+       pv = 4,
+       dv = 1,
+       Nv = 2,
+       lv = 8,
+       Tv = 65536,
+       Wv = Tv >> 3,
+       wv = 14,
+       av = 65537,
+       sv = 1 << wv,
+       Cv = sv - 1,
+       iv = 59,
+       cv = 63,
+ ... (747 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/307.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/307.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a)

#### 1. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/307.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/307.js#L4)

```diff
-   41097: (zz, tz, sz) => {
+   41346: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/307.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/307.js#L6)

```diff
-       d: () => Oz
+       c: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/307.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/307.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "bakedVertexAnimation",
-       Xz = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bumpVertex",
+       ev = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/307.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/307.js#L17)

```diff
-   41006: (zz, tz, sz) => {
+   41264: (vv, zv, Pv) => {
```

#### 5. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/307.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/307.js#L21-L24)

```diff
-     var Fz = sz(39041);
-     const Wz = "bakedVertexAnimationDeclaration",
-       Xz = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bumpVertexDeclaration",
+       ev = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 6. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/307.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/307.js#L30)

```diff
-   41001: (zz, tz, sz) => {
+   41213: (vv, zv, Pv) => {
```

#### 7. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L34-L37` → after: `L34-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/307.js#L34-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/307.js#L34-L37)

```diff
-     var Fz = sz(39041);
-     const Wz = "bonesDeclaration",
-       Xz = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     Pv(41199), Pv(41207);
+     const Sv = "defaultUboDeclaration",
+       ev = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 8. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L43-L45` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/307.js#L44-L46) · [Before (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/307.js#L43-L45)

```diff
-   41094: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Oz
+   41193: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       defaultVertexShader: () => bv
```

#### 9. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L47-L50` → after: `L48-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L48-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/307.js#L48-L52) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/307.js#L47-L50)

```diff
-     var Fz = sz(39041);
-     const Wz = "bonesVertex",
-       Xz = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162),
+       Sv = Pv(41197);
+     const ev = "defaultVertexDeclaration",
+       gv = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nuniform mat4 view;\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;\n#endif\n#ifdef O … [truncated]
+     hv.d.IncludesShadersStore[ev] || (hv.d.IncludesShadersStore[ev] = gv);
```

#### 10. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L54-L63` → after: `L56-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L56-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/307.js#L56-L91) · [Before (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/307.js#L54-L63)

```diff
-     }
-   },
-   41122: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "clipPlaneVertex",
-       Xz = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     };
+     var dv = Pv(41199),
+       Nv = Pv(41207),
+       lv = Pv(41213),
+       Tv = Pv(41218),
+       Wv = Pv(41226),
+       wv = Pv(41231),
+       av = Pv(41236),
+       sv = Pv(41244),
+       Cv = Pv(41252),
+       iv = Pv(41258),
+       cv = Pv(41262),
+       Gv = Pv(41264),
+       mv = Pv(41267),
+       jv = Pv(41271),
+       fv = Pv(41273),
+ ... (20 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L67-L401` → after: `L95-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L95-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/307.js#L95-L101) · [Before (L67-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/307.js#L67-L401)

```diff
-     }
-   },
-   41034: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "clipPlaneVertexDeclaration",
-       Xz = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   40978: (zz, tz, sz) => {
- ... (319 more removed lines; see GitHub link above)
+     };
+     var Bv = Pv(41377);
+     const Jv = "defaultVertexShader",
+       Ev = "#define CUSTOM_VERTEX_EXTENSION\n#include<__decl__defaultVertex>\n#define CUSTOM_VERTEX_BEGIN\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef TANGENT\nattribute vec4 tangent;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#include<uv … [truncated]
+     hv.d.ShadersStore[Jv] || (hv.d.ShadersStore[Jv] = Ev);
+     const ov = [Sv.d, pv, dv.c, Nv.e, lv.b, Tv.b, Wv.c, wv.b, av.b, sv.b, Cv.e, iv.e, cv.e, Gv.e, mv.c, jv.c, fv.c, Fv.b, Yv.b, nv.e, Ov.e, Dv.e, Kv.d, Vv.e, Uv.d, Rv.e, xv.e, tv.d, qv.e, Iv.c, Qv.c, Zv.b, Av.c, Lv.c, yv, Bv.b];
+     for (const rv of ov) hv.d.IncludesShadersStore[rv.name] || (hv.d.IncludesShadersStore[rv.name] = rv.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/308.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/308.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e)

#### 1. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L4)

```diff
-   41159: (zz, tz, sz) => {
+   41325: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L6` → after: `L6-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L6-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L6-L19) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L6)

```diff
-       c: () => Oz
+       e: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "bakedVertexAnimation",
+       ev = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41236: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L8-L11` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L21-L24) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "decalFragmentDeclaration",
-       Xz = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bakedVertexAnimationDeclaration",
+       ev = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L17` → after: `L30-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L30-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L30-L43) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L17)

```diff
-   41259: (zz, tz, sz) => {
+   41231: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "bonesDeclaration",
+       ev = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41321: (vv, zv, Pv) => {
```

#### 5. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L21-L24` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L47-L50) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L21-L24)

```diff
-     var Fz = sz(39041);
-     const Wz = "depthPrePass",
-       Xz = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bonesVertex",
+       ev = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 6. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L30` → after: `L56-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L56-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L56-L82) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L30)

```diff
-   41184: (zz, tz, sz) => {
+   41355: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "clipPlaneVertex",
+       ev = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41267: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => gv
+ ... (11 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L34-L37` → after: `L86-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L86-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L86-L154) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L34-L37)

```diff
-     var Fz = sz(39041);
-     const Wz = "lightFragmentDeclaration",
-       Xz = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "decalVertexDeclaration",
+       ev = "#ifdef DECAL\nuniform vec4 vDecalInfos;uniform mat4 decalMatrix;\n#endif\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41360: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "fogVertex",
+       ev = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+ ... (53 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L43` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L160) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L43)

```diff
-   41189: (zz, tz, sz) => {
+   41273: (vv, zv, Pv) => {
```

#### 9. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L47-L50` → after: `L164-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L164-L167) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L47-L50)

```diff
-     var Fz = sz(39041);
-     const Wz = "lightUboDeclaration",
-       Xz = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "lightVxFragmentDeclaration",
+       ev = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 10. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L56` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L173) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L56)

```diff
-   41193: (zz, tz, sz) => {
+   41276: (vv, zv, Pv) => {
```

#### 11. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L60-L63` → after: `L177-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L177-L180) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L60-L63)

```diff
-     var Fz = sz(39041);
-     const Wz = "ltcHelperFunctions",
-       Xz = "vec2 LTCUv( const in vec3 N,const in vec3 V,const in float roughness ) {const float LUTSIZE=64.0;const float LUTSCALE=( LUTSIZE-1.0 )/LUTSIZE;const float LUTBIAS=0.5/LUTSIZE;float dotNV=saturate( dot( N,V ) );vec2 uv=vec2( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+ … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "lightVxUboDeclaration",
+       ev = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 12. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L69` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L186) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L69)

```diff
-   41023: (zz, tz, sz) => {
+   41297: (vv, zv, Pv) => {
```

#### 13. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L73` → after: `L190-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L190-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L190-L216) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L73)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
+     const Sv = "logDepthDeclaration",
+       ev = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41377: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "logDepthVertex",
+       ev = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
+ ... (11 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L76` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L219) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L76)

```diff
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 15. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L82` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L225) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L82)

```diff
-   40984: (zz, tz, sz) => {
+   41207: (vv, zv, Pv) => {
```

#### 16. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L84` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L227) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L84)

```diff
-       c: () => Oz
+       e: () => gv
```

#### 17. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L86` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L229) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L86)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 18. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L89` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L232) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L89)

```diff
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 19. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L95` → after: `L238-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L238-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L238-L251) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L95)

```diff
-   41176: (zz, tz, sz) => {
+   41307: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       d: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "morphTargetsVertex",
+       ev = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (int i=0; i<NUM_MORPH_INFLUENCERS; i++) {if (float(i)>=morphTargetCount) break;vertexID=float(gl_VertexID)*morphTargetTextureInfo.x;\n#ifdef MORPHTARGETS_POSITION\npositionUpdated+=(readVector3FromRawSa … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41289: (vv, zv, Pv) => {
```

#### 20. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L99-L102` → after: `L255-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L255-L258) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L99-L102)

```diff
-     var Fz = sz(39041);
-     const Wz = "oitDeclaration",
-       Xz = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#extension GL_EXT_draw_buffers : require\nlayout(location=0) out vec2 depth; \nlayout(location=1) out vec4 frontColor;layout(location=2) out vec4 backColor;\n#define MAX_DEPTH 99999.0\nhighp vec4 gl_FragColor;uniform sampler2D oi … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "morphTargetsVertexDeclaration",
+       ev = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute vec3 position{X};\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute vec3 normal{X};\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute vec3 tangent{X};\n#endif\n#ifdef MORPHTARGETS_UV … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 21. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L108` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L264) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L108)

```diff
-   41280: (zz, tz, sz) => {
+   41299: (vv, zv, Pv) => {
```

#### 22. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L110` → after: `L266-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L266-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L266-L279) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L110)

```diff
-       d: () => Oz
+       e: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "morphTargetsVertexGlobal",
+       ev = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\nfloat vertexID;\n#endif\n#endif\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41284: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
```

#### 23. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L112-L115` → after: `L281-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L281-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L281-L284) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L112-L115)

```diff
-     var Fz = sz(39041);
-     const Wz = "oitFragment",
-       Xz = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\nfloat fragDepth=gl_FragCoord.z; \n#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS\nuint halfFloat=packHalf2x16(vec2(fragDepth));vec2 full=unpackHalf2x16(halfFloat);fragDepth=full.x;\n#endif\nivec2 fragCoord=ivec2(gl_FragCoord.xy);ve … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "morphTargetsVertexGlobalDeclaration",
+       ev = "#ifdef MORPHTARGETS\nuniform float morphTargetInfluences[NUM_MORPH_INFLUENCERS];\n#ifdef MORPHTARGETS_TEXTURE \nuniform float morphTargetTextureIndices[NUM_MORPH_INFLUENCERS];uniform vec3 morphTargetTextureInfo;uniform highp sampler2DArray morphTargets;vec3 readVector … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 24. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L121` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L290) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L121)

```diff
-   41213: (zz, tz, sz) => {
+   41334: (vv, zv, Pv) => {
```

#### 25. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L125-L128` → after: `L294-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L294-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L294-L297) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L125-L128)

```diff
-     var Fz = sz(39041);
-     const Wz = "reflectionFunction",
-       Xz = "vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)\n{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return  … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "prePassVertex",
+       ev = "#ifdef PREPASS_DEPTH\nvViewPos=(view*worldPos).rgb;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvNormViewDepth=((view*worldPos).z-cameraInfo.x)/(cameraInfo.y-cameraInfo.x);\n#endif\n#ifdef PREPASS_LOCAL_POSITION\nvPosition=positionUpdated.xyz;\n#endif\n#if (defined … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 26. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L134` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L303) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L134)

```diff
-   41207: (zz, tz, sz) => {
+   41252: (vv, zv, Pv) => {
```

#### 27. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L138-L141` → after: `L307-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L307-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L307-L310) · [Before (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L138-L141)

```diff
-     var Fz = sz(39041);
-     const Wz = "samplerFragmentDeclaration",
-       Xz = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "prePassVertexDeclaration",
+       ev = "#ifdef PREPASS\n#ifdef PREPASS_LOCAL_POSITION\nvarying vec3 vPosition;\n#endif\n#ifdef PREPASS_DEPTH\nvarying vec3 vViewPos;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvarying float vNormViewDepth;\n#endif\n#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 28. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L147` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L316) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L147)

```diff
-   40980: (zz, tz, sz) => {
+   41262: (vv, zv, Pv) => {
```

#### 29. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L149` → after: `L318-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L318-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L318-L344) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L149)

```diff
-       d: () => Oz
+       e: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "samplerVertexDeclaration",
+       ev = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nvarying vec2 v_VARYINGNAME_UV;\n#endif\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41343: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => gv
+     });
+     var hv = Pv(39162);
+ ... (11 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L151` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L346) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L151)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 31. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L154` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L349) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L154)

```diff
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 32. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L160` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L355) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L160)

```diff
-   41202: (zz, tz, sz) => {
+   41366: (vv, zv, Pv) => {
```

#### 33. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L162` → after: `L357-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L357-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L357-L383) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L162)

```diff
-       e: () => Oz
+       c: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "shadowsVertex",
+       ev = "#ifdef SHADOWS\n#if defined(SHADOWCSM{X})\nvPositionFromCamera{X}=view*worldPos;for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) {vPositionFromLight{X}[i]=lightMatrix{X}[i]*worldPos;\n#ifdef USE_REVERSE_DEPTHBUFFER\nvDepthMetric{X}[i]=(-vPositionFromLight{X}[i].z+light{ … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41218: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
+     });
+     var hv = Pv(39162);
+ ... (11 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L164-L167` → after: `L385-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L385-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L385-L388) · [Before (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L164-L167)

```diff
-     var Fz = sz(39041);
-     const Wz = "shadowsFragmentFunctions",
-       Xz = "#ifdef SHADOWS\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\n#ifndef SHADOWFLOAT\nfloat unpack(vec4 color)\n{const vec4 bit_shift=vec4(1.0/(255 … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "uvVariableDeclaration",
+       ev = "#if !defined(UV{X}) && defined(MAINUV{X})\nvec2 uv{X}=vec2(0.,0.);\n#endif\n#ifdef MAINUV{X}\nvMainUV{X}=uv{X};\n#endif\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 35. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L173` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L394) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L173)

```diff
-   41228: (zz, tz, sz) => {
+   41373: (vv, zv, Pv) => {
```

#### 36. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L177-L180` → after: `L398-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L398-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/308.js#L398-L401) · [Before (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/308.js#L177-L180)

```diff
-     var Fz = sz(39041);
-     const Wz = "textureRepetitionFunctions",
-       Xz = "#if TEXTURE_REPETITION_MODE>0\nvec4 _texRepHash4(vec2 p) {return fract(sin(vec4(\n1.0+dot(p,vec2(37.0,17.0)),\n2.0+dot(p,vec2(11.0,47.0)),\n3.0+dot(p,vec2(41.0,29.0)),\n4.0+dot(p,vec2(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nvec4 _texRepSample … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "vertexColorMixing",
+       ev = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvColor=vec4(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvColor*=colorUpdated;\n#else\nvColor.rgb*=colorUpdated.rgb;\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvColor*=instanceColor;\n#endif\n#e … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/309.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/309.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868)

#### 1. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L4)

```diff
-   41252: (zz, tz, sz) => {
+   41387: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L6)

```diff
-       b: () => Oz
+       e: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "bumpFragment",
-       Xz = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "decalFragmentDeclaration",
+       ev = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L17)

```diff
-   41232: (zz, tz, sz) => {
+   41512: (vv, zv, Pv) => {
```

#### 5. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L21-L38` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L21-L24) · [Before (L21-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L21-L38)

```diff
-     var Fz = sz(39041);
-     sz(41207);
-     const Wz = "bumpFragmentFunctions",
-       Xz = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   41230: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "bumpFragmentMainFunctions",
- ... (2 more removed lines; see GitHub link above)
+     var hv = Pv(39162);
+     const Sv = "depthPrePass",
+       ev = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 6. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L44` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L30) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L44)

```diff
-   41248: (zz, tz, sz) => {
+   41407: (vv, zv, Pv) => {
```

#### 7. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L48-L64` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L34-L37) · [Before (L48-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L48-L64)

```diff
-     var Fz = sz(39041);
-     const Wz = "clipPlaneFragment",
-       Xz = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   41238: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "clipPlaneFragmentDeclaration",
-       Xz = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
- ... (1 more removed lines; see GitHub link above)
+     var hv = Pv(39162);
+     const Sv = "lightFragmentDeclaration",
+       ev = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 8. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L70-L83` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L43) · [Before (L70-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L70-L83)

```diff
-   40999: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "helperFunctions",
-       Xz = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   41166: (zz, tz, sz) => {
+   41415: (vv, zv, Pv) => {
```

#### 9. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L87-L90` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L47-L50) · [Before (L87-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L87-L90)

```diff
-     var Fz = sz(39041);
-     const Wz = "objectIdFunctions",
-       Xz = "highp vec4 encodeObjectId(highp float objectId) {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4(objectId/255.0,0.0,0.0,1.0);\n#else\nhighp float id=floor(objectId);highp vec3 encodedId=vec3(\nfloor(mod(id,16777216.0)/65536.0),\nfloor(mod(id,65536.0)/256.0),\nmod(id,256.0) … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "lightUboDeclaration",
+       ev = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 10. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L96` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L56) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L96)

```diff
-   60909: (zz, tz, sz) => {
+   41424: (vv, zv, Pv) => {
```

#### 11. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L98` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L58) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L98)

```diff
-       d: () => Oz
+       c: () => gv
```

#### 12. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L100-L103` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L60-L63) · [Before (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L100-L103)

```diff
-     var Fz = sz(39041);
-     const Wz = "openpbrDielectricReflectance",
-       Xz = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "ltcHelperFunctions",
+       ev = "vec2 LTCUv( const in vec3 N,const in vec3 V,const in float roughness ) {const float LUTSIZE=64.0;const float LUTSCALE=( LUTSIZE-1.0 )/LUTSIZE;const float LUTBIAS=0.5/LUTSIZE;float dotNV=saturate( dot( N,V ) );vec2 uv=vec2( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+ … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 13. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L109` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L69) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L109)

```diff
-   60914: (zz, tz, sz) => {
+   41258: (vv, zv, Pv) => {
```

#### 14. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L113-L116` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L73-L76) · [Before (L113-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L113-L116)

```diff
-     var Fz = sz(39041);
-     const Wz = "openpbrGeometryInfo",
-       Xz = "struct geometryInfoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;};struct geometryInfoAnisoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;float anisotropy;vec3 anisotropicTangent;vec3 … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "mainUVVaryingDeclaration",
+       ev = "#ifdef MAINUV{X}\nvarying vec2 vMainUV{X};\n#endif\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 15. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L122` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L82) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L122)

```diff
-   60919: (zz, tz, sz) => {
+   41207: (vv, zv, Pv) => {
```

#### 16. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L126-L129` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L86-L89) · [Before (L126-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L126-L129)

```diff
-     var Fz = sz(39041);
-     const Wz = "openpbrIblFunctions",
-       Xz = "#ifdef REFLECTION\nvec3 sampleIrradiance(\nin vec3 surfaceNormal\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,in vec3 vEnvironmentIrradianceSH\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || ( … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "meshUboDeclaration",
+       ev = "#ifdef WEBGL2\nuniform mat4 world;uniform float visibility;\n#else\nlayout(std140,column_major) uniform;uniform Mesh\n{mat4 world;float visibility;};\n#endif\n#define WORLD_UBO\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 17. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L135` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L95) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L135)

```diff
-   60928: (zz, tz, sz) => {
+   41399: (vv, zv, Pv) => {
```

#### 18. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L137` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L97) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L137)

```diff
-       e: () => Oz
+       b: () => gv
```

#### 19. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L139-L142` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L99-L102) · [Before (L139-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L139-L142)

```diff
-     var Fz = sz(39041);
-     const Wz = "openpbrSubsurfaceLayerData",
-       Xz = "float subsurface_weight=vSubsurfaceWeight;vec3 subsurface_color=vSubsurfaceColor.rgb;float subsurface_radius=vSubsurfaceRadius;vec3 subsurface_radius_scale=vSubsurfaceRadiusScale;float subsurface_scatter_anisotropy=clamp(vSubsurfaceScatterAnisotropy,-0.9999,0.9999);\n … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "oitDeclaration",
+       ev = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#extension GL_EXT_draw_buffers : require\nlayout(location=0) out vec2 depth; \nlayout(location=1) out vec4 frontColor;layout(location=2) out vec4 backColor;\n#define MAX_DEPTH 99999.0\nhighp vec4 gl_FragColor;uniform sampler2D oi … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 20. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L148` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L108) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L148)

```diff
-   60925: (zz, tz, sz) => {
+   41531: (vv, zv, Pv) => {
```

#### 21. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L152-L155` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L112-L115) · [Before (L152-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L152-L155)

```diff
-     var Fz = sz(39041);
-     const Wz = "openpbrTransmissionLayerData",
-       Xz = "float transmission_weight=vTransmissionWeight;vec3 transmission_color=vTransmissionColor.rgb;float transmission_depth=vTransmissionDepth;vec3 transmission_scatter=vTransmissionScatter.rgb;float transmission_scatter_anisotropy=clamp(vTransmissionScatterAnisotropy,-0.99 … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "oitFragment",
+       ev = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\nfloat fragDepth=gl_FragCoord.z; \n#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS\nuint halfFloat=packHalf2x16(vec2(fragDepth));vec2 full=unpackHalf2x16(halfFloat);fragDepth=full.x;\n#endif\nivec2 fragCoord=ivec2(gl_FragCoord.xy);ve … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 22. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L161-L174` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L121) · [Before (L161-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L161-L174)

```diff
-   60685: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "pbrBRDFFunctions",
-       Xz = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   60708: (zz, tz, sz) => {
+   41451: (vv, zv, Pv) => {
```

#### 23. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L178-L204` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L125) · [Before (L178-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L178-L204)

```diff
-     var Fz = sz(39041);
-     const Wz = "pbrFragmentReflectionDeclaration",
-       Xz = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\n#define sampleReflection(s,c) textureCube(s,c)\nuniform samplerCube reflectionSampler;\n#ifdef LODBASEDMICROSFURACE\n#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)\n#else\nuniform samplerCube reflectionSamplerLo … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   60743: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "pbrIBLFunctions",
-       Xz = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfloat getLodFromAlphaG(float cubeMapDimensionPixels,float microsurfaceAverageSlope) {float microsurfaceAverageSlopeTexels=cubeMapDimensionPixels*microsurfaceAverageSlope;float lod=log2(microsurfaceAverageSlopeTexels); … [truncated]
- ... (11 more removed lines; see GitHub link above)
+     var hv = Pv(39162);
```

#### 24. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L207` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L128) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L207)

```diff
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 25. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L213` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L134) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L213)

```diff
-   41207: (zz, tz, sz) => {
+   41446: (vv, zv, Pv) => {
```

#### 26. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L215` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L136) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L215)

```diff
-       e: () => Oz
+       b: () => gv
```

#### 27. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L217` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L138) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L217)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 28. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L220` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L141) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L220)

```diff
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 29. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L226` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L147) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L226)

```diff
-   60905: (zz, tz, sz) => {
+   41199: (vv, zv, Pv) => {
```

#### 30. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L228` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L149) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L228)

```diff
-       d: () => Oz
+       c: () => gv
```

#### 31. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L230-L233` → after: `L151-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L151-L154) · [Before (L230-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L230-L233)

```diff
-     var Fz = sz(39041);
-     const Wz = "sceneFragmentDeclaration",
-       Xz = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;uniform mat4 inverseProjection;\n";
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "sceneUboDeclaration",
+       ev = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 32. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L239` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L160) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L239)

```diff
-   40980: (zz, tz, sz) => {
+   41438: (vv, zv, Pv) => {
```

#### 33. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L241` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L162) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L241)

```diff
-       d: () => Oz
+       b: () => gv
```

#### 34. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L243-L246` → after: `L164-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L164-L167) · [Before (L243-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L243-L246)

```diff
-     var Fz = sz(39041);
-     const Wz = "sceneUboDeclaration",
-       Xz = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "shadowsFragmentFunctions",
+       ev = "#ifdef SHADOWS\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\n#ifndef SHADOWFLOAT\nfloat unpack(vec4 color)\n{const vec4 bit_shift=vec4(1.0/(255 … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 35. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L252-L254` → after: `L173-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L173-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L173-L175) · [Before (L252-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L252-L254)

```diff
-   60995: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       geometryPixelShader: () => Gz
+   41465: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       d: () => gv
```

#### 36. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L256-L287` → after: `L177-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/309.js#L177-L180) · [Before (L256-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/309.js#L256-L287)

```diff
-     var Fz = sz(39041),
-       Wz = sz(41166),
-       Xz = sz(41238);
-     const Oz = "mrtFragmentDeclaration",
-       oz = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#ifdef MESH_BLEND_TAG\n#if {X}>0\n#if MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if {X}>1\n#if MESH … [truncated]
-     Fz.e.IncludesShadersStore[Oz] || (Fz.e.IncludesShadersStore[Oz] = oz);
-     const vz = {
-       name: Oz,
-       shader: oz
-     };
-     var Uz = sz(41230),
-       Kz = sz(41207),
-       uz = sz(41232),
-       Nz = sz(40999),
-       bz = sz(60708),
-       wz = sz(60905),
- ... (16 more removed lines; see GitHub link above)
+     var hv = Pv(39162);
+     const Sv = "textureRepetitionFunctions",
+       ev = "#if TEXTURE_REPETITION_MODE>0\nvec4 _texRepHash4(vec2 p) {return fract(sin(vec4(\n1.0+dot(p,vec2(37.0,17.0)),\n2.0+dot(p,vec2(11.0,47.0)),\n3.0+dot(p,vec2(41.0,29.0)),\n4.0+dot(p,vec2(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nvec4 _texRepSample … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/310.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/310.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d)

#### 1. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L4)

```diff
-   41097: (zz, tz, sz) => {
+   41500: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "bakedVertexAnimation",
-       Xz = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bumpFragment",
+       ev = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 3. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L17)

```diff
-   41006: (zz, tz, sz) => {
+   41472: (vv, zv, Pv) => {
```

#### 4. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L19)

```diff
-       e: () => Oz
+       b: () => gv
```

#### 5. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L21-L24` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L21-L25) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L21-L24)

```diff
-     var Fz = sz(39041);
-     const Wz = "bakedVertexAnimationDeclaration",
-       Xz = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     Pv(41446);
+     const Sv = "bumpFragmentFunctions",
+       ev = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 6. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L30` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L31) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L30)

```diff
-   41001: (zz, tz, sz) => {
+   41469: (vv, zv, Pv) => {
```

#### 7. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L32` → after: `L33-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L33-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L33-L72) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L32)

```diff
-       b: () => Oz
+       d: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "bumpFragmentMainFunctions",
+       ev = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41493: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => gv
+     });
+     var hv = Pv(39162);
+ ... (24 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L34-L37` → after: `L74-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L74-L77) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L34-L37)

```diff
-     var Fz = sz(39041);
-     const Wz = "bonesDeclaration",
-       Xz = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "helperFunctions",
+       ev = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 9. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L43` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L83) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L43)

```diff
-   41094: (zz, tz, sz) => {
+   41390: (vv, zv, Pv) => {
```

#### 10. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L47-L50` → after: `L87-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L87-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L87-L90) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L47-L50)

```diff
-     var Fz = sz(39041);
-     const Wz = "bonesVertex",
-       Xz = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "objectIdFunctions",
+       ev = "highp vec4 encodeObjectId(highp float objectId) {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4(objectId/255.0,0.0,0.0,1.0);\n#else\nhighp float id=floor(objectId);highp vec3 encodedId=vec3(\nfloor(mod(id,16777216.0)/65536.0),\nfloor(mod(id,65536.0)/256.0),\nmod(id,256.0) … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 11. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L56` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L96) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L56)

```diff
-   41114: (zz, tz, sz) => {
+   61192: (vv, zv, Pv) => {
```

#### 12. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L60-L63` → after: `L100-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L100-L103) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L60-L63)

```diff
-     var Fz = sz(39041);
-     const Wz = "bumpVertex",
-       Xz = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "openpbrDielectricReflectance",
+       ev = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 13. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L69` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L109) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L69)

```diff
-   41122: (zz, tz, sz) => {
+   61194: (vv, zv, Pv) => {
```

#### 14. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L71` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L111) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L71)

```diff
-       e: () => Oz
+       b: () => gv
```

#### 15. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L73-L76` → after: `L113-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L113-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L113-L116) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L73-L76)

```diff
-     var Fz = sz(39041);
-     const Wz = "clipPlaneVertex",
-       Xz = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "openpbrGeometryInfo",
+       ev = "struct geometryInfoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;};struct geometryInfoAnisoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;float anisotropy;vec3 anisotropicTangent;vec3 … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 16. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L82` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L122) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L82)

```diff
-   41034: (zz, tz, sz) => {
+   61198: (vv, zv, Pv) => {
```

#### 17. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L84` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L124) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L84)

```diff
-       c: () => Oz
+       d: () => gv
```

#### 18. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L86-L89` → after: `L126-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L126-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L126-L129) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L86-L89)

```diff
-     var Fz = sz(39041);
-     const Wz = "clipPlaneVertexDeclaration",
-       Xz = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "openpbrIblFunctions",
+       ev = "#ifdef REFLECTION\nvec3 sampleIrradiance(\nin vec3 surfaceNormal\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,in vec3 vEnvironmentIrradianceSH\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || ( … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 19. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L95` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L135) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L95)

```diff
-   60689: (zz, tz, sz) => {
+   61208: (vv, zv, Pv) => {
```

#### 20. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L99-L102` → after: `L139-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L139-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L139-L142) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L99-L102)

```diff
-     var Fz = sz(39041);
-     const Wz = "harmonicsFunctions",
-       Xz = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "openpbrSubsurfaceLayerData",
+       ev = "float subsurface_weight=vSubsurfaceWeight;vec3 subsurface_color=vSubsurfaceColor.rgb;float subsurface_radius=vSubsurfaceRadius;vec3 subsurface_radius_scale=vSubsurfaceRadiusScale;float subsurface_scatter_anisotropy=clamp(vSubsurfaceScatterAnisotropy,-0.9999,0.9999);\n … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 21. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L108` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L148) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L108)

```diff
-   41015: (zz, tz, sz) => {
+   61204: (vv, zv, Pv) => {
```

#### 22. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L112-L115` → after: `L152-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L152-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L152-L155) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L112-L115)

```diff
-     var Fz = sz(39041);
-     const Wz = "instancesDeclaration",
-       Xz = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "openpbrTransmissionLayerData",
+       ev = "float transmission_weight=vTransmissionWeight;vec3 transmission_color=vTransmissionColor.rgb;float transmission_depth=vTransmissionDepth;vec3 transmission_scatter=vTransmissionScatter.rgb;float transmission_scatter_anisotropy=clamp(vTransmissionScatterAnisotropy,-0.99 … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 23. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L121` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L161) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L121)

```diff
-   41092: (zz, tz, sz) => {
+   60949: (vv, zv, Pv) => {
```

#### 24. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L123` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L163) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L123)

```diff
-       c: () => Oz
+       b: () => gv
```

#### 25. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L125-L128` → after: `L165-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L165-L168) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L125-L128)

```diff
-     var Fz = sz(39041);
-     const Wz = "instancesVertex",
-       Xz = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "pbrBRDFFunctions",
+       ev = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 26. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L134` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L174) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L134)

```diff
-   41086: (zz, tz, sz) => {
+   60970: (vv, zv, Pv) => {
```

#### 27. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L136` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L176) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L136)

```diff
-       d: () => Oz
+       b: () => gv
```

#### 28. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L138-L141` → after: `L178-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L178-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L178-L181) · [Before (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L138-L141)

```diff
-     var Fz = sz(39041);
-     const Wz = "morphTargetsVertex",
-       Xz = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (int i=0; i<NUM_MORPH_INFLUENCERS; i++) {if (float(i)>=morphTargetCount) break;vertexID=float(gl_VertexID)*morphTargetTextureInfo.x;\n#ifdef MORPHTARGETS_POSITION\npositionUpdated+=(readVector3FromRawSa … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "pbrFragmentReflectionDeclaration",
+       ev = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\n#define sampleReflection(s,c) textureCube(s,c)\nuniform samplerCube reflectionSampler;\n#ifdef LODBASEDMICROSFURACE\n#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)\n#else\nuniform samplerCube reflectionSamplerLo … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 29. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L147` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L187) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L147)

```diff
-   41067: (zz, tz, sz) => {
+   61014: (vv, zv, Pv) => {
```

#### 30. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L149` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L189) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L149)

```diff
-       c: () => Oz
+       d: () => gv
```

#### 31. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L151-L154` → after: `L191-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L191-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L191-L194) · [Before (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L151-L154)

```diff
-     var Fz = sz(39041);
-     const Wz = "morphTargetsVertexDeclaration",
-       Xz = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute vec3 position{X};\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute vec3 normal{X};\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute vec3 tangent{X};\n#endif\n#ifdef MORPHTARGETS_UV … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "pbrIBLFunctions",
+       ev = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfloat getLodFromAlphaG(float cubeMapDimensionPixels,float microsurfaceAverageSlope) {float microsurfaceAverageSlopeTexels=cubeMapDimensionPixels*microsurfaceAverageSlope;float lod=log2(microsurfaceAverageSlopeTexels); … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 32. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L160` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L200) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L160)

```diff
-   41077: (zz, tz, sz) => {
+   41451: (vv, zv, Pv) => {
```

#### 33. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L164-L167` → after: `L204-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L204-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L204-L207) · [Before (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L164-L167)

```diff
-     var Fz = sz(39041);
-     const Wz = "morphTargetsVertexGlobal",
-       Xz = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\nfloat vertexID;\n#endif\n#endif\n";
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "reflectionFunction",
+       ev = "vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)\n{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return  … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 34. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L173` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L213) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L173)

```diff
-   41058: (zz, tz, sz) => {
+   41446: (vv, zv, Pv) => {
```

#### 35. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L177-L180` → after: `L217-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L217-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L217-L220) · [Before (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L177-L180)

```diff
-     var Fz = sz(39041);
-     const Wz = "morphTargetsVertexGlobalDeclaration",
-       Xz = "#ifdef MORPHTARGETS\nuniform float morphTargetInfluences[NUM_MORPH_INFLUENCERS];\n#ifdef MORPHTARGETS_TEXTURE \nuniform float morphTargetTextureIndices[NUM_MORPH_INFLUENCERS];uniform vec3 morphTargetTextureInfo;uniform highp sampler2DArray morphTargets;vec3 readVector … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "samplerFragmentDeclaration",
+       ev = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 36. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L186` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L226) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L186)

```diff
-   40980: (zz, tz, sz) => {
+   61185: (vv, zv, Pv) => {
```

#### 37. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L188` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L228) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L188)

```diff
-       d: () => Oz
+       e: () => gv
```

#### 38. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L190-L193` → after: `L230-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L230-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L230-L233) · [Before (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L190-L193)

```diff
-     var Fz = sz(39041);
-     const Wz = "sceneUboDeclaration",
-       Xz = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "sceneFragmentDeclaration",
+       ev = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;uniform mat4 inverseProjection;\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 39. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L199-L201` → after: `L239-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L239-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L239-L241) · [Before (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L199-L201)

```diff
-   60988: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       geometryVertexShader: () => Zz
+   41199: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => gv
```

#### 40. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L203-L211` → after: `L243-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L243-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L243-L246) · [Before (L203-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L203-L211)

```diff
-     var Fz = sz(39041),
-       Wz = sz(41001),
-       Xz = sz(41006),
-       Oz = sz(41058),
-       oz = sz(41067),
-       vz = sz(41015);
-     const Uz = "geometryVertexDeclaration",
-       Kz = "uniform mat4 viewProjection;uniform mat4 view;";
-     Fz.e.IncludesShadersStore[Uz] || (Fz.e.IncludesShadersStore[Uz] = Kz);
+     var hv = Pv(39162);
+     const Sv = "sceneUboDeclaration",
+       ev = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 41. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L215-L219` → after: `L250-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L250-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L250-L261) · [Before (L215-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L215-L219)

```diff
-     };
-     var Nz = sz(40980);
-     const bz = "geometryUboDeclaration",
-       wz = "#include<sceneUboDeclaration>\n";
-     Fz.e.IncludesShadersStore[bz] || (Fz.e.IncludesShadersStore[bz] = wz);
+     }
+   },
+   61276: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       geometryPixelShader: () => Vv
+     });
+     var hv = Pv(39162),
+       Sv = Pv(41390),
+       ev = Pv(41478);
+     const gv = "mrtFragmentDeclaration",
+       pv = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#ifdef MESH_BLEND_TAG\n#if {X}>0\n#if MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if {X}>1\n#if MESH … [truncated]
+     hv.d.IncludesShadersStore[gv] || (hv.d.IncludesShadersStore[gv] = pv);
```

#### 42. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L224-L237` → after: `L266-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L266-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/310.js#L266-L287) · [Before (L224-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/310.js#L224-L237)

```diff
-     var gz = sz(41034),
-       Hz = sz(60689),
-       Bz = sz(41077),
-       Pz = sz(41086),
-       rz = sz(41092),
-       Yz = sz(41094),
-       xz = sz(41097),
-       mz = sz(41122),
-       Jz = sz(41114);
-     const Iz = "geometryVertexShader",
-       Cz = "precision highp float;\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<morphTargetsVertexGlobalDeclaration>\n#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]\n#include<instancesDeclaration>\n#include<__decl__geom … [truncated]
-     Fz.e.ShadersStore[Iz] || (Fz.e.ShadersStore[Iz] = Cz);
-     const ez = [Wz.b, Xz.e, Oz.b, oz.c, vz.b, uz, Nz.d, Dz, gz.c, Hz.d, Bz.b, Pz.d, rz.c, Yz.b, xz.d, mz.e, Jz.e];
-     for (const Gz of ez) Fz.e.IncludesShadersStore[Gz.name] || (Fz.e.IncludesShadersStore[Gz.name] = Gz.shader);
+     var Nv = Pv(41469),
+       lv = Pv(41446),
+       Tv = Pv(41472),
+       Wv = Pv(41226),
+       wv = Pv(60970),
+       av = Pv(61185),
+       sv = Pv(41199),
+       Cv = Pv(60949),
+       iv = Pv(61192),
+       cv = Pv(61014),
+       Gv = Pv(41451),
+       mv = Pv(61194),
+       jv = Pv(61198),
+       fv = Pv(41493),
+       Fv = Pv(41500),
+       Yv = Pv(61208),
+ ... (6 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/311.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/311.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab)

#### 1. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L4-L18` → after: `L4-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L4-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/311.js#L4-L199) · [Before (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/311.js#L4-L18)

```diff
-   40991: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Oz
-     });
-     var Fz = sz(39041);
-     sz(40980), sz(40984);
-     const Wz = "defaultUboDeclaration",
-       Xz = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   41157: (zz, tz, sz) => {
+   41325: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "bakedVertexAnimation",
+       ev = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41236: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
+ ... (180 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L20-L26` → after: `L201-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L201-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/311.js#L201-L211) · [Before (L20-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/311.js#L20-L26)

```diff
-       defaultPixelShader: () => Ez
-     });
-     var Fz = sz(39041),
-       Wz = sz(41159);
-     const Xz = "defaultFragmentDeclaration",
-       Oz = "uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform vec2 vAmbientInfos;\n#endif\ … [truncated]
-     Fz.e.IncludesShadersStore[Xz] || (Fz.e.IncludesShadersStore[Xz] = Oz);
+       geometryVertexShader: () => Kv
+     });
+     var hv = Pv(39162),
+       Sv = Pv(41231),
+       ev = Pv(41236),
+       gv = Pv(41284),
+       pv = Pv(41289),
+       dv = Pv(41244);
+     const Nv = "geometryVertexDeclaration",
+       lv = "uniform mat4 viewProjection;uniform mat4 view;";
+     hv.d.IncludesShadersStore[Nv] || (hv.d.IncludesShadersStore[Nv] = lv);
```

#### 3. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L31-L45` → after: `L216-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/311.js#L216-L219) · [Before (L31-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/311.js#L31-L45)

```diff
-     var vz = sz(40980),
-       Uz = sz(40984),
-       Kz = sz(40991),
-       uz = sz(41166),
-       Nz = sz(41173),
-       bz = sz(41176),
-       wz = sz(41023),
-       Dz = sz(40999),
-       gz = sz(41184),
-       Hz = sz(41189),
-       Bz = sz(41193),
-       Pz = sz(41198);
-     const rz = "lightsFragmentFunctions",
-       Yz = "struct lightingInfo\n{vec3 diffuse;\n#ifdef SPECULARTERM\nvec3 specular;\n#endif\n#ifdef NDOTL\nfloat ndl;\n#endif\n};lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {light … [truncated]
-     Fz.e.IncludesShadersStore[rz] || (Fz.e.IncludesShadersStore[rz] = Yz);
+     var Wv = Pv(41199);
+     const wv = "geometryUboDeclaration",
+       av = "#include<sceneUboDeclaration>\n";
+     hv.d.IncludesShadersStore[wv] || (hv.d.IncludesShadersStore[wv] = av);
```

#### 4. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L50-L87` → after: `L224-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L224-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/311.js#L224-L237) · [Before (L50-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/311.js#L50-L87)

```diff
-     var mz = sz(41202),
-       Jz = sz(41207);
-     const Iz = "fresnelFunction",
-       Cz = "#ifdef FRESNEL\nfloat computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)\n{float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
-     Fz.e.IncludesShadersStore[Iz] || (Fz.e.IncludesShadersStore[Iz] = Cz);
-     const ez = {
-       name: Iz,
-       shader: Cz
-     };
-     var Zz = sz(41213),
-       Gz = sz(41217),
-       Tz = sz(41223),
-       cz = sz(41228),
-       jz = sz(41230),
-       Az = sz(41232),
-       yz = sz(41238),
- ... (22 more removed lines; see GitHub link above)
+     var Cv = Pv(41267),
+       iv = Pv(60951),
+       cv = Pv(41299),
+       Gv = Pv(41307),
+       mv = Pv(41313),
+       jv = Pv(41321),
+       fv = Pv(41325),
+       Fv = Pv(41355),
+       Yv = Pv(41346);
+     const nv = "geometryVertexShader",
+       Ov = "precision highp float;\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<morphTargetsVertexGlobalDeclaration>\n#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]\n#include<instancesDeclaration>\n#include<__decl__geom … [truncated]
+     hv.d.ShadersStore[nv] || (hv.d.ShadersStore[nv] = Ov);
+     const Dv = [Sv.b, ev.b, gv.b, pv.e, dv.b, Tv, Wv.c, sv, Cv.c, iv.b, cv.e, Gv.d, mv.e, jv.d, fv.e, Fv.c, Yv.c];
+     for (const Vv of Dv) hv.d.IncludesShadersStore[Vv.name] || (hv.d.IncludesShadersStore[Vv.name] = Vv.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/312.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/312.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986)

#### 1. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/312.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/312.js#L4)

```diff
-   41248: (zz, tz, sz) => {
+   41213: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/312.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/312.js#L6)

```diff
-       e: () => Oz
+       b: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L8-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/312.js#L8-L12) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/312.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "clipPlaneFragment",
-       Xz = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     Pv(41199), Pv(41207);
+     const Sv = "defaultUboDeclaration",
+       ev = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L17-L19` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/312.js#L18-L20) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/312.js#L17-L19)

```diff
-   41238: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Oz
+   41379: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       defaultPixelShader: () => uv
```

#### 5. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L21-L24` → after: `L22-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/312.js#L22-L26) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/312.js#L21-L24)

```diff
-     var Fz = sz(39041);
-     const Wz = "clipPlaneFragmentDeclaration",
-       Xz = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162),
+       Sv = Pv(41387);
+     const ev = "defaultFragmentDeclaration",
+       gv = "uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform vec2 vAmbientInfos;\n#endif\ … [truncated]
+     hv.d.IncludesShadersStore[ev] || (hv.d.IncludesShadersStore[ev] = gv);
```

#### 6. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L28-L37` → after: `L30-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L30-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/312.js#L30-L45) · [Before (L28-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/312.js#L28-L37)

```diff
-     }
-   },
-   41277: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "fogFragment",
-       Xz = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     };
+     var dv = Pv(41199),
+       Nv = Pv(41207),
+       lv = Pv(41213),
+       Tv = Pv(41390),
+       Wv = Pv(41396),
+       wv = Pv(41399),
+       av = Pv(41258),
+       sv = Pv(41226),
+       Cv = Pv(41407),
+       iv = Pv(41415),
+       cv = Pv(41424),
+       Gv = Pv(41430);
+     const mv = "lightsFragmentFunctions",
+       jv = "struct lightingInfo\n{vec3 diffuse;\n#ifdef SPECULARTERM\nvec3 specular;\n#endif\n#ifdef NDOTL\nfloat ndl;\n#endif\n};lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {light … [truncated]
+     hv.d.IncludesShadersStore[mv] || (hv.d.IncludesShadersStore[mv] = jv);
```

#### 7. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L41-L50` → after: `L49-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L49-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/312.js#L49-L54) · [Before (L41-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/312.js#L41-L50)

```diff
-     }
-   },
-   41242: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "fogFragmentDeclaration",
-       Xz = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     };
+     var Fv = Pv(41438),
+       Yv = Pv(41446);
+     const nv = "fresnelFunction",
+       Ov = "#ifdef FRESNEL\nfloat computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)\n{float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
+     hv.d.IncludesShadersStore[nv] || (hv.d.IncludesShadersStore[nv] = Ov);
```

#### 8. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L54-L63` → after: `L58-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L58-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/312.js#L58-L73) · [Before (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/312.js#L54-L63)

```diff
-     }
-   },
-   40999: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "helperFunctions",
-       Xz = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     };
+     var Kv = Pv(41451),
+       Vv = Pv(41453),
+       Uv = Pv(41461),
+       Rv = Pv(41465),
+       xv = Pv(41469),
+       tv = Pv(41472),
+       qv = Pv(41478),
+       Iv = Pv(41297),
+       Qv = Pv(41487),
+       Zv = Pv(41493),
+       Av = Pv(41500),
+       Lv = Pv(41503);
+     const Hv = "defaultFragmentAlpha",
+       Mv = "#ifdef OPACITY\nvec4 opacityMap=TEXRD(opacitySampler,vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap.rgb=opacityMap.rgb*vec3(0.3,0.59,0.11);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*vOpacityInfos.y;\n#endif\n#en … [truncated]
+     hv.d.IncludesShadersStore[Hv] || (hv.d.IncludesShadersStore[Hv] = Mv);
```

#### 9. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L67-L142` → after: `L77-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L77-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/312.js#L77-L87) · [Before (L67-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/312.js#L67-L142)

```diff
-     }
-   },
-   41217: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "imageProcessingDeclaration",
-       Xz = "#ifdef EXPOSURE\nuniform float exposureLinear;\n#endif\n#ifdef CONTRAST\nuniform float contrast;\n#endif\n#ifdef WHITEBALANCE\nuniform mat3 whiteBalanceMatrix;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vec2 vInverseScreenSize;\n#endif\n#ifdef VIGNETTE … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   41223: (zz, tz, sz) => {
- ... (60 more removed lines; see GitHub link above)
+     };
+     var Bv = Pv(41512),
+       Jv = Pv(41518),
+       Ev = Pv(41524),
+       ov = Pv(41526),
+       bv = Pv(41531);
+     const rv = "defaultPixelShader",
+       kv = "#define CUSTOM_FRAGMENT_EXTENSION\n#include<__decl__defaultFragment>\n#if defined(BUMP) || !defined(NORMAL)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#define CUSTOM_FRAGMENT_BEGIN … [truncated]
+     hv.d.ShadersStore[rv] || (hv.d.ShadersStore[rv] = kv);
+     const Xv = [Sv.e, pv, dv.c, Nv.e, lv.b, Tv.b, Wv.b, wv.b, av.e, sv.c, Cv.e, iv.c, cv.c, Gv.b, fv, Fv.b, Yv.b, Dv, Kv.b, Vv.c, Uv.e, Rv.d, xv.d, tv.b, qv.d, Iv.e, Qv.b, Zv.c, Av.d, Lv.e, yv, Bv.d, Jv.d, Ev.b, ov.b, bv.e];
+     for (const vz of Xv) hv.d.IncludesShadersStore[vz.name] || (hv.d.IncludesShadersStore[vz.name] = vz.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/313.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/313.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333)

#### 1. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L4)

```diff
-   41248: (zz, tz, sz) => {
+   41493: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L6)

```diff
-       e: () => Oz
+       c: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L8)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 4. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L11)

```diff
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 5. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L17)

```diff
-   41238: (zz, tz, sz) => {
+   41478: (vv, zv, Pv) => {
```

#### 6. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L19)

```diff
-       b: () => Oz
+       d: () => gv
```

#### 7. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L21)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 8. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L24)

```diff
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 9. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L30)

```diff
-   41277: (zz, tz, sz) => {
+   41526: (vv, zv, Pv) => {
```

#### 10. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L32)

```diff
-       e: () => Oz
+       b: () => gv
```

#### 11. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L34)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 12. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L37)

```diff
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 13. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L43)

```diff
-   41242: (zz, tz, sz) => {
+   41487: (vv, zv, Pv) => {
```

#### 14. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L45)

```diff
-       e: () => Oz
+       b: () => gv
```

#### 15. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L47)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 16. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L50)

```diff
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 17. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L56)

```diff
-   40999: (zz, tz, sz) => {
+   41226: (vv, zv, Pv) => {
```

#### 18. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L58)

```diff
-       d: () => Oz
+       c: () => gv
```

#### 19. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L60)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 20. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L63)

```diff
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 21. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L69)

```diff
-   41072: (zz, tz, sz) => {
+   41453: (vv, zv, Pv) => {
```

#### 22. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L73-L76)

```diff
-     var Fz = sz(39041);
-     const Wz = "logDepthDeclaration",
-       Xz = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "imageProcessingDeclaration",
+       ev = "#ifdef EXPOSURE\nuniform float exposureLinear;\n#endif\n#ifdef CONTRAST\nuniform float contrast;\n#endif\n#ifdef WHITEBALANCE\nuniform mat3 whiteBalanceMatrix;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vec2 vInverseScreenSize;\n#endif\n#ifdef VIGNETTE … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 23. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L82)

```diff
-   41270: (zz, tz, sz) => {
+   41461: (vv, zv, Pv) => {
```

#### 24. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L84)

```diff
-       b: () => Oz
+       e: () => gv
```

#### 25. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L86-L89` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L86-L89) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L86-L89)

```diff
-     var Fz = sz(39041);
-     const Wz = "logDepthFragment",
-       Xz = "#ifdef LOGARITHMICDEPTH\ngl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;\n#endif\n";
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "imageProcessingFunctions",
+       ev = "#if defined(COLORGRADING) && !defined(COLORGRADING3D)\n/** \n* Polyfill for SAMPLE_TEXTURE_3D,which is unsupported in WebGL.\n* sampler3dSetting.x=textureOffset (0.5/textureSize).\n* sampler3dSetting.y=textureSize.\n*/\n#define inline\nvec3 sampleTexture3D(sampler2D c … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 26. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L95-L97` → after: `L95-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L95-L97) · [Before (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L95-L97)

```diff
-   60381: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       skyPixelShader: () => Hz
+   41297: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => gv
```

#### 27. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L99-L109` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L99-L102) · [Before (L99-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L99-L109)

```diff
-     var Fz = sz(39041),
-       Wz = sz(41238),
-       Xz = sz(41072),
-       Oz = sz(41242),
-       oz = sz(40999),
-       vz = sz(41248),
-       Uz = sz(41270),
-       Kz = sz(41277);
-     const uz = "imageProcessingCompatibility",
-       Nz = "#ifdef IMAGEPROCESSINGPOSTPROCESS\ngl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));\n#endif\n";
-     Fz.e.IncludesShadersStore[uz] || (Fz.e.IncludesShadersStore[uz] = Nz);
+     var hv = Pv(39162);
+     const Sv = "logDepthDeclaration",
+       ev = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 28. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L111-L118` → after: `L104-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L104-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/313.js#L104-L142) · [Before (L111-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/313.js#L111-L118)

```diff
-         name: uz,
-         shader: Nz
-       },
-       wz = "skyPixelShader",
-       Dz = "precision highp float;varying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneFragmentDeclaration>\nuniform vec3 cameraPosition;uniform vec3 cameraOffset;uniform vec3 up;uniform float luminance;uniform float turbidity;uniform floa … [truncated]
-     Fz.e.ShadersStore[wz] || (Fz.e.ShadersStore[wz] = Dz);
-     const gz = [Wz.b, Xz.c, Oz.e, oz.d, vz.e, Uz.b, Kz.e, bz];
-     for (const Bz of gz) Fz.e.IncludesShadersStore[Bz.name] || (Fz.e.IncludesShadersStore[Bz.name] = Bz.shader);
+       name: Sv,
+       shader: ev
+     }
+   },
+   41524: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "logDepthFragment",
+       ev = "#ifdef LOGARITHMICDEPTH\ngl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;\n#endif\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+ ... (23 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/314.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/314.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65)

#### 1. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/314.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/314.js#L4)

```diff
-   40999: (zz, tz, sz) => {
+   41493: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/314.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/314.js#L6)

```diff
-       d: () => Oz
+       c: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/314.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/314.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "helperFunctions",
-       Xz = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "clipPlaneFragment",
+       ev = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L17` → after: `L17-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L17-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/314.js#L17-L95) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/314.js#L17)

```diff
-   60558: (zz, tz, sz) => {
+   41478: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       d: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "clipPlaneFragmentDeclaration",
+       ev = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41526: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
+ ... (63 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L19` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/314.js#L97) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/314.js#L19)

```diff
-       rgbdDecodePixelShader: () => vz
+       skyPixelShader: () => iv
```

#### 6. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L21-L27` → after: `L99-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L99-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/314.js#L99-L118) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/314.js#L21-L27)

```diff
-     var Fz = sz(39041),
-       Wz = sz(40999);
-     const Xz = "rgbdDecodePixelShader",
-       Oz = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}";
-     Fz.e.ShadersStore[Xz] || (Fz.e.ShadersStore[Xz] = Oz);
-     const oz = [Wz.d];
-     for (const Uz of oz) Fz.e.IncludesShadersStore[Uz.name] || (Fz.e.IncludesShadersStore[Uz.name] = Uz.shader);
+     var hv = Pv(39162),
+       Sv = Pv(41478),
+       ev = Pv(41297),
+       gv = Pv(41487),
+       pv = Pv(41226),
+       dv = Pv(41493),
+       Nv = Pv(41524),
+       lv = Pv(41526);
+     const Tv = "imageProcessingCompatibility",
+       Wv = "#ifdef IMAGEPROCESSINGPOSTPROCESS\ngl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));\n#endif\n";
+     hv.d.IncludesShadersStore[Tv] || (hv.d.IncludesShadersStore[Tv] = Wv);
+     const wv = {
+         name: Tv,
+         shader: Wv
+       },
+       av = "skyPixelShader",
+ ... (4 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/315.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/315.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b)

#### 1. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/315.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/315.js#L4)

```diff
-   40999: (zz, tz, sz) => {
+   41226: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/315.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/315.js#L6)

```diff
-       d: () => Oz
+       c: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/315.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/315.js#L8)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 4. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/315.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/315.js#L11)

```diff
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 5. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/315.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/315.js#L17)

```diff
-   60567: (zz, tz, sz) => {
+   60807: (vv, zv, Pv) => {
```

#### 6. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/315.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/315.js#L19)

```diff
-       rgbdEncodePixelShader: () => vz
+       rgbdDecodePixelShader: () => dv
```

#### 7. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L21-L27` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/315.js#L21-L27) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/315.js#L21-L27)

```diff
-     var Fz = sz(39041),
-       Wz = sz(40999);
-     const Xz = "rgbdEncodePixelShader",
-       Oz = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}";
-     Fz.e.ShadersStore[Xz] || (Fz.e.ShadersStore[Xz] = Oz);
-     const oz = [Wz.d];
-     for (const Uz of oz) Fz.e.IncludesShadersStore[Uz.name] || (Fz.e.IncludesShadersStore[Uz.name] = Uz.shader);
+     var hv = Pv(39162),
+       Sv = Pv(41226);
+     const ev = "rgbdDecodePixelShader",
+       gv = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}";
+     hv.d.ShadersStore[ev] || (hv.d.ShadersStore[ev] = gv);
+     const pv = [Sv.c];
+     for (const Nv of pv) hv.d.IncludesShadersStore[Nv.name] || (hv.d.IncludesShadersStore[Nv.name] = Nv.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/316.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/316.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064)

#### 1. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/316.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/316.js#L4)

```diff
-   41097: (zz, tz, sz) => {
+   41226: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/316.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/316.js#L6)

```diff
-       d: () => Oz
+       c: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/316.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/316.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "bakedVertexAnimation",
-       Xz = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "helperFunctions",
+       ev = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/316.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/316.js#L17-L19)

```diff
-   41006: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Oz
+   60818: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       rgbdEncodePixelShader: () => dv
```

#### 5. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L21-L167` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/316.js#L21-L27) · [Before (L21-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/316.js#L21-L167)

```diff
-     var Fz = sz(39041);
-     const Wz = "bakedVertexAnimationDeclaration",
-       Xz = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   41001: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "bonesDeclaration",
-       Xz = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
- ... (131 more removed lines; see GitHub link above)
+     var hv = Pv(39162),
+       Sv = Pv(41226);
+     const ev = "rgbdEncodePixelShader",
+       gv = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}";
+     hv.d.ShadersStore[ev] || (hv.d.ShadersStore[ev] = gv);
+     const pv = [Sv.c];
+     for (const Nv of pv) hv.d.IncludesShadersStore[Nv.name] || (hv.d.IncludesShadersStore[Nv.name] = Nv.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/317.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/317.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9)

#### 1. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/317.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/317.js#L4)

```diff
-   41015: (zz, tz, sz) => {
+   41325: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/317.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/317.js#L6)

```diff
-       b: () => Oz
+       e: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/317.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/317.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "instancesDeclaration",
-       Xz = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bakedVertexAnimation",
+       ev = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/317.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/317.js#L17)

```diff
-   41092: (zz, tz, sz) => {
+   41236: (vv, zv, Pv) => {
```

#### 5. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/317.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/317.js#L19)

```diff
-       c: () => Oz
+       b: () => gv
```

#### 6. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/317.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/317.js#L21-L24)

```diff
-     var Fz = sz(39041);
-     const Wz = "instancesVertex",
-       Xz = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bakedVertexAnimationDeclaration",
+       ev = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 7. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L30` → after: `L30-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L30-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/317.js#L30-L147) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/317.js#L30)

```diff
-   61030: (zz, tz, sz) => {
+   41231: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "bonesDeclaration",
+       ev = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41321: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       d: () => gv
+ ... (102 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L32` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/317.js#L149) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/317.js#L32)

```diff
-       greasedLineVertexShader: () => Uz
+       colorVertexShader: () => cv
```

#### 9. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L34-L41` → after: `L151-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L151-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/317.js#L151-L167) · [Before (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/317.js#L34-L41)

```diff
-     var Fz = sz(39041),
-       Wz = sz(41015),
-       Xz = sz(41092);
-     const Oz = "greasedLineVertexShader",
-       oz = "precision highp float;\n#include<instancesDeclaration>\nattribute float grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute vec3 grl_offsets;\n#endif\nattribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;var … [truncated]
-     Fz.e.ShadersStore[Oz] || (Fz.e.ShadersStore[Oz] = oz);
-     const vz = [Wz.b, Xz.c];
-     for (const Kz of vz) Fz.e.IncludesShadersStore[Kz.name] || (Fz.e.IncludesShadersStore[Kz.name] = Kz.shader);
+     var hv = Pv(39162),
+       Sv = Pv(41231),
+       ev = Pv(41236),
+       gv = Pv(41267),
+       pv = Pv(41271),
+       dv = Pv(41244),
+       Nv = Pv(41313),
+       lv = Pv(41321),
+       Tv = Pv(41325),
+       Wv = Pv(41355),
+       wv = Pv(41360),
+       av = Pv(41373);
+     const sv = "colorVertexShader",
+       Cv = "attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#ifdef FOG\nuniform mat4 view;\n#endif\n#include<i … [truncated]
+     hv.d.ShadersStore[sv] || (hv.d.ShadersStore[sv] = Cv);
+     const iv = [Sv.b, ev.b, gv.c, pv.c, dv.b, Nv.e, lv.d, Tv.e, Wv.c, wv.b, av.c];
+ ... (1 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/318.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/318.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c)

#### 1. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/318.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/318.js#L4)

```diff
-   41114: (zz, tz, sz) => {
+   41244: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/318.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/318.js#L6)

```diff
-       e: () => Oz
+       b: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/318.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/318.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "bumpVertex",
-       Xz = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "instancesDeclaration",
+       ev = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/318.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/318.js#L17)

```diff
-   41030: (zz, tz, sz) => {
+   41313: (vv, zv, Pv) => {
```

#### 5. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/318.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/318.js#L21-L24)

```diff
-     var Fz = sz(39041);
-     const Wz = "bumpVertexDeclaration",
-       Xz = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "instancesVertex",
+       ev = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 6. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L30-L32` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/318.js#L30-L32) · [Before (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/318.js#L30-L32)

```diff
-   60689: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Oz
+   61315: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       greasedLineVertexShader: () => Nv
```

#### 7. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L34-L122` → after: `L34-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/318.js#L34-L41) · [Before (L34-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/318.js#L34-L122)

```diff
-     var Fz = sz(39041);
-     const Wz = "harmonicsFunctions",
-       Xz = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   60685: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "pbrBRDFFunctions",
-       Xz = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
- ... (73 more removed lines; see GitHub link above)
+     var hv = Pv(39162),
+       Sv = Pv(41244),
+       ev = Pv(41313);
+     const gv = "greasedLineVertexShader",
+       pv = "precision highp float;\n#include<instancesDeclaration>\nattribute float grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute vec3 grl_offsets;\n#endif\nattribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;var … [truncated]
+     hv.d.ShadersStore[gv] || (hv.d.ShadersStore[gv] = pv);
+     const dv = [Sv.b, ev.e];
+     for (const lv of dv) hv.d.IncludesShadersStore[lv.name] || (hv.d.IncludesShadersStore[lv.name] = lv.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/319.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/319.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9)

#### 1. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/319.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/319.js#L4)

```diff
-   41122: (zz, tz, sz) => {
+   41346: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/319.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/319.js#L6)

```diff
-       e: () => Oz
+       c: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/319.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/319.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "clipPlaneVertex",
-       Xz = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bumpVertex",
+       ev = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/319.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/319.js#L17)

```diff
-   41034: (zz, tz, sz) => {
+   41264: (vv, zv, Pv) => {
```

#### 5. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/319.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/319.js#L19)

```diff
-       c: () => Oz
+       e: () => gv
```

#### 6. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/319.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/319.js#L21-L24)

```diff
-     var Fz = sz(39041);
-     const Wz = "clipPlaneVertexDeclaration",
-       Xz = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bumpVertexDeclaration",
+       ev = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 7. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/319.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/319.js#L30)

```diff
-   41127: (zz, tz, sz) => {
+   60951: (vv, zv, Pv) => {
```

#### 8. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/319.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/319.js#L34-L37)

```diff
-     var Fz = sz(39041);
-     const Wz = "fogVertex",
-       Xz = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "harmonicsFunctions",
+       ev = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 9. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/319.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/319.js#L43)

```diff
-   41041: (zz, tz, sz) => {
+   60949: (vv, zv, Pv) => {
```

#### 10. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/319.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/319.js#L47-L50)

```diff
-     var Fz = sz(39041);
-     const Wz = "fogVertexDeclaration",
-       Xz = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "pbrBRDFFunctions",
+       ev = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 11. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/319.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/319.js#L56)

```diff
-   41072: (zz, tz, sz) => {
+   60943: (vv, zv, Pv) => {
```

#### 12. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/319.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/319.js#L58)

```diff
-       c: () => Oz
+       e: () => gv
```

#### 13. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L60-L63` → after: `L60-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/319.js#L60-L64) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/319.js#L60-L63)

```diff
-     var Fz = sz(39041);
-     const Wz = "logDepthDeclaration",
-       Xz = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     Pv(41199), Pv(41207);
+     const Sv = "pbrUboDeclaration",
+       ev = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 14. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L69-L71` → after: `L70-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/319.js#L70-L72) · [Before (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/319.js#L69-L71)

```diff
-   41148: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Oz
+   60940: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       pbrVertexShader: () => ov
```

#### 15. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L73-L76` → after: `L74-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L74-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/319.js#L74-L78) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/319.js#L73-L76)

```diff
-     var Fz = sz(39041);
-     const Wz = "logDepthVertex",
-       Xz = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162),
+       Sv = Pv(41197);
+     const ev = "pbrVertexDeclaration",
+       gv = "uniform mat4 view;uniform mat4 viewProjection;uniform vec4 vEyePosition;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif\n#ifdef ALBEDO\nuniform mat4 albedoMatrix;uniform vec2 vAlbedoInfos;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBase … [truncated]
+     hv.d.IncludesShadersStore[ev] || (hv.d.IncludesShadersStore[ev] = gv);
```

#### 16. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L80-L97` → after: `L82-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L82-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/319.js#L82-L122) · [Before (L80-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/319.js#L80-L97)

```diff
-     }
-   },
-   60364: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       particlesVertexShader: () => bz
-     });
-     var Fz = sz(39041),
-       Wz = sz(41034),
-       Xz = sz(41041),
-       Oz = sz(41072),
-       oz = sz(41122),
-       vz = sz(41127),
-       Uz = sz(41148);
-     const Kz = "particlesVertexShader",
-       uz = "attribute vec3 position;attribute vec4 color;attribute float angle;attribute vec2 size;\n#ifdef ANIMATESHEET\nattribute float cellIndex;\n#endif\n#ifndef BILLBOARD\nattribute vec3 direction;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute vec3 direction;\n#endif\n#ifdef … [truncated]
-     Fz.e.ShadersStore[Kz] || (Fz.e.ShadersStore[Kz] = uz);
- ... (2 more removed lines; see GitHub link above)
+     };
+     var dv = Pv(41199),
+       Nv = Pv(41207),
+       lv = Pv(60943),
+       Tv = Pv(41218),
+       Wv = Pv(41258),
+       wv = Pv(41226),
+       av = Pv(60949),
+       sv = Pv(41231),
+       Cv = Pv(41236),
+       iv = Pv(41244),
+       cv = Pv(41252),
+       Gv = Pv(41262),
+       mv = Pv(60951),
+       jv = Pv(41264),
+       fv = Pv(41267),
+ ... (25 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/320.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/320.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d)

#### 1. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L4)

```diff
-   41122: (zz, tz, sz) => {
+   41355: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L6)

```diff
-       e: () => Oz
+       c: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L8)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 4. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L11)

```diff
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 5. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L17)

```diff
-   41034: (zz, tz, sz) => {
+   41267: (vv, zv, Pv) => {
```

#### 6. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L21)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 7. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L24)

```diff
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 8. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L30)

```diff
-   41127: (zz, tz, sz) => {
+   41360: (vv, zv, Pv) => {
```

#### 9. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L34)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 10. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L37)

```diff
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 11. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L43)

```diff
-   41041: (zz, tz, sz) => {
+   41271: (vv, zv, Pv) => {
```

#### 12. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L45)

```diff
-       b: () => Oz
+       c: () => gv
```

#### 13. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L47)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 14. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L50)

```diff
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 15. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L56)

```diff
-   41072: (zz, tz, sz) => {
+   41297: (vv, zv, Pv) => {
```

#### 16. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L58)

```diff
-       c: () => Oz
+       e: () => gv
```

#### 17. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L60)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 18. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L63)

```diff
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 19. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L69)

```diff
-   41148: (zz, tz, sz) => {
+   41377: (vv, zv, Pv) => {
```

#### 20. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L71)

```diff
-       d: () => Oz
+       b: () => gv
```

#### 21. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L73)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 22. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L76` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L76) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L76)

```diff
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 23. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L82)

```diff
-   60377: (zz, tz, sz) => {
+   60624: (vv, zv, Pv) => {
```

#### 24. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L84)

```diff
-       skyVertexShader: () => bz
+       particlesVertexShader: () => wv
```

#### 25. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L86-L97` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/320.js#L86-L97) · [Before (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/320.js#L86-L97)

```diff
-     var Fz = sz(39041),
-       Wz = sz(41072),
-       Xz = sz(41034),
-       Oz = sz(41041),
-       oz = sz(41122),
-       vz = sz(41148),
-       Uz = sz(41127);
-     const Kz = "skyVertexShader",
-       uz = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvary … [truncated]
-     Fz.e.ShadersStore[Kz] || (Fz.e.ShadersStore[Kz] = uz);
-     const Nz = [Wz.c, Xz.c, Oz.b, oz.e, vz.d, Uz.b];
-     for (const wz of Nz) Fz.e.IncludesShadersStore[wz.name] || (Fz.e.IncludesShadersStore[wz.name] = wz.shader);
+     var hv = Pv(39162),
+       Sv = Pv(41267),
+       ev = Pv(41271),
+       gv = Pv(41297),
+       pv = Pv(41355),
+       dv = Pv(41360),
+       Nv = Pv(41377);
+     const lv = "particlesVertexShader",
+       Tv = "attribute vec3 position;attribute vec4 color;attribute float angle;attribute vec2 size;\n#ifdef ANIMATESHEET\nattribute float cellIndex;\n#endif\n#ifndef BILLBOARD\nattribute vec3 direction;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute vec3 direction;\n#endif\n#ifdef … [truncated]
+     hv.d.ShadersStore[lv] || (hv.d.ShadersStore[lv] = Tv);
+     const Wv = [Sv.c, ev.c, gv.e, pv.c, dv.b, Nv.b];
+     for (const av of Wv) hv.d.IncludesShadersStore[av.name] || (hv.d.IncludesShadersStore[av.name] = av.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/321.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/321.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49)

#### 1. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/321.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/321.js#L4)

```diff
-   41252: (zz, tz, sz) => {
+   41355: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/321.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/321.js#L6)

```diff
-       b: () => Oz
+       c: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/321.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/321.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "bumpFragment",
-       Xz = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "clipPlaneVertex",
+       ev = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/321.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/321.js#L17)

```diff
-   41232: (zz, tz, sz) => {
+   41267: (vv, zv, Pv) => {
```

#### 5. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/321.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/321.js#L19)

```diff
-       d: () => Oz
+       c: () => gv
```

#### 6. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L21-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/321.js#L21-L24) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/321.js#L21-L25)

```diff
-     var Fz = sz(39041);
-     sz(41207);
-     const Wz = "bumpFragmentFunctions",
-       Xz = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "clipPlaneVertexDeclaration",
+       ev = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 7. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/321.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/321.js#L31)

```diff
-   41230: (zz, tz, sz) => {
+   41360: (vv, zv, Pv) => {
```

#### 8. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L33` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/321.js#L32) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/321.js#L33)

```diff
-       c: () => Oz
+       b: () => gv
```

#### 9. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/321.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/321.js#L35-L38)

```diff
-     var Fz = sz(39041);
-     const Wz = "bumpFragmentMainFunctions",
-       Xz = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "fogVertex",
+       ev = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 10. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/321.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/321.js#L44)

```diff
-   41198: (zz, tz, sz) => {
+   41271: (vv, zv, Pv) => {
```

#### 11. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L46` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/321.js#L45) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/321.js#L46)

```diff
-       d: () => Oz
+       c: () => gv
```

#### 12. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/321.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/321.js#L48-L51)

```diff
-     var Fz = sz(39041);
-     const Wz = "clusteredLightingFunctions",
-       Xz = "struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};\n#define inline\nClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(\ntexelFetch(lightDataTexture,ivec2( … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "fogVertexDeclaration",
+       ev = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 13. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L57` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/321.js#L56) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/321.js#L57)

```diff
-   41256: (zz, tz, sz) => {
+   41297: (vv, zv, Pv) => {
```

#### 14. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L59` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/321.js#L58) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/321.js#L59)

```diff
-       b: () => Oz
+       e: () => gv
```

#### 15. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L61-L64` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/321.js#L60-L63) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/321.js#L61-L64)

```diff
-     var Fz = sz(39041);
-     const Wz = "decalFragment",
-       Xz = "#ifdef DECAL\n#ifdef GAMMADECAL\ndecalColor.rgb=toLinearSpace(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalColor.a*=decalColor.a;\n#endif\nsurfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);\n#endif\n";
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "logDepthDeclaration",
+       ev = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 16. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L70` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/321.js#L69) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/321.js#L70)

```diff
-   41263: (zz, tz, sz) => {
+   41377: (vv, zv, Pv) => {
```

#### 17. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L74-L77` → after: `L73-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L73-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/321.js#L73-L97) · [Before (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/321.js#L74-L77)

```diff
-     var Fz = sz(39041);
-     const Wz = "lightFragment",
-       Xz = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvec4 diffuse{X}=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X}) && defined(CLUST … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "logDepthVertex",
+       ev = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   60635: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       skyVertexShader: () => wv
+     });
+     var hv = Pv(39162),
+       Sv = Pv(41297),
+       ev = Pv(41267),
+ ... (9 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/322.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/322.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c)

#### 1. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/322.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/322.js#L4)

```diff
-   41248: (zz, tz, sz) => {
+   41500: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/322.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/322.js#L6)

```diff
-       e: () => Oz
+       d: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/322.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/322.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "clipPlaneFragment",
-       Xz = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bumpFragment",
+       ev = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/322.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/322.js#L17)

```diff
-   41238: (zz, tz, sz) => {
+   41472: (vv, zv, Pv) => {
```

#### 5. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L21-L24` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/322.js#L21-L25) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/322.js#L21-L24)

```diff
-     var Fz = sz(39041);
-     const Wz = "clipPlaneFragmentDeclaration",
-       Xz = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     Pv(41446);
+     const Sv = "bumpFragmentFunctions",
+       ev = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 6. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L30` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/322.js#L31) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/322.js#L30)

```diff
-   41277: (zz, tz, sz) => {
+   41469: (vv, zv, Pv) => {
```

#### 7. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L32` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/322.js#L33) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/322.js#L32)

```diff
-       e: () => Oz
+       d: () => gv
```

#### 8. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L34-L37` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/322.js#L35-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/322.js#L34-L37)

```diff
-     var Fz = sz(39041);
-     const Wz = "fogFragment",
-       Xz = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bumpFragmentMainFunctions",
+       ev = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 9. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L43` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/322.js#L44) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/322.js#L43)

```diff
-   41242: (zz, tz, sz) => {
+   41430: (vv, zv, Pv) => {
```

#### 10. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L45` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/322.js#L46) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/322.js#L45)

```diff
-       e: () => Oz
+       b: () => gv
```

#### 11. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L47-L50` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/322.js#L48-L51) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/322.js#L47-L50)

```diff
-     var Fz = sz(39041);
-     const Wz = "fogFragmentDeclaration",
-       Xz = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
-     Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "clusteredLightingFunctions",
+       ev = "struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};\n#define inline\nClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(\ntexelFetch(lightDataTexture,ivec2( … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 12. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L56-L58` → after: `L57-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/322.js#L57-L59) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/322.js#L56-L58)

```diff
-   41644: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       colorPixelShader: () => uz
+   41503: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => gv
```

#### 13. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L60-L69` → after: `L61-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L61-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/322.js#L61-L77) · [Before (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/322.js#L60-L69)

```diff
-     var Fz = sz(39041),
-       Wz = sz(41238),
-       Xz = sz(41242),
-       Oz = sz(41248),
-       oz = sz(41277);
-     const vz = "colorPixelShader",
-       Uz = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoi … [truncated]
-     Fz.e.ShadersStore[vz] || (Fz.e.ShadersStore[vz] = Uz);
-     const Kz = [Wz.b, Xz.e, Oz.e, oz.e];
-     for (const Nz of Kz) Fz.e.IncludesShadersStore[Nz.name] || (Fz.e.IncludesShadersStore[Nz.name] = Nz.shader);
+     var hv = Pv(39162);
+     const Sv = "decalFragment",
+       ev = "#ifdef DECAL\n#ifdef GAMMADECAL\ndecalColor.rgb=toLinearSpace(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalColor.a*=decalColor.a;\n#endif\nsurfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);\n#endif\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41518: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       d: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "lightFragment",
+       ev = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvec4 diffuse{X}=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X}) && defined(CLUST … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/323.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/323.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3)

#### 1. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/323.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/323.js#L4)

```diff
-   41429: (zz, tz, sz) => {
+   41493: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/323.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/323.js#L6)

```diff
-       e: () => Oz
+       c: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/323.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/323.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "bumpVertex",
-       Xz = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "clipPlaneFragment",
+       ev = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/323.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/323.js#L17)

```diff
-   41342: (zz, tz, sz) => {
+   41478: (vv, zv, Pv) => {
```

#### 5. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/323.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/323.js#L19)

```diff
-       c: () => Oz
+       d: () => gv
```

#### 6. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/323.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/323.js#L21-L24)

```diff
-     var Fz = sz(39041);
-     const Wz = "bumpVertexDeclaration",
-       Xz = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "clipPlaneFragmentDeclaration",
+       ev = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 7. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/323.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/323.js#L30)

```diff
-   41301: (zz, tz, sz) => {
+   41526: (vv, zv, Pv) => {
```

#### 8. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/323.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/323.js#L32)

```diff
-       d: () => Oz
+       b: () => gv
```

#### 9. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L34-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/323.js#L34-L37) · [Before (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/323.js#L34-L38)

```diff
-     var Fz = sz(39041);
-     sz(41290), sz(41292);
-     const Wz = "defaultUboDeclaration",
-       Xz = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "fogFragment",
+       ev = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 10. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/323.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/323.js#L44)

```diff
-   41314: (zz, tz, sz) => {
+   41487: (vv, zv, Pv) => {
```

#### 11. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L46` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/323.js#L45) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/323.js#L46)

```diff
-       e: () => Oz
+       b: () => gv
```

#### 12. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/323.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/323.js#L48-L51)

```diff
-     var Fz = sz(39041);
-     const Wz = "helperFunctions",
-       Xz = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "fogFragmentDeclaration",
+       ev = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     hv.d.IncludesShadersStore[Sv] || (hv.d.IncludesShadersStore[Sv] = ev);
```

#### 13. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L57-L59` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/323.js#L56-L58) · [Before (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/323.js#L57-L59)

```diff
-   41290: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Oz
+   41887: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       colorPixelShader: () => Tv
```

#### 14. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L61-L120` → after: `L60-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/323.js#L60-L69) · [Before (L61-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/323.js#L61-L120)

```diff
-     var Fz = sz(39041);
-     const Wz = "sceneUboDeclaration",
-       Xz = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   41286: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       defaultVertexShaderWGSL: () => az
-     });
-     var Fz = sz(39041),
-       Wz = sz(41290),
-       Xz = sz(41292),
- ... (44 more removed lines; see GitHub link above)
+     var hv = Pv(39162),
+       Sv = Pv(41478),
+       ev = Pv(41487),
+       gv = Pv(41493),
+       pv = Pv(41526);
+     const dv = "colorPixelShader",
+       Nv = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoi … [truncated]
+     hv.d.ShadersStore[dv] || (hv.d.ShadersStore[dv] = Nv);
+     const lv = [Sv.d, ev.b, gv.c, pv.b];
+     for (const Wv of lv) hv.d.IncludesShadersStore[Wv.name] || (hv.d.IncludesShadersStore[Wv.name] = Wv.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/324.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/324.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2)

#### 1. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/324.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/324.js#L4)

```diff
-   41326: (zz, tz, sz) => {
+   41703: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/324.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/324.js#L6)

```diff
-       c: () => Oz
+       d: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/324.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/324.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "instancesDeclaration",
-       Xz = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bumpVertex",
+       ev = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/324.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/324.js#L17)

```diff
-   41396: (zz, tz, sz) => {
+   41604: (vv, zv, Pv) => {
```

#### 5. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/324.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/324.js#L21-L24)

```diff
-     var Fz = sz(39041);
-     const Wz = "instancesVertex",
-       Xz = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bumpVertexDeclaration",
+       ev = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 6. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/324.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/324.js#L30)

```diff
-   41292: (zz, tz, sz) => {
+   41557: (vv, zv, Pv) => {
```

#### 7. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/324.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/324.js#L32)

```diff
-       b: () => Oz
+       e: () => gv
```

#### 8. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L34-L37` → after: `L34-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/324.js#L34-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/324.js#L34-L37)

```diff
-     var Fz = sz(39041);
-     const Wz = "meshUboDeclaration",
-       Xz = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     Pv(41541), Pv(41550);
+     const Sv = "defaultUboDeclaration",
+       ev = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 9. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L43` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/324.js#L44) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/324.js#L43)

```diff
-   41290: (zz, tz, sz) => {
+   41572: (vv, zv, Pv) => {
```

#### 10. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L47-L50` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/324.js#L48-L51) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/324.js#L47-L50)

```diff
-     var Fz = sz(39041);
-     const Wz = "sceneUboDeclaration",
-       Xz = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "helperFunctions",
+       ev = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 11. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L56` → after: `L57-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L57-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/324.js#L57-L70) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/324.js#L56)

```diff
-   61021: (zz, tz, sz) => {
+   41541: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "sceneUboDeclaration",
+       ev = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41536: (vv, zv, Pv) => {
```

#### 12. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L58` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/324.js#L72) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/324.js#L58)

```diff
-       greasedLineVertexShaderWGSL: () => uz
+       defaultVertexShaderWGSL: () => Jv
```

#### 13. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L60-L69` → after: `L74-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L74-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/324.js#L74-L120) · [Before (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/324.js#L60-L69)

```diff
-     var Fz = sz(39041),
-       Wz = sz(41326),
-       Xz = sz(41290),
-       Oz = sz(41292),
-       oz = sz(41396);
-     const vz = "greasedLineVertexShader",
-       Uz = "#include<instancesDeclaration>\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\nattribute grl_widths: f32;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute grl_offsets: vec3f; \n#endif\nattribute grl_colorPointers: f32;attribute position: vec3f;varying grlCoun … [truncated]
-     Fz.e.ShadersStoreWGSL[vz] || (Fz.e.ShadersStoreWGSL[vz] = Uz);
-     const Kz = [Wz.c, Xz.c, Oz.b, oz.b];
-     for (const Nz of Kz) Fz.e.IncludesShadersStoreWGSL[Nz.name] || (Fz.e.IncludesShadersStoreWGSL[Nz.name] = Nz.shader);
+     var hv = Pv(39162),
+       Sv = Pv(41541),
+       ev = Pv(41550),
+       gv = Pv(41557),
+       pv = Pv(41564),
+       dv = Pv(41572),
+       Nv = Pv(41579),
+       lv = Pv(41585),
+       Tv = Pv(41587),
+       Wv = Pv(41591),
+       wv = Pv(41596),
+       av = Pv(41601),
+       sv = Pv(41604),
+       Cv = Pv(41613),
+       iv = Pv(41618);
+     const cv = "lightVxFragmentDeclaration",
+ ... (31 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/325.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/325.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5)

#### 1. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/325.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/325.js#L4)

```diff
-   41301: (zz, tz, sz) => {
+   41587: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/325.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/325.js#L6)

```diff
-       d: () => Oz
+       b: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L8-L12` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/325.js#L8-L11) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/325.js#L8-L12)

```diff
-     var Fz = sz(39041);
-     sz(41290), sz(41292);
-     const Wz = "defaultUboDeclaration",
-       Xz = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "instancesDeclaration",
+       ev = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L18` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/325.js#L17) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/325.js#L18)

```diff
-   41314: (zz, tz, sz) => {
+   41677: (vv, zv, Pv) => {
```

#### 5. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L20` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/325.js#L19) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/325.js#L20)

```diff
-       e: () => Oz
+       b: () => gv
```

#### 6. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L22-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/325.js#L21-L24) · [Before (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/325.js#L22-L25)

```diff
-     var Fz = sz(39041);
-     const Wz = "helperFunctions",
-       Xz = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "instancesVertex",
+       ev = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 7. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/325.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/325.js#L31)

```diff
-   41290: (zz, tz, sz) => {
+   41550: (vv, zv, Pv) => {
```

#### 8. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/325.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/325.js#L35-L38)

```diff
-     var Fz = sz(39041);
-     const Wz = "sceneUboDeclaration",
-       Xz = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "meshUboDeclaration",
+       ev = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 9. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L44-L46` → after: `L43-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/325.js#L43-L45) · [Before (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/325.js#L44-L46)

```diff
-   41466: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       defaultPixelShaderWGSL: () => fz
+   41541: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => gv
```
