# Changed — Bundle Modifications Report (Part 022 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `22 / 82` (**279** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 021](part-021.md) · [Part 023 →](part-023.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/301.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/301.js` (474 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad)

#### 101. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1645-L1712` → after: `L3351-L3387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3351-L3387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L3351-L3387) · [Before (L1645-L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1645-L1712)

```diff
-     function ib(ee) {
-       let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-         He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
-       const ye = function(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
-         const He = "none" !== ee.texture,
-           ye = "atlas" === ee.texture,
-           be = ee.dirLightCount > 0,
-           Me = ay(ee);
-         if (ee.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${ee.dirLightCount}`);
-         let Ke = 1,
-           Ue = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
-         if (ye) {
-           ee.animated && (Ue += `@group(2) @binding(${Ke++}) var<storage, read> animDataPerTex: array<f32>;\n`), Ue += `@group(2) @binding(${Ke++}) var atlasSampler: sampler;\n`;
-           for (let ie = 0; ie < ee.atlasCount; ie++) Ue += `@group(2) @binding(${Ke++}) var textureAtlas${ie}: texture_2d_array<f32>;\n`
-         } else "single" === ee.texture && (Ue += `@group(2) @binding(${Ke++}) var diffuseSamplerSampler: sampler;\n`, Ue += `@group(2) @binding(${Ke++}) var diffuseSampler: texture_2d<f32>;\n`);
- ... (52 more removed lines; see GitHub link above)
+     function mm(WW, iW, OW, mW) {
+       const {
+         doc: EW,
+         hackCss: NW,
+         cache: PW
+       } = mW;
+       WW.childNodes.length ? function(WW, iW, OW, mW) {
+         const EW = [];
+         for (const tW of WW.childNodes) tW.type === cW.Text && EW.push(tW);
+         const NW = iW.split("/* rr_split */");
+         for (; NW.length > 1 && NW.length > EW.length;) NW.splice(-2, 2, NW.slice(-2).join(""));
+         let PW = "";
+         OW && (PW = FO(NW.join(""), mW));
+         let LW = 0,
+           wW = -1;
+         for (let cW = 0; cW < EW.length && cW !== NW.length; cW++) {
+ ... (21 more added lines; see GitHub link above)
```

#### 102. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1715-L1738` → after: `L3390-L3614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3390-L3614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L3390-L3614) · [Before (L1715-L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1715-L1738)

```diff
-       const He = new Map;
-       let ye = 0;
-       const be = [],
-         Me = [],
-         Ke = [];
-       for (const Je of ie) {
-         var Ue, Fe;
-         const ie = null !== (Ue = Je.type.trim().split(/\s+/).pop()) && void 0 !== Ue ? Ue : Je.type,
-           oe = Hb.get(ie);
-         if (!oe) throw new Error(`Lite: no uniform layout for ${Je.name}: ${Je.type}`);
-         const Re = null !== (Fe = Je.arraySize) && void 0 !== Fe ? Fe : 0,
-           ke = Re ? 4 : oe.align;
-         ye = Math.ceil(ye / ke) * ke;
-         const qe = Re ? 4 * Math.ceil(oe.floats / 4) : oe.floats;
-         if (He.set(Je.name, {
-             offset: ye,
- ... (8 more removed lines; see GitHub link above)
+       var OW;
+       const {
+         doc: mW,
+         hackCss: EW,
+         cache: NW
+       } = iW;
+       switch (WW.type) {
+         case cW.Document:
+           return mW.implementation.createDocument(null, "", null);
+         case cW.DocumentType:
+           return mW.implementation.createDocumentType(WW.name || "html", WW.publicId, WW.systemId);
+         case cW.Element: {
+           const EW = function(WW) {
+             let iW = zO[WW.tagName] ? zO[WW.tagName] : WW.tagName;
+             return "link" === iW && WW.attributes._cssText && (iW = "style"), iW
+           }(WW);
+ ... (209 more added lines; see GitHub link above)
```

#### 103. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1740-L1744` → after: `L3616-L3617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3616-L3617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L3616-L3617) · [Before (L1740-L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1740-L1744)

```diff
-       return {
-         slots: He,
-         floats: Math.max(4, 4 * Math.ceil(ye / 4)),
-         wgsl: `${Me.join("\n")}\nstruct ${ee} {\n${be.join("\n")}\n}\n`,
-         stridedArrays: Ke
+       reset() {
+         this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
```

#### 104. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1790-L1791` → after: `L3625-L3644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3625-L3644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L3625-L3644) · [Before (L1790-L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1790-L1791)

```diff
-     function Ub(ee, ie) {
-       return `#if defined(${ee}) && ${ee}DIRECTUV == 0\nvarying v${ie}UV: vec2f;\n#endif`
+     function lm(WW) {
+       if (WW.__esModule) return WW;
+       var iW = WW.default;
+       if ("function" == typeof iW) {
+         var OW = function WW() {
+           return this instanceof WW ? Reflect.construct(iW, arguments, this.constructor) : iW.apply(this, arguments)
+         };
+         OW.prototype = iW.prototype
+       } else OW = {};
+       return Object.defineProperty(OW, "__esModule", {
+         value: !0
+       }), Object.keys(WW).forEach((function(iW) {
+         var mW = Object.getOwnPropertyDescriptor(WW, iW);
+         Object.defineProperty(OW, iW, mW.get ? mW : {
+           enumerable: !0,
+           get: function() {
+ ... (4 more added lines; see GitHub link above)
```

#### 105. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1794-L1795` → after: `L3650-L3684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3650-L3684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L3650-L3684) · [Before (L1794-L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1794-L1795)

```diff
-     function Fb(ee, ie, He) {
-       return `#if defined(${ee}) && ${ee}DIRECTUV == 0\nif (uniforms.v${ie}Infos.x==0.)\n{vertexOutputs.v${ie}UV= (uniforms.${He}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${ie}UV= (uniforms.${He}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
+     function jm() {
+       if (Am) return bm.exports;
+       Am = 1;
+       var WW = String,
+         iW = function() {
+           return {
+             isColorSupported: !1,
+             reset: WW,
+             bold: WW,
+             dim: WW,
+             italic: WW,
+             underline: WW,
+             inverse: WW,
+             hidden: WW,
+             strikethrough: WW,
+             black: WW,
+ ... (19 more added lines; see GitHub link above)
```

#### 106. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1798-L1799` → after: `L3694-L3737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3694-L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L3694-L3737) · [Before (L1798-L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1798-L1799)

```diff
-     function Jb(ee, ie, He) {
-       return `#ifdef ${ee}\n#if ${ee}DIRECTUV == 1\n#define v${ie}UV vMainUV1\n#elif ${ee}DIRECTUV == 2\n#define v${ie}UV vMainUV2\n#else\nvarying v${ie}UV: vec2f;\n#endif\nvar ${He}SamplerSampler: sampler;\nvar ${He}Sampler: texture_2d<f32>;\n#endif`
+     function Mm() {
+       if (sm) return km;
+       sm = 1;
+       let WW = jm(),
+         iW = Um;
+       class OW extends Error {
+         constructor(WW, iW, mW, EW, NW, PW) {
+           super(WW), this.name = "CssSyntaxError", this.reason = WW, NW && (this.file = NW), EW && (this.source = EW), PW && (this.plugin = PW), "undefined" !== typeof iW && "undefined" !== typeof mW && ("number" === typeof iW ? (this.line = iW, this.column = mW) : (this.line = i … [truncated]
+         }
+         setMessage() {
+           this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
+         }
+         showSourceCode(OW) {
+           if (!this.source) return "";
+           let mW = this.source;
+           null == OW && (OW = WW.isColorSupported), iW && OW && (mW = iW(mW));
+ ... (28 more added lines; see GitHub link above)
```

#### 107. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1801-L1848` → after: `L3739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L3739) · [Before (L1801-L1848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1801-L1848)

```diff
-     const ob = {
-         lights: 0,
-         lightStride: 12,
-         fogInfos: 96,
-         fogColour: 100,
-         outputHeight: 103,
-         animTick: 104,
-         timeMs: 105
-       },
-       Rb = 256,
-       kb = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) … [truncated]
-       qb = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
-       fb = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
-       Tb = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertex … [truncated]
-       pb = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
-       Xb = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogC … [truncated]
- ... (32 more removed lines; see GitHub link above)
+     var Km, Sm, Ym, ym, Tm, Jm, hm, Hm, nm, um, om, dm, em, gm, Dm, Vm, pm, fm, Cm, Xm, Bm, qm, Rm, Gm, Im, am, rm, zm, Fm, Qm, WE, iE, OE, mE, EE, NE, PE, LE, cE, wE, tE, ZE, xE, lE, AE, bE, jE, UE, kE, sE, ME, KE, SE, YE = {};
```

#### 108. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1850-L1851` → after: `L3741-L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3741-L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L3741-L3742) · [Before (L1850-L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1850-L1851)

```diff
-     function db(ee) {
-       Ob.has(ee) || (Ob.add(ee), console.warn(`Lite: no place for plugin code at ${ee} in the standard shader: it is left out`))
+     function yE() {
+       return Km || (Km = 1, YE.isClean = Symbol("isClean"), YE.my = Symbol("my")), YE
```

#### 109. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1854-L1866` → after: `L3745-L3772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3745-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L3745-L3772) · [Before (L1854-L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1854-L1866)

```diff
-     function Wb(ee, ie) {
-       let He = ee;
-       const ye = new Map;
-       for (const [Me, Ke] of ie) {
-         var be;
-         ye.set(Me, `${null!==(be=ye.get(Me))&&void 0!==be?be:""}${Ke}\n`)
-       }
-       for (const [Me, Ke] of ye) {
-         if (!Me.startsWith("!")) {
-           const ee = `#define ${Me}`;
-           if (!He.includes(ee)) {
-             db(Me);
-             continue
+     function TE() {
+       if (Ym) return Sm;
+       Ym = 1;
+       const WW = {
+         after: "\n",
+         beforeClose: "\n",
+         beforeComment: "\n",
+         beforeDecl: "\n",
+         beforeOpen: " ",
+         beforeRule: "\n",
+         colon: ": ",
+         commentLeft: " ",
+         commentRight: " ",
+         emptyBody: "",
+         indent: "    ",
+         semicolon: !1
+ ... (12 more added lines; see GitHub link above)
```

#### 110. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1871-L1876` → after: `L3775-L3786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3775-L3786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L3775-L3786) · [Before (L1871-L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1871-L1876)

```diff
-         let ee = Me.substring(1),
-           ie = "g";
-         if (ee.startsWith("!")) ie = "", ee = ee.substring(1);
-         else {
-           const He = gb.exec(ee);
-           He && (ie = He[1], ee = ee.substring(ie.length + 1))
+         beforeAfter(WW, iW) {
+           let OW;
+           OW = "decl" === WW.type ? this.raw(WW, null, "beforeDecl") : "comment" === WW.type ? this.raw(WW, null, "beforeComment") : "before" === iW ? this.raw(WW, null, "beforeRule") : this.raw(WW, null, "beforeClose");
+           let mW = WW.parent,
+             EW = 0;
+           for (; mW && "root" !== mW.type;) EW += 1, mW = mW.parent;
+           if (OW.includes("\n")) {
+             let iW = this.raw(WW, null, "indent");
+             if (iW.length)
+               for (let WW = 0; WW < EW; WW++) OW += iW
+           }
+           return OW
```

#### 111. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1878-L1883` → after: `L3788-L3908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3788-L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L3788-L3908) · [Before (L1878-L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1878-L1883)

```diff
-         const ye = new RegExp(ee, ie.includes("g") ? ie : `${ie}g`);
-         let be = ye.exec(He);
-         for (be || db(Me); be;) {
-           const ee = be,
-             ie = Ke.replace(/\$(\d+)/g, ((ie, He) => Number(He) < ee.length ? ee[Number(He)] : ""));
-           He = He.substring(0, ee.index) + ie + He.substring(ee.index + ee[0].length), ye.lastIndex = ee.index + ie.length, be = ye.exec(He)
+         block(WW, iW) {
+           let OW, mW = this.raw(WW, "between", "beforeOpen");
+           this.builder(iW + mW + "{", WW, "start"), WW.nodes && WW.nodes.length ? (this.body(WW), OW = this.raw(WW, "after")) : OW = this.raw(WW, "after", "emptyBody"), OW && this.builder(OW), this.builder("}", WW, "end")
+         }
+         body(WW) {
+           let iW = WW.nodes.length - 1;
+           for (; iW > 0 && "comment" === WW.nodes[iW].type;) iW -= 1;
+           let OW = this.raw(WW, "semicolon");
+           for (let mW = 0; mW < WW.nodes.length; mW++) {
+             let EW = WW.nodes[mW],
+               NW = this.raw(EW, "before");
+             NW && this.builder(NW), this.stringify(EW, iW !== mW || OW)
+           }
+         }
+         comment(WW) {
+           let iW = this.raw(WW, "left", "commentLeft"),
+ ... (105 more added lines; see GitHub link above)
```

#### 112. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1886` → after: `L3911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L3911) · [Before (L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1886)

```diff
-       return He
+       return Sm = iW, iW.default = iW, Sm
```

#### 113. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1892-L1915` → after: `L3914-L3922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3914-L3922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L3914-L3922) · [Before (L1892-L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1892-L1915)

```diff
-     function Db(ee) {
-       const ie = {
-         attributes: [],
-         varyings: [],
-         uniforms: [],
-         textures: [],
-         samplers: new Set,
-         body: ""
-       };
-       let He = ee.replace(tb, ((ee, He, ye, be, Me, Ke) => ("attribute" === He ? ie.attributes.push({
-         name: Me,
-         type: Ke
-       }) : void 0 === He ? ie.varyings.push({
-         name: Me,
-         type: Ke,
-         interpolation: Ab(Ke, ye, be)
- ... (8 more removed lines; see GitHub link above)
+     function JE() {
+       if (Tm) return ym;
+       Tm = 1;
+       let WW = TE();
+ 
+       function iW(iW, OW) {
+         new WW(OW).stringify(iW)
+       }
+       return ym = iW, iW.default = iW, ym
```

#### 114. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1918-L1928` → after: `L3925-L4144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3925-L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L3925-L4144) · [Before (L1918-L1928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1918-L1928)

```diff
-     function Pb(ee) {
-       const ie = ee.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
-         He = new Map([
-           ["f32", "float"],
-           ["vec2f", "vec2"],
-           ["vec3f", "vec3"],
-           ["vec4f", "vec4"],
-           ["mat4x4f", "mat4"]
-         ]).get(ie);
-       if (!He) throw new Error(`Lite: unsupported uniform type ${ee}`);
-       return He
+     function hE() {
+       if (hm) return Jm;
+       hm = 1;
+       let {
+         isClean: WW,
+         my: iW
+       } = yE(), OW = Mm(), mW = TE(), EW = JE();
+ 
+       function NW(WW, iW) {
+         let OW = new WW.constructor;
+         for (let mW in WW) {
+           if (!Object.prototype.hasOwnProperty.call(WW, mW)) continue;
+           if ("proxyCache" === mW) continue;
+           let EW = WW[mW],
+             PW = typeof EW;
+           "parent" === mW && "object" === PW ? iW && (OW[mW] = iW) : "source" === mW ? OW[mW] = EW : Array.isArray(EW) ? OW[mW] = EW.map((WW => NW(WW, OW))) : ("object" === PW && null !== EW && (EW = NW(EW)), OW[mW] = EW)
+ ... (204 more added lines; see GitHub link above)
```

#### 115. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1931-L1932` → after: `L4147-L4162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4147-L4162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4147-L4162) · [Before (L1931-L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1931-L1932)

```diff
-     function Ab(ee, ie, He) {
-       return void 0 === ie && void 0 === He ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(ee.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === ie ? "@interpolate(flat) " : `@interpolate(${null!==ie&&void 0!==ie?ie:"perspective"}, ${null!==He&&void 0!==He?He:"cente … [truncated]
+     function HE() {
+       if (nm) return Hm;
+       nm = 1;
+       let WW = hE();
+       class iW extends WW {
+         constructor(WW) {
+           WW && "undefined" !== typeof WW.value && "string" !== typeof WW.value && (WW = {
+             ...WW,
+             value: String(WW.value)
+           }), super(WW), this.type = "decl"
+         }
+         get variable() {
+           return this.prop.startsWith("--") || "$" === this.prop[0]
+         }
+       }
+       return Hm = iW, iW.default = iW, Hm
```

#### 116. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1935-L1942` → after: `L4165-L4184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4165-L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4165-L4184) · [Before (L1935-L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1935-L1942)

```diff
-     function Yb(ee) {
-       return xb({
-         defines: ee.defines,
-         vertex: Wb(Bb, ee.vertexCode),
-         fragment: Wb(Eb, ee.fragmentCode),
-         members: [...bb, ...ee.defines.has("OPACITY") ? Mb : [], ...ee.defines.has("EMISSIVE") ? Kb : [], ...ee.pluginUniforms],
-         structName: "StandardUniforms"
-       })
+     function nE() {
+       if (om) return um;
+       om = 1;
+       return um = {
+         nanoid: function() {
+           let WW = "",
+             iW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
+           for (; iW--;) WW += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
+           return WW
+         },
+         customAlphabet: function(WW) {
+           let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
+           return function() {
+             let OW = "",
+               mW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iW;
+             for (; mW--;) OW += WW[Math.random() * WW.length | 0];
+ ... (4 more added lines; see GitHub link above)
```

#### 117. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1945-L1948` → after: `L4187-L4266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4187-L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4187-L4266) · [Before (L1945-L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1945-L1948)

```diff
-     function Vb(ee) {
-       const ie = ee.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
-       if (ie === ee) throw new Error("Lite: fragment main has no return");
-       return ie
+     function uE() {
+       if (em) return dm;
+       em = 1;
+       let {
+         SourceMapConsumer: WW,
+         SourceMapGenerator: iW
+       } = Um, {
+         existsSync: OW,
+         readFileSync: mW
+       } = Um, {
+         dirname: EW,
+         join: NW
+       } = Um;
+       class PW {
+         constructor(WW, iW) {
+           if (!1 === iW.map) return;
+ ... (64 more added lines; see GitHub link above)
```

#### 118. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1953-L1999` → after: `L4269-L4406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4269-L4406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4269-L4406) · [Before (L1953-L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1953-L1999)

```diff
-     function xb(ee) {
-       const ie = ee.defines,
-         He = Db(ni(ee.vertex, ie)),
-         ye = Db(ni(ee.fragment, ie)),
-         be = new Map;
-       for (const Be of [...He.varyings, ...ye.varyings]) be.has(Be.name) || be.set(Be.name, Be);
-       const Me = [...be.values()].map(((ee, ie) => `\t@location(${ie}) ${ee.interpolation}${ee.name}: ${ee.type},`)),
-         Ke = [...ee.members];
-       for (const Be of [...He.uniforms, ...ye.uniforms]) Ke.some((ee => ee.name === Be.name)) || Ke.push(Be);
-       const Ue = yb(ee.structName, Ke),
-         Fe = [],
-         Je = [];
-       let oe = 1;
-       const Re = new Set;
-       for (const Be of [...He.textures, ...ye.textures]) {
-         if (Re.has(Be.name)) continue;
- ... (31 more removed lines; see GitHub link above)
+     function oE() {
+       if (Dm) return gm;
+       Dm = 1;
+       let {
+         SourceMapConsumer: WW,
+         SourceMapGenerator: iW
+       } = Um, {
+         fileURLToPath: OW,
+         pathToFileURL: mW
+       } = Um, {
+         isAbsolute: EW,
+         resolve: NW
+       } = Um, {
+         nanoid: PW
+       } = nE(), LW = Um, cW = Mm(), wW = uE(), tW = Symbol("fromOffsetCache"), ZW = Boolean(WW && iW), xW = Boolean(NW && EW);
+       class lW {
+ ... (122 more added lines; see GitHub link above)
```

#### 119. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2001-L2021` → after: `L4408-L4585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4408-L4585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4408-L4585) · [Before (L2001-L2021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2001-L2021)

```diff
-     const Lb = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
-       Cb = ee => ({
-         name: ee,
-         type: "vec3"
-       }),
-       vb = ee => ({
-         name: ee,
-         type: "float"
-       }),
-       ub = yb("EarthSkyUniforms", [Cb("viewFrom"), vb("exposureScale"), Cb("zenithOffset"), vb("fogOn"), Cb("up"), vb("ditherOn"), Cb("sun"), vb("turbidity"), Cb("tint"), vb("rayleigh"), Cb("sunDir"), vb("mieStrength"), Cb("inScatterR"), vb("mieFocus"), Cb("inScatterM"), vb("sunE … [truncated]
-       mb = `${uy}\n${kb}\n${ub.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
-       lb = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${Lb.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: Eart … [truncated]
-       Sb = `\n${Xi}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(ui).map((ee=>{let[ie,He]=ee;return`const TONE_${ie}: f32 = ${He};`})).join(" ")}\n\n// The  … [truncated]
-     var nb = He(37913);
-     const jb = new nb.rf,
-       sb = new nb.rf,
- ... (5 more removed lines; see GitHub link above)
+ 
+     function dE() {
+       if (pm) return Vm;
+       pm = 1;
+       let {
+         SourceMapConsumer: WW,
+         SourceMapGenerator: iW
+       } = Um, {
+         dirname: OW,
+         relative: mW,
+         resolve: EW,
+         sep: NW
+       } = Um, {
+         pathToFileURL: PW
+       } = Um, LW = oE(), cW = Boolean(WW && iW), wW = Boolean(OW && EW && mW && NW);
+       return Vm = class {
+ ... (162 more added lines; see GitHub link above)
```

#### 120. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2041-L2072` → after: `L4590-L4596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4590-L4596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4590-L4596) · [Before (L2041-L2072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2041-L2072)

```diff
-     function Qb(ee, ie) {
-       const He = Gb;
-       He[0] = ie.far, He[5] = ie.far, He[10] = ie.far, He[15] = 1;
-       const ye = ee.infiniteDistance;
-       for (let be = 0; be < 3; be++) He[12 + be] = ee.position[be] + (ye ? ie.worldMatrix[12 + be] : 0);
-       return Gb
-     }
-     class eM {
-       constructor() {
-         this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
-       }
-       reset() {
-         this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
-       }
-       bind(ee, ie, He, ye, be) {
-         He !== this.pipeline && (ee.setPipeline(He), this.pipeline = He), ee.setBindGroup(1, ye, [be]);
- ... (16 more removed lines; see GitHub link above)
+     function eE() {
+       if (Cm) return fm;
+       Cm = 1;
+       let WW = hE();
+       class iW extends WW {
+         constructor(WW) {
+           super(WW), this.type = "comment"
```

#### 121. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2075-L2093` → after: `L4599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4599) · [Before (L2075-L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2075-L2093)

```diff
-       clear() {
-         this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
-       }
-       collect(ee) {
-         this.collectGroup(ee, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(ee, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(ee, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.Nee.forEachGroup(th … [truncated]
-       }
-       collectGroup(ee, ie, He, ye, be) {
-         const Me = this.modelMeshes.group(ie),
-           Ke = this.Nee.group(ie),
-           Ue = 0 === ie ? null === Ke || void 0 === Ke ? void 0 : Ke.opaque : void 0;
-         this.collectList(ee, null === Me || void 0 === Me ? void 0 : Me.opaque, Ue || null === Ke || void 0 === Ke ? void 0 : Ke.opaque, ie, !1, He, be), Ue && (this.Nee.drawn += this.maker.bundleDraws(ee, Ue, ie)), this.collectList(ee, null === Me || void 0 === Me ? void 0 : Me. … [truncated]
-       }
-       collectList(ee, ie, He, ye, be, Me, Ke) {
-         var Ue;
-         const Fe = Me.length;
-         ie && this.maker.pushDraws(ee, ie.units, ie.units.length, ye, be, Me, ie.rows), He && (this.Nee.drawn += this.maker.pushDraws(ee, He, He.length, ye, be, Me));
- ... (3 more removed lines; see GitHub link above)
+       return fm = iW, iW.default = iW, fm
```

#### 122. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2096-L2102` → after: `L4602-L4611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4602-L4611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4602-L4611) · [Before (L2096-L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2096-L2102)

```diff
-     function HM(ee, ie) {
-       return ee.program.id - ie.program.id || ee.material.owner.uniqueId - ie.material.owner.uniqueId
-     }
- 
-     function yM(ee, ie) {
-       return ee.material.owner.uniqueId - ie.material.owner.uniqueId
-     }
+     function vE() {
+       if (Bm) return Xm;
+       Bm = 1;
+       let WW, iW, OW, mW, {
+           isClean: EW,
+           my: NW
+         } = yE(),
+         PW = HE(),
+         LW = eE(),
+         cW = hE();
```

#### 123. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2104-L2109` → after: `L4613-L4614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4613-L4614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4613-L4614) · [Before (L2104-L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2104-L2109)

```diff
-     function bM(ee, ie) {
-       for (let He = ie + 1; He < ee.length; He++) {
-         const ye = ee[He];
-         let be = He - 1;
-         for (; be >= ie && yM(ee[be], ye) > 0; be--) ee[be + 1] = ee[be];
-         ee[be + 1] = ye
+       function wW(WW) {
+         return WW.map((WW => (WW.nodes && (WW.nodes = wW(WW.nodes)), delete WW.source, WW)))
```

#### 124. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2114-L2115` → after: `L4617-L4794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4617-L4794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4617-L4794) · [Before (L2114-L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2114-L2115)

```diff
-     function KM(ee) {
-       return ee.hasThinInstances ? "thin" : ee.nMe || ee._userInstancedBuffersStorage ? "instanced" : "none"
+       function tW(WW) {
+         if (WW[EW] = !1, WW.proxyOf.nodes)
+           for (let iW of WW.proxyOf.nodes) tW(iW)
+       }
+       class ZW extends cW {
+         append() {
+           for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
+           for (let mW of iW) {
+             let WW = this.normalize(mW, this.last);
+             for (let iW of WW) this.proxyOf.nodes.push(iW)
+           }
+           return this.markDirty(), this
+         }
+         cleanRaws(WW) {
+           if (super.cleanRaws(WW), this.nodes)
+             for (let iW of this.nodes) iW.cleanRaws(WW)
+ ... (162 more added lines; see GitHub link above)
```

#### 125. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2118-L2119` → after: `L4797-L4817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4797-L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4797-L4817) · [Before (L2118-L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2118-L2119)

```diff
-     function UM(ee, ie, He) {
-       return ee ? (He._needUVs = !0, ee.optimizeUVAllocation && (0, we.E)(ee.matrix) ? (He[`${ie}DIRECTUV`] = ee.uvSet + 1, He[`MAINUV${ee.uvSet+1}`] = !0) : He[`${ie}DIRECTUV`] = 0, !0) : (He[`${ie}DIRECTUV`] = 0, !1)
+     function gE() {
+       if (Rm) return qm;
+       Rm = 1;
+       let WW, iW, OW = vE();
+       class mW extends OW {
+         constructor(WW) {
+           super({
+             type: "document",
+             ...WW
+           }), this.nodes || (this.nodes = [])
+         }
+         toResult() {
+           let OW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+           return new WW(new iW, this, OW).stringify()
+         }
+       }
+ ... (5 more added lines; see GitHub link above)
```

#### 126. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2122-L2128` → after: `L4820-L4825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4820-L4825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4820-L4825) · [Before (L2122-L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2122-L2128)

```diff
-     function FM(ee) {
-       const ie = new Map;
-       for (const He in ee) {
-         if (95 === He.charCodeAt(0)) continue;
-         const ye = ee[He],
-           be = typeof ye;
-         "number" === be || "string" === be ? ie.set(He, String(ye)) : ye && "function" !== be && ie.set(He, !0)
+     function DE() {
+       if (Im) return Gm;
+       Im = 1;
+       let WW = {};
+       return Gm = function(iW) {
+         WW[iW] || (WW[iW] = !0, "undefined" !== typeof console && console.warn && console.warn(iW))
```

#### 127. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2133-L2138` → after: `L4829-L4839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4829-L4839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4829-L4839) · [Before (L2133-L2138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2133-L2138)

```diff
-     function JM(ee) {
-       const ie = {
-         markAllAsDirty: () => {}
-       };
-       for (const {
-           defines: He
+     function VE() {
+       if (rm) return am;
+       rm = 1;
+       class WW {
+         constructor(WW) {
+           let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+           if (this.type = "warning", this.text = WW, iW.node && iW.node.source) {
+             let WW = iW.node.rangeBy(iW);
+             this.line = WW.start.line, this.column = WW.start.column, this.endLine = WW.end.line, this.endColumn = WW.end.column
+           }
+           for (let OW in iW) this[OW] = iW[OW]
```

#### 128. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2140-L2147` → after: `L4841-L4849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4841-L4849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4841-L4849) · [Before (L2140-L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2140-L2147)

```diff
-         of ee.features)
-         for (const ee in He) ie[ee] = He[ee];
-       return ie
-     }
- 
-     function oM(ee) {
-       const ie = ee.parts.geometry;
-       return null !== ie && void 0 !== ie && ie.live ? ie : null
+         toString() {
+           return this.node ? this.node.error(this.text, {
+             index: this.index,
+             plugin: this.plugin,
+             word: this.word
+           }).message : this.plugin ? this.plugin + ": " + this.text : this.text
+         }
+       }
+       return am = WW, WW.default = WW, am
```

#### 129. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2150-L2214` → after: `L4852-L4858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4852-L4858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4852-L4858) · [Before (L2150-L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2150-L2214)

```diff
-     function RM(ee) {
-       var ie;
-       return null !== (ie = oM(ee)) && void 0 !== ie ? ie : MM
-     }
-     class kM {
-       constructor(ee, ie, He) {
-         let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
-         this.resources = ee, this.warnOnce = ie, this.programWithModel = He, this.packFailed = ye, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
-       }
-       programFor(ee, ie, He, ye, be) {
-         const Me = ie.owner;
-         let Ke = this.drawStates.get(ie);
-         if (!Ke) {
-           const ee = ie.parts.materials[ie.range];
-           if (!ee) return this.warnOnce("model", `${He.name} on ${Me.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
-           Ke = {
- ... (49 more removed lines; see GitHub link above)
+     function pE() {
+       if (Fm) return zm;
+       Fm = 1;
+       let WW = VE();
+       class iW {
+         constructor(WW, iW, OW) {
+           this.processor = WW, this.messages = [], this.root = iW, this.opts = OW, this.css = void 0, this.map = void 0
```

#### 130. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2216-L2234` → after: `L4860-L4861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4860-L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4860-L4861) · [Before (L2216-L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2216-L2234)

```diff
-         for (let be = ye; be < 4; be++) ee[`LIGHT${be}`] = !1, ee[`LITE_LIGHT${be}_SLOT`] = void 0
-       }
-       prepareModelDefines(ee, ie, He, ye, be, Me) {
-         const {
-           features: Ke
-         } = He;
-         ye._needNormals = !1, ye._needUVs = !1;
-         const Ue = this.view;
-         this.prepareLightDefines(ye, He.disableLighting, He.maxSimultaneousLights), ye.MAINUV1 = !1, ye.MAINUV2 = !1;
-         const Fe = He.diffuseTexture;
-         Fe ? (ye._needUVs = !0, ye.DIFFUSE = !0, Fe.optimizeUVAllocation && (0, we.E)(Fe.matrix) ? (ye.DIFFUSEDIRECTUV = Fe.uvSet + 1, ye[`MAINUV${Fe.uvSet+1}`] = !0) : ye.DIFFUSEDIRECTUV = 0, Fe.uvSet > 1 && this.warnOnce(`uvset:${He.name}`, `${He.name} samples UV set ${Fe.uvSet … [truncated]
-         const Je = He.opacityTexture,
-           oe = He.emissiveTexture;
-         ye.OPACITY = UM(Je, "OPACITY", ye), ye.OPACITYRGB = null !== Je && Je.getAlphaFromRGB, ye.EMISSIVE = UM(oe, "EMISSIVE", ye), (Je && Je.uvSet > 1 || oe && oe.uvSet > 1) && this.warnOnce(`uvset:${He.name}`, `${He.name} samples a UV set past 2, which is not supported`);
-         const Re = He.reflectionTexture,
-           ke = null !== Re;
- ... (3 more removed lines; see GitHub link above)
+         toString() {
+           return this.css
```

#### 131. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2236-L2249` → after: `L4863-L4867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4863-L4867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4863-L4867) · [Before (L2236-L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2236-L2249)

```diff
-         ye.REFLECTION = ke, ye.REFLECTIONMAP_3D = ke, ye.REFLECTIONMAP_SKYBOX = ke, ye.REFLECTIONMAP_OPPOSITEZ = ke && (ee.useRightHandedSystem ? !Re.invertZ : Re.invertZ), ye.ROUGHNESS = ke && He.roughness > 0, ye.REFLECTIONOVERALPHA = ke && He.useReflectionOverAlpha, ye.LITE_RE … [truncated]
-         const {
-           visibility: qe,
-           hasVertexAlpha: fe
-         } = ie;
-         ye.ALPHATEST = (0, te.O)(He, qe, fe), ye.ALPHAFROMDIFFUSE = (0, te.db)(He), ye.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== He.transparencyMode, ye.ALPHABLEND = null === He.transparencyMode || (0, te.M)(He, qe, fe), ye.PREMULTIPLYALPHA = 7 === He.alphaMode || 8 === He.a … [truncated]
-         for (const {
-             feature: de,
-             state: We,
-             active: te
-           }
-           of Ke) {
-           var Te, pe;
-           if (te) null === (Te = (pe = (0, ai.e)(de)).prepareDefinesBeforeAttributes) || void 0 === Te || Te.call(pe, We, ye, ee, ie)
+         warn(iW) {
+           let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+           OW.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (OW.plugin = this.lastPlugin.postcssPlugin);
+           let mW = new WW(iW, OW);
+           return this.messages.push(mW), mW
```

#### 132. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2251-L2261` → after: `L4869-L4870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4869-L4870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4869-L4870) · [Before (L2251-L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2251-L2261)

```diff
-         this.modelPackKind(He) && (ye._needNormals = !0), ye.NORMAL = ye._needNormals && ie.isVerticesDataPresent("normal"), ye.UV1 = ye._needUVs && ie.isVerticesDataPresent("uv"), ye.UV2 = ye._needUVs && ie.isVerticesDataPresent("uv2");
-         const Xe = ie.useVertexColors && ie.isVerticesDataPresent("color");
-         ye.VERTEXCOLOR = Xe, ye.VERTEXALPHA = ie.hasVertexAlpha && Xe, ye.INSTANCESCOLOR = "none" !== Me && ie.isVerticesDataPresent("instanceColor");
-         for (const {
-             feature: de,
-             state: We,
-             active: te
-           }
-           of Ke) {
-           var ze, Be;
-           if (te) null === (ze = (Be = (0, ai.e)(de)).prepareDefines) || void 0 === ze || ze.call(Be, We, ye, ee, ie, He)
+         warnings() {
+           return this.messages.filter((WW => "warning" === WW.type))
```

#### 133. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2263-L2271` → after: `L4872-L4873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4872-L4873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4872-L4873) · [Before (L2263-L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2263-L2271)

```diff
-         const Ee = ee.Nf();
-         for (const {
-             feature: de,
-             state: We,
-             active: te
-           }
-           of Ke) {
-           var ge, Oe;
-           if (te && !1 === (null === (ge = (Oe = (0, ai.e)(de)).isReadyForSubMesh) || void 0 === ge ? void 0 : ge.call(Oe, We, ye, ee, Ee))) return !1
+         get content() {
+           return this.css
```

#### 134. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2277-L2288` → after: `L4879-L4885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4879-L4885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4879-L4885) · [Before (L2277-L2288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2277-L2288)

```diff
-     function qM(ee, ie, He) {
-       return ee.codeVersion !== ie.version && function(ee, ie) {
-         const He = [],
-           ye = [];
-         for (const {
-             feature: ke,
-             state: qe,
-             active: fe
-           }
-           of ie.features) {
-           var be, Me, Ke, Ue;
-           if (fe) fM(null === (be = (Me = (0, ai.e)(ke)).getCustomCode) || void 0 === be ? void 0 : be.call(Me, qe, "vertex", Oe.b.WGSL), He), fM(null === (Ke = (Ue = (0, ai.e)(ke)).getCustomCode) || void 0 === Ke ? void 0 : Ke.call(Ue, qe, "fragment", Oe.b.WGSL), ye)
+     function fE() {
+       if (OE) return iE;
+       OE = 1;
+       let WW = vE();
+       class iW extends WW {
+         constructor(WW) {
+           super(WW), this.type = "atrule"
```

#### 135. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2290-L2305` → after: `L4887-L4888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4887-L4888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4887-L4888) · [Before (L2290-L2305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2290-L2305)

```diff
-         const Fe = [];
-         for (const {
-             feature: ke,
-             state: qe
-           }
-           of ie.features) {
-           var Je, oe;
-           const ee = null === (Je = (oe = (0, ai.e)(ke)).getUniforms) || void 0 === Je ? void 0 : Je.call(oe, qe, Oe.b.WGSL);
-           for (const ie of null !== (Re = null === ee || void 0 === ee ? void 0 : ee.ubo) && void 0 !== Re ? Re : []) {
-             var Re;
-             ie.size && ie.type && Fe.push({
-               name: ie.name,
-               type: ie.type,
-               arraySize: ie.arraySize
-             })
-           }
+         append() {
+           return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
```

#### 136. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2307-L2366` → after: `L4890-L4891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4890-L4891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4890-L4891) · [Before (L2307-L2366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2307-L2366)

```diff
-         ee.vertexCode = He, ee.fragmentCode = ye, ee.pluginUniforms = Fe, ee.codeKey = JSON.stringify([He, ye, Fe]), ee.codeVersion = ie.version
-       }(ee, ie), `${He}#${ee.codeKey}`
-     }
- 
-     function fM(ee, ie) {
-       if (ee)
-         for (const He in ee) ee[He] && ie.push([He, ee[He]])
-     }
-     const TM = new Map([
-       [512, "never"],
-       [513, "greater"],
-       [514, "equal"],
-       [515, "greater-equal"],
-       [516, "less"],
-       [517, "not-equal"],
-       [518, "less-equal"],
- ... (44 more removed lines; see GitHub link above)
+         prepend() {
+           return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
```

#### 137. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2373-L2385` → after: `L4897-L4920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4897-L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4897-L4920) · [Before (L2373-L2385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2373-L2385)

```diff
-     function zM(ee) {
-       if (!ee.frozen) return -1;
-       let ie = ee.version;
-       for (const {
-           feature: He,
-           state: ye,
-           active: be
-         }
-         of ee.features) {
-         if (!be || !He.bind) continue;
-         const ee = (0, ai.e)(He).uniformsVersion;
-         if (!ee) return -1;
-         ie += ee(ye)
+     function CE() {
+       if (EE) return mE;
+       EE = 1;
+       let WW, iW, OW = vE();
+       class mW extends OW {
+         constructor(WW) {
+           super(WW), this.type = "root", this.nodes || (this.nodes = [])
+         }
+         normalize(WW, iW, OW) {
+           let mW = super.normalize(WW);
+           if (iW)
+             if ("prepend" === OW) this.nodes.length > 1 ? iW.raws.before = this.nodes[1].raws.before : delete iW.raws.before;
+             else if (this.first !== iW)
+             for (let EW of mW) EW.raws.before = iW.raws.before;
+           return mW
+         }
+ ... (8 more added lines; see GitHub link above)
```

#### 138. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2387` → after: `L4922-L4926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4922-L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4922-L4926) · [Before (L2387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2387)

```diff
-       return ie
+       return mW.registerLazyResult = iW => {
+         WW = iW
+       }, mW.registerProcessor = WW => {
+         iW = WW
+       }, mE = mW, mW.default = mW, OW.registerRoot(mW), mE
```

#### 139. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2389-L2461` → after: `L4928-L4947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4928-L4947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4928-L4947) · [Before (L2389-L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2389-L2461)

```diff
-     class BM {
-       constructor(ee, ie, He) {
-         this.slots = ee, this.data = ie, this.textures = He, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
-       }
-       updateFloat(ee, ie) {
-         this.write4(ee, ie, 0, 0, 0, 1)
-       }
-       updateFloat2(ee, ie, He) {
-         this.write4(ee, ie, He, 0, 0, 2)
-       }
-       updateFloat3(ee, ie, He, ye) {
-         this.write4(ee, ie, He, ye, 0, 3)
-       }
-       updateFloat4(ee, ie, He, ye, be) {
-         this.write4(ee, ie, He, ye, be, 4)
-       }
- ... (57 more removed lines; see GitHub link above)
+ 
+     function XE() {
+       if (PE) return NE;
+       PE = 1;
+       let WW = {
+         comma: iW => WW.split(iW, [","], !0),
+         space: iW => WW.split(iW, [" ", "\n", "\t"]),
+         split(WW, iW, OW) {
+           let mW = [],
+             EW = "",
+             NW = !1,
+             PW = 0,
+             LW = !1,
+             cW = "",
+             wW = !1;
+           for (let tW of WW) wW ? wW = !1 : "\\" === tW ? wW = !0 : LW ? tW === cW && (LW = !1) : '"' === tW || "'" === tW ? (LW = !0, cW = tW) : "(" === tW ? PW += 1 : ")" === tW ? PW > 0 && (PW -= 1) : 0 === PW && iW.includes(tW) && (NW = !0), NW ? ("" !== EW && mW.push(EW.trim … [truncated]
+ ... (4 more added lines; see GitHub link above)
```

#### 140. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2464-L2472` → after: `L4950-L4966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4950-L4966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4950-L4966) · [Before (L2464-L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2464-L2472)

```diff
-     function EM(ee, ie) {
-       const He = ob,
-         ye = XM.h,
-         be = ee.lights,
-         Me = Math.min(ee.lightCount, 8);
-       for (let Ke = 0; Ke < Me; Ke++) {
-         const ee = He.lights + Ke * He.lightStride,
-           Me = Ke * XM.b;
-         ie[ee] = be[Me + ye.vector], ie[ee + 1] = be[Me + ye.vector + 1], ie[ee + 2] = be[Me + ye.vector + 2], ie[ee + 3] = be[Me + ye.kind] === XM.f.directional ? 1 : 0, ie[ee + 4] = be[Me + ye.diffuse], ie[ee + 5] = be[Me + ye.diffuse + 1], ie[ee + 6] = be[Me + ye.diffuse + 2], … [truncated]
+     function BE() {
+       if (cE) return LE;
+       cE = 1;
+       let WW = vE(),
+         iW = XE();
+       class OW extends WW {
+         constructor(WW) {
+           super(WW), this.type = "rule", this.nodes || (this.nodes = [])
+         }
+         get selectors() {
+           return iW.comma(this.selector)
+         }
+         set selectors(WW) {
+           let iW = this.selector ? this.selector.match(/,\s*/) : null,
+             OW = iW ? iW[0] : "," + this.raw("between", "beforeOpen");
+           this.selector = WW.join(OW)
+ ... (1 more added lines; see GitHub link above)
```

#### 141. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2474` → after: `L4968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4968) · [Before (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2474)

```diff
-       ie[He.fogInfos] = ee.fogMode, ie[He.fogInfos + 1] = ee.fogStart, ie[He.fogInfos + 2] = ee.fogEnd, ie[He.fogInfos + 3] = ee.fogDensity, ie[He.fogColour] = ee.fogColour[0], ie[He.fogColour + 1] = ee.fogColour[1], ie[He.fogColour + 2] = ee.fogColour[2], ie[He.outputHeight] = e … [truncated]
+       return LE = OW, OW.default = OW, WW.registerRule(OW), LE
```

#### 142. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2476-L2504` → after: `L4970-L5256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4970-L5256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L4970-L5256) · [Before (L2476-L2504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2476-L2504)

```diff
-     class gM {
-       constructor(ee) {
-         this.instancesOf = ee
-       }
-       refreshModelUniforms(ee, ie, He, ye) {
-         const be = zM(He);
-         if (be >= 0 && be === ie.heldVersion && ie.textures.get("diffuseSampler") === He.diffuseTexture && ie.textures.get("reflectionCubeSampler") === He.reflectionTexture && ie.textures.get("opacitySampler") === He.opacityTexture && ie.textures.get("emissiveSampler") === He.emi … [truncated]
-         if (be < 0)
-           for (const Me of this.instancesOf(He)) Me.heldVersion = -1;
-         return this.writeModelUniforms(ee, ie, He, ye), ie.heldVersion = be, !1
-       }
-       writeModelUniforms(ee, ie, He, ye) {
-         const {
-           ubo: be
-         } = ie, Me = He.diffuseTexture, Ke = He.diffuseColor;
-         be.updateFloat4("vDiffuseColor", Ke[0], Ke[1], Ke[2], He.alpha), Me && (be.updateFloat2("vDiffuseInfos", Me.uvSet, Me.level), be.updateMatrixFloats("diffuseMatrix", Me.matrix)), be.updateFloat("alphaCutOff", He.alphaCutOff), be.updateFloatsFrom("vEmissiveColor", He.emissi … [truncated]
- ... (13 more removed lines; see GitHub link above)
+ 
+     function qE() {
+       if (tE) return wE;
+       tE = 1;
+       let WW = HE(),
+         iW = function() {
+           if (WE) return Qm;
+           WE = 1;
+           const WW = "'".charCodeAt(0),
+             iW = '"'.charCodeAt(0),
+             OW = "\\".charCodeAt(0),
+             mW = "/".charCodeAt(0),
+             EW = "\n".charCodeAt(0),
+             NW = " ".charCodeAt(0),
+             PW = "\f".charCodeAt(0),
+             LW = "\t".charCodeAt(0),
+ ... (271 more added lines; see GitHub link above)
```

#### 143. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2510-L2533` → after: `L5259-L5265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5259-L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5259-L5265) · [Before (L2510-L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2510-L2533)

```diff
-       }
-     }
- 
-     function OM(ee) {
-       const ie = ee.replace(/\s+/g, "");
-       return /u32|^vec\du$/.test(ie) ? "u32" : /i32|^vec\di$/.test(ie) ? "i32" : "f32"
-     }
- 
-     function dM(ee, ie) {
-       const He = ee.getSize(),
-         ye = OM(ie),
-         be = ee => 4 === He ? `${ee}x4` : 2 === He ? `${ee}x2` : null;
-       if ("f32" === ye) {
-         if (5126 === ee.type) return 1 === He ? "float32" : He >= 2 && He <= 4 ? `float32x${He}` : null;
-         if (!ee.normalized) return null;
-         switch (ee.type) {
- ... (8 more removed lines; see GitHub link above)
+         Vk(WW) {
+           let iW = this.input.fromOffset(WW);
+           return {
+             column: iW.col,
+             line: iW.line,
+             offset: WW
+           }
```

#### 144. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2535-L2567` → after: `L5267-L5336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5267-L5336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5267-L5336) · [Before (L2535-L2567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2535-L2567)

```diff
-         return null
-       }
-       const Me = "u32" === ye ? "uint" : "sint";
-       switch (ee.type) {
-         case 5125:
-         case 5124:
-           return 1 === He ? `${Me}32` : He <= 4 ? `${Me}32x${He}` : null;
-         case 5121:
-         case 5120:
-           return be(`${Me}8`);
-         case 5123:
-         case 5122:
-           return be(`${Me}16`)
-       }
-       return null
-     }
- ... (17 more removed lines; see GitHub link above)
+         init(WW, iW) {
+           this.current.push(WW), WW.source = {
+             input: this.input,
+             start: this.Vk(iW)
+           }, WW.raws.before = this.spaces, this.spaces = "", "comment" !== WW.type && (this.semicolon = !1)
+         }
+         other(WW) {
+           let iW = !1,
+             OW = null,
+             mW = !1,
+             EW = null,
+             NW = [],
+             PW = WW[1].startsWith("--"),
+             LW = [],
+             cW = WW;
+           for (; cW;) {
+ ... (54 more added lines; see GitHub link above)
```

#### 145. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2569-L2611` → after: `L5338-L5379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5338-L5379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5338-L5379) · [Before (L2569-L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2569-L2611)

```diff
-             const ee = OM(He.type),
-               ie = "u32" === ee ? "uint32x4" : "i32" === ee ? "sint32x4" : "float32x4";
-             Ke.push(null);
-             const ye = be.find((ee => null === ee.data));
-             ye ? ye.attributes.push({
-               shaderLocation: oe,
-               offset: 0,
-               format: ie
-             }) : be.push({
-               data: null,
-               base: 0,
-               stride: 0,
-               step: "vertex",
-               attributes: [{
-                 shaderLocation: oe,
-                 offset: 0,
- ... (27 more removed lines; see GitHub link above)
+             let mW = OW.reduce(((WW, iW) => WW + iW[1]), "");
+             WW.raws[iW] = {
+               raw: mW,
+               value: tW
+             }
+           }
+           WW[iW] = tW
+         }
+         rule(WW) {
+           WW.pop();
+           let iW = new NW;
+           this.init(iW, WW[0][2]), iW.raws.between = this.spacesAndCommentsFromEnd(WW), this.raw(iW, "selector", WW), this.current = iW
+         }
+         spacesAndCommentsFromEnd(WW) {
+           let iW, OW = "";
+           for (; WW.length && (iW = WW[WW.length - 1][0], "space" === iW || "comment" === iW);) OW = WW.pop()[1] + OW;
+ ... (26 more added lines; see GitHub link above)
```

#### 146. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2614-L2655` → after: `L5382-L5387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5382-L5387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5382-L5387) · [Before (L2614-L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2614-L2655)

```diff
-         if (be.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${ie}`, `${ie} needs ${be.length} vertex buffers`), null;
-         let Ue = "";
-         for (const oe of be) {
-           Ue += `${oe.stride}${"instance"===oe.step?"i":"v"}`;
-           for (const ee of oe.attributes) Ue += `,${ee.shaderLocation}:${ee.offset}:${ee.format}`;
-           Ue += ";"
-         }
-         let Fe = this.layouts.get(Ue);
-         Fe || (Fe = {
-           key: Ue,
-           buffers: be.map((ee => ({
-             arrayStride: ee.stride,
-             stepMode: ee.step,
-             attributes: ee.attributes
-           }))),
-           instanceEnds: be.map((ee => {
- ... (26 more removed lines; see GitHub link above)
+         unexpectedClose(WW) {
+           throw this.input.error("Unexpected }", {
+             offset: WW[2]
+           }, {
+             offset: WW[2] + 1
+           })
```

#### 147. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2657-L2687` → after: `L5389-L5394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5389-L5394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5389-L5394) · [Before (L2657-L2687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2657-L2687)

```diff
-       }
-     }
- 
-     function ZM(ee, ie, He, ye) {
-       const be = ie.program.program.attributes;
-       for (let Me = 0; Me < be.length; Me++) {
-         if ((be[Me].optional ? null : He.vertexInput(ee, be[Me].name, ye)) !== ie.sources[Me]) return !1
-       }
-       return !0
-     }
-     const wM = 64;
-     class DM {
-       constructor(ee, ie, He, ye) {
-         this.device = ee, this.layout = ie, this.frameBuffer = He, this.label = ye, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
-       }
-       ensure(ee) {
- ... (15 more removed lines; see GitHub link above)
+         unknownWord(WW) {
+           throw this.input.error("Unknown word", {
+             offset: WW[0][2]
+           }, {
+             offset: WW[0][2] + WW[0][1].length
+           })
```

#### 148. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2689-L2709` → after: `L5396-L5398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5396-L5398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5396-L5398) · [Before (L2689-L2709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2689-L2709)

```diff
-         return Ke
-       }
-       upload(ee, ie) {
-         this.device.queue.writeBuffer(this.buffer, ee * Rb, this.data, ee * wM, (ie - ee) * wM)
-       }
-       createBuffer() {
-         return this.device.createBuffer({
-           label: this.label,
-           size: this.data.byteLength,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         })
-       }
-       createBindGroup() {
-         return this.device.createBindGroup({
-           label: this.label,
-           layout: this.layout,
- ... (5 more removed lines; see GitHub link above)
+         unnamedAtrule(WW, iW) {
+           throw this.input.error("At-rule without name", {
+             offset: iW[2]
```

#### 149. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2711-L2717` → after: `L5400-L5402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5400-L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5400-L5402) · [Before (L2711-L2717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2711-L2717)

```diff
-             binding: 1,
-             resource: {
-               buffer: this.buffer,
-               size: 80
-             }
-           }]
-         })
+             offset: iW[2] + iW[1].length
+           })
+         }
```

#### 150. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2721-L2727` → after: `L5406-L5411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5406-L5411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5406-L5411) · [Before (L2721-L2727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2721-L2727)

```diff
-     function PM(ee) {
-       return ee.gpu[we.e.lite] ??= ee.materials.map(((ie, He) => ({
-         parts: ee,
-         range: He,
-         owner: ee.owner
-       })))
-     }
+     function RE() {
+       if (xE) return ZE;
+       xE = 1;
+       let WW = vE(),
+         iW = qE(),
+         OW = oE();
```

#### 151. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2729-L2731` → after: `L5413-L5423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5413-L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5413-L5423) · [Before (L2729-L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2729-L2731)

```diff
-     function AM(ee) {
-       var ie, He, ye;
-       return null !== (ie = null !== (He = null === (ye = ee.parts.materials[ee.range]) || void 0 === ye ? void 0 : ye.mirror) && void 0 !== He ? He : ee.owner.material) && void 0 !== ie ? ie : null
+       function mW(WW, mW) {
+         let EW = new OW(WW, mW),
+           NW = new iW(EW);
+         try {
+           NW.parse()
+         } catch (PW) {
+           throw PW
+         }
+         return NW.root
+       }
+       return ZE = mW, mW.default = mW, WW.registerParse(mW), ZE
```

#### 152. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2735-L2755` → after: `L5426-L5466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5426-L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5426-L5466) · [Before (L2735-L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2735-L2755)

```diff
-     function VM(ee) {
-       for (const ie of YM) ee[ie].units.length = 0, ee[ie].rows.length = 0
-     }
-     class aM {
-       constructor() {
-         this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, Vi.b)("Lite: ")
-       }
-       attach(ee, ie) {
-         this.model = ee, this.mirror = ie
-       }
-       get worlds() {
-         return this.model.nodes.xR
-       }
-       get visibility() {
-         return this.model.meshes.visibility
-       }
- ... (5 more removed lines; see GitHub link above)
+     function GE() {
+       if (AE) return lE;
+       AE = 1;
+       let {
+         isClean: WW,
+         my: iW
+       } = yE(), OW = dE(), mW = JE(), EW = vE(), NW = gE(), PW = (DE(), pE()), LW = RE(), cW = CE();
+       const wW = {
+           atrule: "AtRule",
+           comment: "Comment",
+           decl: "Declaration",
+           document: "Document",
+           root: "Root",
+           rule: "Rule"
+         },
+         tW = {
+ ... (25 more added lines; see GitHub link above)
```

#### 153. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2757-L2760` → after: `L5468-L5472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5468-L5472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5468-L5472) · [Before (L2757-L2760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2757-L2760)

```diff
-       forEachSelected(ee) {
-         for (const [ie, He] of this.groups)
-           for (const ye of YM)
-             for (const be of He[ye].units) ee(be.owner, "text" === ye ? "transparent" : ye, ie)
+ 
+       function lW(WW) {
+         let iW = !1,
+           OW = wW[WW.type];
+         return "decl" === WW.type ? iW = WW.prop.toLowerCase() : "atrule" === WW.type && (iW = WW.name.toLowerCase()), iW && WW.append ? [OW, OW + "-" + iW, 0, OW + "Exit", OW + "Exit-" + iW] : iW ? [OW, OW + "-" + iW, OW + "Exit", OW + "Exit-" + iW] : WW.append ? [OW, 0, OW + "E … [truncated]
```

#### 154. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2762-L2785` → after: `L5474-L5483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5474-L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5474-L5483) · [Before (L2762-L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2762-L2785)

```diff
-       select(ee, ie) {
-         this.frame++, this.selectedCount = 0, this.groups.forEach(VM);
-         const {
-           model: He,
-           mirror: ye
-         } = this;
-         if (!He || !ye || !ee) return;
-         this.rows.length < He.nodes.bk && (this.rows = new Int32Array(He.nodes.bk));
-         const be = this.rows,
-           Me = He.meshes;
-         for (let Ue = 0; Ue < Me.looseCount; Ue++) {
-           const ee = Me.loose[Ue],
-             He = ye.nodes[ee];
-           He && !He.isBlocked && He.isEnabled() && !He.wR.hasAZeroComponent && Me.selects(ee, ie.frustum) && (this.activate(He, ee), this.selectedCount++)
-         }
-         const Ke = Me.selectTextPlanes(ie.frustum, be);
- ... (8 more removed lines; see GitHub link above)
+ 
+       function AW(WW) {
+         let iW;
+         return iW = "document" === WW.type ? ["Document", 0, "DocumentExit"] : "root" === WW.type ? ["Root", 0, "RootExit"] : lW(WW), {
+           eventIndex: 0,
+           events: iW,
+           iterator: 0,
+           node: WW,
+           visitorIndex: 0,
+           visitors: []
```

#### 155. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2788-L2793` → after: `L5486-L5488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5486-L5488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5486-L5488) · [Before (L2788-L2793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2788-L2793)

```diff
-       instanceBatch(ee) {
-         const ie = this.batchOf(ee);
-         return ie.dispatched || (ie.dispatched = ie.renderSelf = !0, ie.row = this.rowOf(ee)), ie
-       }
-       rowOf(ee) {
-         return ee.row
+ 
+       function bW(iW) {
+         return iW[WW] = !1, iW.nodes && iW.nodes.forEach((WW => bW(WW))), iW
```

#### 156. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2795-L2802` → after: `L5490-L5514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5490-L5514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5490-L5514) · [Before (L2795-L2802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2795-L2802)

```diff
-       activate(ee, ie) {
-         if (!ee.Zx) {
-           const He = ee;
-           if (He.nMe) {
-             const ee = this.batchOf(He);
-             ee.dispatched = !0, ee.renderSelf = !0, ee.row = ie
-           }
-           return void this.dispatch(He, ie, ie)
+       let jW = {};
+       class UW {
+         constructor(WW, OW, mW) {
+           let NW;
+           if (this.stringified = !1, this.processed = !1, "object" !== typeof OW || null === OW || "root" !== OW.type && "document" !== OW.type)
+             if (OW instanceof UW || OW instanceof PW) NW = bW(OW.root), OW.map && ("undefined" === typeof mW.map && (mW.map = {}), mW.map.inline || (mW.map.inline = !1), mW.map.prev = OW.map);
+             else {
+               let WW = LW;
+               mW.syntax && (WW = mW.syntax.parse), mW.parser && (WW = mW.parser), WW.parse && (WW = WW.parse);
+               try {
+                 NW = WW(OW, mW)
+               } catch (cW) {
+                 this.processed = !0, this.error = cW
+               }
+               NW && !NW[iW] && EW.rebuild(NW)
+             }
+ ... (9 more added lines; see GitHub link above)
```

#### 157. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2804-L2833` → after: `L5516-L5521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5516-L5521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5516-L5521) · [Before (L2804-L2833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2804-L2833)

```diff
-         const He = ee,
-           ye = He.jMe;
-         if (ye._getWorldMatrixDeterminant() >= 0 !== He._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${ye.name}`, `A mirrored InstancedMesh of ${ye.name} is not drawn yet`);
-         const be = this.batchOf(ye);
-         be.instances.push(He), be.rows.push(ie), be.dispatched || (be.dispatched = !0, this.dispatch(ye, ie, this.rowOf(ye)))
-       }
-       batchOf(ee) {
-         let ie = this.batches.get(ee);
-         return ie || (ie = {
-           frame: 0,
-           dispatched: !1,
-           renderSelf: !1,
-           row: -1,
-           instances: [],
-           rows: []
-         }, this.batches.set(ee, ie)), ie.frame !== this.frame && (ie.frame = this.frame, ie.dispatched = !1, ie.renderSelf = !1, ie.instances.length = 0, ie.rows.length = 0), ie
- ... (14 more removed lines; see GitHub link above)
+         async () {
+           return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
+         } catch (WW) {
+           return this.async().catch(WW)
+         } finally(WW) {
+           return this.async().then(WW, WW)
```

#### 158. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2835-L2853` → after: `L5523-L5531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5523-L5531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5523-L5531) · [Before (L2835-L2853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2835-L2853)

```diff
-       }
-       groupOf(ee) {
-         let ie = this.groups.get(ee);
-         return ie || (ie = {
-           opaque: {
-             units: [],
-             rows: []
-           },
-           alphaTest: {
-             units: [],
-             rows: []
-           },
-           transparent: {
-             units: [],
-             rows: []
-           },
- ... (3 more removed lines; see GitHub link above)
+         getAsyncError() {
+           throw new Error("Use process(css).then(cb) to work with async plugins")
+         }
+         handleError(WW, iW) {
+           let OW = this.result.lastPlugin;
+           try {
+             iW && iW.addToError(WW), this.error = WW, "CssSyntaxError" !== WW.name || WW.plugin ? OW.postcssVersion : (WW.plugin = OW.postcssPlugin, WW.setMessage())
+           } catch (mW) {
+             console && console.error && console.error(mW)
```

#### 159. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2855-L2892` → after: `L5533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5533) · [Before (L2855-L2892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2855-L2892)

```diff
-         }, this.groups.set(ee, ie)), ie
-       }
-     }
- 
-     function cM(ee) {
-       ee.opaque.length = 0, ee.transparent.length = 0
-     }
-     class xM {
-       constructor() {
-         this.lJ = new Map, this.enabled = [], this.groups = new Map, this.KR = [], this.warned = new Set, this.selected = 0, this.drawn = 0
-       }
-       add(ee) {
-         if (this.lJ.has(ee)) return;
-         const ie = {
-           mesh: ee,
-           observer: ee.onEffectiveEnabledStateChangedObservable.add((ee => {
- ... (22 more removed lines; see GitHub link above)
+           return WW
```

#### 160. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2894-L2898` → after: `L5535-L5590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5535-L5590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5535-L5590) · [Before (L2894-L2898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2894-L2898)

```diff
-       }
-       forEachSelected(ee) {
-         for (const [ie, He] of this.groups) {
-           for (const ye of He.opaque) ee(ye.owner, "opaque", ie);
-           for (const ye of He.transparent) ee(ye.owner, "transparent", ie)
+         prepareVisitors() {
+           this.listeners = {};
+           let WW = (WW, iW, OW) => {
+             this.listeners[iW] || (this.listeners[iW] = []), this.listeners[iW].push([WW, OW])
+           };
+           for (let iW of this.plugins)
+             if ("object" === typeof iW)
+               for (let OW in iW) {
+                 if (!tW[OW] && /^[A-Z]/.test(OW)) throw new Error(`Unknown event ${OW} in ${iW.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
+                 if (!ZW[OW])
+                   if ("object" === typeof iW[OW])
+                     for (let mW in iW[OW]) WW(iW, "*" === mW ? OW : OW + "-" + mW.toLowerCase(), iW[OW][mW]);
+                   else "function" === typeof iW[OW] && WW(iW, OW, iW[OW])
+               }
+           this.hasListener = Object.keys(this.listeners).length > 0
+         }
+ ... (40 more added lines; see GitHub link above)
```

#### 161. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2900-L2915` → after: `L5592-L5604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5592-L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5592-L5604) · [Before (L2900-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2900-L2915)

```diff
-         for (const ie of this.KR) ee(ie.mesh, "opaque", 0)
-       }
-       group(ee) {
-         return this.groups.get(ee)
-       }
-       forEachGroup(ee) {
-         this.groups.forEach(ee)
-       }
-       select(ee, ie) {
-         if (this.drawn = 0, this.selected = 0, this.KR.length = 0, this.groups.forEach(cM), !ee) return;
-         const He = this.enabled;
-         for (let ye = 0; ye < He.length; ye++) {
-           const be = He[ye];
-           if (be.steady && ie(be, ee)) {
-             this.selected++, this.KR.push(be);
-             continue
+         runOnRoot(WW) {
+           this.result.lastPlugin = WW;
+           try {
+             if ("object" === typeof WW && WW.Once) {
+               if ("document" === this.result.root.type) {
+                 let iW = this.result.root.nodes.map((iW => WW.Once(iW, this.helpers)));
+                 return xW(iW[0]) ? Promise.all(iW) : iW
+               }
+               return WW.Once(this.result.root, this.helpers)
+             }
+             if ("function" === typeof WW) return WW(this.result.root, this.result)
+           } catch (iW) {
+             throw this.handleError(iW)
```

#### 162. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2917-L2922` → after: `L5606-L5622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5606-L5622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5606-L5622) · [Before (L2917-L2922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2917-L2922)

```diff
-           const Me = be.mesh;
-           if (Me.isBlocked || Me.wR.hasAZeroComponent) continue;
-           if (!Me.isVisible || Me.visibility <= 0 || 0 === (Me.layerMask & ee.layerMask)) continue;
-           if (Me.nMe) {
-             this.warned.has(Me.name) || (this.warned.add(Me.name), console.warn(`Lite: thin instance base ${Me.name} has InstancedMeshes and is not drawn`));
-             continue
+         }
+         stringify() {
+           if (this.error) throw this.error;
+           if (this.stringified) return this.result;
+           this.stringified = !0, this.sync();
+           let WW = this.result.opts,
+             iW = mW;
+           WW.syntax && (iW = WW.syntax.stringify), WW.stringifier && (iW = WW.stringifier), iW.stringify && (iW = iW.stringify);
+           let EW = new OW(iW, this.result.root, this.result.opts).generate();
+           return this.result.css = EW[0], this.result.map = EW[1], this.result
+         }
+         sync() {
+           if (this.error) throw this.error;
+           if (this.processed) return this.result;
+           if (this.processed = !0, this.processing) throw this.getAsyncError();
+           for (let WW of this.plugins) {
+ ... (1 more added lines; see GitHub link above)
```

#### 163. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2924-L2932` → after: `L5624-L5630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5624-L5630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5624-L5630) · [Before (L2924-L2932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2924-L2932)

```diff
-           const {
-             parts: Ke
-           } = Me;
-           if (!Ke) continue;
-           Me.computeWorldMatrix(), this.selected++;
-           const Ue = this.listsFor(Me.renderingGroupId);
-           for (const ee of PM(Ke)) {
-             const ie = AM(ee);
-             ie && (ie.needAlphaBlendingForMesh(Me) ? Ue.transparent.push(ee) : Ue.opaque.push(ee))
+           if (this.prepareVisitors(), this.hasListener) {
+             let iW = this.result.root;
+             for (; !iW[WW];) iW[WW] = !0, this.walkSync(iW);
+             if (this.listeners.OnceExit)
+               if ("document" === iW.type)
+                 for (let WW of iW.nodes) this.visitSync(this.listeners.OnceExit, WW);
+               else this.visitSync(this.listeners.OnceExit, iW)
```

#### 164. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2935-L2943` → after: `L5634-L5635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5634-L5635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5634-L5635) · [Before (L2935-L2943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2935-L2943)

```diff
-       }
-       JY(ee, ie) {
-         if (ie === ee.index >= 0) return;
-         ee.steady = null;
-         const He = this.enabled;
-         if (ie) ee.index = He.length, He.push(ee);
-         else {
-           const ie = He.pop();
-           ie !== ee && (He[ee.index] = ie, ie.index = ee.index), ee.index = -1
+         then(WW, iW) {
+           return this.async().then(WW, iW)
```

#### 165. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2945-L3043` → after: `L5637-L5650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5637-L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5637-L5650) · [Before (L2945-L3043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L2945-L3043)

```diff
-       }
-       listsFor(ee) {
-         let ie = this.groups.get(ee);
-         return ie || (ie = {
-           opaque: [],
-           transparent: []
-         }, this.groups.set(ee, ie)), ie
-       }
-     }
-     var LM = He(40472);
-     class CM {
-       constructor() {
-         this.bundle = null, this.stale = !0, this.lJ = new Set
-       }
-     }
-     class vM {
- ... (83 more removed lines; see GitHub link above)
+         toString() {
+           return this.css
+         }
+         visitSync(WW, iW) {
+           for (let [mW, EW] of WW) {
+             let WW;
+             this.result.lastPlugin = mW;
+             try {
+               WW = EW(iW, this.helpers)
+             } catch (OW) {
+               throw this.handleError(OW, iW.proxyOf)
+             }
+             if ("root" !== iW.type && "document" !== iW.type && !iW.parent) return !0;
+             if (xW(WW)) throw this.getAsyncError()
```

#### 166. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3045-L3106` → after: `L5652-L5721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5652-L5721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5652-L5721) · [Before (L3045-L3106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3045-L3106)

```diff
-           let oe;
-           if (Fe.oV && "indirect" !== ye) {
-             const ee = Fe.unit.owner;
-             oe = "direct" === ye && (0, LM.w)(ee) || (0, LM.q)(ee) || void 0
-           }
-           if (Me && this.keep(Fe, be, Me.lJ), 0 === (null === (Ue = oe) || void 0 === Ue ? void 0 : Ue.count)) continue;
-           this.binder.bind(ee, be, Je, this.slots.bindGroup, Fe.slot * Rb);
-           const Re = 5 * Fe.slot;
-           if ("indirect" === ye) {
-             be.indexBuffer ? ee.drawIndexedIndirect(this.argsBuffer, 4 * Re) : ee.drawIndirect(this.argsBuffer, 4 * Re);
-             continue
-           }
-           const ke = this.args;
-           oe ? uM(ee, null !== be.indexBuffer, ke, Re, oe) : be.indexBuffer ? ee.drawIndexed(ke[Re], ke[Re + 1], ke[Re + 2], 0, 0) : ee.draw(ke[Re], ke[Re + 1], ke[Re + 2], 0)
-         }
-         Me && (Me.stale = Ke)
- ... (46 more removed lines; see GitHub link above)
+         }
+         visitTick(iW) {
+           let OW = iW[iW.length - 1],
+             {
+               node: mW,
+               visitors: EW
+             } = OW;
+           if ("root" !== mW.type && "document" !== mW.type && !mW.parent) return void iW.pop();
+           if (EW.length > 0 && OW.visitorIndex < EW.length) {
+             let [WW, iW] = EW[OW.visitorIndex];
+             OW.visitorIndex += 1, OW.visitorIndex === EW.length && (OW.visitors = [], OW.visitorIndex = 0), this.result.lastPlugin = WW;
+             try {
+               return iW(mW.toProxy(), this.helpers)
+             } catch (PW) {
+               throw this.handleError(PW, mW)
+             }
+ ... (54 more added lines; see GitHub link above)
```

#### 167. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3110-L3159` → after: `L5728-L5752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5728-L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5728-L5752) · [Before (L3110-L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3110-L3159)

```diff
-     function mM(ee, ie) {
-       if (ee.pipelineKey !== ie.pipelineKey || ee.materialGroup !== ie.material.bindGroup || ee.indexBuffer !== ie.indexBuffer || ee.indexFormat !== ie.indexFormat || ee.vertexOffsets !== ie.vertexOffsets || ee.vertexBuffers.length !== ie.vertexBuffers.length) return !1;
-       for (let He = 0; He < ee.vertexBuffers.length; He++)
-         if (ee.vertexBuffers[He] !== ie.vertexBuffers[He]) return !1;
-       return !0
-     }
- 
-     function lM(ee, ie) {
-       return HM(ee.draw, ie.draw)
-     }
-     const SM = new WeakMap,
-       nM = {
-         depth: !1,
-         sunShadow: !1
-       };
- 
- ... (34 more removed lines; see GitHub link above)
+     function IE() {
+       if (kE) return UE;
+       kE = 1;
+       let WW = function() {
+           if (jE) return bE;
+           jE = 1;
+           let WW = dE(),
+             iW = JE(),
+             OW = (DE(), RE());
+           const mW = pE();
+           class EW {
+             constructor(OW, EW, NW) {
+               let PW;
+               EW = EW.toString(), this.stringified = !1, this._processor = OW, this._css = EW, this._opts = NW, this._map = void 0;
+               let LW = iW;
+               this.result = new mW(this._processor, PW, this._opts), this.result.css = EW;
+ ... (9 more added lines; see GitHub link above)
```

#### 168. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3161-L3165` → after: `L5754-L5759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5754-L5759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5754-L5759) · [Before (L3161-L3165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3161-L3165)

```diff
-           }, {
-             binding: ie.Uq,
-             visibility: ee,
-             buffer: {
-               type: "read-only-storage"
+             async () {
+               return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
+             } catch (WW) {
+               return this.async().catch(WW)
+             } finally(WW) {
+               return this.async().then(WW, WW)
```

#### 169. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3167-L3171` → after: `L5761-L5763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5761-L5763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5761-L5763) · [Before (L3167-L3171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3167-L3171)

```diff
-           }, {
-             binding: ie.special,
-             visibility: ee,
-             buffer: {
-               type: "read-only-storage"
+             sync() {
+               if (this.error) throw this.error;
+               return this.result
```

#### 170. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3173-L3178` → after: `L5765-L5766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5765-L5766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5765-L5766) · [Before (L3173-L3178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3173-L3178)

```diff
-           }, {
-             binding: ie.volume,
-             visibility: ee,
-             texture: {
-               sampleType: "float",
-               viewDimension: "3d"
+             then(WW, iW) {
+               return this.async().then(WW, iW)
```

#### 171. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3180-L3184` → after: `L5768-L5769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5768-L5769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5768-L5769) · [Before (L3180-L3184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3180-L3184)

```diff
-           }, {
-             binding: ie.sampler,
-             visibility: ee,
-             sampler: {
-               type: "filtering"
+             toString() {
+               return this._css
```

#### 172. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3186-L3190` → after: `L5771-L5772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5771-L5772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5771-L5772) · [Before (L3186-L3190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3186-L3190)

```diff
-           }, {
-             binding: ie.entities,
-             visibility: ee,
-             buffer: {
-               type: "read-only-storage"
+             warnings() {
+               return []
```

#### 173. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3192-L3196` → after: `L5774-L5804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5774-L5804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5774-L5804) · [Before (L3192-L3196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3192-L3196)

```diff
-           }, {
-             binding: ie.entityGrids,
-             visibility: ee,
-             buffer: {
-               type: "read-only-storage"
+             get content() {
+               return this.result.css
+             }
+             get css() {
+               return this.result.css
+             }
+             get map() {
+               return this.result.map
+             }
+             get messages() {
+               return []
+             }
+             get opts() {
+               return this.result.opts
+             }
+             get processor() {
+ ... (15 more added lines; see GitHub link above)
```

#### 174. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3205-L3211` → after: `L5807-L5856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5807-L5856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5807-L5856) · [Before (L3205-L3211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3205-L3211)

```diff
-         }), be = ee.createBindGroupLayout({
-           label: `${ie.depth?"terrain-":""}shader-pack-inputs${ye}`,
-           entries: Me
-         }), He.set(ye, be)
-       }
-       return be
-     }
+           return bE = EW, EW.default = EW, bE
+         }(),
+         iW = GE(),
+         OW = gE(),
+         mW = CE();
+       class EW {
+         constructor() {
+           let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
+           this.version = "8.4.38", this.plugins = this.normalize(WW)
+         }
+         normalize(WW) {
+           let iW = [];
+           for (let OW of WW)
+             if (!0 === OW.postcss ? OW = OW() : OW.postcss && (OW = OW.postcss), "object" === typeof OW && Array.isArray(OW.plugins)) iW = iW.concat(OW.plugins);
+             else if ("object" === typeof OW && OW.postcssPlugin) iW.push(OW);
+           else if ("function" === typeof OW) iW.push(OW);
+ ... (34 more added lines; see GitHub link above)
```

#### 175. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3213-L3215` → after: `L5858-L5903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5858-L5903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5858-L5903) · [Before (L3213-L3215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3213-L3215)

```diff
-     function sM(ee) {
-       return jM(ee, nM)
-     }
+           function LW(cW, wW) {
+             if (Array.isArray(cW)) return cW.map((WW => LW(WW)));
+             let {
+               inputs: tW,
+               ...ZW
+             } = cW;
+             if (tW) {
+               wW = [];
+               for (let WW of tW) {
+                 let OW = {
+                   ...WW,
+                   __proto__: EW.prototype
+                 };
+                 OW.map && (OW.map = {
+                   ...OW.map,
+                   __proto__: iW.prototype
+ ... (30 more added lines; see GitHub link above)
```

#### 176. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3217-L3221` → after: `L5905-L5941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5905-L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5905-L5941) · [Before (L3217-L3221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3217-L3221)

```diff
-     function IM(ee, ie) {
-       if (!ie) return !1;
-       const He = (0, Qi.c)(ee);
-       return !!He && Uy(He, ie)
-     }
+       function kW() {
+         for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
+         return 1 === iW.length && Array.isArray(iW[0]) && (iW = iW[0]), new EW(iW)
+       }
+       return kW.plugin = function(WW, iW) {
+         let OW, mW = !1;
+ 
+         function NW() {
+           console && console.warn && !mW && (mW = !0, console.warn(WW + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
+             NODE_ENV: "production",
+             PUBLIC_URL: "",
+             WDS_SOCKET_HOST: void 0,
+             WDS_SOCKET_PATH: void 0,
+             WDS_SOCKET_PORT: void 0,
+             FAST_REFRESH: !0,
+             REACT_APP_DEV_URLS: "false"
+ ... (21 more added lines; see GitHub link above)
```

#### 177. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3223-L3231` → after: `L5943-L5951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5943-L5951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5943-L5951) · [Before (L3223-L3231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3223-L3231)

```diff
-     function hM(ee, ie) {
-       let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       if (!ay(ie)) return [];
-       return [jM(ee, {
-         depth: Dy(ie.packVariant),
-         sunShadow: IM(ie.packVariant, He),
-         shadowMask: ye
-       })]
+     function zE(WW) {
+       const iW = [];
+       for (const OW in WW) {
+         const mW = WW[OW];
+         if ("string" !== typeof mW) continue;
+         const EW = ON(OW);
+         iW.push(`${EW}: ${mW};`)
+       }
+       return iW.join(" ")
```

#### 178. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3234-L3250` → after: `L5959-L5960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5959-L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5959-L5960) · [Before (L3234-L3250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3234-L3250)

```diff
-       constructor(ee, ie) {
-         let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         this.device = ee, this.sunShadow = He, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(ri.j), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = ee.createBuffer({
-           label: "shader-pack-inputs",
-           size: ri.j,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         });
-         const ye = (0, ri.x)(ie);
-         this.textures = ee.createBuffer({
-           label: "shader-pack-textures",
-           size: ye.byteLength,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), ee.queue.writeBuffer(this.textures, 0, ye), this.bindGroup = ee.createBindGroup({
-           label: "shader-pack-inputs",
-           layout: sM(ee),
-           entries: this.entries()
- ... (1 more removed lines; see GitHub link above)
+       constructor() {
+         cm(this, "parentElement", null), cm(this, "parentNode", null), cm(this, "ownerDocument"), cm(this, "firstChild", null), cm(this, "lastChild", null), cm(this, "previousSibling", null), cm(this, "nextSibling", null), cm(this, "ELEMENT_NODE", 1), cm(this, "TEXT_NODE", 3), cm … [truncated]
```

#### 179. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3252-L3300` → after: `L5962-L5965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5962-L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5962-L5965) · [Before (L3252-L3300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3252-L3300)

```diff
-       entries() {
-         return [{
-           binding: ri.d,
-           resource: {
-             buffer: this.buffer
-           }
-         }, {
-           binding: ri.u,
-           resource: {
-             buffer: this.textures
-           }
-         }]
-       }
-       write(ee, ie, He) {
-         (0, ri.C)(this.data, {
-           seconds: ee.seconds(),
- ... (33 more removed lines; see GitHub link above)
+       get childNodes() {
+         const WW = [];
+         let iW = this.firstChild;
+         for (; iW;) WW.push(iW), iW = iW.nextSibling;
```

#### 180. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3303-L3306` → after: `L5968-L5988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5968-L5988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5968-L5988) · [Before (L3303-L3306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3303-L3306)

```diff
-       bind(ee, ie) {
-         let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         ee.setBindGroup(ri.f, this.bindGroupFor(ie, He, ye))
+       contains(WW) {
+         if (!(WW instanceof mN)) return !1;
+         if (WW.ownerDocument !== this.ownerDocument) return !1;
+         if (WW === this) return !0;
+         for (; WW.parentNode;) {
+           if (WW.parentNode === this) return !0;
+           WW = WW.parentNode
+         }
+         return !1
+       }
+       appendChild(WW) {
+         throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
+       }
+       insertBefore(WW, iW) {
+         throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
+       }
+ ... (5 more added lines; see GitHub link above)
```

#### 181. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3309-L3321` → after: `L5991-L5999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5991-L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5991-L5999) · [Before (L3309-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3309-L3321)

```diff
- 
-     function GM(ee, ie, He) {
-       if (ee.gpuVersion === ie.gpuBuffersVersion) return !0;
-       let ye;
-       do {
-         if (ye = ie.gpuBuffersVersion, !rM(ee, ie, He)) return !1
-       } while (ie.gpuBuffersVersion !== ye);
-       return ee.gpuVersion = ye, ee.fitInstances = 0, !0
-     }
- 
-     function rM(ee, ie, He) {
-       let ye = null;
-       for (let Me = 0; Me < ee.slotData.length; Me++) {
+     class EN extends mN {
+       constructor() {
+         for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
+         super(iW), cm(this, "nodeType", 9), cm(this, "nodeName", "#document"), cm(this, "compatMode", "CSS1Compat"), cm(this, "RRNodeType", rE.Document), cm(this, "textContent", null), this.ownerDocument = this
+       }
+       get documentElement() {
+         return this.childNodes.find((WW => WW.RRNodeType === rE.Element && "HTML" === WW.tagName)) || null
+       }
+       get body() {
```

#### 182. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3323-L3328` → after: `L6001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6001) · [Before (L3323-L3328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3323-L3328)

```diff
-         const Ke = ee.slotData[Me],
-           Ue = Ke ? ie.gpuBuffer(Ke) : He;
-         if (!Ue) return !1;
-         Ke && ee.layout.instanceEnds[Me] < 0 && ie.cover(Ke, Number.POSITIVE_INFINITY), ee.buffers[Me] = Ue;
-         const Fe = ee.Qee[Me] + (Ke ? ie.gpuOffset(Ke) : 0);
-         Fe !== (null !== (be = ye) && void 0 !== be ? be : ee.offsets)[Me] && (ye ??= ee.offsets.slice(), ye[Me] = Fe), ee.ends[Me] = Ke ? ie.gpuEnd(Ke) : Ue.size
+         return (null == (WW = this.documentElement) ? void 0 : WW.childNodes.find((WW => WW.RRNodeType === rE.Element && "BODY" === WW.tagName))) || null
```

#### 183. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3330-L3352` → after: `L6003-L6005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6003-L6005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6003-L6005) · [Before (L3330-L3352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3330-L3352)

```diff
-       return ye && (ee.offsets = ye), !0
-     }
- 
-     function QM(ee, ie, He, ye) {
-       if (ie <= ee.fitInstances) return null;
-       const {
-         layout: be,
-         ends: Me,
-         offsets: Ke,
-         slotData: Ue,
-         Qee: Fe
-       } = ee;
-       let Je = !1;
-       for (let oe = 0; oe < be.buffers.length; oe++) {
-         const ee = be.instanceEnds[oe];
-         if (ee < 0) continue;
- ... (7 more removed lines; see GitHub link above)
+       get head() {
+         var WW;
+         return (null == (WW = this.documentElement) ? void 0 : WW.childNodes.find((WW => WW.RRNodeType === rE.Element && "HEAD" === WW.tagName))) || null
```

#### 184. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3354-L3392` → after: `L6007-L6008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6007-L6008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6007-L6008) · [Before (L3354-L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3354-L3392)

```diff
-       return Je && GM(ee, He, ye), ee.fitInstances = ie, null
-     }
-     var eK = He(38650),
-       iK = He(38685);
-     const HK = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
-       yK = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
-       bK = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
-       MK = `((vertexInputs.aPackedLightLevels >> 16u) | ${Yi.d.placed}u)`,
-       KK = "u32(vertexInputs.aShaderPackItem.x)",
-       UK = `${Yi.d.lifeform}u`;
- 
-     function FK(ee) {
-       return "item" === ee.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
-     }
-     const JK = "bloxdSpEnchant",
-       oK = "floor(finalWorld[3].xyz)";
- ... (23 more removed lines; see GitHub link above)
+       get implementation() {
+         return this
```

#### 185. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3394-L3403` → after: `L6010-L6036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6010-L6036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6010-L6036) · [Before (L3394-L3403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3394-L3403)

```diff
-     }
- 
-     function fK(ee) {
-       if ("item" === ee.kind) {
-         return {
-           vertexFlags: `(${KK} & 0xffffu)`,
-           varying: "vPackItem",
-           value: KK,
-           flags: "(fragmentInputs.vPackItem & 0xffffu)",
-           enchantTier: "(fragmentInputs.vPackItem >> 16u)"
+       get firstElementChild() {
+         return this.documentElement
+       }
+       appendChild(WW) {
+         const iW = WW.RRNodeType;
+         if ((iW === rE.Element || iW === rE.DocumentType) && this.childNodes.some((WW => WW.RRNodeType === iW))) throw new Error(`RRDomException: Failed to execute 'appendChild' on 'RRNode': Only one ${iW===rE.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
+         const OW = lN(this, WW);
+         return OW.parentElement = null, OW
+       }
+       insertBefore(WW, iW) {
+         const OW = WW.RRNodeType;
+         if ((OW === rE.Element || OW === rE.DocumentType) && this.childNodes.some((WW => WW.RRNodeType === OW))) throw new Error(`RRDomException: Failed to execute 'insertBefore' on 'RRNode': Only one ${OW===rE.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
+         const mW = AN(this, WW, iW);
+         return mW.parentElement = null, mW
+       }
+       removeChild(WW) {
+ ... (11 more added lines; see GitHub link above)
```

#### 186. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3406-L3477` → after: `L6039-L6040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6039-L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6039-L6040) · [Before (L3406-L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3406-L3477)

```diff
-       return ee.defines.BLOXD_LIGHT_WORD ? {
-         vertexFlags: MK,
-         varying: "vPackFlags",
-         value: MK,
-         flags: "fragmentInputs.vPackFlags",
-         enchantTier: "0u"
-       } : null
-     }
- 
-     function TK(ee) {
-       return "lifeform" === ee.kind ? UK : "0u"
-     }
- 
-     function pK(ee) {
-       return !!ee.BLOXD_PLUGIN_ENCHANTMENT
-     }
- ... (56 more removed lines; see GitHub link above)
+       createDocument(WW, iW, OW) {
+         return new EN
```

#### 187. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3479-L3519` → after: `L6042-L6044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6042-L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6042-L6044) · [Before (L3479-L3519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3479-L3519)

```diff
-     }
- 
-     function OK(ee, ie) {
-       return "box" === ie.kind && !!ee.hooks.surface && null !== gK(ie)
-     }
- 
-     function dK(ee, ie) {
-       return ee.reads.fragment.includes(ie)
-     }
- 
-     function WK(ee) {
-       return !!ee.BLOXD_LIGHTING && !ee.BLOXD_UNLIT
-     }
- 
-     function tK(ee, ie, He, ye) {
-       const be = ee.filter((ee => {
- ... (25 more removed lines; see GitHub link above)
+       createDocumentType(WW, iW, OW) {
+         const mW = new NN(WW, iW, OW);
+         return mW.ownerDocument = this, mW
```

#### 188. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3521-L3538` → after: `L6046-L6048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6046-L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6046-L6048) · [Before (L3521-L3538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3521-L3538)

```diff
-       const {
-         overlay: Re
-       } = ie;
-       Re && BK(ie) && be.surface && (oe = oe.filter((ee => !kK(ee, Re))));
-       const ke = be.light ? function(ee) {
-         return "placed" === ee.kind ? {
-           name: "terrain",
-           engine: (0, Ii.O)(Oe.b.WGSL),
-           pack: (0, Ii.jb)(Oe.b.WGSL)
-         } : ee.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
-           name: "entity",
-           engine: (0, Ii.F)(Oe.b.WGSL),
-           pack: (0, Ii.db)(Oe.b.WGSL)
-         } : null
-       }(ie) : null;
-       if (ke && (oe = tK(oe, ke.engine, ke.pack, `${ke.name} light`), "placed" !== Me && WK(Ke))) {
- ... (2 more removed lines; see GitHub link above)
+       createElement(WW) {
+         const iW = new PN(WW);
+         return iW.ownerDocument = this, iW
```

#### 189. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3540-L3542` → after: `L6050-L6051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6050-L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6050-L6051) · [Before (L3540-L3542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3540-L3542)

```diff
-       return {
-         vertexCode: Ue,
-         fragmentCode: oe
+       createElementNS(WW, iW) {
+         return this.createElement(iW)
```

#### 190. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3544-L3612` → after: `L6053-L6055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6053-L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6053-L6055) · [Before (L3544-L3612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3544-L3612)

```diff
-     }
- 
-     function wK(ee, ie, He, ye) {
-       return My(ee, ie, He, ye, "model")
-     }
-     const DK = "\t@builtin(position) position: vec4f,\n";
- 
-     function PK(ee, ie) {
-       const He = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(ee)[0];
-       return `${He}${ie}${ee.slice(He.length)}`
-     }
- 
-     function AK(ee, ie, He) {
-       let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       const {
-         hooks: be
- ... (53 more removed lines; see GitHub link above)
+       createTextNode(WW) {
+         const iW = new wN(WW);
+         return iW.ownerDocument = this, iW
```

#### 191. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3614-L3619` → after: `L6057-L6059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6057-L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6057-L6059) · [Before (L3614-L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3614-L3619)

```diff
-       const Xe = `${oy(ie,Me,function(ee,ie){return ie.TWOSIDEDLIGHTING?ee:`select(-(${ee}), ${ee}, fragmentInputs.frontFacing)`}(Fe.normal,Ue),Fe.flags)}${By(be,ie.strict,ie.program,ke,Fe)}`;
-       Xe && (Te = wK(Te, yK, `${Xe.slice(1)}${yK}`, "surface")), Me && ie.sunShadow && !Ue.TWOSIDEDLIGHTING && (Te = wK(Te, DK, `${DK}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
-       const ze = Oy(be);
-       if (ze) {
-         const ee = gy(be, WK(Ue), !0, Fe);
-         Te = wK(Te, bK, `${ee}${ze.slice(1)}${bK}`, "light")
+       createComment(WW) {
+         const iW = new tN(WW);
+         return iW.ownerDocument = this, iW
```

#### 192. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3621-L3625` → after: `L6061-L6066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6061-L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6061-L6066) · [Before (L3621-L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3621-L3625)

```diff
-       const Be = OK(ie, He) ? qy : "";
-       return {
-         ...ee,
-         vertex: PK(fe, qe(oe, !1, Be)),
-         fragment: PK(Te, qe(ke, Me))
+       createCDATASection(WW) {
+         const iW = new ZN(WW);
+         return iW.ownerDocument = this, iW
+       }
+       toString() {
+         return "RRDocument"
```

#### 193. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3628-L3634` → after: `L6069-L6071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6069-L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6069-L6071) · [Before (L3628-L3634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3628-L3634)

```diff
-     const YK = {
-       name: "earthSky",
-       uniqueId: -1
-     };
-     class VK {
-       constructor(ee, ie) {
-         this.resources = ee, this.epoch = ie, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
+     class NN extends mN {
+       constructor(WW, iW, OW) {
+         super(), cm(this, "nodeType", 10), cm(this, "RRNodeType", rE.DocumentType), cm(this, "name"), cm(this, "publicId"), cm(this, "systemId"), cm(this, "textContent", null), this.name = WW, this.publicId = iW, this.systemId = OW, this.nodeName = WW
```

#### 194. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3636-L3638` → after: `L6073-L6074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6073-L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6073-L6074) · [Before (L3636-L3638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3636-L3638)

```diff
-       release() {
-         for (const ee of this.instances.values()) ee.released = !0, this.resources.destroyBuffer(ee.buffer);
-         this.instances.clear()
+       toString() {
+         return "RRDocumentType"
```

#### 195. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3641-L3693` → after: `L6077-L6079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6077-L6079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6077-L6079) · [Before (L3641-L3693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3641-L3693)

```diff
- 
-     function aK(ee) {
-       return ee.failed && null !== ee.packGroup
-     }
-     class cK {
-       constructor(ee, ie, He) {
-         let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new xM,
-           be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new aM;
-         this.device = ee, this.resources = ie, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.Nee = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new eM, this.s … [truncated]
-           label: "meshes-frame",
-           entries: [{
-             binding: 0,
-             visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
-             buffer: {
-               type: "uniform"
-             }
- ... (37 more removed lines; see GitHub link above)
+     class PN extends mN {
+       constructor(WW) {
+         super(), cm(this, "nodeType", 1), cm(this, "RRNodeType", rE.Element), cm(this, "tagName"), cm(this, "attributes", {}), cm(this, "shadowRoot", null), cm(this, "scrollLeft"), cm(this, "scrollTop"), this.tagName = WW.toUpperCase(), this.nodeName = WW.toUpperCase()
```

#### 196. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3695-L3696` → after: `L6081-L6083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6081-L6083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6081-L6083) · [Before (L3695-L3696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3695-L3696)

```diff
-       get pipelinesCompiling() {
-         return this.compiling
+       get textContent() {
+         let WW = "";
+         return this.childNodes.forEach((iW => WW += iW.textContent)), WW
```

#### 197. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3698-L3719` → after: `L6085-L6086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6085-L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6085-L6086) · [Before (L3698-L3719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3698-L3719)

```diff
-       prepare(ee, ie, He) {
-         var ye;
-         let be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         this.frame++, this.view = ie, this.drawDefines.view = ie, this.thinBundle.LO(), this.writeFrameUniforms();
-         const Me = null !== (ye = null === be || void 0 === be ? void 0 : be.defineFor("model")) && void 0 !== ye ? ye : 0;
-         this.drawDefines.modelPackVariant = Me, be && 0 !== Me && (this.packInputs ??= new NM(this.device, be.textureLayers(), this.sunShadow), this.packInputs.write(be, ie.eye, be.GT())), this.lists.clear(), this.slotCount = 0;
-         const Ke = ee.activeCamera;
-         this.Nee.select(Ke, this.keepSteadyBase), this.modelMeshes.select(Ke, ie), He && this.pushEarthSky(He), this.lists.collect(ee), this.thinBundle.ZR(), this.uploadMeshSlots()
-       }
-       pushDraws(ee, ie, He, ye, be, Me) {
-         let Ke = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
-         const Ue = Me.length;
-         for (let Fe = 0; Fe < He; Fe++) {
-           const He = ie[Fe];
-           let Ue = this.retainedDraw(ee, He, ye, be);
-           if (void 0 === Ue && (Ue = this.drawFor(ee, He, ye, be), this.retain(He, Ue)), Ue) {
- ... (6 more removed lines; see GitHub link above)
+       set textContent(WW) {
+         this.firstChild = null, this.lastChild = null, this.appendChild(this.ownerDocument.createTextNode(WW))
```

#### 198. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3721-L3732` → after: `L6088-L6091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6088-L6091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6088-L6091) · [Before (L3721-L3732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3721-L3732)

```diff
-       bundleDraws(ee, ie, He) {
-         let ye = 0;
-         for (const be of ie) {
-           let ie = this.retainedDraw(ee, be, He, !1);
-           const Me = void 0 !== ie;
-           if (void 0 === ie && (ie = this.drawFor(ee, be, He, !1), this.retain(be, ie)), ie) {
-             const ee = be.owner,
-               He = this.thinBundle.add(be, ie, ee.getWorldMatrix().m, ee.visibility);
-             Me && this.steadyFrom(be, ie, He), ye++
-           }
-         }
-         return ye
+       get classList() {
+         return new xN(this.attributes.class, (WW => {
+           this.attributes.class = WW
+         }))
```

#### 199. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3734-L3758` → after: `L6093-L6120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6093-L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6093-L6120) · [Before (L3734-L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3734-L3758)

```diff
-       steadyFrom(ee, ie, He) {
-         const ye = ee.owner,
-           be = this.Nee.base(ye),
-           Me = ye.material,
-           {
-             drawState: Ke,
-             instance: Ue
-           } = ie.inputs.retained;
-         if (!be || !Me || 1 !== ee.parts.materials.length || AM(ee) !== Me) return;
-         const Fe = be.steady ??= {
-           unit: ee,
-           material: Me,
-           visibility: 1,
-           draw: ie,
-           record: He,
-           drawState: Ke,
- ... (9 more removed lines; see GitHub link above)
+       get id() {
+         return this.attributes.id || ""
+       }
+       get className() {
+         return this.attributes.class || ""
+       }
+       get style() {
+         const WW = this.attributes.style ? function(WW) {
+             const iW = {},
+               OW = /:(.+)/;
+             return WW.replace(/\/\*.*?\*\//g, "").split(/;(?![^(]*\))/g).forEach((function(WW) {
+               if (WW) {
+                 const mW = WW.split(OW);
+                 mW.length > 1 && (iW[WN(mW[0].trim())] = mW[1].trim())
+               }
+             })), iW
+ ... (12 more added lines; see GitHub link above)
```

#### 200. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3760-L3852` → after: `L6122-L6158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6122-L6158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6122-L6158) · [Before (L3760-L3852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3760-L3852)

```diff
-       keepSteady(ee, ie) {
-         const He = ee.steady;
-         if (He.handedFrame !== this.frame - 1 || (this.frame + He.phase) % 8 === 0) return !1;
-         const ye = ee.mesh,
-           {
-             unit: be,
-             draw: Me,
-             instance: Ke,
-             drawState: Ue
-           } = He,
-           Fe = ye.forcedInstanceCount || ye.Hie;
-         if (!ye.isVisible || ye.nMe || ye.visibility !== He.visibility || 0 === (ye.layerMask & ie.layerMask) || ye.material !== He.material || 0 !== ye.renderingGroupId || ye.hasVertexAlpha || !this.drawDefines.definesHold(Ue, be, Ue.instancing) || He.gpuVersion !== this.resourc … [truncated]
-         if (Ke.frame !== this.frame && this.bindMaterial(Ke, this.modelUniforms.refreshModelUniforms(ye.Xx(), Ke, Ke.model, this.view)), !Ke.bindable || Ke.bindGroup !== He.bindGroup) return !1;
-         const Je = ye.computeWorldMatrix(),
-           oe = Je.updateFlag !== He.worldFlag;
-         return He.worldFlag = Je.updateFlag, Me.instances = Fe, this.thinBundle.addAgain(He.record, Me, oe ? Je.m : null, He.visibility), He.handedFrame = this.frame, this.Nee.drawn++, !0
- ... (77 more removed lines; see GitHub link above)
+       getAttribute(WW) {
+         return void 0 === this.attributes[WW] ? null : this.attributes[WW]
+       }
+       setAttribute(WW, iW) {
+         this.attributes[WW] = iW
+       }
+       setAttributeNS(WW, iW, OW) {
+         this.setAttribute(iW, OW)
+       }
+       removeAttribute(WW) {
+         delete this.attributes[WW]
+       }
+       appendChild(WW) {
+         return lN(this, WW)
+       }
+       insertBefore(WW, iW) {
+ ... (21 more added lines; see GitHub link above)
```

#### 201. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3854-L3882` → after: `L6160-L6161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6160-L6161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6160-L6161) · [Before (L3854-L3882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3854-L3882)

```diff
-       indexKey(ee) {
-         const ie = oM(ee);
-         return ie ? this.resources.modelIndex(ie) : null
-       }
-       setRange(ee, ie, He, ye) {
-         He && (ee.indexBuffer = He, ee.indexFormat = this.resources.indexFormat(ye));
-         const be = 4 * ie.range + (He ? 0 : 2);
-         ee.unit = ie, ee.first = ie.parts.zp[be], ee.count = ie.parts.zp[be + 1]
-       }
-       makeDraw(ee, ie, He, ye, be) {
-         ie.state !== He && (ie.state = He, ie.pipelineKey = `${ee.id}|${ie.layout.key}|${He.key}`, ie.pipeline = null);
-         const Me = ie.draw ??= {
-           program: ee,
-           inputs: ie,
-           pipelineKey: "",
-           layout: ie.layout,
- ... (13 more removed lines; see GitHub link above)
+       attachShadow(WW) {
+         throw new Error("RRDomException: Failed to execute 'attachShadow' on 'RRElement': This RRElement does not support attachShadow")
```

#### 202. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3884-L3892` → after: `L6163-L6164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6163-L6164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6163-L6164) · [Before (L3884-L3892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3884-L3892)

```diff
-       instanceCount(ee, ie) {
-         switch (ie) {
-           case "thin":
-             return ee.forcedInstanceCount || ee.Hie;
-           case "instanced":
-             return this.prepareInstances(ee);
-           case "none":
-             return 1
-         }
+       play() {
+         this.paused = !1
```

#### 203. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3894-L3951` → after: `L6166-L6167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6166-L6167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6166-L6167) · [Before (L3894-L3951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3894-L3951)

```diff
-       prepareInstances(ee) {
-         const ie = function(ee, ie) {
-           const He = ie._userInstancedBuffersStorage,
-             ye = ee.batchUploads.get(ie);
-           if (ye) {
-             var be;
-             if (ye.layout === (null !== (be = null === He || void 0 === He ? void 0 : He.interleavedKinds) && void 0 !== be ? be : null)) return ye;
-             ye.release()
-           }
-           return new qi(ee, ie, He)
-         }(this.resources, ee);
-         return ie.frame !== this.frame && ie.pack(ee, this.modelMeshes.instanceBatch(ee), this.modelMeshes.worlds, this.frame), ie.count
-       }
-       programWithModel(ee, ie, He) {
-         const ye = this.modelSlot(ee),
-           be = qM(ye, ee, He),
- ... (42 more removed lines; see GitHub link above)
+       pause() {
+         this.paused = !0
```

#### 204. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3953-L3981` → after: `L6169-L6172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6169-L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6169-L6172) · [Before (L3953-L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3953-L3981)

```diff
-       modelPackProgram(ee, ie, He, ye, be) {
-         const Me = this.programs.get(He);
-         if (Me || this.unbuildable.has(He)) return null !== Me && void 0 !== Me ? Me : null;
-         const Ke = this.drawDefines.modelPackVariant;
-         let Ue;
-         try {
-           const ee = function(ee) {
-               return (0, Qi.b)(ee, "model")
-             }(Ke),
-             He = ZK(ee, be, ye.vertexCode, ye.fragmentCode);
-           Ue = AK(Yb({
-             defines: FM(ie),
-             ...He,
-             pluginUniforms: ye.pluginUniforms
-           }), ee, be, !!this.sunShadow)
-         } catch (oe) {
- ... (13 more removed lines; see GitHub link above)
+     }
+     class cN extends PN {
+       constructor() {
+         super(...arguments), cm(this, "tagName", "DIALOG"), cm(this, "nodeName", "DIALOG")
```

#### 205. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3983-L4048` → after: `L6174-L6175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6174-L6175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6174-L6175) · [Before (L3983-L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L3983-L4048)

```diff
-       lineProgramFor(ee, ie, He) {
-         const ye = Xe(ee, He, ie, this.view);
-         let be = this.linePrograms.get(ye);
-         var Me;
-         return be || (be = this.createProgram(`lines#${ye}`, (Me = function(ee) {
-           const ie = new Map;
-           for (let He = 0; He < Je.length; He++) ee & 1 << He && ie.set(Je[He], !0);
-           return ie
-         }(ye), xb({
-           defines: Me,
-           vertex: ab,
-           fragment: cb,
-           members: [],
-           structName: "MaterialUniforms"
-         })), "color"), this.linePrograms.set(ye, be)), be
-       }
- ... (50 more removed lines; see GitHub link above)
+       get isModal() {
+         return "modal" === this.getAttribute("rr_open_mode")
```

#### 206. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4050-L4052` → after: `L6177-L6178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6177-L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6177-L6178) · [Before (L4050-L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4050-L4052)

```diff
-       writeFrameUniforms() {
-         const ee = this.frameUniforms;
-         EM(this.view, ee), this.device.queue.writeBuffer(this.frameBuffer, 0, ee)
+       get open() {
+         return null !== this.getAttribute("open")
```

#### 207. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4054-L4079` → after: `L6180-L6181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6180-L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6180-L6181) · [Before (L4054-L4079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4054-L4079)

```diff
-       materialInstance(ee, ie) {
-         let He = this.materials.get(ee);
-         if (!He) {
-           const ie = new Map;
-           this.materials.set(ee, ie);
-           const {
-             resources: ye,
-             materials: be
-           } = this;
-           ee.Bx.addOnce((() => {
-             for (const ee of ie.values()) ee.released = !0, ye.destroyBuffer(ee.buffer);
-             be.delete(ee)
-           })), He = ie
-         }
-         let ye = He.get(ie.key);
-         return ye || (ye = this.newMaterialInstance(ee, null, ie), He.set(ie.key, ye)), ye
- ... (10 more removed lines; see GitHub link above)
+       close() {
+         this.removeAttribute("open"), this.removeAttribute("rr_open_mode")
```

#### 208. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4081-L4104` → after: `L6183-L6184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6183-L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6183-L6184) · [Before (L4081-L4104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4081-L4104)

```diff
-       newMaterialInstance(ee, ie, He) {
-         const ye = He.program.material.floats,
-           be = new Float32Array(ye),
-           Me = new Map;
-         return {
-           owner: ee,
-           model: ie,
-           program: He,
-           data: be,
-           uploaded: new Float32Array(ye).fill(Number.NaN),
-           buffer: this.device.createBuffer({
-             label: `${ee.name}-uniforms`,
-             size: Math.max(16, 4 * ye),
-             usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-           }),
-           textures: Me,
- ... (8 more removed lines; see GitHub link above)
+       show() {
+         this.setAttribute("open", ""), this.setAttribute("rr_open_mode", "non-modal")
```

#### 209. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4106-L4131` → after: `L6186-L6187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6186-L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6186-L6187) · [Before (L4106-L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4106-L4131)

```diff
-       pushEarthSky(ee) {
-         var ie;
-         const He = this.earthSkyProgram ??= this.createProgram("earthSky", {
-             vertex: mb + lb,
-             fragment: mb + Sb,
-             attributes: [],
-             material: ub,
-             textures: []
-           }, "earthSky"),
-           ye = this.earthSkyUniforms ??= this.newMaterialInstance(YK, null, He);
-         this.earthSkyFrom !== ee && (this.earthSkyFrom = ee, ye.data.fill(0)), rb(ye.ubo, ee, this.view);
-         const be = this.vertexInputs(He, YK, "earthSky", He, null);
-         if (He.failed || !be || !this.bindMaterial(ye, !1)) return;
-         const Me = null !== (ie = be.state) && void 0 !== ie ? ie : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
-           Ke = this.makeDraw(He, be, Me, ye, 1);
-         Ke.count = Lb.length;
- ... (10 more removed lines; see GitHub link above)
+       showModal() {
+         this.setAttribute("open", ""), this.setAttribute("rr_open_mode", "modal")
```

#### 210. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4133-L4134` → after: `L6189-L6192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6189-L6192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6189-L6192) · [Before (L4133-L4134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4133-L4134)

```diff
-       bindMaterial(ee, ie) {
-         return ee.frame !== this.frame && (ee.frame = this.frame, ie || this.uploadIfChanged(ee), ee.bindable = this.bindTextures(ee)), ee.bindable
+     }
+     class wN extends mN {
+       constructor(WW) {
+         super(), cm(this, "nodeType", 3), cm(this, "nodeName", "#text"), cm(this, "RRNodeType", rE.Text), cm(this, "data"), this.data = WW
```

#### 211. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4136-L4169` → after: `L6194-L6195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6194-L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6194-L6195) · [Before (L4136-L4169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4136-L4169)

```diff
-       bindTextures(ee) {
-         const {
-           program: ie,
-           bound: He
-         } = ee, ye = ie.program.textures;
-         let be = !ee.bindGroup,
-           Me = !0;
-         for (let Ke = 0; Ke < ye.length; Ke++) {
-           const ie = ee.textures.get(ye[Ke].name),
-             Ue = ie ? this.resources.boundTexture(ie) : null;
-           Ue ? He[2 * Ke] === Ue.view && He[2 * Ke + 1] === Ue.sampler || (He[2 * Ke] = Ue.view, He[2 * Ke + 1] = Ue.sampler, be = !0) : (ie || ee.ubo.expected.has(ye[Ke].name) || this.warnOnce(`texture:${ee.owner.name}:${ye[Ke].name}`, `${ee.owner.name} has no ${ye[Ke].name}`),  … [truncated]
-         }
-         if (!Me) return be && (ee.bindGroup = null), !1;
-         if (be) {
-           const be = [{
-             binding: 0,
- ... (18 more removed lines; see GitHub link above)
+       get textContent() {
+         return this.data
```

#### 212. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4171-L4173` → after: `L6197-L6198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6197-L6198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6197-L6198) · [Before (L4171-L4173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4171-L4173)

```diff
-       writeMeshSlot(ee, ie) {
-         let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, ee, ie, He), this.slotCount++ * Rb
+       set textContent(WW) {
+         this.data = WW
```

#### 213. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4175-L4176` → after: `L6200-L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6200-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6200-L6201) · [Before (L4175-L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4175-L4176)

```diff
-       uploadMeshSlots() {
-         this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
+       toString() {
+         return `RRText text=${JSON.stringify(this.data)}`
```

#### 214. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4178-L4185` → after: `L6203-L6206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6203-L6206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6203-L6206) · [Before (L4178-L4185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4178-L4185)

```diff
-       vertexInputs(ee, ie, He, ye, be) {
-         let Me = this.inputs.get(ee);
-         if (!Me || Me.program !== ye || !ZM(ie, Me, this.resources, be)) {
-           var Ke;
-           if (Me = null !== (Ke = this.vertexLayouts.resolveInputs(ie, He, ye, be)) && void 0 !== Ke ? Ke : void 0, !Me) return null;
-           this.inputs.set(ee, Me)
-         }
-         return this.withGpuBuffers(Me)
+     }
+     class tN extends mN {
+       constructor(WW) {
+         super(), cm(this, "nodeType", 8), cm(this, "nodeName", "#comment"), cm(this, "RRNodeType", rE.Comment), cm(this, "data"), this.data = WW
```

#### 215. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4187-L4193` → after: `L6208-L6209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6208-L6209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6208-L6209) · [Before (L4187-L4193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4187-L4193)

```diff
-       meshInputs(ee, ie, He) {
-         const ye = this.inputs.get(ee);
-         if (ye && this.inputsStamped(ye, ee, He, ie)) return this.withGpuBuffers(ye);
-         const be = ee.owner,
-           Me = oM(ee),
-           Ke = this.vertexInputs(ee, be, be.name, ie, Me);
-         return Ke && (Ke.geometry = RM(ee), Ke.instanceLayout = this.drawDefines.instanceLayout(be, He)), Ke
+       get textContent() {
+         return this.data
```

#### 216. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4195-L4198` → after: `L6211-L6212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6211-L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6211-L6212) · [Before (L4195-L4198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4195-L4198)

```diff
-       inputsStamped(ee, ie, He, ye) {
-         return function(ee, ie, He, ye) {
-           return ee.program === He && ee.geometry === RM(ie) && ee.instanceLayout === ye
-         }(ee, ie, ye, this.drawDefines.instanceLayout(ie.owner, He))
+       set textContent(WW) {
+         this.data = WW
```

#### 217. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4200-L4201` → after: `L6214-L6215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6214-L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6214-L6215) · [Before (L4200-L4201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4200-L4201)

```diff
-       withGpuBuffers(ee) {
-         return GM(ee, this.resources, this.zeroBuffer) ? ee : null
+       toString() {
+         return `RRComment text=${JSON.stringify(this.data)}`
```

#### 218. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4203-L4209` → after: `L6217-L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6217-L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6217-L6220) · [Before (L4203-L4209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4203-L4209)

```diff
-       instanceBuffersFit(ee, ie, He) {
-         const ye = QM(ie, He, this.resources, this.zeroBuffer);
-         if (ye) {
-           const be = ie.ends[ye.index] - ie.offsets[ye.index] + ie.Qee[ye.index];
-           return this.warnOnce(`overrun:${ee}`, `${ee} draws ${He} instances from a ${be}-byte buffer (${ye.needed} needed)`), !1
-         }
-         return !0
+     }
+     class ZN extends mN {
+       constructor(WW) {
+         super(), cm(this, "nodeName", "#cdata-section"), cm(this, "nodeType", 4), cm(this, "RRNodeType", rE.CDATA), cm(this, "data"), this.data = WW
```

#### 219. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4211-L4229` → after: `L6222-L6223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6222-L6223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6222-L6223) · [Before (L4211-L4229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4211-L4229)

```diff
-       createBinding(ee, ie, He, ye) {
-         const be = `${ie._colorFormat}|${ie._depthStencilFormat}|${ie._depthCompare}|${ie._sampleCount}`,
-           Me = Pi(this.device, ie);
-         if (ee === this.skyLastRenderable) {
-           let He = null;
-           return {
-             renderable: ee,
-             pipeline: Me,
-             draw: ee => He ? this.drawSky(ee, ie, be, He) : 0,
-             update: ee => {
-               He = ee
-             }
-           }
-         }
-         return {
-           renderable: ee,
- ... (3 more removed lines; see GitHub link above)
+       get textContent() {
+         return this.data
```

#### 220. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4231-L4240` → after: `L6225-L6226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6225-L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6225-L6226) · [Before (L4231-L4240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4231-L4240)

```diff
-       drawSky(ee, ie, He, ye) {
-         const be = this.lists.skyDraws,
-           Me = be.length > 0;
-         if (Me) {
-           var Ke;
-           const He = (null !== (Ke = ie._depthCompare) && void 0 !== Ke ? Ke : ti).startsWith("greater") ? 0 : 1;
-           ee.setViewport(0, 0, ye.targetWidth, ye.targetHeight, He, He)
-         }
-         const Ue = this.drawList(ee, ie, He, be);
-         return Me && ee.setViewport(0, 0, ye.targetWidth, ye.targetHeight, 0, 1), Ue
+       set textContent(WW) {
+         this.data = WW
```

#### 221. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4242-L4248` → after: `L6228-L6247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6228-L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6228-L6247) · [Before (L4242-L4248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4242-L4248)

```diff
-       drawList(ee, ie, He, ye) {
-         let be = 0;
-         const Me = this.binder;
-         Me.reset();
-         for (const Ke of ye) {
-           const ye = this.pipelineFor(Ke, ie, He);
-           ye && (Me.bind(ee, Ke, ye, this.meshSlots.bindGroup, Ke.slotOffset), Ke.indexBuffer ? ee.drawIndexed(Ke.count, Ke.instances, Ke.first, 0, 0) : ee.draw(Ke.count, Ke.instances, Ke.first, 0), be++)
+       toString() {
+         return `RRCDATASection data=${JSON.stringify(this.data)}`
+       }
+     }
+     class xN {
+       constructor(WW, iW) {
+         var OW = this;
+         if (cm(this, "onChange"), cm(this, "classes", []), cm(this, "add", (function() {
+             for (var WW = arguments.length, iW = new Array(WW), mW = 0; mW < WW; mW++) iW[mW] = arguments[mW];
+             for (const EW of iW) {
+               const WW = String(EW);
+               OW.classes.indexOf(WW) >= 0 || OW.classes.push(WW)
+             }
+             OW.onChange && OW.onChange(OW.classes.join(" "))
+           })), cm(this, "remove", (function() {
+             for (var WW = arguments.length, iW = new Array(WW), mW = 0; mW < WW; mW++) iW[mW] = arguments[mW];
+ ... (4 more added lines; see GitHub link above)
```

#### 222. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4250` → after: `L6249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6249) · [Before (L4250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4250)

```diff
-         return be
+         this.onChange = iW
```

#### 223. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4252-L4290` → after: `L6251-L6322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6251-L6322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6251-L6322) · [Before (L4252-L4290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4252-L4290)

```diff
-       pipelineFor(ee, ie, He) {
-         var ye, be;
-         if (ee.program.failed) return null;
-         const Me = ee.inputs;
-         if (Me.pipeline && Me.pipelineTarget === He) return Me.pipeline;
-         const Ke = `${ee.pipelineKey}|${He}`,
-           Ue = this.pipelines.get(Ke);
-         if (void 0 !== Ue) return Ue && (Me.pipeline = Ue, Me.pipelineTarget = He), Ue || null;
-         this.pipelines.set(Ke, null);
-         const {
-           program: Fe,
-           layout: Je,
-           state: oe
-         } = ee, Re = {
-           label: `standard-${Fe.id}`,
-           layout: Fe.pipelineLayout,
- ... (23 more removed lines; see GitHub link above)
+     }
+ 
+     function lN(WW, iW) {
+       return iW.parentNode && iW.parentNode.removeChild(iW), WW.lastChild ? (WW.lastChild.nextSibling = iW, iW.previousSibling = WW.lastChild) : (WW.firstChild = iW, iW.previousSibling = null), WW.lastChild = iW, iW.nextSibling = null, iW.parentNode = WW, iW.parentElement = WW, i … [truncated]
+     }
+ 
+     function AN(WW, iW, OW) {
+       if (!OW) return lN(WW, iW);
+       if (OW.parentNode !== WW) throw new Error("Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode.");
+       return iW === OW || (iW.parentNode && iW.parentNode.removeChild(iW), iW.previousSibling = OW.previousSibling, OW.previousSibling = iW, iW.nextSibling = OW, iW.previousSibling ? iW.previousSibling.nextSibling = iW : WW.firstChild = iW, iW.parentElement = WW, iW.parentNode =  … [truncated]
+     }
+ 
+     function bN(WW, iW) {
+       if (iW.parentNode !== WW) throw new Error("Failed to execute 'removeChild' on 'RRNode': The RRNode to be removed is not a child of this RRNode.");
+       return iW.previousSibling ? iW.previousSibling.nextSibling = iW.nextSibling : WW.firstChild = iW.nextSibling, iW.nextSibling ? iW.nextSibling.previousSibling = iW.previousSibling : WW.lastChild = iW.previousSibling, iW.previousSibling = null, iW.nextSibling = null, iW.paren … [truncated]
+     }
+ ... (56 more added lines; see GitHub link above)
```

#### 224. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4292-L4313` → after: `L6324-L6328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6324-L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6324-L6328) · [Before (L4292-L4313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4292-L4313)

```diff
-         };
-         return this.compiling++, this.device.createRenderPipelineAsync(Re).then((ee => {
-           this.compiling--, this.pipelines.set(Ke, ee)
-         }), (ee => {
-           this.compiling--, this.reportFailure(Fe, Ke, ee)
-         })), null
-       }
-       forEachSunShadowCaster(ee) {
-         const ie = this.caster,
-           He = (He, ye, be) => {
-             const Me = He.unit && function(ee) {
-               const ie = ee.material.model;
-               return null !== ie && (ie.lifeform || ie.item) && ie.castsSunShadow && "triangle-list" === ee.state.topology
-             }(He) ? oM(He.unit) : null;
-             if (!Me) return;
-             const Ke = He.unit.owner;
- ... (6 more removed lines; see GitHub link above)
+           switch (iW.RRNodeType) {
+             case rE.Document:
+               if (!yN(WW, iW, OW.mirror, mW)) {
+                 const EW = mW.getMeta(iW);
+                 EW && (OW.mirror.removeNodeFromMap(WW), WW.close(), WW.open(), OW.mirror.add(WW, EW), null == sN || sN.add(WW))
```

#### 225. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4315-L4318` → after: `L6330-L6340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6330-L6340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6330-L6340) · [Before (L4315-L4318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4315-L4318)

```diff
-               case "instanced": {
-                 const ee = this.resources.batchUploads.get(Ke);
-                 if (!ee || ee.frame !== this.frame || !this.writeBatchCasters(ee)) return;
-                 break
+               break;
+             case rE.Element: {
+               const EW = WW,
+                 NW = iW;
+               switch (NW.tagName) {
+                 case "IFRAME": {
+                   const EW = WW.contentDocument;
+                   if (!EW) break;
+                   MN(EW, iW.contentDocument, OW, mW);
+                   break
+                 }
```

#### 226. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4321-L4334` → after: `L6375-L6462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6375-L6462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6375-L6462) · [Before (L4321-L4334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4321-L4334)

```diff
-             ee(ie)
-           };
-         for (const ye of this.lists.opaqueDraws) He(ye, this.meshSlots.data, ye.slotOffset / 4);
-         this.thinBundle.forEachDrawn(He)
-       }
-       writeBatchCasters(ee) {
-         const {
-           caster: ie
-         } = this, He = ee.packedMatrices, ye = ee.count;
-         ie.instances = He, ie.instanceCount = ye;
-         let be = -1;
-         for (let Me = 0; Me < ye; Me++) {
-           const ie = xK(ee.packedRowMesh(Me));
-           ie && be < 0 ? (this.casterWorlds.length < 16 * ye && (this.casterWorlds = new Float32Array(He.length)), this.casterWorlds.set(He.subarray(0, 16 * Me)), be = Me) : !ie && be >= 0 && (this.casterWorlds.set(He.subarray(16 * Me, 16 * Me + 16), 16 * be), be++)
+           }
+           return WW
+         }(WW, iW, OW, mW), KN(WW, iW, OW, mW),
+         function(WW, iW, OW) {
+           var mW;
+           switch (iW.RRNodeType) {
+             case rE.Document: {
+               const WW = iW.scrollData;
+               WW && OW.applyScroll(WW, !0);
+               break
+             }
+             case rE.Element: {
+               const mW = WW,
+                 NW = iW;
+               switch (NW.scrollData && OW.applyScroll(NW.scrollData, !0), NW.inputData && OW.applyInput(NW.inputData), NW.tagName) {
+                 case "AUDIO":
+ ... (72 more added lines; see GitHub link above)
```

#### 227. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4336-L4346` → after: `L6464-L6496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6464-L6496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6464-L6496) · [Before (L4336-L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4336-L4346)

```diff
-         return be >= 0 && (ie.instances = this.casterWorlds, ie.instanceCount = be), ie.instanceCount > 0
-       }
-       async reportFailure(ee, ie, He) {
-         const ye = [];
-         let be = !0;
-         for (const [Me, Ke] of [
-             ["vertex", ee.vertex],
-             ["fragment", ee.fragment]
-           ]) {
-           const ee = await Ke.getCompilationInfo();
-           for (const ie of ee.messages) be &&= "error" !== ie.type, ye.push(`${Me}:${ie.lineNum}:${ie.linePos} ${ie.type}: ${ie.message}`)
+         xW = EW[++cW], bW = NW[--ZW]
+       } else if (yN(lW, AW, OW.mirror, mW)) {
+         try {
+           WW.insertBefore(lW, xW)
+         } catch (kW) {
+           console.warn(kW)
+         }
+         lW = EW[--wW], AW = NW[++tW]
+       } else {
+         if (!PW) {
+           PW = {};
+           for (let WW = cW; WW <= wW; WW++) {
+             const iW = EW[WW];
+             iW && OW.mirror.hasNode(iW) && (PW[OW.mirror.getId(iW)] = WW)
+           }
+         }
+ ... (17 more added lines; see GitHub link above)
```

#### 228. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4348-L4352` → after: `L6498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6498) · [Before (L4348-L4352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4348-L4352)

```diff
-         if (be && !ee.packGroup) return this.pipelines.set(ie, !1), console.error(`Lite: pipeline ${ie} failed`, He), void oi(this.device, "mesh", ee.kind, He);
-         ee.failed || (ee.failed = !0, console.error(`Lite: program ${ee.id} failed`, He, ye.join("\n"), {
-           program: ee.program,
-           key: ee.key
-         }), oi(this.device, "mesh", ee.kind, He, be ? null : ye[0]))
+         AW = NW[++tW]
```

#### 229. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4356-L4403` → after: `L6525-L6549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6525-L6549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6525-L6549) · [Before (L4356-L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4356-L4403)

```diff
-     function xK(ee) {
-       var ie, He;
-       const ye = null === (ie = ee.pC) || void 0 === ie || null === (He = ie.aShaderPackItem) || void 0 === He ? void 0 : He.x;
-       return void 0 !== ye && 0 !== (ye & Yi.h)
-     }
-     var LK = He(44873),
-       CK = He(44880),
-       vK = He(44882),
-       uK = He(44842);
-     const mK = [0, 3, 1, 4, 2, 5];
- 
-     function lK(ee, ie, He, ye, be) {
-       const Me = He[0].width;
-       try {
-         return be ? function(ee, ie, He) {
-           const ye = (0, uK.d)(ee, He, He, 6);
- ... (32 more removed lines; see GitHub link above)
+     function SN(WW, iW, OW) {
+       const mW = OW.getId(WW),
+         EW = OW.getMeta(WW);
+       let NW = null;
+       if (mW > -1 && (NW = iW.AmW(mW)), null !== NW && YN(NW, WW)) return NW;
+       switch (WW.RRNodeType) {
+         case rE.Document:
+           NW = new Document;
+           break;
+         case rE.DocumentType:
+           NW = document.implementation.createDocumentType(WW.name, WW.publicId, WW.systemId);
+           break;
+         case rE.Element: {
+           let iW = WW.tagName.toLowerCase();
+           iW = kN[iW] || iW, NW = EW && "isSVG" in EW && (null == EW ? void 0 : EW.isSVG) ? document.createElementNS(UN.svg, iW) : document.createElement(WW.tagName);
+           break
+ ... (9 more added lines; see GitHub link above)
```

#### 230. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4407-L4408` → after: `L6560-L6561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6560-L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6560-L6561) · [Before (L4407-L4408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4407-L4408)

```diff
-     function SK(ee) {
-       for (const ie of null !== ee && void 0 !== ee ? ee : []) null === ie || void 0 === ie || ie.close()
+     function YN(WW, iW) {
+       return WW.nodeType === iW.nodeType && (WW.nodeType !== WW.ELEMENT_NODE || WW.tagName.toUpperCase() === iW.tagName)
```

#### 231. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4410-L4418` → after: `L6563-L6567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6563-L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6563-L6567) · [Before (L4410-L4418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4410-L4418)

```diff
-     async function nK(ee) {
-       const ie = [],
-         He = [];
-       if (await Promise.all(ee.map(((ee, ye) => (ie[ye] = null, ee.then((ee => {
-           ie[ye] = ee
-         }), (ee => {
-           He.push(ee)
-         })))))), He.length > 0) throw SK(ie), He[0];
-       return ie
+ 
+     function yN(WW, iW, OW, mW) {
+       const EW = OW.getId(WW),
+         NW = mW.getId(iW);
+       return -1 !== EW && EW === NW && YN(WW, iW)
```

#### 232. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4420` → after: `L6569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6569) · [Before (L4420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4420)

```diff
-     class jK {
+     class TN extends EN {
```

#### 233. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4422-L4439` → after: `L6571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6571) · [Before (L4422-L4439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4422-L4439)

```diff
-         this.bk = ee, this.starts = [], this.lengths = [], this.used = 0, ee > 0 && (this.starts.push(0), this.lengths.push(ee))
-       }
-       allocate(ee) {
-         const {
-           starts: ie,
-           lengths: He
-         } = this;
-         for (let ye = 0; ye < ie.length; ye++) {
-           if (He[ye] < ee) continue;
-           const be = ie[ye];
-           return He[ye] === ee ? (ie.splice(ye, 1), He.splice(ye, 1)) : (ie[ye] += ee, He[ye] -= ee), this.used += ee, be
-         }
-         return -1
-       }
-       free(ee, ie) {
-         this.used -= ie;
- ... (2 more removed lines; see GitHub link above)
+         super(), cm(this, "UNSERIALIZED_STARTING_ID", -2), cm(this, "_unserializedId", this.UNSERIALIZED_STARTING_ID), cm(this, "mirror", new pN), cm(this, "scrollData", null), WW && (this.mirror = WW)
```

#### 234. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4441-L4451` → after: `L6573-L6574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6573-L6574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6573-L6574) · [Before (L4441-L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4441-L4451)

```diff
-       grow(ee) {
-         const ie = this.bk;
-         this.bk = ee, this.release(ie, ee - ie)
-       }
-       truncate(ee) {
-         const {
-           starts: ie,
-           lengths: He
-         } = this;
-         for (let ye = ie.length - 1; ye >= 0 && ie[ye] + He[ye] > ee; ye--) ie[ye] >= ee ? (ie.splice(ye, 1), He.splice(ye, 1)) : He[ye] = ee - ie[ye];
-         this.bk = ee
+       get unserializedId() {
+         return this._unserializedId--
```

#### 235. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4453-L4467` → after: `L6576-L6577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6576-L6577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6576-L6577) · [Before (L4453-L4467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4453-L4467)

```diff
-       release(ee, ie) {
-         const {
-           starts: He,
-           lengths: ye
-         } = this;
-         let be = 0,
-           Me = He.length;
-         for (; be < Me;) {
-           const ie = be + Me >> 1;
-           He[ie] < ee ? be = ie + 1 : Me = ie
-         }
-         const Ke = be,
-           Ue = Ke > 0 && He[Ke - 1] + ye[Ke - 1] === ee,
-           Fe = Ke < He.length && ee + ie === He[Ke];
-         Ue && Fe ? (ye[Ke - 1] += ie + ye[Ke], He.splice(Ke, 1), ye.splice(Ke, 1)) : Ue ? ye[Ke - 1] += ie : Fe ? (He[Ke] = ee, ye[Ke] += ie) : (He.splice(Ke, 0, ee), ye.splice(Ke, 0, ie))
+       createDocument(WW, iW, OW) {
+         return new TN
```

#### 236. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4469-L4511` → after: `L6579-L6581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6579-L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6579-L6581) · [Before (L4469-L4511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4469-L4511)

```diff
-     }
-     const sK = 256;
-     class IK {
-       constructor(ee, ie) {
-         let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
-           ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
-         this.device = ee, this.onReplaced = ie, this.mergeGap = He, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.zp = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], thi … [truncated]
-         const be = Math.max(sK, Math.ceil(ye / sK) * sK);
-         this.bytes = new Uint8Array(be), this.words = new Uint32Array(this.bytes.buffer), this.zp = new jK(be / sK)
-       }
-       get buffer() {
-         return this.gpu ??= this.createGpu(this.bytes.byteLength)
-       }
-       static slotBytes(ee) {
-         return Math.max(1, Math.ceil(ee / sK)) * sK
-       }
- ... (27 more removed lines; see GitHub link above)
+       createDocumentType(WW, iW, OW) {
+         const mW = new JN(WW, iW, OW);
+         return mW.ownerDocument = this, mW
```

#### 237. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4513-L4517` → after: `L6583-L6610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6583-L6610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6583-L6610) · [Before (L4513-L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4513-L4517)

```diff
-       copyWords(ee, ie, He, ye) {
-         let be = this.sourceWords.get(ie);
-         be || (be = new Uint32Array(ie, 0, ie.byteLength >> 2), this.sourceWords.set(ie, be));
-         const Me = this.words;
-         for (let Ke = 0; Ke < ye; Ke++) Me[ee + Ke] = be[He + Ke]
+       createElement(WW) {
+         const iW = WW.toUpperCase();
+         let OW;
+         switch (iW) {
+           case "AUDIO":
+           case "VIDEO":
+             OW = new HN(iW);
+             break;
+           case "IFRAME":
+             OW = new dN(iW, this.mirror);
+             break;
+           case "CANVAS":
+             OW = new uN(iW);
+             break;
+           case "STYLE":
+             OW = new oN(iW);
+ ... (12 more added lines; see GitHub link above)
```

#### 238. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4519-L4520` → after: `L6612-L6614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6612-L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6612-L6614) · [Before (L4519-L4520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4519-L4520)

```diff
-       move(ee, ie, He) {
-         this.bytes.copyWithin(ie, ee, ee + He), this.markDirty(ie, ie + He)
+       createCDATASection(WW) {
+         const iW = new gN(WW);
+         return iW.ownerDocument = this, iW
```

#### 239. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4522-L4544` → after: `L6616-L6618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6616-L6618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6616-L6618) · [Before (L4522-L4544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4522-L4544)

```diff
-       flush() {
-         for (const ie of this.retired) this.onReplaced(ie), ie.destroy();
-         this.retired.length = 0;
-         const ee = this.dirtyStarts.length;
-         if (ee > 0) {
-           const {
-             dirtyStarts: ie,
-             dirtyEnds: He,
-             order: ye
-           } = this;
-           ye.length = ee;
-           for (let Ue = 0; Ue < ee; Ue++) ye[Ue] = Ue;
-           ee > 1 && ye.sort(((ee, He) => ie[ee] - ie[He]));
-           const be = this.mergeGap;
-           let Me = ie[ye[0]],
-             Ke = He[ye[0]];
- ... (7 more removed lines; see GitHub link above)
+       createTextNode(WW) {
+         const iW = new eN(WW);
+         return iW.ownerDocument = this, iW
```

#### 240. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4546-L4550` → after: `L6620-L6621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6620-L6621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6620-L6621) · [Before (L4546-L4550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4546-L4550)

```diff
-       ZR() {
-         this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
-         const ee = this.freed;
-         for (let ie = 0; ie < ee.length; ie += 2) this.zp.free(ee[ie] / sK, ee[ie + 1] / sK);
-         ee.length = 0
+       destroyTree() {
+         this.firstChild = null, this.lastChild = null, this.mirror.reset()
```

#### 241. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4552-L4557` → after: `L6623-L6624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6623-L6624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6623-L6624) · [Before (L4552-L4557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4552-L4557)

```diff
-       send(ee, ie) {
-         this.device.queue.writeBuffer(this.gpu, ee, this.bytes.buffer, ee, ie - ee);
-         for (const He of this.replaced) {
-           const ye = Math.min(ie, He.size);
-           ye > ee && this.device.queue.writeBuffer(He, ee, this.bytes.buffer, ee, ye - ee)
-         }
+       open() {
+         super.open(), this._unserializedId = this.UNSERIALIZED_STARTING_ID
```

#### 242. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4559-L4560` → after: `L6626-L6630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6626-L6630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6626-L6630) · [Before (L4559-L4560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4559-L4560)

```diff
-       markDirty(ee, ie) {
-         ee &= -4, ie = ie + 3 & -4, this.holding ? (this.dirtyStarts.push(ee), this.dirtyEnds.push(ie)) : this.send(ee, ie)
+     }
+     const JN = NN;
+     class hN extends PN {
+       constructor() {
+         super(...arguments), cm(this, "inputData", null), cm(this, "scrollData", null)
```

#### 243. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4562-L4568` → after: `L6632-L6637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6632-L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6632-L6637) · [Before (L4562-L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4562-L4568)

```diff
-       grow(ee) {
-         const ie = this.zp.bk,
-           He = Math.max(2 * ie, ee),
-           ye = new Uint8Array(He * sK);
-         ye.set(this.bytes);
-         const be = this.gpu;
-         this.gpu = this.createGpu(ye.byteLength), this.bytes = ye, this.words = new Uint32Array(ye.buffer), this.zp.grow(He), be && (this.replaced.push(be), this.onReplaced(be)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, ie * sK)
+     }
+     class HN extends LN {}
+     class nN extends cN {}
+     class uN extends hN {
+       constructor() {
+         super(...arguments), cm(this, "rr_dataURL", null), cm(this, "canvasMutations", [])
```

#### 244. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4570-L4575` → after: `L6639-L6640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6639-L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6639-L6640) · [Before (L4570-L4575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4570-L4575)

```diff
-       createGpu(ee) {
-         return this.device.createBuffer({
-           label: "sink-dynamic-arena",
-           size: ee,
-           usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
-         })
+       getContext() {
+         return null
```

#### 245. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4578-L4588` → after: `L6643-L6646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6643-L6646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6643-L6646) · [Before (L4578-L4588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4578-L4588)

```diff
- 
-     function hK(ee) {
-       return Array.isArray(ee) ? new Float32Array(ee) : ee
-     }
- 
-     function NK(ee, ie, He, ye, be) {
-       const Me = se(be),
-         Ke = Math.min(be, ye.byteLength);
-       if (Me === Ke && ye.byteOffset % 4 === 0) return void ee.queue.writeBuffer(ie, He, ye.buffer, ye.byteOffset, Me);
-       const Ue = new Uint8Array(Me);
-       Ue.set(new Uint8Array(ye.buffer, ye.byteOffset, Ke)), ee.queue.writeBuffer(ie, He, Ue)
+     class oN extends hN {
+       constructor() {
+         super(...arguments), cm(this, "rules", [])
+       }
```

#### 246. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4590-L4617` → after: `L6648-L6661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6648-L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6648-L6661) · [Before (L4590-L4617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4590-L4617)

```diff
- 
-     function GK(ee, ie, He) {
-       const ye = "linear",
-         be = "nearest";
-       let Me = be,
-         Ke = be,
-         Ue = "nearest",
-         Fe = !ie;
-       switch (ee) {
-         case 11:
-           Me = ye, Ke = ye;
-           break;
-         case 3:
-           Me = ye, Ke = ye, Ue = ie ? "linear" : "nearest";
-           break;
-         case 8:
- ... (12 more removed lines; see GitHub link above)
+     class dN extends hN {
+       constructor(WW, iW) {
+         super(WW), cm(this, "contentDocument", new TN), this.contentDocument.mirror = iW
+       }
+     }
+     const eN = wN,
+       vN = tN,
+       gN = ZN;
+ 
+     function DN(WW, iW, OW, mW) {
+       let EW;
+       switch (WW.nodeType) {
+         case jN.DOCUMENT_NODE:
+           mW && "IFRAME" === mW.nodeName ? EW = mW.contentDocument : (EW = iW, EW.compatMode = WW.compatMode);
```

#### 247. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4619-L4620` → after: `L6663-L6682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6663-L6682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6663-L6682) · [Before (L4619-L4620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4619-L4620)

```diff
-         case 9:
-           Me = ye;
+         case jN.DOCUMENT_TYPE_NODE: {
+           const OW = WW;
+           EW = iW.createDocumentType(OW.name, OW.publicId, OW.systemId);
+           break
+         }
+         case jN.ELEMENT_NODE: {
+           const OW = WW,
+             mW = (NW = OW) instanceof HTMLFormElement ? "FORM" : NW.tagName.toUpperCase();
+           EW = iW.createElement(mW);
+           const PW = EW;
+           for (const {
+               name: WW,
+               value: iW
+             }
+             of Array.from(OW.attributes)) PW.attributes[WW] = iW;
+           OW.scrollLeft && (PW.scrollLeft = OW.scrollLeft), OW.scrollTop && (PW.scrollTop = OW.scrollTop);
+ ... (4 more added lines; see GitHub link above)
```

#### 248. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4622-L4623` → after: `L6684-L6685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6684-L6685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6684-L6685) · [Before (L4622-L4623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4622-L4623)

```diff
-         case 10:
-           Me = ye, Ue = ie ? "linear" : "nearest";
+         case jN.CDATA_SECTION_NODE:
+           EW = iW.createCDATASection(WW.data);
```

#### 249. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4625-L4626` → after: `L6687-L6688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6687-L6688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6687-L6688) · [Before (L4625-L4626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4625-L4626)

```diff
-         case 2:
-           Me = ye, Ke = ye, He > 1 ? (Ue = "linear", Fe = !1) : Fe = !0;
+         case jN.COMMENT_NODE:
+           EW = iW.createComment(WW.textContent || "");
```

#### 250. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4628-L4629` → after: `L6690-L6693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6690-L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6690-L6693) · [Before (L4628-L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4628-L4629)

```diff
-         case 12:
-           Me = ye, Fe = !0;
+         case jN.DOCUMENT_FRAGMENT_NODE:
+           EW = mW.attachShadow({
+             mode: "open"
+           });
```

#### 251. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4632-L4646` → after: `L6696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6696) · [Before (L4632-L4646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4632-L4646)

```diff
-           Fe = !0
-       }
-       return He > 1 && !Fe ? {
-         magFilter: ye,
-         minFilter: ye,
-         mipmapFilter: "linear",
-         maxAnisotropy: He
-       } : {
-         magFilter: Me,
-         minFilter: Ke,
-         mipmapFilter: Ue,
-         ...Fe ? {
-           lodMinClamp: 0,
-           lodMaxClamp: 0
-         } : {}
+           return null
```

#### 252. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4651` → after: `L6706-L6715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6706-L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6706-L6715) · [Before (L4651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4651)

```diff
-       return 0 === ee ? "clamp-to-edge" : 2 === ee ? "mirror-repeat" : "repeat"
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Zm,
+         OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new TN;
+       return function WW(mW, EW) {
+         const NW = DN(mW, OW, iW, EW);
+         if (null !== NW)
+           if ("IFRAME" !== (null == EW ? void 0 : EW.nodeName) && mW.nodeType !== jN.DOCUMENT_FRAGMENT_NODE && (null == EW || EW.appendChild(NW), NW.parentNode = EW, NW.parentElement = EW), "IFRAME" === mW.nodeName) {
+             const iW = mW.contentDocument;
+             iW && WW(iW, NW)
+           } else mW.nodeType !== jN.DOCUMENT_NODE && mW.nodeType !== jN.ELEMENT_NODE && mW.nodeType !== jN.DOCUMENT_FRAGMENT_NODE || (mW.nodeType === jN.ELEMENT_NODE && mW.shadowRoot && WW(mW.shadowRoot, NW), mW.childNodes.forEach((iW => WW(iW, NW))))
+       }(WW, null), OW
```

#### 253. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4654-L4673` → after: `L6718-L6719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6718-L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6718-L6719) · [Before (L4654-L4673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4654-L4673)

```diff
-       constructor(ee, ie) {
-         let {
-           vertexArena: He = !0
-         } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-         this.engine = ee, this.device = ie, this.buffers = new WeakMap, this.Zee = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet,  … [truncated]
-       }
-       createArena() {
-         return new IK(this.device, (ee => {
-           var ie;
-           null === (ie = this.onDestroy) || void 0 === ie || ie.call(this, ee), this.gpuBuffersVersion++
-         }))
-       }
-       rebind(ee, ie) {
-         this.engine = ee, this.device = ie, this.epoch++, this.buffers = new WeakMap, this.textures.clear(), this.samplers.clear(), this.atlasBindings = new WeakMap, this.atlasRebuilds = new WeakSet, this.arena &&= this.createArena(), this.pending = 0, this.gpuBuffersVersion++;
-         for (const He of this.liveUploads) He.rebind();
-         for (const He of this.rebindWaiters.splice(0)) He()
- ... (4 more removed lines; see GitHub link above)
+       constructor() {
+         cm(this, "idNodeMap", new Map), cm(this, "nodeMetaMap", new WeakMap)
```

#### 254. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4675` → after: `L6721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6721) · [Before (L4675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4675)

```diff
-       endUploadFrame() {
+       getId(WW) {
```

#### 255. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4677-L4709` → after: `L6723-L6724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6723-L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6723-L6724) · [Before (L4677-L4709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4677-L4709)

```diff
-         null === (ee = this.arena) || void 0 === ee || ee.ZR()
-       }
-       vertexBufferCreated(ee, ie, He) {
-         let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : He ? "sink-dynamic-vertices" : "sink-vertices";
-         this.bufferDeleted(ee);
-         const be = hK(ie);
-         ee.bk = be.byteLength, this.buffers.set(ee, {
-           gpu: null,
-           slot: -1,
-           slotBytes: 0,
-           size: 0,
-           arena: He && null !== this.arena,
-           pending: be,
-           ownsPending: !1,
-           usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
-           label: ye
- ... (17 more removed lines; see GitHub link above)
+         if (!WW) return -1;
+         return (null == (iW = this.getMeta(WW)) ? void 0 : iW.id) ?? -1
```

#### 256. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4711-L4730` → after: `L6726-L6727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6726-L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6726-L6727) · [Before (L4711-L4730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4711-L4730)

```diff
-       indexBufferCreated(ee, ie) {
-         let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
-         this.bufferDeleted(ee);
-         const ye = function(ee) {
-           if (ee instanceof Uint16Array || ee instanceof Uint32Array) return ee;
-           for (let ie = 0; ie < ee.length; ie++)
-             if (ee[ie] >= 65535) return new Uint32Array(ee);
-           return new Uint16Array(ee)
-         }(ie);
-         ee.is32Bits = 4 === ye.BYTES_PER_ELEMENT, ee.bk = ye.byteLength, this.buffers.set(ee, {
-           gpu: null,
-           slot: -1,
-           slotBytes: 0,
-           size: 0,
-           arena: !1,
-           pending: ye,
- ... (4 more removed lines; see GitHub link above)
+       AmW(WW) {
+         return this.idNodeMap.get(WW) || null
```

#### 257. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4732-L4759` → after: `L6729-L6730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6729-L6730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6729-L6730) · [Before (L4732-L4759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4732-L4759)

```diff
-       bufferDeleted(ee) {
-         const ie = this.buffers.get(ee);
-         null !== ie && void 0 !== ie && ie.gpu ? (this.destroyBuffer(ie.gpu), this.gpuBuffersVersion++) : ie && ie.slot >= 0 && (this.arena.free(ie.slot, ie.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(ee)
-       }
-       update(ee, ie, He, ye) {
-         if (ee.slot >= 0) this.updateSlot(ee, ie, He, ye);
-         else if (ee.gpu) {
-           if (He + se(ye) > ee.gpu.size) {
-             const ie = this.device.createBuffer({
-                 label: ee.label,
-                 size: se(Math.max(2 * ee.gpu.size, He + ye)),
-                 usage: ee.usage | GPUBufferUsage.COPY_SRC
-               }),
-               be = this.device.createCommandEncoder();
-             be.copyBufferToBuffer(ee.gpu, 0, ie, 0, ee.gpu.size), this.device.queue.submit([be.finish()]), this.destroyBuffer(ee.gpu), this.gpuBuffersVersion++, ee.gpu = ie
-           }
- ... (12 more removed lines; see GitHub link above)
+       getIds() {
+         return Array.from(this.idNodeMap.keys())
```

#### 258. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4761-L4763` → after: `L6732-L6733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6732-L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6732-L6733) · [Before (L4761-L4763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4761-L4763)

```diff
-       updateSlot(ee, ie, He, ye) {
-         const be = this.arena;
-         He + se(ye) > ee.size && (ee.size = se(Math.max(2 * ee.size, He + ye)), be.growTo(ee.slot + ee.size), this.gpuBuffersVersion++), 0 === ye ? this.writeSlot(ee, He, iU, 0, 4, !1) : this.writeSlot(ee, He, ie, ie.byteOffset, ye, !0)
+       getMeta(WW) {
+         return this.nodeMetaMap.get(WW) || null
```

#### 259. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4765-L4767` → after: `L6735-L6737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6735-L6737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6735-L6737) · [Before (L4765-L4767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4765-L4767)

```diff
-       writeSlot(ee, ie, He, ye, be, Me) {
-         const Ke = ie + (Me ? se(be) : be);
-         Ke > ee.slotBytes && this.moveSlot(ee, Ke), this.arena.write(ee.slot + ie, He, ye, be, Me)
+       removeNodeFromMap(WW) {
+         const iW = this.getId(WW);
+         this.idNodeMap.delete(iW), WW.childNodes && WW.childNodes.forEach((WW => this.removeNodeFromMap(WW)))
```

#### 260. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4769-L4773` → after: `L6739-L6740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6739-L6740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6739-L6740) · [Before (L4769-L4773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4769-L4773)

```diff
-       moveSlot(ee, ie) {
-         const He = this.arena,
-           ye = IK.slotBytes(Math.max(ie, Math.min(2 * ee.slotBytes, ee.size))),
-           be = He.allocate(ye, null, ee.size);
-         He.move(ee.slot, be, ee.slotBytes), He.free(ee.slot, ee.slotBytes), ee.slot = be, ee.slotBytes = ye, this.gpuBuffersVersion++
+       has(WW) {
+         return this.idNodeMap.has(WW)
```

#### 261. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4775-L4779` → after: `L6742-L6743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6742-L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6742-L6743) · [Before (L4775-L4779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4775-L4779)

```diff
-       cover(ee, ie) {
-         const He = this.buffers.get(ee);
-         if (!He || He.slot < 0) return !1;
-         const ye = Math.min(ie, He.size);
-         return !(ye <= He.slotBytes) && (this.moveSlot(He, ye), !0)
+       hasNode(WW) {
+         return this.nodeMetaMap.has(WW)
```

#### 262. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4781-L4783` → after: `L6745-L6747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6745-L6747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6745-L6747) · [Before (L4781-L4783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4781-L4783)

```diff
-       destroyBuffer(ee) {
-         var ie;
-         null === (ie = this.onDestroy) || void 0 === ie || ie.call(this, ee), ee.destroy()
+       add(WW, iW) {
+         const OW = iW.id;
+         this.idNodeMap.set(OW, WW), this.nodeMetaMap.set(WW, iW)
```

#### 263. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4785-L4814` → after: `L6749-L6753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6749-L6753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6749-L6753) · [Before (L4785-L4814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4785-L4814)

```diff
-       gpuBuffer(ee) {
-         const ie = this.buffers.get(ee);
-         if (!ie) return null;
-         if (ie.slot >= 0) return this.arena.buffer;
-         if (ie.arena && ie.pending) {
-           const ee = ie.pending,
-             He = this.arena;
-           return ie.size = se(ee.byteLength), ie.slotBytes = IK.slotBytes(function(ee) {
-             const ie = new Uint8Array(ee.buffer, ee.byteOffset, ee.byteLength);
-             let He = ie.length;
-             if (ee.byteOffset % 4 === 0) {
-               for (; He % 4 !== 0 && 0 === ie[He - 1];) He--;
-               if (He % 4 === 0) {
-                 const ie = new Uint32Array(ee.buffer, ee.byteOffset, He / 4);
-                 let ye = ie.length;
-                 for (; ye > 0 && 0 === ie[ye - 1];) ye--;
- ... (14 more removed lines; see GitHub link above)
+       replace(WW, iW) {
+         const OW = this.AmW(WW);
+         if (OW) {
+           const WW = this.nodeMetaMap.get(OW);
+           WW && this.nodeMetaMap.set(iW, WW)
```

#### 264. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4816-L4821` → after: `L6755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6755) · [Before (L4816-L4821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4816-L4821)

```diff
-         return ie.gpu
-       }
-       gpuOffset(ee) {
-         var ie, He;
-         const ye = null !== (ie = null === (He = this.buffers.get(ee)) || void 0 === He ? void 0 : He.slot) && void 0 !== ie ? ie : -1;
-         return ye < 0 ? 0 : ye
+         this.idNodeMap.set(WW, iW)
```

#### 265. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4823-L4830` → after: `L6757-L6758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6757-L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6757-L6758) · [Before (L4823-L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4823-L4830)

```diff
-       gpuEnd(ee) {
-         var ie, He;
-         const ye = this.buffers.get(ee);
-         return ye ? ye.slot >= 0 ? ye.slot + ye.size : null !== (ie = null === (He = ye.gpu) || void 0 === He ? void 0 : He.size) && void 0 !== ie ? ie : 0 : 0
-       }
-       vertexInput(ee, ie, He) {
-         var ye, be, Me, Ke;
-         return null !== (ye = null !== (be = He && this.modelInput(He, ie)) && void 0 !== be ? be : null === (Me = null !== (Ke = this.Zee.get(ee)) && void 0 !== Ke ? Ke : this.batchUploads.get(ee)) || void 0 === Me ? void 0 : Me.inputs[ie]) && void 0 !== ye ? ye : null
+       reset() {
+         this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
```

#### 266. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4832-L4837` → after: `L6760-L6776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6760-L6776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6760-L6776) · [Before (L4832-L4837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4832-L4837)

```diff
-       modelInput(ee, ie) {
-         const He = this.geometrySlot(ee);
-         let ye = He.inputs.get(ie);
-         if (void 0 === ye) {
-           const be = ee.vertexAttributes.find((ee => ee.kind === ie));
-           ye = be ? new fi(this.modelKey(He, be.data, !1), be.offset, be.stride, be.components, !1, be.glType, be.isNormalized) : null, He.inputs.set(ie, ye)
+     }
+ 
+     function fN(WW, iW) {
+       switch (WW.RRNodeType) {
+         case rE.Document:
+           return {
+             id: iW, type: WW.RRNodeType, childNodes: []
+           };
+         case rE.DocumentType: {
+           const OW = WW;
+           return {
+             id: iW,
+             type: WW.RRNodeType,
+             name: OW.name,
+             publicId: OW.publicId,
+             systemId: OW.systemId
+ ... (1 more added lines; see GitHub link above)
```

#### 267. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4839-L4842` → after: `L6778-L6790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6778-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6778-L6790) · [Before (L4839-L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4839-L4842)

```diff
-         return ye
-       }
-       modelIndex(ee) {
-         return ee.indexData && this.modelKey(this.geometrySlot(ee), ee.indexData, !0)
+         case rE.Element:
+           return {
+             id: iW, type: WW.RRNodeType, tagName: WW.tagName.toLowerCase(), attributes: {}, childNodes: []
+           };
+         case rE.Text:
+         case rE.Comment:
+           return {
+             id: iW, type: WW.RRNodeType, textContent: WW.textContent || ""
+           };
+         case rE.CDATA:
+           return {
+             id: iW, type: WW.RRNodeType, textContent: ""
+           }
```

#### 268. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4844-L4863` → after: `L6792-L6832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6792-L6832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6792-L6832) · [Before (L4844-L4863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4844-L4863)

```diff
-       geometrySlot(ee) {
-         var ie;
-         let He = ee.gpu[we.e.lite];
-         if ((null === (ie = He) || void 0 === ie ? void 0 : ie.epoch) !== this.epoch) {
-           const ie = new Map,
-             ye = () => {
-               for (const ee of ie.values()) this.bufferDeleted(ee)
-             },
-             be = ee => {
-               const He = ie.get(ee);
-               He && this.vertexBufferUpdated(He, ee)
-             };
-           He = {
-             keys: ie,
-             inputs: new Map,
-             release: ye,
- ... (4 more removed lines; see GitHub link above)
+     }
+     const CN = {
+         Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
+         ShadowRoot: ["host", "styleSheets"],
+         Element: ["shadowRoot", "querySelector", "querySelectorAll"],
+         MutationObserver: []
+       },
+       XN = {
+         Node: ["contains", "getRootNode"],
+         ShadowRoot: ["getSelection"],
+         Element: [],
+         MutationObserver: ["constructor"]
+       },
+       BN = {},
+       qN = {};
+ 
+ ... (25 more added lines; see GitHub link above)
```

#### 269. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4866-L4878` → after: `L6835-L6871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6835-L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6835-L6871) · [Before (L4866-L4878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4866-L4878)

```diff
-       modelKey(ee, ie, He) {
-         let ye = ee.keys.get(ie);
-         if (!ye) {
-           if (He) {
-             const ee = {
-               bk: 0,
-               is32Bits: !1
-             };
-             this.indexBufferCreated(ee, ie, "model-indices"), ye = ee
-           } else ye = {
-             bk: 0
-           }, this.vertexBufferCreated(ye, ie, !1, "model-vertices");
-           ee.keys.set(ie, ye)
+     }
+     const GN = {};
+ 
+     function IN(WW, iW, OW) {
+       var mW, EW;
+       const NW = null == (mW = GN[WW]) ? void 0 : mW[OW];
+       if (NW) return NW.call(iW);
+       const PW = RN(WW),
+         LW = null == (EW = Object.getOwnPropertyDescriptor(PW, OW)) ? void 0 : EW.get;
+       return LW ? ((GN[WW] || (GN[WW] = {}))[OW] = LW, LW.call(iW)) : iW[OW]
+     }
+     const aN = {};
+ 
+     function rN(WW, iW, OW) {
+       const mW = `${WW}.${String(OW)}`;
+       if (aN[mW]) return aN[mW].bind(iW);
+ ... (21 more added lines; see GitHub link above)
```

#### 270. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4880` → after: `L6873-L6874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6873-L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6873-L6874) · [Before (L4880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4880)

```diff
-         return ye
+       } catch {
+         return () => {}
```

#### 271. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4882-L4883` → after: `L6876-L6950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6876-L6950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6876-L6950) · [Before (L4882-L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4882-L4883)

```diff
-       indexFormat(ee) {
-         return ee.is32Bits ? "uint32" : "uint16"
+     }
+     /[1-9][0-9]{12}/.test(Date.now().toString()) || (FN = () => (new Date).getTime());
+     const WP = {
+       ownerDocument: function(WW) {
+         return IN("Node", WW, "ownerDocument")
+       },
+       childNodes: function(WW) {
+         return IN("Node", WW, "childNodes")
+       },
+       parentNode: function(WW) {
+         return IN("Node", WW, "parentNode")
+       },
+       parentElement: function(WW) {
+         return IN("Node", WW, "parentElement")
+       },
+       textContent: function(WW) {
+ ... (59 more added lines; see GitHub link above)
```

#### 272. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4885-L4886` → after: `L6952-L6966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6952-L6966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6952-L6966) · [Before (L4885-L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4885-L4886)

```diff
-       get texturesLoading() {
-         return this.pending
+     };
+ 
+     function EP(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
+         mW = null,
+         EW = 0;
+       return function() {
+         for (var NW = arguments.length, PW = new Array(NW), LW = 0; LW < NW; LW++) PW[LW] = arguments[LW];
+         const cW = Date.now();
+         EW || !1 !== OW.leading || (EW = cW);
+         const wW = iW - (cW - EW),
+           tW = this;
+         wW <= 0 || wW > iW ? (mW && (clearTimeout(mW), mW = null), EW = cW, WW.apply(tW, PW)) : mW || !1 === OW.trailing || (mW = setTimeout((() => {
+           EW = !1 === OW.leading ? 0 : Date.now(), mW = null, WW.apply(tW, PW)
+         }), wW))
```

#### 273. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4888-L4889` → after: `L6968-L6987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6968-L6987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6968-L6987) · [Before (L4888-L4889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4888-L4889)

```diff
-       releaseSlot(ee, ie) {
-         --ee.refs > 0 || (this.releaseTexture(ee), SK(ee.images), null !== ie && this.textures.delete(ie))
+     }
+ 
+     function NP(WW, iW, OW, mW) {
+       let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
+       const NW = EW.Object.getOwnPropertyDescriptor(WW, iW);
+       return EW.Object.defineProperty(WW, iW, mW ? OW : {
+         set(WW) {
+           setTimeout((() => {
+             OW.set.call(this, WW)
+           }), 0), NW && NW.set && NW.set.call(this, WW)
+         }
+       }), () => NP(WW, iW, NW || {}, !0)
+     }
+ 
+     function PP(WW) {
+       var iW, OW, mW, EW;
+ ... (4 more added lines; see GitHub link above)
```

#### 274. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4891-L4919` → after: `L6989-L7016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6989-L7016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L6989-L7016) · [Before (L4891-L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4891-L4919)

```diff
-       load(ee, ie) {
-         const {
-           epoch: He
-         } = this, ye = ie.decoded = async function(ee) {
-           if ("cube" === ee.kind) return async function(ee) {
-             if (6 !== ee.length) throw new Error(`${ee.length} files where six faces were expected`);
-             const ie = await nK(ee.map((ee => Qe(ee)))),
-               He = ie[0].width;
-             return nK(ie.map((async ee => {
-               if (ee.width === He && ee.height === He) return ee;
-               try {
-                 return await createImageBitmap(ee, {
-                   ...Ge,
-                   resizeWidth: He,
-                   resizeHeight: He
-                 })
- ... (13 more removed lines; see GitHub link above)
+     }
+ 
+     function LP() {
+       return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
+     }
+ 
+     function cP() {
+       return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
+     }
+ 
+     function wP(WW) {
+       if (!WW) return null;
+       return WW.nodeType === WW.ELEMENT_NODE ? WW : WP.parentElement(WW)
+     }
+ 
+     function tP(WW, iW, OW, mW) {
+ ... (12 more added lines; see GitHub link above)
```

#### 275. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4921-L4930` → after: `L7018-L7057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7018-L7057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7018-L7057) · [Before (L4921-L4930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4921-L4930)

```diff
-       canvasUpdated(ee, ie, He) {
-         const {
-           state: ye
-         } = this.textureSlot(ee);
-         ye.dynamicSource = {
-           invertY: ie,
-           premultiplied: He
-         }, ye.dynamic && this.pushDynamic(ee.source, ye)
-       }
-       async atlasArrays(ee) {
+       return !1
+     }
+ 
+     function ZP(WW, iW) {
+       return -1 !== iW.getId(WW)
+     }
+ 
+     function xP(WW, iW, OW) {
+       return !("TITLE" !== WW.tagName || !OW.headTitleMutations) || -2 === iW.getId(WW)
+     }
+ 
+     function lP(WW, iW) {
+       if (KW(WW)) return !1;
+       const OW = iW.getId(WW);
+       if (!iW.has(OW)) return !0;
+       const mW = WP.parentNode(WW);
+ ... (24 more added lines; see GitHub link above)
```

#### 276. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4932-L4943` → after: `L7059-L7069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7059-L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7059-L7069) · [Before (L4932-L4943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4932-L4943)

```diff
-           device: ie,
-           epoch: He
-         } = this;
-         let ye;
-         try {
-           ye = await ii(ie, ee)
-         } catch (Me) {
-           if (He === this.epoch) {
-             if (!Ji(ie)) throw Me;
-             await new Promise((ee => {
-               this.rebindWaiters.push(ee)
-             }))
+           nextId: WW,
+           parentId: NW
+         } = EW;
+         if (WW && WW in iW) {
+           const NW = iW[WW];
+           if (NW.parent) {
+             const WW = NW.parent.children.indexOf(NW);
+             NW.parent.children.splice(WW, 0, OW(EW, NW.parent))
+           } else {
+             const WW = mW.indexOf(NW);
+             mW.splice(WW, 0, OW(EW, null))
```

#### 277. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4945-L4967` → after: `L7071-L7135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7071-L7135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7071-L7135) · [Before (L4945-L4967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4945-L4967)

```diff
-           return this.atlasArrays(ee)
-         }
-         if (ye.forEach(((ie, He) => {
-             this.atlasSources.has(ie) || this.atlasSources.set(ie, {
-               sources: ee,
-               index: He,
-               stride: ye[0].layers
-             })
-           })), He !== this.epoch) return ye;
-         const be = (0, LK.b)(this.engine, {
-           magFilter: "nearest",
-           minFilter: "nearest",
-           mipmapFilter: "linear",
-           addressModeU: "repeat",
-           addressModeV: "repeat"
-         });
- ... (7 more removed lines; see GitHub link above)
+         } else if (NW in iW) {
+           const WW = iW[NW];
+           WW.children.push(OW(EW, WW))
+         } else mW.push(OW(EW, null))
+       }
+       return mW
+     }
+ 
+     function UP(WW, iW) {
+       iW(WW.value);
+       for (let OW = WW.children.length - 1; OW >= 0; OW--) UP(WW.children[OW], iW)
+     }
+ 
+     function kP(WW, iW) {
+       return Boolean("IFRAME" === WW.nodeName && iW.getMeta(WW))
+     }
+ ... (49 more added lines; see GitHub link above)
```

#### 278. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4969-L5003` → after: `L7137-L7144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7137-L7144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7137-L7144) · [Before (L4969-L5003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4969-L5003)

```diff
-       boundTexture(ee) {
-         const ie = this.atlasBindings.get(ee);
-         if (ie) return ie;
-         const He = this.atlasSources.get(ee);
-         if (He) return this.rebuildAtlas(ee, He), null;
-         const ye = ee;
-         if (ye.released) return null;
-         const be = this.textureSlot(ye, !0),
-           {
-             state: Me
-           } = be;
-         if (!Me.view && (Me.wanted = !0, Me.loading || Me.failed || this.upload(ye, Me), !Me.view)) return null;
-         const Ke = this.chosenSampler(ye, be),
-           Ue = be.bound;
-         return Ue && Ue.view === Me.view && Ue.sampler === Ke ? Ue : (be.bound = {
-           view: Me.view,
- ... (19 more removed lines; see GitHub link above)
+       return OW
+     }
+     "undefined" !== typeof window && window.Proxy && window.Reflect && (mP = new Proxy(mP, {
+       get: (WW, iW, OW) => ("map" === iW && console.error(OP), Reflect.get(WW, iW, OW))
+     }));
+     class TP {
+       constructor() {
+         NW(this, "id", 1), NW(this, "styleIDMap", new WeakMap), NW(this, "idStyleMap", new Map)
```

#### 279. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5005-L5007` → after: `L7146-L7147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7146-L7147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7146-L7147) · [Before (L5005-L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5005-L5007)

```diff
-       textureLoaded(ee) {
-         var ie, He;
-         return null !== (ie = null === (He = this.heldSlot(ee)) || void 0 === He ? void 0 : He.state.decoded) && void 0 !== ie ? ie : null
+       getId(WW) {
+         return this.styleIDMap.get(WW) ?? -1
```

#### 280. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5009-L5011` → after: `L7149-L7150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7149-L7150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7149-L7150) · [Before (L5009-L5011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5009-L5011)

```diff
-       textureFailed(ee) {
-         var ie;
-         return !0 === (null === (ie = this.heldSlot(ee)) || void 0 === ie ? void 0 : ie.state.failed)
+       has(WW) {
+         return this.styleIDMap.has(WW)
```

#### 281. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5013-L5015` → after: `L7152-L7155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7152-L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7152-L7155) · [Before (L5013-L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5013-L5015)

```diff
-       heldSlot(ee) {
-         const ie = ee.gpu[we.e.lite];
-         return (null === ie || void 0 === ie ? void 0 : ie.epoch) === this.epoch ? ie : void 0
+       add(WW, iW) {
+         if (this.has(WW)) return this.getId(WW);
+         let OW;
+         return OW = void 0 === iW ? this.id++ : iW, this.styleIDMap.set(WW, OW), this.idStyleMap.set(OW, WW), OW
```

#### 282. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5017-L5038` → after: `L7157-L7158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7157-L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7157-L7158) · [Before (L5017-L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5017-L5038)

```diff
-       chosenSampler(ee, ie) {
-         const {
-           samplingMode: He,
-           wrapU: ye,
-           wrapV: be
-         } = ee.sampler, Me = ie.state.hasMips, Ke = function(ee, ie) {
-           const {
-             bilinear: He,
-             trilinear: ye
-           } = we.h;
-           return !ie && ee !== He || 11 !== ee && ee !== ye && ee !== He ? 1 : 4
-         }(He, Me), Ue = ie.sampler;
-         if (Ue && Ue.samplingMode === He && Ue.hasMips === Me && Ue.anisotropy === Ke && Ue.wrapU === ye && Ue.wrapV === be) return Ue.sampler;
-         const Fe = this.samplerFor(He, Me, Ke, ye, be);
-         return ie.sampler = {
-           samplingMode: He,
- ... (6 more removed lines; see GitHub link above)
+       getStyle(WW) {
+         return this.idStyleMap.get(WW) || null
```

#### 283. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5040-L5043` → after: `L7160-L7161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7160-L7161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7160-L7161) · [Before (L5040-L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5040-L5043)

```diff
-       releaseTexture(ee) {
-         var ie, He;
-         ee.view && (null === (He = this.onDestroy) || void 0 === He || He.call(this, ee.view));
-         null === (ie = ee.destroy) || void 0 === ie || ie.call(ee)
+       reset() {
+         this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
```

#### 284. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5045-L5085` → after: `L7163-L7164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7163-L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7163-L7164) · [Before (L5045-L5085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5045-L5085)

```diff
-       textureSlot(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const He = ee.gpu[we.e.lite];
-         if ((null === He || void 0 === He ? void 0 : He.epoch) === this.epoch) return He;
-         const ye = function(ee) {
-           let {
-             source: ie,
-             sampler: He
-           } = ee;
-           return "canvas" === ie.kind ? null : `${ie.kind}|${eU(ie)}|${He.noMipmap}|${He.samplingMode}|${He.invertY}`
-         }(ee);
-         let be = null === ye ? void 0 : this.textures.get(ye);
-         var Me;
-         be || (be = {
-           refs: 0,
-           view: null,
- ... (25 more removed lines; see GitHub link above)
+       generateId() {
+         return this.id++
```

#### 285. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5087-L5090` → after: `L7166-L7290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7166-L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7166-L7290) · [Before (L5087-L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5087-L5090)

```diff
-       samplerFor(ee, ie, He, ye, be) {
-         const Me = `${ee}|${ie}|${He}|${ye}|${be}`;
-         let Ke = this.samplers.get(Me);
-         if (!Ke) {
+     }
+ 
+     function JP(WW) {
+       var iW;
+       let OW = null;
+       return "getRootNode" in WW && (null == (iW = WP.getRootNode(WW)) ? void 0 : iW.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && WP.host(WP.getRootNode(WW)) && (OW = WP.host(WP.getRootNode(WW))), OW
+     }
+ 
+     function hP(WW) {
+       let iW, OW = WW;
+       for (; iW = JP(OW);) OW = iW;
+       return OW
+     }
+ 
+     function HP(WW) {
+       const iW = WP.ownerDocument(WW);
+ ... (109 more added lines; see GitHub link above)
```

#### 286. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5092-L5094` → after: `L7292-L7315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7292-L7315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7292-L7315) · [Before (L5092-L5094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5092-L5094)

```diff
-             ...GK(ee, ie, He),
-             addressModeU: rK(ye),
-             addressModeV: rK(be)
+             texts: this.texts.map((WW => {
+               const iW = WW.node,
+                 OW = WP.parentNode(iW);
+               return OW && "TEXTAREA" === OW.tagName && this.genTextAreaValueMutation(OW), {
+                 id: this.mirror.getId(iW),
+                 value: WW.value
+               }
+             })).filter((WW => !iW.has(WW.id))).filter((WW => this.mirror.has(WW.id))),
+             attributes: this.attributes.map((WW => {
+               const {
+                 attributes: iW
+               } = WW;
+               if ("string" === typeof iW.style) {
+                 const OW = JSON.stringify(WW.styleDiff),
+                   mW = JSON.stringify(WW._unchangedStyles);
+                 OW.length < iW.style.length && (OW + mW).split("var(").length === iW.style.split("var(").length && (iW.style = WW.styleDiff)
+ ... (8 more added lines; see GitHub link above)
```

#### 287. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5096-L5098` → after: `L7317-L7421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7317-L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7317-L7421) · [Before (L5096-L5098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5096-L5098)

```diff
-           Ke = (0, LK.b)(this.engine, Ue), this.samplers.set(Me, Ke)
-         }
-         return Ke
+           (tW.texts.length || tW.attributes.length || tW.removes.length || tW.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTr … [truncated]
+         })), NW(this, "genTextAreaValueMutation", (WW => {
+           let iW = this.attributeMap.get(WW);
+           iW || (iW = {
+             node: WW,
+             attributes: {},
+             styleDiff: {},
+             _unchangedStyles: {}
+           }, this.attributes.push(iW), this.attributeMap.set(WW, iW));
+           const OW = Array.from(WP.childNodes(WW), (WW => WP.textContent(WW) || "")).join("");
+           iW.attributes.value = hW({
+             element: WW,
+             maskInputOptions: this.maskInputOptions,
+             tagName: WW.tagName,
+             type: uW(WW),
+             value: OW,
+ ... (89 more added lines; see GitHub link above)
```

#### 288. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5100-L5105` → after: `L7423-L7426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7423-L7426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7423-L7426) · [Before (L5100-L5105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5100-L5105)

```diff
-       upload(ee, ie) {
-         const {
-           source: He,
-           sampler: ye
-         } = ee;
-         ie.hasMips = !ye.noMipmap, "canvas" === He.kind ? this.createDynamic(He, ie) : "cube" === He.kind ? this.uploadCube(ie, He.luminance) : this.uploadImage(ie, !0 === ye.invertY, He.url)
+       init(WW) {
+         ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", … [truncated]
+           this[iW] = WW[iW]
+         }))
```

#### 289. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5107-L5119` → after: `L7428-L7429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7428-L7429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7428-L7429) · [Before (L5107-L5119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5107-L5119)

```diff
-       uploadImage(ee, ie, He) {
-         const [ye] = ee.images;
-         ee.images = null;
-         const {
-           epoch: be
-         } = this, Me = (0, CK.b)(this.engine, ye, {
-           mipMaps: ee.hasMips,
-           invertY: ie,
-           srgb: !1
-         }).then((ie => {
-           ye.close(), 0 !== ee.refs && be === this.epoch ? (ee.view = ie.view, ee.destroy = ie.texture.destroy.bind(ie.texture)) : ie.texture.destroy()
-         }));
-         this.track(ee, He, Me)
+       freeze() {
+         this.frozen = !0, this.canvasManager.freeze()
```

#### 290. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5121-L5129` → after: `L7431-L7432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7431-L7432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7431-L7432) · [Before (L5121-L5129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5121-L5129)

```diff
-       track(ee, ie, He, ye) {
-         const {
-           epoch: be
-         } = this;
-         ee.loading = !0, this.pending++, He.catch((He => {
-           be === this.epoch && (ee.failed = !0, console.warn(`Lite: could not load texture ${re(ie)}`, He))
-         })).finally((() => {
-           be === this.epoch && (ee.loading = !1, this.pending--, null === ye || void 0 === ye || ye())
-         }))
+       unfreeze() {
+         this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
```

#### 291. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5131-L5139` → after: `L7434-L7435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7434-L7435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7434-L7435) · [Before (L5131-L5139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5131-L5139)

```diff
-       uploadCube(ee, ie) {
-         const He = ee.images;
-         ee.images = null;
-         const ye = lK(this.engine, this.device, He, (0, we.u)(ie), ee.hasMips);
-         ee.view = ye.createView({
-           dimension: "cube"
-         }), ee.destroy = () => {
-           ye.destroy()
-         }
+       isFrozen() {
+         return this.frozen
```

#### 292. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5141-L5150` → after: `L7437-L7438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7437-L7438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7437-L7438) · [Before (L5141-L5150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5141-L5150)

```diff
-       createDynamic(ee, ie) {
-         const {
-           canvas: He
-         } = ee, ye = (0, vK.c)(this.engine, Math.max(1, He.width), Math.max(1, He.height), {
-           mipMaps: ie.hasMips,
-           srgb: !1
-         });
-         ie.dynamic = ye, ie.view = ye.view, ie.destroy = () => {
-           ye.texture.destroy()
-         }, this.pushDynamic(ee, ie)
+       lock() {
+         this.locked = !0, this.canvasManager.lock()
```

#### 293. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5152-L5161` → after: `L7440-L7444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7440-L7444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7440-L7444) · [Before (L5152-L5161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5152-L5161)

```diff
-       pushDynamic(ee, ie) {
-         const He = ie.dynamicSource,
-           ye = ie.dynamic,
-           {
-             canvas: be
-           } = ee;
-         if (He && ye && 0 !== be.width && 0 !== be.height) return be.width !== ye.width || be.height !== ye.height ? (this.releaseTexture(ie), ie.dynamic = null, ie.view = null, void this.createDynamic(ee, ie)) : void(0, vK.d)(this.engine, ye, be, {
-           invertY: He.invertY,
-           premultiplyAlpha: He.premultiplied
-         })
+       unlock() {
+         this.locked = !1, this.canvasManager.unlock(), this.emit()
+       }
+       reset() {
+         this.shadowDomManager.reset(), this.canvasManager.reset()
```

#### 294. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5166` → after: `L7566-L7591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7566-L7591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7566-L7591) · [Before (L5166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5166)

```diff
-       return "cube" === ee.kind ? ee.rootUrl : "canvas" === ee.kind ? "canvas" : ee.url
+       let {
+         scrollCb: iW,
+         doc: OW,
+         mirror: mW,
+         blockClass: EW,
+         blockSelector: NW,
+         sampling: PW
+       } = WW;
+       const LW = RP(EP(RP((WW => {
+         const PW = IP(WW);
+         if (!PW || tP(PW, EW, NW, !0)) return;
+         const LW = mW.getId(PW);
+         if (PW === OW && OW.defaultView) {
+           const WW = PP(OW.defaultView);
+           iW({
+             id: LW,
+ ... (10 more added lines; see GitHub link above)
```

#### 295. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5168-L5169` → after: `L7593-L7594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7593-L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7593-L7594) · [Before (L5168-L5169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5168-L5169)

```diff
-     const iU = new Uint8Array(4);
-     var HU = He(39540);
+     const FP = ["INPUT", "TEXTAREA", "SELECT"],
+       QP = new WeakMap;
```

#### 296. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5172-L5186` → after: `L7597-L7608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7597-L7608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7597-L7608) · [Before (L5172-L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5172-L5186)

```diff
-       const ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
-       ee._colorAttachment.storeOp = ee._targetSignature._sampleCount > 1 ? ie : "store";
-       const He = ee._renderPassDescriptor.depthStencilAttachment;
-       He && (He.depthStoreOp = ie, He.stencilStoreOp && (He.stencilStoreOp = ie))
-     }
-     var bU = He(38590),
-       MU = He(38657),
-       KU = He(38185),
-       UU = He(40477);
-     const FU = new Float64Array([1, 1, 1]),
-       JU = new Float64Array([0, 1, 0]),
-       oU = new Float64Array(4),
-       RU = new Float32Array(16),
-       kU = new Float64Array(3),
-       qU = new Float64Array(4);
+       return function WW(iW, OW) {
+         if (EL("CSSGroupingRule") && iW.parentRule instanceof CSSGroupingRule || EL("CSSMediaRule") && iW.parentRule instanceof CSSMediaRule || EL("CSSSupportsRule") && iW.parentRule instanceof CSSSupportsRule || EL("CSSConditionRule") && iW.parentRule instanceof CSSConditionRule … [truncated]
+           const mW = Array.from(iW.parentRule.cssRules).indexOf(iW);
+           return OW.unshift(mW), WW(iW.parentRule, OW)
+         }
+         if (iW.parentStyleSheet) {
+           const WW = Array.from(iW.parentStyleSheet.cssRules).indexOf(iW);
+           OW.unshift(WW)
+         }
+         return OW
+       }(WW, [])
+     }
```

#### 297. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5189-L5195` → after: `L7611-L7615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7611-L7615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7611-L7615) · [Before (L5189-L5195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5189-L5195)

```diff
-       ee.fov = ie.fov, ee.near = ie.near, ee.far = ie.far, ee.renderWidth = He.renderWidth, ee.renderHeight = He.renderHeight, (0, KU.p)(ie.holderRotation, 0, oU, 0), (0, KU.b)(FU, 0, oU, 0, ie.holderPosition, 0, RU);
-       const ye = ie.Z8;
-       kU[0] = ye[0], kU[1] = ye[1], kU[2] = ye[2] + 1;
-       const be = ee.viewMatrix;
-       (0, KU.i)(ye, kU, JU, be), (0, KU.g)(be, 0, be), (0, KU.k)(be, RU, 0, be), (0, KU.g)(be, 0, be);
-       const Me = ee.worldMatrix;
-       (0, KU.g)(be, 0, Me), ee.eye[0] = Me[12], ee.eye[1] = Me[13], ee.eye[2] = Me[14], qU[0] = ee.fov, qU[1] = ee.renderWidth / ee.renderHeight, qU[2] = ee.near, qU[3] = ee.far, (0, KU.m)(qU, ee.projectionMatrix), (0, KU.k)(be, ee.projectionMatrix, 0, ee.viewProjectionMatrix), ( … [truncated]
+       let mW, EW;
+       return WW ? (WW.ownerNode ? mW = iW.getId(WW.ownerNode) : EW = OW.getId(WW), {
+         styleId: EW,
+         id: mW
+       }) : {}
```

#### 298. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5199-L5206` → after: `L7619-L7650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7619-L7650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7619-L7650) · [Before (L5199-L5206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5199-L5206)

```diff
-       let He = ee.frustumPlanes;
-       He || (He = ee.frustumPlanes = Array.from({
-         length: 6
-       }, (() => new bU.c(0, 0, 0, 0))));
-       for (let ye = 0; ye < 6; ye++) {
-         const ee = He[ye].normal;
-         ee._x = ie[4 * ye], ee._y = ie[4 * ye + 1], ee._z = ie[4 * ye + 2], ee._isDirty = !0, He[ye].d = ie[4 * ye + 3]
-       }
+       let {
+         mirror: OW,
+         stylesheetManager: mW
+       } = WW;
+       var EW, NW, PW;
+       let LW = null;
+       LW = "#document" === iW.nodeName ? OW.getId(iW) : OW.getId(WP.host(iW));
+       const cW = "#document" === iW.nodeName ? null == (EW = iW.defaultView) ? void 0 : EW.Document : null == (PW = null == (NW = iW.ownerDocument) ? void 0 : NW.defaultView) ? void 0 : PW.ShadowRoot,
+         wW = (null == cW ? void 0 : cW.prototype) ? Object.getOwnPropertyDescriptor(null == cW ? void 0 : cW.prototype, "adoptedStyleSheets") : void 0;
+       return null !== LW && -1 !== LW && cW && wW ? (Object.defineProperty(iW, "adoptedStyleSheets", {
+         configurable: wW.configurable,
+         enumerable: wW.enumerable,
+         get() {
+           var WW;
+           return null == (WW = wW.get) ? void 0 : WW.call(this)
+         },
+ ... (16 more added lines; see GitHub link above)
```

#### 299. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5209-L5213` → after: `L7653-L8155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7653-L8155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7653-L8155) · [Before (L5209-L5213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5209-L5213)

```diff
-     function pU(ee, ie) {
-       const He = ie.clearColor;
-       ee.clearColour[0] = He.r, ee.clearColour[1] = He.g, ee.clearColour[2] = He.b, ee.clearColour[3] = He.a;
-       const ye = ie.ambientColor;
-       ee.ambientColour[0] = ye.r, ee.ambientColour[1] = ye.g, ee.ambientColour[2] = ye.b, ee.animationRatio = ie.animationRatio, ee.frameId = ie.frameId, ee.version++
+     function mL(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const OW = WW.doc.defaultView;
+       if (!OW) return () => {};
+       let mW;
+       ! function(WW, iW) {
+         const {
+           mutationCb: OW,
+           mousemoveCb: mW,
+           mouseInteractionCb: EW,
+           scrollCb: NW,
+           viewportResizeCb: PW,
+           inputCb: LW,
+           mediaInteractionCb: cW,
+           styleSheetRuleCb: wW,
+           styleDeclarationCb: tW,
+ ... (487 more added lines; see GitHub link above)
```

#### 300. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5217-L5218` → after: `L8159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8159) · [Before (L5217-L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5217-L5218)

```diff
-       const ie = ee.model.view;
-       return ie.animTick = (0, MU.e)(), ie.timeMs = performance.now(), pU(ie, ee.yp), ee.model.update(ie.frameId), ie
+       return "undefined" !== typeof window[WW]
```

#### 301. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5222-L5227` → after: `L8163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8163) · [Before (L5222-L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5222-L5227)

```diff
-       const ie = ee.yp,
-         {
-           view: He,
-           W8: ye
-         } = ee.model;
-       return fU(He, ye, ie.Nf()), ie.onBeforeRenderObservable.notifyObservers(ie), TU(ie, He.frustum), ie.onBeforeCameraRenderObservable.notifyObservers(ie.activeCamera), XU(ee)
+       return Boolean("undefined" !== typeof window[WW] && window[WW].prototype && "insertRule" in window[WW].prototype && "deleteRule" in window[WW].prototype)
```

#### 302. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5257-L5288` → after: `L8167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8167) · [Before (L5257-L5288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5257-L5288)

```diff
-         this.units = ee, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
-       }
-       get ready() {
-         return this.bufferReady && (!this.twin || this.twinReady)
-       }
-       destroy() {
-         var ee;
-         this.buffer.destroy(), null === (ee = this.twin) || void 0 === ee || ee.destroy()
-       }
-     }
-     class tU {
-       constructor(ee, ie) {
-         this.arena = ee, this.zp = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.zp = new jK(ie);
-         const He = new WU(ie);
-         He.buffer = this.createBuffer(He, !1), this.backings.push(He), this.refresh()
-       }
- ... (16 more removed lines; see GitHub link above)
+         NW(this, "iframeIdToRemoteIdMap", new WeakMap), NW(this, "iframeRemoteIdToIdMap", new WeakMap), this.generateIdFn = WW
```

#### 303. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5290-L5330` → after: `L8169-L8173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8169-L8173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8169-L8173) · [Before (L5290-L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5290-L5330)

```diff
-       holds(ee) {
-         return ee.start + ee.length <= this.usable
-       }
-       lost(ee) {
-         return this.dropped || ee.start + ee.length > this.bk
-       }
-       write(ee, ie) {
-         const {
-           device: He,
-           unitBytes: ye
-         } = this.arena;
-         for (const be of this.backings) {
-           const Me = (be.units - ee.start) * ye;
-           Me > 0 && He.queue.writeBuffer(be.buffer, ee.start * ye, ie, 0, Math.min(ie.byteLength, Me))
-         }
-       }
- ... (25 more removed lines; see GitHub link above)
+       getId(WW, iW, OW, mW) {
+         const EW = OW || this.getIdToRemoteIdMap(WW),
+           NW = mW || this.getRemoteIdToIdMap(WW);
+         let PW = EW.get(iW);
+         return PW || (PW = this.generateIdFn(), EW.set(iW, PW), NW.set(PW, iW)), PW
```

#### 304. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5332-L5333` → after: `L8175-L8178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8175-L8178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8175-L8178) · [Before (L5332-L5333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5332-L5333)

```diff
-       retire() {
-         this.dropped = !0, this.refresh()
+       getIds(WW, iW) {
+         const OW = this.getIdToRemoteIdMap(WW),
+           mW = this.getRemoteIdToIdMap(WW);
+         return iW.map((iW => this.getId(WW, iW, OW, mW)))
```

#### 305. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5335-L5340` → after: `L8180-L8184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8180-L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8180-L8184) · [Before (L5335-L5340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5335-L5340)

```diff
-       drop() {
-         if (!this.dropped) {
-           this.dropped = !0;
-           for (const ee of this.backings) ee.destroy();
-           this.refresh(), this.arena.remove(this)
-         }
+       getRemoteId(WW, iW, OW) {
+         const mW = OW || this.getRemoteIdToIdMap(WW);
+         if ("number" !== typeof iW) return iW;
+         const EW = mW.get(iW);
+         return EW || -1
```

#### 306. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5342-L5360` → after: `L8186-L8188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8186-L8188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8186-L8188) · [Before (L5342-L5360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5342-L5360)

```diff
-       createBuffer(ee, ie) {
-         const {
-           device: He,
-           unitBytes: ye,
-           twinUnitBytes: be,
-           usage: Me,
-           label: Ke
-         } = this.arena;
-         He.pushErrorScope("out-of-memory");
-         const Ue = He.createBuffer({
-           label: ie ? `${Ke}-light` : Ke,
-           size: ee.units * (ie ? be : ye),
-           usage: (ie ? this.arena.twinUsage : Me) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
-         });
-         return this.arena.awaitingVerdict++, He.popErrorScope().then((He => {
-           this.arena.awaitingVerdict--, this.settle(ee, ie, !He, !0)
- ... (3 more removed lines; see GitHub link above)
+       getRemoteIds(WW, iW) {
+         const OW = this.getRemoteIdToIdMap(WW);
+         return iW.map((iW => this.getRemoteId(WW, iW, OW)))
```

#### 307. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5362-L5371` → after: `L8190-L8192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8190-L8192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8190-L8192) · [Before (L5362-L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5362-L5371)

```diff
-       settle(ee, ie, He, ye) {
-         const be = this.backings.indexOf(ee);
-         if (!(this.dropped || be < 0)) {
-           if (!He) {
-             if (ye && this.arena.ranOutOfMemory(ee.units, ee.units * (ie ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === be) return void this.drop();
-             for (const ee of this.backings.splice(be)) ee.destroy();
-             return this.zp.truncate(this.backings[be - 1].units), this.growable = !1, void this.promote()
-           }
-           ie ? ee.twinReady = !0 : (ee.bufferReady = !0, this.arena.allocatedBuffer(ee.units)), this.promote()
-         }
+       reset(WW) {
+         if (!WW) return this.iframeIdToRemoteIdMap = new WeakMap, void(this.iframeRemoteIdToIdMap = new WeakMap);
+         this.iframeIdToRemoteIdMap.delete(WW), this.iframeRemoteIdToIdMap.delete(WW)
```

#### 308. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5373-L5380` → after: `L8194-L8196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8194-L8196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8194-L8196) · [Before (L5373-L5380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5373-L5380)

```diff
-       promote() {
-         const {
-           backings: ee
-         } = this;
-         let ie = 0;
-         for (; ie + 1 < ee.length && ee[ie].ready && ee[ie + 1].ready;) ie++;
-         for (const He of ee.splice(0, ie)) He.destroy();
-         this.refresh()
+       getIdToRemoteIdMap(WW) {
+         let iW = this.iframeIdToRemoteIdMap.get(WW);
+         return iW || (iW = new Map, this.iframeIdToRemoteIdMap.set(WW, iW)), iW
```

#### 309. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5382-L5384` → after: `L8198-L8200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8198-L8200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8198-L8200) · [Before (L5382-L5384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5382-L5384)

```diff
-       refresh() {
-         const ee = this.backings[0];
-         this.buffer = ee.buffer, this.twin = ee.twinReady ? ee.twin : null, this.usable = !this.dropped && ee.bufferReady ? ee.units : 0
+       getRemoteIdToIdMap(WW) {
+         let iW = this.iframeRemoteIdToIdMap.get(WW);
+         return iW || (iW = new Map, this.iframeRemoteIdToIdMap.set(WW, iW)), iW
```

#### 310. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5388-L5463` → after: `L8204-L8205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8204-L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8204-L8205) · [Before (L5388-L5463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5388-L5463)

```diff
-       constructor(ee, ie, He, ye) {
-         let {
-           verticesPerUnit: be = 1,
-           twinUsage: Me = GPUBufferUsage.VERTEX
-         } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
-         if (this.device = ee, this.unitBytes = ie, this.usage = He, this.label = ye, this.pages = [], this.tR = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.c … [truncated]
-         this.verticesPerUnit = be, this.twinUsage = Me, this.twinValueBytes = be > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * be
-       }
-       twinLight(ee, ie) {
-         if (4 === this.twinValueBytes) return this.widened.length < ie && (this.widened = new Float32Array(Math.max(ie, 2 * this.widened.length))), this.widened.set(ee.subarray(0, ie)), {
-           light: this.widened,
-           count: ie
-         };
-         const He = ie % this.verticesPerUnit;
-         if (0 === He) return {
-           light: ee,
- ... (60 more removed lines; see GitHub link above)
+       constructor(WW) {
+         NW(this, "iframes", new WeakMap), NW(this, "crossOriginIframeMap", new WeakMap), NW(this, "crossOriginIframeMirror", new PL(RW)), NW(this, "crossOriginIframeStyleMirror"), NW(this, "crossOriginIframeRootIdMap", new WeakMap), NW(this, "mirror"), NW(this, "mutationCb"), NW( … [truncated]
```

#### 311. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5465-L5477` → after: `L8207-L8208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8207-L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8207-L8208) · [Before (L5465-L5477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5465-L5477)

```diff
-       stats() {
-         let ee = 0,
-           ie = 0,
-           He = 0,
-           ye = 0;
-         for (const be of this.pages) ee += be.bk, ie += be.zp.used, He += be.hasTwin ? be.bk * this.twinUnitBytes : 0, ye += be.allocatedBytes;
-         return {
-           pages: this.pages.length,
-           capacityBytes: ee * this.unitBytes,
-           usedBytes: ie * this.unitBytes,
-           twinBytes: He,
-           allocatedBytes: ye
-         }
+       addIframe(WW) {
+         this.iframes.set(WW, !0), WW.contentWindow && this.crossOriginIframeMap.set(WW.contentWindow, WW)
```

#### 312. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5479-L5486` → after: `L8210-L8211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8210-L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8210-L8211) · [Before (L5479-L5486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5479-L5486)

```diff
-       assertNotDrawing() {}
-       pageLimit() {
-         const {
-           maxBufferSize: ee,
-           maxStorageBufferBindingSize: ie
-         } = this.device.limits;
-         let He = Math.floor(Math.min(67108864, ee) / this.unitBytes);
-         return this.usage & GPUBufferUsage.STORAGE && (He = Math.min(He, Math.floor(ie / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (He = Math.min(He, Math.floor(ie / this.twinUnitBytes))), He
+       addLoadListener(WW) {
+         this.loadListener = WW
```

#### 313. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5488-L5526` → after: `L8213-L8234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8213-L8234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8213-L8234) · [Before (L5488-L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5488-L5526)

```diff
-     }
-     const wU = 16383;
- 
-     function DU(ee, ie, He, ye, be) {
-       let Me = 0;
-       for (let Ke = He; Ke < ye; Ke += wU) ee.drawIndexed(6 * Math.min(wU, ye - Ke), 1, 0, ie + 4 * Ke, be), Me++;
-       return Me
-     }
-     class PU {
-       constructor(ee, ie) {
-         this.recordsGroup = ie, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
-         const He = Ni.f.strideWithoutAtlas;
-         this.vertexArena = new ZU(ee, He, GPUBufferUsage.VERTEX, `terrain-vertices-${He}`), this.quadArena = new ZU(ee, EU.c, GPUBufferUsage.STORAGE, "terrain-quads", {
-           verticesPerUnit: 4,
-           twinUsage: GPUBufferUsage.STORAGE
-         });
- ... (23 more removed lines; see GitHub link above)
+       attachIframe(WW, iW) {
+         var OW, mW;
+         this.mutationCb({
+           adds: [{
+             parentId: this.mirror.getId(WW),
+             nextId: null,
+             node: iW
+           }],
+           removes: [],
+           texts: [],
+           attributes: [],
+           isAttachIframe: !0
+         }), this.recordCrossOriginIframes && (null == (OW = WW.contentWindow) || OW.addEventListener("message", this.handleMessage.bind(this))), null == (mW = this.loadListener) || mW.call(this, WW), WW.contentDocument && WW.contentDocument.adoptedStyleSheets && WW.contentDocumen … [truncated]
+       }
+       handleMessage(WW) {
+         const iW = WW;
+ ... (6 more added lines; see GitHub link above)
```

#### 314. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5528-L5532` → after: `L8236-L8308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8236-L8308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8236-L8308) · [Before (L5528-L5532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5528-L5532)

```diff
-       lightFullSky(ee, ie) {
-         this.fullSky.length < ie && (this.fullSky = new Uint16Array(Math.max(ie, 4096)).fill(dU.h));
-         for (const He of ee) {
-           const ee = He.vertices;
-           ee.page.live && (ee.page.writeLight(ee, this.fullSky), He.lit = !0)
+       transformCrossOriginEvent(WW, iW) {
+         var OW;
+         switch (iW.type) {
+           case uP.FullSnapshot: {
+             this.crossOriginIframeMirror.reset(WW), this.crossOriginIframeStyleMirror.reset(WW), this.replaceIdOnNode(iW.data.node, WW);
+             const OW = iW.data.node.id;
+             return this.crossOriginIframeRootIdMap.set(WW, OW), this.patchRootIdOnNode(iW.data.node, OW), {
+               timestamp: iW.timestamp,
+               type: uP.IncrementalSnapshot,
+               data: {
+                 source: oP.Mutation,
+                 adds: [{
+                   parentId: this.mirror.getId(WW),
+                   nextId: null,
+                   node: iW.data.node
+                 }],
+ ... (57 more added lines; see GitHub link above)
```

#### 315. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5535-L5545` → after: `L8312-L8314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8312-L8314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8312-L8314) · [Before (L5535-L5545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5535-L5545)

```diff
-       backed(ee) {
-         const {
-           vertices: ie
-         } = ee;
-         return !!ie && ie.page.holds(ie)
-       }
-       lost(ee) {
-         const {
-           vertices: ie
-         } = ee;
-         return !!ie && ie.page.lost(ie)
+       replace(WW, iW, OW, mW) {
+         for (const EW of mW)(Array.isArray(iW[EW]) || "number" === typeof iW[EW]) && (Array.isArray(iW[EW]) ? iW[EW] = WW.getIds(OW, iW[EW]) : iW[EW] = WW.getId(OW, iW[EW]));
+         return iW
```

#### 316. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5547-L5548` → after: `L8316-L8317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8316-L8317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8316-L8317) · [Before (L5547-L5548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5547-L5548)

```diff
-       release(ee) {
-         ee.vertices && ee.vertices.page.arena.free(ee.vertices), ee.vertices = null, ee.lit = !1
+       replaceIds(WW, iW, OW) {
+         return this.replace(this.crossOriginIframeMirror, WW, iW, OW)
```

#### 317. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5550-L5551` → after: `L8319-L8320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8319-L8320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8319-L8320) · [Before (L5550-L5551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5550-L5551)

```diff
-       setDrawing(ee) {
-         this.forgetBound()
+       replaceStyleIds(WW, iW, OW) {
+         return this.replace(this.crossOriginIframeStyleMirror, WW, iW, OW)
```

#### 318. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5553-L5576` → after: `L8322-L8325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8322-L8325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8322-L8325) · [Before (L5553-L5576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5553-L5576)

```diff
-       draw(ee, ie, He) {
-         let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-           be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ie.faceCount;
-         const Me = ie.vertices,
-           Ke = Me.page,
-           Ue = He ? Ke.twin : null;
-         if (!Ke.holds(Me) || He && !Ue) return 0;
-         const {
-           verticesPerUnit: Fe
-         } = Ke.arena;
-         let Je = Me.start * Fe;
-         this.boundPattern || (ee.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
-         const oe = ye + be;
-         if (Fe > 1) return Ke.buffer === this.boundRecords && Ue === this.boundRecordsLight || (ee.setBindGroup(1, this.recordsGroup(Ke.buffer, Ue)), this.boundRecords = Ke.buffer, this.boundRecordsLight = Ue), DU(ee, Je, ye, oe, ie.slot);
-         Ke.buffer !== this.boundVertices && (ee.setVertexBuffer(0, Ke.buffer), this.boundVertices = Ke.buffer), Ue && Ue !== this.boundLight && (ee.setVertexBuffer(1, Ue), this.boundLight = Ue);
-         const Re = ie.faceCount;
- ... (8 more removed lines; see GitHub link above)
+       replaceIdOnNode(WW, iW) {
+         this.replaceIds(WW, iW, ["id", "rootId"]), "childNodes" in WW && WW.childNodes.forEach((WW => {
+           this.replaceIdOnNode(WW, iW)
+         }))
```

#### 319. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5578-L5579` → after: `L8327-L8330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8327-L8330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8327-L8330) · [Before (L5578-L5579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5578-L5579)

```diff
-       forgetBound() {
-         this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
+       patchRootIdOnNode(WW, iW) {
+         WW.type === VP.Document || WW.rootId || (WW.rootId = iW), "childNodes" in WW && WW.childNodes.forEach((WW => {
+           this.patchRootIdOnNode(WW, iW)
+         }))
```

#### 320. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5583-L5606` → after: `L8334-L8372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8334-L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8334-L8372) · [Before (L5583-L5606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5583-L5606)

```diff
-       constructor(ee, ie, He, ye) {
-         this.device = ee, this.splitBefore = ie, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = ee.createBu … [truncated]
-           label: "scene-depth-unproject",
-           size: 8,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         });
-         const be = ee.createShaderModule({
-           label: "scene-depth-copy",
-           code: (Me = He._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${Me?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(pos … [truncated]
-         });
-         var Me;
-         ee.createRenderPipelineAsync({
-           label: "scene-depth-copy",
-           layout: "auto",
-           vertex: {
-             module: be,
- ... (8 more removed lines; see GitHub link above)
+       constructor(WW) {
+         NW(this, "shadowDoms", new WeakSet), NW(this, "mutationCb"), NW(this, "scrollCb"), NW(this, "bypassOptions"), NW(this, "mirror"), NW(this, "restoreHandlers", []), this.mutationCb = WW.mutationCb, this.scrollCb = WW.scrollCb, this.bypassOptions = WW.bypassOptions, this.mir … [truncated]
+       }
+       init() {
+         this.reset(), this.patchAttachShadow(Element, document)
+       }
+       addShadowRoot(WW, iW) {
+         if (!SW(WW)) return;
+         if (this.shadowDoms.has(WW)) return;
+         this.shadowDoms.add(WW);
+         const [OW] = aP({
+           ...this.bypassOptions,
+           doc: iW,
+           mutationCb: this.mutationCb,
+           mirror: this.mirror,
+           shadowDomManager: this
+ ... (23 more added lines; see GitHub link above)
```

#### 321. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5608-L5612` → after: `L8374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8374) · [Before (L5608-L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5608-L5612)

```diff
-         }).then((ee => {
-           this.pipeline = ee, this.building = !1
-         }), (ee => {
-           this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", ee)
-         })), He._executeWithTransmission = () => this.execute(He, ye)
+         })))
```

#### 322. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5614-L5615` → after: `L8376-L8381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8376-L8381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8376-L8381) · [Before (L5614-L5615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5614-L5615)

```diff
-       get compiling() {
-         return this.building
+       reset() {
+         this.restoreHandlers.forEach((WW => {
+           try {
+             WW()
+           } catch (iW) {}
+         })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
```

#### 323. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5617-L5618` → after: `L8383-L8403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8383-L8403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8383-L8403) · [Before (L5617-L5618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5617-L5618)

```diff
-       setWanted(ee) {
-         this.wanted = ee
+     }
+     for (var wL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", tL = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256), ZL = 0; ZL < 64; ZL++) tL[wL.charCodeAt(ZL)] = ZL;
+     const xL = new Map;
+     const lL = (WW, iW, OW) => {
+       if (!WW || !jL(WW, iW) && "object" !== typeof WW) return;
+       const mW = function(WW, iW) {
+         let OW = xL.get(WW);
+         return OW || (OW = new Map, xL.set(WW, OW)), OW.has(iW) || OW.set(iW, []), OW.get(iW)
+       }(OW, WW.constructor.name);
+       let EW = mW.indexOf(WW);
+       return -1 === EW && (EW = mW.length, mW.push(WW)), EW
+     };
+ 
+     function AL(WW, iW, OW) {
+       if (WW instanceof Array) return WW.map((WW => AL(WW, iW, OW)));
+       if (null === WW) return WW;
+ ... (5 more added lines; see GitHub link above)
```

#### 324. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5620-L5621` → after: `L8405-L8415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8405-L8415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8405-L8415) · [Before (L5620-L5621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5620-L5621)

```diff
-       setPlanes(ee, ie) {
-         ee === this.near && ie === this.far || (this.near = ee, this.far = ie, this.unproject[0] = ee / (ie - ee), this.unproject[1] = ie * ee / (ie - ee), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
+       if (WW instanceof ArrayBuffer) {
+         return {
+           rr_type: WW.constructor.name,
+           base64: function(WW) {
+             var iW, OW = new Uint8Array(WW),
+               mW = OW.length,
+               EW = "";
+             for (iW = 0; iW < mW; iW += 3) EW += wL[OW[iW] >> 2], EW += wL[(3 & OW[iW]) << 4 | OW[iW + 1] >> 4], EW += wL[(15 & OW[iW + 1]) << 2 | OW[iW + 2] >> 6], EW += wL[63 & OW[iW + 2]];
+             return mW % 3 === 2 ? EW = EW.substring(0, EW.length - 1) + "=" : mW % 3 === 1 && (EW = EW.substring(0, EW.length - 2) + "=="), EW
+           }(WW)
+         }
```

#### 325. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5623-L5625` → after: `L8417-L8421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8417-L8421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8417-L8421) · [Before (L5623-L5625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5623-L5625)

```diff
-       get view() {
-         var ee, ie;
-         return null !== (ee = null === (ie = this.copy) || void 0 === ie ? void 0 : ie.view) && void 0 !== ee ? ee : null
+       if (WW instanceof DataView) {
+         return {
+           rr_type: WW.constructor.name,
+           args: [AL(WW.buffer, iW, OW), WW.byteOffset, WW.byteLength]
+         }
```

#### 326. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5627-L5641` → after: `L8423-L8424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8423-L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8423-L8424) · [Before (L5627-L5641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5627-L5641)

```diff
-       execute(ee, ie) {
-         var He;
-         null === (He = this.retired) || void 0 === He || He.destroy(), this.retired = null;
-         const ye = di(ie),
-           be = ee._transparentBindings,
-           Me = this.wanted && this.pipeline ? this.splitIndex(be) : -1,
-           Ke = ee._colorAttachment,
-           Ue = Ke.resolveTarget;
-         Me >= 0 && (Ke.resolveTarget = void 0, yU(ee, !0));
-         let Fe = ye.beginRenderPass(ee._renderPassDescriptor);
-         Fe.setBindGroup(0, ee._sceneBG);
-         let Je = this.drawList(Fe, ie, ee._opaqueBindings, 0, ee._opaqueBindings.length);
-         if (Je += this.drawList(Fe, ie, ee._directBindings, 0, ee._directBindings.length), Je += this.drawList(Fe, ie, be, 0, Me >= 0 ? Me : be.length), Fe.end(), Me < 0) return Je;
-         yU(ee);
-         const oe = ee._renderPassDescriptor.depthStencilAttachment,
+       if (WW instanceof HTMLImageElement) {
+         const iW = WW.constructor.name,
```

#### 327. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5643-L5651` → after: `L8426-L8430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8426-L8430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8426-L8430) · [Before (L5643-L5651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5643-L5651)

```diff
-             depthLoadOp: Re,
-             stencilLoadOp: ke
-           } = oe,
-           qe = Ke.loadOp;
-         Ke.resolveTarget = Ue;
-         try {
-           this.copyDepth(ye, ee), Ke.loadOp = "load", oe.depthLoadOp = "load", ke && (oe.stencilLoadOp = "load"), Fe = ye.beginRenderPass(ee._renderPassDescriptor), Fe.setBindGroup(0, ee._sceneBG), Je += this.drawList(Fe, ie, be, Me, be.length), Fe.end()
-         } finally {
-           Ke.loadOp = qe, oe.depthLoadOp = Re, oe.stencilLoadOp = ke
+             src: OW
+           } = WW;
+         return {
+           rr_type: iW,
+           src: OW
```

#### 328. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5660-L5666` → after: `L8433-L8436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8433-L8436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8433-L8436) · [Before (L5660-L5666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5660-L5666)

```diff
-       drawList(ee, ie, He, ye, be) {
-         let Me = null,
-           Ke = 0;
-         for (let Ue = ye; Ue < be; Ue++) {
-           const ye = He[Ue],
-             be = ye.renderable.mesh;
-           be && !1 === be.visible || (ye.pipeline !== Me && (ee.setPipeline(ye.pipeline), Me = ye.pipeline), Ke += ye.draw(ee, ie))
+       if (WW instanceof HTMLCanvasElement) {
+         return {
+           rr_type: "HTMLImageElement",
+           src: WW.toDataURL()
```

#### 329. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5670-L5675` → after: `L8439-L8443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8439-L8443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8439-L8443) · [Before (L5670-L5675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5670-L5675)

```diff
-       copyDepth(ee, ie) {
-         var He, ye;
-         const be = (null !== (He = ie._config.depth) && void 0 !== He ? He : ie._config.rt)._depthTexture,
-           Me = (null === (ye = this.copy) || void 0 === ye ? void 0 : ye.source) === be ? this.copy : this.remakeCopy(be),
-           Ke = ee.beginRenderPass(Me.pass);
-         Ke.setPipeline(this.pipeline), Ke.setBindGroup(0, Me.bindGroup), Ke.draw(3), Ke.end()
+       if (WW instanceof ImageData) {
+         return {
+           rr_type: WW.constructor.name,
+           args: [AL(WW.data, iW, OW), WW.width, WW.height]
+         }
```

#### 330. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5677-L5717` → after: `L8445-L8449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8445-L8449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8445-L8449) · [Before (L5677-L5717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5677-L5717)

```diff
-       remakeCopy(ee) {
-         var ie, He;
-         this.retired = null !== (ie = null === (He = this.copy) || void 0 === He ? void 0 : He.texture) && void 0 !== ie ? ie : null;
-         const ye = this.device.createTexture({
-             label: "scene-depth",
-             size: [ee.width, ee.height],
-             format: "r32float",
-             usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
-           }),
-           be = ye.createView(),
-           Me = this.device.createBindGroup({
-             label: "scene-depth-copy",
-             layout: this.pipeline.getBindGroupLayout(0),
-             entries: [{
-               binding: 0,
-               resource: ee.createView({
- ... (25 more removed lines; see GitHub link above)
+       if (jL(WW, iW) || "object" === typeof WW) {
+         return {
+           rr_type: WW.constructor.name,
+           index: lL(WW, iW, OW)
+         }
```

#### 331. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5720` → after: `L8453-L8457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8453-L8457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8453-L8457) · [Before (L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5720)

```diff
-     const YU = "rgba8unorm";
+     const bL = (WW, iW, OW) => WW.map((WW => AL(WW, iW, OW))),
+       jL = (WW, iW) => {
+         const OW = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((WW => "function" ===  … [truncated]
+         return Boolean(OW.find((OW => WW instanceof iW[OW])))
+       };
```

#### 332. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5722-L5749` → after: `L8459-L8475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8459-L8475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8459-L8475) · [Before (L5722-L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5722-L5749)

```diff
-     function VU(ee) {
-       return ee ? 15 : 1
-     }
-     class aU {
-       constructor(ee, ie, He, ye) {
-         this.device = ee, this.terrain = ye, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = ie._targetSi … [truncated]
-           label: "sun-shadow-mask-camera",
-           size: 64,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         }), this.layout = ee.createBindGroupLayout({
-           label: "sun-shadow-mask",
-           entries: [{
-             binding: 0,
-             visibility: GPUShaderStage.FRAGMENT,
-             texture: {
-               sampleType: "unfilterable-float"
- ... (12 more removed lines; see GitHub link above)
+     function UL(WW, iW, OW, mW) {
+       const EW = [];
+       try {
+         const NW = QN(WW.HTMLCanvasElement.prototype, "getContext", (function(WW) {
+           return function(EW) {
+             for (var NW = arguments.length, PW = new Array(NW > 1 ? NW - 1 : 0), LW = 1; LW < NW; LW++) PW[LW - 1] = arguments[LW];
+             if (!tP(this, iW, OW, !0)) {
+               const WW = function(WW) {
+                 return "experimental-webgl" === WW ? "webgl" : WW
+               }(EW);
+               if ("__context" in this || (this.__context = WW), mW && ["webgl", "webgl2"].includes(WW))
+                 if (PW[0] && "object" === typeof PW[0]) {
+                   const WW = PW[0];
+                   WW.preserveDrawingBuffer || (WW.preserveDrawingBuffer = !0)
+                 } else PW.splice(0, 1, {
+                   preserveDrawingBuffer: !0
+ ... (1 more added lines; see GitHub link above)
```

#### 333. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5751-L5784` → after: `L8477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8477) · [Before (L5751-L5784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5751-L5784)

```diff
-           }]
-         });
-         const be = ee.createBindGroupLayout({
-           label: "sun-shadow-mask-empty",
-           entries: []
-         });
-         this.empty = ee.createBindGroup({
-           label: "sun-shadow-mask-empty",
-           layout: be,
-           entries: []
-         });
-         const Me = ee.createShaderModule({
-           label: "sun-shadow-mask",
-           code: (Ke = this.edge, `${(0,ri.z)()}${Jy({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\t … [truncated]
-         });
-         var Ke;
- ... (18 more removed lines; see GitHub link above)
+             return WW.apply(this, [EW, ...PW])
```

#### 334. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5791-L5852` → after: `L8480-L8482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8480-L8482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8480-L8482) · [Before (L5791-L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5791-L5852)

```diff
-         const Ue = ie._executeWithTransmission;
-         ie._executeWithTransmission = ee => this.execute(ie, He, (() => Ue ? Ue(ee) : function(ee, ie) {
-           const He = di(ie).beginRenderPass(ee._renderPassDescriptor);
-           He.setBindGroup(0, ee._sceneBG);
-           let ye = cU(He, ie, ee._opaqueBindings);
-           return ye += cU(He, ie, ee._directBindings), ye += cU(He, ie, ee._transparentBindings), He.end(), ye
-         }(ie, He)))
-       }
-       get compiling() {
-         return this.building
-       }
-       get view() {
-         var ee, ie;
-         return null !== (ee = null === (ie = this.targets) || void 0 === ie ? void 0 : ie.maskView) && void 0 !== ee ? ee : null
-       }
-       get maskFormat() {
- ... (46 more removed lines; see GitHub link above)
+         EW.push(NW)
+       } catch {
+         console.error("failed to patch HTMLCanvasElement.prototype.getContext")
```

#### 335. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5854-L5935` → after: `L8484-L8485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8484-L8485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8484-L8485) · [Before (L5854-L5935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5854-L5935)

```diff
-       remake(ee, ie) {
-         var He;
-         this.retired = this.targets;
-         const ye = [ie.width, ie.height],
-           be = this.device.createTexture({
-             label: "sun-shadow-mask",
-             size: ye,
-             format: this.maskFormat,
-             usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
-           }),
-           Me = this.device.createTexture({
-             label: "sun-shadow-prepass-normals",
-             size: ye,
-             format: YU,
-             usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
-           }),
- ... (66 more removed lines; see GitHub link above)
+       return () => {
+         EW.forEach((WW => WW()))
```

#### 336. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5939-L5967` → after: `L8489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8489) · [Before (L5939-L5967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5939-L5967)

```diff
-     function cU(ee, ie, He) {
-       let ye = null,
-         be = 0;
-       for (const Me of He) {
-         const He = Me.renderable.mesh;
-         He && !1 === He.visible || (Me.pipeline !== ye && (ee.setPipeline(Me.pipeline), ye = Me.pipeline), be += Me.draw(ee, ie))
-       }
-       return be
-     }
-     const xU = 6e4,
-       LU = {
-         status: "ok"
-       },
-       CU = {
-         status: "skipped"
-       };
- ... (13 more removed lines; see GitHub link above)
+     function kL(WW, iW, OW, mW, EW, NW) {
```

#### 337. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5969-L6003` → after: `L8491-L8506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8491-L8506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8491-L8506) · [Before (L5969-L6003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L5969-L6003)

```diff
-         Me = Promise.all(Array.from(new Set(ee.materials), (async He => {
-           be.push(await async function(ee, ie, He, ye) {
-             const be = {
-               lighting: ee.lighting,
-               dirLightCount: Math.min(ee.dirLightCount, 4),
-               Zf: ee.runtime
-             };
-             try {
-               const Me = ie.material(ye);
-               return Me && ay(ie.programKey(Me, !1, be)) ? (await Me.ready, ee.isCancelled() ? LU : Me.bindGroupLayout ? await async function(ee, ie, He, ye) {
-                 const {
-                   device: be
-                 } = ee;
-                 let Me, Ke;
-                 be.pushErrorScope("validation");
-                 try {
- ... (19 more removed lines; see GitHub link above)
+         LW = Object.getOwnPropertyNames(WW);
+       for (const cW of LW)
+         if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(cW)) try {
+           if ("function" !== typeof WW[cW]) continue;
+           const LW = QN(WW, cW, (function(WW) {
+             return function() {
+               for (var PW = arguments.length, LW = new Array(PW), wW = 0; wW < PW; wW++) LW[wW] = arguments[wW];
+               const tW = WW.apply(this, LW);
+               if (lL(tW, NW, this), "tagName" in this.canvas && !tP(this.canvas, mW, EW, !0)) {
+                 const WW = bL(LW, NW, this),
+                   mW = {
+                     type: iW,
+                     property: cW,
+                     args: WW
+                   };
+                 OW(this.canvas, mW)
```

#### 338. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6020-L6024` → after: `L8511-L8520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8511-L8520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8511-L8520) · [Before (L6020-L6024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6020-L6024)

```diff
-           return {
-             signal: Me,
-             lost: () => be,
-             dispose: () => {
-               clearTimeout(He), clearInterval(ye)
+           PW.push(LW)
+         } catch {
+           const mW = NP(WW, cW, {
+             set(WW) {
+               OW(this.canvas, {
+                 type: iW,
+                 property: cW,
+                 args: [WW],
+                 setter: !0
+               })
```

#### 339. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6026-L6112` → after: `L8522-L8525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8522-L8525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8522-L8525) · [Before (L6026-L6112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6026-L6112)

```diff
-           }
-         }(ie.device, ee);
-       let Ue;
-       try {
-         Ue = await Promise.race([Me.then((() => "done")), Ke.signal])
-       } finally {
-         Ke.dispose()
-       }
-       if ("Ce" === Ue || He()) return {
-         status: "Ce"
-       };
-       const Fe = be.find((ee => "failed" === ee.status));
-       return Fe && "lost" !== Ue && !Ke.lost() && await new Promise((ee => {
-         setTimeout(ee, 0)
-       })), "lost" === Ue || Ke.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
-         status: "skipped"
- ... (71 more removed lines; see GitHub link above)
+           });
+           PW.push(mW)
+         }
+       return PW
```

#### 340. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6115-L6116` → after: `L8532-L8548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8532-L8548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8532-L8548) · [Before (L6115-L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6115-L6116)

```diff
-     function hU(ee, ie) {
-       return ee.group - ie.group || ee.nearest - ie.nearest
+     function KL(WW) {
+       let iW;
+       try {
+         if (iW = ML && (self.URL || self.webkitURL).createObjectURL(ML), !iW) throw "";
+         const OW = new Worker(iW, {
+           name: null == WW ? void 0 : WW.name
+         });
+         return OW.addEventListener("error", (() => {
+           (self.URL || self.webkitURL).revokeObjectURL(iW)
+         })), OW
+       } catch (OW) {
+         return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(sL), {
+           name: null == WW ? void 0 : WW.name
+         })
+       } finally {
+         iW && (self.URL || self.webkitURL).revokeObjectURL(iW)
+ ... (1 more added lines; see GitHub link above)
```

#### 341. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6119-L6126` → after: `L8551-L8567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8551-L8567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8551-L8567) · [Before (L6119-L6126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6119-L6126)

```diff
-       constructor(ee, ie) {
-         this.device = ee, this.jB = ie, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
-       }
-       createBuffer() {
-         return this.device.createBuffer({
-           label: "terrain-chunk-slots",
-           size: this.data.byteLength,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
+       constructor(WW) {
+         NW(this, "pendingCanvasMutations", new Map), NW(this, "rafStamps", {
+           latestId: 0,
+           invokeId: null
+         }), NW(this, "mirror"), NW(this, "mutationCb"), NW(this, "resetObservers"), NW(this, "frozen", !1), NW(this, "locked", !1), NW(this, "processMutation", ((WW, iW) => {
+           !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(WW) || this.pendingCanvasMutations.set(WW, []), this.pendingCanvasMutatio … [truncated]
+         }));
+         const {
+           sampling: iW = "all",
+           win: OW,
+           blockClass: mW,
+           blockSelector: EW,
+           recordCanvas: PW,
+           dataURLOptions: LW
+         } = WW;
+         this.mutationCb = WW.mutationCb, this.mirror = WW.mirror, PW && "all" === iW && this.initCanvasMutationObserver(OW, mW, EW), PW && "number" === typeof iW && this.initCanvasFPSObserver(iW, OW, mW, EW, {
+ ... (1 more added lines; see GitHub link above)
```

#### 342. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6129-L6143` → after: `L8570-L8571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8570-L8571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8570-L8571) · [Before (L6129-L6143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6129-L6143)

```diff
-       allocate() {
-         var ee;
-         const ie = null !== (ee = this.free.pop()) && void 0 !== ee ? ee : this.next++;
-         if (8 * ie >= this.data.length) {
-           const ee = new Float32Array(2 * this.data.length);
-           ee.set(this.data), this.data = ee, this.words = new Uint32Array(ee.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.jB()
-         }
-         return ie
-       }
-       release(ee) {
-         this.free.push(ee)
-       }
-       set(ee, ie, He, ye, be) {
-         const Me = 8 * ee + ny;
-         this.data[Me] = ie, this.data[Me + 1] = He, this.data[Me + 2] = ye, this.setVisibility(ee, be)
+       reset() {
+         this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers()
```

#### 343. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6145-L6146` → after: `L8573-L8574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8573-L8574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8573-L8574) · [Before (L6145-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6145-L6146)

```diff
-       setVisibility(ee, ie) {
-         this.data[8 * ee + jy] = ie, this.markDirty(ee, ee)
+       freeze() {
+         this.frozen = !0
```

#### 344. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6148-L6150` → after: `L8576-L8577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8576-L8577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8576-L8577) · [Before (L6148-L6150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6148-L6150)

```diff
-       setFaces(ee, ie, He) {
-         const ye = 8 * ee;
-         this.words[ye + sy] = ie, this.words[ye + Iy] = He, this.markDirty(ee, ee)
+       unfreeze() {
+         this.frozen = !1
```

#### 345. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6152-L6153` → after: `L8579-L8580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8579-L8580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8579-L8580) · [Before (L6152-L6153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6152-L6153)

```diff
-       markDirty(ee, ie) {
-         this.dirtyMin = Math.min(this.dirtyMin, ee), this.dirtyMax = Math.max(this.dirtyMax, ie)
+       lock() {
+         this.locked = !0
```

#### 346. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6155-L6157` → after: `L8582-L8583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8582-L8583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8582-L8583) · [Before (L6155-L6157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6155-L6157)

```diff
-       flush() {
-         if (this.dirtyMax < this.dirtyMin) return;
-         this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
+       unlock() {
+         this.locked = !1
```

#### 347. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6159-L6245` → after: `L8585-L8637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8585-L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8585-L8637) · [Before (L6159-L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6159-L6245)

```diff
-     }
-     const GU = Sy,
-       rU = !0;
-     const QU = {
-         arrayStride: 4,
-         stepMode: "vertex",
-         attributes: [{
-           shaderLocation: GU.packedLight,
-           offset: 0,
-           format: "float32"
-         }]
-       },
-       eF = {
-         srcFactor: "src-alpha",
-         dstFactor: "one-minus-src-alpha",
-         operation: "add"
- ... (71 more removed lines; see GitHub link above)
+       initCanvasFPSObserver(WW, iW, OW, mW, EW) {
+         const NW = UL(iW, OW, mW, !0),
+           PW = new Map,
+           LW = new KL;
+         LW.onmessage = WW => {
+           const {
+             id: iW
+           } = WW.data;
+           if (PW.set(iW, !1), !("base64" in WW.data)) return;
+           const {
+             base64: OW,
+             type: mW,
+             width: EW,
+             height: NW
+           } = WW.data;
+           this.mutationCb({
+ ... (37 more added lines; see GitHub link above)
```

#### 348. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6247-L6250` → after: `L8639-L8686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8639-L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8639-L8686) · [Before (L6247-L6250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6247-L6250)

```diff
-           }, {
-             binding: 1,
-             resource: {
-               buffer: this.slots.buffer
+             const mW = await createImageBitmap(WW);
+             LW.postMessage({
+               id: OW,
+               bitmap: mW,
+               width: WW.width,
+               height: WW.height,
+               dataURLOptions: EW.dataURLOptions
+             }, [mW])
+           }))), wW = requestAnimationFrame(ZW)
+         };
+         wW = requestAnimationFrame(ZW), this.resetObservers = () => {
+           NW(), cancelAnimationFrame(wW)
+         }
+       }
+       initCanvasMutationObserver(WW, iW, OW) {
+         this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
+ ... (32 more added lines; see GitHub link above)
```

#### 349. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6252-L6255` → after: `L8688-L8689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8688-L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8688-L8689) · [Before (L6252-L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6252-L6255)

```diff
-           }, {
-             binding: 2,
-             resource: {
-               buffer: null !== ee && void 0 !== ee ? ee : this.slots.buffer
+             return () => {
+               EW.forEach((WW => WW()))
```

#### 350. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6257-L6260` → after: `L8691-L8695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8691-L8695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8691-L8695) · [Before (L6257-L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6257-L6260)

```diff
-           }, {
-             binding: 3,
-             resource: {
-               buffer: null !== ie && void 0 !== ie ? ie : this.slots.buffer
+           }(this.processMutation.bind(this), WW, iW, OW),
+           NW = function(WW, iW, OW, mW) {
+             const EW = [];
+             return "undefined" !== typeof iW.WebGLRenderingContext && EW.push(...kL(iW.WebGLRenderingContext.prototype, vP.WebGL, WW, OW, mW, iW)), "undefined" !== typeof iW.WebGL2RenderingContext && EW.push(...kL(iW.WebGL2RenderingContext.prototype, vP.WebGL2, WW, OW, mW, iW)),  … [truncated]
+               EW.forEach((WW => WW()))
```

#### 351. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6262-L6263` → after: `L8697-L8700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8697-L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8697-L8700) · [Before (L6262-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6262-L6263)

```diff
-           }]
-         })
+           }(this.processMutation.bind(this), WW, iW, OW);
+         this.resetObservers = () => {
+           mW(), EW(), NW()
+         }
```

#### 352. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6265-L6268` → after: `L8702-L8703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8702-L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8702-L8703) · [Before (L6265-L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6265-L6268)

```diff
-       recordsGroup(ee, ie) {
-         const He = null !== ie && void 0 !== ie ? ie : ee;
-         let ye = this.recordsGroups.get(He);
-         return ye || (ye = this.createFrameBindGroup(ee, ie), this.recordsGroups.set(He, ye)), ye
+       startPendingCanvasMutationFlusher() {
+         requestAnimationFrame((() => this.flushPendingCanvasMutations()))
```

#### 353. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6270-L6389` → after: `L8705-L8707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8705-L8707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8705-L8707) · [Before (L6270-L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6270-L6389)

```diff
-       setChunkMesh(ee, ie, He) {
-         var ye;
-         let be = this.chunks.get(ee);
-         be ? this.geometry.release(be) : (be = {
-           mesh: ee,
-           slot: this.slots.allocate(),
-           origin: [He[0], He[1], He[2]],
-           material: null,
-           vertices: null,
-           lit: !1,
-           faceCount: 0,
-           vertexCount: 0,
-           packed: !1,
-           lostRemeshes: 0,
-           lostRetryAt: 0,
-           visibility: ee.visibility,
- ... (104 more removed lines; see GitHub link above)
+       startRAFTimestamping() {
+         const WW = iW => {
+           this.rafStamps.latestId = iW, requestAnimationFrame(WW)
```

#### 354. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6391-L6401` → after: `L8709-L8725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8709-L8725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8709-L8725) · [Before (L6391-L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6391-L6401)

```diff
-         return this.materials.set(ee, Fe), this.device.queue.writeBuffer(Fe.uniformBuffer, 0, Ue), Fe.ready = this.createMaterialBindGroup(Fe, be).catch((ie => {
-           console.error(`Lite terrain failed to load the textures of material "${ee.name}"`, ie)
-         })), Fe
-       }
-       materialLayout(ee) {
-         const ie = function(ee) {
-             const ie = ["uniforms"];
-             if ("atlas" === ee.texture) {
-               ee.animated && ie.push("animData"), ie.push("sampler");
-               for (let He = 0; He < ee.atlasCount; He++) ie.push("textureArray")
-             } else "single" === ee.texture && ie.push("sampler", "texture");
+         requestAnimationFrame(WW)
+       }
+       flushPendingCanvasMutations() {
+         this.pendingCanvasMutations.forEach(((WW, iW) => {
+           const OW = this.mirror.getId(iW);
+           this.flushPendingCanvasMutationFor(iW, OW)
+         })), requestAnimationFrame((() => this.flushPendingCanvasMutations()))
+       }
+       flushPendingCanvasMutationFor(WW, iW) {
+         if (this.frozen || this.locked) return;
+         const OW = this.pendingCanvasMutations.get(WW);
+         if (!OW || -1 === iW) return;
+         const mW = OW.map((WW => {
+             const {
+               type: iW,
+               ...OW
+ ... (1 more added lines; see GitHub link above)
```

#### 355. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6403-L6448` → after: `L8727-L8735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8727-L8735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8727-L8735) · [Before (L6403-L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6403-L6448)

```diff
-           }(ee),
-           He = ie.join(",");
-         let ye = this.materialLayouts.get(He);
-         if (!ye) {
-           const ee = GPUShaderStage.FRAGMENT;
-           ye = this.device.createBindGroupLayout({
-             label: `terrain-material-${He}`,
-             entries: ie.map(((ie, He) => {
-               switch (ie) {
-                 case "uniforms":
-                   return {
-                     binding: He, visibility: GPUShaderStage.VERTEX | ee, buffer: {
-                       type: "uniform"
-                     }
-                   };
-                 case "animData":
- ... (30 more removed lines; see GitHub link above)
+           })),
+           {
+             type: EW
+           } = OW[0];
+         this.mutationCb({
+           id: iW,
+           type: EW,
+           commands: mW
+         }), this.pendingCanvasMutations.delete(WW)
```

#### 356. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6450-L6472` → after: `L8737-L8771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8737-L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8737-L8771) · [Before (L6450-L6472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6450-L6472)

```diff
-       async createMaterialBindGroup(ee, ie) {
-         const He = [{
-           buffer: ee.uniformBuffer
-         }];
-         if (ie) {
-           const ye = await ii(this.device, ie.sources);
-           ee.atlasCount = ye.length, ee.W4 = ye[0].layerWidth, ee.atlasLayers = ye[0].layers, ie.animDataPerTex && He.push({
-             buffer: Ie(this.device, Float32Array.from(ie.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
-           }), He.push(this.sampler);
-           for (const ee of ye) He.push(ee.texture.createView({
-             dimension: "2d-array"
-           }))
-         } else if ("single" === ee.texture) {
-           const {
-             url: ie
-           } = ee.model.diffuseTexture.source, {
- ... (7 more removed lines; see GitHub link above)
+     }
+     class YL {
+       constructor(WW) {
+         NW(this, "trackedLinkElements", new WeakSet), NW(this, "mutationCb"), NW(this, "adoptedStyleSheetCb"), NW(this, "styleMirror", new TP), this.mutationCb = WW.mutationCb, this.adoptedStyleSheetCb = WW.adoptedStyleSheetCb
+       }
+       attachLinkElement(WW, iW) {
+         "_cssText" in iW.attributes && this.mutationCb({
+           adds: [],
+           removes: [],
+           texts: [],
+           attributes: [{
+             id: iW.id,
+             attributes: iW.attributes
+           }]
+         }), this.trackLinkElement(WW)
+       }
+ ... (19 more added lines; see GitHub link above)
```

#### 357. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6474-L6482` → after: `L8773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8773) · [Before (L6474-L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6474-L6482)

```diff
-         const ye = this.materialLayout(this.programKey(ee, !1));
-         ee.bindGroupLayout = ye, ee.bindGroup = this.device.createBindGroup({
-           label: `terrain-material-${ee.model.name}`,
-           layout: ye,
-           entries: He.map(((ee, ie) => ({
-             binding: ie,
-             resource: ee
-           })))
-         })
+         mW.length > 0 && (OW.styles = mW), this.adoptedStyleSheetCb(OW)
```

#### 358. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6484-L6576` → after: `L8775-L8782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8775-L8782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8775-L8782) · [Before (L6484-L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6484-L6576)

```diff
-       programKey(ee, ie) {
-         let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         const ye = He ? He.lighting : this.lighting,
-           be = He ? He.Zf : this.Zf,
-           Me = {
-             texture: ee.texture,
-             atlasCount: ee.atlasCount,
-             W4: ee.W4,
-             atlasLayers: ee.atlasLayers,
-             animated: ee.animated,
-             alphaTest: ee.model.transparencyMode === te.s.alphaTest,
-             lighting: ye,
-             dirLightCount: He ? He.dirLightCount : this.dirLightCount,
-             packed: ie
-           };
-         if (!be) return Me;
- ... (77 more removed lines; see GitHub link above)
+       reset() {
+         this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
+       }
+       trackStylesheetInLinkElement(WW) {}
+     }
+     class yL {
+       constructor() {
+         NW(this, "nodeMap", new WeakMap), NW(this, "active", !1)
```

#### 359. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6578-L6579` → after: `L8784-L8786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8784-L8786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8784-L8786) · [Before (L6578-L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6578-L6579)

```diff
-       pipelineId(ee, ie, He) {
-         return HF(ie, this.isBlended(ee), ee.model.backFaceCulling, He)
+       inOtherBuffer(WW, iW) {
+         const OW = this.nodeMap.get(WW);
+         return OW && Array.from(OW).some((WW => WW !== iW))
```

#### 360. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6581-L6584` → after: `L8788-L8791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8788-L8791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8788-L8791) · [Before (L6581-L6584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6581-L6584)

```diff
-       pipelineBuild(ee, ie, He) {
-         var ye;
-         const be = this.pipelineId(ee, ie, He);
-         return null !== (ye = this.builds.get(be)) && void 0 !== ye ? ye : this.startPipeline(be, ee, ie, He)
+       add(WW, iW) {
+         this.active || (this.active = !0, requestAnimationFrame((() => {
+           this.nodeMap = new WeakMap, this.active = !1
+         }))), this.nodeMap.set(WW, (this.nodeMap.get(WW) || new Set).add(iW))
```

#### 361. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6586` → after: `L8793-L8880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8793-L8880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8793-L8880) · [Before (L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6586)

```diff
-       startPipeline(ee, ie, He, ye) {
+       destroy() {}
+     }
+     let TL, JL, hL, HL = !1;
+     try {
+       if (2 !== Array.from([1], (WW => 2 * WW))[0]) {
+         const WW = document.createElement("iframe");
+         document.body.appendChild(WW), Array.from = (null == (mW = WW.contentWindow) ? void 0 : mW.Array.from) || Array.from, document.body.removeChild(WW)
+       }
+     } catch (Ac) {
+       console.debug("Unable to override Array.from", Ac)
+     }
+     const nL = JW();
+ 
+     function uL() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+       const {
+ ... (72 more added lines; see GitHub link above)
```

#### 362. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6588-L6601` → after: `L8882-L8891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8882-L8891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8882-L8891) · [Before (L6588-L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6588-L6601)

```diff
-         this.pipelines.set(ee, null);
-         const Me = eb(He),
-           Ke = this.isBlended(ie),
-           Ue = this.shadowMask && ye._depthStencilFormat ? function(ee, ie, He, ye) {
-             if (void 0 === ee.packVariant || ee.liquid || ie) return "none";
-             const be = (0, Qi.c)(ee.packVariant);
-             return null === be || void 0 === be || !be.sunShadow || !Uy(be, He) || be.discards || ee.alphaTest && Py(ee.packVariant) ? "none" : ye ? "edge" : "plain"
-           }(He, Ke, !!this.sunShadow, ye._sampleCount > 1) : "none";
-         let Fe;
-         try {
-           Fe = ib(He, !!this.sunShadow, Ue)
-         } catch (pe) {
-           if (!ay(He)) throw pe;
-           return this.failedPackBuild(ee, He, Me, pe)
+         const PW = WW;
+         if (PW.timestamp = FN(), !(null == (NW = GP[0]) ? void 0 : NW.isFrozen()) || PW.type === uP.FullSnapshot || PW.type === uP.IncrementalSnapshot && PW.data.source === oP.Mutation || GP.forEach((WW => WW.unfreeze())), eW) null == iW || iW(fW(PW), EW);
+         else if (vW) {
+           const WW = {
+             type: "rrweb",
+             event: fW(PW),
+             origin: window.location.origin,
+             isCheckout: EW
+           };
+           window.parent.postMessage(WW, "*")
```

#### 363. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6603-L6659` → after: `L8893-L8931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8893-L8931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L8893-L8931) · [Before (L6603-L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6603-L6659)

```diff
-         const Je = this.shaderModule(Fe, Me),
-           oe = [];
-         He.packed || (oe.push(function(ee, ie) {
-           const He = [{
-             shaderLocation: GU.position,
-             offset: Ni.f.sM,
-             format: "float32x3"
-           }, {
-             shaderLocation: GU.normal,
-             offset: Ni.f.normalOffset,
-             format: "snorm8x4"
-           }, {
-             shaderLocation: GU.color,
-             offset: Ni.f.colorOffset,
-             format: "unorm8x4"
-           }];
- ... (41 more removed lines; see GitHub link above)
+         if (PW.type === uP.FullSnapshot) VW = PW, pW = 0;
+         else if (PW.type === uP.IncrementalSnapshot) {
+           if (PW.data.source === oP.Mutation && PW.data.isAttachIframe) return;
+           pW++;
+           const WW = mW && pW >= mW,
+             iW = OW && PW.timestamp - VW.timestamp > OW;
+           (WW || iW) && JL(!0)
+         }
+       };
+       const CW = WW => {
+           TL({
+             type: uP.IncrementalSnapshot,
+             data: {
+               source: oP.Mutation,
+               ...WW
+             }
+ ... (23 more added lines; see GitHub link above)
```

#### 364. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6662-L6668` → after: `L9084-L9222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9084-L9222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9084-L9222) · [Before (L6662-L6668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6662-L6668)

```diff
-           qe = He.resting ? 0 : 1;
-         this.compiling += qe;
-         const fe = "none" === Ue ? this.device.createRenderPipelineAsync(ke) : this.startMaskPipelines(Je, ke, "edge" === Ue);
-         fe.then((ie => {
-           this.compiling -= qe, this.pipelines.set(ee, ie)
-         }), (ee => {
-           this.compiling -= qe, console.error(`Lite terrain pipeline ${Me} failed`, ee), lU(this.device, He, Me, Je, ee)
+           keepIframeSrcFn: uW
+         });
+         if (!iW) return console.warn("Failed to snapshot the document");
+         TL({
+           type: uP.FullSnapshot,
+           data: {
+             node: iW,
+             initialOffset: PP(window)
+           }
+         }, WW), GP.forEach((WW => WW.unlock())), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && qW.adoptStyleSheets(document.adoptedStyleSheets, nL.getId(document))
+       };
+       try {
+         const WW = [],
+           iW = WW => {
+             var iW;
+             return RP(mL)({
+ ... (123 more added lines; see GitHub link above)
```

#### 365. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6670-L6713` → after: `L9224-L9225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9224-L9225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9224-L9225) · [Before (L6670-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6670-L6713)

```diff
-         const Te = {
-           name: Me,
-           module: Je,
-           built: fe
-         };
-         return this.builds.set(ee, Te), Te
-       }
-       startMaskPipelines(ee, ie, He) {
-         const ye = ie.depthStencil,
-           be = this.device.createRenderPipelineAsync(He ? ie : {
-             ...ie,
-             depthStencil: {
-               ...ye,
-               depthCompare: "equal",
-               depthWriteEnabled: !1
-             }
- ... (28 more removed lines; see GitHub link above)
+         const OW = () => {
+           JL(), WW.push(iW(document)), HL = !0
```

#### 366. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6715-L6731` → after: `L9227-L9238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9227-L9238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9227-L9238) · [Before (L6715-L6731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6715-L6731)

```diff
-         return this.builds.set(ee, Me), Me
-       }
-       checkShaderPack(ee) {
-         return vU(ee, {
-           device: this.device,
-           target: this.target,
-           material: ee => this.materialFor(ee),
-           programKey: (ee, ie, He) => this.programKey(ee, ie, He),
-           pipelineBuild: (ee, ie, He) => this.pipelineBuild(ee, ie, He)
-         })
-       }
-       createBinding(ee, ie, He) {
-         return this.target = ie, {
-           renderable: ee,
-           pipeline: Pi(this.device, ie),
-           draw: ee => {
- ... (1 more removed lines; see GitHub link above)
+         return ["interactive", "complete"].includes(document.readyState) ? OW() : (WW.push(iP("DOMContentLoaded", (() => {
+           TL({
+             type: uP.DomContentLoaded,
+             data: {}
+           }), "DOMContentLoaded" === yW && OW()
+         }))), WW.push(iP("load", (() => {
+           TL({
+             type: uP.Load,
+             data: {}
+           }), "load" === yW && OW()
+         }), window))), () => {
+           WW.forEach((WW => {
```

#### 367. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6733-L6735` → after: `L9240-L9242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9240-L9242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9240-L9242) · [Before (L6733-L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6733-L6735)

```diff
-               return He ? this.drawTransparent(ee, ie) : this.drawOpaque(ee, ie)
-             } finally {
-               this.geometry.setDrawing(!1)
+               WW()
+             } catch (iW) {
+               String(iW).toLowerCase().includes("cross-origin") || console.warn(iW)
```

#### 368. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6737` → after: `L9244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9244) · [Before (L6737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6737)

```diff
-           }
+           })), GW.destroy(), HL = !1, qP = void 0
```

#### 369. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6740-L6820` → after: `L9249-L9267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9249-L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9249-L9267) · [Before (L6740-L6820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6740-L6820)

```diff
-       prepare(ee, ie) {
-         var He, ye, be, Me;
-         const {
-           uk: Ke
-         } = ee;
-         this.lighting = ee.GT;
-         const Ue = (0, BU.x)(ie);
-         this.dirLightCount = Math.min(Ue, 4), this.Zf = null !== (He = Ke.Zf) && void 0 !== He ? He : null, Ue > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(ee, ie), this.animateMaterials(ie.animTick);
-         const Fe = Ke.yq,
-           Je = Fe[0] !== this.originOffset[0] || Fe[1] !== this.originOffset[1] || Fe[2] !== this.originOffset[2];
-         Je && (this.originOffset[0] = Fe[0], this.originOffset[1] = Fe[1], this.originOffset[2] = Fe[2]);
-         const oe = ie.eye;
-         this.eye[0] = oe[0], this.eye[1] = oe[1], this.eye[2] = oe[2], this.writeShaderPackInputs();
-         const Re = ie.projectionMatrix,
-           ke = 0 === Re[15];
-         let qe = 0;
- ... (65 more removed lines; see GitHub link above)
+     }
+ 
+     function oL() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
+         iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
+       if ("scrollBehavior" in iW.documentElement.style && !0 !== WW.__forceSmoothScrollPolyfill__) return;
+       const OW = WW.HTMLElement || WW.Element,
+         mW = {
+           scroll: WW.scroll || WW.scrollTo,
+           scrollBy: WW.scrollBy,
+           elementScroll: OW.prototype.scroll || LW,
+           scrollIntoView: OW.prototype.scrollIntoView
+         },
+         EW = WW.performance && WW.performance.now ? WW.performance.now.bind(WW.performance) : Date.now;
+       const NW = (PW = WW.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(PW) ? 1 : 0);
+       var PW;
+ ... (3 more added lines; see GitHub link above)
```

#### 370. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6822-L6828` → after: `L9269-L9273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9269-L9273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9269-L9273) · [Before (L6822-L6828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6822-L6828)

```diff
-       sweepVisibility(ee, ie, He) {
-         const {
-           xR: ye
-         } = ee.uk, be = ye.ER, Me = this.visPassable, Ke = this.eye[0] + this.originOffset[0], Ue = this.eye[1] + this.originOffset[1], Fe = this.eye[2] + this.originOffset[2];
-         if (!He.eyeClear(Ke, Ue, Fe, ie.near, ie.projectionMatrix, ye)) return null;
-         const [Je, oe] = ye.KMe, Re = He.update(Ke, Ue, Fe, be, Je, oe, Me);
-         return this.visSweeps = He.sweeps, Re ? He : null
+ 
+       function cW(WW) {
+         if (null === WW || "object" !== typeof WW || void 0 === WW.behavior || "auto" === WW.behavior || "instant" === WW.behavior) return !0;
+         if ("object" === typeof WW && "smooth" === WW.behavior) return !1;
+         throw new TypeError("behavior member of ScrollOptions " + WW.behavior + " is not a valid value for enumeration ScrollBehavior.")
```

#### 371. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6830-L6834` → after: `L9275-L9277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9275-L9277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9275-L9277) · [Before (L6830-L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6830-L6834)

```diff
-       visSeeThrough(ee, ie) {
-         const {
-           material: He
-         } = ee;
-         return (!He || !this.isBlended(He)) && (ee.mesh.visibility < 1 || !(null !== He && void 0 !== He && He.bindGroup) || ee.faceCount > 0 && (!this.geometry.backed(ee) || this.lighting && !ee.vertices.page.twin) || !this.batchDraws(He, ee.packed, ie))
+ 
+       function wW(WW, iW) {
+         return "Y" === iW ? WW.clientHeight + NW < WW.scrollHeight : "X" === iW ? WW.clientWidth + NW < WW.scrollWidth : void 0
```

#### 372. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6836-L6846` → after: `L9279-L9282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9279-L9282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9279-L9282) · [Before (L6836-L6846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6836-L6846)

```diff
-       batchDraws(ee, ie, He) {
-         var ye;
-         const be = ie ? 2 : 0;
-         if (ee === this.visDrawsMaterial && function(ee, ie) {
-             return 0 !== (ee & 1 << ie)
-           }(this.visDrawsBits, be)) return 0 !== (this.visDrawsBits & 2 << be);
-         let Me = null !== (ye = this.visBatchDraws.get(ee)) && void 0 !== ye ? ye : 0;
-         if (!(Me & 1 << be)) {
-           Me |= 1 << be | (!!ee.bindGroupLayout && this.canDraw(ee, ie) && !!this.pipelines.get(this.pipelineIdNow(ee, ie, !1, He)) ? 2 << be : 0), this.visBatchDraws.set(ee, Me)
-         }
-         return this.visDrawsMaterial = ee, this.visDrawsBits = Me, 0 !== (Me & 2 << be)
+ 
+       function tW(iW, OW) {
+         const mW = WW.getComputedStyle(iW, null)["overflow" + OW];
+         return "auto" === mW || "scroll" === mW
```

#### 373. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6848-L6877` → after: `L9284-L9292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9284-L9292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9284-L9292) · [Before (L6848-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6848-L6877)

```diff
-       runVisCheck(ee, ie, He) {
-         const {
-           uk: ye
-         } = ee, {
-           xR: be
-         } = ye, Me = be.ER, Ke = new Set;
-         for (const qe of this.chunks.values()) Ke.add(qe.key);
-         const Ue = nb.Matrix.FromArray(ie.viewProjectionMatrix).invert(),
-           [Fe, Je, oe] = this.originOffset,
-           Re = new nb.rf,
-           ke = function(ee, ie, He, ye) {
-             const be = new Set;
-             for (let Me = 0; Me < 27; Me++)
-               for (let Ke = 0; Ke < 48; Ke++) {
-                 const Ue = He((Ke + .5) / 48 * 2 - 1, (Me + .5) / 27 * 2 - 1);
-                 IU(ee, ie, [Ue[0] - ie[0], Ue[1] - ie[1], Ue[2] - ie[2]], ye, be)
- ... (14 more removed lines; see GitHub link above)
+ 
+       function ZW(WW) {
+         const iW = wW(WW, "Y") && tW(WW, "Y"),
+           OW = wW(WW, "X") && tW(WW, "X");
+         return iW || OW
+       }
+ 
+       function xW(iW) {
+         let OW, mW, NW, PW = (EW() - iW.startTime) / 468;
```

#### 374. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6879` → after: `L9294-L9308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9294-L9308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9294-L9308) · [Before (L6879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6879)

```diff
-         null !== (ee = this.Zf) && void 0 !== ee && ee.isRunning() && (this.shaderPackInputs ??= new NM(this.device, this.Zf.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.Zf, this.eye, this.lighting))
+         PW = PW > 1 ? 1 : PW, LW = PW, OW = .5 * (1 - Math.cos(Math.PI * LW)), mW = iW.startX + (iW.x - iW.startX) * OW, NW = iW.startY + (iW.y - iW.startY) * OW, iW.method.call(iW.scrollable, mW, NW), mW === iW.x && NW === iW.y || WW.requestAnimationFrame(xW.bind(WW, iW))
+       }
+ 
+       function lW(OW, NW, PW) {
+         let cW, wW, tW, ZW;
+         const lW = EW();
+         OW === iW.body ? (cW = WW, wW = WW.scrollX || WW.pageXOffset, tW = WW.scrollY || WW.pageYOffset, ZW = mW.scroll) : (cW = OW, wW = OW.scrollLeft, tW = OW.scrollTop, ZW = LW), xW({
+           scrollable: cW,
+           method: ZW,
+           startTime: lW,
+           startX: wW,
+           startY: tW,
+           x: NW,
+           y: PW
+         })
```

#### 375. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6881-L6901` → after: `L9310-L9345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9310-L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9310-L9345) · [Before (L6881-L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6881-L6901)

```diff
-       bindShaderPackInputs(ee, ie, He) {
-         var ye, be, Me, Ke;
-         let Ue = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         const Fe = this.packVariant(ie, He);
-         if (void 0 === Fe) return;
-         this.shaderPackInputs || (this.shaderPackInputs = new NM(this.device, He.textureLayers(), this.sunShadow), this.shaderPackInputs.write(He, this.eye, this.lighting));
-         const Je = Dy(Fe) ? null !== (ye = null === (be = this.sceneDepth) || void 0 === be ? void 0 : be.view) && void 0 !== ye ? ye : this.standIn() : null,
-           oe = Ue ? null !== (Me = null === (Ke = this.shadowMask) || void 0 === Ke ? void 0 : Ke.view) && void 0 !== Me ? Me : this.standIn() : null;
-         this.shaderPackInputs.bind(ee, Je, IM(Fe, !!this.sunShadow), oe)
-       }
-       standIn() {
-         return this.depthStandIn ??= this.device.createTexture({
-           label: "scene-depth-stand-in",
-           size: [1, 1],
-           format: "r32float",
-           usage: GPUTextureUsage.TEXTURE_BINDING
- ... (5 more removed lines; see GitHub link above)
+       WW.scroll = WW.scrollTo = function() {
+         void 0 !== arguments[0] && (!0 !== cW(arguments[0]) ? lW.call(WW, iW.body, void 0 !== arguments[0].left ? ~~arguments[0].left : WW.scrollX || WW.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : WW.scrollY || WW.pageYOffset) : mW.scroll.call(WW, void 0 !== a … [truncated]
+       }, WW.scrollBy = function() {
+         void 0 !== arguments[0] && (cW(arguments[0]) ? mW.scrollBy.call(WW, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : lW.ca … [truncated]
+       }, OW.prototype.scroll = OW.prototype.scrollTo = function() {
+         if (void 0 === arguments[0]) return;
+         if (!0 === cW(arguments[0])) {
+           if ("number" === typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
+           return void mW.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop … [truncated]
+         }
+         const WW = arguments[0].left,
+           iW = arguments[0].top;
+         lW.call(this, this, "undefined" === typeof WW ? this.scrollLeft : ~~WW, "undefined" === typeof iW ? this.scrollTop : ~~iW)
+       }, OW.prototype.scrollBy = function() {
+         void 0 !== arguments[0] && (!0 !== cW(arguments[0]) ? this.scroll({
+           left: ~~arguments[0].left + this.scrollLeft,
+ ... (20 more added lines; see GitHub link above)
```

#### 376. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6903-L6907` → after: `L9347-L9367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9347-L9367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9347-L9367) · [Before (L6903-L6907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6903-L6907)

```diff
-       resetBatches(ee) {
-         const ie = this.opaqueBatches;
-         let He = 0;
-         for (const ye of ie) ye.meshes.length > 0 && (ye.meshes.length = 0, ye.faceCull = this.batchFaceCull(ye.material, ee), ie[He++] = ye);
-         ie.length = He
+     }
+     uL.addCustomEvent = (WW, iW) => {
+       if (!HL) throw new Error("please add custom event after start recording");
+       TL({
+         type: uP.Custom,
+         data: {
+           tag: WW,
+           payload: iW
+         }
+       })
+     }, uL.freezePage = () => {
+       GP.forEach((WW => WW.freeze()))
+     }, uL.takeFullSnapshot = WW => {
+       if (!HL) throw new Error("please take full snapshot after start recording");
+       JL(WW)
+     }, uL.mirror = nL;
+ ... (5 more added lines; see GitHub link above)
```

#### 377. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6909-L6921` → after: `L9369-L9374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9369-L9374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9369-L9374) · [Before (L6909-L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6909-L6921)

```diff
-       orderBatches() {
-         const ee = this.opaqueBatches;
-         for (let ie = 0; ie < ee.length; ie++) {
-           const He = ee[ie];
-           He.group = ie;
-           for (let ye = 0; ye < ie; ye++) {
-             const ie = ee[ye];
-             if (ie.material === He.material && ie.packed === He.packed) {
-               He.group = ie.group;
-               break
-             }
-           }
-           He.nearest = He.meshes.length > 0 ? He.meshes[0].distance : 1 / 0
+       addAction(WW) {
+         const iW = !0 === this.raf;
+         if (!this.actions.length || this.actions[this.actions.length - 1].delay <= WW.delay) this.actions.push(WW);
+         else {
+           const iW = this.findActionIndex(WW);
+           this.actions.splice(iW, 0, WW)
```

#### 378. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6923` → after: `L9376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9376) · [Before (L6923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6923)

```diff
-         ee.sort(hU)
+         iW && (this.raf = requestAnimationFrame(this.rafCheck.bind(this)))
```

#### 379. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6925-L6938` → after: `L9378-L9379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9378-L9379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9378-L9379) · [Before (L6925-L6938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6925-L6938)

```diff
-       batchFor(ee, ie, He, ye, be) {
-         for (const Ke of this.opaqueBatches)
-           if (Ke.material === ee && Ke.packed === ie && Ke.page === He && Ke.resting === ye) return Ke;
-         const Me = {
-           material: ee,
-           packed: ie,
-           page: He,
-           resting: ye,
-           meshes: [],
-           group: 0,
-           nearest: 0,
-           faceCull: this.batchFaceCull(ee, be)
-         };
-         return this.opaqueBatches.push(Me), Me
+       start() {
+         this.timeOffset = 0, this.lastTimestamp = performance.now(), this.raf = requestAnimationFrame(this.rafCheck.bind(this))
```
