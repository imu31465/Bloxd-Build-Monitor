# Changed — Bundle Modifications Report (Part 016 / 115)

- **Updated at**: `2026-11-21T00:51 JST`
- **Part**: `16 / 115` (**327** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 015](part-015.md) · [Part 017 →](part-017.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/184.js` (bcgkc.38229551 → bbb6l5.0244a119 · continued)

- **File**: `bundles/bloxd.io/chunks/js/184.js` (108 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e)

#### 95. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L10611-L10627` → after: `L1655-L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1655-L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/184.js#L1655-L1667) · [Before (L10611-L10627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/184.js#L10611-L10627)

```diff
- 
-           function fK(TT) {
-             var kT, cT, lT = TT[1](TT[0].textContent) + "";
-             return {
-               c: function() {
-                 kT = (0, OT.bGB)("span"), cT = (0, OT.fLW)(lT), (0, OT.Ljt)(kT, "class", "vcelm-t vcelm-noc")
-               },
-               m: function(TT, lT) {
-                 (0, OT.$Tr)(TT, kT, lT), (0, OT.R3I)(kT, cT)
-               },
-               p: function(TT, kT) {
-                 1 & kT && lT !== (lT = TT[1](TT[0].textContent) + "") && (0, OT.rTO)(cT, lT)
-               },
-               d: function(TT) {
-                 TT && (0, OT.ogt)(kT)
-               }
- ... (1 more removed lines; see GitHub link above)
+         }
+       }, {
+         date: new Date("2025-11-21T14:00:00Z"),
+         title: "99 Nights Revives and Map Expansion!",
+         description: "99 Nights is here to stay, and we've added a bunch of stuff to it!\n\t\u2022\tRevive your downed allies\n\t\u2022\tExplore a bigger map\n\t\u2022\tCraft guns and ammo with the new campfire level\n\nNext week we'll be working on a randomized map and adding me … [truncated]
+         image: "99_week1.jpg",
+         author: ["Dirty Flea Sack", "Harry"],
+         callToAction: {
+           color: "blue",
+           label: "Try it now",
+           action: {
+             type: "playGame",
+             game: "ninetyNineNights"
```

#### 96. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L10629-L10654` → after: `L1669-L1687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1669-L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/184.js#L1669-L1687) · [Before (L10629-L10654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/184.js#L10629-L10654)

```diff
- 
-           function xK(TT) {
-             var kT, cT, lT = TT[0] && pM(TT);
-             return {
-               c: function() {
-                 lT && lT.c(), kT = (0, OT.cSb)()
-               },
-               m: function(TT, MT) {
-                 lT && lT.m(TT, MT), (0, OT.$Tr)(TT, kT, MT), cT = !0
-               },
-               p: function(TT, cT) {
-                 var MT = cT[0];
-                 TT[0] ? lT ? (lT.p(TT, MT), 1 & MT && (0, OT.Ui)(lT, 1)) : ((lT = pM(TT)).c(), (0, OT.Ui)(lT, 1), lT.m(kT.parentNode, kT)) : lT && ((0, OT.dvw)(), (0, OT.etI)(lT, 1, 1, (function() {
-                   lT = null
-                 })), (0, OT.gbL)())
-               },
- ... (10 more removed lines; see GitHub link above)
+         }
+       }, {
+         date: new Date("2025-11-14T12:00:00Z"),
+         title: "99 Nights vs SkyGrid!",
+         description: "Check out our new Limited-Time Games! Play SkyGrid for our classic sandbox experience with a novel twist, or survive 99 nights in a brutal haunted forest...",
+         image: "99_vs_skygrid.jpg",
+         author: ["Dirty Flea Sack", "Harry"]
+       }, {
+         date: new Date("2025-11-13T11:00:00Z"),
+         title: "Cube Warfare new mutations!",
+         description: "\t\u2022\tAdded map mutations for TDM and FFA\n\t\u2022\tCollect Diamonds!: Players drop all diamonds on death, hold enough to win\n\t\u2022\tExplosives: Players keep getting explosives! Kill to get more\n\t\u2022\tAlso added diamonds around all maps to shoo … [truncated]
+         image: "cw_mutations.jpg",
+         author: ["jasninus"],
+         callToAction: {
+           color: "blue",
+           label: "Try it now",
+ ... (3 more added lines; see GitHub link above)
```

#### 97. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L10656-L10732` → after: `L1689-L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1689-L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/184.js#L1689-L1719) · [Before (L10656-L10732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/184.js#L10656-L10732)

```diff
- 
-           function IK(TT, kT, cT) {
-             var lT;
-             (0, OT.FIv)(TT, dM, (function(TT) {
-               return cT(3, lT = TT)
-             }));
-             var MT = kT.node,
-               KT = (0, yT.x)(),
-               fT = ["br", "hr", "img", "input", "link", "meta"];
-             return (0, yT.H3)((function() {
-               BM.use()
-             })), (0, yT.ev)((function() {
-               BM.unuse()
-             })), TT.$$set = function(TT) {
-               "node" in TT && cT(0, MT = TT.node)
-             }, TT.$$.update = function() {
- ... (61 more removed lines; see GitHub link above)
+         }
+       }, {
+         date: new Date("2025-11-11T09:00:00Z"),
+         title: "Cube Warfare new mode and map!",
+         description: "\t\u2022\tAdded a new queue for the Gungame mode in Cube Warfare!\n\t\u2022\tIn Gungame, you progress through weapons by getting kills, get kills with the sword to win!\n\t\u2022\tCheck out the new Cabins map! You can either go through the caves or build you … [truncated]
+         image: "cw_cabins.jpg",
+         author: ["jasninus", "Harry"]
+       }, {
+         date: new Date("2025-11-10T09:00:00Z"),
+         title: "Pet Friendship and Feeding!",
+         description: "\t\u2022\tYou can now feed your pets regularly and build up a friendship with them!\n\t\u2022\tLevelling up your friendship with your pets will give bonuses for both you and your pets.\n\t\u2022\tThese can range from special foods with cool effects, stat boo … [truncated]
+         image: "mob_feeding.jpg",
+         author: "Slushie"
+       }, {
+         date: new Date("2025-10-29T11:00:00Z"),
+         title: "Spirit Mobs!",
+ ... (15 more added lines; see GitHub link above)
```

#### 98. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L10734-L10914` → after: `L1721-L1739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1721-L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/184.js#L1721-L1739) · [Before (L10734-L10914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/184.js#L10734-L10914)

```diff
- 
-           function vK(TT, kT, cT) {
-             var lT;
-             return (0, OT.FIv)(TT, XM, (function(TT) {
-               return cT(0, lT = TT)
-             })), [lT, function(kT) {
-               OT.cKT.call(this, TT, kT)
-             }]
-           }
-           var tK = function(TT) {
-               function kT(kT) {
-                 var cT;
-                 return cT = TT.call(this) || this, (0, OT.S1n)((0, MT.Z)(cT), kT, vK, jK, OT.N8, {}), cT
-               }
-               return (0, KT.Z)(kT, TT), kT
-             }(OT.f_C),
- ... (165 more removed lines; see GitHub link above)
+         }
+       }, {
+         date: new Date("2025-10-23T11:00:00Z"),
+         title: "Underground Ruins!",
+         description: "\t\u2022\tRuinous dungeons have appeared in caves!\n\t\u2022\tWatch out for Draugr Huntresses and Magma Golems guarding precious loot.\n\t\u2022\tIf you're quick, grab unique Draugr Banners on your way out!\n\t\u2022\tMore special and unique loot coming soon … [truncated]
+         image: "underground_ruins.jpg",
+         author: ["Dirty Flea Sack", "Harry"]
+       }, {
+         date: new Date("2025-10-21T12:00:00Z"),
+         title: "Skywars variations!",
+         description: "Try out the new Skywars variations! Includes:\t\n\u2022\tOverpowered: Chests start with refilled loot\t\n\u2022\tGolem Gauntlet: Loot golems spawn around the map\t\n\u2022\tExplosives Frenzy: Explosives in all chests!\nAnd more! As well as some quality of li … [truncated]
+         image: "skywars_variations.jpg",
+         author: ["jasninus"],
+         callToAction: {
+           color: "blue",
+           label: "Try it now",
+ ... (3 more added lines; see GitHub link above)
```

#### 99. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L10916-L10945` → after: `L1741-L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1741-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/184.js#L1741-L1759) · [Before (L10916-L10945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/184.js#L10916-L10945)

```diff
- 
-           function SK(TT) {
-             return function() {
-               var kT = this,
-                 cT = arguments;
-               return new Promise((function(lT, MT) {
-                 var KT = TT.apply(kT, cT);
- 
-                 function OT(TT) {
-                   QK(KT, lT, MT, OT, yT, "next", TT)
-                 }
- 
-                 function yT(TT) {
-                   QK(KT, lT, MT, OT, yT, "throw", TT)
-                 }
-                 OT(void 0)
- ... (14 more removed lines; see GitHub link above)
+         }
+       }, {
+         date: new Date("2025-10-20T13:00:00Z"),
+         title: "Banners!",
+         description: "Mark your territory with coloured banners! Place them on the floor for upright banners, or place them on walls and ceilings for hanging banners. More designs coming soon!!!",
+         image: "banners.jpg",
+         author: ["Dirty Flea Sack", "Harry"]
+       }, {
+         date: new Date("2025-10-15T10:00:00Z"),
+         title: "New Skywars map and updates!",
+         description: "\t\n\u2022\tNew Aqueduct map for Skywars. \t\n\u2022\tBalance changes. \t\n\u2022\tFixes, especially for spawn perks.",
+         image: "aqueduct.jpg",
+         author: ["Harry", "jasninus"],
+         callToAction: {
+           color: "blue",
+           label: "Try it now",
+ ... (3 more added lines; see GitHub link above)
```

#### 100. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L10947-L11292` → after: `L1761-L1773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1761-L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/184.js#L1761-L1773) · [Before (L10947-L11292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/184.js#L10947-L11292)

```diff
- 
-           function FK(TT) {
-             for (var kT = 1; kT < arguments.length; kT++) {
-               var cT = null != arguments[kT] ? arguments[kT] : {};
-               kT % 2 ? aK(Object(cT), !0).forEach((function(kT) {
-                 (0, DK.Z)(TT, kT, cT[kT])
-               })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(cT)) : aK(Object(cT)).forEach((function(kT) {
-                 Object.defineProperty(TT, kT, Object.getOwnPropertyDescriptor(cT, kT))
-               }))
-             }
-             return TT
-           }
-           var rK = function(TT) {
-               if (!TT || 0 === TT.length) return {};
-               for (var kT = {}, cT = TT.split(";"), lT = 0; lT < cT.length; lT++) {
-                 var MT = cT[lT].indexOf("=");
- ... (330 more removed lines; see GitHub link above)
+         }
+       }, {
+         date: new Date("2025-10-07T10:00:00Z"),
+         title: "Skywars kits and perks update!",
+         description: "\t\n\u2022\tIntroducing a killstreak system for perks.\t\n\u2022\tSelect a perk for each of three killstreak tiers.\t\n\u2022\tReworked kits to be more balanced.\t\n\u2022\tQuality of life improvements.",
+         image: "skywars_update2.jpg",
+         author: ["jasninus"],
+         callToAction: {
+           color: "blue",
+           label: "Try it now",
+           action: {
+             type: "playGame",
+             game: "skywars"
```

#### 101. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L11294-L11308` → after: `L1775-L1787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1775-L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/184.js#L1775-L1787) · [Before (L11294-L11308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/184.js#L11294-L11308)

```diff
- 
-           function HK(TT) {
-             var kT;
-             return {
-               c: function() {
-                 (kT = (0, OT.bGB)("div")).textContent = "Empty", (0, OT.Ljt)(kT, "class", "vc-plugin-empty")
-               },
-               m: function(TT, cT) {
-                 (0, OT.$Tr)(TT, kT, cT)
-               },
-               p: OT.ZTd,
-               d: function(TT) {
-                 TT && (0, OT.ogt)(kT)
-               }
-             }
+         }
+       }, {
+         date: new Date("2025-10-03T12:00:00Z"),
+         title: "Character Customization Improvements",
+         description: "\t\u2022\tMore eye styles and colors\t\n\u2022\tMore hair styles\t\n\u2022\tMore top styles and colors",
+         image: "personalisationUpdate.jpg",
+         author: ["Harry", "Oliver"],
+         callToAction: {
+           color: "blue",
+           label: "Try it now",
+           action: {
+             type: "openMenu",
+             menu: lq.p.CUSTOMISATION
```

#### 102. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L11310-L11327` → after: `L1789-L1807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1789-L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/184.js#L1789-L1807) · [Before (L11310-L11327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/184.js#L11310-L11327)

```diff
- 
-           function eK(TT) {
-             var kT, cT, lT, MT, KT, yT = TT[20] + "",
-               fT = TT[5](TT[21]) + "";
-             return {
-               c: function() {
-                 kT = (0, OT.bGB)("div"), cT = (0, OT.fLW)(yT), lT = (0, OT.DhX)(), MT = (0, OT.bGB)("div"), KT = (0, OT.fLW)(fT), (0, OT.Ljt)(kT, "class", "vc-table-col"), (0, OT.Ljt)(MT, "class", "vc-table-col vc-table-col-2")
-               },
-               m: function(TT, yT) {
-                 (0, OT.$Tr)(TT, kT, yT), (0, OT.R3I)(kT, cT), (0, OT.$Tr)(TT, lT, yT), (0, OT.$Tr)(TT, MT, yT), (0, OT.R3I)(MT, KT)
-               },
-               p: function(TT, kT) {
-                 1 & kT && yT !== (yT = TT[20] + "") && (0, OT.rTO)(cT, yT), 1 & kT && fT !== (fT = TT[5](TT[21]) + "") && (0, OT.rTO)(KT, fT)
-               },
-               d: function(TT) {
-                 TT && (0, OT.ogt)(kT), TT && (0, OT.ogt)(lT), TT && (0, OT.ogt)(MT)
- ... (2 more removed lines; see GitHub link above)
+         }
+       }, {
+         date: new Date("2025-10-02T09:00:00Z"),
+         title: "Funky Foods!",
+         description: "\t\u2022\tCarrots give you X-RAY VISION!\t\n\u2022\tCook Raw Potatoes for a tasty Baked Potato.\t\n\u2022\tBeetroot gives you extra Mining Yield.\t\n\u2022\tYou already know what Rotten Brains give you...\t\n\u2022\tZombies drop Carrots, Raw Potatoes and Rot … [truncated]
+         image: "funky_foods.jpg",
+         author: "Dirty Flea Sack"
+       }, {
+         date: new Date("2025-10-01T09:00:00Z"),
+         title: "\u2728New Character Customization!\u2728",
+         description: "We\u2019ve revamped how you can personalize your character, giving you more ways than ever to stand out and express yourself!\n\t\n\u2022\tNew player model design\t\n\u2022\tNew hair, skin, and clothing cosmetics\t\n\u2022\tNew colours to choose from\t\n\u20 … [truncated]
+         image: "personalisation.jpg",
+         author: ["Harry", "Oliver"],
+         callToAction: {
+           color: "blue",
+           label: "Try it now",
+ ... (3 more added lines; see GitHub link above)
```

#### 103. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L11329-L11345` → after: `L1809-L1821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1809-L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/184.js#L1809-L1821) · [Before (L11329-L11345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/184.js#L11329-L11345)

```diff
- 
-           function GK(TT) {
-             var kT, cT, lT, MT, KT, yT, fT;
-             return {
-               c: function() {
-                 kT = (0, OT.bGB)("div"), cT = (0, OT.bGB)("textarea"), lT = (0, OT.DhX)(), MT = (0, OT.bGB)("div"), KT = (0, OT.bGB)("textarea"), (0, OT.Ljt)(cT, "class", "vc-table-input"), (0, OT.Ljt)(kT, "class", "vc-table-col"), (0, OT.Ljt)(KT, "class", "vc-table-input"), (0,  … [truncated]
-               },
-               m: function(xT, IT) {
-                 (0, OT.$Tr)(xT, kT, IT), (0, OT.R3I)(kT, cT), (0, OT.BmG)(cT, TT[2]), (0, OT.$Tr)(xT, lT, IT), (0, OT.$Tr)(xT, MT, IT), (0, OT.R3I)(MT, KT), (0, OT.BmG)(KT, TT[3]), yT || (fT = [(0, OT.oLt)(cT, "input", TT[11]), (0, OT.oLt)(KT, "input", TT[12])], yT = !0)
-               },
-               p: function(TT, kT) {
-                 4 & kT && (0, OT.BmG)(cT, TT[2]), 8 & kT && (0, OT.BmG)(KT, TT[3])
-               },
-               d: function(TT) {
-                 TT && (0, OT.ogt)(kT), TT && (0, OT.ogt)(lT), TT && (0, OT.ogt)(MT), yT = !1, (0, OT.j7q)(fT)
-               }
- ... (1 more removed lines; see GitHub link above)
+         }
+       }, {
+         date: new Date("2025-09-24T12:00:00Z"),
+         title: "Skywars updates!",
+         description: "\t\tXP, updated maps and improved chest refill system!\t\n\u2022\tXP and enchanting tables have been added to Skywars! Watch out for loot that gives XP and enchant your gear\t\n\u2022\tMaps have been updated to be more balanced and consistent with smoother b … [truncated]
+         image: "skywars2_1.jpg",
+         author: "jasninus",
+         callToAction: {
+           color: "blue",
+           label: "Try it now",
+           action: {
+             type: "playGame",
+             game: "skywars"
```

#### 104. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L11347-L11387` → after: `L1823-L1835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1823-L1835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/184.js#L1823-L1835) · [Before (L11347-L11387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/184.js#L11347-L11387)

```diff
- 
-           function VK(TT) {
-             var kT, cT, lT, MT, KT, yT;
-             return (kT = new Ik.Z({
-               props: {
-                 name: "delete"
-               }
-             })).$on("click", (function() {
-               return TT[14](TT[20])
-             })), lT = new vk({
-               props: {
-                 content: [TT[20], TT[21]].join("=")
-               }
-             }), (KT = new Ik.Z({
-               props: {
-                 name: "edit"
- ... (25 more removed lines; see GitHub link above)
+         }
+       }, {
+         date: new Date("2025-09-18T09:00:00Z"),
+         title: "New Bedwars Trios/Squads map!",
+         description: "Play the new Bedwars map - Shard!",
+         image: "bw_shard.jpg",
+         author: "Harry",
+         callToAction: {
+           color: "blue",
+           label: "Try it now",
+           action: {
+             type: "playGame",
+             game: "bedwars_4v4v4v4"
```

#### 105. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L11389-L11421` → after: `L1837-L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1837-L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/184.js#L1837-L1849) · [Before (L11389-L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/184.js#L11389-L11421)

```diff
- 
-           function EK(TT) {
-             var kT, cT, lT, MT;
-             return (kT = new Ik.Z({
-               props: {
-                 name: "cancel"
-               }
-             })).$on("click", TT[9]), (lT = new Ik.Z({
-               props: {
-                 name: "done"
-               }
-             })).$on("click", (function() {
-               return TT[13](TT[20])
-             })), {
-               c: function() {
-                 (0, OT.YCL)(kT.$$.fragment), cT = (0, OT.DhX)(), (0, OT.YCL)(lT.$$.fragment)
- ... (17 more removed lines; see GitHub link above)
+         }
+       }, {
+         date: new Date("2025-09-10T12:00:00Z"),
+         title: "Natural Disaster - Prison map and level 4 disasters!",
+         description: "\t\tNew level 4 disasters with disastrous new effects!\t\n\u2022\tPlague: New disaster which infects people and causes blindness at level 4!\t\n\u2022\tLava flood: Permanently melts blocks into burning-hot magma.\t\n\u2022\tTornado: Now spawns two tornadoes, … [truncated]
+         image: "PrisonMap.jpg",
+         author: "jasninus",
+         callToAction: {
+           color: "blue",
+           label: "Try it now",
+           action: {
+             type: "playGame",
+             game: "naturalDisaster"
```

#### 106. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L11423-L11461` → after: `L1851-L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1851-L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/184.js#L1851-L1863) · [Before (L11423-L11461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/184.js#L11423-L11461)

```diff
- 
-           function ZK(TT) {
-             var kT, cT, lT, MT, KT, yT, fT;
- 
-             function xT(TT, kT) {
-               return TT[1] === TT[23] ? GK : eK
-             }
-             var IT = xT(TT),
-               AT = IT(TT),
-               CT = [EK, VK],
-               jT = [];
- 
-             function vT(TT, kT) {
-               return TT[1] === TT[23] ? 0 : 1
-             }
-             return MT = vT(TT), KT = jT[MT] = CT[MT](TT), {
- ... (23 more removed lines; see GitHub link above)
+         }
+       }, {
+         date: new Date("2025-08-29T13:00:00Z"),
+         title: "New Pirates Map - Cannon Storm!",
+         description: "Play the new 2-ship Pirates map - Cannon Storm!",
+         image: "pirates_cannon_storm.jpg",
+         author: "Harry",
+         callToAction: {
+           color: "blue",
+           label: "Try it now",
+           action: {
+             type: "playGame",
+             game: "pirates"
```

#### 107. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L11463-L11509` → after: `L1865-L1895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1865-L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/184.js#L1865-L1895) · [Before (L11463-L11509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/184.js#L11463-L11509)

```diff
- 
-           function uK(TT) {
-             for (var kT, cT, lT, MT, KT = TT[0], yT = [], fT = 0; fT < KT.length; fT += 1) yT[fT] = ZK(oK(TT, KT, fT));
-             var xT = function(TT) {
-                 return (0, OT.etI)(yT[TT], 1, 1, (function() {
-                   yT[TT] = null
-                 }))
-               },
-               IT = null;
-             return KT.length || (IT = HK()), {
-               c: function() {
-                 kT = (0, OT.bGB)("div"), (cT = (0, OT.bGB)("div")).innerHTML = '<div class="vc-table-col">Key</div> \n    <div class="vc-table-col vc-table-col-2">Value</div> \n    <div class="vc-table-col vc-table-col-1 vc-table-action"></div>', lT = (0, OT.DhX)();
-                 for (var TT = 0; TT < yT.length; TT += 1) yT[TT].c();
-                 IT && IT.c(), (0, OT.Ljt)(cT, "class", "vc-table-row"), (0, OT.Ljt)(kT, "class", "vc-table")
-               },
-               m: function(TT, KT) {
- ... (31 more removed lines; see GitHub link above)
+         }
+       }, {
+         date: new Date("2025-08-28T14:00:00Z"),
+         title: "More Board Shops",
+         description: "You can now use boards to automatically equip armour, and buy or sell 'all' of an item from your inventory! Let us know in Discord what other special boards you'd like to see.",
+         image: "more_boards.jpg",
+         author: "Dirty Flea Sack"
+       }, {
+         date: new Date("2025-08-28T08:00:00Z"),
+         title: "Pet Renaming!",
+         description: "You can now rename your pets using a Name Tag! This also works if you rename a pet you caught with a Mob Catcher.",
+         image: "rename_pets.jpg",
+         author: "Dirty Flea Sack"
+       }, {
+         date: new Date("2025-08-21T15:00:00Z"),
+         title: "Mob Catchers!",
+ ... (15 more added lines; see GitHub link above)
```

#### 108. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L11511-L11892` → after: `L1897-L2780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1897-L2780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/184.js#L1897-L2780) · [Before (L11511-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/184.js#L11511-L11892)

```diff
- 
-           function XK(TT, cT, lT) {
-             var MT, KT = this && this.__awaiter || function(TT, kT, cT, lT) {
-                 return new(cT || (cT = Promise))((function(MT, KT) {
-                   function OT(TT) {
-                     try {
-                       fT(lT.next(TT))
-                     } catch (TT) {
-                       KT(TT)
-                     }
-                   }
- 
-                   function yT(TT) {
-                     try {
-                       fT(lT.throw(TT))
-                     } catch (TT) {
- ... (366 more removed lines; see GitHub link above)
+         }
+       }, {
+         date: new Date("2025-08-20T13:00:00Z"),
+         title: "Iron Chests!",
+         description: "Ever wanted to lock your chests? Now you can! Set a passkey for your iron chests to keep your items safe from thieves.",
+         image: "iron_chests.jpg",
+         author: "Dirty Flea Sack"
+       }, {
+         date: new Date("2025-08-20T12:00:00Z"),
+         title: "New WorldBuilder Commands!",
+         description: "Turn your world upside-down... literally! New WorldBuilder commands have been added! Use //help in chat to view all of them!",
+         image: "worldbuilder_update.jpg",
+         author: "Slushie"
+       }, {
+         date: new Date("2025-08-18T13:30:00Z"),
+         title: "Natural Disaster and Battle Box",
+ ... (868 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/185.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/185.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072)

#### 1. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4-L22` → after: `L4-L5395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4-L5395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/185.js#L4-L5395) · [Before (L4-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/185.js#L4-L22)

```diff
-   9233: (TT, kT, cT) => {
-     cT.r(kT), cT.d(kT, {
-       ALL_DEV_TOOLS: () => OT,
-       coreDevTools: () => xT,
-       devTools: () => fT
-     });
-     var lT = cT(636),
-       MT = cT(1303),
-       KT = cT(9242);
-     const OT = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
-     async function yT() {
-       const {
-         noaDevTools: TT
-       } = await cT.e(231).then((() => cT(40684)));
-       return TT
-     }
- ... (3 more removed lines; see GitHub link above)
+   9135: function(module, __unused_webpack_exports, __webpack_require__) {
+     var n;
+     this || self, n = function() {
+       return function() {
+         var __webpack_modules__ = {
+             4264: function(qq, Eq, gq) {
+               qq.exports = gq(7588)
+             },
+             5036: function(qq, Eq, gq) {
+               gq(1719), gq(5677), gq(6394), gq(5334), gq(6969), gq(2021), gq(8328), gq(2129);
+               var Yq = gq(1287);
+               qq.exports = Yq.Promise
+             },
+             2582: function(qq, Eq, gq) {
+               gq(1646), gq(6394), gq(2004), gq(462), gq(8407), gq(2429), gq(1172), gq(8288), gq(1274), gq(8201), gq(6626), gq(3211), gq(9952), gq(15), gq(9831), gq(7521), gq(2972), gq(6956), gq(5222), gq(2257);
+               var Yq = gq(1287);
+ ... (5376 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L24-L50` → after: `L5397-L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R5397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L5397-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/185.js#L5397-L11892) · [Before (L24-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/185.js#L24-L50)

```diff
-         setHost(TT) {
-           this.tools = null === TT ? OT : TT.tools, this.loadHost = null === TT ? yT : async () => TT
-         }
-         supports(TT) {
-           return this.tools.has(TT)
-         }
-         async downloadScene(TT, kT) {
-           const cT = await this.loadHost();
-           await cT.downloadScene(TT, kT)
-         }
-         async setAmbientLightIntensity(TT) {
-           const kT = await this.loadHost();
-           await kT.setAmbientLightIntensity(TT)
-         }
-       },
-       xT = {
- ... (11 more removed lines; see GitHub link above)
+         __nested_webpack_require_223763__.n = function(qq) {
+           var Eq = qq && qq.__esModule ? function() {
+             return qq.default
+           } : function() {
+             return qq
+           };
+           return __nested_webpack_require_223763__.d(Eq, {
+             a: Eq
+           }), Eq
+         }, __nested_webpack_require_223763__.d = function(qq, Eq) {
+           for (var gq in Eq) __nested_webpack_require_223763__.o(Eq, gq) && !__nested_webpack_require_223763__.o(qq, gq) && Object.defineProperty(qq, gq, {
+             enumerable: !0,
+             get: Eq[gq]
+           })
+         }, __nested_webpack_require_223763__.g = function() {
+           if ("object" == typeof globalThis) return globalThis;
+ ... (6480 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/186.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/186.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f)

#### 1. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L4-L15` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/186.js#L4-L8) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/186.js#L4-L15)

```diff
-   9284: (TT, kT, cT) => {
-     cT.d(kT, {
-       d: () => RT,
-       g: () => Qk,
-       k: () => Sk,
-       o: () => Nk,
-       p: () => ak,
-       q: () => Mk,
-       s: () => Ok,
-       u: () => fk,
-       v: () => Dk,
-       z: () => yk
+   9160: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       ALL_DEV_TOOLS: () => mq,
+       coreDevTools: () => cq,
+       devTools: () => Aq
```

#### 2. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L17-L258` → after: `L10-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L10-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/186.js#L10-L17) · [Before (L17-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/186.js#L17-L258)

```diff
-     var lT = cT(31),
-       MT = cT(118),
-       KT = cT(1654),
-       OT = cT(4408),
-       yT = cT(2819),
-       fT = cT(2835),
-       xT = cT(47);
-     const {
-       windows: IT,
-       target: AT,
-       stepDown: CT,
-       stepUp: jT,
-       noGain: vT
-     } = fT.d, tT = 1e3 / 60 * 1.08, hT = 1e3 / 55, NT = 1e3 / 45, QT = 1e3 / 30 * .92, ST = 1e3 / 30 * 1.08;
-     class DT {
-       constructor() {
- ... (226 more removed lines; see GitHub link above)
+     var Yq = gq(611),
+       lq = gq(1283),
+       Oq = gq(9167);
+     const mq = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
+     async function xq() {
+       const {
+         noaDevTools: qq
+       } = await gq.e(231).then((() => gq(40806)));
```

#### 3. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L261-L290` → after: `L20-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/186.js#L20-L22) · [Before (L261-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/186.js#L261-L290)

```diff
- 
-     function gT(TT) {
-       const kT = "number" === typeof TT ? Date.now() - TT : -1;
-       return kT >= 0 && kT < GT
-     }
-     let UT = null;
- 
-     function YT() {
-       return UT ??= (0, MT.getDeviceDefaultPixelScale)(), BT(UT)
-     }
- 
-     function BT(TT) {
-       const kT = lT.e.get("clientEscMenuOptions");
-       return kT.pixelSmoothing && !(0, OT.b)("pixelScale") && kT.pixelScale === TT
-     }
-     let WT = null,
- ... (14 more removed lines; see GitHub link above)
+     const Aq = new class {
+         constructor() {
+           this.loadHost = xq, this.tools = mq
```

#### 4. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L292-L350` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/186.js#L24-L25) · [Before (L292-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/186.js#L292-L350)

```diff
-       }
-       return WT
-     }
- 
-     function iT(TT, kT) {
-       var cT;
-       const lT = kT.indexOf(null !== (cT = TT.failedUpN) && void 0 !== cT ? cT : -1);
-       return lT >= 0 && gT(TT.failedUpAt) ? {
-         step: lT,
-         untilMs: performance.now() + fT.d.stepUp.failWaitsMs[0]
-       } : null
-     }
-     let qT = null,
-       sT = !1,
-       Tk = "";
-     const kk = new Set;
- ... (43 more removed lines; see GitHub link above)
+         setHost(qq) {
+           this.tools = null === qq ? mq : qq.tools, this.loadHost = null === qq ? xq : async () => qq
```

#### 5. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L352-L359` → after: `L27-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L27-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/186.js#L27-L42) · [Before (L352-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/186.js#L352-L359)

```diff
-       }))
-     }
-     let xk = 0;
- 
-     function Ik() {
-       var TT;
-       const kT = null !== (TT = uT()) && void 0 !== TT ? TT : {
-           gpu: Tk
+         supports(qq) {
+           return this.tools.has(qq)
+         }
+         async downloadScene(qq, Eq) {
+           const gq = await this.loadHost();
+           await gq.downloadScene(qq, Eq)
+         }
+         async setAmbientLightIntensity(qq) {
+           const Eq = await this.loadHost();
+           await Eq.setAmbientLightIntensity(qq)
+         }
+       },
+       cq = {
+         tools: Oq.e,
+         downloadScene: async () => {
+           throw new Error("This client can't download the scene")
```

#### 6. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L361-L458` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/186.js#L44-L45) · [Before (L361-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/186.js#L361-L458)

```diff
-         cT = ZT();
-       xk = ET(), qT = new zT({
-           changed: ck,
-           wj: () => {
-             Ck({
-               heldN: void 0
-             })
-           },
-           ty: TT => {
-             var kT;
-             const cT = ZT()[TT],
-               lT = {
-                 heldN: cT,
-                 heldAt: Date.now(),
-                 heldTarget: ET()
-               };
- ... (82 more removed lines; see GitHub link above)
+         setAmbientLightIntensity: async () => {
+           throw new Error("This client can't set the ambient light")
```

#### 7. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L460-L495` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/186.js#L47-L50) · [Before (L460-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/186.js#L460-L495)

```diff
-       }
-     }
- 
-     function ak() {
-       var TT;
-       null === (TT = qT) || void 0 === TT || TT.resized(performance.now())
-     }
-   },
-   9288: (TT, kT, cT) => {
-     cT.d(kT, {
-       e: () => KT
-     });
-     var lT = cT(118),
-       MT = cT(150);
- 
-     function KT(TT, kT, cT) {
- ... (20 more removed lines; see GitHub link above)
+       };
+     Yq.v && Aq.setHost(cq), (0, lq.w)((() => {
+       Aq.setHost(cq)
+     }))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/187.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/187.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3)

#### 1. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L4)

```diff
-   36646: (TT, kT, cT) => {
+   9191: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L6-L26` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L6) · [Before (L6-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L6-L26)

```diff
-       d: () => KT
-     });
-     var lT = cT(71),
-       MT = cT(36);
- 
-     function KT(TT, kT) {
-       const [cT, KT] = (0, lT.useState)(kT);
-       return (0, lT.useEffect)((() => {
-         KT(kT());
-         const cT = MT.k.subscribe(TT, (TT => {
-           KT(TT)
-         }));
-         return () => {
-           MT.k.unsubscribe(cT)
-         }
-       }), [TT]), cT
- ... (5 more removed lines; see GitHub link above)
+       e: () => Rq,
```

#### 3. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L29-L49` → after: `L9-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L9-L14) · [Before (L29-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L29-L49)

```diff
-       n: () => OT
-     });
-     var lT = cT(1758);
-     const MT = ".bloxdreplay",
-       KT = "application/octet-stream";
- 
-     function OT() {
-       return `game-recording-${(arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date).toISOString()}${MT}`
-     }
- 
-     function yT(TT) {
-       let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OT();
-       return (0, lT.b)(new Blob([TT], {
-         type: KT
-       }), kT), kT
-     }
- ... (5 more removed lines; see GitHub link above)
+       k: () => PE,
+       n: () => lE,
+       p: () => mE,
+       s: () => AE,
+       t: () => oE,
+       x: () => xE
```

#### 4. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L51-L66` → after: `L16-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L16-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L16-L47) · [Before (L51-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L51-L66)

```diff
-     let lT = {
-       open: async () => {
-         console.warn("No game client has loaded to open the replay")
-       },
-       replayKey: () => (console.warn("No game client has loaded to save a replay from"), null),
-       encode: async () => null,
-       fileHandle: () => null,
-       markSaved: () => {}
-     };
- 
-     function MT(TT) {
-       lT = TT
-     }
- 
-     function KT() {
-       return lT
+     var Yq = gq(24),
+       lq = gq(96),
+       Oq = gq(1622),
+       mq = gq(4248),
+       xq = gq(2700),
+       Aq = gq(2714),
+       cq = gq(38);
+     const {
+       windows: uq,
+       target: Bq,
+       stepDown: Wq,
+       stepUp: Nq,
+       noGain: aq
+     } = Aq.d, Vq = 1e3 / 60 * 1.08, dq = 1e3 / 55, jq = 1e3 / 45, Hq = 1e3 / 30 * .92, oq = 1e3 / 30 * 1.08;
+     class Pq {
+       constructor() {
+ ... (16 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L68-L157` → after: `L49-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L49-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L49-L147) · [Before (L68-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L68-L157)

```diff
-   },
-   36807: (TT, kT, cT) => {
-     cT.d(kT, {
-       d: () => OT,
-       e: () => yT
-     });
-     var lT = cT(36);
-     const MT = 1500,
-       KT = 1e3,
-       OT = {
-         recordingStarted: {
-           text: "Started recording",
-           type: "Success"
-         },
-         recordingStopped: {
-           text: "Stopped recording",
- ... (74 more removed lines; see GitHub link above)
+     const Qq = uq.windowMs,
+       yq = uq.settleMs,
+       tq = uq.graceMs,
+       rq = uq.minIntervals,
+       vq = 1e3 * rq / Qq,
+       hq = aq.backoffMs,
+       nq = aq.maxMs;
+     class bq {
+       constructor(qq, Eq) {
+         let {
+           lowest: gq,
+           startStep: Yq = 0,
+           noGain: lq = null,
+           upWait: Oq = null
+         } = Eq;
+         this.hooks = qq, this.step = void 0, this.lowest = void 0, this.phase = {
+ ... (83 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L159-L168` → after: `L149-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L149-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L149-L216) · [Before (L159-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L159-L168)

```diff
-       };
- 
-     function yT(TT) {
-       var kT;
-       const cT = null !== (kT = TT.timeoutMs) && void 0 !== kT ? kT : "Error" === TT.type ? MT : KT;
-       lT.k.nt("showBottomMessage", {
-         message: TT.text,
-         timeoutLength: cT,
-         type: TT.type
-       })
+       }
+       watch(qq, Eq, gq, Yq, lq) {
+         const Oq = this.climbed;
+         if (null !== Oq && !gq && !Yq && ++Oq.heldWindows >= Nq.heldWindows && (this.climbed = null, this.record(lq, qq, "Fc"), this.hooks.Fc(this.step)), gq ? (this.dropRun++, this.dropRunFpsSum += qq, this.dropRunMasked ||= Yq) : this.resetDropRun(), Yq && Eq || (this.cleanRun  … [truncated]
+           const Eq = this.dropRunFpsSum / this.dropRun;
+           this.resetDropRun();
+           const gq = this.climbed;
+           return void(null !== gq ? (this.failUp(this.step, gq.from, qq, lq), this.climbed = gq.below) : this.step < this.lowest && this.downAllowed(lq) && (this.climbing = !1, this.phase = {
+             kind: "down",
+             from: this.step,
+             fromFps: Eq,
+             judged: 0,
+             fpsSum: 0,
+             dropped: !1
+           }, this.setStep(this.step + 1, qq, lq, "down")))
+         }
+ ... (52 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L170-L176` → after: `L218-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L218-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L218-L223) · [Before (L170-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L170-L176)

```diff
-   },
-   36310: (TT, kT, cT) => {
-     cT.d(kT, {
-       b: () => MT,
-       d: () => KT
-     });
-     let lT = !1;
+     var iq = gq(9197),
+       Zq = gq(3027),
+       fq = gq(9200);
+     const Mq = "autoGraphics",
+       Tq = 6048e5,
+       zq = "startScale";
```

#### 8. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L179-L183` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L226) · [Before (L179-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L179-L183)

```diff
-       return lT
-     }
- 
-     function KT(TT) {
-       return lT !== TT && (lT = TT, !0)
+       return (0, xq.F)(Yq.b.get("clientEscMenuOptions").pixelScale) * (0, xq.B)()
```

#### 9. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L193-L194` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L229-L230) · [Before (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L193-L194)

```diff
-     function MT(TT, kT) {
-       return TT && !kT
+     function pq() {
+       return (0, xq.r)(Sq())
```

#### 10. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L198` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L234-L235) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L198)

```diff
-       return MT(lT.e.get("isTouchScreen"), lT.e.get("clientEscMenuOptions").touchActionButtons)
+       const qq = cq.i.getItem(Mq);
+       return "object" !== typeof qq || null === qq || "string" !== typeof qq.gpu ? null : qq
```

#### 11. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L233-L234` → after: `L238-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L238-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L238-L242) · [Before (L233-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L233-L234)

```diff
-     function jT() {
-       return IT
+     function Lq(qq) {
+       return {
+         untilEpochMs: Date.now() + (qq.untilMs - performance.now()),
+         backoffMs: qq.backoffMs
+       }
```

#### 12. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L238-L239` → after: `L246-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L246-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L246-L249) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L238-L239)

```diff
-       const kT = new Set(TT);
-       (0, MT.d)(kT, IT) || (IT = kT, KT.k.nt(OT, IT))
+       return qq ? {
+         untilMs: performance.now() + (qq.untilEpochMs - Date.now()),
+         backoffMs: qq.backoffMs
+       } : null
```

#### 13. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L247` → after: `L262-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L262-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L262-L263) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L247)

```diff
-       0 === TT.size && 0 === AT.size || (AT = new Map(TT), KT.k.nt(yT, AT))
+       const Eq = "number" === typeof qq ? Date.now() - qq : -1;
+       return Eq >= 0 && Eq < Tq
```

#### 14. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L251` → after: `L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L268) · [Before (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L251)

```diff
-       return CT
+       return Fq ??= (0, lq.getDeviceDefaultPixelScale)(), Xq(Fq)
```

#### 15. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L255` → after: `L272-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L272-L273) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L255)

```diff
-       TT.length === CT.size && TT.every(((TT, kT) => CT.get(TT) === kT)) || (CT = new Map(TT.map(((TT, kT) => [TT, kT]))), KT.k.nt(fT, CT))
+       const Eq = Yq.b.get("clientEscMenuOptions");
+       return Eq.pixelSmoothing && !(0, mq.d)("pixelScale") && Eq.pixelScale === qq
```

#### 16. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L258-L263` → after: `L278-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L278-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L278-L279) · [Before (L258-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L258-L263)

```diff
-     function ST(TT, kT, cT, lT) {
-       if (! function(TT, kT, cT) {
-           return TT.size > 0 || kT.size > 0 || cT.size > 0
-         }(kT, cT, lT)) return TT;
-       const MT = TT => {
-         const lT = cT.get(TT.name);
+     function Cq() {
+       if (null === wq || Kq !== Sq()) {
```

#### 17. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L265-L281` → after: `L281-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L281-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L281-L292) · [Before (L265-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L265-L281)

```diff
-         return lT ? null !== (MT = lT.stepsAway) && void 0 !== MT ? MT : 1 : kT.has(TT.name) ? -1 : 0
-       };
-       return [...TT].sort(((TT, kT) => MT(TT) - MT(kT) || ((TT, kT) => {
-         const cT = lT.get(TT.name),
-           MT = lT.get(kT.name);
-         return void 0 === cT || void 0 === MT ? (void 0 === cT ? 1 : 0) - (void 0 === MT ? 1 : 0) : Number(kT.haveIngredients) - Number(TT.haveIngredients) || cT - MT
-       })(TT, kT)))
-     }
- 
-     function DT(TT, kT, cT) {
-       const lT = [...kT.keys()].sort(((TT, cT) => kT.get(TT) - kT.get(cT)));
-       return TT.forEach(((MT, KT) => {
-         const OT = cT(MT);
-         kT.has(OT) || (lT.splice(0 === KT ? 0 : lT.indexOf(cT(TT[KT - 1])) + 1, 0, OT), kT.set(OT, -1))
-       })), lT.forEach(((TT, cT) => {
-         kT.set(TT, cT)
- ... (1 more removed lines; see GitHub link above)
+         Kq = Sq();
+         const Eq = Number(null !== (qq = new URLSearchParams(window.location.search).get(zq)) && void 0 !== qq ? qq : ""),
+           gq = pq();
+         if (Eq > 0 && Eq <= 1) wq = (0, xq.y)(gq, gq[0] / Eq);
+         else {
+           const qq = Gq(),
+             Eq = (0, xq.y)(gq, (0, xq.z)(Sq())),
+             Yq = !(0, Zq.l)() && Uq(null === qq || void 0 === qq ? void 0 : qq.heldAt) && (null === qq || void 0 === qq ? void 0 : qq.heldTarget) === Sq() ? null === qq || void 0 === qq ? void 0 : qq.heldN : void 0;
+           wq = "number" === typeof Yq ? Math.min(Eq, (0, xq.y)(gq, Yq)) : Eq
+         }
+       }
+       return wq
```

#### 18. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L285-L289` → after: `L296-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L296-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L296-L301) · [Before (L285-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L285-L289)

```diff
-       const cT = {
-         variation: TT,
-         itemName: kT
-       };
-       KT.k.nt(xT, cT)
+       var gq;
+       const Yq = Eq.indexOf(null !== (gq = qq.failedUpN) && void 0 !== gq ? gq : -1);
+       return Yq >= 0 && Uq(qq.failedUpAt) ? {
+         step: Yq,
+         untilMs: performance.now() + Aq.d.stepUp.failWaitsMs[0]
+       } : null
```

#### 19. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L293` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L309) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L293)

```diff
-       vT([]), hT(new Map), QT([])
+       for (const qq of EE) qq()
```

#### 20. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L297` → after: `L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L313) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L297)

```diff
-       return (0, lT.d)(OT, jT)
+       return Dq ? null : (BE(), null === eq ? (null !== Fq || null !== (0, lq.peekGpuVendor)() ? sq() : Xq(1)) ? Cq() : null : sq() ? eq.currentStep() : null)
```

#### 21. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L301` → after: `L317-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L317-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L317-L321) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L301)

```diff
-       return (0, lT.d)(yT, tT)
+       const qq = YE();
+       if (null === qq) return null;
+       const Eq = pq(),
+         gq = Eq[Math.min(qq, Eq.length - 1)];
+       return gq === OE() ? null : gq
```

#### 22. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L305` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L325) · [Before (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L305)

```diff
-       return (0, lT.d)(fT, NT)
+       return (0, xq.t)(Yq.b.get("clientEscMenuOptions").pixelScale, (0, xq.B)())
```

#### 23. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L315-L320` → after: `L328-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L328-L329) · [Before (L315-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L315-L320)

```diff
-     function MT(TT) {
-       lT = TT
-     }
- 
-     function KT(TT, kT) {
-       return lT(TT, kT)
+     function mE() {
+       return null !== eq && null !== lE()
```

#### 24. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L335` → after: `L333-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L333-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L333-L335) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L335)

```diff
-       return TT instanceof Element && TT.hasAttribute(KT)
+       return EE.add(qq), () => {
+         EE.delete(qq)
+       }
```

#### 25. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L339-L340` → after: `L338-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L338-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L338-L351) · [Before (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L339-L340)

```diff
-     function fT(TT) {
-       yT = TT
+     function AE(qq, Eq, gq) {
+       var Yq;
+       if (null !== eq || Dq || (0, Zq.l)()) return;
+       const lq = (0, iq.c)(qq, Eq, gq);
+       null !== lq && (0, Zq.o)(lq.vendor), qE = `${qq}:${(null===lq||void 0===lq?void 0:lq.renderer)||(null===lq||void 0===lq?void 0:lq.vendor)||""}`, (null === (Yq = Gq()) || void 0 === Yq ? void 0 : Yq.gpu) !== qE && (cq.i.setItem(Mq, {
+         gpu: qE
+       }), wq = null), uE(), document.addEventListener("visibilitychange", (() => {
+         if (document.hidden) try {
+           var qq;
+           null === (qq = eq) || void 0 === qq || qq.hidden()
+         } catch (Eq) {
+           oE(), console.error("The quality steps stopped", Eq)
+         }
+       }))
```

#### 26. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L344-L359` → after: `L356-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L356-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L356-L417) · [Before (L344-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L344-L359)

```diff
-       const TT = document.createElement("div"),
-         {
-           style: kT
-         } = TT;
-       return kT.position = "absolute", kT.left = "0", kT.right = "0", kT.pointerEvents = "none", TT
-     }
- 
-     function IT(TT) {
-       const kT = xT();
-       kT.style[TT] = "0", kT.style.height = 100 * lT.b + "%", kT.style.background = "#000000", kT.style.pointerEvents = "auto", kT.setAttribute(KT, ""), kT.addEventListener("mousedown", CT), kT.addEventListener("contextmenu", AT);
-       for (const cT of ["touchstart", "touchmove", "touchend", "touchcancel"]) kT.addEventListener(cT, AT);
-       return kT
-     }
- 
-     function AT(TT) {
-       TT.preventDefault(), TT.stopPropagation()
+       var qq;
+       const Eq = null !== (qq = Gq()) && void 0 !== qq ? qq : {
+           gpu: qE
+         },
+         gq = pq();
+       cE = Sq(), eq = new bq({
+           changed: gE,
+           jN: () => {
+             WE({
+               heldN: void 0
+             })
+           },
+           Fc: qq => {
+             var Eq;
+             const gq = pq()[qq],
+               Yq = {
+ ... (46 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L362-L425` → after: `L420-L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L420-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L420-L421) · [Before (L362-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L362-L425)

```diff
-     function CT(TT) {
-       AT(TT);
-       const kT = document.activeElement;
-       kT instanceof HTMLElement && kT !== document.body && kT.blur()
-     }
-     class jT {
-       constructor(TT) {
-         this.getContainer = TT, this.elements = null, this.colour = "", this.alpha = 0, this.letterbox = !1, this.markedHost = null, this.markedCovered = !1
-       }
-       setFade(TT, kT) {
-         var cT;
-         if (!this.elements && kT <= 0) return;
-         const {
-           fade: lT
-         } = this.getElements(), MT = null !== (cT = yT) && void 0 !== cT ? cT : this.getContainer();
-         lT.parentElement !== MT && MT.appendChild(lT);
- ... (48 more removed lines; see GitHub link above)
+     function BE() {
+       null !== eq && Sq() !== cE && (wq = null, uE())
```

#### 28. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L444` → after: `L425-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L425-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L425-L429) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L444)

```diff
-       return Math.min(1, Math.max(0, TT))
+       cq.i.setItem(Mq, {
+         ...Gq(),
+         ...qq,
+         gpu: qE
+       })
```

#### 29. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L447-L450` → after: `L436-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L436-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L436-L437) · [Before (L447-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L447-L450)

```diff
-     function fT(TT, kT, cT) {
-       const lT = 1 - cT,
-         MT = cT * cT;
-       return 3 * (lT * lT) * cT * TT + 3 * lT * MT * kT + MT * cT
+     function jE() {
+       NE++
```

#### 30. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L454-L455` → after: `L441-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L441-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L441-L442) · [Before (L454-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L454-L455)

```diff
-       const lT = 1 - cT;
-       return 3 * (lT * lT) * TT + 6 * lT * cT * (kT - TT) + 3 * (cT * cT) * (1 - kT)
+       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       BE(), null !== eq && (qq - VE >= 1e3 && (dE = NE - aE > Aq.d.sceneChange.meshesPerSecond, aE = NE, VE = qq), fq.d.isHeld() ? eq.paused(qq) : eq.frame(qq, Eq, gq && !document.hidden && sq(), dE || Yq > 0 || (0, Oq.p)()))
```

#### 31. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L458-L477` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L445) · [Before (L458-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L458-L477)

```diff
-     function IT(TT, kT) {
-       const cT = yT(TT);
-       if (0 === cT || 1 === cT) return cT;
-       const lT = yT(kT[0]),
-         MT = kT[1],
-         KT = yT(kT[2]),
-         OT = kT[3];
-       if (lT === MT && KT === OT) return cT;
-       let IT = cT,
-         AT = !1;
-       for (let CT = 0; CT < 8; CT++) {
-         const TT = fT(lT, KT, IT) - cT;
-         if (Math.abs(TT) < 1e-6) {
-           AT = !0;
-           break
-         }
- ... (4 more removed lines; see GitHub link above)
+     function oE() {
```

#### 32. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L479-L485` → after: `L447-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L447-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L447-L453) · [Before (L479-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L479-L485)

```diff
-         let TT = 0,
-           kT = 1;
-         IT = cT;
-         for (let MT = 0; MT < 12; MT++) {
-           const MT = fT(lT, KT, IT);
-           if (Math.abs(MT - cT) < 1e-6) break;
-           cT > MT ? TT = IT : kT = IT, IT = (TT + kT) / 2
+         Dq = !0, null !== eq && (eq = null, WE({
+           noGain: void 0
+         }));
+         try {
+           gE()
+         } catch (qq) {
+           console.error("The quality steps' resize to the player's n failed", qq)
```

#### 33. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L526-L573` → after: `L459-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L459-L460) · [Before (L526-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L526-L573)

```diff
-       var TT, kT;
-       return null !== (TT = null === (kT = screen.orientation) || void 0 === kT ? void 0 : kT.type) && void 0 !== TT ? TT : innerWidth > innerHeight ? "landscape" : "portrait"
-     }
-     const KT = new class {
-       constructor() {
-         this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
-           document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
-         }
-       }
-       isHeld() {
-         return this.holding && MT() !== this.heldOrientation && (this.holding = !1), this.holding
-       }
-       hold() {
-         this.heldOrientation = MT(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
-           this.holding && (0, lT.vt)(new Error("Game view size held for 60 s"))
-         }), 6e4)
- ... (32 more removed lines; see GitHub link above)
+       var qq;
+       null === (qq = eq) || void 0 === qq || qq.resized(performance.now())
```

#### 34. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L579` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L463) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L579)

```diff
-   36571: (TT, kT, cT) => {
+   9197: (qq, Eq, gq) => {
```

#### 35. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L581-L592` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L465) · [Before (L581-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L581-L592)

```diff
-       A: () => NT,
-       c: () => lT,
-       e: () => MT,
-       i: () => CT,
-       j: () => hT,
-       k: () => IT,
-       l: () => QT,
-       p: () => fT,
-       q: () => xT,
-       t: () => jT,
-       u: () => vT,
-       y: () => tT
+       c: () => Oq
```

#### 36. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L594-L627` → after: `L467-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L467-L468) · [Before (L594-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L594-L627)

```diff
-     const lT = [{
-       numLines: 7,
-       charsPerLine: 16,
-       uiFontSize: 3.3,
-       ingameFontSize: 25
-     }, {
-       numLines: 5,
-       charsPerLine: 11,
-       uiFontSize: 4.6,
-       ingameFontSize: 36
-     }, {
-       numLines: 3,
-       charsPerLine: 7,
-       uiFontSize: 7.5,
-       ingameFontSize: 58
-     }];
- ... (18 more removed lines; see GitHub link above)
+     var Yq = gq(96),
+       lq = gq(128);
```

#### 37. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L630-L868` → after: `L471-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L471-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L471-L484) · [Before (L630-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L630-L868)

```diff
-       const MT = fT(TT, kT),
-         {
-           numLines: OT,
-           charsPerLine: yT
-         } = lT[cT];
-       return {
-         numLines: Math.max(1, Math.floor(OT / KT * MT.height)),
-         charsPerLine: Math.max(1, Math.floor(yT * MT.width))
-       }
-     }
- 
-     function IT(TT, kT, cT, lT) {
-       const {
-         numLines: MT,
-         charsPerLine: KT
-       } = xT(cT, lT, kT);
- ... (223 more removed lines; see GitHub link above)
+       if ("webgpu" === qq) return gq ? ((0, Yq.seedGpuVendor)(gq), {
+         vendor: gq,
+         renderer: ""
+       }) : null;
+       try {
+         const gq = "webgl" === qq ? Eq.getContext("webgl2") : Eq.getContext("webgl");
+         "webgl" === qq && gq && (0, lq.x)(gq);
+         const Oq = null === gq || void 0 === gq ? void 0 : gq.getExtension("WEBGL_debug_renderer_info");
+         if (gq && Oq) {
+           const qq = String(gq.getParameter(Oq.UNMASKED_VENDOR_WEBGL)),
+             Eq = String(gq.getParameter(Oq.UNMASKED_RENDERER_WEBGL));
+           return (0, Yq.seedGpuVendor)(qq), (0, lq.B)(qq, Eq), {
+             vendor: qq,
+             renderer: Eq
```

#### 38. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L870-L898` → after: `L486-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L486-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/187.js#L486-L489) · [Before (L870-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/187.js#L870-L898)

```diff
-           return 72 * kT
-         },
-         lT = .3 - .78 * kT,
-         MT = .5 - .78 * kT,
-         KT = .6 - .7 * kT,
-         OT = .8 - .6 * kT;
-       let yT = cT(lT),
-         fT = cT(MT) - yT,
-         xT = cT(KT) - fT - yT,
-         IT = cT(OT) - xT - fT - yT;
-       lT < .041 && (fT /= 1 - yT, xT /= 1 - yT, IT /= 1 - yT, yT = 0), MT < .041 && (yT /= 1 - fT, xT /= 1 - fT, IT /= 1 - fT, fT = 0), KT < .041 && (yT /= 1 - xT, fT /= 1 - xT, IT /= 1 - xT, xT = 0), OT < .041 && (yT /= 1 - IT, fT /= 1 - IT, xT /= 1 - IT, IT = 0);
-       return {
-         commonProb: yT,
-         uncommonProb: fT,
-         rareProb: xT,
-         epicProb: IT,
- ... (13 more removed lines; see GitHub link above)
+         }
+         gq && (0, lq.B)(String(gq.getParameter(gq.VENDOR)), String(gq.getParameter(gq.RENDERER)))
+       } catch {}
+       return null
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/188.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/188.js` (86 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071)

#### 1. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L4)

```diff
-   38919: (TT, kT, cT) => {
+   36866: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L6-L7)

```diff
-       d: () => yT,
-       f: () => KT
+       e: () => Oq
```

#### 3. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L9-L176` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L8-L9) · [Before (L9-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L9-L176)

```diff
-     var lT = cT(4089);
-     let MT = null;
- 
-     function KT(TT) {
-       return null !== MT && TT === MT
-     }
- 
-     function OT() {
-       this.HZ = !1, this.stopPropagation = !1, this.eZ = !1, this.disabled = !1
-     }
-     class yT {
-       constructor(TT, kT) {
-         this.version = "0.7.0";
-         var cT = Object.assign({}, new OT, kT || {});
-         this.element = TT || document, this.HZ = !!cT.HZ, this.stopPropagation = !!cT.stopPropagation, this.eZ = !!cT.eZ, this.disabled = !!cT.disabled, this.filterEvents = (TT, kT) => !0, this.ignoreEvent = TT => !1, this.down = new lT.EventEmitter, this.up = new lT.EventEmitter … [truncated]
-           dx: 0,
- ... (152 more removed lines; see GitHub link above)
+     var Yq = gq(57),
+       lq = gq(31);
```

#### 4. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L179-L188` → after: `L12-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L12-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L12-L19) · [Before (L179-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L179-L188)

```diff
-       return !!TT[aT[kT]] || ("AltRight" === kT || "ControlLeft" === kT) && "function" === typeof TT.getModifierState && !0 === TT.getModifierState("AltGraph")
-     }
- 
-     function rT(TT, kT) {
-       for (var cT in TT._modifiersHeldThroughBlur = {}, aT) TT._keyStates[cT] && (TT._modifiersHeldThroughBlur[cT] = !0);
-       kT && kT.isTrusted && function() {
-         try {
-           return window.self !== window.top
-         } catch (TT) {
-           return !0
+       const [gq, Oq] = (0, Yq.useState)(Eq);
+       return (0, Yq.useEffect)((() => {
+         Oq(Eq());
+         const gq = lq.i.subscribe(qq, (qq => {
+           Oq(qq)
+         }));
+         return () => {
+           lq.i.unsubscribe(gq)
```

#### 5. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L190-L237` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L21) · [Before (L190-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L190-L237)

```diff
-       }() && (clearTimeout(TT._blurRelease), TT._blurRelease = setTimeout((function() {
-         if (!document.hasFocus())
-           for (var kT in TT._modifiersHeldThroughBlur = {}, TT._keyStates) TT._keyStates[kT] && !/^Mouse\d/.test(kT) && wT(TT, kT)
-       }), 0))
-     }
- 
-     function PT(TT, kT) {
-       var cT = TT._modifiersHeldThroughBlur;
-       if (cT && kT.isTrusted && document.hasFocus())
-         for (var lT in cT) delete cT[lT], TT._keyStates[lT] && lT !== kT.code && (FT(kT, lT) || wT(TT, lT))
-     }
- 
-     function wT(TT, kT) {
-       const cT = {
-           code: kT,
-           preventDefault: () => {},
- ... (32 more removed lines; see GitHub link above)
+       }), [qq]), gq
```

#### 6. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L240` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L24) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L240)

```diff
-   36496: (TT, kT, cT) => {
+   37004: (qq, Eq, gq) => {
```

#### 7. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L242-L243` → after: `L26-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L26-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L26-L29) · [Before (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L242-L243)

```diff
-       b: () => tT,
-       c: () => hT
+       d: () => lq,
+       e: () => Oq,
+       h: () => xq,
+       i: () => mq
```

#### 8. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L245-L253` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L31-L33) · [Before (L245-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L245-L253)

```diff
-     var lT = cT(71),
-       MT = cT(1461),
-       KT = cT(1996),
-       OT = cT(36445),
-       yT = cT(617),
-       fT = cT(1046),
-       xT = cT.n(fT),
-       IT = cT(1099);
-     const AT = [CT()];
+     var Yq = gq(1725);
+     const lq = ".bloxdreplay",
+       Oq = "application/octet-stream";
```

#### 9. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L256-L262` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L36) · [Before (L256-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L256-L262)

```diff
-       return {
-         source: null,
-         direction: null,
-         JG: null,
-         timeout: void 0,
-         writtenAngle: null
-       }
+       return `game-recording-${(arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date).toISOString()}${lq}`
```

#### 10. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L266` → after: `L40-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L40-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L40-L43) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L266)

```diff
-       return AT.find((kT => null !== kT.source && kT.source === TT))
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mq();
+       return (0, Yq.e)(new Blob([qq], {
+         type: Oq
+       }), Eq), Eq
```

#### 11. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L270` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L62) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L270)

```diff
-       clearTimeout(TT.timeout), TT.source = null, TT.direction = null, TT.writtenAngle = null, TT.JG && (TT.JG.style.rotate = "")
+       Yq = qq
```

#### 12. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L272-L306` → after: `L64-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L64-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L64-L157) · [Before (L272-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L272-L306)

```diff
-     const tT = (0, lT.memo)((function() {
-       const [, TT] = (0, lT.useReducer)((TT => TT + 1), 0);
-       return (0, MT.g)("damagedByOtherPlayer", (kT => {
-         let {
-           EK: cT,
-           direction: lT
-         } = kT;
-         const MT = cT || "nonDirectional",
-           KT = function(TT) {
-             var kT;
-             const cT = null !== (kT = jT(TT)) && void 0 !== kT ? kT : AT.find((TT => null === TT.source));
-             if (cT) return cT;
-             const lT = {
-               source: null,
-               direction: null,
-               JG: null,
- ... (19 more removed lines; see GitHub link above)
+ 
+     function Oq() {
+       return Yq
+     }
+   },
+   37033: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => mq,
+       f: () => xq
+     });
+     var Yq = gq(31);
+     const lq = 1500,
+       Oq = 1e3,
+       mq = {
+         recordingStarted: {
+           text: "Started recording",
+ ... (78 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L308-L320` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L159) · [Before (L308-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L308-L320)

```diff
-       }), []), (0, IT.jsx)("div", {
-         className: "DirectionalDamage",
-         children: AT.map(((TT, kT) => (0, IT.jsx)("div", {
-           ref: kT => {
-             TT.JG = kT
-           },
-           className: xT()("DamageIndicator", {
-             DamageIndicatorFullCircle: (0, yT.R)(TT.direction),
-             DamageIndicatorIdle: null === TT.source
-           })
-         }, kT)))
-       })
-     }));
+       };
```

#### 14. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L323-L327` → after: `L162-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L162-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L162-L168) · [Before (L323-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L323-L327)

```diff
-       for (const kT of AT) {
-         if (null === kT.source || (0, yT.R)(kT.direction)) continue;
-         const cT = kT.direction - TT;
-         cT !== kT.writtenAngle && (kT.writtenAngle = cT, kT.JG.style.rotate = `${cT}rad`)
-       }
+       var Eq;
+       const gq = null !== (Eq = qq.timeoutMs) && void 0 !== Eq ? Eq : "Error" === qq.type ? lq : Oq;
+       Yq.i.TV("showBottomMessage", {
+         message: qq.text,
+         timeoutLength: gq,
+         type: qq.type
+       })
```

#### 15. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L330` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L171) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L330)

```diff
-   36310: (TT, kT, cT) => {
+   36543: (qq, Eq, gq) => {
```

#### 16. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L332-L333` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L173-L174) · [Before (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L332-L333)

```diff
-       b: () => MT,
-       d: () => KT
+       e: () => lq,
+       h: () => Oq
```

#### 17. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L345` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L186) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L345)

```diff
-   9298: (TT, kT, cT) => {
+   9207: (qq, Eq, gq) => {
```

#### 18. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L348` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L189) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L348)

```diff
-       c: () => MT
+       d: () => lq
```

#### 19. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L350` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L191) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L350)

```diff
-     var lT = cT(31);
+     var Yq = gq(24);
```

#### 20. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L357` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L198) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L357)

```diff
-       return MT(lT.e.get("isTouchScreen"), lT.e.get("clientEscMenuOptions").touchActionButtons)
+       return lq(Yq.b.get("isTouchScreen"), Yq.b.get("clientEscMenuOptions").touchActionButtons)
```

#### 21. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L360-L362` → after: `L201-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L201-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L201-L203) · [Before (L360-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L360-L362)

```diff
-   40304: (TT, kT, cT) => {
-     cT.r(kT), cT.d(kT, {
-       startPadGameplay: () => aT
+   36849: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Yq
```

#### 22. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L364-L533` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L205) · [Before (L364-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L364-L533)

```diff
-     cT(40169);
-     var lT = cT(40176),
-       MT = cT(3732),
-       KT = cT(31),
-       OT = cT(38882),
-       yT = cT(3644),
-       fT = cT(38901),
-       xT = cT(36),
-       IT = cT(2790),
-       AT = cT(38266),
-       CT = cT(8886),
-       jT = cT(40182);
-     const vT = {
-       yawRadPerSec: 0,
-       pitchRadPerSec: 0
-     };
- ... (154 more removed lines; see GitHub link above)
+     const Yq = 3
```

#### 23. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L535` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L207) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L535)

```diff
-   36432: (TT, kT, cT) => {
+   36859: (qq, Eq, gq) => {
```

#### 24. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L538-L544` → after: `L210-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L210-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L210-L217) · [Before (L538-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L538-L544)

```diff
-       B: () => QT,
-       d: () => KT,
-       h: () => tT,
-       k: () => hT,
-       l: () => yT,
-       p: () => CT,
-       q: () => NT,
+       C: () => Hq,
+       G: () => rq,
+       J: () => tq,
+       M: () => vq,
+       e: () => cq,
+       i: () => Vq,
+       m: () => Pq,
+       o: () => oq,
```

#### 25. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L546` → after: `L219-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L219-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L219-L220) · [Before (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L546)

```diff
-       w: () => ST
+       v: () => Qq,
+       z: () => dq
```

#### 26. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L548-L550` → after: `L222-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L222-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L222-L230) · [Before (L548-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L548-L550)

```diff
-     var lT = cT(31),
-       MT = cT(36);
-     const KT = "clientGameInventoryButtonsChanged",
+     var Yq = gq(36866),
+       lq = gq(36874),
+       Oq = gq(31);
+     const mq = "clientGameCraftableMarksChanged",
+       xq = "clientGameCraftableLocksChanged",
+       Aq = "clientGameCraftableOrderChanged",
+       cq = "selectCraftable";
+     let uq = new Set,
+       Bq = new Map,
```

#### 27. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L554-L557` → after: `L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L234) · [Before (L554-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L554-L557)

```diff
-       return [...OT.values()].sort(((TT, kT) => {
-         var cT, lT;
-         return (null !== (cT = TT.order) && void 0 !== cT ? cT : 0) - (null !== (lT = kT.order) && void 0 !== lT ? lT : 0)
-       }))
+       return uq
```

#### 28. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L562` → after: `L238-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L238-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L238-L243) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L562)

```diff
-       fT = TT
+       const Eq = new Set(qq);
+       (0, lq.c)(Eq, uq) || (uq = Eq, Oq.i.TV(mq, uq))
+     }
+ 
+     function Vq() {
+       return Bq
```

#### 29. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L567-L573` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L247) · [Before (L567-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L567-L573)

```diff
-       IT = !0;
-       try {
-         TT.onClick()
-       } finally {
-         IT = !1
-       }
-       TT.panel && "clientGame" === lT.e.get("openInGameMenuName") && xT(TT.id)
+       0 === qq.size && 0 === Bq.size || (Bq = new Map(qq), Oq.i.TV(xq, Bq))
```

#### 30. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L580-L581` → after: `L254-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L254-L255) · [Before (L580-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L580-L581)

```diff
-     function jT() {
-       return yT().filter((TT => TT.panel && !TT.disabled))
+     function Hq(qq) {
+       qq.length === Wq.size && qq.every(((qq, Eq) => Wq.get(qq) === Eq)) || (Wq = new Map(qq.map(((qq, Eq) => [qq, Eq]))), Oq.i.TV(Aq, Wq))
```

#### 31. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L584-L587` → after: `L258-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L258-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L258-L271) · [Before (L584-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L584-L587)

```diff
-     function vT(TT) {
-       const kT = jT(),
-         cT = kT.findIndex((TT => TT.id === fT));
-       return !(cT < 0 || kT.length < 2) && (AT(kT[(cT + TT + kT.length) % kT.length]), !0)
+     function oq(qq, Eq, gq, Yq) {
+       if (! function(qq, Eq, gq) {
+           return qq.size > 0 || Eq.size > 0 || gq.size > 0
+         }(Eq, gq, Yq)) return qq;
+       const lq = qq => {
+         const Yq = gq.get(qq.name);
+         var lq;
+         return Yq ? null !== (lq = Yq.stepsAway) && void 0 !== lq ? lq : 1 : Eq.has(qq.name) ? -1 : 0
+       };
+       return [...qq].sort(((qq, Eq) => lq(qq) - lq(Eq) || ((qq, Eq) => {
+         const gq = Yq.get(qq.name),
+           lq = Yq.get(Eq.name);
+         return void 0 === gq || void 0 === lq ? (void 0 === gq ? 1 : 0) - (void 0 === lq ? 1 : 0) : Number(Eq.haveIngredients) - Number(qq.haveIngredients) || gq - lq
+       })(qq, Eq)))
```

#### 32. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L590-L591` → after: `L274-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L274-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L274-L289) · [Before (L590-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L590-L591)

```diff
-     function tT() {
-       return null !== fT && jT().length > 1
+     function Pq(qq, Eq, gq) {
+       const Yq = [...Eq.keys()].sort(((qq, gq) => Eq.get(qq) - Eq.get(gq)));
+       return qq.forEach(((lq, Oq) => {
+         const mq = gq(lq);
+         Eq.has(mq) || (Yq.splice(0 === Oq ? 0 : Yq.indexOf(gq(qq[Oq - 1])) + 1, 0, mq), Eq.set(mq, -1))
+       })), Yq.forEach(((qq, gq) => {
+         Eq.set(qq, gq)
+       })), [...qq].sort(((qq, Yq) => Eq.get(gq(qq)) - Eq.get(gq(Yq))))
+     }
+ 
+     function Qq(qq, Eq) {
+       const gq = {
+         variation: qq,
+         itemName: Eq
+       };
+       Oq.i.TV(cq, gq)
```

#### 33. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L595` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L293) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L595)

```diff
-       xT(null)
+       aq([]), dq(new Map), Hq([])
```

#### 34. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L599` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L297) · [Before (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L599)

```diff
-       "inventory" !== lT.e.get("openInGameMenuName") && xT(null)
+       return (0, Yq.e)(mq, Nq)
```

#### 35. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L603-L604` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L301) · [Before (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L603-L604)

```diff
-       const TT = fT;
-       return xT(null), TT
+       return (0, Yq.e)(xq, Vq)
```

#### 36. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L607-L610` → after: `L304-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L304-L305) · [Before (L607-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L607-L610)

```diff
-     function ST(TT) {
-       return OT.set(TT.id, TT), MT.k.nt(KT, yT(), !0), () => {
-         OT.get(TT.id) === TT && (OT.delete(TT.id), MT.k.nt(KT, yT()))
-       }
+     function vq() {
+       return (0, Yq.e)(Aq, jq)
```

#### 37. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L613` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L308) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L613)

```diff
-   36423: (TT, kT, cT) => {
+   36851: (qq, Eq, gq) => {
```

#### 38. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L616-L622` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L311) · [Before (L616-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L616-L622)

```diff
-       d: () => hT,
-       f: () => NT,
-       h: () => CT,
-       j: () => xT,
-       m: () => tT,
-       p: () => jT,
-       q: () => IT
+       c: () => lq
```

#### 39. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L624-L629` → after: `L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L313) · [Before (L624-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L624-L629)

```diff
-     var lT = cT(31),
-       MT = cT(36),
-       KT = cT(1292),
-       OT = cT(36432);
-     const yT = "clientGameUiChanged";
-     let fT = null;
+     let Yq = () => null;
```

#### 40. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L631-L632` → after: `L315-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L315-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L315-L316) · [Before (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L631-L632)

```diff
-     function xT() {
-       return fT
+     function lq(qq) {
+       Yq = qq
```

#### 41. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L636-L642` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L320) · [Before (L636-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L636-L642)

```diff
-       const cT = {
-         content: TT,
-         menu: kT
-       };
-       return fT = cT, MT.k.nt(yT, fT, !0), () => {
-         fT === cT && (fT = null, vT = !1, hT(), MT.k.nt(yT, null))
-       }
+       return Yq(qq, Eq)
```

#### 42. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L644` → after: `L322-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L322-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L322-L332) · [Before (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L644)

```diff
-     let AT = null;
+   },
+   36619: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => Nq,
+       f: () => lq,
+       i: () => mq,
+       m: () => Aq
+     });
+     var Yq = gq(36626);
+     const lq = "data-camera-fade",
+       Oq = "data-letterbox-bar";
```

#### 43. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L646-L647` → after: `L334-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L334-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L334-L335) · [Before (L646-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L646-L647)

```diff
-     function CT() {
-       return AT
+     function mq(qq) {
+       return qq instanceof Element && qq.hasAttribute(Oq)
```

#### 44. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L651-L653` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L340) · [Before (L651-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L651-L653)

```diff
-       return AT = TT, () => {
-         AT === TT && (AT = null)
-       }
+       xq = qq
```

#### 45. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L658-L662` → after: `L344-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L344-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L344-L348) · [Before (L658-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L658-L662)

```diff
-       const TT = lT.e.get("openInGameMenuName");
-       "clientGame" !== TT && (vT = "inventory" === TT), (0, OT.p)() || (0, OT.k)(), (0, KT.p)(KT.c), lT.e.set({
-         openInGameMenuName: "clientGame",
-         openEverythingMenuName: null
-       })
+       const qq = document.createElement("div"),
+         {
+           style: Eq
+         } = qq;
+       return Eq.position = "absolute", Eq.left = "0", Eq.right = "0", Eq.pointerEvents = "none", qq
```

#### 46. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L665-L666` → after: `L351-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L351-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L351-L355) · [Before (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L665-L666)

```diff
-     function hT() {
-       QT(!1)
+     function uq(qq) {
+       const Eq = cq();
+       Eq.style[qq] = "0", Eq.style.height = 100 * Yq.b + "%", Eq.style.background = "#000000", Eq.style.pointerEvents = "auto", Eq.setAttribute(Oq, ""), Eq.addEventListener("mousedown", Wq), Eq.addEventListener("contextmenu", Bq);
+       for (const gq of ["touchstart", "touchmove", "touchend", "touchcancel"]) Eq.addEventListener(gq, Bq);
+       return Eq
```

#### 47. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L669-L670` → after: `L358-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L358-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L358-L359) · [Before (L669-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L669-L670)

```diff
-     function NT() {
-       QT(vT)
+     function Bq(qq) {
+       qq.preventDefault(), qq.stopPropagation()
```

#### 48. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L674-L676` → after: `L363-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L363-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L363-L365) · [Before (L674-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L674-L676)

```diff
-       "clientGame" === lT.e.get("openInGameMenuName") && lT.e.set({
-         openInGameMenuName: TT ? "inventory" : null
-       }), TT || (0, OT.k)(), vT = !1
+       Bq(qq);
+       const Eq = document.activeElement;
+       Eq instanceof HTMLElement && Eq !== document.body && Eq.blur()
```

#### 49. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L678-L695` → after: `L367-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L367-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L367-L425) · [Before (L678-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L678-L695)

```diff
-   },
-   36302: (TT, kT, cT) => {
-     cT.d(kT, {
-       e: () => fT
-     });
-     var lT = cT(328),
-       MT = cT(31),
-       KT = cT(36310),
-       OT = cT(1654),
-       yT = cT(2009);
- 
-     function fT(TT, kT) {
-       var cT, fT, xT;
-       if (!MT.e.get("isKeydownEnabled") || TT.repeat) return;
-       const IT = TT.code;
-       "Escape" === TT.key ? (0, OT.j)(TT) : null !== (cT = yT.y.OpenSettings) && void 0 !== cT && cT.includes(IT) ? (0, OT.z)(TT, lT.o.SETTINGS) : null !== (fT = yT.y.OpenCharacterCustomization) && void 0 !== fT && fT.includes(IT) ? (0, KT.b)() || (0, OT.z)(TT, lT.o.CUSTOMISATION … [truncated]
- ... (2 more removed lines; see GitHub link above)
+     class Nq {
+       constructor(qq) {
+         this.getContainer = qq, this.elements = null, this.colour = "", this.alpha = 0, this.letterbox = !1, this.markedHost = null, this.markedCovered = !1
+       }
+       setFade(qq, Eq) {
+         var gq;
+         if (!this.elements && Eq <= 0) return;
+         const {
+           fade: Yq
+         } = this.getElements(), lq = null !== (gq = xq) && void 0 !== gq ? gq : this.getContainer();
+         Yq.parentElement !== lq && lq.appendChild(Yq);
+         const Oq = this.markHost(Eq > 0 ? xq : null, Eq >= 1);
+         (qq !== this.colour || Eq !== this.alpha || Oq) && (qq !== this.colour && (Yq.style.background = qq), Yq.style.opacity = String(Eq), Yq.style.display = Eq > 0 ? "" : "none", this.fadeKeeperHosts(Eq), this.colour = qq, this.alpha = Eq)
+       }
+       fadeKeeperHosts(qq) {
+         var Eq;
+ ... (43 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L698` → after: `L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L428) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L698)

```diff
-   36284: (TT, kT, cT) => {
+   37042: (qq, Eq, gq) => {
```

#### 51. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L701` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L431) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L701)

```diff
-       e: () => IT,
+       f: () => lq,
```

#### 52. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L703` → after: `L433-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L433-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L433-L436) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L703)

```diff
-       l: () => AT
+       k: () => Yq,
+       o: () => uq,
+       r: () => Bq,
+       u: () => Aq
```

#### 53. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L705-L715` → after: `L438-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L438-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L438-L441) · [Before (L705-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L705-L715)

```diff
-     var lT = cT(339),
-       MT = cT(649),
-       KT = cT(654),
-       OT = cT(47);
-     const yT = {
-         idStorageKey: "playSessionId",
-         lastActivityStorageKey: "playSessionLastActivityMs",
-         expiryMs: 3e5
-       },
-       fT = "playSessionGameNameWithVariation",
-       xT = "wasMatchmakePlayer";
+     const Yq = [0, 0, 1, 1],
+       lq = [.42, 0, 1, 1],
+       Oq = [0, 0, .58, 1],
+       mq = [.42, 0, .58, 1];
```

#### 54. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L717-L719` → after: `L443-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L443-L444) · [Before (L717-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L717-L719)

```diff
-     function IT() {
-       let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT.g;
-       (0, KT.h)(TT, yT)
+     function xq(qq) {
+       return Math.min(1, Math.max(0, qq))
```

#### 55. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L722-L723` → after: `L447-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L447-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L447-L450) · [Before (L722-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L722-L723)

```diff
-     function AT() {
-       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT.g).setItem(xT, !0)
+     function Aq(qq, Eq, gq) {
+       const Yq = 1 - gq,
+         lq = gq * gq;
+       return 3 * (Yq * Yq) * gq * qq + 3 * Yq * lq * Eq + lq * gq
```

#### 56. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L726-L728` → after: `L453-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L453-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L453-L488) · [Before (L726-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L726-L728)

```diff
-     function CT() {
-       let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT.g;
-       return (0, KT.c)(TT, yT)
+     function cq(qq, Eq, gq) {
+       const Yq = 1 - gq;
+       return 3 * (Yq * Yq) * qq + 6 * Yq * gq * (Eq - qq) + 3 * (gq * gq) * (1 - Eq)
+     }
+ 
+     function uq(qq, Eq) {
+       const gq = xq(qq);
+       if (0 === gq || 1 === gq) return gq;
+       const Yq = xq(Eq[0]),
+         lq = Eq[1],
+         Oq = xq(Eq[2]),
+         mq = Eq[3];
+       if (Yq === lq && Oq === mq) return gq;
+       let uq = gq,
+         Bq = !1;
+       for (let Wq = 0; Wq < 8; Wq++) {
+ ... (20 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L732-L751` → after: `L492-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L492-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L492-L503) · [Before (L732-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L732-L751)

```diff
-       let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OT.g;
-       const cT = (0, KT.c)(kT, yT),
-         IT = function(TT) {
-           const kT = TT.getItem(fT);
-           return "string" !== typeof kT ? null : kT
-         }(kT),
-         AT = function() {
-           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT.g).getItem(xT)
-         }(kT);
-       let CT;
-       return CT = null !== cT && null !== IT && (0, KT.e)(kT, yT) && function(TT, kT, cT) {
-           const MT = (0, lT.Lb)(TT),
-             KT = (0, lT.Lb)(kT),
-             OT = (0, lT.Gb)(TT),
-             yT = (0, lT.Gb)(kT);
-           return !(MT !== KT || !cT) || MT === KT && OT === yT
- ... (4 more removed lines; see GitHub link above)
+       switch (qq) {
+         case "linear":
+           return Yq;
+         case "easeIn":
+           return lq;
+         case "easeOut":
+           return Oq;
+         case "easeInOut":
+           return mq;
+         default:
+           return qq
+       }
```

#### 58. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L754` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L506) · [Before (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L754)

```diff
-   36278: (TT, kT, cT) => {
+   36626: (qq, Eq, gq) => {
```

#### 59. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L756-L757` → after: `L508-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L508-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L508-L521) · [Before (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L756-L757)

```diff
-       e: () => QT,
-       f: () => ST
+       b: () => Yq,
+       c: () => lq,
+       d: () => Oq
+     });
+     const Yq = .12,
+       lq = 1 - 2 * Yq;
+ 
+     function Oq(qq) {
+       return Math.abs(qq) > lq
+     }
+   },
+   9200: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => Oq
```

#### 60. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L759-L773` → after: `L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L523) · [Before (L759-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L759-L773)

```diff
-     var lT = cT(1018),
-       MT = cT(623),
-       KT = cT(339),
-       OT = cT(1020),
-       yT = cT(636),
-       fT = cT(666),
-       xT = cT(4508),
-       IT = cT(118),
-       AT = cT(159),
-       CT = cT(1741),
-       jT = cT(133),
-       vT = cT(36284),
-       tT = cT(47),
-       hT = cT(651),
-       NT = cT(36293);
+     var Yq = gq(1046);
```

#### 61. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L777` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L527) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L777)

```diff
-       return [...null !== (TT = navigator.languages) && void 0 !== TT ? TT : [null !== (kT = navigator.language) && void 0 !== kT ? kT : "none"], "en-gb"]
+       return null !== (qq = null === (Eq = screen.orientation) || void 0 === Eq ? void 0 : Eq.type) && void 0 !== qq ? qq : innerWidth > innerHeight ? "landscape" : "portrait"
```

#### 62. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L779-L812` → after: `L529-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L529-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L529-L548) · [Before (L779-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L779-L812)

```diff
- 
-     function ST(TT, kT, cT, ST, DT) {
-       const aT = (0, lT.j)(kT) ? (0, lT.n)(kT) : null,
-         FT = {
-           cookies: (0, CT.getAllCookiesForGameNameWithVariation)(kT),
-           isMobile: (0, IT.isMobile)(),
-           isUsingCustomGameTexturePack: null !== aT && DT(aT),
-           generalCookies: {
-             joinDiscord: !!tT.e.getItem("DiscordPressed"),
-             newGo: xT.c,
-             ...TT.getMetricsCookies(),
-             trafficCode: ST,
-             compliance: IT.compliance
-           },
-           browserInfo: {
-             ua: window.navigator.userAgent,
- ... (18 more removed lines; see GitHub link above)
+     const Oq = new class {
+       constructor() {
+         this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
+           document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
+         }
+       }
+       isHeld() {
+         return this.holding && lq() !== this.heldOrientation && (this.holding = !1), this.holding
+       }
+       hold() {
+         this.heldOrientation = lq(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
+           this.holding && (0, Yq.lV)(new Error("Game view size held for 60 s"))
+         }), 6e4)
+       }
+       release() {
+         clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
+ ... (4 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L814-L820` → after: `L550-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L550-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L550-L563) · [Before (L814-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L814-L820)

```diff
-         };
-       return null !== aT && (0, KT.Ac)(aT) ? (FT.lobbyName = (0, lT.g)(aT, (0, lT.k)(kT), cT), {
-         roomName: `classic_${OT.g}`,
-         joinOptions: FT
-       }) : {
-         roomName: kT,
-         joinOptions: FT
+         }), 1e3)
+       }
+       heldSizer(qq) {
+         let Eq = !1;
+         return () => {
+           if (Eq && this.isHeld()) return null;
+           const gq = qq();
+           return Eq ||= null !== gq, gq
+         }
+       }
+       onRelease(qq) {
+         return this.resizers.add(qq), () => {
+           this.resizers.delete(qq)
+         }
```

#### 64. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L824-L839` → after: `L567-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L567-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L567-L573) · [Before (L824-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L824-L839)

```diff
-   36085: (TT, kT, cT) => {
-     cT.d(kT, {
-       d: () => lT,
-       g: () => MT,
-       j: () => KT,
-       m: () => OT
-     });
-     const lT = 1024,
-       MT = 1024 * lT;
- 
-     function KT(TT) {
-       return 2 ** Math.floor(Math.log2(Math.max(1, TT / MT)))
-     }
- 
-     function OT(TT) {
-       return (TT / MT).toFixed(1)
+   36549: (qq, Eq, gq) => {
+     const Yq = JSON.parse('{"classicGame":{"loseItemsIfLogOutTip":"You will lose your items if you log out when less than 80hp and hit by a player within the last 8 seconds.","protectLandWithProtectorsTip":"Protect your land and chests with protectors - craft them from diamonds", … [truncated]
+     (0, gq(1183).b)(Yq)
+   },
+   36874: (qq, Eq, gq) => {
+     function Yq(qq, Eq) {
+       return qq.size === Eq.size && [...qq].every((qq => Eq.has(qq)))
```

#### 65. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L842` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L579) · [Before (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L842)

```diff
-   36299: (TT, kT, cT) => {
+   36781: (qq, Eq, gq) => {
```

#### 66. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L847-L849` → after: `L587-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L587-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L587-L592) · [Before (L847-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L847-L849)

```diff
-       n: () => fT,
-       r: () => xT,
-       t: () => IT
+       m: () => uq,
+       q: () => Hq,
+       s: () => Aq,
+       t: () => cq,
+       w: () => Nq,
+       z: () => aq
```

#### 67. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L851-L855` → after: `L594-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L594-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L594-L609) · [Before (L851-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L851-L855)

```diff
-     var lT = cT(218);
-     const MT = 32 * cT(36085).g,
-       KT = 6144,
-       OT = 4608,
-       yT = 512;
+     const Yq = [{
+       numLines: 7,
+       charsPerLine: 16,
+       uiFontSize: 3.3,
+       ingameFontSize: 25
+     }, {
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
```

#### 68. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L857-L858` → after: `L611-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L611-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L611-L616) · [Before (L857-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L857-L858)

```diff
-     function fT(TT) {
-       return Math.floor(MT * TT / KT)
+     function lq(qq, Eq) {
+       const {
+         numLines: gq,
+         charsPerLine: lq
+       } = Yq[Eq];
+       return oq(qq, gq, lq, !1)
```

#### 69. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L861-L866` → after: `L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L622) · [Before (L861-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L861-L866)

```diff
-     function xT(TT) {
-       const kT = TT - Math.floor(TT / 6);
-       let cT = lT.f.maxChunkHorizAddDistance,
-         MT = lT.f.maxChunkVertAddDistance;
-       if (IT(cT + 1, MT + 1) <= kT) return null;
-       for (; IT(cT + 1, MT + 1) > kT && (cT > 0 || MT > 0);) cT > MT ? cT-- : MT--;
+     function Aq(qq, Eq) {
```

#### 70. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L868-L869` → after: `L624-L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L624-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L624-L625) · [Before (L868-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L868-L869)

```diff
-         horizontal: cT,
-         vertical: MT
+         width: Math.min(qq, xq) - 2 * mq,
+         height: Math.min(Eq, xq) - 2 * mq
```

#### 71. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L912-L963` → after: `L630-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L630-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L630-L634) · [Before (L912-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L912-L963)

```diff
-       var MT, OT;
-       let {
-         footprintBytes: yT,
-         basis: xT,
-         namesLimit: NT
-       } = function(TT) {
-         const {
-           os: kT,
-           deviceMemory: cT
-         } = TT;
-         if ("ios" === kT) switch ((0, KT.g)(TT)) {
-           case "ipad_m":
-             return {
-               footprintBytes: hT(fT.d), basis: "ipad-m", namesLimit: !1
-             };
-           case "ipad":
- ... (36 more removed lines; see GitHub link above)
+       const lq = Aq(qq, Eq),
+         {
+           numLines: mq,
+           charsPerLine: xq
+         } = Yq[gq];
```

#### 72. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L965-L970` → after: `L636-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L636-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L636-L637) · [Before (L965-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L965-L970)

```diff
-         footprintBytes: yT,
-         shedFootprintBytes: NT ? Math.max(yT, hT(QT)) : null,
-         chunkCap: QT,
-         maxHorizDistance: null !== (MT = null === ST || void 0 === ST ? void 0 : ST.horizontal) && void 0 !== MT ? MT : lT.f.maxChunkHorizAddDistance,
-         maxVertDistance: null !== (OT = null === ST || void 0 === ST ? void 0 : ST.vertical) && void 0 !== OT ? OT : lT.f.maxChunkVertAddDistance,
-         basis: xT
+         numLines: Math.max(1, Math.floor(mq / Oq * lq.height)),
+         charsPerLine: Math.max(1, Math.floor(xq * lq.width))
```

#### 73. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L975-L980` → after: `L641-L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L641-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L641-L646) · [Before (L975-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L975-L980)

```diff
-     function ST() {
-       return NT({
-         os: (0, MT.getOperatingSystem)(),
-         deviceMemory: navigator.deviceMemory,
-         ...(0, KT.h)()
-       }, (0, OT.g)(), (0, yT.F)("wasm").length > 0)
+     function uq(qq, Eq, gq, Yq) {
+       const {
+         numLines: lq,
+         charsPerLine: Oq
+       } = cq(gq, Yq, Eq);
+       return oq(qq, lq, Oq, !1)
```

#### 74. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L983-L984` → after: `L650-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L650-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L650-L651) · [Before (L983-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L983-L984)

```diff
-     function DT() {
-       return QT ??= ST(), QT
+     function Wq(qq) {
+       return qq.slice(0, Bq)
```

#### 75. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L987-L989` → after: `L657-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L657-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L657-L660) · [Before (L987-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L987-L989)

```diff
-     function aT() {
-       var TT;
-       return (null !== (TT = QT) && void 0 !== TT ? TT : ST()).basis
+     function dq(qq, Eq) {
+       const gq = Math.max(0, Vq - Eq),
+         Yq = Math.min(Nq, gq);
+       return qq.slice(0, Yq)
```

#### 76. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L993` → after: `L681-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L681-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L681-L696) · [Before (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L993)

```diff
-       return TT.setChunkCap(kT.chunkCap)
+       const {
+         numLines: gq,
+         charsPerLine: Yq
+       } = jq[Eq];
+       return oq(qq, gq, Yq, !1)
+     }
+ 
+     function oq(qq, Eq, gq, Yq, lq) {
+       (lq || Yq) && (qq = qq.slice(0, null !== lq && void 0 !== lq ? lq : Eq * gq));
+       const Oq = qq.split("\n");
+       if (Oq.length > Eq && Oq.splice(Eq, Oq.length - Eq), !Yq)
+         for (let mq = 0; mq < Oq.length; mq++) {
+           const qq = Oq[mq];
+           qq.length > gq && (Oq[mq] = qq.substring(0, gq), Oq.length < Eq && Oq.splice(mq + 1, 0, qq.substring(gq)))
+         }
+       return Oq.join("\n")
```

#### 77. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L996` → after: `L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L699) · [Before (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L996)

```diff
-   36693: (TT, kT, cT) => {
+   9292: (qq, Eq, gq) => {
```

#### 78. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L998-L1000` → after: `L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L701) · [Before (L998-L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L998-L1000)

```diff
-       b: () => MT,
-       c: () => KT,
-       g: () => CT,
+       e: () => uq,
```

#### 79. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L1002-L1006` → after: `L703-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L703-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L703-L706) · [Before (L1002-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L1002-L1006)

```diff
-       l: () => fT,
-       o: () => xT,
-       s: () => AT,
-       t: () => IT,
-       w: () => OT
+       j: () => Bq,
+       n: () => mq,
+       q: () => cq,
+       r: () => Aq
```

#### 80. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L1008-L1014` → after: `L708-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L708-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L708-L783) · [Before (L1008-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L1008-L1014)

```diff
-     var lT = cT(1244);
-     let MT = function(TT) {
-         return TT[TT.Join = 0] = "Join", TT[TT.Leave = 1] = "Leave", TT[TT.Push = 2] = "Push", TT[TT.Cursor = 3] = "Cursor", TT[TT.Submit = 4] = "Submit", TT[TT.ReloadAsVariation = 5] = "ReloadAsVariation", TT[TT.CreateFile = 6] = "CreateFile", TT[TT.RenameFile = 7] = "RenameFile … [truncated]
-       }({}),
-       KT = function(TT) {
-         return TT[TT.Joined = 0] = "Joined", TT[TT.Updates = 1] = "Updates", TT[TT.Presence = 2] = "Presence", TT[TT.RemoteCursor = 3] = "RemoteCursor", TT[TT.ForceClose = 4] = "ForceClose", TT[TT.LobbyFilesChanged = 5] = "LobbyFilesChanged", TT[TT.EngineSettings = 6] = "EngineSe … [truncated]
-       }({});
+     var Yq = gq(307);
+     const lq = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
+       Oq = {
+         Damage: {
+           translationKey: "enchantments:damageDescription"
+         },
+         "Attack Speed": {
+           translationKey: "enchantments:attackSpeedDescription"
+         },
+         "Critical Damage": {
+           translationKey: "enchantments:criticalDamageDescription"
+         },
+         Protection: {
+           translationKey: "enchantments:protectionDescription"
+         },
+         Health: {
+ ... (60 more added lines; see GitHub link above)
```

#### 81. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L1017` → after: `L786-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L786-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L786-L789) · [Before (L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L1017)

```diff
-       return "lobby" === TT.kind ? `lobby:${TT.path}` : `codeBlock:${TT.pos[0]},${TT.pos[1]},${TT.pos[2]}`
+       var Eq;
+       return null !== (Eq = Oq[qq]) && void 0 !== Eq ? Eq : {
+         translationKey: ""
+       }
```

#### 82. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L1021-L1036` → after: `L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L845) · [Before (L1021-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L1021-L1036)

```diff
-       if ("lobby" === TT) return {
-         kind: "lobby",
-         path: lT.g
-       };
-       if (TT.startsWith("lobby:")) {
-         const kT = TT.slice(6);
-         return AT(kT) ? {
-           kind: "lobby",
-           path: kT
-         } : null
-       }
-       const kT = TT.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
-       return kT ? {
-         kind: "codeBlock",
-         pos: [parseInt(kT[1]), parseInt(kT[2]), parseInt(kT[3])]
-       } : null
+       return lq.includes(qq)
```

#### 83. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L1040` → after: `L849-L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L849-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L849-L850) · [Before (L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L1040)

```diff
-       return TT.endsWith(".d.ts")
+       var Eq;
+       return !0 === (null === qq || void 0 === qq || null === (Eq = qq.customAttributes) || void 0 === Eq ? void 0 : Eq.cannotEnchant)
```

#### 84. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L1043-L1044` → after: `L853-L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L853-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L853-L857) · [Before (L1043-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L1043-L1044)

```diff
-     function xT(TT) {
-       return TT.endsWith(".ts") && !fT(TT)
+     function uq(qq, Eq) {
+       const {
+         max: gq
+       } = xq[qq].at(-1);
+       return Eq <= gq
```

#### 85. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L1049-L1069` → after: `L861-L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L861-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L861-L887) · [Before (L1049-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L1049-L1069)

```diff
-       if (!TT || TT !== TT.trim()) return !1;
-       if (TT.length > IT) return !1;
-       if (TT.startsWith("/") || TT.includes("\\") || TT.includes("\0")) return !1;
-       if (!fT(TT) && !xT(TT) && ! function(TT) {
-           return TT.endsWith(".js") && !TT.endsWith(".min.js") && !TT.endsWith(".bundle.js")
-         }(TT)) return !1;
-       const kT = TT.split("/");
-       for (const cT of kT)
-         if ("" === cT || "." === cT || ".." === cT) return !1;
-       return !0
-     }
-     const CT = 14e3
-   },
-   38853: (TT, kT, cT) => {
-     function lT(TT, kT, cT, lT, MT) {
-       var KT = {};
- ... (5 more removed lines; see GitHub link above)
+       const Eq = Math.sin(qq / 80),
+         gq = qq => {
+           if (qq <= 0) return 0;
+           if (qq > 1) return 1;
+           let Eq = 0;
+           const gq = [1, 7, 21, 35, 35, 21, 7, 1];
+           for (let Yq = 0; Yq < gq.length; Yq++) {
+             Eq += (Yq % 2 === 0 ? 1 : -1) * gq[Yq] * Math.pow(qq, 2 + Yq) / (2 + Yq)
+           }
+           return 72 * Eq
+         },
+         Yq = .3 - .78 * Eq,
+         lq = .5 - .78 * Eq,
+         Oq = .6 - .7 * Eq,
+         mq = .8 - .6 * Eq;
+       let xq = gq(Yq),
+ ... (11 more added lines; see GitHub link above)
```

#### 86. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L1071-L1082` → after: `L889-L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L889-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/188.js#L889-L898) · [Before (L1071-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/188.js#L1071-L1082)

```diff
-     cT.d(kT, {
-       b: () => lT
-     })
-   },
-   38844: (TT, kT, cT) => {
-     function lT(TT, kT, cT, lT) {
-       cT && Object.defineProperty(TT, kT, {
-         enumerable: cT.enumerable,
-         configurable: cT.configurable,
-         writable: cT.writable,
-         value: cT.initializer ? cT.initializer.call(lT) : void 0
-       })
+ 
+     function Wq(qq, Eq) {
+       const {
+         min: gq,
+         max: lq
+       } = xq[qq][Eq], Oq = Yq.c.sampleUniformIntDistribution(gq, lq, "includeMax");
+       return {
+         ...Bq(Oq),
+         level: Oq
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/189.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/189.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63)

#### 1. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L4-L29` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L4-L7) · [Before (L4-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L4-L29)

```diff
-   9384: (TT, kT, cT) => {
-     cT.r(kT), cT.d(kT, {
-       MAX_BLOCK_ID: () => lT,
-       armourReductionOf: () => LT,
-       clipSizeOf: () => dT,
-       creativeAltNames: () => Ok,
-       creativeCategoryOf: () => qT,
-       creativeItemCategories: () => yT,
-       creativeItemCategoryIcons: () => fT,
-       creativeItemIds: () => iT,
-       descriptionOf: () => ZT,
-       displayNameOf: () => ET,
-       dropsNothing: () => UT,
-       enchantmentPerksOf: () => nT,
-       gunTypeOf: () => gT,
-       harvestsNullLevelOf: () => YT,
- ... (10 more removed lines; see GitHub link above)
+   39064: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => xq,
+       g: () => Oq
```

#### 2. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L31-L47` → after: `L9-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L9-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L9-L74) · [Before (L31-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L31-L47)

```diff
-     const lT = 8558,
-       MT = "''WL&M3GT%cM)MK$YE1aM2'I+F+O_*c^*=%'%%%%%%%K>F>%%)K=H=%%[*W5_5['[R$ZW$S%[X&NH&L5C$W$5,KS&%]]&I%^Z&NM&b7TK$Y6G,Y>%M%M7P6$WD%Vc$LZ$OY$%+Q[&;S$/G$N&W%F$W%F$S$N&G'.F$c%`'1+%)41(1(+49$(2=b$/`N,RN,K/c_&Q0EC$O(''P`&O$%-%%^R2-*)&%;NV/ZT%IT%3XM$%%%%%_U$%b73.%%`-T-%%%%%%L9$M8X7 … [truncated]
-       KT = "S-$SW$$R&$SG2$)$'$)$4$)$X*$I6$-$%$%$cC1$WD1$%%%$]5$b7$RH4$%$%$%$%$%$%$%$%$%$)$N+$EG&$ZT%$IT%$3$XM$$%$%$%$%$%$Z1$Y[$$O`0$'$'$'$-&+&%&)&4&1&(&1*(*+&4&9&$&(&2&=&E$&'&%&%&%&1%_%$TV3$%$D.$$$Uc&$S$$S$$S$$S$$S$$S$$S$&S$&S$$S$$S$$S$$S$$S$$S$$S$$^1$S$$]I($%$M/$+$N-$%$Z$$%$I6$3 … [truncated]
-       OT = "Crafting Table|Cauldron|Sign|Iron Nugget|Gold Nugget|Diamond Nugget|Moonstone Nugget|Iron Ingot|Gold Ingot|Draugr Knight Sword|Cooked Potato|Cooked Beef|Raw Lamb|Cooked Lamb|Gold Watermelon Stag Antlers|Bear Fur|Cave Golem Eye|Frost Golem Eye|Draugr Knight Heart|Fur B … [truncated]
-       yT = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"],
-       fT = {
-         building: "Stone Bricks",
-         colours: "Magenta Wool",
-         nature: "Grass Block",
-         decoration: "Lantern",
-         utility: "Workbench",
-         tools: "Iron Pickaxe",
-         combat: "Iron Sword",
-         food: "Apple",
-         mobs: "Pig Spawn Orb",
-         materials: "Iron Bar",
- ... (1 more removed lines; see GitHub link above)
+     var Yq = gq(3933);
+     let lq = null;
+ 
+     function Oq(qq) {
+       return null !== lq && qq === lq
+     }
+ 
+     function mq() {
+       this.IK = !1, this.stopPropagation = !1, this.gC = !1, this.disabled = !1
+     }
+     class xq {
+       constructor(qq, Eq) {
+         this.version = "0.7.0";
+         var gq = Object.assign({}, new mq, Eq || {});
+         this.element = qq || document, this.IK = !!gq.IK, this.stopPropagation = !!gq.stopPropagation, this.gC = !!gq.gC, this.disabled = !!gq.disabled, this.filterEvents = (qq, Eq) => !0, this.ignoreEvent = qq => !1, this.down = new Yq.EventEmitter, this.up = new Yq.EventEmitter … [truncated]
+           dx: 0,
+ ... (50 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L49-L51` → after: `L76-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L76-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L76-L86) · [Before (L49-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L49-L51)

```diff
-     var xT = cT(3214),
-       IT = cT(3222);
-     const AT = Object.freeze([]);
+       qq.element.addEventListener("touchstart", Nq.bind(void 0, qq), {
+         passive: !1
+       }), qq.element.addEventListener("touchend", Vq.bind(void 0, qq), Eq), qq.element.addEventListener("mousedown", jq.bind(null, qq, !0), Eq), window.document.addEventListener("mouseup", jq.bind(null, qq, !1), Eq), qq.element.addEventListener("touchmove", Hq.bind(null, qq), Eq) … [truncated]
+     }
+     var uq = 0,
+       Bq = 0,
+       Wq = null;
+ 
+     function Nq(qq, Eq) {
+       Eq.preventDefault(), aq(Eq)
+     }
```

#### 4. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L54-L57` → after: `L89-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L89-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L89-L96) · [Before (L54-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L54-L57)

```diff
-       let kT = null;
-       return cT => {
-         var lT;
-         return kT ??= (0, IT.D)(TT, 10091), null !== (lT = kT[cT]) && void 0 !== lT ? lT : 0
+       let Eq = !1;
+       for (let gq = 0; gq < qq.touches.length; ++gq)
+         if (qq.touches[gq].identifier === Wq) {
+           Eq = !0;
+           break
+         } if (!Eq) {
+         const Eq = qq.changedTouches[0];
+         uq = Eq.clientX, Bq = Eq.clientY, Wq = Eq.identifier
```

#### 5. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L62-L67` → after: `L105-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L105-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L105-L261) · [Before (L62-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L62-L67)

```diff
-       const lT = CT(TT);
-       let MT = null,
-         KT = [];
-       return TT => {
-         const OT = lT(TT);
-         if (0 !== OT) return null === MT && (MT = kT.split(IT.s), KT = new Array(MT.length)), KT[OT - 1] ??= cT(MT[OT - 1])
+       if (!qq.ignoreEvent(gq)) try {
+         rq(qq, gq), Eq && gq.isTrusted && !gq.repeat && qq._keyStates[gq.code] && vq(qq, gq.code)
+       } finally {
+         hq(gq.code, Eq, qq, gq)
+       }
+     }
+ 
+     function jq(qq, Eq, gq) {
+       if (!qq.ignoreEvent(gq)) try {
+         rq(qq, gq)
+       } finally {
+         ! function(qq, Eq, gq) {
+           if ("pointerId" in gq)
+             if (Eq) {
+               if (null !== qq._touches.currID) return;
+               qq._touches.currID = gq.pointerId
+ ... (141 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L76` → after: `L342-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L342-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L342-L532) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L76)

```diff
-       return TT === IT.f ? null : (0, IT.E)(TT)
+       return Yq !== qq && (Yq = qq, !0)
+     }
+   },
+   9207: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Oq,
+       d: () => lq
+     });
+     var Yq = gq(24);
+ 
+     function lq(qq, Eq) {
+       return qq && !Eq
+     }
+ 
+     function Oq() {
+       return lq(Yq.b.get("isTouchScreen"), Yq.b.get("clientEscMenuOptions").touchActionButtons)
+ ... (175 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L78-L80` → after: `L534-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L534-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L534-L550) · [Before (L78-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L78-L80)

```diff
-     const hT = jT("T$$#&#$T'#$F$#$$%$B#$>#$##=$$1$.)$*#$(&$)#)$N$#$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$+##$&#$$%$*/$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$T$&$($$$*$(#$$1$$1$$1$$1$$1$$1$$)$$)$$)$$)$$)$*)$N2#$.($$1$$)$T$$$,#$4#$)##$V'#$)#[$$+#$#$($$'#%$&$$N)*$4#$ … [truncated]
-       NT = jT("$J$#$&$$F&$23$$J$$$A$$c$$,^'$&H2$$'$$'$$0$*9$$R$#49$$($$&$$%$$$#,C(##$$#$&U)#$#$$($B+#2R$$1#7$%#+$6#$$)$J$O$#*-$1#M1$$a$$&'#%$&)$$4$.&$(;$*%$$$$$#$$#$,Z/$$T&$&V$$$Z-$###$%/V$O$$&2$*5#X$#$V%.$&2$&#$*&$$5$$E$#c2R1$&$$cc$c]$$$R%$*G=$]/=$2:$J5-$b*#G$$,,#%$+##$#4+#+##$+ … [truncated]
-       QT = new Map,
+   },
+   36662: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => Oq,
+       d: () => Vq,
+       g: () => dq,
+       h: () => xq,
+       l: () => Wq,
+       m: () => jq,
+       o: () => Bq,
+       p: () => oq,
+       r: () => aq,
+       v: () => Hq
+     });
+     var Yq = gq(24),
+       lq = gq(31);
+ ... (1 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L84-L107` → after: `L553-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L553-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L553-L556) · [Before (L84-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L84-L107)

```diff
-     function aT(TT, kT, cT) {
-       DT !== (0, xT.k)() && (DT = (0, xT.k)(), QT.clear(), ST.clear());
-       let lT = TT.get(kT);
-       return void 0 === lT && (lT = cT(), void 0 !== lT && TT.set(kT, lT)), lT
-     }
-     const FT = jT("_$QN+###Y$#b'#%$=%/#I'%##7%))+%[%(#%9##%)(#%9(#%?(I$%'('%%('%%('%%('%#(%%%('%%('%%('%#(%%%('%#('%%('%%('%%('%%('%#(%%#(%%#(%%%('%#(%%%(#%I%##%%)M&%A)A%A)b&%b&(Q.%)(#%)(W%%#(1%#(-%#(#%#(Q$%#(G(%/(#%1('%I%$b%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$?&#%#$3(-$+&#%#$ … [truncated]
-       rT = jT("J,##O$##$#%/$#%/$#%/$-%9$1%#$)%A$#%b&$1%-$[+%S%$%%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%9$M2#+%-$#%/$#%/$#%/$#%%$-&/$-%+$9%3$-%E$$b%%I%$A%#$%%=$b(&-$-&#%/$#%/$#%/$#%%$-&)%'$-%#$7%M'$E+%#$%%#$?%K)$5%#$-&#%%$#%+$#%/$#%/$#%/$#%%$-&Q$%#$-& … [truncated]
-       PT = jT(".W]+#%#%#%#%#%#%#%#%%%#%#%#%%%#%#%#", "30|20|16|1|2|5|7|12|8|100|21|24|22|75", Number),
-       wT = jT("&PO+#####%####################$#%#,#%#####,%&#)#,#.#%#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1$bC$'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$1'#*# … [truncated]
-       mT = jT(">W]+#%#)$)%9$", "none|sniper", vT),
-       bT = jT("*W]+#%#%#%#%$%#)&%(%%%$%%)$)'%&", "semi_automatic|submachine|rifle|pistol|shotgun", vT),
-       zT = CT("]%LV+#c&M.$4_1$44$44$44$49$4/$4/$4/$"),
-       JT = CT("$a&#$9$Z$K?$&;$$[($(c($6Y&$$)$$$$&G%$*$$$*$(V*$Z$V$$$#$$#$&+$$#$$%$$$$$$$$$$&$$$#$$($,E0$$T&$&V$$D$`-$(%$6*$$%$T$M$$$L%$6;$$$$$2$$W:$*D^%$$N%$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$2O'$2*$2*$2*$2*$2*$2*$2*$2*$2*$:*$0=$&^$$$N$$(Q$$$]$$.#$&6$$K%$:.$*I$$*&$*S+$6,$"),
-       oT = jT("$DO+#######%#$ZD$$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%($U$(.1($'(.1($'(.1($'(.1($2(.+($((.+($((.+($((.+($C&($@$", "1|2|3|4|5", (TT => "" === TT ? null : Number(TT))),
-       HT = jT("$F(#$%$$&#$)%$)%$0$$,$$%$$&$$6$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$@$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$'$$I$%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$.#$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$' … [truncated]
-       eT = jT(",QN+####$/#+#+###+#4####1+##S(+$$#2A#$H%#$%0$%0$%0$%0$%0$%0$%0$%0$%0$U.0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0:C/(:.($R$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$(?+$#(#0$%0&&(&#(,#+$#(#0$%0&&(&#(,#+$#(#0$%0 … [truncated]
- ... (8 more removed lines; see GitHub link above)
+     function xq() {
+       return [...mq.values()].sort(((qq, Eq) => {
+         var gq, Yq;
+         return (null !== (gq = qq.order) && void 0 !== gq ? gq : 0) - (null !== (Yq = Eq.order) && void 0 !== Yq ? Yq : 0)
```

#### 9. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L112-L116` → after: `L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L562) · [Before (L112-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L112-L116)

```diff
-       const kT = NT(TT);
-       return null !== kT ? kT : aT(ST, TT, (() => {
-         var kT;
-         return null !== (kT = (0, IT.F)(ET(TT))) && void 0 !== kT ? kT : void 0
-       }))
+       Aq = qq
```

#### 10. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L120` → after: `L567-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L567-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L567-L581) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L120)

```diff
-       return FT(TT)
+       uq = !0;
+       try {
+         qq.onClick()
+       } finally {
+         uq = !1
+       }
+       qq.panel && "clientGame" === Yq.b.get("openInGameMenuName") && cq(qq.id)
+     }
+ 
+     function Wq() {
+       return uq
+     }
+ 
+     function Nq() {
+       return xq().filter((qq => qq.panel && !qq.disabled))
```

#### 11. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L124` → after: `L585-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L585-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L585-L604) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L124)

```diff
-       return rT(TT)
+       const Eq = Nq(),
+         gq = Eq.findIndex((qq => qq.id === Aq));
+       return !(gq < 0 || Eq.length < 2) && (Bq(Eq[(gq + qq + Eq.length) % Eq.length]), !0)
+     }
+ 
+     function Vq() {
+       return null !== Aq && Nq().length > 1
+     }
+ 
+     function dq() {
+       cq(null)
+     }
+ 
+     function jq() {
+       "inventory" !== Yq.b.get("openInGameMenuName") && cq(null)
+     }
+ ... (4 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L128` → after: `L608-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L608-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L608-L647) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L128)

```diff
-       return PT(TT)
+       return mq.set(qq.id, qq), lq.i.TV(Oq, xq(), !0), () => {
+         mq.get(qq.id) === qq && (mq.delete(qq.id), lq.i.TV(Oq, xq()))
+       }
+     }
+   },
+   36657: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => xq,
+       e: () => dq,
+       h: () => jq,
+       j: () => Wq,
+       l: () => cq,
+       m: () => Vq,
+       n: () => Nq,
+       r: () => uq
+     });
+ ... (24 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L132` → after: `L651-L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L651-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L651-L670) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L132)

```diff
-       return wT(TT)
+       return Bq = qq, () => {
+         Bq === qq && (Bq = null)
+       }
+     }
+     let aq = !1;
+ 
+     function Vq() {
+       const qq = Yq.b.get("openInGameMenuName");
+       "clientGame" !== qq && (aq = "inventory" === qq), (0, mq.l)() || (0, mq.g)(), (0, Oq.m)(Oq.d), Yq.b.set({
+         openInGameMenuName: "clientGame",
+         openEverythingMenuName: null
+       })
+     }
+ 
+     function dq() {
+       Hq(!1)
+ ... (4 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L136` → after: `L674-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L674-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L674-L728) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L136)

```diff
-       return mT(TT)
+       "clientGame" === Yq.b.get("openInGameMenuName") && Yq.b.set({
+         openInGameMenuName: qq ? "inventory" : null
+       }), qq || (0, mq.g)(), aq = !1
+     }
+   },
+   36534: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => Aq
+     });
+     var Yq = gq(296),
+       lq = gq(24),
+       Oq = gq(36543),
+       mq = gq(1622),
+       xq = gq(1952);
+ 
+     function Aq(qq, Eq) {
+ ... (39 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L140` → after: `L732-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L732-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L732-L777) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L140)

```diff
-       return bT(TT)
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mq.k;
+       const gq = (0, Oq.c)(Eq, xq),
+         uq = function(qq) {
+           const Eq = qq.getItem(Aq);
+           return "string" !== typeof Eq ? null : Eq
+         }(Eq),
+         Bq = function() {
+           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k).getItem(cq)
+         }(Eq);
+       let Wq;
+       return Wq = null !== gq && null !== uq && (0, Oq.d)(Eq, xq) && function(qq, Eq, gq) {
+           const lq = (0, Yq.Yb)(qq),
+             Oq = (0, Yq.Yb)(Eq),
+             mq = (0, Yq.Tb)(qq),
+             xq = (0, Yq.Tb)(Eq);
+           return !(lq !== Oq || !gq) || lq === Oq && mq === xq
+ ... (30 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L144` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L835) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L144)

```diff
-       return 0 !== JT(TT)
+       return 2 ** Math.floor(Math.log2(Math.max(1, qq / lq)))
```

#### 17. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L148` → after: `L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L839) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L148)

```diff
-       return oT(TT)
+       return (qq / lq).toFixed(1)
```

#### 18. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L152` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L858) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L152)

```diff
-       return 0 !== zT(TT)
+       return Math.floor(lq * qq / Oq)
```

#### 19. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L156-L159` → after: `L862-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L862-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L862-L870) · [Before (L156-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L156-L159)

```diff
-       const kT = HT(TT);
-       if (void 0 === kT || kT.startsWith(IT.p)) return null === kT || void 0 === kT ? void 0 : kT.slice(IT.p.length);
-       const cT = (0, xT.i)(TT);
-       return void 0 === cT ? void 0 : `${cT}${IT.s}${kT}`
+       const Eq = qq - Math.floor(qq / 6);
+       let gq = Yq.c.maxChunkHorizAddDistance,
+         lq = Yq.c.maxChunkVertAddDistance;
+       if (uq(gq + 1, lq + 1) <= Eq) return null;
+       for (; uq(gq + 1, lq + 1) > Eq && (gq > 0 || lq > 0);) gq > lq ? gq-- : lq--;
+       return {
+         horizontal: gq,
+         vertical: lq
+       }
```

#### 20. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L163-L164` → after: `L908-L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L908-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L908-L971) · [Before (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L163-L164)

```diff
-       var kT;
-       return null !== (kT = eT(TT)) && void 0 !== kT ? kT : AT
+       return Bq + qq * Wq
+     }
+ 
+     function jq(qq, Eq, gq) {
+       var lq, mq;
+       let {
+         footprintBytes: xq,
+         basis: cq,
+         namesLimit: jq
+       } = function(qq) {
+         const {
+           os: Eq,
+           deviceMemory: gq
+         } = qq;
+         if ("ios" === Eq) switch ((0, Oq.h)(qq)) {
+           case "ipad_m":
+ ... (48 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L169-L176` → after: `L976-L980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L976-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L976-L980) · [Before (L169-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L169-L176)

```diff
-       if (null === pT) {
-         const TT = [],
-           kT = new IT.v(MT);
-         let cT = 0;
-         for (; !kT.done;) cT += (0, IT.J)(kT.next()), TT.push(cT);
-         pT = Object.freeze(TT)
-       }
-       return pT
+       return jq({
+         os: (0, lq.getOperatingSystem)(),
+         deviceMemory: navigator.deviceMemory,
+         ...(0, Oq.k)()
+       }, (0, mq.g)(), (0, xq.D)("wasm").length > 0)
```

#### 22. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L179-L180` → after: `L983-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L983-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L983-L984) · [Before (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L179-L180)

```diff
-     function qT(TT) {
-       return GT(TT)
+     function Pq() {
+       return Hq ??= oq(), Hq
```

#### 23. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L183` → after: `L987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L987) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L183)

```diff
-     function sT(TT, kT) {
+     function Qq() {
```

#### 24. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L185` → after: `L989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L989) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L185)

```diff
-       return 0 !== ((null !== (cT = VT(TT)) && void 0 !== cT ? cT : 0) & kT)
+       return (null !== (qq = Hq) && void 0 !== qq ? qq : oq()).basis
```

#### 25. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L188-L189` → after: `L992-L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L992-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L992-L993) · [Before (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L188-L189)

```diff
-     function Tk(TT) {
-       return sT(TT, IT.d.OnlyInSearch)
+     function yq(qq, Eq) {
+       return qq.setChunkCap(Eq.chunkCap)
```

#### 26. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L193` → after: `L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L1017) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L193)

```diff
-       return sT(TT, IT.d.OnlyInCategory)
+       return "lobby" === qq.kind ? `lobby:${qq.path}` : `codeBlock:${qq.pos[0]},${qq.pos[1]},${qq.pos[2]}`
```

#### 27. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L197` → after: `L1021-L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L1021-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L1021-L1036) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L197)

```diff
-       return sT(TT, IT.d.DevOnly)
+       if ("lobby" === qq) return {
+         kind: "lobby",
+         path: Yq.j
+       };
+       if (qq.startsWith("lobby:")) {
+         const Eq = qq.slice(6);
+         return Bq(Eq) ? {
+           kind: "lobby",
+           path: Eq
+         } : null
+       }
+       const Eq = qq.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
+       return Eq ? {
+         kind: "codeBlock",
+         pos: [parseInt(Eq[1]), parseInt(Eq[2]), parseInt(Eq[3])]
+       } : null
```

#### 28. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L201` → after: `L1040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L1040) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L201)

```diff
-       return !sT(TT, IT.d.HiddenByDefault) && void 0
+       return qq.endsWith(".d.ts")
```

#### 29. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L204-L207` → after: `L1043-L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L1043-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L1043-L1044) · [Before (L204-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L204-L207)

```diff
-     function Mk(TT, kT, cT, lT) {
-       var MT;
-       const KT = null !== (MT = VT(TT)) && void 0 !== MT ? MT : 0;
-       return 0 !== (KT & IT.d.DisabledInPublicLobbies) && kT || 0 !== (KT & IT.d.DisabledInProduction) && !0 || !cT || !lT && 0 !== (KT & IT.d.DevOnly)
+     function cq(qq) {
+       return qq.endsWith(".ts") && !Aq(qq)
```

#### 30. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L209` → after: `L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L1046) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L209)

```diff
-     let Kk = null;
+     const uq = 64;
```

#### 31. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L211-L225` → after: `L1048-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L1048-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/189.js#L1048-L1082) · [Before (L211-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/189.js#L211-L225)

```diff
-     function Ok() {
-       if (null === Kk) {
-         const TT = OT.split(IT.s),
-           kT = new Map,
-           cT = new IT.v(KT);
-         let lT = 0,
-           MT = 0;
-         for (; !cT.done;) {
-           lT += (0, IT.J)(cT.next());
-           const KT = cT.next();
-           kT.set(lT, Object.freeze(TT.slice(MT, MT + KT))), MT += KT
-         }
-         Kk = kT
-       }
-       return Kk
+     function Bq(qq) {
+       if (!qq || qq !== qq.trim()) return !1;
+       if (qq.length > uq) return !1;
+       if (qq.startsWith("/") || qq.includes("\\") || qq.includes("\0")) return !1;
+       if (!Aq(qq) && !cq(qq) && ! function(qq) {
+           return qq.endsWith(".js") && !qq.endsWith(".min.js") && !qq.endsWith(".bundle.js")
+         }(qq)) return !1;
+       const Eq = qq.split("/");
+       for (const gq of Eq)
+         if ("" === gq || "." === gq || ".." === gq) return !1;
+       return !0
+     }
+     const Wq = 14e3
+   },
+   38974: (qq, Eq, gq) => {
+     function Yq(qq, Eq, gq, Yq, lq) {
+ ... (19 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/190.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/190.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f)

#### 1. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L2)

```diff
- export const ids = [50, 190];
+ export const ids = [190];
```

#### 2. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L4-L6428` → after: `L4-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L4-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L4-L51) · [Before (L4-L6428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L4-L6428)

```diff
-   38478: (TT, kT, cT) => {
-     cT.d(kT, {
-       e: () => MT,
-       f: () => KT
-     });
-     const lT = new WeakMap;
- 
-     function MT(TT, kT) {
-       return lT.set(TT, kT), TT
-     }
- 
-     function KT(TT) {
-       var kT;
-       return null !== (kT = lT.get(TT)) && void 0 !== kT ? kT : null
-     }
-   },
- ... (6409 more removed lines; see GitHub link above)
+   9301: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       MAX_BLOCK_ID: () => Yq,
+       armourReductionOf: () => kq,
+       clipSizeOf: () => Jq,
+       creativeAltNames: () => mE,
+       creativeCategoryOf: () => eq,
+       creativeItemCategories: () => xq,
+       creativeItemCategoryIcons: () => Aq,
+       creativeItemIds: () => Iq,
+       descriptionOf: () => pq,
+       displayNameOf: () => Sq,
+       dropsNothing: () => Fq,
+       enchantmentPerksOf: () => Kq,
+       gunTypeOf: () => Uq,
+       harvestsNullLevelOf: () => sq,
+ ... (32 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L6431` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L54-L55) · [Before (L6431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L6431)

```diff
-       const kT = function(TT) {
+       let Eq = null;
+       return gq => {
```

#### 4. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L6433-L6441` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L57) · [Before (L6433-L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L6433-L6441)

```diff
-         const cT = (0, zK.d)(TT).poseRig;
-         return null !== (kT = XK[TT]) && void 0 !== kT ? kT : void 0 === cT ? null : uK[cT]
-       }(TT);
-       return null === kT ? null : dK[kT]
-     }
- 
-     function RK(TT) {
-       return {
-         "--difficulty-colour": TT
+         return Eq ??= (0, uq.A)(qq, 10091), null !== (Yq = Eq[gq]) && void 0 !== Yq ? Yq : 0
```

#### 5. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L7011-L7471` → after: `L61-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L61-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L61-L68) · [Before (L7011-L7471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L7011-L7471)

```diff
-     function MO(TT) {
-       var kT, cT, lT, KT, OT;
-       let {
-         controller: yT
-       } = TT;
-       const fT = (0, JM.i)(tl, yT.getSnapshot()),
-         {
-           t: xT
-         } = (0, zM.B)(),
-         IT = RM(),
-         AT = function() {
-           const TT = (0, wT.useRef)(null),
-             kT = (0, wT.useRef)(null);
-           return (0, wT.useLayoutEffect)((() => {
-             null !== TT.current && lO(TT.current)
-           })), (0, wT.useCallback)((cT => {
- ... (445 more removed lines; see GitHub link above)
+     function Nq(qq, Eq, gq) {
+       const Yq = Wq(qq);
+       let lq = null,
+         Oq = [];
+       return qq => {
+         const mq = Yq(qq);
+         if (0 !== mq) return null === lq && (lq = Eq.split(uq.v), Oq = new Array(lq.length)), Oq[mq - 1] ??= gq(lq[mq - 1])
+       }
```

#### 6. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L7475-L7482` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L72) · [Before (L7475-L7482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L7475-L7482)

```diff
-       let {
-         phase: kT,
-         className: cT
-       } = TT;
-       return (0, oM.jsx)("span", {
-         className: aM()("SkyblockMoon", `Moon-${kT}`, cT),
-         "aria-hidden": "true"
-       })
+       return qq
```

#### 7. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L7486-L7513` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L76) · [Before (L7486-L7513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L7486-L7513)

```diff
-       let {
-         controller: kT
-       } = TT;
-       const cT = (0, JM.i)(al, kT.getSnapshot()),
-         {
-           t: lT
-         } = (0, zM.B)();
-       return cT.enabled ? (0, oM.jsx)(rM.g, {
-         placement: "statBars",
-         children: (0, oM.jsx)("button", {
-           type: "button",
-           tabIndex: -1,
-           className: aM()("SkyblockPassageChip", cT.open && "Open"),
-           "aria-label": lT("skyblockGame:passageChipLabel", {
-             phase: cT.phaseName
-           }),
- ... (12 more removed lines; see GitHub link above)
+       return qq === uq.f ? null : (0, uq.E)(qq)
```

#### 8. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L7516-L7538` → after: `L84-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L84-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L84-L87) · [Before (L7516-L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L7516-L7538)

```diff
-     function jO(TT) {
-       let {
-         fish: kT
-       } = TT;
-       return (0, oM.jsxs)("li", {
-         className: "SkyblockPassageFish",
-         children: [(0, oM.jsx)("span", {
-           className: "SkyblockPassageFishIcon",
-           children: (0, oM.jsx)(wM.d, {
-             itemName: kT.itemName,
-             amount: 0
-           })
-         }), (0, oM.jsxs)("span", {
-           className: "SkyblockPassageFishText",
-           children: [(0, oM.jsx)("span", {
-             className: "SkyblockPassageFishName",
- ... (7 more removed lines; see GitHub link above)
+     function Qq(qq, Eq, gq) {
+       Pq !== (0, cq.k)() && (Pq = (0, cq.k)(), Hq.clear(), oq.clear());
+       let Yq = qq.get(Eq);
+       return void 0 === Yq && (Yq = gq(), void 0 !== Yq && qq.set(Eq, Yq)), Yq
```

#### 9. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L7542-L7629` → after: `L104-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L104-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L104-L108) · [Before (L7542-L7629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L7542-L7629)

```diff
-       let {
-         controller: kT
-       } = TT;
-       const cT = (0, JM.i)(al, kT.getSnapshot()),
-         {
-           t: lT
-         } = (0, zM.B)(),
-         MT = RM();
-       return cT.enabled ? (0, oM.jsx)(XM.c, {
-         show: cT.open,
-         close: kT.dismiss,
-         togglePointerLock: !1,
-         className: "SkyblockSkillsOverlay",
-         children: (0, oM.jsxs)("section", {
-           className: "SkyblockSkillsPanel SkyblockPassagePanel",
-           role: "dialog",
- ... (72 more removed lines; see GitHub link above)
+       const Eq = dq(qq);
+       return null !== Eq ? Eq : Qq(Hq, qq, (() => {
+         const Eq = (0, cq.h)(qq);
+         return void 0 === Eq ? void 0 : (0, uq.G)(Eq)
+       }))
```

#### 10. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L7633-L7701` → after: `L112-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L112-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L112-L116) · [Before (L7633-L7701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L7633-L7701)

```diff
-       var kT;
-       let {
-         charm: cT,
-         view: lT,
-         controller: MT
-       } = TT;
-       const {
-         t: KT
-       } = (0, zM.B)(), OT = lT.shop, yT = (null === (kT = lT.sparkle) || void 0 === kT ? void 0 : kT.id) === cT.id;
-       return (0, oM.jsxs)("li", {
-         className: aM()("SkyblockLampLightCharm", cT.owned && "Owned", cT.socketed && "Socketed"),
-         children: [yT && (0, oM.jsx)(tO, {}, lT.sparkle.count), (0, oM.jsx)("h4", {
-           children: cT.name
-         }), (0, oM.jsx)("p", {
-           className: "SkyblockLampLightEffect",
-           children: cT.effect
- ... (53 more removed lines; see GitHub link above)
+       const Eq = jq(qq);
+       return null !== Eq ? Eq : Qq(oq, qq, (() => {
+         var Eq;
+         return null !== (Eq = (0, uq.F)(Sq(qq))) && void 0 !== Eq ? Eq : void 0
+       }))
```

#### 11. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L7705-L7741` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L120) · [Before (L7705-L7741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L7705-L7741)

```diff
-       var kT;
-       let {
-         tint: cT,
-         view: lT,
-         controller: MT
-       } = TT;
-       const {
-         t: KT
-       } = (0, zM.B)();
-       return (0, oM.jsxs)("li", {
-         className: aM()("SkyblockLampLightTint", cT.wearing && "Wearing"),
-         style: {
-           "--tint-colour": cT.colour
-         },
-         children: [(null === (kT = lT.sparkle) || void 0 === kT ? void 0 : kT.id) === cT.id && (0, oM.jsx)(tO, {}, lT.sparkle.count), (0, oM.jsx)("span", {
-           className: "SkyblockLampLightSwatch",
- ... (21 more removed lines; see GitHub link above)
+       return yq(qq)
```

#### 12. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L7745-L7850` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L124) · [Before (L7745-L7850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L7745-L7850)

```diff
-       let {
-         controller: kT
-       } = TT;
-       const cT = (0, JM.i)(El, kT.getSnapshot()),
-         {
-           t: lT
-         } = (0, zM.B)(),
-         MT = cT.shop;
-       return (0, oM.jsxs)("div", {
-         className: "SkyblockLampLightTab",
-         children: [(0, oM.jsxs)("div", {
-           className: "SkyblockLampLightTop",
-           children: [(0, oM.jsx)("span", {
-             className: "SkyblockLampLightBalance",
-             children: cT.balance
-           }), (0, oM.jsxs)("button", {
- ... (90 more removed lines; see GitHub link above)
+       return tq(qq)
```

#### 13. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L7854-L7883` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L128) · [Before (L7854-L7883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L7854-L7883)

```diff
-       let {
-         controller: kT
-       } = TT;
-       const cT = (0, JM.i)(El, kT.getSnapshot()),
-         {
-           t: lT
-         } = (0, zM.B)();
-       return cT.releasing ? (0, oM.jsx)(rM.g, {
-         children: (0, oM.jsxs)("button", {
-           type: "button",
-           className: "SkyblockLampLightPill",
-           onClick: () => {
-             kT.setRelease(!1)
-           },
-           children: [(0, oM.jsx)("span", {
-             className: "SkyblockLampLightPillOrb",
- ... (14 more removed lines; see GitHub link above)
+       return rq(qq)
```

#### 14. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L7887-L7934` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L132) · [Before (L7887-L7934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L7887-L7934)

```diff
-       let {
-         island: kT,
-         view: cT,
-         aim: lT
-       } = TT;
-       const {
-         t: MT
-       } = (0, zM.B)(), KT = kT.featuredFish;
-       return (0, oM.jsxs)("li", {
-         className: aM()("SkyblockKeepersChairIsland", `Island-${kT.id}`, kT.favoured && "Aimed", !kT.relit && "Dark"),
-         children: [(0, oM.jsx)("h3", {
-           children: kT.name
-         }), kT.relit && null !== KT ? (0, oM.jsxs)("div", {
-           className: "SkyblockKeepersChairNotice",
-           children: [(0, oM.jsx)("span", {
-             className: "SkyblockKeepersChairNoticeLabel",
- ... (32 more removed lines; see GitHub link above)
+       return vq(qq)
```

#### 15. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L7938-L8004` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L136) · [Before (L7938-L8004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L7938-L8004)

```diff
-       let {
-         controller: kT,
-         lampLight: cT
-       } = TT;
-       const lT = (0, JM.i)(bl, kT.getSnapshot()),
-         MT = (0, JM.i)(El, cT.getSnapshot()),
-         [KT, OT] = (0, wT.useState)("lamp"),
-         {
-           t: yT
-         } = (0, zM.B)(),
-         fT = RM();
-       if (!lT.enabled) return null;
-       const xT = "light" === KT && MT.enabled;
-       return (0, oM.jsx)(XM.c, {
-         show: lT.open,
-         close: kT.dismiss,
- ... (51 more removed lines; see GitHub link above)
+       return hq(qq)
```

#### 16. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L8008-L8057` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L140) · [Before (L8008-L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L8008-L8057)

```diff
-       let {
-         view: kT,
-         controller: cT
-       } = TT;
-       const {
-         t: lT
-       } = (0, zM.B)();
-       return (0, oM.jsxs)(oM.Fragment, {
-         children: [(0, oM.jsx)("ul", {
-           className: "SkyblockKeepersChairIslands",
-           children: kT.islands.map((TT => (0, oM.jsx)(DO, {
-             island: TT,
-             view: kT,
-             aim: cT.aim
-           }, TT.id)))
-         }), null !== kT.almanac && (0, oM.jsxs)("div", {
- ... (34 more removed lines; see GitHub link above)
+       return nq(qq)
```

#### 17. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L8061-L8094` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L144) · [Before (L8061-L8094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L8061-L8094)

```diff
-       let {
-         controller: kT
-       } = TT;
-       const {
-         t: cT
-       } = (0, zM.B)(), lT = (0, JM.i)(Jl, kT.getSnapshot());
-       if (!lT.enabled) return null;
-       const MT = lT.freshCount > 0 ? cT("skyblockGame:reachLogOpenNews", {
-         count: lT.freshCount
-       }) : cT("skyblockGame:reachLogOpen");
-       return (0, oM.jsx)(rM.g, {
-         placement: "statBars",
-         children: (0, oM.jsxs)("button", {
-           type: "button",
-           className: aM()("SkyblockReachLogButton", lT.freshCount > 0 && "HasNews", lT.pending && "Pending"),
-           "aria-label": MT,
- ... (18 more removed lines; see GitHub link above)
+       return 0 !== iq(qq)
```

#### 18. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L8098-L8104` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L148) · [Before (L8098-L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L8098-L8104)

```diff
-       let {
-         gift: kT
-       } = TT;
-       return (0, oM.jsx)("li", {
-         className: aM()("SkyblockRegularsGift", kT.given && "Given"),
-         children: kT.text
-       })
+       return Zq(qq)
```

#### 19. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L8108-L8160` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L152) · [Before (L8108-L8160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L8108-L8160)

```diff
-       let {
-         regular: kT
-       } = TT;
-       const {
-         t: cT
-       } = (0, zM.B)();
-       return (0, oM.jsxs)("li", {
-         className: aM()("SkyblockRegularsCard", kT.tagged ? "Tagged" : "Untagged", kT.resting && "Resting"),
-         children: [(0, oM.jsxs)("div", {
-           className: "SkyblockRegularsCardTop",
-           children: [(0, oM.jsx)("span", {
-             className: "SkyblockRegularsIcon",
-             title: kT.fishName,
-             children: (0, oM.jsx)(wM.d, {
-               itemName: kT.itemName,
-               amount: 0
- ... (37 more removed lines; see GitHub link above)
+       return 0 !== bq(qq)
```

#### 20. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L8164-L8192` → after: `L156-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L156-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L156-L159) · [Before (L8164-L8192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L8164-L8192)

```diff
-       let {
-         controller: kT,
-         island: cT
-       } = TT;
-       const {
-         t: lT
-       } = (0, zM.B)(), MT = (0, JM.i)(kM, kT.getSnapshot()), KT = MT.islands.find((TT => TT.id === cT));
-       if (!MT.enabled || void 0 === KT) return null;
-       const OT = lT("skyblockGame:regularsOpen");
-       return (0, oM.jsxs)("button", {
-         type: "button",
-         className: "SkyblockRegularsStrip",
-         "aria-label": OT,
-         title: OT,
-         onClick: () => {
-           kT.openIsland(cT)
- ... (13 more removed lines; see GitHub link above)
+       const Eq = fq(qq);
+       if (void 0 === Eq || Eq.startsWith(uq.r)) return null === Eq || void 0 === Eq ? void 0 : Eq.slice(uq.r.length);
+       const gq = (0, cq.h)(qq);
+       return void 0 === gq ? void 0 : `${gq}${uq.v}${Eq}`
```

#### 21. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L8197-L9044` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L164) · [Before (L8197-L9044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L8197-L9044)

```diff
-       let {
-         controller: cT
-       } = TT;
-       const lT = (0, JM.i)(kM, cT.getSnapshot()),
-         {
-           t: MT
-         } = (0, zM.B)(),
-         KT = RM();
-       if (!lT.enabled) return null;
-       const OT = null !== (kT = lT.islands.find((TT => TT.id === lT.selected))) && void 0 !== kT ? kT : null;
-       return (0, oM.jsx)(XM.c, {
-         show: lT.open,
-         close: cT.dismiss,
-         togglePointerLock: !1,
-         className: "SkyblockSkillsOverlay",
-         children: (0, oM.jsxs)("section", {
- ... (832 more removed lines; see GitHub link above)
+       return null !== (Eq = Mq(qq)) && void 0 !== Eq ? Eq : Bq
```

#### 22. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L9048-L9052` → after: `L169-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L169-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L169-L174) · [Before (L9048-L9052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L9048-L9052)

```diff
-       var TT;
-       const kT = null === (TT = document.querySelector(".HotBar")) || void 0 === TT ? void 0 : TT.getBoundingClientRect();
-       return kT && kT.width > 0 ? Ky(kT) : {
-         x: window.innerWidth / 2,
-         y: window.innerHeight - 40
+       if (null === Cq) {
+         const qq = [],
+           Eq = new uq.x(lq);
+         let gq = 0;
+         for (; !Eq.done;) gq += (0, uq.J)(Eq.next()), qq.push(gq);
+         Cq = Object.freeze(qq)
```

#### 23. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L9057-L9082` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L180) · [Before (L9057-L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L9057-L9082)

```diff
-       let {
-         items: kT,
-         origins: cT,
-         target: lT
-       } = TT;
-       return (0, oM.jsx)("div", {
-         className: "SkyblockDailyRewardFlyingItems",
-         children: kT.map(((TT, kT) => {
-           const MT = cT[kT];
-           return (0, oM.jsx)("span", {
-             className: "SkyblockDailyRewardFlyingItem",
-             style: {
-               left: `${MT.x}px`,
-               top: `${MT.y}px`,
-               "--item-dx": lT.x - MT.x + "px",
-               "--item-dy": lT.y - MT.y + "px",
- ... (10 more removed lines; see GitHub link above)
+       return Tq(qq)
```

#### 24. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L9086-L9583` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L184-L185) · [Before (L9086-L9583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L9086-L9583)

```diff
-       const cT = -Math.PI / 2 + 1.25 * (TT / (kT - 1) * 2 - 1),
-         lT = 70 + TT % 3 * 22;
-       return {
-         x: Math.cos(cT) * lT,
-         y: Math.sin(cT) * lT * .7
-       }
-     }
- 
-     function xy(TT) {
-       let {
-         origin: kT,
-         target: cT,
-         count: lT
-       } = TT;
-       const MT = [];
-       for (let KT = 0; KT < lT; KT++) {
- ... (482 more removed lines; see GitHub link above)
+       var gq;
+       return 0 !== ((null !== (gq = zq(qq)) && void 0 !== gq ? gq : 0) & Eq)
```

#### 25. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L9587-L9637` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L189) · [Before (L9587-L9637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L9587-L9637)

```diff
-       let {
-         controller: kT
-       } = TT;
-       const {
-         t: cT
-       } = (0, zM.B)(), lT = (0, JM.i)(Ul, kT.getSnapshot());
-       if (null === lT) return null;
-       const MT = "waiting" === lT.phase,
-         KT = {
-           animationDuration: `${lT.waitMs}ms`,
-           animationDelay: -lT.elapsedMs + "ms"
-         },
-         OT = MT ? void 0 : {
-           animationDuration: `${lT.waitMs}ms`
-         };
-       return (0, oM.jsxs)("div", {
- ... (35 more removed lines; see GitHub link above)
+       return Dq(qq, uq.c.OnlyInSearch)
```

#### 26. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L9641-L9656` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L193) · [Before (L9641-L9656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L9641-L9656)

```diff
-       let {
-         chart: kT,
-         showHere: cT,
-         className: lT
-       } = TT;
-       return (0, oM.jsx)("div", {
-         className: aM()("SkyblockTideChartGrid", lT, null !== kT.pictureName && "Complete"),
-         "aria-hidden": "true",
-         children: kT.cells.map(((TT, lT) => {
-           const MT = 0 !== (kT.pulseCells & 1 << lT),
-             KT = kT.castCell === lT;
-           return (0, oM.jsx)("span", {
-             className: aM()("SkyblockTideChartCell", `Cell-${TT}`, MT && "Pulse", KT && "Cast", cT && kT.hereCell === lT && "Here")
-           }, `${lT}:${MT?`p${kT.pulseToken}`:""}:${KT?`c${kT.castToken}`:""}`)
-         }))
-       })
+       return Dq(qq, uq.c.OnlyInCategory)
```

#### 27. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L9660-L9695` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L197) · [Before (L9660-L9695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L9660-L9695)

```diff
-       let {
-         controller: kT
-       } = TT;
-       const cT = (0, JM.i)(Bl, kT.getSnapshot()),
-         {
-           t: lT
-         } = (0, zM.B)(),
-         MT = cT.chip;
-       if (!cT.enabled || null === MT) return null;
-       const KT = lT("skyblockGame:tideChartsChipLabel", {
-         island: MT.islandName,
-         lit: String(MT.lit),
-         ink: String(MT.ink)
-       });
-       return (0, oM.jsx)(rM.g, {
-         placement: "statBars",
- ... (20 more removed lines; see GitHub link above)
+       return Dq(qq, uq.c.DevOnly)
```

#### 28. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L9699-L9802` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L201) · [Before (L9699-L9802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L9699-L9802)

```diff
-       let {
-         controller: kT
-       } = TT;
-       const cT = (0, JM.i)(Bl, kT.getSnapshot()),
-         {
-           t: lT
-         } = (0, zM.B)(),
-         MT = RM(),
-         KT = cT.card;
-       return cT.enabled && null !== KT ? (0, oM.jsx)(XM.c, {
-         show: cT.open,
-         close: kT.dismiss,
-         togglePointerLock: !1,
-         className: "SkyblockSkillsOverlay",
-         children: (0, oM.jsxs)("section", {
-           className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
- ... (88 more removed lines; see GitHub link above)
+       return !Dq(qq, uq.c.HiddenByDefault) && void 0
```

#### 29. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L9805` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L204) · [Before (L9805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L9805)

```diff
-     function zy(TT) {
+     function lE(qq, Eq, gq, Yq) {
```

#### 30. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L9807-L11067` → after: `L206-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L206-L207) · [Before (L9807-L11067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L9807-L11067)

```diff
-       let {
-         controller: cT
-       } = TT;
-       const {
-         selectedLanguage: lT
-       } = (0, zM.B)(), MT = lT.code;
-       (0, wT.useEffect)((() => {
-         cT.setTranslator(((TT, kT) => (0, zM.w)(MT, TT, kT)), MT, ((TT, kT) => (0, zM.p)(MT, TT, kT)))
-       }), [cT, MT]);
-       const KT = (0, JM.i)(CT, cT.map.getSnapshot()),
-         {
-           openInGameMenuName: OT
-         } = (0, FM.n)(["openInGameMenuName"]);
-       return (0, oM.jsxs)(oM.Fragment, {
-         children: [(0, oM.jsx)(Ty, {
-           controller: cT.quests,
- ... (1245 more removed lines; see GitHub link above)
+       const Oq = null !== (lq = zq(qq)) && void 0 !== lq ? lq : 0;
+       return 0 !== (Oq & uq.c.DisabledInPublicLobbies) && Eq || 0 !== (Oq & uq.c.DisabledInProduction) && !0 || !gq || !Yq && 0 !== (Oq & uq.c.DevOnly)
```

#### 31. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L11069-L11083` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L209) · [Before (L11069-L11083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L11069-L11083)

```diff
-     const KT = lT.map((TT => {
-       let {
-         threshold: kT,
-         suffix: cT
-       } = TT;
-       return {
-         threshold: Number(kT),
-         suffix: cT
-       }
-     })).filter((TT => {
-       let {
-         threshold: kT
-       } = TT;
-       return Number.isFinite(kT)
-     }));
+     let OE = null;
```

#### 32. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L11085-L11090` → after: `L211-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L211-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L211-L221) · [Before (L11085-L11090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L11085-L11090)

```diff
-     function OT(TT) {
-       const kT = Math.abs(TT),
-         cT = TT < 0 ? "-" : "";
-       for (const {
-           threshold: lT,
-           suffix: MT
+     function mE() {
+       if (null === OE) {
+         const qq = mq.split(uq.v),
+           Eq = new Map,
+           gq = new uq.x(Oq);
+         let Yq = 0,
+           lq = 0;
+         for (; !gq.done;) {
+           Yq += (0, uq.J)(gq.next());
+           const Oq = gq.next();
+           Eq.set(Yq, Object.freeze(qq.slice(lq, lq + Oq))), lq += Oq
```

#### 33. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L11092-L11127` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L223) · [Before (L11092-L11127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L11092-L11127)

```diff
-         of KT)
-         if (kT >= lT) {
-           const TT = kT / lT;
-           if (TT >= 1e3) return `${cT}${kT.toExponential(2).replace("e+","e")}`;
-           let KT;
-           return KT = TT >= 100 ? Math.floor(TT).toString() : TT >= 10 ? TT.toFixed(1).replace(/\.0$/, "") : TT.toFixed(2).replace(/\.?0+$/, ""), `${cT}${KT}${MT}`
-         } return `${cT}${kT}`
-     }
-   },
-   38405: (TT, kT, cT) => {
-     var lT = {
-       "./combat_1.png": 38408,
-       "./dungeon_crumbling_crypt.png": 38411,
-       "./dungeon_frozen_hollow.png": 38413,
-       "./dungeon_wildwood_grove.png": 38421,
-       "./dungeons.png": 38430,
- ... (20 more removed lines; see GitHub link above)
+         OE = Eq
```

#### 34. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L11129` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/190.js#L225) · [Before (L11129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/190.js#L11129)

```diff
-       return lT[TT]
+       return OE
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/191.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/191.js` (77 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f)

#### 1. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L2)

```diff
- export const ids = [191];
+ export const ids = [50, 191];
```

#### 2. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L4-L36` → after: `L4-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L4-L20) · [Before (L4-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L4-L36)

```diff
-   41120: (TT, kT, cT) => {
-     cT.d(kT, {
-       d: () => KT
-     });
-     var lT = cT(71),
-       MT = cT(2770);
- 
-     function KT(TT, kT, cT) {
-       const KT = (0, lT.useRef)(null),
-         {
-           width: OT,
-           height: yT
-         } = (0, MT.e)(TT);
-       (0, lT.useEffect)((() => {
-         const cT = kT(TT.current);
-         return KT.current = cT, () => {
- ... (17 more removed lines; see GitHub link above)
+   38522: (qq, Eq, gq) => {
+     var Yq = {
+       "./combat_1.png": 38526,
+       "./dungeon_crumbling_crypt.png": 38529,
+       "./dungeon_frozen_hollow.png": 38536,
+       "./dungeon_wildwood_grove.png": 38539,
+       "./dungeons.png": 38545,
+       "./farming_1.png": 38554,
+       "./fishing_1.png": 38563,
+       "./hub.png": 38571,
+       "./island.png": 38573,
+       "./mining_1.png": 38581,
+       "./mining_1_bridge.png": 38585,
+       "./mining_1_gallery.png": 38588,
+       "./mining_1_hollow.png": 38594,
+       "./mining_1_village.png": 38602
+ ... (1 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L38-L46` → after: `L22-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L22-L24) · [Before (L38-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L38-L46)

```diff
-     function KT(TT, kT) {
-       let [cT, lT, MT] = TT;
-       return [0, .5, 1].map((TT => ({
-         timeFraction: TT,
-         rotation: {
-           SM: "catmull-rom-spline",
-           point: [cT, lT, MT + (.5 === TT ? kT : 0)]
-         }
-       })))
+     function lq(qq) {
+       var Eq = Oq(qq);
+       return gq(Eq)
```

#### 4. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L49-L78` → after: `L27-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L27-L30) · [Before (L49-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L49-L78)

```diff
-     function OT(TT, kT, cT) {
-       return {
-         vM: 3200,
-         loop: !0,
-         hM: {
-           Root: {
-             timeline: [0, .5, 1].map((TT => ({
-               timeFraction: TT,
-               position: {
-                 SM: "catmull-rom-spline",
-                 point: [0, .5 === TT ? .18 : 0, 0]
-               }
-             })))
-           },
-           HeadMesh: {
-             timeline: [0, .25, .75, 1].map((TT => ({
- ... (14 more removed lines; see GitHub link above)
+     function Oq(qq) {
+       if (!gq.o(Yq, qq)) {
+         var Eq = new Error("Cannot find module '" + qq + "'");
+         throw Eq.code = "MODULE_NOT_FOUND", Eq
```

#### 5. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L81-L86` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L34-L36) · [Before (L81-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L81-L86)

```diff
-     const yT = OT([0, 0, 0], [0, 0, 0], .07),
-       fT = (0, MT.e)((0, lT.g)(yT), "mobIdle"),
-       xT = OT([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
-       IT = OT([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
-       AT = (0, MT.e)((0, lT.g)(xT), "gunReady"),
-       CT = (0, MT.e)((0, lT.g)(IT), "gunAimed")
+     lq.keys = function() {
+       return Object.keys(Yq)
+     }, lq.resolve = Oq, qq.exports = lq, lq.id = 38522
```

#### 6. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L88` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L38) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L88)

```diff
-   38478: (TT, kT, cT) => {
+   38611: (qq, Eq, gq) => {
```

#### 7. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L90` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L40) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L90)

```diff
-       e: () => MT,
+       b: () => lq,
```

#### 8. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L101` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L51) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L101)

```diff
-       return null !== (kT = lT.get(TT)) && void 0 !== kT ? kT : null
+       return null !== (Eq = Yq.get(qq)) && void 0 !== Eq ? Eq : null
```

#### 9. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L104-L112` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L54-L55) · [Before (L104-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L104-L112)

```diff
-   9403: (TT, kT, cT) => {
-     cT.d(kT, {
-       c: () => OT,
-       d: () => MT,
-       f: () => IT
-     });
-     var lT = cT(1578);
- 
-     function MT(TT) {
+   38505: (qq, Eq, gq) => {
+     function Yq(qq, Eq, gq) {
```

#### 10. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L114-L131` → after: `L57-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L57-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L57-L63) · [Before (L114-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L114-L131)

```diff
-       return {
-         ...OT.store,
-         yaw: OT.store.yaw + (null !== (kT = lT.c[TT].previewYaw) && void 0 !== kT ? kT : 0)
-       }
-     }
-     const KT = {
-         yaw: .61 * Math.PI,
-         pitch: Math.PI / 2.05,
-         radius: 30,
-         target: [0, 0, 0]
-       },
-       OT = {
-         player: KT,
-         store: {
-           ...KT,
-           radius: 33,
- ... (2 more removed lines; see GitHub link above)
+       const {
+         width: lq,
+         height: Oq
+       } = gq, mq = null !== (Yq = qq.text) && void 0 !== Yq ? Yq : qq, xq = (mq.x / 100 - .5) * lq, Aq = (mq.y / 100 - .5) * Oq, cq = lq / 2 - Eq.x;
+       if (null !== qq.text && Math.abs(xq) <= cq && Aq >= Eq.top - Oq / 2 && Aq <= Oq / 2 - Eq.bottom) return {
+         x: mq.x,
+         y: mq.y
```

#### 11. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L133-L137` → after: `L65-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L65-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L65-L72) · [Before (L133-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L133-L137)

```diff
- 
-     function yT(TT, kT) {
-       TT instanceof Promise ? TT.then(kT).catch((TT => {
-         console.error("Couldn't open the preview", TT)
-       })) : kT(TT)
+       const uq = Math.min(0 === xq ? 1 / 0 : cq / Math.abs(xq), Aq > 0 ? (Oq / 2 - Eq.bottom) / Aq : Aq < 0 ? (Eq.top - Oq / 2) / Aq : 1 / 0);
+       return !Number.isFinite(uq) || uq < 0 ? {
+         x: 50,
+         y: 50
+       } : {
+         x: 50 + xq * uq / lq * 100,
+         y: 50 + Aq * uq / Oq * 100
+       }
```

#### 12. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L140-L147` → after: `L86-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L86-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L86-L93) · [Before (L140-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L140-L147)

```diff
-       constructor(TT) {
-         this.opened = null, this.view = null, this.size = null, this.closed = !1, yT(TT, (TT => {
-           this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height), null !== this.view && TT.show(this.view))
-         }))
-       }
-       show(TT) {
-         var kT;
-         this.view = TT, null === (kT = this.opened) || void 0 === kT || kT.show(TT)
+       constructor() {
+         let {
+           limit: qq = Yq,
+           windowMs: Eq = lq,
+           spacingMs: gq = Oq,
+           now: mq = Date.now
+         } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = qq, this.windowMs = Eq, this.spacingMs = gq, this.now = mq
```

#### 13. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L149-L154` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L95-L96) · [Before (L149-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L149-L154)

```diff
-       resize(TT, kT) {
-         var cT;
-         this.size = {
-           width: TT,
-           height: kT
-         }, null === (cT = this.opened) || void 0 === cT || cT.resize(TT, kT)
+       isPacing() {
+         return !this.canSendPriority() || this.isPriorityWaiting()
```

#### 14. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L156-L158` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L98-L99) · [Before (L156-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L156-L158)

```diff
-       close() {
-         var TT;
-         this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
+       canSendPriority() {
+         return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
```

#### 15. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L160-L165` → after: `L101-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L101-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L101-L103) · [Before (L160-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L160-L165)

```diff
-     }
-     class xT {
-       constructor(TT) {
-         this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(TT).then((TT => TT.ready)), yT(TT, (TT => {
-           this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height))
-         }))
+       tryStart() {
+         for (const qq of this.priority) qq.flush();
+         return !this.isPacing() && (this.start(), !0)
```

#### 16. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L167-L168` → after: `L105-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L105-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L105-L108) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L167-L168)

```diff
-       get dev() {
-         return this.opened.dev
+       start() {
+         this.prune();
+         const qq = this.now();
+         this.sent.push(qq), this.lastSentAt = qq, this.schedule(), this.notify()
```

#### 17. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L170-L172` → after: `L110-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L110-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L110-L113) · [Before (L170-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L170-L172)

```diff
-       isReady() {
-         var TT, kT;
-         return null !== (TT = null === (kT = this.opened) || void 0 === kT ? void 0 : kT.isReady()) && void 0 !== TT && TT
+       addPriority(qq) {
+         return this.priority.add(qq), () => {
+           this.priority.delete(qq)
+         }
```

#### 18. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L174-L176` → after: `L115-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L115-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L115-L118) · [Before (L174-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L174-L176)

```diff
-       setCosmetic(TT, kT) {
-         var cT;
-         null === (cT = this.opened) || void 0 === cT || cT.setCosmetic(TT, kT)
+       subscribe(qq) {
+         return this.listeners.add(qq), () => {
+           this.listeners.delete(qq)
+         }
```

#### 19. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L178-L180` → after: `L120-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L120-L121) · [Before (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L178-L180)

```diff
-       playEmote(TT) {
-         var kT;
-         null === (kT = this.opened) || void 0 === kT || kT.playEmote(TT)
+       dispose() {
+         this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
```

#### 20. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L182-L184` → after: `L123-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L123-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L123-L126) · [Before (L182-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L182-L184)

```diff
-       setOrbit(TT) {
-         var kT;
-         null === (kT = this.opened) || void 0 === kT || kT.setOrbit(TT)
+       isPriorityWaiting() {
+         for (const qq of this.priority)
+           if (qq.waiting()) return !0;
+         return !1
```

#### 21. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L186-L188` → after: `L128-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L128-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L128-L130) · [Before (L186-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L186-L188)

```diff
-       resetCamera() {
-         var TT;
-         null === (TT = this.opened) || void 0 === TT || TT.resetCamera()
+       prune() {
+         const qq = this.now() - this.windowMs;
+         for (; this.sent.length > 0 && this.sent[0] <= qq;) this.sent.shift()
```

#### 22. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L190-L192` → after: `L132-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L132-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L132-L139) · [Before (L190-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L190-L192)

```diff
-       async untilDrawn(TT) {
-         var kT;
-         await this.ready, await (null === (kT = this.opened) || void 0 === kT ? void 0 : kT.untilDrawn(TT))
+       schedule() {
+         this.clearTimer();
+         const qq = this.now(),
+           Eq = this.lastSentAt + this.spacingMs,
+           gq = Math.min(Eq > qq ? Eq : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
+         gq !== 1 / 0 && (this.timer = setTimeout((() => {
+           this.timer = null, this.prune(), this.schedule(), this.notify()
+         }), Math.max(0, gq - qq)))
```

#### 23. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L194-L199` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L141-L142) · [Before (L194-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L194-L199)

```diff
-       resize(TT, kT) {
-         var cT;
-         this.size = {
-           width: TT,
-           height: kT
-         }, null === (cT = this.opened) || void 0 === cT || cT.resize(TT, kT)
+       notify() {
+         for (const qq of this.listeners) qq()
```

#### 24. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L201-L203` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L144-L145) · [Before (L201-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L201-L203)

```diff
-       close() {
-         var TT;
-         this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
+       clearTimer() {
+         null !== this.timer && (clearTimeout(this.timer), this.timer = null)
```

#### 25. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L206-L211` → after: `L148-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L148-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L148-L161) · [Before (L206-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L206-L211)

```diff
-     const IT = new class {
-       constructor() {
-         this.host = null, this.makeDefault = null
-       }
-       setHost(TT) {
-         this.host = TT
+   },
+   38498: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => Yq
+     });
+     class Yq {
+       constructor(qq, Eq, gq) {
+         this.TV = qq, this.beforeOpen = Eq, this.afterClose = gq, this.open = !1, this.eN = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
+           this.isEnabled() && !this.eN && (this.open = !0, this.beforeOpen(this), this.emit())
+         }, this.close = () => {
+           this.closePanel(!1)
+         }, this.dismiss = () => {
+           this.closePanel(!0)
+         }
```

#### 26. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L213-L214` → after: `L163-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L163-L164) · [Before (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L213-L214)

```diff
-       setDefaultHost(TT) {
-         this.makeDefault = TT
+       isOpen() {
+         return this.open
```

#### 27. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L216-L221` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L166-L167) · [Before (L216-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L216-L221)

```diff
-       current() {
-         if (null === this.host) {
-           if (null === this.makeDefault) throw new Error("no preview host");
-           this.host = this.makeDefault()
-         }
-         return this.host
+       showOrRefresh() {
+         this.open ? this.emit() : this.show()
```

#### 28. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L223-L224` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L169-L170) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L223-L224)

```diff
-       openMob(TT) {
-         return new fT(this.current().openMob(TT))
+       closePanel(qq) {
+         this.open = !1, this.onClosed(), this.emit(), this.afterClose(qq)
```

#### 29. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L226-L227` → after: `L172-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L172-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L172-L174) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L226-L227)

```diff
-       openPet(TT) {
-         return new fT(this.current().openPet(TT))
+       onClosed() {}
+       dispose() {
+         this.open = !1, this.emit(), this.eN = !0
```

#### 30. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L229-L230` → after: `L176-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L176-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L176-L177) · [Before (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L229-L230)

```diff
-       openMobLineup(TT) {
-         return new fT(this.current().openMobLineup(TT))
+       isEnabled() {
+         return !0
```

#### 31. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L232-L233` → after: `L179-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L179-L180) · [Before (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L232-L233)

```diff
-       openCharacter(TT, kT) {
-         return new xT(this.current().openCharacter(TT, kT))
+       emit() {
+         this.eN || (this.snapshot = this.buildSnapshot(), this.TV(this.snapshot))
```

#### 32. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L237-L241` → after: `L184-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L184-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L184-L187) · [Before (L237-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L237-L241)

```diff
-   9395: (TT, kT, cT) => {
-     cT.d(kT, {
-       c: () => lT.c,
-       e: () => lT.d,
-       f: () => lT.f
+   38619: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       SkyblockEntityFacing: () => xq,
+       needsSkyblockEntityFacing: () => mq
```

#### 33. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L243-L251` → after: `L189-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L189-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L189-L201) · [Before (L243-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L243-L251)

```diff
-     var lT = cT(9403);
-     class MT {
-       constructor(TT) {
-         this.load = TT, this.loaded = null, this.loading = null
-       }
-       run(TT) {
-         return null !== this.loaded ? TT(this.loaded) : (this.loading ??= this.load().then((TT => (this.loaded = TT, TT)), (TT => {
-           throw this.loading = null, TT
-         })), this.loading.then(TT))
+     var Yq = gq(590),
+       lq = gq(4096),
+       Oq = gq(38625);
+ 
+     function mq(qq, Eq) {
+       if (qq.metaInfo === Yq.c || "Iron Guardian" === qq.type || "Gold Guardian" === qq.type) return !0;
+       if ("Pig" === qq.type) return "sitting" === qq.pose;
+       if ("Person" !== qq.meshKind || void 0 === qq.meshOpts) return !1;
+       let gq = null === Eq || void 0 === Eq ? void 0 : Eq.get(qq.meshOpts);
+       if (void 0 === gq) {
+         var Oq, mq;
+         const Yq = (0, lq.i)(qq);
+         gq = !1, "pig_napoleon" === (null === Yq || void 0 === Yq || null === (Oq = Yq.opts.textures) || void 0 === Oq ? void 0 : Oq.head) ? gq = !0 : "npc_pig_head" === (null === Yq || void 0 === Yq || null === (mq = Yq.opts.textures) || void 0 === mq ? void 0 : mq.head) && (gq  … [truncated]
```

#### 34. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L253` → after: `L203-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L203-L206) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L253)

```diff
-     }
+       return "sitting" === gq ? "sitting" === qq.pose : gq
+     }(0, Oq.g)("skyblock", ((qq, Eq) => {
+       Eq.setFacingTolerance(mq(qq) ? 0 : null)
+     }));
```

#### 35. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L255-L262` → after: `L208-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L208-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L208-L214) · [Before (L255-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L255-L262)

```diff
-       constructor() {
-         this.mobScene = new MT((() => Promise.all([cT.e(70), cT.e(227), cT.e(226), cT.e(246), cT.e(95), cT.e(247), cT.e(73), cT.e(72), cT.e(244), cT.e(71), cT.e(254), cT.e(248), cT.e(253), cT.e(251), cT.e(243), cT.e(219), cT.e(265), cT.e(223), cT.e(238), cT.e(249), cT.e(252), cT. … [truncated]
-       }
-       openMob(TT) {
-         return this.mobScene.run((kT => kT.openMobPreview(TT)))
-       }
-       openPet(TT) {
-         return this.mobScene.run((kT => kT.openPetPreview(TT)))
+       constructor(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+         this.api = qq, this.alsoVisit = Eq, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = qq => {
+           var Eq;
+           const gq = this.api.getEntityInfo(qq);
+           gq && (mq(gq, this.meshFacingCache) && (this.api.setFacingTolerance(qq, 0), this.nextFacing.add(qq)), null === (Eq = this.alsoVisit) || void 0 === Eq || Eq.call(this, qq, gq))
+         }
```

#### 36. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L264-L265` → after: `L216-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L216-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L216-L222) · [Before (L264-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L264-L265)

```diff
-       openMobLineup(TT) {
-         return this.mobScene.run((kT => kT.openMobLineupPreview(TT)))
+       SB() {
+         const {
+           api: qq
+         } = this, Eq = this.nextFacing;
+         qq.forEachEntity(this.visit);
+         for (const gq of this.facing) Eq.has(gq) || qq.setFacingTolerance(gq, null);
+         this.facing.clear(), this.nextFacing = this.facing, this.facing = Eq
```

#### 37. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L267-L268` → after: `L224-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L224-L226) · [Before (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L267-L268)

```diff
-       openCharacter(TT, kT) {
-         return this.characterScene.run((cT => cT.openCharacterPreview(TT, kT)))
+       dispose() {
+         for (const qq of this.facing) this.api.setFacingTolerance(qq, null);
+         this.facing.clear(), this.meshFacingCache.clear()
```

#### 38. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L273` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L230) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L273)

```diff
-   41323: (TT, kT, cT) => {
+   38492: (qq, Eq, gq) => {
```

#### 39. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L275` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L232) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L275)

```diff
-       FrontlineMvpLineup: () => AT
+       default: () => xA
```

#### 40. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L277-L283` → after: `L234-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L234-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L234-L249) · [Before (L277-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L277-L283)

```diff
-     var lT = cT(71),
-       MT = cT(1046),
-       KT = cT.n(MT),
-       OT = cT(9395),
-       yT = cT(41128),
-       fT = cT(41120),
-       xT = cT(1099);
+     const Yq = "island";
+     var lq = gq(307);
+     const Oq = (0, lq.Kb)([0, 0, -1]),
+       mq = [{
+         name: "S",
+         bearing: (0, lq.Kb)([0, 0, 1])
+       }, {
+         name: "E",
+         bearing: (0, lq.Kb)([-1, 0, 0])
+       }, {
+         name: "N",
+         bearing: Oq
+       }, {
+         name: "W",
+         bearing: (0, lq.Kb)([1, 0, 0])
+       }];
```

#### 41. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L285-L286` → after: `L251-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L251-L252) · [Before (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L285-L286)

```diff
-     function IT(TT) {
-       return OT.f.openMobLineup(TT)
+     function xq(qq, Eq, gq) {
+       return [100 * (gq.mapMaxX - qq) / (gq.mapMaxX - gq.mapMinX), 100 * (Eq - gq.mapMinZ) / (gq.mapMaxZ - gq.mapMinZ)]
```

#### 42. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L288-L299` → after: `L254-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L254-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L254-L260) · [Before (L288-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L288-L299)

```diff
-     const AT = (0, lT.memo)((function(TT) {
-       let {
-         players: kT,
-         className: cT
-       } = TT;
-       const MT = (0, lT.useRef)(null),
-         OT = (0, lT.useMemo)((() => kT.map((TT => {
-           let {
-             cosmetics: kT,
-             size: cT,
-             heldGun: lT
-           } = TT;
+ 
+     function Aq(qq, Eq, gq) {
+       const lq = "local" === Eq,
+         Oq = qq.background,
+         mq = Eq => Oq ? xq(Eq[0] - qq.mapOrigin[0], Eq[2] - qq.mapOrigin[2], Oq.bounds) : [50, 50],
+         Aq = (qq.insideDungeon ? [] : qq.landmarks).map((qq => {
+           var Eq, Yq;
```

#### 43. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L301-L304` → after: `L262-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L262-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L262-L269) · [Before (L301-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L301-L304)

```diff
-             cosmetics: kT,
-             size: cT,
-             Gw: lT.name,
-             animation: lT.aimed ? yT.b : yT.c
+             id: qq.id,
+             name: gq(qq.visited && qq.nameKey ? null !== (Eq = qq.mapLabelKey) && void 0 !== Eq ? Eq : qq.nameKey : "skyblockGame:mapUnknown"),
+             icon: qq.visited && null !== (Yq = qq.icon) && void 0 !== Yq ? Yq : "unknown",
+             visited: qq.visited,
+             current: !1,
+             position: mq(qq.position),
+             travelKind: "landmark",
+             travelId: qq.id
```

#### 44. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L306-L345` → after: `L271-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L271-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L271-L335) · [Before (L306-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L306-L345)

```diff
-         }))), [kT]),
-         AT = function(TT) {
-           const [kT, cT] = (0, lT.useState)([]);
-           return (0, lT.useEffect)((() => {
-             cT(TT.map((() => !1)));
-             const kT = TT.map(((TT, kT) => {
-               let {
-                 showAfterMs: lT
-               } = TT;
-               return window.setTimeout((() => {
-                 cT((TT => TT.map(((TT, cT) => TT || cT === kT))))
-               }), lT)
-             }));
-             return () => {
-               for (const TT of kT) window.clearTimeout(TT)
-             }
- ... (24 more removed lines; see GitHub link above)
+         })),
+         uq = qq.zones.map((Eq => {
+           var Yq;
+           return {
+             id: Eq.id,
+             name: gq(Eq.visited && Eq.nameKey ? Eq.nameKey : "skyblockGame:mapUnknown"),
+             icon: Eq.visited && null !== (Yq = Eq.icon) && void 0 !== Yq ? Yq : "unknown",
+             visited: Eq.visited,
+             current: Eq.id === qq.zoneId,
+             position: Eq.position,
+             thumbnail: Eq.visited ? Eq.id : void 0,
+             travelKind: "zone",
+             travelId: Eq.id
+           }
+         })),
+         Bq = qq.insideDungeon || !Oq ? [] : qq.portals.map((qq => {
+ ... (49 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L348-L350` → after: `L338-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L338-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L338-L349) · [Before (L348-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L348-L350)

```diff
-     function yT(TT, kT, cT, MT) {
-       const KT = TT.vM <= 0 ? 1 : kT + cT * Math.max(0, MT) / TT.vM;
-       return TT.tM === lT.k.LoopOnLastFrame ? KT % 1 : TT.tM === lT.k.NoLoop && KT >= 1 ? null : Math.min(1, KT)
+     function cq(qq) {
+       const Eq = new Set;
+       return qq.flatMap((gq => gq.connections.flatMap((Yq => {
+         const lq = qq.find((qq => qq.id === Yq)),
+           Oq = [gq.id, Yq].sort().join("|");
+         return !lq || Eq.has(Oq) ? [] : (Eq.add(Oq), [{
+           id: `${gq.id}-${Yq}`,
+           start: gq.position,
+           end: lq.position,
+           explored: gq.visited && lq.visited
+         }])
+       }))))
```

#### 46. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L352-L362` → after: `L351-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L351-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L351-L392) · [Before (L352-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L352-L362)

```diff
-     class fT {
-       createAnimationScript(TT) {
-         const {
-           vM: kT,
-           loop: cT,
-           hM: lT
-         } = TT;
-         return {
-           vM: Math.round(kT),
-           tM: this.createLoopMode(null !== cT && void 0 !== cT && cT),
-           hM: this.createNodeSkeletonAnimationScript(null !== lT && void 0 !== lT ? lT : null)
+     var uq = gq(38498);
+     class Bq extends uq.c {}
+     const Wq = "skyblockMapView";
+     class Nq extends Bq {
+       constructor(qq, Eq, gq) {
+         let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
+           lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
+           Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
+         super(qq, Yq, lq), this.requestTravel = Eq, this.translate = gq, this.now = Oq, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
+           presentation: null,
+           enabled: !1,
+           open: !1,
+           tab: "local",
+           map: null,
+           pending: !1,
+           feedback: ""
+ ... (26 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L365-L374` → after: `L395-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L395-L396) · [Before (L365-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L365-L374)

```diff
-       createLoopMode(TT) {
-         switch (TT) {
-           case !1:
-             return lT.k.NoLoop;
-           case !0:
-             return lT.k.LoopOnLastFrame;
-           case "hold-on-last-frame":
-             return lT.k.HoldOnLastFrame
-         }
-         throw new Error(`Invalid loop mode schema: ${TT}`)
+       getEntities() {
+         return this.entities
```

#### 48. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L376-L383` → after: `L398-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L398-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L398-L399) · [Before (L376-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L376-L383)

```diff
-       createNodeSkeletonAnimationScript(TT) {
-         if (null === TT) return null;
-         const kT = {};
-         for (const cT in TT) {
-           const lT = TT[cT];
-           kT[cT] = this.createNodeAnimationScript(lT)
-         }
-         return kT
+       setTranslator(qq) {
+         this.translate = qq, this.emit()
```

#### 49. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L385-L391` → after: `L401-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L401-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L401-L436) · [Before (L385-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L385-L391)

```diff
-       createNodeAnimationScript(TT) {
-         const {
-           timeline: kT
-         } = TT, cT = kT.filter((TT => Number.isFinite(TT.timeFraction)));
-         return cT.sort(((TT, kT) => TT.timeFraction - kT.timeFraction)), {
-           rotation: this.createTimelineFromKeyframes(cT, "rotation", CT),
-           position: this.createTimelineFromKeyframes(cT, "position", vT)
+       ga(qq) {
+         var Eq;
+         if (!this.eN)
+           if ("entities" !== qq.kind)
+             if ("open" !== qq.kind) {
+               var gq, Yq;
+               if ("snapshot" === qq.kind)(null === (gq = qq.snapshot) || void 0 === gq ? void 0 : gq.zoneId) !== (null === (Yq = this.map) || void 0 === Yq ? void 0 : Yq.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = qq.snapshot, !this.map && this.open && thi … [truncated]
+               else if ("travelQueued" === qq.kind) {
+                 var lq;
+                 qq.requestId === (null === (lq = this.pending) || void 0 === lq ? void 0 : lq.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
+               } else if (qq.requestId === (null === (Eq = this.pending) || void 0 === Eq ? void 0 : Eq.requestId)) {
+                 var Oq;
+                 this.pending = null, this.feedbackKey = null !== (Oq = qq.errorKey) && void 0 !== Oq ? Oq : "", null === qq.errorKey && this.close()
+               }
+               this.emit()
+             } else this.show();
+ ... (20 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L394-L400` → after: `L439-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L439-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L439-L472) · [Before (L394-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L394-L400)

```diff
-       createTimelineFromKeyframes(TT, kT, cT) {
-         const lT = [];
-         for (const fT of TT) {
-           const TT = fT[kT];
-           if (TT) {
-             const kT = this.createAnimationFrameWithoutPrecomputes(fT.timeFraction, TT);
-             IT(kT) && lT.push(kT)
+     }
+     const aq = 67.5 * Math.PI / 180;
+ 
+     function Vq(qq, Eq) {
+       const gq = Math.abs(qq);
+       if (gq > aq || Eq.trackHalfWidth <= 0) return null;
+       const Yq = Eq.trackHalfWidth,
+         lq = Eq.screenHalfWidth / (Eq.tanHalfFovX * Math.max(.5, Math.cos(Eq.pitch))),
+         Oq = Math.min(Math.atan(.6 * Yq / lq), .75 * aq),
+         mq = lq * Math.tan(Oq);
+       let xq;
+       if (gq <= Oq) xq = lq * Math.tan(gq);
+       else {
+         const qq = aq - Oq,
+           Eq = Math.max(0, lq * qq / (Math.cos(Oq) ** 2 * (Yq - mq)) - 1),
+           Aq = (gq - Oq) / qq;
+ ... (18 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L402` → after: `L474-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L474-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L474-L484) · [Before (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L402)

```diff
-         }
+         }))
+       }
+     }
+     class jq {
+       constructor(qq, Eq, gq, Yq) {
+         this.map = qq, this.kind = Eq, this.position = gq, this.alive = Yq, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = Eq, this.range = "enemy" === Eq ? 48 : 64, this.limit = 12
+       }
+       Py(qq) {
+         if ("enemy" !== this.kind || this.alive(qq.xq)) return this.position(qq.xq)
+       }
+       getPoints() {
```

#### 52. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L404-L412` → after: `L486-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L486-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L486-L497) · [Before (L404-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L404-L412)

```diff
-         for (let fT = 0; fT < lT.length; fT++) {
-           var KT, OT, yT;
-           const TT = lT[fT],
-             kT = null !== (KT = lT[fT - 1]) && void 0 !== KT ? KT : TT,
-             xT = null !== (OT = lT[fT + 1]) && void 0 !== OT ? OT : TT,
-             IT = null !== (yT = lT[fT + 2]) && void 0 !== yT ? yT : xT;
-           MT.push({
-             ...TT,
-             ...cT(kT.post, kT.timeFraction, TT.post, TT.timeFraction, xT.pre, xT.timeFraction, IT.pre, IT.timeFraction)
+         for (const Yq of this.map.getEntities()) {
+           if (Yq.kind !== this.kind || "enemy" === this.kind && !this.alive(Yq.compassEntityId)) continue;
+           const lq = this.position(Yq.compassEntityId);
+           var Eq, gq;
+           if (lq) qq.push({
+             id: `${this.kind}:${Yq.compassEntityId}`,
+             xq: Yq.compassEntityId,
+             kind: this.kind,
+             icon: null !== (Eq = Yq.icon) && void 0 !== Eq ? Eq : Yq.npcSkin ? `npc_${Yq.npcSkin}` : this.kind,
+             displayName: Yq.displayName,
+             position: lq,
+             nameKey: null !== (gq = Yq.nameKey) && void 0 !== gq ? gq : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
```

#### 53. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L417-L430` → after: `L502-L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L502-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L502-L505) · [Before (L417-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L417-L430)

```diff
-       createAnimationFrameWithoutPrecomputes(TT, kT) {
-         let cT, lT, MT = null;
-         var KT;
-         if ("object" === typeof kT && "point" in kT) MT = null !== (KT = kT.SM) && void 0 !== KT ? KT : null, cT = kT.point, lT = kT.point;
-         else if ("object" === typeof kT && "pre" in kT) {
-           var OT;
-           MT = null !== (OT = kT.SM) && void 0 !== OT ? OT : null, cT = kT.pre, lT = kT.post
-         } else cT = kT, lT = kT;
-         return {
-           timeFraction: TT,
-           SM: this.createLerpMode(MT),
-           pre: cT,
-           post: lT
-         }
+     }
+     class Hq {
+       constructor(qq) {
+         this.map = qq, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
```

#### 54. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L432-L433` → after: `L507-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L507-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L507-L519) · [Before (L432-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L432-L433)

```diff
-       createLerpMode(TT) {
-         return null === TT ? lT.j.Linear : fT.LERP_MODE_SCHEMA_MAPPING[TT]
+       getPoints() {
+         const qq = this.map.getSnapshot().map;
+         return !qq || qq.insideDungeon ? [] : qq.portals.map((qq => {
+           var Eq;
+           return {
+             id: "portal:" + qq.id,
+             kind: "portal",
+             position: qq.position,
+             nameKey: null !== (Eq = qq.nameKey) && void 0 !== Eq ? Eq : "skyblockGame:compassUnvisitedZone",
+             icon: qq.visited ? "dungeons" === qq.destination ? "portal_orange" : "portal" : "unknown",
+             colour: qq.colour
+           }
+         }))
```

#### 55. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L442` → after: `L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L524) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L442)

```diff
-         this.animationSchema = TT
+         this.target = qq, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
```

#### 56. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L444-L474` → after: `L526-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L526-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L526-L534) · [Before (L444-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L444-L474)

```diff
-       createAnimationScript() {
-         const {
-           animation_length: TT,
-           loop: kT,
-           bones: cT
-         } = this.animationSchema;
-         return {
-           vM: Math.round(1e3 * TT),
-           tM: this.createLoopMode(null !== kT && void 0 !== kT && kT),
-           hM: this.createNodeSkeletonAnimationScript(null !== cT && void 0 !== cT ? cT : null)
-         }
-       }
-       createLoopMode(TT) {
-         switch (TT) {
-           case !1:
-             return lT.k.NoLoop;
- ... (15 more removed lines; see GitHub link above)
+       getPoints() {
+         const qq = this.target();
+         return qq ? [{
+           id: "quest",
+           kind: "quest",
+           icon: "quest",
+           position: qq.position,
+           nameKey: qq.nameKey
+         }] : []
```

#### 57. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L476-L484` → after: `L536-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L536-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L536-L546) · [Before (L476-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L476-L484)

```diff
-       createNodeAnimationScript(TT) {
-         const {
-           rotation: kT,
-           position: cT
-         } = TT;
-         return {
-           rotation: this.createAnimationTimeline(null !== kT && void 0 !== kT ? kT : null, hT, CT, !0),
-           position: this.createAnimationTimeline(null !== cT && void 0 !== cT ? cT : null, QT, vT, !1)
-         }
+     }
+ 
+     function Pq(qq, Eq, gq) {
+       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qq.position;
+       const Oq = Yq[0] - Eq[0],
+         mq = Yq[2] - Eq[2];
+       return {
+         ...qq,
+         position: Yq,
+         offset: lq.c.computeShortestRotation(gq, (0, lq.Kb)([Oq, 0, mq])),
+         distance: Math.hypot(Oq, Yq[1] - Eq[1], mq)
```

#### 58. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L486-L491` → after: `L548-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L548-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L548-L571) · [Before (L486-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L486-L491)

```diff
-       createAnimationTimeline(TT, kT, cT, lT) {
-         if (null === TT) return [];
-         if (Array.isArray(TT)) {
-           TT = {
-             "0.0": TT
-           }
+     }
+     let Qq;
+ 
+     function yq(qq, Eq) {
+       var gq;
+       return (null === (gq = Qq) || void 0 === gq ? void 0 : gq.locale) !== Eq && (Qq = {
+         locale: Eq,
+         near: new Intl.NumberFormat(Eq, {
+           minimumFractionDigits: 1,
+           maximumFractionDigits: 1
+         }),
+         far: new Intl.NumberFormat(Eq, {
+           minimumFractionDigits: 0,
+           maximumFractionDigits: 0
+         })
+       }), (qq < 10 ? Qq.near : Qq.far).format(qq)
+ ... (8 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L493-L508` → after: `L573-L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L573-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L573-L591) · [Before (L493-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L493-L508)

```diff
-         const MT = Object.entries(TT).map((TT => {
-           let [cT, lT] = TT;
-           const MT = Number(cT) / this.animationSchema.animation_length;
-           return this.createAnimationFrameWithoutPrecomputes(MT, lT, kT)
-         })).filter(IT);
-         MT.sort(((TT, kT) => TT.timeFraction - kT.timeFraction)), lT && function(TT) {
-           for (let kT = 1; kT < TT.length; kT++) {
-             const cT = TT[kT - 1].post,
-               lT = TT[kT],
-               MT = ST(lT.pre),
-               KT = ST(lT.post),
-               OT = aT(cT, lT.pre);
-             aT(cT, MT) < OT && (TT[kT] = {
-               ...lT,
-               pre: MT,
-               post: KT
+       }
+       frame(qq, Eq, gq) {
+         if (gq >= this.refreshAt) {
+           this.refreshAt = gq + 200, this.candidates = [];
+           for (const Eq of this.providers.values()) {
+             if (!Eq.enabled) continue;
+             const gq = Eq.getPoints().map((Eq => {
+               const gq = Eq.position;
+               return {
+                 point: Eq,
+                 distance: Math.hypot(gq[0] - qq[0], gq[1] - qq[1], gq[2] - qq[2])
+               }
+             })).filter((qq => qq.distance <= Eq.range)).sort(((qq, Eq) => qq.distance - Eq.distance)).slice(0, Eq.limit);
+             for (const {
+                 point: qq
+               }
+ ... (3 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L511` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L594) · [Before (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L511)

```diff
-         }(MT);
+         }
```

#### 61. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L513-L522` → after: `L596-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L596-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L596-L606) · [Before (L513-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L513-L522)

```diff
-         for (let xT = 0; xT < MT.length; xT++) {
-           var OT, yT, fT;
-           const TT = MT[xT],
-             kT = null !== (OT = MT[xT - 1]) && void 0 !== OT ? OT : TT,
-             lT = null !== (yT = MT[xT + 1]) && void 0 !== yT ? yT : TT,
-             IT = null !== (fT = MT[xT + 2]) && void 0 !== fT ? fT : lT;
-           KT.push({
-             ...TT,
-             ...cT(kT.post, kT.timeFraction, TT.post, TT.timeFraction, lT.pre, lT.timeFraction, IT.pre, IT.timeFraction)
-           })
+         for (const {
+             point: lq,
+             provider: Oq
+           }
+           of this.candidates) {
+           if (!Oq.enabled) continue;
+           const gq = Oq.Py ? Oq.Py(lq) : lq.position;
+           if (gq) {
+             const Oq = Pq(lq, qq, Eq, gq);
+             Math.abs(Oq.offset) <= aq && Yq.push(Oq)
+           }
```

#### 62. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L526-L543` → after: `L610-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L610-L611) · [Before (L526-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L526-L543)

```diff
-       createAnimationFrameWithoutPrecomputes(TT, kT, cT) {
-         let lT, MT, KT = null;
-         if ("object" === typeof kT && "post" in kT) {
-           var OT;
-           KT = null !== (OT = kT.lerp_mode) && void 0 !== OT ? OT : null, MT = tT(kT.post, cT), lT = kT.pre ? tT(kT.pre, cT) : MT
-         } else {
-           const TT = tT(kT, cT);
-           MT = TT, lT = TT
-         }
-         return {
-           timeFraction: TT,
-           SM: this.createLerpMode(KT),
-           pre: lT,
-           post: MT
-         }
-       }
- ... (2 more removed lines; see GitHub link above)
+       dispose() {
+         this.providers.clear(), this.candidates = []
```

#### 63. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L548` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L650) · [Before (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L548)

```diff
-       return Number.isFinite(TT.timeFraction) && AT(TT.pre) && AT(TT.post)
+       return qq >= nq ? 1 : qq + 1
```

#### 64. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L552` → after: `L667-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L667-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L667-L677) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L552)

```diff
-       return Number.isFinite(TT[0]) && Number.isFinite(TT[1]) && Number.isFinite(TT[2])
+       let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+       const gq = Math.max(0, Math.floor(qq)),
+         Yq = Math.floor(gq % 1e3 / 100),
+         lq = Math.floor(gq / 1e3),
+         Oq = lq % 60,
+         mq = Math.floor(lq / 60),
+         xq = mq % 60,
+         Aq = Math.floor(mq / 60),
+         cq = qq => qq < 10 ? `0${qq}` : String(qq),
+         uq = Eq ? `.${Yq}` : "";
+       return Aq > 0 ? `${Aq}:${cq(xq)}:${cq(Oq)}${uq}` : `${xq}:${cq(Oq)}${uq}`
```

#### 65. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L555-L564` → after: `L744-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L744-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L744-L746) · [Before (L555-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L555-L564)

```diff
-     function CT(TT, kT, cT, lT, MT, KT, OT, yT) {
-       const fT = KT - kT,
-         xT = KT - lT,
-         IT = yT - lT,
-         AT = [null, null, null];
-       for (let CT = 0; CT < AT.length; CT++) AT[CT] = jT(TT[CT], cT[CT], MT[CT], OT[CT], fT, IT);
-       return {
-         DM: xT,
-         aM: AT
-       }
+     function Uq(qq, Eq) {
+       const gq = Math.floor(5 * qq / (2 * Eq + 1));
+       return Math.min(4, Math.max(0, gq))
```

#### 66. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L567-L572` → after: `L756-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L756-L757) · [Before (L567-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L567-L572)

```diff
-     function jT(TT, kT, cT, lT, KT, OT) {
-       return {
-         rM: MT.d.computeShortestRotation(TT, cT) / KT,
-         PM: MT.d.computeShortestRotation(kT, lT) / OT,
-         delta: MT.d.computeShortestRotation(kT, cT)
-       }
+     function eq(qq) {
+       return Math.max(0, qq)
```

#### 67. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L575-L588` → after: `L760-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L760-L761) · [Before (L575-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L575-L588)

```diff
-     function vT(TT, kT, cT, lT, MT, KT, OT, yT) {
-       const fT = KT - kT,
-         xT = KT - lT,
-         IT = yT - lT,
-         AT = [null, null, null];
-       for (let CT = 0; CT < AT.length; CT++) AT[CT] = {
-         rM: (MT[CT] - TT[CT]) / fT,
-         PM: (OT[CT] - cT[CT]) / IT,
-         delta: MT[CT] - cT[CT]
-       };
-       return {
-         DM: xT,
-         aM: AT
-       }
+     function Dq(qq) {
+       return 1 + .01 * eq(qq)
```

#### 68. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L591-L592` → after: `L764-L765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L764-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L764-L765) · [Before (L591-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L591-L592)

```diff
-     function tT(TT, kT) {
-       return null === kT ? TT : kT(TT)
+     function qE(qq) {
+       return 1 + .005 * eq(qq)
```

#### 69. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L596-L597` → after: `L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L769) · [Before (L596-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L596-L597)

```diff
-       const [kT, cT, lT] = TT, OT = -(0, KT.k)(kT), yT = -(0, KT.k)(cT), fT = (0, KT.k)(lT), xT = MT.d.quaternionFromEulerZYX(OT, yT, fT);
-       return MT.d.eulerYXZFromQuaternion(xT)
+       return 1 + .005 * eq(qq)
```

#### 70. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L606` → after: `L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L773) · [Before (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L606)

```diff
-       return [-TT[0] * NT, TT[1] * NT, TT[2] * NT]
+       return .01 * eq(qq)
```

#### 71. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L610-L611` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L777) · [Before (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L610-L611)

```diff
-       const [kT, cT, lT] = TT;
-       return [kT >= 0 ? Math.PI - kT : -Math.PI - kT, DT(cT + Math.PI), DT(lT + Math.PI)]
+       return 150 / (150 + eq(qq))
```

#### 72. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L615` → after: `L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L781) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L615)

```diff
-       return MT.d.mod(TT + Math.PI, 2 * Math.PI) - Math.PI
+       return 1 + .002 * eq(qq)
```

#### 73. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L618-L619` → after: `L784-L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L784-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L784-L785) · [Before (L618-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L618-L619)

```diff
-     function aT(TT, kT) {
-       return Math.abs(MT.d.computeShortestRotation(TT[0], kT[0])) + Math.abs(MT.d.computeShortestRotation(TT[1], kT[1])) + Math.abs(MT.d.computeShortestRotation(TT[2], kT[2]))
+     function OE(qq) {
+       return Math.round(10 * qq) / 10
```

#### 74. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L621` → after: `L787-L10885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L787-L10885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L787-L10885) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L621)

```diff
-     const FT = new fT
+ 
+     function mE(qq, Eq) {
+       switch (qq) {
+         case "foraging":
+           return {
+             translationKey: "skyblockGame:foragingBenefit", percent: OE(100 * (qE(Eq) - 1))
+           };
+         case "combat":
+           return {
+             translationKey: "skyblockGame:combatBenefit", percent: OE(100 * (Dq(Eq) - 1))
+           };
+         case "mining":
+           return {
+             translationKey: "skyblockGame:miningBenefit", percent: OE(100 * (EE(Eq) - 1))
+           };
+         case "farming":
+ ... (10083 more added lines; see GitHub link above)
```

#### 75. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L623` → after: `L10887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR10887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L10887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L10887) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L623)

```diff
-   36955: (TT, kT, cT) => {
+   9304: (qq, Eq, gq) => {
```

#### 76. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L625-L628` → after: `L10889-L10890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR10889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L10889-L10890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L10889-L10890) · [Before (L625-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L625-L628)

```diff
-       e: () => OT,
-       g: () => KT,
-       j: () => lT,
-       k: () => MT
+       c: () => lq,
+       d: () => mq
```

#### 77. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L630-L641` → after: `L10892-L11196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR10892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L10892-L11196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/191.js#L10892-L11196) · [Before (L630-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/191.js#L630-L641)

```diff
-     let lT = function(TT) {
-         return TT[TT.Linear = 0] = "Linear", TT[TT.CatmullRomSpline = 1] = "CatmullRomSpline", TT
-       }({}),
-       MT = function(TT) {
-         return TT[TT.NoLoop = 0] = "NoLoop", TT[TT.LoopOnLastFrame = 1] = "LoopOnLastFrame", TT[TT.HoldOnLastFrame = 2] = "HoldOnLastFrame", TT
-       }({}),
-       KT = function(TT) {
-         return TT[TT.Movement = 0] = "Movement", TT[TT.Action = 1] = "Action", TT[TT.Emote = 2] = "Emote", TT[TT.Custom = 3] = "Custom", TT
-       }({}),
-       OT = function(TT) {
-         return TT[TT.Start = 0] = "Start", TT[TT.Stop = 1] = "Stop", TT
-       }({})
+     const Yq = [{
+       threshold: 10n ** 180n,
+       suffix: "NoQig"
+     }, {
+       threshold: 10n ** 177n,
+       suffix: "OcQig"
+     }, {
+       threshold: 10n ** 174n,
+       suffix: "SpQig"
+     }, {
+       threshold: 10n ** 171n,
+       suffix: "SQig"
+     }, {
+       threshold: 10n ** 168n,
+       suffix: "QiQig"
+     }, {
+ ... (289 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/192.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/192.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4)

#### 1. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L4-L38` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/192.js#L4) · [Before (L4-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/192.js#L4-L38)

```diff
-   41113: (TT, kT, cT) => {
-     cT.r(kT), cT.d(kT, {
-       MobPreview: () => AT
-     });
-     var lT = cT(71),
-       MT = cT(1046),
-       KT = cT.n(MT),
-       OT = cT(41120),
-       yT = cT(9395),
-       fT = cT(41128),
-       xT = cT(1099);
- 
-     function IT(TT) {
-       return yT.f.openMob(TT)
-     }
-     const AT = (0, lT.memo)((function(TT) {
- ... (19 more removed lines; see GitHub link above)
+   41279: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L42-L43` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/192.js#L8-L9) · [Before (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/192.js#L42-L43)

```diff
-     var lT = cT(71),
-       MT = cT(2770);
+     var Yq = gq(57),
+       lq = gq(2660);
```

#### 3. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L63` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/192.js#L29) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/192.js#L63)

```diff
-   41128: (TT, kT, cT) => {
+   41285: (qq, Eq, gq) => {
```

#### 4. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L65-L70` → after: `L31-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L31-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/192.js#L31-L36) · [Before (L65-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/192.js#L65-L70)

```diff
-       b: () => CT,
-       c: () => AT,
-       g: () => fT
-     });
-     var lT = cT(36971),
-       MT = cT(38478);
+       d: () => Wq,
+       f: () => Bq,
+       j: () => Aq
+     });
+     var Yq = gq(37195),
+       lq = gq(38611);
```

#### 5. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L77-L78` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/192.js#L43-L44) · [Before (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/192.js#L77-L78)

```diff
-           SM: "catmull-rom-spline",
-           point: [cT, lT, MT + (.5 === TT ? kT : 0)]
+           oq: "catmull-rom-spline",
+           point: [gq, Yq, lq + (.5 === qq ? Eq : 0)]
```

#### 6. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L85` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/192.js#L51) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/192.js#L85)

```diff
-         vM: 3200,
+         aq: 3200,
```

#### 7. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L87` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/192.js#L53) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/192.js#L87)

```diff
-         hM: {
+         dq: {
```

#### 8. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L92` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/192.js#L58) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/192.js#L92)

```diff
-                 SM: "catmull-rom-spline",
+                 oq: "catmull-rom-spline",
```

#### 9. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L101` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/192.js#L67) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/192.js#L101)

```diff
-                 SM: "catmull-rom-spline",
+                 oq: "catmull-rom-spline",
```

#### 10. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L116` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/192.js#L82) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/192.js#L116)

```diff
-       fT = (0, MT.e)((0, lT.g)(yT), "mobIdle"),
+       Aq = (0, lq.b)((0, Yq.g)(xq), "mobIdle"),
```

#### 11. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L119-L120` → after: `L85-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/192.js#L85-L86) · [Before (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/192.js#L119-L120)

```diff
-       AT = (0, MT.e)((0, lT.g)(xT), "gunReady"),
-       CT = (0, MT.e)((0, lT.g)(IT), "gunAimed")
+       Bq = (0, lq.b)((0, Yq.g)(cq), "gunReady"),
+       Wq = (0, lq.b)((0, Yq.g)(uq), "gunAimed")
```

#### 12. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L122` → after: `L88-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L88-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/192.js#L88-L104) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/192.js#L122)

```diff
-   9403: (TT, kT, cT) => {
+   38611: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => lq,
+       f: () => Oq
+     });
+     const Yq = new WeakMap;
+ 
+     function lq(qq, Eq) {
+       return Yq.set(qq, Eq), qq
+     }
+ 
+     function Oq(qq) {
+       var Eq;
+       return null !== (Eq = Yq.get(qq)) && void 0 !== Eq ? Eq : null
+     }
+   },
+ ... (1 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L128` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/192.js#L110) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/192.js#L128)

```diff
-     var lT = cT(1578);
+     var Yq = gq(1547);
```

#### 14. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L134` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/192.js#L116) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/192.js#L134)

```diff
-         yaw: OT.store.yaw + (null !== (kT = lT.c[TT].previewYaw) && void 0 !== kT ? kT : 0)
+         yaw: mq.store.yaw + (null !== (Eq = Yq.b[qq].previewYaw) && void 0 !== Eq ? Eq : 0)
```

#### 15. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L255` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/192.js#L237) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/192.js#L255)

```diff
-   9395: (TT, kT, cT) => {
+   9313: (qq, Eq, gq) => {
```

#### 16. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L258-L261` → after: `L240-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L240-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/192.js#L240-L243) · [Before (L258-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/192.js#L258-L261)

```diff
-       e: () => lT.d,
-       f: () => lT.f
-     });
-     var lT = cT(9403);
+       f: () => Yq.d,
+       i: () => Yq.f
+     });
+     var Yq = gq(9321);
```

#### 17. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L274` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/192.js#L256) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/192.js#L274)

```diff
-         this.mobScene = new MT((() => Promise.all([cT.e(70), cT.e(227), cT.e(226), cT.e(246), cT.e(95), cT.e(247), cT.e(73), cT.e(72), cT.e(244), cT.e(71), cT.e(254), cT.e(248), cT.e(253), cT.e(251), cT.e(243), cT.e(219), cT.e(265), cT.e(223), cT.e(238), cT.e(249), cT.e(252), cT. … [truncated]
+         this.mobScene = new lq((() => Promise.all([gq.e(70), gq.e(227), gq.e(226), gq.e(246), gq.e(95), gq.e(247), gq.e(73), gq.e(72), gq.e(244), gq.e(71), gq.e(254), gq.e(248), gq.e(253), gq.e(251), gq.e(243), gq.e(265), gq.e(223), gq.e(238), gq.e(249), gq.e(252), gq.e(75), gq.e … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/193.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/193.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2)

#### 1. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L4-L5` → after: `L4-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L4-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/193.js#L4-L124) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/193.js#L4-L5)

```diff
-   9420: (TT, kT, cT) => {
-     cT.d(kT, {
+   41277: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       MobPreview: () => Bq
+     });
+     var Yq = gq(57),
+       lq = gq(1018),
+       Oq = gq.n(lq),
+       mq = gq(41279),
+       xq = gq(9313),
+       Aq = gq(41285),
+       cq = gq(1070);
+ 
+     function uq(qq) {
+       return xq.i.openMob(qq)
+     }
+     const Bq = (0, Yq.memo)((function(qq) {
+ ... (105 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L9-L23` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/193.js#L128) · [Before (L9-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/193.js#L9-L23)

```diff
-     var lT = cT(3198);
- 
-     function MT() {
-       if ("undefined" === typeof BroadcastChannel) return null;
-       const TT = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
-       try {
-         const kT = new BroadcastChannel(lT.l);
-         kT.postMessage({
-           stored: TT
-         }), kT.close()
-       } catch {
-         return null
-       }
-       return TT
-     }
+     var Yq = gq(1547);
```

#### 3. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L26-L118` → after: `L131-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L131-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/193.js#L131-L150) · [Before (L26-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/193.js#L26-L118)

```diff
-       const kT = "object" === typeof TT && null !== TT ? TT.stored : null;
-       return "string" === typeof kT ? kT : null
-     }
-   },
-   9415: (TT, kT, cT) => {
-     cT.d(kT, {
-       c: () => OT,
-       f: () => MT,
-       g: () => KT
-     });
-     var lT = cT(3198);
-     async function MT(TT, kT, cT) {
-       let MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
-       const KT = OT(await TT.getItem(lT.h, kT));
-       if (null === KT || MT()) return null;
-       const yT = await TT.getItem(lT.k, kT);
- ... (77 more removed lines; see GitHub link above)
+       var Eq;
+       return {
+         ...mq.store,
+         yaw: mq.store.yaw + (null !== (Eq = Yq.b[qq].previewYaw) && void 0 !== Eq ? Eq : 0)
+       }
+     }
+     const Oq = {
+         yaw: .61 * Math.PI,
+         pitch: Math.PI / 2.05,
+         radius: 30,
+         target: [0, 0, 0]
+       },
+       mq = {
+         player: Oq,
+         store: {
+           ...Oq,
+ ... (4 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L121-L182` → after: `L153-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L153-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/193.js#L153-L156) · [Before (L121-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/193.js#L121-L182)

```diff
-       if (null === TT || "player" === kT || !vT(TT)) return TT;
-       const cT = {
-         ...TT
-       };
-       return TT.textureOverrides && (cT.textureOverrides = NT(TT.textureOverrides, KT, "texture")), TT.modelOverrides && (cT.modelOverrides = NT(TT.modelOverrides, KT, "model")), TT.skyBoxes && (cT.skyBoxes = NT(TT.skyBoxes, OT, "sky")), TT.customCss && (cT.customCss = function(T … [truncated]
-         const kT = TT => NT(TT, (TT => "string" === typeof TT && !jT(TT)), "CSS"),
-           {
-             fontFaces: cT,
-             classStyles: lT
-           } = hT(TT) ? TT : {},
-           MT = {};
-         for (const [KT, OT] of Object.entries(hT(lT) ? lT : {})) MT[KT] = kT(OT);
-         return {
-           fontFaces: (Array.isArray(cT) ? cT : []).map(kT),
-           classStyles: MT
-         }
- ... (46 more removed lines; see GitHub link above)
+       qq instanceof Promise ? qq.then(Eq).catch((qq => {
+         console.error("Couldn't open the preview", qq)
+       })) : Eq(qq)
+     }
```

#### 5. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L185-L190` → after: `L159-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L159-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/193.js#L159-L232) · [Before (L185-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/193.js#L185-L190)

```diff
-         this.host = TT, this.ready = void 0, this.state = jT, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks =  … [truncated]
-       }
-       readyWithin(TT) {
-         return Promise.race([this.ready, new Promise((kT => {
-           setTimeout(kT, TT)
-         }))])
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, xq(qq, (qq => {
+           this.closed ? qq.close() : (this.opened = qq, null !== this.size && qq.resize(this.size.width, this.size.height), null !== this.view && qq.show(this.view))
+         }))
+       }
+       show(qq) {
+         var Eq;
+         this.view = qq, null === (Eq = this.opened) || void 0 === Eq || Eq.show(qq)
+       }
+       resize(qq, Eq) {
+         var gq;
+         this.size = {
+           width: qq,
+           height: Eq
+         }, null === (gq = this.opened) || void 0 === gq || gq.resize(qq, Eq)
+       }
+       close() {
+ ... (58 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L193-L438` → after: `L235-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L235-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/193.js#L235-L289) · [Before (L193-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/193.js#L193-L438)

```diff
-         return this.state
-       }
-       playerState() {
-         return {
-           pack: this.playerPack,
-           gameSource: null
-         }
-       }
-       onPlayerPackChange(TT) {
-         return this.ownListeners.add(TT), () => {
-           this.ownListeners.delete(TT)
-         }
-       }
-       isUsingCustomGameTexturePack(TT) {
-         return (0, AT.f)(this.state, TT)
-       }
- ... (230 more removed lines; see GitHub link above)
+         if (null === this.host) {
+           if (null === this.makeDefault) throw new Error("no preview host");
+           this.host = this.makeDefault()
+         }
+         return this.host
+       }
+       openMob(qq) {
+         return new Aq(this.current().openMob(qq))
+       }
+       openPet(qq) {
+         return new Aq(this.current().openPet(qq))
+       }
+       openMobLineup(qq) {
+         return new Aq(this.current().openMobLineup(qq))
+       }
+       openCharacter(qq, Eq) {
+ ... (39 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/194.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/194.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27)

#### 1. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L4-L9` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/194.js#L4-L7) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/194.js#L4-L9)

```diff
-   9423: (TT, kT, cT) => {
-     cT.r(kT), cT.d(kT, {
-       packDisplayName: () => vT,
-       packModelMessage: () => tT,
-       packModelSummary: () => NT,
-       refusedPackModels: () => hT
+   9343: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => lq,
+       e: () => Oq
```

#### 2. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L11-L39` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/194.js#L9-L13) · [Before (L11-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/194.js#L11-L39)

```diff
-     var lT = cT(9429),
-       MT = cT(9438);
-     const KT = "DRACO",
-       OT = 0,
-       yT = 1,
-       fT = 0,
-       xT = 1,
-       IT = 32768;
- 
-     function AT(TT) {
-       const kT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
-       let cT = 0;
-       const lT = () => {
-           if (cT >= TT.byteLength) throw new RangeError("past the stream");
-           return TT[cT++]
-         },
- ... (13 more removed lines; see GitHub link above)
+     var Yq = gq(3150);
+ 
+     function lq() {
+       if ("undefined" === typeof BroadcastChannel) return null;
+       const qq = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
```

#### 3. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L41-L88` → after: `L15-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L15-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/194.js#L15-L18) · [Before (L41-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/194.js#L41-L88)

```diff
-         for (let TT = 0; TT < KT.length; TT++)
-           if (lT() !== KT.charCodeAt(TT)) return null;
-         const kT = lT(),
-           CT = lT(),
-           jT = lT(),
-           vT = lT(),
-           tT = lT() | lT() << 8;
-         if (2 !== kT) return null;
-         0 !== (tT & IT) && function(TT, kT, cT) {
-           const lT = () => {
-               kT(cT())
-             },
-             MT = () => {
-               let cT = 1,
-                 MT = !0;
-               for (; cT > 0;) {
- ... (32 more removed lines; see GitHub link above)
+         const Eq = new BroadcastChannel(Yq.n);
+         Eq.postMessage({
+           stored: qq
+         }), Eq.close()
```

#### 4. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L95-L97` → after: `L145-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L145-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/194.js#L145-L323) · [Before (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/194.js#L95-L97)

```diff
-       var lT, MT;
-       if (null === (lT = null === (MT = TT.extensionsUsed) || void 0 === MT ? void 0 : MT.includes("KHR_draco_mesh_compression")) || void 0 === lT || !lT) return null;
-       for (const vT of null !== (KT = TT.meshes) && void 0 !== KT ? KT : []) {
+       const Yq = Object.entries(dq(qq) ? qq : {}),
+         lq = Yq.filter((qq => {
+           let [, gq] = qq;
+           return !Eq(gq)
+         }));
+       if (lq.length > 0) {
+         const qq = lq.map((qq => {
+           let [Eq] = qq;
+           return Eq
+         }));
+         console.warn(`Ignoring a custom game texture pack's ${gq} files that name another site: ${qq.join(", ")}`)
+       }
+       return Object.fromEntries(Yq.filter((qq => {
+         let [, gq] = qq;
+         return Eq(gq)
+       })))
+ ... (163 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L99-L132` → after: `L325-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L325-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/194.js#L325-L344) · [Before (L99-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/194.js#L99-L132)

```diff
-         for (const lT of vT.primitives) {
-           var OT, yT, fT, xT, IT, CT;
-           const MT = null === (OT = lT.extensions) || void 0 === OT ? void 0 : OT.KHR_draco_mesh_compression;
-           if ("object" !== typeof MT || null === MT) continue;
-           const KT = null === (yT = TT.bufferViews) || void 0 === yT ? void 0 : yT[MT.bufferView];
-           if (null === kT || void 0 === KT) return jT;
-           const vT = null !== (fT = KT.byteOffset) && void 0 !== fT ? fT : 0,
-             tT = AT(kT.subarray(vT, vT + KT.byteLength));
-           if (null === tT && !cT) continue;
-           const hT = null !== (xT = TT.accessors) && void 0 !== xT ? xT : [],
-             NT = null === (IT = hT[lT.attributes.POSITION]) || void 0 === IT ? void 0 : IT.count,
-             QT = void 0 === lT.indices ? 0 : null === (CT = hT[lT.indices]) || void 0 === CT ? void 0 : CT.count;
-           if (null === tT || void 0 === NT || void 0 === QT || 3 * tT.faces !== QT || tT.vertices > NT) return jT
-         }
-       }
-       return null
- ... (18 more removed lines; see GitHub link above)
+         null === qq || this.eN || this.changes > 0 || this.picks > 0 || ((0, cq.j)(qq.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
+           pack: qq.pack,
+           gameSource: null !== (Eq = qq.source) && void 0 !== Eq ? Eq : ""
+         }))
+       }
+       takeStoredOwn(qq) {
+         if (this.playerPicked || this.eN) return;
+         if (this.ownChanges++, this.setOwn(jq(qq)), this.onGamePack) return;
+         const Eq = {
+           pack: this.playerPack,
+           gameSource: null
+         };
+         0 === this.changes ? this.state = Eq : this.change(Eq, !1)
+       }
+       async update() {
+         const qq = this.playerPack,
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L134-L141` → after: `L346-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L346-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/194.js#L346-L393) · [Before (L134-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/194.js#L134-L141)

```diff
-         if (fT.startsWith("data:")) try {
-           const TT = new Uint8Array((0, MT.t)(fT));
-           if (kT = (0, lT.b)(TT), null === kT) {
-             const {
-               json: cT,
-               bin: lT
-             } = (0, MT.D)(TT);
-             kT = CT(cT, lT, KT)
+         try {
+           Yq = jq(await this.host.fetchLatest(Eq))
+         } catch (Oq) {
+           return void this.host.warn(`texture pack ${Eq} didn't update to version ${gq}`, Oq)
+         }
+         null === Yq || this.eN || this.playerPack !== qq || (this.ownChanges++, this.setOwn(Yq), this.onGamePack || this.change({
+           pack: Yq,
+           gameSource: null
+         }, !1), await this.storePlayerPack(Yq) && this.announce())
+       }
+       announce() {
+         const qq = (0, xq.b)();
+         null !== qq && this.ownAnnouncements.add(qq)
+       }
+       setOwn(qq) {
+         this.playerPack = qq;
+ ... (32 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L143-L156` → after: `L395-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L395-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/194.js#L395-L437) · [Before (L143-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/194.js#L143-L156)

```diff
-         } catch {
-           kT = "is not a binary glTF 2.0 file"
-         } else kT = "loads data from outside the file";
-         kT && (OT[yT] = kT, cT && console.warn(tT(TT, yT, kT)))
-       }
-       return OT
-     }
- 
-     function NT(TT, kT) {
-       const cT = Object.keys(kT);
-       if (0 === cT.length) return null;
-       if (1 === cT.length) return tT(TT, cT[0], kT[cT[0]]);
-       const lT = cT.map((TT => `"${TT}" ${kT[TT]}`)).join("; ");
-       return `Texture pack "${TT}": ${cT.length} models were not loaded (${lT}). The default models are used instead.`
+         }
+       }
+     }
+     async function Vq(qq, Eq, gq) {
+       const Yq = (0, Aq.c)(await gq.fetchPack(Eq));
+       if (null !== Yq) return {
+         pack: Yq,
+         key: Eq
+       };
+       const lq = await gq.packKey(qq);
+       if (null === lq) return null;
+       const Oq = (0, Aq.c)(await gq.fetchPack(lq));
+       if (null === Oq) throw new Error(`no texture pack at ${lq}`);
+       return {
+         pack: Oq,
+         key: lq
+ ... (27 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/195.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/195.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985)

#### 1. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L4-L8` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/195.js#L4-L9) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/195.js#L4-L8)

```diff
-   9429: (TT, kT, cT) => {
-     cT.d(kT, {
-       b: () => HT,
-       c: () => oT,
-       f: () => JT
+   9348: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       packDisplayName: () => aq,
+       packModelMessage: () => Vq,
+       packModelSummary: () => jq,
+       refusedPackModels: () => dq
```

#### 2. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L10-L67` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/195.js#L11-L18) · [Before (L10-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/195.js#L10-L67)

```diff
-     var lT = cT(9438);
-     const MT = {
-         fileBytes: 4194304,
-         vertices: 65535,
-         indices: 196608,
-         accessorElements: 196608,
-         primitives: 64,
-         nodes: 128,
-         meshes: 64,
-         materials: 8,
-         images: 8,
-         imageSide: 1024
-       },
-       KT = {
-         items: 1024,
-         perFile: 1024,
- ... (42 more removed lines; see GitHub link above)
+     var Yq = gq(9351),
+       lq = gq(9358);
+     const Oq = "DRACO",
+       mq = 0,
+       xq = 1,
+       Aq = 0,
+       cq = 1,
+       uq = 32768;
```

#### 3. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L70-L116` → after: `L21-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L21-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/195.js#L21-L91) · [Before (L70-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/195.js#L70-L116)

```diff
-       return TT.toLocaleString("en-US")
-     }
- 
-     function NT(TT, kT, cT) {
-       return TT > kT ? `has ${hT(TT)} ${cT} (the limit is ${hT(kT)})` : null
-     }
- 
-     function QT(TT, kT) {
-       return Number.isInteger(TT) && TT >= 0 && TT < (null !== kT && void 0 !== kT ? kT : 0)
-     }
- 
-     function ST(TT) {
-       return Number.isInteger(TT) && TT >= 0
-     }
- 
-     function DT(TT, kT) {
- ... (31 more removed lines; see GitHub link above)
+       const Eq = new DataView(qq.buffer, qq.byteOffset, qq.byteLength);
+       let gq = 0;
+       const Yq = () => {
+           if (gq >= qq.byteLength) throw new RangeError("past the stream");
+           return qq[gq++]
+         },
+         lq = () => {
+           if (gq + 4 > qq.byteLength) throw new RangeError("past the stream");
+           const Yq = Eq.getUint32(gq, !0);
+           return gq += 4, Yq
+         },
+         Bq = () => {
+           let qq = 0;
+           for (let Eq = 0; Eq < 35; Eq += 7) {
+             const gq = Yq();
+             if (qq += (127 & gq) * 2 ** Eq, 0 === (128 & gq)) return qq
+ ... (55 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L121-L124` → after: `L96-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L96-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/195.js#L96-L148) · [Before (L121-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/195.js#L121-L124)

```diff
-       const KT = null === (lT = TT.bufferViews) || void 0 === lT ? void 0 : lT[cT];
-       if (!KT || !kT || 0 !== KT.buffer) return null;
-       const OT = null !== (MT = KT.byteOffset) && void 0 !== MT ? MT : 0;
-       return !ST(OT) || !ST(KT.byteLength) || OT + KT.byteLength > kT.byteLength ? null : kT.subarray(OT, OT + KT.byteLength)
+       if (null === (Yq = null === (lq = qq.extensionsUsed) || void 0 === lq ? void 0 : lq.includes("KHR_draco_mesh_compression")) || void 0 === Yq || !Yq) return null;
+       for (const aq of null !== (Oq = qq.meshes) && void 0 !== Oq ? Oq : []) {
+         var Oq;
+         for (const Yq of aq.primitives) {
+           var mq, xq, Aq, cq, uq, Wq;
+           const lq = null === (mq = Yq.extensions) || void 0 === mq ? void 0 : mq.KHR_draco_mesh_compression;
+           if ("object" !== typeof lq || null === lq) continue;
+           const Oq = null === (xq = qq.bufferViews) || void 0 === xq ? void 0 : xq[lq.bufferView];
+           if (null === Eq || void 0 === Oq) return Nq;
+           const aq = null !== (Aq = Oq.byteOffset) && void 0 !== Aq ? Aq : 0,
+             Vq = Bq(Eq.subarray(aq, aq + Oq.byteLength));
+           if (null === Vq && !gq) continue;
+           const dq = null !== (cq = qq.accessors) && void 0 !== cq ? cq : [],
+             jq = null === (uq = dq[Yq.attributes.POSITION]) || void 0 === uq ? void 0 : uq.count,
+             Hq = void 0 === Yq.indices ? 0 : null === (Wq = dq[Yq.indices]) || void 0 === Wq ? void 0 : Wq.count;
+           if (null === Vq || void 0 === jq || void 0 === Hq || 3 * Vq.faces !== Hq || Vq.vertices > jq) return Nq
+ ... (37 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L128-L554` → after: `L152-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L152-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/195.js#L152-L156) · [Before (L128-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/195.js#L128-L554)

```diff
-       var cT, MT, KT;
-       const OT = lT.p[kT.type],
-         yT = lT.e[kT.componentType];
-       if (!OT || !yT || !Number.isInteger(kT.count) || kT.count < 0) return !1;
-       if (void 0 === kT.bufferView) return !0;
-       const fT = null === (cT = TT.bufferViews) || void 0 === cT ? void 0 : cT[kT.bufferView],
-         xT = null !== (MT = kT.byteOffset) && void 0 !== MT ? MT : 0;
-       if (!fT || !ST(xT) || xT % yT !== 0) return !1;
-       const IT = OT * yT,
-         AT = null !== (KT = fT.byteStride) && void 0 !== KT ? KT : IT;
-       if (AT < IT) return !1;
-       return (0 === kT.count ? 0 : xT + AT * (kT.count - 1) + IT) <= fT.byteLength
-     }
- 
-     function JT(TT) {
-       return TT > MT.fileBytes ? `is ${(TT/OT).toFixed(1)} MiB (the limit is ${MT.fileBytes/OT} MiB)` : null
- ... (411 more removed lines; see GitHub link above)
+       const gq = Object.keys(Eq);
+       if (0 === gq.length) return null;
+       if (1 === gq.length) return Vq(qq, gq[0], Eq[gq[0]]);
+       const Yq = gq.map((qq => `"${qq}" ${Eq[qq]}`)).join("; ");
+       return `Texture pack "${qq}": ${gq.length} models were not loaded (${Yq}). The default models are used instead.`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/196.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/196.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38)

#### 1. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/196.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/196.js#L4)

```diff
-   9542: (TT, kT, cT) => {
+   9351: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L6-L7` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/196.js#L6-L8) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/196.js#L6-L7)

```diff
-       b: () => MT,
-       e: () => KT
+       d: () => fq,
+       f: () => Zq,
+       h: () => iq
```

#### 3. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L9-L1367` → after: `L10-L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L10-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/196.js#L10-L555) · [Before (L9-L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/196.js#L9-L1367)

```diff
-     var lT = cT(9495);
-     const MT = "Air",
-       KT = Object.freeze(new lT.d(MT, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
-   },
-   27165: TT => {
-     TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
-   },
-   33283: TT => {
-     TT.exports = "data:model/gltf-binary;base64,Z2xURgIAAADsSwAAtDQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjM2fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlw … [truncated]
-   },
-   33291: TT => {
-     TT.exports = "data:model/gltf-binary;base64,Z2xURgIAAABkWAAACBEAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiZXh0cmFzIjp7ImJsb3hkQnVpbGRIYXNoIjoiZDk5YzM4OTQifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyNSwi … [truncated]
-   },
-   27169: TT => {
-     TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
-   },
- ... (1343 more removed lines; see GitHub link above)
+     var Yq = gq(9358);
+     const lq = {
+         fileBytes: 4194304,
+         vertices: 65535,
+         indices: 196608,
+         accessorElements: 196608,
+         primitives: 64,
+         nodes: 128,
+         meshes: 64,
+         materials: 8,
+         images: 8,
+         imageSide: 1024
+       },
+       Oq = {
+         items: 1024,
+         perFile: 1024,
+ ... (530 more added lines; see GitHub link above)
```
