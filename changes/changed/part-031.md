# Changed — Bundle Modifications Report (Part 031 / 116)

- **Updated at**: `2026-11-27T00:59 JST`
- **Part**: `31 / 116` (**288** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 030](part-030.md) · [Part 032 →](part-032.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/273.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/bloxd.io/chunks/js/273.js` (72 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325)

#### 47. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1022-L1087` → after: `L509-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L509-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L509-L598) · [Before (L1022-L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1022-L1087)

```diff
-         badges: JV,
-         children: YV
-       } = VV;
-       return (0, TV.jsxs)("section", {
-         className: "GreenvilleBoardDetail",
-         children: [(0, TV.jsxs)("header", {
-           className: "GreenvilleBoardDetailHeader",
-           children: [(0, TV.jsx)("span", {
-             className: "GreenvilleBoardDetailHero",
-             children: (0, TV.jsx)("span", {
-               className: "GreenvilleBoardDetailIcon",
-               children: eV
-             })
-           }), (0, TV.jsxs)("div", {
-             className: "GreenvilleBoardDetailHeading",
-             children: [(0, TV.jsx)("h3", {
- ... (50 more removed lines; see GitHub link above)
+         type: "float"
+       }],
+       CH = "bloxdTextSample",
+       EH = {
+         planes: -.5,
+         boards: -.5
+       },
+       XH = {
+         name: "TextSampler",
+         className: "TextSamplerMaterialPlugin",
+         priority: 60,
+         defines: () => (0, AH.e)("TEXT_SAMPLER"),
+         getUniforms: HH => (0, rH.d)(zH, "fragment", HH),
+         bind(HH) {
+           HH.updateFloat(tH, this.lodBias)
+         },
+ ... (74 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1089-L1130` → after: `L600-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L600-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L600-L604) · [Before (L1089-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1089-L1130)

```diff
-     function ke(VV) {
-       let {
-         view: eV,
-         controller: xV
-       } = VV;
-       const {
-         t: JV
-       } = (0, tV.A)(), YV = eV.selected, UV = eV.explosives[YV], [yV, pV, QV, nV, wV] = UV, ZV = YV === eV.picked, vV = nV > eV.level;
-       return (0, TV.jsxs)(we, {
-         icon: (0, TV.jsx)(Ue, {
-           item: yV
-         }),
-         name: JV(`greenvilleGame:${pV}`),
-         badges: vV && (0, TV.jsx)(Ze, {
-           level: nV
-         }),
- ... (26 more removed lines; see GitHub link above)
+     function MH(HH, BH) {
+       return Object.assign((function(HH, LH, AH, rH) {
+         return BH(this.featureState, HH, LH, AH, rH)
+       }), {
+         EX: HH
```

#### 49. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1135-L1155` → after: `L609-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L609-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L609-L621) · [Before (L1135-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1135-L1155)

```diff
-       let {
-         controller: eV
-       } = VV;
-       const xV = (0, jV.j)(sV, eV.getView()),
-         {
-           t: JV
-         } = (0, tV.A)();
-       return 0 === xV.explosives.length ? null : (0, TV.jsxs)(ye, {
-         open: xV.open,
-         onDismiss: eV.dismiss,
-         title: JV("greenvilleGame:demolitionDepotTitle"),
-         className: "GreenvilleDepotBoard",
-         headerExtra: (0, TV.jsx)("span", {
-           className: "GreenvilleBoardLevel",
-           children: JV("greenvilleGame:demolitionDepotLevel", {
-             level: xV.level
- ... (5 more removed lines; see GitHub link above)
+       const BH = class extends YH.e {
+           constructor(BH, LH) {
+             const AH = (0, QH.V)(BH),
+               rH = AH && (0, QH.s)(AH, HH.name);
+             for (var SH = arguments.length, hH = new Array(SH > 2 ? SH - 2 : 0), tH = 2; tH < SH; tH++) hH[tH - 2] = arguments[tH];
+             super(BH, HH.name, HH.priority, rH ? rH.defines : HH.defines(...hH), !1), this.featureState = void 0, this.featureState = LH, this._pluginManager._addPlugin(this), this._enable(!0), (0, QH.v)(this._material, HH, this.featureState, this._pluginDefineNames)
+           }
+           getClassName() {
+             return HH.className
+           }
+           isCompatible(HH) {
+             return HH === WH.c.GLSL || HH === WH.c.WGSL
+           }
```

#### 50. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1157-L1209` → after: `L623-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L623-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L623-L631) · [Before (L1157-L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1157-L1209)

```diff
-         children: [(0, TV.jsx)(Qe, {
-           roomy: !0,
-           children: xV.explosives.map(((VV, YV) => {
-             const [UV, yV, pV, QV, nV] = VV;
-             return (0, TV.jsxs)(ne, {
-               icon: (0, TV.jsx)(Ue, {
-                 item: UV
-               }),
-               name: JV(`greenvilleGame:${yV}`),
-               selected: YV === xV.selected,
-               locked: QV > xV.level,
-               className: kV()("GreenvilleDepotCrate", {
-                 Picked: YV === xV.picked
-               }),
-               onSelect: () => {
-                 eV.select(YV)
- ... (37 more removed lines; see GitHub link above)
+         LH = (0, uH.h)(HH);
+       for (const [AH, rH] of Object.entries(uH.d)) {
+         const SH = HH[AH];
+         if (SH) {
+           const HH = LH[AH];
+           Object.defineProperty(BH.prototype, rH, {
+             value: MH(SH, HH),
+             writable: !0,
+             configurable: !0
```

#### 51. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1211-L1225` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L633) · [Before (L1211-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1211-L1225)

```diff
-         }, this.Pr = VV => {
-           VV !== this.picks.getLastPending() && (this.picks.pushLatest(VV), this.set({
-             ...this.getView(),
-             out: VV,
-             awaiting: !this.picks.XZ(),
-             line: "dealershipGarageTip"
-           }))
-         }, this.onAnswersTimedOut = () => {
-           const VV = this.getView();
-           VV.open && this.set({
-             ...VV,
-             out: this.picks.getLatest(),
-             awaiting: !this.picks.XZ()
-           })
-         }, this.picks = new HV(null, JV, xV, this.onAnswersTimedOut)
+         }
```

#### 52. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1227-L1228` → after: `L635-L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L635-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L635-L646) · [Before (L1227-L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1227-L1228)

```diff
-       RZ(VV) {
-         if ("open" === VV[0]) {
+       return BH
+     }
+     class vH extends(xH(tH.c)) {}
+     var PH = LH(41106),
+       TH = LH(42445),
+       UH = LH(42449);
+ 
+     function VH(HH, BH, LH) {
+       return (0, UH.d)(LH, BH.urls, (() => async function(HH, BH, LH) {
+         const {
+           width: AH
+         } = HH[0].getSize(), rH = HH.map(((HH, LH) => {
```

#### 53. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1230-L1246` → after: `L648-L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L648-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L648-L683) · [Before (L1230-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1230-L1246)

```diff
-           const xV = VV[3];
-           xV && this.picks.takeAnswer();
-           const JV = this.getView();
-           if (xV && !JV.open) return;
-           this.picks.confirm(VV[2]);
-           const YV = VV[1],
-             UV = this.picks.getLatest(),
-             yV = !JV.open;
-           this.show({
-             open: !0,
-             cars: YV,
-             out: UV,
-             awaiting: !this.picks.XZ(),
-             selected: yV ? null !== (eV = null !== UV && void 0 !== UV ? UV : YV[0]) && void 0 !== eV ? eV : null : JV.selected,
-             line: yV ? "dealershipGarageIntro" : JV.line
-           })
- ... (1 more removed lines; see GitHub link above)
+           const SH = Math.round(HH.getSize().height / AH),
+             hH = null === BH || void 0 === BH ? void 0 : BH[LH];
+           return {
+             pixels: hH && hH.byteLength === AH * AH * SH * 4 ? hH : null !== (rH = OH.get(HH.getInternalTexture())) && void 0 !== rH ? rH : HH._readPixelsSync(),
+             layers: SH
+           }
+         })), SH = Math.min(LH.Iu().getCaps().texture2DArrayMaxLayerCount, 256), tH = (0, UH.c)(rH, AH, SH).map((HH => {
+           let {
+             pixels: BH,
+             layers: rH
+           } = HH;
+           return {
+             atlas: new TH.c(BH, AH, AH, rH, PH.b.TEXTUREFORMAT_RGBA, LH, !0, !1, hH.d.NEAREST_NEAREST_MIPLINEAR),
+             layers: rH
+           }
+         }));
+ ... (20 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1248-L1249` → after: `L685-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L685-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L685-L713) · [Before (L1248-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1248-L1249)

```diff
-       dropPresses() {
-         this.picks.clear()
+       async setTextureArrayData(HH, BH) {
+         const LH = this.featureState,
+           {
+             width: AH,
+             height: rH
+           } = HH.getSize(),
+           SH = this._material.shaderLanguage;
+         if (!LH.useWebGL2) return void(0, bH.f)(this._material, LH, BH, AH, Math.round(rH / AH), SH);
+         if (this.loaded.add(BH), this.loaded.size < this.mirrors.length) return;
+         const hH = await VH(this.mirrors, LH.sources, this._material.yN());
+         (0, bH.b)(this._material, LH, hH, AH, SH)
+       }
+     }
+     var mH = LH(42455),
+       oH = LH(41588),
+       IH = LH(37961),
+ ... (13 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1252-L1260` → after: `L716-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L716-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L716-L744) · [Before (L1252-L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1252-L1260)

```diff
- 
-     function qe() {
-       const {
-         t: VV
-       } = (0, tV.A)();
-       return (0, TV.jsx)("span", {
-         className: "GreenvilleBoardBadge",
-         children: VV("greenvilleGame:dealershipGarageOut")
-       })
+     const NH = {
+       Mesh: fH.c,
+       TransformNode: cH.c,
+       rX: mH.b,
+       VertexBuffer: mH.e,
+       BoundingInfo: oH.d,
+       lu: IH.lu,
+       ArenaBuffer: gH,
+       SubMesh: KH.d,
+       VertexData: lH.b,
+       MirroredGeometry: qH.c,
+       meshFromArrays: qH.f,
+       plainMeshFromArrays: qH.g
+     };
+     (0, eH.d)(NH);
+     var RH = LH(38194);
+ ... (13 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1263-L1269` → after: `L747-L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L747-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L747-L748) · [Before (L1263-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1263-L1269)

```diff
-     function te(VV) {
-       let {
-         car: eV,
-         out: xV,
-         awaiting: JV,
-         controller: YV
-       } = VV;
+     function nH(HH, BH) {
+       if (!(BH instanceof AH.StandardMaterial) || BH.specularTexture) return;
```

#### 57. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1271-L1333` → after: `L750-L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L750-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L750-L776) · [Before (L1271-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1271-L1333)

```diff
-         t: UV
-       } = (0, tV.A)();
-       return (0, TV.jsx)(we, {
-         icon: (0, TV.jsx)(Ue, {
-           item: eV
-         }),
-         name: (0, TV.jsx)(Ye, {
-           item: eV
-         }),
-         children: (0, TV.jsxs)("div", {
-           className: "GreenvilleBoardActions",
-           children: [xV && (0, TV.jsx)("span", {
-             className: "GreenvilleGarageOutStamp",
-             children: UV("greenvilleGame:dealershipGarageOut")
-           }), (0, TV.jsx)(OV.f, {
-             disabled: xV && JV,
- ... (47 more removed lines; see GitHub link above)
+         r: LH,
+         g: rH,
+         b: SH
+       } = BH.specularColor;
+       0 === LH && 0 === rH && 0 === SH && (HH.SPECULARTERM = !1)
+     }(0, EH.d)({
+       disableUnusedSpecularTerm: nH
+     });
+     var FH = LH(38141),
+       DH = LH(38353);
+     const wH = new RegExp(`^#define ${CH.d}\\s*$`, "m");
+     class ZH extends(xH(CH.j)) {
+       constructor(HH, BH) {
+         super(HH, BH), this.Mu = !1, BH.ditherOnlyWhileFading && (DH.c.add(HH), this.prewarmDitherTwins(HH))
+       }
+       prewarmDitherTwins(HH) {
+ ... (11 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1377-L1386` → after: `L798-L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L798-L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L798-L824) · [Before (L1377-L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1377-L1386)

```diff
-       return "sell" === eV.action ? function(VV, eV) {
-         let xV = VV.goldOwned;
-         const JV = VV.sellLines.map((VV => {
-           const [JV, YV, UV] = VV;
-           return null !== eV && eV !== JV ? VV : (xV += YV * UV, [JV, 0, UV])
-         }));
-         return {
-           ...VV,
-           goldOwned: xV,
-           sellLines: JV
+       dH.set(HH, BH)
+     }
+     aH(tH.c, vH), aH(zH.g, kH), aH(CH.j, ZH), aH(EH.h, jH), (0, XH.d)({
+       create: (HH, BH) => {
+         const LH = new AH.StandardMaterial(HH.name, BH);
+         return (0, FH.m)(HH, LH), LH.detailMap._pluginDefineNames
+       },
+       write: (HH, BH, LH) => {
+         (0, FH.P)(HH.mirror, BH, LH)
+       },
+       addFeature: (HH, BH, LH) => {
+         const AH = dH.get(BH.feature);
+         if (!AH) throw new Error(`${BH.feature.name} has no plugin class (registerPluginClass)`);
+         new AH(HH.mirror, BH.state, ...LH)
+       },
+       texture: (HH, BH, LH) => {
+ ... (11 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1388-L1394` → after: `L826-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L826-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L826-L840) · [Before (L1388-L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1388-L1394)

```diff
-       }(VV, eV.item) : "accept" === eV.action ? function(VV, eV) {
-         var xV;
-         const JV = VV.orders[eV];
-         return {
-           ...VV,
-           tracked: null !== (xV = VV.tracked) && void 0 !== xV ? xV : eV,
-           orders: VV.orders.map((VV => VV === JV ? {
+         const EH = {},
+           XH = new Promise(((HH, BH) => {
+             EH.onLoad = HH, EH.onError = (HH, LH) => {
+               BH(new Error(`${zH.context}: ${(null===LH||void 0===LH?void 0:LH.message)||HH||"Failed to load texture"}`))
+             }
+           })),
+           {
+             mimeType: YH,
+             bytes: uH,
+             label: QH
+           } = zH,
+           WH = {
+             noMipmap: rH,
+             invertY: !1,
+             samplingMode: tH,
```

#### 60. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1396-L1466` → after: `L842-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L842-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L842-L905) · [Before (L1396-L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1396-L1466)

```diff
-             Jw: !0
-           } : VV)),
-           sellLines: VV.sellLines.map((VV => {
-             const [eV, xV, YV] = VV, UV = JV.items.find((VV => {
-               let [xV] = VV;
-               return xV === eV
-             }));
-             return void 0 === UV ? VV : [eV, Math.max(0, xV - UV[1]), YV]
-           }))
-         }
-       }(VV, eV.slot) : "track" === eV.action ? {
-         ...VV,
-         tracked: eV.slot
-       } : {
-         ...VV,
-         delivering: [...VV.delivering, eV.slot]
- ... (55 more removed lines; see GitHub link above)
+             mimeType: YH,
+             loaderOptions: void 0,
+             useSRGBBuffer: !1
+           },
+           MH = new hH.d(null, BH, WH);
+         FH.o.set(MH, XH), Object.assign(MH, CH), MH.updateURL(AH, uH);
+         const xH = MH.getInternalTexture();
+         xH && (xH.label = QH), HH.uvSet = MH.coordinatesIndex, HH.matrix.set((0, FH.K)(MH)), (0, GH.H)(HH, MH)
+       },
+       cube: (HH, BH, LH) => {
+         let {
+           rootUrl: AH,
+           files: SH,
+           noMipmap: tH,
+           luminance: zH
+         } = LH;
+ ... (48 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1468-L1497` → after: `L907-L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L907-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L907-L964) · [Before (L1468-L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1468-L1497)

```diff
-       RZ(VV) {
-         if ("open" === VV[0]) {
-           const xV = VV[6],
-             JV = xV ? this.commands.takeAnswer() : null,
-             YV = !this.getView().open;
-           if (xV && YV) return;
-           if (YV) this.onReopened(VV);
-           else if (null !== JV) {
-             var eV;
-             this.line = null !== (eV = function(VV, eV, xV) {
-               if ("deliver" === VV.action) {
-                 const [, JV] = eV[1][VV.slot];
-                 return xV[1][VV.slot][5] ? null : {
-                   kind: "delivered",
-                   titleKey: JV
-                 }
- ... (14 more removed lines; see GitHub link above)
+       relink() {
+         this.release();
+         const HH = [];
+         for (const rH of Object.values(this._vertexBuffers))
+           if (!rH.getIsInstanced()) {
+             const {
+               byteOffset: BH,
+               byteStride: LH,
+               type: AH,
+               normalized: SH
+             } = rH;
+             HH.push({
+               kind: rH.getKind(),
+               data: rH.getData(),
+               offset: BH,
+               stride: LH,
+ ... (42 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1499-L1500` → after: `L966-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L966-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L966-L975) · [Before (L1499-L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1499-L1500)

```diff
-       dropPresses() {
-         this.commands.clear(), this.board = null
+       static mergeMeshes(HH, BH, LH, AH, rH, SH) {
+         const zH = HH[0].yN(),
+           CH = new tH.c(HH[0].name + "_merged", zH),
+           XH = new EH(hH.d.RandomId(), zH, void 0, !1, CH);
+         try {
+           if (!tH.c.MergeMeshes(HH, BH, LH, CH, rH, SH)) return CH.dispose(), null
+         } catch (GH) {
+           throw CH.dispose(), GH
+         }
+         return XH.relink(), CH
```

#### 63. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1502-L1503` → after: `L977-L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L977-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L977-L978) · [Before (L1502-L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1502-L1503)

```diff
-       findOrder(VV) {
-         return this.getView().orders.find((eV => eV.slot === VV))
+       removeVerticesData(HH) {
+         this.releaseUnlessInstanced(HH), super.removeVerticesData(HH)
```

#### 64. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1505-L1512` → after: `L980-L981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L980-L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L980-L981) · [Before (L1505-L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1505-L1512)

```diff
-       onReopened(VV) {
-         let [, eV, , xV] = VV;
-         const JV = eV.map(Ae).find((VV => VV.Jw && VV.ready)),
-           YV = xV.findIndex((VV => {
-             let [, eV] = VV;
-             return eV > 0
-           }));
-         void 0 === JV && -1 !== YV || (this.tab = "orders"), void 0 !== JV && (this.selectedSlot = JV.slot), -1 === YV || this.selectedWood < xV.length && xV[this.selectedWood][1] > 0 || (this.selectedWood = YV), this.line = Te
+       dispose() {
+         this.release(), super.dispose()
```

#### 65. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1514-L1530` → after: `L983-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L983-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L983-L985) · [Before (L1514-L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1514-L1530)

```diff
-       getBoardView() {
-         const [, VV, eV, xV, JV, YV] = this.board;
-         let UV = {
-           open: !0,
-           orders: VV.map(Ae),
-           tracked: eV,
-           sellLines: xV,
-           level: JV,
-           goldOwned: YV,
-           delivering: [],
-           tab: this.tab,
-           selectedSlot: this.selectedSlot,
-           selectedWood: this.selectedWood,
-           line: this.line
-         };
-         for (const yV of this.commands.getPending()) UV = Ne(UV, yV);
- ... (1 more removed lines; see GitHub link above)
+       releaseUnlessInstanced(HH) {
+         var BH;
+         HH && null !== (BH = this.getVertexBuffer(HH)) && void 0 !== BH && BH.getIsInstanced() || this.release()
```

#### 66. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1532-L1533` → after: `L987-L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L987-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L987-L988) · [Before (L1532-L1533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1532-L1533)

```diff
-       queue(VV) {
-         this.commands.push(VV), this.set(this.getBoardView())
+       release() {
+         this.model && ((0, CH.z)(this.model), this.model = null)
```

#### 67. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1623-L1633` → after: `L992-L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L992-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L992-L1007) · [Before (L1623-L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1623-L1633)

```diff
-     function ie(VV) {
-       let {
-         gold: eV,
-         children: xV
-       } = VV;
-       const JV = (0, pV.useRef)(null);
-       var YV;
-       return YV = JV, (0, pV.useLayoutEffect)((() => {
-         const VV = YV.current;
-         return lV = VV, () => {
-           lV === VV && (lV = null)
+     function XH(HH, BH, LH) {
+       let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new tH.c(HH, LH);
+       const rH = (0, CH.p)(BH),
+         {
+           positions: SH,
+           normals: XH,
+           uvs: GH,
+           indices: YH,
+           named: uH = {}
+         } = BH,
+         QH = new zH.b;
+       QH.positions = SH, QH.normals = null !== XH && void 0 !== XH ? XH : null, QH.uvs = null !== GH && void 0 !== GH ? GH : null, QH.indices = YH;
+       const WH = new EH(hH.d.RandomId(), LH, QH, !1, AH);
+       for (const {
+           kind: hH,
+           components: tH
```

#### 68. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1635-L1700` → after: `L1009-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L1009-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L1009-L1010) · [Before (L1635-L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1635-L1700)

```diff
-       }), [YV]), (0, TV.jsxs)("div", {
-         className: "GreenvilleBoardWallet",
-         children: [xV, (0, TV.jsx)(ge, {
-           amount: eV,
-           iconRef: JV
-         })]
-       })
-     }
-     const Ce = {
-       New: "lumberBoardStateNew",
-       Accepted: "lumberBoardStateAccepted",
-       Tracking: "lumberBoardTracking",
-       Ready: "lumberBoardStateReady"
-     };
- 
-     function ae(VV, eV) {
- ... (50 more removed lines; see GitHub link above)
+         of rH.vertexAttributes) hH in uH && AH.setVerticesData(hH, uH[hH], !1, tH);
+       return WH.link(rH), AH
```

#### 69. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1703-L1722` → after: `L1013-L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L1013-L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L1013-L1027) · [Before (L1703-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1703-L1722)

```diff
-     function he(VV) {
-       let {
-         order: eV,
-         inTile: xV = !1
-       } = VV;
-       const {
-         t: JV
-       } = (0, tV.A)();
-       return (0, TV.jsxs)("span", {
-         className: "GreenvilleLumberReward",
-         children: [(0, TV.jsx)(ge, {
-           amount: eV.gold,
-           inTile: xV
-         }), (0, TV.jsx)("span", {
-           className: "GreenvilleLumberExp",
-           children: JV("greenvilleGame:boardExpGain", {
- ... (4 more removed lines; see GitHub link above)
+     function GH(HH, BH, LH) {
+       let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       const rH = new tH.c(HH, LH),
+         {
+           positions: SH,
+           normals: hH,
+           uvs: CH,
+           indices: EH
+         } = BH;
+       return Object.assign(new zH.b, {
+         positions: SH,
+         normals: hH,
+         uvs: CH,
+         indices: EH
+       }).applyToMesh(rH, AH), rH
```

#### 70. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1724-L1767` → after: `L1029-L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R1029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L1029-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L1029-L1053) · [Before (L1724-L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1724-L1767)

```diff
- 
-     function le(VV) {
-       let {
-         view: eV,
-         order: xV,
-         controller: JV
-       } = VV;
-       const {
-         t: YV
-       } = (0, tV.A)(), {
-         slot: UV,
-         items: yV,
-         Jw: pV,
-         ready: QV
-       } = xV, nV = yV.reduce(((VV, eV) => {
-         let [, xV, JV] = eV;
- ... (28 more removed lines; see GitHub link above)
+   },
+   42449: (HH, BH, LH) => {
+     function AH(HH, BH, LH) {
+       const AH = BH * BH * 4,
+         rH = HH[0].layers,
+         SH = rH * (HH.length - 1) + HH[HH.length - 1].layers,
+         hH = new Uint8Array(SH * AH);
+       HH.forEach(((BH, LH) => {
+         const SH = LH + 1 < HH.length ? Math.min(BH.layers, rH) : BH.layers;
+         hH.set(new Uint8Array(BH.pixels.buffer, BH.pixels.byteOffset, SH * AH), LH * rH * AH)
+       }));
+       const tH = Math.max(1, Math.min(SH, LH || SH));
+       if (tH === SH) return [{
+         pixels: hH,
+         layers: SH
+       }];
+ ... (9 more added lines; see GitHub link above)
```

#### 71. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1770-L4516` → after: `L1061-L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L1061-L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L1061-L1071) · [Before (L1770-L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1770-L4516)

```diff
-     function Le(VV) {
-       let {
-         view: eV,
-         controller: xV
-       } = VV;
-       const {
-         t: JV
-       } = (0, tV.A)(), YV = eV.orders[eV.selectedSlot], UV = ae(YV, eV.tracked), yV = YV.Jw && YV.slot === eV.tracked;
-       return (0, TV.jsxs)(we, {
-         icon: (0, TV.jsx)(Ue, {
-           item: YV.items[0][0]
-         }),
-         name: JV(`greenvilleGame:${YV.titleKey}`),
-         badges: (0, TV.jsxs)(TV.Fragment, {
-           children: [(0, TV.jsx)(oe, {
-             state: UV
- ... (2731 more removed lines; see GitHub link above)
+     function SH(HH, BH, LH) {
+       var AH, SH;
+       const hH = null !== (AH = rH.get(HH)) && void 0 !== AH ? AH : new Map;
+       rH.set(HH, hH);
+       const tH = null !== (SH = hH.get(BH[0])) && void 0 !== SH ? SH : [];
+       hH.set(BH[0], tH);
+       const zH = tH.find((HH => HH.urls.length === BH.length && HH.urls.every(((HH, LH) => HH === BH[LH]))));
+       if (zH) return zH.built;
+       const CH = {
+         urls: [...BH],
+         built: LH()
```

#### 72. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L4518-L5597` → after: `L1073-L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R1073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L1073-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L1073-L1075) · [Before (L4518-L5597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L4518-L5597)

```diff
- 
-     function nY(VV) {
-       return (VV - sx) / Kx.f.PZ
-     }
-     class wY {
-       constructor(VV, eV, xV) {
-         this.publishAddress = VV, this.publishPlots = eV, this.publishMarkers = xV, this.address = QY, this.addressKey = HJ(QY), this.block = {
-           x: NaN,
-           z: NaN
-         }, this.plots = void 0, this.markers = [], this.terrain = null, this.cZ = null, this.worldResize = null, this.worldPx = 0, this.arrowTrack = null, this.arrow = null, this.zoom = 0, this.lastFrameMs = NaN, this.written = {
-           u: NaN,
-           v: NaN,
-           scale: NaN,
-           heading: NaN
-         }, this.reducedMotion = null, this.mountTerrain = VV => {
-           this.terrain.mount(VV)
- ... (1064 more removed lines; see GitHub link above)
+       return tH.push(CH), CH.built.catch((() => {
+         tH.splice(tH.indexOf(CH), 1)
+       })), CH.built
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/274.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/274.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3)

#### 1. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4-L36` → after: `L4-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/274.js#L4-L434) · [Before (L4-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/274.js#L4-L36)

```diff
-   41053: (VV, eV, xV) => {
-     xV.r(eV), xV.d(eV, {
-       playDocsSound: () => QV
-     });
-     var JV = xV(5353),
-       YV = xV(37930),
-       UV = xV(1230),
-       yV = xV(37935);
-     const pV = new Map;
- 
-     function QV(VV, eV, xV, QV, nV) {
-       let wV, ZV = 0;
-       if (eV) wV = new JV.Howl({
-         src: [`${UV.clientSideServerUrls.staticUrl}/sounds/music/${VV}.mp3`],
-         html5: !0,
-         volume: xV
- ... (17 more removed lines; see GitHub link above)
+   42352: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => SH,
+       f: () => hH
+     });
+     var AH = LH(2010);
+     let rH = !1;
+ 
+     function SH() {
+       rH = !0
+     }
+ 
+     function hH() {
+       rH && (rH = !1, (0, AH.e)())
+     }
+   },
+ ... (415 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L38-L48` → after: `L436-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L436-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/274.js#L436-L456) · [Before (L38-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/274.js#L38-L48)

```diff
-         EV = () => {
-           nV.onPlay(rV())
-         },
-         BV = () => {
-           bV(!1)
-         },
-         jV = (eV, xV) => {
-           console.error(`Could not play docs sound ${VV}`, xV), bV(!0)
-         },
-         qV = (xV, JV) => {
-           eV || pV.get(VV) !== wV || (pV.delete(VV), wV.unload()), jV(xV, JV)
+         targetedBlockPos() {
+           const HH = (0, CH.i)();
+           if (null === HH || tH.y.targetBlockId(HH.api.apiView, 0) === tH.cd) return null;
+           for (let BH = 0; BH < 3; BH++) fH[BH] = tH.y.targetBlock(HH.api.apiView, 0, BH);
+           return fH
+         }
+       }
+   },
+   39919: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => AH
+     });
+     class AH {
+       constructor() {
+         this.members = new Map
+       }
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L50-L72` → after: `L458-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L458-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/274.js#L458-L502) · [Before (L50-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/274.js#L50-L72)

```diff
-       return wV.on("play", EV, vV), wV.once("end", BV, vV), wV.once("loaderror", qV), wV.once("playerror", jV, vV), {
-         pause: () => {
-           wV.pause(vV)
-         },
-         resume: () => {
-           wV.play(vV)
-         },
-         seek: VV => {
-           const eV = rV(),
-             xV = Math.max(VV, 0);
-           wV.seek(eV > 0 ? Math.min(xV, eV) : xV, vV)
-         },
-         YF: () => {
-           const VV = wV.seek(vV);
-           return "number" === typeof VV ? Math.max(0, VV) : 0
-         },
- ... (7 more removed lines; see GitHub link above)
+         for (const AH of HH.RA) {
+           let HH = this.members.get(AH.jA);
+           if (HH || (HH = {
+               name: null,
+               settings: {}
+             }, this.members.set(AH.jA, HH), BH.added.push(AH.jA)), null !== AH.nA && (HH.name = AH.nA), null !== AH.FA || AH.DA.length > 0) {
+             const LH = null === AH.FA ? {} : JSON.parse(AH.FA);
+             Object.assign(HH.settings, LH);
+             for (const BH of AH.DA) delete HH.settings[BH], LH[BH] = void 0;
+             BH.settingChanges.push({
+               playerId: AH.jA,
+               settings: LH
+             })
+           }
+         }
+         for (const AH of HH.wA) {
+ ... (29 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/275.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/275.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a)

#### 1. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L4` → after: `L4-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L4-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L4-L167) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L4)

```diff
-   41069: (VV, eV, xV) => {
+   40413: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => hH,
+       g: () => rH,
+       h: () => SH
+     });
+     var AH = LH(45);
+ 
+     function rH(HH) {
+       return tH(HH, zH)
+     }
+ 
+     function SH(HH) {
+       return tH(HH, CH)
+     }
+ 
+ ... (148 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L8-L48` → after: `L171-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L171-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L171-L311) · [Before (L8-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L8-L48)

```diff
-     xV(7011);
-     var JV = xV(62),
-       YV = xV(41071),
-       UV = xV(41331),
-       yV = xV(41466),
-       pV = xV(41510),
-       QV = xV(41524),
-       nV = xV(38387),
-       wV = xV(38263),
-       ZV = xV(41660),
-       vV = xV(41706),
-       rV = (xV(41744), xV(1252)),
-       kV = xV(206),
-       bV = xV(1220),
-       EV = xV(27),
-       BV = xV(3080),
- ... (25 more removed lines; see GitHub link above)
+     const AH = "ore sell",
+       rH = "lumber ",
+       SH = "farm ",
+       hH = ["market", "demolition", "mining", "woodcutting", "farming"];
+     var tH = LH(45),
+       zH = LH(18),
+       CH = LH(39461),
+       EH = LH(37474);
+     const XH = "greenvilleBackpackView";
+     class GH {
+       constructor(HH) {
+         this.AX = HH, this.view = null, this.arrivalToken = 0, this.showToken = 0
+       }
+       getView() {
+         return this.view
+       }
+ ... (125 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L50-L52` → after: `L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L313) · [Before (L50-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L50-L52)

```diff
-         name: "X",
-         direction: [1, 0, 0],
-         colour: "#e5534b"
+         transform: "scale(1)"
```

#### 4. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L54-L56` → after: `L315-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L315-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L315-L316) · [Before (L54-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L54-L56)

```diff
-         name: "Y",
-         direction: [0, 1, 0],
-         colour: "#57ab5a"
+         transform: "scale(1.12, 0.86)",
+         offset: .3
```

#### 5. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L58-L60` → after: `L318-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L318-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L318-L321) · [Before (L58-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L58-L60)

```diff
-         name: "Z",
-         direction: [0, 0, 1],
-         colour: "#539bf5"
+         transform: "scale(0.96, 1.05)",
+         offset: .65
+       }, {
+         transform: "scale(1)"
```

#### 6. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L62-L66` → after: `L323-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L323-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L323-L342) · [Before (L62-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L62-L66)

```diff
-       LV = 24,
-       fV = 7,
-       mV = 4,
-       KV = .01,
-       HV = 4;
+       mH = [{
+         transform: "scale(1.3)"
+       }, {
+         transform: "scale(1)"
+       }];
+     let oH = 1;
+ 
+     function IH(HH) {
+       let {
+         controller: BH
+       } = HH;
+       (0, xH.e)(XH, null), (0, tH.useEffect)(OH, []);
+       const LH = BH.getView();
+       return null === LH ? null : (0, UH.jsx)(WH.e, {
+         placement: "bottomLeft",
+         children: (0, UH.jsx)(fH, {
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L70-L80` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L346) · [Before (L70-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L70-L80)

```diff
-         heatmap: eV,
-         scale: xV,
-         fullyOpaqueFrom: gV,
-         bounds: oV,
-         fitBounds: cV,
-         schematic: hV,
-         controls: lV,
-         onStepTime: LV,
-         onShowAllTime: fV,
-         onTogglePlaying: mV,
-         getReadout: HV = null
+         view: BH
```

#### 8. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L84-L277` → after: `L350-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L350-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L350-L368) · [Before (L84-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L84-L277)

```diff
-       } = (0, bV.A)(), {
-         clientEscMenuOptions: Ue
-       } = (0, EV.l)(["clientEscMenuOptions"]), Qe = (0, JV.useRef)(null), ne = (0, JV.useRef)(null), we = (0, JV.useRef)(null), Ze = (0, BV.d)(Qe), [ve, re] = (0, JV.useState)(!1), [ke, be] = (0, JV.useState)(!1), [Ee, Be] = (0, JV.useState)(!0), je = (0, JV.useRef)(!1), [qe, te] … [truncated]
-       Ge[0] === ze[0] && Ge[1] === ze[1] && Ge[2] === ze[2] || (We(ze), null !== Xe && Me({
-         ...Xe,
-         position: ye(Xe.position, ye(Ge, pe(ze, -1)))
-       }));
-       const Re = (0, JV.useMemo)((() => function(VV) {
-           return [VV.max[0] - VV.min[0] + 1, VV.max[1] - VV.min[1] + 1, VV.max[2] - VV.min[2] + 1]
-         }(oV)), [oV]),
-         ge = (0, JV.useMemo)((() => function(VV, eV) {
-           const xV = [],
-             JV = [];
-           for (const [YV, UV] of Object.entries(VV.frequencies)) {
-             const VV = Number(YV);
-             for (const [YV, yV] of Object.entries(UV)) {
- ... (178 more removed lines; see GitHub link above)
+       } = (0, PH.B)(), {
+         isTouchScreen: AH
+       } = (0, QH.m)(["isTouchScreen"]), [rH, SH] = (0, tH.useState)([]), hH = (0, tH.useRef)(null), zH = (0, tH.useRef)(null), CH = (0, tH.useRef)([]), EH = (0, tH.useRef)({
+         arrival: BH.arrival,
+         showToken: BH.showToken
+       }), {
+         arrival: XH,
+         showToken: GH
+       } = BH;
+       (0, tH.useLayoutEffect)((() => {
+         var HH;
+         if (GH !== EH.current.showToken) SH([]);
+         else if (null !== XH && XH.token !== (null === (HH = EH.current.arrival) || void 0 === HH ? void 0 : HH.token) && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
+           const HH = {
+             id: oH++,
+             item: XH.item,
+ ... (3 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L279-L280` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L370) · [Before (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L279-L280)

```diff
-         return document.addEventListener("pointerlockchange", eV), document.addEventListener("pointerlockerror", xV), document.addEventListener("pointermove", JV), () => {
-           document.removeEventListener("pointerlockchange", eV), document.removeEventListener("pointerlockerror", xV), document.removeEventListener("pointermove", JV), document.pointerLockElement === VV && (0, TV.b)()
+           SH((BH => BH.length < 6 ? [...BH, HH] : BH))
```

#### 10. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L282-L350` → after: `L372-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L372-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L372-L404) · [Before (L282-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L282-L350)

```diff
-       }), []), (0, JV.useEffect)((() => {
-         const VV = we.current;
-         null !== VV && 0 !== Ze.width && 0 !== Ze.height && (VV.engine.resize(), VV.needsRender = !0)
-       }), [Ze.width, Ze.height]), (0, JV.useEffect)((() => {
-         const VV = we.current;
-         null !== VV && (VV.targetFieldOfView = De * (Te ? NV : 1))
-       }), [De, Te]), (0, JV.useEffect)((() => {
-         const VV = we.current;
-         null !== VV && function(VV, eV, xV, JV) {
-           const YV = [],
-             UV = [],
-             yV = [],
-             pV = [];
-           for (let QV = 0; QV < eV.count; QV++) {
-             const VV = eV.values[QV],
-               nV = (0, tV.v)(VV, xV, JV);
- ... (53 more removed lines; see GitHub link above)
+         EH.current = {
+           arrival: XH,
+           showToken: GH
+         }
+       }), [XH, GH]), (0, tH.useEffect)((() => () => {
+         for (const HH of CH.current) HH.cancel()
+       }), []);
+       const YH = (0, tH.useCallback)((() => {
+           for (const HH of CH.current) HH.cancel();
+           CH.current = [hH.current.animate(kH, {
+             duration: 300,
+             easing: "ease-out"
+           }), zH.current.animate(mH, {
+             duration: 220,
+             easing: "ease-out"
+           })]
+ ... (17 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L352-L434` → after: `L406-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L406-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L406-L418) · [Before (L352-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L352-L434)

```diff
-         className: "StudioHeatmapMap StudioHeatmap3D",
-         ref: Qe,
-         children: [(0, PV.jsx)("canvas", {
-           className: "StudioHeatmapMapCanvas",
-           ref: ne,
-           style: {
-             width: `${Ze.width}px`,
-             height: `${Ze.height}px`
-           },
-           tabIndex: 0,
-           "aria-label": uV("3D heatmap"),
-           onClick: () => {
-             const VV = ne.current;
-             if (null === VV) return;
-             if (VV.focus({
-                 preventScroll: !0
- ... (67 more removed lines; see GitHub link above)
+         className: "GreenvilleBackpack",
+         children: [(0, UH.jsxs)("div", {
+           className: "GreenvilleBackpackCount SmallTextBold",
+           children: [(0, UH.jsx)("span", {
+             ref: zH,
+             className: uH()("GreenvilleBackpackTotal", {
+               Full: TH
+             }),
+             children: xH
+           }), (0, UH.jsxs)("span", {
+             className: "GreenvilleBackpackCapacity",
+             children: ["/ ", BH.aX]
+           })]
```

#### 12. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L436-L444` → after: `L420-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L420-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L420-L468) · [Before (L436-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L436-L444)

```diff
-           className: "StudioHeatmapMapControls",
-           children: [lV, (0, PV.jsx)(jV.M, {
-             active: null === Xe,
-             onClick: () => {
-               Me(null)
-             },
-             children: (0, PV.jsx)(qV.b, {
-               name: "eye"
-             })
+           className: "GreenvilleBackpackRow",
+           children: [(0, UH.jsx)(VH, {
+             ref: hH,
+             contents: OH,
+             aX: BH.aX,
+             full: TH,
+             children: rH.map((HH => (0, UH.jsx)(KH, {
+               drop: HH,
+               onLanded: WH
+             }, HH.id)))
+           }), (0, UH.jsxs)("div", {
+             className: "GreenvilleBackpackInfo",
+             children: [bH.length > 0 && (0, UH.jsx)("div", {
+               className: "GreenvilleBackpackTallies",
+               children: bH.map((HH => {
+                 let [LH, AH, rH] = HH;
+ ... (33 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L452-L456` → after: `L476-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L476-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L476-L477) · [Before (L452-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L452-L456)

```diff
-         heading: eV,
-         pitch: xV,
-         onViewFrom: YV,
-         onTurn: UV,
-         onFlip: yV
+         shards: BH,
+         shardsPerItem: LH
```

#### 14. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L458-L582` → after: `L479-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L479-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L479-L488) · [Before (L458-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L458-L582)

```diff
-       const {
-         t: pV
-       } = (0, bV.A)(), QV = (0, JV.useRef)(null), nV = Ve({
-         heading: eV,
-         pitch: xV
-       }), wV = ee(eV), ZV = ne(nV, wV), vV = LV + fV + 2, rV = lV.flatMap((VV => [1, -1].map((eV => {
-         const xV = pe(VV.direction, eV);
-         return {
-           ...VV,
-           sign: eV,
-           direction: xV,
-           endX: vV + Qe(xV, wV) * LV,
-           endY: vV - Qe(xV, ZV) * LV,
-           depth: Qe(xV, nV)
-         }
-       })))).sort(((VV, eV) => eV.depth - VV.depth));
- ... (109 more removed lines; see GitHub link above)
+       return (0, UH.jsx)("div", {
+         className: "GreenvilleBackpackShards",
+         children: Array.from({
+           length: LH
+         }, ((HH, LH) => (0, UH.jsx)("span", {
+           className: uH()("GreenvilleBackpackShard", {
+             Filled: LH < BH
+           })
+         }, LH)))
+       })
```

#### 15. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L585-L590` → after: `L491-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L491-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L491-L522) · [Before (L585-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L585-L590)

```diff
-     function IV(VV, eV, xV, JV) {
-       VV.beV("matrix", function(VV, eV) {
-         const xV = new Float32Array(16 * eV);
-         for (let JV = 0; JV < eV; JV++) {
-           const eV = 16 * JV;
-           xV[eV] = 1, xV[eV + 5] = 1, xV[eV + 10] = 1, xV[eV + 12] = VV[3 * JV], xV[eV + 13] = VV[3 * JV + 1], xV[eV + 14] = VV[3 * JV + 2], xV[eV + 15] = 1
+     function KH(HH) {
+       let {
+         drop: BH,
+         onLanded: LH
+       } = HH;
+       const AH = (0, tH.useRef)(null);
+       return (0, tH.useLayoutEffect)((() => {
+         const {
+           driftEm: HH,
+           spinDeg: rH
+         } = BH, SH = AH.current.animate([{
+           transform: `translate(${HH}em, -3.2em) rotate(${rH}deg) scale(1.2)`,
+           opacity: 0
+         }, {
+           transform: `translate(${.7*HH}em, -2.4em) rotate(${.7*rH}deg) scale(1.1)`,
+           opacity: 1,
+ ... (16 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L592-L593` → after: `L524-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L524-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L524-L531) · [Before (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L592-L593)

```diff
-         return xV
-       }(eV, JV), 16, !0), VV.beV("color", xV, 4, !0), VV.isVisible = JV > 0
+       }), [BH, LH]), (0, UH.jsx)("div", {
+         ref: AH,
+         className: "GreenvilleBackpackFalling",
+         children: (0, UH.jsx)(MH.e, {
+           itemName: BH.item,
+           amount: 0
+         })
+       })
```

#### 17. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L597-L624` → after: `L557-L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L557-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L557-L565) · [Before (L597-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L597-L624)

```diff
-       const {
-         camera: eV,
-         translucent: xV
-       } = VV, JV = [eV.position.x, eV.position.y, eV.position.z], YV = VV.translucentSortedFrom;
-       if (null !== YV && Math.hypot(JV[0] - YV[0], JV[1] - YV[1], JV[2] - YV[2]) < gV) return;
-       VV.translucentSortedFrom = JV;
-       const UV = new Float64Array(xV.count),
-         yV = new Uint32Array(xV.count);
-       for (let nV = 0; nV < xV.count; nV++) {
-         const VV = xV.wb[3 * nV] - JV[0],
-           eV = xV.wb[3 * nV + 1] - JV[1],
-           YV = xV.wb[3 * nV + 2] - JV[2];
-         UV[nV] = VV * VV + eV * eV + YV * YV, yV[nV] = nV
-       }
-       yV.sort(((VV, eV) => UV[eV] - UV[VV]));
-       const pV = new Float32Array(3 * xV.count),
- ... (12 more removed lines; see GitHub link above)
+       var BH;
+       let {
+         sounds: LH
+       } = HH;
+       const AH = null === (BH = (0, qH.j)("currencyAmounts")) || void 0 === BH ? void 0 : BH.gold;
+       return !AH || AH.hidden ? null : (0, UH.jsx)(DH, {
+         gold: AH.amount,
+         sounds: LH
+       })
```

#### 18. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L628` → after: `L569-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L569-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L569-L651) · [Before (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L628)

```diff
-       return [Math.sin(VV.heading) * Math.cos(VV.pitch), -Math.sin(VV.pitch), Math.cos(VV.heading) * Math.cos(VV.pitch)]
+       let {
+         gold: BH,
+         sounds: LH
+       } = HH;
+       const AH = (0, gH.b)(),
+         [rH, SH] = (0, tH.useState)([]),
+         hH = (0, tH.useRef)(null),
+         zH = (0, tH.useRef)(null),
+         CH = (0, tH.useRef)(null),
+         EH = (0, tH.useRef)(BH);
+       (0, tH.useLayoutEffect)((() => {
+         const HH = BH - EH.current;
+         if (EH.current = BH, !(HH <= 0) && (LH.onGain(), !AH && !window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
+           const BH = function(HH) {
+             const BH = Math.max(1, Math.min(8, Math.floor(HH))),
+               LH = Math.floor(HH / BH),
+ ... (67 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L632` → after: `L655-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L655-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L655-L708) · [Before (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L632)

```diff
-       return [Math.cos(VV), 0, -Math.sin(VV)]
+       let {
+         coin: BH,
+         target: LH,
+         onLanded: AH
+       } = HH;
+       const rH = (0, tH.useRef)(null);
+       return (0, tH.useEffect)((() => {
+         var HH;
+         const SH = (null !== (HH = nH) && void 0 !== HH ? HH : LH.current).getBoundingClientRect(),
+           {
+             burst: hH
+           } = BH,
+           tH = window.innerWidth / 2,
+           zH = window.innerHeight / 2,
+           CH = SH.left + SH.width / 2,
+           EH = SH.top + SH.height / 2,
+ ... (38 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L634-L652` → after: `L710-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L710-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L710-L722) · [Before (L634-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L634-L652)

```diff
- 
-     function xe(VV, eV, xV) {
-       let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
-         heading: oV,
-         pitch: cV
-       };
-       const YV = [VV.max[0] - VV.min[0], VV.max[1] - VV.min[1], VV.max[2] - VV.min[2]],
-         UV = Ve(JV),
-         yV = ee(JV.heading),
-         pV = ne(UV, yV),
-         QV = Math.tan(xV / 2),
-         nV = QV * eV;
-       let wV = 1;
-       for (const ZV of [-YV[0] / 2, YV[0] / 2])
-         for (const VV of [-YV[1] / 2, YV[1] / 2])
-           for (const eV of [-YV[2] / 2, YV[2] / 2]) {
- ... (3 more removed lines; see GitHub link above)
+     class ZH {
+       constructor(HH, BH, LH) {
+         this.pacer = HH, this.send = BH, this.onAnswersTimedOut = LH, this.queued = [], this.unanswered = [], this.answerTimer = null, this.flushing = !1, this.flush = () => {
+           if (!this.flushing) {
+             this.flushing = !0;
+             try {
+               for (; this.queued.length > 0 && this.pacer.tryStart();) {
+                 const HH = this.queued.shift();
+                 this.unanswered.push(HH), this.answerTimer ??= setTimeout(this.onAnswerTimeout, 15e3), this.send(HH)
+               }
+             } finally {
+               this.flushing = !1
+             }
```

#### 21. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L654-L657` → after: `L724-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L724-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L724-L757) · [Before (L654-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L654-L657)

```diff
-       return {
-         position: ye([VV.min[0] + YV[0] / 2, VV.min[1] + YV[1] / 2, VV.min[2] + YV[2] / 2], pe(UV, -wV * hV)),
-         heading: JV.heading,
-         pitch: JV.pitch
+         }, this.onAnswerTimeout = () => {
+           this.answerTimer = null, this.unanswered = [], this.onAnswersTimedOut()
+         }, HH.subscribe(this.flush)
+       }
+       getPending() {
+         return [...this.unanswered, ...this.queued]
+       }
+       TX() {
+         return 0 === this.unanswered.length && 0 === this.queued.length
+       }
+       getLastSent() {
+         return this.unanswered.at(-1)
+       }
+       getLastPending() {
+         var HH;
+         return null !== (HH = this.queued.at(-1)) && void 0 !== HH ? HH : this.unanswered.at(-1)
+ ... (18 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L660-L669` → after: `L760-L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L760-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L760-L864) · [Before (L660-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L660-L669)

```diff
- 
-     function Je(VV, eV, xV) {
-       const JV = Ue(VV),
-         YV = Ue(xV),
-         UV = ye(VV.position, pe(eV, -1)),
-         yV = [0, 1, 2].reduce(((VV, eV) => ye(VV, pe(YV[eV], Qe(UV, JV[eV])))), [0, 0, 0]);
-       return {
-         position: ye(eV, yV),
-         heading: xV.heading,
-         pitch: xV.pitch
+     class dH {
+       constructor(HH, BH, LH, AH) {
+         this.confirmed = HH, this.picks = void 0, this.picks = new ZH(BH, LH, AH)
+       }
+       confirm(HH) {
+         this.confirmed = HH
+       }
+       getLastPending() {
+         return this.picks.getLastPending()
+       }
+       getLatest() {
+         var HH;
+         return null !== (HH = this.getLastPending()) && void 0 !== HH ? HH : this.confirmed
+       }
+       TX() {
+         return this.picks.TX()
+ ... (89 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L674` → after: `L875-L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L875-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L875-L883) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L674)

```diff
-       return pe(ye(VV.min, VV.max), .5)
+       var BH;
+       let {
+         item: LH,
+         className: AH
+       } = HH;
+       return (0, UH.jsx)(LB.b, {
+         className: AH,
+         text: null !== (BH = (0, HB.displayNameOf)((0, BB.e)(LH))) && void 0 !== BH ? BH : LH
+       })
```

#### 24. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L678-L680` → after: `L887-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L887-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L887-L893) · [Before (L678-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L678-L680)

```diff
-       const eV = Ve(VV),
-         xV = ee(VV.heading);
-       return [eV, xV, ne(eV, xV)]
+       let {
+         item: BH
+       } = HH;
+       return (0, UH.jsx)(MH.e, {
+         itemName: BH,
+         amount: 0
+       })
```

#### 25. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L683-L685` → after: `L896-L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L896-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L896-L940) · [Before (L683-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L683-L685)

```diff
-     function ye(VV, eV) {
-       return [VV[0] + eV[0], VV[1] + eV[1], VV[2] + eV[2]]
-     }
+     function hB(HH) {
+       let {
+         open: BH,
+         onDismiss: LH,
+         title: AH,
+         className: rH,
+         headerExtra: SH,
+         tabs: hH,
+         status: tH,
+         children: zH
+       } = HH;
+       const CH = `${rH}Title`;
+       return (0, UH.jsx)(AB.b, {
+         show: BH,
+         close: LH,
+         togglePointerLock: !1,
+ ... (29 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L687-L688` → after: `L942-L1373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L942-L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L942-L1373) · [Before (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L687-L688)

```diff
-     function pe(VV, eV) {
-       return [VV[0] * eV, VV[1] * eV, VV[2] * eV]
+     function tB(HH) {
+       let {
+         tabs: BH,
+         selected: LH,
+         onSelect: AH
+       } = HH;
+       return (0, UH.jsx)("nav", {
+         className: "GreenvilleBoardTabs",
+         "data-pad-tabs": "1",
+         children: BH.map((HH => {
+           const BH = HH.id === LH;
+           return (0, UH.jsxs)("button", {
+             type: "button",
+             className: uH()("GreenvilleBoardTab", {
+               Selected: BH
+             }),
+ ... (416 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L692` → after: `L1377-L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L1377-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L1377-L1570) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L692)

```diff
-       return VV[0] * eV[0] + VV[1] * eV[1] + VV[2] * eV[2]
+       return "sell" === BH.action ? function(HH, BH) {
+         let LH = HH.goldOwned;
+         const AH = HH.sellLines.map((HH => {
+           const [AH, rH, SH] = HH;
+           return null !== BH && BH !== AH ? HH : (LH += rH * SH, [AH, 0, SH])
+         }));
+         return {
+           ...HH,
+           goldOwned: LH,
+           sellLines: AH
+         }
+       }(HH, BH.item) : "accept" === BH.action ? function(HH, BH) {
+         var LH;
+         const AH = HH.orders[BH];
+         return {
+           ...HH,
+ ... (178 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L696` → after: `L1651-L5667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR1651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L1651-L5667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/275.js#L1651-L5667) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/275.js#L696)

```diff
-       return [VV[1] * eV[2] - VV[2] * eV[1], VV[2] * eV[0] - VV[0] * eV[2], VV[0] * eV[1] - VV[1] * eV[0]]
+       return HH.XE ? HH.ready ? "Ready" : HH.slot === BH ? "Tracking" : "Accepted" : "New"
+     }
+ 
+     function NB(HH) {
+       let {
+         state: BH
+       } = HH;
+       const {
+         t: LH
+       } = (0, PH.B)();
+       return (0, UH.jsx)("span", {
+         className: uH()("GreenvilleBoardBadge GreenvilleLumberState", BH, {
+           Muted: "Accepted" === BH
+         }),
+         children: LH(`greenvilleGame:${qB[BH]}`)
+       })
+ ... (4001 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/276.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/276.js` (66 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6)

#### 1. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L4)

```diff
-   41478: (VV, eV, xV) => {
+   40785: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L6-L7)

```diff
-       c: () => EV,
-       f: () => qV
+       d: () => CH
```

#### 3. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L9-L385` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L8-L16) · [Before (L9-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L9-L385)

```diff
-     var JV = xV(41257),
-       YV = xV(41263),
-       UV = xV(41353),
-       yV = xV(38296),
-       pV = xV(38269),
-       QV = xV(41486),
-       nV = xV(39870),
-       wV = xV(38318),
-       ZV = xV(41138),
-       vV = xV(39240),
-       rV = xV(38908),
-       kV = xV(41217),
-       bV = xV(41279);
-     let EV = (() => {
-       var VV;
-       let eV, xV, wV, EV, BV, jV, qV, tV, FV, TV, PV, AV, NV, XV, MV, zV, GV, WV, RV = QV.e,
- ... (361 more removed lines; see GitHub link above)
+     var AH = LH(5111);
+     const rH = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];
+ 
+     function SH(HH) {
+       return new Promise(((BH, LH) => {
+         HH.onsuccess = () => {
+           BH(HH.result)
+         }, HH.onerror = () => {
+           LH(HH.error)
```

#### 4. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L387-L614` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L18-L19) · [Before (L387-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L387-L614)

```diff
-       }, (() => {
-         const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(RV[Symbol.metadata] ?? null) : void 0;
-         eV = [(0, YV.I)("position")], xV = [(0, YV.I)("upVector")], wV = [(0, YV.J)()], EV = [(0, YV.J)()], BV = [(0, YV.J)()], jV = [(0, YV.J)()], qV = [(0, YV.J)()], tV = [(0, YV.J)()], FV = [(0, YV.J)()], TV = [(0, YV.J)()], PV = [(0, YV.J)()], AV = [(0, YV.J)()], NV = [(0, YV … [truncated]
-           kind: "getter",
-           name: "orthoLeft",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "orthoLeft" in VV,
-             get: VV => VV.orthoLeft
-           },
-           metadata: UV
-         }, null, gV), (0, JV.i)(VV, null, EV, {
-           kind: "getter",
-           name: "orthoRight",
-           static: !1,
- ... (212 more removed lines; see GitHub link above)
+       }))
+     }
```

#### 5. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L616-L630` → after: `L21-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L21-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L21-L29) · [Before (L616-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L616-L630)

```diff
-     function BV(VV, eV) {
-       const xV = VV.type,
-         JV = EV.GetConstructorFromName(xV, VV.name, eV, VV.interaxial_distance, VV.isStereoscopicSideBySide),
-         YV = bV.b.Parse(JV, VV, eV);
-       if (void 0 !== VV.parentId && (YV._waitingParentId = VV.parentId), void 0 !== VV.parentInstanceIndex && (YV._waitingParentInstanceIndex = VV.parentInstanceIndex), YV.inputs && (YV.inputs.parse(VV), YV._setupInputs()), VV.upVector && (YV.upVector = pV.o.FromArray(VV.upVector … [truncated]
-         const eV = VV.interaxial_distance ? {
-           interaxialDistance: VV.interaxial_distance
-         } : {};
-         YV.setCameraRigMode(VV.cameraRigMode, eV)
-       }
-       if (VV.animations) {
-         for (let eV = 0; eV < VV.animations.length; eV++) {
-           const xV = VV.animations[eV],
-             JV = (0, wV.c)("BABYLON.Animation");
-           JV && YV.animations.push(JV.Parse(xV))
+     function hH(HH) {
+       return new Promise(((BH, LH) => {
+         HH.oncomplete = () => {
+           BH()
+         }, HH.onerror = () => {
+           LH(HH.error)
+         }, HH.onabort = () => {
+           var BH;
+           LH(null !== (BH = HH.error) && void 0 !== BH ? BH : new Error("IndexedDB transaction aborted"))
```

#### 6. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L632-L634` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L31) · [Before (L632-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L632-L634)

```diff
-         QV.e.ParseAnimationRanges(YV, VV, eV)
-       }
-       return VV.autoAnimate && eV.beginAnimation(YV, VV.autoAnimateFrom, VV.autoAnimateTo, VV.autoAnimateLoop, VV.autoAnimateSpeed || 1), void 0 !== VV.isEnabled && YV.pW(VV.isEnabled), YV
+       }))
```

#### 7. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L638-L639` → after: `L34-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L34-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L34-L39) · [Before (L638-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L638-L639)

```diff
-     function qV() {
-       jV || (jV = !0, EV.Parse = BV)
+     function tH(HH) {
+       return IDBKeyRange.bound([HH], [HH, []])
+     }
+ 
+     function zH(HH, BH) {
+       return IDBKeyRange.bound([HH, BH], [HH, BH, []])
```

#### 8. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L648-L662` → after: `L42-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L42-L43) · [Before (L648-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L648-L662)

```diff
-       constructor(VV, eV, xV) {
-         this._cameraPosition = eV, this._behavior = xV, this.activeInput = !1, this.speed = 1, this.x_ = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = . … [truncated]
-       }
-       computeCurrentFrameDeltas() {
-         const VV = this._scene.sk().getDeltaTime(),
-           eV = this._getEffectiveDeltaMs(VV);
-         if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 ===  … [truncated]
-         this.panDeltaCurrentFrame.HVV(0), this.rotationDeltaCurrentFrame.HVV(0), this.zoomDeltaCurrentFrame = 0;
-         (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.FeV(this._calculateCurrentVelocity(this._p … [truncated]
-       }
-       resetRotationVelocity() {
-         this._rotationVelocity.HVV(0), this.rotationAccumulatedPixels.HVV(0)
-       }
-       resetPanVelocity() {
-         this._panVelocity.HVV(0), this.panAccumulatedPixels.HVV(0)
+       constructor() {
+         this.db = null, this.opening = null, this.failed = !1, this.tailRecordings = new Set
```

#### 9. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L664-L665` → after: `L45-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L45-L46) · [Before (L664-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L664-L665)

```diff
-       resetZoomVelocity() {
-         this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
+       get working() {
+         return !this.failed
```

#### 10. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L667-L668` → after: `L48-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L48-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L48-L53) · [Before (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L667-L668)

```diff
-       get isInterpolating() {
-         return !!this._behavior?.isInterpolating
+       static get supported() {
+         try {
+           return "undefined" !== typeof indexedDB
+         } catch {
+           return !1
+         }
```

#### 11. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L670-L674` → after: `L55-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L55-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L55-L58) · [Before (L670-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L670-L674)

```diff
-       getFrameIndependentDecay(VV) {
-         const eV = this._scene.sk().getDeltaTime(),
-           xV = this._getEffectiveDeltaMs(eV),
-           JV = 1e3 / this.referenceFrameRate;
-         return Math.pow(VV, xV / JV)
+       putRecording(HH) {
+         this.write(["recordings"], (BH => {
+           BH.objectStore("recordings").put(HH)
+         }))
```

#### 12. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L676-L679` → after: `L60-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L60-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L60-L67) · [Before (L676-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L676-L679)

```diff
-       getFrameIndependentInputScale(VV) {
-         const eV = 1 - VV;
-         if (eV <= 0) return 1;
-         return (1 - this.getFrameIndependentDecay(VV)) / eV
+       putVideoSequence(HH, BH, LH) {
+         this.write(["recordings", "videoSequences"], (AH => {
+           AH.objectStore("recordings").put(HH), AH.objectStore("videoSequences").put({
+             recordingId: HH.recordingId,
+             segmentId: BH,
+             sequence: LH
+           })
+         }))
```

#### 13. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L681-L682` → after: `L69-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L69-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L69-L74) · [Before (L681-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L681-L682)

```diff
-       _getEffectiveDeltaMs(VV) {
-         return VV > 0 ? VV : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
+       appendVideo(HH, BH) {
+         this.write(["videoHeaders", "videoChunks"], (LH => {
+           LH.objectStore("videoHeaders").put(HH);
+           const AH = LH.objectStore("videoChunks");
+           for (const HH of BH) AH.put(HH)
+         }))
```

#### 14. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L684-L694` → after: `L76-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L76-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L76-L85) · [Before (L684-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L684-L694)

```diff
-       _calculateCurrentVelocity(VV, eV, xV) {
-         let JV = VV;
-         const YV = this._scene.sk().getDeltaTime(),
-           UV = this._getEffectiveDeltaMs(YV);
-         if (0 === UV) return JV;
-         const yV = this.getFrameIndependentDecay(xV);
-         if (JV *= yV, 0 !== eV || this.activeInput) {
-           const VV = 1 - xV;
-           JV += eV / UV * (VV > 0 ? (1 - yV) / VV : 1)
-         } else Math.abs(JV) < 1e-6 && (JV = 0);
-         return JV
+       putVideoProgress(HH, BH) {
+         this.write(["videoProgress", "videoChunks"], (LH => {
+           if (LH.objectStore("videoProgress").put(HH), BH > 0) {
+             const {
+               recordingId: AH,
+               segmentId: rH
+             } = HH;
+             LH.objectStore("videoChunks").delete(IDBKeyRange.bound([AH, rH, 0], [AH, rH, BH], !1, !0))
+           }
+         }))
```

#### 15. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L696-L704` → after: `L87-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L87-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L87-L90) · [Before (L696-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L696-L704)

```diff
-     }
-   },
-   41499: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => JV
-     });
-     class JV {
-       constructor(VV, eV) {
-         this.inputMap = [], this.handlers = VV, this._createDefaultEntries = eV, this.resetInputMap()
+       removeVideoChunks(HH, BH) {
+         this.write(["videoChunks"], (LH => {
+           LH.objectStore("videoChunks").delete(zH(HH, BH))
+         }))
```

#### 16. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L706-L709` → after: `L92-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L92-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L92-L95) · [Before (L706-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L706-L709)

```diff
-       resolveInteraction(VV, eV) {
-         for (const xV of this.inputMap)
-           if (xV.source === VV && this._entryMatches(xV, eV)) return xV;
-         return null
+       removeVideo(HH, BH) {
+         this.write(["videoHeaders", "videoChunks", "videoSequences", "videoProgress"], (LH => {
+           LH.objectStore("videoHeaders").delete([HH, BH]), LH.objectStore("videoChunks").delete(zH(HH, BH)), LH.objectStore("videoSequences").delete([HH, BH]), LH.objectStore("videoProgress").delete([HH, BH])
+         }))
```

#### 17. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L711-L712` → after: `L97-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L97-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L97-L100) · [Before (L711-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L711-L712)

```diff
-       resetInputMap() {
-         this.inputMap = this._createDefaultEntries?.() ?? []
+       putTelemetry(HH) {
+         this.write(["telemetry"], (BH => {
+           BH.objectStore("telemetry").put(HH)
+         }))
```

#### 18. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L714-L719` → after: `L102-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L102-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L102-L105) · [Before (L714-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L714-L719)

```diff
-       getEntry(VV, eV, xV) {
-         const JV = this.inputMap;
-         for (let YV = 0; YV < JV.length; YV++) {
-           const UV = JV[YV];
-           if (UV.source === VV && UV.interaction === eV && this._entryConditionsMatch(UV, xV)) return UV
-         }
+       removeTelemetry(HH, BH) {
+         this.write(["telemetry"], (LH => {
+           LH.objectStore("telemetry").delete([HH, BH])
+         }))
```

#### 19. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L721-L728` → after: `L107-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L107-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L107-L110) · [Before (L721-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L721-L728)

```diff
-       getEntries(VV, eV, xV) {
-         const JV = [],
-           YV = this.inputMap;
-         for (let UV = 0; UV < YV.length; UV++) {
-           const yV = YV[UV];
-           yV.source === VV && yV.interaction === eV && this._entryConditionsMatch(yV, xV) && JV.push(yV)
-         }
-         return JV
+       putDom(HH) {
+         this.write(["dom"], (BH => {
+           BH.objectStore("dom").put(HH)
+         }))
```

#### 20. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L730-L737` → after: `L112-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L112-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L112-L119) · [Before (L730-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L730-L737)

```diff
-       addEntry(VV) {
-         const eV = this._entrySpecificity(VV);
-         let xV = this.inputMap.length;
-         for (let JV = 0; JV < this.inputMap.length; JV++)
-           if (this._entrySpecificity(this.inputMap[JV]) < eV) {
-             xV = JV;
-             break
-           } this.inputMap.splice(xV, 0, VV)
+       queueDom(HH, BH, LH) {
+         this.write(["recordings", "dom", "domTail"], (AH => {
+           AH.objectStore("recordings").put(HH), AH.objectStore("dom").put(BH), AH.objectStore("domTail").delete(zH(BH.recordingId, LH))
+         }), (AH => {
+           console.warn(`Session replay couldn't journal page recording chunk ${BH.sequence}; a closing tab may lose it.`, AH), this.write(["recordings", "domTail"], (AH => {
+             AH.objectStore("recordings").put(HH), AH.objectStore("domTail").delete(zH(BH.recordingId, LH))
+           }))
+         }))
```

#### 21. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L739-L745` → after: `L121-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L121-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L121-L124) · [Before (L739-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L739-L745)

```diff
-       setInteraction(VV, eV, xV) {
-         const JV = this.resolveInteraction(VV, eV);
-         return JV && this._entryCoversAllConditionsOf(JV, eV) ? (JV.interaction = xV, !0) : (this.addEntry({
-           source: VV,
-           ...eV ?? {},
-           interaction: xV
-         }), !0)
+       putDomTail(HH) {
+         this.tailRecordings.add(HH.recordingId), this.write(["domTail"], (BH => {
+           BH.objectStore("domTail").put(HH)
+         }))
```

#### 22. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L747-L759` → after: `L126-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L126-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L126-L129) · [Before (L747-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L747-L759)

```diff
-       _entryCoversAllConditionsOf(VV, eV) {
-         if (!eV) return !0;
-         const xV = VV;
-         for (const JV of Object.keys(eV)) {
-           const VV = eV[JV];
-           if (void 0 !== VV)
-             if ("modifiers" === JV) {
-               const eV = xV.modifiers ?? {};
-               for (const xV of Object.keys(VV))
-                 if (void 0 !== VV[xV] && void 0 === eV[xV]) return !1
-             } else if (void 0 === xV[JV]) return !1
-         }
-         return !0
+       removeDomTail(HH, BH) {
+         this.write(["domTail"], (LH => {
+           LH.objectStore("domTail").delete(zH(HH, BH))
+         }))
```

#### 23. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L761-L768` → after: `L131-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L131-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L131-L134) · [Before (L761-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L761-L768)

```diff
-       setInteractions(VV, eV, xV) {
-         let JV = 0;
-         const YV = this.inputMap;
-         for (let UV = 0; UV < YV.length; UV++) {
-           const yV = YV[UV];
-           yV.source === VV && this._entryMatches(yV, eV) && (yV.interaction = xV, JV++)
-         }
-         return JV
+       removeDom(HH, BH) {
+         this.write(["dom"], (LH => {
+           LH.objectStore("dom").delete([HH, BH])
+         }))
```

#### 24. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L770-L780` → after: `L136-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L136-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L136-L138) · [Before (L770-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L770-L780)

```diff
-       _entryMatches(VV, eV) {
-         switch (VV.source) {
-           case "pointer":
-             return (void 0 === VV.button || VV.button === eV?.button) && this._matchModifiers(VV.modifiers, eV?.modifiers);
-           case "wheel":
-             return this._matchModifiers(VV.modifiers, eV?.modifiers);
-           case "touch":
-             return void 0 === VV.touchCount || VV.touchCount === eV?.touchCount;
-           case "keyboard":
-             return (void 0 === VV.key || (Array.isArray(VV.key) ? -1 !== VV.key.indexOf(eV?.key ?? -1) : VV.key === eV?.key)) && this._matchModifiers(VV.modifiers, eV?.modifiers)
-         }
+       async listRecordings() {
+         const HH = await this.open();
+         return await SH(HH.transaction("recordings", "readonly").objectStore("recordings").getAll())
```

#### 25. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L782-L794` → after: `L140-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L140-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L140-L156) · [Before (L782-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L782-L794)

```diff
-       _entryConditionsMatch(VV, eV) {
-         if (!eV) return !0;
-         switch (VV.source) {
-           case "pointer":
-             return (!("button" in eV) || VV.button === eV.button) && (!("modifiers" in eV) || this._entryModifiersMatch(VV.modifiers, eV.modifiers));
-           case "wheel":
-             return !("modifiers" in eV) || this._entryModifiersMatch(VV.modifiers, eV.modifiers);
-           case "touch":
-             return !("touchCount" in eV) || VV.touchCount === eV.touchCount;
-           case "keyboard":
-             if ("key" in eV) {
-               if (void 0 === VV.key) return void 0 === eV.key;
-               if (void 0 === eV.key || (Array.isArray(VV.key) ? -1 === VV.key.indexOf(eV.key) : VV.key !== eV.key)) return !1
+       async read(HH) {
+         const BH = (await this.open()).transaction(["videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"], "readonly"),
+           LH = tH(HH.recordingId),
+           AH = HH => SH(BH.objectStore(HH).getAll(LH)),
+           [rH, hH, zH, CH, EH, XH, GH] = await Promise.all([AH("videoHeaders"), AH("videoChunks"), AH("videoSequences"), AH("videoProgress"), AH("telemetry"), AH("dom"), AH("domTail")]);
+         return {
+           recording: HH,
+           telemetry: EH,
+           dom: XH,
+           domTails: GH,
+           video: rH.map((HH => {
+             var BH, LH, AH;
+             return {
+               header: HH,
+               sequence: null !== (BH = null === (LH = zH.find((BH => BH.segmentId === HH.segmentId))) || void 0 === LH ? void 0 : LH.sequence) && void 0 !== BH ? BH : null,
+               progress: null !== (AH = CH.find((BH => BH.segmentId === HH.segmentId))) && void 0 !== AH ? AH : null,
+ ... (1 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L796` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L158) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L796)

```diff
-             return !("modifiers" in eV) || this._entryModifiersMatch(VV.modifiers, eV.modifiers)
+           }))
```

#### 27. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L799-L804` → after: `L161-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L161-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L161-L165) · [Before (L799-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L799-L804)

```diff
-       _entrySpecificity(VV) {
-         let eV = 0;
-         return "button" in VV && void 0 !== VV.button && eV++, "key" in VV && void 0 !== VV.key && eV++, "touchCount" in VV && void 0 !== VV.touchCount && eV++, "modifiers" in VV && VV.modifiers && eV++, eV
-       }
-       _matchModifiers(VV, eV) {
-         return !VV || (void 0 === VV.ctrl || VV.ctrl === (eV?.ctrl ?? !1)) && ((void 0 === VV.shift || VV.shift === (eV?.shift ?? !1)) && (void 0 === VV.alt || VV.alt === (eV?.alt ?? !1)))
+       async deleteRecording(HH) {
+         const BH = (await this.open()).transaction([...rH], "readwrite");
+         BH.objectStore("recordings").delete(HH);
+         for (const LH of rH.slice(1)) BH.objectStore(LH).delete(tH(HH));
+         await hH(BH)
```

#### 28. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L806-L833` → after: `L167-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L167-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L167-L190) · [Before (L806-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L806-L833)

```diff
-       _entryModifiersMatch(VV, eV) {
-         if (!eV) return !VV;
-         return void 0 !== eV.ctrl || void 0 !== eV.shift || void 0 !== eV.alt ? (void 0 === eV.ctrl || VV?.ctrl === eV.ctrl) && ((void 0 === eV.shift || VV?.shift === eV.shift) && (void 0 === eV.alt || VV?.alt === eV.alt)) : !VV || void 0 === VV.ctrl && void 0 === VV.shift && voi … [truncated]
-       }
-     }
-   },
-   41470: (VV, eV, xV) => {
-     xV.d(eV, {
-       c: () => BV,
-       g: () => bV
-     });
-     var JV = xV(41257),
-       YV = xV(41263),
-       UV = xV(41478),
-       yV = xV(38269),
-       pV = xV(38272),
- ... (12 more removed lines; see GitHub link above)
+       async forgetSent(HH, BH) {
+         const LH = (await this.open()).transaction([...rH], "readwrite"),
+           {
+             recordingId: AH
+           } = HH;
+         LH.objectStore("recordings").put(HH);
+         for (const rH of BH.videoSegmentIds) LH.objectStore("videoHeaders").delete([AH, rH]), LH.objectStore("videoChunks").delete(zH(AH, rH)), LH.objectStore("videoSequences").delete([AH, rH]), LH.objectStore("videoProgress").delete([AH, rH]);
+         for (const rH of BH.telemetrySequences) LH.objectStore("telemetry").delete([AH, rH]);
+         for (const rH of BH.domSequences) LH.objectStore("dom").delete([AH, rH]);
+         for (const rH of BH.domTailChunks) LH.objectStore("domTail").delete(zH(AH, rH));
+         await hH(LH)
+       }
+       write(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HH => {
+           this.fail(HH)
+         };
+ ... (8 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L835` → after: `L192-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L192-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L192-L195) · [Before (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L835)

```diff
-         }, (() => this._createDefaultInputMap()))
+         };
+         null === this.db ? this.open().then(AH, (HH => {
+           this.fail(HH)
+         })) : AH(this.db)
```

#### 30. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L837-L853` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L197-L198) · [Before (L837-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L837-L853)

```diff
-       _createDefaultInputMap() {
-         return [{
-           source: "pointer",
-           interaction: "rotate"
-         }, {
-           source: "keyboard",
-           interaction: "translate"
-         }, {
-           source: "keyboard",
-           interaction: "rotate"
-         }, {
-           source: "touch",
-           interaction: "rotate"
-         }, {
-           source: "touch",
-           interaction: "translate"
- ... (1 more removed lines; see GitHub link above)
+       fail(HH) {
+         this.failed || (this.failed = !0, console.warn("Session replay can't keep its upload journal; what a closing tab leaves unsent will be lost.", HH), this.dropTails())
```

#### 31. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L855-L1004` → after: `L200-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L200-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L200-L245) · [Before (L855-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L855-L1004)

```diff
-     }
-     const rV = yV.d.Zero(),
-       kV = yV.h.Identity();
-     let bV = (() => {
-         var VV;
-         let eV, xV, nV, wV, ZV = UV.c,
-           bV = [],
-           EV = [],
-           BV = [],
-           jV = [],
-           qV = [],
-           tV = [],
-           FV = [],
-           TV = [];
-         return VV = class extends ZV {
-           get inertia() {
- ... (134 more removed lines; see GitHub link above)
+       dropTails() {
+         if (null === this.db || 0 === this.tailRecordings.size) return;
+         const HH = HH => {
+           console.warn("Session replay couldn't drop its page recording tails from its upload journal.", HH)
+         };
+         try {
+           const BH = this.db.transaction(["domTail"], "readwrite");
+           for (const HH of this.tailRecordings) BH.objectStore("domTail").delete(tH(HH));
+           hH(BH).catch(HH)
+         } catch (BH) {
+           HH(BH)
+         }
+       }
+       open() {
+         return this.opening ??= new Promise(((HH, BH) => {
+           const LH = indexedDB.open(AH.i, 4);
+ ... (30 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L1006-L1071` → after: `L247-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L247-L248) · [Before (L1006-L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L1006-L1071)

```diff
-         }, (() => {
-           const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(ZV[Symbol.metadata] ?? null) : void 0;
-           eV = [(0, YV.J)()], xV = [(0, YV.I)()], nV = [(0, YV.J)()], wV = [(0, YV.C)("lockedTargetId")], (0, JV.i)(null, null, eV, {
-             kind: "field",
-             name: "updateUpVectorFromRotation",
-             static: !1,
-             private: !1,
-             access: {
-               has: VV => "updateUpVectorFromRotation" in VV,
-               get: VV => VV.updateUpVectorFromRotation,
-               set: (VV, eV) => {
-                 VV.updateUpVectorFromRotation = eV
-               }
-             },
-             metadata: UV
-           }, bV, EV), (0, JV.i)(null, null, xV, {
- ... (50 more removed lines; see GitHub link above)
+         })), this.opening
+       }
```

#### 33. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L1074` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L251) · [Before (L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L1074)

```diff
-   41212: (VV, eV, xV) => {
+   40745: (HH, BH, LH) => {
```

#### 34. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L1078-L1079` → after: `L257-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L257-L258) · [Before (L1078-L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L1078-L1079)

```diff
-     var JV = xV(41150);
-     let YV = !1;
+     var AH = LH(40738);
+     const rH = new TextEncoder;
```

#### 35. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L1081-L1095` → after: `L260-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L260-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L260-L262) · [Before (L1081-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L1081-L1095)

```diff
-     function UV() {
-       YV || (YV = !0, JV.d.prototype.getInputElement = function() {
-         return this._renderingCanvas
-       }, JV.d.prototype.getRenderingCanvasClientRect = function() {
-         return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
-       }, JV.d.prototype.getInputElementClientRect = function() {
-         return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
-       }, JV.d.prototype.getAspectRatio = function(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const xV = VV.viewport;
-         return this.getRenderWidth(eV) * xV.width / (this.getRenderHeight(eV) * xV.height)
-       }, JV.d.prototype.getScreenAspectRatio = function() {
-         return this.getRenderWidth(!0) / this.getRenderHeight(!0)
-       }, JV.d.prototype._verifyPointerLock = function() {
-         this._onPointerLockChange?.()
+     function SH(HH, BH) {
+       return new Blob([rH.encode(`${JSON.stringify(HH)}\n`), BH], {
+         type: "text/plain"
```

#### 36. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L1886-L1889` → after: `L266-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L266-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L266-L284) · [Before (L1886-L1889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L1886-L1889)

```diff
-       constructor(VV) {
-         this._samples = new Array(VV), this.reset()
-       }
-       add(VV) {
+       constructor(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
+         this.token = HH, this.relay = BH, this.nowMs = LH, this.refused = !1, this.skipUntilMs = 0
+       }
+       async send(HH, BH, LH, rH, hH) {
+         if (this.goesDirect(BH, LH)) return null;
+         const tH = SH({
+             token: this.token,
+             contentType: LH,
+             target: HH
+           }, BH),
+           zH = {
+             method: "POST",
+             headers: {
+               "Content-Type": "text/plain"
+             },
+ ... (3 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L1945-L2484` → after: `L287-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L287-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L287-L292) · [Before (L1945-L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L1945-L2484)

```diff
-           "undefined" !== typeof OffscreenCanvas ? eV = new OffscreenCanvas(64, 64) : (0, rV.f)() && "function" === typeof document.createElement && (eV = document.createElement("canvas"), eV.width = 64, eV.height = 64);
-           const xV = eV?.getContext("2d");
-           if (!xV) return null;
-           xV.font = VV;
-           const JV = xV.measureText("Hg"),
-             YV = Number(JV.actualBoundingBoxAscent ?? JV.fontBoundingBoxAscent),
-             UV = Number(JV.actualBoundingBoxDescent ?? JV.fontBoundingBoxDescent),
-             yV = {
-               ascent: YV,
-               height: YV + UV,
-               descent: UV
-             };
-           return bV(yV) ? yV : null
-         } catch {
-           return null
-         } finally {
- ... (524 more removed lines; see GitHub link above)
+           const HH = BH.byteLength <= AH.c ? await AH.g.fetch(this.relay.url, zH, tH.size, LH) : await fetch(this.relay.url, zH);
+           if (!HH.ok) throw new Error(`HTTP ${HH.status}`);
+           if (CH = await HH.json(), "refused" !== CH.outcome && ("forwarded" !== CH.outcome || !Number.isInteger(CH.status))) throw new Error(`Unexpected relay answer ${JSON.stringify(CH)}`)
+         } catch (EH) {
+           if (!0 === (null === hH || void 0 === hH ? void 0 : hH.aborted)) throw EH;
+           return console.warn("Session replay couldn't relay an upload through the part joiner; uploading straight to storage.", EH), this.skipUntilMs = this.nowMs() + 12e4, null
```

#### 38. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L2487-L2490` → after: `L296-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L296-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L296-L303) · [Before (L2487-L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L2487-L2490)

```diff
-       releaseTextures() {
-         if (this._textures)
-           for (let VV = 0; VV < this._textures.length; ++VV) this._textures[VV].dispose();
-         this._textures = null
+       beacon(HH, BH, LH, AH) {
+         if (this.goesDirect(BH, LH)) return null;
+         const rH = SH({
+           token: this.token,
+           contentType: LH,
+           target: HH
+         }, BH);
+         return AH.sendUploadBeacon(this.relay.url, rH, rH.size)
```

#### 39. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L2492-L2493` → after: `L305-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L305-L306) · [Before (L2492-L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L2492-L2493)

```diff
-       dispose() {
-         arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
+       goesDirect(HH, BH) {
+         return this.refused || this.nowMs() < this.skipUntilMs || HH.byteLength > this.relay.maxBytes || "video/mp4" === BH
```

#### 40. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L2495-L6866` → after: `L308-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L308-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L308-L321) · [Before (L2495-L6866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L2495-L6866)

```diff
-     }
-   },
-   41681: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => JV
-     });
-     class JV {
-       static get ForceFullSceneLoadingForIncremental() {
-         return JV._ForceFullSceneLoadingForIncremental
-       }
-       static set ForceFullSceneLoadingForIncremental(VV) {
-         JV._ForceFullSceneLoadingForIncremental = VV
-       }
-       static get ShowLoadingScreen() {
-         return JV._ShowLoadingScreen
-       }
- ... (4356 more removed lines; see GitHub link above)
+     }
+ 
+     function tH(HH) {
+       return void 0 === (null === HH || void 0 === HH ? void 0 : HH.relay) ? null : new hH(HH.token, HH.relay)
+     }
+     class zH {
+       constructor() {
+         this.relays = new Map
+       }
+       for (HH) {
+         let BH = this.relays.get(HH.recordingId);
+         return void 0 === BH && (BH = tH(HH.partJoiner), this.relays.set(HH.recordingId, BH)), BH
+       }
+     }
```

#### 41. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L6868-L6874` → after: `L323-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L323-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L323-L332) · [Before (L6868-L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L6868-L6874)

```diff
-   41744: (VV, eV, xV) => {
-     var JV = xV(38269),
-       YV = xV(39870),
-       UV = xV(41566),
-       yV = xV(41664),
-       pV = xV(41394);
-     const QV = "bakedVertexAnimationSettingsInstanced";
+   40769: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => uH,
+       e: () => YH,
+       i: () => zH
+     });
+     var AH = LH(40738),
+       rH = LH(1148),
+       SH = LH(40748);
+     const hH = 1024;
```

#### 42. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L6877-L6878` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L335) · [Before (L6877-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L6877-L6878)

```diff
-       const eV = VV.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
-       return eV instanceof Float32Array || eV instanceof Uint16Array
+       return 6e4 + Math.ceil(HH / 16384 * 1e3)
```

#### 43. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L6881-L6887` → after: `L338-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L338-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L338-L346) · [Before (L6881-L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L6881-L6887)

```diff
-     function wV(VV, eV, xV, JV) {
-       xV.HVV(Number.POSITIVE_INFINITY), JV.HVV(Number.NEGATIVE_INFINITY);
-       for (let YV = 0; YV < 3 * eV; YV += 3) {
-         const eV = VV[YV],
-           UV = VV[YV + 1],
-           yV = VV[YV + 2];
-         eV < xV.x && (xV.x = eV), UV < xV.y && (xV.y = UV), yV < xV.z && (xV.z = yV), eV > JV.x && (JV.x = eV), UV > JV.y && (JV.y = UV), yV > JV.z && (JV.z = yV)
+     function zH(HH, BH, LH) {
+       const rH = new FormData;
+       let SH = BH.byteLength + hH;
+       for (const [hH, tH] of Object.entries(HH.fields)) rH.append(hH, tH), SH += (0, AH.h)(hH) + (0, AH.h)(tH);
+       return rH.append("file", new Blob([BH], {
+         type: LH
+       })), {
+         form: rH,
+         byteLength: SH
```

#### 44. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L6892` → after: `L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L351) · [Before (L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L6892)

```diff
-       xV && (VV.x -= VV.x * xV.x + xV.y, VV.y -= VV.y * xV.x + xV.y, VV.z -= VV.z * xV.x + xV.y, eV.x += eV.x * xV.x + xV.y, eV.y += eV.y * xV.x + xV.y, eV.z += eV.z * xV.x + xV.y)
+       return new SH.c(`Segment ${HH} failed with ${BH}${null===LH?"":` (${LH})`}`, BH, LH)
```

#### 45. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L6895-L6900` → after: `L354-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L354-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L354-L355) · [Before (L6895-L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L6895-L6900)

```diff
-     function vV(VV, eV, xV, YV, UV) {
-       const yV = JV.l.Ik[7],
-         pV = JV.l.Ik[8];
-       for (let QV = 0; QV < 2; ++QV)
-         for (let nV = 0; nV < 2; ++nV)
-           for (let wV = 0; wV < 2; ++wV) yV.set(QV ? eV.x : VV.x, nV ? eV.y : VV.y, wV ? eV.z : VV.z), JV.o.TransformCoordinatesToRef(yV, xV, pV), YV.minimizeInPlace(pV), UV.maximizeInPlace(pV)
+     function EH(HH) {
+       if (HH < 200 || HH > 299) throw CH("POST", HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
```

#### 46. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L6903-L6905` → after: `L358-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L358-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L358-L359) · [Before (L6903-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L6903-L6905)

```diff
-     function rV(VV, eV, xV, YV, UV) {
-       const yV = JV.l.Ik[7];
-       for (let pV = 0; pV < 3 * eV; pV += 3) JV.o.TransformCoordinatesFromFloatsToRef(VV[pV], VV[pV + 1], VV[pV + 2], xV, yV), YV.minimizeInPlace(yV), UV.maximizeInPlace(yV)
+     function XH(HH, BH) {
+       if ((HH < 200 || HH > 299) && (!BH || 412 !== HH)) throw CH("PUT", HH, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
```

#### 47. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L6907-L6965` → after: `L361-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L361-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L361-L368) · [Before (L6907-L6965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L6907-L6965)

```diff
-     let kV = !1;
-     kV || (kV = !0, yV.b.prototype.thinInstanceAdd = function(VV) {
-       let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-       if (!this.dD().sk().getCaps().instancedArrays) return YV.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
-       this._thinInstanceUpdateBufferSize("matrix", Array.isArray(VV) ? VV.length : 1);
-       const xV = this._thinInstanceDataStorage.instancesCount;
-       if (Array.isArray(VV))
-         for (let JV = 0; JV < VV.length; ++JV) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, VV[JV], JV === VV.length - 1 && eV);
-       else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, VV, eV);
-       return xV
-     }, yV.b.prototype.thinInstanceAddSelf = function() {
-       let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-       return this.thinInstanceAdd(JV.d.IdentityReadOnly, VV)
-     }, yV.b.prototype.thinInstanceRegisterAttribute = function(VV, eV) {
-       VV === pV.j.ColorKind && (VV = pV.j.ColorInstanceKind), this.removeVerticesData(VV), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[VV] = eV, this._userThinInstanceBuffersStorage.sizes[VV] = eV * Math.max(32, this._thinInstanceDataSt … [truncated]
-     }, yV.b.prototype.thinInstanceSetMatrixAt = function(VV, eV) {
- ... (43 more removed lines; see GitHub link above)
+     async function GH(HH) {
+       var BH, LH;
+       if (HH.ok) return null;
+       let AH;
+       try {
+         AH = await HH.text()
+       } catch (rH) {
+         return console.warn("Session replay couldn't read storage's error answer", rH), null
```

#### 48. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L6967-L6972` → after: `L370-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L370-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L370-L376) · [Before (L6967-L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L6967-L6972)

```diff
-     }, yV.b.prototype.thinInstanceGetWorldMatrices = function() {
-       if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
-       const VV = this._thinInstanceDataStorage.matrixData;
-       if (!this._thinInstanceDataStorage.worldMatrices) {
-         this._thinInstanceDataStorage.worldMatrices = [];
-         for (let eV = 0; eV < this._thinInstanceDataStorage.instancesCount; ++eV) this._thinInstanceDataStorage.worldMatrices[eV] = JV.d.FromArray(VV, 16 * eV)
+       return null !== (BH = null === (LH = /<Code>([^<]+)<\/Code>/.exec(AH)) || void 0 === LH ? void 0 : LH[1]) && void 0 !== BH ? BH : null
+     }
+     class YH {
+       constructor(HH) {
+         var BH;
+         let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         this.segmentUploadUrl = HH, this.deadline = void 0, this.relay = void 0, this.deadline = LH.deadline, this.relay = null !== (BH = LH.relay) && void 0 !== BH ? BH : null
```

#### 49. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L6974-L7027` → after: `L378-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L378-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L378-L379) · [Before (L6974-L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L6974-L7027)

```diff
-       return this._thinInstanceDataStorage.worldMatrices
-     }, yV.b.prototype.thinInstanceRefreshBoundingInfo = function() {
-       let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-         eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-         xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         YV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
-       const yV = this._thinInstanceDataStorage.boundingVectors;
-       if (VV || !this.rawBoundingInfo) {
-         if (yV.length = 0, YV && function(VV, eV, xV) {
-             const YV = VV._userThinInstanceBuffersStorage,
-               yV = YV?.data[QV],
-               kV = YV?.strides[QV];
-             if (!yV || !kV || kV < 4 || !nV(VV)) return !1;
-             const bV = VV._thinInstanceDataStorage.matrixData;
-             if (!bV) return !1;
- ... (38 more removed lines; see GitHub link above)
+       requestPutUrl(HH) {
+         return this.presign(HH)
```

#### 50. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L7029-L7036` → after: `L381-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L381-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L381-L382) · [Before (L7029-L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L7029-L7036)

```diff
-       const kV = this.qL(),
-         bV = this._thinInstanceDataStorage.matrixData;
-       if (0 === yV.length)
-         for (let JV = 0; JV < kV.boundingBox.vectors.length; ++JV) yV.push(kV.boundingBox.vectors[JV].clone());
-       JV.l.Ik[0].HVV(Number.POSITIVE_INFINITY), JV.l.Ik[1].HVV(Number.NEGATIVE_INFINITY);
-       for (let UV = 0; UV < this._thinInstanceDataStorage.instancesCount; ++UV) {
-         JV.d.FromArrayToRef(bV, 16 * UV, JV.l.Matrix[0]);
-         for (let VV = 0; VV < yV.length; ++VV) JV.o.TransformCoordinatesToRef(yV[VV], JV.l.Matrix[0], JV.l.Ik[2]), JV.l.Ik[0].minimizeInPlace(JV.l.Ik[2]), JV.l.Ik[1].maximizeInPlace(JV.l.Ik[2])
+       requestPostTargets(HH) {
+         return this.presign(HH)
```

#### 51. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L7038-L7058` → after: `L384-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L384-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L384-L432) · [Before (L7038-L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L7038-L7058)

```diff
-       kV.reConstruct(JV.l.Ik[0], JV.l.Ik[1]), this._updateBoundingInfo()
-     }, yV.b.prototype._thinInstanceRecreateBuffer = function(VV) {
-       let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-       "matrix" === VV ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, eV)) : "previousMatrix" === VV ? this._scene.needsPreviousWorldMatr … [truncated]
-     }, yV.b.prototype._thinInstanceUpdateBufferSize = function(VV) {
-       let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-       VV === pV.j.ColorKind && (VV = pV.j.ColorInstanceKind);
-       const xV = "matrix" === VV;
-       if (!xV && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[VV])) return;
-       const JV = xV ? 16 : this._userThinInstanceBuffersStorage.strides[VV],
-         YV = xV ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[VV];
-       let UV = xV ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[VV];
-       const yV = (this._thinInstanceDataStorage.instancesCount + eV) * JV;
-       let QV = YV;
-       for (; QV < yV;) QV *= 2;
-       if (!UV || YV != QV) {
- ... (5 more removed lines; see GitHub link above)
+       async presign(HH) {
+         const BH = await fetch(this.segmentUploadUrl, {
+           method: "POST",
+           headers: {
+             "Content-Type": "application/json"
+           },
+           body: JSON.stringify(HH),
+           signal: this.signal(6e4)
+         });
+         if (!BH.ok) throw new SH.c(`Segment presign failed with ${BH.status}`, BH.status);
+         return await BH.json()
+       }
+       async put(HH, BH, LH, rH) {
+         const SH = await this.sendThroughRelay({
+           method: "PUT",
+           url: HH,
+ ... (33 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L7060-L7069` → after: `L434-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L434-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L434-L466) · [Before (L7060-L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L7060-L7069)

```diff
-     }, yV.b.prototype._thinInstanceInitializeUserStorage = function() {
-       this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
-         data: {},
-         sizes: {},
-         vertexBuffers: {},
-         strides: {}
-       })
-     }, yV.b.prototype._disposeThinInstanceSpecificData = function() {
-       this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), th … [truncated]
-     })
+       async sendThroughRelay(HH, BH, LH) {
+         return null === this.relay ? null : await this.relay.send(HH, BH, LH, this.signal(tH(BH.byteLength)), this.deadline)
+       }
+       signal(HH) {
+         const BH = (0, rH.u)(HH);
+         return void 0 === this.deadline ? BH : (0, rH.o)([this.deadline, BH])
+       }
+     }
+     class uH {
+       async requestPutUrl(HH) {
+         return {
+           uploadUrl: "",
+           ifNoneMatch: !1
+         }
+       }
+       async requestPostTargets(HH) {
+ ... (17 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L7071` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L468) · [Before (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L7071)

```diff
-   41695: (VV, eV, xV) => {
+   40725: (HH, BH, LH) => {
```

#### 54. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L7073-L7074` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L470) · [Before (L7073-L7074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L7073-L7074)

```diff
-       b: () => jV,
-       f: () => bV
+       c: () => hH
```

#### 55. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L7076-L7525` → after: `L472-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L472-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L472-L546) · [Before (L7076-L7525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L7076-L7525)

```diff
-     var JV, YV, UV, yV, pV = xV(41257),
-       QV = xV(41263),
-       nV = xV(41279),
-       wV = xV(38296),
-       ZV = xV(38269),
-       vV = xV(41486),
-       rV = xV(38318),
-       kV = xV(41138);
-     let bV = (() => {
-       var VV;
-       let eV, xV, JV, YV, UV, yV, rV, kV, bV, EV = vV.e,
-         BV = [],
-         jV = [],
-         qV = [],
-         tV = [],
-         FV = [],
- ... (434 more removed lines; see GitHub link above)
+     var AH = LH(37014),
+       rH = LH.n(AH);
+ 
+     function SH() {
+       return rH()('(()=>{var HH={9:(HH,BH,LH)=>{function AH(){return"object"===typeof process&&"object"===typeof process.versions&&"undefined"!==typeof process.versions.node}function rH(HH){return HH instanceof Uint8Array&&(!AH()||!Buffer.isBuffer(HH))}function SH(HH){return HH i … [truncated]
+     }
+     class hH {
+       constructor() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
+         this.quietMs = HH, this.worker = null, this.failure = null, this.nextId = 0, this.waiting = new Map, this.watchdog = null, this.rearmed = !1
+       }
+       pack(HH) {
+         return new Promise(((BH, LH) => {
+           var AH;
+           const rH = null !== (AH = this.worker) && void 0 !== AH ? AH : this.start();
+           if (null === rH) return void LH(this.failure);
+ ... (59 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L7527-L7672` → after: `L548-L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L548-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L548-L557) · [Before (L7527-L7672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L7527-L7672)

```diff
-           super.dispose(VV, eV)
-         }
-         normalizeToUnitCube() {
-           let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-             eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-             xV = arguments.length > 2 ? arguments[2] : void 0,
-             JV = null,
-             YV = null;
-           eV && (this.rotationQuaternion ? (YV = this.rotationQuaternion.clone(), this.rotationQuaternion.FeV(0, 0, 0, 1)) : this.rotation && (JV = this.rotation.clone(), this.rotation.FeV(0, 0, 0)));
-           const UV = this.getHierarchyBoundingVectors(VV, xV),
-             yV = UV.max.subtract(UV.min),
-             pV = Math.max(yV.x, yV.y, yV.z);
-           if (0 === pV) return this;
-           const QV = 1 / pV;
-           return this.WZ.scaleInPlace(QV), eV && (this.rotationQuaternion && YV ? this.rotationQuaternion.iG(YV) : this.rotation && JV && this.rotation.iG(JV)), this
-         }
- ... (130 more removed lines; see GitHub link above)
+           of this.waiting.values()) LH(HH);
+         this.waiting.clear()
+       }
+     }
+   },
+   40704: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => rH
+     });
+     var AH = LH(40708);
```

#### 57. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L7674-L7682` → after: `L559-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L559-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L559-L563) · [Before (L7674-L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L7674-L7682)

```diff
-     function EV(VV, eV, xV) {
-       const JV = nV.b.Parse((() => new bV(VV.name, eV)), VV, eV, xV);
-       if (VV.localMatrix ? JV.setPreTransformMatrix(ZV.d.FromArray(VV.localMatrix)) : VV.pivotMatrix && JV.setPivotMatrix(ZV.d.FromArray(VV.pivotMatrix)), JV.pW(VV.isEnabled), JV._waitingParsedUniqueId = VV.uniqueId, void 0 !== VV.parentId && (JV._waitingParentId = VV.parentId),  … [truncated]
-         for (let eV = 0; eV < VV.animations.length; eV++) {
-           const xV = VV.animations[eV],
-             YV = (0, rV.c)("BABYLON.Animation");
-           YV && JV.animations.push(YV.Parse(xV))
-         }
-         vV.e.ParseAnimationRanges(JV, VV, eV)
+     function rH(HH) {
+       const BH = (new TextEncoder).encode(HH);
+       return {
+         bytes: (0, AH.c)(BH),
+         inflatedBytes: BH.byteLength
```

#### 58. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L7686` → after: `L566-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L566-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L566-L572) · [Before (L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L7686)

```diff
-     let BV = !1;
+   },
+   40751: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => SH
+     });
+     const AH = 20;
+     let rH = Date.now() - performance.now();
```

#### 59. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L7689-L7701` → after: `L575-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L575-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L575-L577) · [Before (L7689-L7701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L7689-L7701)

```diff
-       BV || (BV = !0, bV.Parse = EV)
-     }(JV = bV.prototype).uH ?? (JV.uH = (0, kV.j)("TransformNode", "uH")), (YV = bV.prototype).applyImpulse ?? (YV.applyImpulse = (0, kV.j)("TransformNode", "applyImpulse")), (UV = bV.prototype).applyAngularImpulse ?? (UV.applyAngularImpulse = (0, kV.j)("TransformNode", "applyAng … [truncated]
-   },
-   41671: (VV, eV, xV) => {
-     function JV(VV, eV, xV) {
-       try {
-         const JV = VV.next();
-         JV.done ? eV(JV) : JV.value ? JV.value.then((() => {
-           JV.value = void 0, eV(JV)
-         }), xV) : eV(JV)
-       } catch (JV) {
-         xV(JV)
-       }
+       const HH = performance.now(),
+         BH = Date.now();
+       return Math.abs(BH - (HH + rH)) > AH && (rH = BH - HH), HH + rH
```

#### 60. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L7705-L7710` → after: `L588-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L588-L590) · [Before (L7705-L7710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L7705-L7710)

```diff
-       let VV, eV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
-       return (xV, YV, UV) => {
-         const yV = performance.now();
-         void 0 === VV || yV - VV > eV ? (VV = yV, setTimeout((() => {
-           JV(xV, YV, UV)
-         }), 0)) : JV(xV, YV, UV)
+       return {
+         segmentUploadUrl: `${rH.clientSideServerUrls.indexUrl}${AH.k}`,
+         manifestUrl: `${rH.clientSideServerUrls.indexUrl}${AH.e}`
```

#### 61. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L7714-L7718` → after: `L602-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L602-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L602-L613) · [Before (L7714-L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L7714-L7718)

```diff
-     function UV(VV, eV, xV, JV, YV) {
-       const UV = () => {
-         let yV;
-         const pV = VV => {
-           VV.done ? xV(VV.value) : void 0 === yV ? yV = !0 : UV()
+     function rH(HH) {
+       return (new TextEncoder).encode(HH).byteLength
+     }
+     const SH = new class {
+       constructor() {
+         this.inFlightBytes = 0, this.inFlightLabels = new Map
+       }
+       async fetch(HH, BH, LH, AH) {
+         if (this.inFlightBytes + LH > 49152) return await fetch(HH, BH);
+         this.inFlightBytes += LH, this.countLabel(AH, 1);
+         const rH = () => {
+           this.inFlightBytes -= LH, this.countLabel(AH, -1)
```

#### 62. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L7720-L7724` → after: `L615-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L615-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L615-L677) · [Before (L7720-L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L7720-L7724)

```diff
-         do {
-           yV = void 0, YV && YV.aborted ? JV(new Error("Aborted")) : eV(VV, pV, JV), void 0 === yV && (yV = !1)
-         } while (yV)
-       };
-       UV()
+         let SH;
+         try {
+           SH = await fetch(HH, {
+             ...BH,
+             keepalive: !0
+           })
+         } catch (tH) {
+           var hH;
+           if (rH(), null !== (hH = BH.signal) && void 0 !== hH && hH.aborted) throw tH;
+           return console.info("Session replay keepalive request failed; retrying without keepalive.", tH), await fetch(HH, BH)
+         }
+         return rH(), SH
+       }
+       isInFlight(HH) {
+         var BH;
+         return (null !== (BH = this.inFlightLabels.get(HH)) && void 0 !== BH ? BH : 0) > 0
+ ... (47 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L7728-L7731` → after: `L691-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L691-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L691-L723) · [Before (L7728-L7731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L7728-L7731)

```diff
-       let xV;
-       return UV(VV, JV, (VV => xV = VV), (VV => {
-         throw VV
-       }), eV), xV
+       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rH;
+       const {
+         domSegments: tH,
+         ...zH
+       } = HH.manifest, CH = () => ({
+         ...HH,
+         manifest: {
+           ...zH,
+           videoSegments: [],
+           telemetrySegments: [],
+           games: []
+         },
+         creatorGrants: []
+       }), EH = (0, AH.h)(JSON.stringify(CH())), XH = [];
+       let GH = {
+           request: CH(),
+ ... (17 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L7733-L7735` → after: `L725-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L725-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L725-L750) · [Before (L7733-L7735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L7733-L7735)

```diff
-     async function pV(VV, eV, xV) {
-       return await new Promise(((JV, YV) => {
-         UV(VV, eV, JV, YV, xV)
+ 
+     function zH(HH) {
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rH;
+       return tH(HH, function(HH) {
+         var BH;
+         return [...HH.creatorGrants.map((HH => ({
+           list: "creatorGrants",
+           value: HH
+         }))), ...HH.manifest.games.map((HH => ({
+           list: "games",
+           value: HH
+         }))), ...HH.manifest.videoSegments.map((HH => ({
+           list: "videoSegments",
+           value: HH
+         }))), ...HH.manifest.telemetrySegments.map((HH => ({
+           list: "telemetrySegments",
+ ... (10 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L7738-L7741` → after: `L753-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L753-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L753-L761) · [Before (L7738-L7741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L7738-L7741)

```diff
- 
-     function QV(VV, eV) {
-       return function() {
-         return yV(VV(...arguments), eV)
+   },
+   40748: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => AH
+     });
+     class AH extends Error {
+       constructor(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         super(HH), this.status = BH, this.storageCode = LH
```

#### 66. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L7746-L7749` → after: `L768-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L768-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/276.js#L768-L783) · [Before (L7746-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/276.js#L7746-L7749)

```diff
-       c: () => QV,
-       d: () => pV,
-       g: () => yV
-     })
+       e: () => rH,
+       i: () => SH,
+       k: () => AH,
+       m: () => hH
+     });
+     const AH = "/index/replay/segment-upload-url",
+       rH = "/index/replay/manifest";
+     const SH = 65536;
+ 
+     function hH(HH) {
+       return {
+         count: Math.ceil(HH.segmentDurationMs / HH.partDurationMs) + 1,
+         maxBytes: Math.ceil(1.5 * HH.bitrate / 8 * (HH.partDurationMs / 1e3)) + 32768
+       }
+     }
+     const tH = 432e5
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/277.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/277.js` (481 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410)

#### 1. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L4)

```diff
-   41394: (VV, eV, xV) => {
+   40809: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6-L9` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L6-L7) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L6-L9)

```diff
-       d: () => pV,
-       e: () => bV,
-       f: () => nV,
-       j: () => QV
+       b: () => WC,
+       c: () => FY
```

#### 3. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L11-L71` → after: `L9-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L9-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L9-L134) · [Before (L11-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L11-L71)

```diff
-     var JV = xV(41184),
-       YV = xV(39870),
-       UV = xV(41318),
-       yV = xV(41227);
-     class pV {
-       get iN() {
-         return this._isDisposed
-       }
-       constructor(VV, eV, xV) {
-         let YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-           UV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           pV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           QV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           nV = arguments.length > 7 ? arguments[7] : void 0,
-           wV = arguments.length > 8 ? arguments[8] : void 0;
-         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, yV.c)(), VV && VV.dD ? this._engine = VV.dD().sk() : this._engine = VV, this._updatable = xV, this._instanced = pV, this._divisor = nV || 1, this._label = wV, eV instanceof JV.b ? (this._data = null, this._buffer = eV) … [truncated]
- ... (45 more removed lines; see GitHub link above)
+     const AH = "0.9.4",
+       rH = {
+         DEBUG: !1,
+         LIB_VERSION: "1.438.7",
+         LIB_NAME: "web",
+         JS_SDK_VERSION: AH
+       };
+     var SH = rH;
+     const hH = "$early_access_features",
+       tH = "$active_feature_flags",
+       zH = "$feature_flag_details",
+       CH = "$feature_flag_errors",
+       EH = "$feature_flag_evaluated_at",
+       XH = "$feature_flag_request_id",
+       GH = "$minimal_flag_called_events",
+       YH = "$enabled_feature_flags",
+ ... (110 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L73-L119` → after: `L136-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L136-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L136-L159) · [Before (L73-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L73-L119)

```diff
-     class QV {
-       get iN() {
-         return this._isDisposed
-       }
-       get instanceDivisor() {
-         return this._instanceDivisor
-       }
-       set instanceDivisor(VV) {
-         const eV = 0 != VV;
-         this._instanceDivisor = VV, eV !== this._instanced && (this._instanced = eV, this._computeHashCode())
-       }
-       get _maxVerticesCount() {
-         const VV = this.getData();
-         return VV ? Array.isArray(VV) ? VV.length / (this.byteStride / 4) - this.byteOffset / 4 : (VV.byteLength - this.byteOffset) / this.byteStride : 0
-       }
-       constructor(VV, eV, xV, JV, YV, yV, ZV, vV, rV, kV) {
- ... (31 more removed lines; see GitHub link above)
+     const YL = function(HH) {
+         return HH.trim()
+       },
+       uL = function(HH) {
+         return HH.replace(/^\$/, "")
+       };
+ 
+     function QL(HH) {
+       var BH;
+       const LH = [];
+       return null !== (BH = JSON.stringify(HH, (function(HH, BH) {
+         if ("bigint" == typeof BH) return BH.toString();
+         if ("function" != typeof BH && "symbol" != typeof BH) {
+           if (BH instanceof Error) return {
+             name: BH.name,
+             message: BH.message,
+ ... (8 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L122-L139` → after: `L209-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L209-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L209-L219) · [Before (L122-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L122-L139)

```diff
-       _computeHashCode() {
-         this.hashCode = (QV._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
-       }
-       _rebuild() {
-         this._buffer?._rebuild()
-       }
-       getKind() {
-         return this._kind
-       }
-       isUpdatable() {
-         return this._buffer.isUpdatable()
-       }
-       getData() {
-         return this._buffer.getData()
-       }
-       getFloatData(VV, eV) {
- ... (2 more removed lines; see GitHub link above)
+     }
+ 
+     function gL(HH) {
+       return "u" > typeof Event && NL(HH, Event)
+     }
+ 
+     function NL(HH, BH) {
+       try {
+         return HH instanceof BH
+       } catch (HH) {
+         return !1
```

#### 6. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L141-L142` → after: `L221-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L221-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L221-L231) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L141-L142)

```diff
-       getBuffer() {
-         return this._buffer.getBuffer()
+     }
+     const RL = [!0, "true", 1, "1", "yes"],
+       jL = HH => GL(RL, HH),
+       nL = [!1, "false", 0, "0", "no"];
+ 
+     function FL(HH, BH, LH, AH, rH, SH, hH) {
+       try {
+         var tH = HH[SH](hH),
+           zH = tH.value
+       } catch (HH) {
+         return void LH(HH)
```

#### 7. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L144-L145` → after: `L233-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L233-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L233-L251) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L144-L145)

```diff
-       getWrapperBuffer() {
-         return this._buffer
+       tH.done ? BH(zH) : Promise.resolve(zH).then(AH, rH)
+     }
+ 
+     function DL(HH) {
+       return function() {
+         var BH = this,
+           LH = arguments;
+         return new Promise((function(AH, rH) {
+           var SH = HH.apply(BH, LH);
+ 
+           function hH(HH) {
+             FL(SH, AH, rH, hH, tH, "next", HH)
+           }
+ 
+           function tH(HH) {
+             FL(SH, AH, rH, hH, tH, "throw", HH)
+ ... (3 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L147-L148` → after: `L253-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L253-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L253-L279) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L147-L148)

```diff
-       getStrideSize() {
-         return this.byteStride / (0, UV.m)(this.type)
+     }
+     const wL = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatal … [truncated]
+       ZL = new Map,
+       dL = function(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
+         if (!HH) return !1;
+         const LH = function(HH, BH) {
+             let LH = "";
+             for (let AH = 0; BH.length > AH; AH++) {
+               const HH = BH[AH];
+               LH += HH.length + ":" + HH
+             }
+             return HH.length + ":" + HH + "|" + BH.length + ":" + LH
+           }(HH, BH),
+           AH = ZL.get(LH);
+         if (void 0 !== AH) return AH;
+ ... (11 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L150-L151` → after: `L281-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L281-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L281-L283) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L150-L151)

```diff
-       iJV() {
-         return this.byteOffset / (0, UV.m)(this.type)
+       _applyRefill(HH, BH) {
+         const LH = Math.floor((BH - HH.lastAccess) / this._refillInterval);
+         LH > 0 && (HH.tokens = Math.min(HH.tokens + LH * this._refillRate, this._bucketSize), HH.lastAccess = HH.lastAccess + LH * this._refillInterval)
```

#### 10. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L153-L154` → after: `L285-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L285-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L285-L293) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L153-L154)

```diff
-       getSize() {
-         return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, UV.m)(this.type) : this._size
+       consumeRateLimit(HH) {
+         var BH;
+         const LH = Date.now(),
+           AH = String(HH);
+         let rH = this._buckets[AH];
+         return rH ? this._applyRefill(rH, LH) : (rH = {
+           tokens: this._bucketSize,
+           lastAccess: LH
+         }, this._buckets[AH] = rH), 0 === rH.tokens || (rH.tokens--, 0 === rH.tokens && (null === (BH = this._onBucketRateLimited) || void 0 === BH || BH.call(this, HH)), 0 === rH.tokens)
```

#### 11. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L156-L157` → after: `L295-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L295-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L295-L296) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L156-L157)

```diff
-       getIsInstanced() {
-         return this._instanced
+       stop() {
+         this._buckets = {}
```

#### 12. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L159-L160` → after: `L298-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L298-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L298-L484) · [Before (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L159-L160)

```diff
-       getInstanceDivisor() {
-         return this._instanceDivisor
+     };
+     const JL = "Mobile",
+       iL = "Android",
+       pL = "Tablet",
+       yL = "Android Tablet",
+       HA = "iPad",
+       BA = "Apple Watch",
+       LA = "Safari",
+       AA = "BlackBerry",
+       rA = "Samsung Internet",
+       SA = "Chrome",
+       hA = "Chrome iOS",
+       tA = "Internet Explorer",
+       zA = "Internet Explorer Mobile",
+       CA = "Opera",
+       EA = "Microsoft Edge",
+ ... (171 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L162-L163` → after: `L486-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L486-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L486-L495) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L162-L163)

```diff
-       create(VV) {
-         this._buffer.create(VV), this._alignBuffer()
+       return BH
+     }
+ 
+     function rr(HH, BH) {
+       if (!BH) return HH;
+       let LH = [];
+       try {
+         LH = Object.keys(BH)
+       } catch (HH) {
+         LH = []
```

#### 14. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L165-L166` → after: `L497-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L497-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L497-L509) · [Before (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L165-L166)

```diff
-       update(VV) {
-         this._buffer.update(VV), this._alignBuffer()
+       for (const AH of LH) {
+         let LH;
+         try {
+           LH = BH[AH]
+         } catch (HH) {
+           LH = Lr
+         }
+         Object.defineProperty(HH, AH, {
+           value: LH,
+           enumerable: !0,
+           writable: !0,
+           configurable: !0
+         })
```

#### 15. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L168-L170` → after: `L511-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L511-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L511-L533) · [Before (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L168-L170)

```diff
-       updateDirectly(VV, eV) {
-         let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         this._buffer.updateDirectly(VV, eV, void 0, xV), this._alignBuffer()
+       return HH
+     }
+     Date, Date;
+     const Sr = 3e5;
+     var hr = class {
+       record(HH) {
+         if ("too-large" === HH.kind) return;
+         if ("retry-later" !== HH.kind) return void this.reset();
+         if (!HH.retryAfterMs) return;
+         const BH = this.isOpen(),
+           LH = Date.now(),
+           AH = Math.min(HH.retryAfterMs, Sr);
+         if (!BH) return this._installedAt = LH, void(this._until = LH + AH);
+         this._until = Math.max(this._until, Math.min(LH + AH, this._installedAt + Sr))
+       }
+       remainingMs() {
+ ... (7 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L172-L173` → after: `L535-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L535-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L535-L536) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L172-L173)

```diff
-       dispose() {
-         this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
+       reset() {
+         this._until = 0, this._installedAt = 0
```

#### 17. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L175-L178` → after: `L538-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L538-L539) · [Before (L175-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L175-L178)

```diff
-       forEach(VV, eV) {
-         (0, UV.h)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, VV, this.normalized, ((VV, xV) => {
-           for (let JV = 0; JV < this._size; JV++) eV(VV[JV], xV + JV)
-         }))
+       constructor() {
+         this._until = 0, this._installedAt = 0
```

#### 18. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L180` → after: `L541-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L541-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L541-L546) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L180)

```diff
-       _alignBuffer() {}
+     };
+     const tr = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
+ 
+     function zr(HH, BH) {
+       return "string" == typeof(LH = HH) && tr.test(LH) ? HH : BH();
+       var LH
```

#### 19. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L183-L205` → after: `L549-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L549-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L549-L559) · [Before (L183-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L183-L205)

```diff
-     function nV(VV) {
-       switch (VV) {
-         case QV.UVKind:
-         case QV.UV2Kind:
-         case QV.UV3Kind:
-         case QV.UV4Kind:
-         case QV.UV5Kind:
-         case QV.UV6Kind:
-           return 2;
-         case QV.NormalKind:
-         case QV.PositionKind:
-           return 3;
-         case QV.ColorKind:
-         case QV.ColorInstanceKind:
-         case QV.MatricesIndicesKind:
-         case QV.MatricesIndicesExtraKind:
- ... (7 more removed lines; see GitHub link above)
+     function Cr(HH, BH) {
+       const LH = new Error(BH);
+       try {
+         Object.defineProperty(LH, "name", {
+           value: HH,
+           writable: !0,
+           enumerable: !0,
+           configurable: !0
+         })
+       } catch (HH) {}
+       return LH
```

#### 20. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L209` → after: `L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L563) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L209)

```diff
-       return VV instanceof Int8Array ? QV.BYTE : VV instanceof Uint8Array ? QV.UNSIGNED_BYTE : VV instanceof Int16Array ? QV.SHORT : VV instanceof Uint16Array ? QV.UNSIGNED_SHORT : VV instanceof Int32Array ? QV.INT : VV instanceof Uint32Array ? QV.UNSIGNED_INT : QV.FLOAT
+       return HH ? HH.split("#")[0] : HH
```

#### 21. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L213` → after: `L567-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L567-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L567-L571) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L213)

```diff
-       return (0, UV.m)(VV)
+       try {
+         return HH()
+       } catch (HH) {
+         return
+       }
```

#### 22. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L216-L219` → after: `L574-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L574-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L574-L576) · [Before (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L216-L219)

```diff
-     function vV(VV, eV, xV, JV, YV, yV, pV, QV) {
-       (0, UV.h)(VV, eV, xV, JV, YV, yV, pV, ((VV, eV) => {
-         for (let xV = 0; xV < JV; xV++) QV(VV[xV], eV + xV)
-       }))
+     function Gr(HH, BH) {
+       const LH = setTimeout(HH, BH);
+       return null != LH && LH.unref && (null == LH || LH.unref()), LH
```

#### 23. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L222-L223` → after: `L579-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L579-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L579-L580) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L222-L223)

```diff
-     function rV(VV, eV, xV, JV, YV, yV, pV, QV) {
-       return (0, UV.l)(VV, eV, xV, JV, YV, yV, pV, QV)
+     function Yr(HH, BH, LH) {
+       return ur.apply(this, arguments)
```

#### 24. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L229` → after: `L584-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L584-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L584-L599) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L229)

```diff
-       kV || (kV = !0, QV.DeduceStride = nV, QV.GetDataType = wV, QV.GetTypeByteLength = ZV, QV.ForEach = vV, QV.GetFloatData = rV)
+       return (ur = DL((function*(HH, BH, LH) {
+         let AH;
+         try {
+           return yield Promise.race([HH, new Promise(((HH, rH) => {
+             AH = Gr((() => {
+               try {
+                 null == LH || LH(), HH()
+               } catch (HH) {
+                 rH(HH)
+               }
+             }), BH)
+           }))])
+         } finally {
+           clearTimeout(AH)
+         }
+       }))).apply(this, arguments)
```

#### 25. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L231-L241` → after: `L601-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L601-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L601-L637) · [Before (L231-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L231-L241)

```diff
-   },
-   41184: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => JV
-     });
-     class JV {
-       get underlyingResource() {
-         return null
-       }
-       constructor() {
-         this.references = 0, this.Jv = 0, this.is32Bits = !1, this.uniqueId = JV._Counter++
+ 
+     function Qr(HH) {
+       return Qr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
+         return typeof HH
+       } : function(HH) {
+         return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
+       }, Qr(HH)
+     }
+ 
+     function Wr(HH, BH, LH) {
+       return (BH = function(HH) {
+         var BH = function(HH) {
+           if ("object" != Qr(HH) || !HH) return HH;
+           var BH = HH[Symbol.toPrimitive];
+           if (void 0 !== BH) {
+             var LH = BH.call(HH, "string");
+ ... (21 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L244-L254` → after: `L641-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L641-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L641-L649) · [Before (L244-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L244-L254)

```diff
-     JV._Counter = 0
-   },
-   41390: (VV, eV, xV) => {
-     xV.d(eV, {
-       c: () => UV
-     });
-     var JV = xV(38269),
-       YV = xV(41394);
-     class UV {
-       constructor() {
-         this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this … [truncated]
+ 
+     function xr(HH) {
+       for (var BH = 1; arguments.length > BH; BH++) {
+         var LH = null != arguments[BH] ? arguments[BH] : {};
+         BH % 2 ? Mr(Object(LH), !0).forEach((function(BH) {
+           Wr(HH, BH, LH[BH])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : Mr(Object(LH)).forEach((function(BH) {
+           Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
+         }))
```

#### 27. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L256-L286` → after: `L651-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L651-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L651-L679) · [Before (L256-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L256-L286)

```diff
-       getNormal() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!this.pickedMesh || eV && !this.pickedMesh.isVerticesDataPresent(YV.j.NormalKind)) return null;
-         let xV, UV = this.pickedMesh.RYV();
-         0 === UV?.length && (UV = null);
-         const yV = JV.l.Ik[0],
-           pV = JV.l.Ik[1],
-           QV = JV.l.Ik[2];
-         if (eV) {
-           const VV = this.pickedMesh.getVerticesData(YV.j.NormalKind);
-           let eV = UV ? JV.o.FromArrayToRef(VV, 3 * UV[3 * this.faceId], yV) : yV.FeV(VV[3 * this.faceId * 3], VV[3 * this.faceId * 3 + 1], VV[3 * this.faceId * 3 + 2]),
-             nV = UV ? JV.o.FromArrayToRef(VV, 3 * UV[3 * this.faceId + 1], pV) : pV.FeV(VV[3 * (3 * this.faceId + 1)], VV[3 * (3 * this.faceId + 1) + 1], VV[3 * (3 * this.faceId + 1) + 2]),
-             wV = UV ? JV.o.FromArrayToRef(VV, 3 * UV[3 * this.faceId + 2], QV) : QV.FeV(VV[3 * (3 * this.faceId + 2)], VV[3 * (3 * this.faceId + 2) + 1], VV[3 * (3 * this.faceId + 2) + 2]);
-           eV = eV.scale(this.bu), nV = nV.scale(this.bv), wV = wV.scale(1 - this.bu - this.bv), xV = new JV.o(eV.x + nV.x + wV.x, eV.y + nV.y + wV.y, eV.z + nV.z + wV.z)
-         } else {
- ... (15 more removed lines; see GitHub link above)
+       return HH
+     }
+     let vr, Pr, Tr, Ur;
+ 
+     function Vr(HH) {
+       var BH;
+       const LH = globalThis._posthogChunkIds,
+         AH = globalThis._debugIds;
+       if (!LH && !AH) return;
+       const rH = LH ? Object.keys(LH) : [],
+         SH = AH ? Object.keys(AH) : [];
+       if (Ur && Or(LH, rH, Pr) && Or(AH, SH, Tr)) return Ur;
+       Pr = LH ? xr({}, LH) : void 0, Tr = AH ? xr({}, AH) : void 0, Ur = {}, null !== (BH = vr) && void 0 !== BH || (vr = {});
+       const hH = (BH, LH) => {
+         for (const rH of BH) {
+           const BH = LH[rH];
+ ... (13 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L289-L317` → after: `L682-L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L682-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L682-L685) · [Before (L289-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L289-L317)

```diff
-           let xV = VV.getWorldMatrix();
-           VV.nonUniformScaling && (JV.l.Matrix[0].iG(xV), xV = JV.l.Matrix[0], xV.setTranslationFromFloats(0, 0, 0), xV.invert(), xV.transposeToRef(JV.l.Matrix[1]), xV = JV.l.Matrix[1]), JV.o.TransformNormalToRef(eV, xV, eV)
-         };
-         if (VV && nV(this.pickedMesh, xV), this.ray) {
-           const eV = JV.l.Ik[0].iG(xV);
-           VV || nV(this.pickedMesh, eV), JV.o.Dot(eV, this.ray.direction) > 0 && xV.negateInPlace()
-         }
-         return xV.normalize(), xV
-       }
-       getTextureCoordinates() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YV.j.UVKind;
-         if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(VV)) return null;
-         const eV = this.pickedMesh.RYV();
-         if (!eV) return null;
-         const xV = this.pickedMesh.getVerticesData(VV);
-         if (!xV) return null;
- ... (13 more removed lines; see GitHub link above)
+         }
+       };
+       return AH && hH(SH, AH), LH && hH(rH, LH), Ur
+     }
```

#### 29. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L319-L327` → after: `L687-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L687-L688) · [Before (L319-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L319-L327)

```diff
-     function UV() {
-       YV || (YV = !0, JV.ThinEngine.prototype.updateDynamicIndexBuffer = function(VV, eV) {
-         let xV;
-         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(VV), xV = VV.is32Bits ? eV instanceof Uint32Array ? eV : new Uint32Array(eV) : eV instanceof Uint16Array ? eV : new Uint16Array(eV), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, xV, … [truncated]
-       }, JV.ThinEngine.prototype.updateDynamicVertexBuffer = function(VV, eV, xV, JV) {
-         this.bindArrayBuffer(VV), void 0 === xV && (xV = 0);
-         const YV = eV.byteLength || eV.length;
-         void 0 === JV || JV >= YV && 0 === xV ? eV instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, xV, new Float32Array(eV)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, xV, eV) : eV instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, xV, new Floa … [truncated]
-       })
+     function Or(HH, BH, LH) {
+       return HH && LH ? BH.length === Object.keys(LH).length && BH.every((BH => HH[BH] === LH[BH])) : HH === LH
```

#### 30. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L329-L357` → after: `L690-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L690-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L690-L706) · [Before (L329-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L329-L357)

```diff
-   },
-   41198: (VV, eV, xV) => {
-     xV.d(eV, {
-       e: () => JV
-     });
-     class JV {
-       get underlyingResource() {
-         return this._webGLTexture
-       }
-       constructor() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           eV = arguments.length > 1 ? arguments[1] : void 0;
-         if (this._MSAARenderBuffers = null, this._context = eV, !VV && (VV = eV.createTexture(), !VV)) throw new Error("Unable to create webGL texture");
-         this.set(VV)
-       }
-       setUsage() {}
- ... (13 more removed lines; see GitHub link above)
+     var br = class {
+       constructor(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+         this.coercers = HH, this.stackParser = BH, this.modifiers = LH
+       }
+       buildFromUnknown(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         const LH = BH && BH.mechanism || {
+             handled: !0,
+             type: "generic"
+           },
+           AH = this.buildCoercingContext(LH, BH, 0).apply(HH),
+           rH = this.buildParsingContext(BH),
+           SH = this.parseStacktrace(AH, rH);
+         return {
+           $exception_list: this.convertToExceptionList(SH, LH),
+ ... (1 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L360-L388` → after: `L709-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L709-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L709-L714) · [Before (L360-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L360-L388)

```diff
-       getMSAARenderBuffer() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
-         return this._MSAARenderBuffers?.[VV] ?? null
-       }
-       release() {
-         this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
-       }
-     }
-   },
-   41150: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => jV
-     });
-     var JV = xV(38296),
-       YV = xV(41101),
-       UV = xV(38287),
- ... (13 more removed lines; see GitHub link above)
+       modifyFrames(HH) {
+         var BH = this;
+         return DL((function*() {
+           for (const LH of HH) LH.stacktrace && LH.stacktrace.frames && vL(LH.stacktrace.frames) && (LH.stacktrace.frames = yield BH.applyModifiers(LH.stacktrace.frames));
+           return HH
+         }))()
```

#### 32. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L390-L391` → after: `L716-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L716-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L716-L723) · [Before (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L390-L391)

```diff
-       set zOffset(VV) {
-         this._zOffset !== VV && (this._zOffset = VV, this._isZOffsetDirty = !0)
+       coerceFallback(HH) {
+         var BH;
+         return {
+           type: "Error",
+           value: "Unknown error",
+           stack: null === (BH = HH.syntheticException) || void 0 === BH ? void 0 : BH.stack,
+           synthetic: !0
+         }
```

#### 33. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L393-L394` → after: `L725-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L725-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L725-L735) · [Before (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L393-L394)

```diff
-       get zOffsetUnits() {
-         return this._zOffsetUnits
+       parseStacktrace(HH, BH) {
+         var LH;
+         let AH, rH;
+         if (null != HH.cause && (AH = this.parseStacktrace(HH.cause, BH)), "" != HH.stack && null != HH.stack) try {
+           rH = this.applyChunkIds(this.stackParser(HH.stack, HH.synthetic ? BH.skipFirstLines : 0), BH.chunkIdMap)
+         } catch (HH) {}
+         return xr(xr({}, HH), {}, {
+           cause: AH,
+           stack: rH,
+           errors: null === (LH = HH.errors) || void 0 === LH ? void 0 : LH.map((HH => this.parseStacktrace(HH, BH)))
+         })
```

#### 34. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L396-L397` → after: `L737-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L737-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L737-L738) · [Before (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L396-L397)

```diff
-       set zOffsetUnits(VV) {
-         this._zOffsetUnits !== VV && (this._zOffsetUnits = VV, this._isZOffsetDirty = !0)
+       applyChunkIds(HH, BH) {
+         return HH.map((HH => (HH.filename && BH && (HH.chunk_id = BH[HH.filename]), HH)))
```

#### 35. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L399-L400` → after: `L740-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L740-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L740-L743) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L399-L400)

```diff
-       get cullFace() {
-         return this._cullFace
+       applyCoercers(HH, BH) {
+         for (const LH of this.coercers)
+           if (LH.match(HH)) return LH.coerce(HH, BH);
+         return this.coerceFallback(BH)
```

#### 36. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L402-L403` → after: `L745-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L745-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L745-L751) · [Before (L402-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L402-L403)

```diff
-       set cullFace(VV) {
-         this._cullFace !== VV && (this._cullFace = VV, this._isCullFaceDirty = !0)
+       applyModifiers(HH) {
+         var BH = this;
+         return DL((function*() {
+           let LH = HH;
+           for (const HH of BH.modifiers) LH = yield HH(LH);
+           return LH
+         }))()
```

#### 37. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L405-L406` → after: `L753-L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L753-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L753-L785) · [Before (L405-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L405-L406)

```diff
-       get cull() {
-         return this._cull
+       convertToExceptionList(HH, BH) {
+         const LH = [],
+           AH = (HH, rH, SH) => {
+             var hH;
+             const tH = LH.length,
+               zH = void 0 === rH ? xr(xr({
+                 type: "string" == typeof BH.type && BH.type.length > 0 ? BH.type : "generic"
+               }, "boolean" == typeof BH.handled ? {
+                 handled: BH.handled
+               } : void 0 === BH.handled ? {
+                 handled: !0
+               } : {}), {}, {
+                 synthetic: "boolean" == typeof BH.synthetic ? BH.synthetic : HH.synthetic,
+                 exception_id: tH
+               }) : {
+                 type: "chained",
+ ... (17 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L408-L409` → after: `L787-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L787-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L787-L792) · [Before (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L408-L409)

```diff
-       set cull(VV) {
-         this._cull !== VV && (this._cull = VV, this._isCullDirty = !0)
+       buildParsingContext(HH) {
+         var BH;
+         return {
+           chunkIdMap: Vr(this.stackParser),
+           skipFirstLines: null !== (BH = HH.skipFirstLines) && void 0 !== BH ? BH : 1
+         }
```

#### 39. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L411-L412` → after: `L794-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L794-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L794-L808) · [Before (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L411-L412)

```diff
-       get depthFunc() {
-         return this._depthFunc
+       getAggregateErrors(HH) {
+         try {
+           if (qL(HH)) {
+             let LH = Object.getPrototypeOf(HH);
+             for (let AH = 0; LH && 100 > AH; AH++) {
+               var BH;
+               const AH = null === (BH = Object.getOwnPropertyDescriptor(LH, "constructor")) || void 0 === BH ? void 0 : BH.value;
+               if ("function" == typeof AH && "AggregateError" === AH.name) {
+                 const BH = HH.errors;
+                 return vL(BH) ? BH : void 0
+               }
+               LH = Object.getPrototypeOf(LH)
+             }
+           }
+         } catch (HH) {}
```

#### 40. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L414-L439` → after: `L810-L885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L810-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L810-L885) · [Before (L414-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L414-L439)

```diff
-       set depthFunc(VV) {
-         this._depthFunc !== VV && (this._depthFunc = VV, this._isDepthFuncDirty = !0)
-       }
-       get depthMask() {
-         return this._depthMask
-       }
-       set depthMask(VV) {
-         this._depthMask !== VV && (this._depthMask = VV, this._isDepthMaskDirty = !0)
-       }
-       get depthTest() {
-         return this._depthTest
-       }
-       set depthTest(VV) {
-         this._depthTest !== VV && (this._depthTest = VV, this._isDepthTestDirty = !0)
-       }
-       get frontFace() {
- ... (10 more removed lines; see GitHub link above)
+       buildCoercingContext(HH, BH) {
+         var LH = this;
+         let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           rH = 0,
+           SH = 0,
+           hH = !1;
+         const tH = new Set,
+           zH = [],
+           CH = {},
+           EH = function(HH, BH) {
+             let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+             const EH = XH(BH, AH),
+               GH = EH.apply;
+             if (EH.apply = BH => {
+                 zH.push(HH);
+                 try {
+ ... (60 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L442-L529` → after: `L896-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L896-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L896-L947) · [Before (L442-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L442-L529)

```diff
-     class wV {
-       get isDirty() {
-         return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
-       }
-       get func() {
-         return this._func
-       }
-       set func(VV) {
-         this._func !== VV && (this._func = VV, this._isStencilFuncDirty = !0)
-       }
-       get backFunc() {
-         return this._func
-       }
-       set backFunc(VV) {
-         this._backFunc !== VV && (this._backFunc = VV, this._isStencilFuncDirty = !0)
-       }
- ... (72 more removed lines; see GitHub link above)
+ 
+     function Ir(HH, BH, LH, AH, rH) {
+       const SH = {
+         platform: HH,
+         filename: BH,
+         function: "<anonymous>" === LH ? "?" : LH,
+         in_app: or(BH)
+       };
+       return VL(AH) || (SH.lineno = AH), VL(rH) || (SH.colno = rH), SH
+     }
+     const fr = (HH, BH) => {
+         const LH = -1 !== HH.indexOf("safari-extension"),
+           AH = -1 !== HH.indexOf("safari-web-extension");
+         return LH || AH ? [-1 !== HH.indexOf("@") ? HH.split("@")[0] : "?", LH ? `safari-extension:${BH}` : `safari-web-extension:${BH}`] : [HH, BH]
+       },
+       lr = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
+ ... (36 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L531-L608` → after: `L949-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L949-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L949-L965) · [Before (L531-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L531-L608)

```diff
-     class ZV {
-       constructor() {
-         this.reset()
-       }
-       reset() {
-         this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = ZV.ALWAYS, this.opStencilFail = ZV.KEEP, this.opDepthFail = ZV.KEEP, this.opStencilDepthPass = ZV.REPLACE, this.backFunc = ZV.ALWAYS, this.backOpStencilFail = ZV.KEEP, this.backOpDepthF … [truncated]
-       }
-       get stencilFunc() {
-         return this.func
-       }
-       set stencilFunc(VV) {
-         this.func = VV
-       }
-       get stencilBackFunc() {
-         return this.backFunc
-       }
- ... (62 more removed lines; see GitHub link above)
+ 
+     function nr(HH) {
+       for (let BH = 1; 10 >= BH; BH++) {
+         const LH = HH.length - 2 * BH;
+         if (0 > LH) break;
+         let AH = !0;
+         for (let rH = 0; BH > rH; rH++)
+           if (!jr(HH[LH + rH], HH[LH + BH + rH])) {
+             AH = !1;
+             break
+           } if (AH) {
+           for (let AH = 0; BH > AH; AH++) HH[LH + AH] = HH[LH + BH + AH];
+           return HH.length = LH + BH, {
+             start: LH,
+             length: BH
+           }
+ ... (1 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L619-L631` → after: `L970-L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L970-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L970-L972) · [Before (L619-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L619-L631)

```diff
-       if (eV) {
-         const {
-           requestAnimationFrame: xV
-         } = eV;
-         if ("function" === typeof xV) return xV(VV)
-       }
-       if ((0, bV.n)()) {
-         const {
-           requestAnimationFrame: xV
-         } = eV || window;
-         if ("function" === typeof xV) return xV(VV)
-       } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(VV);
-       return setTimeout(VV, 16)
+       const LH = BH.start + BH.length,
+         AH = wr(HH, BH);
+       AH && HH.splice(LH + AH === HH.length ? LH : BH.start, AH)
```

#### 44. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L633-L674` → after: `L974-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L974-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L974-L999) · [Before (L633-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L633-L674)

```diff
-     class jV {
-       get frameId() {
-         return this._frameId
-       }
-       get isWebGPU() {
-         return this._isWebGPU
-       }
-       _getShaderProcessor(VV) {
-         return this._shaderProcessor
-       }
-       _resetAlphaMode() {
-         this._alphaMode.fill(-1), this._alphaEquation.fill(-1)
-       }
-       get shaderPlatformName() {
-         return this._shaderPlatformName
-       }
- ... (26 more removed lines; see GitHub link above)
+ 
+     function Dr(HH, BH) {
+       let LH = BH.start;
+       for (; LH > 0 && jr(HH[LH - 1], HH[LH - 1 + BH.length]);) LH--;
+       return BH.start - LH
+     }
+ 
+     function wr(HH, BH) {
+       const LH = BH.start + BH.length;
+       let AH = LH;
+       for (; HH.length > AH && jr(HH[AH], HH[AH - BH.length]);) AH++;
+       return AH - LH
+     }
+ 
+     function Zr(HH, BH) {
+       const LH = BH[0];
+ ... (10 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L676-L680` → after: `L1001-L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1001-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1001-L1005) · [Before (L676-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L676-L680)

```diff
-       _getGlobalDefines(VV) {
-         if (VV) return this.isNDCHalfZRange ? VV.IS_NDC_HALF_ZRANGE = "" : delete VV.IS_NDC_HALF_ZRANGE, this.zYV ? VV.USE_REVERSE_DEPTHBUFFER = "" : delete VV.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? VV.USE_EXACT_SRGB_CONVERSIONS = "" : delete VV.USE_EXACT_SR … [truncated]
-         {
-           let VV = "";
-           return this.isNDCHalfZRange && (VV += "#define IS_NDC_HALF_ZRANGE"), this.zYV && (VV && (VV += "\n"), VV += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (VV && (VV += "\n"), VV += "#define USE_EXACT_SRGB_CONVERSIONS"), VV
+       return !1
+     }
+     var ar = class {
+         match(HH) {
+           return this.isDOMException(HH) || this.isDOMError(HH)
```

#### 46. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L682-L694` → after: `L1007-L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1007-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1007-L1015) · [Before (L682-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L682-L694)

```diff
-       }
-       _rebuildInternalTextures() {
-         const VV = this._internalTexturesCache.slice();
-         for (const eV of VV) eV._rebuild()
-       }
-       _rebuildRenderTargetWrappers() {
-         const VV = this._renderTargetWrapperCache.slice();
-         for (const eV of VV) eV.textures?.some((VV => 15 === VV.source)) || eV._rebuild()
-       }
-       _rebuildEffects() {
-         for (const VV in this._compiledEffects) {
-           const eV = this._compiledEffects[VV];
-           eV._pipelineContext = null, eV._prepareEffect()
+         coerce(HH, BH) {
+           const LH = OL(HH.stack);
+           return {
+             type: this.getType(HH),
+             value: this.getValue(HH),
+             stack: LH ? HH.stack : void 0,
+             cause: HH.cause ? BH.next(HH.cause) : void 0,
+             synthetic: !1
+           }
```

#### 47. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L696-L741` → after: `L1017-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1017-L1018) · [Before (L696-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L696-L741)

```diff
-         YV.c.ResetCache()
-       }
-       _rebuildGraphicsResources() {
-         this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
-       }
-       _flagContextRestored() {
-         yV.b.Warn(this.name + " context successfully restored."), this.uk.notifyObservers(this), this._contextWasLost = !1
-       }
-       _restoreEngineAfterContextLost(VV) {
-         setTimeout((() => {
-           this._clearEmptyResources();
-           const eV = this._depthCullingState.depthTest,
-             xV = this._depthCullingState.depthFunc,
-             JV = this._depthCullingState.depthMask,
-             YV = this._stencilState.stencilTest;
-           VV(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = eV, this._depthCullingState.depthFunc = xV, this._depthCullingState.depthMask = JV, this._stencilState.stencilTest = YV, this._flagContextRestored()
- ... (30 more removed lines; see GitHub link above)
+         getType(HH) {
+           return this.isDOMError(HH) ? "DOMError" : "DOMException"
```

#### 48. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L743-L763` → after: `L1020-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1020-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1020-L1045) · [Before (L743-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L743-L763)

```diff
-         return this._emptyCubeTexture
-       }
-       set framebufferDimensionsObject(VV) {
-         this._framebufferDimensionsObject = VV
-       }
-       get activeRenderLoops() {
-         return this._activeRenderLoops
-       }
-       stopRenderLoop(VV) {
-         if (!VV) return this._activeRenderLoops.length = 0, void this._cancelFrame();
-         const eV = this._activeRenderLoops.indexOf(VV);
-         eV >= 0 && (this._activeRenderLoops.splice(eV, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
-       }
-       _cancelFrame() {
-         if (this.customAnimationFrameRequester) {
-           if (0 !== this._frameHandler) {
- ... (5 more removed lines; see GitHub link above)
+         getValue(HH) {
+           const BH = HH.name || (this.isDOMError(HH) ? "DOMError" : "DOMException");
+           return HH.message ? `${BH}: ${HH.message}` : BH
+         }
+         isDOMException(HH) {
+           return eL(HH, "DOMException")
+         }
+         isDOMError(HH) {
+           return eL(HH, "DOMError")
+         }
+       },
+       sr = class {
+         match(HH) {
+           return qL(HH)
+         }
+         coerce(HH, BH) {
+ ... (10 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L775-L796` → after: `L1048-L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1048-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1048-L1049) · [Before (L775-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L775-L796)

```diff
-       }
-       pT() {
-         this.onBeginFrameObservable.notifyObservers(this)
-       }
-       GZ() {
-         this._frameId++, this.onEndFrameObservable.notifyObservers(this)
-       }
-       get maxFPS() {
-         return this._maxFPS
-       }
-       set maxFPS(VV) {
-         this._maxFPS = VV, void 0 !== VV && (this._minFrameTime = VV <= 0 ? Number.MAX_VALUE : 1e3 / VV)
-       }
-       _isOverFrameTime(VV) {
-         if (!VV || void 0 === this._maxFPS) return !1;
-         const eV = VV - this._lastFrameTime;
- ... (6 more removed lines; see GitHub link above)
+         getType(HH) {
+           return HH.name || HH.constructor.name
```

#### 50. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L799-L804` → after: `L1095-L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1095-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1095-L1102) · [Before (L799-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L799-L804)

```diff
-       _renderLoop(VV) {
-         this._processFrame(VV), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
-       }
-       _renderFrame() {
-         for (let VV = 0; VV < this._activeRenderLoops.length; VV++) {
-           (0, this._activeRenderLoops[VV])()
+       coerce(HH, BH) {
+         var LH;
+         const [AH, rH] = this.getInfos(HH);
+         return {
+           type: null != AH ? AH : "Error",
+           value: null != rH ? rH : HH,
+           stack: null === (LH = BH.syntheticException) || void 0 === LH ? void 0 : LH.stack,
+           synthetic: !0
```

#### 51. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L807-L808` → after: `L1105-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1105-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1105-L1109) · [Before (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L807-L808)

```diff
-       _renderViews() {
-         return !1
+       getInfos(HH) {
+         let BH = "Error",
+           LH = HH;
+         const AH = HH.match(ir);
+         return AH && (BH = AH[1], LH = AH[2]), [BH, LH]
```

#### 52. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L810-L930` → after: `L1111-L1167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1111-L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1111-L1167) · [Before (L810-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L810-L930)

```diff
-       _queueNewFrame(VV, eV) {
-         return BV(VV, eV)
-       }
-       _queueNewFrameForRenderLoop() {
-         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.Ok = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.O … [truncated]
-       }
-       runRenderLoop(VV) {
-         -1 === this._activeRenderLoops.indexOf(VV) && (this._activeRenderLoops.push(VV), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
-       }
-       getDepthBuffer() {
-         return this._depthCullingState.depthTest
-       }
-       setDepthBuffer(VV) {
-         this._depthCullingState.depthTest = VV
-       }
-       setZOffset(VV) {
- ... (105 more removed lines; see GitHub link above)
+     };
+     const yr = ["fatal", "error", "warning", "log", "info", "debug"];
+ 
+     function HS(HH) {
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40;
+       const LH = Object.keys(HH);
+       if (LH.sort(), !LH.length) return "[object has no keys]";
+       for (let AH = LH.length; AH > 0; AH--) {
+         const HH = LH.slice(0, AH).join(", ");
+         if (BH >= HH.length) return AH === LH.length ? HH : HH.length > BH ? `${HH.slice(0,BH)}...` : HH
+       }
+       return ""
+     }
+     var BS = class {
+         match(HH) {
+           return "object" == typeof HH && null !== HH
+ ... (41 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L945-L1003` → after: `L1170-L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1170-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1170-L1256) · [Before (L945-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L945-L1003)

```diff
-         return PV
-       }
-       _rebuildBuffers() {
-         for (const VV of this._uniformBuffers) VV._rebuildAfterContextLost()
-       }
-       get _shouldUseHighPrecisionShader() {
-         return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
-       }
-       getHostDocument() {
-         return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, bV.f)() ? document : null
-       }
-       getLoadedTexturesCache() {
-         return this._internalTexturesCache
-       }
-       clearInternalTexturesCache() {
-         this._internalTexturesCache.length = 0
- ... (43 more removed lines; see GitHub link above)
+         getObjectClassName(HH) {
+           try {
+             const BH = Object.getPrototypeOf(HH);
+             return BH ? BH.constructor.name : void 0
+           } catch (HH) {
+             return
+           }
+         }
+       },
+       LS = class {
+         match(HH) {
+           return gL(HH)
+         }
+         coerce(HH, BH) {
+           var LH;
+           const AH = HH.constructor.name;
+ ... (71 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1005-L1006` → after: `L1258-L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1258-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1258-L1259) · [Before (L1005-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1005-L1006)

```diff
-       getCreationOptions() {
-         return this._creationOptions
+       setConfig(HH) {
+         this._config = CS(HH), this._trimToMaxBytes()
```

#### 55. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1008-L1044` → after: `L1261-L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1261-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1261-L1279) · [Before (L1008-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1008-L1044)

```diff
-       constructor(VV, eV, xV) {
-         this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new nV, this._stencilStateComposer = new wV, this._stencilState = new ZV, this._alphaState = new vV.b(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._ac … [truncated]
-           x: 0,
-           y: 0,
-           z: 0,
-           w: 0
-         }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new JV.c, this.onCanvasFocusObservable = new JV.c, this.onNewSceneAddedObservable = new JV.c, this.onResizeObservable = new JV.c, this.onCanvasPointerOutObservable = new JV.c, this.onE … [truncated]
-           isMobile: !1
-         }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDep … [truncated]
-         const YV = (0, bV.n)() && window.devicePixelRatio || 1,
-           yV = eV.limitDeviceRatio || YV;
-         xV = xV || eV.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = xV, this._hardwareScalingLevel = xV ? 1 / Math.min(yV, YV) : 1, this._lastDevicePixelRatio = YV, this._creationOptions = eV
-       }
-       resize() {
-         let VV, eV, xV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (this.adaptToDeviceRatio) {
- ... (21 more removed lines; see GitHub link above)
+       add(HH) {
+         const BH = function(HH) {
+           let BH;
+           try {
+             BH = QL(HH)
+           } catch (HH) {
+             return
+           }
+           try {
+             const HH = JSON.parse(BH);
+             if (!TL(HH)) return;
+             const LH = HH,
+               AH = LH[SS],
+               rH = LH[hS];
+             if (!OL(AH) || 0 === AH.trim().length) return;
+             if (!OL(rH) && !oL(rH)) return;
+ ... (3 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1047-L1052` → after: `L1284-L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1284-L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1284-L1296) · [Before (L1047-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1047-L1052)

```diff
-           this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
-         }
-         return !0
-       }
-       createRawTexture(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV) {
-         throw (0, rV.n)("engine.rawTexture")
+         }(HH);
+         if (!BH) return;
+         const LH = function(HH) {
+           if ("u" > typeof TextEncoder) return (new TextEncoder).encode(HH).length;
+           const BH = encodeURIComponent(HH);
+           let LH = 0;
+           for (let AH = 0; BH.length > AH; AH++) "%" === BH[AH] ? (LH += 1, AH += 2) : LH += 1;
+           return LH
+         }(BH.json);
+         LH > this._config.max_bytes || (this._entries.push({
+           step: BH.step,
+           bytes: LH
+         }), this._totalBytes += LH, this._trimToMaxBytes())
```

#### 57. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1054-L1055` → after: `L1298-L1299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1298-L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1298-L1299) · [Before (L1054-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1054-L1055)

```diff
-       createRawCubeTexture(VV, eV, xV, JV, YV, UV, yV, pV) {
-         throw (0, rV.n)("engine.rawTexture")
+       getAttachable() {
+         return this._entries.map((HH => HH.step))
```

#### 58. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1057-L1058` → after: `L1301-L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1301-L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1301-L1302) · [Before (L1057-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1057-L1058)

```diff
-       createRawTexture3D(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV) {
-         throw (0, rV.n)("engine.rawTexture")
+       clear() {
+         this._entries = [], this._totalBytes = 0
```

#### 59. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1060-L1061` → after: `L1304-L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1304-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1304-L1305) · [Before (L1060-L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1060-L1061)

```diff
-       createRawTexture2DArray(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV) {
-         throw (0, rV.n)("engine.rawTexture")
+       size() {
+         return this._entries.length
```

#### 60. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1063-L1148` → after: `L1307-L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1307-L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1307-L1311) · [Before (L1063-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1063-L1148)

```diff
-       _sharedInit(VV) {
-         this._renderingCanvas = VV
-       }
-       _setupMobileChecks() {
-         navigator && navigator.userAgent && (this._checkForMobile = () => {
-           const VV = navigator.userAgent;
-           this.hostInformation.isMobile = -1 !== VV.indexOf("Mobile") || -1 !== VV.indexOf("Mac") && (0, bV.f)() && "ontouchend" in document
-         }, this._checkForMobile(), (0, bV.n)() && window.addEventListener("resize", this._checkForMobile))
-       }
-       createVideoElement(VV) {
-         return document.createElement("video")
-       }
-       _reportDrawCall() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
-         this._drawCalls?.addCount(VV, !1)
-       }
- ... (70 more removed lines; see GitHub link above)
+       _trimToMaxBytes() {
+         for (; this._totalBytes > this._config.max_bytes && this._entries.length > 0;) {
+           const HH = this._entries.shift();
+           HH && (this._totalBytes -= HH.bytes)
+         }
```

#### 61. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1151-L1165` → after: `L1320-L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1320-L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1320-L1325) · [Before (L1151-L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1151-L1165)

```diff
-     jV._RenderPassIdCounter = 0, jV._RescalePostProcessFactory = null, jV.CollisionsEpsilon = .001, jV.QueueNewFrame = BV
-   },
-   41108: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => JV
-     });
-     class JV {
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? JV.ShadersRepository : JV.ShadersRepositoryWGSL
-       }
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? JV.ShadersStore : JV.ShadersStoreWGSL
-       }
-       static GetIncludesShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? JV.IncludesShadersStore : JV.IncludesShadersStoreWGSL
+     const GS = HH => {
+       if ("string" != typeof HH) return HH;
+       try {
+         return JSON.parse(HH)
+       } catch (rH) {
+         return HH
```

#### 62. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1168-L1230` → after: `L1332-L1393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1332-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1332-L1393) · [Before (L1168-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1168-L1230)

```diff
-     JV.ShadersRepository = "src/Shaders/", JV.ShadersStore = {}, JV.IncludesShadersStore = {}, JV.ShadersRepositoryWGSL = "src/ShadersWGSL/", JV.ShadersStoreWGSL = {}, JV.IncludesShadersStoreWGSL = {}
-   },
-   41125: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => vV,
-       d: () => qV,
-       h: () => kV,
-       j: () => rV,
-       k: () => bV,
-       m: () => jV,
-       o: () => ZV,
-       s: () => nV,
-       t: () => wV,
-       x: () => QV,
-       y: () => pV
-     });
- ... (47 more removed lines; see GitHub link above)
+ 
+     function uS(HH) {
+       return "string" == typeof HH ? HH : void 0
+     }
+     const QS = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$proce … [truncated]
+       WS = "NativeGzipValidationError",
+       MS = HH => HH.length >= 2 && 31 === HH[0] && 139 === HH[1],
+       xS = (HH, BH) => HH === CL.GZipJS || BH === CL.GZipJS || "gzip" === BH,
+       vS = HH => !(!HH || "object" != typeof HH) && "NotReadableError" === ("name" in HH ? String(HH.name) : "");
+     let PS;
+     const TS = HH => {
+         throw Cr(WS, `Native gzip produced invalid output: ${HH}`)
+       },
+       US = (VS = DL((function*(HH, BH) {
+         18 > HH.size && TS("too-short");
+         const LH = new Uint8Array(yield HH.slice(0, 10).arrayBuffer());
+ ... (46 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1232-L1365` → after: `L1395-L1396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1395-L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1395-L1396) · [Before (L1232-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1232-L1365)

```diff
-         return void 0 === UV && (UV = this._matrixValueCache[VV] = new Float32Array(16)), UV.set(YV), this._valueCache[VV] = JV, !0
-       }
-       _cacheFloat2(VV, eV, xV) {
-         let JV = this._valueCache[VV];
-         if (!JV || 2 !== JV.length) return JV = [eV, xV], this._valueCache[VV] = JV, !0;
-         let YV = !1;
-         return JV[0] !== eV && (JV[0] = eV, YV = !0), JV[1] !== xV && (JV[1] = xV, YV = !0), YV
-       }
-       _cacheFloat3(VV, eV, xV, JV) {
-         let YV = this._valueCache[VV];
-         if (!YV || 3 !== YV.length) return YV = [eV, xV, JV], this._valueCache[VV] = YV, !0;
-         let UV = !1;
-         return YV[0] !== eV && (YV[0] = eV, UV = !0), YV[1] !== xV && (YV[1] = xV, UV = !0), YV[2] !== JV && (YV[2] = JV, UV = !0), UV
-       }
-       _cacheFloat4(VV, eV, xV, JV, YV) {
-         let UV = this._valueCache[VV];
- ... (118 more removed lines; see GitHub link above)
+         var AH
+       })), OS.apply(this, arguments)
```

#### 64. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1374-L1383` → after: `L1399-L1412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1399-L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1399-L1412) · [Before (L1374-L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1374-L1383)

```diff
-     function pV(VV) {
-       let eV = UV.get(VV);
-       if (!eV) {
-         if (!VV) return yV;
-         eV = {
-           _webGLVersion: VV.TEXTURE_BINDING_3D ? 2 : 1,
-           _context: VV,
-           parallelShaderCompile: VV.getExtension("KHR_parallel_shader_compile") || void 0,
-           cachedPipelines: {}
-         }, UV.set(VV, eV)
+     function bS(HH, BH) {
+       if (null == HH) return {};
+       var LH, AH, rH = function(HH, BH) {
+         if (null == HH) return {};
+         var LH = {};
+         for (var AH in HH)
+           if ({}.hasOwnProperty.call(HH, AH)) {
+             if (BH.includes(AH)) continue;
+             LH[AH] = HH[AH]
+           } return LH
+       }(HH, BH);
+       if (Object.getOwnPropertySymbols) {
+         var SH = Object.getOwnPropertySymbols(HH);
+         for (AH = 0; SH.length > AH; AH++) BH.includes(LH = SH[AH]) || {}.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
```

#### 65. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1389` → after: `L1443-L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1443-L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1443-L1445) · [Before (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1389)

```diff
-       UV.delete(VV)
+       return function(HH) {
+         return cS.test(HH)
+       }(HH) || nS.test(HH) || FS.test(HH)
```

#### 66. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1392-L1395` → after: `L1448-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1448-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1448-L1449) · [Before (L1392-L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1392-L1395)

```diff
-     function nV(VV, eV, xV, JV, YV, UV) {
-       const yV = pV(JV);
-       UV || (UV = yV._createShaderProgramInjection ?? vV);
-       return UV(VV, BV(eV, "vertex", JV, yV._contextWasLost), BV(xV, "fragment", JV, yV._contextWasLost), JV, YV, yV.validateShaderPrograms)
+     function Hh(HH) {
+       return HH.split("&", 129).length > 128
```

#### 67. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1398-L1404` → after: `L1452-L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1452-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1452-L1458) · [Before (L1398-L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1398-L1404)

```diff
-     function wV(VV, eV, xV, JV, YV) {
-       let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-         yV = arguments.length > 6 ? arguments[6] : void 0;
-       const QV = pV(YV);
-       yV || (yV = QV._createShaderProgramInjection ?? vV);
-       const nV = QV._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
-       return yV(VV, EV(eV, "vertex", JV, nV, YV, QV._contextWasLost), EV(xV, "fragment", JV, nV, YV, QV._contextWasLost), YV, UV, QV.validateShaderPrograms)
+     function Bh(HH, BH, LH) {
+       return yS(HH) || BH.includes(";") && function(HH) {
+         return HH.split(";").some((HH => yS(HH.split("=", 1)[0])))
+       }(BH) ? kS : gS.test(BH) ? LH ? th(BH, {
+         allowNestedUrls: !1,
+         stripPunctuation: !0
+       }) : kS : BH
```

#### 68. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1408-L1410` → after: `L1462-L1476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1462-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1462-L1476) · [Before (L1408-L1410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1408-L1410)

```diff
-       const xV = new JV,
-         YV = pV(VV);
-       return YV.parallelShaderCompile && !YV.disableParallelShaderCompile && (xV.isParallelCompiled = !0), xV.context = YV._context, xV
+       const LH = new URLSearchParams;
+       let AH = !1,
+         rH = !1;
+       for (const [SH, hH] of new URLSearchParams(HH)) {
+         const HH = zh(SH),
+           tH = zh(hH);
+         AH || (AH = HH !== SH || tH !== hH);
+         const zH = Bh(HH, tH, BH);
+         AH || (AH = zH !== tH), rH = yS(HH) || zH !== tH, LH.append(HH, zH)
+       }
+       return {
+         changed: AH,
+         lastFieldSensitive: rH,
+         serialized: LH.toString()
+       }
```

#### 69. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1413-L1417` → after: `L1479-L1488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1479-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1479-L1488) · [Before (L1413-L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1413-L1417)

```diff
-     function vV(VV, eV, xV, JV) {
-       let YV = arguments.length > 5 ? arguments[5] : void 0;
-       const UV = JV.createProgram();
-       if (VV.program = UV, !UV) throw new Error("Unable to create program");
-       return JV.attachShader(UV, eV), JV.attachShader(UV, xV), JV.linkProgram(UV), VV.context = JV, VV.vertexShader = eV, VV.fragmentShader = xV, VV.isParallelCompiled || kV(VV, JV, YV), UV
+     function Ah(HH, BH) {
+       if (!HH.includes("=")) return {
+         value: rh(HH, BH),
+         lastFieldSensitive: !1
+       };
+       const LH = Lh(HH, BH);
+       return {
+         value: LH.changed ? LH.serialized : HH,
+         lastFieldSensitive: LH.lastFieldSensitive
+       }
```

#### 70. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1420-L1424` → after: `L1491-L1495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1491-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1491-L1495) · [Before (L1420-L1424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1420-L1424)

```diff
-     function rV(VV, eV, xV) {
-       const JV = VV;
-       if (JV._isDisposed) return !1;
-       const YV = pV(eV);
-       return !!(YV && YV.parallelShaderCompile && YV.parallelShaderCompile.COMPLETION_STATUS_KHR && JV.program && eV.getProgramParameter(JV.program, YV.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (kV(JV, eV, xV), !0)
+     function rh(HH, BH) {
+       return BH ? th(HH, {
+         allowNestedUrls: !1,
+         stripPunctuation: !0
+       }) : gS.test(HH) ? kS : HH
```

#### 71. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1428-L1448` → after: `L1499-L1513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1499-L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1499-L1513) · [Before (L1428-L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1428-L1448)

```diff
-       const JV = VV.context,
-         YV = VV.vertexShader,
-         UV = VV.fragmentShader,
-         yV = VV.program;
-       if (!JV.getProgramParameter(yV, JV.LINK_STATUS)) {
-         if (!eV.getShaderParameter(YV, eV.COMPILE_STATUS)) {
-           const xV = eV.getShaderInfoLog(YV);
-           if (xV) throw VV.vertexCompilationError = xV, new Error("VERTEX SHADER " + xV)
-         }
-         if (!eV.getShaderParameter(UV, eV.COMPILE_STATUS)) {
-           const xV = eV.getShaderInfoLog(UV);
-           if (xV) throw VV.fragmentCompilationError = xV, new Error("FRAGMENT SHADER " + xV)
-         }
-         const xV = JV.getProgramInfoLog(yV);
-         if (xV) throw VV.programLinkError = xV, new Error(xV)
-       }
- ... (5 more removed lines; see GitHub link above)
+       return "#" === HH ? !BH.fragment && (BH.fragment = !0) : "?" === HH && (BH.fragment ? "=" !== LH && !BH.fragmentQuery && (BH.fragmentQuery = !0) : !BH.query && (BH.query = !0))
+     }
+ 
+     function hh(HH, BH) {
+       var LH;
+       if (HH.length > 8192 && RS.test(HH)) return kS;
+       const {
+         address: AH,
+         suffix: rH
+       } = BH.stripPunctuation ? function(HH) {
+         let BH = HH.length;
+         for (; BH > 0 && ".,;:!?)]}'".includes(HH[BH - 1]);) BH--;
+         return {
+           address: HH.slice(0, BH),
+           suffix: HH.slice(BH)
```

#### 72. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1450-L1451` → after: `L1515-L1552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1515-L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1515-L1552) · [Before (L1450-L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1450-L1451)

```diff
-       }
-       JV.deleteShader(YV), JV.deleteShader(UV), VV.vertexShader = void 0, VV.fragmentShader = void 0, VV.onCompiled && (VV.onCompiled(), VV.onCompiled = void 0)
+       }(HH) : {
+         address: HH,
+         suffix: ""
+       };
+       let SH;
+       try {
+         SH = new URL(AH)
+       } catch (HH) {
+         return kS + rH
+       }
+       const hH = SH.search.slice(1),
+         tH = "" !== SH.hash,
+         zH = function(HH) {
+           const BH = HH.slice(1),
+             LH = BH.indexOf("?");
+           return 0 > LH ? {
+ ... (22 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1454-L1461` → after: `L1555-L1585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1555-L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1555-L1585) · [Before (L1454-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1454-L1461)

```diff
-     function bV(VV, eV, xV, JV, YV, UV, yV, QV, ZV) {
-       let vV = arguments.length > 10 ? arguments[10] : void 0,
-         rV = arguments.length > 11 ? arguments[11] : void 0,
-         kV = arguments.length > 12 ? arguments[12] : void 0;
-       const bV = pV(VV.context);
-       rV || (rV = bV.createRawShaderProgramInjection ?? nV), kV || (kV = bV.createShaderProgramInjection ?? wV);
-       const EV = VV;
-       EV.program = JV ? rV(EV, eV, xV, EV.context, ZV) : kV(EV, eV, xV, QV, EV.context, ZV), EV.program.__SPECTOR_rebuildProgram = yV, vV()
+     function th(HH, BH) {
+       return HH.replace(eS, (LH => function(HH, BH) {
+         const LH = function(HH) {
+           if (!HH.includes("://")) return [];
+           const BH = [...HH.matchAll(jS)].map((HH => HH.index)),
+             LH = [],
+             AH = {
+               query: !1,
+               fragment: !1,
+               fragmentQuery: !1
+             };
+           let rH = 0,
+             SH = !1,
+             hH = "";
+           for (let tH = 0; HH.length > tH && BH.length > rH; tH++) {
+             BH[rH] === tH && (tH > 0 && "=" !== hH && LH.push(tH), rH++);
+ ... (15 more added lines; see GitHub link above)
```

#### 74. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1464-L1465` → after: `L1588-L1589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1588-L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1588-L1589) · [Before (L1464-L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1464-L1465)

```diff
-     function EV(VV, eV, xV, JV, UV, yV) {
-       return BV((0, YV.f)(VV, xV, JV), eV, UV, yV)
+     function zh(HH) {
+       return HH.replace(KS, kS)
```

#### 75. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1468-L1474` → after: `L1592-L1598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1592-L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1592-L1598) · [Before (L1468-L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1468-L1474)

```diff
-     function BV(VV, eV, xV, JV) {
-       const YV = xV.createShader("vertex" === eV ? xV.VERTEX_SHADER : xV.FRAGMENT_SHADER);
-       if (!YV) {
-         let VV, YV = xV.NO_ERROR;
-         for (;
-           (VV = xV.getError()) !== xV.NO_ERROR;) YV = VV;
-         throw new Error(`Something went wrong while creating a gl ${eV} shader object. gl error=${YV}, gl isContextLost=${xV.isContextLost()}, _contextWasLost=${JV}`)
+     function Ch(HH) {
+       let BH = 0,
+         LH = !1;
+       for (let AH = HH.length - 1; AH >= 0; AH--) {
+         let rH = HH.charCodeAt(AH) - 48;
+         if (0 > rH || rH > 9) return !1;
+         LH && (rH *= 2, rH > 9 && (rH -= 9)), BH += rH, LH = !LH
```

#### 76. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1476` → after: `L1600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1600) · [Before (L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1476)

```diff
-       return xV.shaderSource(YV, VV), xV.compileShader(YV), YV
+       return BH % 10 == 0
```

#### 77. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1479-L1481` → after: `L1603-L1621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1603-L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1603-L1621) · [Before (L1479-L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1479-L1481)

```diff
-     function jV(VV, eV) {
-       eV.useProgram(VV)
-     }
+     function Eh(HH) {
+       const BH = [];
+       for (let SH = JS.exec(HH); null !== SH; SH = JS.exec(HH)) BH.push({
+         digits: SH[0],
+         start: SH.index,
+         end: SH.index + SH[0].length
+       });
+       let LH = "",
+         AH = 0,
+         rH = 0;
+       for (; BH.length > rH;) {
+         let SH = "",
+           hH = -1;
+         for (let HH = rH; BH.length > HH && (SH += BH[HH].digits, 19 >= SH.length); HH++) SH.length >= 13 && Ch(SH) && (hH = HH);
+         0 > hH ? rH++ : (LH += HH.slice(AH, BH[rH].start) + kS, AH = BH[hH].end, rH = hH + 1)
+       }
+ ... (3 more added lines; see GitHub link above)
```

#### 78. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1484-L1488` → after: `L1624-L1630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1624-L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1624-L1630) · [Before (L1484-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1484-L1488)

```diff
-       const xV = VV;
-       if (!xV.isParallelCompiled) return void eV(VV);
-       const JV = xV.onCompiled;
-       xV.onCompiled = () => {
-         JV?.(), eV(VV)
+       try {
+         return Qh(HH, BH, {
+           ancestors: new WeakSet,
+           remainingNodes: 1e4
+         }, 0)
+       } catch (HH) {
+         return []
```

#### 79. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1491-L1509` → after: `L1633-L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1633-L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1633-L1669) · [Before (L1491-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1491-L1509)

```diff
-   },
-   41095: (VV, eV, xV) => {
-     xV.d(eV, {
-       ThinEngine: () => FV
-     });
-     var JV = xV(41101),
-       YV = xV(41125),
-       UV = xV(41150),
-       yV = xV(41168),
-       pV = xV(39870),
-       QV = xV(41122);
-     class nV {
-       constructor() {
-         this.shaderLanguage = 0
-       }
-       postProcessor(VV, eV, xV, JV, YV) {
- ... (3 more removed lines; see GitHub link above)
+ 
+     function Yh(HH, BH, LH, AH) {
+       if (0 >= LH.remainingNodes) return {
+         stringValue: Br
+       };
+       if (LH.remainingNodes--, fL(HH)) return {
+         boolValue: HH
+       };
+       if ("bigint" == typeof HH) return function(HH, BH) {
+         const LH = HH.toString(),
+           AH = BigInt("9223372036854775808");
+         return HH >= AH || -AH > HH ? (null == BH || BH.debug(`Attribute ${LH} is outside the int64 range; encoding it as a string`), {
+           stringValue: LH
+         }) : {
+           intValue: LH
+         }
+ ... (21 more added lines; see GitHub link above)
```

#### 80. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1519-L1520` → after: `L1672-L1712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1672-L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1672-L1712) · [Before (L1519-L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1519-L1520)

```diff
-       attributeProcessor(VV) {
-         return VV.replace("attribute", "in")
+       if ("string" == typeof HH) return {
+         stringValue: Ar(HH)
+       };
+       if ("function" == typeof HH) return {
+         stringValue: "[Function]"
+       };
+       if ("symbol" == typeof HH) return {
+         stringValue: String(HH)
+       };
+       if ("object" == typeof HH && null !== HH) {
+         if (LH.ancestors.has(HH)) return {
+           stringValue: "[Circular]"
+         };
+         if (AH >= 20) return {
+           stringValue: Br
+         };
+ ... (25 more added lines; see GitHub link above)
```

#### 81. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1522-L1523` → after: `L1714-L1715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1714-L1715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1714-L1715) · [Before (L1522-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1522-L1523)

```diff
-       varyingCheck(VV, eV) {
-         return wV.test(VV)
+       return {
+         stringValue: Ar(String(HH))
```

#### 82. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1525-L1526` → after: `L1717-L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1717-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1717-L1730) · [Before (L1525-L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1525-L1526)

```diff
-       varyingProcessor(VV, eV) {
-         return VV.replace("varying", eV ? "in" : "out")
+     }
+ 
+     function uh(HH, BH, LH, AH) {
+       const rH = [],
+         SH = Math.min(HH.length, 1e3);
+       let hH = 0;
+       for (; SH > hH && LH.remainingNodes > 0; hH++) try {
+         const SH = hH in HH ? HH[hH] : void 0;
+         if (mL(SH)) continue;
+         rH.push(Yh(SH, BH, LH, AH))
+       } catch (HH) {
+         rH.push({
+           stringValue: Lr
+         })
```

#### 83. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1528-L1538` → after: `L1732-L1832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1732-L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1732-L1832) · [Before (L1528-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1528-L1538)

```diff
-       postProcessor(VV, eV, xV) {
-         const JV = -1 !== VV.search(/#extension.+GL_EXT_draw_buffers.+require/);
-         if (VV = (VV = VV.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), xV) {
-           const xV = -1 !== VV.search(/layout *\(location *= *0\) *out/g),
-             YV = -1 !== eV.indexOf("#define DUAL_SOURCE_BLENDING"),
-             UV = YV ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
-           YV && (VV = "#extension GL_EXT_blend_func_extended : require\n" + VV), VV = (VV = (VV = (VV = (VV = (VV = (VV = VV.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_F … [truncated]
-         } else {
-           eV.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (VV = "invariant gl_Position;\n" + VV);
-           if (-1 !== eV.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + VV
-         }
+       return HH.length > hH && rH.push({
+         stringValue: Br
+       }), rH
+     }
+ 
+     function Qh(HH, BH, LH, AH) {
+       const rH = [];
+       for (const SH in HH)
+         if (Xh.call(HH, SH)) {
+           if (!SH) {
+             null == BH || BH.debug("Dropping an attribute with an empty key");
+             continue
+           }
+           if (rH.length >= 1e3 || 0 >= LH.remainingNodes) {
+             null == BH || BH.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
+             break
+ ... (85 more added lines; see GitHub link above)
```

#### 84. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1542-L1559` → after: `L1836-L1871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1836-L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1836-L1871) · [Before (L1542-L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1542-L1559)

```diff
-     var vV = xV(41176),
-       rV = xV(41190),
-       kV = xV(41198),
-       bV = xV(41077),
-       EV = xV(41134),
-       BV = xV(41113),
-       jV = xV(41201),
-       qV = xV(41161);
-     class tV {}
-     class FV extends UV.d {
-       get name() {
-         return this._name
-       }
-       set name(VV) {
-         this._name = VV
-       }
- ... (2 more removed lines; see GitHub link above)
+ 
+     function Vh(HH, BH, LH, AH) {
+       const rH = HH.level || "info",
+         {
+           text: SH,
+           number: hH
+         } = Ph[rH] || Th,
+         tH = function() {
+           let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
+           return String(HH) + "000000"
+         }(oL(AH) ? AH : void 0),
+         zH = {};
+       BH.distinctId && (zH.posthogDistinctId = BH.distinctId), BH.sessionId && (zH.sessionId = BH.sessionId), BH.windowId && (zH["window.id"] = BH.windowId), mL(BH.sessionStartTimestamp) || (zH.sessionStartTimestamp = String(BH.sessionStartTimestamp)), mL(BH.lastActivityTimestamp … [truncated]
+       const CH = xr({}, zH),
+         EH = HH.attributes;
+       if (EH) {
+ ... (20 more added lines; see GitHub link above)
```

#### 85. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1561-L1562` → after: `L1873-L1903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1873-L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1873-L1903) · [Before (L1561-L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1561-L1562)

```diff
-       static get ShadersRepository() {
-         return JV.c.ShadersRepository
+       const XH = {
+         timeUnixNano: tH,
+         observedTimeUnixNano: tH,
+         severityNumber: hH,
+         severityText: SH,
+         body: {
+           stringValue: Uh(HH.body)
+         },
+         attributes: Gh(CH, LH)
+       };
+       return HH.trace_id && (XH.traceId = HH.trace_id), HH.span_id && (XH.spanId = HH.span_id), VL(HH.trace_flags) || (XH.flags = HH.trace_flags), XH
+     }
+ 
+     function Oh(HH, BH, LH) {
+       return Wh(HH, BH, LH)
+     }
+ ... (15 more added lines; see GitHub link above)
```

#### 86. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1564-L1565` → after: `L1905-L1908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1905-L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1905-L1908) · [Before (L1564-L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1564-L1565)

```diff
-       static set ShadersRepository(VV) {
-         JV.c.ShadersRepository = VV
+     }
+     var kh = class {
+       constructor(HH) {
+         this._onFire = HH, this._firesAt = 0
```

#### 87. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1567-L1568` → after: `L1910-L1911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1910-L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1910-L1911) · [Before (L1567-L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1567-L1568)

```diff
-       get supportsUniformBuffers() {
-         return this.Nb > 1 && !this.disableUniformBuffers
+       get pending() {
+         return !!this._timer
```

#### 88. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1570-L1571` → after: `L1913-L1916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1913-L1916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1913-L1916) · [Before (L1570-L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1570-L1571)

```diff
-       get needPOTTextures() {
-         return this._webGLVersion < 2 || this.forcePOTTextures
+       arm(HH) {
+         this.clear(), this._firesAt = Date.now() + HH, this._timer = Gr((() => {
+           this._timer = void 0, this._onFire()
+         }), HH)
```

#### 89. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1573-L1574` → after: `L1918-L1919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1918-L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1918-L1919) · [Before (L1573-L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1573-L1574)

```diff
-       get _supportsHardwareTextureRescaling() {
-         return !1
+       armNoEarlierThan(HH) {
+         this._timer && Date.now() + HH <= this._firesAt || this.arm(HH)
```

#### 90. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1576-L1577` → after: `L1921-L1922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1921-L1922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1921-L1922) · [Before (L1576-L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1576-L1577)

```diff
-       snapshotRenderingReset() {
-         this.snapshotRendering = !1
+       clear() {
+         this._timer && (clearTimeout(this._timer), this._timer = void 0)
```

#### 91. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1579-L1817` → after: `L1924-L1940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1924-L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1924-L1940) · [Before (L1579-L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1579-L1817)

```diff
-       constructor(VV, eV, xV, JV) {
-         if (xV = xV || {}, super(eV ?? xV.antialias, xV, JV), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], th … [truncated]
-         let UV;
-         if (VV.getContext) {
-           if (UV = VV, void 0 === xV.preserveDrawingBuffer && (xV.preserveDrawingBuffer = !1), void 0 === xV.xrCompatible && (xV.xrCompatible = !1), navigator && navigator.userAgent) {
-             this._setupMobileChecks();
-             const VV = navigator.userAgent;
-             for (const eV of FV.ExceptionList) {
-               const JV = eV.key,
-                 YV = eV.targets;
-               if (new RegExp(JV).test(VV)) {
-                 if (eV.capture && eV.captureConstraint) {
-                   const xV = eV.capture,
-                     JV = eV.captureConstraint,
-                     YV = new RegExp(xV).exec(VV);
-                   if (YV && YV.length > 0) {
- ... (223 more removed lines; see GitHub link above)
+     };
+ 
+     function mh() {
+       return .75 + .5 * Math.random()
+     }
+ 
+     function oh(HH, BH, LH, AH) {
+       const rH = Math.min(Math.max(0, BH - 1), 6),
+         SH = HH * Math.pow(2, rH);
+       return Math.round((void 0 === AH ? SH : Math.min(SH, Math.max(AH, HH))) * LH)
+     }
+     var Ih = class {
+       constructor(HH, BH, LH, AH, rH) {
+         let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => Promise.resolve(),
+           hH = arguments.length > 6 ? arguments[6] : void 0;
+         var tH;
+ ... (1 more added lines; see GitHub link above)
```

#### 92. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1819-L1820` → after: `L1942-L1943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1942-L1943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1942-L1943) · [Before (L1819-L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1819-L1820)

```diff
-       get Nb() {
-         return this._webGLVersion
+       clearQueue() {
+         this._queueGeneration++, this._instance.setPersistedProperty(zL.LogsQueue, [])
```

#### 93. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1822-L1823` → after: `L1945-L1946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1945-L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1945-L1946) · [Before (L1822-L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1822-L1823)

```diff
-       getClassName() {
-         return "ThinEngine"
+       reset() {
+         this._flushTimer.clear(), this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.reset(), this._maxBatchRecordsPerPost = this._config.maxBatchRecordsPerPost
```

#### 94. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1825-L1829` → after: `L1948-L1949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1948-L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1948-L1949) · [Before (L1825-L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1825-L1829)

```diff
-       _prepareWorkingCanvas() {
-         if (this._workingCanvas) return;
-         this._workingCanvas = this.createCanvas(1, 1);
-         const VV = this._workingCanvas.getContext("2d");
-         VV && (this._workingContext = VV)
+       onReconnect() {
+         this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.isOpen() ? this._hasQueuedRecords() && this._armFlushTimer() : this._flushInBackground()
```

#### 95. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1831-L1832` → after: `L1951-L1963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1951-L1963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1951-L1963) · [Before (L1831-L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1831-L1832)

```diff
-       getInfo() {
-         return this.getGlInfo()
+       captureLog(HH, BH) {
+         var LH;
+         if (this._instance.isDisabled) return;
+         if (this._instance.optedOut) return;
+         if (!(null == HH ? void 0 : HH.body)) return;
+         const AH = this._runBeforeSend(HH);
+         if (null === AH) return;
+         if (!AH.body) return void this._logger.info("Log was rejected in beforeSend function");
+         if (!this._checkRateLimit()) return;
+         const rH = {
+           record: Vh(AH, null !== (LH = null == BH ? void 0 : BH.context) && void 0 !== LH ? LH : this._getContext(), this._logger, null == BH ? void 0 : BH.occurredAtMs)
+         };
+         this._onReady((() => this._enqueue(rH)))
```

#### 96. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1834-L1838` → after: `L1965-L1975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1965-L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1965-L1975) · [Before (L1834-L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1834-L1838)

```diff
-       getGlInfo() {
-         return {
-           vendor: this._glVendor,
-           renderer: this._glRenderer,
-           version: this._glVersion
+       _runBeforeSend(HH) {
+         const BH = this._config.beforeSend;
+         if (!BH) return HH;
+         const LH = vL(BH) ? BH : [BH];
+         let AH = HH;
+         for (const rH of LH) try {
+           const HH = rH(AH);
+           if (!HH) return this._logger.info("Log was rejected in beforeSend function"), null;
+           AH = HH
+         } catch (HH) {
+           return this._logger.error("Error in beforeSend function for log:", HH), null
```

#### 97. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1841-L1846` → after: `L1979-L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1979-L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1979-L1983) · [Before (L1841-L1846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1841-L1846)

```diff
-       extractDriverInfo() {
-         const VV = this.getGlInfo();
-         return VV && VV.renderer ? VV.renderer : ""
-       }
-       getRenderWidth() {
-         return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
+       _checkRateLimit() {
+         if (void 0 === this._maxLogsPerInterval) return !0;
+         const HH = Date.now(),
+           BH = HH - this._intervalWindowStart;
+         return this._rateCapWindowMs > BH && BH >= 0 || (this._intervalWindowStart = HH, this._intervalLogCount = 0, this._droppedWarned = !1), this._maxLogsPerInterval > this._intervalLogCount ? (this._intervalLogCount++, !0) : (this._droppedWarned || (this._logger.warn(`capture … [truncated]
```

#### 98. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1848-L1849` → after: `L1985-L1991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1985-L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1985-L1991) · [Before (L1848-L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1848-L1849)

```diff
-       getRenderHeight() {
-         return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
+       flush() {
+         var HH = this;
+         return DL((function*() {
+           if (!HH._instance.isDisabled) return HH._flushPromise || (HH._flushPromise = HH._flushInner().finally((() => {
+             HH._flushPromise = null
+           }))), HH._flushPromise
+         }))()
```

#### 99. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1851-L1863` → after: `L1993-L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1993-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L1993-L2014) · [Before (L1851-L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1851-L1863)

```diff
-       clear(VV, eV, xV) {
-         let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-           YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
-         const UV = this.stencilStateComposer.useStencilGlobalOnly;
-         this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = UV;
-         let yV = 0;
-         if (eV && VV) {
-           let eV = !0;
-           if (this._currentRenderTarget) {
-             const xV = this._currentRenderTarget.texture?.format;
-             if (void 0 !== xV && (0, jV.j)(xV)) {
-               const xV = this._currentRenderTarget.texture?.type;
-               void 0 !== xV && (0, jV.m)(xV) ? (FV._TempClearColorUint32[0] = 255 * VV.r, FV._TempClearColorUint32[1] = 255 * VV.g, FV._TempClearColorUint32[2] = 255 * VV.b, FV._TempClearColorUint32[3] = 255 * VV.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, FV._TempClearColorUin … [truncated]
+       _flushInner() {
+         var HH = this;
+         return DL((function*() {
+           var BH;
+           HH._flushTimer.clear();
+           let LH = null !== (BH = HH._instance.getPersistedProperty(zL.LogsQueue)) && void 0 !== BH ? BH : [];
+           if (0 === LH.length) return;
+           const AH = LH.length;
+           let rH = 0;
+           for (; LH.length > 0 && AH > rH;) {
+             var SH, hH;
+             const BH = HH._queueGeneration;
+             HH._evictedSinceAdvance = 0;
+             const AH = Math.min(LH.length, HH._maxBatchRecordsPerPost),
+               tH = LH.slice(0, AH),
+               zH = bh(tH.map((HH => HH.record)), HH._buildResourceAttributes(), null !== (SH = HH._scopeName) && void 0 !== SH ? SH : HH._instance.getLibraryId(), HH._instance.getLibraryVersion()),
+ ... (6 more added lines; see GitHub link above)
```

#### 100. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1866-L1879` → after: `L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2017) · [Before (L1866-L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1866-L1879)

```diff
-           eV && (this._gl.clearColor(VV.r, VV.g, VV.b, void 0 !== VV.a ? VV.a : 1), yV |= this._gl.COLOR_BUFFER_BIT)
-         }
-         xV && (this.zYV ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), yV |= this._gl.DEPTH_BUFFER_BIT), JV && (this._gl.clearStencil(YV), yV |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(yV)
-       }
-       _clearColorAttachment(VV, eV, xV, JV) {
-         if ((0, jV.j)(xV)) {
-           const xV = (0, jV.m)(JV),
-             YV = xV ? FV._TempClearColorUint32 : FV._TempClearColorInt32;
-           return YV[0] = eV.r, YV[1] = eV.g, YV[2] = eV.b, YV[3] = eV.a, void(xV ? this._gl.clearBufferuiv(this._gl.COLOR, VV, YV) : this._gl.clearBufferiv(this._gl.COLOR, VV, YV))
-         }
-         FV._TempClearColorFloat32[0] = eV.r, FV._TempClearColorFloat32[1] = eV.g, FV._TempClearColorFloat32[2] = eV.b, FV._TempClearColorFloat32[3] = eV.a, this._gl.clearBufferfv(this._gl.COLOR, VV, FV._TempClearColorFloat32)
-       }
-       _viewport(VV, eV, xV, JV) {
-         VV === this._viewportCached.x && eV === this._viewportCached.y && xV === this._viewportCached.z && JV === this._viewportCached.w || (this._viewportCached.x = VV, this._viewportCached.y = eV, this._viewportCached.z = xV, this._viewportCached.w = JV, this._gl.viewport(VV, e … [truncated]
+         }))()
```

#### 101. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1881-L1926` → after: `L2019-L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2019-L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2019-L2026) · [Before (L1881-L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1881-L1926)

```diff
-       GZ() {
-         super.GZ(), this._badOS && this.flushFramebuffer()
-       }
-       get performanceMonitor() {
-         throw new Error("Not Supported by ThinEngine")
-       }
-       bindFramebuffer(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           xV = arguments.length > 2 ? arguments[2] : void 0,
-           JV = arguments.length > 3 ? arguments[3] : void 0,
-           YV = arguments.length > 4 ? arguments[4] : void 0,
-           UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
-           yV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
-         const QV = VV;
-         this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = VV, this._integerMRTAttachmentsMask = !VV.isMulti && VV.texture && (0, jV.j)(VV.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(QV._frameb … [truncated]
-         const nV = this._gl;
- ... (30 more removed lines; see GitHub link above)
+       _persistQueueAdvance(HH) {
+         var BH = this;
+         return DL((function*() {
+           var LH;
+           const AH = Math.max(0, HH - BH._evictedSinceAdvance),
+             rH = null !== (LH = BH._instance.getPersistedProperty(zL.LogsQueue)) && void 0 !== LH ? LH : [];
+           BH._instance.setPersistedProperty(zL.LogsQueue, rH.slice(AH)), yield BH._waitForStoragePersist()
+         }))()
```

#### 102. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1928-L1929` → after: `L2028-L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2028-L2029) · [Before (L1928-L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1928-L1929)

```diff
-       _currentFrameBufferIsDefaultFrameBuffer() {
-         return null === this._currentFramebuffer
+       _buildResourceAttributes() {
+         return Oh(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion())
```

#### 103. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1931-L1933` → after: `L2031-L2035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2031-L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2031-L2035) · [Before (L1931-L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1931-L1933)

```diff
-       generateMipmaps(VV) {
-         const eV = this._getTextureTarget(VV);
-         this._bindTextureDirectly(eV, VV, !0), this._gl.generateMipmap(eV), this._bindTextureDirectly(eV, null)
+       _enqueue(HH) {
+         var BH;
+         if (this._instance.optedOut) return;
+         const LH = null !== (BH = this._instance.getPersistedProperty(zL.LogsQueue)) && void 0 !== BH ? BH : [];
+         this._maxQueueSize > LH.length || (LH.shift(), this._evictedSinceAdvance++, this._logger.info("Logs queue is full, dropping oldest record.")), LH.push(HH), this._instance.setPersistedProperty(zL.LogsQueue, LH), this._maxBufferSize > LH.length || this._retryAfter.isOpen()  … [truncated]
```

#### 104. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1935-L1937` → after: `L2037-L2038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2037-L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2037-L2038) · [Before (L1935-L1937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1935-L1937)

```diff
-       unBindFramebuffer(VV, eV, xV) {
-         const JV = VV;
-         this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(VV, eV), xV && (JV._MSAAFramebuffer && this._bindUnboundFramebuffer(JV._framebuffer), xV()), this._bindUnboundFramebuffer(null)
+       _armFlushTimer() {
+         this._flushTimer.pending || this._flushTimer.arm(Math.max(this._flushIntervalMs, this._retryAfter.remainingMs()))
```

#### 105. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1939-L1940` → after: `L2040-L2041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2040-L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2040-L2041) · [Before (L1939-L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1939-L1940)

```diff
-       generateMipMapsFramebuffer(VV) {
-         VV.isMulti || !VV.texture?.generateMipMaps || VV.isCube || this.generateMipmaps(VV.texture)
+       _nextFlushDelay() {
+         return Math.max(oh(this._flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
```

#### 106. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1942-L1947` → after: `L2043-L2045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2043-L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2043-L2045) · [Before (L1942-L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1942-L1947)

```diff
-       resolveFramebuffer(VV) {
-         const eV = VV,
-           xV = this._gl;
-         if (!eV._MSAAFramebuffer || eV.isMulti) return;
-         let JV = eV.resolveMSAAColors ? xV.COLOR_BUFFER_BIT : 0;
-         JV |= eV._generateDepthBuffer && eV.resolveMSAADepth ? xV.DEPTH_BUFFER_BIT : 0, JV |= eV._generateStencilBuffer && eV.resolveMSAAStencil ? xV.STENCIL_BUFFER_BIT : 0, xV.bindFramebuffer(xV.READ_FRAMEBUFFER, eV._MSAAFramebuffer), xV.bindFramebuffer(xV.DRAW_FRAMEBUFFER, eV._ … [truncated]
+       _hasQueuedRecords() {
+         const HH = this._instance.getPersistedProperty(zL.LogsQueue);
+         return !!HH && HH.length > 0
```

#### 107. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1949-L1950` → after: `L2047-L2053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2047-L2053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2047-L2053) · [Before (L1949-L1950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1949-L1950)

```diff
-       flushFramebuffer() {
-         this._gl.flush()
+       shutdown(HH) {
+         var BH = this;
+         return DL((function*() {
+           BH._flushTimer.clear();
+           const LH = BH.flush().catch((() => {}));
+           void 0 !== HH ? yield Yr(LH, HH): yield LH
+         }))()
```

#### 108. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1952-L1953` → after: `L2055-L2071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2055-L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2055-L2071) · [Before (L1952-L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1952-L1953)

```diff
-       restoreDefaultFramebuffer() {
-         this._currentRenderTarget ? this.unBindFramebuffer(this._currentRenderTarget) : this._bindUnboundFramebuffer(null), this._cachedViewport && this.setViewport(this._cachedViewport), this.wipeCaches()
+       flushWithTimeout(HH) {
+         var BH = this;
+         return DL((function*() {
+           const LH = BH.flush();
+           yield Yr(LH, HH, (() => {
+             LH.catch((() => {}))
+           }))
+         }))()
+       }
+       _flushInBackground() {
+         this.flush().then((() => {
+           this._consecutiveFlushFailures = 0, this._flushJitter = 1
+         }), (HH => {
+           this._consecutiveFlushFailures++, this._flushJitter = mh(), this._logger.error("PostHog logs flush failed:", HH)
+         })).finally((() => {
+           !this._instance.isDisabled && this._hasQueuedRecords() && this._flushTimer.armNoEarlierThan(this._nextFlushDelay())
+ ... (1 more added lines; see GitHub link above)
```

#### 109. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1955-L1956` → after: `L2073-L2088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2073-L2088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2073-L2088) · [Before (L1955-L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1955-L1956)

```diff
-       _resetVertexBufferBinding() {
-         this.bindArrayBuffer(null), this._cachedVertexBuffers = null
+     };
+     const fh = [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1e3, 2500, 5e3, 7500, 1e4];
+ 
+     function lh(HH) {
+       return String(HH) + "000000"
+     }
+ 
+     function Kh(HH, BH, LH, AH) {
+       let rH = "";
+       return AH && (rH = Object.keys(AH).sort().map((HH => `${JSON.stringify(HH)}:${JSON.stringify(AH[HH])}`)).join(",")), `${HH}\0${BH}\0${null!=LH?LH:""}\0${rH}`
+     }
+     var ch = class {
+       constructor(HH, BH, LH) {
+         this._instance = HH, this._config = BH, this._logger = LH, this._series = new Map, this._flushTimer = new kh((() => this.flush().catch((HH => {
+           this._logger.error("Metrics flush failed:", HH)
+         })))), this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._retryAfter = new hr, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._generation = 0
```

#### 110. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1958-L1959` → after: `L2090-L2099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2090-L2099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2090-L2099) · [Before (L1958-L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1958-L1959)

```diff
-       createVertexBuffer(VV, eV, xV) {
-         return this._createVertexBuffer(VV, this._gl.STATIC_DRAW)
+       count(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           LH = arguments.length > 2 ? arguments[2] : void 0;
+         this._capture({
+           name: HH,
+           type: "count",
+           value: BH,
+           unit: null == LH ? void 0 : LH.unit,
+           attributes: null == LH ? void 0 : LH.attributes
+         })
```

#### 111. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1961-L1965` → after: `L2101-L2108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2101-L2108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2101-L2108) · [Before (L1961-L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1961-L1965)

```diff
-       _createVertexBuffer(VV, eV) {
-         const xV = this._gl.createBuffer();
-         if (!xV) throw new Error("Unable to create vertex buffer");
-         const JV = new vV.b(xV);
-         return this.bindArrayBuffer(JV), "number" !== typeof VV ? VV instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(VV), eV), JV.Jv = 4 * VV.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, VV, eV), JV.Jv = VV.byteLength) : (this._gl.bufferDa … [truncated]
+       gauge(HH, BH, LH) {
+         this._capture({
+           name: HH,
+           type: "gauge",
+           value: BH,
+           unit: null == LH ? void 0 : LH.unit,
+           attributes: null == LH ? void 0 : LH.attributes
+         })
```

#### 112. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1967-L1968` → after: `L2110-L2117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2110-L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2110-L2117) · [Before (L1967-L1968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1967-L1968)

```diff
-       createDynamicVertexBuffer(VV, eV) {
-         return this._createVertexBuffer(VV, this._gl.DYNAMIC_DRAW)
+       histogram(HH, BH, LH) {
+         this._capture({
+           name: HH,
+           type: "histogram",
+           value: BH,
+           unit: null == LH ? void 0 : LH.unit,
+           attributes: null == LH ? void 0 : LH.attributes
+         })
```

#### 113. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1970-L1971` → after: `L2119-L2132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2119-L2132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2119-L2132) · [Before (L1970-L1971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1970-L1971)

```diff
-       _resetIndexBufferBinding() {
-         this.bindIndexBuffer(null), this._cachedIndexBuffer = null
+       flush() {
+         var HH = this;
+         const BH = this._flushPromise,
+           LH = function() {
+             var LH = DL((function*() {
+               BH && (yield BH.catch((() => {}))), yield HH._doFlush()
+             }));
+             return function() {
+               return LH.apply(this, arguments)
+             }
+           }()().finally((() => {
+             this._flushPromise === LH && (this._flushPromise = null)
+           }));
+         return this._flushPromise = LH, LH
```

#### 114. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1973-L1979` → after: `L2134-L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2134-L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2134-L2137) · [Before (L1973-L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1973-L1979)

```diff
-       createIndexBuffer(VV, eV, xV) {
-         const JV = this._gl.createBuffer(),
-           YV = new vV.b(JV);
-         if (!JV) throw new Error("Unable to create index buffer");
-         this.bindIndexBuffer(YV);
-         const UV = this._normalizeIndexData(VV);
-         return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, UV, eV ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), YV.references = 1, YV.is32Bits = 4 === UV.BYTES_PER_ELEMENT, YV
+       drainWindow() {
+         if (0 === this._series.size) return null;
+         const HH = this._series;
+         return this._series = new Map, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._buildPayload(HH)
```

#### 115. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1981-L1987` → after: `L2139-L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2139-L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2139-L2153) · [Before (L1981-L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1981-L1987)

```diff
-       _normalizeIndexData(VV) {
-         if (2 === VV.BYTES_PER_ELEMENT) return VV;
-         if (this._caps.uintIndices) {
-           if (VV instanceof Uint32Array) return VV;
-           for (let eV = 0; eV < VV.length; eV++)
-             if (VV[eV] >= 65535) return new Uint32Array(VV);
-           return new Uint16Array(VV)
+       reset() {
+         this._generation++, this._retryAfter.reset(), this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._flushTimer.clear(), this._series = new Map, this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Se … [truncated]
+       }
+       _capture(HH) {
+         if (this._instance.isDisabled || this._instance.optedOut) return;
+         const BH = this._runBeforeSend(HH);
+         if (null === BH) return;
+         if (!BH.name || "string" != typeof BH.name) return void this._logger.warn("Dropping metric with empty name");
+         if ("number" != typeof BH.value || !Number.isFinite(BH.value)) return void this._logger.warn(`Dropping metric '${BH.name}': value must be a finite number`);
+         if ("count" === BH.type && 0 > BH.value) return void this._logger.warn(`Dropping count '${BH.name}': counters are monotonic, value must be >= 0`);
+         let LH, AH;
+         try {
+           LH = BH.attributes ? xr({}, BH.attributes) : void 0, AH = Kh(BH.type, BH.name, BH.unit, LH)
+         } catch (HH) {
+           return void this._logger.warn(`Dropping metric '${BH.name}': attributes could not be serialized`, HH)
```

#### 116. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1989-L2028` → after: `L2155-L2195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2155-L2195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2155-L2195) · [Before (L1989-L2028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L1989-L2028)

```diff
-         return new Uint16Array(VV)
-       }
-       bindArrayBuffer(VV) {
-         this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(VV, this._gl.ARRAY_BUFFER)
-       }
-       bindUniformBlock(VV, eV, xV) {
-         const JV = VV.program,
-           YV = this._gl.getUniformBlockIndex(JV, eV);
-         this._gl.uniformBlockBinding(JV, YV, xV)
-       }
-       bindIndexBuffer(VV) {
-         this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(VV, this._gl.ELEMENT_ARRAY_BUFFER)
-       }
-       _bindBuffer(VV, eV) {
-         (this._vaoRecordInProgress || this._currentBoundBuffer[eV] !== VV) && (this._gl.bindBuffer(eV, VV ? VV.underlyingResource : null), this._currentBoundBuffer[eV] = VV)
-       }
- ... (24 more removed lines; see GitHub link above)
+         let rH = this._series.get(AH);
+         if (!rH) {
+           if (!this._admitNewSeries()) return;
+           rH = {
+             name: BH.name,
+             type: BH.type,
+             unit: BH.unit,
+             attributes: LH,
+             windowStartMs: Date.now()
+           }, this._series.set(AH, rH)
+         }
+         const SH = this._typeByName.get(BH.name);
+         void 0 === SH ? this._typeByName.set(BH.name, BH.type) : SH === BH.type || this._typeCollisionWarned.has(BH.name) || (this._typeCollisionWarned.add(BH.name), this._logger.warn(`Metric name '${BH.name}' is already used as a ${SH}; recording it as a ${BH.type} too will blen … [truncated]
+       }
+       _admitNewSeries() {
+         return this._config.maxSeriesPerFlush > this._series.size || (this._seriesCapWarned || (this._seriesCapWarned = !0, this._logger.warn(`Metric series cap reached (${this._config.maxSeriesPerFlush} per flush window); dropping new series until the next flush. Reduce attribut … [truncated]
+ ... (25 more added lines; see GitHub link above)
```

#### 117. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2032-L2050` → after: `L2199-L2209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2199-L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2199-L2209) · [Before (L2032-L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L2032-L2050)

```diff
-       recordVertexArrayObject(VV, eV, xV, JV) {
-         const YV = this._gl.createVertexArray();
-         if (!YV) throw new Error("Unable to create VAO");
-         return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(YV), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(VV, xV, JV), this.bindIndexBuffer(eV), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), YV
-       }
-       bindVertexArrayObject(VV, eV) {
-         this._cachedVertexArrayObject !== VV && (this._cachedVertexArrayObject = VV, this._gl.bindVertexArray(VV), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != eV && eV.is32Bits, this._mustWipeVertexAttributes = !0)
-       }
-       bindBuffersDirectly(VV, eV, xV, JV, YV) {
-         if (this._cachedVertexBuffers !== VV || this._cachedEffectForVertexBuffers !== YV) {
-           this._cachedVertexBuffers = VV, this._cachedEffectForVertexBuffers = YV;
-           const eV = YV.getAttributesCount();
-           this._unbindVertexArrayObject(), this.unbindAllAttributes();
-           let UV = 0;
-           for (let yV = 0; yV < eV; yV++)
-             if (yV < xV.length) {
- ... (3 more removed lines; see GitHub link above)
+       _runBeforeSend(HH) {
+         const BH = this._config.beforeSend;
+         if (!BH) return HH;
+         const LH = vL(BH) ? BH : [BH];
+         let AH = HH;
+         for (const rH of LH) try {
+           const HH = rH(AH);
+           if (!HH) return this._logger.info("Metric was rejected in beforeSend function"), null;
+           AH = HH
+         } catch (HH) {
+           return this._logger.error("Error in beforeSend function for metric:", HH), null
```

#### 118. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2052` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2211) · [Before (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L2052)

```diff
-         this._bindIndexBufferWithCache(eV)
+         return AH
```

#### 119. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2054-L2055` → after: `L2213-L2214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2213-L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2213-L2214) · [Before (L2054-L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L2054-L2055)

```diff
-       _unbindVertexArrayObject() {
-         this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
+       _armFlushTimer() {
+         this._flushTimer.pending || this._flushTimer.arm(this._nextFlushDelay())
```

#### 120. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2057-L2058` → after: `L2216-L2217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2216-L2217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2216-L2217) · [Before (L2057-L2058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L2057-L2058)

```diff
-       bindBuffers(VV, eV, xV, JV) {
-         this._cachedVertexBuffers === VV && this._cachedEffectForVertexBuffers === xV || (this._cachedVertexBuffers = VV, this._cachedEffectForVertexBuffers = xV, this._bindVertexBuffersAttributes(VV, xV, JV)), this._bindIndexBufferWithCache(eV)
+       _nextFlushDelay() {
+         return Math.max(oh(this._config.flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
```

#### 121. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2060-L2066` → after: `L2219-L2308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2219-L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2219-L2308) · [Before (L2060-L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L2060-L2066)

```diff
-       unbindInstanceAttributes() {
-         let VV;
-         for (let eV = 0, xV = this._currentInstanceLocations.length; eV < xV; eV++) {
-           const xV = this._currentInstanceBuffers[eV];
-           VV != xV && xV.references && (VV = xV, this.bindArrayBuffer(xV));
-           const JV = this._currentInstanceLocations[eV];
-           this._gl.vertexAttribDivisor(JV, 0)
+       _doFlush() {
+         var HH = this;
+         return DL((function*() {
+           if (HH._flushTimer.clear(), 0 === HH._series.size) return;
+           const BH = HH._series;
+           HH._series = new Map, HH._seriesCapWarned = !1, HH._typeByName = new Map, HH._typeCollisionWarned = new Set;
+           const LH = HH._generation,
+             AH = yield HH._instance._sendMetricsBatch(HH._buildPayload(BH));
+           if (LH === HH._generation) switch (HH._retryAfter.record(AH), "retry-later" === AH.kind ? (HH._consecutiveFlushFailures++, HH._flushJitter = mh()) : (HH._consecutiveFlushFailures = 0, HH._flushJitter = 1), HH._flushTimer.pending && HH._flushTimer.arm(HH._nextFlushDelay( … [truncated]
+             case "ok":
+               return;
+             case "retry-later":
+               return HH._mergeWindowBack(BH), void HH._flushTimer.armNoEarlierThan(HH._nextFlushDelay());
+             case "too-large":
+               return void HH._logger.warn("Metrics batch exceeded the server size limit and was dropped");
+             case "fatal":
+ ... (74 more added lines; see GitHub link above)
```

#### 122. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2068-L2071` → after: `L2310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2310) · [Before (L2068-L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L2068-L2071)

```diff
-         this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
-       }
-       releaseVertexArrayObject(VV) {
-         this._gl.deleteVertexArray(VV)
+         return Array.from(LH.values())
```

#### 123. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2073-L2077` → after: `L2312-L2329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2312-L2329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2312-L2329) · [Before (L2073-L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L2073-L2077)

```diff
-       _releaseBuffer(VV) {
-         return VV.references--, 0 === VV.references && (this._deleteBuffer(VV), !0)
-       }
-       _deleteBuffer(VV) {
-         this._gl.deleteBuffer(VV.underlyingResource)
+       _mergeWindowBack(HH) {
+         for (const [AH, rH] of HH) {
+           const HH = this._series.get(AH);
+           if (HH) switch (HH.windowStartMs = Math.min(HH.windowStartMs, rH.windowStartMs), HH.type) {
+             case "count":
+               var BH, LH;
+               HH.total = (null !== (BH = HH.total) && void 0 !== BH ? BH : 0) + (null !== (LH = rH.total) && void 0 !== LH ? LH : 0);
+               break;
+             case "gauge":
+               break;
+             case "histogram":
+               if (rH.hist)
+                 if (HH.hist) {
+                   HH.hist.count += rH.hist.count, HH.hist.sum += rH.hist.sum, HH.hist.min = Math.min(HH.hist.min, rH.hist.min), HH.hist.max = Math.max(HH.hist.max, rH.hist.max);
+                   for (let BH = 0; HH.hist.bucketCounts.length > BH; BH++) HH.hist.bucketCounts[BH] += rH.hist.bucketCounts[BH]
+                 } else HH.hist = rH.hist
+ ... (2 more added lines; see GitHub link above)
```

#### 124. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2079-L2084` → after: `L2331-L2460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2331-L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2331-L2460) · [Before (L2079-L2084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L2079-L2084)

```diff
-       updateAndBindInstancesBuffer(VV, eV, xV) {
-         if (this.bindArrayBuffer(VV), eV && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, eV), void 0 !== xV[0].index) this.bindInstancesBuffer(VV, xV, !0);
-         else
-           for (let JV = 0; JV < 4; JV++) {
-             const eV = xV[JV];
-             this._vertexAttribArraysEnabled[eV] || (this._gl.enableVertexAttribArray(eV), this._vertexAttribArraysEnabled[eV] = !0), this._vertexAttribPointer(VV, eV, 4, this._gl.FLOAT, !1, 64, 16 * JV), this._gl.vertexAttribDivisor(eV, 1), this._currentInstanceLocations.push(eV) … [truncated]
+     };
+     const eh = function(HH) {
+         let {
+           debugEnabled: BH
+         } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         const LH = {
+           _log(LH) {
+             let AH;
+             try {
+               AH = typeof window > "u" ? void 0 : window
+             } catch (HH) {
+               return
+             }
+             for (var SH = arguments.length, hH = new Array(SH > 1 ? SH - 1 : 0), tH = 1; tH < SH; tH++) hH[tH - 1] = arguments[tH];
+             AH && (rH.DEBUG || AH.POSTHOG_DEBUG || BH) && !VL(AH.console) && AH.console && ("__rrweb_original__" in AH.console[LH] ? AH.console[LH].__rrweb_original__ : AH.console[LH])(HH, ...hH)
+           },
+ ... (114 more added lines; see GitHub link above)
```

#### 125. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2087-L2093` → after: `L2465-L2495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2465-L2495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2465-L2495) · [Before (L2087-L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L2087-L2093)

```diff
-       bindInstancesBuffer(VV, eV) {
-         let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-         this.bindArrayBuffer(VV);
-         let JV = 0;
-         if (xV)
-           for (let YV = 0; YV < eV.length; YV++) {
-             JV += 4 * eV[YV].attributeSize
+     };
+     Math.trunc || (Math.trunc = function(HH) {
+       return 0 > HH ? Math.ceil(HH) : Math.floor(HH)
+     }), Number.isInteger || (Number.isInteger = function(HH) {
+       return oL(HH) && isFinite(HH) && Math.floor(HH) === HH
+     });
+     var ih = class HH {
+         constructor(HH) {
+           if (this.bytes = HH, 16 !== HH.length) throw new TypeError("not 128-bit length")
+         }
+         static fromFieldsV7(BH, LH, AH, rH) {
+           if (!Number.isInteger(BH) || !Number.isInteger(LH) || !Number.isInteger(AH) || !Number.isInteger(rH) || 0 > BH || 0 > LH || 0 > AH || 0 > rH || BH > 0xffffffffffff || LH > 4095 || AH > 1073741823 || rH > 4294967295) throw new RangeError("invalid field value");
+           const SH = new Uint8Array(16);
+           return SH[0] = BH / Math.pow(2, 40), SH[1] = BH / Math.pow(2, 32), SH[2] = BH / Math.pow(2, 24), SH[3] = BH / Math.pow(2, 16), SH[4] = BH / 256, SH[5] = BH, SH[6] = 112 | LH >>> 8, SH[7] = LH, SH[8] = 128 | AH >>> 24, SH[9] = AH >>> 16, SH[10] = AH >>> 8, SH[11] = AH, S … [truncated]
+         }
+         toString() {
+ ... (15 more added lines; see GitHub link above)
```

#### 126. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2095-L2097` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2497) · [Before (L2095-L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L2095-L2097)

```diff
-         for (let YV = 0; YV < eV.length; YV++) {
-           const xV = eV[YV];
-           void 0 === xV.index && (xV.index = this._currentEffect.getAttributeLocationByName(xV.attributeName)), xV.index < 0 || (this._vertexAttribArraysEnabled[xV.index] || (this._gl.enableVertexAttribArray(xV.index), this._vertexAttribArraysEnabled[xV.index] = !0), this._vertex … [truncated]
+           return 0
```

#### 127. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2099-L2203` → after: `L2499-L2521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2499-L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2499-L2521) · [Before (L2099-L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L2099-L2203)

```diff
-       }
-       disableInstanceAttributeByName(VV) {
-         if (!this._currentEffect) return;
-         const eV = this._currentEffect.getAttributeLocationByName(VV);
-         this.disableInstanceAttribute(eV)
-       }
-       disableInstanceAttribute(VV) {
-         let eV, xV = !1;
-         for (; - 1 !== (eV = this._currentInstanceLocations.indexOf(VV));) this._currentInstanceLocations.splice(eV, 1), this._currentInstanceBuffers.splice(eV, 1), xV = !0;
-         xV && (this._gl.vertexAttribDivisor(VV, 0), this.disableAttributeByIndex(VV))
-       }
-       disableAttributeByIndex(VV) {
-         this._gl.disableVertexAttribArray(VV), this._vertexAttribArraysEnabled[VV] = !1, this._currentBufferPointers[VV].active = !1
-       }
-       draw(VV, eV, xV, JV) {
-         this.drawElementsType(VV ? 0 : 1, eV, xV, JV)
- ... (89 more removed lines; see GitHub link above)
+       },
+       ph = class {
+         generate() {
+           const HH = this.generateOrAbort();
+           if (!VL(HH)) return HH;
+           {
+             this._timestamp = 0;
+             const HH = this.generateOrAbort();
+             if (VL(HH)) throw new Error("Could not generate UUID after timestamp reset");
+             return HH
+           }
+         }
+         generateOrAbort() {
+           const HH = (() => {
+             const HH = Date.now();
+             return oL(HH) && isFinite(HH) ? Math.min(Math.max(Math.floor(HH), 0), 0xffffffffffff) : 0
+ ... (7 more added lines; see GitHub link above)
```

#### 128. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2205-L2225` → after: `L2523-L2538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2523-L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2523-L2538) · [Before (L2205-L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L2205-L2225)

```diff
-         const eV = (0, YV.o)(this._gl, VV);
-         return eV.engine = this, eV
-       }
-       createMaterialContext() {}
-       createDrawContext() {}
-       _finalizePipelineContext(VV) {
-         return (0, YV.h)(VV, this._gl, this.validateShaderPrograms)
-       }
-       _preparePipelineContextAsync(VV, eV, xV, JV, UV, yV, pV, QV, nV, wV, ZV) {
-         const vV = (0, YV.y)(this._gl);
-         return vV._contextWasLost = this._contextWasLost, vV.validateShaderPrograms = this.validateShaderPrograms, vV._createShaderProgramInjection = this._createShaderProgram.bind(this), vV.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), vV.createShader … [truncated]
-       }
-       _createShaderProgram(VV, eV, xV, JV) {
-         let UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-         return (0, YV.b)(VV, eV, xV, JV, UV)
-       }
- ... (5 more removed lines; see GitHub link above)
+         _resetCounter() {
+           this._counter = 1024 * this._random.nextUint32() + (1023 & this._random.nextUint32())
+         }
+         constructor() {
+           this._timestamp = 0, this._counter = 0, this._random = new Ht
+         }
+       };
+     let yh = HH => {
+       if ("u" > typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
+       for (let BH = 0; HH.length > BH; BH++) HH[BH] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
+       return HH
+     };
+     JB && !VL(JB.crypto) && crypto.getRandomValues && (yh = HH => crypto.getRandomValues(HH));
+     var Ht = class {
+       nextUint32() {
+         return this._buffer.length > this._cursor || (yh(this._buffer), this._cursor = 0), this._buffer[this._cursor++]
```

#### 129. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2227-L2231` → after: `L2540-L2541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2540-L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2540-L2541) · [Before (L2227-L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L2227-L2231)

```diff
-       getUniforms(VV, eV) {
-         const xV = new Array,
-           JV = VV;
-         for (let YV = 0; YV < eV.length; YV++) xV.push(this._gl.getUniformLocation(JV.program, eV[YV]));
-         return xV
+       constructor() {
+         this._buffer = new Uint32Array(8), this._cursor = 1 / 0
```

#### 130. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2233-L2237` → after: `L2543-L2555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2543-L2555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2543-L2555) · [Before (L2233-L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L2233-L2237)

```diff
-       getAttributes(VV, eV) {
-         const xV = [],
-           JV = VV;
-         for (let UV = 0; UV < eV.length; UV++) try {
-           xV.push(this._gl.getAttribLocation(JV.program, eV[UV]))
+     };
+     let Bt;
+     const Lt = () => At().toString(),
+       At = () => (Bt || (Bt = new ph)).generate();
+     let rt = "";
+     const St = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
+     let ht = null;
+     const tt = {
+       _is_supported() {
+         if (!kL(ht)) return ht;
+         if (ht = !1, yB) try {
+           const HH = `__ph_cookie_support_${Lt()}`;
+           tt._set(HH, "xyz"), ht = '"xyz"' === Jh(HH), tt._remove(HH)
```

#### 131. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2239` → after: `L2557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2557) · [Before (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L2239)

```diff
-           xV.push(-1)
+           ht = !1
```

#### 132. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2243-L2467` → after: `L2623-L2645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2623-L2645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2623-L2645) · [Before (L2243-L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L2243-L2467)

```diff
-       enableEffect(VV) {
-         (VV = null !== VV && (0, yV.e)(VV) ? VV.effect : VV) && VV !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(VV), this._currentEffect = VV, VV.onBind && VV.onBind(VV), VV._onBindObservable && VV._onBindObservable.notifyObse … [truncated]
-       }
-       setInt(VV, eV) {
-         return !!VV && (this._gl.uniform1i(VV, eV), !0)
-       }
-       setInt2(VV, eV, xV) {
-         return !!VV && (this._gl.uniform2i(VV, eV, xV), !0)
-       }
-       setInt3(VV, eV, xV, JV) {
-         return !!VV && (this._gl.uniform3i(VV, eV, xV, JV), !0)
-       }
-       setInt4(VV, eV, xV, JV, YV) {
-         return !!VV && (this._gl.uniform4i(VV, eV, xV, JV, YV), !0)
-       }
-       setIntArray(VV, eV) {
- ... (209 more removed lines; see GitHub link above)
+     };
+     let zt = null;
+     const Ct = {
+         _is_supported() {
+           if (!kL(zt)) return zt;
+           let HH = !0;
+           if (VL(JB)) HH = !1;
+           else try {
+             const BH = "__mplssupport__";
+             Ct._set(BH, "xyz"), '"xyz"' !== Ct._get(BH) && (HH = !1), Ct._remove(BH)
+           } catch (rH) {
+             HH = !1
+           }
+           return HH || qh.error("localStorage unsupported; falling back to cookie store"), zt = HH, HH
+         },
+         _error(HH) {
+ ... (7 more added lines; see GitHub link above)
```

#### 133. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2469-L2739` → after: `L2647-L2659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2647-L2659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2647-L2659) · [Before (L2469-L2739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L2469-L2739)

```diff
-           return !0
-         }), QV, nV, wV, ZV, vV, rV, EV)
-       }
-       _getTexImageParametersForCreateTexture(VV, eV) {
-         let xV, JV;
-         return 1 === this.Nb ? (xV = this._getInternalFormat(VV, eV), JV = xV) : (xV = this._getInternalFormat(VV, !1), JV = this._getRGBABufferInternalSizedFormat(0, VV, eV)), {
-           internalFormat: JV,
-           format: xV,
-           type: this._gl.UNSIGNED_BYTE
-         }
-       }
-       _rescaleTexture(VV, eV, xV, JV, YV) {}
-       _unpackFlipY(VV) {
-         this._unpackFlipYCached !== VV && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, VV ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = VV))
-       }
-       _getUnpackAlignement() {
- ... (255 more removed lines; see GitHub link above)
+           return null
+         },
+         _parse(HH) {
+           try {
+             return JSON.parse(Ct._get(HH)) || {}
+           } catch (HH) {}
+           return null
+         },
+         _set(HH, BH) {
+           try {
+             return null == JB || JB.localStorage.setItem(HH, JSON.stringify(BH)), !0
+           } catch (HH) {
+             Ct._error(HH)
```

#### 134. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2741-L2750` → after: `L2661-L2718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2661-L2718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2661-L2718) · [Before (L2741-L2750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L2741-L2750)

```diff
-           xV._cachedWrapU !== eV.wrapU && (xV._cachedWrapU = eV.wrapU, this._setTextureParameterInteger(yV, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(eV.wrapU), xV)), xV._cachedWrapV !== eV.wrapV && (xV._cachedWrapV = eV.wrapV, this._setTextureParameterInteger(yV, this._g … [truncated]
-         }
-         return !0
-       }
-       setTextureArray(VV, eV, xV, JV) {
-         if (void 0 !== VV && eV) {
-           this._textureUnits && this._textureUnits.length === xV.length || (this._textureUnits = new Int32Array(xV.length));
-           for (let eV = 0; eV < xV.length; eV++) {
-             const JV = xV[eV].getInternalTexture();
-             JV ? (this._textureUnits[eV] = VV + eV, JV._associatedChannel = VV + eV) : this._textureUnits[eV] = -1
+           return !1
+         },
+         _remove(HH) {
+           try {
+             null == JB || JB.localStorage.removeItem(HH)
+           } catch (HH) {
+             Ct._error(HH)
+           }
+         }
+       },
+       Et = [QH, tH, YH, zH, xH, XH, EH, CH, WH],
+       Xt = [OH, VH, pH, yH, OB, VB, IH, xB],
+       Gt = HH => HH + "_cpm",
+       Yt = ["__proto__", "constructor", "prototype"],
+       ut = HH => {
+         if (!TL(HH)) return {};
+ ... (42 more added lines; see GitHub link above)
```

#### 135. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2755-L2829` → after: `L2721-L2733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2721-L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2721-L2733) · [Before (L2755-L2829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L2755-L2829)

```diff
-       }
-       _setAnisotropicLevel(VV, eV, xV) {
-         const JV = this._caps.textureAnisotropicFilterExtension;
-         11 !== eV.samplingMode && 3 !== eV.samplingMode && 2 !== eV.samplingMode && (xV = 1), JV && eV._cachedAnisotropicFilteringLevel !== xV && (this._setTextureParameterFloat(VV, JV.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(xV, this._caps.maxAnisotropy), eV), eV._cachedAnisotropicF … [truncated]
-       }
-       _setTextureParameterFloat(VV, eV, xV, JV) {
-         this._bindTextureDirectly(VV, JV, !0, !0), this._gl.texParameterf(VV, eV, xV)
-       }
-       _setTextureParameterInteger(VV, eV, xV, JV) {
-         JV && this._bindTextureDirectly(VV, JV, !0, !0), this._gl.texParameteri(VV, eV, xV)
-       }
-       unbindAllAttributes() {
-         if (this._mustWipeVertexAttributes) {
-           this._mustWipeVertexAttributes = !1;
-           for (let VV = 0; VV < this._caps.maxVertexAttribs; VV++) this.disableAttributeByIndex(VV)
-         } else
- ... (59 more removed lines; see GitHub link above)
+       },
+       vt = (HH, BH) => BH + "|" + (tt._get(Gt(HH)) || ""),
+       Pt = {},
+       Tt = {
+         _is_supported: () => !0,
+         _error(HH) {
+           qh.error("memoryStorage error: " + HH)
+         },
+         _get: HH => HH in Pt ? Pt[HH] : null,
+         _parse: HH => HH in Pt ? Pt[HH] : null,
+         _set: (HH, BH) => (Pt[HH] = BH, !0),
+         _remove(HH) {
+           delete Pt[HH]
```

#### 136. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2831-L2911` → after: `L2735-L2745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2735-L2745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2735-L2745) · [Before (L2831-L2911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L2831-L2911)

```diff
-         switch (VV) {
-           case 3:
-             return this._gl.BYTE;
-           case 0:
-             return this._gl.UNSIGNED_BYTE;
-           case 4:
-             return this._gl.SHORT;
-           case 5:
-             return this._gl.UNSIGNED_SHORT;
-           case 6:
-             return this._gl.INT;
-           case 7:
-             return this._gl.UNSIGNED_INT;
-           case 1:
-             return this._gl.FLOAT;
-           case 2:
- ... (65 more removed lines; see GitHub link above)
+       };
+     let Ut = null;
+     const Vt = {
+       _is_supported() {
+         if (!kL(Ut)) return Ut;
+         if (Ut = !0, VL(JB)) Ut = !1;
+         else try {
+           const HH = "__support__";
+           Vt._set(HH, "xyz"), '"xyz"' !== Vt._get(HH) && (Ut = !1), Vt._remove(HH)
+         } catch (AH) {
+           Ut = !1
```

#### 137. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2914-L3076` → after: `L2748-L2756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2748-L2756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2748-L2756) · [Before (L2914-L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L2914-L3076)

```diff
-       }
-       _getRGBABufferInternalSizedFormat(VV, eV) {
-         let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (1 === this._webGLVersion) {
-           if (void 0 !== eV) switch (eV) {
-             case 0:
-               return this._gl.ALPHA;
-             case 1:
-               return this._gl.LUMINANCE;
-             case 2:
-               return this._gl.LUMINANCE_ALPHA;
-             case 4:
-               return xV ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
-           }
-           return this._gl.RGBA
-         }
- ... (147 more removed lines; see GitHub link above)
+       },
+       _error(HH) {
+         qh.error("sessionStorage error: ", HH)
+       },
+       _get(HH) {
+         try {
+           return null == JB ? void 0 : JB.sessionStorage.getItem(HH)
+         } catch (HH) {
+           Vt._error(HH)
```

#### 138. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3078-L3103` → after: `L2758-L2768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2758-L2768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2758-L2768) · [Before (L3078-L3103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3078-L3103)

```diff
-         return xV ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
-       }
-       readPixels(VV, eV, xV, JV) {
-         let YV = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-           UV = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           yV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
-         const QV = YV ? 4 : 3,
-           nV = YV ? this._gl.RGBA : this._gl.RGB,
-           wV = xV * JV * QV;
-         if (yV) {
-           if (yV.length < wV) return pV.b.Error(`Data buffer is too small to store the read pixels (${yV.length} should be more than ${wV})`), Promise.resolve(yV)
-         } else yV = new Uint8Array(wV);
-         return UV && this.flushFramebuffer(), this._gl.readPixels(VV, eV, xV, JV, nV, this._gl.UNSIGNED_BYTE, yV), Promise.resolve(yV)
-       }
-       static get IsSupportedAsync() {
-         return Promise.resolve(this.isSupported())
- ... (10 more removed lines; see GitHub link above)
+         return null
+       },
+       _parse(HH) {
+         try {
+           return JSON.parse(Vt._get(HH)) || null
+         } catch (HH) {}
+         return null
+       },
+       _set(HH, BH) {
+         try {
+           return null == JB || JB.sessionStorage.setItem(HH, JSON.stringify(BH)), !0
```

#### 139. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3105` → after: `L2770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2770) · [Before (L3105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3105)

```diff
-           this._IsSupported = !1
+           Vt._error(HH)
```

#### 140. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3107-L3117` → after: `L2772-L2776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2772-L2776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2772-L2776) · [Before (L3107-L3117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3107-L3117)

```diff
-         return this._IsSupported
-       }
-       static get HasMajorPerformanceCaveat() {
-         if (null === this._HasMajorPerformanceCaveat) try {
-           const VV = UV.d._CreateCanvas(1, 1),
-             eV = VV.getContext("webgl", {
-               failIfMajorPerformanceCaveat: !0
-             }) || VV.getContext("experimental-webgl", {
-               failIfMajorPerformanceCaveat: !0
-             });
-           this._HasMajorPerformanceCaveat = !eV
+         return !1
+       },
+       _remove(HH) {
+         try {
+           null == JB || JB.sessionStorage.removeItem(HH)
```

#### 141. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3119-L3247` → after: `L2778-L2779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2778-L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2778-L2779) · [Before (L3119-L3247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3119-L3247)

```diff
-           this._HasMajorPerformanceCaveat = !1
-         }
-         return this._HasMajorPerformanceCaveat
-       }
-     }
-     FV._TempClearColorUint32 = new Uint32Array(4), FV._TempClearColorInt32 = new Int32Array(4), FV._TempClearColorFloat32 = new Float32Array(4), FV.ExceptionList = [{
-       key: "Chrome/63.0",
-       capture: "63\\.0\\.3239\\.(\\d+)",
-       captureConstraint: 108,
-       targets: ["uniformBuffer"]
-     }, {
-       key: "Firefox/58",
-       capture: null,
-       captureConstraint: null,
-       targets: ["uniformBuffer"]
-     }, {
- ... (113 more removed lines; see GitHub link above)
+           Vt._error(HH)
+         }
```

#### 142. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3249-L3250` → after: `L2781-L2784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2781-L2784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2781-L2784) · [Before (L3249-L3250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3249-L3250)

```diff
-       _generatePickInfo() {
-         this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
+     };
+     var Ot = class {
+       constructor(HH) {
+         this._instance = HH
```

#### 143. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3252-L3260` → after: `L2786-L2787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2786-L2787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2786-L2787) · [Before (L3252-L3260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3252-L3260)

```diff
-     }
-   },
-   41458: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => JV
-     });
-     class JV {
-       static CompareLightsPriority(VV, eV) {
-         return VV.shadowEnabled !== eV.shadowEnabled ? (eV.shadowEnabled ? 1 : 0) - (VV.shadowEnabled ? 1 : 0) : eV.renderPriority - VV.renderPriority
+       get _config() {
+         return this._instance.config
```

#### 144. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3262-L3276` → after: `L2789-L2790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2789-L2790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2789-L2790) · [Before (L3262-L3276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3262-L3276)

```diff
-     }
-     JV.FALLOFF_DEFAULT = 0, JV.FALLOFF_PHYSICAL = 1, JV.FALLOFF_GLTF = 2, JV.FALLOFF_STANDARD = 3, JV.LIGHTMAP_DEFAULT = 0, JV.LIGHTMAP_SPECULAR = 1, JV.LIGHTMAP_SHADOWSONLY = 2, JV.INTENSITYMODE_AUTOMATIC = 0, JV.INTENSITYMODE_LUMINOUSPOWER = 1, JV.INTENSITYMODE_LUMINOUSINTENSIT … [truncated]
-   },
-   41077: (VV, eV, xV) => {
-     xV.d(eV, {
-       e: () => yV
-     });
-     var JV, YV = xV(38296),
-       UV = xV(41086);
-     ! function(VV) {
-       VV[VV.Unknown = 0] = "Unknown", VV[VV.Url = 1] = "Url", VV[VV.Temp = 2] = "Temp", VV[VV.Raw = 3] = "Raw", VV[VV.Dynamic = 4] = "Dynamic", VV[VV.RenderTarget = 5] = "RenderTarget", VV[VV.MultiRenderTarget = 6] = "MultiRenderTarget", VV[VV.Cube = 7] = "Cube", VV[VV.CubeRaw =  … [truncated]
-     }(JV || (JV = {}));
-     class yV extends UV.c {
-       get useMipMaps() {
-         return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
+       get consent() {
+         return this._getDnt() ? 0 : this._storedConsent
```

#### 145. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3278-L3279` → after: `L2792-L2793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2792-L2793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2792-L2793) · [Before (L3278-L3279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3278-L3279)

```diff
-       set useMipMaps(VV) {
-         this._useMipMaps = VV
+       isOptedOut() {
+         return "always" === this._config.cookieless_mode || this.isRejected() || -1 === this.consent && "on_reject" === this._config.cookieless_mode
```

#### 146. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3281-L3282` → after: `L2795-L2796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2795-L2796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2795-L2796) · [Before (L3281-L3282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3281-L3282)

```diff
-       get uniqueId() {
-         return this._uniqueId
+       isOptedIn() {
+         return !this.isOptedOut()
```

#### 147. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3284-L3285` → after: `L2798-L2799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2798-L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2798-L2799) · [Before (L3284-L3285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3284-L3285)

```diff
-       _setUniqueId(VV) {
-         this._uniqueId = VV
+       isExplicitlyOptedOut() {
+         return 0 === this.consent
```

#### 148. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3287-L3288` → after: `L2801-L2802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2801-L2802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2801-L2802) · [Before (L3287-L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3287-L3288)

```diff
-       sk() {
-         return this._engine
+       isRejected() {
+         return 0 === this.consent || -1 === this.consent && this._config.opt_out_capturing_by_default
```

#### 149. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3290-L3291` → after: `L2804-L2805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2804-L2805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2804-L2805) · [Before (L3290-L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3290-L3291)

```diff
-       get source() {
-         return this._source
+       optInOut(HH) {
+         this.WQ._set(this._storageKey, HH ? 1 : 0, this._config.cookie_expiration, this._config.cross_subdomain_cookie, this._config.secure_cookie)
```

#### 150. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3293-L3295` → after: `L2807-L2808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2807-L2808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2807-L2808) · [Before (L3293-L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3293-L3295)

```diff
-       constructor(VV, eV) {
-         let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable … [truncated]
+       reset() {
+         this.WQ._remove(this._storageKey, this._config.cross_subdomain_cookie)
```

#### 151. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3297-L3298` → after: `L2810-L2816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2810-L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2810-L2816) · [Before (L3297-L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3297-L3298)

```diff
-       incrementReferences() {
-         this._references++
+       get _storageKey() {
+         const {
+           token: HH,
+           opt_out_capturing_cookie_prefix: BH,
+           consent_persistence_name: LH
+         } = this._instance.config;
+         return LH || (BH ? BH + HH : "__ph_opt_in_out_" + HH)
```

#### 152. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3300-L3302` → after: `L2818-L2820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2818-L2820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2818-L2820) · [Before (L3300-L3302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3300-L3302)

```diff
-       updateSize(VV, eV) {
-         let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-         this._engine.updateTextureDimensions(this, VV, eV, xV), this.width = VV, this.height = eV, this.depth = xV, this.baseWidth = VV, this.baseHeight = eV, this.baseDepth = xV, this._size = VV * eV * xV
+       get _storedConsent() {
+         const HH = this.WQ._get(this._storageKey);
+         return jL(HH) ? 1 : GL(nL, HH) ? 0 : -1
```

#### 153. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3304-L3357` → after: `L2822-L2829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2822-L2829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2822-L2829) · [Before (L3304-L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3304-L3357)

```diff
-       _rebuild() {
-         if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
-           const VV = this.onRebuildCallback(this),
-             eV = eV => {
-               eV._swapAndDie(this, !1), this.isReady = VV.isReady
-             };
-           return void(VV.isAsync ? VV.proxy.then(eV) : eV(VV.proxy))
-         }
-         let VV;
-         switch (this.source) {
-           case 2:
-           case 12:
-           case 14:
-           case 15:
-             break;
-           case 1:
- ... (38 more removed lines; see GitHub link above)
+       get WQ() {
+         const HH = this._config.opt_out_capturing_persistence_type,
+           BH = "localStorage" === HH ? Ct : tt,
+           LH = BH._is_supported() ? BH : Tt;
+         if (!this._persistentStore || this._persistentStore !== LH) {
+           this._persistentStore = LH;
+           const BH = "localStorage" === HH ? tt : Ct;
+           BH._get(this._storageKey) && (this._persistentStore._get(this._storageKey) || this.optInOut(jL(BH._get(this._storageKey))), BH._remove(this._storageKey, this._config.cross_subdomain_cookie))
```

#### 154. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3360-L3364` → after: `L2833-L2834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2833-L2834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2833-L2834) · [Before (L3360-L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3360-L3364)

```diff
-       _swapAndDie(VV) {
-         let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         this._hardwareTexture?.setUsage(VV._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), VV._hardwareTexture = this._hardwareTexture, VV._setUniqueId(yV._Counter++), eV && (VV._isRGBD = this._isRGBD), this._lodTexture … [truncated]
-         const xV = this._engine.getLoadedTexturesCache();
-         let JV = xV.indexOf(this); - 1 !== JV && xV.splice(JV, 1), JV = xV.indexOf(VV), -1 === JV && xV.push(VV)
+       _getDnt() {
+         return !!this._config.respect_dnt && [null == pB ? void 0 : pB.doNotTrack, null == pB ? void 0 : pB.msDoNotTrack, tL.doNotTrack, null == pB ? void 0 : pB.globalPrivacyControl].some((HH => jL(HH)))
```

#### 155. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3366-L3367` → after: `L2836-L2846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2836-L2846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2836-L2846) · [Before (L3366-L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3366-L3367)

```diff
-       dispose() {
-         this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
+     };
+ 
+     function bt(HH, BH) {
+       var LH;
+       const AH = null == HH || null === (LH = HH.config) || void 0 === LH ? void 0 : LH.get_current_url;
+       if (!PL(AH)) return BH;
+       try {
+         const HH = AH(BH);
+         return OL(HH) && HH ? HH : BH
+       } catch (HH) {
+         return qh.error("Error in get_current_url, falling back to window.location.href", HH), BH
```

#### 156. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3370-L3372` → after: `L2849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2849) · [Before (L3370-L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3370-L3372)

```diff
-     yV._Counter = 0
-   },
-   41201: (VV, eV, xV) => {
+ 
```

#### 157. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3374` → after: `L2851-L2852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2851-L2852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2851-L2852) · [Before (L3374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3374)

```diff
-       return 13 === VV || 14 === VV || 15 === VV || 16 === VV || 17 === VV || 18 === VV || 19 === VV
+       var BH;
+       return HH instanceof Element && ("__POSTHOG_TOOLBAR__" === HH.id || !!(null === (BH = HH.closest) || void 0 === BH ? void 0 : BH.call(HH, ".toolbar-global-fade-container")))
```

#### 158. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3378` → after: `L2856-L2860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2856-L2860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2856-L2860) · [Before (L3378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3378)

```diff
-       return 8 === VV || 9 === VV || 10 === VV || 11 === VV
+       return !!HH && 1 === HH.nodeType
+     }
+ 
+     function ot(HH, BH) {
+       return !!HH && !!HH.tagName && HH.tagName.toLowerCase() === BH.toLowerCase()
```

#### 159. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3382` → after: `L2864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2864) · [Before (L3382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3382)

```diff
-       return 0 === VV || 5 === VV || 7 === VV || 11 === VV
+       return !!HH && 3 === HH.nodeType
```

#### 160. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3386` → after: `L2868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2868) · [Before (L3386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3386)

```diff
-       return 13 === VV || 17 === VV || 18 === VV || 19 === VV
+       return !!HH && 11 === HH.nodeType && mt(HH.host)
```

#### 161. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3388-L3450` → after: `L2870-L2881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2870-L2881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2870-L2881) · [Before (L3388-L3450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3388-L3450)

```diff
-     xV.d(eV, {
-       e: () => yV,
-       h: () => JV,
-       j: () => YV,
-       m: () => UV
-     })
-   },
-   41086: (VV, eV, xV) => {
-     xV.d(eV, {
-       c: () => JV
-     });
-     class JV {
-       get wrapU() {
-         return this._cachedWrapU
-       }
-       set wrapU(VV) {
- ... (47 more removed lines; see GitHub link above)
+ 
+     function lt(HH) {
+       return HH ? YL(HH).split(/\s+/) : []
+     }
+ 
+     function Kt(HH, BH) {
+       const LH = function(HH) {
+         var BH;
+         const LH = null == JB || null === (BH = JB.location) || void 0 === BH ? void 0 : BH.href;
+         return VL(LH) ? void 0 : bt(HH, LH)
+       }(BH);
+       return !!(LH && HH && HH.some((HH => LH.match(HH))))
```

#### 162. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3452-L3453` → after: `L2883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2883) · [Before (L3452-L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3452-L3453)

```diff
-   },
-   41369: (VV, eV, xV) => {
+ 
```

#### 163. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3455` → after: `L2885-L2896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2885-L2896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2885-L2896) · [Before (L3455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3455)

```diff
-       VV.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
+       let BH = "";
+       switch (typeof HH.className) {
+         case "string":
+           BH = HH.className;
+           break;
+         case "object":
+           BH = (HH.className && "baseVal" in HH.className ? HH.className.baseVal : null) || HH.getAttribute("class") || "";
+           break;
+         default:
+           BH = ""
+       }
+       return lt(BH)
```

#### 164. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3457-L3461` → after: `L2898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2898) · [Before (L3457-L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3457-L3461)

```diff
-     xV.d(eV, {
-       c: () => JV
-     })
-   },
-   41168: (VV, eV, xV) => {
+ 
```

#### 165. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3463` → after: `L2900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L2900) · [Before (L3463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L3463)

```diff
-       return void 0 === VV.getPipelineContext
+       return mL(HH) ? null : YL(HH).split(/(\s+)/).filter((HH => Yz(HH))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
```
