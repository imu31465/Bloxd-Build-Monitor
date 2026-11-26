# Changed — Bundle Modifications Report (Part 035 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `35 / 115` (**278** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 034](part-034.md) · [Part 036 →](part-036.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/275.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/275.js` (145 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896)

#### 137. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9590-L9591` → after: `L4608-L4728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4608-L4728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4608-L4728) · [Before (L9590-L9591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9590-L9591)

```diff
-       getLastSkeletonByID(UU) {
-         return this.getLastSkeletonById(UU)
+       kX(HH) {
+         const BH = [...this.plots.plots];
+         for (const [AH, rH, SH] of "plotsAll" === HH[0] ? HH[1] : [HH[1]]) {
+           const HH = BH[AH - 1];
+           var LH;
+           if (HH.state === rH && HH.mine === SH || (BH[AH - 1] = {
+               ...HH,
+               state: rH,
+               mine: SH
+             }), HH.state !== rH) null === (LH = this.terrain) || void 0 === LH || LH.forget(HH.chunkX, HH.chunkZ)
+         }
+         this.plots = {
+           plots: BH,
+           animate: "plotsOne" === HH[0]
+         }, this.publishPlots(this.plots)
+       }
+ ... (105 more added lines; see GitHub link above)
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9597-L9613` → after: `L4732-L4749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4732-L4749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4732-L4749) · [Before (L9597-L9613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9597-L9613)

```diff
-     function Fz() {
-       Az || (Az = !0, (0, Xz.h)("BABYLON.Scene", Qz))
-     }(hU = Qz.prototype).sortActiveAnimatables ?? (hU.sortActiveAnimatables = (0, ZU.k)("Scene", "sortActiveAnimatables")), (UX = Qz.prototype).beginWeightedAnimation ?? (UX.beginWeightedAnimation = (0, ZU.k)("Scene", "beginWeightedAnimation")), (XX = Qz.prototype).beginAnimation … [truncated]
-   },
-   41265: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => cU,
-       h: () => yU
-     });
-     class cU {}
-     cU.NAME_EFFECTLAYER = "EffectLayer", cU.NAME_LAYER = "Layer", cU.NAME_LENSFLARESYSTEM = "LensFlareSystem", cU.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", cU.NAME_PARTICLESYSTEM = "ParticleSystem", cU.NAME_GAMEPAD = "Gamepad", cU.NAME_SIMPLIFICATIONQUEUE = "Simplificatio … [truncated]
-     class yU extends Array {
-       constructor(UU) {
-         super(...UU)
-       }
-       static Create() {
- ... (1 more removed lines; see GitHub link above)
+     function ur(HH) {
+       let {
+         axis: BH,
+         line: LH
+       } = HH;
+       const AH = .3,
+         rH = 3 * LH + AH,
+         SH = rr - .6;
+       return "eastWest" === BH ? {
+         x: AH,
+         y: rH,
+         width: SH,
+         height: .4
+       } : {
+         x: rH,
+         y: AH,
+ ... (2 more added lines; see GitHub link above)
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9615-L9623` → after: `L4751-L4860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4751-L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4751-L4860) · [Before (L9615-L9623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9615-L9623)

```diff
-       registerStep(UU, XU, zU) {
-         let cU, yU = 0;
-         for (; yU < this.length; yU++) {
-           if (cU = this[yU].index, UU < cU) break
-         }
-         this.splice(yU, 0, {
-           index: UU,
-           component: XU,
-           action: zU.bind(XU)
+     }
+ 
+     function Qr(HH) {
+       let {
+         controller: BH
+       } = HH;
+       (0, xH.e)(pA, null);
+       const {
+         plots: LH,
+         animate: AH
+       } = BH.getPlots(), {
+         city: rH
+       } = BH.map;
+       return (0, UH.jsx)("div", {
+         className: "GreenvilleNavMap",
+         children: (0, UH.jsxs)("div", {
+ ... (94 more added lines; see GitHub link above)
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9625-L9628` → after: `L4862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4862) · [Before (L9625-L9628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9625-L9628)

```diff
-       }
-       clear() {
-         this.length = 0
-       }
+       })
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9640-L9663` → after: `L4865-L4880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4865-L4880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4865-L4880) · [Before (L9640-L9663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9640-L9663)

```diff
-     function cU(UU, XU, zU, cU, yU, QU) {
-       function AU(UU) {
-         if (void 0 !== UU && "function" !== typeof UU) throw new TypeError("Function expected");
-         return UU
-       }
-       for (var FU, oU = cU.kind, DU = "getter" === oU ? "get" : "setter" === oU ? "set" : "value", EU = !XU && UU ? cU.static ? UU : UU.prototype : null, YU = XU || (EU ? Object.getOwnPropertyDescriptor(EU, cU.name) : {}), NU = !1, IU = zU.length - 1; IU >= 0; IU--) {
-         var pU = {};
-         for (var aU in cU) pU[aU] = "access" === aU ? {} : cU[aU];
-         for (var aU in cU.access) pU.access[aU] = cU.access[aU];
-         pU.addInitializer = function(UU) {
-           if (NU) throw new TypeError("Cannot add initializers after decoration has completed");
-           QU.push(AU(UU || null))
-         };
-         var tU = (0, zU[IU])("accessor" === oU ? {
-           get: YU.get,
-           set: YU.set
- ... (8 more removed lines; see GitHub link above)
+     function Wr(HH) {
+       let {
+         controller: BH
+       } = HH;
+       return (0, xH.e)(yA, null), (0, UH.jsx)(UH.Fragment, {
+         children: BH.getMarkers().map(((HH, BH) => (0, UH.jsxs)("span", {
+           className: "GreenvilleNavPin GreenvilleNavMarker",
+           style: Yr(HH.x, HH.z),
+           children: ["npc" === HH.kind && (0, UH.jsx)(Ar.d, {
+             icon: HH.face
+           }), "place" === HH.kind && (0, UH.jsx)(MH.e, {
+             itemName: Er[HH.place],
+             amount: 0
+           })]
+         }, BH)))
+       })
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9666-L9668` → after: `L4925-L4957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4925-L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4925-L4957) · [Before (L9666-L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9666-L9668)

```diff
-     function yU(UU, XU, zU) {
-       for (var cU = arguments.length > 2, yU = 0; yU < XU.length; yU++) zU = cU ? XU[yU].call(UU, zU) : XU[yU].call(UU);
-       return cU ? zU : void 0
+     function xr(HH) {
+       let {
+         controller: BH
+       } = HH;
+       const [LH, AH] = (0, tH.useState)((() => BH.isMapShown()));
+       (0, xH.d)(iA, (() => {
+         AH(BH.isMapShown())
+       }));
+       const rH = (0, gH.b)(),
+         [SH, hH] = (0, tH.useState)(null);
+       return function(HH) {
+         (0, tH.useLayoutEffect)((() => {
+           if (!HH) return;
+           const BH = HH.closest(".GreenvilleHudColumnStack"),
+             LH = new ResizeObserver((() => {
+               HH.offsetWidth > 0 && BH.style.setProperty("--greenville-map-width", `${HH.offsetWidth}px`)
+ ... (17 more added lines; see GitHub link above)
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9671-L9674` → after: `L4985-L5085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4985-L5085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4985-L5085) · [Before (L9671-L9674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9671-L9674)

```diff
-     function QU(UU, XU, zU) {
-       return "symbol" === typeof XU && (XU = XU.description ? "[".concat(XU.description, "]") : ""), Object.defineProperty(UU, "name", {
-         configurable: !0,
-         value: zU ? "".concat(zU, " ", XU) : XU
+     function kr(HH) {
+       return HH >= 75 ? "face-smile" : HH >= 50 ? "face-diagonal-mouth" : HH >= 25 ? "face-worried" : "face-dizzy"
+     }
+ 
+     function mr(HH) {
+       const BH = Math.round(HH);
+       return `${BH>0?"+":""}${BH}%`
+     }
+ 
+     function or(HH) {
+       let {
+         controller: BH
+       } = HH;
+       (0, xH.e)(jL, null);
+       const LH = BH.getMood();
+       return LH ? (0, UH.jsx)(WH.e, {
+ ... (85 more added lines; see GitHub link above)
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9680-L9683` → after: `L5089-L5466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R5089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L5089-L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L5089-L5466) · [Before (L9680-L9683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9680-L9683)

```diff
-     function AU(UU, XU, zU, cU) {
-       if ("a" === zU && !cU) throw new TypeError("Private accessor was defined without a getter");
-       if ("function" === typeof XU ? UU !== XU || !cU : !XU.has(UU)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
-       return "m" === zU ? cU : "a" === zU ? cU.call(UU) : cU ? cU.value : XU.get(UU)
+     function fr(HH) {
+       let {
+         controller: BH
+       } = HH;
+       (0, xH.e)(RL, null);
+       const LH = BH.getPlace();
+       return "hudHome" !== (null === LH || void 0 === LH ? void 0 : LH.kind) || null === LH.runStartedAt ? null : (0, UH.jsx)(lr, {
+         startedAt: LH.runStartedAt
+       })
+     }
+ 
+     function lr(HH) {
+       let {
+         startedAt: BH
+       } = HH;
+       const LH = Math.max(0, Math.floor(-(0, TA.g)(BH)));
+ ... (362 more added lines; see GitHub link above)
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9686-L9690` → after: `L5469-L5667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R5469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L5469-L5667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L5469-L5667) · [Before (L9686-L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9686-L9690)

```diff
-     function FU(UU, XU, zU, cU, yU) {
-       if ("m" === cU) throw new TypeError("Private method is not writable");
-       if ("a" === cU && !yU) throw new TypeError("Private accessor was defined without a setter");
-       if ("function" === typeof XU ? UU !== XU || !yU : !XU.has(UU)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
-       return "a" === cU ? yU.call(UU, zU) : yU ? yU.value = zU : XU.set(UU, zU), zU
+     function dr(HH) {
+       let {
+         home: BH
+       } = HH;
+       const {
+         t: LH
+       } = (0, PH.B)();
+       return BH.pvp || BH.parkour || !BH.visitorsAllowed ? (0, UH.jsxs)("div", {
+         className: "GreenvillePlaceTagRow GreenvillePlaceTagChips",
+         children: [BH.pvp && (0, UH.jsx)("span", {
+           className: "GreenvillePlaceChip Danger",
+           children: LH("greenvilleGame:houseChipPvp")
+         }), BH.parkour && (0, UH.jsx)("span", {
+           className: "GreenvillePlaceChip",
+           children: LH("greenvilleGame:houseChipParkour")
+         }), !BH.visitorsAllowed && (0, UH.jsxs)("span", {
+ ... (183 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/276.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/276.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651)

#### 1. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/276.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/276.js#L2)

```diff
- export const ids = [276, 659];
+ export const ids = [276];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L4-L7` → after: `L4-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L4-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/276.js#L4-L40) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/276.js#L4-L7)

```diff
-   40961: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => cU
-     });
+   40785: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => CH
+     });
+     var AH = LH(5111);
+     const rH = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];
+ 
+     function SH(HH) {
+       return new Promise(((BH, LH) => {
+         HH.onsuccess = () => {
+           BH(HH.result)
+         }, HH.onerror = () => {
+           LH(HH.error)
+         }
+       }))
+     }
+ ... (21 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L9-L32` → after: `L42-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L42-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/276.js#L42-L783) · [Before (L9-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/276.js#L9-L32)

```diff
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? cU.ShadersRepository : cU.ShadersRepositoryWGSL
-       }
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? cU.ShadersStore : cU.ShadersStoreWGSL
-       }
-       static GetIncludesShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? cU.IncludesShadersStore : cU.IncludesShadersStoreWGSL
-       }
-     }
-     cU.ShadersRepository = "src/Shaders/", cU.ShadersStore = {}, cU.IncludesShadersStore = {}, cU.ShadersRepositoryWGSL = "src/ShadersWGSL/", cU.ShadersStoreWGSL = {}, cU.IncludesShadersStoreWGSL = {}
-   },
-   63962: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       postprocessVertexShader: () => AU
-     });
- ... (8 more removed lines; see GitHub link above)
+       constructor() {
+         this.db = null, this.opening = null, this.failed = !1, this.tailRecordings = new Set
+       }
+       get working() {
+         return !this.failed
+       }
+       static get supported() {
+         try {
+           return "undefined" !== typeof indexedDB
+         } catch {
+           return !1
+         }
+       }
+       putRecording(HH) {
+         this.write(["recordings"], (BH => {
+           BH.objectStore("recordings").put(HH)
+ ... (726 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/277.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/277.js` (98 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592)

#### 1. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L4)

```diff
-   41177: (UU, XU, zU) => {
+   40809: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L7-L12` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L7) · [Before (L7-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L7-L12)

```diff
-       f: () => YU,
-       j: () => oU,
-       l: () => IU,
-       n: () => DU,
-       r: () => FU,
-       s: () => EU
+       c: () => FY
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L14-L15` → after: `L9-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L9-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L9-L131) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L14-L15)

```diff
-     var cU = zU(39493),
-       yU = zU(41179);
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
+ ... (107 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L17-L45` → after: `L133-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L133-L134) · [Before (L17-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L17-L45)

```diff
-     function QU(UU, XU, zU, cU) {
-       switch (XU) {
-         case 5120: {
-           let XU = UU.getInt8(zU);
-           return cU && (XU = Math.max(XU / 127, -1)), XU
-         }
-         case 5121: {
-           let XU = UU.getUint8(zU);
-           return cU && (XU /= 255), XU
-         }
-         case 5122: {
-           let XU = UU.getInt16(zU, !0);
-           return cU && (XU = Math.max(XU / 32767, -1)), XU
-         }
-         case 5123: {
-           let XU = UU.getUint16(zU, !0);
- ... (13 more removed lines; see GitHub link above)
+     function GL(HH, BH) {
+       return -1 !== HH.indexOf(BH)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L48-L76` → after: `L143-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L143-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L143-L161) · [Before (L48-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L48-L76)

```diff
-     function AU(UU, XU, zU, cU, QU) {
-       switch (XU) {
-         case 5120:
-           cU && (QU = Math.round(127 * QU)), UU.setInt8(zU, QU);
-           break;
-         case 5121:
-           cU && (QU = Math.round(255 * QU)), UU.setUint8(zU, QU);
-           break;
-         case 5122:
-           cU && (QU = Math.round(32767 * QU)), UU.setInt16(zU, QU, !0);
-           break;
-         case 5123:
-           cU && (QU = Math.round(65535 * QU)), UU.setUint16(zU, QU, !0);
-           break;
-         case 5131:
-           UU.setUint16(zU, (0, yU.h)(QU), !0);
- ... (13 more removed lines; see GitHub link above)
+     function QL(HH) {
+       var BH;
+       const LH = [];
+       return null !== (BH = JSON.stringify(HH, (function(HH, BH) {
+         if ("bigint" == typeof BH) return BH.toString();
+         if ("function" != typeof BH && "symbol" != typeof BH) {
+           if (BH instanceof Error) return {
+             name: BH.name,
+             message: BH.message,
+             stack: BH.stack
+           };
+           if (BH && "object" == typeof BH) {
+             for (; LH.length > 0 && LH[LH.length - 1] !== this;) LH.pop();
+             if (LH.includes(BH)) return "[Circular]";
+             LH.push(BH)
+           }
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L80-L94` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L191) · [Before (L80-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L80-L94)

```diff
-       switch (UU) {
-         case 5120:
-         case 5121:
-           return 1;
-         case 5122:
-         case 5123:
-         case 5131:
-           return 2;
-         case 5124:
-         case 5125:
-         case 5126:
-           return 4;
-         default:
-           throw new Error(`Invalid type '${UU}'`)
-       }
+       return null === HH || "object" != typeof HH
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L97-L118` → after: `L194-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L194-L195) · [Before (L97-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L97-L118)

```diff
-     function oU(UU, XU, zU, cU, yU, oU, DU, EU) {
-       const YU = new Array(cU),
-         NU = new Array(cU);
-       if (UU instanceof Array) {
-         let yU = XU / 4;
-         const QU = zU / 4;
-         for (let XU = 0; XU < oU; XU += cU) {
-           for (let XU = 0; XU < cU; XU++) YU[XU] = NU[XU] = UU[yU + XU];
-           EU(NU, XU);
-           for (let XU = 0; XU < cU; XU++) YU[XU] !== NU[XU] && (UU[yU + XU] = NU[XU]);
-           yU += QU
-         }
-       } else {
-         const IU = ArrayBuffer.isView(UU) ? new DataView(UU.buffer, UU.byteOffset, UU.byteLength) : new DataView(UU),
-           pU = FU(yU);
-         for (let UU = 0; UU < oU; UU += cU) {
- ... (6 more removed lines; see GitHub link above)
+     function eL(HH, BH) {
+       return {}.toString.call(HH) === `[object ${BH}]`
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L121-L139` → after: `L198-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L198-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L198-L207) · [Before (L121-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L121-L139)

```diff
-     function DU(UU, XU, zU, yU, QU, AU, DU, EU) {
-       const YU = XU * FU(zU),
-         NU = DU * XU;
-       if (5126 !== zU || QU !== YU) {
-         const cU = new Float32Array(NU);
-         return oU(UU, yU, QU, XU, zU, NU, AU, ((UU, zU) => {
-           for (let yU = 0; yU < XU; yU++) cU[zU + yU] = UU[yU]
-         })), cU
-       }
-       if (!(UU instanceof Array || UU instanceof Float32Array) || 0 !== yU || UU.length !== NU) {
-         if (UU instanceof Array) {
-           const XU = yU / 4;
-           return UU.slice(XU, XU + NU)
-         }
-         if (ArrayBuffer.isView(UU)) {
-           const XU = UU.byteOffset + yU;
- ... (3 more removed lines; see GitHub link above)
+     function qL(HH) {
+       switch ({}.toString.call(HH)) {
+         case "[object Error]":
+         case "[object Exception]":
+         case "[object DOMException]":
+         case "[object DOMError]":
+         case "[object WebAssembly.Exception]":
+           return !0;
+         default:
+           return NL(HH, Error)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L144-L216` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L211-L212) · [Before (L144-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L144-L216)

```diff
-     function EU(UU, XU, zU, yU, QU, AU, DU) {
-       const EU = FU(zU),
-         YU = function(UU) {
-           switch (UU) {
-             case 5120:
-               return Int8Array;
-             case 5121:
-               return Uint8Array;
-             case 5122:
-               return Int16Array;
-             case 5123:
-             case 5131:
-               return Uint16Array;
-             case 5124:
-               return Int32Array;
-             case 5125:
- ... (57 more removed lines; see GitHub link above)
+     function gL(HH) {
+       return "u" > typeof Event && NL(HH, Event)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L220-L224` → after: `L216-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L216-L218) · [Before (L220-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L220-L224)

```diff
-       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-         cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       if (Array.isArray(UU)) {
-         for (let yU = 0; yU < XU; yU++)
-           if (UU[zU + yU] - cU > 65535) return !0;
+       try {
+         return HH instanceof BH
+       } catch (HH) {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L230-L274` → after: `L226-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L226-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L226-L231) · [Before (L230-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L230-L274)

```diff
-     function IU(UU) {
-       const XU = UU.buffer;
-       if (XU instanceof ArrayBuffer) return UU;
-       const zU = new ArrayBuffer(UU.byteLength);
-       return new Uint8Array(zU).set(new Uint8Array(XU, UU.byteOffset, UU.byteLength)), zU
-     }
-   },
-   40991: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => WU,
-       f: () => RU,
-       k: () => PU,
-       i: () => OU,
-       o: () => SU
-     });
-     class cU {
- ... (29 more removed lines; see GitHub link above)
+     function FL(HH, BH, LH, AH, rH, SH, hH) {
+       try {
+         var tH = HH[SH](hH),
+           zH = tH.value
+       } catch (HH) {
+         return void LH(HH)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L277-L299` → after: `L235-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L235-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L235-L244) · [Before (L277-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L277-L299)

```diff
-     class yU {
-       constructor() {
-         this._lines = []
-       }
-       get currentLine() {
-         return this._lines[this.lineIndex]
-       }
-       get canRead() {
-         return this.lineIndex < this._lines.length - 1
-       }
-       set lines(UU) {
-         this._lines.length = 0;
-         for (const XU of UU) {
-           if (!XU || "\r" === XU) continue;
-           if ("#" === XU[0]) {
-             this._lines.push(XU);
- ... (7 more removed lines; see GitHub link above)
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
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L301-L309` → after: `L246-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L246-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L246-L248) · [Before (L301-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L301-L309)

```diff
-           const zU = UU.indexOf(";");
-           if (-1 === zU) this._lines.push(UU);
-           else if (zU === UU.length - 1) UU.length > 1 && this._lines.push(UU);
-           else {
-             const UU = XU.split(";");
-             for (let XU = 0; XU < UU.length; XU++) {
-               let zU = UU[XU];
-               zU && (zU = zU.trim(), zU && this._lines.push(zU + (XU !== UU.length - 1 ? ";" : "")))
-             }
+ 
+           function tH(HH) {
+             FL(SH, AH, rH, hH, tH, "throw", HH)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L311` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L250-L251) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L311)

```diff
-         }
+           hH(void 0)
+         }))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L314-L321` → after: `L254-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L254-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L254-L275) · [Before (L314-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L314-L321)

```diff
-     class QU extends cU {
-       process(UU, XU, zU) {
-         for (let cU = 0; cU < this.children.length; cU++) {
-           const yU = this.children[cU];
-           if (yU.isValid(UU)) return yU.process(UU, XU, zU)
-         }
-         return ""
-       }
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
+         const rH = HH.toLowerCase(),
+ ... (6 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L323-L325` → after: `L277-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L277-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L277-L279) · [Before (L323-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L323-L325)

```diff
-     class AU extends cU {
-       isValid(UU) {
-         return this.testExpression.isTrue(UU)
+     var sL = class {
+       constructor(HH) {
+         this._buckets = {}, this._onBucketRateLimited = HH._onBucketRateLimited, this._bucketSize = aL(HH.bucketSize, 0, 100, HH._logger), this._refillRate = aL(HH.refillRate, 0, this._bucketSize, HH._logger), this._refillInterval = aL(HH.refillInterval, 0, 864e5, HH._logger)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L327-L330` → after: `L281-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L281-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L281-L283) · [Before (L327-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L327-L330)

```diff
-     }
-     class FU {
-       isTrue(UU) {
-         return !0
+       _applyRefill(HH, BH) {
+         const LH = Math.floor((BH - HH.lastAccess) / this._refillInterval);
+         LH > 0 && (HH.tokens = Math.min(HH.tokens + LH * this._refillRate, this._bucketSize), HH.lastAccess = HH.lastAccess + LH * this._refillInterval)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L332-L375` → after: `L285-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L285-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L285-L296) · [Before (L332-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L332-L375)

```diff
-       static postfixToInfix(UU) {
-         const XU = [];
-         for (const zU of UU)
-           if (void 0 === FU._OperatorPriority[zU]) XU.push(zU);
-           else {
-             const UU = XU[XU.length - 1],
-               cU = XU[XU.length - 2];
-             XU.length -= 2, XU.push(`(${cU}${zU}${UU})`)
-           } return XU[XU.length - 1]
-       }
-       static infixToPostfix(UU) {
-         const XU = FU._InfixToPostfixCache.get(UU);
-         if (XU) return XU.accessTime = Date.now(), XU.result;
-         if (!UU.includes("&&") && !UU.includes("||") && !UU.includes(")") && !UU.includes("(")) return [UU];
-         const zU = [];
-         let cU = -1;
- ... (28 more removed lines; see GitHub link above)
+       consumeRateLimit(HH) {
+         var BH;
+         const LH = Date.now(),
+           AH = String(HH);
+         let rH = this._buckets[AH];
+         return rH ? this._applyRefill(rH, LH) : (rH = {
+           tokens: this._bucketSize,
+           lastAccess: LH
+         }, this._buckets[AH] = rH), 0 === rH.tokens || (rH.tokens--, 0 === rH.tokens && (null === (BH = this._onBucketRateLimited) || void 0 === BH || BH.call(this, HH)), 0 === rH.tokens)
+       }
+       stop() {
+         this._buckets = {}
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L377-L379` → after: `L298-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L298-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L298-L484) · [Before (L377-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L377-L379)

```diff
-       static ClearCache() {
-         const UU = Array.from(FU._InfixToPostfixCache.entries()).sort(((UU, XU) => UU[1].accessTime - XU[1].accessTime));
-         for (let XU = 0; XU < FU.InfixToPostfixCacheCleanupSize; XU++) FU._InfixToPostfixCache.delete(UU[XU][0])
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

#### 20. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L382-L391` → after: `L488-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L488-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L488-L495) · [Before (L382-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L382-L391)

```diff
-     FU.InfixToPostfixCacheLimitSize = 5e4, FU.InfixToPostfixCacheCleanupSize = 25e3, FU._InfixToPostfixCache = new Map, FU._OperatorPriority = {
-       ")": 0,
-       "(": 1,
-       "||": 2,
-       "&&": 3
-     }, FU._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
-     class oU extends FU {
-       constructor(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         super(), this.define = UU, this.not = XU
+ 
+     function rr(HH, BH) {
+       if (!BH) return HH;
+       let LH = [];
+       try {
+         LH = Object.keys(BH)
+       } catch (HH) {
+         LH = []
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L393-L395` → after: `L497-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L497-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L497-L509) · [Before (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L393-L395)

```diff
-       isTrue(UU) {
-         let XU = void 0 !== UU[this.define];
-         return this.not && (XU = !XU), XU
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

#### 22. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L398-L400` → after: `L513-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L513-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L513-L524) · [Before (L398-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L398-L400)

```diff
-     class DU extends FU {
-       isTrue(UU) {
-         return this.leftOperand.isTrue(UU) || this.rightOperand.isTrue(UU)
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
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L402-L405` → after: `L526-L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L526-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L526-L530) · [Before (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L402-L405)

```diff
-     }
-     class EU extends FU {
-       isTrue(UU) {
-         return this.leftOperand.isTrue(UU) && this.rightOperand.isTrue(UU)
+       remainingMs() {
+         const HH = Date.now();
+         if (this._installedAt - 5e3 > HH) return this.reset(), 0;
+         const BH = Math.min(Sr, Math.max(0, this._until - HH));
+         return 0 === BH && this.reset(), BH
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L407-L410` → after: `L532-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L532-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L532-L533) · [Before (L407-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L407-L410)

```diff
-     }
-     class YU extends FU {
-       constructor(UU, XU, zU) {
-         super(), this.define = UU, this.operand = XU, this.testValue = zU
+       isOpen() {
+         return this.remainingMs() > 0
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L412-L413` → after: `L535-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L535-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L535-L536) · [Before (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L412-L413)

```diff
-       toString() {
-         return `${this.define} ${this.operand} ${this.testValue}`
+       reset() {
+         this._until = 0, this._installedAt = 0
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L415-L439` → after: `L538-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L538-L539) · [Before (L415-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L415-L439)

```diff
-       isTrue(UU) {
-         let XU = !1;
-         const zU = parseInt(void 0 != UU[this.define] ? UU[this.define] : this.define),
-           cU = parseInt(void 0 != UU[this.testValue] ? UU[this.testValue] : this.testValue);
-         if (isNaN(zU) || isNaN(cU)) return !1;
-         switch (this.operand) {
-           case ">":
-             XU = zU > cU;
-             break;
-           case "<":
-             XU = zU < cU;
-             break;
-           case "<=":
-             XU = zU <= cU;
-             break;
-           case ">=":
- ... (9 more removed lines; see GitHub link above)
+       constructor() {
+         this._until = 0, this._installedAt = 0
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L441-L451` → after: `L541-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L541-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L541-L542) · [Before (L441-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L441-L451)

```diff
-     }
-     var NU = zU(40989),
-       IU = zU(40983);
-     const pU = /defined\s*?\((.+?)\)/g,
-       aU = /defined\s*?\[(.+?)\]/g,
-       tU = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
-       gU = /__decl__/,
-       kU = /light\{X\}.(\w*)/g,
-       GU = /\{X\}/g,
-       BU = [],
-       ZU = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;
+     };
+     const tr = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L453-L454` → after: `L544-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L544-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L544-L546) · [Before (L453-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L453-L454)

```diff
-     function RU(UU) {
-       UU.processor && UU.processor.initializeShaders && UU.processor.initializeShaders(UU.processingContext)
+     function zr(HH, BH) {
+       return "string" == typeof(LH = HH) && tr.test(LH) ? HH : BH();
+       var LH
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L457-L479` → after: `L549-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L549-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L549-L559) · [Before (L457-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L457-L479)

```diff
-     function PU(UU, XU, zU, cU) {
-       XU.processor?.preProcessShaderCode && (UU = XU.processor.preProcessShaderCode(UU, XU.isFragment)), OU(UU, XU, (UU => {
-         XU.processCodeAfterIncludes && (UU = XU.processCodeAfterIncludes(XU.isFragment ? "fragment" : "vertex", UU, XU.defines));
-         const yU = function(UU, XU, zU) {
-           let cU = function(UU, XU) {
-             if (XU.processor?.noPrecision) return UU;
-             const zU = XU.shouldUseHighPrecisionShader; - 1 === UU.indexOf("precision highp float") ? UU = zU ? "precision highp float;\n" + UU : "precision mediump float;\n" + UU : zU || (UU = UU.replace("precision highp float", "precision mediump float"));
-             return UU
-           }(UU, XU);
-           if (!XU.processor) return cU;
-           if (0 === XU.processor.shaderLanguage && -1 !== cU.indexOf("#version 3") && (cU = cU.replace("#version 300 es", ""), !XU.processor.parseGLES3)) return cU;
-           const yU = XU.defines,
-             QU = qU(XU, zU);
-           XU.processor.preProcessor && (cU = XU.processor.preProcessor(cU, yU, QU, XU.isFragment, XU.processingContext));
-           const AU = {};
-           cU = wU(cU, QU, XU, AU), XU.processor.postProcessor && (cU = XU.processor.postProcessor(cU, yU, XU.isFragment, XU.processingContext, zU ? {
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

#### 30. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L482-L486` → after: `L562-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L562-L563) · [Before (L482-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L482-L486)

```diff
-     function WU(UU, XU, zU) {
-       return zU.processor && zU.processor.finalizeShaders ? zU.processor.finalizeShaders(UU, XU, zU.processingContext) : {
-         vertexCode: UU,
-         fragmentCode: XU
-       }
+     function Er(HH) {
+       return HH ? HH.split("#")[0] : HH
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L490-L500` → after: `L567-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L567-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L567-L571) · [Before (L490-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L490-L500)

```diff
-       const XU = /defined\((.+)\)/.exec(UU);
-       if (XU && XU.length) return new oU(XU[1].trim(), "!" === UU[0]);
-       const zU = ["==", "!=", ">=", "<=", "<", ">"];
-       let cU = "",
-         yU = 0;
-       for (cU of zU)
-         if (yU = UU.indexOf(cU), yU > -1) break;
-       if (-1 === yU) return new oU(UU);
-       const QU = UU.substring(0, yU).trim(),
-         AU = UU.substring(yU + cU.length).trim();
-       return new YU(QU, cU, AU)
+       try {
+         return HH()
+       } catch (HH) {
+         return
+       }
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L504-L522` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L575-L576) · [Before (L504-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L504-L522)

```diff
-       const zU = new AU,
-         cU = UU.substring(0, XU);
-       let yU = UU.substring(XU);
-       return yU = yU.substring(0, (yU.indexOf("//") + 1 || yU.length + 1) - 1).trim(), zU.testExpression = "#ifdef" === cU ? new oU(yU) : "#ifndef" === cU ? new oU(yU, !0) : function(UU) {
-         UU = UU.replace(pU, "defined[$1]");
-         const XU = FU.infixToPostfix(UU),
-           zU = [];
-         for (const yU of XU)
-           if ("||" !== yU && "&&" !== yU) zU.push(yU);
-           else if (zU.length >= 2) {
-           let UU = zU[zU.length - 1],
-             XU = zU[zU.length - 2];
-           zU.length -= 2;
-           const cU = "&&" == yU ? new EU : new DU;
-           "string" === typeof UU && (UU = UU.replace(aU, "defined($1)")), "string" === typeof XU && (XU = XU.replace(aU, "defined($1)")), cU.leftOperand = "string" === typeof XU ? dU(XU) : XU, cU.rightOperand = "string" === typeof UU ? dU(UU) : UU, zU.push(cU)
-         }
- ... (3 more removed lines; see GitHub link above)
+       const LH = setTimeout(HH, BH);
+       return null != LH && LH.unref && (null == LH || LH.unref()), LH
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L525-L538` → after: `L579-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L579-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L579-L580) · [Before (L525-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L525-L538)

```diff
-     function eU(UU, XU, zU, yU) {
-       let QU;
-       for (; CU(UU, zU, yU);) {
-         QU = UU.currentLine;
-         const AU = QU.substring(0, 5).toLowerCase();
-         if ("#else" === AU) {
-           const zU = new cU;
-           return XU.children.push(zU), void CU(UU, zU, yU)
-         }
-         if ("#elif" === AU) {
-           const UU = LU(QU, 5);
-           XU.children.push(UU), zU = UU
-         }
-       }
+     function Yr(HH, BH, LH) {
+       return ur.apply(this, arguments)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L541-L572` → after: `L583-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L583-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L583-L592) · [Before (L541-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L541-L572)

```diff
-     function CU(UU, XU, zU) {
-       for (; UU.canRead;) {
-         UU.lineIndex++;
-         const yU = UU.currentLine;
-         if (yU.indexOf("#") >= 0) {
-           const cU = ZU.exec(yU);
-           if (cU && cU.length) {
-             switch (cU[0]) {
-               case "#ifdef": {
-                 const cU = new QU;
-                 XU.children.push(cU);
-                 const AU = LU(yU, 6);
-                 cU.children.push(AU), eU(UU, cU, AU, zU);
-                 break
-               }
-               case "#else":
- ... (16 more removed lines; see GitHub link above)
+     function ur() {
+       return (ur = DL((function*(HH, BH, LH) {
+         let AH;
+         try {
+           return yield Promise.race([HH, new Promise(((HH, rH) => {
+             AH = Gr((() => {
+               try {
+                 null == LH || LH(), HH()
+               } catch (HH) {
+                 rH(HH)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L574-L581` → after: `L594-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L594-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L594-L597) · [Before (L574-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L574-L581)

```diff
-             }
-             continue
-           }
-         }
-         const AU = new cU;
-         if (AU.line = yU, XU.children.push(AU), "#" === yU[0] && "d" === yU[1]) {
-           const UU = yU.replace(";", "").split(" ");
-           AU.additionalDefineKey = UU[1], 3 === UU.length && (AU.additionalDefineValue = UU[2])
+             }), BH)
+           }))])
+         } finally {
+           clearTimeout(AH)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L583-L590` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L599) · [Before (L583-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L583-L590)

```diff
-       }
-       return !1
-     }
- 
-     function wU(UU, XU, zU, QU) {
-       const AU = new cU,
-         FU = new yU;
-       return FU.lineIndex = -1, FU.lines = UU.split("\n"), CU(FU, AU, QU), AU.process(XU, zU, QU)
+       }))).apply(this, arguments)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L593-L600` → after: `L602-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L602-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L602-L607) · [Before (L593-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L593-L600)

```diff
-     function qU(UU, XU) {
-       const zU = UU.defines,
-         cU = {};
-       for (const yU of zU) {
-         const UU = yU.replace("#define", "").replace(";", "").trim().split(" ");
-         cU[UU[0]] = UU.length > 1 ? UU[1] : ""
-       }
-       return 0 === UU.processor?.shaderLanguage && (cU.GL_ES = "true"), cU.__VERSION__ = UU.version, cU[UU.platformName] = "true", (0, IU.h)(cU, XU?.isNDCHalfZRange, XU?.XyU, XU?.useExactSrgbConversions), cU
+     function Qr(HH) {
+       return Qr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
+         return typeof HH
+       } : function(HH) {
+         return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
+       }, Qr(HH)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L604-L640` → after: `L611-L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L611-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L611-L618) · [Before (L604-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L604-L640)

```diff
-       let cU;
-       for (BU.length = 0; null !== (cU = tU.exec(UU));) BU.push(cU);
-       let yU = [UU],
-         QU = !1;
-       for (const FU of BU) {
-         let UU = FU[1];
-         if (-1 !== UU.indexOf("__decl__") && (UU = UU.replace(gU, ""), XU.supportsUniformBuffers && (UU = UU.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), UU += "Declaration"), !XU.includesShadersStore[UU]) {
-           const cU = XU.shadersRepository + "ShadersInclude/" + UU + ".fx";
-           return void SU.loadFile(cU, (cU => {
-             XU.includesShadersStore[UU] = cU, OU(yU.join(""), XU, zU)
-           }))
-         } {
-           let zU = XU.includesShadersStore[UU];
-           if (FU[2]) {
-             const UU = FU[3].split(",");
-             for (let XU = 0; XU < UU.length; XU += 2) {
- ... (21 more removed lines; see GitHub link above)
+       return (BH = function(HH) {
+         var BH = function(HH) {
+           if ("object" != Qr(HH) || !HH) return HH;
+           var BH = HH[Symbol.toPrimitive];
+           if (void 0 !== BH) {
+             var LH = BH.call(HH, "string");
+             if ("object" != Qr(LH)) return LH;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L642-L652` → after: `L620-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L620-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L620-L628) · [Before (L642-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L642-L652)

```diff
-           yU = cU, QU = QU || zU.indexOf("#include<") >= 0 || zU.indexOf("#include <") >= 0
-         }
-       }
-       BU.length = 0;
-       const AU = yU.join("");
-       QU ? OU(AU.toString(), XU, zU) : zU(AU)
-     }
-     const SU = {
-       loadFile: (UU, XU, zU, cU, yU, QU) => {
-         throw (0, NU.m)("FileTools")
-       }
+           return String(HH)
+         }(HH);
+         return "symbol" == Qr(BH) ? BH : BH + ""
+       }(BH)) in HH ? Object.defineProperty(HH, BH, {
+         value: LH,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : HH[BH] = LH, HH
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L667-L680` → after: `L632-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L632-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L632-L637) · [Before (L667-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L667-L680)

```diff
-       return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (XU ? XU + "\n" : "") + UU
-     }
- 
-     function AU(UU, XU, zU, QU, AU, FU, oU) {
-       const DU = oU || yU.loadFile;
-       if (!DU) throw (0, cU.m)("FileTools");
-       return DU(UU, XU, zU, QU, AU, FU)
-     }
- 
-     function FU(UU, XU, zU, cU) {
-       if (UU) return XU ? UU.IS_NDC_HALF_ZRANGE = "" : delete UU.IS_NDC_HALF_ZRANGE, zU ? UU.USE_REVERSE_DEPTHBUFFER = "" : delete UU.USE_REVERSE_DEPTHBUFFER, void(cU ? UU.USE_EXACT_SRGB_CONVERSIONS = "" : delete UU.USE_EXACT_SRGB_CONVERSIONS);
-       {
-         let UU = "";
-         return XU && (UU += "#define IS_NDC_HALF_ZRANGE"), zU && (UU && (UU += "\n"), UU += "#define USE_REVERSE_DEPTHBUFFER"), cU && (UU && (UU += "\n"), UU += "#define USE_EXACT_SRGB_CONVERSIONS"), UU
+       var LH = Object.keys(HH);
+       if (Object.getOwnPropertySymbols) {
+         var AH = Object.getOwnPropertySymbols(HH);
+         BH && (AH = AH.filter((function(BH) {
+           return Object.getOwnPropertyDescriptor(HH, BH).enumerable
+         }))), LH.push.apply(LH, AH)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L740` → after: `L643-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L643-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L643-L651) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L740)

```diff
-       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !cU[UU]) return cU[UU] = !0, `${UU} needs to be imported before as it contains a side-effect required by your code.`
+       for (var BH = 1; arguments.length > BH; BH++) {
+         var LH = null != arguments[BH] ? arguments[BH] : {};
+         BH % 2 ? Mr(Object(LH), !0).forEach((function(BH) {
+           Wr(HH, BH, LH[BH])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : Mr(Object(LH)).forEach((function(BH) {
+           Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
+         }))
+       }
+       return HH
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L742-L744` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L653) · [Before (L742-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L742-L744)

```diff
-     const QU = {};
-     let AU = !1,
-       FU = 0;
+     let vr, Pr, Tr, Ur;
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L746-L751` → after: `L655-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L655-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L655-L681) · [Before (L746-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L746-L751)

```diff
-     function oU(UU, XU) {
-       let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const cU = function() {
-         if ((zU || AU) && 0 === FU) {
-           const zU = `${UU}.${XU}`;
-           QU[zU] || (QU[zU] = !0, console.warn(`[Babylon.js] ${zU}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
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
+           if (!BH) continue;
+           const SH = null == vr ? void 0 : vr[rH];
+           if (SH) {
+             Ur[SH] = BH;
+ ... (11 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L754` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L684) · [Before (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L754)

```diff
-       return cU.__isSideEffectStub = !0, cU
+       return AH && hH(SH, AH), LH && hH(rH, LH), Ur
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L757-L758` → after: `L687-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L687-L688) · [Before (L757-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L757-L758)

```diff
-     function DU(UU) {
-       return !!UU && !UU.__isSideEffectStub
+     function Or(HH, BH, LH) {
+       return HH && LH ? BH.length === Object.keys(LH).length && BH.every((BH => HH[BH] === LH[BH])) : HH === LH
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L760-L853` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L690) · [Before (L760-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L760-L853)

```diff
- 
-     function EU(UU, XU) {
-       return {
-         get() {},
-         set(UU) {
-           Object.defineProperty(this, XU, {
-             value: UU,
-             writable: !0,
-             configurable: !0,
-             enumerable: !0
-           })
-         },
-         configurable: !0,
-         enumerable: !0
-       }
-     }
- ... (78 more removed lines; see GitHub link above)
+     var br = class {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L855` → after: `L692-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L692-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L692-L693) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L855)

```diff
-         super(UU, FU.f.LoadFileError), this.name = "LoadFileError", FU.b._setPrototypeOf(this, tU.prototype), XU instanceof cU.e ? this.request = XU : this.file = XU
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+         this.coercers = HH, this.stackParser = BH, this.modifiers = LH
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L857-L860` → after: `L695-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L695-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L695-L707) · [Before (L857-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L857-L860)

```diff
-     }
-     class gU extends FU.h {
-       constructor(UU, XU) {
-         super(UU, FU.f.RequestFileError), this.request = XU, this.name = "RequestFileError", FU.b._setPrototypeOf(this, gU.prototype)
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
+           $exception_level: "error"
+         }
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L862-L865` → after: `L709-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L709-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L709-L714) · [Before (L862-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L862-L865)

```diff
-     }
-     class kU extends FU.h {
-       constructor(UU, XU) {
-         super(UU, FU.f.ReadFileError), this.file = XU, this.name = "ReadFileError", FU.b._setPrototypeOf(this, kU.prototype)
+       modifyFrames(HH) {
+         var BH = this;
+         return DL((function*() {
+           for (const LH of HH) LH.stacktrace && LH.stacktrace.frames && vL(LH.stacktrace.frames) && (LH.stacktrace.frames = yield BH.applyModifiers(LH.stacktrace.frames));
+           return HH
+         }))()
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L867-L949` → after: `L716-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L716-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L716-L722) · [Before (L867-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L867-L949)

```diff
-     }
-     const GU = {
-         DefaultRetryStrategy: class {
-           static ExponentialBackoff() {
-             let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
-               XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
-             return (zU, cU, yU) => 0 !== cU.status || yU >= UU || -1 !== zU.indexOf("file:") ? -1 : Math.pow(2, yU) * XU
-           }
-         }.ExponentialBackoff(),
-         BaseUrl: "",
-         CorsBehavior: "anonymous",
-         PreprocessUrl: UU => UU,
-         ScriptBaseUrl: "",
-         ScriptPreprocessUrl: UU => UU,
-         CleanUrl: UU => UU = UU.replace(/#/gm, "%23")
-       },
- ... (67 more removed lines; see GitHub link above)
+       coerceFallback(HH) {
+         var BH;
+         return {
+           type: "Error",
+           value: "Unknown error",
+           stack: null === (BH = HH.syntheticException) || void 0 === BH ? void 0 : BH.stack,
+           synthetic: !0
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L951` → after: `L724-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L724-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L724-L753) · [Before (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L951)

```diff
-         BU(QU, aU);
+       }
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
+       }
+       applyChunkIds(HH, BH) {
+         return HH.map((HH => (HH.filename && BH && (HH.chunk_id = BH[HH.filename]), HH)))
+       }
+ ... (14 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L953-L995` → after: `L755-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L755-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L755-L783) · [Before (L953-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L953-L995)

```diff
-           gU = () => {
-             for (const UU of tU) UU.target.removeEventListener(UU.name, UU.handler);
-             tU.length = 0
-           };
-         tU.push({
-           target: aU,
-           name: "load",
-           handler: () => {
-             gU(), XU(aU), NU && aU.src && URL.revokeObjectURL(aU.src)
-           }
-         }), tU.push({
-           target: aU,
-           name: "error",
-           handler: UU => {
-             gU(), IU(UU), NU && aU.src && URL.revokeObjectURL(aU.src)
-           }
- ... (27 more removed lines; see GitHub link above)
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
+                 source: SH,
+                 synthetic: HH.synthetic,
+ ... (13 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L997-L1003` → after: `L785-L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L785-L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L785-L824) · [Before (L997-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L997-L1003)

```diff
-         if (!kU && !RU && yU && yU.enableTexturesOffline) yU.open(dU, PU);
-         else {
-           if (-1 !== QU.indexOf("file:")) {
-             const UU = decodeURIComponent(QU.substring(5).toLowerCase());
-             if (AU.FilesToLoad[UU] && "undefined" !== typeof URL) {
-               try {
-                 let XU;
+         return AH(HH), LH
+       }
+       buildParsingContext(HH) {
+         var BH;
+         return {
+           chunkIdMap: Vr(this.stackParser),
+           skipFirstLines: null !== (BH = HH.skipFirstLines) && void 0 !== BH ? BH : 1
+         }
+       }
+       getAggregateErrors(HH) {
+         try {
+           if (qL(HH)) {
+             let LH = Object.getPrototypeOf(HH);
+             for (let AH = 0; LH && 100 > AH; AH++) {
+               var BH;
+               const AH = null === (BH = Object.getOwnPropertyDescriptor(LH, "constructor")) || void 0 === BH ? void 0 : BH.value;
+ ... (24 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1005-L1007` → after: `L826-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L826-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L826-L828) · [Before (L1005-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1005-L1007)

```diff
-                   XU = URL.createObjectURL(AU.FilesToLoad[UU])
-                 } catch (LU) {
-                   XU = URL.createObjectURL(AU.FilesToLoad[UU])
+                   return GH(BH)
+                 } finally {
+                   zH.pop()
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1009` → after: `L830-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L830-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L830-L856) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1009)

```diff
-                 aU.src = XU, NU = !0
+               }, AH > 4 || AH > 0 && -1 !== zH.indexOf(HH)) return LH.coerceFallback(EH);
+             const YH = "object" == typeof HH && null !== HH || "function" == typeof HH;
+             if (0 === AH && rH >= 50 || YH && tH.has(HH)) return;
+             YH && tH.add(HH), 0 === AH && rH++;
+             const uH = LH.getAggregateErrors(HH);
+             let QH, WH;
+             hH || (hH = !!uH);
+             try {
+               if (QH = LH.applyCoercers(HH, EH), !QH) throw CH
+             } catch (HH) {
+               if (HH === CH) return void(0 === AH && rH--);
+               if (!hH) throw HH;
+               QH = LH.coerceFallback(EH)
+             }
+             if (!uH || rH >= 50) return QH;
+             try {
+ ... (11 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1011` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L858) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1011)

```diff
-                 aU.src = ""
+                 rH++, AH = LH.coerceFallback(XH(BH + 1))
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1013` → after: `L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L860) · [Before (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1013)

```diff
-               return aU
+               AH && MH.push(AH)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1016-L1018` → after: `L885-L909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L885-L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L885-L909) · [Before (L1016-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1016-L1018)

```diff
-           PU()
-         }
-         return aU
+         })
+       }
+     };
+     const kr = /^([a-z][a-z0-9.+-]+):/i,
+       mr = ["http", "https", "file", "blob", "app", "capacitor", "ionic", "webpack", "webpack-internal", "ng"];
+ 
+     function or(HH) {
+       if (!HH || "<anonymous>" === HH) return !1;
+       const BH = kr.exec(HH);
+       return !BH || mr.includes(BH[1].toLowerCase())
+     }
+ 
+     function Ir(HH, BH, LH, AH, rH) {
+       const SH = {
+         platform: HH,
+         filename: BH,
+ ... (9 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1020-L1041` → after: `L911-L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L911-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L911-L918) · [Before (L1020-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1020-L1041)

```diff
-       PU = (UU, XU, zU, cU, yU) => {
-         const AU = new FileReader,
-           FU = {
-             onCompleteObservable: new QU.e,
-             abort: () => AU.abort()
-           };
-         return AU.onloadend = () => FU.onCompleteObservable.notifyObservers(FU), yU && (AU.onerror = () => {
-           yU(new kU(`Unable to read ${UU.name}`, UU))
-         }), AU.onload = UU => {
-           XU(UU.target.result)
-         }, zU && (AU.onprogress = zU), cU ? AU.readAsArrayBuffer(UU) : AU.readAsText(UU), FU
-       },
-       WU = (UU, XU, zU, cU, yU, oU, DU) => {
-         if (UU.name) return PU(UU, XU, zU, yU, oU ? UU => {
-           oU(void 0, UU)
-         } : void 0);
- ... (6 more removed lines; see GitHub link above)
+       lr = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
+       Kr = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
+       cr = /\((\S*)(?::(\d+))(?::(\d+))\)/,
+       er = (HH, BH) => {
+         const LH = lr.exec(HH);
+         if (LH) {
+           const [, HH, AH, rH] = LH;
+           return Ir(BH, HH, "?", +AH, +rH)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1043-L1046` → after: `L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L920) · [Before (L1043-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1043-L1046)

```diff
-         const {
-           match: YU,
-           type: pU
-         } = wU(EU);
+         const AH = Kr.exec(HH);
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1048-L1056` → after: `L922-L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L922-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L922-L924) · [Before (L1048-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1048-L1056)

```diff
-           const UU = {
-             onCompleteObservable: new QU.e,
-             abort: () => () => {}
-           };
-           try {
-             const UU = yU ? qU(EU) : OU(EU);
-             XU(UU, void 0, pU)
-           } catch (FU) {
-             oU ? oU(void 0, FU) : NU.b.Error(FU.message || "Failed to parse the Data URL")
+           if (AH[2] && 0 === AH[2].indexOf("eval")) {
+             const HH = cr.exec(AH[2]);
+             HH && (AH[2] = HH[1], AH[3] = HH[2], AH[4] = HH[3])
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1058-L1168` → after: `L926-L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L926-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L926-L927) · [Before (L1058-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1058-L1168)

```diff
-           return IU.e.SetImmediate((() => {
-             UU.onCompleteObservable.notifyObservers(UU)
-           })), UU
-         }
-         return dU(EU, ((UU, zU) => {
-           XU(UU, zU?.responseURL, zU?.getResponseHeader("content-type"))
-         }), zU, cU, yU, oU ? UU => {
-           oU(UU.request, new tU(UU.message, UU.request))
-         } : void 0, DU)
-       },
-       dU = (UU, XU, zU, AU, FU, oU, EU) => {
-         null !== AU && (AU ?? (AU = DU.b.LastCreatedScene?.offlineProvider)), UU = GU.CleanUrl(UU), UU = GU.PreprocessUrl(UU);
-         const YU = GU.BaseUrl + UU;
-         let IU = !1;
-         const pU = {
-             onCompleteObservable: new QU.e,
- ... (95 more removed lines; see GitHub link above)
+           const [HH, LH] = fr(AH[1] || "?", AH[2]);
+           return Ir(BH, LH, HH, AH[3] ? +AH[3] : void 0, AH[4] ? +AH[4] : void 0)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1171-L1173` → after: `L930-L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L930-L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L930-L932) · [Before (L1171-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1171-L1173)

```diff
-       eU = () => "undefined" !== typeof location && "file:" === location.protocol,
-       CU = UU => aU.test(UU),
-       wU = UU => {
+       qr = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
+       gr = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
+       Nr = (HH, BH) => {
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1175-L1181` → after: `L934-L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L934-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L934-L941) · [Before (L1175-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1175-L1181)

```diff
-         if (null === XU || 0 === XU.length) return {
-           match: !1,
-           type: ""
-         };
-         return {
-           match: !0,
-           type: XU[0].replace("data:", "").replace(";base64,", "")
+         if (LH) {
+           if (LH[3] && LH[3].indexOf(" > eval") > -1) {
+             const HH = gr.exec(LH[3]);
+             HH && (LH[1] = LH[1] || "eval", LH[3] = HH[1], LH[4] = HH[2], LH[5] = "")
+           }
+           let HH = LH[3],
+             AH = LH[1] || "?";
+           return [AH, HH] = fr(AH, HH), Ir(BH, HH, AH, LH[4] ? +LH[4] : void 0, LH[5] ? +LH[5] : void 0)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1183` → after: `L943-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L943-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L943-L944) · [Before (L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1183)

```diff
-       };
+       },
+       Rr = /\(error: (.*)\)/;
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1185-L1186` → after: `L946-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L946-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L946-L947) · [Before (L1185-L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1185-L1186)

```diff
-     function qU(UU) {
-       return (0, oU.b)(UU.split(",")[1])
+     function jr(HH, BH) {
+       return HH.filename === BH.filename && HH.function === BH.function && HH.module === BH.module && HH.lineno === BH.lineno && HH.colno === BH.colno
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1237-L1238` → after: `L950-L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L950-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L950-L966) · [Before (L1237-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1237-L1238)

```diff
-     function fU() {
-       uU || (uU = !0, rU(qU, OU, GU, CU, eU, WU, RU, PU, dU, BU), EU.c.loadFile = WU, EU.c.loadImage = RU, YU.o.loadFile = WU)
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
+         }
+ ... (1 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1249-L1285` → after: `L969-L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L969-L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L969-L973) · [Before (L1249-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1249-L1285)

```diff
-     function yU() {
-       if (cU) return cU;
-       const UU = new ArrayBuffer(4),
-         XU = new Float32Array(UU),
-         zU = new Uint32Array(UU),
-         yU = new Uint32Array(512),
-         QU = new Uint32Array(512);
-       for (let cU = 0; cU < 256; ++cU) {
-         const UU = cU - 127;
-         UU < -24 ? (yU[cU] = 0, yU[256 | cU] = 32768, QU[cU] = 24, QU[256 | cU] = 24) : UU < -14 ? (yU[cU] = 1024 >> -UU - 14, yU[256 | cU] = 1024 >> -UU - 14 | 32768, QU[cU] = -UU - 1, QU[256 | cU] = -UU - 1) : UU <= 15 ? (yU[cU] = UU + 15 << 10, yU[256 | cU] = UU + 15 << 10 | 3 … [truncated]
-       }
-       const AU = new Uint32Array(2048),
-         FU = new Uint32Array(64),
-         oU = new Uint32Array(64);
-       for (let cU = 1; cU < 1024; ++cU) {
-         let UU = cU << 13,
- ... (21 more removed lines; see GitHub link above)
+     function Fr(HH, BH) {
+       const LH = BH.start + BH.length,
+         AH = wr(HH, BH);
+       AH && HH.splice(LH + AH === HH.length ? LH : BH.start, AH)
+     }
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1287-L1292` → after: `L975-L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L975-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L975-L978) · [Before (L1287-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1287-L1292)

```diff
-     function AU(UU) {
-       const XU = yU();
-       XU.floatView[0] = UU;
-       const zU = XU.uint32View[0],
-         cU = zU >> 23 & 511;
-       return XU.baseTable[cU] + ((8388607 & zU) >> XU.shiftTable[cU])
+     function Dr(HH, BH) {
+       let LH = BH.start;
+       for (; LH > 0 && jr(HH[LH - 1], HH[LH - 1 + BH.length]);) LH--;
+       return BH.start - LH
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1295-L1297` → after: `L981-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L981-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L981-L985) · [Before (L1295-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1295-L1297)

```diff
-     function FU(UU) {
-       const XU = yU();
-       return XU.uint32View[0] = XU.mantissaTable[XU.offsetTable[UU >> 10] + (1023 & UU)] + XU.exponentTable[UU >> 10], XU.floatView[0]
+     function wr(HH, BH) {
+       const LH = BH.start + BH.length;
+       let AH = LH;
+       for (; HH.length > AH && jr(HH[AH], HH[AH - BH.length]);) AH++;
+       return AH - LH
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1299-L1338` → after: `L987-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L987-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L987-L992) · [Before (L1299-L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1299-L1338)

```diff
-   },
-   41171: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => QU,
-       d: () => yU,
-       f: () => cU
-     });
-     const cU = UU => {
-         const XU = ArrayBuffer.isView(UU) ? new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength) : new Uint8Array(UU);
-         return "function" === typeof XU.toBase64 ? XU.toBase64() : function(UU) {
-           const XU = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
-           let zU, cU, yU, QU, AU, FU, oU, DU = "",
-             EU = 0;
-           for (; EU < UU.length;) zU = UU[EU++], cU = EU < UU.length ? UU[EU++] : Number.NaN, yU = EU < UU.length ? UU[EU++] : Number.NaN, QU = zU >> 2, AU = (3 & zU) << 4 | cU >> 4, FU = (15 & cU) << 2 | yU >> 6, oU = 63 & yU, isNaN(cU) ? FU = oU = 64 : isNaN(yU) && (oU = 64), D … [truncated]
-           return DU
-         }(XU)
- ... (24 more removed lines; see GitHub link above)
+ 
+     function Zr(HH, BH) {
+       const LH = BH[0];
+       let AH = HH.length - (LH ? Dr(HH, LH) : 0);
+       for (const rH of BH) AH -= wr(HH, rH);
+       return AH
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1342-L1345` → after: `L996-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L996-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L996-L999) · [Before (L1342-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1342-L1345)

```diff
-       try {
-         if (UU()) return XU(), !0
-       } catch (cU) {
-         return zU?.(cU), !0
+       for (let AH = 0; HH.length > AH; AH++) {
+         const rH = HH[(BH + AH) % HH.length],
+           SH = HH[(LH + AH) % HH.length];
+         if (rH !== SH) return SH > rH
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1349-L1387` → after: `L1003-L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1003-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1003-L1005) · [Before (L1349-L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1349-L1387)

```diff
-     const AU = function(UU, XU, zU) {
-       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
-         yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
-         AU = arguments.length > 6 ? arguments[6] : void 0;
-       if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && QU(UU, XU, zU)) return null;
-       const FU = setInterval((() => {
-         QU(UU, XU, zU) ? clearInterval(FU) : (yU -= cU, yU < 0 && (clearInterval(FU), zU?.(new Error("Operation timed out after maximum retries. " + (AU || "")), !0)))
-       }), cU);
-       return () => clearInterval(FU)
-     }
-   },
-   41160: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => cU
-     });
-     class cU {
- ... (23 more removed lines; see GitHub link above)
+     var ar = class {
+         match(HH) {
+           return this.isDOMException(HH) || this.isDOMError(HH)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1389-L1391` → after: `L1007-L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1007-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1007-L1014) · [Before (L1389-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1389-L1391)

```diff
-         const zU = {
-           setRequestHeader: (UU, zU) => {
-             XU[UU] = zU
+         coerce(HH, BH) {
+           const LH = OL(HH.stack);
+           return {
+             type: this.getType(HH),
+             value: this.getValue(HH),
+             stack: LH ? HH.stack : void 0,
+             cause: HH.cause ? BH.next(HH.cause) : void 0,
+             synthetic: !1
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1399-L1401` → after: `L1017-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1017-L1018) · [Before (L1399-L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1399-L1401)

```diff
-         return {
-           url: UU,
-           headers: XU
+         getType(HH) {
+           return this.isDOMError(HH) ? "DOMError" : "DOMException"
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1403-L1415` → after: `L1020-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1020-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1020-L1076) · [Before (L1403-L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1403-L1415)

```diff
-       }
-       static async FetchAsync(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-         const zU = XU.method ?? "GET";
-         if ("undefined" !== typeof fetch) {
-           const {
-             url: yU,
-             headers: QU
-           } = cU._CollectCustomizations(cU._CleanUrl(UU), XU.headers ?? {});
-           return await fetch(yU, {
-             method: zU,
-             headers: QU,
-             body: XU.body ?? void 0
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
+ ... (41 more added lines; see GitHub link above)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1418-L1440` → after: `L1079-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1079-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1079-L1093) · [Before (L1418-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1418-L1440)

```diff
-         return await new Promise(((yU, QU) => {
-           const AU = new cU;
-           AU.responseType = "arraybuffer", AU.addEventListener("readystatechange", (() => {
-             if (4 === AU.readyState)
-               if (AU.status >= 200 && AU.status < 300) {
-                 const UU = "undefined" !== typeof Headers ? new Headers : void 0,
-                   XU = AU.getResponseHeader("Content-Type");
-                 XU && UU && UU.set("Content-Type", XU), "undefined" !== typeof Response ? yU(new Response(AU.response, {
-                   status: AU.status,
-                   statusText: AU.statusText,
-                   headers: UU
-                 })) : yU({
-                   ok: !0,
-                   status: AU.status,
-                   statusText: AU.statusText,
-                   headers: {
- ... (7 more removed lines; see GitHub link above)
+         _hasUsableMessage(HH) {
+           return OL(HH.message) && HH.message.length > 0
+         }
+         _buildLocationStack(HH) {
+           var BH, LH;
+           const AH = HH,
+             rH = null !== (BH = AH.lineno) && void 0 !== BH ? BH : 0,
+             SH = null !== (LH = AH.colno) && void 0 !== LH ? LH : 0;
+           if (OL(AH.filename) && 0 !== AH.filename.length && 0 !== rH) return `Error\n    at ${AH.filename}:${rH}:${SH}`
+         }
+       };
+     const ir = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
+     var pr = class {
+       match(HH) {
+         return "string" == typeof HH
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1442-L1443` → after: `L1095-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1095-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1095-L1103) · [Before (L1442-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1442-L1443)

```diff
-       get requestURL() {
-         return this._requestURL
+       coerce(HH, BH) {
+         var LH;
+         const [AH, rH] = this.getInfos(HH);
+         return {
+           type: null != AH ? AH : "Error",
+           value: null != rH ? rH : HH,
+           stack: null === (LH = BH.syntheticException) || void 0 === LH ? void 0 : LH.stack,
+           synthetic: !0
+         }
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1445-L1446` → after: `L1105-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1105-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1105-L1109) · [Before (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1445-L1446)

```diff
-       get onprogress() {
-         return this._xhr.onprogress
+       getInfos(HH) {
+         let BH = "Error",
+           LH = HH;
+         const AH = HH.match(ir);
+         return AH && (BH = AH[1], LH = AH[2]), [BH, LH]
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1448-L1449` → after: `L1111-L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1111-L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1111-L1302) · [Before (L1448-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1448-L1449)

```diff
-       set onprogress(UU) {
-         this._xhr.onprogress = UU
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
+ ... (176 more added lines; see GitHub link above)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1451-L1452` → after: `L1304-L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1304-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1304-L1305) · [Before (L1451-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1451-L1452)

```diff
-       get readyState() {
-         return this._xhr.readyState
+       size() {
+         return this._entries.length
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1454-L1455` → after: `L1307-L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1307-L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1307-L1325) · [Before (L1454-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1454-L1455)

```diff
-       get status() {
-         return this._xhr.status
+       _trimToMaxBytes() {
+         for (; this._totalBytes > this._config.max_bytes && this._entries.length > 0;) {
+           const HH = this._entries.shift();
+           HH && (this._totalBytes -= HH.bytes)
+         }
+       }
+     };
+ 
+     function XS(HH, BH) {
+       if (!oL(HH) || 1 / 0 === HH || -1 / 0 === HH) return BH;
+       const LH = Math.floor(HH);
+       return 0 > LH ? BH : LH
+     }
+     const GS = HH => {
+       if ("string" != typeof HH) return HH;
+       try {
+ ... (3 more added lines; see GitHub link above)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1457-L1458` → after: `L1327-L1412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1327-L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1327-L1412) · [Before (L1457-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1457-L1458)

```diff
-       get statusText() {
-         return this._xhr.statusText
+     };
+ 
+     function YS(HH) {
+       return "string" == typeof HH || HH
+     }
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
+ ... (70 more added lines; see GitHub link above)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1460-L1461` → after: `L1414-L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1414-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1414-L1470) · [Before (L1460-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1460-L1461)

```diff
-       get response() {
-         return this._xhr.response
+       return rH
+     }
+     const kS = "[redacted]",
+       mS = /^[A-Za-z0-9+/\n\r]+=*$/,
+       oS = /^[A-Za-z0-9_-]+={0,2}$/,
+       IS = /[-_]/,
+       fS = /^data:[^,\s]*;base64,/i,
+       lS = /^[A-Za-z0-9+/_-]+={0,2}$/,
+       KS = /\bph[a-z]_[A-Za-z0-9_-]{20,}\b/g,
+       cS = /^(authorization|cookie|set-cookie|x-api-key|api[-_]?key|api[-_]?token|access[-_]?token|refresh[-_]?token|token|password|secret|client[-_]?secret|private[-_]?key)$/i,
+       eS = /[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi,
+       qS = /[\s<>"]/,
+       gS = new RegExp(eS.source, "i"),
+       NS = /[a-z][a-z0-9+.-]{0,63}:\/\//i,
+       RS = new RegExp(`^${NS.source}`, "i"),
+       jS = new RegExp(NS.source, "gi"),
+ ... (41 more added lines; see GitHub link above)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1463-L1464` → after: `L1472-L1475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1472-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1472-L1475) · [Before (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1463-L1464)

```diff
-       get responseURL() {
-         return this._xhr.responseURL
+       return {
+         changed: AH,
+         lastFieldSensitive: rH,
+         serialized: LH.toString()
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1466-L1467` → after: `L1477-L1487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1477-L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1477-L1487) · [Before (L1466-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1466-L1467)

```diff
-       get responseText() {
-         return this._xhr.responseText
+     }
+ 
+     function Ah(HH, BH) {
+       if (!HH.includes("=")) return {
+         value: rh(HH, BH),
+         lastFieldSensitive: !1
+       };
+       const LH = Lh(HH, BH);
+       return {
+         value: LH.changed ? LH.serialized : HH,
+         lastFieldSensitive: LH.lastFieldSensitive
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1469-L1470` → after: `L1489-L1523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1489-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1489-L1523) · [Before (L1469-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1469-L1470)

```diff
-       get responseType() {
-         return this._xhr.responseType
+     }
+ 
+     function rh(HH, BH) {
+       return BH ? th(HH, {
+         allowNestedUrls: !1,
+         stripPunctuation: !0
+       }) : gS.test(HH) ? kS : HH
+     }
+ 
+     function Sh(HH, BH, LH) {
+       return "#" === HH ? !BH.fragment && (BH.fragment = !0) : "?" === HH && (BH.fragment ? "=" !== LH && !BH.fragmentQuery && (BH.fragmentQuery = !0) : !BH.query && (BH.query = !0))
+     }
+ 
+     function hh(HH, BH) {
+       var LH;
+       if (HH.length > 8192 && RS.test(HH)) return kS;
+ ... (19 more added lines; see GitHub link above)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1472-L1473` → after: `L1525-L1598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1525-L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1525-L1598) · [Before (L1472-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1472-L1473)

```diff
-       set responseType(UU) {
-         this._xhr.responseType = UU
+       const hH = SH.search.slice(1),
+         tH = "" !== SH.hash,
+         zH = function(HH) {
+           const BH = HH.slice(1),
+             LH = BH.indexOf("?");
+           return 0 > LH ? {
+             head: BH,
+             tail: null
+           } : {
+             head: BH.slice(0, LH),
+             tail: BH.slice(LH + 1)
+           }
+         }(SH.hash);
+       if (Hh(hH) || Hh(zH.head) || Hh(null !== (LH = zH.tail) && void 0 !== LH ? LH : "")) return kS + rH;
+       let CH = !1;
+       (SH.username || SH.password) && (SH.username = kS, SH.password = "", CH = !0);
+ ... (58 more added lines; see GitHub link above)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1475-L1476` → after: `L1600-L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1600-L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1600-L1617) · [Before (L1475-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1475-L1476)

```diff
-       get timeout() {
-         return this._xhr.timeout
+       return BH % 10 == 0
+     }
+ 
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
+ ... (2 more added lines; see GitHub link above)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1478-L1479` → after: `L1619-L1630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1619-L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1619-L1630) · [Before (L1478-L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1478-L1479)

```diff
-       set timeout(UU) {
-         this._xhr.timeout = UU
+       return LH + HH.slice(AH)
+     }
+     const Xh = {}.propertyIsEnumerable;
+ 
+     function Gh(HH, BH) {
+       try {
+         return Qh(HH, BH, {
+           ancestors: new WeakSet,
+           remainingNodes: 1e4
+         }, 0)
+       } catch (HH) {
+         return []
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1481-L1482` → after: `L1632-L1670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1632-L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1632-L1670) · [Before (L1481-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1481-L1482)

```diff
-       addEventListener(UU, XU, zU) {
-         this._xhr.addEventListener(UU, XU, zU)
+     }
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
+ ... (23 more added lines; see GitHub link above)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1484-L1485` → after: `L1672-L1712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1672-L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1672-L1712) · [Before (L1484-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1484-L1485)

```diff
-       removeEventListener(UU, XU, zU) {
-         this._xhr.removeEventListener(UU, XU, zU)
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

#### 93. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1487-L1488` → after: `L1714-L1715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1714-L1715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1714-L1715) · [Before (L1487-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1487-L1488)

```diff
-       abort() {
-         this._xhr.abort()
+       return {
+         stringValue: Ar(String(HH))
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1490-L1491` → after: `L1717-L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1717-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1717-L1730) · [Before (L1490-L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1490-L1491)

```diff
-       send(UU) {
-         this._xhr.send(UU)
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

#### 95. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1493-L1499` → after: `L1732-L1833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1732-L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1732-L1833) · [Before (L1493-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1493-L1499)

```diff
-       open(UU, XU, zU) {
-         const {
-           url: yU,
-           headers: QU
-         } = cU._CollectCustomizations(XU, zU);
-         this._requestURL = cU._CleanUrl(yU), this._xhr.open(UU, this._requestURL, !0);
-         for (const cU in QU) this._xhr.setRequestHeader(cU, QU[cU])
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
+ ... (86 more added lines; see GitHub link above)
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1501-L1502` → after: `L1835-L1871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1835-L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1835-L1871) · [Before (L1501-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1501-L1502)

```diff
-       setRequestHeader(UU, XU) {
-         this._xhr.setRequestHeader(UU, XU)
+     }
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
+ ... (21 more added lines; see GitHub link above)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1504-L1505` → after: `L1873-L1903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1873-L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1873-L1903) · [Before (L1504-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1504-L1505)

```diff
-       getResponseHeader(UU) {
-         return this._xhr.getResponseHeader(UU)
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

#### 98. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1508` → after: `L1906-L12783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1906-L12783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/277.js#L1906-L12783) · [Before (L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/277.js#L1508)

```diff
-     cU.CustomRequestHeaders = {}, cU.CustomRequestModifiers = new Array, cU.SkipRequestModificationForBabylonCDN = !0
+     var kh = class {
+       constructor(HH) {
+         this._onFire = HH, this._firesAt = 0
+       }
+       get pending() {
+         return !!this._timer
+       }
+       arm(HH) {
+         this.clear(), this._firesAt = Date.now() + HH, this._timer = Gr((() => {
+           this._timer = void 0, this._onFire()
+         }), HH)
+       }
+       armNoEarlierThan(HH) {
+         this._timer && Date.now() + HH <= this._firesAt || this.arm(HH)
+       }
+       clear() {
+ ... (10862 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/278.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/278.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/278.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/278.js#L4-L6)

```diff
-   41207: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => QU
+   41086: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       playDocsSound: () => zH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L8-L19` → after: `L8-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/278.js#L8-L26) · [Before (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/278.js#L8-L19)

```diff
-     var cU = zU(39493),
-       yU = zU(37863);
-     class QU {
-       static Instantiate(UU) {
-         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[UU]) return this.RegisteredExternalClasses[UU];
-         const XU = (0, yU.e)(UU);
-         if (XU) return XU;
-         cU.b.Warn(UU + " not found, you may have missed an import.");
-         const zU = UU.split(".");
-         let QU = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
-         for (let cU = 0, yU = zU.length; cU < yU; cU++) QU = QU[zU[cU]];
-         return "function" !== typeof QU ? null : QU
+     var AH = LH(5335),
+       rH = LH(37617),
+       SH = LH(1131),
+       hH = LH(37626);
+     const tH = new Map;
+ 
+     function zH(HH, BH, LH, zH, CH) {
+       let EH, XH = 0;
+       if (BH) EH = new AH.Howl({
+         src: [`${SH.clientSideServerUrls.staticUrl}/sounds/music/${HH}.mp3`],
+         html5: !0,
+         volume: LH
+       });
+       else {
+         const BH = (0, rH.v)(HH);
+         XH = BH.ms / 1e3, EH = tH.get(HH), EH || (EH = new AH.Howl({
+ ... (3 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L21-L279` → after: `L28-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L28-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/278.js#L28-L71) · [Before (L21-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/278.js#L21-L279)

```diff
-     }
-     QU.RegisteredExternalClasses = {}
-   },
-   41010: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => yU
-     });
-     var cU = zU(40971);
-     class yU {
-       static get Now() {
-         return (0, cU.h)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
-       }
-     }
-   },
-   41036: (UU, XU, zU) => {
-     function cU(UU) {
- ... (243 more removed lines; see GitHub link above)
+       const GH = BH ? EH.play() : EH.play(hH.b);
+       EH.volume(LH, GH), zH > 0 && EH.seek(zH, GH);
+       const YH = () => {
+         const HH = EH.duration();
+         return BH || HH > 0 ? HH : XH
+       };
+       let uH = !1;
+       const QH = HH => {
+           uH || (uH = !0, EH.off("play", WH, GH), EH.off("end", MH, GH), EH.off("loaderror", vH), EH.off("playerror", xH, GH), BH && EH.unload(), CH.onEnd(HH))
+         },
+         WH = () => {
+           CH.onPlay(YH())
+         },
+         MH = () => {
+           QH(!1)
+         },
+ ... (28 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/279.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/279.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef)

#### 1. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L4-L6)

```diff
-   41508: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => cU
+   41097: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       default: () => aH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L8-L195` → after: `L8-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L8-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L8-L102) · [Before (L8-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L8-L195)

```diff
-     let cU = !1
-   },
-   41108: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => pU
-     });
-     var cU = zU(41113),
-       yU = zU(41121),
-       QU = zU(37846),
-       AU = zU(37819),
-       FU = zU(37841),
-       oU = zU(38649),
-       DU = zU(41125);
-     class EU {
-       get wrapU() {
-         return this._wrapU
- ... (172 more removed lines; see GitHub link above)
+     LH(7e3);
+     var AH = LH(45),
+       rH = LH(41106),
+       SH = LH(41374),
+       hH = LH(41478),
+       tH = LH(41525),
+       zH = LH(41538),
+       CH = LH(38071),
+       EH = LH(37961),
+       XH = LH(41685),
+       GH = LH(41749),
+       YH = (LH(41784), LH(1168)),
+       uH = LH(176),
+       QH = LH(1123),
+       WH = LH(15),
+       MH = LH(3018),
+ ... (79 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L197-L286` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L104-L107) · [Before (L197-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L197-L286)

```diff
-           this.nS()?.markAllMaterialsAsDirty(1, (UU => UU.hasTexture(this)))
-         }
-         get isRGBD() {
-           return null != this._texture && this._texture._isRGBD
-         }
-         set isRGBD(UU) {
-           UU !== this.isRGBD && (this._texture && (this._texture._isRGBD = UU), this.nS()?.markAllMaterialsAsDirty(1, (UU => UU.hasTexture(this))))
-         }
-         get noMipmap() {
-           return !1
-         }
-         get lodGenerationOffset() {
-           return this._texture ? this._texture._lodGenerationOffset : 0
-         }
-         set lodGenerationOffset(UU) {
-           this._texture && (this._texture._lodGenerationOffset = UU)
- ... (74 more removed lines; see GitHub link above)
+           return {
+             positions: Int32Array.from(LH),
+             values: Float64Array.from(AH),
+             count: AH.length
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L288-L324` → after: `L109-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L109-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L109-L115) · [Before (L288-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L288-L324)

```diff
-           return null
-         }
-         _rebuild() {}
-         clone() {
-           return null
-         }
-         get textureType() {
-           return this._texture && void 0 !== this._texture.type ? this._texture.type : 0
-         }
-         get textureFormat() {
-           return this._texture && void 0 !== this._texture.format ? this._texture.format : 5
-         }
-         _markAllSubMeshesAsTexturesDirty() {
-           const UU = this.nS();
-           UU && UU.markAllMaterialsAsDirty(1)
-         }
- ... (21 more removed lines; see GitHub link above)
+         }(BH, oB)), [BH, oB]),
+         cB = OH * SB.cameraFOV / 100,
+         eB = XB.height > 0 ? XB.width / XB.height : 1,
+         qB = (0, AH.useMemo)((() => function(HH, BH) {
+           return {
+             min: [HH.min[0] - BH[0], HH.min[1] - BH[1], HH.min[2] - BH[2]],
+             max: [HH.max[0] - BH[0] + 1, HH.max[1] - BH[1] + 1, HH.max[2] - BH[2] + 1]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L326-L337` → after: `L117-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L117-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L117-L132) · [Before (L326-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L326-L337)

```diff
-         }
-         _readPixelsSync() {
-           let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-             XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-             zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-             cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
-             yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-           if (!this._texture) return null;
-           const QU = this.getSize();
-           let AU = QU.width,
-             FU = QU.height;
-           const oU = this._getEngine();
+         }(RH, oB)), [RH, oB]),
+         gB = LB(qB, eB, cB),
+         NB = null !== kB && void 0 !== kB ? kB : gB,
+         RB = (0, AH.useRef)({
+           fittedView: gB,
+           fieldOfView: cB,
+           mouseSensitivity: SB.mouseSensitivity,
+           canLock: WB
+         });
+       RB.current = {
+         fittedView: gB,
+         fieldOfView: cB,
+         mouseSensitivity: SB.mouseSensitivity,
+         canLock: WB
+       };
+       const jB = (0, AH.useMemo)((() => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L339-L362` → after: `L134-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L134-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L134-L172) · [Before (L339-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L339-L362)

```diff
-           0 != XU && (AU /= Math.pow(2, XU), FU /= Math.pow(2, XU), AU = Math.round(AU), FU = Math.round(FU));
-           try {
-             return this._texture.isCube ? oU._readTexturePixelsSync(this._texture, AU, FU, UU, XU, zU, cU, yU) : oU._readTexturePixelsSync(this._texture, AU, FU, -1, XU, zU, cU, yU)
-           } catch (DU) {
-             return null
-           }
-         }
-         get _lodTextureHigh() {
-           return this._texture ? this._texture._lodTextureHigh : null
-         }
-         get _lodTextureMid() {
-           return this._texture ? this._texture._lodTextureMid : null
-         }
-         get _lodTextureLow() {
-           return this._texture ? this._texture._lodTextureLow : null
-         }
- ... (8 more removed lines; see GitHub link above)
+           const HH = (HH, LH, AH) => {
+               var rH, SH, hH;
+               return null !== (rH = null === (SH = BH.frequencies[HH + oB[0]]) || void 0 === SH || null === (hH = SH[LH + oB[1]]) || void 0 === hH ? void 0 : hH[AH + oB[2]]) && void 0 !== rH ? rH : 0
+             },
+             AH = function(HH, BH, LH, AH) {
+               let rH = 0,
+                 SH = 1 / 0;
+               for (const XH of [0, 1, 2]) {
+                 if (0 === BH[XH]) {
+                   if (HH[XH] < 0 || HH[XH] > LH[XH]) return null;
+                   continue
+                 }
+                 const AH = (0 - HH[XH]) / BH[XH],
+                   hH = (LH[XH] - HH[XH]) / BH[XH];
+                 rH = Math.max(rH, Math.min(AH, hH)), SH = Math.min(SH, Math.max(AH, hH))
+               }
+ ... (23 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L364-L382` → after: `L174-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L174-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L174-L186) · [Before (L364-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L364-L382)

```diff
-           this.bS.notifyObservers(this), this.bS.clear(), this.metadata = null, super.dispose()
-         }
-         serialize() {
-           let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-           if (!this.name && !UU) return null;
-           const XU = NU.b.Serialize(this);
-           return NU.b.AppendSerializedAnimations(this, XU), XU
-         }
-         static WhenAllReady(UU, XU) {
-           let zU = UU.length;
-           if (0 !== zU)
-             for (let cU = 0; cU < UU.length; cU++) {
-               const yU = UU[cU];
-               if (yU.isReady()) 0 === --zU && XU();
-               else {
-                 const UU = yU.onLoadObservable;
- ... (3 more removed lines; see GitHub link above)
+         }), [TB, BH, oB, NB, lB, LH, KH]),
+         {
+           keyHandlers: nB
+         } = (0, TH.g)({
+           isEnabled: TB,
+           claimedKeyCodes: fH,
+           KG: HH => {
+             mB((BH => function(HH, BH) {
+               const LH = [Math.sin(HH.heading), 0, Math.cos(HH.heading)],
+                 AH = hB(hB(tB(LH, BH.forward), tB(BB(HH.heading), BH.right)), [0, BH.up, 0]);
+               return {
+                 ...HH,
+                 position: hB(HH.position, AH)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L384-L458` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L188) · [Before (L384-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L384-L458)

```diff
-             } else XU()
-         }
-         static _IsScene(UU) {
-           return "Scene" === UU.getClassName()
-         }
-       }, (() => {
-         const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(uU[Symbol.metadata] ?? null) : void 0;
-         XU = [(0, yU.I)()], zU = [(0, yU.I)()], DU = [(0, yU.I)()], YU = [(0, yU.I)()], IU = [(0, yU.I)("hasAlpha")], pU = [(0, yU.I)("getAlphaFromRGB")], aU = [(0, yU.I)()], tU = [(0, yU.I)("coordinatesIndex")], gU = [(0, yU.I)()], kU = [(0, yU.I)("coordinatesMode")], GU = [(0,  … [truncated]
-           kind: "getter",
-           name: "wrapU",
-           static: !1,
-           private: !1,
-           access: {
-             has: UU => "wrapU" in UU,
-             get: UU => UU.wrapU
-           },
- ... (59 more removed lines; see GitHub link above)
+             }(null !== BH && void 0 !== BH ? BH : RB.current.fittedView, HH)))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L460-L591` → after: `L190-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L190-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L190-L245) · [Before (L460-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L460-L591)

```diff
-           metadata: QU
-         }, null, fU), (0, cU.j)(UU, null, qU, {
-           kind: "getter",
-           name: "lodGenerationScale",
-           static: !1,
-           private: !1,
-           access: {
-             has: UU => "lodGenerationScale" in UU,
-             get: UU => UU.lodGenerationScale
-           },
-           metadata: QU
-         }, null, fU), (0, cU.j)(UU, null, OU, {
-           kind: "getter",
-           name: "linearSpecularLOD",
-           static: !1,
-           private: !1,
- ... (116 more removed lines; see GitHub link above)
+           onZoomChange: VB
+         });
+       (0, AH.useEffect)((() => {
+         const HH = CB.current;
+         if (!HH) return;
+         let BH;
+         try {
+           BH = function(HH, BH) {
+             const LH = new rH.b(HH, !0, {
+                 stencil: !1
+               }, !0),
+               AH = new SH.e(LH),
+               [YH, uH, QH] = PH.Q;
+             AH.clearColor = new CH.d(YH / 255, uH / 255, QH / 255, 1);
+             const WH = new hH.b("Heatmap3DCamera", EH.lu.Zero(), AH);
+             WH.fov = BH, WH.minZ = .05;
+ ... (40 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L594-L605` → after: `L263-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L263-L264) · [Before (L594-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L594-L605)

```diff
-           metadata: QU
-         }, TU, hU), (0, cU.j)(null, null, gU, {
-           kind: "field",
-           name: "optimizeUVAllocation",
-           static: !1,
-           private: !1,
-           access: {
-             has: UU => "optimizeUVAllocation" in UU,
-             get: UU => UU.optimizeUVAllocation,
-             set: (UU, XU) => {
-               UU.optimizeUVAllocation = XU
-             }
+           LH = () => {
+             xB.current && (xB.current = !1, MB(!1))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L607-L617` → after: `L266-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L266-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L266-L326) · [Before (L607-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L607-L617)

```diff
-           metadata: QU
-         }, UX, XX), (0, cU.j)(null, null, kU, {
-           kind: "field",
-           name: "_coordinatesMode",
-           static: !1,
-           private: !1,
-           access: {
-             has: UU => "_coordinatesMode" in UU,
-             get: UU => UU._coordinatesMode,
-             set: (UU, XU) => {
-               UU._coordinatesMode = XU
+           AH = BH => {
+             const LH = !RB.current.canLock && document.activeElement === HH && 0 !== (1 & BH.buttons);
+             if (document.pointerLockElement !== HH && !LH) return;
+             const AH = RB.current.mouseSensitivity * kH;
+             mB((HH => function(HH, BH, LH) {
+               const AH = 2 * Math.PI;
+               return {
+                 ...HH,
+                 heading: ((HH.heading + BH) % AH + AH) % AH,
+                 pitch: Math.max(-gH, Math.min(gH, HH.pitch + LH))
+               }
+             }(null !== HH && void 0 !== HH ? HH : RB.current.fittedView, BH.movementX * AH, BH.movementY * AH)))
+           };
+         return document.addEventListener("pointerlockchange", BH), document.addEventListener("pointerlockerror", LH), document.addEventListener("pointermove", AH), () => {
+           document.removeEventListener("pointerlockchange", BH), document.removeEventListener("pointerlockerror", LH), document.removeEventListener("pointermove", AH), document.pointerLockElement === HH && (0, UH.e)()
+         }
+ ... (45 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L620-L631` → after: `L361-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L361-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L361-L372) · [Before (L620-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L620-L631)

```diff
-           metadata: QU
-         }, zX, cX), (0, cU.j)(null, null, ZU, {
-           kind: "field",
-           name: "wrapR",
-           static: !1,
-           private: !1,
-           access: {
-             has: UU => "wrapR" in UU,
-             get: UU => UU.wrapR,
-             set: (UU, XU) => {
-               UU.wrapR = XU
-             }
+           tabIndex: 0,
+           "aria-label": aH("3D heatmap"),
+           onClick: () => {
+             const HH = CB.current;
+             if (null === HH) return;
+             if (HH.focus({
+                 preventScroll: !0
+               }), uB || !WB) return;
+             const BH = HH.requestPointerLock();
+             BH instanceof Promise ? BH.catch((HH => {
+               HH instanceof DOMException && ("WrongDocumentError" === HH.name || "NotSupportedError" === HH.name) && MB(!1)
+             })) : xB.current = !0
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L633-L644` → after: `L374-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L374-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L374-L381) · [Before (L633-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L633-L644)

```diff
-           metadata: QU
-         }, yX, QX), (0, cU.j)(null, null, RU, {
-           kind: "field",
-           name: "anisotropicFilteringLevel",
-           static: !1,
-           private: !1,
-           access: {
-             has: UU => "anisotropicFilteringLevel" in UU,
-             get: UU => UU.anisotropicFilteringLevel,
-             set: (UU, XU) => {
-               UU.anisotropicFilteringLevel = XU
-             }
+           ...nB,
+           onKeyDown: HH => {
+             if (TB && mH.has(HH.code)) return HH.preventDefault(), void(() => {
+               const HH = CB.current;
+               null !== HH && document.pointerLockElement === HH ? (0, UH.e)() : null === HH || void 0 === HH || HH.blur()
+             })();
+             const BH = oH[HH.code];
+             return TB && void 0 !== BH ? (HH.preventDefault(), void FH(BH)) : TB && (0, TH.e)("replayPlayPause", HH.code) && !(0, TH.e)("Zoom", HH.code) ? (HH.preventDefault(), void(HH.repeat || wH())) : TB && HH.code === IH ? (HH.preventDefault(), void DH()) : TB && HH.code ===  … [truncated]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L646-L657` → after: `L383-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L383-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L383-L384) · [Before (L646-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L646-L657)

```diff
-           metadata: QU
-         }, AX, FX), (0, cU.j)(null, null, eU, {
-           kind: "field",
-           name: "invertZ",
-           static: !1,
-           private: !1,
-           access: {
-             has: UU => "invertZ" in UU,
-             get: UU => UU.invertZ,
-             set: (UU, XU) => {
-               UU.invertZ = XU
-             }
+           onFocus: () => {
+             PB(!0)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L659-L670` → after: `L386-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L386-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L386-L409) · [Before (L659-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L659-L670)

```diff
-           metadata: QU
-         }, oX, DX), (0, cU.j)(null, null, CU, {
-           kind: "field",
-           name: "lodLevelInAlpha",
-           static: !1,
-           private: !1,
-           access: {
-             has: UU => "lodLevelInAlpha" in UU,
-             get: UU => UU.lodLevelInAlpha,
-             set: (UU, XU) => {
-               UU.lodLevelInAlpha = XU
-             }
+           onBlur: () => {
+             PB(!1), nB.onBlur()
+           }
+         }), GB && (0, VH.jsx)("div", {
+           className: "StudioHeatmap3DUnavailable SmallTextLight",
+           children: aH("3D view isn't available in this browser.")
+         }), TB && (0, VH.jsx)("div", {
+           className: "StudioHeatmap3DCrosshair"
+         }), (0, VH.jsx)("div", {
+           className: "StudioHeatmap3DCoordinates SmallTextLight",
+           children: NB.position.map(((HH, BH) => (HH + oB[BH]).toFixed(2))).join(" ")
+         }), OB && (0, VH.jsx)(sH, {
+           heading: NB.heading,
+           pitch: NB.pitch,
+           onViewFrom: HH => {
+             const BH = tB(HH, -1),
+ ... (8 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L672-L683` → after: `L411-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L411-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L411-L417) · [Before (L672-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L672-L683)

```diff
-           metadata: QU
-         }, EX, YX), (0, cU.j)(null, null, rU, {
-           kind: "field",
-           name: "isRenderTarget",
-           static: !1,
-           private: !1,
-           access: {
-             has: UU => "isRenderTarget" in UU,
-             get: UU => UU.isRenderTarget,
-             set: (UU, XU) => {
-               UU.isRenderTarget = XU
-             }
+           onTurn: (HH, BH) => {
+             mB((LH => function(HH, BH, LH, AH) {
+               return AB(HH, BH, {
+                 heading: HH.heading + LH * ZH,
+                 pitch: Math.max(-gH, Math.min(gH, HH.pitch + AH * ZH))
+               })
+             }(null !== LH && void 0 !== LH ? LH : RB.current.fittedView, rB(qB), HH, BH)))
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L685-L711` → after: `L419-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L419-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L419-L617) · [Before (L685-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L685-L711)

```diff
-           metadata: QU
-         }, NX, IX), QU && Object.defineProperty(UU, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: QU
-         })
-       })(), UU.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, UU
-     })();
-     (YU = pU.prototype).forceSphericalPolynomialsRecompute ?? (YU.forceSphericalPolynomialsRecompute = (0, IU.k)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(pU.prototype, "sphericalPolynomial") || Object.defineProperty(pU.prototype, "sph … [truncated]
-   },
-   41557: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => ZU,
-       e: () => GU
-     });
- ... (11 more removed lines; see GitHub link above)
+           onFlip: () => {
+             mB((HH => function(HH, BH) {
+               return AB(HH, BH, {
+                 heading: HH.heading + Math.PI,
+                 pitch: -HH.pitch
+               })
+             }(null !== HH && void 0 !== HH ? HH : RB.current.fittedView, rB(qB))))
+           }
+         }), null !== jB && (0, VH.jsx)("div", {
+           className: "StudioHeatmapMapReadout SmallTextLight",
+           children: null === dH ? aH("studio:heatmapBlockReadout", {
+             x: jB.x,
+             y: jB.y,
+             z: jB.z,
+             count: (0, YH.T)(jB.value)
+           }) : dH(jB.x, jB.y, jB.z, jB.value)
+ ... (183 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L714-L724` → after: `L620-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L620-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L620-L657) · [Before (L714-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L714-L724)

```diff
-       let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const cU = XU.width,
-         yU = XU.height;
-       if (UU instanceof Float32Array) {
-         let XU = UU.byteLength / UU.BYTES_PER_ELEMENT;
-         const zU = new Uint8Array(XU);
-         for (; --XU >= 0;) {
-           let cU = UU[XU];
-           cU < 0 ? cU = 0 : cU > 1 && (cU = 1), zU[XU] = 255 * cU
-         }
-         UU = zU
+       const LH = (LH, AH, rH) => new EH.lu(0 === LH ? HH[0] : BH[0], 0 === AH ? HH[1] : BH[1], 0 === rH ? HH[2] : BH[2]),
+         AH = [];
+       for (const rH of [0, 1])
+         for (const HH of [0, 1]) AH.push([LH(0, rH, HH), LH(1, rH, HH)], [LH(rH, 0, HH), LH(rH, 1, HH)], [LH(rH, HH, 0), LH(rH, HH, 1)]);
+       return AH
+     }
+ 
+     function HB(HH) {
+       return [Math.sin(HH.heading) * Math.cos(HH.pitch), -Math.sin(HH.pitch), Math.cos(HH.heading) * Math.cos(HH.pitch)]
+     }
+ 
+     function BB(HH) {
+       return [Math.cos(HH), 0, -Math.sin(HH)]
+     }
+ 
+     function LB(HH, BH, LH) {
+ ... (22 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L726-L735` → after: `L659-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L659-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L659-L669) · [Before (L726-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L726-L735)

```diff
-       const QU = document.createElement("canvas");
-       QU.width = cU, QU.height = yU;
-       const AU = QU.getContext("2d");
-       if (!AU) return null;
-       const FU = AU.createImageData(cU, yU);
-       if (FU.data.set(UU), AU.putImageData(FU, 0, 0), zU) {
-         const UU = document.createElement("canvas");
-         UU.width = cU, UU.height = yU;
-         const XU = UU.getContext("2d");
-         return XU ? (XU.translate(0, yU), XU.scale(1, -1), XU.drawImage(QU, 0, 0), UU.toDataURL("image/png")) : null
+     }
+ 
+     function AB(HH, BH, LH) {
+       const AH = SB(HH),
+         rH = SB(LH),
+         SH = hB(HH.position, tB(BH, -1)),
+         hH = [0, 1, 2].reduce(((HH, BH) => hB(HH, tB(rH[BH], zB(SH, AH[BH])))), [0, 0, 0]);
+       return {
+         position: hB(BH, hH),
+         heading: LH.heading,
+         pitch: LH.pitch
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L741-L746` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L674) · [Before (L741-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L741-L746)

```diff
-       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const cU = UU.getInternalTexture();
-       if (!cU) return null;
-       const yU = UU._readPixelsSync(XU, zU);
-       return yU ? pU(yU, UU.getSize(), cU.invertY) : null
+       return tB(hB(HH.min, HH.max), .5)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L748-L754` → after: `L676-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L676-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L676-L680) · [Before (L748-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L748-L754)

```diff
-     async function tU(UU) {
-       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const cU = UU.getInternalTexture();
-       if (!cU) return null;
-       const yU = await UU.readPixels(XU, zU);
-       return yU ? pU(yU, UU.getSize(), cU.invertY) : null
+ 
+     function SB(HH) {
+       const BH = HB(HH),
+         LH = BB(HH.heading);
+       return [BH, LH, CB(BH, LH)]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1230-L1231` → after: `L683-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L683-L684) · [Before (L1230-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L1230-L1231)

```diff
-     function ZU() {
-       BU || (BU = !0, (0, oU.h)("BABYLON.Texture", GU), kU.b._TextureParser = GU.Parse)
+     function hB(HH, BH) {
+       return [HH[0] + BH[0], HH[1] + BH[1], HH[2] + BH[2]]
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1233-L1289` → after: `L686-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L686-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/279.js#L686-L696) · [Before (L1233-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/279.js#L1233-L1289)

```diff
-   },
-   41125: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => cU
-     });
-     class cU {
-       constructor(UU, XU) {
-         this.width = UU, this.height = XU
-       }
-       toString() {
-         return `{W: ${this.width}, H: ${this.height}}`
-       }
-       getClassName() {
-         return "Size"
-       }
-       getHashCode() {
- ... (41 more removed lines; see GitHub link above)
+ 
+     function tB(HH, BH) {
+       return [HH[0] * BH, HH[1] * BH, HH[2] * BH]
+     }
+ 
+     function zB(HH, BH) {
+       return HH[0] * BH[0] + HH[1] * BH[1] + HH[2] * BH[2]
+     }
+ 
+     function CB(HH, BH) {
+       return [HH[1] * BH[2] - HH[2] * BH[1], HH[2] * BH[0] - HH[0] * BH[2], HH[0] * BH[1] - HH[1] * BH[0]]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/280.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/280.js` (84 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L4)

```diff
-   41323: (UU, XU, zU) => {
+   41489: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L7)

```diff
-       h: () => FU
+       g: () => vH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L9-L12` → after: `L9-L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L9-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L9-L646) · [Before (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L9-L12)

```diff
-     var cU = zU(39493),
-       yU = zU(41134),
-       QU = zU(41309),
-       AU = {};
+     var AH = LH(41290),
+       rH = LH(41297),
+       SH = LH(41398),
+       hH = LH(37997),
+       tH = LH(37963),
+       zH = LH(41498),
+       CH = LH(39595),
+       EH = LH(38012),
+       XH = LH(41169),
+       GH = LH(38966),
+       YH = LH(38610),
+       uH = LH(41247),
+       QH = LH(41319);
+     let WH = (() => {
+       var HH;
+       let BH, LH, EH, WH, MH, xH, vH, PH, TH, UH, VH, OH, bH, kH, mH, oH, IH, fH, lH = zH.b,
+ ... (622 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L14-L15` → after: `L648-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L648-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L648-L649) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L14-L15)

```diff
-       constructor(UU) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = UU, this.checkInputs = () => {}
+       constructor(HH, BH, LH) {
+         this._cameraPosition = BH, this._behavior = LH, this.activeInput = !1, this.speed = 1, this.w6 = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = . … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L17-L19` → after: `L651-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L651-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L651-L656) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L17-L19)

```diff
-       add(UU) {
-         const XU = UU.getSimpleName();
-         this.attached[XU] ? cU.b.Warn("camera input of type " + XU + " already exists on camera") : (this.attached[XU] = UU, UU.camera = this.camera, UU.checkInputs && (this.checkInputs = this._addCheckInputs(UU.checkInputs.bind(UU))), this.attachedToElement && UU.attachControl(t … [truncated]
+       computeCurrentFrameDeltas() {
+         const HH = this._scene.Iu().getDeltaTime(),
+           BH = this._getEffectiveDeltaMs(HH);
+         if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 ===  … [truncated]
+         this.panDeltaCurrentFrame.IHH(0), this.rotationDeltaCurrentFrame.IHH(0), this.zoomDeltaCurrentFrame = 0;
+         (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.SBH(this._calculateCurrentVelocity(this._p … [truncated]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L21-L25` → after: `L658-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L658-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L658-L659) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L21-L25)

```diff
-       remove(UU) {
-         for (const XU in this.attached) {
-           const zU = this.attached[XU];
-           if (zU === UU) return zU.detachControl(), zU.camera = null, delete this.attached[XU], void this.rebuildInputCheck()
-         }
+       resetRotationVelocity() {
+         this._rotationVelocity.IHH(0), this.rotationAccumulatedPixels.IHH(0)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L27-L31` → after: `L661-L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L661-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L661-L662) · [Before (L27-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L27-L31)

```diff
-       removeByType(UU) {
-         for (const XU in this.attached) {
-           const zU = this.attached[XU];
-           zU.getClassName() === UU && (zU.detachControl(), zU.camera = null, delete this.attached[XU], this.rebuildInputCheck())
-         }
+       resetPanVelocity() {
+         this._panVelocity.IHH(0), this.panAccumulatedPixels.IHH(0)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L33-L37` → after: `L664-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L664-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L664-L665) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L33-L37)

```diff
-       _addCheckInputs(UU) {
-         const XU = this.checkInputs;
-         return () => {
-           XU(), UU()
-         }
+       resetZoomVelocity() {
+         this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L39-L40` → after: `L667-L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L667-L668) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L39-L40)

```diff
-       attachInput(UU) {
-         this.attachedToElement && UU.attachControl(this.noPreventDefault)
+       get isInterpolating() {
+         return !!this._behavior?.isInterpolating
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L42-L46` → after: `L670-L718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L670-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L670-L718) · [Before (L42-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L42-L46)

```diff
-       attachElement() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (!this.attachedToElement) {
-           UU = !QU.d.ForceAttachControlToAlwaysPreventDefault && UU, this.attachedToElement = !0, this.noPreventDefault = UU;
-           for (const XU in this.attached) this.attached[XU].attachControl(UU)
+       getFrameIndependentDecay(HH) {
+         const BH = this._scene.Iu().getDeltaTime(),
+           LH = this._getEffectiveDeltaMs(BH),
+           AH = 1e3 / this.referenceFrameRate;
+         return Math.pow(HH, LH / AH)
+       }
+       getFrameIndependentInputScale(HH) {
+         const BH = 1 - HH;
+         if (BH <= 0) return 1;
+         return (1 - this.getFrameIndependentDecay(HH)) / BH
+       }
+       _getEffectiveDeltaMs(HH) {
+         return HH > 0 ? HH : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
+       }
+       _calculateCurrentVelocity(HH, BH, LH) {
+         let AH = HH;
+ ... (33 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L49-L52` → after: `L721-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L721-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L721-L737) · [Before (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L49-L52)

```diff
-       detachElement() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         for (const XU in this.attached) this.attached[XU].detachControl(), UU && (this.attached[XU].camera = null);
-         this.attachedToElement = !1
+       getEntries(HH, BH, LH) {
+         const AH = [],
+           rH = this.inputMap;
+         for (let SH = 0; SH < rH.length; SH++) {
+           const hH = rH[SH];
+           hH.source === HH && hH.interaction === BH && this._entryConditionsMatch(hH, LH) && AH.push(hH)
+         }
+         return AH
+       }
+       addEntry(HH) {
+         const BH = this._entrySpecificity(HH);
+         let LH = this.inputMap.length;
+         for (let AH = 0; AH < this.inputMap.length; AH++)
+           if (this._entrySpecificity(this.inputMap[AH]) < BH) {
+             LH = AH;
+             break
+ ... (1 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L54-L58` → after: `L739-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L739-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L739-L757) · [Before (L54-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L54-L58)

```diff
-       rebuildInputCheck() {
-         this.checkInputs = () => {};
-         for (const UU in this.attached) {
-           const XU = this.attached[UU];
-           XU.checkInputs && (this.checkInputs = this._addCheckInputs(XU.checkInputs.bind(XU)))
+       setInteraction(HH, BH, LH) {
+         const AH = this.resolveInteraction(HH, BH);
+         return AH && this._entryCoversAllConditionsOf(AH, BH) ? (AH.interaction = LH, !0) : (this.addEntry({
+           source: HH,
+           ...BH ?? {},
+           interaction: LH
+         }), !0)
+       }
+       _entryCoversAllConditionsOf(HH, BH) {
+         if (!BH) return !0;
+         const LH = HH;
+         for (const AH of Object.keys(BH)) {
+           const HH = BH[AH];
+           if (void 0 !== HH)
+             if ("modifiers" === AH) {
+               const BH = LH.modifiers ?? {};
+ ... (3 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L61-L62` → after: `L761-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L761-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L761-L768) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L61-L62)

```diff
-       clear() {
-         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
+       setInteractions(HH, BH, LH) {
+         let AH = 0;
+         const rH = this.inputMap;
+         for (let SH = 0; SH < rH.length; SH++) {
+           const hH = rH[SH];
+           hH.source === HH && this._entryMatches(hH, BH) && (hH.interaction = LH, AH++)
+         }
+         return AH
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L64-L69` → after: `L770-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L770-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L770-L779) · [Before (L64-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L64-L69)

```diff
-       serialize(UU) {
-         const XU = {};
-         for (const zU in this.attached) {
-           const UU = this.attached[zU],
-             cU = yU.b.Serialize(UU);
-           XU[UU.getClassName()] = cU
+       _entryMatches(HH, BH) {
+         switch (HH.source) {
+           case "pointer":
+             return (void 0 === HH.button || HH.button === BH?.button) && this._matchModifiers(HH.modifiers, BH?.modifiers);
+           case "wheel":
+             return this._matchModifiers(HH.modifiers, BH?.modifiers);
+           case "touch":
+             return void 0 === HH.touchCount || HH.touchCount === BH?.touchCount;
+           case "keyboard":
+             return (void 0 === HH.key || (Array.isArray(HH.key) ? -1 !== HH.key.indexOf(BH?.key ?? -1) : HH.key === BH?.key)) && this._matchModifiers(HH.modifiers, BH?.modifiers)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L73-L82` → after: `L782-L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L782-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L782-L794) · [Before (L73-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L73-L82)

```diff
-       parse(UU) {
-         const XU = UU.inputsmgr;
-         if (XU) {
-           this.clear();
-           for (const UU in XU) {
-             const zU = AU[UU];
-             if (zU) {
-               const cU = XU[UU],
-                 QU = yU.b.Parse((() => new zU), cU, null);
-               this.add(QU)
+       _entryConditionsMatch(HH, BH) {
+         if (!BH) return !0;
+         switch (HH.source) {
+           case "pointer":
+             return (!("button" in BH) || HH.button === BH.button) && (!("modifiers" in BH) || this._entryModifiersMatch(HH.modifiers, BH.modifiers));
+           case "wheel":
+             return !("modifiers" in BH) || this._entryModifiersMatch(HH.modifiers, BH.modifiers);
+           case "touch":
+             return !("touchCount" in BH) || HH.touchCount === BH.touchCount;
+           case "keyboard":
+             if ("key" in BH) {
+               if (void 0 === HH.key) return void 0 === BH.key;
+               if (void 0 === BH.key || (Array.isArray(HH.key) ? -1 === HH.key.indexOf(BH.key) : HH.key !== BH.key)) return !1
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L84-L92` → after: `L796-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L796-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L796-L808) · [Before (L84-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L84-L92)

```diff
-           }
-         } else
-           for (const zU in this.attached) {
-             const XU = AU[this.attached[zU].getClassName()];
-             if (XU) {
-               const cU = yU.b.Parse((() => new XU), UU, null);
-               this.remove(this.attached[zU]), this.add(cU)
-             }
-           }
+             return !("modifiers" in BH) || this._entryModifiersMatch(HH.modifiers, BH.modifiers)
+         }
+       }
+       _entrySpecificity(HH) {
+         let BH = 0;
+         return "button" in HH && void 0 !== HH.button && BH++, "key" in HH && void 0 !== HH.key && BH++, "touchCount" in HH && void 0 !== HH.touchCount && BH++, "modifiers" in HH && HH.modifiers && BH++, BH
+       }
+       _matchModifiers(HH, BH) {
+         return !HH || (void 0 === HH.ctrl || HH.ctrl === (BH?.ctrl ?? !1)) && ((void 0 === HH.shift || HH.shift === (BH?.shift ?? !1)) && (void 0 === HH.alt || HH.alt === (BH?.alt ?? !1)))
+       }
+       _entryModifiersMatch(HH, BH) {
+         if (!BH) return !HH;
+         return void 0 !== BH.ctrl || void 0 !== BH.shift || void 0 !== BH.alt ? (void 0 === BH.ctrl || HH?.ctrl === BH.ctrl) && ((void 0 === BH.shift || HH?.shift === BH.shift) && (void 0 === BH.alt || HH?.alt === BH.alt)) : !HH || void 0 === HH.ctrl && void 0 === HH.shift && voi … [truncated]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L96` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L812) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L96)

```diff
-   42233: (UU, XU, zU) => {
+   41483: (HH, BH, LH) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L98` → after: `L814-L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L814-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L814-L815) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L98)

```diff
-       b: () => GU
+       c: () => MH,
+       e: () => QH
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L100-L115` → after: `L817-L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L817-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L817-L857) · [Before (L100-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L100-L115)

```diff
-     var cU = zU(41113),
-       yU = zU(41121),
-       QU = zU(40999),
-       AU = zU(37819),
-       FU = zU(41108),
-       oU = zU(41557),
-       DU = zU(37863),
-       EU = zU(37846),
-       YU = zU(41134),
-       NU = zU(40940),
-       IU = zU(39493),
-       pU = zU(41152),
-       aU = zU(38649),
-       tU = zU(41194);
-     var gU = zU(41003);
-     let kU = !1;
+     var AH = LH(41290),
+       rH = LH(41297),
+       SH = LH(41489),
+       hH = LH(37963),
+       tH = LH(37972),
+       zH = LH(41504),
+       CH = LH(41498),
+       EH = LH(41509),
+       XH = LH(41516);
+     class GH extends EH.d {
+       constructor(HH, BH, LH) {
+         super(HH, BH, LH), this.input = new XH.e({
+           translate: (HH, BH, LH) => {
+             this.panAccumulatedPixels.x += HH, this.panAccumulatedPixels.y += BH, this.panAccumulatedPixels.z += LH
+           },
+           rotate: (HH, BH) => {
+ ... (25 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L118-L125` → after: `L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L860) · [Before (L118-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L118-L125)

```diff
-         let XU, zU, DU, GU, BU, ZU, RU, PU, WU, dU = FU.e,
-           LU = [],
-           eU = [],
-           CU = [],
-           wU = [],
-           qU = [],
-           OU = [],
-           SU = [],
+         let BH, LH, CH, EH, XH = SH.d,
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L135-L243` → after: `L870-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L870-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L870-L871) · [Before (L135-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L135-L243)

```diff
-           set boundingBoxSize(UU) {
-             if (this._boundingBoxSize && this._boundingBoxSize.equals(UU)) return;
-             this._boundingBoxSize = UU;
-             const XU = this.nS();
-             XU && XU.markAllMaterialsAsDirty(1)
-           }
-           get boundingBoxSize() {
-             return this._boundingBoxSize
-           }
-           set rotationY(UU) {
-             this._rotationY = UU, this.setReflectionTextureMatrix(AU.e.RotationY(this._rotationY))
-           }
-           get rotationY() {
-             return this._rotationY
-           }
-           get noMipmap() {
- ... (93 more removed lines; see GitHub link above)
+           get inertia() {
+             return this._targetInertia
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L245-L302` → after: `L873-L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L873-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L873-L874) · [Before (L245-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L245-L302)

```diff
-           getClassName() {
-             return "CubeTexture"
-           }
-           updateURL(UU) {
-             let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-               zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-               cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-               yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-               QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-               AU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-               FU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-               oU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
-             this.name && !this.name.startsWith("data:") || (this.name = UU), this.url = UU, XU && (this._forcedExtension = XU);
-             const DU = UU.lastIndexOf("."),
-               EU = XU || (DU > -1 ? UU.substring(DU).toLowerCase() : ""),
-               YU = 0 === EU.indexOf(".dds"),
- ... (42 more removed lines; see GitHub link above)
+           set inertia(HH) {
+             this._targetInertia = HH, this.movement && (this.movement.panInertia = HH, this.movement.rotationInertia = HH)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L304-L311` → after: `L876-L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L876-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L876-L877) · [Before (L304-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L304-L311)

```diff
-           clone() {
-             let XU = 0;
-             const zU = this.irradianceTexture,
-               cU = YU.b.Clone((() => {
-                 const zU = new UU(this.url, this.nS() || this._getEngine(), this._extensions, this._noMipmap, this._files);
-                 return XU = zU.uniqueId, zU
-               }), this);
-             return cU.uniqueId = XU, zU && !this.irradianceTexture && (this.irradianceTexture = zU), cU
+           constructor(HH, BH, LH) {
+             super(HH, BH, LH, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new hH.o(0, 0, 0), this.cameraRotation = new hH.n(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, AH.k)(this, QH, !1), this.rotation =  … [truncated]
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L313-L346` → after: `L879-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L879-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L879-L949) · [Before (L313-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L313-L346)

```diff
-         }, (() => {
-           const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(dU[Symbol.metadata] ?? null) : void 0;
-           XU = [(0, yU.I)()], zU = [(0, yU.F)()], DU = [(0, yU.F)()], GU = [(0, yU.I)("rotationY")], BU = [(0, yU.I)("files")], ZU = [(0, yU.I)("forcedExtension")], RU = [(0, yU.I)("extensions")], PU = [(0, yU.q)("textureMatrix")], WU = [(0, yU.q)("textureMatrixRefraction")], (0, … [truncated]
-             kind: "getter",
-             name: "boundingBoxSize",
-             static: !1,
-             private: !1,
-             access: {
-               has: UU => "boundingBoxSize" in UU,
-               get: UU => UU.boundingBoxSize
-             },
-             metadata: QU
-           }, null, LU), (0, cU.j)(UU, null, GU, {
-             kind: "setter",
-             name: "rotationY",
-             static: !1,
- ... (18 more removed lines; see GitHub link above)
+           getFrontPosition(HH) {
+             this.getWorldMatrix();
+             const BH = hH.l.lu[0],
+               LH = hH.l.lu[1];
+             return LH.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(LH, BH), BH.scaleInPlace(HH), this.globalPosition.add(BH)
+           }
+           _getLockedTargetPosition() {
+             if (!this.lockedTarget) return null;
+             if (this.lockedTarget.absolutePosition) {
+               const HH = this.lockedTarget;
+               HH.computeWorldMatrix().getTranslationToRef(HH.absolutePosition)
+             }
+             return this.lockedTarget.absolutePosition || this.lockedTarget
+           }
+           storeState() {
+             return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
+ ... (55 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L348-L359` → after: `L951-L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L951-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L951-L952) · [Before (L348-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L348-L359)

```diff
-             },
-             metadata: QU
-           }, eU, CU), (0, cU.j)(null, null, zU, {
-             kind: "field",
-             name: "boundingBoxPosition",
-             static: !1,
-             private: !1,
-             access: {
-               has: UU => "boundingBoxPosition" in UU,
-               get: UU => UU.boundingBoxPosition,
-               set: (UU, XU) => {
-                 UU.boundingBoxPosition = XU
+               if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.Tm(this._deferredRotationUpdate), this.rotationQuaternion) {
+                 this._deferredRotationUpdate.lengthSquared() && (hH.f.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 :  … [truncated]
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L361-L372` → after: `L954-L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L954-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L954-L991) · [Before (L361-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L361-L372)

```diff
-             },
-             metadata: QU
-           }, wU, qU), (0, cU.j)(null, null, BU, {
-             kind: "field",
-             name: "_files",
-             static: !1,
-             private: !1,
-             access: {
-               has: UU => "_files" in UU,
-               get: UU => UU._files,
-               set: (UU, XU) => {
-                 UU._files = XU
+             }
+             this.cameraDirection.IHH(0), this.cameraRotation.set(0, 0), super._checkInputs()
+           }
+           _updateCameraRotationMatrix() {
+             this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : hH.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
+           }
+           _rotateUpVectorWithCameraRotationMatrix() {
+             return hH.o.TransformNormalToRef(hH.o.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
+           }
+           _getViewMatrix() {
+             return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuat … [truncated]
+           }
+           _computeViewMatrix(HH, BH, LH) {
+             if (this.yN().useRightHandedSystem ? hH.e.LookAtRHToRef(HH, BH, LH, this._viewMatrix) : hH.e.LookAtLHToRef(HH, BH, LH, this._viewMatrix), this.parent) {
+               const HH = this.parent.getWorldMatrix();
+               this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(HH, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
+ ... (22 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L374-L376` → after: `L993-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L993-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L993-L1008) · [Before (L374-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L374-L376)

```diff
-             },
-             metadata: QU
-           }, OU, SU), (0, cU.j)(null, null, ZU, {
+               case SH.d.RIG_MODE_VR:
+                 HH.rotationQuaternion && BH.rotationQuaternion && this.rotationQuaternion ? (HH.rotationQuaternion.Tm(this.rotationQuaternion), BH.rotationQuaternion.Tm(this.rotationQuaternion)) : (HH.rotation.Tm(this.rotation), BH.rotation.Tm(this.rotation)), HH.position.Tm(this … [truncated]
+             }
+             super._updateRigCameras()
+           }
+           _getRigCamPositionAndTarget(BH, LH) {
+             this.getTarget().subtractToRef(this.position, HH._TargetFocalPoint), HH._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
+             const AH = HH._TargetFocalPoint.addInPlace(this.position);
+             hH.e.TranslationToRef(-AH.x, -AH.y, -AH.z, HH._TargetTransformMatrix), HH._TargetTransformMatrix.multiplyToRef(hH.e.RotationAxis(LH.upVector, BH), HH._RigCamTransformMatrix), hH.e.TranslationToRef(AH.x, AH.y, AH.z, HH._TargetTransformMatrix), HH._RigCamTransformMatrix … [truncated]
+           }
+           getClassName() {
+             return "TargetCamera"
+           }
+         }, (() => {
+           const SH = "function" === typeof Symbol && Symbol.metadata ? Object.create(XH[Symbol.metadata] ?? null) : void 0;
+           BH = [(0, rH.H)()], LH = [(0, rH.F)()], CH = [(0, rH.H)()], EH = [(0, rH.v)("lockedTargetId")], (0, AH.g)(null, null, BH, {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L378` → after: `L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1010) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L378)

```diff
-             name: "_forcedExtension",
+             name: "updateUpVectorFromRotation",
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L382-L383` → after: `L1014-L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1014-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1014-L1015) · [Before (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L382-L383)

```diff
-               has: UU => "_forcedExtension" in UU,
-               get: UU => UU._forcedExtension,
+               has: HH => "updateUpVectorFromRotation" in HH,
+               get: HH => HH.updateUpVectorFromRotation,
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L385` → after: `L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1017) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L385)

```diff
-                 UU._forcedExtension = XU
+                 HH.updateUpVectorFromRotation = BH
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L389` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1021) · [Before (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L389)

```diff
-           }, rU, uU), (0, cU.j)(null, null, RU, {
+           }, QH, WH), (0, AH.g)(null, null, LH, {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L391` → after: `L1023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1023) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L391)

```diff
-             name: "_extensions",
+             name: "rotation",
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L395-L396` → after: `L1027-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1027-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1027-L1028) · [Before (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L395-L396)

```diff
-               has: UU => "_extensions" in UU,
-               get: UU => UU._extensions,
+               has: HH => "rotation" in HH,
+               get: HH => HH.rotation,
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L398` → after: `L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1030) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L398)

```diff
-                 UU._extensions = XU
+                 HH.rotation = BH
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L402` → after: `L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1034) · [Before (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L402)

```diff
-           }, fU, iU), (0, cU.j)(null, null, PU, {
+           }, MH, xH), (0, AH.g)(null, null, CH, {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L404` → after: `L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1036) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L404)

```diff
-             name: "_textureMatrix",
+             name: "speed",
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L408-L409` → after: `L1040-L1041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1040-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1040-L1041) · [Before (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L408-L409)

```diff
-               has: UU => "_textureMatrix" in UU,
-               get: UU => UU._textureMatrix,
+               has: HH => "speed" in HH,
+               get: HH => HH.speed,
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L411` → after: `L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1043) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L411)

```diff
-                 UU._textureMatrix = XU
+                 HH.speed = BH
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L415` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1047) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L415)

```diff
-           }, HU, MU), (0, cU.j)(null, null, WU, {
+           }, vH, PH), (0, AH.g)(null, null, EH, {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L417` → after: `L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1049) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L417)

```diff
-             name: "_textureMatrixRefraction",
+             name: "lockedTarget",
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L421-L422` → after: `L1053-L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1053-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1053-L1054) · [Before (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L421-L422)

```diff
-               has: UU => "_textureMatrixRefraction" in UU,
-               get: UU => UU._textureMatrixRefraction,
+               has: HH => "lockedTarget" in HH,
+               get: HH => HH.lockedTarget,
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L424` → after: `L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1056) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L424)

```diff
-                 UU._textureMatrixRefraction = XU
+                 HH.lockedTarget = BH
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L434` → after: `L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1066) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L434)

```diff
-         })(), UU
+         })(), HH._RigCamTransformMatrix = new hH.e, HH._TargetTransformMatrix = new hH.e, HH._TargetFocalPoint = new hH.o, HH
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L438-L441` → after: `L1070-L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1070-L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1070-L1071) · [Before (L438-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L438-L441)

```diff
-     function ZU(UU, XU, zU) {
-       let cU = "";
-       for (const yU of UU) cU += yU;
-       return new GU(cU, XU, null, zU, UU)
+     function MH() {
+       WH || (WH = !0, CH.b.AddNodeConstructor("TargetCamera", ((HH, BH) => () => new QH(HH, hH.o.Zero(), BH))))
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L444-L450` → after: `L1081-L1096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1081-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1081-L1096) · [Before (L444-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L444-L450)

```diff
-     function RU(UU, XU) {
-       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-         cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-       const yU = XU.useDelayedTextureLoading;
-       XU.useDelayedTextureLoading = !1;
-       const QU = new GU(UU, XU, null, !1, null, null, null, void 0, !0, zU, cU);
-       return XU.useDelayedTextureLoading = yU, QU
+     function SH() {
+       rH || (rH = !0, AH.c.prototype.getInputElement = function() {
+         return this._renderingCanvas
+       }, AH.c.prototype.getRenderingCanvasClientRect = function() {
+         return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
+       }, AH.c.prototype.getInputElementClientRect = function() {
+         return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
+       }, AH.c.prototype.getAspectRatio = function(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         const LH = HH.viewport;
+         return this.getRenderWidth(BH) * LH.width / (this.getRenderHeight(BH) * LH.height)
+       }, AH.c.prototype.getScreenAspectRatio = function() {
+         return this.getRenderWidth(!0) / this.getRenderHeight(!0)
+       }, AH.c.prototype._verifyPointerLock = function() {
+         this._onPointerLockChange?.()
+       })
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L453-L462` → after: `L1123-L1141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1123-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1123-L1141) · [Before (L453-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L453-L462)

```diff
-     function PU(UU, XU, zU) {
-       const cU = YU.b.Parse((() => {
-         let cU = !1;
-         return UU.prefiltered && (cU = UU.prefiltered), new GU(zU + (UU.url ?? UU.name), XU, UU.extensions, !1, UU.files || null, null, null, void 0, cU, UU.forcedExtension)
-       }), UU, XU);
-       if (UU.boundingBoxPosition && (cU.boundingBoxPosition = AU.q.FromArray(UU.boundingBoxPosition)), UU.boundingBoxSize && (cU.boundingBoxSize = AU.q.FromArray(UU.boundingBoxSize)), UU.animations)
-         for (let yU = 0; yU < UU.animations.length; yU++) {
-           const XU = UU.animations[yU],
-             zU = (0, DU.e)("BABYLON.Animation");
-           zU && cU.animations.push(zU.Parse(XU))
+     function SH() {
+       rH || (rH = !0, AH.c.prototype.getRenderPassNames = function() {
+         return this._renderPassNames
+       }, AH.c.prototype.getCurrentRenderPassName = function() {
+         return this._renderPassNames[this.currentRenderPassId]
+       }, AH.c.prototype.createRenderPassId = function(HH) {
+         const BH = ++AH.c._RenderPassIdCounter;
+         return this._renderPassNames[BH] = HH ?? "NONAME", BH
+       }, AH.c.prototype.releaseRenderPassId = function(HH) {
+         this._renderPassNames[HH] = void 0;
+         for (let BH = 0; BH < this.scenes.length; ++BH) {
+           const LH = this.scenes[BH];
+           for (let BH = 0; BH < LH.meshes.length; ++BH) {
+             const AH = LH.meshes[BH];
+             if (AH._releaseRenderPassId(HH), AH.jU)
+               for (let BH = 0; BH < AH.jU.length; ++BH) {
+ ... (3 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L464` → after: `L1143-L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1143-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1143-L1144) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L464)

```diff
-       return cU
+         this._onReleaseRenderPassObservable?.notifyObservers(HH)
+       })
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L468` → after: `L1147-L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1147-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1147-L1153) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L468)

```diff
-   42279: (UU, XU, zU) => {
+   41370: (HH, BH, LH) => {
+     var AH = LH(41372),
+       rH = LH(41184);
+     let SH = !1;
+     SH || (SH = !0, rH.c.GetCompatibleTextureLoader = AH.c)
+   },
+   41253: (HH, BH, LH) => {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L470` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1155) · [Before (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L470)

```diff
-       e: () => DU
+       c: () => SH
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L472-L476` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1157) · [Before (L472-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L472-L476)

```diff
-     var cU = zU(39493),
-       yU = zU(41557),
-       QU = zU(41036),
-       AU = zU(40948),
-       FU = zU(40940);
+     var AH = LH(41129);
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L478-L502` → after: `L1159-L1434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1159-L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1159-L1434) · [Before (L478-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L478-L502)

```diff
-     class DU extends yU.e {
-       constructor(UU, XU, zU) {
-         let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-           DU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
-           EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
-           YU = arguments.length > 6 ? arguments[6] : void 0;
-         const NU = !zU || zU._isScene;
-         super(null, NU ? zU : zU?.sa, NU ? !cU : zU, YU, DU, void 0, void 0, void 0, void 0, EU), oU || (oU = !0, AU.ThinEngine.prototype.createDynamicTexture = function(UU, XU, zU, cU) {
-           const yU = new FU.e(this, 4);
-           return yU.baseWidth = UU, yU.baseHeight = XU, zU && (UU = this.needPOTTextures ? (0, QU.g)(UU, this._caps.maxTextureSize) : UU, XU = this.needPOTTextures ? (0, QU.g)(XU, this._caps.maxTextureSize) : XU), yU.width = UU, yU.height = XU, yU.isReady = !1, yU.generateMipMaps … [truncated]
-         }, AU.ThinEngine.prototype.updateDynamicTexture = function(UU, XU, zU) {
-           let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-             yU = arguments.length > 4 ? arguments[4] : void 0,
-             QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-           if (!UU) return;
-           const AU = this._gl,
- ... (9 more removed lines; see GitHub link above)
+ 
+     function SH() {
+       rH || (rH = !0, AH.ThinEngine.prototype.setAlphaMode = function(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         if (this._alphaMode[LH] === HH) {
+           if (!BH) {
+             const BH = 0 === HH;
+             this.depthCullingState.depthMask !== BH && (this.depthCullingState.depthMask = BH)
+           }
+           return
+         }
+         const AH = 0 === HH;
+         this._alphaState.setAlphaBlend(!AH, LH), this._alphaState.setAlphaMode(HH, LH), BH || (this.depthCullingState.depthMask = AH), this._alphaMode[LH] = HH
+       })
+     }
+ ... (260 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L504` → after: `L1436-L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1436-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1436-L1459) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L504)

```diff
-         if (XU.getContext) this._canvas = XU, this._ownCanvas = !1, this._texture = IU.createDynamicTexture(this._canvas.width, this._canvas.height, cU, DU);
+         const tH = this._getRGBABufferInternalSizedFormat(SH, LH, hH),
+           zH = this._getInternalFormat(LH),
+           CH = this._getWebGLTextureType(SH);
+         this._bindTextureDirectly(this._gl.TEXTURE_2D, HH, !0), this._unpackFlipY(void 0 === AH || !!AH), this._doNotHandleContextLost || (HH._bufferView = BH, HH.format = LH, HH.type = SH, HH.invertY = AH, HH._compression = rH), HH.width % 4 !== 0 && this._gl.pixelStorei(this._g … [truncated]
+       }, rH.ThinEngine.prototype.createRawTexture = function(HH, BH, LH, AH, rH, SH, tH) {
+         let zH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
+           CH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
+           EH = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
+         const XH = new hH.e(this, 3);
+         XH.baseWidth = BH, XH.baseHeight = LH, XH.width = BH, XH.height = LH, XH.format = AH, XH.generateMipMaps = rH, XH.samplingMode = tH, XH.invertY = SH, XH._compression = zH, XH.type = CH, XH._useSRGBBuffer = this._getUseSRGBBuffer(EH, !rH), this._doNotHandleContextLost || ( … [truncated]
+         const GH = this._getSamplingParameters(tH, rH);
+         return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, GH.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, GH.min), rH && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, nu … [truncated]
+       }, rH.ThinEngine.prototype.createRawCubeTexture = function(HH, BH, LH, AH, rH, SH, CH) {
+         let EH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
+         const XH = this._gl,
+           GH = new hH.e(this, 8);
+ ... (8 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L506` → after: `L1461-L1960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1461-L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1461-L1960) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L506)

```diff
-           this._canvas = IU.createCanvas(1, 1), this._ownCanvas = !0;
+           const HH = this._getRGBABufferInternalSizedFormat(AH),
+             BH = 0;
+           this._bindTextureDirectly(XH.TEXTURE_CUBE_MAP, GH, !0);
+           for (let LH = 0; LH < 6; LH++) EH ? XH.compressedTexImage2D(XH.TEXTURE_CUBE_MAP_POSITIVE_X + LH, BH, this.getCaps().s3tc[EH], GH.width, GH.height, 0, void 0) : XH.texImage2D(XH.TEXTURE_CUBE_MAP_POSITIVE_X + LH, BH, HH, GH.width, GH.height, 0, uH, YH, null);
+           this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
+         }
+         this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, GH, !0), HH && rH && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
+         const MH = this._getSamplingParameters(CH, rH);
+         return XH.texParameteri(XH.TEXTURE_CUBE_MAP, XH.TEXTURE_MAG_FILTER, MH.mag), XH.texParameteri(XH.TEXTURE_CUBE_MAP, XH.TEXTURE_MIN_FILTER, MH.min), XH.texParameteri(XH.TEXTURE_CUBE_MAP, XH.TEXTURE_WRAP_S, XH.CLAMP_TO_EDGE), XH.texParameteri(XH.TEXTURE_CUBE_MAP, XH.TEXTURE_ … [truncated]
+       }, rH.ThinEngine.prototype.updateRawCubeTexture = function(BH, LH, AH, rH, SH) {
+         let hH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+           tH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
+         BH._bufferViewArray = LH, BH.format = AH, BH.type = rH, BH.invertY = SH, BH._compression = hH;
+         const CH = this._gl,
+           EH = this._getWebGLTextureType(rH);
+         let XH = this._getInternalFormat(AH);
+ ... (484 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L508` → after: `L1962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1962) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L508)

```diff
-           UU.width || 0 === UU.width ? this._texture = IU.createDynamicTexture(UU.width, UU.height, cU, DU) : this._texture = IU.createDynamicTexture(XU, XU, cU, DU)
+           "function" === typeof HH?.dispose && HH.dispose()
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L510-L511` → after: `L1964-L1989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1964-L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1964-L1989) · [Before (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L510-L511)

```diff
-         const pU = this.getSize();
-         this._canvas.width !== pU.width && (this._canvas.width = pU.width), this._canvas.height !== pU.height && (this._canvas.height = pU.height), this._context = this._canvas.getContext("2d")
+       }(HH);
+       return LH || function(HH) {
+         const BH = Math.max(1, function(HH) {
+             const BH = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(HH || ""));
+             return BH ? Number(BH[1]) : 16
+           }(HH)),
+           LH = .8 * BH,
+           AH = .2 * BH;
+         return {
+           ascent: LH,
+           height: LH + AH,
+           descent: AH
+         }
+       }(HH)
+     }
+ 
+ ... (10 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L513-L514` → after: `L1991-L1998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1991-L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L1991-L1998) · [Before (L513-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L513-L514)

```diff
-       getClassName() {
-         return "DynamicTexture"
+     }
+     var MH = LH(41231),
+       xH = LH(41179),
+       vH = LH(41239),
+       PH = LH(41247);
+     class TH extends SH.ThinEngine {
+       static get NpmPackage() {
+         return GH.c.NpmPackage
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L516-L517` → after: `L2000-L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2000-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2000-L2001) · [Before (L516-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L516-L517)

```diff
-       get canRescale() {
-         return !0
+       static get Version() {
+         return GH.c.Version
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L519-L520` → after: `L2003-L2004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2003-L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2003-L2004) · [Before (L519-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L519-L520)

```diff
-       _recreate(UU) {
-         this._canvas.width = UU.width, this._canvas.height = UU.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(UU.width, UU.height, this._generateMipMaps, this.samplingMode)
+       static get Instances() {
+         return rH.d.Instances
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L522-L524` → after: `L2006-L2007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2006-L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2006-L2007) · [Before (L522-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L522-L524)

```diff
-       scale(UU) {
-         const XU = this.getSize();
-         XU.width *= UU, XU.height *= UU, this._recreate(XU)
+       static get LastCreatedEngine() {
+         return rH.d.LastCreatedEngine
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L526-L528` → after: `L2009-L2010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2009-L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2009-L2010) · [Before (L526-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L526-L528)

```diff
-       scaleTo(UU, XU) {
-         const zU = this.getSize();
-         zU.width = UU, zU.height = XU, this._recreate(zU)
+       static get LastCreatedScene() {
+         return rH.d.LastCreatedScene
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L530-L531` → after: `L2012-L2013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2012-L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2012-L2013) · [Before (L530-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L530-L531)

```diff
-       getContext() {
-         return this._context
+       static DefaultLoadingScreenFactory(HH) {
+         return GH.c.DefaultLoadingScreenFactory(HH)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L533-L535` → after: `L2015-L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2015-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2015-L2016) · [Before (L533-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L533-L535)

```diff
-       clear(UU) {
-         const XU = this.getSize();
-         UU && (this._context.fillStyle = UU), this._context.clearRect(0, 0, XU.width, XU.height)
+       get _supportsHardwareTextureRescaling() {
+         return !!TH._RescalePostProcessFactory
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L537-L540` → after: `L2018-L2138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2018-L2138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2018-L2138) · [Before (L537-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L537-L540)

```diff
-       update(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === UU || UU, XU, this._format || void 0, void 0, zU)
+       _measureFps() {
+         this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
+       }
+       get performanceMonitor() {
+         return this._performanceMonitor
+       }
+       constructor(HH, BH, LH) {
+         let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         (0, vH.e)(), (0, PH.c)(), super(HH, BH, LH, AH), this._performanceMonitor = new tH, this._drawCalls = new MH.e, HH && (this._features.supportRenderPasses = !0)
+       }
+       _initGLContext() {
+         super._initGLContext(), this._rescalePostProcess = null
+       }
+       _sharedInit(HH) {
+         super._sharedInit(HH),
+           function(HH, BH, LH) {
+ ... (105 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L542-L547` → after: `L2140-L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2140-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2140-L2191) · [Before (L542-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L542-L547)

```diff
-       drawText(UU, XU, zU, cU, yU, QU, AU) {
-         let FU = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
-         const oU = this.getSize();
-         if (QU && (this._context.fillStyle = QU, this._context.fillRect(0, 0, oU.width, oU.height)), this._context.font = cU, null === XU || void 0 === XU) {
-           const zU = this._context.measureText(UU);
-           XU = (oU.width - zU.width) / 2
+       createShaderProgram(HH, BH, LH, AH, rH) {
+         let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
+         rH = rH || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
+         const hH = super.createShaderProgram(HH, BH, LH, AH, rH, SH);
+         return this.onAfterShaderCompilationObservable.notifyObservers(this), hH
+       }
+       _createShaderProgram(HH, BH, LH, AH) {
+         let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
+         const SH = AH.createProgram();
+         if (HH.program = SH, !SH) throw new Error("Unable to create program");
+         if (AH.attachShader(SH, BH), AH.attachShader(SH, LH), this.hQ > 1 && rH) {
+           const BH = this.createTransformFeedback();
+           this.bindTransformFeedback(BH), this.setTranformFeedbackVaryings(SH, rH), HH.transformFeedback = BH
+         }
+         return AH.linkProgram(SH), this.hQ > 1 && rH && this.bindTransformFeedback(null), HH.context = AH, HH.vertexShader = BH, HH.fragmentShader = LH, HH.isParallelCompiled || this._finalizePipelineContext(HH), SH
+       }
+ ... (36 more added lines; see GitHub link above)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L549-L551` → after: `L2193-L2221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2193-L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2193-L2221) · [Before (L549-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L549-L551)

```diff
-         if (null === zU || void 0 === zU) {
-           const UU = parseInt(cU.replace(/\D/g, ""));
-           zU = oU.height / 2 + UU / 3.65
+       }
+       wrapWebGLTexture(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
+           rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+           SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
+         const hH = new XH.e(HH, this._gl),
+           tH = new AH.e(this, 15, !0);
+         return tH._hardwareTexture = hH, tH.baseWidth = rH, tH.baseHeight = SH, tH.width = rH, tH.height = SH, tH.isReady = !0, tH.useMipMaps = BH, this.updateTextureSamplingMode(LH, tH), tH
+       }
+       updateWrappedWebGLTexture(HH, BH) {
+         if (15 !== HH.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
+         for (const AH of this._renderTargetWrapperCache)
+           if (AH.textures?.includes(HH)) {
+             if (AH.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
+             if (AH._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
+ ... (13 more added lines; see GitHub link above)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L553` → after: `L2223-L2268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2223-L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2223-L2268) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L553)

```diff
-         this._context.fillStyle = yU || "", this._context.fillText(UU, XU, zU), FU && this.update(AU)
+       }
+       _uploadImageToTexture(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+         const rH = this._gl,
+           SH = this._getWebGLTextureType(HH.type),
+           hH = this._getInternalFormat(HH.format),
+           tH = this._getRGBABufferInternalSizedFormat(HH.type, hH),
+           zH = HH.isCube ? rH.TEXTURE_CUBE_MAP : rH.TEXTURE_2D;
+         this._bindTextureDirectly(zH, HH, !0), this._unpackFlipY(HH.invertY);
+         let CH = rH.TEXTURE_2D;
+         HH.isCube && (CH = rH.TEXTURE_CUBE_MAP_POSITIVE_X + LH), rH.texImage2D(CH, AH, tH, hH, SH, BH), this._bindTextureDirectly(zH, null, !0)
+       }
+       updateTextureComparisonFunction(HH, BH) {
+         if (1 === this.hQ) return void EH.e.Error("WebGL 1 does not support texture comparison.");
+         const LH = this._gl;
+ ... (30 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L556` → after: `L2271-L2276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2271-L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2271-L2276) · [Before (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L556)

```diff
-         super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
+         this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
+           function(HH, BH) {
+             1 === rH.d.Instances.length && GH.c.audioEngine && (GH.c.audioEngine.dispose(), GH.c.audioEngine = null);
+             const LH = HH.getHostWindow();
+             LH && "function" === typeof LH.removeEventListener && (LH.removeEventListener("blur", HH._onBlur), LH.removeEventListener("focus", HH._onFocus)), BH && (BH.removeEventListener("focus", HH._onCanvasFocus), BH.removeEventListener("blur", HH._onCanvasBlur), BH.removeEven … [truncated]
+           }(this, this._renderingCanvas), super.dispose()
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L558-L563` → after: `L2278-L2288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2278-L2288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2278-L2288) · [Before (L558-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L558-L563)

```diff
-       clone() {
-         const UU = this.nS();
-         if (!UU) return this;
-         const XU = this.getSize(),
-           zU = new DU(this.name, XU, UU, this._generateMipMaps);
-         return zU.hasAlpha = this.hasAlpha, zU.level = this.level, zU.wrapU = this.wrapU, zU.wrapV = this.wrapV, zU
+     }
+     TH.ALPHA_DISABLE = 0, TH.ALPHA_ADD = 1, TH.ALPHA_COMBINE = 2, TH.ALPHA_SUBTRACT = 3, TH.ALPHA_MULTIPLY = 4, TH.ALPHA_MAXIMIZED = 5, TH.ALPHA_ONEONE = 6, TH.ALPHA_PREMULTIPLIED = 7, TH.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, TH.ALPHA_INTERPOLATE = 9, TH.ALPHA_SCREENMODE = 10, TH.D … [truncated]
+   },
+   41271: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => rH
+     });
+     var AH = LH(41229);
+     class rH {
+       get depthStencilTexture() {
+         return this._depthStencilTexture
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L565-L569` → after: `L2290-L2312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2290-L2312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2290-L2312) · [Before (L565-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L565-L569)

```diff
-       serialize() {
-         const UU = this.nS();
-         UU && !UU.isReady() && cU.b.Warn("The scene must be ready before serializing the dynamic texture");
-         const XU = super.serialize();
-         return DU._IsCanvasElement(this._canvas) && (XU.base64String = this._canvas.toDataURL()), XU.invertY = this._invertY, XU.samplingMode = this.samplingMode, XU
+       setDepthStencilTexture(HH) {
+         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = HH, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, H … [truncated]
+       }
+       get depthStencilTextureWithStencil() {
+         return this._depthStencilTextureWithStencil
+       }
+       get isCube() {
+         return this._isCube
+       }
+       get isMulti() {
+         return this._isMulti
+       }
+       get is2DArray() {
+         return this.layers > 0
+       }
+       get is3D() {
+ ... (7 more added lines; see GitHub link above)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L571-L572` → after: `L2314-L2473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2314-L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2314-L2473) · [Before (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L571-L572)

```diff
-       static _IsCanvasElement(UU) {
-         return void 0 !== UU.toDataURL
+       get height() {
+         return this._size.height ?? this._size
+       }
+       get layers() {
+         return this._size.layers || 0
+       }
+       get depth() {
+         return this._size.depth || 0
+       }
+       get texture() {
+         return this._textures?.[0] ?? null
+       }
+       get textures() {
+         return this._textures
+       }
+       get faceIndices() {
+ ... (144 more added lines; see GitHub link above)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L575` → after: `L2476-L2493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2476-L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2476-L2493) · [Before (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L575)

```diff
-         this.update()
+         const HH = this._cloneRenderTargetWrapper();
+         if (HH) {
+           if (this._depthStencilTexture) {
+             const BH = this._depthStencilTexture.samplingMode,
+               LH = this._depthStencilTexture.format,
+               AH = 2 === BH || 3 === BH || 11 === BH;
+             HH.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, AH, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, LH, this._depthStencilTextureLabel)
+           }
+           this.samples > 1 && HH.setSamples(this.samples), HH._swapRenderTargetWrapper(this), HH.dispose()
+         }
+       }
+       releaseTextures() {
+         if (this._textures)
+           for (let HH = 0; HH < this._textures.length; ++HH) this._textures[HH].dispose();
+         this._textures = null
+       }
+ ... (2 more added lines; see GitHub link above)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L579` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2497) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L579)

```diff
-   42257: (UU, XU, zU) => {
+   41713: (HH, BH, LH) => {
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L581` → after: `L2499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2499) · [Before (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L581)

```diff
-       b: () => yU
+       d: () => AH
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L583-L586` → after: `L2501-L2503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2501-L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2501-L2503) · [Before (L583-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L583-L586)

```diff
-     var cU = zU(41557);
-     class yU extends cU.e {
-       get depth() {
-         return this._depth
+     class AH {
+       static get ForceFullSceneLoadingForIncremental() {
+         return AH._ForceFullSceneLoadingForIncremental
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L588-L595` → after: `L2505-L2506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2505-L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2505-L2506) · [Before (L588-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L588-L595)

```diff
-       constructor(UU, XU, zU, yU, QU, AU) {
-         let FU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
-           oU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-           DU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : cU.e.TRILINEAR_SAMPLINGMODE,
-           EU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
-           YU = arguments.length > 10 ? arguments[10] : void 0,
-           NU = arguments.length > 11 ? arguments[11] : void 0;
-         super(null, AU, !FU, oU), this.format = QU, this._texture = AU.qp().createRawTexture2DArray(UU, XU, zU, yU, QU, FU, oU, DU, null, EU, YU ?? 0, NU), this._depth = yU, this.is2DArray = !0
+       static set ForceFullSceneLoadingForIncremental(HH) {
+         AH._ForceFullSceneLoadingForIncremental = HH
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L597-L598` → after: `L2508-L2509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2508-L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2508-L2509) · [Before (L597-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L597-L598)

```diff
-       update(UU) {
-         this.updateMipLevel(UU, 0)
+       static get ShowLoadingScreen() {
+         return AH._ShowLoadingScreen
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L600-L601` → after: `L2511-L2512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2511-L2512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2511-L2512) · [Before (L600-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L600-L601)

```diff
-       updateMipLevel(UU, XU) {
-         this._texture && this._getEngine().updateRawTexture2DArray(this._texture, UU, this._texture.format, this._texture.invertY, null, this._texture.type, XU)
+       static set ShowLoadingScreen(HH) {
+         AH._ShowLoadingScreen = HH
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L603-L604` → after: `L2514-L2524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2514-L2524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2514-L2524) · [Before (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L603-L604)

```diff
-       static CreateRGBATexture(UU, XU, zU, cU, QU) {
-         return new yU(UU, XU, zU, cU, 5, QU, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== … [truncated]
+       static get loggingLevel() {
+         return AH._LoggingLevel
+       }
+       static set loggingLevel(HH) {
+         AH._LoggingLevel = HH
+       }
+       static get CleanBoneMatrixWeights() {
+         return AH._CleanBoneMatrixWeights
+       }
+       static set CleanBoneMatrixWeights(HH) {
+         AH._CleanBoneMatrixWeights = HH
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L608` → after: `L2529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2529) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L608)

```diff
-   42248: (UU, XU, zU) => {
+   41372: (HH, BH, LH) => {
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L610` → after: `L2531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2531) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L610)

```diff
-       c: () => cU.e
+       c: () => hH
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L612-L613` → after: `L2533-L2546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2533-L2546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2533-L2546) · [Before (L612-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L612-L613)

```diff
-     var cU = zU(41436);
-     (0, cU.i)()
+     var AH = LH(39595);
+     const rH = new Map;
+ 
+     function SH(HH, BH) {
+       (function(HH) {
+         return rH.delete(HH)
+       })(HH) && AH.e.Warn(`Extension with the name '${HH}' already exists`), rH.set(HH, BH)
+     }
+ 
+     function hH(HH, BH) {
+       "image/ktx" !== BH && "image/ktx2" !== BH || (HH = ".ktx"), rH.has(HH) || (HH.endsWith(".ies") && SH(".ies", (async () => await LH.e(618).then((() => LH(45251))).then((HH => new HH._IESTextureLoader)))), HH.endsWith(".dds") && SH(".dds", (async () => await LH.e(616).then((( … [truncated]
+       const AH = rH.get(HH);
+       return AH ? Promise.resolve(AH(BH)) : null
+     }
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L615` → after: `L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2548) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L615)

```diff
-   41199: (UU, XU, zU) => {
+   41742: (HH, BH, LH) => {
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L617` → after: `L2550-L2551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2550-L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2550-L2551) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L617)

```diff
-       e: () => cU.d
+       c: () => hH,
+       g: () => CH
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L619-L620` → after: `L2553-L7749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2553-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/280.js#L2553-L7749) · [Before (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/280.js#L619-L620)

```diff
-     var cU = zU(41202);
-     (0, cU.b)()
+     var AH = LH(41573),
+       rH = LH(41326),
+       SH = LH(38012);
+     class hH extends AH.c {
+       get BBH() {
+         return this._subMaterials
+       }
+       set BBH(HH) {
+         this._subMaterials = HH, this._hookArray(HH)
+       }
+       getChildren() {
+         return this.BBH
+       }
+       constructor(HH, BH) {
+         super(HH, BH, !0), this._waitingSubMaterialsUniqueIds = [], this.yN().addMultiMaterial(this), this.BBH = [], this._storeEffectOnSubMeshes = !0
+       }
+ ... (5181 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/281.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/281.js` (69 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L4` → after: `L4-L6661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L4-L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L4-L6661) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L4)

```diff
-   41295: (UU, XU, zU) => {
+   41427: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => tH,
+       d: () => QH,
+       f: () => CH,
+       i: () => zH
+     });
+     var AH = LH(41218),
+       rH = LH(39595),
+       SH = LH(41356),
+       hH = LH(41260);
+     class tH {
+       get mV() {
+         return this._isDisposed
+       }
+       constructor(HH, BH, LH) {
+ ... (6642 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L8-L57` → after: `L6665-L6705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R6665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L6665-L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L6665-L6705) · [Before (L8-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L8-L57)

```diff
-     var cU = zU(41113),
-       yU = zU(41121),
-       QU = zU(37819),
-       AU = zU(41301),
-       FU = zU(41323),
-       oU = zU(41278),
-       DU = zU(41205);
-     let EU = (() => {
-       var UU;
-       let XU, zU, AU, FU, EU, YU, NU, IU, pU, aU, tU, gU = [],
-         kU = [],
-         GU = [],
-         BU = [],
-         ZU = [],
-         RU = [],
-         PU = [],
- ... (34 more removed lines; see GitHub link above)
+     class AH {
+       constructor(HH) {
+         this._supportBlendParametersPerTarget = HH, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled =  … [truncated]
+       }
+       get isDirty() {
+         return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
+       }
+       get alphaBlend() {
+         return this._numTargetEnabled > 0
+       }
+       set alphaBlend(HH) {
+         this.setAlphaBlend(HH)
+       }
+       setAlphaBlend(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         this._alphaBlend[BH] !== HH && (HH ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[BH] = HH, this._isAlphaBlendDirty = !0)
+ ... (25 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L59-L76` → after: `L6707-L6711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R6707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L6707-L6711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L6707-L6711) · [Before (L59-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L59-L76)

```diff
-         detachControl() {
-           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
-         }
-         checkInputs() {
-           if (this._onKeyboardObserver) {
-             const UU = this.camera,
-               XU = UU.movement.input,
-               zU = XU.getEntry("keyboard", "translate"),
-               cU = XU.getEntry("keyboard", "rotate"),
-               yU = cU?.sensitivity ?? 1,
-               AU = UU._localDirection.sUU(0, 0, 0);
-             for (let QU = 0; QU < this._keys.length; QU++) {
-               const XU = this._keys[QU]; - 1 !== this.keysLeft.indexOf(XU) ? AU.x -= 1 : -1 !== this.keysUp.indexOf(XU) ? AU.z += 1 : -1 !== this.keysRight.indexOf(XU) ? AU.x += 1 : -1 !== this.keysDown.indexOf(XU) ? AU.z -= 1 : -1 !== this.keysUpward.indexOf(XU) ? AU.y += 1 : -1 … [truncated]
-             }
-             if (zU && (0 !== AU.x || 0 !== AU.y || 0 !== AU.z)) {
-               const XU = UU._computeLocalCameraSpeed() * (zU.sensitivity ?? 1);
- ... (2 more removed lines; see GitHub link above)
+         const AH = HH;
+         if (this._isAlphaBlendDirty) {
+           for (let rH = 0; rH < BH; rH++) {
+             const BH = rH < this._numTargetEnabled ? rH : 0;
+             this._alphaBlend[BH] && 0 === (LH & 1 << rH) ? AH.enableIndexed(HH.BLEND, rH) : AH.disableIndexed(HH.BLEND, rH)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L79-L80` → after: `L6715-L6720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R6715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L6715-L6720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L6715-L6720) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L79-L80)

```diff
-         getClassName() {
-           return "FreeCameraKeyboardMoveInput"
+         if (this._isBlendFunctionParametersDirty) {
+           for (let HH = 0; HH < BH; HH++) {
+             const BH = HH < this._numTargetEnabled ? 4 * HH : 0;
+             AH.blendFuncSeparateIndexed(HH, this._blendFunctionParameters[BH + 0], this._blendFunctionParameters[BH + 1], this._blendFunctionParameters[BH + 2], this._blendFunctionParameters[BH + 3])
+           }
+           this._isBlendFunctionParametersDirty = !1
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L82-L83` → after: `L6722-L6727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R6722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L6722-L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L6722-L6727) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L82-L83)

```diff
-         _onLostFocus() {
-           this._keys.length = 0
+         if (this._isBlendEquationParametersDirty) {
+           for (let HH = 0; HH < BH; HH++) {
+             const BH = HH < this._numTargetEnabled ? 2 * HH : 0;
+             AH.blendEquationSeparateIndexed(HH, this._blendEquationParameters[BH + 0], this._blendEquationParameters[BH + 1])
+           }
+           this._isBlendEquationParametersDirty = !1
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L85-L86` → after: `L6729-L6794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R6729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L6729-L6794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L6729-L6794) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L85-L86)

```diff
-         getSimpleName() {
-           return "keyboard"
+       }
+       setAlphaMode(HH, BH) {
+         let LH = 32774;
+         switch (HH) {
+           case 0:
+             break;
+           case 7:
+             this.setAlphaBlendFunctionParameters(1, 771, 1, 1, BH);
+             break;
+           case 8:
+           case 14:
+             this.setAlphaBlendFunctionParameters(1, 771, 1, 771, BH);
+             break;
+           case 2:
+             this.setAlphaBlendFunctionParameters(770, 771, 1, 1, BH);
+             break;
+ ... (50 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L88-L90` → after: `L6796-L6860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R6796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L6796-L6860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L6796-L6860) · [Before (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L88-L90)

```diff
-         _getLocalRotation() {
-           const UU = this.camera._calculateHandednessMultiplier();
-           return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * UU
+         this.setAlphaEquationParameters(LH, LH, BH)
+       }
+     }
+   },
+   41470: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => AH
+     });
+     class AH {}
+     AH._IsPickingAvailable = !1
+   },
+   41383: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => tL,
+       d: () => SL
+     });
+ ... (49 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L92-L241` → after: `L6862-L7035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R6862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L6862-L7035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L6862-L7035) · [Before (L92-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L92-L241)

```diff
-       }, (() => {
-         const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         XU = [(0, yU.I)()], zU = [(0, yU.I)()], AU = [(0, yU.I)()], FU = [(0, yU.I)()], EU = [(0, yU.I)()], YU = [(0, yU.I)()], NU = [(0, yU.I)()], IU = [(0, yU.I)()], pU = [(0, yU.I)()], aU = [(0, yU.I)()], tU = [(0, yU.I)()], (0, cU.j)(null, null, XU, {
-           kind: "field",
-           name: "keysUp",
-           static: !1,
-           private: !1,
-           access: {
-             has: UU => "keysUp" in UU,
-             get: UU => UU.keysUp,
-             set: (UU, XU) => {
-               UU.keysUp = XU
-             }
-           },
-           metadata: QU
-         }, gU, kU), (0, cU.j)(null, null, zU, {
- ... (134 more removed lines; see GitHub link above)
+       }
+       first(HH) {
+         for (const BH in this._data) {
+           const LH = HH(BH, this._data[BH]);
+           if (LH) return LH
+         }
+         return null
+       }
+     }
+     var CH = LH(41326),
+       EH = LH(37963),
+       XH = LH(41402),
+       GH = LH(41416),
+       YH = LH(41420);
+     class uH {
+       constructor(HH, BH, LH, AH, rH, SH) {
+ ... (158 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L243-L261` → after: `L7037-L7063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R7037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L7037-L7063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L7037-L7063) · [Before (L243-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L243-L261)

```diff
-       })(), UU
-     })();
-     FU.d.FreeCameraKeyboardMoveInput = EU;
-     var YU = zU(37846),
-       NU = zU(41271);
-     let IU = (() => {
-       var UU;
-       let XU, zU, QU = [],
-         AU = [],
-         FU = [],
-         oU = [];
-       return UU = class {
-         _applyPointerRotation(UU, XU) {
-           this._pointerConditions.button = this._currentActiveButton;
-           const zU = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
-           if (!zU || "rotate" !== zU.interaction) return;
- ... (3 more removed lines; see GitHub link above)
+       }
+       pollInput(HH, BH, LH) {
+         const rH = this._inputs[HH][BH];
+         if (!rH) throw `Unable to find device ${OH[HH]}`;
+         HH >= OH.DualShock && HH <= OH.DualSense && this._updateDevice(HH, BH, LH);
+         const SH = rH[LH];
+         if (void 0 === SH) throw `Unable to find input ${LH} for device ${OH[HH]} in slot ${BH}`;
+         return LH === bH.Move && AH.i.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), SH
+       }
+       isDeviceAvailable(HH) {
+         return void 0 !== this._inputs[HH]
+       }
+       dispose() {
+         this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
+       }
+       _enableEvents() {
+ ... (11 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L263-L289` → after: `L7065-L7165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R7065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L7065-L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L7065-L7165) · [Before (L263-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L263-L289)

```diff
-         constructor() {
-           let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-           this.touchEnabled = UU, this.buttons = (0, cU.n)(this, QU, [0, 1, 2]), this.angularSensibility = ((0, cU.n)(this, AU), (0, cU.n)(this, FU, 2e3)), this._pointerInput = (0, cU.n)(this, oU), this._previousPosition = null, this.onPointerMovedObservable = new YU.e, this._all … [truncated]
-         }
-         attachControl(UU) {
-           UU = DU.j.BackCompatCameraNoPreventDefault(arguments);
-           const XU = this.camera.qp(),
-             zU = XU.getInputElement();
-           this._pointerInput || (this._pointerInput = cU => {
-             const yU = cU.event,
-               QU = "touch" === yU.pointerType;
-             if (!this.touchEnabled && QU) return;
-             if (cU.type !== NU.c.POINTERMOVE && -1 === this.buttons.indexOf(yU.button)) return;
-             const AU = yU.target;
-             if (cU.type === NU.c.POINTERDOWN) {
-               if (QU && -1 !== this._activePointerId || !QU && -1 !== this._currentActiveButton) return;
- ... (11 more removed lines; see GitHub link above)
+       }
+       _disableEvents() {
+         this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._el … [truncated]
+       }
+       _checkForConnectedDevices() {
+         if (navigator.getGamepads) {
+           const HH = navigator.getGamepads();
+           for (const BH of HH) BH && this._addGamePad(BH)
+         }
+         "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(OH.Mouse, 0, 0, 0)
+       }
+       _addGamePad(HH) {
+         const BH = this._getGamepadDeviceType(HH.id),
+           LH = HH.index;
+         this._gamepads = this._gamepads || new Array(HH.index + 1), this._registerDevice(BH, LH, HH.buttons.length + HH.axes.length), this._gamepads[LH] = BH
+       }
+ ... (85 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L291-L304` → after: `L7167-L7216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R7167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L7167-L7216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L7167-L7216) · [Before (L291-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L291-L304)

```diff
-               this._currentActiveButton = -1, this._previousPosition = null, UU || yU.preventDefault(), this._activePointerId = -1
-             } else if (cU.type === NU.c.POINTERMOVE && (this._activePointerId === yU.pointerId || !QU))
-               if (XU.isPointerLock && this._onMouseMove) this._onMouseMove(cU.event);
-               else if (this._previousPosition) {
-               const XU = this.camera._calculateHandednessMultiplier(),
-                 zU = (yU.clientX - this._previousPosition.x) * XU,
-                 cU = (yU.clientY - this._previousPosition.y) * XU;
-               this._allowCameraRotation && this._applyPointerRotation(zU, cU), this.onPointerMovedObservable.notifyObservers({
-                 offsetX: zU,
-                 offsetY: cU
-               }), this._previousPosition = {
-                 x: yU.clientX,
-                 y: yU.clientY
-               }, UU || yU.preventDefault()
+             } else if (HH.pointerId && !document.pointerLockElement) try {
+               this._elementToAttachTo.setPointerCapture(HH.pointerId)
+             } catch (SH) {}
+             rH[bH.Horizontal] = HH.clientX, rH[bH.Vertical] = HH.clientY, rH[HH.button + 2] = 1;
+             const tH = HH;
+             tH.inputIndex = HH.button + 2, this._onInputChanged(BH, LH, tH), AH === HH.clientX && hH === HH.clientY || (tH.inputIndex = bH.Move, this._onInputChanged(BH, LH, tH))
+           }
+         }, this._pointerUpEvent = HH => {
+           const BH = this._getPointerType(HH),
+             LH = BH === OH.Mouse ? 0 : this._activeTouchIds.indexOf(HH.pointerId);
+           if (BH === OH.Touch) {
+             if (-1 === LH) return;
+             this._activeTouchIds[LH] = -1
+           }
+           const AH = this._inputs[BH]?.[LH];
+           let rH = HH.button,
+ ... (34 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L306-L319` → after: `L7218-L7240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R7218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L7218-L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L7218-L7240) · [Before (L306-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L306-L319)

```diff
-           }), this._onMouseMove = zU => {
-             if (!XU.isPointerLock) return;
-             const cU = this.camera._calculateHandednessMultiplier();
-             this._applyPointerRotation(zU.movementX * cU, zU.movementY * cU), this._previousPosition = null, UU || zU.preventDefault()
-           }, this._observer = this.camera.nS()._inputManager._addCameraPointerObserver(this._pointerInput, NU.c.POINTERDOWN | NU.c.POINTERUP | NU.c.POINTERMOVE), zU && (this._contextMenuBind = UU => this.onContextMenu(UU), zU.addEventListener("contextmenu", this._contextMenuBind, … [truncated]
-         }
-         onContextMenu(UU) {
-           UU.preventDefault()
-         }
-         detachControl() {
-           if (this._observer) {
-             if (this.camera.nS()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
-               const UU = this.camera.qp().getInputElement();
-               UU && UU.removeEventListener("contextmenu", this._contextMenuBind)
+           });
+           this._elementToAttachTo.addEventListener("test", BH, LH), this._elementToAttachTo.removeEventListener("test", BH, LH)
+         } catch (LH) {}
+         this._pointerBlurEvent = () => {
+           if (this.isDeviceAvailable(OH.Mouse)) {
+             const HH = this._inputs[OH.Mouse][0];
+             this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
+             for (let BH = bH.LeftClick; BH <= bH.BrowserForward; BH++)
+               if (1 === HH[BH]) {
+                 HH[BH] = 0;
+                 const LH = cH.CreateDeviceEvent(OH.Mouse, 0, BH, 0, this, this._elementToAttachTo);
+                 this._onInputChanged(OH.Mouse, 0, LH)
+               }
+           }
+           if (this.isDeviceAvailable(OH.Touch)) {
+             const HH = this._inputs[OH.Touch];
+ ... (7 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L323-L329` → after: `L7243-L7278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R7243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L7243-L7278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L7243-L7278) · [Before (L323-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L323-L329)

```diff
-           this._activePointerId = -1, this._currentActiveButton = -1
-         }
-         getClassName() {
-           return "FreeCameraMouseInput"
-         }
-         getSimpleName() {
-           return "mouse"
+         }, this._pointerWheelEvent = HH => {
+           const BH = OH.Mouse;
+           this._inputs[BH] || (this._inputs[BH] = []), this._inputs[BH][0] || (this._pointerActive = !0, this._registerDevice(BH, 0, qH));
+           const LH = this._inputs[BH][0];
+           if (LH) {
+             LH[bH.MouseWheelX] = HH.deltaX || 0, LH[bH.MouseWheelY] = HH.deltaY || HH.wheelDelta || 0, LH[bH.MouseWheelZ] = HH.deltaZ || 0;
+             const AH = HH;
+             void 0 === HH.pointerId && (HH.pointerId = this._mouseId), 0 !== LH[bH.MouseWheelX] && (AH.inputIndex = bH.MouseWheelX, this._onInputChanged(BH, 0, AH)), 0 !== LH[bH.MouseWheelY] && (AH.inputIndex = bH.MouseWheelY, this._onInputChanged(BH, 0, AH)), 0 !== LH[bH.MouseWh … [truncated]
+           }
+         }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = HH => {
+           HH.buttons > 1 && this._pointerCancelEvent(HH)
+         }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._p … [truncated]
+           passive: !1
+         }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
+           if (this.isDeviceAvailable(OH.Mouse)) {
+             const HH = this._inputs[OH.Mouse][0];
+ ... (20 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L331-L342` → after: `L7280-L7305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R7280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L7280-L7305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L7280-L7305) · [Before (L331-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L331-L342)

```diff
-       }, (() => {
-         const DU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         XU = [(0, yU.I)()], zU = [(0, yU.I)()], (0, cU.j)(null, null, XU, {
-           kind: "field",
-           name: "buttons",
-           static: !1,
-           private: !1,
-           access: {
-             has: UU => "buttons" in UU,
-             get: UU => UU.buttons,
-             set: (UU, XU) => {
-               UU.buttons = XU
+       }
+       _getGamepadDeviceType(HH) {
+         return -1 !== HH.indexOf("054c") ? -1 !== HH.indexOf("0ce6") ? OH.DualSense : OH.DualShock : -1 !== HH.indexOf("Xbox One") || -1 !== HH.search("Xbox 360") || -1 !== HH.search("xinput") || -1 !== HH.indexOf("045e") && -1 === HH.indexOf("Surface Dock") ? OH.Xbox : -1 !== HH … [truncated]
+       }
+       _getPointerType(HH) {
+         let BH = OH.Mouse;
+         return ("touch" === HH.pointerType || "pen" === HH.pointerType || HH.touches) && (BH = OH.Touch), BH
+       }
+     }
+     class NH {
+       constructor(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.deviceType = BH, this.deviceSlot = LH, this.onInputChangedObservable = new hH.d, this._deviceInputSystem = HH
+       }
+       getInput(HH) {
+         return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, HH)
+ ... (10 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L344-L355` → after: `L7307-L7319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R7307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L7307-L7319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L7307-L7319) · [Before (L344-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L344-L355)

```diff
-           },
-           metadata: DU
-         }, QU, AU), (0, cU.j)(null, null, zU, {
-           kind: "field",
-           name: "angularSensibility",
-           static: !1,
-           private: !1,
-           access: {
-             has: UU => "angularSensibility" in UU,
-             get: UU => UU.angularSensibility,
-             set: (UU, XU) => {
-               UU.angularSensibility = XU
+           }
+           this._registeredManagers.push(HH)
+         }, this.unregisterManager = HH => {
+           const BH = this._registeredManagers.indexOf(HH);
+           BH > -1 && this._registeredManagers.splice(BH, 1)
+         };
+         const BH = Object.keys(OH).length / 2;
+         this._devices = new Array(BH);
+         const LH = (HH, BH) => {
+             this._devices[HH] || (this._devices[HH] = new Array), this._devices[HH][BH] || (this._devices[HH][BH] = BH);
+             for (const LH of this._registeredManagers) {
+               const AH = new NH(this._deviceInputSystem, HH, BH);
+               LH._addDevice(AH)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L358-L397` → after: `L7322-L7340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R7322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L7322-L7340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L7322-L7340) · [Before (L358-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L358-L397)

```diff
-           metadata: DU
-         }, FU, oU), DU && Object.defineProperty(UU, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: DU
-         })
-       })(), UU
-     })();
-     FU.d.FreeCameraMouseInput = IU;
-     var pU = zU(41283);
-     let aU = (() => {
-       var UU;
-       let XU, zU, QU, AU = [],
-         FU = [],
-         oU = [],
- ... (24 more removed lines; see GitHub link above)
+           AH = (HH, BH) => {
+             this._devices[HH]?.[BH] && delete this._devices[HH][BH];
+             for (const LH of this._registeredManagers) LH._removeDevice(HH, BH)
+           },
+           rH = (HH, BH, LH) => {
+             if (LH)
+               for (const AH of this._registeredManagers) AH._onInputChanged(HH, BH, LH)
+           };
+         "undefined" !== typeof _native ? this._deviceInputSystem = new eH(LH, AH, rH) : this._deviceInputSystem = new gH(HH, LH, AH, rH)
+       }
+       dispose() {
+         this._deviceInputSystem.dispose()
+       }
+     }
+     class jH {
+       getDeviceSource(HH, BH) {
+ ... (3 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L399-L400` → after: `L7342-L7390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R7342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L7342-L7390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L7342-L7390) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L399-L400)

```diff
-         getClassName() {
-           return "BaseCameraMouseWheelInput"
+         return this._devices[HH] && void 0 !== this._devices[HH][BH] ? this._devices[HH][BH] : null
+       }
+       getDeviceSources(HH) {
+         return this._devices[HH] ? this._devices[HH].filter((HH => !!HH)) : []
+       }
+       constructor(HH) {
+         const BH = Object.keys(OH).length / 2;
+         this._devices = new Array(BH), this._firstDevice = new Array(BH), this._engine = HH, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new RH(HH)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new hH.d((HH => {
+           for (const BH of this._devices)
+             if (BH)
+               for (const LH of BH) LH && this.onDeviceConnectedObservable.notifyObserver(HH, LH)
+         })), this.onDeviceDisconnectedObservable = new hH.d, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = HH.uR.add((() => {
+           this.dispose()
+         }))
+       }
+       dispose() {
+ ... (33 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L402-L403` → after: `L7392-L7461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R7392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L7392-L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L7392-L7461) · [Before (L402-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L402-L403)

```diff
-         getSimpleName() {
-           return "mousewheel"
+       }
+     }
+     var nH = LH(41470);
+     class FH {
+       constructor() {
+         this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
+       }
+       get singleClick() {
+         return this._singleClick
+       }
+       get qE() {
+         return this._doubleClick
+       }
+       get hasSwiped() {
+         return this._hasSwiped
+       }
+ ... (54 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L405-L416` → after: `L7463-L7536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R7463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L7463-L7536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L7463-L7536) · [Before (L405-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L405-L416)

```diff
-       }, (() => {
-         const DU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         XU = [(0, yU.I)()], zU = [(0, yU.I)()], QU = [(0, yU.I)()], (0, cU.j)(null, null, XU, {
-           kind: "field",
-           name: "wheelPrecisionX",
-           static: !1,
-           private: !1,
-           access: {
-             has: UU => "wheelPrecisionX" in UU,
-             get: UU => UU.wheelPrecisionX,
-             set: (UU, XU) => {
-               UU.wheelPrecisionX = XU
+         const SH = BH.inputIndex >= bH.MouseWheelX && BH.inputIndex <= bH.MouseWheelZ ? UH.d.POINTERWHEEL : UH.d.POINTERMOVE;
+         let hH;
+         LH.onPointerMove && (HH = HH || this._pickMove(BH), LH.onPointerMove(BH, HH, SH)), HH ? (hH = new UH.g(SH, BH, HH), this._setRayOnPointerInfo(HH, BH)) : (hH = new UH.g(SH, BH, null, this), this._movePointerInfo = hH), LH.onPointerObservable.hasObservers() && LH.onPointerO … [truncated]
+       }
+       _setRayOnPointerInfo(HH, BH) {
+         const LH = this._scene;
+         HH && nH.e._IsPickingAvailable && (HH.ray || (HH.ray = LH.createPickingRay(BH.offsetX, BH.offsetY, EH.e.Identity(), LH.activeCamera)))
+       }
+       _addCameraPointerObserver(HH, BH) {
+         return this._cameraObserverCount++, this._scene.onPointerObservable.add(HH, BH)
+       }
+       _removeCameraPointerObserver(HH) {
+         return this._cameraObserverCount--, this._scene.onPointerObservable.remove(HH)
+       }
+       _checkForPicking() {
+         return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
+ ... (58 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L418-L429` → after: `L7538-L7584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R7538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L7538-L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L7538-L7584) · [Before (L418-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L418-L429)

```diff
-           },
-           metadata: DU
-         }, AU, FU), (0, cU.j)(null, null, zU, {
-           kind: "field",
-           name: "wheelPrecisionY",
-           static: !1,
-           private: !1,
-           access: {
-             has: UU => "wheelPrecisionY" in UU,
-             get: UU => UU.wheelPrecisionY,
-             set: (UU, XU) => {
-               UU.wheelPrecisionY = XU
+             AH.hasSpecificTrigger(8) && window.setTimeout((() => {
+               const HH = LH.XY(this._unTranslatedPointerX, this._unTranslatedPointerY, (HH => HH.jQ && HH.isVisible && HH.isReady() && HH.actionManager && HH.actionManager.hasSpecificTrigger(8) && HH === this._pickedDownMesh), !1, LH.cameraToUseForPointers);
+               HH?.pickedMesh && AH && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > DH.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, AH.processTrigger(8, uH.CreateNew(HH.pickedMesh, BH)))
+             }), DH.LongPressDelay)
+           }
+         } else
+           for (const SH of LH._pointerDownStage) HH = SH.action(this._unTranslatedPointerX, this._unTranslatedPointerY, HH, BH, !1);
+         let AH;
+         const rH = UH.d.POINTERDOWN;
+         HH ? (LH.onPointerDown && LH.onPointerDown(BH, HH, rH), AH = new UH.g(rH, BH, HH), this._setRayOnPointerInfo(HH, BH)) : AH = new UH.g(rH, BH, null, this), LH.onPointerObservable.hasObservers() && LH.onPointerObservable.notifyObservers(AH, rH)
+       }
+       _isPointerSwiping() {
+         return this._isSwiping
+       }
+       simulatePointerUp(HH, BH, LH) {
+         const AH = new PointerEvent("pointerup", BH);
+ ... (31 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L431-L442` → after: `L7586-L7634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R7586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L7586-L7634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L7586-L7634) · [Before (L431-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L431-L442)

```diff
-           },
-           metadata: DU
-         }, oU, EU), (0, cU.j)(null, null, QU, {
-           kind: "field",
-           name: "wheelPrecisionZ",
-           static: !1,
-           private: !1,
-           access: {
-             has: UU => "wheelPrecisionZ" in UU,
-             get: UU => UU.wheelPrecisionZ,
-             set: (UU, XU) => {
-               UU.wheelPrecisionZ = XU
+           }
+         }
+       }
+       isPointerCaptured() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+         return this._pointerCaptures[HH]
+       }
+       attachControl() {
+         let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
+           AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
+         const rH = this._scene,
+           SH = rH.Iu();
+         AH || (AH = SH.getInputElement()), this._alreadyAttached && this.detachControl(), AH && (this._alreadyAttachedTo = AH), this._deviceSourceManager = new jH(SH), this._initActionManager = HH => {
+           if (!this._meshPickProceed) {
+ ... (33 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L444-L450` → after: `L7636-L7725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R7636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L7636-L7725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L7636-L7725) · [Before (L444-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L444-L450)

```diff
-           },
-           metadata: DU
-         }, IU, aU), DU && Object.defineProperty(UU, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: DU
+           }
+           tH || AH(rH, this._currentPickResult)
+         }, this._onPointerMove = HH => {
+           if (this._updatePointerPosition(HH), this._latestPointerMoveEvents.set(HH.pointerId, {
+               event: HH,
+               pointerX: this._pointerX,
+               pointerY: this._pointerY,
+               unTranslatedPointerX: this._unTranslatedPointerX,
+               unTranslatedPointerY: this._unTranslatedPointerY
+             }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > DH.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > DH.DragMovementThreshold), SH.isPointerLo … [truncated]
+           if (!rH.cameraToUseForPointers && !rH.activeCamera) return;
+           if (rH.skipPointerMovePicking) return void this._processPointerMove(new YH.b, HH);
+           this._ensurePointerMovePredicate();
+           const BH = rH._registeredActions > 0 || rH.constantlyUpdateMeshUnderPointer ? this._pickMove(HH) : null;
+           this._processPointerMove(BH, HH)
+         }, this._onPointerDown = HH => {
+ ... (74 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L452-L453` → after: `L7727-L7758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R7727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L7727-L7758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L7727-L7758) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L452-L453)

```diff
-       })(), UU
-     })();
+       }
+       getPointerOverMesh() {
+         return this.meshUnderPointer
+       }
+       _invalidateMesh(HH) {
+         this._pointerOverMesh === HH && (this._pointerOverMesh = null), this._pickedDownMesh === HH && (this._pickedDownMesh = null), this._pickedUpMesh === HH && (this._pickedUpMesh = null);
+         for (const BH in this._meshUnderPointerId) this._meshUnderPointerId[BH] === HH && delete this._meshUnderPointerId[BH]
+       }
+     }
+     DH.DragMovementThreshold = 10, DH.LongPressDelay = 500, DH.DoubleClickDelay = 300, DH.ExclusiveDoubleClickMode = !1;
+     var wH = LH(41231),
+       ZH = LH(38074),
+       dH = LH(38610);
+     class aH {
+       static get UniqueId() {
+         const HH = this._UniqueIdCounter;
+ ... (16 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L456` → after: `L7761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R7761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L7761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L7761) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L456)

```diff
-       UU[UU.MoveRelative = 0] = "MoveRelative", UU[UU.RotateRelative = 1] = "RotateRelative", UU[UU.MoveScene = 2] = "MoveScene"
+       HH[HH.BackwardCompatible = 0] = "BackwardCompatible", HH[HH.Intermediate = 1] = "Intermediate", HH[HH.Aggressive = 2] = "Aggressive"
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L458-L500` → after: `L7763-L7794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R7763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L7763-L7794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L7763-L7794) · [Before (L458-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L458-L500)

```diff
-     let gU = (() => {
-       var UU;
-       let XU, zU, AU, FU, oU, DU, EU, YU, NU, IU = aU,
-         pU = [];
-       return UU = class extends IU {
-         constructor() {
-           super(...arguments), this.camera = (0, cU.n)(this, pU), this._moveRelative = QU.q.Zero(), this._rotateRelative = QU.q.Zero(), this._moveScene = QU.q.Zero(), this._wheelXAction = tU.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = tU.MoveRelative, thi … [truncated]
-         }
-         getClassName() {
-           return "FreeCameraMouseWheelInput"
-         }
-         set wheelXMoveRelative(UU) {
-           null === UU && this._wheelXAction !== tU.MoveRelative || (this._wheelXAction = tU.MoveRelative, this._wheelXActionCoordinate = UU)
-         }
-         get wheelXMoveRelative() {
-           return this._wheelXAction !== tU.MoveRelative ? null : this._wheelXActionCoordinate
- ... (27 more removed lines; see GitHub link above)
+     class SL {
+       static DefaultMaterialFactory(HH) {
+         throw (0, TH.i)("StandardMaterial")
+       }
+       static CollisionCoordinatorFactory() {
+         throw (0, TH.i)("DefaultCollisionCoordinator")
+       }
+       get clearColor() {
+         return this._clearColor
+       }
+       set clearColor(HH) {
+         HH !== this._clearColor && (this._clearColor = HH, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
+       }
+       get imageProcessingConfiguration() {
+         return this._imageProcessingConfiguration
+       }
+ ... (16 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L502-L503` → after: `L7796-L8044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R7796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L7796-L8044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L7796-L8044) · [Before (L502-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L502-L503)

```diff
-         get wheelZRotateRelative() {
-           return this._wheelZAction !== tU.RotateRelative ? null : this._wheelZActionCoordinate
+       }
+       set forceWireframe(HH) {
+         this._forceWireframe !== HH && (this._forceWireframe = HH, this.markAllMaterialsAsDirty(16))
+       }
+       get forceWireframe() {
+         return this._forceWireframe
+       }
+       set skipFrustumClipping(HH) {
+         this._skipFrustumClipping !== HH && (this._skipFrustumClipping = HH)
+       }
+       get skipFrustumClipping() {
+         return this._skipFrustumClipping
+       }
+       set forcePointsCloud(HH) {
+         this._forcePointsCloud !== HH && (this._forcePointsCloud = HH, this.markAllMaterialsAsDirty(16))
+       }
+ ... (233 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L505-L506` → after: `L8046-L8211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8046-L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8046-L8211) · [Before (L505-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L505-L506)

```diff
-         set wheelXMoveScene(UU) {
-           null === UU && this._wheelXAction !== tU.MoveScene || (this._wheelXAction = tU.MoveScene, this._wheelXActionCoordinate = UU)
+       }
+       SrH(HH) {
+         this._components.push(HH), this._transientComponents.push(HH);
+         const BH = HH;
+         BH.addFromContainer && BH.serialize && this._serializableComponents.push(BH)
+       }
+       _getComponent(HH) {
+         for (const BH of this._components)
+           if (BH.name === HH) return BH;
+         return null
+       }
+       get uniqueId() {
+         return this._uniqueId
+       }
+       constructor(HH, BH) {
+         this._inputManager = new DH(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new ZH.g(.2, .2, .3, 1), this.onClearColorChangedObservable = new hH.d, … [truncated]
+ ... (150 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L508-L509` → after: `L8213-L8219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8213-L8219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8213-L8219) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L508-L509)

```diff
-         get wheelXMoveScene() {
-           return this._wheelXAction !== tU.MoveScene ? null : this._wheelXActionCoordinate
+         if (BH) {
+           for (HH = 0; HH < this._materialsRenderTargets.length; ++HH) {
+             this._materialsRenderTargets.data[HH].isReadyForRendering() || (rH = !1)
+           }
+           for (HH = 0; HH < this.customRenderTargets.length; ++HH) {
+             this.customRenderTargets[HH].isReadyForRendering() || (rH = !1)
+           }
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L511-L512` → after: `L8221-L8222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8221-L8222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8221-L8222) · [Before (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L511-L512)

```diff
-         set wheelYMoveScene(UU) {
-           null === UU && this._wheelYAction !== tU.MoveScene || (this._wheelYAction = tU.MoveScene, this._wheelYActionCoordinate = UU)
+         for (HH = 0; HH < this.geometries.length; HH++) {
+           2 === this.geometries[HH].delayLoadState && (rH = !1)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L514-L515` → after: `L8224-L8355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8224-L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8224-L8355) · [Before (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L514-L515)

```diff
-         get wheelYMoveScene() {
-           return this._wheelYAction !== tU.MoveScene ? null : this._wheelYActionCoordinate
+         if (this.activeCameras && this.activeCameras.length > 0)
+           for (const SH of this.activeCameras) SH.isReady(!0) || (rH = !1);
+         else this.activeCamera && (this.activeCamera.isReady(!0) || (rH = !1));
+         for (const SH of this.dU) SH.isReady() || (rH = !1);
+         if (this.proceduralTexturesEnabled)
+           for (const SH of this.proceduralTextures) SH.isReady() || (rH = !1);
+         if (this.layers)
+           for (const SH of this.layers) SH.isReady() || (rH = !1);
+         if (this.effectLayers)
+           for (const SH of this.effectLayers) SH.isLayerReady() || (rH = !1);
+         for (const SH of this._isReadyChecks) SH.isReady() || (rH = !1);
+         return LH.areAllEffectsReady() || (rH = !1), LH.currentRenderPassId = AH, rH
+       }
+       resetCachedMaterial() {
+         this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
+       }
+ ... (116 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L517-L518` → after: `L8357-L8363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8357-L8363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8357-L8363) · [Before (L517-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L517-L518)

```diff
-         set wheelZMoveScene(UU) {
-           null === UU && this._wheelZAction !== tU.MoveScene || (this._wheelZAction = tU.MoveScene, this._wheelZActionCoordinate = UU)
+       }
+       gR(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         const LH = this.meshes.indexOf(HH);
+         if (-1 !== LH && (this.meshes.splice(LH, 1), HH.parent || HH._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(HH), this.onMeshRemovedObservable.notifyObservers(HH), BH) {
+           const BH = HH.getChildMeshes();
+           for (const HH of BH) this.gR(HH)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L520-L521` → after: `L8365-L8377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8365-L8377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8365-L8377) · [Before (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L520-L521)

```diff
-         get wheelZMoveScene() {
-           return this._wheelZAction !== tU.MoveScene ? null : this._wheelZActionCoordinate
+         return LH
+       }
+       addTransformNode(HH) {
+         this._blockEntityCollection || HH.yN() === this && -1 !== HH._indexInSceneTransformNodesArray || (HH._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(HH), HH.parent || HH._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable … [truncated]
+       }
+       removeTransformNode(HH) {
+         const BH = HH._indexInSceneTransformNodesArray;
+         if (-1 !== BH) {
+           if (BH !== this.transformNodes.length - 1) {
+             const HH = this.transformNodes[this.transformNodes.length - 1];
+             this.transformNodes[BH] = HH, HH._indexInSceneTransformNodesArray = BH
+           }
+           HH._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), HH.parent || HH._removeFromSceneRootNodes()
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L523-L529` → after: `L8379-L8393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8379-L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8379-L8393) · [Before (L523-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L523-L529)

```diff
-         checkInputs() {
-           if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
-           this._moveRelative.IUU(0), this._rotateRelative.IUU(0), this._moveScene.IUU(0), this._updateCamera(), this.camera.nS().useRightHandedSystem && (this._moveRelative.z *= -1);
-           const UU = QU.e.Zero();
-           this.camera.getViewMatrix().invertToRef(UU);
-           const XU = QU.q.Zero();
-           QU.q.TransformNormalToRef(this._moveRelative, UU, XU), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(XU), this.camera.cameraDirection.addInPlace(this._mo … [truncated]
+         return this.onTransformNodeRemovedObservable.notifyObservers(HH), BH
+       }
+       removeSkeleton(HH) {
+         const BH = this.skeletons.indexOf(HH);
+         return -1 !== BH && (this.skeletons.splice(BH, 1), this.onSkeletonRemovedObservable.notifyObservers(HH), this._executeActiveContainerCleanup(this._activeSkeletons)), BH
+       }
+       removeMorphTargetManager(HH) {
+         const BH = this.morphTargetManagers.indexOf(HH);
+         return -1 !== BH && this.morphTargetManagers.splice(BH, 1), BH
+       }
+       removeLight(HH) {
+         const BH = this.lights.indexOf(HH);
+         if (-1 !== BH) {
+           for (const BH of this.meshes) BH._removeLightSource(HH, !1);
+           this.lights.splice(BH, 1), this.sortLightsByPriority(), HH.parent || HH._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(HH)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L531-L532` → after: `L8395-L8400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8395-L8400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8395-L8400) · [Before (L531-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L531-L532)

```diff
-         _updateCamera() {
-           this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._whee … [truncated]
+         return BH
+       }
+       removeCamera(HH) {
+         const BH = this.cameras.indexOf(HH);
+         if (-1 !== BH && (this.cameras.splice(BH, 1), HH.parent || HH._removeFromSceneRootNodes()), this.activeCameras) {
+           const BH = this.activeCameras.indexOf(HH); - 1 !== BH && this.activeCameras.splice(BH, 1)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L534-L556` → after: `L8402-L8426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8402-L8426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8402-L8426) · [Before (L534-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L534-L556)

```diff
-         _updateCameraProperty(UU, XU, zU) {
-           if (0 === UU) return;
-           if (null === XU || null === zU) return;
-           let cU = null;
-           switch (XU) {
-             case tU.MoveRelative:
-               cU = this._moveRelative;
-               break;
-             case tU.RotateRelative:
-               cU = this._rotateRelative;
-               break;
-             case tU.MoveScene:
-               cU = this._moveScene
-           }
-           switch (zU) {
-             case 0:
- ... (7 more removed lines; see GitHub link above)
+         return this.activeCamera === HH && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(HH), BH
+       }
+       removeParticleSystem(HH) {
+         const BH = this.dU.indexOf(HH);
+         return -1 !== BH && (this.dU.splice(BH, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(HH), BH
+       }
+       removeAnimation(HH) {
+         const BH = this.animations.indexOf(HH);
+         return -1 !== BH && this.animations.splice(BH, 1), BH
+       }
+       stopAnimation(HH, BH, LH) {}
+       removeAnimationGroup(HH) {
+         const BH = this.animationGroups.indexOf(HH);
+         return -1 !== BH && this.animationGroups.splice(BH, 1), this.onAnimationGroupRemovedObservable.notifyObservers(HH), BH
+       }
+       removeMultiMaterial(HH) {
+ ... (9 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L559-L718` → after: `L8430-L8462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8430-L8462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8430-L8462) · [Before (L559-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L559-L718)

```diff
-       }, (() => {
-         const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(IU[Symbol.metadata] ?? null) : void 0;
-         XU = [(0, yU.I)()], zU = [(0, yU.I)()], AU = [(0, yU.I)()], FU = [(0, yU.I)()], oU = [(0, yU.I)()], DU = [(0, yU.I)()], EU = [(0, yU.I)()], YU = [(0, yU.I)()], NU = [(0, yU.I)()], (0, cU.j)(UU, null, XU, {
-           kind: "setter",
-           name: "wheelXMoveRelative",
-           static: !1,
-           private: !1,
-           access: {
-             has: UU => "wheelXMoveRelative" in UU,
-             set: (UU, XU) => {
-               UU.wheelXMoveRelative = XU
-             }
-           },
-           metadata: QU
-         }, null, pU), (0, cU.j)(UU, null, zU, {
-           kind: "setter",
- ... (144 more removed lines; see GitHub link above)
+         return this.onMaterialRemovedObservable.notifyObservers(HH), BH
+       }
+       removeActionManager(HH) {
+         const BH = this.actionManagers.indexOf(HH);
+         return -1 !== BH && this.actionManagers.splice(BH, 1), BH
+       }
+       removeTexture(HH) {
+         const BH = this.textures.indexOf(HH);
+         return -1 !== BH && this.textures.splice(BH, 1), this.onTextureRemovedObservable.notifyObservers(HH), BH
+       }
+       removeFrameGraph(HH) {
+         const BH = this.frameGraphs.indexOf(HH);
+         return -1 !== BH && this.frameGraphs.splice(BH, 1), this.onFrameGraphRemovedObservable.notifyObservers(HH), BH
+       }
+       removeObjectRenderer(HH) {
+         const BH = this.objectRenderers.indexOf(HH);
+ ... (17 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L720-L747` → after: `L8464-L8553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8464-L8553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8464-L8553) · [Before (L720-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L720-L747)

```diff
-         detachControl() {
-           if (this._pointerInput) {
-             if (this._observer && (this.camera.nS()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
-               const UU = this.camera.qp().getInputElement();
-               UU && UU.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
-             }
-             this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
-           }
-         }
-         checkInputs() {
-           if (null === this._offsetX || null === this._offsetY) return;
-           if (0 === this._offsetX && 0 === this._offsetY) return;
-           const UU = this.camera,
-             XU = UU.movement.input,
-             zU = XU.getEntry("touch", "rotate"),
-             cU = XU.getEntry("touch", "translate"),
- ... (12 more removed lines; see GitHub link above)
+       }
+       sortLightsByPriority() {
+         this.requireLightSorting && this.lights.sort(JH.e.CompareLightsPriority)
+       }
+       addCamera(HH) {
+         this._blockEntityCollection || (this.cameras.push(HH), rH.d.SetImmediate((() => {
+           this.onNewCameraAddedObservable.notifyObservers(HH)
+         })), HH.parent || HH._addToSceneRootNodes())
+       }
+       addSkeleton(HH) {
+         this._blockEntityCollection || (this.skeletons.push(HH), rH.d.SetImmediate((() => {
+           this.onNewSkeletonAddedObservable.notifyObservers(HH)
+         })))
+       }
+       addParticleSystem(HH) {
+         this._blockEntityCollection || (this.dU.push(HH), rH.d.SetImmediate((() => {
+ ... (74 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L749-L750` → after: `L8555-L8616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8555-L8616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8555-L8616) · [Before (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L749-L750)

```diff
-         getClassName() {
-           return "FreeCameraTouchInput"
+         if (HH)
+           for (let LH = 0; LH < this.multiMaterials.length; LH++) {
+             const HH = this.multiMaterials[LH];
+             if (BH(HH)) return HH
+           }
+         return null
+       }
+       getMaterialByUniqueID(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         return this.getMaterialByUniqueId(HH, BH)
+       }
+       getMaterialByUniqueId(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         return this._getMaterial(BH, (BH => BH.uniqueId === HH))
+       }
+       getMaterialById(HH) {
+ ... (46 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L752-L753` → after: `L8618-L8624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8618-L8624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8618-L8624) · [Before (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L752-L753)

```diff
-         getSimpleName() {
-           return "touch"
+         return null
+       }
+       getBoneByName(HH) {
+         for (let BH = 0; BH < this.skeletons.length; BH++) {
+           const LH = this.skeletons[BH];
+           for (let BH = 0; BH < LH.bones.length; BH++)
+             if (LH.bones[BH].name === HH) return LH.bones[BH]
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L755-L795` → after: `L8626-L8641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8626-L8641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8626-L8641) · [Before (L755-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L755-L795)

```diff
-       }, (() => {
-         const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         XU = [(0, yU.I)()], zU = [(0, yU.I)()], (0, cU.j)(null, null, XU, {
-           kind: "field",
-           name: "touchAngularSensibility",
-           static: !1,
-           private: !1,
-           access: {
-             has: UU => "touchAngularSensibility" in UU,
-             get: UU => UU.touchAngularSensibility,
-             set: (UU, XU) => {
-               UU.touchAngularSensibility = XU
-             }
-           },
-           metadata: QU
-         }, AU, FU), (0, cU.j)(null, null, zU, {
- ... (25 more removed lines; see GitHub link above)
+         return null
+       }
+       getLightByName(HH) {
+         for (let BH = 0; BH < this.lights.length; BH++)
+           if (this.lights[BH].name === HH) return this.lights[BH];
+         return null
+       }
+       getLightById(HH) {
+         for (let BH = 0; BH < this.lights.length; BH++)
+           if (this.lights[BH].id === HH) return this.lights[BH];
+         return null
+       }
+       getLightByUniqueId(HH) {
+         for (let BH = 0; BH < this.lights.length; BH++)
+           if (this.lights[BH].uniqueId === HH) return this.lights[BH];
+         return null
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L797-L798` → after: `L8643-L8646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8643-L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8643-L8646) · [Before (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L797-L798)

```diff
-       addKeyboard() {
-         return this.add(new EU), this
+       getParticleSystemById(HH) {
+         for (let BH = 0; BH < this.dU.length; BH++)
+           if (this.dU[BH].id === HH) return this.dU[BH];
+         return null
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L800-L802` → after: `L8648-L8651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8648-L8651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8648-L8651) · [Before (L800-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L800-L802)

```diff
-       addMouse() {
-         let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         return this._mouseInput || (this._mouseInput = new IU(UU), this.add(this._mouseInput)), this
+       getGeometryById(HH) {
+         for (let BH = 0; BH < this.geometries.length; BH++)
+           if (this.geometries[BH].id === HH) return this.geometries[BH];
+         return null
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L804-L805` → after: `L8653-L8660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8653-L8660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8653-L8660) · [Before (L804-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L804-L805)

```diff
-       removeMouse() {
-         return this._mouseInput && this.remove(this._mouseInput), this
+       _getGeometryByUniqueId(HH) {
+         if (this._geometriesByUniqueId) {
+           const BH = this._geometriesByUniqueId[HH];
+           if (void 0 !== BH) return this.geometries[BH]
+         } else
+           for (let BH = 0; BH < this.geometries.length; BH++)
+             if (this.geometries[BH].uniqueId === HH) return this.geometries[BH];
+         return null
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L807-L808` → after: `L8662-L8665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8662-L8665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8662-L8665) · [Before (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L807-L808)

```diff
-       addMouseWheel() {
-         return this._mouseWheelInput || (this._mouseWheelInput = new gU, this.add(this._mouseWheelInput)), this
+       getFrameGraphByName(HH) {
+         for (let BH = 0; BH < this.frameGraphs.length; BH++)
+           if (this.frameGraphs[BH].name === HH) return this.frameGraphs[BH];
+         return null
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L810-L811` → after: `L8667-L8670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8667-L8670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8667-L8670) · [Before (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L810-L811)

```diff
-       removeMouseWheel() {
-         return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
+       pushGeometry(HH, BH) {
+         return !(!BH && this._getGeometryByUniqueId(HH.uniqueId)) && (this.addGeometry(HH), rH.d.SetImmediate((() => {
+           this.onNewGeometryAddedObservable.notifyObservers(HH)
+         })), !0)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L813-L814` → after: `L8672-L8681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8672-L8681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8672-L8681) · [Before (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L813-L814)

```diff
-       addTouch() {
-         return this.add(new kU), this
+       removeGeometry(HH) {
+         let BH;
+         if (this._geometriesByUniqueId) {
+           if (BH = this._geometriesByUniqueId[HH.uniqueId], void 0 === BH) return !1
+         } else if (BH = this.geometries.indexOf(HH), BH < 0) return !1;
+         if (BH !== this.geometries.length - 1) {
+           const HH = this.geometries[this.geometries.length - 1];
+           HH && (this.geometries[BH] = HH, this._geometriesByUniqueId && (this._geometriesByUniqueId[HH.uniqueId] = BH))
+         }
+         return this._geometriesByUniqueId && (this._geometriesByUniqueId[HH.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(HH), !0
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L816-L817` → after: `L8683-L8684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8683-L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8683-L8684) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L816-L817)

```diff
-       clear() {
-         super.clear(), this._mouseInput = null
+       getGeometries() {
+         return this.geometries
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L819-L892` → after: `L8686-L8807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8686-L8807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8686-L8807) · [Before (L819-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L819-L892)

```diff
-     }(GU = PU.prototype).addDeviceOrientation ?? (GU.addDeviceOrientation = (0, RU.k)("FreeCameraInputsManager", "addDeviceOrientation")), (BU = PU.prototype).addVirtualJoystick ?? (BU.addVirtualJoystick = (0, RU.k)("FreeCameraInputsManager", "addVirtualJoystick")), (ZU = PU.prot … [truncated]
-     var WU = zU(41003),
-       dU = zU(37863);
-     let LU = (() => {
-         var UU;
-         let XU, zU, FU, oU, EU = AU.i,
-           YU = [],
-           NU = [],
-           IU = [],
-           pU = [],
-           aU = [],
-           tU = [],
-           gU = [],
-           kU = [];
-         return UU = class extends EU {
-           get angularSensibility() {
- ... (58 more removed lines; see GitHub link above)
+       getMeshById(HH) {
+         for (let BH = 0; BH < this.meshes.length; BH++)
+           if (this.meshes[BH].id === HH) return this.meshes[BH];
+         return null
+       }
+       getMeshesById(HH) {
+         return this.meshes.filter((function(BH) {
+           return BH.id === HH
+         }))
+       }
+       getTransformNodeById(HH) {
+         for (let BH = 0; BH < this.transformNodes.length; BH++)
+           if (this.transformNodes[BH].id === HH) return this.transformNodes[BH];
+         return null
+       }
+       getTransformNodeByUniqueId(HH) {
+ ... (106 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L894-L896` → after: `L8809-L8817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8809-L8817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8809-L8817) · [Before (L894-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L894-L896)

```diff
-           set keysRotateLeft(UU) {
-             const XU = this.inputs.attached.keyboard;
-             XU && (XU.keysRotateLeft = UU)
+         }
+         return null
+       }
+       getMorphTargetByName(HH) {
+         for (let BH = 0; BH < this.morphTargetManagers.length; ++BH) {
+           const LH = this.morphTargetManagers[BH];
+           for (let BH = 0; BH < LH.numTargets; ++BH) {
+             const AH = LH.getTarget(BH);
+             if (AH.name === HH) return AH
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L898-L900` → after: `L8819-L8850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8819-L8850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8819-L8850) · [Before (L898-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L898-L900)

```diff
-           get keysRotateRight() {
-             const UU = this.inputs.attached.keyboard;
-             return UU ? UU.keysRotateRight : []
+         }
+         return null
+       }
+       getPostProcessByName(HH) {
+         for (let BH = 0; BH < this.postProcesses.length; ++BH) {
+           const LH = this.postProcesses[BH];
+           if (LH.name === HH) return LH
+         }
+         return null
+       }
+       isActiveMesh(HH) {
+         return -1 !== this._activeMeshes.indexOf(HH)
+       }
+       get uid() {
+         return this._uid || (this._uid = AH.i.RandomId()), this._uid
+       }
+ ... (16 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L902-L904` → after: `L8852-L8869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8852-L8869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8852-L8869) · [Before (L902-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L902-L904)

```diff
-           set keysRotateRight(UU) {
-             const XU = this.inputs.attached.keyboard;
-             XU && (XU.keysRotateRight = UU)
+           const LH = HH.eu();
+           null !== LH && void 0 !== LH && (LH.hasRenderTargetTextures && null != LH.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(LH) && (this._processedMaterials.push(LH), this._materialsRenderTargets.concatWithNoDuplicate(LH.getRenderTargetTextures())), thi … [truncated]
+         }
+       }
+       freeProcessedMaterials() {
+         this._processedMaterials.dispose()
+       }
+       get blockfreeActiveMeshesAndRenderingGroups() {
+         return this._preventFreeActiveMeshesAndRenderingGroups
+       }
+       set blockfreeActiveMeshesAndRenderingGroups(HH) {
+         this._preventFreeActiveMeshesAndRenderingGroups !== HH && (HH && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = HH)
+       }
+       freeActiveMeshes() {
+         if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
+           for (let HH = 0; HH < this.activeCameras.length; HH++) {
+ ... (2 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L906-L908` → after: `L8871-L8876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8871-L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8871-L8876) · [Before (L906-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L906-L908)

```diff
-           get keysRotateUp() {
-             const UU = this.inputs.attached.keyboard;
-             return UU ? UU.keysRotateUp : []
+       }
+       freeRenderingGroups() {
+         if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
+           for (let HH = 0; HH < this.textures.length; HH++) {
+             const BH = this.textures[HH];
+             BH && BH.renderList && BH.freeRenderingGroups()
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L910-L912` → after: `L8878-L8944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8878-L8944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8878-L8944) · [Before (L910-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L910-L912)

```diff
-           set keysRotateUp(UU) {
-             const XU = this.inputs.attached.keyboard;
-             XU && (XU.keysRotateUp = UU)
+       }
+       _isInIntermediateRendering() {
+         return this._intermediateRendering
+       }
+       _isInRenderingMeshEvaluation() {
+         return this._renderingMeshEvaluationDepth > 0
+       }
+       freezeActiveMeshes() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           BH = arguments.length > 1 ? arguments[1] : void 0,
+           LH = arguments.length > 2 ? arguments[2] : void 0,
+           AH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
+           SH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         if (this.frameGraph) {
+           this._renderWithFrameGraph(!0, !1, !0);
+           const hH = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
+ ... (51 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L914-L916` → after: `L8946-L8948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8946-L8948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8946-L8948) · [Before (L914-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L914-L916)

```diff
-           get keysRotateDown() {
-             const UU = this.inputs.attached.keyboard;
-             return UU ? UU.keysRotateDown : []
+           if (this._activeParticleSystems) {
+             const HH = this._activeParticleSystems.length;
+             for (let BH = 0; BH < HH; BH++) this._activeParticleSystems.data[BH].animate()
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L918-L920` → after: `L8950-L8974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8950-L8974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8950-L8974) · [Before (L918-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L918-L920)

```diff
-           set keysRotateDown(UU) {
-             const XU = this.inputs.attached.keyboard;
-             XU && (XU.keysRotateDown = UU)
+           return void this._renderingManager.resetSprites()
+         }
+         if (!this.activeCamera) return;
+         this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(),  … [truncated]
+         for (let rH = 0, SH = this._beforeEvaluateActiveMeshStage; rH < SH.length; rH++) {
+           SH[rH].action()
+         }
+         const HH = this.getActiveMeshCandidates(),
+           BH = HH.length,
+           LH = wH.e.Enabled,
+           AH = this.customLODSelector;
+         for (let rH = 0; rH < BH; rH++) {
+           const BH = HH.data[rH],
+             SH = !AH && !BH.xR && !BH._internalMeshDataInfo?._LODLevels.length;
+           let hH, tH;
+           if ((SH || (hH = BH._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), hH ? hH[1] = -1 : (hH = [BH, -1], BH._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, hH))), !BH.isBlocked) && (LH && this._totalVertices.addCount(BH.getTotalVertices() … [truncated]
+ ... (9 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L922-L927` → after: `L8976-L8983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8976-L8983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8976-L8983) · [Before (L922-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L922-L927)

```diff
-           constructor(UU, XU, zU) {
-             var yU;
-             super(UU, XU, zU, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), yU = this, this.ellipsoid = (0, cU.n)(this, YU, new QU.q(.5, 1, .5)), this.ellipsoidOffset = ((0, cU.n)(this, NU), (0, cU.n)(this, IU, new QU.q(0, 0, 0))), this.checkCollisions = (( … [truncated]
-               let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-               yU._newPosition.YL(XU), yU._newPosition.subtractToRef(yU._oldPosition, yU._diffPosition), yU._diffPosition.length() > WU.c.CollisionsEpsilon && (yU.position.addToRef(yU._diffPosition, yU._deferredPositionUpdate), yU._deferOnly ? yU._deferredUpdated = !0 : yU.positio … [truncated]
-             }, this.inputs = new PU(this), this.inputs.addKeyboard().addMouse()
+         }
+         if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
+           this.onBeforeParticlesRenderingObservable.notifyObservers(this);
+           for (let HH = 0; HH < this.dU.length; HH++) {
+             const BH = this.dU[HH];
+             if (!BH.isStarted() || !BH.emitter) continue;
+             const LH = BH.emitter;
+             LH.position && !LH.isEnabled() || (this._activeParticleSystems.push(BH), BH.animate(), this._renderingManager.dispatchParticles(BH))
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L929-L930` → after: `L8985-L9000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8985-L9000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L8985-L9000) · [Before (L929-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L929-L930)

```diff
-           attachControl(UU, XU) {
-             XU = DU.j.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(XU)
+           this.onAfterParticlesRenderingObservable.notifyObservers(this)
+         }
+       }
+       _prepareSkeleton(HH) {
+         this._skeletonsEnabled && HH.skeleton && (this._activeSkeletons.pushNoDuplicate(HH.skeleton) && (HH.skeleton.prepare(), this._activeBones.addCount(HH.skeleton.bones.length, !1)), HH.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(HH) && this.frameG … [truncated]
+       }
+       _activeMesh(HH, BH) {
+         this._prepareSkeleton(BH);
+         let LH = HH.ESH || HH.xR || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || BH.fu;
+         if (BH && BH.jU && BH.jU.length > 0) {
+           const AH = this.getActiveSubMeshCandidates(BH),
+             rH = AH.length;
+           LH = LH || 1 === rH;
+           for (let SH = 0; SH < rH; SH++) {
+             const rH = AH.data[SH];
+             this._evaluateSubMesh(rH, BH, HH, LH)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L932-L933` → after: `L9002-L9056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R9002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L9002-L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L9002-L9056) · [Before (L932-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L932-L933)

```diff
-           detachControl() {
-             this.inputs.detachElement(), this.cameraDirection = new QU.q(0, 0, 0), this.cameraRotation = new QU.m(0, 0)
+         }
+       }
+       updateTransformMatrix(HH) {
+         const BH = this.activeCamera;
+         if (BH)
+           if (BH._renderingMultiview) {
+             const LH = BH._rigCameras[0],
+               AH = BH._rigCameras[1];
+             this.setTransformMatrix(LH.getViewMatrix(), LH.getProjectionMatrix(HH), AH.getViewMatrix(), AH.getProjectionMatrix(HH))
+           } else this.setTransformMatrix(BH.getViewMatrix(), BH.getProjectionMatrix(HH))
+       }
+       _bindFrameBuffer(HH) {
+         let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         this._useCurrentFrameBuffer || (HH && HH._multiviewTexture ? HH._multiviewTexture._bindFrameBuffer() : HH && HH.outputRenderTarget ? HH.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer … [truncated]
+       }
+       _clearFrameBuffer(HH) {
+ ... (39 more added lines; see GitHub link above)
```
