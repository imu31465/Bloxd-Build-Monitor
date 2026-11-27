# Changed — Bundle Modifications Report (Part 014 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `14 / 82` (**290** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 013](part-013.md) · [Part 015 →](part-015.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/240.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/240.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1)

#### 3. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L9-L23` → after: `L151-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L151-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/240.js#L151-L174) · [Before (L9-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/240.js#L9-L23)

```diff
-     var ye = He(59),
-       be = He(1340),
-       Me = He(1127),
-       Ke = He(1320),
-       Ue = He(3865),
-       Fe = He(5407),
-       Je = He(1228);
- 
-     function oe(ee) {
-       let {
-         loading: ie,
-         schematics: He,
-         onSchematicPicked: ye,
-         selectedSchematicIdList: be = [],
-         disableAutoExport: Fe
+     var mW = OW(182),
+       EW = OW(100),
+       NW = OW(136),
+       PW = OW(274),
+       LW = OW(5067),
+       cW = OW(673),
+       wW = OW(696),
+       tW = OW(5072),
+       ZW = OW(5089),
+       xW = OW(37717),
+       lW = OW(37724);
+     const AW = 1048576,
+       bW = 1024 * AW,
+       jW = 400 * AW,
+       UW = 147456,
+       kW = .5,
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L26-L58` → after: `L218-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L218-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/240.js#L218-L294) · [Before (L26-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/240.js#L26-L58)

```diff
-         t: oe
-       } = (0, Me.v)();
-       return (0, Je.jsxs)("div", {
-         className: "SchematicList",
-         children: [ie && (0, Je.jsx)(Ke.b, {}), !ie && 0 === He.length && (0, Je.jsx)("div", {
-           className: "NoSchematicsText",
-           children: oe("worldBuilder:noSavedSchematic")
-         }), !ie && He.map((ee => (0, Je.jsx)(Ue.c, {
-           source: {
-             type: "schematic",
-             schematic: ee
-           },
-           gameWidth: "25%",
-           useLongRatio: !0,
-           onClick: () => {
-             ye(ee)
- ... (17 more removed lines; see GitHub link above)
+         footprintBytes: OW,
+         basis: mW
+       } = SW(WW);
+       return "android" === mW || OW > 2 * bW
+     }
+ 
+     function TW(WW) {
+       const iW = Math.min(WW, YW(xW.e));
+       return jW + Math.max(0, iW - jW) / 2
+     }
+ 
+     function JW(WW, iW, OW) {
+       var EW, NW, PW, LW;
+       let cW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         {
+           footprintBytes: wW,
+ ... (61 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L60-L90` → after: `L296-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L296-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/240.js#L296-L539) · [Before (L60-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/240.js#L60-L90)

```diff
-       const {
-         t: Ke
-       } = (0, Me.v)(), [Ue, Re] = (0, ye.useState)(null);
-       return (0, Je.jsxs)("div", {
-         className: "SchematicListWindow",
-         children: [null === Ue && (0, Je.jsxs)(Je.Fragment, {
-           children: [(0, Je.jsx)("h1", {
-             className: "SchematicPopupTitle",
-             children: Ke("worldBuilder:schematicList")
-           }), (0, Je.jsx)("h2", {
-             className: "SchematicPopupSubtitle",
-             children: Ke("worldBuilder:clickSchematicForOptions")
-           }), (0, Je.jsx)("div", {
-             className: "SchematicPopupSchematicListContainer",
-             children: (0, Je.jsx)(oe, {
-               loading: !1,
- ... (15 more removed lines; see GitHub link above)
+       return {
+         halvedAt: "number" === typeof OW && Number.isFinite(OW) ? OW : null,
+         reloadSpent: !0 === mW
+       }
+     }
+ 
+     function DW() {
+       return null !== gW().halvedAt
+     }
+ 
+     function VW(WW) {
+       const iW = (0, wW.y)(),
+         OW = JSON.stringify(WW);
+       try {
+         null === iW || void 0 === iW || iW.setItem(eW, OW)
+       } catch {
+ ... (228 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L92-L235` → after: `L541-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L541-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/240.js#L541-L556) · [Before (L92-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/240.js#L92-L235)

```diff
-         })]
-       })
-     }
- 
-     function ke(ee) {
-       let {
-         ownedSchematics: ie,
-         currentWorldSchematicId: He,
-         onClose: ye
-       } = ee;
-       be.NotificationProvider.showCustomPopup({
-         body: ee => (0, Je.jsx)(Re, {
-           ownedSchematics: ie,
-           currentWorldSchematicId: He,
-           onClose: ee
-         }),
- ... (128 more removed lines; see GitHub link above)
+           of this.workers.values()) PW += mW.reservesRefused, LW += mW.allocationsRefused;
+         return {
+           wasmMainMiB: Number((0, mW.j)(this.memory.memoryBytes())),
+           wasmWorkersMiB: Number((0, mW.j)(this.workersMemoryBytes())),
+           peakStoredChunks: this.peakStoredChunks,
+           refusedReserves: PW,
+           refusedAllocations: LW,
+           sheds: this.sheds,
+           ...null === (NW = this.footprint) || void 0 === NW ? void 0 : NW.snapshot()
+         }
+       }
+       workersMemoryBytes() {
+         let WW = 0;
+         for (const {
+             stats: iW,
+             gone: OW
```

#### 7. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L237-L541` → after: `L558-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L558-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/240.js#L558-L615) · [Before (L237-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/240.js#L237-L541)

```diff
-         })]
-       })
-     }
-     var Be = He(5407),
-       Ee = He(1674),
-       ge = He(4729),
-       Oe = He(1169);
- 
-     function de(ee) {
-       var ie;
-       let {
-         ownedSchematics: He,
-         onClose: ye,
-         onChosenEdit: be,
-         onChosenNew: Me,
-         onChosenDownload: Ue
- ... (289 more removed lines; see GitHub link above)
+           of this.workers.values()) WW += OW ? 0 : iW.memoryBytes;
+         return WW
+       }
+       checkFootprint() {
+         null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
+       }
+       checkGcPressure(WW) {
+         const iW = this.gcPressure;
+         if (null === iW) return;
+         if (null !== iW.nextAt || "undefined" !== typeof document && document.hidden || (iW.nextAt = WW + 6e4), null === iW.nextAt || WW < iW.nextAt) return;
+         if (this.stopped || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil) return;
+         const OW = iW.highEpisode();
+         null !== OW && OW !== iW.shedEpisode && (iW.shedEpisode = OW, iW.nextAt = WW + 3e4, this.shedFor("gcPressure"))
+       }
+       step() {
+         this.pendingSince = null, this.call((() => this.memory.reserveAhead(wW)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
+ ... (42 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/241.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/241.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5)

#### 1. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/241.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/241.js#L2)

```diff
- export const ids = [59, 241];
+ export const ids = [241];
```

#### 2. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L4-L101` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/241.js#L4) · [Before (L4-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/241.js#L4-L101)

```diff
-   39440: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => be,
-       f: () => Me
-     });
-     const ye = new WeakMap;
- 
-     function be(ee, ie) {
-       return ye.set(ee, ie), ee
-     }
- 
-     function Me(ee) {
-       var ie;
-       return null !== (ie = ye.get(ee)) && void 0 !== ie ? ie : null
-     }
-   },
- ... (82 more removed lines; see GitHub link above)
+   37314: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L103-L10538` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/241.js#L6-L10) · [Before (L103-L10538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/241.js#L103-L10538)

```diff
-       default: () => cU
-     });
-     const ye = "island";
-     var be = He(39320);
- 
-     function Me(ee, ie, He) {
-       const Me = "local" === ie,
-         Ue = ee.background,
-         Fe = ie => Ue ? (0, be.b)(ie[0] - ee.mapOrigin[0], ie[2] - ee.mapOrigin[2], Ue.bounds) : [50, 50],
-         Je = (ee.insideDungeon ? [] : ee.landmarks).map((ee => {
-           var ie, ye;
-           return {
-             id: ee.id,
-             name: He(ee.visited && ee.nameKey ? null !== (ie = ee.mapLabelKey) && void 0 !== ie ? ie : ee.nameKey : "skyblockGame:mapUnknown"),
-             icon: ee.visited && null !== (ye = ee.icon) && void 0 !== ye ? ye : "unknown",
-             visited: ee.visited,
- ... (10420 more removed lines; see GitHub link above)
+       ITEM_FILES_WITHOUT_SPRITE: () => LW,
+       ITEM_SPRITES: () => NW,
+       ITEM_SPRITES_WITHOUT_FILE: () => PW,
+       ITEM_SPRITE_RUNS: () => EW,
+       MAX_SPRITE_ITEM_ID: () => mW
```

#### 4. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L10540-L10617` → after: `L12-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/241.js#L12-L16) · [Before (L10540-L10617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/241.js#L10540-L10617)

```diff
-     const ye = "skyblockSkills",
-       be = "skills_test_gym"
-   },
-   39382: (ee, ie, He) => {
-     var ye = {
-       "./combat_1.png": 39384,
-       "./dungeon_crumbling_crypt.png": 39386,
-       "./dungeon_frozen_hollow.png": 39388,
-       "./dungeon_wildwood_grove.png": 39393,
-       "./dungeons.png": 39397,
-       "./farming_1.png": 39406,
-       "./fishing_1.png": 39412,
-       "./hub.png": 39418,
-       "./island.png": 39420,
-       "./mining_1.png": 39425,
-       "./mining_1_bridge.png": 39427,
- ... (62 more removed lines; see GitHub link above)
+     const mW = 10113,
+       EW = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
+       NW = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
+       PW = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
+       LW = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/242.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/242.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee)

#### 1. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/242.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/242.js#L4-L6)

```diff
-   37153: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       default: () => We
+   42468: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW,
+       f: () => NW
```

#### 2. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L8-L29` → after: `L9-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L9-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/242.js#L9-L298) · [Before (L8-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/242.js#L8-L29)

```diff
-     var ye = He(1053),
-       be = He.n(ye),
-       Me = He(1515),
-       Ke = He(1051),
-       Ue = He(780),
-       Fe = He(1127),
-       Je = He(1438),
-       oe = He(1502),
-       Re = He(3958),
-       ke = He(1323),
-       qe = He(3865),
-       fe = He(2735),
-       Te = He(1228);
-     const pe = 2;
- 
-     function Xe(ee) {
- ... (6 more removed lines; see GitHub link above)
+     var mW = OW(2300),
+       EW = OW(1052);
+ 
+     function NW(WW, iW) {
+       return null !== WW.gameSource && (0, mW.m)(iW, WW.gameSource)
+     }
+ 
+     function PW(WW, iW) {
+       if (null === WW.gameSource || "" === WW.gameSource || null === iW) return !0;
+       const OW = (0, EW.i)(iW) ? (0, EW.n)(iW) : null;
+       return null !== OW && NW(WW, OW)
+     }
+   },
+   42452: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => LW
+ ... (274 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L35-L37` → after: `L304-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L304-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/242.js#L304-L306) · [Before (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/242.js#L35-L37)

```diff
-         game: ie,
-         disabled: He,
-         showPlaceholder: ye
+         kind: iW,
+         index: OW,
+         word: mW
```

#### 4. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L39-L49` → after: `L308-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L308-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/242.js#L308-L326) · [Before (L39-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/242.js#L39-L49)

```diff
-       return null !== ie ? (0, Te.jsx)(qe.c, {
-         source: Xe(ie),
-         gameWidth: "100%",
-         useLongRatio: !0,
-         disabled: He,
-         entrySource: "customGamePlace"
-       }) : ye ? (0, Te.jsx)(qe.b, {
-         gameWidth: "100%",
-         useLongRatio: !0
-       }) : null
-     }
+       return `${iW}:${OW}:${mW}`
+     }
+ 
+     function kW(WW, iW) {
+       if (null === WW) throw new NW.c("fetch", `no URL for image ${UW(iW)}`, {
+         cause: null
+       });
+       return WW
+     }
+ 
+     function sW(WW, iW, OW) {
+       var mW, EW, NW;
+       const PW = new Uint8Array(16),
+         LW = new DataView(PW.buffer);
+       return LW.setUint8(0, WW.kind), LW.setUint8(1, WW.index), LW.setUint8(2, iW), LW.setUint32(4, WW.word, !0), LW.setUint32(8, null !== (mW = null === OW || void 0 === OW ? void 0 : OW.id) && void 0 !== mW ? mW : 0, !0), LW.setUint16(12, Math.min(null !== (EW = null === OW ||  … [truncated]
+     }
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L53-L132` → after: `L330-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L330-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/242.js#L330-L424) · [Before (L53-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/242.js#L53-L132)

```diff
-       let {
-         category: He,
-         title: ye,
-         tintColour: be,
-         layout: Me,
-         games: Ke,
-         landscape: Ue = !1
-       } = ee;
-       const {
-         followsLeader: Fe
-       } = (0, fe.c)(), Je = null !== (ie = null === Ke || void 0 === Ke ? void 0 : Ke.slice(0, Me.gameCount)) && void 0 !== ie ? ie : [], Re = {
-         "--custom-game-place-tint": be
-       };
-       return (0, Te.jsxs)("div", {
-         className: "CustomGamePlacePanel AnimFadeIn",
-         style: Re,
- ... (64 more removed lines; see GitHub link above)
+       const OW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
+       if (WW.byteLength < 20 || OW.getUint32(0, !0) !== MW || OW.getUint32(16, !0) !== KW) return [];
+       let mW, EW = 20 + OW.getUint32(12, !0);
+       try {
+         mW = JSON.parse((new TextDecoder).decode(WW.subarray(20, EW)))
+       } catch {
+         return []
+       }
+       for (; EW + 8 <= WW.byteLength && OW.getUint32(EW + 4, !0) !== SW;) EW += 8 + OW.getUint32(EW, !0);
+       const NW = null !== (iW = mW.images) && void 0 !== iW ? iW : [];
+       if (0 === NW.length || EW + 8 > WW.byteLength) return NW.map((() => null));
+       const PW = WW.subarray(EW + 8, Math.min(WW.byteLength, EW + 8 + OW.getUint32(EW, !0)));
+       return NW.map((WW => {
+         var iW, OW, EW;
+         const NW = void 0 === WW.bufferView || null === (iW = mW.bufferViews) || void 0 === iW ? void 0 : iW[WW.bufferView];
+         if (!NW || 0 !== (null !== (OW = NW.buffer) && void 0 !== OW ? OW : 0) || void 0 === NW.byteLength) return null;
+ ... (79 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L134-L155` → after: `L426-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L426-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/242.js#L426-L609) · [Before (L134-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/242.js#L134-L155)

```diff
-         section2: {
-           gameCount: 6,
-           columnCount: 6
-         },
-         section3: {
-           gameCount: 8,
-           columnCount: 4
-         },
-         section4: {
-           gameCount: 6,
-           columnCount: 3
-         },
-         section5: {
-           gameCount: 3,
-           columnCount: 1
-         },
- ... (6 more removed lines; see GitHub link above)
+         lifeformAtlasUrl: OW => cW(iW(), (WW => WW.LIFEFORM_ATLAS_PATHS[OW]), (() => WW.lifeformAtlasUrl(OW))),
+         groupAtlasUrl: OW => cW(iW(), (WW => WW.GROUP_ATLAS_PATHS[OW]), (() => WW.groupAtlasUrl(OW))),
+         particleItemUrl: mW => wW(iW(), (async () => {
+           const WW = await OW.e(45).then((() => OW(54865))).catch((() => null));
+           return (null === WW || void 0 === WW ? void 0 : WW.particleItemSprite(mW)) || null
+         }), (() => WW.particleItemUrl(mW))),
+         blockImageUrl: OW => wW(iW(), (async () => {
+           var WW, iW;
+           return null !== (WW = null === (iW = await LW()) || void 0 === iW ? void 0 : iW.blockImageName(OW)) && void 0 !== WW ? WW : null
+         }), (() => WW.blockImageUrl(OW)))
+       }
+     }
+ 
+     function LW() {
+       return (0, EW.l)().catch((() => null))
+     }
+ ... (168 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L159-L182` → after: `L613-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L613-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/242.js#L613-L754) · [Before (L159-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/242.js#L159-L182)

```diff
-       const {
-         t: ie
-       } = (0, Fe.v)(), He = (0, Me.B)(), ye = (0, de.g)(), ke = (0, Re.b)({
-         refresh: !0
-       }), qe = He.customGamePlace;
-       if (!(0, Ke.g)(qe)) return (0, Te.jsx)(oe.NavigatePreserveSearch, {
-         to: "/"
-       });
-       const fe = Ue.e[qe],
-         pe = Ke.b[qe],
-         Xe = null !== (ee = null === ke || void 0 === ke ? void 0 : ke[qe]) && void 0 !== ee ? ee : null,
-         ze = [];
-       for (let be = 0; be < pe.length; be++) {
-         var We;
-         const ee = ge[be];
-         if (!ee) continue;
- ... (8 more removed lines; see GitHub link above)
+       const iW = (0, PW.F)(),
+         OW = function(WW, iW) {
+           return {
+             sampleCount: WW.antiAliasing ? 4 : 1,
+             n: (0, PW.A)(WW.pixelScale, iW),
+             pixelated: (0, PW.x)(WW.pixelSmoothing)
+           }
+         }(EW.d.get("clientEscMenuOptions"), iW);
+       return OW.sampleCount > 1 && (0, cW.b)() && (OW.sampleCount = 1), OW.n = null !== (WW = (0, cW.m)()) && void 0 !== WW ? WW : OW.n, mW.h.includes((0, tW.getSoftwareRenderer)()) && (OW.sampleCount = 1, OW.n = Math.max(OW.n, (0, PW.A)(ZW.w.pixelScale, iW))), OW
+     }
+     let lW = null,
+       AW = null;
+     const bW = new Set;
+     let jW = null;
+ 
+     function UW() {
+ ... (126 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L185-L214` → after: `L757-L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L757-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/242.js#L757-L857) · [Before (L185-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/242.js#L185-L214)

```diff
-       return (0, Te.jsxs)("div", {
-         className: "CustomGamePlaceContainer AnimFadeIn",
-         children: [(0, Te.jsx)("div", {
-           className: "BackgroundImage",
-           style: {
-             backgroundImage: `url(/textures/games/${qe}/${fe.largePicture}.png)`
-           }
-         }), (0, Te.jsx)("h1", {
-           className: "VisuallyHidden",
-           children: ie(fe.title)
-         }), (0, Te.jsx)("div", {
-           className: "CustomGamePlaceHeaderContainer",
-           children: (0, Te.jsx)(Je.b, {
-             onClick: () => (0, oe.navigatePreserveSearch)("/"),
-             children: ie("homePage:backToGames")
-           })
- ... (14 more removed lines; see GitHub link above)
+     }
+     async function tW(WW, iW, OW) {
+       try {
+         const iW = new Blob([WW.slice()], {
+           type: "image/png"
+         });
+         return await createImageBitmap(iW, {
+           premultiplyAlpha: "none",
+           colorSpaceConversion: "none",
+           imageOrientation: OW
+         })
+       } catch (mW) {
+         throw new LW("decode", null !== iW && void 0 !== iW ? iW : `${WW.byteLength} bytes`, {
+           cause: mW
+         })
+       }
+ ... (85 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/243.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/243.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9)

#### 1. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L4)

```diff
-   37163: (ee, ie, He) => {
+   37444: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L6` → after: `L6-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L6-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L6-L42) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L6)

```diff
-       c: () => oe,
+       b: () => LW,
+       e: () => PW
+     });
+     var mW = OW(4459);
+     let EW = null,
+       NW = null;
+ 
+     function PW() {
+       return NW ??= OW.e(241).then((() => OW(37314))).then((WW => {
+         let {
+           ITEM_SPRITES: iW,
+           ITEM_SPRITES_WITHOUT_FILE: OW,
+           ITEM_FILES_WITHOUT_SPRITE: NW
+         } = WW;
+         EW = function(WW, iW, OW) {
+           const EW = new Set,
+ ... (21 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L8-L10` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L44) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L8-L10)

```diff
-       i: () => Je,
-       m: () => Fe,
-       p: () => Be
+       i: () => wW
```

#### 4. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L12-L34` → after: `L46-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L46-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L46-L85) · [Before (L12-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L12-L34)

```diff
-     var ye = He(618),
-       be = He(1790),
-       Me = He(5279);
-     class Ke {
-       constructor(ee, ie) {
-         this.width = ee, this.bk = ie, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(ee * ie)
-       }
-       push(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const He = this.data,
-           ye = this.next * this.width;
-         for (let be = 0; be < this.width; be++) He[ye + be] = ee[ie + be];
-         this.next = (this.next + 1) % this.bk, this.size = Math.min(this.size + 1, this.bk)
-       }
-       rows() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
- ... (7 more removed lines; see GitHub link above)
+     var mW = OW(2047);
+     let EW = null,
+       NW = 0;
+     const PW = new Set;
+ 
+     function LW() {
+       return EW
+     }
+ 
+     function cW() {
+       return NW
+     }
+ 
+     function wW(WW) {
+       EW = WW, NW++, (0, mW.b)();
+       for (const iW of PW) iW()
+ ... (24 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L36-L39` → after: `L87-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L87-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L87-L89) · [Before (L36-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L36-L39)

```diff
-       }
-       lines() {
-         return this.rows().map((ee => ee.join(",")))
-       }
+       }), (WW => {
+         throw NW = null, WW
+       })), NW
```

#### 6. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L43-L74` → after: `L118-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L118-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L118-L126) · [Before (L43-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L43-L74)

```diff
-         idle: 0,
-         KR: 1,
-         hV: 2,
-         rV: 3,
-         dp: 4
-       },
-       Je = {
-         none: 0,
-         skipped: 1,
-         paced: 2,
-         drawn: 3
-       },
-       oe = {
-         lockGained: 1,
-         lockLost: 2,
-         lockError: 3,
- ... (16 more removed lines; see GitHub link above)
+         icon: PW.e,
+         mainRGB: "transparent",
+         chatTag: [],
+         nameTag: {
+           iconRGB: "#f38ab6",
+           iconShadowRGB: "black"
+         },
+         visible: !0
+       };
```

#### 7. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L77` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L129) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L77)

```diff
-       return "js" === ee ? oe.jsClient : oe.wasmClient
+       return "object" !== typeof WW || null === WW || Array.isArray(WW) ? void 0 : WW
```

#### 8. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L79-L82` → after: `L131-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L131-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L131-L134) · [Before (L79-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L79-L82)

```diff
-     class ze {
-       constructor() {
-         this.steps = new Ke(Ue, Re), this.events = new Ke(qe.length, Re), this.frames = new Ke(fe.length, Re), this.cameraSets = new Ke(Me.f, 256), this.changes = new Ke(pe.length, 256)
-       }
+     const UW = new Set(mW.c);
+ 
+     function kW(WW, iW) {
+       return "string" === typeof WW ? (0, cW.r)(WW, iW) : iW
```

#### 9. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L84-L128` → after: `L136-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L136-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L136-L181) · [Before (L84-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L84-L128)

```diff
-     const Be = new class {
-       constructor() {
-         this.rings = null, this.sample = new Float64Array(qe.length), this.startedClient = null, this.startedAtMs = 0
-       }
-       get client() {
-         return this.startedClient
-       }
-       start(ee, ie) {
-         this.startedClient = ee, this.startedAtMs = performance.now(), null !== this.rings ? this.change(Xe(ee)) : ie && this.allocate()
-       }
-       lockGained() {
-         this.allocate(), this.change(oe.lockGained)
-       }
-       allocate() {
-         null === this.rings && (this.rings = new ze, null !== this.startedClient && this.changeAt(this.startedAtMs, Xe(this.startedClient), 1))
-       }
- ... (29 more removed lines; see GitHub link above)
+ 
+     function sW(WW) {
+       return kW(WW.width, tW)
+     }
+ 
+     function MW(WW, iW) {
+       var OW;
+       const mW = null !== (OW = WW.applyTo) && void 0 !== OW ? OW : "both";
+       return "both" === mW || mW === iW
+     }
+ 
+     function KW(WW) {
+       const iW = sW(WW);
+       return "glow" === WW.style ? iW * ZW : Math.ceil(iW / 2) + 1
+     }
+ 
+ ... (30 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L130-L133` → after: `L183-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L183-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L183-L214) · [Before (L130-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L130-L133)

```diff
-       dumpText() {
-         var ee, ie;
-         const He = this.rings;
-         return [`look records (${this.startedClient}): ${ke.join(",")}`, ...null !== (ee = null === He || void 0 === He ? void 0 : He.steps.lines()) && void 0 !== ee ? ee : [], `mousemove events: ${qe.join(",")}`, ...null !== (ie = null === He || void 0 === He ? void 0 : He.event … [truncated]
+       nW.push(...HW), uW && "" !== SW && OW.isFriend(SW) && nW.push({
+         kind: "rank",
+         rank: bW
+       }), "number" === typeof WW.TP && nW.push({
+         kind: "text",
+         text: ` ${WW.TP}m`,
+         size: cW.c.DEFAULT_FONT_SIZE,
+         colour: "#cef3ff"
+       });
+       const dW = YW ? (0, cW.h)(YW, cW.c.DEFAULT_SUBTITLE_FONT_SIZE, OW) : null,
+         eW = "string" === typeof tW.backgroundColor ? tW.backgroundColor : "#22283b",
+         vW = "string" === typeof tW.subtitleBackgroundColor ? tW.subtitleBackgroundColor : "#1a1e2d",
+         gW = jW(tW.healthbar),
+         DW = jW(tW.border),
+         VW = Array.isArray(WW.effects) ? WW.effects.filter((WW => "string" === typeof WW && UW.has(WW))) : [],
+         pW = "number" === typeof WW.health ? Math.max(0, Math.min(1, WW.health)) : null,
+ ... (16 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L135-L146` → after: `L216-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L216-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L216-L244) · [Before (L135-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L135-L146)

```diff
-       toJson(ee, ie) {
-         var He;
-         const be = ee - 6e4,
-           Me = this.rings,
-           Ke = function(ee, ie) {
-             var He;
-             let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-             const Me = null !== (He = null === ee || void 0 === ee ? void 0 : ee.rows(ye, be)) && void 0 !== He ? He : [];
-             return {
-               columns: ie,
-               fromMs: 0 === Me.length ? null : Me[0][ye],
-               rows: Me
+       const zW = fW.height + CW.height + IW + aW,
+         FW = fW.width + cW.c.HORIZONTAL_PADDING,
+         QW = CW.width + cW.c.HORIZONTAL_PADDING,
+         Wi = Math.max(FW, QW),
+         ii = (rW - Wi) / 2,
+         Oi = Math.max(XW.height, BW);
+       return {
+         width: rW,
+         height: zW,
+         draw: WW => {
+           const iW = [];
+           if (WW.fillStyle = eW, WW.fillRect(ii, Oi, Wi, fW.height), (0, cW.p)(nW, (rW - FW) / 2 + cW.c.HORIZONTAL_PADDING / 2, Oi, fW.height, WW, OW, iW), dW) {
+             const mW = Oi + fW.height;
+             WW.fillStyle = vW, WW.fillRect(ii, mW, Wi, CW.height), (0, cW.p)(dW, (rW - QW) / 2 + cW.c.HORIZONTAL_PADDING / 2, mW, CW.height, WW, OW, iW)
+           }
+           let mW = null;
+ ... (13 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L148-L172` → after: `L246-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L246-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L246-L290) · [Before (L148-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L148-L172)

```diff
-           };
-         return {
-           version: ye.b,
-           client: null !== (He = this.startedClient) && void 0 !== He ? He : "not started",
-           savedAt: (new Date).toISOString(),
-           savedAtMs: ee,
-           keptMs: 6e4,
-           page: window.location.href,
-           userAgent: navigator.userAgent,
-           devicePixelRatio: window.devicePixelRatio,
-           screen: {
-             width: window.screen.width,
-             height: window.screen.height
-           },
-           HX: null !== document.pointerLockElement,
-           visibility: document.visibilityState,
- ... (9 more removed lines; see GitHub link above)
+           }
+           if (DW) {
+             const iW = [];
+             MW(DW, "nametag") && iW.push({
+               x: ii,
+               y: Oi,
+               width: Wi,
+               height: fW.height + (dW ? CW.height : 0)
+             }), mW && MW(DW, "healthbar") && iW.push(mW), iW.length > 0 && function(WW, iW, OW) {
+               const mW = sW(iW),
+                 EW = mW / 2,
+                 NW = WW => WW.width > 0 && WW.height > 0,
+                 PW = OW.map((WW => ({
+                   x: WW.x + EW,
+                   y: WW.y + EW,
+                   width: WW.width - mW,
+ ... (29 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L183-L189` → after: `L295-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L295-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L295-L304) · [Before (L183-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L183-L189)

```diff
-   37161: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       LOOK_DEBUG_HEADER: () => oe,
-       endLookDebugTake: () => Xe,
-       noteLookDroppedCopy: () => ze,
-       saveLookCapture: () => Be,
-       startLookDebug: () => pe
+   37353: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => NW,
+       d: () => kW,
+       h: () => lW,
+       k: () => KW,
+       n: () => MW,
+       p: () => sW,
+       r: () => wW,
+       s: () => ZW
```

#### 14. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L191-L197` → after: `L306-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L306-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L306-L321) · [Before (L191-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L191-L197)

```diff
-     var ye = He(5279),
-       be = He(3037),
-       Me = He(1952);
-     const Ke = new Map(Object.entries(ye.l).map((ee => {
-       let [ie, He] = ee;
-       return [He, ie]
-     })));
+     var mW = OW(625),
+       EW = OW(327);
+     const NW = {
+         DEFAULT_FONT_SIZE: 47,
+         DEFAULT_SUBTITLE_FONT_SIZE: 30,
+         HORIZONTAL_PADDING: 30,
+         VERTICAL_PADDING: 22,
+         TEXT_SHADOW_WIDTH: 2,
+         LINE_SPACING: 8,
+         EFFECT_ICON_SIZE: 70
+       },
+       PW = 41;
+ 
+     function LW(WW) {
+       return `bolder ${WW}px 'Jetbrains Mono'`
+     }
```

#### 15. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L200` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L324) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L200)

```diff
-       return (0, Me.B)(ee).toFixed(1)
+       return "object" === typeof WW && null !== WW
```

#### 16. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L204` → after: `L328-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L328-L329) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L204)

```diff
-       return `camera set by ${Ke.get(ee[ie+1])}: heading ${`${Ue(ee[ie+2])} -> ${Ue(ee[ie+4])}`} deg, pitch ${`${Ue(ee[ie+3])} -> ${Ue(ee[ie+5])}`} deg, at ${ee[ie].toFixed(1)} ms`
+       const OW = "number" === typeof WW ? WW : "string" === typeof WW ? Number(WW.replace("px", "")) : NaN;
+       return Number.isFinite(OW) && OW > 0 ? OW : iW
```

#### 17. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L210` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L333) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L210)

```diff
-       return Number.isFinite(ee) ? String(Math.round(10 * ee) / 10) : String(ee)
+       return cW(WW) ? WW : void 0
```

#### 18. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L214` → after: `L337-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L337-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L337-L342) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L214)

```diff
-       return Number.isFinite(ee) ? ee.toFixed(1) : String(ee)
+       const iW = "number" === typeof WW ? mW.E[WW] : WW;
+       return "string" === typeof iW && Object.hasOwn(mW.p, iW) ? mW.p[iW] : void 0
+     }
+ 
+     function xW(WW, iW) {
+       return "string" === typeof WW ? WW : cW(WW) ? "string" === typeof WW.translationKey ? iW.translate(WW.translationKey, WW.params).map((WW => "string" === typeof WW ? WW : WW.icon)).join("") : "string" === typeof WW.entityName ? iW.shownPlayerName(WW.entityName) : "" : void 0 … [truncated]
```

#### 19. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L216-L218` → after: `L344-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L344-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L344-L400) · [Before (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L216-L218)

```diff
-     class qe {
-       constructor() {
-         this.frames = 0, this.looked = 0, this.idle = 0, this.hV = 0, this.pastLimit = 0, this.lockSkips = 0, this.dp = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
+ 
+     function lW(WW, iW, OW, mW) {
+       if (!Array.isArray(WW)) return [];
+       const PW = [];
+       for (const AW of WW) {
+         var LW, ZW;
+         if (cW(AW) && "chatTag" in AW) {
+           PW.push({
+             kind: "rank",
+             rank: AW
+           });
+           continue
+         }
+         if (cW(AW) && "icon" in AW && !("mainRGB" in AW)) {
+           var lW;
+           PW.push({
+ ... (41 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L220-L221` → after: `L402-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L402-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L402-L441) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L220-L221)

```diff
-       moved() {
-         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.hV > 0 || this.dropped > 0 || this.cameraSets > 0
+       return PW
+     }
+ 
+     function AW(WW) {
+       return void 0 !== WW && "rank" !== WW.kind
+     }
+ 
+     function bW(WW, iW) {
+       const OW = AW(WW),
+         mW = AW(iW);
+       return void 0 === WW && !mW || !OW && void 0 === iW ? 0 : OW !== mW ? .5 * NW.HORIZONTAL_PADDING : 0
+     }
+ 
+     function jW(WW) {
+       return "rank" === WW.kind ? NW.DEFAULT_FONT_SIZE : WW.size
+     }
+ ... (24 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L223-L224` → after: `L443-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L443-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L443-L446) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L223-L224)

```diff
-       hasEvent() {
-         return this.hV > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
+       return {
+         width: PW,
+         height: mW + NW.VERTICAL_PADDING,
+         sizes: EW
```

#### 22. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L227-L285` → after: `L449-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L449-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L449-L454) · [Before (L227-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L227-L285)

```diff
-     class fe {
-       constructor() {
-         var ee = this;
-         this.topicOn = (0, be.q)("look"), this.remote = (0, be.r)(), this.tally = new qe, this.takes = null, this.started = !1, this.record = function(ie) {
-           let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-           if (Je.p.step(ie, He), !ee.topicOn) return;
-           const ye = ie[He],
-             be = ie[He + 1],
-             Me = ie[He + 2],
-             Ke = ie[He + 3],
-             Ue = ie[He + 4],
-             Fe = ie[He + 5],
-             oe = ie[He + 6],
-             qe = ie[He + 7],
-             fe = ie[He + 8],
-             Te = ie[He + 9],
- ... (43 more removed lines; see GitHub link above)
+ 
+     function sW(WW, iW, OW, mW, EW, NW, PW) {
+       iW += bW(void 0, WW[0]);
+       for (let LW = 0; LW < WW.length; LW++) {
+         const cW = MW(WW[LW], iW, OW, mW, EW, NW, PW);
+         iW += 0 === cW ? 0 : cW + bW(WW[LW], WW[LW + 1])
```

#### 23. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L287-L288` → after: `L456-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L456-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L456-L472) · [Before (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L287-L288)

```diff
-       start(ee, ie) {
-         if (Je.p.start(ee, null !== document.pointerLockElement), this.takes = ie, this.topicOn) {
+     }
+ 
+     function MW(WW, iW, OW, mW, EW, cW, wW, tW) {
+       var ZW;
+       if ("icon" === WW.kind) {
+         const mW = cW.iconImage(WW.icon);
+         return mW && wW.push({
+           image: mW,
+           x: iW,
+           y: OW + NW.VERTICAL_PADDING / 2,
+           size: WW.size
+         }), WW.size
+       }
+       if ("rank" === WW.kind) {
+         const LW = null !== tW && void 0 !== tW ? tW : UW(WW, EW, cW);
+         return function(WW, iW, OW, mW, EW, LW, cW) {
+ ... (1 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L290-L292` → after: `L474-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L474-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L474-L508) · [Before (L290-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L290-L292)

```diff
-             screen: ie
-           } = window;
-           (0, be.m)("look", `start: ${ee} client, dpr ${window.devicePixelRatio}, screen ${ie.width}x${ie.height}, pointer lock ${document.pointerLockElement?"lJ":"free"}`)
+             rank: ZW
+           } = WW;
+           LW.fillStyle = ZW.mainRGB, LW.fillRect(iW, OW, mW, EW);
+           const xW = cW.rankIcon(ZW.icon);
+           if (!xW) return;
+           const lW = PW / xW.height,
+             AW = iW + (mW - xW.width * lW) / 2,
+             bW = OW + (EW - PW) / 2,
+             jW = new Path2D(xW.path),
+             UW = NW.TEXT_SHADOW_WIDTH,
+             kW = (null === (wW = ZW.nameTag) || void 0 === wW ? void 0 : wW.iconShadowRGB) || "black";
+           for (const NW of [-1, 1])
+             for (const WW of [-1, 1]) SW(LW, jW, AW + UW * NW, bW + UW * WW, lW, kW);
+           SW(LW, jW, AW, bW, lW, (null === (tW = ZW.nameTag) || void 0 === tW ? void 0 : tW.iconRGB) || "white")
+         }(WW, iW, OW, LW, mW, EW, cW), LW
+       }
+ ... (19 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L294-L297` → after: `L510-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L510-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L510-L590) · [Before (L294-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L294-L297)

```diff
-         this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
-           capture: !0,
-           passive: !0
-         }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychang … [truncated]
+         of WW) iW.imageSmoothingEnabled = !1, iW.drawImage(OW, mW, EW, NW, NW)
+     }
+ 
+     function SW(WW, iW, OW, mW, EW, NW) {
+       WW.save(), WW.translate(OW, mW), WW.scale(EW, EW), WW.fillStyle = NW, WW.fill(iW), WW.restore()
+     }
+   },
+   37432: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => aW,
+       h: () => ii,
+       i: () => BW,
+       k: () => RW,
+       m: () => GW,
+       o: () => IW,
+       p: () => Ei,
+ ... (65 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L299-L301` → after: `L592-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L592-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L592-L613) · [Before (L299-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L299-L301)

```diff
-       outlier(ee) {
-         const ie = this.tally;
-         ie.outliers >= 20 ? ie.suppressed++ : (ie.outliers++, (0, be.m)("look", ee))
+     }
+     const vW = 397,
+       gW = 1,
+       DW = {
+         translate: WW => [WW],
+         keyBindingText: WW => WW,
+         isFriend: () => !1,
+         hiddenNames: {},
+         loadsFontRest: !1
+       };
+     let VW = null,
+       pW = 0,
+       fW = "none";
+ 
+     function CW() {
+       return pW
+ ... (6 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L303-L305` → after: `L615-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L615-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L615-L630) · [Before (L303-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L303-L305)

```diff
-       eventOutlier(ee) {
-         const ie = this.tally;
-         ie.eventLines >= 10 ? ie.suppressed++ : (ie.eventLines++, (0, be.m)("look", ee))
+     }
+ 
+     function qW() {
+       pW++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? fW = "all" : "none" === fW && (fW = "notBoards");
+       for (const WW of XW) WW()
+     }(0, xW.o)((() => {
+       qW(!1)
+     })), (0, cW.u)((() => {
+       (function() {
+         const WW = yW;
+         return yW = !1, WW
+       })() && qW(!1)
+     }));
+     const RW = new class {
+       constructor(WW) {
+         this.loaded = WW, this.latin = null, this.rest = null, this.restWanted = !1
```

#### 28. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L307-L317` → after: `L632-L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L632-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L632-L645) · [Before (L307-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L307-L317)

```diff
-       takeRecords() {
-         if (null === this.takes) return;
-         const ee = this.takes.look();
-         if (ee.length >= oe) {
-           this.counted(Je.c.stepsLost, ee[0]), this.counted(Je.c.droppedCopies, ee[1]);
-           for (let ie = oe; ie + Je.f <= ee.length; ie += Je.f) this.record(ee, ie)
-         }
-         const ie = this.takes.cameraSets();
-         if (ie.length >= ye.d) {
-           this.counted(Je.c.cameraSetsLost, ie[0]);
-           for (let ee = ye.d; ee + ye.f <= ie.length; ee += ye.f) Je.p.cameraSet(ie, ee), this.topicOn && (this.tally.cameraSets++, this.outlier(Fe(ie, ee)))
+       load() {
+         if (null === this.latin) {
+           this.latin = new FontFace(hW, `url(${(0,JW.d)()}) format("woff2")`, {
+             unicodeRange: HW
+           }).load().then((WW => {
+             document.fonts.add(WW), this.loaded()
+           }), eW("Latin"));
+           const WW = new FontFace(hW, `url(${(0,JW.h)()}) format("woff2")`, {
+             unicodeRange: nW,
+             display: "swap"
+           });
+           document.fonts.add(WW), WW.loaded.then((() => {
+             this.loaded()
+           }), eW("rest")), this.rest = WW, this.restWanted && WW.load()
```

#### 29. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L320-L321` → after: `L649-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L649-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L649-L651) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L320-L321)

```diff
-       droppedCopy() {
-         this.counted(Je.c.droppedCopies, 1)
+       loadRest() {
+         var WW;
+         this.restWanted || (this.restWanted = !0, null === (WW = this.rest) || void 0 === WW || WW.load())
```

#### 30. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L323-L327` → after: `L653-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L653-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L653-L656) · [Before (L323-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L323-L327)

```diff
-       counted(ee, ie) {
-         if (0 === ie) return;
-         if (Je.p.change(ee, ie), !this.topicOn) return;
-         const He = this.tally;
-         ee === Je.c.droppedCopies ? He.dropped += ie : ee === Je.c.stepsLost ? He.lost += ie : He.cameraSetsLost += ie
+       async untilLoadedFor(WW) {
+         await this.load(), this.loadFor(WW), await document.fonts.load(`16px '${hW}'`, WW).catch((iW => {
+           console.warn("[bloxd-wasm-client] the text font did not load for", WW, iW)
+         }))
```

#### 31. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L329-L330` → after: `L658-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L658-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L658-L659) · [Before (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L329-L330)

```diff
-       endTake() {
-         this.takeRecords(), this.takes = null
+       loadFor(WW) {
+         !this.restWanted && dW.test(WW) && this.loadRest()
```

#### 32. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L336-L337` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L668) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L336-L337)

```diff
-       let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-       return Te ??= new fe, Te.start(ee, ie), Te.record
+       WW !== VW && (VW = WW, qW())
```

#### 33. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L340-L342` → after: `L671-L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L671-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L671-L673) · [Before (L340-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L340-L342)

```diff
-     function Xe() {
-       var ee;
-       null === (ee = Te) || void 0 === ee || ee.endTake()
+     function aW(WW) {
+       if ("none" === fW || null === WW) return;
+       WW(vW, "all" === fW ? 0 : gW, new Uint8Array(0)) && (fW = "none")
```

#### 34. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L345` → after: `L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L678) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L345)

```diff
-     function ze() {
+     function FW(WW, iW, OW) {
```

#### 35. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L347` → after: `L680-L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L680-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L680-L720) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L347)

```diff
-       null === (ee = Te) || void 0 === ee || ee.droppedCopy()
+       const EW = OW ? `${WW}#${OW.join(",")}` : WW,
+         NW = rW.get(EW);
+       if (NW) return NW.image;
+       const PW = {
+         image: null !== (mW = zW.get(EW)) && void 0 !== mW ? mW : null
+       };
+       return rW.set(EW, PW), iW().then((async WW => {
+         if (null === WW) return null;
+         const iW = new Image;
+         iW.crossOrigin = "anonymous", iW.src = WW, await iW.decode();
+         const mW = await createImageBitmap(iW);
+         if (!OW) return mW;
+         try {
+           return function(WW, iW) {
+             let [OW, mW, EW] = iW;
+             const NW = (0, wW.g)(WW.width, WW.height),
+ ... (25 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L349-L356` → after: `L722-L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L722-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L722-L930) · [Before (L349-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L349-L356)

```diff
-     async function Be(ee) {
-       var ie;
-       null === (ie = Te) || void 0 === ie || ie.takeRecords();
-       const {
-         clientHintsRead: ye,
-         debugDeviceLines: be
-       } = await He.e(34).then((() => He(34738)));
-       await ye, Je.p.save({
+ 
+     function Oi(WW) {
+       return QW.has(WW) ? FW(`icon:${WW}`, (async () => {
+         var iW, OW;
+         return null !== (iW = null === (OW = (0, lW.f)()) || void 0 === OW ? void 0 : OW.textureUrl(WW)) && void 0 !== iW ? iW : (await (0, AW.c)()).ingameIconUrl(WW)
+       })) : null
+     }
+     let mi = "unasked";
+     const Ei = {
+       get canSeeRealPlayerNames() {
+         return tW.featureFlags.canSeeRealPlayerNames
+       },
+       get canSeePlayerWrittenText() {
+         return tW.featureFlags.canSeePlayerWrittenText
+       },
+       get localPlayerDbId() {
+ ... (193 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L358-L359` → after: `L932-L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L932-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/243.js#L932-L1104) · [Before (L358-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/243.js#L358-L359)

```diff
-         device: be()
-       })
+         info: {
+           content: [{
+             str: "Ag"
+           }],
+           subtitle: ["Ag"]
+         }
+       }), nW(jW.MultilineText, {
+         box: {
+           content: ["Ag"]
+         },
+         shown: null
+       }), ...mW.d.map(((WW, iW) => nW(jW.Board, {
+         shared: {
+           text: "Ag",
+           textSize: iW
+         },
+ ... (157 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/244.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/244.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38)

#### 1. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4` → after: `L4-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/244.js#L4-L35) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/244.js#L4)

```diff
-   39867: (ee, ie, He) => {
+   37343: (WW, iW, OW) => {
+     function mW(WW, iW, OW) {
+       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(WW, iW).getContext("2d", OW);
+       const mW = document.createElement("canvas");
+       return mW.width = WW, mW.height = iW, mW.getContext("2d", OW)
+     }
+ 
+     function EW(WW, iW) {
+       return WW.getContext("2d", iW)
+     }
+     OW.d(iW, {
+       c: () => EW,
+       g: () => mW
+     })
+   },
+   42246: (WW, iW, OW) => {
+ ... (16 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L7` → after: `L38-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L38-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/244.js#L38-L44) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/244.js#L7)

```diff
-       f: () => Ke
+       f: () => PW,
+       h: () => EW,
+       l: () => NW,
+       p: () => tW,
+       t: () => wW,
+       u: () => cW,
+       w: () => LW
```

#### 3. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L9-L10` → after: `L46-L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L46-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/244.js#L46-L832) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/244.js#L9-L10)

```diff
-     var ye = He(27);
-     let be = !1;
+     OW(4675);
+     OW(42246);
+ 
+     function mW(WW) {}
+ 
+     function EW(WW) {}
+ 
+     function NW(WW) {}
+ 
+     function PW(WW) {}
+ 
+     function LW(WW) {}
+ 
+     function cW(WW, iW, OW) {}
+ 
+     function wW(WW) {}
+ ... (771 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L13` → after: `L835-L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L835-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/244.js#L835-L857) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/244.js#L13)

```diff
-       return be
+       const WW = EW;
+       if (null === WW) return (0, mW.e)();
+       const iW = (0, mW.e)(!WW.scanned);
+       return WW.scanned = !0, iW
+     }
+   },
+   42358: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => mW
+     });
+     const mW = {
+       webgpu: "rust_webgpu",
+       webgl: "rust_webgl2",
+       webgl1: "rust_webgl1"
+     }
+   },
+ ... (7 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L17-L20` → after: `L861-L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L861-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/244.js#L861-L862) · [Before (L17-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/244.js#L17-L20)

```diff
-       be !== ee && (be = ee, ye.h.yR("replayViewer|videoExportChanged"))
-     }
-   },
-   37260: (ee, ie, He) => {
+       return ["pl", "ru", "tr", "uk", "vi"].includes(WW)
+     }
```

#### 6. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L23-L74` → after: `L865-L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L865-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/244.js#L865-L867) · [Before (L23-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/244.js#L23-L74)

```diff
-       f: () => oe,
-       h: () => qe,
-       j: () => Re
-     });
-     var ye = He(347),
-       be = He(656),
-       Me = He(663),
-       Ke = He(35);
-     const Ue = {
-         idStorageKey: "playSessionId",
-         lastActivityStorageKey: "playSessionLastActivityMs",
-         expiryMs: 3e5
-       },
-       Fe = "playSessionGameNameWithVariation",
-       Je = "wasMatchmakePlayer";
- 
- ... (36 more removed lines; see GitHub link above)
+       d: () => mW,
+       h: () => EW
+     })
```

#### 7. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L76-L128` → after: `L869-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L869-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/244.js#L869-L870) · [Before (L76-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/244.js#L76-L128)

```diff
-   42006: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => oe,
-       h: () => Ke,
-       l: () => Fe,
-       n: () => Me,
-       r: () => Ue,
-       s: () => Je
-     });
-     let ye = null,
-       be = null;
- 
-     function Me(ee, ie) {
-       return ye = ee, be = null, Ue(ie), () => {
-         ye === ee && (ye = null, be = null)
-       }
- ... (37 more removed lines; see GitHub link above)
+   37453: (WW, iW, OW) => {
+     WW.exports = OW.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
```

#### 8. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L130-L166` → after: `L872-L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L872-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/244.js#L872-L873) · [Before (L130-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/244.js#L130-L166)

```diff
-   42015: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => be,
-       e: () => Me
-     });
-     let ye = null;
- 
-     function be(ee, ie) {
-       ye = {
-         conn: ee,
-         reason: ie
-       }
-     }
- 
-     function Me(ee) {
-       var ie;
- ... (21 more removed lines; see GitHub link above)
+   37460: (WW, iW, OW) => {
+     WW.exports = OW.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/245.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/245.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc)

#### 1. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L5-L74` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L4) · [Before (L5-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L5-L74)

```diff
-   40461: (ee, ie, He) => {
-     ee.exports = be;
-     var ye = He(352);
- 
-     function be(ee, ie) {
-       if (!(this instanceof be)) return new be(ee, ie);
-       var He = ye.create();
-       ye.add(He, ee, ie), this.base = ye.min(ye.create(), ee, He), this.vec = ye.clone(ie), this.max = ye.max(ye.create(), ee, He), this.mag = ye.length(this.vec)
-     }
-     var Me = be.prototype;
-     Me.width = function() {
-       return this.vec[0]
-     }, Me.height = function() {
-       return this.vec[1]
-     }, Me.depth = function() {
-       return this.vec[2]
- ... (54 more removed lines; see GitHub link above)
+   37415: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L76-L77` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L6) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L76-L77)

```diff
-       d: () => Ue,
-       f: () => Me
+       c: () => LW
```

#### 3. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L79-L80` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L8) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L79-L80)

```diff
-     var ye = He(4461);
-     let be = null;
+     var mW = OW(1217);
```

#### 4. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L83` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L11-L12) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L83)

```diff
-       return null !== be && ee === be
+       const iW = /(\d*\.?\d+)px/.exec(WW);
+       return iW ? Number(iW[1]) : null
```

#### 5. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L86-L120` → after: `L15-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L15-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L15-L73) · [Before (L86-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L86-L120)

```diff
-     function Ke() {
-       this.mG = !1, this.stopPropagation = !1, this.lG = !1, this.disabled = !1
-     }
-     class Ue {
-       constructor(ee, ie) {
-         this.version = "0.7.0";
-         var He = Object.assign({}, new Ke, ie || {});
-         this.element = ee || document, this.mG = !!He.mG, this.stopPropagation = !!He.stopPropagation, this.lG = !!He.lG, this.disabled = !!He.disabled, this.filterEvents = (ee, ie) => !0, this.ignoreEvent = ee => !1, this.down = new ye.EventEmitter, this.up = new ye.EventEmitter … [truncated]
-           dx: 0,
-           dy: 0,
-           lHe: 0,
-           SHe: 0,
-           nHe: 0
-         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
-           lastX: 0,
-           lastY: 0,
- ... (19 more removed lines; see GitHub link above)
+     function NW(WW) {
+       return WW.split(/[\s,]+/).pop()
+     }
+     let PW = !1;
+     const LW = {
+       debug: !1,
+       align: "center",
+       vAlign: "middle",
+       fontSize: 14,
+       fontWeight: "",
+       fontStyle: "",
+       fontVariant: "",
+       font: "Arial",
+       lineHeight: null,
+       justify: !1,
+       drawText: function(WW, iW, mW, LW, cW, wW) {
+ ... (43 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L122-L128` → after: `L75-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L75-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L75-L83) · [Before (L122-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L122-L128)

```diff
-       }
-       getBindings() {
-         var ee = {};
-         for (var ie in this._keyBindmap) {
-           this._keyBindmap[ie].forEach((He => {
-             ee[He] = ee[He] || [], ee[He].push(ie)
-           }))
+         return this.drawLines(WW, iW, mW, LW, cW, wW, lW)
+       },
+       drawLines: function(WW, iW, OW, EW, NW, PW, LW) {
+         const cW = OW + NW,
+           wW = EW + PW;
+         let tW, ZW = EW + PW / 2 + LW / 2;
+         "right" === this.align ? (tW = cW, WW.textAlign = "right") : "left" === this.align ? (tW = OW, WW.textAlign = "left") : (tW = OW + NW / 2, WW.textAlign = "center");
+         for (const mW of iW) {
+           WW.measureText(mW).width >= NW && (iW = iW.replace(mW, ""))
```

#### 7. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L130-L178` → after: `L85-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L85-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L85-L143) · [Before (L130-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L130-L178)

```diff
-         return ee
-       }
-       YR() {
-         Fe(this.nG), Fe(this.pressCount), Fe(this.releaseCount)
-       }
-     }
- 
-     function Fe(ee) {
-       for (var ie in ee) ee[ie] = 0
-     }
- 
-     function Je(ee) {
-       window.addEventListener("keydown", pe.bind(null, ee, !0), !1), window.addEventListener("keyup", pe.bind(null, ee, !1), !1);
-       var ie = {
-         passive: !0
-       };
- ... (33 more removed lines; see GitHub link above)
+         iW = (0, mW.Z)(iW);
+         const xW = [],
+           lW = iW.split("\n"),
+           AW = this.justify ? WW.measureText("\u200a").width : 0;
+         lW.forEach((iW => {
+           let OW = WW.measureText(iW).width;
+           if (OW <= NW) xW.push(iW);
+           else {
+             let mW = iW;
+             const EW = NW;
+             let PW, LW, cW;
+             for (OW = WW.measureText(mW).width; OW > EW;) {
+               for (PW = 0, LW = 0, cW = ""; LW < EW;) PW++, cW = mW.substr(0, PW), LW = WW.measureText(cW).width;
+               PW--, cW = cW.substr(0, PW);
+               const iW = PW;
+               if (" " !== mW.substr(PW, 1)) {
+ ... (43 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L183-L196` → after: `L166-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L166-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L166-L171) · [Before (L183-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L183-L196)

```diff
-       if (!ee.ignoreEvent(He)) try {
-         We(ee, He)
-       } finally {
-         ! function(ee, ie, He) {
-           if ("pointerId" in He)
-             if (ie) {
-               if (null !== ee._touches.currID) return;
-               ee._touches.currID = He.pointerId
-             } else {
-               if (ee._touches.currID !== He.pointerId) return;
-               ee._touches.currID = null
-             } var ye = "button" in He ? He.button + 1 : 1;
-           Ze("Mouse" + ye, ie, ee, He)
-         }(ee, ie, He)
+       if ("string" !== typeof WW) return iW;
+       try {
+         const OW = JSON.parse(WW);
+         return OW && "object" === typeof OW ? OW : iW
+       } catch (mW) {
+         return void 0 !== OW && console.error(`Couldn't parse ${OW}`, mW), iW
```

#### 9. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L200-L215` → after: `L175-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L175-L176) · [Before (L200-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L200-L215)

```diff
-     function ze(ee, ie) {
-       var He = ie.movementX || ie.mozMovementX || 0,
-         ye = ie.movementY || ie.mozMovementY || 0;
-       if (ie.touches && 0 === (He | ye)) {
-         var be = function(ee) {
-           fe(ee);
-           for (let ie = 0; ie < ee.changedTouches.length; ++ie)
-             if (ee.changedTouches[ie].identifier == ke) {
-               const He = ee.changedTouches[ie],
-                 ye = [He.clientX - oe, He.clientY - Re];
-               return oe = He.clientX, Re = He.clientY, ye
-             } return console.error(`Did not find touch id ${ke}`), [0, 0]
-         }(ie);
-         He = be[0], ye = be[1]
-       }
-       ee.nG.dx += He, ee.nG.dy += ye
+     function ZW(WW) {
+       return tW(WW, null, "a leaderboard's rows")
```

#### 10. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L219-L229` → after: `L180-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L180-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L180-L183) · [Before (L219-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L219-L229)

```diff
-       We(ee, ie);
-       var He = 1;
-       switch (ie.deltaMode) {
-         case 0:
-           He = 1;
-           break;
-         case 1:
-           He = 12;
-           break;
-         case 2:
-           He = ee.element.clientHeight || window.innerHeight
+       var OW, mW;
+       return null !== iW && void 0 !== iW ? iW : {
+         status: null !== (OW = WW.status) && void 0 !== OW ? OW : "loading",
+         entries: null !== (mW = WW.entries) && void 0 !== mW ? mW : []
```

#### 11. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L235-L249` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L188) · [Before (L235-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L235-L249)

```diff
-       if (!ee.lG) return ie.preventDefault(), !1
-     }
-     var ge = {
-       AltLeft: "altKey",
-       AltRight: "altKey",
-       ControlLeft: "ctrlKey",
-       ControlRight: "ctrlKey",
-       ShiftLeft: "shiftKey",
-       ShiftRight: "shiftKey",
-       MetaLeft: "metaKey",
-       MetaRight: "metaKey"
-     };
- 
-     function Oe(ee, ie) {
-       return !!ee[ge[ie]] || ("AltRight" === ie || "ControlLeft" === ie) && "function" === typeof ee.getModifierState && !0 === ee.getModifierState("AltGraph")
+       return "number" === typeof WW && Number.isFinite(WW) && WW > 0 ? WW : iW
```

#### 12. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L253-L263` → after: `L192-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L192-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L192-L205) · [Before (L253-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L253-L263)

```diff
-       for (var He in ee._modifiersHeldThroughBlur = {}, ge) ee._keyStates[He] && (ee._modifiersHeldThroughBlur[He] = !0);
-       ie && ie.isTrusted && function() {
-         try {
-           return window.self !== window.top
-         } catch (ee) {
-           return !0
-         }
-       }() && (clearTimeout(ee._blurRelease), ee._blurRelease = setTimeout((function() {
-         if (!document.hasFocus())
-           for (var ie in ee._modifiersHeldThroughBlur = {}, ee._keyStates) ee._keyStates[ie] && !/^Mouse\d/.test(ie) && te(ee, ie)
-       }), 0))
+       const OW = lW(WW.size, 1);
+       let mW = lW(WW.width, lW(2.5 * OW, 2.5)),
+         EW = lW(WW.height, lW(3.75 * OW, 3.75));
+       Number.isFinite(NW * EW / mW) && Number.isFinite(PW * mW / EW) || (mW = 2.5, EW = 3.75);
+       const LW = EW / mW,
+         cW = Math.max(1, Math.min(NW, iW / LW));
+       return {
+         width: mW,
+         height: EW,
+         layoutWidth: Math.max(NW, PW / LW),
+         layoutHeight: Math.max(PW, NW * LW),
+         pixelWidth: Math.round(cW),
+         pixelHeight: Math.round(Math.max(1, Math.min(iW, cW * LW)))
+       }
```

#### 13. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L266-L269` → after: `L208-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L208-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L208-L303) · [Before (L266-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L266-L269)

```diff
-     function We(ee, ie) {
-       var He = ee._modifiersHeldThroughBlur;
-       if (He && ie.isTrusted && document.hasFocus())
-         for (var ye in He) delete He[ye], ee._keyStates[ye] && ye !== ie.code && (Oe(ie, ye) || te(ee, ye))
+     function bW(WW, iW, OW, PW, tW, ZW) {
+       WW.setTransform(1, 0, 0, 1, 0, 0), WW.fillStyle = EW.M.defaultNameTagBackground, WW.fillRect(0, 0, iW, OW), WW.scale(iW / PW.layoutWidth, OW / PW.layoutHeight), WW.translate((PW.layoutWidth - NW) / 2, 0),
+         function(WW, iW, OW, NW) {
+           var PW, tW, ZW, xW;
+           const {
+             top: lW,
+             around: AW,
+             showPlayerText: bW,
+             localPlayerDbId: kW
+           } = OW, {
+             whiteUiText: sW,
+             grayUiText: MW,
+             yellowUiText: KW
+           } = EW.M;
+           WW.textBaseline = "middle";
+           const SW = function(iW, OW, mW, EW, NW, PW) {
+ ... (80 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L273-L303` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L307) · [Before (L273-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L273-L303)

```diff
-       const He = {
-           code: ie,
-           preventDefault: () => {},
-           stopPropagation: () => {}
-         },
-         ye = be;
-       be = He;
-       try {
-         Ze(ie, !1, ee, He)
-       } finally {
-         be = ye
-       }
-     }
- 
-     function Ze(ee, ie, He, ye) {
-       var be = He._keyBindmap[ee];
- ... (15 more removed lines; see GitHub link above)
+       return Array.isArray(WW) ? WW.slice(0, iW).filter((WW => WW && Number.isFinite(WW.rank) && Number.isFinite(WW.value))) : []
```

#### 15. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L307` → after: `L311-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L311-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L311-L317) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L307)

```diff
-       return ee ? !ie : ie
+       const OW = [];
+       let mW = !1;
+       return WW.forEach(((EW, NW) => {
+         if (null !== iW && EW.value === iW.value) return void OW.push(iW.rank);
+         const PW = NW > 0 && EW.value === WW[NW - 1].value;
+         PW || (mW = 0 === NW && 1 !== EW.rank), OW.push(PW && !mW ? OW[NW - 1] : EW.rank)
+       })), OW
```

#### 16. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L310-L407` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L320) · [Before (L310-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L310-L407)

```diff
-   37358: (ee, ie) => {
-     function He(ee) {
-       if (ee && "object" === typeof ee) {
-         var ie = ee.which || ee.keyCode || ee.charCode;
-         ie && (ee = ie)
-       }
-       if ("number" === typeof ee) return Ke[ee];
-       var He, Me = String(ee);
-       return (He = ye[Me.toLowerCase()]) ? He : (He = be[Me.toLowerCase()]) || (1 === Me.length ? Me.charCodeAt(0) : void 0)
-     }
-     He.isEventKey = function(ee, ie) {
-       if (ee && "object" === typeof ee) {
-         var He = ee.which || ee.keyCode || ee.charCode;
-         if (null === He || void 0 === He) return !1;
-         if ("string" === typeof ie) {
-           var Me;
- ... (82 more removed lines; see GitHub link above)
+   37348: (WW, iW, OW) => {
```

#### 17. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L409` → after: `L322-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L322-L323) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L409)

```diff
-       d: () => ye
+       d: () => EW,
+       f: () => NW
```

#### 18. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L411-L482` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L325) · [Before (L411-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L411-L482)

```diff
-     class ye {
-       constructor() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
-         this.Av = !1, this.Qv = !1, this.lV = 30, this.sC = 0, this.Km = 100, this.HX = !1, this.fullscreen = !1, this.qE = function(ee) {}, this.Jm = function(ee, ie, He) {}, this.cR = function() {}, this.jB = function() {}, this.Rm = function() {}, this.onFullscreenChanged = fu … [truncated]
-           function(ee) {
-             if ("loading" === document.readyState) {
-               var ie = () => {
-                 document.removeEventListener("readystatechange", ie), ee()
-               };
-               document.addEventListener("readystatechange", ie)
-             } else setTimeout(ee, 0)
-           }((() => {
-             ! function(ee) {
-               var ie = ee._data,
-                 He = ie.nowObject.now();
- ... (56 more removed lines; see GitHub link above)
+     const mW = 32;
```

#### 19. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L484-L486` → after: `L327-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L327-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L327-L328) · [Before (L484-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L484-L486)

```diff
-     function be() {
-       let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
-       this.nowObject = performance || Date, this.pollTime = ee, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
+     function EW(WW) {
+       return Array.from(WW).length
```

#### 20. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L492-L632` → after: `L332-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L332-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L332-L336) · [Before (L492-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L492-L632)

```diff
-       for (var ie = ee._data, He = 1e3 / ee.lV, ye = ie.nowObject.now() + Ke, be = 0; ie.nowObject.now() >= ie.lastTickStarted + He && ie.nowObject.now() < ye && ++be <= Me;) ee.qE(He), ie.lastTickStarted += He;
-       var Ue = 5 * (He + 5),
-         Fe = ie.nowObject.now();
-       if (Fe - ie.lastTickStarted > Ue)
-         for (; Fe >= ie.lastTickStarted + He;) ie.lastTickStarted += He
-     }
-   },
-   37529: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
-     });
-     var ye = He(59);
-     const be = ye.useLayoutEffect;
-     const Me = function(ee) {
-       var ie = (0, ye.useRef)(ee);
-       return be((function() {
- ... (125 more removed lines; see GitHub link above)
+       const iW = [""];
+       let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         EW = "";
+       const NW = () => {
+         iW.push(""), OW = 0, EW = ""
```

#### 21. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L634-L705` → after: `L338-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L338-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L338-L344) · [Before (L634-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L634-L705)

```diff
-     for (ie = 58; ie < 65; ++ie) Ke[ie] = String.fromCharCode(ie);
-     for (ie = 48; ie < 58; ++ie) Ke[ie] = ie - 48 + "";
-     for (ie = 65; ie < 91; ++ie) Ke[ie] = String.fromCharCode(ie);
-     for (ie = 96; ie < 106; ++ie) Ke[ie] = "<num-" + (ie - 96) + ">";
-     for (ie = 112; ie < 136; ++ie) Ke[ie] = "F" + (ie - 111)
-   },
-   39778: (ee, ie, He) => {
-     function ye(ee, ie, He, ye, be) {
-       var Me = {};
-       return Object.keys(ye).forEach((function(ee) {
-         Me[ee] = ye[ee]
-       })), Me.enumerable = !!Me.enumerable, Me.configurable = !!Me.configurable, ("value" in Me || Me.initializer) && (Me.writable = !0), Me = He.slice().reverse().reduce((function(He, ye) {
-         return ye(ee, ie, He) || He
-       }), Me), be && void 0 !== Me.initializer && (Me.value = Me.initializer ? Me.initializer.call(be) : void 0, Me.initializer = void 0), void 0 === Me.initializer && (Object.defineProperty(ee, ie, Me), Me = null), Me
-     }
-     He.d(ie, {
- ... (56 more removed lines; see GitHub link above)
+       for (const PW of WW.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
+         if (/^\r?\n$/.test(PW)) NW();
+         else if (/^\s+$/.test(PW)) EW += PW;
+       else if (PW.length > 0) {
+         const WW = Array.from(PW);
+         OW > 0 && OW + EW.length + WW.length > mW && NW(), iW[iW.length - 1] += EW, OW += EW.length, EW = "";
+         for (const EW of WW) OW >= mW && NW(), iW[iW.length - 1] += EW, OW++
```

#### 22. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L709` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L349) · [Before (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L709)

```diff
-   39499: (ee, ie, He) => {
+   37369: (WW, iW, OW) => {
```

#### 23. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L712-L714` → after: `L352-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L352-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L352-L354) · [Before (L712-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L712-L714)

```diff
-       g: () => Me,
-       i: () => Ke,
-       k: () => Ue
+       h: () => hW,
+       k: () => HW,
+       o: () => nW
```

#### 24. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L716-L723` → after: `L356-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L356-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L356-L411) · [Before (L716-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L716-L723)

```diff
-     var ye = He(38022);
-     class be {
-       constructor(ee, ie, He) {
-         this.gradient = ee, this.color1 = ie, this.color2 = He
-       }
-       getColorToRef(ee) {
-         this.color2 ? ye.g.LerpToRef(this.color1, this.color2, Math.random(), ee) : ee.jD(this.color1)
-       }
+     var mW = OW(37371),
+       EW = OW(7912),
+       NW = OW(7998),
+       PW = OW(37373),
+       LW = OW(37375),
+       cW = OW(37380),
+       wW = OW(8308),
+       tW = OW(8437),
+       ZW = OW(37383),
+       xW = OW(8647),
+       lW = OW(7787),
+       AW = OW(8930),
+       bW = OW(37389),
+       jW = OW(37398),
+       UW = OW(8956),
+       kW = OW(37403),
+ ... (40 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L725-L727` → after: `L413-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L413-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L413-L419) · [Before (L725-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L725-L727)

```diff
-     class Me {
-       constructor(ee, ie) {
-         this.gradient = ee, this.color = ie
+     let TW = !1;
+     const JW = new Set;
+ 
+     function hW(WW) {
+       if (WW !== TW) {
+         TW = WW;
+         for (const WW of JW) WW()
```

#### 26. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L730-L736` → after: `L422-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L422-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L422-L425) · [Before (L730-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L730-L736)

```diff
-     class Ke {
-       constructor(ee, ie, He) {
-         this.gradient = ee, this.factor1 = ie, this.factor2 = He
-       }
-       getFactor() {
-         return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
-       }
+ 
+     function HW(WW) {
+       var iW;
+       return "string" === typeof WW && TW && null !== (iW = yW.get(WW.toLowerCase())) && void 0 !== iW ? iW : null
```

#### 27. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L738-L749` → after: `L427-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L427-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L427-L430) · [Before (L738-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L738-L749)

```diff
-     class Ue {
-       static GetCurrentGradient(ee, ie, He) {
-         if (ie[0].gradient > ee) return void He(ie[0], ie[0], 1);
-         for (let be = 0; be < ie.length - 1; be++) {
-           const ye = ie[be],
-             Me = ie[be + 1];
-           if (ee >= ye.gradient && ee <= Me.gradient) {
-             return void He(ye, Me, (ee - ye.gradient) / (Me.gradient - ye.gradient))
-           }
-         }
-         const ye = ie.length - 1;
-         He(ie[ye], ie[ye], 1)
+ 
+     function nW(WW) {
+       return JW.add(WW), () => {
+         JW.delete(WW)
```

#### 28. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L753` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L434) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L753)

```diff
-   39467: (ee, ie, He) => {
+   37423: (WW, iW, OW) => {
```

#### 29. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L755` → after: `L436-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L436-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L436-L449) · [Before (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L755)

```diff
-       e: () => ye
+       A: () => ZW,
+       B: () => bW,
+       D: () => jW,
+       F: () => UW,
+       G: () => sW,
+       d: () => EW,
+       g: () => lW,
+       k: () => PW,
+       m: () => AW,
+       o: () => kW,
+       s: () => xW,
+       t: () => MW,
+       u: () => NW,
+       x: () => tW
```

#### 30. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L757-L813` → after: `L451-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L451-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L451-L456) · [Before (L757-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L757-L813)

```diff
-     class ye {
-       static _CheckLimit(ee, ie) {
-         let He = ye._LogLimitOutputs[ee];
-         return He ? He.current++ : (He = {
-           limit: ie,
-           current: 1
-         }, ye._LogLimitOutputs[ee] = He), He.current <= He.limit
-       }
-       static _GenerateLimitMessage(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const He = ye._LogLimitOutputs[ee];
-         if (!He || !ye.MessageLimitReached) return;
-         const be = this._Levels[ie];
-         He.current === He.limit && ye[be.name](ye.MessageLimitReached.replace(/%LIMIT%/g, "" + He.limit).replace(/%TYPE%/g, be.name ?? ""))
-       }
-       static _AddLogEntry(ee) {
- ... (41 more removed lines; see GitHub link above)
+     var mW = OW(2012);
+     const EW = [{
+       numLines: 7,
+       charsPerLine: 16,
+       uiFontSize: 3.3,
+       ingameFontSize: 25
```

#### 31. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L815-L871` → after: `L458-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L458-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L458-L470) · [Before (L815-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L815-L871)

```diff
-       color: "orange",
-       logFunc: console.warn,
-       name: "Warn"
-     }, {}, {
-       color: "red",
-       logFunc: console.error,
-       name: "Error"
-     }], ye.errorsCount = 0, ye.Log = ye._LogEnabled.bind(ye, ye.MessageLogLevel), ye.Warn = ye._LogEnabled.bind(ye, ye.WarningLogLevel), ye.Error = ye._LogEnabled.bind(ye, ye.ErrorLogLevel)
-   },
-   39503: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke
-     });
-     var ye = He(37917),
-       be = He(37938),
-       Me = He(39463);
- ... (41 more removed lines; see GitHub link above)
+       numLines: 5,
+       charsPerLine: 11,
+       uiFontSize: 4.6,
+       ingameFontSize: 36
+     }, {
+       numLines: 3,
+       charsPerLine: 7,
+       uiFontSize: 7.5,
+       ingameFontSize: 58
+     }];
+ 
+     function NW(WW) {
+       return (0, mW.r)(WW.toWellFormed().replace(/\uFFFD+/g, "\ufffd"))
```

#### 32. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L873-L926` → after: `L472-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L472-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L472-L487) · [Before (L873-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L873-L926)

```diff
-   },
-   39461: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ue,
-       d: () => Ke
-     });
-     var ye = He(37917),
-       be = He(37938),
-       Me = He(39463);
-     class Ke {
-       constructor() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-           ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
-           be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         this.radius = ee, this.height = ie, this.radiusRange = He, this.directionRandomizer = be, this._tempVector = ye.p.Zero()
- ... (38 more removed lines; see GitHub link above)
+ 
+     function PW(WW, iW) {
+       const {
+         numLines: OW,
+         charsPerLine: mW
+       } = EW[iW];
+       return KW(WW, OW, mW, !1)
+     }
+     const LW = 7 / 8,
+       cW = .25,
+       wW = 8;
+ 
+     function tW(WW, iW) {
+       return {
+         width: Math.min(WW, wW) - 2 * cW,
+         height: Math.min(iW, wW) - 2 * cW
```

#### 33. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L929-L965` → after: `L490-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L490-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L490-L499) · [Before (L929-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L929-L965)

```diff
-     class Ue extends Ke {
-       constructor() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-           ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
-           be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ye.p(0, 1, 0),
-           Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ye.p(0, 1, 0);
-         super(ee, ie, He), this.direction1 = be, this.direction2 = Me
-       }
-       startDirectionFunction(ee, ie, He, Me) {
-         const Ke = (0, be.RandomRange)(this.direction1.x, this.direction2.x),
-           Ue = (0, be.RandomRange)(this.direction1.y, this.direction2.y),
-           Fe = (0, be.RandomRange)(this.direction1.z, this.direction2.z);
-         Me ? ie.wie(Ke, Ue, Fe) : ye.p.TransformNormalFromFloatsToRef(Ke, Ue, Fe, ee, ie)
-       }
-       clone() {
- ... (21 more removed lines; see GitHub link above)
+ 
+     function ZW(WW, iW, OW) {
+       const mW = tW(WW, iW),
+         {
+           numLines: NW,
+           charsPerLine: PW
+         } = EW[OW];
+       return {
+         numLines: Math.max(1, Math.floor(NW / LW * mW.height)),
+         charsPerLine: Math.max(1, Math.floor(PW * mW.width))
```

#### 34. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L968-L1108` → after: `L502-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L502-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L502-L538) · [Before (L968-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L968-L1108)

```diff
-   },
-   39572: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Re
-     });
-     const ye = .5 * (Math.sqrt(3) - 1),
-       be = (3 - Math.sqrt(3)) / 6,
-       Me = 1 / 3,
-       Ke = 1 / 6,
-       Ue = (Math.sqrt(5) - 1) / 4,
-       Fe = (5 - Math.sqrt(5)) / 20,
-       Je = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
-       oe = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0,  … [truncated]
-     const Re = class {
-       constructor() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
- ... (125 more removed lines; see GitHub link above)
+ 
+     function xW(WW, iW, OW, mW) {
+       const {
+         numLines: EW,
+         charsPerLine: NW
+       } = ZW(OW, mW, iW);
+       return KW(WW, EW, NW, !1)
+     }
+     const lW = 32e3;
+ 
+     function AW(WW) {
+       return WW.slice(0, lW)
+     }
+     const bW = 512e3,
+       jW = 64,
+       UW = bW;
+ ... (21 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L1110-L1188` → after: `L540-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L540-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L540-L556) · [Before (L1110-L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L1110-L1188)

```diff
-       noise4D(ee, ie, He, ye) {
-         const be = this.perm;
-         let Me, Ke, Je, Re, ke;
-         const qe = (ee + ie + He + ye) * Ue,
-           fe = Math.floor(ee + qe),
-           Te = Math.floor(ie + qe),
-           pe = Math.floor(He + qe),
-           Xe = Math.floor(ye + qe),
-           ze = (fe + Te + pe + Xe) * Fe,
-           Be = ee - (fe - ze),
-           Ee = ie - (Te - ze),
-           ge = He - (pe - ze),
-           Oe = ye - (Xe - ze);
-         let de = 0,
-           We = 0,
-           te = 0,
- ... (63 more removed lines; see GitHub link above)
+     };
+ 
+     function MW(WW, iW) {
+       const {
+         numLines: OW,
+         charsPerLine: mW
+       } = sW[iW];
+       return KW(WW, OW, mW, !1)
+     }
+ 
+     function KW(WW, iW, OW, mW, EW) {
+       (EW || mW) && (WW = WW.slice(0, null !== EW && void 0 !== EW ? EW : iW * OW));
+       const NW = WW.split("\n");
+       if (NW.length > iW && NW.splice(iW, NW.length - iW), !mW)
+         for (let PW = 0; PW < NW.length; PW++) {
+           const WW = NW[PW];
+ ... (1 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L1190-L1191` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/245.js#L558) · [Before (L1190-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/245.js#L1190-L1191)

```diff
-         return 27 * (Me + Ke + Je + Re + ke)
-       }
+       return NW.join("\n")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/246.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/246.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835)

#### 1. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L4-L6)

```diff
-   42146: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       LobbyManageView: () => di
+   40287: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => NW,
+       d: () => PW
```

#### 2. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L8-L14` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L9-L10) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L8-L14)

```diff
-     var ye = He(59),
-       be = He(1464),
-       Me = He(37838),
-       Ke = He(2545),
-       Ue = He(2551),
-       Fe = He(2532),
-       Je = He(37380);
+     var mW = OW(27);
+     let EW = !1;
```

#### 3. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L601-L1344` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L17) · [Before (L601-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L601-L1344)

```diff
-       var ie, He;
-       let {
-         state: be,
-         lobbyName: Me,
-         listed: Ke,
-         isListed: Ue,
-         qE: Fe,
-         lE: Je,
-         statusOf: oe
-       } = ee;
-       const {
-         t: Re,
-         selectedLanguage: ke
-       } = (0, qe.v)(), fe = (0, ne.k)(), Te = (0, Be.k)("players"), Xe = null === Te.localId ? null : null !== (ie = null === (He = Te.byId[Te.localId]) || void 0 === He ? void 0 : He.name) && void 0 !== ie ? ie : null, ze = (0, ye.useMemo)((() => (0, he.g)(fe.friends, Me, be.her … [truncated]
-         let {
-           refused: ie,
- ... (728 more removed lines; see GitHub link above)
+       EW !== WW && (EW = WW, mW.l.iZ("replayViewer|videoExportChanged"))
```

#### 4. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1347-L1362` → after: `L32-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L32-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L32-L34) · [Before (L1347-L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L1347-L1362)

```diff
-         players: {
-           icon: "user-group",
-           title: "lobbyManage:players"
-         },
-         joining: {
-           icon: "door-open",
-           title: "lobbyManage:joining"
-         },
-         rules: {
-           icon: "list",
-           title: "lobbyManage:rules"
-         },
-         leaderboard: {
-           icon: "trophy",
-           title: "lobbyManage:leaderboard"
-         }
+         idStorageKey: "playSessionId",
+         lastActivityStorageKey: "playSessionLastActivityMs",
+         expiryMs: 3e5
```

#### 5. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1364-L1390` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L36-L37) · [Before (L1364-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L1364-L1390)

```diff
-       zi = 5,
-       Bi = (0, ye.memo)((function(ee) {
-         let {
-           page: ie,
-           manage: He,
-           leaderboard: be,
-           focusRequest: Me,
-           onFocused: Ke,
-           ruleRowsShown: Ue
-         } = ee;
-         return "leaderboard" === ie ? (0, ce.jsx)(ye.Suspense, {
-           fallback: (0, ce.jsx)("div", {
-             className: "LobbyManageLoading",
-             children: (0, ce.jsx)(Te.b, {})
-           }),
-           children: be
- ... (11 more removed lines; see GitHub link above)
+       cW = "playSessionGameNameWithVariation",
+       wW = "wasMatchmakePlayer";
```

#### 6. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1392-L1562` → after: `L39-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L39-L41) · [Before (L1392-L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L1392-L1562)

```diff
-     function Ei(ee) {
-       let {
-         page: ie
-       } = ee;
-       const {
-         t: He
-       } = (0, qe.v)(), ye = Xi[ie];
-       return (0, ce.jsxs)(ce.Fragment, {
-         children: [(0, ce.jsx)(fe.e, {
-           name: ye.icon
-         }), " ", (0, ce.jsx)("span", {
-           className: "LobbyManagePageTitle",
-           children: He(ye.title)
-         })]
-       })
-     }
- ... (155 more removed lines; see GitHub link above)
+     function tW() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j;
+       (0, NW.h)(WW, LW)
```

#### 7. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1565-L1569` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L44-L45) · [Before (L1565-L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L1565-L1569)

```diff
-     function Oi(ee) {
-       return void 0 === (null === ee || void 0 === ee ? void 0 : ee.page) ? null : {
-         page: ee.page,
-         seq: ee.seq
-       }
+     function ZW() {
+       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j).setItem(wW, !0)
```

#### 8. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1572-L1626` → after: `L48-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L48-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L48-L73) · [Before (L1572-L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L1572-L1626)

```diff
-     function di(ee) {
-       let {
-         leaderboard: ie
-       } = ee;
-       const He = function() {
-           const ee = (0, Fe.i)("lobbyManage"),
-             [ie, He] = (0, ye.useReducer)((ee => ee + 1), 0),
-             [be] = (0, ye.useState)((() => new Je.e(He)));
-           return (0, ye.useEffect)((() => {
-             const ee = be.nextDeadline();
-             if (null === ee) return;
-             const ie = setTimeout((() => {
-               be.expire(Date.now()), He()
-             }), Math.max(0, ee - Date.now()));
-             return () => {
-               clearTimeout(ie)
- ... (39 more removed lines; see GitHub link above)
+     function xW() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j;
+       return (0, NW.b)(WW, LW)
+     }
+ 
+     function lW(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PW.j;
+       const OW = (0, NW.b)(iW, LW),
+         tW = function(WW) {
+           const iW = WW.getItem(cW);
+           return "string" !== typeof iW ? null : iW
+         }(iW),
+         ZW = function() {
+           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j).getItem(wW)
+         }(iW);
+       let xW;
+ ... (10 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1629` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L76) · [Before (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L1629)

```diff
-   37380: (ee, ie, He) => {
+   42427: (WW, iW, OW) => {
```

#### 10. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1632` → after: `L79-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L79-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L79-L83) · [Before (L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L1632)

```diff
-       h: () => Fe
+       f: () => PW,
+       i: () => cW,
+       k: () => NW,
+       m: () => LW,
+       o: () => wW
```

#### 11. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1634-L1638` → after: `L85-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L85-L86) · [Before (L1634-L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L1634-L1638)

```diff
-     var ye = He(1464),
-       be = He(2018),
-       Me = He(1983);
-     const Ke = 1e4;
-     let Ue = 0;
+     let mW = null,
+       EW = null;
```

#### 12. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1640-L1717` → after: `L88-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L88-L90) · [Before (L1640-L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L1640-L1717)

```diff
-     function Fe(ee) {
-       const ie = ++Ue;
-       return new Promise((He => {
-         const Ue = ie => {
-             Fe(), clearTimeout(Je), !1 === (null === ie || void 0 === ie ? void 0 : ie.ok) && (0, ye.reportAnalyticsClick)({
-               id: "lobby_manage.refused",
-               value: ee.type
-             }), He(ie)
-           },
-           Fe = be.c.subscribe("lobbyManage", (ee => {
-             const He = function(ee, ie) {
-               var He;
-               return null !== (He = null === ee || void 0 === ee ? void 0 : ee.results.find((ee => ee.requestId === ie))) && void 0 !== He ? He : null
-             }(ee, ie);
-             null !== He && Ue(He)
-           })),
- ... (62 more removed lines; see GitHub link above)
+     function NW(WW, iW) {
+       return mW = WW, EW = null, LW(iW), () => {
+         mW === WW && (mW = null, EW = null)
```

#### 13. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1734-L1864` → after: `L94-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L94-L97) · [Before (L1734-L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L1734-L1864)

```diff
-     function Re(ee) {
-       let {
-         label: ie,
-         icon: He,
-         placeholder: be,
-         onSubmit: Re
-       } = ee;
-       const ke = (0, ye.useRef)(null),
-         [qe, fe] = (0, ye.useState)(""),
-         [Te, pe] = (0, ye.useState)("Enter"),
-         [Xe, ze] = (0, ye.useState)(null);
-       (0, ye.useEffect)((() => {
-         if ("Success" !== Te && "Error" !== Te) return;
-         const ee = setTimeout((() => {
-           "Success" === Te && ke.current && (ke.current.value = "", fe("")), pe("Enter")
-         }), "Success" === Te ? 1e3 : 4e3);
- ... (115 more removed lines; see GitHub link above)
+     function PW() {
+       return null === EW ? null : {
+         ...EW
+       }
```

#### 14. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1877-L1879` → after: `L101-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L101-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L101-L102) · [Before (L1877-L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L1877-L1879)

```diff
-       let {
-         YR: ie,
-         children: He,
+       var iW;
+       null !== (iW = mW) && void 0 !== iW && iW(WW) && (EW = {
```

#### 15. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1932-L1990` → after: `L107-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L107-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L107-L113) · [Before (L1932-L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L1932-L1990)

```diff
-     function fe(ee) {
-       let {
-         worldCode: ie,
-         message: He
-       } = ee;
-       const {
-         t: fe
-       } = (0, be.v)(), {
-         isTouchScreen: Te
-       } = (0, Ue.m)(["isTouchScreen"]), pe = Ke.featureFlags.canUseInviteLinks, Xe = (0, oe.d)(pe && null === He), [ze, Be] = (0, Je.i)(), Ee = (0, ye.useRef)(null);
-       if (null !== He) return (0, qe.jsxs)("div", {
-         className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
-         children: [(0, qe.jsx)(ke.e, {
-           name: "lock"
-         }), (0, qe.jsx)("span", {
-           children: He
- ... (43 more removed lines; see GitHub link above)
+     function cW() {
+       return "undefined" === typeof location ? null : function(WW) {
+         const iW = new URLSearchParams(WW).get("renderDistanceMax");
+         if (null === iW || !/^\d{1,2}$/.test(iW)) return null;
+         const OW = Number(iW);
+         return OW >= 1 && OW <= 64 ? OW : null
+       }(location.search)
```

#### 16. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L2009-L2018` → after: `L117-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L117-L119) · [Before (L2009-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L2009-L2018)

```diff
-       var He;
-       return {
-         isError: !1,
-         name: ee,
-         ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
-         cosmetics: null !== ie && void 0 !== ie ? ie : {},
-         nameColour: null !== (He = null === ie || void 0 === ie ? void 0 : ie.nameColour) && void 0 !== He ? He : ye.d,
-         location: {
-           status: "offline"
-         }
+       return null === iW ? WW : {
+         horizontal: Math.min(WW.horizontal, iW),
+         vertical: WW.vertical
```

#### 17. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L2022-L2094` → after: `L123-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L123-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L123-L127) · [Before (L2022-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L2022-L2094)

```diff
-     function ke(ee) {
-       let {
-         player: ie,
-         isFriend: He = !1,
-         status: ye,
-         showLocation: Fe = void 0 === ye,
-         YR: Re,
-         onSendFriendRequest: ke,
-         actions: qe,
-         zIndex: fe
-       } = ee;
-       const {
-         t: Te
-       } = (0, be.v)();
-       let pe = ye;
-       null !== Re && void 0 !== Re && Re.on && (pe = (0, oe.jsxs)(oe.Fragment, {
- ... (57 more removed lines; see GitHub link above)
+     function tW(WW, iW) {
+       return null === iW ? WW : wW(null !== WW && void 0 !== WW ? WW : {
+         horizontal: 1 / 0,
+         vertical: 1 / 0
+       }, iW)
```

#### 18. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L2097` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L130) · [Before (L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L2097)

```diff
-   37535: (ee, ie, He) => {
+   42432: (WW, iW, OW) => {
```

#### 19. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L2099-L2101` → after: `L132-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L132-L133) · [Before (L2099-L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L2099-L2101)

```diff
-       d: () => Fe,
-       e: () => Ke,
-       h: () => Je
+       b: () => EW,
+       c: () => NW
```

#### 20. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L2103-L2105` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L135) · [Before (L2103-L2105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L2103-L2105)

```diff
-     var ye = He(59),
-       be = He(4974),
-       Me = He(1913);
+     let mW = null;
```

#### 21. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L2107-L2120` → after: `L137-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L137-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L137-L141) · [Before (L2107-L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L2107-L2120)

```diff
-     function Ke(ee) {
-       const ie = {
-         lobbyName: ee,
-         answer: null,
-         response: be.c.getSocialSettings(ee)
-       };
-       return ie.response.then((ee => {
-         ie.answer = ee
-       })), ie
-     }
-     const Ue = new Map;
- 
-     function Fe(ee) {
-       Ue.set(ee.lobbyName, ee)
+     function EW(WW, iW) {
+       mW = {
+         conn: WW,
+         reason: iW
+       }
```

#### 22. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L2124-L2184` → after: `L145-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L145-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L145-L147) · [Before (L2124-L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L2124-L2184)

```diff
-       const [ie] = (0, ye.useState)((() => function(ee) {
-         var ie;
-         const He = null !== (ie = Ue.get(ee)) && void 0 !== ie ? ie : null;
-         return null !== He && void 0 !== He && He.answer && "error" in He.answer ? null : He
-       }(ee))), [He, Ke] = (0, ye.useState)((() => null !== ie && void 0 !== ie && ie.answer && "settings" in ie.answer ? ie.answer.settings : null)), [Fe, Je] = (0, ye.useState)(!0), [oe, Re] = (0, ye.useState)(null !== He), ke = (0, ye.useRef)(He);
-       ke.current = He;
-       const qe = (0, ye.useRef)(0),
-         fe = (0, ye.useRef)(0),
-         Te = (0, ye.useRef)(!1),
-         pe = (0, ye.useRef)(!0),
-         Xe = (0, ye.useCallback)((async ie => {
-           const He = ++qe.current,
-             ye = await (null !== ie && void 0 !== ie ? ie : be.c.getSocialSettings(ee));
-           pe.current && He === qe.current && (Re(!0), Je(!1), "error" in ye || Ke(ye.settings))
-         }), [ee]),
-         ze = (0, ye.useCallback)((() => {
- ... (45 more removed lines; see GitHub link above)
+       var iW;
+       const OW = (null === (iW = mW) || void 0 === iW ? void 0 : iW.conn) === WW ? mW.reason : null;
+       return mW = null, OW
```

#### 23. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L2187` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L150) · [Before (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L2187)

```diff
-   37570: (ee, ie, He) => {
+   37436: (WW, iW, OW) => {
```

#### 24. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L2189-L2190` → after: `L152-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L152-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L152-L155) · [Before (L2189-L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L2189-L2190)

```diff
-       c: () => Ke,
-       d: () => Me
+       b: () => tW,
+       d: () => cW,
+       f: () => LW,
+       i: () => wW
```

#### 25. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L2192-L2232` → after: `L157-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L157-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L157-L160) · [Before (L2192-L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L2192-L2232)

```diff
-     var ye = He(153);
-     const be = new Map;
- 
-     function Me(ee, ie) {
-       var He;
-       const ye = null !== (He = be.get(ee)) && void 0 !== He ? He : new Map;
-       ye.set(ie, Date.now()), be.set(ee, ye)
-     }
- 
-     function Ke(ee) {
-       const ie = be.get(ee);
-       if (!ie) return [];
-       const He = Date.now();
-       for (const [be, Me] of ie) He - Me >= ye.n && ie.delete(be);
-       return [...ie.keys()]
-     }
- ... (25 more removed lines; see GitHub link above)
+     var mW = OW(2047);
+     let EW = null,
+       NW = 0;
+     const PW = new Set;
```

#### 26. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L2234-L2237` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L162) · [Before (L2234-L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L2234-L2237)

```diff
-     function Me(ee, ie, He) {
-       const be = [],
-         Me = ee.flatMap((ee => "here" === ee.place ? [ee.friend.name] : []));
-       for (const Ke of [...Me, ...ie]) ye(be, Ke) || ye(He, Ke) || be.push(Ke);
+     function LW() {
```

#### 27. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L2241-L2242` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L166-L167) · [Before (L2241-L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L2241-L2242)

```diff
-     function Ke(ee, ie) {
-       return null === ee || void 0 === ee || !ee.canManage || ye(ee.whitelist, ie) ? "none" : "whitelist" === ee.visibility ? "required" : "quiet"
+     function cW() {
+       return NW
```

#### 28. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L2246-L2250` → after: `L171-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L171-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L171-L172) · [Before (L2246-L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L2246-L2250)

```diff
-       if (null === ee) return !0;
-       const {
-         visibility: ie
-       } = ee;
-       return "public" === ie || "unlisted" === ie || "whitelist" === ie && ee.canManage
+       EW = WW, NW++, (0, mW.b)();
+       for (const iW of PW) iW()
```

#### 29. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L2253-L2270` → after: `L175-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L175-L176) · [Before (L2253-L2270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L2253-L2270)

```diff
-     function Fe(ee, ie, He) {
-       if (He) {
-         const He = ie.filter((ie => !ye(ee.whitelist, ie)));
-         return {
-           ...ee,
-           whitelist: [...ee.whitelist, ...He]
-         }
-       }
-       return {
-         ...ee,
-         whitelist: ee.whitelist.filter((ee => !ye(ie, ee)))
-       }
-     }
- 
-     function Je(ee, ie) {
-       const He = [];
- ... (2 more removed lines; see GitHub link above)
+     function tW(WW) {
+       PW.add(WW)
```

#### 30. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L2282` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L179) · [Before (L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L2282)

```diff
-   37838: (ee, ie, He) => {
+   42479: (WW, iW, OW) => {
```

#### 31. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L2286-L2287` → after: `L184-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L184-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L184-L191) · [Before (L2286-L2287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L2286-L2287)

```diff
-     var ye = He(59),
-       be = He(2532);
+     let mW = {
+       fire: () => {},
+       close: () => {}
+     };
+ 
+     function EW(WW) {
+       mW = WW
+     }
```

#### 32. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L2290-L2302` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/246.js#L194) · [Before (L2290-L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/246.js#L2290-L2302)

```diff
-       const ee = (0, be.i)("lobbyLeaderboardInfo");
-       return (0, ye.useMemo)((() => function(ee) {
-         if (null === ee) return null;
-         const ie = Object.entries(ee),
-           He = ie.filter((ee => {
-             let [, ie] = ee;
-             return void 0 !== ie
-           }));
-         if (He.length === ie.length) return ee;
-         const ye = Object.fromEntries(He),
-           be = Object.keys(ee).filter((ee => !Object.hasOwn(ye, ee)));
-         return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${be.join(", ")}`), ye
-       }(ee)), [ee])
+       return mW
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/247.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/247.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f)

#### 1. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/247.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/247.js#L4)

```diff
-   37708: (ee, ie, He) => {
+   37486: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L8-L9` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/247.js#L7) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/247.js#L8-L9)

```diff
-       h: () => de,
-       i: () => fe
+       g: () => xW
```

#### 3. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L11-L74` → after: `L9-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L9-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/247.js#L9-L23) · [Before (L11-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/247.js#L11-L74)

```diff
-     var ye = He(1053),
-       be = He.n(ye),
-       Me = He(59),
-       Ke = He(77),
-       Ue = He(1359),
-       Fe = He(1438),
-       Je = He(1351),
-       oe = He(1215),
-       Re = He(1127),
-       ke = He(37716),
-       qe = He(1228);
- 
-     function fe(ee) {
-       const [ie, He] = (0, Me.useState)((() => (0, ke.n)(ee)));
-       return (0, Me.useEffect)((() => (He((0, ke.n)(ee)), (0, ke.N)((() => {
-         He((0, ke.n)(ee))
- ... (48 more removed lines; see GitHub link above)
+     var mW = OW(62),
+       EW = OW(1422),
+       NW = OW(1172),
+       PW = OW(1383),
+       LW = OW(4718),
+       cW = OW(5686),
+       wW = OW(1283);
+ 
+     function tW(WW) {
+       let {
+         loading: iW,
+         schematics: OW,
+         onSchematicPicked: mW,
+         selectedSchematicIdList: EW = [],
+         disableAutoExport: cW
```

#### 4. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L78` → after: `L27-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L27-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/247.js#L27-L206) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/247.js#L78)

```diff
-       } = (0, Re.v)(), Ue = Xe(ie, He);
+       } = (0, NW.B)();
+       return (0, wW.jsxs)("div", {
+         className: "SchematicList",
+         children: [iW && (0, wW.jsx)(PW.d, {}), !iW && 0 === OW.length && (0, wW.jsx)("div", {
+           className: "NoSchematicsText",
+           children: tW("worldBuilder:noSavedSchematic")
+         }), !iW && OW.map((WW => (0, wW.jsx)(LW.d, {
+           source: {
+             type: "schematic",
+             schematic: WW
+           },
+           gameWidth: "25%",
+           useLongRatio: !0,
+           onClick: () => {
+             mW(WW)
+           },
+ ... (164 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L80-L81` → after: `L208-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L208-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/247.js#L208-L342) · [Before (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/247.js#L80-L81)

```diff
-         children: [(0, qe.jsx)("div", {
-           className: "TutorialStepText",
+         children: [(0, jW.jsx)("h1", {
+           className: "SchematicPopupTitle",
+           children: NW("worldBuilder:loadSchematic")
+         }), (0, jW.jsx)("h2", {
+           className: "SchematicPopupSubtitle",
+           children: NW("worldBuilder:chooseOneOfYourSchematics")
+         }), (0, jW.jsx)("div", {
+           className: "SchematicPopupSchematicListContainer",
+           children: (0, jW.jsx)(PW.d, {
+             schematics: iW,
+             onSchematicPicked: WW => {
+               mW(WW.schematicId), OW()
+             },
+             loading: !1,
+             disableAutoExport: !0
+           })
+ ... (119 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L84-L86` → after: `L358-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L358-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/247.js#L358-L378) · [Before (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/247.js#L84-L86)

```diff
-           className: "TutorialStepButtons",
-           children: [(0, ke.y)(ie, He) && (0, qe.jsx)(Fe.e, {
-             className: "TutorialStepButton",
+           className: wW()("SaveSchematicCheckboxContainer", {
+             WarningBorder: "existing" === iW
+           }),
+           children: [(0, jW.jsx)(KW.e, {
+             checked: kW,
+             onChange: WW => {
+               sW(WW.target.checked)
+             },
+             disabled: !1,
+             className: "SaveSchematicCheckbox"
+           }), (0, jW.jsx)("h1", {
+             className: "SchematicPopupSubtitle",
+             children: PW("existing" === iW ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
+           })]
+         }), "existing" === iW && (0, jW.jsx)("div", {
+           className: "SaveSchematicLobbyCodeWarning",
+ ... (5 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L88` → after: `L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/247.js#L380) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/247.js#L88)

```diff
-               null === Me || void 0 === Me || Me(), (0, ke.u)(ie, He)
+               YW() && EW(kW, LW, ZW)
```

#### 8. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L90-L103` → after: `L382-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L382-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/247.js#L382-L386) · [Before (L90-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/247.js#L90-L103)

```diff
-             children: Ke("tutorial:back")
-           }), !be && (0, qe.jsx)(Fe.c, {
-             className: "TutorialStepButton",
-             onClick: () => {
-               (0, ke.f)(He)
-             },
-             padDefaultFocus: !0,
-             children: Ke(Ue ? "tutorial:done" : "tutorial:next")
-           }), !Ue && (0, qe.jsx)(Fe.e, {
-             className: "TutorialStepButton",
-             onClick: () => {
-               (0, ke.l)(ie)
-             },
-             children: Ke("tutorial:skip")
+             children: PW("file" === iW ? "general:download" : "general:save")
+           }), (0, jW.jsx)(xW.O, {
+             className: "SaveSchematicButton",
+             onClick: NW,
+             children: PW("general:cancel")
```

#### 9. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L108-L126` → after: `L391-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L391-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/247.js#L391-L471) · [Before (L108-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/247.js#L108-L126)

```diff
-     const Ee = 6;
- 
-     function ge(ee) {
-       let {
-         rect: ie,
-         margin: He
-       } = ee;
-       const ye = Math.max(0, ie.top - He),
-         be = ie.bottom + He,
-         Me = Math.max(0, ie.left - He),
-         Ke = ie.right + He;
-       return (0, qe.jsxs)(qe.Fragment, {
-         children: [(0, qe.jsx)("div", {
-           className: "TutorialSpotlightBackdrop",
-           style: {
-             top: 0,
- ... (3 more removed lines; see GitHub link above)
+     var TW = OW(1185),
+       JW = OW(1856),
+       hW = OW(1111);
+ 
+     function HW(WW, iW) {
+       if ("devDownloadJson" !== WW) ! function(WW, iW) {
+         const OW = TW.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, NW.d)().websocketUrl);
+         let LW = !1;
+         const cW = async (WW, iW) => {
+           if (LW) return;
+           LW = !0;
+           const {
+             gameNameWithVariation: mW,
+             lobbyName: PW
+           } = (0, NW.d)(), cW = {
+             gameNameWithVariation: mW,
+ ... (65 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L128-L134` → after: `L473-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L473-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/247.js#L473-L514) · [Before (L128-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/247.js#L128-L134)

```diff
-         }), (0, qe.jsx)("div", {
-           className: "TutorialSpotlightBackdrop",
-           style: {
-             top: be,
-             left: 0,
-             right: 0,
-             bottom: 0
+         });
+         else if ("Plugin|WorldBuilder|LoadSchematic" === WW) ! function(WW) {
+           let {
+             ownedSchematics: iW,
+             onChosenFile: OW,
+             onChosenPreset: mW,
+             onClose: EW
+           } = WW;
+           ZW.NotificationProvider.showCustomPopup({
+             body: WW => (0, jW.jsx)(kW, {
+               ownedSchematics: iW,
+               onChosenFile: OW,
+               onChosenPreset: mW,
+               onClose: WW
+             }),
+             middleScreenPopupClassName: "SchematicPopup",
+ ... (26 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L136-L142` → after: `L516-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L516-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/247.js#L516-L521) · [Before (L136-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/247.js#L136-L142)

```diff
-         }), (0, qe.jsx)("div", {
-           className: "TutorialSpotlightBackdrop",
-           style: {
-             top: ye,
-             left: 0,
-             width: Me,
-             height: be - ye
+         });
+         else if ("Plugin|WorldBuilder|ListSchematics" === WW)(0, PW.g)({
+           ownedSchematics: Array.isArray(iW) ? iW : iW.schematics,
+           currentWorldSchematicId: Array.isArray(iW) ? null : iW.currentWorldSchematicId,
+           onClose: () => {
+             cW("cancel", {})
```

#### 12. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L144-L196` → after: `L523-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L523-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/247.js#L523-L534) · [Before (L144-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/247.js#L144-L196)

```diff
-         }), (0, qe.jsx)("div", {
-           className: "TutorialSpotlightBackdrop",
-           style: {
-             top: ye,
-             left: Ke,
-             right: 0,
-             height: be - ye
-           }
-         })]
-       })
-     }
- 
-     function Oe(ee) {
-       let {
-         target: ie,
-         placement: He,
- ... (37 more removed lines; see GitHub link above)
+         });
+         else if ("Plugin|WorldBuilder|ExportWorld" === WW) {
+           var wW;
+           const WW = null !== (wW = iW.schematic) && void 0 !== wW ? wW : iW;
+           (0, sW.j)({
+             schematic: WW,
+             inSourceWorld: WW.schematicId === iW.currentWorldSchematicId,
+             onClose: () => {
+               cW("cancel", {})
+             }
+           })
+         } else console.error(`Unknown plugin message type ${WW}`)
```

#### 13. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L198-L584` → after: `L536-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L536-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/247.js#L536-L540) · [Before (L198-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/247.js#L198-L584)

```diff
-       (0, Me.useEffect)((() => {
-         null === ze || void 0 === ze || ze()
-       }), [Be, ze]), (0, Me.useEffect)((() => {
-         if (oe || !ie || !ze) return;
-         const ee = new ResizeObserver((() => {
-           ze()
-         }));
-         return ee.observe(ie), ie.parentElement && ee.observe(ie.parentElement), () => {
-           ee.disconnect()
-         }
-       }), [ie, oe, ze]), (0, Me.useEffect)((() => {
-         oe && (null === ie || void 0 === ie || ie.scrollIntoView({
-           block: "nearest",
-           inline: "nearest"
-         }))
-       }), [ie, oe]);
- ... (371 more removed lines; see GitHub link above)
+       else {
+         const WW = JSON.stringify(iW.data, null, 2);
+         (0, JW.downloadBlob)(new Blob([WW], {
+           type: "application/json"
+         }), iW.filename)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/248.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/248.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6)

#### 1. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L2)

```diff
- export const ids = [248];
+ export const ids = [60, 248];
```

#### 2. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4-L153` → after: `L4-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L4-L32) · [Before (L4-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L4-L153)

```diff
-   37464: ee => {
-     ee.exports = {
-       aliceblue: [240, 248, 255],
-       antiquewhite: [250, 235, 215],
-       aqua: [0, 255, 255],
-       aquamarine: [127, 255, 212],
-       azure: [240, 255, 255],
-       beige: [245, 245, 220],
-       bisque: [255, 228, 196],
-       black: [0, 0, 0],
-       blanchedalmond: [255, 235, 205],
-       blue: [0, 0, 255],
-       blueviolet: [138, 43, 226],
-       brown: [165, 42, 42],
-       burlywood: [222, 184, 135],
-       cadetblue: [95, 158, 160],
- ... (134 more removed lines; see GitHub link above)
+   39780: (WW, iW, OW) => {
+     var mW = {
+       "./combat_1.png": 39785,
+       "./dungeon_crumbling_crypt.png": 39793,
+       "./dungeon_frozen_hollow.png": 39795,
+       "./dungeon_wildwood_grove.png": 39803,
+       "./dungeons.png": 39808,
+       "./farming_1.png": 39811,
+       "./fishing_1.png": 39819,
+       "./hub.png": 39823,
+       "./island.png": 39828,
+       "./mining_1.png": 39830,
+       "./mining_1_bridge.png": 39839,
+       "./mining_1_gallery.png": 39848,
+       "./mining_1_hollow.png": 39857,
+       "./mining_1_village.png": 39863
+ ... (13 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L156-L165` → after: `L38-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L38-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L38-L43) · [Before (L156-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L156-L165)

```diff
-   37459: (ee, ie, He) => {
-     var ye = He(37464),
-       be = He(37471),
-       Me = Object.hasOwnProperty,
-       Ke = Object.create(null);
-     for (var Ue in ye) Me.call(ye, Ue) && (Ke[ye[Ue]] = Ue);
-     var Fe = ee.exports = {
-       to: {},
-       get: {}
-     };
+   39881: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => EW,
+       h: () => NW
+     });
+     const mW = new WeakMap;
```

#### 4. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L167-L168` → after: `L45-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L45-L46) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L167-L168)

```diff
-     function Je(ee, ie, He) {
-       return Math.min(Math.max(ie, ee), He)
+     function EW(WW, iW) {
+       return mW.set(WW, iW), WW
```

#### 5. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L172-L173` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L50-L51) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L172-L173)

```diff
-       var ie = Math.round(ee).toString(16).toUpperCase();
-       return ie.length < 2 ? "0" + ie : ie
+       var iW;
+       return null !== (iW = mW.get(WW)) && void 0 !== iW ? iW : null
```

#### 6. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L175-L218` → after: `L53-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L53-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L53-L66) · [Before (L175-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L175-L218)

```diff
-     Fe.get = function(ee) {
-       var ie, He;
-       switch (ee.substring(0, 3).toLowerCase()) {
-         case "hsl":
-           ie = Fe.get.hsl(ee), He = "hsl";
-           break;
-         case "hwb":
-           ie = Fe.get.hwb(ee), He = "hwb";
-           break;
-         default:
-           ie = Fe.get.rgb(ee), He = "rgb"
-       }
-       return ie ? {
-         model: He,
-         value: ie
-       } : null
- ... (28 more removed lines; see GitHub link above)
+   },
+   39733: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => mW
+     });
+     class mW {
+       constructor(WW, iW, OW) {
+         this.iZ = WW, this.beforeOpen = iW, this.afterClose = OW, this.open = !1, this.JA = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
+           this.isEnabled() && !this.JA && (this.open = !0, this.beforeOpen(this), this.emit())
+         }, this.close = () => {
+           this.closePanel(!1)
+         }, this.dismiss = () => {
+           this.closePanel(!0)
+         }
```

#### 7. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L220-L226` → after: `L68-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L68-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L68-L85) · [Before (L220-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L220-L226)

```diff
-       return null
-     }, Fe.get.hwb = function(ee) {
-       if (!ee) return null;
-       var ie = ee.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
-       if (ie) {
-         var He = parseFloat(ie[4]);
-         return [(parseFloat(ie[1]) % 360 + 360) % 360, Je(parseFloat(ie[2]), 0, 100), Je(parseFloat(ie[3]), 0, 100), Je(isNaN(He) ? 1 : He, 0, 1)]
+       isOpen() {
+         return this.open
+       }
+       showOrRefresh() {
+         this.open ? this.emit() : this.show()
+       }
+       closePanel(WW) {
+         this.open = !1, this.onClosed(), this.emit(), this.afterClose(WW)
+       }
+       onClosed() {}
+       dispose() {
+         this.open = !1, this.emit(), this.JA = !0
+       }
+       isEnabled() {
+         return !0
+       }
+ ... (2 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L252-L258` → after: `L89-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L89-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L89-L96) · [Before (L252-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L252-L258)

```diff
-   37454: (ee, ie, He) => {
-     const ye = He(37459),
-       be = He(37482),
-       Me = ["keyword", "gray", "hex"],
-       Ke = {};
-     for (const qe of Object.keys(be)) Ke[[...be[qe].labels].sort().join("")] = qe;
-     const Ue = {};
+   39894: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       SkyblockEntityFacing: () => LW,
+       needsSkyblockEntityFacing: () => PW
+     });
+     var mW = OW(639),
+       EW = OW(2937),
+       NW = OW(39897);
```

#### 9. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L261-L281` → after: `L99-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L99-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L99-L121) · [Before (L261-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L261-L281)

```diff
-       if (!(this instanceof Fe)) return new Fe(ee, ie);
-       if (ie && ie in Me && (ie = null), ie && !(ie in be)) throw new Error("Unknown model: " + ie);
-       let He, Je;
-       if (null == ee) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
-       else if (ee instanceof Fe) this.model = ee.model, this.color = [...ee.color], this.valpha = ee.valpha;
-       else if ("string" === typeof ee) {
-         const ie = ye.get(ee);
-         if (null === ie) throw new Error("Unable to parse color from string: " + ee);
-         this.model = ie.model, Je = be[this.model].channels, this.color = ie.value.slice(0, Je), this.valpha = "number" === typeof ie.value[Je] ? ie.value[Je] : 1
-       } else if (ee.length > 0) {
-         this.model = ie || "rgb", Je = be[this.model].channels;
-         const He = Array.prototype.slice.call(ee, 0, Je);
-         this.color = ke(He, Je), this.valpha = "number" === typeof ee[Je] ? ee[Je] : 1
-       } else if ("number" === typeof ee) this.model = "rgb", this.color = [ee >> 16 & 255, ee >> 8 & 255, 255 & ee], this.valpha = 1;
-       else {
-         this.valpha = 1;
- ... (5 more removed lines; see GitHub link above)
+       if (WW.metaInfo === mW.d || "Iron Guardian" === WW.type || "Gold Guardian" === WW.type) return !0;
+       if ("Pig" === WW.type) return "sitting" === WW.pose;
+       if ("Person" !== WW.meshKind || void 0 === WW.meshOpts) return !1;
+       let OW = null === iW || void 0 === iW ? void 0 : iW.get(WW.meshOpts);
+       if (void 0 === OW) {
+         var NW, PW;
+         const mW = (0, EW.h)(WW);
+         OW = !1, "pig_napoleon" === (null === mW || void 0 === mW || null === (NW = mW.opts.textures) || void 0 === NW ? void 0 : NW.head) ? OW = !0 : "npc_pig_head" === (null === mW || void 0 === mW || null === (PW = mW.opts.textures) || void 0 === PW ? void 0 : PW.head) && (OW  … [truncated]
+       }
+       return "sitting" === OW ? "sitting" === WW.pose : OW
+     }(0, NW.e)("skyblock", ((WW, iW) => {
+       iW.setFacingTolerance(PW(WW) ? 0 : null)
+     }));
+     class LW {
+       constructor(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+ ... (7 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L283-L286` → after: `L123-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L123-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L123-L280) · [Before (L283-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L283-L286)

```diff
-           labels: Me
-         } = be[this.model], Ue = [];
-         for (He = 0; He < Me.length; He++) Ue.push(ee[Me[He]]);
-         this.color = ke(Ue)
+           api: WW
+         } = this, iW = this.nextFacing;
+         WW.forEachEntity(this.visit);
+         for (const OW of this.facing) iW.has(OW) || WW.setFacingTolerance(OW, null);
+         this.facing.clear(), this.nextFacing = this.facing, this.facing = iW
+       }
+       dispose() {
+         for (const WW of this.facing) this.api.setFacingTolerance(WW, null);
+         this.facing.clear(), this.meshFacingCache.clear()
+       }
+     }
+   },
+   39715: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => nL
+     });
+ ... (142 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L288-L291` → after: `L282-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L282-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L282-L323) · [Before (L288-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L288-L291)

```diff
-       if (Ue[this.model])
-         for (Je = be[this.model].channels, He = 0; He < Je; He++) {
-           const ee = Ue[this.model][He];
-           ee && (this.color[He] = ee(this.color[He]))
+       getEntities() {
+         return this.entities
+       }
+       setTranslator(WW) {
+         this.translate = WW, this.emit()
+       }
+       yZ(WW) {
+         var iW;
+         if (!this.JA)
+           if ("entities" !== WW.kind)
+             if ("open" !== WW.kind) {
+               var OW, mW;
+               if ("snapshot" === WW.kind)(null === (OW = WW.snapshot) || void 0 === OW ? void 0 : OW.zoneId) !== (null === (mW = this.map) || void 0 === mW ? void 0 : mW.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = WW.snapshot, !this.map && this.open && thi … [truncated]
+               else if ("travelQueued" === WW.kind) {
+                 var EW;
+                 WW.requestId === (null === (EW = this.pending) || void 0 === EW ? void 0 : EW.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
+ ... (26 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L293` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L325) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L293)

```diff
-       this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this)
+       }
```

#### 13. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L295-L384` → after: `L327-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L327-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L327-L386) · [Before (L295-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L295-L384)

```diff
-     Fe.prototype = {
-       toString() {
-         return this.string()
-       },
-       toJSON() {
-         return this[this.model]()
-       },
-       string(ee) {
-         let ie = this.model in ye.to ? this : this.rgb();
-         ie = ie.round("number" === typeof ee ? ee : 1);
-         const He = 1 === ie.valpha ? ie.color : [...ie.color, this.valpha];
-         return ye.to[ie.model](He)
-       },
-       percentString(ee) {
-         const ie = this.rgb().round("number" === typeof ee ? ee : 1),
-           He = 1 === ie.valpha ? ie.color : [...ie.color, this.valpha];
- ... (74 more removed lines; see GitHub link above)
+     var ZW = OW(344);
+     const xW = 67.5 * Math.PI / 180;
+ 
+     function lW(WW, iW) {
+       const OW = Math.abs(WW);
+       if (OW > xW || iW.trackHalfWidth <= 0) return null;
+       const mW = iW.trackHalfWidth,
+         EW = iW.screenHalfWidth / (iW.tanHalfFovX * Math.max(.5, Math.cos(iW.pitch))),
+         NW = Math.min(Math.atan(.6 * mW / EW), .75 * xW),
+         PW = EW * Math.tan(NW);
+       let LW;
+       if (OW <= NW) LW = EW * Math.tan(OW);
+       else {
+         const WW = xW - NW,
+           iW = Math.max(0, EW * WW / (Math.cos(NW) ** 2 * (mW - PW)) - 1),
+           cW = (OW - NW) / WW;
+ ... (44 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L460-L474` → after: `L390-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L390-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L390-L407) · [Before (L460-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L460-L474)

```diff
-     };
-     for (const qe of Object.keys(be)) {
-       if (Me.includes(qe)) continue;
-       const {
-         channels: ee
-       } = be[qe];
-       Fe.prototype[qe] = function() {
-         if (this.model === qe) return new Fe(this);
-         for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
-         return ie.length > 0 ? new Fe(ie, qe) : new Fe([...(ye = be[this.model][qe].raw(this.color), Array.isArray(ye) ? ye : [ye]), this.valpha], qe);
-         var ye
-       }, Fe[qe] = function() {
-         for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
-         let be = He[0];
-         return "number" === typeof be && (be = ke(He, ee)), new Fe(be, qe)
+     }
+     class jW {
+       constructor(WW) {
+         this.map = WW, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
+       }
+       getPoints() {
+         const WW = this.map.getSnapshot().map;
+         return !WW || WW.insideDungeon ? [] : WW.portals.map((WW => {
+           var iW;
+           return {
+             id: "portal:" + WW.id,
+             kind: "portal",
+             position: WW.position,
+             nameKey: null !== (iW = WW.nameKey) && void 0 !== iW ? iW : "skyblockGame:compassUnvisitedZone",
+             icon: WW.visited ? "dungeons" === WW.destination ? "portal_orange" : "portal" : "unknown",
+             colour: WW.colour
+ ... (2 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L477-L482` → after: `L410-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L410-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L410-L422) · [Before (L477-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L477-L482)

```diff
- 
-     function Je(ee) {
-       return function(ie) {
-         return function(ee, ie) {
-           return Number(ee.toFixed(ie))
-         }(ie, ee)
+     class UW {
+       constructor(WW) {
+         this.target = WW, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
+       }
+       getPoints() {
+         const WW = this.target();
+         return WW ? [{
+           id: "quest",
+           kind: "quest",
+           icon: "quest",
+           position: WW.position,
+           nameKey: WW.nameKey
+         }] : []
```

#### 16. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L487-L492` → after: `L427-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L427-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L427-L604) · [Before (L487-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L487-L492)

```diff
-       ee = Array.isArray(ee) ? ee : [ee];
-       for (const ye of ee)(Ue[ye] || (Ue[ye] = []))[ie] = He;
-       return ee = ee[0],
-         function(ye) {
-           let be;
-           return void 0 !== ye ? (He && (ye = He(ye)), be = this[ee](), be.color[ie] = ye, be) : (be = this[ee]().color[ie], He && (be = He(be)), be)
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.position;
+       const EW = mW[0] - iW[0],
+         NW = mW[2] - iW[2];
+       return {
+         ...WW,
+         position: mW,
+         offset: ZW.e.computeShortestRotation(OW, (0, ZW.Ab)([EW, 0, NW])),
+         distance: Math.hypot(EW, mW[1] - iW[1], NW)
+       }
+     }
+     let sW;
+ 
+     function MW(WW, iW) {
+       var OW;
+       return (null === (OW = sW) || void 0 === OW ? void 0 : OW.locale) !== iW && (sW = {
+         locale: iW,
+ ... (162 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L497-L498` → after: `L673-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L673-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L673-L701) · [Before (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L497-L498)

```diff
-       return function(ie) {
-         return Math.max(0, Math.min(ee, ie))
+       return Math.round(10 * WW) / 10
+     }
+ 
+     function Ei(WW, iW) {
+       switch (WW) {
+         case "foraging":
+           return {
+             translationKey: "skyblockGame:foragingBenefit", percent: mi(100 * (FW(iW) - 1))
+           };
+         case "combat":
+           return {
+             translationKey: "skyblockGame:combatBenefit", percent: mi(100 * (zW(iW) - 1))
+           };
+         case "mining":
+           return {
+             translationKey: "skyblockGame:miningBenefit", percent: mi(100 * (QW(iW) - 1))
+ ... (13 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L503-L504` → after: `L710-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L710-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L710-L721) · [Before (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L503-L504)

```diff
-       for (let He = 0; He < ie; He++) "number" !== typeof ee[He] && (ee[He] = 0);
-       return ee
+       if (!Number.isSafeInteger(WW) || WW < 0) throw new Error("Skill XP must be a non-negative safe integer");
+       const OW = Ni(iW),
+         mW = WW => function(WW, iW) {
+           return Ni(WW) * iW * (iW + 1) / 2
+         }(iW, WW);
+       let EW = Math.min(aW, Math.floor((Math.sqrt(8 * WW / OW + 1) - 1) / 2));
+       return EW < aW && mW(EW + 1) <= WW ? EW++ : mW(EW) > WW && EW--, {
+         totalXp: WW,
+         level: EW,
+         xpIntoLevel: WW - mW(EW),
+         xpForNextLevel: EW === aW ? null : OW * (EW + 1)
+       }
```

#### 19. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L506-L511` → after: `L723-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L723-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L723-L733) · [Before (L506-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L506-L511)

```diff
-     ee.exports = Fe
-   },
-   37486: (ee, ie, He) => {
-     const ye = He(37495),
-       be = {};
-     for (const Ke of Object.keys(ye)) be[ye[Ke]] = Ke;
+     const Li = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);
+ 
+     function ci(WW) {
+       return Li.has(WW)
+     }
+     const wi = new Set(ZW.mb);
+ 
+     function ti(WW) {
+       return wi.has(WW)
+     }
+     new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato  … [truncated]
```

#### 20. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L513-L551` → after: `L735-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L735-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L735-L745) · [Before (L513-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L513-L551)

```diff
-       rgb: {
-         channels: 3,
-         labels: "rgb"
-       },
-       hsl: {
-         channels: 3,
-         labels: "hsl"
-       },
-       hsv: {
-         channels: 3,
-         labels: "hsv"
-       },
-       hwb: {
-         channels: 3,
-         labels: "hwb"
-       },
- ... (23 more removed lines; see GitHub link above)
+         "Maple Log": 10,
+         "Pine Log": 10,
+         "Plum Log": 10,
+         "Cedar Log": 10,
+         "Aspen Log": 10,
+         "Jungle Log": 10,
+         "Palm Log": 10,
+         "Pear Log": 10,
+         "Cherry Log": 10,
+         "Spectral Log": 10,
+         "Mango Log": 10
```

#### 21. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L553-L555` → after: `L747-L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L747-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L747-L758) · [Before (L553-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L553-L555)

```diff
-       ansi16: {
-         channels: 1,
-         labels: ["ansi16"]
+       xi = {
+         Stone: 2,
+         Diorite: 18,
+         Granite: 18,
+         Andesite: 18,
+         "Coal Ore": 10,
+         "Iron Ore": 15,
+         "Gold Ore": 20,
+         "Diamond Ore": 30,
+         "Moonstone Ore": 40,
+         "Block of Coal": 15,
+         "Block of Gold": 30
```

#### 22. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L557-L559` → after: `L760-L765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L760-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L760-L765) · [Before (L557-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L557-L559)

```diff
-       ansi256: {
-         channels: 1,
-         labels: ["ansi256"]
+       li = {
+         ...xi,
+         ...Object.fromEntries(Object.entries(pW).map((WW => {
+           let [iW, OW] = WW;
+           return [iW, 9 * xi[OW]]
+         })))
```

#### 23. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L561-L563` → after: `L767-L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L767-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L767-L786) · [Before (L561-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L561-L563)

```diff
-       hcg: {
-         channels: 3,
-         labels: ["h", "c", "g"]
+       Ai = {
+         Watermelon: 10,
+         Melon: 10,
+         "Wheat|FreshlyGrown": 10,
+         "Rice|FreshlyGrown": 10,
+         "Corn Plant|FreshlyGrown": 10,
+         "Chili Pepper Plant|FreshlyGrown": 10,
+         "Chili Pepper Plant|Lava|FreshlyGrown": 10,
+         "Tomato Plant|FreshlyGrown": 10,
+         "Tomato Plant|Top|FreshlyGrown": 10,
+         "Carrot Plant|FreshlyGrown": 10,
+         "Potato Plant|FreshlyGrown": 10,
+         "Sugar Cane Plant|FreshlyGrown": 10,
+         "Sugar Cane Plant|Top|FreshlyGrown": 10,
+         "Coffee Plant|FreshlyGrown": 10,
+         "Lettuce Plant|FreshlyGrown": 10,
+ ... (4 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L565-L567` → after: `L788-L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L788-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L788-L858) · [Before (L565-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L565-L567)

```diff
-       apple: {
-         channels: 3,
-         labels: ["r16", "g16", "b16"]
+       bi = {
+         Wheatfish: 25,
+         Darter: 25,
+         "Sunset Minnow": 25,
+         "Root Flounder": 25,
+         "Greenfin Loach": 25,
+         "Red Strongfish": 30,
+         "Green Strongfish": 30,
+         "Boomerang Fish": 30,
+         Seahorse: 30,
+         "Spined Stickleback": 30,
+         "Moon Strongfish": 40,
+         "Boulder Bass": 40,
+         "Grass Snapper": 40,
+         "Crystalized Wheatfish": 55,
+         "Moonstone Pupfish": 55,
+ ... (55 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L569-L587` → after: `L860-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L860-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L860-L870) · [Before (L569-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L569-L587)

```diff
-       gray: {
-         channels: 1,
-         labels: ["gray"]
-       }
-     };
-     ee.exports = Me;
-     for (const Ke of Object.keys(Me)) {
-       if (!("channels" in Me[Ke])) throw new Error("missing channels property: " + Ke);
-       if (!("labels" in Me[Ke])) throw new Error("missing channel labels property: " + Ke);
-       if (Me[Ke].labels.length !== Me[Ke].channels) throw new Error("channel and label counts mismatch: " + Ke);
-       const {
-         channels: ee,
-         labels: ie
-       } = Me[Ke];
-       delete Me[Ke].channels, delete Me[Ke].labels, Object.defineProperty(Me[Ke], "channels", {
-         value: ee
- ... (3 more removed lines; see GitHub link above)
+       Ui = {
+         foraging: [80, 220, 100],
+         combat: [240, 70, 70],
+         mining: [60, 220, 240],
+         farming: [245, 220, 60],
+         fishing: [70, 120, 245],
+         exploration: [255, 180, 70]
+       };
+ 
+     function ki(WW) {
+       return `rgb(${Ui[WW].join(", ")})`
```

#### 26. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L589-L608` → after: `L872-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L872-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L872-L992) · [Before (L589-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L589-L608)

```diff
-     Me.rgb.hsl = function(ee) {
-       const ie = ee[0] / 255,
-         He = ee[1] / 255,
-         ye = ee[2] / 255,
-         be = Math.min(ie, He, ye),
-         Me = Math.max(ie, He, ye),
-         Ke = Me - be;
-       let Ue, Fe;
-       Me === be ? Ue = 0 : ie === Me ? Ue = (He - ye) / Ke : He === Me ? Ue = 2 + (ye - ie) / Ke : ye === Me && (Ue = 4 + (ie - He) / Ke), Ue = Math.min(60 * Ue, 360), Ue < 0 && (Ue += 360);
-       const Je = (be + Me) / 2;
-       return Fe = Me === be ? 0 : Je <= .5 ? Ke / (Me + be) : Ke / (2 - Me - be), [Ue, 100 * Fe, 100 * Je]
-     }, Me.rgb.hsv = function(ee) {
-       let ie, He, ye, be, Me;
-       const Ke = ee[0] / 255,
-         Ue = ee[1] / 255,
-         Fe = ee[2] / 255,
- ... (4 more removed lines; see GitHub link above)
+ 
+     function si(WW, iW, OW) {
+       if (!OW) return WW(iW);
+       const mW = {};
+       for (const [EW, NW] of Object.entries(OW)) mW[EW] = "string" === typeof NW ? NW : WW(NW.translationKey);
+       return WW(iW, mW)
+     }
+     class Mi {
+       constructor(WW, iW) {
+         this.now = WW, this.getJournal = iW, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.BL = !1, this.onShown = () => {}
+       }
+       enqueue(WW) {
+         const iW = Ki(WW);
+         if (iW) this.pending.push(WW);
+         else {
+           const iW = this.pending.findIndex(Ki);
+ ... (105 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L610-L631` → after: `L994-L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L994-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L994-L1007) · [Before (L610-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L610-L631)

```diff
-       return 0 === oe ? (be = 0, Me = 0) : (Me = oe / Je, ie = Re(Ke), He = Re(Ue), ye = Re(Fe), Ke === Je ? be = ye - He : Ue === Je ? be = 1 / 3 + ie - ye : Fe === Je && (be = 2 / 3 + He - ie), be < 0 ? be += 1 : be > 1 && (be -= 1)), [360 * be, 100 * Me, 100 * Je]
-     }, Me.rgb.hwb = function(ee) {
-       const ie = ee[0],
-         He = ee[1];
-       let ye = ee[2];
-       const be = Me.rgb.hsl(ee)[0],
-         Ke = 1 / 255 * Math.min(ie, Math.min(He, ye));
-       return ye = 1 - 1 / 255 * Math.max(ie, Math.max(He, ye)), [be, 100 * Ke, 100 * ye]
-     }, Me.rgb.cmyk = function(ee) {
-       const ie = ee[0] / 255,
-         He = ee[1] / 255,
-         ye = ee[2] / 255,
-         be = Math.min(1 - ie, 1 - He, 1 - ye);
-       return [100 * ((1 - ie - be) / (1 - be) || 0), 100 * ((1 - He - be) / (1 - be) || 0), 100 * ((1 - ye - be) / (1 - be) || 0), 100 * be]
-     }, Me.rgb.keyword = function(ee) {
-       const ie = be[ee];
- ... (6 more removed lines; see GitHub link above)
+         for (const [wW, tW] of Object.entries(PW)) cW[wW] = iW(tW);
+         return {
+           token: this.token,
+           kind: "npcNote",
+           phase: "completion",
+           title: iW(mW),
+           name: OW(EW, cW),
+           description: null,
+           reward: null,
+           iconItem: LW,
+           accent: null,
+           durationMs: this.expiresAt - this.shownAt,
+           waypointNameKey: null
+         }
```

#### 28. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L633-L795` → after: `L1009-L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1009-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L1009-L1053) · [Before (L633-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L633-L795)

```diff
-       var Ke, Ue;
-       return He
-     }, Me.keyword.rgb = function(ee) {
-       return ye[ee]
-     }, Me.rgb.xyz = function(ee) {
-       let ie = ee[0] / 255,
-         He = ee[1] / 255,
-         ye = ee[2] / 255;
-       ie = ie > .04045 ? ((ie + .055) / 1.055) ** 2.4 : ie / 12.92, He = He > .04045 ? ((He + .055) / 1.055) ** 2.4 : He / 12.92, ye = ye > .04045 ? ((ye + .055) / 1.055) ** 2.4 : ye / 12.92;
-       return [100 * (.4124 * ie + .3576 * He + .1805 * ye), 100 * (.2126 * ie + .7152 * He + .0722 * ye), 100 * (.0193 * ie + .1192 * He + .9505 * ye)]
-     }, Me.rgb.lab = function(ee) {
-       const ie = Me.rgb.xyz(ee);
-       let He = ie[0],
-         ye = ie[1],
-         be = ie[2];
-       He /= 95.047, ye /= 100, be /= 108.883, He = He > .008856 ? He ** (1 / 3) : 7.787 * He + 16 / 116, ye = ye > .008856 ? ye ** (1 / 3) : 7.787 * ye + 16 / 116, be = be > .008856 ? be ** (1 / 3) : 7.787 * be + 16 / 116;
- ... (147 more removed lines; see GitHub link above)
+       durationMs() {
+         var WW;
+         if (null !== this.followUp) return 5600;
+         switch (null === (WW = this.current) || void 0 === WW ? void 0 : WW.questCompletionKind) {
+           case "quest":
+             return 4800;
+           case "started":
+             return 4e3;
+           case "skillLevel":
+             return 3e3;
+           case "landmark":
+             return 3500;
+           case "npcNote":
+             return 8e3;
+           default:
+             return 2400
+ ... (29 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L943-L961` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L1058) · [Before (L943-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L943-L961)

```diff
-       const ie = function() {
-           const ee = {},
-             ie = Object.keys(ye);
-           for (let He = ie.length, ye = 0; ye < He; ye++) ee[ie[ye]] = {
-             distance: -1,
-             parent: null
-           };
-           return ee
-         }(),
-         He = [ee];
-       for (ie[ee].distance = 0; He.length;) {
-         const ee = He.pop(),
-           be = Object.keys(ye[ee]);
-         for (let ye = be.length, Me = 0; Me < ye; Me++) {
-           const ye = be[Me],
-             Ke = ie[ye]; - 1 === Ke.distance && (Ke.distance = ie[ee].distance + 1, Ke.parent = ee, He.unshift(ye))
- ... (3 more removed lines; see GitHub link above)
+       return Si(WW.questCompletionKind)
```

#### 30. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L964-L967` → after: `L1061-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1061-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L1061-L1062) · [Before (L964-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L964-L967)

```diff
-     function Me(ee, ie) {
-       return function(He) {
-         return ie(ee(He))
-       }
+     function Si(WW) {
+       return "skillLevel" === WW || "landmark" === WW || "npcNote" === WW
```

#### 31. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L970-L983` → after: `L1076-L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1076-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L1076-L1092) · [Before (L970-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L970-L983)

```diff
-     function Ke(ee, ie) {
-       const He = [ie[ee].parent, ee];
-       let be = ye[ie[ee].parent][ee],
-         Ke = ie[ee].parent;
-       for (; ie[Ke].parent;) He.unshift(ie[Ke].parent), be = Me(ye[ie[Ke].parent][Ke], be), Ke = ie[Ke].parent;
-       return be.conversion = He, be
-     }
-     ee.exports = function(ee) {
-       const ie = be(ee),
-         He = {},
-         ye = Object.keys(ie);
-       for (let be = ye.length, Me = 0; Me < be; Me++) {
-         const ee = ye[Me];
-         null !== ie[ee].parent && (He[ee] = Ke(ee, ie))
+     function ni(WW) {
+       const iW = new Ji.g(WW);
+       return {
+         radius: 45,
+         squareness: 3,
+         wobbles: Hi.map((WW => {
+           let {
+             lobes: OW,
+             amount: mW
+           } = WW;
+           return {
+             lobes: OW[Math.floor(iW.next() * OW.length)],
+             amount: mW[0] + iW.next() * (mW[1] - mW[0]),
+             phase: 2 * iW.next() * Math.PI
+           }
+         })),
+ ... (1 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L987-L1137` → after: `L1095-L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1095-L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L1095-L1118) · [Before (L987-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L987-L1137)

```diff
-   },
-   37495: ee => {
-     ee.exports = {
-       aliceblue: [240, 248, 255],
-       antiquewhite: [250, 235, 215],
-       aqua: [0, 255, 255],
-       aquamarine: [127, 255, 212],
-       azure: [240, 255, 255],
-       beige: [245, 245, 220],
-       bisque: [255, 228, 196],
-       black: [0, 0, 0],
-       blanchedalmond: [255, 235, 205],
-       blue: [0, 0, 255],
-       blueviolet: [138, 43, 226],
-       brown: [165, 42, 42],
-       burlywood: [222, 184, 135],
- ... (135 more removed lines; see GitHub link above)
+ 
+     function ui(WW) {
+       let {
+         radius: iW,
+         squareness: OW,
+         wobbles: mW,
+         samples: EW
+       } = WW;
+       const NW = [];
+       for (let PW = 0; PW < EW; PW++) {
+         const WW = 2 * Math.PI * PW / EW,
+           LW = Math.cos(WW),
+           cW = Math.sin(WW),
+           wW = iW * (Math.abs(LW) ** OW + Math.abs(cW) ** OW) ** (-1 / OW) * mW.reduce(((iW, OW) => {
+             let {
+               lobes: mW,
+ ... (8 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1139-L1147` → after: `L1120-L1267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1120-L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L1120-L1267) · [Before (L1139-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L1139-L1147)

```diff
-   },
-   37471: (ee, ie, He) => {
-     var ye = He(37479),
-       be = Array.prototype.concat,
-       Me = Array.prototype.slice,
-       Ke = ee.exports = function(ee) {
-         for (var ie = [], He = 0, Ke = ee.length; He < Ke; He++) {
-           var Ue = ee[He];
-           ye(Ue) ? ie = be.call(ie, Me.call(Ue)) : ie.push(Ue)
+     const oi = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
+     class di {
+       constructor() {
+         this.compassSpacing = 1, this.compassSize = {
+           trackHalfWidth: 0,
+           screenHalfWidth: 0
+         }, this.compass = null, this.terrain = null, this.searchAreaPath = {
+           seed: "",
+           d: ""
+         }, this.searchAreas = {
+           minimap: null,
+           map: null
+         }, this.player = null, this.waypoint = null, this.markerIcon = null, this.waypointMarkerSize = {
+           width: 0,
+           height: 0
+         }, this.waypointInset = {
+ ... (132 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1149-L1153` → after: `L1269-L9777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1269-L9777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L1269-L9777) · [Before (L1149-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L1149-L1153)

```diff
-         return ie
-       };
-     Ke.wrap = function(ee) {
-       return function() {
-         return ee(Ke(arguments))
+       }
+       mountSearchArea(WW, iW) {
+         this.searchAreas[WW] = this.JA ? null : iW, this.render(this.frame)
+       }
+       render(WW) {
+         if (this.JA) return;
+         if (this.frame = WW, this.compass && (ei(this.compass.root, !WW), WW)) {
+           const iW = this.compassSize.trackHalfWidth / 50;
+           WW.compass.cardinals.forEach(((WW, OW) => {
+             const mW = this.cardinals[OW];
+             mW.textContent !== WW.name && (mW.textContent = WW.name), ei(mW, WW.hidden), mW.style.translate = WW.left * iW + "px"
+           }));
+           const OW = new Set;
+           WW.compass.markers.forEach(((mW, EW) => {
+             var NW;
+             OW.add(mW.id);
+ ... (8493 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1157-L1159` → after: `L10286-L10302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R10286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L10286-L10302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/248.js#L10286-L10302) · [Before (L1157-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/248.js#L1157-L1159)

```diff
-   37479: ee => {
-     ee.exports = function(ee) {
-       return !(!ee || "string" === typeof ee) && (ee instanceof Array || Array.isArray(ee) || ee.length >= 0 && (ee.splice instanceof Function || Object.getOwnPropertyDescriptor(ee, ee.length - 1) && "String" !== ee.constructor.name))
+   39722: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => EW,
+       f: () => NW
+     });
+     var mW = OW(39726);
+ 
+     function EW(WW, iW, OW) {
+       return [100 * (OW.mapMaxX - WW) / (OW.mapMaxX - OW.mapMinX), 100 * (iW - OW.mapMinZ) / (OW.mapMaxZ - OW.mapMinZ)]
+     }
+ 
+     function NW(WW, iW, OW, NW) {
+       const [PW, LW] = EW(WW, iW, NW), cW = mW.f - OW;
+       return {
+         rotation: cW,
+         transform: `rotate(${cW}rad) translate(-${PW}%, -${LW}%)`
+ ... (1 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/249.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/249.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479)

#### 1. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L4-L14` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/249.js#L4-L6) · [Before (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/249.js#L4-L14)

```diff
-   37578: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ui,
-       g: () => Bi,
-       h: () => ki,
-       j: () => Ji,
-       n: () => qi,
-       o: () => Ri,
-       r: () => Ei,
-       s: () => oi,
-       w: () => Ti
+   37511: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => yW
```

#### 2. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L16-L149` → after: `L8-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L8-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/249.js#L8-L21) · [Before (L16-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/249.js#L16-L149)

```diff
-     const ye = JSON.parse('{"sounds":{"lavaFlow":{"src":["/sounds/generatedSounds/ambient/lavaFlow.ba535035cf.ogg","/sounds/generatedSounds/ambient/lavaFlow.40571c16d7.m4a"],"ms":34000}}}'),
-       be = JSON.parse('{"sounds":{"carCrash":{"src":["/sounds/generatedSounds/cars/carCrash.e9cf35a412.ogg","/sounds/generatedSounds/cars/carCrash.378aeb32a4.m4a"],"ms":539.7732426303855},"carDoorClose":{"src":["/sounds/generatedSounds/cars/carDoorClose.792cfcf48d.ogg","/sounds/g … [truncated]
-       Me = JSON.parse('{"sounds":{"crowdAmbience":{"src":["/sounds/generatedSounds/crowd/crowdAmbience.c8437e74dd.ogg","/sounds/generatedSounds/crowd/crowdAmbience.ea6c2e684d.m4a"],"ms":54935.51020408163},"crowdCheer":{"src":["/sounds/generatedSounds/crowd/crowdCheer.d4ed8b2c1c.o … [truncated]
-       Ke = JSON.parse('{"sounds":{"cryptWhoosh":{"src":["/sounds/generatedSounds/customGame_horror/cryptWhoosh.844ce087ed.ogg","/sounds/generatedSounds/customGame_horror/cryptWhoosh.c75574f860.m4a"],"ms":1700},"doorKnock":{"src":["/sounds/generatedSounds/customGame_horror/doorKno … [truncated]
-       Ue = JSON.parse('{"sounds":{"cloth1":{"src":["/sounds/generatedSounds/dig/cloth1.05a08dc4fb.ogg","/sounds/generatedSounds/dig/cloth1.f8fe54888d.m4a"],"ms":1671.8367346938776},"cloth2":{"src":["/sounds/generatedSounds/dig/cloth2.7829e18f4b.ogg","/sounds/generatedSounds/dig/c … [truncated]
-       Fe = JSON.parse('{"sounds":{"extinguisherSpray":{"src":["/sounds/generatedSounds/fire/extinguisherSpray.a0ff717082.ogg","/sounds/generatedSounds/fire/extinguisherSpray.0d3a5c7316.m4a"],"ms":2598.7301587301586},"fireAlarmBell":{"src":["/sounds/generatedSounds/fire/fireAlarmB … [truncated]
-       Je = JSON.parse('{"sounds":{"caughtFish":{"src":["/sounds/generatedSounds/fishing/caughtFish.6e9d3bcd83.ogg","/sounds/generatedSounds/fishing/caughtFish.720027e64c.m4a"],"ms":1976.7573696145125},"reel":{"src":["/sounds/generatedSounds/fishing/reel.0d8a9b6ef7.ogg","/sounds/g … [truncated]
-       oe = JSON.parse('{"sounds":{"game_start_countdown_01":{"src":["/sounds/generatedSounds/gameStart/game_start_countdown_01.cf3394eef0.ogg","/sounds/generatedSounds/gameStart/game_start_countdown_01.3008ea2146.m4a"],"ms":1000.7709750566893},"game_start_countdown_02":{"src":["/ … [truncated]
-       Re = JSON.parse('{"sounds":{"bullet_shell_bounce_general_07":{"src":["/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.1dee1c5e3e.ogg","/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.36191552b5.m4a"],"ms":823.0612244897959},"bullet_shell_bounce … [truncated]
-       ke = JSON.parse('{"sounds":{"pistol_cock_01":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_01.6bb1557b84.ogg","/sounds/generatedSounds/gunPistol/pistol_cock_01.213b7dc7b8.m4a"],"ms":510},"pistol_cock_02":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_02.61a … [truncated]
-       qe = JSON.parse('{"sounds":{"rifle_cock_01":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_01.7f2d42f56d.ogg","/sounds/generatedSounds/gunRifle/rifle_cock_01.7facd07e84.m4a"],"ms":705.3061224489796},"rifle_cock_02":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_ … [truncated]
-       fe = JSON.parse('{"sounds":{"semiAuto_cock_01":{"src":["/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.1bf3b423df.ogg","/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.c1262696d3.m4a"],"ms":500},"semiAuto_cock_02":{"src":["/sounds/generatedSounds/gunSem … [truncated]
-       Te = JSON.parse('{"sounds":{"shotgun_cock_01":{"src":["/sounds/generatedSounds/gunShotgun/shotgun_cock_01.c54ea385b9.ogg","/sounds/generatedSounds/gunShotgun/shotgun_cock_01.ee18a51143.m4a"],"ms":914.2857142857142},"shotgun_cock_02":{"src":["/sounds/generatedSounds/gunShotg … [truncated]
-       pe = JSON.parse('{"sounds":{"submachine_cock_01":{"src":["/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.32e98c51f0.ogg","/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.afcbd0a497.m4a"],"ms":500},"submachine_cock_02":{"src":["/sounds/generatedSound … [truncated]
-       Xe = JSON.parse('{"sounds":{"bearRoar1":{"src":["/sounds/generatedSounds/mobBear/bearRoar1.63c50e53db.ogg","/sounds/generatedSounds/mobBear/bearRoar1.035fff53ae.m4a"],"ms":1011.1791383219954},"bearRoar2":{"src":["/sounds/generatedSounds/mobBear/bearRoar2.78b4410ea2.ogg","/s … [truncated]
-       ze = JSON.parse('{"sounds":{"catHiss1":{"src":["/sounds/generatedSounds/mobCat/catHiss1.33269da18a.ogg","/sounds/generatedSounds/mobCat/catHiss1.930fa86a61.m4a"],"ms":1252.0861678004535},"catHiss2":{"src":["/sounds/generatedSounds/mobCat/catHiss2.f2bda6f1b6.ogg","/sounds/ge … [truncated]
- ... (118 more removed lines; see GitHub link above)
+     var mW = OW(1089),
+       EW = OW.n(mW),
+       NW = OW(1616),
+       PW = OW(1081),
+       LW = OW(805),
+       cW = OW(1172),
+       wW = OW(1532),
+       tW = OW(1605),
+       ZW = OW(4796),
+       xW = OW(1391),
+       lW = OW(4718),
+       AW = OW(3602),
+       bW = OW(1283);
+     const jW = 2;
```

#### 3. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L152-L156` → after: `L24-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L24-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/249.js#L24-L30) · [Before (L152-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/249.js#L152-L156)

```diff
-       return Fi(ee).group
-     }
- 
-     function oi(ee) {
-       return Fi(ee).file
+       return "firstPartyGame" === WW.type ? {
+         type: "game",
+         gameNameWithVariation: WW.gameNameWithVariation
+       } : {
+         type: "preview",
+         preview: WW.preview
+       }
```

#### 4. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L160-L164` → after: `L34-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L34-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/249.js#L34-L48) · [Before (L160-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/249.js#L160-L164)

```diff
-       return Ki.has(ee)
-     }
- 
-     function ki(ee, ie) {
-       return qi(ee).includes(ie)
+       let {
+         game: iW,
+         disabled: OW,
+         showPlaceholder: mW
+       } = WW;
+       return null !== iW ? (0, bW.jsx)(lW.d, {
+         source: UW(iW),
+         gameWidth: "100%",
+         useLongRatio: !0,
+         disabled: OW,
+         entrySource: "customGamePlace"
+       }) : mW ? (0, bW.jsx)(lW.c, {
+         gameWidth: "100%",
+         useLongRatio: !0
+       }) : null
```

#### 5. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L168-L169` → after: `L52-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L52-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/249.js#L52-L96) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/249.js#L168-L169)

```diff
-       if (!(ee in Mi)) throw new Error(`Invalid sound group ${ee}`);
-       return Object.keys(Mi[ee].sounds)
+       var iW;
+       let {
+         category: OW,
+         title: mW,
+         tintColour: EW,
+         layout: NW,
+         games: PW,
+         landscape: LW = !1
+       } = WW;
+       const {
+         followsLeader: cW
+       } = (0, AW.d)(), wW = null !== (iW = null === PW || void 0 === PW ? void 0 : PW.slice(0, NW.gameCount)) && void 0 !== iW ? iW : [], ZW = {
+         "--custom-game-place-tint": EW
+       };
+       return (0, bW.jsxs)("div", {
+         className: "CustomGamePlacePanel AnimFadeIn",
+ ... (29 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L174-L178` → after: `L100-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L100-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/249.js#L100-L102) · [Before (L174-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/249.js#L174-L178)

```diff
-       let ie = fi.get(ee);
-       return void 0 === ie && (ie = [...Ki.keys()].filter((ie => ie.startsWith(ee))), fi.set(ee, ie)), ie
-     }
-     const Xi = new Map,
-       zi = new Map;
+       let {
+         categories: iW
+       } = WW;
```

#### 7. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L180-L189` → after: `L104-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L104-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/249.js#L104-L109) · [Before (L180-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/249.js#L180-L189)

```diff
-     function Bi(ee) {
-       const ie = Ti(ee),
-         He = ie[Math.floor(Math.random() * ie.length)];
-       if (ie.length > 1) {
-         const ie = function(ee, ie) {
-           const He = `${ie}\n${ee}`;
-           let ye = zi.get(He);
-           return void 0 === ye && (ye = Ti(ee).filter((ee => Ki.get(ee).group === ie)), zi.set(He, ye)), ye
-         }(ee, Ki.get(He).group);
-         ie.length > 1 ? Xi.set(He, ie) : Xi.delete(He)
+       function OW(WW) {
+         const OW = iW[WW];
+         return (0, bW.jsx)(sW, {
+           ...OW,
+           landscape: !0
+         }, OW.id)
```

#### 8. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L191` → after: `L111-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L111-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/249.js#L111-L126) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/249.js#L191)

```diff
-       return He
+       return (0, bW.jsxs)("div", {
+         className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
+         children: [(0, bW.jsxs)("div", {
+           className: "CustomGamePlaceUpper",
+           children: [(0, bW.jsxs)("div", {
+             className: "CustomGamePlaceMain",
+             children: [(0, bW.jsxs)("div", {
+               className: "CustomGamePlaceRow",
+               children: [OW(0), OW(2)]
+             }), OW(1)]
+           }), OW(4)]
+         }), (0, bW.jsxs)("div", {
+           className: "CustomGamePlaceRow",
+           children: [OW(3), OW(5)]
+         })]
+       })
```

#### 9. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L193-L212` → after: `L128-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L128-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/249.js#L128-L152) · [Before (L193-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/249.js#L193-L212)

```diff
- 
-     function Ei(ee) {
-       return Xi.get(ee)
-     }
-   },
-   37584: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => ye,
-       f: () => Me
-     });
-     const ye = "__default",
-       be = ["end", "stop", "playerror"];
- 
-     function Me(ee, ie) {
-       const He = () => {
-         if (function(ee) {
- ... (4 more removed lines; see GitHub link above)
+     const KW = ["section1", "section2", "section3", "section4", "section5", "section6"],
+       SW = {
+         section1: {
+           gameCount: 4,
+           columnCount: 2
+         },
+         section2: {
+           gameCount: 6,
+           columnCount: 6
+         },
+         section3: {
+           gameCount: 8,
+           columnCount: 4
+         },
+         section4: {
+           gameCount: 6,
+ ... (9 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L215-L216` → after: `L155-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L155-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/249.js#L155-L213) · [Before (L215-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/249.js#L215-L216)

```diff
-       for (const ye of be) ee.on(ye, He);
-       He()
+     var YW = OW(1095);
+ 
+     function yW() {
+       var WW;
+       const {
+         t: iW
+       } = (0, cW.B)(), OW = (0, NW.z)(), mW = (0, YW.h)(), xW = (0, ZW.e)({
+         refresh: !0
+       }), lW = OW.customGamePlace;
+       if (!(0, PW.k)(lW)) return (0, bW.jsx)(tW.NavigatePreserveSearch, {
+         to: "/"
+       });
+       const AW = LW.d[lW],
+         jW = PW.d[lW],
+         UW = null !== (WW = null === xW || void 0 === xW ? void 0 : xW[lW]) && void 0 !== WW ? WW : null,
+         kW = [];
+ ... (43 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/250.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/250.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977)

#### 1. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L4-L205` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/250.js#L4) · [Before (L4-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/250.js#L4-L205)

```diff
-   40527: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => ye,
-       d: () => be
-     });
-     const ye = "The world isn't loaded, so no blocks can be seen.",
-       be = "The world isn't loaded, so nothing in it can be seen."
-   },
-   39896: (ee, ie, He) => {
-     function ye(ee) {
-       return !(!ee.lobbyLeaderboardInfo && !ee.lobbyManage)
-     }
-     He.d(ie, {
-       e: () => ye
-     })
-   },
- ... (186 more removed lines; see GitHub link above)
+   37527: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L209` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/250.js#L8-L10) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/250.js#L209)

```diff
-       i: () => Ue
+       j: () => wW,
+       n: () => cW,
+       p: () => sW
```

#### 3. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L211-L213` → after: `L12-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L12-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/250.js#L12-L338) · [Before (L211-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/250.js#L211-L213)

```diff
-     var ye = He(41694),
-       be = He(5262),
-       Me = He(41704);
+     var mW = OW(649),
+       EW = OW(1876),
+       NW = OW(5551);
+     class PW {
+       constructor(WW, iW) {
+         this.width = WW, this.aZ = iW, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(WW * iW)
+       }
+       push(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const OW = this.data,
+           mW = this.next * this.width;
+         for (let EW = 0; EW < this.width; EW++) OW[mW + EW] = WW[iW + EW];
+         this.next = (this.next + 1) % this.aZ, this.size = Math.min(this.size + 1, this.aZ)
+       }
+       rows() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+ ... (311 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L217-L258` → after: `L342-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/250.js#L342-L343) · [Before (L217-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/250.js#L217-L258)

```diff
-       const ie = null === (ee = (0, Me.h)()) || void 0 === ee ? void 0 : ee.api.localId;
-       return void 0 === ie || ie === ye.$c ? null : String(ie)
-     }
- 
-     function Ue(ee) {
-       const ie = (0, Me.h)();
-       if (null !== ie) return ee(ie);
-       let He = null;
-       const ye = (0, be.u)((() => {
-         const ie = (0, Me.h)();
-         null !== ie && null === He && (ye(), He = ee(ie))
-       }));
-       return () => {
-         var ee;
-         ye(), null === (ee = He) || void 0 === ee || ee()
-       }
- ... (26 more removed lines; see GitHub link above)
+       null === (WW = bW) || void 0 === WW || WW.endTake()
+     }
```

#### 5. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L261-L592` → after: `L346-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L346-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/250.js#L346-L358) · [Before (L261-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/250.js#L261-L592)

```diff
-       var ee, ie;
-       return null !== (ee = null === (ie = (0, ye.h)()) || void 0 === ie ? void 0 : ie.itemBridgeSources) && void 0 !== ee ? ee : Me.b
-     }
- 
-     function Ue(ee) {
-       return {
-         current: () => Ke().states[ee].current(),
-         watch: ie => (0, be.i)((He => {
-           const ye = He.itemBridgeSources.states[ee];
-           return ie(ye.current()), ye.watch(ie)
-         }))
-       }
-     }
- 
-     function Fe(ee) {
-       return {
- ... (316 more removed lines; see GitHub link above)
+       var WW;
+       null === (WW = bW) || void 0 === WW || WW.droppedCopy()
+     }
+     async function sW(WW) {
+       var iW;
+       null === (iW = bW) || void 0 === iW || iW.takeRecords();
+       const {
+         clientHintsRead: mW,
+         debugDeviceLines: EW
+       } = await OW.e(35).then((() => OW(35106)));
+       await mW, wW.p.save({
+         ...WW,
+         device: EW()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/251.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/251.js` (41 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b)

#### 1. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L2)

```diff
- export const ids = [251];
+ export const ids = [251, 610];
```

#### 2. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L4-L7)

```diff
-   37761: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => ge,
-       e: () => Ee
+   44895: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       CharacterCustomisationUI: () => bi
```

#### 3. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L9-L20` → after: `L8-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L8-L13) · [Before (L9-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L9-L20)

```diff
-     var ye = He(4607),
-       be = He(1432),
-       Me = He(59),
-       Ke = He(7083),
-       Ue = He(4603),
-       Fe = He(1246),
-       Je = He(1983),
-       oe = He(1956),
-       Re = He(1438),
-       ke = He(1127),
-       qe = He(37765),
-       fe = He(1053),
+     var mW = OW(62),
+       EW = OW(2959),
+       NW = OW(4703),
+       PW = OW(4683),
+       LW = OW(1107),
+       cW = OW(1089),
```

#### 4. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L22-L26` → after: `L15-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L15-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L15-L134) · [Before (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L22-L26)

```diff
-       pe = He(1294),
-       Xe = He(1323),
-       ze = He(1215),
-       Be = He(1228);
-     const Ee = "SleepingOverlay";
+       tW = OW(1230),
+       ZW = OW(625),
+       xW = OW(614),
+       lW = OW(1172),
+       AW = OW(3083),
+       bW = OW(1659),
+       jW = OW(3540),
+       UW = OW(37879),
+       kW = OW(3090),
+       sW = OW(4255),
+       MW = OW(2075),
+       KW = OW(1532),
+       SW = OW(3125),
+       YW = OW(3210),
+       yW = OW(25),
+       TW = OW(3702),
+ ... (104 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L28` → after: `L136-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L136-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L136-L142) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L28)

```diff
-     function ge() {
+     function IW(WW) {
+       let {
+         wornOutfit: iW,
+         onApply: OW,
+         onOverwrite: EW,
+         onDelete: NW
+       } = WW;
```

#### 6. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L31-L35` → after: `L145-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L145-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L145-L163) · [Before (L31-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L31-L35)

```diff
-       } = (0, ke.v)(), [ie, He] = (0, Me.useState)(!1), [fe, ge] = (0, Me.useState)(null), [de, We] = (0, Me.useState)(1), [te, Ze] = (0, Me.useState)(!1), [we, De] = (0, Me.useState)(!1), Pe = (0, Me.useRef)(0), Ae = (0, Me.useRef)(!1), Ye = (0, Me.useRef)(!1), Ve = (0, Me.useRe … [truncated]
- 
-       function ce() {
-         const ee = null !== fe && void 0 !== fe ? fe : "Rested Speed";
-         Je.gameBridge.send("wakeUp", we ? ee : null), ae.current = null, He(!1), ge(null), We(1), Ze(!1), De(!1)
+       } = (0, lW.B)(), {
+         accountId: cW,
+         data: tW
+       } = (0, TW.g)(oW, !1), {
+         userContext: ZW
+       } = (0, LW.e)();
+       async function xW(WW, iW) {
+         const OW = await RW.NotificationProvider.showPromptPopup({
+             title: "homePage:deleteOutfitConfirm",
+             confirmText: "general:delete",
+             cancelText: "general:cancel",
+             destructive: !0
+           }).getResult(),
+           {
+             accountId: mW,
+             data: EW
+ ... (3 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L37-L97` → after: `L165-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L165-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L165-L192) · [Before (L37-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L37-L97)

```diff
- 
-       function xe() {
-         return !te && (ce(), !0)
-       }
-       return (0, be.f)("PlayerPhysicsTypeUpdate", (ee => {
-         ee !== ae.current && (ae.current = ee, ee === Ke.s.SLEEPING ? (Ye.current || (Pe.current = Je.gameBridge.lookup("cameraZoom", null), Ye.current = !0), Ae.current = !0, Je.gameBridge.send("setCameraZoom", 3), He(!0), We(function() {
-           for (const ee of Je.gameBridge.lookup("blocksStandingOn", null)) {
-             if (qe.d.leafBeds.includes(ee)) return console.log(`Found leaf bed: ${ee}`), 1;
-             if (qe.d.woolBeds.includes(ee)) return console.log(`Found woold bed: ${ee}`), 2;
-             if (qe.d.strongBeds.includes(ee)) return console.log(`Found strong bed ${ee}`), 3
-           }
-           return 1
-         }())) : (Ye.current = !1, He(!1), ge(null), We(1)))
-       })), (0, Me.useEffect)((() => () => {
-         (0, Fe.v)(Ee)
-       }), []), (0, Me.useEffect)((() => {
- ... (45 more removed lines; see GitHub link above)
+       return (0, mW.useEffect)((() => {
+         oW.ensureLoaded()
+       }), []), null === tW || cW !== ZW.whamm ? null : (0, GW.jsxs)("div", {
+         className: "CosmeticPackGroup SavedOutfits",
+         children: [(0, GW.jsx)("div", {
+           className: "CosmeticPackGroupLabel",
+           children: (0, GW.jsx)("span", {
+             className: "CosmeticPackGroupLabelName",
+             children: PW("homePage:myOutfits")
+           })
+         }), (0, GW.jsx)("div", {
+           className: "CharacterPresetsGrid SavedOutfitsGrid",
+           children: tW.map(((WW, mW) => {
+             const NW = (0, UW.f)(WW);
+             return (0, GW.jsxs)("div", {
+               className: wW()("SavedOutfitSlot", {
+ ... (12 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L99-L133` → after: `L194-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L194-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L194-L211) · [Before (L99-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L99-L133)

```diff
-                 loading: te,
-                 children: [!we && (0, Be.jsxs)(Be.Fragment, {
-                   children: [(0, Be.jsx)(Xe.e, {
-                     name: "film"
-                   }), " ", ee("classicGame:watchAdToGetRestedPerk")]
-                 }), we && ee("classicGame:wakeUp")]
-               }), (0, Be.jsxs)("div", {
-                 className: "SleepingOverlayPerkBottomSide",
-                 children: [(0, Be.jsx)("div", {
-                   className: Te()("SleepingOverlayBedIcon", {
-                     SleepingOverlayBedIconActive: 1 === de
-                   }),
-                   children: (0, Be.jsx)(oe.e, {
-                     text: [{
-                       icon: "Leaf Bed"
-                     }]
- ... (19 more removed lines; see GitHub link above)
+                 children: [NW && (0, GW.jsxs)(GW.Fragment, {
+                   children: [(0, GW.jsx)(pW.c, {
+                     name: "plus"
+                   }), PW("homePage:saveOutfit")]
+                 }), !NW && (0, GW.jsxs)(GW.Fragment, {
+                   children: [(0, GW.jsx)("div", {
+                     className: "SavedOutfitCardPicture",
+                     children: (0, GW.jsx)(qW.e, {
+                       cosmetics: WW
+                     })
+                   }), (0, GW.jsx)(KW.Z, {
+                     padSecondaryLabelKey: "homePage:saveOutfit",
+                     stopPropagation: !0,
+                     onClick: () => {
+                       (0, UW.b)(iW, WW) || (oW.save(mW, iW), EW(mW, WW))
+                     },
+ ... (2 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L136` → after: `L226-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L226-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L226-L312) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L136)

```diff
-             })]
+             }, mW)
+           }))
+         })]
+       })
+     }
+     var aW = OW(344),
+       rW = OW(1427);
+ 
+     function zW() {
+       (0, SW.o)({
+         mode: "self",
+         source: "characterCustomisation",
+         openItem: "superRank"
+       })
+     }
+ 
+ ... (71 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L141` → after: `L317-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L317-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L317-L390) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L141)

```diff
-     const Oe = (0, Me.memo)((function(ee) {
+     var QW = OW(37541);
+ 
+     function Wi(WW, iW, OW) {
+       return !(0, vW.z)(WW, iW) && !(0, vW.I)(WW, iW, OW)
+     }
+ 
+     function ii(WW, iW) {
+       return !(0, vW.H)(WW, iW)
+     }
+ 
+     function Oi(WW) {
+       return eW.m.find((iW => (0, eW.g)(iW) === WW))
+     }
+ 
+     function mi(WW, iW, OW) {
+       var mW;
+ ... (58 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L143-L146` → after: `L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L392) · [Before (L143-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L143-L146)

```diff
-         children: ie,
-         restedEffect: He,
-         XJ: ye,
-         setChosenRestedEffect: be
+         gets: iW
```

#### 12. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L148-L151` → after: `L394-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L394-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L394-L427) · [Before (L148-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L148-L151)

```diff
-       return He === ye ? (0, Be.jsx)(Re.m, {
-         onClick: ee => {
-           ee.stopPropagation()
-         },
+       const {
+         t: OW
+       } = (0, lW.B)();
+       return (0, GW.jsx)("div", {
+         className: "CharCustomisationGetTriedOn",
+         children: iW.map((WW => {
+           let {
+             kind: iW,
+             pack: mW
+           } = WW;
+           return (0, GW.jsxs)(KW.n, {
+             className: "CharCustomisationGetPiece",
+             onClick: () => {
+               (0, gW.j)(mW, "triedOnGet")
+             },
+             children: [(0, GW.jsx)(pW.c, {
+ ... (18 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L153-L156` → after: `L429-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L429-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L429-L448) · [Before (L153-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L153-L156)

```diff
-       }) : (0, Be.jsx)(Re.e, {
-         onClick: ee => {
-           be(He), ee.stopPropagation()
-         },
+       } = WW;
+       return iW ? (0, GW.jsx)(xi, {
+         children: OW
+       }) : OW
+     }
+ 
+     function xi(WW) {
+       var iW;
+       let {
+         children: OW
+       } = WW;
+       const {
+         t: mW
+       } = (0, lW.B)(), {
+         userContext: EW
+       } = (0, LW.e)(), NW = null !== (iW = EW.dailyDrop) && void 0 !== iW && iW.hidden ? mW("dailyDrop:lockedFromHidden") : mW("dailyDrop:lockedFrom");
+ ... (4 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L159-L196` → after: `L451-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L451-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L451-L508) · [Before (L159-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L159-L196)

```diff
-     }))
-   },
-   41688: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ne
-     });
-     var ye = He(18),
-       be = He(27),
-       Me = He(4623),
-       Ke = He(335),
-       Ue = He(1620),
-       Fe = He(8926),
-       Je = He(4653),
-       oe = He(9434),
-       Re = He(8954),
-       ke = He(8935),
- ... (22 more removed lines; see GitHub link above)
+     }
+ 
+     function li(WW) {
+       let {
+         pack: iW,
+         ownedPacks: OW,
+         showStoreLink: mW = !1,
+         children: EW
+       } = WW;
+       const {
+         t: NW
+       } = (0, lW.B)(), PW = eW.e[iW].purchasable && !OW.includes(iW) && eW.q.includes(iW), LW = gW.m[iW];
+       return (0, GW.jsxs)("div", {
+         className: wW()("CosmeticPackGroup", {
+           CosmeticPackGroupLocked: PW
+         }),
+ ... (42 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L199-L201` → after: `L597-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L597-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L597-L630) · [Before (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L199-L201)

```diff
-     class we {
-       constructor(ee, ie) {
-         this.press = ee, this.release = ie, this.downAtMs = null, this.token = null, this.latched = !1
+     const bi = (0, mW.memo)((function(WW) {
+       var iW, OW;
+       let {
+         selectedTab: cW
+       } = WW;
+       const kW = "characters" === cW ? "skin" : cW,
+         {
+           t: SW
+         } = (0, lW.B)(),
+         {
+           userContext: TW,
+           isUserContextUpdating: JW
+         } = (0, LW.e)(),
+         hW = (0, EW.b)(),
+         {
+           gameState: HW
+ ... (18 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L203-L205` → after: `L632-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L632-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L632-L649) · [Before (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L203-L205)

```diff
-       update(ee, ie, He, ye) {
-         if (ee && null === this.downAtMs) return this.downAtMs = He, this.latched = ye, void(this.token = this.press(ye));
-         null !== this.downAtMs && (this.latched ? ee && this.end() : !ie && He - this.downAtMs >= 40 && this.end())
+ 
+       function ki(WW, iW, OW) {
+         var mW, EW, NW;
+         Pi.current = {
+           ...Pi.current,
+           [WW]: iW
+         }, hW(), OW && ((0, QW.d)(TW, [
+           [WW, iW]
+         ]), rW(null));
+         const PW = (0, AW.l)(WW, iW);
+         if (null !== PW && void 0 !== PW && PW.colourGroup && null !== (mW = eW.e[PW.cosmeticPack].colourGroups) && void 0 !== mW && null !== (EW = mW[PW.colourGroup]) && void 0 !== EW && EW.showSwatchSelector) {
+           const OW = (0, AW.h)(iW);
+           OW && BW((iW => ({
+             ...iW,
+             [`${PW.cosmeticPack}_${WW}_${PW.colourGroup}`]: parseInt(OW[1])
+           })))
+ ... (2 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L207-L208` → after: `L651-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L651-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L651-L658) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L207-L208)

```diff
-       isLatched() {
-         return null !== this.downAtMs && this.latched
+ 
+       function si(WW) {
+         uW((iW => {
+           const OW = {
+             ...iW
+           };
+           return delete OW[WW], OW
+         }))
```

#### 18. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L210-L211` → after: `L660-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L660-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L660-L726) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L210-L211)

```diff
-       unlatch() {
-         this.latched = !1
+ 
+       function Mi(WW, iW) {
+         let {
+           undoable: OW
+         } = iW;
+         Object.keys(nW).length > 0 && uW({});
+         const mW = function(WW, iW, OW, mW) {
+           return Object.entries(WW).filter((WW => {
+             let [EW, NW] = WW;
+             return iW[EW] !== NW && !Wi(EW, NW, OW) && !mW(EW, NW)
+           }))
+         }(WW, Pi.current, Ki, ((WW, iW) => ti(Si, WW, iW)));
+         OW ? mW.length > 0 && rW({
+           kind: "worn",
+           outfit: (0, UW.i)(Pi.current)
+         }) : rW(null);
+ ... (51 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L213-L214` → after: `L728-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L728-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L728-L770) · [Before (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L213-L214)

```diff
-       cancel() {
-         null !== this.downAtMs && this.end()
+       const di = function(WW, iW) {
+           const OW = new Set,
+             mW = new Set;
+           for (const [EW, NW] of Object.entries(AW.e[WW])) {
+             if (void 0 === NW.colourGroup) continue;
+             const PW = `${NW.cosmeticPack}_${NW.colourGroup}`;
+             (Wi(WW, EW, iW) ? mW : OW).add(PW)
+           }
+           return new Set([...OW].filter((WW => mW.has(WW))))
+         }(kW, Ki),
+         ei = new Map;
+       for (const [mW, EW] of ui) {
+         const WW = [],
+           iW = new Map;
+         for (const mW of EW) {
+           var vi, gi;
+ ... (27 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L216-L218` → after: `L772-L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L772-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L772-L778) · [Before (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L216-L218)

```diff
-       end() {
-         const ee = this.token;
-         this.downAtMs = null, this.token = null, this.latched = !1, this.release(ee)
+       const Di = Array.from(ui.keys()),
+         Vi = new Map;
+       for (const [mW, EW] of Object.entries(bW.e)) {
+         const WW = eW.e[EW.cosmeticPack],
+           iW = (0, vW.H)(EW.cosmetics, Ki),
+           OW = void 0 !== Oi(mW);
+         (WW.clientSelectable || OW || iW) && ((!WW.purchasable || iW || Yi) && (Vi.has(EW.cosmeticPack) || Vi.set(EW.cosmeticPack, []), Vi.get(EW.cosmeticPack).push([mW, EW])))
```

#### 21. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L220-L241` → after: `L780-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L780-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L780-L814) · [Before (L220-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L220-L241)

```diff
-     }
-     const De = {
-         kind: "specialAction",
-         action: "SpecialAction2"
-       },
-       Pe = ee => {
-         let ie = null;
-         const He = new te.c,
-           ye = () => {
-             ie && (((ee, ie, He) => {
-               switch (He.kind) {
-                 case "reload":
-                   return void ie.specialActionUp("SpecialAction1");
-                 case "specialAction":
-                   return void ie.specialActionUp(He.action);
-                 case "customButton":
- ... (6 more removed lines; see GitHub link above)
+       const fi = Array.from(Vi.keys()),
+         Ci = Yi ? Ei(cW, nW, Ki) : [],
+         [Xi, Bi] = (0, mW.useState)(!1);
+       return !Xi && (Ci.length > 0 || null !== qW) && Bi(!0), (0, GW.jsxs)("div", {
+         className: "CharCustomisationBody",
+         children: [("cape" === kW || "nameColour" === kW) && !(0, xW.e)(yi) && (0, GW.jsxs)("div", {
+           className: "CharCustomisationBodyHeader",
+           children: [(0, GW.jsx)(pW.c, {
+             name: "bolt"
+           }), SW((0, YW.o)(Date.now()).unlockWithKey), Yi && (0, GW.jsx)(KW.n, {
+             onClick: () => {
+               zW()
+             },
+             children: SW("general:getItNow")
+           })]
+         }), (0, GW.jsxs)("div", {
+ ... (19 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L243-L263` → after: `L816-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L816-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L816-L1056) · [Before (L243-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L243-L263)

```diff
-             })(ee, ie.bodies, ie.action), ie = null)
-           },
-           Me = (He, be, Me, Ke) => {
-             ye(), ie = {
-               action: be,
-               bodies: He,
-               heldBy: Me,
-               atMs: Ke
-             }, ((ee, ie, He) => {
-               switch (He.kind) {
-                 case "reload":
-                   return ie.reloadGun(), void ie.specialActionDown("SpecialAction1");
-                 case "specialAction":
-                   return void ie.specialActionDown(He.action);
-                 case "customButton":
-                   return void ge.gameBridge.send("pressCustomButton", {
- ... (5 more removed lines; see GitHub link above)
+             }), fi.map((WW => {
+               const iW = Vi.get(WW);
+               return (0, GW.jsx)(li, {
+                 pack: WW,
+                 ownedPacks: Ki,
+                 showStoreLink: !eW.n.includes(WW) && iW.some((WW => {
+                   let [, {
+                     cosmetics: iW
+                   }] = WW;
+                   return ii(iW, Ki)
+                 })),
+                 children: (0, GW.jsx)("div", {
+                   className: "CharacterPresetsGrid",
+                   children: iW.map((WW => {
+                     let [iW, {
+                       cosmetics: OW
+ ... (225 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L265-L312` → after: `L1058-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1058-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L1058-L1093) · [Before (L265-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L265-L312)

```diff
-             })(ee, He, be)
-           };
-         return {
-           update: (Ke, Ue, Je, oe) => {
-             var ke;
-             const qe = (0, de.j)(ee.contextActionInputs()),
-               fe = null !== (ke = qe[0]) && void 0 !== ke ? ke : De;
-             (0, We.b)((0, de.e)(fe) ? fe : null);
-             const Te = (0, de.d)(qe);
-             (0, We.c)(Te);
-             const pe = (0, Fe.j)("actionButton");
-             if (Te) {
-               const ee = He.update(Ue.wasPressed(pe), Ue.isHeld(pe), Je, oe);
-               "tap" === ee ? Me(Ke, fe, [pe], Je) : "hold" === ee && (Re.d.consumeButton(pe), be.h.yR(Ee.m, qe))
-             } else He.release(), Ue.wasPressed(pe) && Me(Ke, fe, [pe], Je);
-             ie && Je - ie.atMs >= 40 && !ie.heldBy.some((ee => (0, Oe.L)(Ue.frame.values, ee))) && ye()
- ... (32 more removed lines; see GitHub link above)
+             }), Xi && (0, GW.jsxs)("div", {
+               className: "CharCustomisationPreviewActions",
+               children: [Ci.length > 0 && (0, GW.jsx)(Li, {
+                 gets: Ci
+               }), qW && (0, GW.jsxs)(KW.f, {
+                 className: "CharCustomisationUndo",
+                 onClick: () => {
+                   "worn" === qW.kind ? Mi(qW.outfit, {
+                     undoable: !1
+                   }) : (oW.save(qW.slot, qW.outfit), rW(null))
+                 },
+                 children: [(0, GW.jsx)(pW.c, {
+                   name: "rotate-left"
+                 }), SW("general:undo")]
+               })]
+             })]
+ ... (20 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L314-L315` → after: `L1095-L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1095-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L1095-L1104) · [Before (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L314-L315)

```diff
-           bodies: ie,
-           press: ye
+           onReady: OW,
+           onDrawn: lW,
+           onSetupFailed: AW,
+           owner: bW = "other",
+           framing: jW = "player",
+           forcedCosmetics: UW,
+           LL: kW,
+           emotePlaySeq: sW,
+           turntableFromYaw: MW = null,
+           nametag: KW
```

#### 25. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L317-L342` → after: `L1106-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1106-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L1106-L1117) · [Before (L317-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L317-L342)

```diff
-         He(ie, ye)
-       })),
-       he = {
-         running: !1,
-         latchedAtMs: -1 / 0
-       },
-       Ne = ee => {
-         const ie = {
-           x: 0,
-           y: 0,
-           magnitude: 0,
-           headingOffset: 0,
-           jumpHeld: !1,
-           jumpPressed: !1,
-           running: !1,
-           sprintHeld: !1
- ... (10 more removed lines; see GitHub link above)
+         const SW = (0, mW.useRef)(null),
+           {
+             width: YW,
+             height: yW
+           } = (0, EW.d)(SW),
+           TW = (0, mW.useRef)({
+             width: YW,
+             height: yW
+           });
+         TW.current = {
+           width: YW,
+           height: yW
```

#### 26. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L344-L381` → after: `L1119-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1119-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L1119-L1156) · [Before (L344-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L344-L381)

```diff
-         let De = !1;
-         const ne = new Ze,
-           Ne = ee.look,
-           Ge = new te.c,
-           re = new te.c,
-           Qe = Pe(ee),
-           ei = be.h.subscribe(Ee.o, (ie => {
-             Qe.pressPicked(ee.bodies(), ie)
-           })),
-           ii = Ie(ee, ((ee, ie) => ee.primaryFireDown(!ie)), ((ee, ie) => {
-             ee.primaryFireUp(ie)
-           })),
-           Hi = Ie(ee, (ee => ee.altFireDown()), ((ee, ie) => {
-             ee.altFireUp(ie)
-           }));
-         let yi = !1,
- ... (22 more removed lines; see GitHub link above)
+         const JW = (0, mW.useRef)(null),
+           hW = (0, mW.useRef)({}),
+           HW = (0, mW.useRef)({}),
+           [nW, uW] = (0, mW.useState)(!1),
+           oW = (0, mW.useRef)(OW);
+         oW.current = OW;
+         const dW = (0, mW.useRef)(lW);
+         dW.current = lW;
+         const eW = (0, mW.useRef)(AW);
+         eW.current = AW;
+         const vW = (0, mW.useRef)(null),
+           gW = (0, mW.useRef)(!1),
+           DW = (0, mW.useRef)(KW);
+         DW.current = KW;
+         const VW = (0, mW.useRef)(!0),
+           pW = (0, mW.useRef)(!1),
+ ... (22 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L383-L450` → after: `L1158-L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1158-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L1158-L1163) · [Before (L383-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L383-L450)

```diff
-         let qi = !1;
-         const fi = function(ye, Me, Ke) {
-             let Ue = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-             if (!(0, fe.k)()) return void(qi || (qi = !0, yi = !1, ee.stopMoving()));
-             qi = !1;
-             const Je = (0, ke.h)(),
-               Re = (0, xe.h)(Me, Je.moveDeadzone),
-               qe = (0, Fe.j)("sprint");
-             He = (0, xe.v)(He, {
-               sprintPressed: ye.wasPressed(qe),
-               magnitude: Re.magnitude,
-               autoSprint: Je.autoSprint,
-               nowMs: Ke
-             }), ie.running = He.running, ie.sprintHeld = ye.isHeld(qe), ie.x = Re.x, ie.y = Re.y, ie.magnitude = Re.speed, ie.headingOffset = Re.headingOffset, Re.magnitude > 0 && (!yi || Ke - bi >= 1e3) && (bi = Ke, be.h.yR("stickMoved")), yi = Re.magnitude > 0;
-             const Te = (0, Fe.j)("jump");
-             if (ie.jumpHeld = ye.isHeld(Te), ie.jumpPressed = ye.wasPressed(Te), ie.jumpPressed && ee.bodies().jumpDown(), Ue) return void ee.move(ie, null);
- ... (52 more removed lines; see GitHub link above)
+           return {
+             updateCosmetic: WW,
+             setAllCosmetics(iW) {
+               for (const mW of NW.p) {
+                 var OW;
+                 WW(mW, null !== (OW = iW[mW]) && void 0 !== OW ? OW : (0, PW.d)(mW))
```

#### 28. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L462-L467` → after: `L1166-L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1166-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L1166-L1168) · [Before (L462-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L462-L467)

```diff
-             onFrame: ee => {
-               const ie = performance.now(),
-                 He = (0, ke.h)(),
-                 ye = (0, xe.y)(ee, (0, xe.p)(He, (0, Fe.j)("pause"), (0, Le.d)().isSupported())),
-                 be = (0, xe.l)(ye, He.swapSticks);
-               return (0, qe.l)() ? (Mi = !1, (0, pe.d)() ? (Ki = !1, Ne.update(be.look, He, ye.isHeld((0, Fe.j)("use"))), fi(ye, be.move, ie), void zi(ye, ie)) : (Ki || (Ki = !0, oe.lostToPadScreen(), ki()), void Ti(ye, ie))) : (Mi || (Ri(), Mi = !0), void fi(ye, be.move, ie))
+             isReady() {
+               var WW, iW;
+               return null !== (WW = null === (iW = JW.current) || void 0 === iW ? void 0 : iW.isReady()) && void 0 !== WW && WW
```

#### 29. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L469-L470` → after: `L1170-L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1170-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L1170-L1172) · [Before (L469-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L469-L470)

```diff
-             onDeactivate: ee => {
-               (0, qe.l)() && oe.lostToPadScreen(), ki(ee)
+             resetCamera() {
+               var WW;
+               null === (WW = JW.current) || void 0 === WW || WW.resetCamera()
```

#### 30. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L472-L484` → after: `L1174-L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1174-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L1174-L1183) · [Before (L472-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L472-L484)

```diff
-             onPeekFrame: ie => {
-               (0, qe.l)() && (0, pe.d)(Ye.h) && ee.hasPlayer() ? fi(ie, (0, xe.l)(ie, (0, ke.h)().swapSticks).move, performance.now(), !0) : ki()
-             }
-           }),
-           Ei = (0, Ye.e)(ee),
-           gi = (() => {
-             const ee = be.h.subscribe(Ae.c, (ee => {
-               !ee && (0, qe.l)() && "inGame" === ye.e.get("gameState") && be.h.yR("showBottomMessage", {
-                 message: [{
-                   translationKey: "controller:disconnected"
-                 }],
-                 timeoutLength: 3e3,
-                 type: "Warning"
+             setOrbit(WW) {
+               var iW;
+               null === (iW = JW.current) || void 0 === iW || iW.setOrbit(WW)
+             },
+             turnCamera(WW) {
+               var iW;
+               const OW = LW.d[jW];
+               null === (iW = JW.current) || void 0 === iW || iW.setOrbit({
+                 ...OW,
+                 yaw: OW.yaw + WW
```

#### 31. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L486-L488` → after: `L1185-L1196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1185-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L1185-L1196) · [Before (L486-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L486-L488)

```diff
-             }));
-             return () => {
-               be.h.unsubscribe(ee)
+             },
+             async ensureReadyForCapture(WW) {
+               var iW;
+               await (null === (iW = JW.current) || void 0 === iW ? void 0 : iW.untilDrawn(WW))
+             },
+             getDevTools() {
+               var WW;
+               return null !== (WW = JW.current) && void 0 !== WW && WW.isReady() ? JW.current.dev : null
+             },
+             setNametagShown(WW) {
+               var iW, OW;
+               VW.current = WW, null === (iW = JW.current) || void 0 === iW || iW.setNametag(WW && null !== (OW = DW.current) && void 0 !== OW ? OW : null)
```

#### 32. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L490-L572` → after: `L1198-L1211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1198-L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L1198-L1211) · [Before (L490-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L490-L572)

```diff
-           })();
-         return () => {
-           ki(), ee.uninstall(), (0, ve.f)(!1), (0, le.e)(!1), be.h.unsubscribe(ge), be.h.unsubscribe(ei), Bi(), Ei(), gi(), Ne.uninstall()
-         }
-       }
-   },
-   41686: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => fe,
-       e: () => pe,
-       h: () => qe
-     });
-     var ye = He(1246),
-       be = He(4623),
-       Me = He(9518),
-       Ke = He(37761),
- ... (67 more removed lines; see GitHub link above)
+           }
+         }), [UW, jW, fW]), (0, mW.useEffect)((() => {
+           const WW = cW.b.register(bW);
+           let iW = !0;
+           const OW = WW => {
+             const OW = JW.current,
+               mW = LW.f.openCharacter(SW.current, jW);
+             if (JW.current = mW, tW = mW, OW) {
+               OW.close();
+               const {
+                 width: WW,
+                 height: iW
+               } = TW.current;
+               WW > 0 && iW > 0 && mW.resize(WW, iW)
```

#### 33. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L574-L638` → after: `L1213-L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1213-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L1213-L1292) · [Before (L574-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L574-L638)

```diff
-           }(ie, He, {
-             yawBoost: Ke,
-             aiming: be
-           })
-       },
-       Ke = (ee, ie) => {
-         const He = Math.max(0, Math.min(250, ie)) / 1e3;
-         return {
-           XV: ee.yawRadPerSec * He,
-           zV: ee.pitchRadPerSec * He
-         }
-       },
-       Ue = (ee, ie) => ie ? {
-         move: ee.rightStick,
-         look: ee.leftStick
-       } : {
- ... (49 more removed lines; see GitHub link above)
+             HW.current = {}, uW(!1), mW.ready.then((() => {
+               if (iW && JW.current === mW)
+                 if (uW(!0), WW) {
+                   mW.resetCamera();
+                   for (const WW of NW.p) {
+                     var OW;
+                     mW.setCosmetic(WW, null !== (OW = hW.current[WW]) && void 0 !== OW ? OW : (0, PW.d)(WW))
+                   }
+                 } else oW.current()
+             })).catch((WW => {
+               var OW;
+               (console.error("Failed to set up the character preview", WW), iW && JW.current === mW) && (null === (OW = eW.current) || void 0 === OW || OW.call(eW))
+             }))
+           };
+           OW(!1);
+           const mW = {
+ ... (64 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L640` → after: `L1294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L1294) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L640)

```diff
-   41690: (ee, ie, He) => {
+   37541: (WW, iW, OW) => {
```

#### 35. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L642-L643` → after: `L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L1296) · [Before (L642-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L642-L643)

```diff
-       e: () => be,
-       h: () => ye
+       d: () => PW
```

#### 36. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L645-L669` → after: `L1298-L1300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1298-L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L1298-L1300) · [Before (L645-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L645-L669)

```diff
-     const ye = ee => {
-       let {
-         mode: ie,
-         sneakHeld: He,
-         sneakPressed: ye,
-         sneakTogglePressed: be,
-         descending: Me,
-         canCrouch: Ke,
-         toggled: Ue
-       } = ee;
-       return Ke ? Me ? {
-         crouchHeld: He,
-         toggled: !1
-       } : "hold" === ie ? {
-         crouchHeld: He,
-         toggled: be ? !Ue : Ue
- ... (9 more removed lines; see GitHub link above)
+     var mW = OW(2037),
+       EW = OW(1584);
+     const NW = new class {
```

#### 37. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L671` → after: `L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L1302) · [Before (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L671)

```diff
-         this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
+         this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
```

#### 38. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L673-L674` → after: `L1304-L1313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1304-L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L1304-L1313) · [Before (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L673-L674)

```diff
-       lostToPadScreen() {
-         this.regainPending = !0
+       save(WW, iW) {
+         WW !== this.userContext && this.sendHeld(), this.userContext = WW;
+         for (const [mW, EW] of iW) this.pending.set(mW, EW);
+         if (null !== this.timer) return;
+         const OW = this.lastSentAt + 1100 - Date.now();
+         OW <= 0 ? this.send(WW) : (this.timer = setTimeout((() => {
+           this.sendHeld()
+         }), OW), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
+           "hidden" === document.visibilityState && this.sendHeld()
+         }))))
```

#### 39. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L676-L683` → after: `L1315-L1316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1315-L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L1315-L1316) · [Before (L676-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L676-L683)

```diff
-       filter(ee, ie) {
-         this.regainPending && (this.regainPending = !1, this.regainedAtMs = ie, this.graceEndsMs = ie + 500);
-         const He = ie < this.graceEndsMs;
-         return He && (ee.sneakPressed || ee.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, ie + 300))), ee.sneakHeld ? He && ee.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
-           sneakHeld: ee.sneakHeld && !this.ignoringHeld,
-           sneakPressed: ee.sneakPressed && !this.ignoringHeld,
-           sneakTogglePressed: ee.sneakTogglePressed && !He
-         }
+       sendHeld() {
+         null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
```

#### 40. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L685-L778` → after: `L1318-L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1318-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L1318-L1323) · [Before (L685-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L685-L778)

```diff
-     }
-   },
-   41666: (ee, ie, He) => {
-     He(9584)
-   },
-   41670: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Be
-     });
-     var ye = He(27),
-       be = He(9518),
-       Me = He(9529),
-       Ke = He(8926),
-       Ue = He(8954),
-       Fe = He(8935),
-       Je = He(41679),
- ... (78 more removed lines; see GitHub link above)
+       send(WW) {
+         const iW = Array.from(this.pending, (WW => {
+           let [iW, OW] = WW;
+           return {
+             NE: iW,
+             PE: OW
```

#### 41. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L780` → after: `L1325-L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1325-L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/251.js#L1325-L1328) · [Before (L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/251.js#L780)

```diff
-         })
+         }));
+         this.pending.clear(), this.lastSentAt = Date.now(), EW.e.updateCosmetics(WW, iW).catch((WW => {
+           console.error("Failed to update cosmetics", WW)
+         }))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/252.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/252.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f)

#### 1. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/252.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/252.js#L4)

```diff
-   39259: (ee, ie, He) => {
+   37559: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6` → after: `L6-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/252.js#L6-L14) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/252.js#L6)

```diff
-       d: () => fe
+       e: () => Li,
+       h: () => ki,
+       k: () => xi,
+       n: () => wi,
+       r: () => li,
+       s: () => Zi,
+       t: () => si,
+       u: () => ti,
+       x: () => bi
```

#### 3. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8-L10` → after: `L16-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L16-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/252.js#L16-L69) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/252.js#L8-L10)

```diff
-     var ye = He(186),
-       be = He(38476);
-     const Me = 1.2,
+     const mW = JSON.parse('{"sounds":{"lavaFlow":{"src":["/sounds/generatedSounds/ambient/lavaFlow.ba535035cf.ogg","/sounds/generatedSounds/ambient/lavaFlow.40571c16d7.m4a"],"ms":34000}}}'),
+       EW = JSON.parse('{"sounds":{"carCrash":{"src":["/sounds/generatedSounds/cars/carCrash.e9cf35a412.ogg","/sounds/generatedSounds/cars/carCrash.378aeb32a4.m4a"],"ms":539.7732426303855},"carDoorClose":{"src":["/sounds/generatedSounds/cars/carDoorClose.792cfcf48d.ogg","/sounds/g … [truncated]
+       NW = JSON.parse('{"sounds":{"crowdAmbience":{"src":["/sounds/generatedSounds/crowd/crowdAmbience.c8437e74dd.ogg","/sounds/generatedSounds/crowd/crowdAmbience.ea6c2e684d.m4a"],"ms":54935.51020408163},"crowdCheer":{"src":["/sounds/generatedSounds/crowd/crowdCheer.d4ed8b2c1c.o … [truncated]
+       PW = JSON.parse('{"sounds":{"cryptWhoosh":{"src":["/sounds/generatedSounds/customGame_horror/cryptWhoosh.844ce087ed.ogg","/sounds/generatedSounds/customGame_horror/cryptWhoosh.c75574f860.m4a"],"ms":1700},"doorKnock":{"src":["/sounds/generatedSounds/customGame_horror/doorKno … [truncated]
+       LW = JSON.parse('{"sounds":{"cloth1":{"src":["/sounds/generatedSounds/dig/cloth1.05a08dc4fb.ogg","/sounds/generatedSounds/dig/cloth1.f8fe54888d.m4a"],"ms":1671.8367346938776},"cloth2":{"src":["/sounds/generatedSounds/dig/cloth2.7829e18f4b.ogg","/sounds/generatedSounds/dig/c … [truncated]
+       cW = JSON.parse('{"sounds":{"extinguisherSpray":{"src":["/sounds/generatedSounds/fire/extinguisherSpray.a0ff717082.ogg","/sounds/generatedSounds/fire/extinguisherSpray.0d3a5c7316.m4a"],"ms":2598.7301587301586},"fireAlarmBell":{"src":["/sounds/generatedSounds/fire/fireAlarmB … [truncated]
+       wW = JSON.parse('{"sounds":{"caughtFish":{"src":["/sounds/generatedSounds/fishing/caughtFish.6e9d3bcd83.ogg","/sounds/generatedSounds/fishing/caughtFish.720027e64c.m4a"],"ms":1976.7573696145125},"reel":{"src":["/sounds/generatedSounds/fishing/reel.0d8a9b6ef7.ogg","/sounds/g … [truncated]
+       tW = JSON.parse('{"sounds":{"game_start_countdown_01":{"src":["/sounds/generatedSounds/gameStart/game_start_countdown_01.cf3394eef0.ogg","/sounds/generatedSounds/gameStart/game_start_countdown_01.3008ea2146.m4a"],"ms":1000.7709750566893},"game_start_countdown_02":{"src":["/ … [truncated]
+       ZW = JSON.parse('{"sounds":{"bullet_shell_bounce_general_07":{"src":["/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.1dee1c5e3e.ogg","/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.36191552b5.m4a"],"ms":823.0612244897959},"bullet_shell_bounce … [truncated]
+       xW = JSON.parse('{"sounds":{"pistol_cock_01":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_01.6bb1557b84.ogg","/sounds/generatedSounds/gunPistol/pistol_cock_01.213b7dc7b8.m4a"],"ms":510},"pistol_cock_02":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_02.61a … [truncated]
+       lW = JSON.parse('{"sounds":{"rifle_cock_01":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_01.7f2d42f56d.ogg","/sounds/generatedSounds/gunRifle/rifle_cock_01.7facd07e84.m4a"],"ms":705.3061224489796},"rifle_cock_02":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_ … [truncated]
+       AW = JSON.parse('{"sounds":{"semiAuto_cock_01":{"src":["/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.1bf3b423df.ogg","/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.c1262696d3.m4a"],"ms":500},"semiAuto_cock_02":{"src":["/sounds/generatedSounds/gunSem … [truncated]
+       bW = JSON.parse('{"sounds":{"shotgun_cock_01":{"src":["/sounds/generatedSounds/gunShotgun/shotgun_cock_01.c54ea385b9.ogg","/sounds/generatedSounds/gunShotgun/shotgun_cock_01.ee18a51143.m4a"],"ms":914.2857142857142},"shotgun_cock_02":{"src":["/sounds/generatedSounds/gunShotg … [truncated]
+       jW = JSON.parse('{"sounds":{"submachine_cock_01":{"src":["/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.32e98c51f0.ogg","/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.afcbd0a497.m4a"],"ms":500},"submachine_cock_02":{"src":["/sounds/generatedSound … [truncated]
+       UW = JSON.parse('{"sounds":{"bearRoar1":{"src":["/sounds/generatedSounds/mobBear/bearRoar1.63c50e53db.ogg","/sounds/generatedSounds/mobBear/bearRoar1.035fff53ae.m4a"],"ms":1011.1791383219954},"bearRoar2":{"src":["/sounds/generatedSounds/mobBear/bearRoar2.78b4410ea2.ogg","/s … [truncated]
+       kW = JSON.parse('{"sounds":{"catHiss1":{"src":["/sounds/generatedSounds/mobCat/catHiss1.33269da18a.ogg","/sounds/generatedSounds/mobCat/catHiss1.930fa86a61.m4a"],"ms":1252.0861678004535},"catHiss2":{"src":["/sounds/generatedSounds/mobCat/catHiss2.f2bda6f1b6.ogg","/sounds/ge … [truncated]
+ ... (38 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L12-L607` → after: `L71-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L71-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/252.js#L71-L143) · [Before (L12-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/252.js#L12-L607)

```diff
-         poseRig: "golem",
-         physicsBodyDimensions: {
-           width: .5,
-           height: 2.5
-         },
-         hitBoxDimensions: {
-           width: 2.2,
-           height: 2.8
-         },
-         eyeHeight: 2.3,
-         rideHeight: 2.3,
-         XF: .5,
-         Rye: !1
-       },
-       Ue = {
-         physicsBodyDimensions: {
- ... (580 more removed lines; see GitHub link above)
+         ambient: mW,
+         cars: EW,
+         crowd: NW,
+         customGame_horror: PW,
+         dig: LW,
+         fire: cW,
+         fishing: wW,
+         gameStart: tW,
+         gunMisc: ZW,
+         gunPistol: xW,
+         gunRifle: lW,
+         gunSemiAutomatic: AW,
+         gunShotgun: bW,
+         gunSubmachineGun: jW,
+         mobBear: UW,
+         mobCat: kW,
+ ... (57 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L610-L774` → after: `L146-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/252.js#L146-L148) · [Before (L610-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/252.js#L610-L774)

```diff
-       return qe[ee]
-     }
-   },
-   37893: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => ye
-     });
-     const ye = {
-       "skyblock:forged:astral-astral-astral": {
-         name: "Heart of the Cosmos",
-         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
-         damageMultiplier: 1.8,
-         cooldownMultiplier: .8,
-         ability: "starfall"
-       },
-       "skyblock:forged:astral-moonstone-sanguine": {
- ... (149 more removed lines; see GitHub link above)
+       const iW = Pi.get(WW);
+       if (void 0 === iW) throw new Error(`Invalid sound name ${WW} (not in any sound group)`);
+       return iW
```

#### 6. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L789-L800` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/252.js#L152) · [Before (L789-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/252.js#L789-L800)

```diff
-       return typeof Ue[ee] === pe[17] ? Ue[ee] = function(...ee) {
-         for (De(ee[pe[13]] = pe[2], ee[pe[5]] = 'auDmHP:FEhqtg4+2NsRj|XfOr6e<?$}`iW5!o8=c#T*b,AIB1@xGkLCQ93~M^/zZ.[>vU")&KyS(n;J0l_%w{YV7pd]', ee[pe[0]] = "" + (ee[pe[1]] || ""), ee[-pe[4]] = ee[pe[0]].length, ee[pe[10]] = [], ee[pe[8]] = pe[1], ee[-pe[9]] = pe[1], ee[pe[7]] = -p … [truncated]
-           if (ee[pe[6]] = ee[pe[5]].indexOf(ee[pe[0]][ee[-pe[3]]]), ee[pe[6]] !== -pe[2])
-             if (ee[pe[7]] < pe[1]) ee[pe[7]] = ee[pe[6]];
-             else {
-               De(ee[pe[7]] += ee[pe[6]] * pe[30], ee[pe[8]] |= ee[pe[7]] << ee[-pe[9]], ee[-pe[9]] += (ee[pe[7]] & pe[33]) > pe[34] ? pe[35] : pe[36]);
-               do {
-                 De(ee[pe[10]].push(ee[pe[8]] & pe[12]), ee[pe[8]] >>= pe[11], ee[-pe[9]] -= pe[11])
-               } while (ee[-pe[9]] > pe[7]);
-               ee[pe[7]] = -pe[2]
-             } return ee[pe[7]] > -pe[2] && ee[pe[10]].push((ee[pe[8]] | ee[pe[7]] << ee[-pe[9]]) & pe[12]), ze(ee[pe[10]])
-       }(Fe[ee]) : Ue[ee]
+       return ci(WW).group
```

#### 7. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L803-L804` → after: `L155-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/252.js#L155-L156) · [Before (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/252.js#L803-L804)

```diff
-     function ze(...ee) {
-       return ee[pe[13]] = pe[2], typeof oe !== pe[17] && oe ? (new oe).decode(new Re(ee[pe[1]])) : typeof ke !== pe[17] && ke ? ke.from(ee[pe[1]]).toString("utf-8") : Te(ee[pe[1]])
+     function ti(WW) {
+       return ci(WW).file
```

#### 8. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L807-L881` → after: `L159-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/252.js#L159-L160) · [Before (L807-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/252.js#L807-L881)

```diff
-     function Be() {}
-     De(Ue = {}, Fe = [">U;`9ca", "W:w;r3:oF", 'r$z?!y04Tz.t#mV!^U)k^KC#aRp_(+G?:i"e.ca', "dA0Cq1a", '~OxG("s!F.&)(<]?bsTGs=z:52j0w=9!', "=e)kJ16T<s?0rK=R?boqDL:*LjGRu", "L35i5Y)~94", ";:5KA92L$M[6:8O!c:6<5#oRT[oFC/Q!(9(L1Ga", "Bb7@%AtZ<s2O{2P=rCHFZ0BY[h/l)4l52ZKCLK1}~z%)K&l5Igm", … [truncated]
-       De(ee[pe[13]] = pe[1], ee[-pe[0]] = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }], ee[pe[2]] = pe[18], ee[-pe[14]] = []);
-       try {
-         De(ee[pe[2]] = Object, ee[-pe[14]][pe[25]]("".__proto__.constructor.name))
-       } catch (Fe) {}
-       ee: for (ee[-pe[15]] = pe[1]; ee[-pe[15]] < ee[-pe[0]][pe[13]]; ee[-pe[15]]++) try {
-         for (ee[pe[2]] = ee[-pe[0]][ee[-pe[15]]](), ee[pe[16]] = pe[1]; ee[pe[16]] < ee[-pe[14]][pe[13]]; ee[pe[16]]++)
- ... (59 more removed lines; see GitHub link above)
+     function Zi(WW) {
+       return Pi.has(WW)
```

#### 9. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L927-L952` → after: `L163-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L163-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/252.js#L163-L165) · [Before (L927-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/252.js#L927-L952)

```diff
-         function Xe() {
-           console.log((function(...ee) {
-             for (De(ee[pe[13]] = pe[2], ee[pe[5]] = pe[1], ee[pe[19]] = {}, ee[-pe[72]] = pe[1], ee[pe[10]] = pe[1], ee[pe[8]] = pe[1], ee[pe[46]] = ee[pe[1]].length), ee[pe[7]] = pe[1]; ee[pe[7]] < ee[pe[46]]; ee[pe[7]]++) {
-               for (De(ee[pe[19]] = {}, ee[-pe[72]] = pe[1], ee[pe[10]] = pe[2]), ee[pe[11]] = ee[pe[7]] + pe[2]; ee[pe[11]] < ee[pe[46]]; ee[pe[11]]++) ee[pe[1]][ee[pe[7]]].x !== ee[pe[1]][ee[pe[11]]].x || ee[pe[1]][ee[pe[7]]].y !== ee[pe[1]][ee[pe[11]]].y ? (ee[pe[1]][ee[pe[7]]] … [truncated]
-               De(ee[-pe[72]] += ee[pe[10]], ee[pe[5]] = Math.max(ee[pe[5]], ee[-pe[72]]))
-             }
-             return ee[pe[5]]
-           }))
-         }
-         Te(147) + pe[52] in Be && Xe(), De(we(ge, Ee, Ze), we(Oe, Ze, Ee), be()[Te(pe[29])](de, Ze, Oe));
-         const te = be()[Te(pe[88])](Ze),
-           Pe = be()[Te(pe[3])](Ee, Ze) / ee[pe[8]] / te,
-           Ae = Math[Te(pe[79])](Pe, pe[1]) + pe[2];
-         if (ee[pe[8]] * ee[pe[8]] < be()[pe[73]](Oe)) {
-           function Ye(...ee) {
-             for (De(ee[pe[13]] = pe[2], ee[pe[74]] = 'S4hDRIkng:<u/>rvH}Q9K~0Z%PX*olU8OW=N7,ac2p#@$yFBYe5zbJ`_L!+w3Am;6j{TxECd1?]Vs[.)&tiM|Gfq("^', ee[pe[0]] = "" + (ee[pe[1]] || ""), ee[pe[38]] = ee[pe[0]].length, ee[pe[37]] = [], ee[pe[8]] = pe[1], ee[pe[52]] = pe[1], ee[pe[75] … [truncated]
- ... (10 more removed lines; see GitHub link above)
+     function xi(WW, iW) {
+       return li(WW).includes(iW)
+     }
```

#### 10. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L954-L956` → after: `L167-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L167-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/252.js#L167-L171) · [Before (L954-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/252.js#L954-L956)

```diff
-           function Ve(...ee) {
-             return ee[pe[13]] = pe[2], typeof Ue[ee[pe[1]]] === pe[17] ? Ue[ee[pe[1]]] = Ye(Fe[ee[pe[1]]]) : Ue[ee[pe[1]]]
-           }
+     function li(WW) {
+       if (!(WW in Ni)) throw new Error(`Invalid sound group ${WW}`);
+       return Object.keys(Ni[WW].sounds)
+     }
+     const Ai = new Map;
```

#### 11. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L958-L975` → after: `L173-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L173-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/252.js#L173-L178) · [Before (L958-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/252.js#L958-L975)

```diff
-           function ae(...ee) {
-             De(ee[pe[13]] = pe[1], ee[pe[5]] = function(...ie) {
-               return De(ie[pe[13]] = pe[38], ie[pe[76]] = {}), ie[pe[0]].length !== ie[pe[1]].length + ie[pe[2]].length ? pe[49] : ee[-pe[77]](ie[pe[1]], ie[pe[2]], ie[pe[0]], pe[1], pe[1], pe[1], ie[pe[76]])
-             }, ee[-pe[77]] = function(ie, He, ye, be, Me, Ke, Ue) {
-               var Fe = pe[49];
-               return Ke >= ye.length ? pe[78] : Ue["" + be + Me + Ke] !== pe[18] ? Ue["" + be + Me + Ke] : (ye[Ke] === ie[be] && ye[Ke] === He[Me] ? Fe = ee[-pe[77]](ie, He, ye, be + pe[2], Me, Ke + pe[2], Ue) || ee[-pe[77]](ie, He, ye, be, Me + pe[2], Ke + pe[2], Ue) : ye[Ke] == … [truncated]
-             }, console.log(ee[pe[5]]))
-           }
-           Ve(152) + "r" in Be && ae(), be()[Ve(pe[75])](Ee, Ee, Oe, Ae)
-         }
-         De(ee[pe[28]] = (pe[1], Me.v)(ee[pe[28]], 1, Math[Te(pe[79])](pe[2], Math[Te(154)](pe[1], -Pe, pe[2] - te / ee[pe[8]]))), be()[Te(pe[47])](Ee, Ee, de))
-       }
-       const oe = We;
-       if (De(be()[ie(156)](oe, Ee, Ze), oe[pe[2]] = pe[1], ee[pe[82]] = be()[ie(157)](oe)), !Je) {
-         function ce() {
-           function ee(...ee) {
- ... (2 more removed lines; see GitHub link above)
+     function bi(WW) {
+       let iW = Ai.get(WW);
+       return void 0 === iW && (iW = [...Pi.keys()].filter((iW => iW.startsWith(WW))), Ai.set(WW, iW)), iW
+     }
+     const ji = new Map,
+       Ui = new Map;
```

#### 12. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L977-L997` → after: `L180-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L180-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/252.js#L180-L189) · [Before (L977-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/252.js#L977-L997)

```diff
-           function ie(...ee) {
-             switch (ee[pe[13]] = pe[2], ((ee[pe[1]] & pe[80]) !== pe[1]) * pe[2] + (ee[pe[1]] < pe[1]) * pe[0]) {
-               case pe[1]:
-                 return [ee[pe[1]] % pe[80], Math.trunc(ee[pe[1]] / pe[81])];
-               case pe[2]:
-                 return [ee[pe[1]] % pe[80] - pe[80], Math.trunc(ee[pe[1]] / pe[81]) + pe[2]];
-               case pe[0]:
-                 return [((ee[pe[1]] + pe[80]) % pe[80] + pe[80]) % pe[80], Math.round(ee[pe[1]] / pe[81])];
-               case pe[38]:
-                 return [ee[pe[1]] % pe[80], Math.trunc(ee[pe[1]] / pe[81])]
-             }
-           }
-           let He = ee([pe[0], pe[37]]),
-             ye = ee([pe[2], pe[0]]),
-             be = He + ye,
-             Me = be - ye,
- ... (5 more removed lines; see GitHub link above)
+     function ki(WW) {
+       const iW = bi(WW),
+         OW = iW[Math.floor(Math.random() * iW.length)];
+       if (iW.length > 1) {
+         const iW = function(WW, iW) {
+           const OW = `${iW}\n${WW}`;
+           let mW = Ui.get(OW);
+           return void 0 === mW && (mW = bi(WW).filter((WW => Pi.get(WW).group === iW)), Ui.set(OW, mW)), mW
+         }(WW, Pi.get(OW).group);
+         iW.length > 1 ? ji.set(OW, iW) : ji.delete(OW)
```

#### 13. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L999-L1110` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/252.js#L191-L192) · [Before (L999-L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/252.js#L999-L1110)

```diff
-       const Re = ee[pe[22]][ie(159) + ie(160) + ie(161)],
-         ke = Re ? Math[ie(162)](Re, ee[pe[82]]) : ee[pe[82]];
-       be()[ie(163) + ie(164)](oe, oe);
-       const qe = ee[pe[7]] !== pe[56] && ee[pe[7]] !== void pe[1] ? ee[pe[7]] : ee[pe[22]][ie(165) + ie(166) + ie(167) + ie(168)];
-       if (ke > pe[1]) {
-         function xe(ee) {
-           var ie, He, ye, be, Me, Ke, Ue;
-           for (De(ie = "" + (ee || ""), He = ie.length, ye = [], be = pe[1], Me = pe[1], Ke = -pe[2]), Ue = pe[1]; Ue < He; Ue++) {
-             var Fe = 'a$G)"Fz(IrSTPH4pu%8EXd3hmyR*.=K?nJ:9~_0DC7U{]6eNtLs,x1&OMoj|Z#fYB;!2g+>kbA@Q/cV[ivlwq<5}`^W'.indexOf(ie[Ue]);
-             if (Fe !== -pe[2])
-               if (Ke < pe[1]) Ke = Fe;
-               else {
-                 De(Ke += Fe * pe[30], be |= Ke << Me, Me += (Ke & pe[33]) > pe[34] ? pe[35] : pe[36]);
-                 do {
-                   De(ye.push(be & pe[12]), be >>= pe[11], Me -= pe[11])
-                 } while (Me > pe[7]);
- ... (96 more removed lines; see GitHub link above)
+       return OW
+     }
```

#### 14. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1112-L1130` → after: `L194-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/252.js#L194-L195) · [Before (L1112-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/252.js#L1112-L1130)

```diff
-           function Ne(...ee) {
-             De(ee[pe[13]] = pe[1], ee[pe[106]] = function(...ie) {
-               return ie[pe[13]] = pe[0], ee[pe[19]]({}, ie[pe[1]], ie[pe[2]])
-             }, ee[pe[19]] = function(...ie) {
-               if (De(ie[pe[13]] = pe[38], ie[pe[38]] = {}), ie[pe[1]][ie[pe[2]] + ie[pe[0]]] !== pe[18]) return ie[pe[1]][ie[pe[2]] + ie[pe[0]]];
-               if (ie[pe[2]] === ie[pe[0]]) return pe[78];
-               for (ie[pe[19]] = pe[1]; ie[pe[19]] < ie[pe[2]].length; ie[pe[19]]++) ie[pe[38]][ie[pe[2]][ie[pe[19]]]] === pe[18] && (ie[pe[38]][ie[pe[2]][ie[pe[19]]]] = pe[1]), ie[pe[38]][ie[pe[0]][ie[pe[19]]]] === pe[18] && (ie[pe[38]][ie[pe[0]][ie[pe[19]]]] = pe[1]), De(ie[pe[3 … [truncated]
-               for (ie[pe[67]] in ie[pe[38]])
-                 if (ie[pe[38]][ie[pe[67]]] !== pe[1]) return ie[pe[1]][ie[pe[2]] + ie[pe[0]]] = pe[49], pe[49];
-               for (ie[pe[22]] = pe[2]; ie[pe[22]] < ie[pe[2]].length; ie[pe[22]]++)
-                 if (ee[pe[19]](ie[pe[1]], ie[pe[2]].substr(pe[1], ie[pe[22]]), ie[pe[0]].substr(pe[1], ie[pe[22]])) && ee[pe[19]](ie[pe[1]], ie[pe[2]].substr(ie[pe[22]]), ie[pe[0]].substr(ie[pe[22]])) || ee[pe[19]](ie[pe[1]], ie[pe[2]].substr(pe[1], ie[pe[22]]), ie[pe[0]].substr( … [truncated]
-               return ie[pe[1]][ie[pe[2]] + ie[pe[0]]] = pe[49], pe[49]
-             }, console.log(ee[pe[106]]))
-           }
-           he(185) + pe[52] in Be && Ne(), ve = ue
-         }
- ... (3 more removed lines; see GitHub link above)
+     function si(WW) {
+       return ji.get(WW)
```

#### 15. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1133` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/252.js#L198) · [Before (L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/252.js#L1133)

```diff
-   38476: (ee, ie, He) => {
+   37563: (WW, iW, OW) => {
```

#### 16. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1136` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/252.js#L201) · [Before (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/252.js#L1136)

```diff
-       e: () => Ue
+       f: () => NW
```

#### 17. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1138-L1180` → after: `L203-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/252.js#L203-L204) · [Before (L1138-L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/252.js#L1138-L1180)

```diff
-     var ye = He(38478),
-       be = He(1952);
-     const Me = 2,
-       Ke = 1,
-       Ue = {
-         XF: 1,
-         fluidDrag: -1,
-         fluidDragHorizontal: -1,
-         fluidDragVertical: -1,
-         gravityMultiplier: 2,
-         width: .5,
-         height: 1.8,
-         canRun: !0,
-         jumpMultiplier: 1,
-         upwardImpulseOnUse: 0,
-         canAutoStep: !0,
- ... (27 more removed lines; see GitHub link above)
+     const mW = "__default",
+       EW = ["end", "stop", "playerror"];
```

#### 18. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1182-L1192` → after: `L206-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L206-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/252.js#L206-L216) · [Before (L1182-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/252.js#L1182-L1192)

```diff
-     function Fe(ee, ie, He, Ue, Fe, Je, oe) {
-       if (Fe.speed) return (0, ye.e)(ie, He, Ue, Fe, Je, oe, ee), void(Fe.ticksToReachMaxIdleFriction = Me);
-       const Re = Ue.isOnGround(),
-         ke = ie.bloxd.getSyncedClientOptions(ie.bloxd.getPlayerReader(He)),
-         qe = null === ke ? ie.bloxd.getClientPredictedOption(He, "groundFrictionScale") : ke.groundFrictionScale,
-         fe = null === ke ? ie.bloxd.getClientPredictedOption(He, "airFrictionScale") : ke.airFrictionScale,
-         Te = Re ? qe : fe,
-         pe = Math.max(Ke, Te),
-         Xe = Fe.ticksToReachMaxIdleFriction / Me,
-         ze = (0, be.v)(pe, Te, Xe);
-       Je.friction = ee.standingFriction * ((null === ke ? ie.bloxd.getClientPredictedOption(He, "airMomentumConservation") : ke.airMomentumConservation) ? ze : Te), Fe.ticksToReachMaxIdleFriction > 0 && Fe.ticksToReachMaxIdleFriction--
+     function NW(WW, iW) {
+       const OW = () => {
+         if (function(WW) {
+             return "loaded" === WW.state() && !WW.playing() && !WW._playLock
+           }(WW)) {
+           for (const iW of EW) WW.off(iW, OW);
+           WW.unload(), null === iW || void 0 === iW || iW()
+         }
+       };
+       for (const mW of EW) WW.on(mW, OW);
+       OW()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/253.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/253.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db)

#### 1. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/253.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/253.js#L4)

```diff
-   40888: (ee, ie, He) => {
+   42561: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L6-L10` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/253.js#L6) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/253.js#L6-L10)

```diff
-       getBlockFaces: () => ke,
-       getIngameIconUrl: () => Te,
-       getItemIconUrl: () => fe,
-       getItemTextureUrl: () => qe,
-       getParticleTextureUrl: () => pe
+       LobbyManageView: () => si
```

#### 3. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L12-L18` → after: `L8-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L8-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/253.js#L8-L62) · [Before (L12-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/253.js#L12-L18)

```diff
-     var ye = He(4861),
-       be = He(37853),
-       Me = He(9952),
-       Ke = He(3473);
-     const Ue = new Set,
-       Fe = new Set;
-     let Je = null;
+     var mW = OW(62),
+       EW = OW(1556),
+       NW = OW(38169),
+       PW = OW(3348),
+       LW = OW(3353),
+       cW = OW(3332),
+       wW = OW(37824);
+ 
+     function tW() {
+       const [WW, iW] = (0, mW.useState)(new Map);
+       return {
+         get: iW => WW.get(iW),
+         hold: (0, mW.useCallback)(((WW, OW, mW) => {
+           iW((iW => new Map(iW).set(WW, OW))), mW.then((() => {
+             iW((iW => {
+               const OW = new Map(iW);
+ ... (39 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L21-L23` → after: `L65-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L65-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/253.js#L65-L75) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/253.js#L21-L23)

```diff
-       Ue.has(ee) || (Ue.add(ee), Fe.add(ee), Je ??= setTimeout((() => {
-         console.warn(`Docs gallery: no default texture for ${Fe.size} names`, [...Fe]), Fe.clear(), Je = null
-       }), 1e3))
+       let {
+         status: iW
+       } = WW;
+       return (0, oW.jsx)("span", {
+         className: xW()("LobbyManageStatus", {
+           LobbyManageStatusRefused: !iW.ok
+         }),
+         children: (0, oW.jsx)(nW.d, {
+           text: iW.text
+         })
+       })
```

#### 5. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L26-L31` → after: `L78-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L78-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/253.js#L78-L524) · [Before (L26-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/253.js#L26-L31)

```diff
-     function Re(ee, ie) {
-       try {
-         return (0, Me.getDefaultTexture)(ee, ie).url
-       } catch {
-         return oe(ee), null
-       }
+     function eW(WW) {
+       let {
+         names: iW,
+         cap: OW,
+         filterFrom: EW,
+         moreLabel: NW,
+         reveal: PW = null,
+         renderRow: LW
+       } = WW;
+       const {
+         t: cW
+       } = (0, lW.B)(), [wW, tW] = (0, mW.useState)(!1), [ZW, xW] = (0, mW.useState)(""), bW = wW || null !== PW && iW.indexOf(PW) >= OW, UW = (bW || iW.length <= OW) && null !== EW && iW.length > EW, kW = ZW.trim().toLowerCase();
+       let sW = bW ? iW : iW.slice(0, OW);
+       return UW && "" !== kW && (sW = sW.filter((WW => WW.toLowerCase().includes(kW)))), (0, oW.jsxs)(oW.Fragment, {
+         children: [UW && (0, oW.jsx)(uW.b, {
+           className: "LobbyManageFilter",
+ ... (431 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L36-L49` → after: `L529-L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L529-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/253.js#L529-L769) · [Before (L36-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/253.js#L36-L49)

```diff
-       const Me = be.o[ee];
-       if (!Me || Me.itemTexture || !Me.textureInfo) return null;
-       const {
-         textureInfo: Ue,
-         texturePerSide: Fe
-       } = Me, Je = ee => {
-         return "string" === typeof(ie = Fe && Array.isArray(Ue) ? Ue[Fe[ee]] : Ue) ? Re(ie, Ke.j.BLOCK) : ie && "object" === typeof ie && "animTextures" in ie ? Re((0, ye.l)(ie), Ke.j.BLOCK) : null;
-         var ie
-       }, oe = Je(2);
-       return oe ? {
-         top: oe,
-         left: null !== (ie = Je(4)) && void 0 !== ie ? ie : oe,
-         right: null !== (He = Je(0)) && void 0 !== He ? He : oe
-       } : null
+       let {
+         state: EW,
+         lobbyName: NW,
+         listed: PW,
+         isListed: LW,
+         Hk: cW,
+         mY: wW,
+         statusOf: tW
+       } = WW;
+       const {
+         t: ZW,
+         selectedLanguage: xW
+       } = (0, lW.B)(), AW = (0, CW.l)(), bW = (0, sW.g)("players"), UW = null === bW.localId ? null : null !== (iW = null === (OW = bW.byId[bW.localId]) || void 0 === OW ? void 0 : OW.name) && void 0 !== iW ? iW : null, kW = (0, mW.useMemo)((() => (0, RW.g)(AW.friends, NW, EW.her … [truncated]
+         let {
+           refused: iW,
+           listed: OW,
+ ... (225 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L54-L55` → after: `L774-L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L774-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/253.js#L774-L910) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/253.js#L54-L55)

```diff
-       const He = be.o[ee];
-       return Re(null !== (ie = null === He || void 0 === He ? void 0 : He.itemTexture) && void 0 !== ie ? ie : "string" === typeof(null === He || void 0 === He ? void 0 : He.textureInfo) ? He.textureInfo : ee, Ke.j.ITEM)
+       let {
+         manage: OW,
+         lobbyName: NW,
+         worldCode: PW
+       } = WW;
+       const {
+         t: LW
+       } = (0, lW.B)(), {
+         settings: cW,
+         loading: wW,
+         change: tW,
+         retry: ZW,
+         refresh: xW
+       } = (0, XW.j)(NW), AW = (0, CW.l)(), {
+         state: UW
+       } = OW, kW = (0, mW.useRef)(cW);
+ ... (121 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L59-L60` → after: `L914-L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L914-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/253.js#L914-L1335) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/253.js#L59-L60)

```diff
-       var ie, He;
-       return be.o[ee] ? null !== (ie = null === (He = ke(ee)) || void 0 === He ? void 0 : He.top) && void 0 !== ie ? ie : qe(ee) : null
+       var iW;
+       let {
+         manage: OW,
+         lobbyName: mW
+       } = WW;
+       const {
+         t: NW
+       } = (0, lW.B)(), {
+         state: PW
+       } = OW, LW = tW(), cW = null !== (iW = PW.whitelist) && void 0 !== iW ? iW : [];
+       return (0, oW.jsxs)("div", {
+         className: "LobbyManagePage",
+         children: [(0, oW.jsxs)("div", {
+           className: "LobbyManageBox",
+           children: [(0, oW.jsx)(jW.b, {
+             label: NW("worldSocial:whoCanJoin")
+ ... (406 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L64` → after: `L1339-L1491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L1339-L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/253.js#L1339-L1491) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/253.js#L64)

```diff
-       return Re(ee, Ke.j.ICON)
+       var iW;
+       const {
+         t: OW
+       } = (0, lW.B)(), {
+         pages: NW,
+         landing: PW
+       } = WW, cW = (0, mW.useRef)(null), wW = (0, mW.useRef)(null), tW = (0, mW.useRef)(null), ZW = (0, mW.useRef)(new Map), [AW, bW] = (0, mW.useState)(null), sW = (0, mW.useRef)(AW), MW = (0, mW.useRef)(0), [KW, SW] = (0, mW.useState)(NW[0]), YW = null !== AW && void 0 !== AW ? … [truncated]
+         const iW = Zi(ti(WW.manage.state.rules, (WW => WW.value)));
+         return Math.max(1, Math.ceil(iW.length / Ai))
+       })), hW = TW.flatMap((WW => "rules" === WW ? Array(JW).fill(WW) : [WW])), HW = function(WW, iW) {
+         const [OW, EW] = (0, mW.useState)(WW), NW = OW >= iW;
+         return NW && OW !== 1 / 0 && EW(1 / 0), (0, mW.useLayoutEffect)((() => {
+           if (NW) return;
+           let WW = !0;
+           return (0, kW.c)().then((() => {
+             WW && EW((WW => WW + 1))
+ ... (137 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L68-L71` → after: `L1495-L1497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR1495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L1495-L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/253.js#L1495-L1497) · [Before (L68-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/253.js#L68-L71)

```diff
-       try {
-         return He(3636)(`./${ee}.png`)
-       } catch {
-         return oe(ee), null
+       return void 0 === (null === WW || void 0 === WW ? void 0 : WW.page) ? null : {
+         page: WW.page,
+         seq: WW.seq
```

#### 11. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L75` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/253.js#L1558) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/253.js#L75)

```diff
-   37893: (ee, ie, He) => {
+   37824: (WW, iW, OW) => {
```

#### 12. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L77` → after: `L1560-L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR1560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L1560-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/253.js#L1560-L1561) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/253.js#L77)

```diff
-       d: () => ye
+       e: () => tW,
+       f: () => cW
```

#### 13. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L80-L178` → after: `L1714-L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR1714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L1714-L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/253.js#L1714-L1780) · [Before (L80-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/253.js#L80-L178)

```diff
-       "skyblock:forged:astral-astral-astral": {
-         name: "Heart of the Cosmos",
-         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
-         damageMultiplier: 1.8,
-         cooldownMultiplier: .8,
-         ability: "starfall"
-       },
-       "skyblock:forged:astral-moonstone-sanguine": {
-         name: "Eclipse Edge",
-         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
-         damageMultiplier: 1.7,
-         cooldownMultiplier: .81,
-         ability: "eclipseField"
-       },
-       "skyblock:forged:astral-diamond-moonstone": {
-         name: "Starcutter",
- ... (83 more removed lines; see GitHub link above)
+       gamemode: !1,
+       roles: [],
+       fixedRole: null,
+       kick: !1,
+       ban: !1,
+       unban: !1
+     };
+ 
+     function wW(WW) {
+       const iW = WW.can.roles.filter((iW => "none" !== iW || "none" !== WW.role));
+       return iW.some((iW => iW !== WW.role)) ? iW : []
+     }
+ 
+     function tW(WW, iW) {
+       if ("banned" === WW.section) return {
+         ...cW,
+ ... (51 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L181-L195` → after: `L1840-L2046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L1840-L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/253.js#L1840-L2046) · [Before (L181-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/253.js#L181-L195)

```diff
-       "skyblock:forged:diamond-moonstone-gold": {
-         name: "Jeweller's Pride",
-         lore: "Too pretty to fight with. Fight with it anyway.",
-         damageMultiplier: 1.24,
-         cooldownMultiplier: .91,
-         ability: "gildedEdge"
-       },
-       "skyblock:forged:gold-gold-gold": {
-         name: "King's Ransom",
-         lore: "Worth more than the treasure it guards.",
-         damageMultiplier: 1.18,
-         cooldownMultiplier: .91,
-         ability: "gildedEdge",
-         traits: {
-           coins: 2.5
+       tW = ["unlisted", "public", "whitelist", "private"];
+ 
+     function ZW(WW) {
+       let {
+         visibility: iW,
+         onPick: OW
+       } = WW;
+       const {
+         t: EW
+       } = (0, PW.B)(), ZW = (0, mW.useRef)([]);
+       return (0, cW.jsx)("div", {
+         className: "WorldSocialTiles",
+         role: "group",
+         "aria-label": EW("worldSocial:whoCanJoin"),
+         children: tW.map(((WW, mW) => {
+           const PW = WW === iW;
+ ... (191 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L197-L206` → after: `L2048-L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR2048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L2048-L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/253.js#L2048-L2211) · [Before (L197-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/253.js#L197-L206)

```diff
-       },
-       "skyblock:forged:gold-moonstone-gold": {
-         name: "Midas Moon",
-         lore: "Mobs it fells seem to rattle with coins.",
-         damageMultiplier: 1.18,
-         cooldownMultiplier: .92,
-         ability: "gildedEdge",
-         traits: {
-           coins: 2,
-           bossBane: .6
+       }
+     }
+ 
+     function xW(WW) {
+       let {
+         player: iW,
+         isFriend: OW = !1,
+         status: mW,
+         showLocation: cW = void 0 === mW,
+         hZ: ZW,
+         onSendFriendRequest: xW,
+         actions: lW,
+         zIndex: AW
+       } = WW;
+       const {
+         t: bW
+ ... (148 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/254.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/254.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6)

#### 1. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L4` → after: `L4-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L4-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/254.js#L4-L562) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/254.js#L4)

```diff
-   37920: (ee, ie, He) => {
+   40980: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => mW,
+       e: () => EW
+     });
+     const mW = "The world isn't loaded, so no blocks can be seen.",
+       EW = "The world isn't loaded, so nothing in it can be seen."
+   },
+   40305: (WW, iW, OW) => {
+     function mW(WW) {
+       return !(!WW.lobbyLeaderboardInfo && !WW.lobbyManage)
+     }
+     OW.d(iW, {
+       d: () => mW
+     })
+   },
+ ... (543 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L10-L17` → after: `L570-L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L570-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/254.js#L570-L767) · [Before (L10-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/254.js#L10-L17)

```diff
-     const ye = 1 / 2.2,
-       be = 2.2;
-     Math.sqrt(5);
-     let Me = .001
-   },
-   37938: (ee, ie, He) => {
-     function ye(ee) {
-       return parseInt(ee.toString().replace(/\W/g, ""))
+     var mW = OW(40469),
+       EW = OW(1217),
+       NW = OW(2061),
+       PW = OW(2072),
+       LW = OW(4454),
+       cW = OW(37970),
+       wW = OW(1351),
+       tW = OW(42109),
+       ZW = OW(5575),
+       xW = OW(3305),
+       lW = OW(42116),
+       AW = OW(42118),
+       bW = OW(42165);
+     let jW = null;
+ 
+     function UW(WW) {
+ ... (182 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L21-L28` → after: `L771-L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L771-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/254.js#L771-L810) · [Before (L21-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/254.js#L21-L28)

```diff
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
-       return Math.abs(ee - ie) <= He
-     }
- 
-     function Me(ee, ie, He) {
-       let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
-       return ee < ie - ye || ee > He + ye
-     }
+       if (PW(WW)) throw WW;
+       console.error(iW, WW)
+     }
+ 
+     function cW(WW, iW, OW, EW, NW) {
+       if (iW % EW !== 0 || iW + OW > WW.byteLength) throw new mW(`${NW}: ${OW} bytes at ${iW}, ${EW}-aligned, outside ${WW.byteLength} bytes of memory`)
+     }
+ 
+     function wW(WW, iW, OW, mW, EW) {
+       return 0 === OW ? null : (cW(iW, OW, mW * WW.BYTES_PER_ELEMENT, WW.BYTES_PER_ELEMENT, EW), new WW(iW, OW, mW))
+     }
+ 
+     function tW(WW, iW, OW, mW, EW) {
+       return 0 === iW ? null : (cW(WW, iW, OW, mW, EW), new DataView(WW, iW, OW))
+     }
+   },
+ ... (24 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L31-L83` → after: `L813-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L813-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/254.js#L813-L820) · [Before (L31-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/254.js#L31-L83)

```diff
-       return ee === ie ? ee : Math.random() * (ie - ee) + ee
-     }
- 
-     function Ue(ee, ie, He) {
-       return ee + (ie - ee) * He
-     }
- 
-     function Fe(ee, ie, He) {
-       let ye = pe(ie - ee, 360);
-       return ye > 180 && (ye -= 360), ee + ye * ke(He)
-     }
- 
-     function Je(ee, ie, He) {
-       let ye;
-       return ye = ee != ie ? ke((He - ee) / (ie - ee)) : 0, ye
-     }
- ... (37 more removed lines; see GitHub link above)
+       try {
+         WW(iW)
+       } catch (OW) {
+         console.error("[bloxd-wasm-client] the game chunk's listener failed", OW)
+       }
+     }
+ 
+     function tW() {
```

#### 5. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L88-L180` → after: `L847-L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L847-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/254.js#L847-L853) · [Before (L88-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/254.js#L88-L180)

```diff
-       return ee - Math.floor(ee / ie) * ie
-     }
- 
-     function Xe(ee, ie, He) {
-       return (ee - ie) / (He - ie)
-     }
- 
-     function ze(ee, ie, He) {
-       return ee * (He - ie) + ie
-     }
- 
-     function Be(ee, ie) {
-       let He = pe(ie - ee, 360);
-       return He > 180 && (He -= 360), He
-     }
- 
- ... (77 more removed lines; see GitHub link above)
+       NW = {
+         running: WW,
+         shell: iW
+       }
+     }
+ 
+     function bW() {
```

#### 6. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L183-L227` → after: `L856-L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L856-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/254.js#L856-L869) · [Before (L183-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/254.js#L183-L227)

```diff
- 
-     function be(ee, ie) {
-       return ye(ee, ie)
-     }
-     He.d(ie, {
-       c: () => ye,
-       g: () => be,
-       j: () => Ke
-     });
-     const Me = ["push", "splice", "pop", "shift", "unshift"];
- 
-     function Ke(ee, ie) {
-       const He = Me.map((He => function(ee, ie, He) {
-         const ye = ee[ie];
-         if ("function" !== typeof ye) return null;
-         const be = function() {
- ... (29 more removed lines; see GitHub link above)
+     async function jW(WW) {
+       const iW = NW;
+       if ((null === iW || void 0 === iW ? void 0 : iW.running) !== WW) throw new Error("the core's session has ended");
+       const OW = await xW(iW.shell.audio).catch((WW => {
+         throw new mW(WW)
+       }));
+       if (null !== PW) return PW;
+       if (NW !== iW || WW.isStopped) throw new Error("the core stopped while the game code loaded");
+       if (PW = OW.startGameHost(WW, iW.shell), null === PW) throw new Error("the core's shared tables didn't read, so the game can't start");
+       return PW
+     }
+ 
+     function UW() {
+       null !== PW && (null !== cW ? cW.endGameHost(PW) : PW.closeGame()), PW = null, NW = null
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/255.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/255.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c)

#### 1. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/255.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/255.js#L3)

```diff
- export const ids = [255, 262];
+ export const ids = [255];
```

#### 2. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5-L1093` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/255.js#L4) · [Before (L5-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/255.js#L5-L1093)

```diff
-   39102: ee => {
-     ee.exports = function(ee) {
-       return null != ee && null != ee.constructor && "function" === typeof ee.constructor.isBuffer && ee.constructor.isBuffer(ee)
-     }
-   },
-   39087: (ee, ie, He) => {
-     var ye = He(39089),
-       be = He(39095),
-       Me = He(39102);
-     He.g.__TYPEDARRAY_POOL || (He.g.__TYPEDARRAY_POOL = {
-       UINT8: be([32, 0]),
-       UINT16: be([32, 0]),
-       UINT32: be([32, 0]),
-       INT8: be([32, 0]),
-       INT16: be([32, 0]),
-       INT32: be([32, 0]),
- ... (1073 more removed lines; see GitHub link above)
+   37998: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1095-L1099` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/255.js#L6) · [Before (L1095-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/255.js#L1095-L1099)

```diff
-       var ie = -1,
-         He = Array(ee.size);
-       return ee.forEach((function(ee, ye) {
-         He[++ie] = [ye, ee]
-       })), He
+       return "fetch" === WW || "timeout" === WW || "integrity" === WW ? "download" : "browser"
```

#### 4. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1103-L1174` → after: `L21-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L21-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/255.js#L21-L44) · [Before (L1103-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/255.js#L1103-L1174)

```diff
-       return function(He) {
-         return ee(ie(He))
-       }
-     }
- 
-     function Ie(ee) {
-       var ie = -1,
-         He = Array(ee.size);
-       return ee.forEach((function(ee) {
-         He[++ie] = ee
-       })), He
-     }
-     var he = Array.prototype,
-       Ne = Function.prototype,
-       Ge = Object.prototype,
-       re = Le["__core-js_shared__"],
- ... (56 more removed lines; see GitHub link above)
+       return "download" === WW ? {
+         icon: "wifi",
+         title: "wasmScreens:downloadFailedTitle",
+         help: "wasmScreens:downloadFailedHelp",
+         helpValues: {},
+         discordLink: !1,
+         confirm: "general:tryAgain",
+         cancel: "general:back"
+       } : "memory" === WW || "noContext" === WW || "graphicsLost" === WW ? {
+         icon: "face-dizzy",
+         title: `wasmUnsupported:${WW}Title`,
+         help: `wasmUnsupported:${WW}Help${iW?"App":""}`,
+         helpValues: {},
+         discordLink: !1,
+         confirm: "general:tryAgain",
+         cancel: "general:back"
+ ... (8 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1205-L1297` → after: `L49-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L49-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/255.js#L49-L51) · [Before (L1205-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/255.js#L1205-L1297)

```diff
-       for (var He = ee.length; He--;)
-         if (Ii(ee[He][0], ie)) return He;
-       return -1
-     }
- 
-     function xi(ee, ie, He, ye, be, qe, ze) {
-       var Ye;
-       if (ye && (Ye = qe ? ye(ee, be, qe, ze) : ye(ee)), void 0 !== Ye) return Ye;
-       if (!eH(ee)) return ee;
-       var Ve = Ni(ee);
-       if (Ve) {
-         if (Ye = function(ee) {
-             var ie = ee.length,
-               He = ee.constructor(ie);
-             ie && "string" == typeof ee[0] && ii.call(ee, "index") && (He.index = ee.index, He.input = ee.input);
-             return He
- ... (77 more removed lines; see GitHub link above)
+       return {
+         ...NW(WW, iW),
+         help: iW ? "wasmUnsupported:stillBlockedHelpApp" : `wasmUnsupported:${WW}StillHelp`
```

#### 6. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1324-L1333` → after: `L56-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L56-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/255.js#L56-L63) · [Before (L1324-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/255.js#L1324-L1333)

```diff
-       var ie = new ee.constructor(ee.byteLength);
-       return new Ki(ie).set(new Ki(ee)), ie
-     }
- 
-     function vi(ee, ie, He, ye) {
-       He || (He = {});
-       for (var be = -1, Me = ie.length; ++be < Me;) {
-         var Ke = ie[be],
-           Ue = ye ? ye(He[Ke], ee[Ke], Ke, He, ee) : void 0;
-         ai(He, Ke, void 0 === Ue ? ee[Ke] : Ue)
+       return {
+         icon: "face-dizzy",
+         title: `wasmUnsupported:${WW}Title`,
+         help: "wasmScreens:noContextHelp",
+         helpValues: {},
+         discordLink: !1,
+         confirm: "general:tryAgain",
+         cancel: "general:back"
```

#### 7. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1423-L1438` → after: `L68-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L68-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/255.js#L68-L77) · [Before (L1423-L1438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/255.js#L1423-L1438)

```diff
-       return !!(ie = null == ie ? be : ie) && ("number" == typeof ee || Ve.test(ee)) && ee > -1 && ee % 1 == 0 && ee < ie
-     }
- 
-     function ji(ee) {
-       var ie = ee && ee.constructor;
-       return ee === ("function" == typeof ie && ie.prototype || Ge)
-     }
- 
-     function si(ee) {
-       if (null != ee) {
-         try {
-           return ei.call(ee)
-         } catch (ie) {}
-         try {
-           return ee + ""
-         } catch (ie) {}
+       return {
+         icon: "face-dizzy",
+         title: "wasmScreens:crashTitle",
+         help: iW ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
+         helpValues: {
+           code: WW.code
+         },
+         discordLink: iW,
+         confirm: "general:reload",
+         cancel: "general:back"
```

#### 8. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1443-L1459` → after: `L81-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L81-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/255.js#L81-L89) · [Before (L1443-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/255.js#L1443-L1459)

```diff
-     function Ii(ee, ie) {
-       return ee === ie || ee !== ee && ie !== ie
-     }(fi && Si(new fi(new ArrayBuffer(1))) != Ee || Ti && Si(new Ti) != oe || Xi && Si(Xi.resolve()) != qe || zi && Si(new zi) != Te || Bi && Si(new Bi) != ze) && (Si = function(ee) {
-       var ie = Hi.call(ee),
-         He = ie == ke ? ee.constructor : void 0,
-         ye = He ? si(He) : void 0;
-       if (ye) switch (ye) {
-         case gi:
-           return Ee;
-         case Oi:
-           return oe;
-         case di:
-           return qe;
-         case Wi:
-           return Te;
-         case ti:
- ... (1 more removed lines; see GitHub link above)
+     function wW() {
+       return {
+         icon: "face-dizzy",
+         title: "wasmScreens:turnstilePageTitle",
+         help: "wasmScreens:turnstilePageHelp",
+         helpValues: {},
+         discordLink: !1,
+         confirm: "general:ok",
+         cancel: null
```

#### 9. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1498-L1648` → after: `L94-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L94-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/255.js#L94-L103) · [Before (L1498-L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/255.js#L1498-L1648)

```diff
-       for (var ye = ee.length, be = -1 / 0, Me = 1 / 0, Ke = 0; Ke < ye; Ke++) {
-         var Ue = (He[0][Ke] - ee[Ke]) / ie[Ke],
-           Fe = (He[1][Ke] - ee[Ke]) / ie[Ke];
-         if (Ue > Fe) {
-           var Je = Ue;
-           Ue = Fe, Fe = Je
-         }
-         if (Fe < be || Ue > Me) return 1 / 0;
-         Ue > be && (be = Ue), Fe < Me && (Me = Fe)
-       }
-       return be > Me ? 1 / 0 : be
-     }
-     ee.exports = function(ee, He, ye, be) {
-       var Me = ie(He, ye, be);
-       if (Me === 1 / 0) ee = null;
-       else {
- ... (135 more removed lines; see GitHub link above)
+       return {
+         icon: "wifi",
+         title: "wasmScreens:disconnectedTitle",
+         help: OW ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
+         helpValues: {
+           reason: WW.reason
+         },
+         discordLink: null === WW.name,
+         confirm: iW ? "general:reconnect" : WW.requiresRefresh ? "general:reload" : "general:ok",
+         cancel: null
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/256.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/256.js` (44 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f)

#### 1. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L2)

```diff
- export const ids = [256, 262, 266];
+ export const ids = [256];
```

#### 2. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L4)

```diff
-   41350: (ee, ie, He) => {
+   38079: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L6-L7)

```diff
-       c: () => Ke,
-       f: () => Ue
+       b: () => KW,
+       c: () => MW
```

#### 4. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9-L92` → after: `L9-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L9-L35) · [Before (L9-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L9-L92)

```diff
-     var ye = He(39467),
-       be = He(41141),
-       Me = He(41320),
-       Ke = {};
-     class Ue {
-       constructor(ee) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = ee, this.checkInputs = () => {}
-       }
-       add(ee) {
-         const ie = ee.getSimpleName();
-         this.attached[ie] ? ye.e.Warn("camera input of type " + ie + " already exists on camera") : (this.attached[ie] = ee, ee.camera = this.camera, ee.checkInputs && (this.checkInputs = this._addCheckInputs(ee.checkInputs.bind(ee))), this.attachedToElement && ee.attachControl(t … [truncated]
-       }
-       remove(ee) {
-         for (const ie in this.attached) {
-           const He = this.attached[ie];
-           if (He === ee) return He.detachControl(), He.camera = null, delete this.attached[ie], void this.rebuildInputCheck()
- ... (68 more removed lines; see GitHub link above)
+     var mW = OW(2962),
+       EW = OW(1526),
+       NW = OW(62),
+       PW = OW(7453),
+       LW = OW(2946),
+       cW = OW(1294),
+       wW = OW(2037),
+       tW = OW(2021),
+       ZW = OW(1532),
+       xW = OW(1172),
+       lW = OW(38088),
+       AW = OW(1089),
+       bW = OW.n(AW),
+       jW = OW(1339),
+       UW = OW(1391),
+       kW = OW(1269),
+ ... (11 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L94-L153` → after: `L37-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L37-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L37-L46) · [Before (L94-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L94-L153)

```diff
-     }
-   },
-   41357: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => ye.d
-     });
-     var ye = He(41366);
-     (0, ye.f)()
-   },
-   41366: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => oe,
-       f: () => ke
-     });
-     var ye = He(41113),
-       be = He(41121),
- ... (44 more removed lines; see GitHub link above)
+ 
+       function gW() {
+         return !TW && (vW(), !0)
+       }
+       return (0, EW.e)("PlayerPhysicsTypeUpdate", (WW => {
+         WW !== eW.current && (eW.current = WW, WW === PW.p.SLEEPING ? (oW.current || (nW.current = wW.gameBridge.lookup("cameraZoom", null), oW.current = !0), uW.current = !0, wW.gameBridge.send("setCameraZoom", 3), OW(!0), yW(function() {
+           for (const WW of wW.gameBridge.lookup("blocksStandingOn", null)) {
+             if (lW.b.leafBeds.includes(WW)) return console.log(`Found leaf bed: ${WW}`), 1;
+             if (lW.b.woolBeds.includes(WW)) return console.log(`Found woold bed: ${WW}`), 2;
+             if (lW.b.strongBeds.includes(WW)) return console.log(`Found strong bed ${WW}`), 3
```

#### 6. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L155-L187` → after: `L48-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L48-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L48-L136) · [Before (L155-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L155-L187)

```diff
-         }, (() => {
-           const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(Fe[Symbol.metadata] ?? null) : void 0;
-           ie = [(0, be.p)()], He = [(0, be.P)()], (0, ye.i)(null, null, ie, {
-             kind: "field",
-             name: "groundColor",
-             static: !1,
-             private: !1,
-             access: {
-               has: ee => "groundColor" in ee,
-               get: ee => ee.groundColor,
-               set: (ee, ie) => {
-                 ee.groundColor = ie
-               }
-             },
-             metadata: Me
-           }, Je, oe), (0, ye.i)(null, null, He, {
- ... (17 more removed lines; see GitHub link above)
+           return 1
+         }())) : (oW.current = !1, OW(!1), KW(null), yW(1)))
+       })), (0, NW.useEffect)((() => () => {
+         (0, cW.v)(MW)
+       }), []), (0, NW.useEffect)((() => {
+         iW ? (0, cW.y)(MW) : ((0, cW.v)(MW), uW.current && (wW.gameBridge.send("setCameraZoom", nW.current), uW.current = !1))
+       }), [iW]), (0, kW.r)("overlay", dW, gW, iW), (0, sW.jsx)(mW.e, {
+         className: "SleepingOverlay",
+         "data-camera-keeper": "",
+         in: iW,
+         timeout: 300,
+         nodeRef: dW,
+         unmountOnExit: !0,
+         children: (0, sW.jsx)("div", {
+           ref: dW,
+           onClick: WW => {
+ ... (73 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L189-L194` → after: `L138-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L138-L139) · [Before (L189-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L189-L194)

```diff
-         })(), ee
-       })(),
-       Re = !1;
- 
-     function ke() {
-       Re || (Re = !0, Fe.d.AddNodeConstructor("Light_Type_3", ((ee, ie) => () => new oe(ee, Me.p.Zero(), ie))), (0, Je.e)("BABYLON.HemisphericLight", oe))
+         })
+       })
```

#### 8. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L197-L205` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L161) · [Before (L197-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L197-L205)

```diff
-   38020: (ee, ie, He) => {
-     He.d(ie, {
-       Color3: () => ye.c,
-       e: () => ye.g
-     });
-     var ye = He(38022);
-     (0, ye.h)()
-   },
-   38581: (ee, ie, He) => {
+   42086: (WW, iW, OW) => {
```
