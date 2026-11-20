# Changed — Bundle Modifications Report (Part 034 / 067)

- **Updated at**: `2026-11-20T22:47 JST`
- **Part**: `34 / 67` (**345** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 033](part-033.md) · [Part 035 →](part-035.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/70.js` (7rj44.0704ff61 → qepqb8.0352199c · continued)

- **File**: `bundles/bloxd.io/chunks/js/70.js` (1640 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2)

#### 1356. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7178-L7186` → after: `L10843-L10863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10843-L10863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10843-L10863) · [Before (L7178-L7186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7178-L7186)

```diff
-         "Red Snapper": {
-           displayName: {
-             translationKey: "item:redSnapper"
-           },
-           type: "Item",
-           textureInfo: "red_snapper",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "Weapon Lucky Block": {
+           displayName: {
+             translationKey: "item:weaponLuckyBlock"
+           },
+           ttb: 1200,
+           textureInfo: ["red_lucky_block", "weapon_lucky_block"],
+           texturePerSide: [1, 1, 0, 0, 0, 0],
+           harvestType: "rock"
+         },
+         "Boiling Pot": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           itemTexture: "boiling_pot",
+           blockModel: "boiling_pot",
+           blockModelItem: !0,
+ ... (5 more added lines; see GitHub link above)
```

#### 1357. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7188-L7196` → after: `L10865-L10876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10865-L10876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10865-L10876) · [Before (L7188-L7196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7188-L7196)

```diff
-         "Reedglass Minnow": {
-           displayName: {
-             translationKey: "item:reedglassMinnow"
-           },
-           type: "Item",
-           textureInfo: "reedglass_minnow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "Chopping Board": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           itemTexture: "chopping_board",
+           blockModel: "chopping_board",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1358. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7198-L7206` → after: `L10878-L10889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10878-L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10878-L10889) · [Before (L7198-L7206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7198-L7206)

```diff
-         "Reef Sardine": {
-           displayName: {
-             translationKey: "item:reefSardine"
-           },
-           type: "Item",
-           textureInfo: "reef_sardine",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "Frying Pan": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           itemTexture: "frying_pan",
+           blockModel: "frying_pan",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1359. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7208-L7216` → after: `L10891-L10902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10891-L10902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10891-L10902) · [Before (L7208-L7216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7208-L7216)

```diff
-         "Root Perch": {
-           displayName: {
-             translationKey: "item:rootPerch"
-           },
-           type: "Item",
-           textureInfo: "root_perch",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "Hob Boiling": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           itemTexture: "hob_boiling",
+           blockModel: "hob_boiling",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1360. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7218-L7226` → after: `L10904-L10915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10904-L10915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10904-L10915) · [Before (L7218-L7226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7218-L7226)

```diff
-         "Rust Scad": {
-           displayName: {
-             translationKey: "item:rustScad"
-           },
-           type: "Item",
-           textureInfo: "rust_scad",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "Hob Frying": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           itemTexture: "hob_frying",
+           blockModel: "hob_frying",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1361. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7228-L7236` → after: `L10917-L10928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10917-L10928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10917-L10928) · [Before (L7228-L7236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7228-L7236)

```diff
-         Seahorse: {
-           displayName: {
-             translationKey: "item:seahorse"
-           },
-           type: "Item",
-           textureInfo: "seahorse",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "Kitchen Worktop": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           itemTexture: "kitchen_worktop",
+           blockModel: "kitchen_worktop",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1362. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7238-L7246` → after: `L10930-L10941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10930-L10941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10930-L10941) · [Before (L7238-L7246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7238-L7246)

```diff
-         Snakehead: {
-           displayName: {
-             translationKey: "item:snakehead"
-           },
-           type: "Item",
-           textureInfo: "snakehead",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "Slicing Board": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           itemTexture: "slicing_board",
+           blockModel: "slicing_board",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1363. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7248` → after: `L10943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10943) · [Before (L7248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7248)

```diff
-         "Spined Stickleback": {
+         ...(0, av.Jb)("Wood Trophy", {
```

#### 1364. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7250` → after: `L10945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10945) · [Before (L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7250)

```diff
-             translationKey: "item:spinedStickleback"
+             translationKey: "item:woodTrophy"
```

#### 1365. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7252-L7260` → after: `L10947-L10954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10947-L10954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10947-L10954) · [Before (L7252-L7260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7252-L7260)

```diff
-           type: "Item",
-           textureInfo: "spined_stickleback",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Stone Grouper": {
-           displayName: {
-             translationKey: "item:stoneGrouper"
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "rotatable",
+           itemTexture: "wood_trophy",
+           rootMetaDesc: "Wood Trophy|meta|rot1",
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
```

#### 1366. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7262-L7266` → after: `L10956-L11069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10956-L11069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10956-L11069) · [Before (L7262-L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7262-L7266)

```diff
-           type: "Item",
-           textureInfo: "stone_grouper",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           blockModel: "Wood Trophy"
+         }),
+         "INTERNAL_MESH_Wood Trophy": {
+           ttb: 2e3,
+           harvestType: "wood",
+           blockModel: "Wood Trophy",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1
+         },
+         ...(0, av.Jb)("Stone Trophy", {
+           displayName: {
+             translationKey: "item:stoneTrophy"
+           },
+           ttb: 2e3,
+           harvestType: "rock",
+ ... (98 more added lines; see GitHub link above)
```

#### 1367. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7268-L7276` → after: `L11071-L11081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11071-L11081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11071-L11081) · [Before (L7268-L7276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7268-L7276)

```diff
-         "Sumpback Carp": {
-           displayName: {
-             translationKey: "item:sumpbackCarp"
-           },
-           type: "Item",
-           textureInfo: "sumpback_carp",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "Blue Wave": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           blockModel: "wave_blue",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1368. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7278-L7286` → after: `L11083-L11093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11083-L11093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11083-L11093) · [Before (L7278-L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7278-L7286)

```diff
-         "Sunset Minnow": {
-           displayName: {
-             translationKey: "item:sunsetMinnow"
-           },
-           type: "Item",
-           textureInfo: "sunset_minnow",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
+         "Brown Wave": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           blockModel: "wave_brown",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1369. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7288-L7296` → after: `L11095-L11105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11095-L11105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11095-L11105) · [Before (L7288-L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7288-L7296)

```diff
-         Tarpon: {
-           displayName: {
-             translationKey: "item:tarpon"
-           },
-           type: "Item",
-           textureInfo: "tarpon",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "Cyan Wave": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           blockModel: "wave_cyan",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1370. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7298-L7306` → after: `L11107-L11117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11107-L11117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11107-L11117) · [Before (L7298-L7306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7298-L7306)

```diff
-         "Threadfin Bream": {
-           displayName: {
-             translationKey: "item:threadfinBream"
-           },
-           type: "Item",
-           textureInfo: "threadfin_bream",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "Green Wave": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           blockModel: "wave_green",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1371. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7308-L7316` → after: `L11119-L11129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11119-L11129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11119-L11129) · [Before (L7308-L7316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7308-L7316)

```diff
-         "Tri-Pointed Needlefish": {
-           displayName: {
-             translationKey: "item:triPointedNeedlefish"
-           },
-           type: "Item",
-           textureInfo: "tri_pointed_needlefish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "Grey Wave": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           blockModel: "wave_grey",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1372. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7318-L7326` → after: `L11131-L11141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11131-L11141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11131-L11141) · [Before (L7318-L7326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7318-L7326)

```diff
-         "Game Dev Fish": {
-           displayName: {
-             translationKey: "item:gameDevFish"
-           },
-           type: "Item",
-           textureInfo: "ellie_fish",
-           weight: 1,
-           heldItemScale: 1.75,
-           stackable: !0
+         "Light Blue Wave": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           blockModel: "wave_light_blue",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1373. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7328-L7336` → after: `L11143-L11153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11143-L11153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11143-L11153) · [Before (L7328-L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7328-L7336)

```diff
-         "Armoured Searobin": {
-           displayName: {
-             translationKey: "item:armouredSearobin"
-           },
-           type: "Item",
-           textureInfo: "armoured_searobin",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "Light Grey Wave": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           blockModel: "wave_light_grey",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1374. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7338-L7346` → after: `L11155-L11165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11155-L11165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11155-L11165) · [Before (L7338-L7346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7338-L7346)

```diff
-         "Ash Lionfish": {
-           displayName: {
-             translationKey: "item:ashLionfish"
-           },
-           type: "Item",
-           textureInfo: "ash_lionfish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "Lime Wave": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           blockModel: "wave_lime",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1375. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7348-L7356` → after: `L11167-L11177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11167-L11177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11167-L11177) · [Before (L7348-L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7348-L7356)

```diff
-         "Barefrost Toothfish": {
-           displayName: {
-             translationKey: "item:barefrostToothfish"
-           },
-           type: "Item",
-           textureInfo: "barefrost_toothfish",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !0
+         "Magenta Wave": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           blockModel: "wave_magenta",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1376. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7358-L7366` → after: `L11179-L11189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11179-L11189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11179-L11189) · [Before (L7358-L7366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7358-L7366)

```diff
-         "Blackfin Icefish": {
-           displayName: {
-             translationKey: "item:blackfinIcefish"
-           },
-           type: "Item",
-           textureInfo: "blackfin_icefish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "Orange Wave": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           blockModel: "wave_orange",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1377. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7368-L7376` → after: `L11191-L11201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11191-L11201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11191-L11201) · [Before (L7368-L7376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7368-L7376)

```diff
-         "Basalt Pipefish": {
-           displayName: {
-             translationKey: "item:basaltPipefish"
-           },
-           type: "Item",
-           textureInfo: "basalt_pipefish",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
+         "Pink Wave": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           blockModel: "wave_pink",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1378. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7378-L7386` → after: `L11203-L11213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11203-L11213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11203-L11213) · [Before (L7378-L7386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7378-L7386)

```diff
-         "Brimstone Spikefish": {
-           displayName: {
-             translationKey: "item:brimstoneSpikefish"
-           },
-           type: "Item",
-           textureInfo: "brimstone_spikefish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "Purple Wave": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           blockModel: "wave_purple",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1379. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7388-L7396` → after: `L11215-L11225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11215-L11225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11215-L11225) · [Before (L7388-L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7388-L7396)

```diff
-         "Cinder Leviathan": {
-           displayName: {
-             translationKey: "item:cinderLeviathan"
-           },
-           type: "Item",
-           textureInfo: "cinder_leviathan",
-           weight: 1,
-           heldItemScale: 3,
-           stackable: !0
+         "Red Wave": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           blockModel: "wave_red",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1380. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7398-L7406` → after: `L11227-L11237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11227-L11237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11227-L11237) · [Before (L7398-L7406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7398-L7406)

```diff
-         "Crowned Flame Angelfish": {
-           displayName: {
-             translationKey: "item:crownedFlameAngelfish"
-           },
-           type: "Item",
-           textureInfo: "crowned_flame_angelfish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "White Wave": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           blockModel: "wave_white",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1381. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7408-L7416` → after: `L11239-L11249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11239-L11249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11239-L11249) · [Before (L7408-L7416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7408-L7416)

```diff
-         "Deepwater Lanternfish": {
-           displayName: {
-             translationKey: "item:deepwaterLanternfish"
-           },
-           type: "Item",
-           textureInfo: "deepwater_lanternfish",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
+         "Yellow Wave": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           blockModel: "wave_yellow",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1382. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7418` → after: `L11251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11251) · [Before (L7418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7418)

```diff
-         "Driftice Capelin": {
+         ...(0, av.Jb)("White Directional Arrow", {
```

#### 1383. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7420` → after: `L11253-L11256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11253-L11256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11253-L11256) · [Before (L7420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7420)

```diff
-             translationKey: "item:drifticeCapelin"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:white)"
+             }
```

#### 1384. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7422-L7428` → after: `L11258-L11270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11258-L11270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11258-L11270) · [Before (L7422-L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7422-L7428)

```diff
-           type: "Item",
-           textureInfo: "driftice_capelin",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
-         },
-         "Ember Chub": {
+           ttb: 400,
+           itemTexture: "white_directional_arrow",
+           model: "rotatable",
+           harvestType: "cuttable",
+           rootMetaDesc: "White Directional Arrow|meta|rot1",
+           solid: !1,
+           blockModel: "White Directional Arrow",
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           }
+         }),
+         ...(0, av.Jb)("Orange Directional Arrow", {
```

#### 1385. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7430` → after: `L11272-L11275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11272-L11275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11272-L11275) · [Before (L7430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7430)

```diff
-             translationKey: "item:emberChub"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:orange)"
+             }
```

#### 1386. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7432-L7438` → after: `L11277-L11289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11277-L11289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11277-L11289) · [Before (L7432-L7438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7432-L7438)

```diff
-           type: "Item",
-           textureInfo: "ember_chub",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
-         },
-         "Embermark Wrasse": {
+           ttb: 400,
+           itemTexture: "orange_directional_arrow",
+           model: "rotatable",
+           harvestType: "cuttable",
+           rootMetaDesc: "Orange Directional Arrow|meta|rot1",
+           solid: !1,
+           blockModel: "Orange Directional Arrow",
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           }
+         }),
+         ...(0, av.Jb)("Magenta Directional Arrow", {
```

#### 1387. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7440` → after: `L11291-L11294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11291-L11294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11291-L11294) · [Before (L7440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7440)

```diff
-             translationKey: "item:embermarkWrasse"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:magenta)"
+             }
```

#### 1388. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7442-L7448` → after: `L11296-L11308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11296-L11308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11296-L11308) · [Before (L7442-L7448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7442-L7448)

```diff
-           type: "Item",
-           textureInfo: "embermark_wrasse",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Eviota Vader": {
+           ttb: 400,
+           itemTexture: "magenta_directional_arrow",
+           model: "rotatable",
+           harvestType: "cuttable",
+           rootMetaDesc: "Magenta Directional Arrow|meta|rot1",
+           solid: !1,
+           blockModel: "Magenta Directional Arrow",
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           }
+         }),
+         ...(0, av.Jb)("Light Blue Directional Arrow", {
```

#### 1389. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7450` → after: `L11310-L11313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11310-L11313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11310-L11313) · [Before (L7450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7450)

```diff
-             translationKey: "item:eviotaVader"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:light_blue)"
+             }
```

#### 1390. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7452-L7458` → after: `L11315-L11327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11315-L11327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11315-L11327) · [Before (L7452-L7458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7452-L7458)

```diff
-           type: "Item",
-           textureInfo: "eviota_vader",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
-         },
-         "Frost Herring": {
+           ttb: 400,
+           itemTexture: "light_blue_directional_arrow",
+           model: "rotatable",
+           harvestType: "cuttable",
+           rootMetaDesc: "Light Blue Directional Arrow|meta|rot1",
+           solid: !1,
+           blockModel: "Light Blue Directional Arrow",
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           }
+         }),
+         ...(0, av.Jb)("Yellow Directional Arrow", {
```

#### 1391. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7460` → after: `L11329-L11332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11329-L11332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11329-L11332) · [Before (L7460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7460)

```diff
-             translationKey: "item:frostHerring"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:yellow)"
+             }
```

#### 1392. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7462-L7468` → after: `L11334-L11346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11334-L11346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11334-L11346) · [Before (L7462-L7468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7462-L7468)

```diff
-           type: "Item",
-           textureInfo: "frost_herring",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
-         },
-         "Frost Wolf Eel": {
+           ttb: 400,
+           itemTexture: "yellow_directional_arrow",
+           model: "rotatable",
+           harvestType: "cuttable",
+           rootMetaDesc: "Yellow Directional Arrow|meta|rot1",
+           solid: !1,
+           blockModel: "Yellow Directional Arrow",
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           }
+         }),
+         ...(0, av.Jb)("Lime Directional Arrow", {
```

#### 1393. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7470` → after: `L11348-L11351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11348-L11351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11348-L11351) · [Before (L7470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7470)

```diff
-             translationKey: "item:frostWolfEel"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:lime)"
+             }
```

#### 1394. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7472-L7528` → after: `L11353-L11365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11353-L11365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11353-L11365) · [Before (L7472-L7528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7472-L7528)

```diff
-           type: "Item",
-           textureInfo: "frost_wolf_eel",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !0
-         },
-         "Frostpaint Notie": {
-           displayName: {
-             translationKey: "item:frostpaintNotie"
-           },
-           type: "Item",
-           textureInfo: "frostpaint_notie",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
- ... (41 more removed lines; see GitHub link above)
+           ttb: 400,
+           itemTexture: "lime_directional_arrow",
+           model: "rotatable",
+           harvestType: "cuttable",
+           rootMetaDesc: "Lime Directional Arrow|meta|rot1",
+           solid: !1,
+           blockModel: "Lime Directional Arrow",
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           }
+         }),
+         ...(0, av.Jb)("Pink Directional Arrow", {
```

#### 1395. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7530` → after: `L11367-L11370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11367-L11370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11367-L11370) · [Before (L7530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7530)

```diff
-             translationKey: "item:heatwarpFlounder"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:pink)"
+             }
```

#### 1396. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7532-L7538` → after: `L11372-L11384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11372-L11384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11372-L11384) · [Before (L7532-L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7532-L7538)

```diff
-           type: "Item",
-           textureInfo: "heatwarp_flounder",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         Hatchetfish: {
+           ttb: 400,
+           itemTexture: "pink_directional_arrow",
+           model: "rotatable",
+           harvestType: "cuttable",
+           rootMetaDesc: "Pink Directional Arrow|meta|rot1",
+           solid: !1,
+           blockModel: "Pink Directional Arrow",
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           }
+         }),
+         ...(0, av.Jb)("Grey Directional Arrow", {
```

#### 1397. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7540` → after: `L11386-L11389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11386-L11389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11386-L11389) · [Before (L7540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7540)

```diff
-             translationKey: "item:hatchetfish"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:gray)"
+             }
```

#### 1398. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7542-L7548` → after: `L11391-L11403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11391-L11403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11391-L11403) · [Before (L7542-L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7542-L7548)

```diff
-           type: "Item",
-           textureInfo: "hatchetfish",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
-         },
-         "Ice Spined Notothenia": {
+           ttb: 400,
+           itemTexture: "grey_directional_arrow",
+           model: "rotatable",
+           harvestType: "cuttable",
+           rootMetaDesc: "Grey Directional Arrow|meta|rot1",
+           solid: !1,
+           blockModel: "Grey Directional Arrow",
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           }
+         }),
+         ...(0, av.Jb)("Light Grey Directional Arrow", {
```

#### 1399. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7550` → after: `L11405-L11408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11405-L11408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11405-L11408) · [Before (L7550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7550)

```diff
-             translationKey: "item:iceSpinedNotothenia"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:light_gray)"
+             }
```

#### 1400. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7552-L7558` → after: `L11410-L11422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11410-L11422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11410-L11422) · [Before (L7552-L7558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7552-L7558)

```diff
-           type: "Item",
-           textureInfo: "ice_spined_notothenia",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Iceshelf Skate": {
+           ttb: 400,
+           itemTexture: "light_grey_directional_arrow",
+           model: "rotatable",
+           harvestType: "cuttable",
+           rootMetaDesc: "Light Grey Directional Arrow|meta|rot1",
+           solid: !1,
+           blockModel: "Light Grey Directional Arrow",
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           }
+         }),
+         ...(0, av.Jb)("Cyan Directional Arrow", {
```

#### 1401. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7560` → after: `L11424-L11427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11424-L11427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11424-L11427) · [Before (L7560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7560)

```diff
-             translationKey: "item:iceshelfSkate"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:cyan)"
+             }
```

#### 1402. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7562-L7568` → after: `L11429-L11441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11429-L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11429-L11441) · [Before (L7562-L7568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7562-L7568)

```diff
-           type: "Item",
-           textureInfo: "iceshelf_skate",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !0
-         },
-         "Icy Sculpin": {
+           ttb: 400,
+           itemTexture: "cyan_directional_arrow",
+           model: "rotatable",
+           harvestType: "cuttable",
+           rootMetaDesc: "Cyan Directional Arrow|meta|rot1",
+           solid: !1,
+           blockModel: "Cyan Directional Arrow",
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           }
+         }),
+         ...(0, av.Jb)("Purple Directional Arrow", {
```

#### 1403. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7570` → after: `L11443-L11446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11443-L11446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11443-L11446) · [Before (L7570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7570)

```diff
-             translationKey: "item:icySculpin"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:purple)"
+             }
```

#### 1404. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7572-L7578` → after: `L11448-L11460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11448-L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11448-L11460) · [Before (L7572-L7578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7572-L7578)

```diff
-           type: "Item",
-           textureInfo: "icy_sculpin",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
-         },
-         "Lavaflow Trout": {
+           ttb: 400,
+           itemTexture: "purple_directional_arrow",
+           model: "rotatable",
+           harvestType: "cuttable",
+           rootMetaDesc: "Purple Directional Arrow|meta|rot1",
+           solid: !1,
+           blockModel: "Purple Directional Arrow",
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           }
+         }),
+         ...(0, av.Jb)("Blue Directional Arrow", {
```

#### 1405. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7580` → after: `L11462-L11465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11462-L11465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11462-L11465) · [Before (L7580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7580)

```diff
-             translationKey: "item:lavaflowTrout"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:blue)"
+             }
```

#### 1406. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7582-L7588` → after: `L11467-L11479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11467-L11479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11467-L11479) · [Before (L7582-L7588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7582-L7588)

```diff
-           type: "Item",
-           textureInfo: "lavaflow_trout",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Lavawake Slopefish": {
+           ttb: 400,
+           itemTexture: "blue_directional_arrow",
+           model: "rotatable",
+           harvestType: "cuttable",
+           rootMetaDesc: "Blue Directional Arrow|meta|rot1",
+           solid: !1,
+           blockModel: "Blue Directional Arrow",
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           }
+         }),
+         ...(0, av.Jb)("Brown Directional Arrow", {
```

#### 1407. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7590` → after: `L11481-L11484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11481-L11484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11481-L11484) · [Before (L7590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7590)

```diff
-             translationKey: "item:lavawakeSlopefish"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:brown)"
+             }
```

#### 1408. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7592-L7598` → after: `L11486-L11498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11486-L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11486-L11498) · [Before (L7592-L7598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7592-L7598)

```diff
-           type: "Item",
-           textureInfo: "lavawake_slopefish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Magma Sardinella": {
+           ttb: 400,
+           itemTexture: "brown_directional_arrow",
+           model: "rotatable",
+           harvestType: "cuttable",
+           rootMetaDesc: "Brown Directional Arrow|meta|rot1",
+           solid: !1,
+           blockModel: "Brown Directional Arrow",
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           }
+         }),
+         ...(0, av.Jb)("Green Directional Arrow", {
```

#### 1409. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7600` → after: `L11500-L11503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11500-L11503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11500-L11503) · [Before (L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7600)

```diff
-             translationKey: "item:magmaSardinella"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:green)"
+             }
```

#### 1410. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7602-L7608` → after: `L11505-L11517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11505-L11517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11505-L11517) · [Before (L7602-L7608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7602-L7608)

```diff
-           type: "Item",
-           textureInfo: "magma_sardinella",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
-         },
-         "Magma Trout": {
+           ttb: 400,
+           itemTexture: "green_directional_arrow",
+           model: "rotatable",
+           harvestType: "cuttable",
+           rootMetaDesc: "Green Directional Arrow|meta|rot1",
+           solid: !1,
+           blockModel: "Green Directional Arrow",
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           }
+         }),
+         ...(0, av.Jb)("Red Directional Arrow", {
```

#### 1411. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7610` → after: `L11519-L11522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11519-L11522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11519-L11522) · [Before (L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7610)

```diff
-             translationKey: "item:magmaTrout"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:red)"
+             }
```

#### 1412. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7612-L7618` → after: `L11524-L11536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11524-L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11524-L11536) · [Before (L7612-L7618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7612-L7618)

```diff
-           type: "Item",
-           textureInfo: "magma_trout",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Marbled Moray Cod": {
+           ttb: 400,
+           itemTexture: "red_directional_arrow",
+           model: "rotatable",
+           harvestType: "cuttable",
+           rootMetaDesc: "Red Directional Arrow|meta|rot1",
+           solid: !1,
+           blockModel: "Red Directional Arrow",
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           }
+         }),
+         ...(0, av.Jb)("Black Directional Arrow", {
```

#### 1413. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7620` → after: `L11538-L11541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11538-L11541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11538-L11541) · [Before (L7620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7620)

```diff
-             translationKey: "item:marbledMorayCod"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:black)"
+             }
```

#### 1414. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7622-L7626` → after: `L11543-L11603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11543-L11603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11543-L11603) · [Before (L7622-L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7622-L7626)

```diff
-           type: "Item",
-           textureInfo: "marbled_moray_cod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !0
+           ttb: 400,
+           itemTexture: "black_directional_arrow",
+           model: "rotatable",
+           harvestType: "cuttable",
+           rootMetaDesc: "Black Directional Arrow|meta|rot1",
+           solid: !1,
+           blockModel: "Black Directional Arrow",
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           }
+         }),
+         Bin: {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+ ... (45 more added lines; see GitHub link above)
```

#### 1415. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7628-L7636` → after: `L11605-L11616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11605-L11616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11605-L11616) · [Before (L7628-L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7628-L7636)

```diff
-         "Molten Lotella Cod": {
-           displayName: {
-             translationKey: "item:moltenLotellaCod"
-           },
-           type: "Item",
-           textureInfo: "molten_lotella_cod",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "John Beef Statue": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           itemTexture: "john_beef",
+           blockModel: "john_beef",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 3,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1416. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7638-L7646` → after: `L11618-L11629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11618-L11629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11618-L11629) · [Before (L7638-L7646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7638-L7646)

```diff
-         "Northern Wolffish": {
-           displayName: {
-             translationKey: "item:northernWolffish"
-           },
-           type: "Item",
-           textureInfo: "northern_wolffish",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !0
+         "67 Statue": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           itemTexture: "67",
+           blockModel: "67",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 3,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1417. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7648-L7656` → after: `L11631-L11642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11631-L11642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11631-L11642) · [Before (L7648-L7656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7648-L7656)

```diff
-         "Paleice Rockcod": {
-           displayName: {
-             translationKey: "item:paleiceRockcod"
-           },
-           type: "Item",
-           textureInfo: "paleice_rockcod",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "Coloured Wheel": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           itemTexture: "wheel",
+           blockModel: "wheel",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 4,
+           customModelInfo: {
+             yOffset: 0
+           }
```

#### 1418. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7658` → after: `L11644-L11853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11644-L11853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11644-L11853) · [Before (L7658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7658)

```diff
-         "Permafrost Halibut": {
+         UFO: {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           blockModel: "ufo",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1
+         },
+         ...(0, av.ob)("Torch", {
+           ttb: 300,
+           harvestType: "cuttable",
+           itemTexture: "torch",
+           solid: !1,
+           model: "CustomModel",
+           modelScale: 8,
+ ... (194 more added lines; see GitHub link above)
```

#### 1419. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7660` → after: `L11855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11855) · [Before (L7660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7660)

```diff
-             translationKey: "item:permafrostHalibut"
+             translationKey: "item:overgrownGrassBlock"
```

#### 1420. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7662-L7666` → after: `L11857-L11863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11857-L11863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11857-L11863) · [Before (L7662-L7666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7662-L7666)

```diff
-           type: "Item",
-           textureInfo: "permafrost_halibut",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !0
+           ttb: 720,
+           textureInfo: "grass_top",
+           harvestType: "granule",
+           soundType: {
+             break: "grass",
+             place: "grass"
+           }
```

#### 1421. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7668` → after: `L11865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11865) · [Before (L7668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7668)

```diff
-         Pithead: {
+         "Overgrown Pine Grass Block": {
```

#### 1422. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7670` → after: `L11867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11867) · [Before (L7670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7670)

```diff
-             translationKey: "item:pithead"
+             translationKey: "item:overgrownPineGrassBlock"
```

#### 1423. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7672-L7676` → after: `L11869-L11875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11869-L11875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11869-L11875) · [Before (L7672-L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7672-L7676)

```diff
-           type: "Item",
-           textureInfo: "pithead",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 720,
+           textureInfo: "pine_grass_block",
+           harvestType: "granule",
+           soundType: {
+             break: "grass",
+             place: "grass"
+           }
```

#### 1424. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7678` → after: `L11877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11877) · [Before (L7678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7678)

```diff
-         "Polarflash Electron": {
+         "Overgrown Jungle Grass Block": {
```

#### 1425. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7680` → after: `L11879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11879) · [Before (L7680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7680)

```diff
-             translationKey: "item:polarflashElectron"
+             translationKey: "item:overgrownJungleGrassBlock"
```

#### 1426. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7682-L7686` → after: `L11881-L11887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11881-L11887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11881-L11887) · [Before (L7682-L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7682-L7686)

```diff
-           type: "Item",
-           textureInfo: "polarflash_electron",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
+           ttb: 720,
+           textureInfo: "jungle_grass_block",
+           harvestType: "granule",
+           soundType: {
+             break: "grass",
+             place: "grass"
+           }
```

#### 1427. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7688-L7690` → after: `L11889-L11894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11889-L11894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11889-L11894) · [Before (L7688-L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7688-L7690)

```diff
-         "Pyroclast Eel": {
-           displayName: {
-             translationKey: "item:pyroclastEel"
+         "Smoke Block": {
+           displayName: "Smoke Block",
+           ttb: 100,
+           textureInfo: {
+             animTextures: ["smoke0", "smoke1", "smoke2", "smoke3"],
+             animationInterval: 400
```

#### 1428. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7692-L7696` → after: `L11896-L11899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11896-L11899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11896-L11899) · [Before (L7692-L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7692-L7696)

```diff
-           type: "Item",
-           textureInfo: "pyroclast_eel",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !0
+           transTex: !0,
+           solid: !1,
+           drops: null,
+           harvestType: "cuttable"
```

#### 1429. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7698` → after: `L11901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11901) · [Before (L7698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7698)

```diff
-         "Pyroscale Grouper": {
+         ...(0, av.vb)("Pipe", "pipe", {
```

#### 1430. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7700` → after: `L11903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11903) · [Before (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7700)

```diff
-             translationKey: "item:pyroscaleGrouper"
+             translationKey: "item:pipe"
```

#### 1431. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7702-L7710` → after: `L11905-L11906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11905-L11906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11905-L11906) · [Before (L7702-L7710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7702-L7710)

```diff
-           type: "Item",
-           textureInfo: "pyroscale_grouper",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !0
-         },
-         "Red Pyreside": {
-           displayName: {
-             translationKey: "item:redPyreside"
+           description: {
+             translationKey: "item:pipeDescription"
```

#### 1432. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7712-L7718` → after: `L11908-L11920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11908-L11920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11908-L11920) · [Before (L7712-L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7712-L7718)

```diff
-           type: "Item",
-           textureInfo: "red_pyreside",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Rimesnouted Lancetfish": {
+           ttb: 600,
+           itemTexture: "pipe",
+           model: "CustomModel",
+           harvestType: "rock",
+           solid: !1,
+           blockModelItem: !0,
+           modelScale: 8,
+           heldItemScale: 6,
+           particlesIgnoreBlack: !0,
+           rootMetaDesc: "Pipe|meta|conn|none"
+         }),
+         ...(0, av.u)(),
+         "Auto Crafter": {
```

#### 1433. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7720` → after: `L11922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11922) · [Before (L7720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7720)

```diff
-             translationKey: "item:rimesnoutedLancetfish"
+             translationKey: "item:autoCrafter"
```

#### 1434. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7722-L7730` → after: `L11924-L11925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11924-L11925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11924-L11925) · [Before (L7722-L7730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7722-L7730)

```diff
-           type: "Item",
-           textureInfo: "rimesnouted_lancetfish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Scorched Sunfish": {
-           displayName: {
-             translationKey: "item:scorchedSunfish"
+           description: {
+             translationKey: "item:autoCrafterDescription"
```

#### 1435. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7732-L7736` → after: `L11927-L11932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11927-L11932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11927-L11932) · [Before (L7732-L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7732-L7736)

```diff
-           type: "Item",
-           textureInfo: "scorched_sunfish",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !0
+           ttb: 3600,
+           textureInfo: ["autocrafter_side", "crafting_table_top", "autocrafter_bottom"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "rock",
+           particlesIgnoreBlack: !0,
+           altActionable: !0
```

#### 1436. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7738` → after: `L11934-L11935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11934-L11935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11934-L11935) · [Before (L7738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7738)

```diff
-         "Scored Dace": {
+         ...(0, av.Gb)(),
+         ...(0, av.vb)("Extractor Pipe", "extractor_pipe", {
```

#### 1437. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7740` → after: `L11937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11937) · [Before (L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7740)

```diff
-             translationKey: "item:scoredDace"
+             translationKey: "item:extractorPipe"
```

#### 1438. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7742-L7750` → after: `L11939-L11940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11939-L11940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11939-L11940) · [Before (L7742-L7750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7742-L7750)

```diff
-           type: "Item",
-           textureInfo: "scored_dace",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
-         },
-         "Silver Dragonfish": {
-           displayName: {
-             translationKey: "item:silverDragonfish"
+           description: {
+             translationKey: "item:extractorPipeDescription"
```

#### 1439. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7752-L7758` → after: `L11942-L11953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11942-L11953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11942-L11953) · [Before (L7752-L7758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7752-L7758)

```diff
-           type: "Item",
-           textureInfo: "silver_dragonfish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Snow Haddock": {
+           ttb: 600,
+           itemTexture: "extractor_pipe",
+           model: "CustomModel",
+           harvestType: "rock",
+           solid: !1,
+           modelScale: 8,
+           heldItemScale: 6,
+           blockModelItem: !0,
+           particlesIgnoreBlack: !0,
+           rootMetaDesc: "Extractor Pipe|meta|conn|none"
+         }),
+         "Splitter Pipe": {
```

#### 1440. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7760` → after: `L11955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11955) · [Before (L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7760)

```diff
-             translationKey: "item:snowHaddock"
+             translationKey: "item:splitterPipe"
```

#### 1441. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7762-L7770` → after: `L11957-L11958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11957-L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11957-L11958) · [Before (L7762-L7770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7762-L7770)

```diff
-           type: "Item",
-           textureInfo: "snow_haddock",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Volcanic Catfish": {
-           displayName: {
-             translationKey: "item:volcanicCatfish"
+           description: {
+             translationKey: "item:splitterPipeDescription"
```

#### 1442. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7772-L7776` → after: `L11960-L11969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11960-L11969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11960-L11969) · [Before (L7772-L7776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7772-L7776)

```diff
-           type: "Item",
-           textureInfo: "volcanic_catfish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 600,
+           itemTexture: "splitter_pipe",
+           model: "CustomModel",
+           blockModel: "splitter_pipe",
+           blockModelItem: !0,
+           harvestType: "rock",
+           solid: !1,
+           modelScale: 8,
+           heldItemScale: 6,
+           particlesIgnoreBlack: !0
```

#### 1443. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7778` → after: `L11971-L11972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11971-L11972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11971-L11972) · [Before (L7778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7778)

```diff
-         "Volcanic Semperi": {
+         ...(0, av.Sb)(),
+         ...(0, av.vb)("Wire", "wire", {
```

#### 1444. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7780` → after: `L11974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11974) · [Before (L7780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7780)

```diff
-             translationKey: "item:volcanicSemperi"
+             translationKey: "item:wire"
```

#### 1445. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7790` → after: `L11977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11977) · [Before (L7790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7790)

```diff
-             translationKey: "item:rustyRodDescription"
+             translationKey: "item:wireDescription"
```

#### 1446. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7793` → after: `L11992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11992) · [Before (L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7793)

```diff
-             translationKey: "item:rustyRod"
+             translationKey: "item:filterPipe"
```

#### 1447. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7806` → after: `L11995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R11995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L11995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L11995) · [Before (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7806)

```diff
-             translationKey: "item:luckyRodDescription"
+             translationKey: "item:filterPipeDescription"
```

#### 1448. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7809` → after: `L12011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12011) · [Before (L7809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7809)

```diff
-             translationKey: "item:luckyRod"
+             translationKey: "item:mergerPipe"
```

#### 1449. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7822-L7825` → after: `L12014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12014) · [Before (L7822-L7825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7822-L7825)

```diff
-             translationKey: "item:sturdyRodDescription"
-           },
-           displayName: {
-             translationKey: "item:sturdyRod"
+             translationKey: "item:mergerPipeDescription"
```

#### 1450. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7827-L7849` → after: `L12016-L12028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12016-L12028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12016-L12028) · [Before (L7827-L7849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7827-L7849)

```diff
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [5e3, 7e3]
-           },
-           textureInfo: "sturdy_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
-         },
-         "Jungle Rod": {
-           displayName: {
-             translationKey: "item:jungleRod"
-           },
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
- ... (7 more removed lines; see GitHub link above)
+           ttb: 600,
+           itemTexture: "merger_pipe",
+           model: "CustomModel",
+           harvestType: "rock",
+           solid: !1,
+           modelScale: 8,
+           heldItemScale: 6,
+           blockModelItem: !0,
+           particlesIgnoreBlack: !0,
+           altActionable: !0,
+           rootMetaDesc: "Merger Pipe|meta|output|none"
+         }),
+         "Auto Harvester": {
```

#### 1451. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7851` → after: `L12030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12030) · [Before (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7851)

```diff
-             translationKey: "item:draugrRod"
+             translationKey: "item:autoHarvester"
```

#### 1452. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7853-L7855` → after: `L12032-L12033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12032-L12033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12032-L12033) · [Before (L7853-L7855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7853-L7855)

```diff
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
+           description: {
+             translationKey: "item:autoHarvesterDescription"
```

#### 1453. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7857-L7860` → after: `L12035-L12040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12035-L12040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12035-L12040) · [Before (L7857-L7860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7857-L7860)

```diff
-           textureInfo: "draugr_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
+           ttb: 3600,
+           textureInfo: ["harvester_side0", "harvester_side1", "harvester_top", "harvester_bottom"],
+           texturePerSide: [0, 1, 2, 3, 0, 1],
+           harvestType: "rock",
+           particlesIgnoreBlack: !0,
+           altActionable: !0
```

#### 1454. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7862` → after: `L12042-L12043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12042-L12043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12042-L12043) · [Before (L7862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7862)

```diff
-         "Cursed Rod": {
+         ...(0, av.nb)("Stalker"),
+         "Lunite Ore": {
```

#### 1455. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7864-L7868` → after: `L12045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12045) · [Before (L7864-L7868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7864-L7868)

```diff
-             translationKey: "item:cursedRod"
-           },
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
+             translationKey: "item:luniteOre"
```

#### 1456. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7870-L7877` → after: `L12047-L12054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12047-L12054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12047-L12054) · [Before (L7870-L7877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7870-L7877)

```diff
-           textureInfo: "cursed_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
-         },
-         "Tangle Resistant Rod": {
-           displayName: {
-             translationKey: "item:tangleResistantRod"
+           ttb: 5e3,
+           textureInfo: "lunite_ore",
+           harvestType: "rock",
+           harvestLevel: 3,
+           drops: "Lunite",
+           specialToolDrop: {
+             tool: "Moonstone Pickaxe",
+             drops: "Lunite Ore"
```

#### 1457. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7879-L7881` → after: `L12056-L12057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12056-L12057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12056-L12057) · [Before (L7879-L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7879-L7881)

```diff
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
+           specialToolBonusDrops: {
+             "Golem Pickaxe": lv.o
```

#### 1458. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7890-L7897` → after: `L12060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12060) · [Before (L7890-L7897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7890-L7897)

```diff
-             translationKey: "item:speedRodDescription"
-           },
-           displayName: {
-             translationKey: "item:speedRod"
-           },
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
+             translationKey: "item:luniteOreDescription"
```

#### 1459. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7899-L7902` → after: `L12062-L12063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12062-L12063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12062-L12063) · [Before (L7899-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7899-L7902)

```diff
-           textureInfo: "speed_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
+           onMinedAura: 40,
+           sa: [10, 3, 12]
```

#### 1460. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7904` → after: `L12065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12065) · [Before (L7904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7904)

```diff
-         "Carbon Rod": {
+         "Block of Lunite": {
```

#### 1461. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7906` → after: `L12067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12067) · [Before (L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7906)

```diff
-             translationKey: "item:carbonRod"
+             translationKey: "item:blockOfLunite"
```

#### 1462. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7908-L7923` → after: `L12069-L12070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12069-L12070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12069-L12070) · [Before (L7908-L7923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7908-L7923)

```diff
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
-           },
-           textureInfo: "carbon_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
-         },
-         "Deep Sea Rod": {
-           displayName: {
-             translationKey: "item:deepSeaRod"
-           },
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
+           description: {
+             translationKey: "item:blockOfLuniteDescription"
```

#### 1463. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7925-L7928` → after: `L12072-L12074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12072-L12074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12072-L12074) · [Before (L7925-L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7925-L7928)

```diff
-           textureInfo: "deep_sea_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
+           ttb: 6750,
+           textureInfo: "lunite_block",
+           harvestType: "rock"
```

#### 1464. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7930` → after: `L12076-L12077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12076-L12077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12076-L12077) · [Before (L7930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7930)

```diff
-         "Master Rod": {
+         ...(0, av.$)(),
+         "Lunite Auto Crafter": {
```

#### 1465. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7932` → after: `L12079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12079) · [Before (L7932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7932)

```diff
-             translationKey: "item:masterRod"
+             translationKey: "item:luniteAutoCrafter"
```

#### 1466. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7934-L7936` → after: `L12081-L12082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12081-L12082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12081-L12082) · [Before (L7934-L7936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7934-L7936)

```diff
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
+           description: {
+             translationKey: "item:luniteAutoCrafterDescription"
```

#### 1467. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7938-L7941` → after: `L12084-L12089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12084-L12089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12084-L12089) · [Before (L7938-L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7938-L7941)

```diff
-           textureInfo: "master_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
+           ttb: 3600,
+           textureInfo: ["autocrafter_lunite_side", "crafting_table_top", "autocrafter_lunite_bottom"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "rock",
+           particlesIgnoreBlack: !0,
+           altActionable: !0
```

#### 1468. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7943` → after: `L12091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12091) · [Before (L7943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7943)

```diff
-         "Obsidian Rod": {
+         "Lunite Auto Harvester": {
```

#### 1469. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7945` → after: `L12093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12093) · [Before (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7945)

```diff
-             translationKey: "item:obsidianRod"
+             translationKey: "item:luniteAutoHarvester"
```

#### 1470. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7947-L7949` → after: `L12095-L12096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12095-L12096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12095-L12096) · [Before (L7947-L7949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7947-L7949)

```diff
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
+           description: {
+             translationKey: "item:luniteAutoHarvesterDescription"
```

#### 1471. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7951-L7954` → after: `L12098-L12103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12098-L12103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12098-L12103) · [Before (L7951-L7954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7951-L7954)

```diff
-           textureInfo: "obsidian_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
+           ttb: 3600,
+           textureInfo: ["harvester_lunite_side_0", "harvester_lunite_side_1", "harvester_lunite_top", "harvester_lunite_bottom"],
+           texturePerSide: [0, 1, 2, 3, 0, 1],
+           harvestType: "rock",
+           particlesIgnoreBlack: !0,
+           altActionable: !0
```

#### 1472. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7956` → after: `L12105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12105) · [Before (L7956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7956)

```diff
-         "Molten Magma Rod": {
+         "Bowling Alley Floor": {
```

#### 1473. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7958-L7962` → after: `L12107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12107) · [Before (L7958-L7962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7958-L7962)

```diff
-             translationKey: "item:moltenMagmaRod"
-           },
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
+             translationKey: "item:bowlingAlleyFloor"
```

#### 1474. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7964-L7967` → after: `L12109-L12115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12109-L12115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12109-L12115) · [Before (L7964-L7967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7964-L7967)

```diff
-           textureInfo: "molten_magma_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
+           ttb: 960,
+           textureInfo: "bowling_alley_floor",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 1475. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7969-L7980` → after: `L12117-L12120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12117-L12120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12117-L12120) · [Before (L7969-L7980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7969-L7980)

```diff
-         "Frost Rod": {
-           displayName: {
-             translationKey: "item:frostRod"
-           },
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
-           },
-           textureInfo: "frost_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
+         ...(0, av.nb)("Crone"),
+         ...(0, av.nb)("Slime"),
+         "Slime Trail|meta|rot1|Decaying": {
+           ...Gv
```

#### 1476. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7982-L7993` → after: `L12122-L12123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12122-L12123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12122-L12123) · [Before (L7982-L7993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7982-L7993)

```diff
-         "Black Ice Rod": {
-           displayName: {
-             translationKey: "item:blackIceRod"
-           },
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
-           },
-           textureInfo: "black_ice_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
+         "Slime Trail|meta|rot2|Decaying": {
+           ...Gv
```

#### 1477. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7995-L8006` → after: `L12125-L12126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12125-L12126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12125-L12126) · [Before (L7995-L8006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7995-L8006)

```diff
-         "Mythic Rod": {
-           displayName: {
-             translationKey: "item:mythicRod"
-           },
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
-           },
-           textureInfo: "mythic_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
+         "Slime Trail|meta|rot3|Decaying": {
+           ...Gv
```

#### 1478. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8008-L8025` → after: `L12128-L12129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12128-L12129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12128-L12129) · [Before (L8008-L8025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8008-L8025)

```diff
-         Acorn: {
-           displayName: {
-             translationKey: "item:acorn"
-           },
-           type: "Chargeable",
-           textureInfo: "acorn",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:acornDescription"
-           },
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 500,
- ... (2 more removed lines; see GitHub link above)
+         "Slime Trail|meta|rot4|Decaying": {
+           ...Gv
```

#### 1479. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8027` → after: `L12131-L12135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12131-L12135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12131-L12135) · [Before (L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8027)

```diff
-         "Acorn Jelly": {
+         ...(0, av.nb)("Iron Guardian"),
+         ...(0, av.nb)("Gold Guardian"),
+         ...(0, av.nb)("Diamond Guardian"),
+         ...(0, av.nb)("Moonstone Guardian"),
+         "Dry Grass Block": {
```

#### 1480. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8029-L8037` → after: `L12137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12137) · [Before (L8029-L8037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8029-L8037)

```diff
-             translationKey: "item:acornJelly"
-           },
-           type: "Chargeable",
-           textureInfo: "acorn_jelly",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:acornJellyDescription"
+             translationKey: "item:dryGrassBlock"
```

#### 1481. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8039-L8043` → after: `L12139-L12146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12139-L12146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12139-L12146) · [Before (L8039-L8043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8039-L8043)

```diff
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 750,
-           rootMetaDesc: "Acorn Jelly|meta|charging1"
+           ttb: 720,
+           textureInfo: ["dry_grass_block_side", "dry_grass_block", "dirt"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "granule",
+           soundType: {
+             break: "grass",
+             place: "grass"
+           }
```

#### 1482. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8045` → after: `L12148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12148) · [Before (L8045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8045)

```diff
-         "Cow's Milk": {
+         "Overgrown Dry Grass Block": {
```

#### 1483. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8047-L8055` → after: `L12150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12150) · [Before (L8047-L8055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8047-L8055)

```diff
-             translationKey: "item:cowsMilk"
-           },
-           type: "Chargeable",
-           textureInfo: "cows_milk",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:cowsMilkDescription"
+             translationKey: "item:overgrownDryGrassBlock"
```

#### 1484. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8057-L8062` → after: `L12152-L12158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12152-L12158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12152-L12158) · [Before (L8057-L8062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8057-L8062)

```diff
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           chargeTime: 500,
-           eatHealAmt: 3,
-           rootMetaDesc: "Cow's Milk|meta|charging1"
+           ttb: 720,
+           textureInfo: "dry_grass_block",
+           harvestType: "granule",
+           soundType: {
+             break: "grass",
+             place: "grass"
+           }
```

#### 1485. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8064` → after: `L12160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12160) · [Before (L8064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8064)

```diff
-         Cheese: {
+         "Dead Bush": {
```

#### 1486. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8066-L8074` → after: `L12162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12162) · [Before (L8066-L8074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8066-L8074)

```diff
-             translationKey: "item:cheese"
-           },
-           type: "Chargeable",
-           textureInfo: "cheese",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:cheeseDescription"
+             translationKey: "item:deadBush"
```

#### 1487. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8076-L8080` → after: `L12164-L12398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12164-L12398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12164-L12398) · [Before (L8076-L8080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8076-L8080)

```diff
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 750,
-           rootMetaDesc: "Cheese|meta|charging1"
+           ttb: 1,
+           textureInfo: "dead_bush",
+           model: "CentreCross",
+           heldItemScale: .5,
+           solid: !1,
+           drops: null,
+           harvestType: "cuttable",
+           specialToolDrop: {
+             tool: "Shears",
+             drops: "Dead Bush"
+           },
+           canBePlacedOver: !0
+         },
+         "Dirt|DryGrassRoots": {
+           ttb: 600,
+           textureInfo: "dirt",
+ ... (219 more added lines; see GitHub link above)
```

#### 1488. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8082` → after: `L12400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12400) · [Before (L8082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8082)

```diff
-         "Caught Fish": {
+         "Toxic Waste": {
```

#### 1489. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8084` → after: `L12402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12402) · [Before (L8084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8084)

```diff
-             translationKey: "item:caughtFish"
+             translationKey: "item:toxicWaste"
```

#### 1490. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8086-L8092` → after: `L12404-L12407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12404-L12407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12404-L12407) · [Before (L8086-L8092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8086-L8092)

```diff
-           type: "Chargeable",
-           textureInfo: "caught_fish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:caughtFishDescription"
+           textureInfo: {
+             colour: [.36, .93, .3, .95],
+             animTextures: ["toxic_waste0", "toxic_waste1", "toxic_waste2", "toxic_waste3", "toxic_waste4", "toxic_waste5", "toxic_waste6", "toxic_waste7"],
+             animationInterval: 800
```

#### 1491. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8094-L8099` → after: `L12409-L12412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12409-L12412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12409-L12412) · [Before (L8094-L8099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8094-L8099)

```diff
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 500,
-           eatHealAmt: 3,
-           rootMetaDesc: "Caught Fish|meta|charging1"
+           zw: !0,
+           drops: null,
+           harvestType: "rock",
+           sa: [6, 14, 4]
```

#### 1492. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8101` → after: `L12414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12414) · [Before (L8101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8101)

```diff
-         "Fish Fillet": {
+         "Ancient Maple Log": {
```

#### 1493. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8103` → after: `L12416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12416) · [Before (L8103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8103)

```diff
-             translationKey: "item:fishFillet"
+             translationKey: "item:ancientMapleLog"
```

#### 1494. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8111` → after: `L12419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12419) · [Before (L8111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8111)

```diff
-             translationKey: "item:fishFilletDescription"
+             translationKey: "item:ancientMapleLogDescription"
```

#### 1495. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8113-L8117` → after: `L12421-L12423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12421-L12423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12421-L12423) · [Before (L8113-L8117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8113-L8117)

```diff
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 750,
-           rootMetaDesc: "Fish Fillet|meta|charging1"
+           ttb: 2400,
+           textureInfo: "log_ancient_maple",
+           harvestType: "wood"
```

#### 1496. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8119` → after: `L12425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12425) · [Before (L8119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8119)

```diff
-         "Meaty Bone": {
+         "Evil Lucky Block": {
```

#### 1497. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8121` → after: `L12427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12427) · [Before (L8121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8121)

```diff
-             translationKey: "item:meatyBone"
+             translationKey: "item:evilLuckyBlock"
```

#### 1498. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8123-L8127` → after: `L12429-L12432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12429-L12432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12429-L12432) · [Before (L8123-L8127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8123-L8127)

```diff
-           type: "Chargeable",
-           textureInfo: "meaty_bone",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
+           ttb: 1200,
+           textureInfo: ["evil_lucky_block", "evil_lucky_block_face"],
+           texturePerSide: [1, 1, 0, 0, 0, 0],
+           harvestType: "rock",
```

#### 1499. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8129-L8136` → after: `L12434-L12435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12434-L12435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12434-L12435) · [Before (L8129-L8136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8129-L8136)

```diff
-             translationKey: "item:meatyBoneDescription"
-           },
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 500,
-           eatHealAmt: 3,
-           rootMetaDesc: "Meaty Bone|meta|charging1"
+             translationKey: "item:evilLuckyBlockDescription"
+           }
```

#### 1500. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8138-L8148` → after: `L12437-L12592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12437-L12592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12437-L12592) · [Before (L8138-L8148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8138-L8148)

```diff
-         "Blinding Pebble": {
-           displayName: {
-             translationKey: "item:blindingPebble"
-           },
-           type: "Item",
-           textureInfo: "blinding_pebble",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:blindingPebbleDescription"
+         ...(0, av.Wb)(fv),
+         "INTERNAL_MESH_Small Twin Icicle": {
+           ttb: 2e3,
+           harvestType: "rock",
+           blockModel: "Small Twin Icicle",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1,
+           drops: null
+         },
+         "INTERNAL_MESH_Medium Icicle": {
+           ttb: 2e3,
+           harvestType: "rock",
+           blockModel: "Medium Icicle",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+ ... (140 more added lines; see GitHub link above)
```

#### 1501. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8150` → after: `L12594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12594) · [Before (L8150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8150)

```diff
-           secondaryDamage: 15
+           sa: [9, 15, 5]
```

#### 1502. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8152-L8169` → after: `L12596-L12606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12596-L12606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12596-L12606) · [Before (L8152-L8169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8152-L8169)

```diff
-         "Sheep's Milk": {
-           displayName: {
-             translationKey: "item:sheepsMilk"
-           },
-           type: "Chargeable",
-           textureInfo: "sheeps_milk",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:sheepsMilkDescription"
-           },
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           chargeTime: 500,
- ... (2 more removed lines; see GitHub link above)
+         "Rope Block": {
+           displayName: {
+             translationKey: "item:ropeBlock"
+           },
+           ttb: 960,
+           textureInfo: "rope_block",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
```

#### 1503. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8171` → after: `L12608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12608) · [Before (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8171)

```diff
-         "Yoghurt Pot": {
+         Ash: {
```

#### 1504. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8173-L8181` → after: `L12610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12610) · [Before (L8173-L8181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8173-L8181)

```diff
-             translationKey: "item:yoghurtPot"
-           },
-           type: "Chargeable",
-           textureInfo: "yoghurt_pot",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:yoghurtPotDescription"
+             translationKey: "item:ash"
```

#### 1505. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8183-L8187` → after: `L12612-L12618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12612-L12618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12612-L12618) · [Before (L8183-L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8183-L8187)

```diff
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 750,
-           rootMetaDesc: "Yoghurt Pot|meta|charging1"
+           ttb: 600,
+           textureInfo: "ash",
+           harvestType: "granule",
+           soundType: {
+             break: "sand",
+             place: "sand"
+           }
```

#### 1506. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8189` → after: `L12620-L12621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12620-L12621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12620-L12621) · [Before (L8189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8189)

```diff
-         Truffle: {
+         ...(0, ev.h)(),
+         Darkstone: {
```

#### 1507. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8191-L8199` → after: `L12623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12623) · [Before (L8191-L8199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8191-L8199)

```diff
-             translationKey: "item:truffle"
-           },
-           type: "Chargeable",
-           textureInfo: "truffle",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:truffleDescription"
+             translationKey: "item:darkstone"
```

#### 1508. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8201-L8206` → after: `L12625-L12627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12625-L12627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12625-L12627) · [Before (L8201-L8206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8201-L8206)

```diff
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 500,
-           eatHealAmt: 3,
-           rootMetaDesc: "Truffle|meta|charging1"
+           ttb: 1800,
+           textureInfo: "darkstone",
+           harvestType: "rock"
```

#### 1509. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8208` → after: `L12629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12629) · [Before (L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8208)

```diff
-         "Truffle Oil": {
+         "Darkstone Bricks": {
```

#### 1510. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8210-L8218` → after: `L12631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12631) · [Before (L8210-L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8210-L8218)

```diff
-             translationKey: "item:truffleOil"
-           },
-           type: "Chargeable",
-           textureInfo: "truffle_oil",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:truffleOilDescription"
+             translationKey: "item:darkstoneBricks"
```

#### 1511. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8220-L8224` → after: `L12633-L12635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12633-L12635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12633-L12635) · [Before (L8220-L8224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8220-L8224)

```diff
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           chargeTime: 750,
-           rootMetaDesc: "Truffle Oil|meta|charging1"
+           ttb: 1800,
+           textureInfo: "darkstone_bricks",
+           harvestType: "rock"
```

#### 1512. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8226` → after: `L12637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12637) · [Before (L8226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8226)

```diff
-         Oats: {
+         "Cracked Darkstone Bricks": {
```

#### 1513. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8228-L8236` → after: `L12639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12639) · [Before (L8228-L8236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8228-L8236)

```diff
-             translationKey: "item:oats"
-           },
-           type: "Chargeable",
-           textureInfo: "oats",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:oatsDescription"
+             translationKey: "item:crackedDarkstoneBricks"
```

#### 1514. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8238-L8243` → after: `L12641-L12643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12641-L12643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12641-L12643) · [Before (L8238-L8243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8238-L8243)

```diff
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 500,
-           eatHealAmt: 3,
-           rootMetaDesc: "Oats|meta|charging1"
+           ttb: 1800,
+           textureInfo: "darkstone_bricks_cracked",
+           harvestType: "rock"
```

#### 1515. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8245` → after: `L12645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12645) · [Before (L8245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8245)

```diff
-         Porridge: {
+         "Molten Darkstone Bricks": {
```

#### 1516. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8247` → after: `L12647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12647) · [Before (L8247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8247)

```diff
-             translationKey: "item:porridge"
+             translationKey: "item:moltenDarkstoneBricks"
```

#### 1517. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8249-L8261` → after: `L12649-L12652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12649-L12652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12649-L12652) · [Before (L8249-L8261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8249-L8261)

```diff
-           type: "Chargeable",
-           textureInfo: "porridge",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:porridgeDescription"
-           },
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 750,
-           rootMetaDesc: "Porridge|meta|charging1"
+           ttb: 1800,
+           textureInfo: "darkstone_bricks_lava",
+           harvestType: "rock",
+           sa: [9, 3, 1]
```

#### 1518. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8263` → after: `L12654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12654) · [Before (L8263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8263)

```diff
-         Dates: {
+         "Engraved Darkstone": {
```

#### 1519. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8265-L8273` → after: `L12656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12656) · [Before (L8265-L8273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8265-L8273)

```diff
-             translationKey: "item:dates"
-           },
-           type: "Chargeable",
-           textureInfo: "dates",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:datesDescription"
+             translationKey: "item:engravedDarkstone"
```

#### 1520. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8275-L8280` → after: `L12658-L12660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12658-L12660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12658-L12660) · [Before (L8275-L8280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8275-L8280)

```diff
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 500,
-           eatHealAmt: 3,
-           rootMetaDesc: "Dates|meta|charging1"
+           ttb: 1800,
+           textureInfo: "darkstone_engraved",
+           harvestType: "rock"
```

#### 1521. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8282` → after: `L12662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12662) · [Before (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8282)

```diff
-         "Date Pudding": {
+         "Smooth Darkstone": {
```

#### 1522. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8284-L8292` → after: `L12664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12664) · [Before (L8284-L8292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8284-L8292)

```diff
-             translationKey: "item:datePudding"
-           },
-           type: "Chargeable",
-           textureInfo: "date_pudding",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:datePuddingDescription"
+             translationKey: "item:smoothDarkstone"
```

#### 1523. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8294-L8298` → after: `L12666-L12668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12666-L12668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12666-L12668) · [Before (L8294-L8298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8294-L8298)

```diff
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 750,
-           rootMetaDesc: "Date Pudding|meta|charging1"
+           ttb: 1800,
+           textureInfo: "darkstone_smooth",
+           harvestType: "rock"
```

#### 1524. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8300-L8312` → after: `L12670-L12679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12670-L12679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12670-L12679) · [Before (L8300-L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8300-L8312)

```diff
-         Poop: {
-           displayName: {
-             translationKey: "item:poop"
-           },
-           type: "Item",
-           textureInfo: "poop",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:poopDescription"
-           },
-           secondaryDamage: 1
+         ...(0, av.S)(sv.m, Fv),
+         "INTERNAL_MESH_Floor Quarters": {
+           ttb: 2e3,
+           harvestType: "rock",
+           blockModel: "floor_quarters",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1,
+           unlitStandaloneMesh: !0,
+           drops: null
```

#### 1525. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8314` → after: `L12681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12681) · [Before (L8314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8314)

```diff
-         Fertiliser: {
+         "Scorpion Eggs Block": {
```

#### 1526. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8316` → after: `L12683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12683) · [Before (L8316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8316)

```diff
-             translationKey: "item:fertiliser"
+             translationKey: "item:scorpionEggsBlock"
```

#### 1527. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8318-L8324` → after: `L12685-L12690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12685-L12690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12685-L12690) · [Before (L8318-L8324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8318-L8324)

```diff
-           type: "Item",
-           textureInfo: "fertiliser",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:fertiliserDescription"
+           ttb: 600,
+           textureInfo: "scorpion_eggs",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
```

#### 1528. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8327-L8357` → after: `L12693-L12771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12693-L12771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12693-L12771) · [Before (L8327-L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8327-L8357)

```diff
-         Medkit: {
-           displayName: {
-             translationKey: "item:medkit"
-           },
-           type: "Item",
-           textureInfo: "medkit",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Wood Spear": {
-           displayName: {
-             translationKey: "item:woodSpear"
-           },
-           type: "Tool",
-           textureInfo: "wood_spear",
- ... (15 more removed lines; see GitHub link above)
+         "INTERNAL_MESH_Boss Target": {
+           ttb: 2e3,
+           harvestType: "rock",
+           blockModel: "boss_target",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1,
+           unlitStandaloneMesh: !0,
+           drops: null
+         },
+         "INTERNAL_MESH_Rune Sigil": {
+           ttb: 2e3,
+           harvestType: "rock",
+           blockModel: "rune_sigil",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+ ... (63 more added lines; see GitHub link above)
```

#### 1529. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8359` → after: `L12773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12773) · [Before (L8359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8359)

```diff
-             translationKey: "item:stoneSpear"
+             translationKey: "item:stoneGenerator"
```

#### 1530. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8368` → after: `L12776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12776) · [Before (L8368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8368)

```diff
-             translationKey: "item:spearDescription"
+             translationKey: "item:stoneGeneratorDescription"
```

#### 1531. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8370-L8375` → after: `L12778-L12782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12778-L12782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12778-L12782) · [Before (L8370-L8375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8370-L8375)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 2,
-           abilityCooldownMs: 1600,
-           dashImpulse: 20
+           ttb: 3e3,
+           textureInfo: ["stone_generator_side", "stone_generator_top", "messy_stone"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "rock",
+           harvestLevel: 0
```

#### 1532. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8377` → after: `L12784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12784) · [Before (L8377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8377)

```diff
-         "Iron Spear": {
+         "Wheat Helper": {
```

#### 1533. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8379` → after: `L12786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12786) · [Before (L8379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8379)

```diff
-             translationKey: "item:ironSpear"
+             translationKey: "item:wheatHelper"
```

#### 1534. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8388` → after: `L12789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12789) · [Before (L8388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8388)

```diff
-             translationKey: "item:spearDescription"
+             translationKey: "item:wheatHelperDescription"
```

#### 1535. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8390-L8395` → after: `L12791-L12796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12791-L12796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12791-L12796) · [Before (L8390-L8395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8390-L8395)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 3,
-           abilityCooldownMs: 1600,
-           dashImpulse: 22
+           ttb: 1500,
+           textureInfo: ["crate", "hay_block_top"],
+           texturePerSide: [0, 0, 1, 0, 0, 0],
+           harvestType: "wood",
+           harvestLevel: 0,
+           altActionable: !0
```

#### 1536. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8397` → after: `L12798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12798) · [Before (L8397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8397)

```diff
-         "Gold Spear": {
+         "Carrot Helper": {
```

#### 1537. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8399` → after: `L12800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12800) · [Before (L8399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8399)

```diff
-             translationKey: "item:goldSpear"
+             translationKey: "item:carrotHelper"
```

#### 1538. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8408` → after: `L12803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12803) · [Before (L8408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8408)

```diff
-             translationKey: "item:spearDescription"
+             translationKey: "item:carrotHelperDescription"
```

#### 1539. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8410-L8415` → after: `L12805-L12810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12805-L12810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12805-L12810) · [Before (L8410-L8415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8410-L8415)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 4,
-           abilityCooldownMs: 1600,
-           dashImpulse: 25
+           ttb: 1500,
+           textureInfo: ["crate", "carrot_block_top"],
+           texturePerSide: [0, 0, 1, 0, 0, 0],
+           harvestType: "wood",
+           harvestLevel: 0,
+           altActionable: !0
```

#### 1540. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8417` → after: `L12812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12812) · [Before (L8417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8417)

```diff
-         "Diamond Spear": {
+         "Melon Helper": {
```

#### 1541. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8419` → after: `L12814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12814) · [Before (L8419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8419)

```diff
-             translationKey: "item:diamondSpear"
+             translationKey: "item:melonHelper"
```

#### 1542. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8428` → after: `L12817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12817) · [Before (L8428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8428)

```diff
-             translationKey: "item:spearDescription"
+             translationKey: "item:melonHelperDescription"
```

#### 1543. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8430-L8435` → after: `L12819-L12824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12819-L12824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12819-L12824) · [Before (L8430-L8435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8430-L8435)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5,
-           abilityCooldownMs: 1600,
-           dashImpulse: 28
+           ttb: 1500,
+           textureInfo: ["crate", "melon_top"],
+           texturePerSide: [0, 0, 1, 0, 0, 0],
+           harvestType: "wood",
+           harvestLevel: 0,
+           altActionable: !0
```

#### 1544. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8437-L8587` → after: `L12826-L13298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R12826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L12826-L13298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L12826-L13298) · [Before (L8437-L8587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8437-L8587)

```diff
-         "Moonstone Spear": {
-           displayName: {
-             translationKey: "item:moonstoneSpear"
-           },
-           type: "Tool",
-           textureInfo: "moonstone_spear",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 32,
-           attackRange: 5,
-           description: {
-             translationKey: "item:spearDescription"
-           },
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
- ... (135 more removed lines; see GitHub link above)
+         ... function() {
+           const vv = {};
+           for (const {
+               wood: zv,
+               block: Pv
+             }
+             of iv.c) vv[Pv] = {
+             displayName: {
+               translationKey: `item:${(0,Nv.ee)(Pv)}`
+             },
+             ttb: 960,
+             harvestType: "wood",
+             ..."Maple" === zv ? {
+               showInCreativeInven: !1
+             } : {},
+             ...mv(Pv, (0, Nv.he)(Pv), {
+ ... (457 more added lines; see GitHub link above)
```

#### 1545. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8589-L8605` → after: `L13300-L13340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13300-L13340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13300-L13340) · [Before (L8589-L8605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8589-L8605)

```diff
-         "Wood Boomerang": {
-           displayName: {
-             translationKey: "item:woodBoomerang"
-           },
-           type: "Tool",
-           textureInfo: "wood_boomerang",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 11,
-           secondaryDamage: 11,
-           description: {
-             translationKey: "item:boomerangDescription"
-           },
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
- ... (1 more removed lines; see GitHub link above)
+         ev = {};
+       for (let pv = 0; pv < Pv.length; pv++) {
+         var gv;
+         Object.assign(ev, {
+           [`${vv}_stage${pv+1}`]: Object.assign({
+             ...Sv
+           }, {
+             textureInfo: Pv[pv]
+           }, null !== (gv = null === hv || void 0 === hv ? void 0 : hv[pv + 1]) && void 0 !== gv ? gv : {})
+         })
+       }
+       return ev
+     }
+ 
+     function wv(vv, zv) {
+       console.assert("meta|rot1|empty" === zv.rootMetaDesc.split("|").slice(1).join("|"), "mailbox root block .rootMetaDesc must be |meta|rot1|empty");
+ ... (25 more added lines; see GitHub link above)
```

#### 1546. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8607-L8623` → after: `L13342-L13343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13342-L13343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13342-L13343) · [Before (L8607-L8623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8607-L8623)

```diff
-         "Stone Boomerang": {
-           displayName: {
-             translationKey: "item:stoneBoomerang"
-           },
-           type: "Tool",
-           textureInfo: "stone_boomerang",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 14,
-           secondaryDamage: 14,
-           description: {
-             translationKey: "item:boomerangDescription"
-           },
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
- ... (1 more removed lines; see GitHub link above)
+         [`${vv}|meta|rot3|empty`]: {
+           ...Sv
```

#### 1547. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8625-L8641` → after: `L13345-L13346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13345-L13346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13345-L13346) · [Before (L8625-L8641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8625-L8641)

```diff
-         "Iron Boomerang": {
-           displayName: {
-             translationKey: "item:ironBoomerang"
-           },
-           type: "Tool",
-           textureInfo: "iron_boomerang",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 17,
-           secondaryDamage: 17,
-           description: {
-             translationKey: "item:boomerangDescription"
-           },
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
- ... (1 more removed lines; see GitHub link above)
+         [`${vv}|meta|rot4|empty`]: {
+           ...ev
```

#### 1548. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8643-L8659` → after: `L13348-L13404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13348-L13404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13348-L13404) · [Before (L8643-L8659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8643-L8659)

```diff
-         "Gold Boomerang": {
-           displayName: {
-             translationKey: "item:goldBoomerang"
-           },
-           type: "Tool",
-           textureInfo: "gold_boomerang",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 19,
-           secondaryDamage: 19,
-           description: {
-             translationKey: "item:boomerangDescription"
-           },
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
- ... (1 more removed lines; see GitHub link above)
+         [`${vv}|meta|rot1|full`]: Object.assign({
+           ...Pv
+         }, {
+           textureInfo: gv
+         }),
+         [`${vv}|meta|rot2|full`]: Object.assign({
+           ...hv
+         }, {
+           textureInfo: gv
+         }),
+         [`${vv}|meta|rot3|full`]: Object.assign({
+           ...Sv
+         }, {
+           textureInfo: gv
+         }),
+         [`${vv}|meta|rot4|full`]: Object.assign({
+ ... (41 more added lines; see GitHub link above)
```

#### 1549. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8661-L8677` → after: `L13406-L13407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13406-L13407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13406-L13407) · [Before (L8661-L8677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8661-L8677)

```diff
-         "Diamond Boomerang": {
-           displayName: {
-             translationKey: "item:diamondBoomerang"
-           },
-           type: "Tool",
-           textureInfo: "diamond_boomerang",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 20,
-           secondaryDamage: 20,
-           description: {
-             translationKey: "item:boomerangDescription"
-           },
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
- ... (1 more removed lines; see GitHub link above)
+         [`${vv}|meta|rot3|books6`]: {
+           ...Sv
```

#### 1550. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8679-L8695` → after: `L13409-L13410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13409-L13410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13409-L13410) · [Before (L8679-L8695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8679-L8695)

```diff
-         "Moonstone Boomerang": {
-           displayName: {
-             translationKey: "item:moonstoneBoomerang"
-           },
-           type: "Tool",
-           textureInfo: "moonstone_boomerang",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 20,
-           secondaryDamage: 20,
-           description: {
-             translationKey: "item:boomerangDescription"
-           },
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
- ... (1 more removed lines; see GitHub link above)
+         [`${vv}|meta|rot4|books6`]: {
+           ...ev
```

#### 1551. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8697-L8707` → after: `L13412-L13415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13412-L13415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13412-L13415) · [Before (L8697-L8707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8697-L8707)

```diff
-         "Wood Club": {
-           displayName: {
-             translationKey: "item:woodClub"
-           },
-           type: "Tool",
-           textureInfo: "wood_club",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 22,
-           knockbackHorizontalScalar: 1.7,
-           knockbackVerticalScalar: 1.2,
+         [`Empty ${vv}`]: Object.assign({
+           ...Pv
+         }, {
+           textureInfo: gv[0],
```

#### 1552. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8709` → after: `L13417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13417) · [Before (L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8709)

```diff
-             translationKey: "item:clubDescription"
+             translationKey: "item:emptyBookshelfDescription"
```

#### 1553. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8711-L8718` → after: `L13419-L13499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13419-L13499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13419-L13499) · [Before (L8711-L8718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8711-L8718)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 1
-         },
-         "Stone Club": {
-           displayName: {
-             translationKey: "item:stoneClub"
+           rootMetaDesc: `Empty ${vv}|meta|rot1|books0`
+         }),
+         [`Empty ${vv}|meta|rot2|books0`]: Object.assign({
+           ...hv
+         }, {
+           textureInfo: gv[0]
+         }),
+         [`Empty ${vv}|meta|rot3|books0`]: Object.assign({
+           ...Sv
+         }, {
+           textureInfo: gv[0]
+         }),
+         [`Empty ${vv}|meta|rot4|books0`]: Object.assign({
+           ...ev
+         }, {
+           textureInfo: gv[0]
+ ... (65 more added lines; see GitHub link above)
```

#### 1554. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8728` → after: `L13502-L13505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13502-L13505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13502-L13505) · [Before (L8728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8728)

```diff
-             translationKey: "item:clubDescription"
+             translationKey: Sv,
+             params: {
+               colour: `$t(colour:${(0,Nv.he)(pv)})`
+             }
```

#### 1555. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8730-L8733` → after: `L13507-L13598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13507-L13598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13507-L13598) · [Before (L8730-L8733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8730-L8733)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 2
+           model: "Slab",
+           slabFullBlock: zv.replace("$colour$", pv),
+           ...lv,
+           rootMetaDesc: `${dv}|meta|rot1|bot`,
+           ...ev
+         }))
+       }
+       return gv
+     }
+     const iv = {
+         bot: (0, hv.f)([
+           [
+             [0, 0, 0],
+             [8, 4, 8]
+           ]
+         ]),
+ ... (76 more added lines; see GitHub link above)
```

#### 1556. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8735-L8752` → after: `L13600-L13602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13600-L13602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13600-L13602) · [Before (L8735-L8752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8735-L8752)

```diff
-         "Iron Club": {
-           displayName: {
-             translationKey: "item:ironClub"
-           },
-           type: "Tool",
-           textureInfo: "iron_club",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 34,
-           knockbackHorizontalScalar: 2.1,
-           knockbackVerticalScalar: 1.2,
-           description: {
-             translationKey: "item:clubDescription"
-           },
-           stackable: !1,
-           harvests: null,
- ... (2 more removed lines; see GitHub link above)
+         [`${vv}|meta|rot1|top`]: {
+           ...Pv,
+           SC: iv.top
```

#### 1557. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8754-L8771` → after: `L13604-L13606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13604-L13606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13604-L13606) · [Before (L8754-L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8754-L8771)

```diff
-         "Gold Club": {
-           displayName: {
-             translationKey: "item:goldClub"
-           },
-           type: "Tool",
-           textureInfo: "gold_club",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 37,
-           knockbackHorizontalScalar: 2.3,
-           knockbackVerticalScalar: 1.2,
-           description: {
-             translationKey: "item:clubDescription"
-           },
-           stackable: !1,
-           harvests: null,
- ... (2 more removed lines; see GitHub link above)
+         [`${vv}|meta|rot1|side`]: {
+           ...Pv,
+           SC: iv.side1
```

#### 1558. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8773-L8790` → after: `L13608-L13610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13608-L13610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13608-L13610) · [Before (L8773-L8790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8773-L8790)

```diff
-         "Diamond Club": {
-           displayName: {
-             translationKey: "item:diamondClub"
-           },
-           type: "Tool",
-           textureInfo: "diamond_club",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 40,
-           knockbackHorizontalScalar: 2.5,
-           knockbackVerticalScalar: 1.2,
-           description: {
-             translationKey: "item:clubDescription"
-           },
-           stackable: !1,
-           harvests: null,
- ... (2 more removed lines; see GitHub link above)
+         [`${vv}|meta|rot2|side`]: {
+           ...Pv,
+           SC: iv.side2
```

#### 1559. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8792-L8809` → after: `L13612-L13614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13612-L13614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13612-L13614) · [Before (L8792-L8809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8792-L8809)

```diff
-         "Moonstone Club": {
-           displayName: {
-             translationKey: "item:moonstoneClub"
-           },
-           type: "Tool",
-           textureInfo: "moonstone_club",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 40,
-           knockbackHorizontalScalar: 2.5,
-           knockbackVerticalScalar: 1.2,
-           description: {
-             translationKey: "item:clubDescription"
-           },
-           stackable: !1,
-           harvests: null,
- ... (2 more removed lines; see GitHub link above)
+         [`${vv}|meta|rot3|side`]: {
+           ...Pv,
+           SC: iv.side3
```

#### 1560. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8811-L8822` → after: `L13616-L13757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13616-L13757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13616-L13757) · [Before (L8811-L8822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8811-L8822)

```diff
-         "Wood Mace": {
-           displayName: {
-             translationKey: "item:woodMace"
-           },
-           type: "Tool",
-           textureInfo: "wood_mace",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 11,
-           velocityMultiplier: 2.2,
-           description: {
-             translationKey: "item:maceDescription"
+         [`${vv}|meta|rot4|side`]: {
+           ...Pv,
+           SC: iv.side4
+         }
+       }
+     }
+ 
+     function Fv(vv, zv) {
+       const Pv = {
+           ...zv,
+           model: "Stairs"
+         },
+         hv = {};
+       for (const ev of ["bot", "top"])
+         for (let zv = 1; zv <= 4; zv++) {
+           const gv = Sv.j[ev][zv - 1];
+ ... (126 more added lines; see GitHub link above)
```

#### 1561. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8824-L8827` → after: `L13759-L13775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13759-L13775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13759-L13775) · [Before (L8824-L8827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8824-L8827)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 1
+           SC: (0, pv.w)(!0, Pv, ev),
+           canBePlacedOver: !0,
+           drops: null
+         }
+       }
+       return zv
+     }
+ 
+     function Rv(vv, zv) {
+       console.assert("meta|rot1|bot" === zv.rootMetaDesc.split("|").slice(1).join("|"), "banner root block .rootMetaDesc must be |meta|rot1|bot");
+       const Pv = {
+         ...zv
+       };
+       delete Pv.rootMetaDesc;
+       const hv = {
+           ...Pv,
+ ... (1 more added lines; see GitHub link above)
```

#### 1562. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8829-L8845` → after: `L13777-L13795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13777-L13795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13777-L13795) · [Before (L8829-L8845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8829-L8845)

```diff
-         "Stone Mace": {
-           displayName: {
-             translationKey: "item:stoneMace"
-           },
-           type: "Tool",
-           textureInfo: "stone_mace",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 14,
-           velocityMultiplier: 2.4,
-           description: {
-             translationKey: "item:maceDescription"
-           },
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
- ... (1 more removed lines; see GitHub link above)
+         Sv = `_${vv} Flag`,
+         ev = {
+           ...zv,
+           drops: vv,
+           rootMetaDesc: `${Sv}|meta|rot1|top`,
+           blockModel: `${Sv} Hanging`
+         },
+         gv = {
+           ...ev
+         };
+       delete gv.rootMetaDesc;
+       const pv = {
+         ...gv,
+         blockModel: Sv
+       };
+       return {
+ ... (3 more added lines; see GitHub link above)
```

#### 1563. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8847-L8863` → after: `L13797-L13798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13797-L13798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13797-L13798) · [Before (L8847-L8863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8847-L8863)

```diff
-         "Iron Mace": {
-           displayName: {
-             translationKey: "item:ironMace"
-           },
-           type: "Tool",
-           textureInfo: "iron_mace",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 17,
-           velocityMultiplier: 2.6,
-           description: {
-             translationKey: "item:maceDescription"
-           },
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
- ... (1 more removed lines; see GitHub link above)
+         [`${vv}|meta|rot3|bot`]: {
+           ...Pv
```

#### 1564. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8865-L8881` → after: `L13800-L13801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13800-L13801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13800-L13801) · [Before (L8865-L8881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8865-L8881)

```diff
-         "Gold Mace": {
-           displayName: {
-             translationKey: "item:goldMace"
-           },
-           type: "Tool",
-           textureInfo: "gold_mace",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 19,
-           velocityMultiplier: 2.8,
-           description: {
-             translationKey: "item:maceDescription"
-           },
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
- ... (1 more removed lines; see GitHub link above)
+         [`${vv}|meta|rot4|bot`]: {
+           ...Pv
```

#### 1565. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8883-L8899` → after: `L13803-L13805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13803-L13805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13803-L13805) · [Before (L8883-L8899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8883-L8899)

```diff
-         "Diamond Mace": {
-           displayName: {
-             translationKey: "item:diamondMace"
-           },
-           type: "Tool",
-           textureInfo: "diamond_mace",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 20,
-           velocityMultiplier: 3,
-           description: {
-             translationKey: "item:maceDescription"
-           },
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
- ... (1 more removed lines; see GitHub link above)
+         [Sv]: ev,
+         [`${Sv}|meta|rot2|top`]: {
+           ...gv
```

#### 1566. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8901-L8917` → after: `L13807-L13808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13807-L13808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13807-L13808) · [Before (L8901-L8917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8901-L8917)

```diff
-         "Moonstone Mace": {
-           displayName: {
-             translationKey: "item:moonstoneMace"
-           },
-           type: "Tool",
-           textureInfo: "moonstone_mace",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 20,
-           velocityMultiplier: 3,
-           description: {
-             translationKey: "item:maceDescription"
-           },
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
- ... (1 more removed lines; see GitHub link above)
+         [`${Sv}|meta|rot3|top`]: {
+           ...gv
```

#### 1567. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8919-L8936` → after: `L13810-L13811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13810-L13811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13810-L13811) · [Before (L8919-L8936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8919-L8936)

```diff
-         "Wood Whip": {
-           displayName: {
-             translationKey: "item:woodWhip"
-           },
-           type: "Tool",
-           textureInfo: "wood_whip",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 8,
-           attackRange: 8,
-           knockbackHorizontalScalar: -1,
-           description: {
-             translationKey: "item:whipDescription"
-           },
-           stackable: !1,
-           harvests: null,
- ... (2 more removed lines; see GitHub link above)
+         [`${Sv}|meta|rot4|top`]: {
+           ...gv
```

#### 1568. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8938-L8955` → after: `L13813-L13814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13813-L13814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13813-L13814) · [Before (L8938-L8955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8938-L8955)

```diff
-         "Stone Whip": {
-           displayName: {
-             translationKey: "item:stoneWhip"
-           },
-           type: "Tool",
-           textureInfo: "stone_whip",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 11,
-           attackRange: 8,
-           knockbackHorizontalScalar: -1.2,
-           description: {
-             translationKey: "item:whipDescription"
-           },
-           stackable: !1,
-           harvests: null,
- ... (2 more removed lines; see GitHub link above)
+         [`${Sv}|meta|rot1|side`]: {
+           ...gv
```

#### 1569. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8957-L8974` → after: `L13816-L13817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13816-L13817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13816-L13817) · [Before (L8957-L8974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8957-L8974)

```diff
-         "Iron Whip": {
-           displayName: {
-             translationKey: "item:ironWhip"
-           },
-           type: "Tool",
-           textureInfo: "iron_whip",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 14,
-           attackRange: 8,
-           knockbackHorizontalScalar: -1.4,
-           description: {
-             translationKey: "item:whipDescription"
-           },
-           stackable: !1,
-           harvests: null,
- ... (2 more removed lines; see GitHub link above)
+         [`${Sv}|meta|rot2|side`]: {
+           ...gv
```

#### 1570. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8976-L8993` → after: `L13819-L13942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13819-L13942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13819-L13942) · [Before (L8976-L8993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8976-L8993)

```diff
-         "Gold Whip": {
-           displayName: {
-             translationKey: "item:goldWhip"
-           },
-           type: "Tool",
-           textureInfo: "gold_whip",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 16,
-           attackRange: 8,
-           knockbackHorizontalScalar: -1.6,
-           description: {
-             translationKey: "item:whipDescription"
-           },
-           stackable: !1,
-           harvests: null,
- ... (2 more removed lines; see GitHub link above)
+         [`${Sv}|meta|rot3|side`]: {
+           ...gv
+         },
+         [`${Sv}|meta|rot4|side`]: {
+           ...gv
+         },
+         [`${Sv}|meta|rot1|bot`]: {
+           ...pv
+         },
+         [`${Sv}|meta|rot2|bot`]: {
+           ...pv
+         },
+         [`${Sv}|meta|rot3|bot`]: {
+           ...pv
+         },
+         [`${Sv}|meta|rot4|bot`]: {
+ ... (108 more added lines; see GitHub link above)
```

#### 1571. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8995` → after: `L13944-L13989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13944-L13989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13944-L13989) · [Before (L8995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8995)

```diff
-         "Diamond Whip": {
+         [`${vv}|meta|rot4`]: {
+           ...Pv
+         }
+       }
+     }
+     const Mv = {
+       ttb: 1800,
+       harvestType: "wood",
+       solid: !0,
+       model: "rotatable",
+       blockModelItem: !0,
+       modelScale: 8,
+       heldItemScale: 4,
+       customModelInfo: {
+         yOffset: -.5
+       }
+ ... (30 more added lines; see GitHub link above)
```

#### 1572. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L8997-L9007` → after: `L13991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13991) · [Before (L8997-L9007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L8997-L9007)

```diff
-             translationKey: "item:diamondWhip"
-           },
-           type: "Tool",
-           textureInfo: "diamond_whip",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 17,
-           attackRange: 8,
-           knockbackHorizontalScalar: -1.8,
-           description: {
-             translationKey: "item:whipDescription"
+             translationKey: `item:${(0,Nv.ee)(ev.k)}`
```

#### 1573. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9009-L9012` → after: `L13993-L14039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R13993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L13993-L14039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L13993-L14039) · [Before (L9009-L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9009-L9012)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5
+           drops: ev.k,
+           itemTexture: "noticeboard",
+           customModelInfo: {
+             yOffset: -.5,
+             yRotOffset: Math.PI
+           }
+         };
+         for (let Sv = 1; Sv <= 4; Sv++)
+           for (const gv of ev.d) {
+             const pv = (0, ev.e)(zv, Sv, gv),
+               dv = `${Pv}${ev.r[gv]}`;
+             vv[pv] = pv === zv ? {
+               ...hv,
+               rootMetaDesc: `${zv}|meta|rot1`,
+               blockModel: dv
+             } : {
+ ... (31 more added lines; see GitHub link above)
```

#### 1574. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9014` → after: `L14041-L14078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14041-L14078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14041-L14078) · [Before (L9014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9014)

```diff
-         "Moonstone Whip": {
+         [`${vv}|meta|rot4`]: {
+           ...hv,
+           texturePerSide: Pv[3]
+         }
+       }
+     }
+ 
+     function Ev(vv, zv) {
+       const Pv = ["chest_double_front_lo", "chest_double_front_hi", "chest_side", "chest_double_top_1_lo", "chest_double_top_1_hi", "chest_double_top_2_lo", "chest_double_top_2_hi", "chest_double_back_lo", "chest_double_back_hi"],
+         hv = {
+           left: [
+             [2, 2, 6, 5, 0, 8],
+             [0, 8, 4, 4, 2, 2],
+             [2, 2, 5, 6, 8, 0],
+             [8, 0, 3, 3, 2, 2]
+           ],
+ ... (22 more added lines; see GitHub link above)
```

#### 1575. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9016` → after: `L14080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14080) · [Before (L9016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9016)

```diff
-             translationKey: "item:moonstoneWhip"
+             translationKey: `item:${(0,Nv.ee)(vv)}MobSpawnerBlock`
```

#### 1576. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9026` → after: `L14083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14083) · [Before (L9026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9026)

```diff
-             translationKey: "item:whipDescription"
+             translationKey: `item:${(0,Nv.ee)(vv)}MobSpawnerBlockDescription`
```

#### 1577. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9028-L9035` → after: `L14085-L14094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14085-L14094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14085-L14094) · [Before (L9028-L9035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9028-L9035)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5
-         },
-         "Beef Stew": {
-           displayName: {
-             translationKey: "item:beefStew"
+           itemTexture: `${(0,Nv.he)(vv)}_spawner_block_icon`,
+           ttb: 5e3,
+           textureInfo: [`mob_spawner_${Pv}_block_side`, "mob_spawner_block_top"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           transTex: !0,
+           harvestType: "rock",
+           drops: null,
+           specialToolDrop: {
+             tool: "Moonstone Pickaxe",
+             drops: zv
```

#### 1578. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9037-L9044` → after: `L14096-L14220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14096-L14220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14096-L14220) · [Before (L9037-L9044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9037-L9044)

```diff
-           type: "Item",
-           textureInfo: "beef_stew",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:beefStewDescription"
-           }
+           particlesIgnoreBlack: !0,
+           onMinedAura: 75,
+           twoDBlockItem: !0
+         }
+       }
+     }
+ 
+     function bv(vv) {
+       let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
+       const Pv = (0, Nv.Rb)(vv),
+         hv = `${(0,Nv.he)(vv)}_painting`,
+         Sv = vv.replaceAll(" ", "_") + " Painting";
+       return {
+         ...Hv(`_${Pv} Top Left`, {
+           ttb: 240,
+           itemTexture: hv,
+ ... (109 more added lines; see GitHub link above)
```

#### 1579. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9046` → after: `L14222-L14224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14222-L14224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14222-L14224) · [Before (L9046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9046)

```diff
-         Chicken: {
+         hv = {};
+       for (const Sv of zv) {
+         const zv = Sv === vv ? {
```

#### 1580. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9048` → after: `L14226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14226) · [Before (L9048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9048)

```diff
-             translationKey: "item:chicken"
+             translationKey: "item:solarPanel"
```

#### 1581. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9057` → after: `L14229-L14359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14229-L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14229-L14359) · [Before (L9057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9057)

```diff
-             translationKey: "item:chickenDescription"
+             translationKey: "item:solarPanelDescription"
+           },
+           itemTexture: "solar_panel"
+         } : {
+           drops: vv
+         };
+         Object.assign(hv, Hv(Sv, {
+           ...Pv,
+           rootMetaDesc: `${Sv}|meta|rot1`,
+           ...zv
+         }))
+       }
+       return hv
+     }
+ 
+     function Xv(vv) {
+ ... (115 more added lines; see GitHub link above)
```

#### 1582. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9060` → after: `L14362-L14368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14362-L14368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14362-L14368) · [Before (L9060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9060)

```diff
-         Coleslaw: {
+         zv = {};
+       for (const {
+           block: Pv,
+           blockModel: hv
+         }
+         of Pz) {
+         const Sv = Pv === zz ? {
```

#### 1583. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9062` → after: `L14370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14370) · [Before (L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9062)

```diff
-             translationKey: "item:coleslaw"
+             translationKey: "item:cannon"
```

#### 1584. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9064-L9072` → after: `L14372-L14404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14372-L14404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14372-L14404) · [Before (L9064-L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9064-L9072)

```diff
-           type: "Item",
-           textureInfo: "coleslaw",
-           heldItemGlb: "coleslaw",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:coleslawDescription"
-           }
+           blockModelItem: !0,
+           heldItemScale: 4
+         } : {
+           drops: zz
+         };
+         Object.assign(zv, Hv(Pv, {
+           ...vv,
+           blockModel: hv,
+           rootMetaDesc: `${Pv}|meta|rot1`,
+           ...Sv
+         }))
+       }
+       return zv
+     }
+     const Sz = "Rocket Ship",
+       ez = ["southwest", "southeast", "northwest", "northeast"],
+ ... (17 more added lines; see GitHub link above)
```

#### 1585. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9074` → after: `L14406-L14432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14406-L14432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14406-L14432) · [Before (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9074)

```diff
-         Egg: {
+         northeast: {
+           x: 1,
+           z: -1
+         }
+       };
+ 
+     function lz(vv, zv) {
+       const Pv = vv[0].toUpperCase() + vv.slice(1);
+       return `_${Sz} ${Pv} L${zv}`
+     }
+ 
+     function Tz(vv) {
+       return 1 === vv ? Sz : `${Sz} S${vv}`
+     }
+ 
+     function Wz() {
+ ... (11 more added lines; see GitHub link above)
```

#### 1586. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9076` → after: `L14434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14434) · [Before (L9076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9076)

```diff
-             translationKey: "item:egg"
+             translationKey: 1 === zv ? "item:rocketShip" : `item:rocketShipS${zv}`
```

#### 1587. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9085` → after: `L14437-L14544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14437-L14544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14437-L14544) · [Before (L9085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9085)

```diff
-             translationKey: "item:eggDescription"
+             translationKey: "item:rocketShipDescription"
+           },
+           itemTexture: "rocket",
+           drops: null
+         }),
+         Pv = {
+           [Sz]: zv(1)
+         };
+       for (const hv of ez)
+         for (let zv = 1; zv <= gz; zv++) "southwest" === hv && 1 === zv || (Pv[lz(hv, zv)] = {
+           ...vv,
+           blockModel: `rocket_${hv}_${zv}`,
+           drops: null
+         });
+       for (let hv = 2; hv <= pz; hv++) Pv[Tz(hv)] = {
+         ...zv(hv),
+ ... (92 more added lines; see GitHub link above)
```

#### 1588. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9088` → after: `L14547-L14593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14547-L14593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14547-L14593) · [Before (L9088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9088)

```diff
-         "Fish N Chips": {
+         [`${vv}|meta|rot1|side`]: {
+           ...dv
+         },
+         [`${vv}|meta|rot2|side`]: {
+           ...dv
+         },
+         [`${vv}|meta|rot3|side`]: {
+           ...dv
+         },
+         [`${vv}|meta|rot4|side`]: {
+           ...dv
+         }
+       }
+     }
+ 
+     function iz(vv, zv, Pv) {
+ ... (31 more added lines; see GitHub link above)
```

#### 1589. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9090` → after: `L14595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14595) · [Before (L9090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9090)

```diff
-             translationKey: "item:fishNChips"
+             translationKey: "item:landingPad"
```

#### 1590. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9098-L9099` → after: `L14598-L14601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14598-L14601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14598-L14601) · [Before (L9098-L9099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9098-L9099)

```diff
-             translationKey: "item:fishNChipsDescription"
-           }
+             translationKey: "item:landingPadDescription"
+           },
+           itemTexture: "landing_pad",
+           blockModel: "landing_pad"
```

#### 1591. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9101` → after: `L14603-L14604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14603-L14604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14603-L14604) · [Before (L9101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9101)

```diff
-         "Fried Rice": {
+         "Weak Jump Pad": {
+           ...vv,
```

#### 1592. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9103` → after: `L14606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14606) · [Before (L9103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9103)

```diff
-             translationKey: "item:friedRice"
+             translationKey: "item:weakJumpPad"
```

#### 1593. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9111-L9112` → after: `L14609-L14612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14609-L14612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14609-L14612) · [Before (L9111-L9112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9111-L9112)

```diff
-             translationKey: "item:friedRiceDescription"
-           }
+             translationKey: "item:jumpPadDescription"
+           },
+           itemTexture: "jump_pad_weak",
+           blockModel: "jump_pad_weak"
```

#### 1594. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9114` → after: `L14614-L14615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14614-L14615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14614-L14615) · [Before (L9114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9114)

```diff
-         Lettuce: {
+         "Jump Pad": {
+           ...vv,
```

#### 1595. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9116` → after: `L14617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14617) · [Before (L9116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9116)

```diff
-             translationKey: "item:lettuce"
+             translationKey: "item:jumpPad"
```

#### 1596. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9125-L9126` → after: `L14620-L14623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14620-L14623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14620-L14623) · [Before (L9125-L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9125-L9126)

```diff
-             translationKey: "item:lettuceDescription"
-           }
+             translationKey: "item:jumpPadDescription"
+           },
+           itemTexture: "jump_pad",
+           blockModel: "jump_pad"
```

#### 1597. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9128` → after: `L14625-L14626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14625-L14626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14625-L14626) · [Before (L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9128)

```diff
-         Omelette: {
+         "Strong Jump Pad": {
+           ...vv,
```

#### 1598. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9130` → after: `L14628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14628) · [Before (L9130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9130)

```diff
-             translationKey: "item:omelette"
+             translationKey: "item:strongJumpPad"
```

#### 1599. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9139-L9140` → after: `L14631-L14634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14631-L14634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14631-L14634) · [Before (L9139-L9140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9139-L9140)

```diff
-             translationKey: "item:omeletteDescription"
-           }
+             translationKey: "item:jumpPadDescription"
+           },
+           itemTexture: "jump_pad_strong",
+           blockModel: "jump_pad_strong"
```

#### 1600. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9142` → after: `L14636-L14637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14636-L14637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14636-L14637) · [Before (L9142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9142)

```diff
-         Onion: {
+         "Super Jump Pad": {
+           ...vv,
```

#### 1601. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9144` → after: `L14639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14639) · [Before (L9144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9144)

```diff
-             translationKey: "item:onion"
+             translationKey: "item:superJumpPad"
```

#### 1602. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9153-L9158` → after: `L14642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14642) · [Before (L9153-L9158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9153-L9158)

```diff
-             translationKey: "item:onionDescription"
-           }
-         },
-         "Red Cabbage": {
-           displayName: {
-             translationKey: "item:redCabbage"
+             translationKey: "item:jumpPadDescription"
```

#### 1603. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9160-L9167` → after: `L14644-L14685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14644-L14685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14644-L14685) · [Before (L9160-L9167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9160-L9167)

```diff
-           type: "Item",
-           textureInfo: "red_cabbage",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:redCabbageDescription"
-           }
+           itemTexture: "jump_pad_super",
+           blockModel: "jump_pad_super"
+         }
+       }
+     }
+ 
+     function mz(vv) {
+       const zv = "Grey" === vv ? "Gray" : vv;
+       return Nv.O[zv].map((vv => Math.floor(vv / 2) + 2))
+     }
+   },
+   9118: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => dv,
+       h: () => lv,
+       l: () => Tv,
+ ... (26 more added lines; see GitHub link above)
```

#### 1604. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9169` → after: `L14687-L14732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14687-L14732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14687-L14732) · [Before (L9169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9169)

```diff
-         "Roast Dinner": {
+         ttb: 600,
+         textureInfo: zv,
+         model: "Slab|rotatable",
+         customModelInfo: {
+           yOffset: -.25
+         },
+         SC: Nv,
+         harvestType: "rock",
+         harvestLevel: 0,
+         showInCreativeInven: !1
+       }
+     }
+ 
+     function Wv(vv, zv) {
+       const [Pv, hv] = pv.h[vv - 1];
+       return [Pv * zv, 0, hv * zv]
+ ... (30 more added lines; see GitHub link above)
```

#### 1605. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9171` → after: `L14734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14734) · [Before (L9171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9171)

```diff
-             translationKey: "item:roastDinner"
+             translationKey: `item:${zv}`
```

#### 1606. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9179-L9182` → after: `L14737-L14776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14737-L14776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14737-L14776) · [Before (L9179-L9182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9179-L9182)

```diff
-             translationKey: "item:roastDinnerDescription"
-           }
-         },
-         Salad: {
+             translationKey: `item:${zv}Description`
+           },
+           ttb: 600,
+           textureInfo: ["belt_tunnel_mouth", "belt_tunnel_side", ...[1, 2, 3, 4].map((zv => `${vv}[rot[${zv}`)), "conveyor_belt_bottom", "belt_tunnel_back"],
+           harvestType: "rock",
+           harvestLevel: 0,
+           showInCreativeInven: !1
+         }),
+         hv = (0, Sv.Kb)(vv, {
+           ...Pv("belt_tunnel_top"),
+           rootMetaDesc: `${vv}|meta|rot1`
+         }, sv);
+       return Cv.forEach(((zv, Sv) => {
+         hv[`${vv}|meta|rot${Sv+1}|exit`] = {
+           ...Pv("belt_tunnel_exit_top"),
+           texturePerSide: zv
+ ... (24 more added lines; see GitHub link above)
```

#### 1607. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9184` → after: `L14778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14778) · [Before (L9184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9184)

```diff
-             translationKey: "item:salad"
+             translationKey: "item:homesteadCore"
```

#### 1608. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9193-L9194` → after: `L14781-L14789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14781-L14789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14781-L14789) · [Before (L9193-L9194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9193-L9194)

```diff
-             translationKey: "item:saladDescription"
-           }
+             translationKey: "item:homesteadCoreDescription"
+           },
+           ttb: 5e11,
+           textureInfo: "homestead_core",
+           harvestType: "rock",
+           drops: null,
+           altActionable: !0,
+           sa: [4, 12, 14],
+           showInCreativeInven: !1
```

#### 1609. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9196` → after: `L14791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14791) · [Before (L9196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9196)

```diff
-         "Stuffed Pepper": {
+         "Drop Pad": {
```

#### 1610. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9198` → after: `L14793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14793) · [Before (L9198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9198)

```diff
-             translationKey: "item:stuffedPepper"
+             translationKey: "item:dropPad"
```

#### 1611. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9206-L9207` → after: `L14796-L14803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14796-L14803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14796-L14803) · [Before (L9206-L9207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9206-L9207)

```diff
-             translationKey: "item:stuffedPepperDescription"
-           }
+             translationKey: "item:dropPadDescription"
+           },
+           ttb: 5e11,
+           textureInfo: ["drop_pad", "machine_side"],
+           texturePerSide: [1, 1, 0, 1, 1, 1],
+           harvestType: "rock",
+           drops: null,
+           showInCreativeInven: !1
```

#### 1612. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9209` → after: `L14805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14805) · [Before (L9209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9209)

```diff
-         Sushi: {
+         "Copper Ore": {
```

#### 1613. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9211` → after: `L14807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14807) · [Before (L9211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9211)

```diff
-             translationKey: "item:sushi"
+             translationKey: "item:copperOre"
```

#### 1614. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9220-L9221` → after: `L14810-L14816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14810-L14816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14810-L14816) · [Before (L9220-L9221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9220-L9221)

```diff
-             translationKey: "item:sushiDescription"
-           }
+             translationKey: "item:copperOreDescription"
+           },
+           ttb: 3300,
+           textureInfo: "copper_ore",
+           harvestType: "rock",
+           drops: "Raw Copper",
+           showInCreativeInven: !1
```

#### 1615. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9223` → after: `L14818-L14826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14818-L14826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14818-L14826) · [Before (L9223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9223)

```diff
-         Tomato: {
+         ...(0, ev.H)("Burner Drill", "burnerDrill", "burner_drill", ev.e),
+         ...(0, ev.H)("Crusher", "crusher", "crusher"),
+         ...(0, ev.H)("Smelter", "smelter", "smelter"),
+         ...(0, ev.H)("Generator", "generator", "generator", ev.u),
+         ...(0, ev.H)("Press", "press", "press"),
+         ...(0, ev.H)("Wire Mill", "wireMill", "wire_mill"),
+         ...(0, Sv.o)("Conveyor Belt", "conveyorBelt", ["conveyor_belt_top", "conveyor_belt_slab_side", "conveyor_belt_bottom"], Sv.e),
+         ...(0, Sv.o)("Splitter", "splitter", ["splitter_top", "splitter_slab_side", "conveyor_belt_bottom"], Sv.e),
+         "Voltite Ore": {
```

#### 1616. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9225` → after: `L14828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14828) · [Before (L9225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9225)

```diff
-             translationKey: "item:tomato"
+             translationKey: "item:voltiteOre"
```

#### 1617. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9234-L9235` → after: `L14831-L14892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14831-L14892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14831-L14892) · [Before (L9234-L9235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9234-L9235)

```diff
-             translationKey: "item:tomatoDescription"
-           }
+             translationKey: "item:voltiteOreDescription"
+           },
+           ttb: 4200,
+           textureInfo: "voltite_ore",
+           harvestType: "rock",
+           harvestLevel: 3,
+           drops: "Raw Voltite",
+           sa: [2, 6, 6],
+           showInCreativeInven: !1
+         },
+         ...(0, ev.H)("Alloy Kiln", "alloyKiln", "alloy_kiln"),
+         ...(0, ev.H)("Electric Drill", "electricDrill", "electric_drill", ev.n),
+         ...(0, ev.H)("Assembler", "autoBench", "auto_bench"),
+         ...(0, Sv.o)("Sorting Gate", "sortingGate", ["sorting_gate_top", "sorting_gate_slab_side", "conveyor_belt_bottom"], Sv.e),
+         ...(0, Sv.o)("Belt Loader", "beltLoader", ["belt_loader_top", "conveyor_belt_slab_side", "conveyor_belt_bottom", "belt_loader_slab_front"], [1, 1, 0, 2, 3, 1]),
+         ...Tv("Storage Silo", "storageSilo", "storage_silo"),
+ ... (46 more added lines; see GitHub link above)
```

#### 1618. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9237` → after: `L14894-L14895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14894-L14895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14894-L14895) · [Before (L9237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9237)

```diff
-         "Vegetable Soup": {
+         ...Tv("Forge Hopper", "forgeHopper", "forge_hopper", "machine_side"),
+         "Comet Ore": {
```

#### 1619. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9239` → after: `L14897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14897) · [Before (L9239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9239)

```diff
-             translationKey: "item:vegetableSoup"
+             translationKey: "item:cometOre"
```

#### 1620. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9247-L9323` → after: `L14900-L14908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14900-L14908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14900-L14908) · [Before (L9247-L9323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9247-L9323)

```diff
-             translationKey: "item:vegetableSoupDescription"
-           }
-         },
-         "Common Lottery Ticket": {
-           displayName: [{
-             str: "Common Lottery Ticket",
-             style: {
-               color: "#4d4d4d"
-             }
-           }],
-           description: "Take it to the Lottery stall in the spawn hub to redeem it for a reward.",
-           type: "Item",
-           textureInfo: "book",
-           heldItemGlb: "Book",
-           weight: 0,
-           heldItemScale: 1,
- ... (61 more removed lines; see GitHub link above)
+             translationKey: "item:cometOreDescription"
+           },
+           ttb: 5e3,
+           textureInfo: "comet_ore",
+           harvestType: "rock",
+           harvestLevel: 3,
+           drops: null,
+           sa: [8, 6, 10],
+           showInCreativeInven: !1
```

#### 1621. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9325` → after: `L14910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14910) · [Before (L9325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9325)

```diff
-         ...bz("Wood Clock", "clock_wood", {
+         "Comet Heart": {
```

#### 1622. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9327` → after: `L14912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14912) · [Before (L9327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9327)

```diff
-             translationKey: "item:woodClock"
+             translationKey: "item:cometHeart"
```

#### 1623. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9334-L9337` → after: `L14915-L14925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14915-L14925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14915-L14925) · [Before (L9334-L9337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9334-L9337)

```diff
-             translationKey: "item:clockDescription"
-           }
-         }),
-         ...bz("Gold Clock", "clock_gold", {
+             translationKey: "item:cometHeartDescription"
+           },
+           ttb: 18e3,
+           textureInfo: "comet_heart",
+           harvestType: "rock",
+           harvestLevel: 3,
+           drops: null,
+           sa: [12, 10, 14],
+           showInCreativeInven: !1
+         },
+         "_Starframe Spire": {
```

#### 1624. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9339` → after: `L14927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14927) · [Before (L9339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9339)

```diff
-             translationKey: "item:goldClock"
+             translationKey: "item:starframe"
```

#### 1625. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9346-L9757` → after: `L14930-L14967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14930-L14967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14930-L14967) · [Before (L9346-L9757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9346-L9757)

```diff
-             translationKey: "item:clockDescription"
-           }
-         }),
-         "Lucky Sword Upgrade": {
-           displayName: "Sword Upgrade",
-           description: "Use to permanently advance your Sword tier for this match. Share spare upgrades with your team.",
-           type: "Item",
-           textureInfo: "lucky_sword_upgrade",
-           weight: 0,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Lucky Armour Upgrade": {
-           displayName: "Armour Upgrade",
-           description: "Use to permanently advance your Armour tier for this match. Share spare upgrades with your team.",
-           type: "Item",
- ... (396 more removed lines; see GitHub link above)
+             translationKey: "item:starframeDescription"
+           },
+           ttb: 5e11,
+           textureInfo: "starframe",
+           harvestType: "rock",
+           drops: null,
+           sa: [6, 6, 10],
+           showInCreativeInven: !1
+         },
+         ...(0, Sv.u)("Conveyor Belt", "conveyorBelt", "conveyor_belt", ["conveyor_belt_slab_side", "conveyor_belt_bottom"]),
+         ...(0, Sv.u)("Fast Belt", "fastBelt", "fast_belt", ["fast_belt_slab_side", "conveyor_belt_bottom"], 1e3 * gv.c * gv.o),
+         ...(0, ev.H)("Recycler", "recycler", "recycler"),
+         ...(0, ev.I)("Recycler", "recycler", "recycler", [3, 8, 4]),
+         ...dv("Belt Lift", "beltLift", "belt_lift"),
+         ...dv("Belt Drop", "beltDrop", "belt_drop"),
+         ...(0, ev.H)("Crop Harvester", "cropHarvester", "crop_harvester", ev.h),
+ ... (22 more added lines; see GitHub link above)
```

#### 1626. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9759` → after: `L14969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14969) · [Before (L9759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9759)

```diff
-             translationKey: `item:${(0,Fz.ue)(tz)}`
+             translationKey: "item:pureVoltiteOre"
```

#### 1627. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9761-L9762` → after: `L14971-L14979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14971-L14979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14971-L14979) · [Before (L9761-L9762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9761-L9762)

```diff
-           description: {
-             translationKey: `item:sword${zz}Description`
+           ttb: 37800,
+           textureInfo: "pure_voltite_ore",
+           harvestType: "rock",
+           harvestLevel: 3,
+           drops: "Raw Voltite",
+           Wl: 9,
+           specialToolDrop: {
+             tool: "Moonstone Pickaxe",
+             drops: "Pure Voltite Ore"
```

#### 1628. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9764-L9768` → after: `L14981-L14984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14981-L14984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14981-L14984) · [Before (L9764-L9768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9764-L9768)

```diff
-           type: "Item",
-           textureInfo: (0, Fz.ye)(tz),
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
+           specialToolBonusDrops: {
+             "Golem Pickaxe": hv.o
+           },
+           sa: [2, 6, 6],
```

#### 1629. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9772-L9930` → after: `L14988-L15125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R14988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L14988-L15125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L14988-L15125) · [Before (L9772-L9930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9772-L9930)

```diff
-     Yz["Moonstone Sword"] = {
-       ...Yz["Diamond Sword"],
-       displayName: {
-         translationKey: "item:moonstoneSword"
-       },
-       textureInfo: "moonstone_sword",
-       showInCreativeInven: !1
-     }, Yz["Magmaward Fuel"] = {
-       displayName: {
-         translationKey: "item:magmawardFuel"
-       },
-       description: {
-         translationKey: "item:magmawardFuelDescription"
-       },
-       type: "Item",
-       textureInfo: "magmaward_fuel",
- ... (143 more removed lines; see GitHub link above)
+     }
+ 
+     function dv(vv, zv, Pv) {
+       const hv = {
+         displayName: {
+           translationKey: `item:${zv}`
+         },
+         description: {
+           translationKey: `item:${zv}Description`
+         },
+         ttb: 600,
+         textureInfo: [`${Pv}_top`, `${Pv}_side`, "conveyor_belt_bottom"],
+         texturePerSide: [1, 1, 0, 2, 1, 1],
+         harvestType: "rock",
+         harvestLevel: 0,
+         showInCreativeInven: !1
+ ... (122 more added lines; see GitHub link above)
```

#### 1630. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9932-L9941` → after: `L15127-L15128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R15127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L15127-L15128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L15127-L15128) · [Before (L9932-L9941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9932-L9941)

```diff
-       type: "Item",
-       textureInfo: "mob_cage_filled",
-       weight: 1,
-       heldItemScale: 1,
-       stackable: !1,
-       showInCreativeInven: !1
-     };
-     Yz["Nova Multitool"] = {
-       displayName: {
-         translationKey: "item:novaMultitool"
+       lv = {
+         underside: "electric_drill_bottom"
```

#### 1631. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9943-L9944` → after: `L15130-L15131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R15130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L15130-L15131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L15130-L15131) · [Before (L9943-L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9943-L9944)

```diff
-       description: {
-         translationKey: "item:novaMultitoolDescription"
+       Tv = {
+         underside: "deep_drill_bottom"
```

#### 1632. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9946-L9958` → after: `L15133-L15134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R15133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L15133-L15134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L15133-L15134) · [Before (L9946-L9958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9946-L9958)

```diff
-       type: "Tool",
-       textureInfo: "nova_multitool",
-       weight: 1,
-       heldItemScale: 1,
-       damage: 32,
-       stackable: !1,
-       harvests: "rock",
-       multiplier: 1,
-       level: 5,
-       showInCreativeInven: !1
-     }, Yz["Pocket Terminal"] = {
-       displayName: {
-         translationKey: "item:pocketTerminal"
+       Wv = {
+         backRuns: !0
```

#### 1633. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9960-L9961` → after: `L15136-L15137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R15136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L15136-L15137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L15136-L15137) · [Before (L9960-L9961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9960-L9961)

```diff
-       description: {
-         translationKey: "item:pocketTerminalDescription"
+       wv = {
+         backRuns: !0
```

#### 1634. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9963-L9977` → after: `L15139-L15140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R15139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L15139-L15140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L15139-L15140) · [Before (L9963-L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9963-L9977)

```diff
-       type: "Item",
-       textureInfo: "pocket_terminal",
-       weight: 1,
-       heldItemScale: .4,
-       stackable: !1,
-       showInCreativeInven: !1,
-       firstPersonHeldRotationOffset: [-.53, 1.67, .02],
-       thirdPersonHeldRotationOffset: [-Math.PI / 2, 0, 0]
-     };
-     for (const [yz, Mz, dz, hz] of [
-         ["Comet Beacon", "cometBeacon", "comet_beacon", !0],
-         ["Nova Wrench", "novaWrench", "nova_wrench", !1]
-       ]) Yz[yz] = {
-       displayName: {
-         translationKey: `item:${Mz}`
+       av = {
+         underside: "sky_tap_bottom"
```

#### 1635. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9979-L9980` → after: `L15142-L15143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R15142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L15142-L15143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L15142-L15143) · [Before (L9979-L9980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9979-L9980)

```diff
-       description: {
-         translationKey: `item:${Mz}Description`
+       sv = {
+         uniform: !0
```

#### 1636. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9982-L9987` → after: `L15145-L15297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R15145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L15145-L15297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L15145-L15297) · [Before (L9982-L9987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9982-L9987)

```diff
-       type: "Item",
-       textureInfo: dz,
-       weight: 1,
-       heldItemScale: 1,
-       stackable: hz,
-       showInCreativeInven: !1
+       Cv = {
+         burner_drill_side: {
+           animationInterval: 200
+         },
+         crusher_side: {
+           animationInterval: 400,
+           interpolateFrames: !1
+         },
+         smelter_side: {
+           animationInterval: 650
+         },
+         press_side: {
+           animationInterval: 400,
+           interpolateFrames: !1
+         },
+         wire_mill_side: {
+ ... (137 more added lines; see GitHub link above)
```

#### 1637. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9991` → after: `L15319-L15321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R15319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L15319-L15321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L15319-L15321) · [Before (L9991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9991)

```diff
-       return [...zz, ...(0, gz.i)(gz.p, tz)].map((zz => cz[zz].id))
+       let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const hv = "cryo" === vv ? Tv : lv;
+       return Pv || 0 !== zv ? `${hv}|meta|conn|${mv(zv)}${Pv?`|${wv}`:""}` : hv
```

#### 1638. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9995` → after: `L15327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R15327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L15327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L15327) · [Before (L9995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9995)

```diff
-       return zz.split(" ")[0]
+       return 0 === vv ? iv : `${iv}|meta|rot1|Fill${vv}`
```

#### 1639. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L9997-L10007` → after: `L15329-L15332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R15329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L15329-L15332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L15329-L15332) · [Before (L9997-L10007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L9997-L10007)

```diff
-     const Zz = .0018;
-     let Gz = Object.values(Oz.j).reduce(((zz, tz) => Math.max(zz, tz.id)), 0) + 1;
-     for (const yz in Yz) Yz[yz].id = Gz, Yz[yz].name = yz, Yz[Gz] = Yz[yz], (0, Wz.i)(Yz, Yz[yz]), ++Gz;
-     const Tz = {};
-     for (const yz in Yz) Tz[yz] = new Xz.l(Yz[yz]);
-     const cz = {},
-       jz = [Oz.j, Tz].flatMap(Object.entries);
-     for (const [yz, Mz] of jz) cz[yz] = Mz, cz[Mz.id] = Mz;
-     for (const yz of Hz.e) {
-       const zz = yz;
-       if (!cz[zz]) throw new Error(`Missing "${zz}" item for vehicle type "${yz}"`)
+ 
+     function mv(vv) {
+       const zv = hv.h.filter(((zv, Pv) => vv >> Pv & 1));
+       return zv.length ? zv.join("_") : "none"
```

#### 1640. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L10009-L10016` → after: `L15334-L15748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R15334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L15334-L15748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L15334-L15748) · [Before (L10009-L10016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L10009-L10016)

```diff
-     const Az = {};
-     for (const yz in Yz)
-       if ("rock" === Yz[yz].harvests) {
-         const zz = Yz[yz].level;
-         if (void 0 !== zz && "string" === typeof yz)
-           for (let tz = 0; tz <= zz; tz++) {
-             const sz = Az[tz];
-             (void 0 === sz || zz < Yz[sz].level) && (Az[tz] = yz)
+ 
+     function jv(vv, zv, Pv, hv) {
+       const Sv = {
+           displayName: {
+             translationKey: `item:${Pv}`
+           },
+           description: {
+             translationKey: "item:fluidPipeDescription"
+           },
+           ttb: 600,
+           harvestType: "rock",
+           harvestLevel: 0,
+           showInCreativeInven: !1,
+           itemTexture: "fluid_pipe",
+           model: "CustomModel",
+           solid: !1,
+ ... (399 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/71.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/71.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a4620b97070eab79968b6a20fdef4308abfa5f2179e61a469e121437415242b3)

#### 1. `bundles/bloxd.io/chunks/js/71.js` (Changed code · before: `L4` → after: `L4-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a4620b97070eab79968b6a20fdef4308abfa5f2179e61a469e121437415242b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a4620b97070eab79968b6a20fdef4308abfa5f2179e61a469e121437415242b3) · [After (L4-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/71.js#L4-L108) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/71.js#L4)

```diff
-   36449: (zz, tz, sz) => {
+   36549: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => gv,
+       f: () => dv,
+       h: () => Nv,
+       j: () => lv,
+       m: () => pv,
+       q: () => Cv
+     });
+     var hv = Pv(312),
+       Sv = Pv(609),
+       ev = Pv(321);
+     const gv = ["", "|meta|charging2", "|meta|charging3", "|meta|charging4"];
+ 
+     function pv(vv, zv) {
+       return "" === zv ? vv : `${vv} ${zv}`
+ ... (89 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/71.js` (Changed code · before: `L7` → after: `L111-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a4620b97070eab79968b6a20fdef4308abfa5f2179e61a469e121437415242b3R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a4620b97070eab79968b6a20fdef4308abfa5f2179e61a469e121437415242b3) · [After (L111-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/71.js#L111-L116) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/71.js#L7)

```diff
-       g: () => Wz
+       h: () => Dv,
+       l: () => Kv,
+       o: () => Ov,
+       r: () => Rv,
+       t: () => tv,
+       v: () => Uv
```

#### 3. `bundles/bloxd.io/chunks/js/71.js` (Changed code · before: `L9-L10` → after: `L118-L10018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a4620b97070eab79968b6a20fdef4308abfa5f2179e61a469e121437415242b3R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a4620b97070eab79968b6a20fdef4308abfa5f2179e61a469e121437415242b3) · [After (L118-L10018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/71.js#L118-L10018) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/71.js#L9-L10)

```diff
-     const Fz = ["Boat", "Obsidian Boat", "Hovercraft", "Yellow Kart", "White Kart", "Red Kart", "Purple Kart", "Pink Kart", "Orange Kart", "Magenta Kart", "Lime Kart", "Light Gray Kart", "Light Blue Kart", "Green Kart", "Gray Kart", "Cyan Kart", "Brown Kart", "Blue Kart", "Black  … [truncated]
-       Wz = 39 == sz.j ? ["canAutoStep", "speedMultiplier"] : null
+     var hv = Pv(312),
+       Sv = Pv(9144),
+       ev = Pv(4209),
+       gv = Pv(9101),
+       pv = Pv(9122),
+       dv = Pv(618);
+     const Nv = {
+       "AK-47": {
+         gunType: "semi_automatic",
+         scopeType: "none",
+         muzzleFlashOffsetFromGun: [-5.5, -.25, 0],
+         muzzleFlashScale: 1.5,
+         autoFireWithMouse: !0,
+         fireRate: 600,
+         cadenceMs: 75,
+         equipDelay: 24,
+ ... (9885 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/72.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/72.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-76829bd6cd8c381e2acfc9230bd915b009dd47d26c001a779dd1ccb1cad749f9)

#### 1. `bundles/bloxd.io/chunks/js/72.js` (Changed code · before: `L4-L340` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-76829bd6cd8c381e2acfc9230bd915b009dd47d26c001a779dd1ccb1cad749f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-76829bd6cd8c381e2acfc9230bd915b009dd47d26c001a779dd1ccb1cad749f9) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/72.js#L4-L10) · [Before (L4-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/72.js#L4-L340)

```diff
-   36451: (zz, tz, sz) => {
-     if (sz.d(tz, {
-         e: () => vz,
-         g: () => Wz,
-         k: () => Oz,
-         l: () => Xz,
-         p: () => Yz,
-         s: () => Hz
-       }), 39 == sz.j) var Fz = sz(36453);
-     const Wz = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
-       Xz = ["Blade", "Guard", "Handle"],
-       Oz = {
-         Wood: {
-           material: "Wood",
-           baseSword: "Wood Sword",
-           value: 1,
- ... (321 more removed lines; see GitHub link above)
+   36554: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => hv,
+       i: () => Sv
+     });
+     const hv = ["Boat", "Obsidian Boat", "Hovercraft", "Yellow Kart", "White Kart", "Red Kart", "Purple Kart", "Pink Kart", "Orange Kart", "Magenta Kart", "Lime Kart", "Light Gray Kart", "Light Blue Kart", "Green Kart", "Gray Kart", "Cyan Kart", "Brown Kart", "Blue Kart", "Black  … [truncated]
+       Sv = 39 == Pv.j ? ["canAutoStep", "speedMultiplier"] : null
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/73.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/73.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba)

#### 1. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L4-L17` → after: `L4-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L4-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/73.js#L4-L229) · [Before (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/73.js#L4-L17)

```diff
-   4335: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Kz
-     });
-     var Fz = sz(30),
-       Wz = sz(34),
-       Xz = sz(1269),
-       Oz = sz(2637);
-     const oz = 3e4,
-       vz = 1e3;
- 
-     function Uz() {
-       return "visible" === document.visibilityState && "inGame" === Fz.b.get("gameState") && (0, Xz.o)()
-     }
+   36562: (vv, zv, Pv) => {
+     if (Pv.d(zv, {
+         d: () => dv,
+         e: () => Sv,
+         f: () => gv,
+         j: () => ev,
+         k: () => jv,
+         m: () => iv
+       }), 39 == Pv.j) var hv = Pv(36568);
+     const Sv = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
+       ev = ["Blade", "Guard", "Handle"],
+       gv = {
+         Wood: {
+           material: "Wood",
+           baseSword: "Wood Sword",
+           value: 1,
+ ... (210 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L20-L39` → after: `L232-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L232-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/73.js#L232-L325) · [Before (L20-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/73.js#L20-L39)

```diff
-       (0, Oz.j)() || function(zz, tz, sz) {
-         let Fz = 0;
-         const Wz = setInterval((() => {
-           tz() && (Fz += vz, Fz >= zz && (clearInterval(Wz), sz()))
-         }), vz)
-       }(oz, Uz, (() => {
-         tz().then((() => {
-           zz(`saved for the player after ${oz/1e3} s of play`), (0, Oz.q)(), Wz.o.Yg("chat", {
-             content: [{
-               str: "Saved a debug file to your downloads: please send it to us with a screenshot of the game.",
-               style: {
-                 color: "#ffd84a"
-               }
-             }]
-           })
-         }))
- ... (4 more removed lines; see GitHub link above)
+       return `${vv} ${zv}`
+     }
+     Sv.flatMap((vv => ev.map((zv => iv(vv, zv)))));
+ 
+     function cv(vv) {
+       let {
+         blade: zv,
+         guard: Pv,
+         handle: hv
+       } = vv;
+       return `${Cv}${zv.toLowerCase()}-${Pv.toLowerCase()}-${hv.toLowerCase()}`
+     }
+ 
+     function Gv(vv) {
+       if (! function(vv) {
+           return "string" === typeof vv && vv.startsWith(Cv)
+ ... (78 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/73.js` (Changed code · before: `L41-L350` → after: `L327-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebbaR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fe555a79bf6f8a2615dd47d275d46f82a8b0c2f332a2e88727ef622471ebba) · [After (L327-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/73.js#L327-L340) · [Before (L41-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/73.js#L41-L350)

```diff
-       return 0 === zz.length ? 0 : zz[Math.min(zz.length - 1, Math.floor(tz * zz.length))]
-     }
-     sz.d(tz, {
-       e: () => Fz
-     })
-   },
-   37362: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Uz,
-       i: () => Kz,
-       m: () => rz,
-       o: () => Pz,
-       r: () => Bz
-     });
-     var Fz = sz(4335),
-       Wz = sz(8710),
- ... (294 more removed lines; see GitHub link above)
+       return "Blade" === zv ? vv.blade : "Guard" === zv ? vv.guard : vv.handle
+     }
+ 
+     function Fv(vv) {
+       return Math.round(100 * vv) / 100
+     }
+ 
+     function Yv(vv) {
+       return `${Math.round(100*vv)}%`
+     }
+ 
+     function nv(vv) {
+       return `${vv>=0?"+":""}${Yv(vv)}`
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/74.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/74.js` (48 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28)

#### 1. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L4-L56` → after: `L4-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L4-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L4-L458) · [Before (L4-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L4-L56)

```diff
-   4344: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => it,
-       e: () => Ns,
-       i: () => ft,
-       j: () => ss,
-       k: () => Vt,
-       o: () => Et,
-       r: () => dt,
-       u: () => nt,
-       x: () => Zt,
-       z: () => us,
-       B: () => Ks,
-       E: () => qt,
-       F: () => Mt
-     });
- ... (37 more removed lines; see GitHub link above)
+   36728: (vv, zv, Pv) => {
+     var hv = {
+       "./67/67_Atlas.png": 27136,
+       "./67/67_Model.glb": 33103,
+       "./67/67_Reconstructed.glb": 33110,
+       "./67/variations/0_67_default.png": 27143,
+       "./Armour Collector/Armour Collector_Atlas.png": 27147,
+       "./Armour Collector/Armour Collector_Model.glb": 33118,
+       "./Armour Collector/Armour Collector_Reconstructed.glb": 33122,
+       "./Armour Collector/variations/0_armour collector_default.png": 27154,
+       "./Bear/BearSaddle_Atlas.png": 27163,
+       "./Bear/Bear_Atlas.png": 27165,
+       "./Bear/Bear_Model.glb": 33127,
+       "./Bear/variations/0_bear_default.png": 27173,
+       "./Bobino Musculino/Bobino Musculino_Atlas.png": 27181,
+       "./Bobino Musculino/Bobino Musculino_Model.glb": 33132,
+ ... (439 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L58-L59` → after: `L460-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L460-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L460-L462) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L58-L59)

```diff
-     function Cz(zz, tz) {
-       return zz === `function ${tz}() { [native code] }` || zz === `function ${tz}() {\n    [native code]\n}`
+     function Sv(vv) {
+       var zv = ev(vv);
+       return Pv(zv)
```

#### 3. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L66-L86` → after: `L465-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L465-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L465-L533) · [Before (L66-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L66-L86)

```diff
-     function cz(zz, tz, sz) {
-       if (Tz === Gz && mz === Pz && ! function() {
-           const zz = xz;
-           return Iz >= Hz && (Jz(bz, Nz, [zz]), Iz = 0), zz[Iz++] < 256 / gz
-         }()) return function(zz, tz, sz) {
-         return Jz(zz, tz, sz ?? 0)
-       }(...arguments);
-       if (Tz === ez || mz === rz) return Oz(zz, tz, sz);
-       let Fz;
-       Tz = ez;
-       try {
-         mz === Bz && (mz = Yz, mz = function() {
-           const zz = Oz(Wz, Oz, []);
-           if (Cz(zz, "apply")) return rz;
-           if (null === Oz(Xz, /\(\.\.\.arguments\)/, [zz]) && null === Oz(Xz, /^function\s*\(\.\.\.[\w$]+\)/, [zz])) return rz;
-           if ("function" !== typeof Dz || "function" !== typeof oz || "function" !== typeof vz || "function" !== typeof Uz || "function" !== typeof Kz || "function" !== typeof bz || "function" !== typeof uz || !Cz(Oz(Wz, oz, []), "call") || !Cz(Oz(Wz, vz, []), "apply") || !Cz(Oz( … [truncated]
- ... (5 more removed lines; see GitHub link above)
+     function ev(vv) {
+       if (!Pv.o(hv, vv)) {
+         var zv = new Error("Cannot find module '" + vv + "'");
+         throw zv.code = "MODULE_NOT_FOUND", zv
+       }
+       return hv[vv]
+     }
+     Sv.keys = function() {
+       return Object.keys(hv)
+     }, Sv.resolve = ev, vv.exports = Sv, Sv.id = 36728
+   },
+   37799: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       default: () => ev
+     });
+     var hv = Pv(37807),
+ ... (53 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L88-L92` → after: `L535-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L535-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L535-L537) · [Before (L88-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L88-L92)

```diff
-             if (!0 !== tz(Fz, sz, [sz])) return rz;
-             const zz = new uz(Hz);
-             tz(bz, Nz, [zz]), xz = zz
-           } catch {
-             return rz
+             Sv()(zv, ev)
+           } finally {
+             hv = null
```

#### 5. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L94-L97` → after: `L539-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L539-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L539-L548) · [Before (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L94-L97)

```diff
-           return Jz = tz, Pz
-         }()), Fz = Oz(zz, tz, sz)
-       } catch (wz) {
-         throw mz = rz, wz
+         }
+       };
+ 
+       function gv(vv, zv) {
+         var Pv = (vv[3] - vv[0]) / 2,
+           hv = vv[0] + Pv,
+           Sv = vv[2] + Pv,
+           ev = pv(hv, zv[0], zv[3]) - hv,
+           gv = pv(Sv, zv[2], zv[5]) - Sv;
+         return ev * ev + gv * gv <= Pv * Pv
```

#### 6. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L103-L104` → after: `L551-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L551-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L551-L553) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L103-L104)

```diff
-     function Az() {
-       return (jz === Oz ? 0 : 3) + Tz
+       function pv(vv, zv, Pv) {
+         return vv < zv ? zv : vv > Pv ? Pv : vv
+       }
```

#### 7. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L106-L109` → after: `L555-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L555-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L555-L575) · [Before (L106-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L106-L109)

```diff
- 
-     function yz() {
-       const zz = Az();
-       return jz = Oz, zz
+   },
+   37874: (vv, zv, Pv) => {
+     function hv(vv) {
+       return {
+         name: "collideTerrain",
+         order: 0,
+         state: {
+           callback: null
+         },
+         Km: function(zv, Pv) {
+           var hv = vv.entities;
+           hv.bev(zv) && (hv.Z4(zv).body.eW = function(Pv) {
+             var hv = vv.Rm.kev(zv).callback;
+             hv && hv(Pv, zv)
+           })
+         },
+ ... (5 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L111` → after: `L577-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L577-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L577-L581) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L111)

```diff
- 
+     Pv.r(zv), Pv.d(zv, {
+       default: () => hv
+     })
+   },
+   37885: (vv, zv, Pv) => {
```

#### 9. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L113` → after: `L583-L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L583-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L583-L594) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L113)

```diff
-       jz = zz >= 3 ? cz : Oz, Tz = zz % 3
+       return {
+         name: "A4",
+         order: 99,
+         state: {
+           pD: 1.5
+         },
+         Km: null,
+         HO: null,
+         system: function(zv, Pv) {
+           for (var hv = vv.camera.dL, ev = 0; ev < Pv.length; ev++) Sv(Pv[ev], hv, vv)
+         }
+       }
```

#### 10. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L131-L138` → after: `L597-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L597-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L597-L604) · [Before (L131-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L131-L138)

```diff
-     function Ez(zz) {
-       if ("function" !== typeof zz) return "#a0.0";
-       const tz = jz(nz, fz, [zz]);
-       if (void 0 !== tz) return tz;
-       const sz = jz(dz, zz, []),
-         Fz = sz.length > Rz ? Rz : sz.length,
-         Wz = `#${function(zz,tz){const sz=jz(kz,qz,[tz]);if(null===sz)return"s";const Fz=sz[1];if("ProxyObject"===Fz)return"p";if(""!==Fz)return jz(Lz,Fz,["bound "])?"b":"n";try{const tz=hz(zz,"name"),sz=void 0!==tz&&jz(Qz,tz,["value"])?tz.value:void 0;return"string"===typeof sz& … [truncated]
-       return jz(az, fz, [zz, Wz]), Wz
+     function Sv(vv, zv, Pv) {
+       if (Pv.Rm.Xev(vv.VK)) {
+         var hv = Pv.Rm.Nvv(vv.VK).mesh;
+         if (hv.metadata) {
+           var Sv = zv < vv.pD;
+           Pv.Ma.EX(hv, !Sv)
+         }
+       }
```

#### 11. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L142-L155` → after: `L618-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L618-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L618-L620) · [Before (L142-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L142-L155)

```diff
-       const tz = jz(kz, pz, [zz]);
-       return null === tz ? zz : tz[1]
-     }
-     var tt = sz(3386);
-     const st = Function.prototype.toString,
-       Ft = Object.getOwnPropertyDescriptor,
-       Wt = RegExp.prototype.exec,
-       Xt = Object.prototype.hasOwnProperty,
-       Ot = Set.prototype.has,
-       ot = WeakMap.prototype.get,
-       vt = WeakMap.prototype.set,
-       Ut = Reflect.get,
-       Kt = Object.getPrototypeOf,
-       ut = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;
+       let zv = 0;
+       const Pv = Sv().create(),
+         hv = Sv().create();
```

#### 12. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L157` → after: `L622-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L622-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L622-L637) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L157)

```diff
-     function Nt(zz, tz, sz) {
+       function ev(gv, pv) {
+         if (gv.uev === zv) return;
+         gv.uev = zv;
+         const dv = vv.Rm.vzv(gv.Xw);
+         dv && ev(dv, pv);
+         const Nv = vv.Rm.rA(gv.VK),
+           lv = vv.Rm.rA(gv.Xw);
+         if (lv)
+           if (gv.pzv ? gv.pzv(Pv, pv, gv.offset) : Sv().copy(Pv, gv.offset), pv) Sv().add(Nv.iH, lv.iH, Pv);
+           else {
+             const zv = Nv.iW || vv.iW;
+             for (let vv = 0; vv < 3; vv++) hv[vv] = lv.position[vv] - zv[vv] + Pv[vv];
+             vv.Rm.Pgv(gv.VK, hv)
+           }
+         else gv.gzv || (gv.zgv && gv.zgv(gv.VK), vv.Rm.bK(gv.VK, vv.Rm.names.KF))
+       }
```

#### 13. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L159-L163` → after: `L639-L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L639-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L639-L666) · [Before (L159-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L159-L163)

```diff
-         code: zz,
-         holder: tz,
-         key: sz,
-         ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
-         native: new RegExp(`^function (get )?${sz}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
+         name: "KF",
+         order: vv.room ? 50 : 97,
+         state: {
+           Xw: 0,
+           offset: null,
+           pzv: null,
+           zzv: !0,
+           zgv: null,
+           gzv: !1,
+           uev: 0
+         },
+         Km: function(Pv, hv) {
+           hv.offset = hv.offset ? Sv().clone(hv.offset) : Sv().create();
+           const gv = vv.Rm.vx(Pv);
+           gv && (gv.IU = !1, Sv().set(gv.pC, 0, 0, 0), Sv().set(gv.vR, 0, 0, 0), Sv().set(gv.gR, 0, 0, 0)), zv++, ev(hv, !1), zv++, ev(hv, !0)
+         },
+ ... (12 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L167-L168` → after: `L681-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L681-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L681-L687) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L167-L168)

```diff
-     function bt() {
-       return ut
+     function Nv(vv, zv) {
+       const Pv = zv.hhv || zv;
+       void 0 === Pv.lV?.aLightLevels && (Pv.hV("aLightLevels", 4), Pv.lV.aLightLevels = (0, ev.p)());
+       const {
+         lV: hv
+       } = zv;
+       !hv || void 0 !== hv.aLightLevels && null !== hv.aLightLevels && hv.aLightLevels !== Pv.lV?.aLightLevels || (hv.aLightLevels = (0, ev.p)()), vv.Ma.tvv && Pv.material && vv.Ma.tvv(Pv.material)
```

#### 15. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L173` → after: `L690-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L690-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L690-L692) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L173)

```diff
-     function gt() {
+     function lv(vv, zv) {
+       const Pv = (0, ev.l)(zv);
+       for (const hv of Pv) Nv(vv, hv);
```

#### 16. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L245-L254` → after: `L697-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L697-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L697-L753) · [Before (L245-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L245-L254)

```diff
-       let tz;
-       try {
-         const sz = Ut(globalThis, zz);
-         tz = "function" === typeof sz ? sz.prototype : void 0
-       } catch {}
-       return () => tz
-     }
- 
-     function xt(zz, tz, sz) {
-       return sz.map((sz => Nt(zz, tz, sz)))
+       return {
+         name: "mesh",
+         order: 100,
+         state: {
+           NK: null,
+           Ozv: null,
+           mesh: null,
+           offset: null,
+           egv: null,
+           Zs: !1,
+           ggv: !0,
+           Uzv: !0,
+           pgv: null,
+           dgv: null,
+           Ngv: -1
+         },
+ ... (41 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L256-L271` → after: `L755-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L755-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L755-L768) · [Before (L256-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L256-L271)

```diff
-     const mt = Nt("rx", Yt("HTMLCanvasElement"), "getContext"),
-       Jt = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
-       It = {
-         webgpu: [...xt("gd", Yt("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...xt("gq", Yt("GPUQueue"), ["submit", "writeBuffer"]), ...xt("ge", Yt("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...xt("gp", Yt("GPURenderPassEncoder … [truncated]
-         webgl: [...xt("g2", Yt("WebGL2RenderingContext"), [...Jt, "drawArraysInstanced", "drawElementsInstanced"]), mt],
-         webgl1: [...xt("g1", Yt("WebGLRenderingContext"), Jt), mt]
-       };
-     let Ct = [];
-     const et = new WeakMap;
- 
-     function Zt(zz, tz) {
-       const sz = yz();
-       try {
-         jz(vt, et, [zz, tz])
-       } finally {
-         Mz(sz)
+   },
+   37789: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       PhysicsState: () => ev,
+       default: () => gv,
+       setFloatingYValue: () => Nv,
+       agv: () => dv,
+       sgv: () => lv
+     });
+     var hv = Pv(327),
+       Sv = Pv.n(hv);
+     class ev {
+       constructor() {
+         this.body = null, this.RS = null, this.vW = null
```

#### 18. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L276-L281` → after: `L773-L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L773-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L773-L799) · [Before (L276-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L276-L281)

```diff
-       try {
-         const tz = vs(zz),
-           sz = jz(ot, et, [tz]);
-         return ts(sz, zz) ? Tt(zz, !0) : `${Tt(zz,!1)}${Ez(sz??tz)}`
-       } catch {
-         return `${Tt(zz,!1)}${Ez(void 0)}`
+       return {
+         name: "physics",
+         order: 40,
+         state: new ev,
+         Km: function(zv, Pv) {
+           Pv.vW = vv, Pv.RS = null, Pv.body = vv.physics.lW(), dv(Pv, vv.Rm.rA(Pv.VK))
+         },
+         HO: function(zv, Pv) {
+           if (vv.Rm.hasPosition(Pv.VK)) {
+             var hv = vv.Rm.rA(Pv.VK);
+             lv(Pv, hv), Tv(Pv, hv, 0, !1)
+           }
+           vv.physics.TW(Pv.body)
+         },
+         system: function(zv, Pv) {
+           for (var hv = 0; hv < Pv.length; hv++) {
+ ... (11 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L286-L290` → after: `L805-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L805-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L805-L807) · [Before (L286-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L286-L290)

```diff
-       let {
-         code: sz,
-         key: Fz
-       } = zz;
-       return `wh:${sz}${tz?"-dbg":""}:${Fz}`
+       var Pv = vv.body.BT,
+         hv = zv.Yzv;
+       Sv().copy(Pv.base, hv), Sv().set(Pv.vec, zv.width, zv.height, zv.width), Sv().add(Pv.max, Pv.base, Pv.vec), Nv(vv, zv, vv.RS)
```

#### 20. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L293-L294` → after: `L810-L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L810-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L810-L813) · [Before (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L293-L294)

```diff
-     function ct(zz) {
-       return Object.values(It).flatMap((tz => tz.map((tz => Tt(tz, zz)))))
+     function Nv(vv, zv, Pv) {
+       vv.RS = Pv;
+       const hv = zv.iW ?? vv.vW.iW;
+       vv.body.rU = null !== Pv ? Pv - hv[1] : null
```

#### 21. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L300-L301` → after: `L816-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L816-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L816-L820) · [Before (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L300-L301)

```diff
-     function Mt(zz) {
-       Ct = It[zz]
+     function lv(vv, zv) {
+       var Pv = vv.body.BT.base,
+         hv = zv.width / 2,
+         Sv = zv.K3;
+       Sv[0] = Pv[0] + hv, Sv[1] = Pv[1], Sv[2] = Pv[2] + hv
```

#### 22. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L304-L309` → after: `L823-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L823-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L823-L837) · [Before (L304-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L304-L309)

```diff
-     function dt(zz) {
-       const tz = yz();
-       try {
-         return ht(zz) || ht(zt(zz))
-       } finally {
-         Mz(tz)
+     function Tv(vv, zv, Pv, hv) {
+       var ev = vv.body.pC;
+       Sv().uv(pv, zv.K3, ev, Pv), hv && Sv().lerp(pv, zv.iH, pv, .3), Sv().copy(zv.iH, pv)
+     }
+   },
+   37786: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       PositionState: () => Sv,
+       default: () => ev,
+       igv: () => gv
+     });
+     const hv = Pv(327);
+     class Sv {
+       constructor() {
+         this.position = null, this.width = .8, this.height = .8, this.K3 = null, this.iH = null, this.Yzv = null, this.iW = null
```

#### 23. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L314` → after: `L842-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L842-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L842-L860) · [Before (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L314)

```diff
-       return jz(Ot, At, [zz])
+       return {
+         name: "position",
+         order: 41,
+         state: new Sv,
+         Km: function(zv, Pv) {
+           var Sv = [0, 0, 0];
+           Pv.position && hv.copy(Sv, Pv.position), Pv.position = Sv, Pv.K3 = hv.create(), Pv.iH = hv.create(), Pv.Yzv = new Float32Array(6), vv.pvv(Pv.position, null, Pv.K3), hv.copy(Pv.iH, Pv.K3), gv(Pv)
+         },
+         HO: null,
+         system: function(zv, Pv) {
+           for (var hv = 0; hv < Pv.length; hv++) {
+             var Sv = Pv[hv],
+               ev = Sv.iW ?? vv.iW,
+               pv = Sv.position,
+               dv = Sv.K3;
+             pv[0] = dv[0] + ev[0], pv[1] = dv[1] + ev[1], pv[2] = dv[2] + ev[2], gv(Sv)
+ ... (3 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L318` → after: `L864-L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L864-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L864-L867) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L318)

```diff
-       return new Set(rt.filter((tz => tz.tier === zz)).map((zz => `wh:${zz.code}`)))
+       var zv = vv.width / 2,
+         Pv = vv.K3,
+         hv = vv.Yzv;
+       hv[0] = Pv[0] - zv, hv[1] = Pv[1], hv[2] = Pv[2] - zv, hv[3] = Pv[0] + zv, hv[4] = Pv[1] + vv.height, hv[5] = Pv[2] + zv
```

#### 25. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L320-L324` → after: `L869-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L869-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L869-L870) · [Before (L320-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L320-L324)

```diff
-     const kt = Qt("punished"),
-       it = !1,
-       Lt = new Set(tt.b),
-       lt = Qt("weighted");
- 
+   },
+   37794: (vv, zv, Pv) => {
```

#### 26. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L326-L330` → after: `L872-L886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L872-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L872-L886) · [Before (L326-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L326-L330)

```diff
-       const tz = yz();
-       try {
-         return St(zt(zz))
-       } finally {
-         Mz(tz)
+       var zv = "cgv";
+       return {
+         name: zv,
+         order: 99,
+         state: {
+           time: 100.1
+         },
+         Km: null,
+         HO: null,
+         system: function(Pv, hv) {
+           for (var Sv = 0; Sv < hv.length; Sv++) {
+             var ev = hv[Sv];
+             ev.time -= Pv, ev.time < 0 && vv.Rm.bK(ev.VK, zv)
+           }
+         }
```

#### 27. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L333-L339` → after: `L889-L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L889-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L889-L906) · [Before (L333-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L333-L339)

```diff
- 
-     function qt(zz) {
-       const tz = yz();
-       try {
-         return zt(zz)
-       } finally {
-         Mz(tz)
+     Pv.r(zv), Pv.d(zv, {
+       default: () => hv
+     })
+   },
+   37227: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       d: () => Nv,
+       g: () => pv,
+       i: () => lv
+     });
+     var hv = Pv(37234),
+       Sv = Pv.n(hv),
+       ev = Pv(36983),
+       gv = Pv(37078);
+     const pv = 65535;
+     class dv {
+ ... (2 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L341-L352` → after: `L908-L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L908-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L908-L919) · [Before (L341-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L341-L352)

```diff
-     }
- 
-     function St(zz) {
-       return jz(Ot, lt, [zz])
-     }
- 
-     function Vt(zz) {
-       const tz = yz();
-       try {
-         return Rt(zz)
-       } finally {
-         Mz(tz)
+       add(vv, zv, Pv) {
+         var hv = (0, ev.h)(vv, zv, Pv);
+         this.mgv || (this.mgv = new Map), this.mgv.has(hv) || this.mgv.set(hv, [vv, zv, Pv])
+       }
+       remove(vv, zv, Pv) {
+         this.mgv && this.mgv.delete((0, ev.h)(vv, zv, Pv))
+       }
+       empty() {
+         this.mgv && this.mgv.clear()
+       }
+       forEach(vv) {
+         this.mgv && this.mgv.forEach((zv => vv(zv)))
```

#### 29. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L356-L357` → after: `L923-L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L923-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L923-L928) · [Before (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L356-L357)

```diff
-     function Rt(zz) {
-       return jz(Ot, Lt, [zz])
+     function Nv(vv, zv, Pv, hv, ev, gv, Nv, lv) {
+       let Tv = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : pv,
+         wv = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
+       this.vW = vv, this.mzv = !1, this.Za = 0, this.es = [0, 0, 0], this.Fa = zv, this.fW = Nv, this.mD = lv, this.i = Pv, this.j = hv, this.k = ev, this.size = gv, this.x = Pv * gv, this.y = hv * gv, this.z = ev * gv, this.pos = [this.x, this.y, this.z], this.gs = !1, this.ehv  … [truncated]
+       var av = Array.from(Array(27), (() => null));
+       this.da = Sv()(av, [3, 3, 3]).lo(1, 1, 1), this.da.set(0, 0, 0, this), this.jgv = 0, this.Es = 0, this.xs = !1, this.qa = 0, this.Aa = !1, this.Fs = !1, this.Ys = null, this.fgv = new dv, this.uw = null, this.Pa = !1, this.Us = !1, this.Rs = !1, Wv(this, wv)
```

#### 30. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L361` → after: `L932-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L932-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L932-L933) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L361)

```diff
-       return "wb" === zz || jz(Ot, kt, [zz])
+       var zv = new Uint16Array(vv * vv * vv);
+       return Sv()(zv, [vv, vv, vv])
```

#### 31. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L364-L370` → after: `L936-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L936-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L936-L938) · [Before (L364-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L364-L370)

```diff
-     function ft(zz) {
-       const tz = yz();
-       try {
-         return pt(zz) || Rt(zz)
-       } finally {
-         Mz(tz)
-       }
+     function Tv(vv, zv, Pv, hv, Sv, ev) {
+       var gv = zv[Pv];
+       gv && gv(vv.x + hv, vv.y + Sv, vv.z + ev)
```

#### 32. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L373-L378` → after: `L941-L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L941-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L941-L961) · [Before (L373-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L373-L378)

```diff
-     function Et(zz) {
-       const tz = yz();
-       try {
-         return "wb" === zz || it && pt(zz)
-       } finally {
-         Mz(tz)
+     function Wv(vv, zv) {
+       if (zv) ! function(vv, zv) {
+         for (var Pv = zv.lq, hv = 0; hv < Pv.length; hv++) {
+           var Sv = Pv[hv];
+           wv(vv, vv.fW.data[Sv], Sv >> 10, Sv >> 5 & 31, 31 & Sv)
+         }
+         vv.mw.set(zv.hq), vv.rw = zv.PD, vv.za = zv.kw, vv.gs = !vv.za
+       }(vv, zv);
+       else {
+         for (var Pv = vv.fW, hv = Pv.data, Sv = Pv.shape[0], ev = vv.vW.kW.Ja, gv = vv.vW.kW.Xx, dv = vv.vW.kW.Hx, Nv = vv.vW.kW.Bx, lv = !0, Tv = !0, Wv = 0; Wv < Sv; ++Wv) {
+           var av = vv.mw[Wv];
+           if (av === pv || Nv[av] || gv[av]) {
+             for (var sv = Pv.get(0, Wv, 0), Cv = 0; Cv < Sv; ++Cv)
+               for (var iv = Pv.index(Cv, Wv, 0), cv = 0; cv < Sv; ++cv, ++iv) {
+                 var Gv = hv[iv];
+                 sv !== pv && Gv !== sv && (sv = pv), 0 !== Gv ? dv[Gv] ? Tv = !1 : (lv = lv && ev[Gv], Tv = !1, wv(vv, Gv, Cv, Wv, cv), hv = Pv.data) : lv = !1
+ ... (5 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L382-L387` → after: `L965-L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L965-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L965-L968) · [Before (L382-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L382-L387)

```diff
-     function zs(zz, tz) {
-       let {
-         isGetter: sz
-       } = tz;
-       const Fz = Ft(zz, sz ? "get" : "value");
-       return void 0 === Fz ? void 0 : Fz.value
+     function wv(vv, zv, Pv, hv, Sv) {
+       vv.vW.kW.Bx[zv] && (vv.vW.ns.R_(vv, zv, Pv, hv, Sv), vv.ehv = !0);
+       var ev = vv.vW.kW.Xx[zv];
+       ev && (vv.fgv.add(Pv, hv, Sv), Tv(vv, ev, "onLoad", Pv, hv, Sv))
```

#### 34. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L391-L395` → after: `L972-L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L972-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L972-L978) · [Before (L391-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L391-L395)

```diff
-       let {
-         isConstructor: sz,
-         native: Fz
-       } = tz;
-       return "function" === typeof zz && (!(!sz && jz(Xt, zz, ["prototype"])) && null !== jz(Wt, Fz, [jz(st, zz, [])]))
+       var Pv = vv.fW,
+         hv = vv.vW.kW.Xx;
+       vv.fgv.forEach((Sv => {
+         let [ev, gv, pv] = Sv;
+         var dv = Pv.get(ev, gv, pv);
+         Tv(vv, hv[dv], zv, ev, gv, pv)
+       }))
```

#### 35. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L397-L401` → after: `L980-L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L980-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L980-L1055) · [Before (L397-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L397-L401)

```diff
- 
-     function ss(zz, tz) {
-       return ts(zz, Nt("", (() => {}), tz, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
-         isConstructor: !0
-       } : {}))
+     Nv.prototype.La = function(vv) {
+       let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pv,
+         Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       av(this, "aJ");
+       var hv = this.za;
+       this.vW.ns.Ia(this), this.vW.SF.Ia(this), this.fW = vv, this.vW.oT.Ha.Fgv(this.i, this.j, this.k, vv), this.Za++;
+       for (var Sv = 0; Sv < 3; Sv++) this.es[Sv]++;
+       this.gs = !1, this.ehv = !1, this.ss = !0, this.qa = 0, this.Aa = !1, this.fgv.empty(), this.vW.ns.Ds(this), this.vW.SF.Ds(this);
+       var ev = !!this.uw;
+       (0, gv.c)(this), this.Fs = !1, this.Ys = null, this.Us = !1, this.Rs = !1;
+       for (var dv = -1; dv <= 1; dv++)
+         for (var Nv = -1; Nv <= 1; Nv++)
+           for (var lv = -1; lv <= 1; lv++)
+             if (0 !== (dv | Nv | lv)) {
+               var Tv = this.da.get(dv, Nv, lv);
+               Tv && (Tv.Us = !1)
+ ... (60 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L403-L410` → after: `L1057-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L1057-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L1057-L1138) · [Before (L403-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L403-L410)

```diff
-     let Fs = null,
-       Ws = !1;
- 
-     function Xs() {
-       try {
-         return globalThis.WebAssembly === ut
-       } catch {
-         return !1
+   },
+   37767: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => Cv,
+       h: () => Gv,
+       i: () => wv
+     });
+     var hv = Pv(37775),
+       Sv = Pv.n(hv),
+       ev = Pv(327),
+       gv = Pv.n(ev),
+       pv = Pv(37786),
+       dv = Pv(37789);
+     class Nv {
+       constructor() {
+         this.runs = 0, this.loopMs = 0, this.byComponent = new Map
+ ... (66 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L415-L431` → after: `L1144-L1270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L1144-L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L1144-L1270) · [Before (L415-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L415-L431)

```diff
-       try {
-         return function(zz) {
-           const {
-             holder: tz,
-             key: sz,
-             onNamespace: Fz,
-             inSecureContext: Wz
-           } = zz, Xz = tz(), Oz = Pt(Xz, sz);
-           if (!Oz) return !(Wz && !0 === globalThis.isSecureContext);
-           const oz = zs(Oz, zz);
-           if (!ts(oz, zz)) return !1;
-           if (Fz) {
-             const tz = globalThis.WebAssembly;
-             if (tz !== Xz && null !== tz && ("object" === typeof tz || "function" === typeof tz)) {
-               const Fz = Ut(tz, sz);
-               return Fz === oz || void 0 === Fz || ts(Fz, zz)
- ... (1 more removed lines; see GitHub link above)
+       Wv = vv
+     }
+     var av = {
+       Dgv: 10
+     };
+     const sv = {
+       physics: {
+         Ew: Pv(37789),
+         server: !0
+       },
+       position: {
+         Ew: Pv(37786),
+         server: !0
+       },
+       Jw: {},
+       cgv: {
+ ... (111 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L433-L435` → after: `L1272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L1272) · [Before (L433-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L433-L435)

```diff
-           return !0
-         }(zz)
-       } catch {
+         }
```

#### 39. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L438-L446` → after: `L1275-L1321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R1275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L1275-L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L1275-L1321) · [Before (L438-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L438-L446)

```diff
-     }
- 
-     function os(zz) {
-       const tz = `wh:${zz.code}`;
-       if ("punished" === zz.tier) return tz;
-       try {
-         return `${tz}${Ez(vs(zz))}`
-       } catch {
-         return `${tz}${Ez(void 0)}`
+       Igv(vv, zv) {
+         var Pv, hv = this.vW.iW,
+           Sv = [vv.base[0] - hv[0], vv.base[1] - hv[1], vv.base[2] - hv[2], vv.max[0] - hv[0], vv.max[1] - hv[1], vv.max[2] - hv[2]];
+         if (zv)
+           for (var ev of (Pv = [], this.jK(zv))) {
+             var gv = this.rA(ev.VK);
+             gv && Pv.push(gv)
+           } else Pv = this.jK(this.names.position);
+         for (var pv = [], dv = 0; dv < Pv.length; dv++) {
+           var Nv = Pv[dv];
+           cv(Sv, Nv.Yzv) && pv.push(Nv.VK)
+         }
+         return pv
+       }
+       add() {
+         let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+ ... (31 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L450-L453` → after: `L1325-L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L1325-L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L1325-L1328) · [Before (L450-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L450-L453)

```diff
-     function vs(zz) {
-       const tz = Pt(zz.holder(), zz.key),
-         sz = void 0 === tz ? void 0 : zs(tz, zz);
-       return zz.onNamespace && !Xs() && ts(sz, zz) ? Ut(globalThis.WebAssembly, zz.key) : sz
+     function iv(vv, zv, Pv, hv, Sv) {
+       var ev = vv[zv] + Pv,
+         gv = vv[zv] + hv;
+       Math.abs(ev - Math.round(ev)) < .002 && (vv[zv] += .002), Math.abs(gv - Math.round(gv)) < .001 && (vv[zv] -= .001)
```

#### 41. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L456-L461` → after: `L1331-L1332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R1331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L1331-L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L1331-L1332) · [Before (L456-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L456-L461)

```diff
-     function Us(zz) {
-       if (pt(zz)) return 5;
-       const tz = zt(zz);
-       return St(tz) ? 4 : Rt(zz) ? 3 : ht(tz) ? function(zz) {
-         return jz(Ot, jt, [zz])
-       }(tz) ? -1 : tz === yt ? 0 : 1 : 2
+     function cv(vv, zv) {
+       return !(vv[0] > zv[3]) && (!(vv[1] > zv[4]) && (!(vv[2] > zv[5]) && (!(vv[3] < zv[0]) && (!(vv[4] < zv[1]) && !(vv[5] < zv[2])))))
```

#### 42. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L463-L468` → after: `L1334-L38758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L1334-L38758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L1334-L38758) · [Before (L463-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L463-L468)

```diff
- 
-     function Ks() {
-       const zz = function() {
-         const zz = Az();
-         return mz === Bz || mz === Pz ? (jz = cz, Tz = Zz) : jz = Oz, zz
-       }();
+     let Gv = !1
+   },
+   36976: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => hz,
+       f: () => Nz,
+       g: () => uv,
+       h: () => zz,
+       k: () => ov,
+       o: () => bv,
+       p: () => kv,
+       q: () => Ev,
+       t: () => rv,
+       u: () => lz,
+       v: () => Xv,
+       w: () => vz
+ ... (37409 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L470-L479` → after: `L38760-L38833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R38760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L38760-L38833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L38760-L38833) · [Before (L470-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L470-L479)

```diff
-         if (null === Fs || !pt(Fs)) {
-           const zz = function() {
-             if (void 0 === ut) return null;
-             let zz = Xs() ? null : "wh:wa";
-             const tz = tz => {
-               null !== tz && (null === zz || Us(tz) > Us(zz)) && (zz = tz)
-             };
-             for (let sz = 0; sz < rt.length; sz++) {
-               const zz = rt[sz];
-               void 0 === zz || Os(zz) || tz(os(zz))
+         Dv(vv[-cv[12]] = Object, vv[cv[4]][cv[24]]("".__proto__.constructor.name))
+       } catch (lv) {}
+       vv: for (vv[cv[13]] = cv[2]; vv[cv[13]] < vv[cv[14]][cv[11]]; vv[cv[13]]++) try {
+         for (vv[-cv[12]] = vv[cv[14]][vv[cv[13]]](), vv[cv[15]] = cv[2]; vv[cv[15]] < vv[cv[4]][cv[11]]; vv[cv[15]]++)
+           if (typeof vv[-cv[12]][vv[cv[4]][vv[cv[15]]]] === cv[16]) continue vv;
+         return vv[-cv[12]]
+       } catch (lv) {}
+       return vv[-cv[12]] || this
+     }() || {}, Wv = Tv.TextDecoder, wv = Tv.Uint8Array, av = Tv.Sa, sv = Tv.String || String, Cv = Tv.Array || Array, iv = function(...vv) {
+       return Dv(vv[cv[11]] = cv[2], vv[cv[25]] = new Cv(cv[55]), vv[-cv[26]] = sv[cv[21]] || sv.fromCharCode, vv[cv[4]] = []),
+         function(...zv) {
+           for (Dv(zv[cv[11]] = cv[0], zv[cv[19]] = cv[17], zv[cv[1]] = cv[17], zv[cv[4]] = zv[cv[2]][cv[11]], vv[cv[4]][cv[11]] = cv[2]), zv[-cv[18]] = cv[2]; zv[-cv[18]] < zv[cv[4]];) Dv(zv[cv[1]] = zv[cv[2]][zv[-cv[18]]++], zv[cv[1]] <= cv[53] ? zv[cv[19]] = zv[cv[1]] : zv[cv[1 … [truncated]
+           return vv[cv[4]].join("")
+         }
+     }()), Gv(107) in fv && function(...vv) {
+       Dv(vv[cv[11]] = cv[2], vv[cv[4]] = function(...vv) {
+ ... (58 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L481-L484` → after: `L38835-L38999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R38835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L38835-L38999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L38835-L38999) · [Before (L481-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L481-L484)

```diff
-             tz((0, tt.l)());
-             for (let sz = 0; sz < Ct.length; sz++) {
-               const zz = Ct[sz];
-               void 0 === zz || Os(zz) || tz(Gt(zz))
+             return gv > -cv[0] && hv.push((Sv | gv << ev) & cv[10]), mv(hv)
+           }
+ 
+           function hv(...vv) {
+             return vv[cv[11]] = cv[0], typeof Nv[vv[cv[2]]] === cv[16] ? Nv[vv[cv[2]]] = Pv(lv[vv[cv[2]]]) : Nv[vv[cv[2]]]
+           }
+           zv[cv[11]] = cv[0];
+           try {
+             vv[-cv[42]]
+           } catch (Sv) {
+             vv[-cv[42]] = cv[2]
+           }
+           for (Dv(zv[cv[14]] = vv[-cv[42]] ? hv(cv[43]) + hv(115) + hv(116) : hv(cv[43]) + hv(117) + hv(118), zv[cv[1]] = "", zv[cv[13]] = cv[17]), zv[cv[44]] = cv[2]; zv[cv[44]] < zv[cv[2]].length; zv[cv[44]]++) Dv(zv[cv[13]] = zv[cv[2]].charCodeAt(zv[cv[44]]), zv[cv[1]] += zv[c … [truncated]
+           return zv[cv[1]]
+         }
+ 
+ ... (149 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L486-L488` → after: `L39001-L39014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R39001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L39001-L39014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L39001-L39014) · [Before (L486-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L486-L488)

```diff
-             return zz
-           }();
-           (null === Fs || null !== zz && Us(zz) > Us(Fs)) && (Fs = zz)
+           }
+           vv[cv[11]] = cv[2], Dv(vv[cv[69]] = zv([cv[27], cv[15]]), vv[cv[1]] = zv([cv[0], cv[27]]), vv[cv[27]] = vv[cv[69]] + vv[cv[1]], vv[cv[13]] = vv[cv[27]] - vv[cv[1]], vv[cv[50]] = vv[cv[13]] * cv[27], vv[cv[7]] = vv[cv[50]] / cv[27], console.log(Pv(vv[cv[27]])), console.l … [truncated]
+         }(), !vv[cv[0]][zv(cv[70]) + zv(cv[53]) + zv(cv[55]) + zv(cv[71])]) {
+         function av(...vv) {
+           for (Dv(vv[cv[11]] = cv[0], vv[cv[14]] = 'D+5A;x%B1FWsf3XHS4LhEa:P`rRd"~b_]jvI#G0=7)|8J2^tCU/uYy.wTle@(!9Zn>6&}$VpOqkNK?,iMogzmQ{[*<c', vv[cv[27]] = "" + (vv[cv[2]] || ""), vv[cv[13]] = vv[cv[27]].length, vv[cv[9]] = [], vv[cv[50]] = cv[2], vv[cv[8]] = cv[2], vv[cv[22]] … [truncated]
+             if (vv[cv[38]] = vv[cv[14]].indexOf(vv[cv[27]][vv[cv[28]]]), vv[cv[38]] !== -cv[0])
+               if (vv[cv[22]] < cv[2]) vv[cv[22]] = vv[cv[38]];
+               else {
+                 Dv(vv[cv[22]] += vv[cv[38]] * cv[31], vv[cv[50]] |= vv[cv[22]] << vv[cv[8]], vv[cv[8]] += (vv[cv[22]] & cv[33]) > cv[34] ? cv[35] : cv[36]);
+                 do {
+                   Dv(vv[cv[9]].push(vv[cv[50]] & cv[10]), vv[cv[50]] >>= cv[3], vv[cv[8]] -= cv[3])
+                 } while (vv[cv[8]] > cv[22]);
+                 vv[cv[22]] = -cv[0]
+               } return vv[cv[22]] > -cv[0] && vv[cv[9]].push((vv[cv[50]] | vv[cv[22]] << vv[cv[8]]) & cv[10]), mv(vv[cv[9]])
```

#### 46. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L490-L491` → after: `L39016-L39020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R39016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L39016-L39020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L39016-L39020) · [Before (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L490-L491)

```diff
-       } finally {
-         Mz(zz)
+ 
+         function sv(...vv) {
+           return vv[cv[11]] = cv[0], typeof Nv[vv[cv[2]]] === cv[16] ? Nv[vv[cv[2]]] = av(lv[vv[cv[2]]]) : Nv[vv[cv[2]]]
+         }
+         vv[cv[0]][zv(cv[72]) + sv(131) + sv(cv[84])] = vv[cv[22]]
```

#### 47. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L495-L496` → after: `L39354-L39360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R39354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L39354-L39360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L39354-L39360) · [Before (L495-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L495-L496)

```diff
-     function us() {
-       Ws = !0
+     function av(vv, zv) {
+       const Pv = vv.validBlockIds;
+       if (Array.isArray(Pv)) return Pv.includes(zv);
+       if (zv === dv) return !1;
+       if ("solidBlocks" === Pv) return !0 !== ev.g[zv].zw;
+       if ("solidBlocksOrFluid" === Pv) return !0;
+       throw new Error(`Unsupported validBlockIds for ${zv}: ${JSON.stringify(Pv)}`)
```

#### 48. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L499-L504` → after: `L39484-L39770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R39484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L39484-L39770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/74.js#L39484-L39770) · [Before (L499-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/74.js#L499-L504)

```diff
-     function Ns() {
-       if (Ws) return "wb";
-       if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && Ks(), null !== Fs) return Fs;
-       if (void 0 === ut) return "wn:unsupported";
-       const zz = (0, Fz.u)();
-       return null === zz ? null : `wn:${zz}`
+     function iv(vv) {
+       var zv;
+       return null === vv || void 0 === vv ? null : null !== (zv = Cv[vv]) && void 0 !== zv ? zv : null
+     }
+     const cv = {
+         meshAttachment: {
+           size: 3,
+           offset: [0, .72, .3],
+           rotation: [-Math.PI / 2, Math.PI, Math.PI]
+         }
+       },
+       Gv = {
+         "Wood Hang Glider": {
+           ...cv,
+           physicsState: {
+             type: hv.s.GLIDER,
+ ... (271 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/75.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/75.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82)

#### 1. `bundles/bloxd.io/chunks/js/75.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/75.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/75.js#L2)

```diff
- export const ids = [75, 91];
+ export const ids = [75];
```

#### 2. `bundles/bloxd.io/chunks/js/75.js` (Changed code · before: `L4-L7` → after: `L4-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82) · [After (L4-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/75.js#L4-L40) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/75.js#L4-L7)

```diff
-     4464: (zz, tz, sz) => {
-       sz.d(tz, {
-         c: () => gz,
-         e: () => Hz
+   4451: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       d: () => Hz,
+       h: () => TP,
+       k: () => kz,
+       m: () => zP,
+       p: () => oz,
+       q: () => Xz,
+       t: () => Qz,
+       v: () => Bz,
+       x: () => Kz,
+       y: () => lP,
+       A: () => NP,
+       E: () => Jz,
+       H: () => Iz
+     });
+ ... (21 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/75.js` (Changed code · before: `L9-L23` → after: `L42-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82) · [After (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/75.js#L42-L45) · [Before (L9-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/75.js#L9-L23)

```diff
-       var Fz = sz(1020),
-         Wz = sz.n(Fz),
-         Xz = sz(65),
-         Oz = sz(1173),
-         oz = sz(4467),
-         vz = sz(1831),
-         Uz = sz(2290),
-         Kz = sz(4472),
-         uz = sz(1087);
-       const Nz = new WeakMap;
-       let bz = 0;
- 
-       function wz(zz) {
-         let tz = Nz.get(zz);
-         return void 0 === tz && (tz = bz++, Nz.set(zz, tz)), tz
+       try {
+         sv = vv[av](dv)
+       } finally {
+         delete vv[av]
```

#### 4. `bundles/bloxd.io/chunks/js/75.js` (Changed code · before: `L25-L40` → after: `L47-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82) · [After (L47-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/75.js#L47-L97) · [Before (L25-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/75.js#L25-L40)

```diff
- 
-       function Dz(zz) {
-         let {
-           piece: tz
-         } = zz;
-         return "space" === tz.kind ? (0, uz.jsx)(uz.Fragment, {
-           children: tz.text
-         }) : (0, uz.jsx)("span", {
-           className: "DialogueWord",
-           style: {
-             "--word-delay": `${tz.delayMs}ms`
-           },
-           children: (0, uz.jsx)(oz.b, {
-             text: "icon" === tz.kind ? `[[${tz.icon}]]` : tz.text
-           })
-         })
+     } catch {}
+     const Cv = 16,
+       iv = 256,
+       cv = 0,
+       Gv = 1,
+       mv = 2,
+       jv = 3;
+     let fv, Fv = cv,
+       Yv = gv,
+       nv = 0;
+ 
+     function Ov(vv, zv) {
+       return vv === `function ${zv}() { [native code] }` || vv === `function ${zv}() {\n    [native code]\n}`
+     }
+     const Dv = 0,
+       Kv = 1,
+ ... (35 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/75.js` (Changed code · before: `L42-L66` → after: `L99-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82) · [After (L99-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/75.js#L99-L163) · [Before (L42-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/75.js#L42-L66)

```diff
- 
-       function gz(zz) {
-         let {
-           display: tz
-         } = zz;
-         const {
-           selectedLanguage: sz
-         } = (0, Oz.B)(), Fz = (0, Xz.useMemo)((() => (0, Kz.d)((0, Kz.f)(tz).plan.pieces)), [tz, sz.code]);
-         return (0, uz.jsxs)("div", {
-           className: Wz()("Dialogue", {
-             DialogueAnimateIn: !1 !== tz.animateIn
-           }),
-           children: [tz.speakerName && (0, uz.jsx)(vz.c, {
-             text: tz.speakerName,
-             className: "DialogueSpeaker"
-           }), (0, uz.jsx)("p", {
- ... (9 more removed lines; see GitHub link above)
+       return Uv = Vv, hv
+     }
+     let xv = gv;
+ 
+     function tv() {
+       return (xv === gv ? 0 : 3) + Uv
+     }
+ 
+     function qv() {
+       const vv = tv();
+       return xv = gv, vv
+     }
+ 
+     function Iv(vv) {
+       xv = vv >= 3 ? Rv : gv, Uv = vv % 3
+     }
+ ... (49 more added lines; see GitHub link above)
```
