# Changed — Bundle Modifications Report (Part 033 / 067)

- **Updated at**: `2026-11-20T22:47 JST`
- **Part**: `33 / 67` (**393** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 032](part-032.md) · [Part 034 →](part-034.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/70.js` (7rj44.0704ff61 → qepqb8.0352199c · continued)

- **File**: `bundles/bloxd.io/chunks/js/70.js` (1640 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2)

#### 963. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5108` → after: `L8145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8145) · [Before (L5108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5108)

```diff
-             translationKey: "item:arrowOfDefense"
+             translationKey: "item:oreGeneratorSpawnBlock"
```

#### 964. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5110-L5115` → after: `L8147-L8153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8147-L8153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8147-L8153) · [Before (L5110-L5115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5110-L5115)

```diff
-           type: "Item",
-           textureInfo: "defense_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 1500,
+           textureInfo: ["ore_gen_spawn_top", "ore_gen_spawn_side"],
+           texturePerSide: [1, 1, 0, 0, 1, 1],
+           harvestType: "rock",
+           description: {
+             translationKey: "item:oreGeneratorSpawnBlockDescription"
+           }
```

#### 965. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5117` → after: `L8155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8155) · [Before (L5117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5117)

```diff
-         "Strength Potion": {
+         "Goal Block (Red)": {
```

#### 966. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5119` → after: `L8157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8157) · [Before (L5119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5119)

```diff
-             translationKey: "item:strengthPotion"
+             translationKey: "item:redGoalBlock"
```

#### 967. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5121-L5128` → after: `L8159-L8162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8159-L8162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8159-L8162) · [Before (L5121-L5128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5121-L5128)

```diff
-           type: "Chargeable",
-           textureInfo: "strength_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
+           ttb: 1500,
+           textureInfo: ["explosive_paint_red_top", "red_spawn_block_top[rot[3"],
+           texturePerSide: [1, 1, 0, 0, 1, 1],
+           harvestType: "rock",
```

#### 968. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5130-L5134` → after: `L8164-L8165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8164-L8165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8164-L8165) · [Before (L5130-L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5130-L5134)

```diff
-             translationKey: "item:strengthPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Strength Potion|meta|charging1"
+             translationKey: "item:goalBlockDescription"
+           }
```

#### 969. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5136` → after: `L8167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8167) · [Before (L5136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5136)

```diff
-         "Strength Potion II": {
+         "Goal Block (Blue)": {
```

#### 970. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5138` → after: `L8169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8169) · [Before (L5138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5138)

```diff
-             translationKey: "item:strengthPotionII"
+             translationKey: "item:blueGoalBlock"
```

#### 971. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5140-L5148` → after: `L8171-L8174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8171-L8174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8171-L8174) · [Before (L5140-L5148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5140-L5148)

```diff
-           type: "Chargeable",
-           textureInfo: "strength_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Strength Potion",
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
+           ttb: 1500,
+           textureInfo: ["explosive_paint_blue_top", "blue_spawn_block_top[rot[3"],
+           texturePerSide: [1, 1, 0, 0, 1, 1],
+           harvestType: "rock",
```

#### 972. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5150-L5154` → after: `L8176-L8177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8176-L8177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8176-L8177) · [Before (L5150-L5154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5150-L5154)

```diff
-             translationKey: "item:strengthPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Strength Potion II|meta|charging1"
+             translationKey: "item:goalBlockDescription"
+           }
```

#### 973. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5156` → after: `L8179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8179) · [Before (L5156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5156)

```diff
-         "Splash Strength Potion": {
+         "Finish Block": {
```

#### 974. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5158` → after: `L8181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8181) · [Before (L5158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5158)

```diff
-             translationKey: "item:splashStrengthPotion"
+             translationKey: "item:finishBlock"
```

#### 975. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5160-L5164` → after: `L8183-L8185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8183-L8185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8183-L8185) · [Before (L5160-L5164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5160-L5164)

```diff
-           type: "Item",
-           textureInfo: "splash_strength_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           ttb: 1500,
+           textureInfo: "finish_block",
+           harvestType: "rock",
```

#### 976. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5166` → after: `L8187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8187) · [Before (L5166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5166)

```diff
-             translationKey: "item:splashStrengthPotionDescription"
+             translationKey: "item:finishBlockDescription"
```

#### 977. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5169` → after: `L8190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8190) · [Before (L5169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5169)

```diff
-         "Splash Strength Potion II": {
+         "Drop Location Block": {
```

#### 978. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5171` → after: `L8192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8192) · [Before (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5171)

```diff
-             translationKey: "item:splashStrengthPotionII"
+             translationKey: "item:dropLocationBlock"
```

#### 979. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5173-L5178` → after: `L8194-L8197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8194-L8197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8194-L8197) · [Before (L5173-L5178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5173-L5178)

```diff
-           type: "Item",
-           textureInfo: "splash_strength_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Strength Potion",
-           stackable: !1,
+           ttb: 1500,
+           textureInfo: ["drop_location_block_top", "drop_location_block_side"],
+           texturePerSide: [1, 1, 0, 0, 1, 1],
+           harvestType: "rock",
```

#### 980. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5180` → after: `L8199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8199) · [Before (L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5180)

```diff
-             translationKey: "item:splashStrengthPotionDescription"
+             translationKey: "item:dropLocationBlockDescription"
```

#### 981. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5183` → after: `L8202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8202) · [Before (L5183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5183)

```diff
-         "Arrow of Strength": {
+         "Obby Death Block": {
```

#### 982. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5185` → after: `L8204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8204) · [Before (L5185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5185)

```diff
-             translationKey: "item:arrowOfStrength"
+             translationKey: "item:obbyDeathBlock"
```

#### 983. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5187-L5192` → after: `L8206-L8211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8206-L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8206-L8211) · [Before (L5187-L5192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5187-L5192)

```diff
-           type: "Item",
-           textureInfo: "strength_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 1500,
+           textureInfo: "obby_death_block",
+           harvestType: "rock",
+           description: {
+             translationKey: "item:obbyDeathBlockDescription"
+           }
```

#### 984. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5194` → after: `L8213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8213) · [Before (L5194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5194)

```diff
-         "Invisibility Potion": {
+         "Obby Absorb Block": {
```

#### 985. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5196` → after: `L8215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8215) · [Before (L5196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5196)

```diff
-             translationKey: "item:invisibilityPotion"
+             translationKey: "item:obbyAbsorbBlock"
```

#### 986. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5198-L5205` → after: `L8217-L8219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8217-L8219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8217-L8219) · [Before (L5198-L5205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5198-L5205)

```diff
-           type: "Chargeable",
-           textureInfo: "invisibility_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
+           ttb: 1500,
+           textureInfo: "obby_absorb_block",
+           harvestType: "rock",
```

#### 987. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5207-L5211` → after: `L8221-L8222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8221-L8222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8221-L8222) · [Before (L5207-L5211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5207-L5211)

```diff
-             translationKey: "item:invisibilityPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Invisibility Potion|meta|charging1"
+             translationKey: "item:obbyAbsorbBlockDescription"
+           }
```

#### 988. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5213` → after: `L8224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8224) · [Before (L5213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5213)

```diff
-         "Splash Invisibility Potion": {
+         "Obby Absorb Death Block": {
```

#### 989. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5215` → after: `L8226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8226) · [Before (L5215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5215)

```diff
-             translationKey: "item:splashInvisibilityPotion"
+             translationKey: "item:obbyAbsorbDeathBlock"
```

#### 990. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5217-L5221` → after: `L8228-L8230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8228-L8230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8228-L8230) · [Before (L5217-L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5217-L5221)

```diff
-           type: "Item",
-           textureInfo: "splash_invisibility_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           ttb: 1500,
+           textureInfo: "obby_absorb_death_block",
+           harvestType: "rock",
```

#### 991. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5223` → after: `L8232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8232) · [Before (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5223)

```diff
-             translationKey: "item:splashInvisibilityPotionDescription"
+             translationKey: "item:obbyAbsorbDeathBlockDescription"
```

#### 992. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5226` → after: `L8235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8235) · [Before (L5226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5226)

```diff
-         "Arrow of Invisibility": {
+         "Bone Block": {
```

#### 993. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5228` → after: `L8237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8237) · [Before (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5228)

```diff
-             translationKey: "item:arrowOfInvisibility"
+             translationKey: "item:boneBlock"
```

#### 994. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5230-L5235` → after: `L8239-L8242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8239-L8242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8239-L8242) · [Before (L5230-L5235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5230-L5235)

```diff
-           type: "Item",
-           textureInfo: "invisibility_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 960,
+           textureInfo: ["bone_block_side", "bone_block_top"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           harvestType: "rock"
```

#### 995. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5237` → after: `L8244-L8250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8244-L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8244-L8250) · [Before (L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5237)

```diff
-         "Jump Potion": {
+         ...(0, av.nb)("Pig"),
+         ...(0, av.nb)("Cow"),
+         ...(0, av.nb)("Sheep"),
+         ...(0, av.nb)("Cave Golem"),
+         ...(0, av.nb)("Draugr Zombie"),
+         ...(0, av.nb)("Draugr Skeleton"),
+         "Empty Spawner Block": {
```

#### 996. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5239` → after: `L8252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8252) · [Before (L5239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5239)

```diff
-             translationKey: "item:jumpPotion"
+             translationKey: "item:emptyMobSpawnerBlock"
```

#### 997. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5250` → after: `L8255-L8266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8255-L8266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8255-L8266) · [Before (L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5250)

```diff
-             translationKey: "item:jumpPotionDescription"
+             translationKey: "item:emptyMobSpawnerBlockDescription"
+           },
+           itemTexture: "empty_spawner_block_icon",
+           ttb: 5e3,
+           textureInfo: ["mob_spawner_block_empty_side", "mob_spawner_block_top"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           transTex: !0,
+           harvestType: "rock",
+           drops: null,
+           specialToolDrop: {
+             tool: "Moonstone Pickaxe",
+             drops: "Empty Spawner Block"
```

#### 998. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5252-L5254` → after: `L8268-L8269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8268-L8269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8268-L8269) · [Before (L5252-L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5252-L5254)

```diff
-           chargeStages: 1,
-           chargeTime: 1e3,
-           rootMetaDesc: "Jump Potion|meta|charging1"
+           particlesIgnoreBlack: !0,
+           twoDBlockItem: !0
```

#### 999. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5256` → after: `L8271-L8274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8271-L8274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8271-L8274) · [Before (L5256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5256)

```diff
-         "Jump Potion II": {
+         ...(0, av.nb)("Frost Golem"),
+         ...(0, av.nb)("Frost Zombie"),
+         ...(0, av.nb)("Frost Skeleton"),
+         "Snowy Messy Stone": {
```

#### 1000. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5258-L5270` → after: `L8276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8276) · [Before (L5258-L5270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5258-L5270)

```diff
-             translationKey: "item:jumpPotionII"
-           },
-           type: "Chargeable",
-           textureInfo: "jump_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Jump Potion",
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
-           description: {
-             translationKey: "item:jumpPotionDescription"
+             translationKey: "item:snowyMessyStone"
```

#### 1001. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5272-L5274` → after: `L8278-L8280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8278-L8280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8278-L8280) · [Before (L5272-L5274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5272-L5274)

```diff
-           chargeStages: 1,
-           chargeTime: 1e3,
-           rootMetaDesc: "Jump Potion II|meta|charging1"
+           ttb: 1800,
+           textureInfo: "snowy_messy_stone",
+           harvestType: "rock"
```

#### 1002. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5276` → after: `L8282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8282) · [Before (L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5276)

```diff
-         "Splash Jump Potion": {
+         ...(0, av.Ob)("Snowy Stone Slab", {
```

#### 1003. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5278` → after: `L8284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8284) · [Before (L5278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5278)

```diff
-             translationKey: "item:splashJumpPotion"
+             translationKey: "item:snowyStoneSlab"
```

#### 1004. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5280-L5289` → after: `L8286-L8295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8286-L8295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8286-L8295) · [Before (L5280-L5289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5280-L5289)

```diff
-           type: "Item",
-           textureInfo: "splash_jump_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashJumpPotionDescription"
-           }
-         },
-         "Splash Jump Potion II": {
+           ttb: 1200,
+           textureInfo: ["snowy_messy_stone_side", "snowy_messy_stone"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           model: "Slab",
+           harvestType: "rock",
+           slabFullBlock: "Snowy Messy Stone",
+           rootMetaDesc: "Snowy Stone Slab|meta|rot1|bot"
+         }),
+         ...(0, av.nb)("Draugr Knight"),
+         "Packed Snow": {
```

#### 1005. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5291` → after: `L8297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8297) · [Before (L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5291)

```diff
-             translationKey: "item:splashJumpPotionII"
+             translationKey: "item:packedSnow"
```

#### 1006. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5293-L5300` → after: `L8299-L8304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8299-L8304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8299-L8304) · [Before (L5293-L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5293-L5300)

```diff
-           type: "Item",
-           textureInfo: "splash_jump_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Jump Potion",
-           stackable: !1,
-           description: {
-             translationKey: "item:splashJumpPotionDescription"
+           ttb: 1800,
+           textureInfo: "packed_snow",
+           harvestType: "granule",
+           soundType: {
+             break: "snow",
+             place: "snow"
```

#### 1007. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5303` → after: `L8307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8307) · [Before (L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5303)

```diff
-         "Arrow of Jumping": {
+         "Carved Messy Stone": {
```

#### 1008. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5305` → after: `L8309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8309) · [Before (L5305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5305)

```diff
-             translationKey: "item:arrowOfJumping"
+             translationKey: "item:carvedMessyStone"
```

#### 1009. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5307-L5312` → after: `L8311-L8313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8311-L8313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8311-L8313) · [Before (L5307-L5312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5307-L5312)

```diff
-           type: "Item",
-           textureInfo: "jump_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 1800,
+           textureInfo: "carved_messy_stone",
+           harvestType: "rock"
```

#### 1010. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5314` → after: `L8315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8315) · [Before (L5314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5314)

```diff
-         "Knockback Potion": {
+         "Spectral Grass": {
```

#### 1011. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5316` → after: `L8317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8317) · [Before (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5316)

```diff
-             translationKey: "item:knockbackPotion"
+             translationKey: "item:spectralGrass"
```

#### 1012. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5318-L5327` → after: `L8319-L8327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8319-L8327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8319-L8327) · [Before (L5318-L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5318-L5327)

```diff
-           type: "Chargeable",
-           textureInfo: "knockback_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           stackable: !1,
-           afterEatenItem: "Empty Bottle",
-           description: {
-             translationKey: "item:knockbackPotionDescription"
+           ttb: 1,
+           textureInfo: "spectral_grass",
+           model: "CentreCross",
+           solid: !1,
+           drops: null,
+           harvestType: "cuttable",
+           specialToolDrop: {
+             tool: "Shears",
+             drops: "Spectral Grass"
```

#### 1013. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5329-L5331` → after: `L8329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8329) · [Before (L5329-L5331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5329-L5331)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Knockback Potion|meta|charging1"
+           canBePlacedOver: !0
```

#### 1014. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5333` → after: `L8331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8331) · [Before (L5333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5333)

```diff
-         "Splash Knockback Potion": {
+         "Spectral Log": {
```

#### 1015. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5335` → after: `L8333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8333) · [Before (L5335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5335)

```diff
-             translationKey: "item:splashKnockbackPotion"
+             translationKey: "item:spectralLog"
```

#### 1016. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5337-L5344` → after: `L8335-L8337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8335-L8337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8335-L8337) · [Before (L5337-L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5337-L5344)

```diff
-           type: "Item",
-           textureInfo: "splash_knockback_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashKnockbackPotionDescription"
-           }
+           ttb: 2400,
+           textureInfo: "log_spectral",
+           harvestType: "wood"
```

#### 1017. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5346` → after: `L8339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8339) · [Before (L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5346)

```diff
-         "Splash Knockback Potion II": {
+         "Barkless Spectral Log": {
```

#### 1018. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5348` → after: `L8341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8341) · [Before (L5348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5348)

```diff
-             translationKey: "item:splashKnockbackPotionII"
+             translationKey: "item:barklessSpectralLog"
```

#### 1019. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5350-L5358` → after: `L8343-L8351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8343-L8351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8343-L8351) · [Before (L5350-L5358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5350-L5358)

```diff
-           type: "Item",
-           textureInfo: "splash_knockback_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Knockback Potion",
-           stackable: !1,
-           description: {
-             translationKey: "item:splashKnockbackPotionDescription"
-           }
+           ttb: 2e3,
+           textureInfo: "stripped_spectral_log",
+           harvestType: "wood"
+         },
+         "Barkless Spectral Log|TreeBase|Spectral": {
+           ttb: 2e3,
+           textureInfo: "stripped_spectral_log",
+           harvestType: "wood",
+           drops: "Barkless Spectral Log"
```

#### 1020. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5360` → after: `L8353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8353) · [Before (L5360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5360)

```diff
-         "Arrow of Knockback": {
+         "Spectral Wood Planks": {
```

#### 1021. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5362` → after: `L8355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8355) · [Before (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5362)

```diff
-             translationKey: "item:arrowOfKnockback"
+             translationKey: "item:spectralWoodPlanks"
```

#### 1022. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5364-L5369` → after: `L8357-L8359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8357-L8359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8357-L8359) · [Before (L5364-L5369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5364-L5369)

```diff
-           type: "Item",
-           textureInfo: "knockback_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 1800,
+           textureInfo: "planks_spectral",
+           harvestType: "wood"
```

#### 1023. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5371` → after: `L8361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8361) · [Before (L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5371)

```diff
-         "Regeneration Potion": {
+         "Spectral Leaves": {
```

#### 1024. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5373-L5384` → after: `L8363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8363) · [Before (L5373-L5384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5373-L5384)

```diff
-             translationKey: "item:regenerationPotion"
-           },
-           type: "Chargeable",
-           textureInfo: "regen_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
-           description: {
-             translationKey: "item:regenerationPotionDescription"
+             translationKey: "item:spectralLeaves"
```

#### 1025. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5386-L5388` → after: `L8365-L8367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8365-L8367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8365-L8367) · [Before (L5386-L5388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5386-L5388)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Regeneration Potion|meta|charging1"
+           ttb: 350,
+           textureInfo: "leaves_spectral",
+           harvestType: "cuttable"
```

#### 1026. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5390` → after: `L8369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8369) · [Before (L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5390)

```diff
-         "Regeneration Potion II": {
+         "Spectral Door": {
```

#### 1027. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5392-L5404` → after: `L8371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8371) · [Before (L5392-L5404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5392-L5404)

```diff
-             translationKey: "item:regenerationPotionII"
-           },
-           type: "Chargeable",
-           textureInfo: "regen_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Regeneration Potion",
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
-           description: {
-             translationKey: "item:regenerationPotionDescription"
+             translationKey: "item:spectralDoor"
```

#### 1028. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5406-L5408` → after: `L8373-L8432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8373-L8432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8373-L8432) · [Before (L5406-L5408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5406-L5408)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Regeneration Potion II|meta|charging1"
+           ttb: 3600,
+           itemTexture: "spectral_door",
+           model: "door",
+           harvestType: "wood",
+           rootMetaDesc: "Spectral Door|meta|rot1|closed",
+           particlesIgnoreBlack: !0,
+           blockModel: "Spectral Door"
+         },
+         "Spectral Door|meta|rot1|open": {
+           ttb: 3600,
+           harvestType: "wood"
+         },
+         "Spectral Door|meta|rot2|closed": {
+           ttb: 3600,
+           harvestType: "wood"
+         },
+ ... (44 more added lines; see GitHub link above)
```

#### 1029. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5410` → after: `L8434-L8534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8434-L8534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8434-L8534) · [Before (L5410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5410)

```diff
-         "Splash Regeneration Potion": {
+         "_Spectral Door Top|meta|rot3|closed": {
+           ttb: 3600,
+           harvestType: "wood",
+           drops: "Spectral Door"
+         },
+         "_Spectral Door Top|meta|rot3|open": {
+           ttb: 3600,
+           harvestType: "wood",
+           drops: "Spectral Door"
+         },
+         "_Spectral Door Top|meta|rot4|closed": {
+           ttb: 3600,
+           harvestType: "wood",
+           drops: "Spectral Door"
+         },
+         "_Spectral Door Top|meta|rot4|open": {
+ ... (85 more added lines; see GitHub link above)
```

#### 1030. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5412` → after: `L8536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8536) · [Before (L5412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5412)

```diff
-             translationKey: "item:splashRegenerationPotion"
+             translationKey: "item:spectralLadder"
```

#### 1031. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5414-L5416` → after: `L8538-L8545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8538-L8545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8538-L8545) · [Before (L5414-L5416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5414-L5416)

```diff
-           type: "Item",
-           textureInfo: "splash_regen_potion",
-           weight: 1,
+           ttb: 1e3,
+           itemTexture: "ladder_spectral",
+           model: "rotatableOffset",
+           harvestType: "wood",
+           rootMetaDesc: "Spectral Ladder|meta|rot1",
+           modelScale: 1,
+           solid: !1,
+           blockModel: "Spectral Ladder",
```

#### 1032. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5418-L5423` → after: `L8547-L8549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8547-L8549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8547-L8549) · [Before (L5418-L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5418-L5423)

```diff
-           stackable: !1,
-           description: {
-             translationKey: "item:splashRegenerationPotionDescription"
-           }
-         },
-         "Splash Regeneration Potion II": {
+           blockModelItem: !0
+         }),
+         ...(0, av.Jb)("Wood Enchanting Table", {
```

#### 1033. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5425` → after: `L8551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8551) · [Before (L5425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5425)

```diff
-             translationKey: "item:splashRegenerationPotionII"
+             translationKey: "item:woodEnchantingTable"
```

#### 1034. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5427-L5432` → after: `L8553-L8559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8553-L8559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8553-L8559) · [Before (L5427-L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5427-L5432)

```diff
-           type: "Item",
-           textureInfo: "splash_regen_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Regeneration Potion",
-           stackable: !1,
+           ttb: 800,
+           harvestType: "wood",
+           model: "rotatable",
+           itemTexture: "wood_enchanting_table",
+           rootMetaDesc: "Wood Enchanting Table|meta|rot1",
+           modelScale: 10,
+           blockModel: "Wood Enchanting Table",
```

#### 1035. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5434-L5439` → after: `L8561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8561) · [Before (L5434-L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5434-L5439)

```diff
-             translationKey: "item:splashRegenerationPotionDescription"
-           }
-         },
-         "Arrow of Regeneration": {
-           displayName: {
-             translationKey: "item:arrowOfRegeneration"
+             translationKey: "item:enchantingTableDescription"
```

#### 1036. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5441-L5448` → after: `L8563-L8565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8563-L8565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8563-L8565) · [Before (L5441-L5448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5441-L5448)

```diff
-           type: "Item",
-           textureInfo: "regen_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
-         },
-         "Instant Healing Potion": {
+           sa: [2, 0, 2]
+         }),
+         ...(0, av.Jb)("Stone Enchanting Table", {
```

#### 1037. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5450` → after: `L8567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8567) · [Before (L5450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5450)

```diff
-             translationKey: "item:instantHealingPotion"
+             translationKey: "item:stoneEnchantingTable"
```

#### 1038. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5452-L5459` → after: `L8569-L8575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8569-L8575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8569-L8575) · [Before (L5452-L5459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5452-L5459)

```diff
-           type: "Chargeable",
-           textureInfo: "heal_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
+           ttb: 1e3,
+           harvestType: "wood",
+           model: "rotatable",
+           itemTexture: "stone_enchanting_table",
+           rootMetaDesc: "Stone Enchanting Table|meta|rot1",
+           modelScale: 10,
+           blockModel: "Stone Enchanting Table",
```

#### 1039. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5461` → after: `L8577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8577) · [Before (L5461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5461)

```diff
-             translationKey: "item:instantHealingPotionDescription"
+             translationKey: "item:enchantingTableDescription"
```

#### 1040. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5463-L5467` → after: `L8579-L8581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8579-L8581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8579-L8581) · [Before (L5463-L5467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5463-L5467)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Instant Healing Potion|meta|charging1"
-         },
-         "Instant Healing Potion II": {
+           sa: [4, 0, 4]
+         }),
+         ...(0, av.Jb)("Iron Enchanting Table", {
```

#### 1041. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5469` → after: `L8583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8583) · [Before (L5469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5469)

```diff
-             translationKey: "item:instantHealingPotionII"
+             translationKey: "item:ironEnchantingTable"
```

#### 1042. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5471-L5479` → after: `L8585-L8591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8585-L8591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8585-L8591) · [Before (L5471-L5479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5471-L5479)

```diff
-           type: "Chargeable",
-           textureInfo: "heal_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Instant Healing Potion",
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
+           ttb: 1200,
+           harvestType: "wood",
+           model: "rotatable",
+           itemTexture: "iron_enchanting_table",
+           rootMetaDesc: "Iron Enchanting Table|meta|rot1",
+           modelScale: 10,
+           blockModel: "Iron Enchanting Table",
```

#### 1043. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5481` → after: `L8593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8593) · [Before (L5481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5481)

```diff
-             translationKey: "item:instantHealingPotionDescription"
+             translationKey: "item:enchantingTableDescription"
```

#### 1044. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5483-L5487` → after: `L8595-L8597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8595-L8597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8595-L8597) · [Before (L5483-L5487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5483-L5487)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Instant Healing Potion II|meta|charging1"
-         },
-         "Splash Instant Healing Potion": {
+           sa: [6, 0, 6]
+         }),
+         ...(0, av.Jb)("Gold Enchanting Table", {
```

#### 1045. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5489` → after: `L8599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8599) · [Before (L5489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5489)

```diff
-             translationKey: "item:splashInstantHealingPotion"
+             translationKey: "item:goldEnchantingTable"
```

#### 1046. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5491-L5495` → after: `L8601-L8607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8601-L8607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8601-L8607) · [Before (L5491-L5495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5491-L5495)

```diff
-           type: "Item",
-           textureInfo: "splash_heal_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           ttb: 1500,
+           harvestType: "wood",
+           model: "rotatable",
+           itemTexture: "gold_enchanting_table",
+           rootMetaDesc: "Gold Enchanting Table|meta|rot1",
+           modelScale: 10,
+           blockModel: "Gold Enchanting Table",
```

#### 1047. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5497-L5500` → after: `L8609-L8613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8609-L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8609-L8613) · [Before (L5497-L5500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5497-L5500)

```diff
-             translationKey: "item:splashInstantHealingPotionDescription"
-           }
-         },
-         "Splash Instant Healing Potion II": {
+             translationKey: "item:enchantingTableDescription"
+           },
+           sa: [8, 0, 8]
+         }),
+         ...(0, av.Jb)("Diamond Enchanting Table", {
```

#### 1048. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5502` → after: `L8615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8615) · [Before (L5502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5502)

```diff
-             translationKey: "item:splashInstantHealingPotionII"
+             translationKey: "item:diamondEnchantingTable"
```

#### 1049. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5504-L5509` → after: `L8617-L8623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8617-L8623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8617-L8623) · [Before (L5504-L5509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5504-L5509)

```diff
-           type: "Item",
-           textureInfo: "splash_heal_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Instant Healing Potion",
-           stackable: !1,
+           ttb: 2e3,
+           harvestType: "wood",
+           model: "rotatable",
+           itemTexture: "diamond_enchanting_table",
+           rootMetaDesc: "Diamond Enchanting Table|meta|rot1",
+           modelScale: 10,
+           blockModel: "Diamond Enchanting Table",
```

#### 1050. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5511` → after: `L8625-L8639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8625-L8639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8625-L8639) · [Before (L5511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5511)

```diff
-             translationKey: "item:splashInstantHealingPotionDescription"
+             translationKey: "item:enchantingTableDescription"
+           },
+           sa: [10, 0, 10]
+         }),
+         "Pine Grass Block": {
+           displayName: {
+             translationKey: "item:pineGrassBlock"
+           },
+           ttb: 720,
+           textureInfo: ["pine_grass_block_side", "pine_grass_block", "dirt"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "granule",
+           soundType: {
+             break: "grass",
+             place: "grass"
```

#### 1051. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5514` → after: `L8642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8642) · [Before (L5514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5514)

```diff
-         "Arrow of Instant Healing": {
+         ...(0, av.Ob)("Pine Grass Slab", {
```

#### 1052. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5516` → after: `L8644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8644) · [Before (L5516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5516)

```diff
-             translationKey: "item:arrowOfInstantHealing"
+             translationKey: "item:pineGrassSlab"
```

#### 1053. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5518-L5525` → after: `L8646-L8654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8646-L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8646-L8654) · [Before (L5518-L5525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5518-L5525)

```diff
-           type: "Item",
-           textureInfo: "heal_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
-         },
-         "Haste Potion": {
+           ttb: 1200,
+           textureInfo: ["slab_pine_grass_top_side", "pine_grass_block"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           model: "Slab",
+           harvestType: "granule",
+           slabFullBlock: "Pine Grass Block",
+           rootMetaDesc: "Pine Grass Slab|meta|rot1|bot"
+         }),
+         "Pine Grass": {
```

#### 1054. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5527` → after: `L8656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8656) · [Before (L5527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5527)

```diff
-             translationKey: "item:hastePotion"
+             translationKey: "item:pineGrass"
```

#### 1055. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5529-L5538` → after: `L8658-L8666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8658-L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8658-L8666) · [Before (L5529-L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5529-L5538)

```diff
-           type: "Chargeable",
-           textureInfo: "haste_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
-           description: {
-             translationKey: "item:hastePotionDescription"
+           ttb: 1,
+           textureInfo: "pine_grass",
+           model: "CentreCross",
+           solid: !1,
+           drops: null,
+           harvestType: "cuttable",
+           specialToolDrop: {
+             tool: "Shears",
+             drops: "Pine Grass"
```

#### 1056. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5540-L5542` → after: `L8668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8668) · [Before (L5540-L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5540-L5542)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Haste Potion|meta|charging1"
+           canBePlacedOver: !0
```

#### 1057. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5544` → after: `L8670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8670) · [Before (L5544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5544)

```diff
-         "Haste Potion II": {
+         "Pine Fern": {
```

#### 1058. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5546` → after: `L8672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8672) · [Before (L5546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5546)

```diff
-             translationKey: "item:hastePotionII"
+             translationKey: "item:pineFern"
```

#### 1059. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5548-L5558` → after: `L8674-L8682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8674-L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8674-L8682) · [Before (L5548-L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5548-L5558)

```diff
-           type: "Chargeable",
-           textureInfo: "haste_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Haste Potion",
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
-           description: {
-             translationKey: "item:hastePotionDescription"
+           ttb: 1,
+           textureInfo: "pine_fern",
+           model: "CentreCross",
+           solid: !1,
+           drops: null,
+           harvestType: "cuttable",
+           specialToolDrop: {
+             tool: "Shears",
+             drops: "Pine Fern"
```

#### 1060. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5560-L5562` → after: `L8684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8684) · [Before (L5560-L5562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5560-L5562)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Haste Potion II|meta|charging1"
+           canBePlacedOver: !0
```

#### 1061. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5564` → after: `L8686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8686) · [Before (L5564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5564)

```diff
-         "Splash Haste Potion": {
+         "Fallen Pine Cone": {
```

#### 1062. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5566` → after: `L8688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8688) · [Before (L5566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5566)

```diff
-             translationKey: "item:splashHastePotion"
+             translationKey: "item:fallenPineCone"
```

#### 1063. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5568-L5575` → after: `L8690-L8694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8690-L8694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8690-L8694) · [Before (L5568-L5575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5568-L5575)

```diff
-           type: "Item",
-           textureInfo: "splash_haste_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashHastePotionDescription"
-           }
+           ttb: 1,
+           textureInfo: "fallen_pine_cone",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable"
```

#### 1064. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5577` → after: `L8696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8696) · [Before (L5577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5577)

```diff
-         "Splash Haste Potion II": {
+         "Pine Cone Block": {
```

#### 1065. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5579` → after: `L8698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8698) · [Before (L5579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5579)

```diff
-             translationKey: "item:splashHastePotionII"
+             translationKey: "item:pineConeBlock"
```

#### 1066. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5581-L5589` → after: `L8700-L8703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8700-L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8700-L8703) · [Before (L5581-L5589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5581-L5589)

```diff
-           type: "Item",
-           textureInfo: "splash_haste_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Haste Potion",
-           stackable: !1,
-           description: {
-             translationKey: "item:splashHastePotionDescription"
-           }
+           ttb: 600,
+           textureInfo: ["pine_cone_block_side", "pine_cone_block_top"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           harvestType: "wood"
```

#### 1067. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5591` → after: `L8705-L8709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8705-L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8705-L8709) · [Before (L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5591)

```diff
-         "Arrow of Haste": {
+         ...(0, av.nb)("Wolf"),
+         ...(0, av.nb)("Bear"),
+         ...(0, av.nb)("Deer"),
+         ...(0, av.nb)("Stag"),
+         ...(0, av.Jb)("Bone Antlers", {
```

#### 1068. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5593` → after: `L8711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8711) · [Before (L5593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5593)

```diff
-             translationKey: "item:arrowOfHaste"
+             translationKey: "item:boneAntlers"
```

#### 1069. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5595-L5602` → after: `L8713-L8726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8713-L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8713-L8726) · [Before (L5595-L5602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5595-L5602)

```diff
-           type: "Item",
-           textureInfo: "haste_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
-         },
-         "Shield Potion": {
+           description: {
+             translationKey: "item:antlersDescription"
+           },
+           ttb: 1500,
+           itemTexture: "bone_antlers_icon",
+           model: "rotatableOffset",
+           harvestType: "rock",
+           rootMetaDesc: "Bone Antlers|meta|rot1",
+           solid: !1,
+           blockModel: "bone_antlers_model",
+           modelScale: 10,
+           particlesIgnoreBlack: !0
+         }),
+         ...(0, av.Jb)("Gold Antlers", {
```

#### 1070. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5604` → after: `L8728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8728) · [Before (L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5604)

```diff
-             translationKey: "item:shieldPotion"
+             translationKey: "item:goldAntlers"
```

#### 1071. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5615` → after: `L8731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8731) · [Before (L5615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5615)

```diff
-             translationKey: "item:shieldPotionDescription"
+             translationKey: "item:antlersDescription"
```

#### 1072. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5617-L5621` → after: `L8733-L8745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8733-L8745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8733-L8745) · [Before (L5617-L5621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5617-L5621)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Shield Potion|meta|charging1"
-         },
-         "Shield Potion II": {
+           ttb: 1500,
+           itemTexture: "gold_antlers_icon",
+           model: "rotatableOffset",
+           harvestType: "rock",
+           rootMetaDesc: "Gold Antlers|meta|rot1",
+           solid: !1,
+           blockModel: "gold_antlers_model",
+           modelScale: 10,
+           particlesIgnoreBlack: !0,
+           sa: [7, 7, 2]
+         }),
+         ...(0, av.nb)("Gold Watermelon Stag"),
+         ...(0, av.Jb)("Salvaging Table", {
```

#### 1073. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5623` → after: `L8747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8747) · [Before (L5623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5623)

```diff
-             translationKey: "item:shieldPotionII"
+             translationKey: "item:salvagingTable"
```

#### 1074. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5625-L5633` → after: `L8749-L8751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8749-L8751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8749-L8751) · [Before (L5625-L5633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5625-L5633)

```diff
-           type: "Chargeable",
-           textureInfo: "shield_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Shield Potion",
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
+           ttb: 1200,
+           harvestType: "wood",
+           rootMetaDesc: "Salvaging Table|meta|rot1",
```

#### 1075. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5635` → after: `L8753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8753) · [Before (L5635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5635)

```diff
-             translationKey: "item:shieldPotionDescription"
+             translationKey: "item:salvagingTableDescription"
```

#### 1076. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5637-L5641` → after: `L8755-L8757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8755-L8757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8755-L8757) · [Before (L5637-L5641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5637-L5641)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Shield Potion II|meta|charging1"
-         },
-         "Splash Shield Potion": {
+           ...mv("Salvaging Table", "salvaging_table")
+         }),
+         Chalk: {
```

#### 1077. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5643` → after: `L8759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8759) · [Before (L5643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5643)

```diff
-             translationKey: "item:splashShieldPotion"
+             translationKey: "item:chalk"
```

#### 1078. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5651-L5652` → after: `L8762-L8766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8762-L8766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8762-L8766) · [Before (L5651-L5652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5651-L5652)

```diff
-             translationKey: "item:splashShieldPotionDescription"
-           }
+             translationKey: "item:chalkDescription"
+           },
+           ttb: 850,
+           textureInfo: "chalk",
+           harvestType: "rock"
```

#### 1079. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5654` → after: `L8768-L8834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8768-L8834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8768-L8834) · [Before (L5654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5654)

```diff
-         "Splash Shield Potion II": {
+         ...(0, av.F)((vv => `${vv} Chalk`), {
+           displayName: vv => ({
+             translationKey: "item:colouredChalk",
+             params: {
+               colour: `$t(colour:${(0,Nv.he)(vv)})`
+             }
+           }),
+           description: vv => ({
+             translationKey: "item:colouredChalkDescription",
+             params: {
+               colour: `$t(colour:${(0,Nv.he)(vv)})`
+             }
+           }),
+           ttb: 850,
+           textureInfo: vv => `chalk_${(0,Nv.he)(vv)}`,
+           harvestType: "rock"
+ ... (51 more added lines; see GitHub link above)
```

#### 1080. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5656` → after: `L8836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8836) · [Before (L5656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5656)

```diff
-             translationKey: "item:splashShieldPotionII"
+             translationKey: "item:jungleGrassBlock"
```

#### 1081. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5658-L5665` → after: `L8838-L8844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8838-L8844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8838-L8844) · [Before (L5658-L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5658-L5665)

```diff
-           type: "Item",
-           textureInfo: "splash_shield_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Shield Potion",
-           stackable: !1,
-           description: {
-             translationKey: "item:splashShieldPotionDescription"
+           ttb: 720,
+           textureInfo: ["jungle_grass_block_side", "jungle_grass_block", "dirt"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "granule",
+           soundType: {
+             break: "grass",
+             place: "grass"
```

#### 1082. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5668` → after: `L8847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8847) · [Before (L5668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5668)

```diff
-         "Arrow of Shield": {
+         ...(0, av.Ob)("Jungle Grass Slab", {
```

#### 1083. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5670` → after: `L8849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8849) · [Before (L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5670)

```diff
-             translationKey: "item:arrowOfShield"
+             translationKey: "item:jungleGrassSlab"
```

#### 1084. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5672-L5679` → after: `L8851-L8859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8851-L8859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8851-L8859) · [Before (L5672-L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5672-L5679)

```diff
-           type: "Item",
-           textureInfo: "shield_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
-         },
-         "Double Jump Potion": {
+           ttb: 1200,
+           textureInfo: ["slab_jungle_grass_top_side", "jungle_grass_block"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           model: "Slab",
+           harvestType: "granule",
+           slabFullBlock: "Jungle Grass Block",
+           rootMetaDesc: "Jungle Grass Slab|meta|rot1|bot"
+         }),
+         "Jungle Tall Grass": {
```

#### 1085. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5681` → after: `L8861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8861) · [Before (L5681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5681)

```diff
-             translationKey: "item:doubleJumpPotion"
+             translationKey: "item:jungleTallGrass"
```

#### 1086. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5683-L5692` → after: `L8863-L8887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8863-L8887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8863-L8887) · [Before (L5683-L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5683-L5692)

```diff
-           type: "Chargeable",
-           textureInfo: "double_jump_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
-           description: {
-             translationKey: "item:doubleJumpPotionDescription"
+           ttb: 1,
+           textureInfo: "jungle_tall_grass_bottom",
+           model: "CentreCross",
+           heldItemScale: .5,
+           solid: !1,
+           harvestType: "cuttable",
+           drops: null,
+           specialToolDrop: {
+             tool: "Shears",
+             drops: "Jungle Tall Grass"
+           },
+           itemTexture: "jungle_tall_grass_bottom",
+           canBePlacedOver: !0
+         },
+         "Jungle Tall Grass|Top": {
+           ttb: 1,
+ ... (9 more added lines; see GitHub link above)
```

#### 1087. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5694-L5696` → after: `L8889-L8890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8889-L8890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8889-L8890) · [Before (L5694-L5696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5694-L5696)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Double Jump Potion|meta|charging1"
+           itemTexture: "jungle_tall_grass_top",
+           canBePlacedOver: !0
```

#### 1088. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5698` → after: `L8892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8892) · [Before (L5698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5698)

```diff
-         "Splash Double Jump Potion": {
+         Catnip: {
```

#### 1089. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5700` → after: `L8894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8894) · [Before (L5700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5700)

```diff
-             translationKey: "item:splashDoubleJumpPotion"
+             translationKey: "item:catnip"
```

#### 1090. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5702-L5709` → after: `L8896-L8907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8896-L8907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8896-L8907) · [Before (L5702-L5709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5702-L5709)

```diff
-           type: "Item",
-           textureInfo: "splash_double_jump_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashDoubleJumpPotionDescription"
-           }
+           ttb: 1,
+           textureInfo: "catnip",
+           model: "CentreCross",
+           heldItemScale: .5,
+           solid: !1,
+           drops: null,
+           harvestType: "cuttable",
+           specialToolDrop: {
+             tool: "Shears",
+             drops: "Catnip"
+           },
+           canBePlacedOver: !0
```

#### 1091. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5711` → after: `L8909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8909) · [Before (L5711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5711)

```diff
-         "Arrow of Double Jump": {
+         "Mango Log": {
```

#### 1092. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5713` → after: `L8911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8911) · [Before (L5713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5713)

```diff
-             translationKey: "item:arrowOfDoubleJump"
+             translationKey: "item:mangoLog"
```

#### 1093. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5715-L5720` → after: `L8913-L8915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8913-L8915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8913-L8915) · [Before (L5715-L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5715-L5720)

```diff
-           type: "Item",
-           textureInfo: "double_jump_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 2400,
+           textureInfo: "log_mango",
+           harvestType: "wood"
```

#### 1094. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5722` → after: `L8917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8917) · [Before (L5722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5722)

```diff
-         "Heat Resistance Potion": {
+         "Barkless Mango Log": {
```

#### 1095. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5724` → after: `L8919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8919) · [Before (L5724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5724)

```diff
-             translationKey: "item:heatResistancePotion"
+             translationKey: "item:barklessMangoLog"
```

#### 1096. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5726-L5739` → after: `L8921-L8929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8921-L8929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8921-L8929) · [Before (L5726-L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5726-L5739)

```diff
-           type: "Chargeable",
-           textureInfo: "heat_resistance_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
-           description: {
-             translationKey: "item:heatResistancePotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Heat Resistance Potion|meta|charging1"
+           ttb: 2e3,
+           textureInfo: "stripped_mango_log",
+           harvestType: "wood"
+         },
+         "Barkless Mango Log|TreeBase|Mango": {
+           ttb: 2e3,
+           textureInfo: "stripped_mango_log",
+           harvestType: "wood",
+           drops: "Barkless Mango Log"
```

#### 1097. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5741` → after: `L8931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8931) · [Before (L5741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5741)

```diff
-         "Splash Heat Resistance Potion": {
+         "Mango Wood Planks": {
```

#### 1098. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5743` → after: `L8933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8933) · [Before (L5743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5743)

```diff
-             translationKey: "item:splashHeatResistancePotion"
+             translationKey: "item:mangoWoodPlanks"
```

#### 1099. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5745-L5752` → after: `L8935-L8937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8935-L8937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8935-L8937) · [Before (L5745-L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5745-L5752)

```diff
-           type: "Item",
-           textureInfo: "splash_heat_resistance_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashHeatResistancePotionDescription"
-           }
+           ttb: 1800,
+           textureInfo: "planks_mango",
+           harvestType: "wood"
```

#### 1100. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5754` → after: `L8939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8939) · [Before (L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5754)

```diff
-         "Arrow of Heat Resistance": {
+         "Mango Leaves": {
```

#### 1101. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5756` → after: `L8941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8941) · [Before (L5756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5756)

```diff
-             translationKey: "item:arrowOfHeatResistance"
+             translationKey: "item:mangoLeaves"
```

#### 1102. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5758-L5763` → after: `L8943-L8945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8943-L8945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8943-L8945) · [Before (L5758-L5763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5758-L5763)

```diff
-           type: "Item",
-           textureInfo: "heat_resistance_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 350,
+           textureInfo: "leaves_mango",
+           harvestType: "cuttable"
```

#### 1103. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5765` → after: `L8947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8947) · [Before (L5765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5765)

```diff
-         "X-Ray Vision Potion": {
+         "Mango Door": {
```

#### 1104. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5767` → after: `L8949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8949) · [Before (L5767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5767)

```diff
-             translationKey: "item:xRayVisionPotion"
+             translationKey: "item:mangoDoor"
```

#### 1105. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5769-L5782` → after: `L8951-L8957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8951-L8957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8951-L8957) · [Before (L5769-L5782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5769-L5782)

```diff
-           type: "Chargeable",
-           textureInfo: "x_ray_vision_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
-           description: {
-             translationKey: "item:xRayVisionPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "X-Ray Vision Potion|meta|charging1"
+           ttb: 3600,
+           itemTexture: "mango_door",
+           model: "door",
+           harvestType: "wood",
+           rootMetaDesc: "Mango Door|meta|rot1|closed",
+           particlesIgnoreBlack: !0,
+           blockModel: "Mango Door"
```

#### 1106. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5784-L5795` → after: `L8959-L8961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8959-L8961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8959-L8961) · [Before (L5784-L5795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5784-L5795)

```diff
-         "Splash X-Ray Vision Potion": {
-           displayName: {
-             translationKey: "item:splashXRayVisionPotion"
-           },
-           type: "Item",
-           textureInfo: "splash_x_ray_vision_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashXRayVisionPotionDescription"
-           }
+         "Mango Door|meta|rot1|open": {
+           ttb: 3600,
+           harvestType: "wood"
```

#### 1107. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5797-L5806` → after: `L8963-L8985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8963-L8985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8963-L8985) · [Before (L5797-L5806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5797-L5806)

```diff
-         "Arrow of X-Ray Vision": {
-           displayName: {
-             translationKey: "item:arrowOfXRayVision"
-           },
-           type: "Item",
-           textureInfo: "x_ray_vision_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+         "Mango Door|meta|rot2|closed": {
+           ttb: 3600,
+           harvestType: "wood"
+         },
+         "Mango Door|meta|rot2|open": {
+           ttb: 3600,
+           harvestType: "wood"
+         },
+         "Mango Door|meta|rot3|closed": {
+           ttb: 3600,
+           harvestType: "wood"
+         },
+         "Mango Door|meta|rot3|open": {
+           ttb: 3600,
+           harvestType: "wood"
+         },
+ ... (7 more added lines; see GitHub link above)
```

#### 1108. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5808` → after: `L8987-L9112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R8987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L8987-L9112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L8987-L9112) · [Before (L5808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5808)

```diff
-         "Mining Yield Potion": {
+         "_Mango Door Top": {
+           ttb: 3600,
+           itemTexture: "mango_door",
+           harvestType: "wood",
+           model: "door",
+           drops: "Mango Door",
+           rootMetaDesc: "_Mango Door Top|meta|rot1|closed",
+           particlesIgnoreBlack: !0,
+           blockModel: "_Mango Door Top"
+         },
+         "_Mango Door Top|meta|rot1|open": {
+           ttb: 3600,
+           harvestType: "wood",
+           drops: "Mango Door"
+         },
+         "_Mango Door Top|meta|rot2|closed": {
+ ... (110 more added lines; see GitHub link above)
```

#### 1109. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5810` → after: `L9114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9114) · [Before (L5810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5810)

```diff
-             translationKey: "item:miningYieldPotion"
+             translationKey: "item:mangoLadder"
```

#### 1110. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5812-L5814` → after: `L9116-L9123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9116-L9123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9116-L9123) · [Before (L5812-L5814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5812-L5814)

```diff
-           type: "Chargeable",
-           textureInfo: "mining_yield_potion",
-           weight: 1,
+           ttb: 1e3,
+           itemTexture: "ladder_mango",
+           model: "rotatableOffset",
+           harvestType: "wood",
+           rootMetaDesc: "Mango Ladder|meta|rot1",
+           modelScale: 1,
+           solid: !1,
+           blockModel: "Mango Ladder",
```

#### 1111. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5816-L5821` → after: `L9125-L9129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9125-L9129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9125-L9129) · [Before (L5816-L5821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5816-L5821)

```diff
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
-           description: {
-             translationKey: "item:miningYieldPotionDescription"
+           blockModelItem: !0
+         }),
+         "Mango Block": {
+           displayName: {
+             translationKey: "item:mangoBlock"
```

#### 1112. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5823-L5825` → after: `L9131-L9134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9131-L9134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9131-L9134) · [Before (L5823-L5825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5823-L5825)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Mining Yield Potion|meta|charging1"
+           ttb: 600,
+           textureInfo: ["mango_block_side", "mango_block_top", "mango_block_bottom"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "wood"
```

#### 1113. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5827` → after: `L9136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9136) · [Before (L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5827)

```diff
-         "Mining Yield Potion II": {
+         "Banana Block": {
```

#### 1114. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5829-L5841` → after: `L9138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9138) · [Before (L5829-L5841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5829-L5841)

```diff
-             translationKey: "item:miningYieldPotionII"
-           },
-           type: "Chargeable",
-           textureInfo: "mining_yield_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Mining Yield Potion",
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
-           description: {
-             translationKey: "item:miningYieldPotionDescription"
+             translationKey: "item:bananaBlock"
```

#### 1115. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5843-L5845` → after: `L9140-L9143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9140-L9143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9140-L9143) · [Before (L5843-L5845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5843-L5845)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Mining Yield Potion II|meta|charging1"
+           ttb: 1200,
+           textureInfo: ["banana_block_side", "banana_block_top"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           harvestType: "wood"
```

#### 1116. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5847` → after: `L9145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9145) · [Before (L5847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5847)

```diff
-         "Splash Mining Yield Potion": {
+         "Banana Seeds": {
```

#### 1117. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5849` → after: `L9147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9147) · [Before (L5849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5849)

```diff
-             translationKey: "item:splashMiningYieldPotion"
+             translationKey: "item:bananaSeeds"
```

#### 1118. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5851-L5855` → after: `L9149-L9154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9149-L9154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9149-L9154) · [Before (L5851-L5855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5851-L5855)

```diff
-           type: "Item",
-           textureInfo: "splash_mining_yield_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           ttb: 400,
+           textureInfo: "banana_stem",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           itemTexture: "banana_seeds",
```

#### 1119. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5857` → after: `L9156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9156) · [Before (L5857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5857)

```diff
-             translationKey: "item:splashMiningYieldPotionDescription"
+             translationKey: "item:bananaSeedsDescription"
```

#### 1120. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5860` → after: `L9159-L9189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9159-L9189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9159-L9189) · [Before (L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5860)

```diff
-         "Splash Mining Yield Potion II": {
+         "Banana Seeds|Growing": {
+           ttb: 400,
+           textureInfo: "banana_stem",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: "Banana Seeds"
+         },
+         ...(0, av.Jb)("Attached Banana Stem", {
+           displayName: {
+             translationKey: "item:attachedBananaStem"
+           },
+           ttb: 400,
+           textureInfo: ["attached_banana_stem_wrapper", "attached_banana_stem"],
+           model: "CustomPlanes|rotatable",
+           solid: !1,
+ ... (15 more added lines; see GitHub link above)
```

#### 1121. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5862` → after: `L9191-L9202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9191-L9202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9191-L9202) · [Before (L5862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5862)

```diff
-             translationKey: "item:splashMiningYieldPotionII"
+             translationKey: "item:danglingRope"
+           },
+           ttb: 225,
+           itemTexture: "dangling_rope",
+           model: "CustomModel",
+           harvestType: "cuttable",
+           solid: !1,
+           blockModel: "Dangling Rope",
+           modelScale: 10,
+           customModelInfo: {
+             yOffset: -.4375,
+             backFaceCulling: !0
```

#### 1122. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5871` → after: `L9205-L9208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9205-L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9205-L9208) · [Before (L5871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5871)

```diff
-             translationKey: "item:splashMiningYieldPotionDescription"
+             translationKey: "item:ceilingClimbableDescription"
+           },
+           climbableInside: {
+             upForceScalar: .95
```

#### 1123. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5874` → after: `L9211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9211) · [Before (L5874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5874)

```diff
-         "Arrow of Mining Yield": {
+         "Dangling Vine": {
```

#### 1124. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5876` → after: `L9213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9213) · [Before (L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5876)

```diff
-             translationKey: "item:arrowOfMiningYield"
+             translationKey: "item:danglingVine"
```

#### 1125. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5878-L5887` → after: `L9215-L9224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9215-L9224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9215-L9224) · [Before (L5878-L5887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5878-L5887)

```diff
-           type: "Item",
-           textureInfo: "mining_yield_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
-         },
-         "Brain Rot Potion": {
-           displayName: {
-             translationKey: "item:brainRotPotion"
+           ttb: 225,
+           itemTexture: "dangling_vine",
+           model: "CustomModel",
+           harvestType: "cuttable",
+           solid: !1,
+           blockModel: "Dangling Vine",
+           modelScale: 10,
+           customModelInfo: {
+             yOffset: -.4375,
+             backFaceCulling: !0
```

#### 1126. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5898` → after: `L9227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9227) · [Before (L5898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5898)

```diff
-             translationKey: "item:brainRotPotionDescription"
+             translationKey: "item:ceilingClimbableDescription"
```

#### 1127. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5900-L5902` → after: `L9229-L9231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9229-L9231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9229-L9231) · [Before (L5900-L5902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5900-L5902)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Brain Rot Potion|meta|charging1"
+           climbableInside: {
+             upForceScalar: .95
+           }
```

#### 1128. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5904` → after: `L9233-L9235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9233-L9235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9233-L9235) · [Before (L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5904)

```diff
-         "Splash Brain Rot Potion": {
+         ...(0, av.nb)("Gorilla"),
+         ...(0, av.nb)("Wildcat"),
+         "Fruity Maple Leaves": {
```

#### 1129. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5906` → after: `L9237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9237) · [Before (L5906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5906)

```diff
-             translationKey: "item:splashBrainRotPotion"
+             translationKey: "item:fruityMapleLeaves"
```

#### 1130. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5908-L5914` → after: `L9239-L9245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9239-L9245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9239-L9245) · [Before (L5908-L5914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5908-L5914)

```diff
-           type: "Item",
-           textureInfo: "splash_brain_rot_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashBrainRotPotionDescription"
+           ttb: 350,
+           textureInfo: "leaves_maple_fruity",
+           harvestType: "cuttable",
+           drops: null,
+           specialToolDrop: {
+             tool: "Shears",
+             drops: "Fruity Maple Leaves"
```

#### 1131. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5917` → after: `L9248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9248) · [Before (L5917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5917)

```diff
-         "Arrow of Brain Rot": {
+         "Pine Cone Leaves": {
```

#### 1132. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5919` → after: `L9250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9250) · [Before (L5919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5919)

```diff
-             translationKey: "item:arrowOfBrainRot"
+             translationKey: "item:pineConeLeaves"
```

#### 1133. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5921-L5926` → after: `L9252-L9259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9252-L9259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9252-L9259) · [Before (L5921-L5926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5921-L5926)

```diff
-           type: "Item",
-           textureInfo: "brain_rot_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 350,
+           textureInfo: "leaves_pine_cone",
+           harvestType: "cuttable",
+           drops: null,
+           specialToolDrop: {
+             tool: "Shears",
+             drops: "Pine Cone Leaves"
+           }
```

#### 1134. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5928` → after: `L9261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9261) · [Before (L5928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5928)

```diff
-         "Chaos Potion": {
+         "Fruity Plum Leaves": {
```

#### 1135. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5930` → after: `L9263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9263) · [Before (L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5930)

```diff
-             translationKey: "item:chaosPotion"
+             translationKey: "item:fruityPlumLeaves"
```

#### 1136. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5932-L5945` → after: `L9265-L9272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9265-L9272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9265-L9272) · [Before (L5932-L5945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5932-L5945)

```diff
-           type: "Chargeable",
-           textureInfo: "chaos_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
-           description: {
-             translationKey: "item:chaosPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 600,
-           rootMetaDesc: "Chaos Potion|meta|charging1"
+           ttb: 350,
+           textureInfo: "leaves_plum_fruity",
+           harvestType: "cuttable",
+           drops: null,
+           specialToolDrop: {
+             tool: "Shears",
+             drops: "Fruity Plum Leaves"
+           }
```

#### 1137. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5947` → after: `L9274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9274) · [Before (L5947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5947)

```diff
-         "Teleportation Potion": {
+         "Fruity Palm Leaves": {
```

#### 1138. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5949` → after: `L9276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9276) · [Before (L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5949)

```diff
-             translationKey: "item:teleportationPotion"
+             translationKey: "item:fruityPalmLeaves"
```

#### 1139. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5951-L5960` → after: `L9278-L9289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9278-L9289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9278-L9289) · [Before (L5951-L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5951-L5960)

```diff
-           type: "Chargeable",
-           textureInfo: "teleportation_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
-           description: {
-             translationKey: "item:teleportationPotionDescription"
+           ttb: 350,
+           textureInfo: "leaves_palm_fruity",
+           harvestType: "cuttable",
+           drops: null,
+           specialToolDrop: {
+             tool: "Shears",
+             drops: "Fruity Palm Leaves"
+           }
+         },
+         "Fruity Pear Leaves": {
+           displayName: {
+             translationKey: "item:fruityPearLeaves"
```

#### 1140. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5962-L5964` → after: `L9291-L9298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9291-L9298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9291-L9298) · [Before (L5962-L5964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5962-L5964)

```diff
-           chargeStages: 1,
-           chargeTime: 600,
-           rootMetaDesc: "Teleportation Potion|meta|charging1"
+           ttb: 350,
+           textureInfo: "leaves_pear_fruity",
+           harvestType: "cuttable",
+           drops: null,
+           specialToolDrop: {
+             tool: "Shears",
+             drops: "Fruity Pear Leaves"
+           }
```

#### 1141. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5966` → after: `L9300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9300) · [Before (L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5966)

```diff
-         Ammo: {
+         "Fruity Cherry Leaves": {
```

#### 1142. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5968` → after: `L9302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9302) · [Before (L5968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5968)

```diff
-             translationKey: "item:ammo"
+             translationKey: "item:fruityCherryLeaves"
```

#### 1143. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5970-L5974` → after: `L9304-L9311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9304-L9311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9304-L9311) · [Before (L5970-L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5970-L5974)

```diff
-           type: "Item",
-           textureInfo: "ammo",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 350,
+           textureInfo: "leaves_cherry_fruity",
+           harvestType: "cuttable",
+           drops: null,
+           specialToolDrop: {
+             tool: "Shears",
+             drops: "Fruity Cherry Leaves"
+           }
```

#### 1144. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L5976-L6033` → after: `L9313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9313) · [Before (L5976-L6033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L5976-L6033)

```diff
-         ...Dz("AK-47", {
-           heldItemScale: 2
-         }),
-         ...Dz("M16", {
-           heldItemScale: 2
-         }),
-         ...Dz("MP40", {
-           heldItemScale: 2.5
-         }),
-         ...Dz("TAR-21", {
-           heldItemScale: 2.5
-         }),
-         ...Dz("M1911", {
-           heldItemScale: 2
-         }),
-         ...Dz("One Shot Pistol", {
- ... (42 more removed lines; see GitHub link above)
+         "Fruity Mango Leaves": {
```

#### 1145. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6035` → after: `L9315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9315) · [Before (L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6035)

```diff
-             translationKey: "item:goldCoin"
+             translationKey: "item:fruityMangoLeaves"
```

#### 1146. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6037-L6041` → after: `L9317-L9324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9317-L9324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9317-L9324) · [Before (L6037-L6041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6037-L6041)

```diff
-           type: "Item",
-           textureInfo: "gold_coin",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 350,
+           textureInfo: "leaves_mango_fruity",
+           harvestType: "cuttable",
+           drops: null,
+           specialToolDrop: {
+             tool: "Shears",
+             drops: "Fruity Mango Leaves"
+           }
```

#### 1147. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6043` → after: `L9326-L9328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9326-L9328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9326-L9328) · [Before (L6043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6043)

```diff
-         Updraft: {
+         ...(0, av.nb)("Draugr Huntress"),
+         ...(0, av.nb)("Magma Golem"),
+         "Black Portal": {
```

#### 1148. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6045` → after: `L9330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9330) · [Before (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6045)

```diff
-             translationKey: "item:updraft"
+             translationKey: "item:blackPortal"
```

#### 1149. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6047-L6053` → after: `L9332-L9335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9332-L9335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9332-L9335) · [Before (L6047-L6053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6047-L6053)

```diff
-           type: "FullAuto",
-           textureInfo: "updraft",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:updraftDescription"
+           textureInfo: {
+             animTextures: ["black_portal0", "black_portal1", "black_portal2", "black_portal3"],
+             animationInterval: 500,
+             interpolateFrames: !1
```

#### 1150. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6055` → after: `L9337-L9340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9337-L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9337-L9340) · [Before (L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6055)

```diff
-           fireInterval: 515
+           drops: null,
+           harvestType: "rock",
+           solid: !0,
+           sa: (0, av.Ab)("Black")
```

#### 1151. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6057` → after: `L9342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9342) · [Before (L6057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6057)

```diff
-         Snowdash: {
+         "Blue Portal": {
```

#### 1152. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6059` → after: `L9344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9344) · [Before (L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6059)

```diff
-             translationKey: "item:snowdash"
+             translationKey: "item:bluePortal"
```

#### 1153. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6061-L6067` → after: `L9346-L9349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9346-L9349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9346-L9349) · [Before (L6061-L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6061-L6067)

```diff
-           type: "FullAuto",
-           textureInfo: "snowdash",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:snowdashDescription"
+           textureInfo: {
+             animTextures: ["blue_portal0", "blue_portal1", "blue_portal2", "blue_portal3"],
+             animationInterval: 500,
+             interpolateFrames: !1
```

#### 1154. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6069` → after: `L9351-L9354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9351-L9354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9351-L9354) · [Before (L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6069)

```diff
-           fireInterval: 515
+           drops: null,
+           harvestType: "rock",
+           solid: !0,
+           sa: (0, av.Ab)("Blue")
```

#### 1155. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6071` → after: `L9356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9356) · [Before (L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6071)

```diff
-         "Floor Creator": {
+         "Brown Portal": {
```

#### 1156. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6073` → after: `L9358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9358) · [Before (L6073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6073)

```diff
-             translationKey: "item:floorCreator"
+             translationKey: "item:brownPortal"
```

#### 1157. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6075-L6082` → after: `L9360-L9368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9360-L9368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9360-L9368) · [Before (L6075-L6082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6075-L6082)

```diff
-           type: "Item",
-           textureInfo: "floor_creator",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:floorCreatorDescription"
-           }
+           textureInfo: {
+             animTextures: ["brown_portal0", "brown_portal1", "brown_portal2", "brown_portal3"],
+             animationInterval: 500,
+             interpolateFrames: !1
+           },
+           drops: null,
+           harvestType: "rock",
+           solid: !0,
+           sa: (0, av.Ab)("Brown")
```

#### 1158. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6084` → after: `L9370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9370) · [Before (L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6084)

```diff
-         "Moonstone Remote Explosive": {
+         "Cyan Portal": {
```

#### 1159. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6086` → after: `L9372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9372) · [Before (L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6086)

```diff
-             translationKey: "item:moonstoneRemoteExplosive"
+             translationKey: "item:cyanPortal"
```

#### 1160. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6088-L6094` → after: `L9374-L9377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9374-L9377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9374-L9377) · [Before (L6088-L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6088-L6094)

```diff
-           type: "Item",
-           textureInfo: "moonstone_remote_explosive",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:moonstoneRemoteExplosiveDescription"
+           textureInfo: {
+             animTextures: ["cyan_portal0", "cyan_portal1", "cyan_portal2", "cyan_portal3"],
+             animationInterval: 500,
+             interpolateFrames: !1
```

#### 1161. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6096` → after: `L9379-L9382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9379-L9382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9379-L9382) · [Before (L6096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6096)

```diff
-           heldItemGlb: "Moonstone Remote"
+           drops: null,
+           harvestType: "rock",
+           solid: !0,
+           sa: (0, av.Ab)("Cyan")
```

#### 1162. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6098` → after: `L9384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9384) · [Before (L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6098)

```diff
-         "Moonstone Remote": {
+         "Gray Portal": {
```

#### 1163. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6100` → after: `L9386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9386) · [Before (L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6100)

```diff
-             translationKey: "item:moonstoneRemote"
+             translationKey: "item:grayPortal"
```

#### 1164. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6102-L6109` → after: `L9388-L9396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9388-L9396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9388-L9396) · [Before (L6102-L6109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6102-L6109)

```diff
-           type: "Item",
-           textureInfo: "moonstone_remote",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:moonstoneRemoteDescription"
-           }
+           textureInfo: {
+             animTextures: ["gray_portal0", "gray_portal1", "gray_portal2", "gray_portal3"],
+             animationInterval: 500,
+             interpolateFrames: !1
+           },
+           drops: null,
+           harvestType: "rock",
+           solid: !0,
+           sa: (0, av.Ab)("Gray")
```

#### 1165. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6111` → after: `L9398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9398) · [Before (L6111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6111)

```diff
-         "Ice Bridge": {
+         "Green Portal": {
```

#### 1166. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6113` → after: `L9400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9400) · [Before (L6113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6113)

```diff
-             translationKey: "item:iceBridge"
+             translationKey: "item:greenPortal"
```

#### 1167. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6115-L6121` → after: `L9402-L9405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9402-L9405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9402-L9405) · [Before (L6115-L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6115-L6121)

```diff
-           type: "Item",
-           textureInfo: "ice_bridge",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:iceBridgeDescription"
+           textureInfo: {
+             animTextures: ["green_portal0", "green_portal1", "green_portal2", "green_portal3"],
+             animationInterval: 500,
+             interpolateFrames: !1
```

#### 1168. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6123` → after: `L9407-L9410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9407-L9410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9407-L9410) · [Before (L6123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6123)

```diff
-           bridgeLength: Pz
+           drops: null,
+           harvestType: "rock",
+           solid: !0,
+           sa: (0, av.Ab)("Green")
```

#### 1169. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6125` → after: `L9412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9412) · [Before (L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6125)

```diff
-         "Maple Planks Bridge": {
+         "Grey Portal": {
```

#### 1170. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6127` → after: `L9414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9414) · [Before (L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6127)

```diff
-             translationKey: "item:maplePlanksBridge"
+             translationKey: "item:greyPortal"
```

#### 1171. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6129-L6135` → after: `L9416-L9419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9416-L9419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9416-L9419) · [Before (L6129-L6135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6129-L6135)

```diff
-           type: "Item",
-           textureInfo: "maple_planks_bridge",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:maplePlanksBridgeDescription"
+           textureInfo: {
+             animTextures: ["grey_portal0", "grey_portal1", "grey_portal2", "grey_portal3"],
+             animationInterval: 500,
+             interpolateFrames: !1
```

#### 1172. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6137` → after: `L9421-L9424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9421-L9424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9421-L9424) · [Before (L6137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6137)

```diff
-           bridgeLength: Pz
+           drops: null,
+           harvestType: "rock",
+           solid: !0,
+           sa: (0, av.Ab)("Grey")
```

#### 1173. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6139` → after: `L9426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9426) · [Before (L6139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6139)

```diff
-         "Messy Stone Bridge": {
+         "Light Blue Portal": {
```

#### 1174. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6141` → after: `L9428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9428) · [Before (L6141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6141)

```diff
-             translationKey: "item:messyStoneBridge"
+             translationKey: "item:lightbluePortal"
```

#### 1175. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6143-L6149` → after: `L9430-L9433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9430-L9433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9430-L9433) · [Before (L6143-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6143-L6149)

```diff
-           type: "Item",
-           textureInfo: "messy_stone_bridge",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:messyStoneBridgeDescription"
+           textureInfo: {
+             animTextures: ["lightblue_portal0", "lightblue_portal1", "lightblue_portal2", "lightblue_portal3"],
+             animationInterval: 500,
+             interpolateFrames: !1
```

#### 1176. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6151` → after: `L9435-L9438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9435-L9438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9435-L9438) · [Before (L6151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6151)

```diff
-           bridgeLength: Pz
+           drops: null,
+           harvestType: "rock",
+           solid: !0,
+           sa: (0, av.Ab)("Light Blue")
```

#### 1177. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6153-L6228` → after: `L9440-L9442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9440-L9442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9440-L9442) · [Before (L6153-L6228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6153-L6228)

```diff
-         ...(0, oz.B)((zz => `${zz} Balloon`), {
-           displayName: zz => ({
-             translationKey: `item:${(0,Fz.ue)(zz)}Balloon`
-           }),
-           textureInfo: zz => `${(0,Fz.ye)(zz)}_balloon`,
-           heldItemGlb: zz => `${zz} Balloon Item`,
-           type: "Item",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:balloonDescription"
-           }
-         }),
-         ...(0, oz.B)((zz => `INTERNAL_MESH_${zz} Balloon`), {
-           textureInfo: zz => `${(0,Fz.ye)(zz)}_balloon`,
- ... (60 more removed lines; see GitHub link above)
+         "Light Gray Portal": {
+           displayName: {
+             translationKey: "item:lightgrayPortal"
```

#### 1178. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6230-L6306` → after: `L9444-L9447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9444-L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9444-L9447) · [Before (L6230-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6230-L6306)

```diff
-           fireInterval: 1015,
-           secondaryDamage: 250,
-           holdAsAiming: !0,
-           hideAimingUI: !0
-         }),
-         ...(0, oz.B)((zz => `${zz} Paintball Explosive Item`), {
-           displayName: zz => ({
-             translationKey: `item:${(0,Fz.ue)(zz)}PaintballExplosive`
-           }),
-           textureInfo: zz => `explosive_paint_${(0,Fz.ye)(zz)}`,
-           type: "Item",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:paintballExplosiveDescription"
- ... (61 more removed lines; see GitHub link above)
+           textureInfo: {
+             animTextures: ["lightgray_portal0", "lightgray_portal1", "lightgray_portal2", "lightgray_portal3"],
+             animationInterval: 500,
+             interpolateFrames: !1
```

#### 1179. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6308-L6330` → after: `L9449-L9454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9449-L9454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9449-L9454) · [Before (L6308-L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6308-L6330)

```diff
-           minChargeStateToUse: 0
-         }),
-         ...Object.fromEntries(vz.w.map((zz => {
-           const tz = (0, Fz.ue)(zz),
-             sz = (0, Fz.ye)(zz);
-           return [(0, Fz.Xb)(zz), {
-             displayName: {
-               translationKey: `item:${tz}SpawnOrb`
-             },
-             type: "Item",
-             textureInfo: `${sz}_spawn_orb`,
-             weight: 1,
-             heldItemScale: 1,
-             stackable: !0,
-             description: {
-               translationKey: `item:${tz}SpawnOrbDescription`,
- ... (7 more removed lines; see GitHub link above)
+           drops: null,
+           harvestType: "rock",
+           solid: !0,
+           sa: (0, av.Ab)("Light Gray")
+         },
+         "Lime Portal": {
```

#### 1180. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6332` → after: `L9456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9456) · [Before (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6332)

```diff
-             translationKey: "item:mobCatcher"
+             translationKey: "item:limePortal"
```

#### 1181. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6334-L6361` → after: `L9458-L9468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9458-L9468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9458-L9468) · [Before (L6334-L6361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6334-L6361)

```diff
-           type: "Item",
-           textureInfo: "mob_catcher",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:mobCatcherDescription"
-           }
-         },
-         ...Object.fromEntries(vz.l.flatMap((zz => {
-           const tz = (0, Fz.ye)(zz);
-           return vz.p[zz].map((sz => {
-             var Wz;
-             const Xz = "default" !== sz && (null === (Wz = wz[zz]) || void 0 === Wz ? void 0 : Wz.includes(sz)),
-               Oz = Xz ? {
-                 heldItemGlb: (0, Fz.Eb)(zz, "default")
- ... (12 more removed lines; see GitHub link above)
+           textureInfo: {
+             animTextures: ["lime_portal0", "lime_portal1", "lime_portal2", "lime_portal3"],
+             animationInterval: 500,
+             interpolateFrames: !1
+           },
+           drops: null,
+           harvestType: "rock",
+           solid: !0,
+           sa: (0, av.Ab)("Lime")
+         },
+         "Magenta Portal": {
```

#### 1182. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6363` → after: `L9470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9470) · [Before (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6363)

```diff
-             translationKey: "item:timedSpikeBomb"
+             translationKey: "item:magentaPortal"
```

#### 1183. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6365-L6371` → after: `L9472-L9475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9472-L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9472-L9475) · [Before (L6365-L6371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6365-L6371)

```diff
-           type: "Chargeable",
-           textureName: "timed_spike_bomb",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:timedSpikeBombDescription"
+           textureInfo: {
+             animTextures: ["magenta_portal0", "magenta_portal1", "magenta_portal2", "magenta_portal3"],
+             animationInterval: 500,
+             interpolateFrames: !1
```

#### 1184. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6373-L6378` → after: `L9477-L9482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9477-L9482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9477-L9482) · [Before (L6373-L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6373-L6378)

```diff
-           chargeStages: 4,
-           chargeTime: 2e3,
-           chargeSound: "fallsmall",
-           rootMetaDesc: "Timed Spike Bomb|meta|charging1"
-         }),
-         "Toxin Ball": {
+           drops: null,
+           harvestType: "rock",
+           solid: !0,
+           sa: (0, av.Ab)("Magenta")
+         },
+         "Orange Portal": {
```

#### 1185. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6380` → after: `L9484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9484) · [Before (L6380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6380)

```diff
-             translationKey: "item:toxinBall"
+             translationKey: "item:orangePortal"
```

#### 1186. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6382-L6388` → after: `L9486-L9489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9486-L9489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9486-L9489) · [Before (L6382-L6388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6382-L6388)

```diff
-           type: "Item",
-           textureInfo: "toxin_ball",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:toxinBallDescription"
+           textureInfo: {
+             animTextures: ["orange_portal0", "orange_portal1", "orange_portal2", "orange_portal3"],
+             animationInterval: 500,
+             interpolateFrames: !1
```

#### 1187. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6390` → after: `L9491-L9494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9491-L9494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9491-L9494) · [Before (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6390)

```diff
-           secondaryDamage: 13
+           drops: null,
+           harvestType: "rock",
+           solid: !0,
+           sa: (0, av.Ab)("Orange")
```

#### 1188. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6392` → after: `L9496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9496) · [Before (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6392)

```diff
-         "Aura XP Fragment": {
+         "Pink Portal": {
```

#### 1189. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6394` → after: `L9498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9498) · [Before (L6394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6394)

```diff
-             translationKey: "item:auraXpFragment"
+             translationKey: "item:pinkPortal"
```

#### 1190. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6396-L6404` → after: `L9500-L9503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9500-L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9500-L9503) · [Before (L6396-L6404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6396-L6404)

```diff
-           type: "Chargeable",
-           textureInfo: "aura_xp_fragment",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           eatable: !0,
-           chargeSound: "eat1",
-           description: {
-             translationKey: "item:auraXpFragmentDescription"
+           textureInfo: {
+             animTextures: ["pink_portal0", "pink_portal1", "pink_portal2", "pink_portal3"],
+             animationInterval: 500,
+             interpolateFrames: !1
```

#### 1191. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6406-L6408` → after: `L9505-L9508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9505-L9508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9505-L9508) · [Before (L6406-L6408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6406-L6408)

```diff
-           chargeStages: 1,
-           chargeTime: 500,
-           rootMetaDesc: "Aura XP Fragment|meta|charging1"
+           drops: null,
+           harvestType: "rock",
+           solid: !0,
+           sa: (0, av.Ab)("Pink")
```

#### 1192. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6410` → after: `L9510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9510) · [Before (L6410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6410)

```diff
-         "Aura XP Orb": {
+         "Purple Portal": {
```

#### 1193. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6412` → after: `L9512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9512) · [Before (L6412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6412)

```diff
-             translationKey: "item:auraXpOrb"
+             translationKey: "item:purplePortal"
```

#### 1194. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6414-L6422` → after: `L9514-L9517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9514-L9517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9514-L9517) · [Before (L6414-L6422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6414-L6422)

```diff
-           type: "Chargeable",
-           textureInfo: "aura_xp_orb",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           eatable: !0,
-           chargeSound: "eat1",
-           description: {
-             translationKey: "item:auraXpOrbDescription"
+           textureInfo: {
+             animTextures: ["purple_portal0", "purple_portal1", "purple_portal2", "purple_portal3"],
+             animationInterval: 500,
+             interpolateFrames: !1
```

#### 1195. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6424-L6426` → after: `L9519-L9522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9519-L9522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9519-L9522) · [Before (L6424-L6426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6424-L6426)

```diff
-           chargeStages: 1,
-           chargeTime: 1250,
-           rootMetaDesc: "Aura XP Orb|meta|charging1"
+           drops: null,
+           harvestType: "rock",
+           solid: !0,
+           sa: (0, av.Ab)("Purple")
```

#### 1196. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6428` → after: `L9524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9524) · [Before (L6428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6428)

```diff
-         "Aura XP Potion": {
+         "Red Portal": {
```

#### 1197. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6430` → after: `L9526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9526) · [Before (L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6430)

```diff
-             translationKey: "item:auraXpPotion"
+             translationKey: "item:redPortal"
```

#### 1198. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6432-L6441` → after: `L9528-L9531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9528-L9531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9528-L9531) · [Before (L6432-L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6432-L6441)

```diff
-           type: "Chargeable",
-           textureInfo: "aura_xp_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           stackable: !1,
-           afterEatenItem: "Empty Bottle",
-           description: {
-             translationKey: "item:auraXpPotionDescription"
+           textureInfo: {
+             animTextures: ["red_portal0", "red_portal1", "red_portal2", "red_portal3"],
+             animationInterval: 500,
+             interpolateFrames: !1
```

#### 1199. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6443-L6445` → after: `L9533-L9536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9533-L9536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9533-L9536) · [Before (L6443-L6445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6443-L6445)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Aura XP Potion|meta|charging1"
+           drops: null,
+           harvestType: "rock",
+           solid: !0,
+           sa: (0, av.Ab)("Red")
```

#### 1200. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6447` → after: `L9538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9538) · [Before (L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6447)

```diff
-         "Aura XP Potion II": {
+         "White Portal": {
```

#### 1201. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6449` → after: `L9540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9540) · [Before (L6449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6449)

```diff
-             translationKey: "item:auraXpPotionII"
+             translationKey: "item:whitePortal"
```

#### 1202. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6451-L6460` → after: `L9542-L9545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9542-L9545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9542-L9545) · [Before (L6451-L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6451-L6460)

```diff
-           type: "Chargeable",
-           textureInfo: "aura_xp_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           stackable: !1,
-           afterEatenItem: "Empty Bottle",
-           description: {
-             translationKey: "item:auraXpPotionDescription"
+           textureInfo: {
+             animTextures: ["white_portal0", "white_portal1", "white_portal2", "white_portal3"],
+             animationInterval: 500,
+             interpolateFrames: !1
```

#### 1203. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6462-L6464` → after: `L9547-L9550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9547-L9550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9547-L9550) · [Before (L6462-L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6462-L6464)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Aura XP Potion II|meta|charging1"
+           drops: null,
+           harvestType: "rock",
+           solid: !0,
+           sa: (0, av.Ab)("White")
```

#### 1204. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6466` → after: `L9552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9552) · [Before (L6466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6466)

```diff
-         "Splash Aura XP Potion": {
+         "Yellow Portal": {
```

#### 1205. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6468` → after: `L9554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9554) · [Before (L6468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6468)

```diff
-             translationKey: "item:splashAuraXpPotion"
+             translationKey: "item:yellowPortal"
```

#### 1206. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6470-L6477` → after: `L9556-L9564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9556-L9564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9556-L9564) · [Before (L6470-L6477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6470-L6477)

```diff
-           type: "Item",
-           textureInfo: "splash_aura_xp_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashAuraXpPotionDescription"
-           }
+           textureInfo: {
+             animTextures: ["yellow_portal0", "yellow_portal1", "yellow_portal2", "yellow_portal3"],
+             animationInterval: 500,
+             interpolateFrames: !1
+           },
+           drops: null,
+           harvestType: "rock",
+           solid: !0,
+           sa: (0, av.Ab)("Yellow")
```

#### 1207. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6479` → after: `L9566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9566) · [Before (L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6479)

```diff
-         "Splash Aura XP Potion II": {
+         "Leather Block": {
```

#### 1208. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6481` → after: `L9568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9568) · [Before (L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6481)

```diff
-             translationKey: "item:splashAuraXpPotionII"
+             translationKey: "item:leatherBlock"
```

#### 1209. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6483-L6489` → after: `L9570-L9576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9570-L9576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9570-L9576) · [Before (L6483-L6489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6483-L6489)

```diff
-           type: "Item",
-           textureInfo: "splash_aura_xp_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashAuraXpPotionDescription"
+           ttb: 960,
+           textureInfo: ["leather_block_side", "leather_block_top"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
```

#### 1210. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6492` → after: `L9579-L9580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9579-L9580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9579-L9580) · [Before (L6492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6492)

```diff
-         "Arrow of Aura XP": {
+         ...(0, av.nb)("Horse"),
+         "Tomato Plant": {
```

#### 1211. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6494` → after: `L9582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9582) · [Before (L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6494)

```diff
-             translationKey: "item:arrowOfAuraXp"
+             translationKey: "item:tomato"
```

#### 1212. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6496-L6501` → after: `L9584-L9589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9584-L9589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9584-L9589) · [Before (L6496-L6501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6496-L6501)

```diff
-           type: "Item",
-           textureInfo: "aura_xp_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 400,
+           textureInfo: "tomato_plant_stage0",
+           itemTexture: "tomato_plant_stage0",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable"
```

#### 1213. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6503` → after: `L9591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9591) · [Before (L6503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6503)

```diff
-         Firecracker: {
+         ...(0, av.zb)("Tomato Plant", {
```

#### 1214. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6505` → after: `L9593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9593) · [Before (L6505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6505)

```diff
-             translationKey: "item:firecracker"
+             translationKey: "item:tomato"
```

#### 1215. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6507-L6513` → after: `L9595-L9607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9595-L9607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9595-L9607) · [Before (L6507-L6513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6507-L6513)

```diff
-           type: "Item",
-           textureInfo: "firecracker",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:firecrackerDescription"
+           ttb: 400,
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: null
+         }, ["tomato_plant_stage1"], {
+           1: {
+             itemTexture: "tomato_plant_stage1"
+           }
+         }),
+         "Tomato Plant|FreshlyGrown": {
+           displayName: {
+             translationKey: "item:tomato"
```

#### 1216. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6515` → after: `L9609-L9615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9609-L9615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9609-L9615) · [Before (L6515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6515)

```diff
-           secondaryDamage: 15
+           ttb: 400,
+           textureInfo: "tomato_plant_stage2",
+           itemTexture: "tomato_plant_stage2",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           onMinedAura: 5
```

#### 1217. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6517` → after: `L9617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9617) · [Before (L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6517)

```diff
-         "Rainbow Firecracker": {
+         "Tomato Plant|Top|FreshlyGrown": {
```

#### 1218. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6519-L6527` → after: `L9619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9619) · [Before (L6519-L6527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6519-L6527)

```diff
-             translationKey: "item:rainbowFirecracker"
-           },
-           type: "Item",
-           textureInfo: "firecracker_rainbow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:firecrackerDescription"
+             translationKey: "item:tomato"
```

#### 1219. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6529` → after: `L9621-L9627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9621-L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9621-L9627) · [Before (L6529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6529)

```diff
-           secondaryDamage: 15
+           ttb: 400,
+           textureInfo: "tomato_plant_stage2_top",
+           itemTexture: "tomato_plant_stage2_top",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           onMinedAura: 5
```

#### 1220. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6531-L6545` → after: `L9629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9629) · [Before (L6531-L6545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6531-L6545)

```diff
-         ...(0, oz.B)((zz => `${zz} Firecracker`), {
-           displayName: zz => ({
-             translationKey: `item:${(0,Fz.ue)(zz)}Firecracker`
-           }),
-           textureInfo: zz => `firecracker_${(0,Fz.ye)(zz)}`,
-           type: "Item",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:firecrackerDescription"
-           },
-           secondaryDamage: 15
-         }),
-         "Firecracker Pebble": {
+         "Carrot Plant": {
```

#### 1221. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6547` → after: `L9631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9631) · [Before (L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6547)

```diff
-             translationKey: "item:firecrackerPebble"
+             translationKey: "item:carrotSeeds"
```

#### 1222. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6549-L6553` → after: `L9633-L9639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9633-L9639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9633-L9639) · [Before (L6549-L6553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6549-L6553)

```diff
-           type: "Item",
-           textureInfo: "firecracker_pebble",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
+           ttb: 400,
+           textureInfo: "carrot_plant_stage0",
+           itemTexture: "carrot_seeds",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: "Carrot Seeds",
```

#### 1223. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6555-L6557` → after: `L9641-L9642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9641-L9642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9641-L9642) · [Before (L6555-L6557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6555-L6557)

```diff
-             translationKey: "item:firecrackerPebbleDescription"
-           },
-           secondaryDamage: 15
+             translationKey: "item:carrotSeedsDescription"
+           }
```

#### 1224. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6559` → after: `L9644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9644) · [Before (L6559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6559)

```diff
-         "Rainbow Firecracker Pebble": {
+         ...(0, av.zb)("Carrot Plant", {
```

#### 1225. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6561` → after: `L9646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9646) · [Before (L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6561)

```diff
-             translationKey: "item:rainbowFirecrackerPebble"
+             translationKey: "item:carrotSeeds"
```

#### 1226. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6563-L6567` → after: `L9648-L9653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9648-L9653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9648-L9653) · [Before (L6563-L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6563-L6567)

```diff
-           type: "Item",
-           textureInfo: "firecracker_pebble_rainbow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
+           ttb: 400,
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           itemTexture: "carrot_seeds",
+           drops: "Carrot Seeds",
```

#### 1227. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6569` → after: `L9655-L9660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9655-L9660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9655-L9660) · [Before (L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6569)

```diff
-             translationKey: "item:firecrackerPebbleDescription"
+             translationKey: "item:carrotSeedsDescription"
+           }
+         }, ["carrot_plant_stage1"]),
+         "Carrot Plant|FreshlyGrown": {
+           displayName: {
+             translationKey: "item:carrotSeeds"
```

#### 1228. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6571-L6581` → after: `L9662-L9667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9662-L9667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9662-L9667) · [Before (L6571-L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6571-L6581)

```diff
-           secondaryDamage: 15
-         },
-         ...(0, oz.B)((zz => `${zz} Firecracker Pebble`), {
-           displayName: zz => ({
-             translationKey: `item:${(0,Fz.ue)(zz)}FirecrackerPebble`
-           }),
-           textureInfo: zz => `firecracker_pebble_${(0,Fz.ye)(zz)}`,
-           type: "Item",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
+           ttb: 400,
+           textureInfo: "carrot_plant_stage2",
+           itemTexture: "carrot_seeds",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
```

#### 1229. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6583` → after: `L9669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9669) · [Before (L6583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6583)

```diff
-             translationKey: "item:firecrackerPebbleDescription"
+             translationKey: "item:carrotSeedsDescription"
```

#### 1230. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6585-L6587` → after: `L9671-L9673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9671-L9673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9671-L9673) · [Before (L6585-L6587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6585-L6587)

```diff
-           secondaryDamage: 15
-         }),
-         "WorldBuilder Wand": {
+           onMinedAura: 5
+         },
+         "Potato Plant": {
```

#### 1231. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6589` → after: `L9675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9675) · [Before (L6589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6589)

```diff
-             translationKey: "item:worldBuilderWand"
+             translationKey: "item:potatoSeeds"
```

#### 1232. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6591-L6595` → after: `L9677-L9683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9677-L9683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9677-L9683) · [Before (L6591-L6595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6591-L6595)

```diff
-           type: "Item",
-           textureInfo: "worldbuilder_wand",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
+           ttb: 400,
+           textureInfo: "potato_plant_stage0",
+           itemTexture: "potato_seeds",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: "Potato Seeds",
```

#### 1233. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6597` → after: `L9685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9685) · [Before (L6597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6597)

```diff
-             translationKey: "item:worldBuilderWandDescription"
+             translationKey: "item:potatoSeedsDescription"
```

#### 1234. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6600` → after: `L9688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9688) · [Before (L6600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6600)

```diff
-         "Red Strongfish": {
+         ...(0, av.zb)("Potato Plant", {
```

#### 1235. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6602` → after: `L9690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9690) · [Before (L6602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6602)

```diff
-             translationKey: "item:redStrongfish"
+             translationKey: "item:potatoSeeds"
```

#### 1236. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6604-L6610` → after: `L9692-L9702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9692-L9702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9692-L9702) · [Before (L6604-L6610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6604-L6610)

```diff
-           type: "Item",
-           textureInfo: "strongfish_red",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Green Strongfish": {
+           ttb: 400,
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           itemTexture: "potato_seeds",
+           drops: "Potato Seeds",
+           description: {
+             translationKey: "item:potatoSeedsDescription"
+           }
+         }, ["potato_plant_stage1"]),
+         "Potato Plant|FreshlyGrown": {
```

#### 1237. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6612` → after: `L9704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9704) · [Before (L6612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6612)

```diff
-             translationKey: "item:greenStrongfish"
+             translationKey: "item:potatoSeeds"
```

#### 1238. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6614-L6618` → after: `L9706-L9715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9706-L9715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9706-L9715) · [Before (L6614-L6618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6614-L6618)

```diff
-           type: "Item",
-           textureInfo: "strongfish_green",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "potato_plant_stage2",
+           itemTexture: "potato_seeds",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           onMinedAura: 5,
+           description: {
+             translationKey: "item:potatoSeedsDescription"
+           }
```

#### 1239. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6620` → after: `L9717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9717) · [Before (L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6620)

```diff
-         "Moon Strongfish": {
+         "Strawberry Bush": {
```

#### 1240. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6622` → after: `L9719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9719) · [Before (L6622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6622)

```diff
-             translationKey: "item:moonStrongfish"
+             translationKey: "item:strawberries"
```

#### 1241. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6624-L6628` → after: `L9721-L9726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9721-L9726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9721-L9726) · [Before (L6624-L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6624-L6628)

```diff
-           type: "Item",
-           textureInfo: "strongfish_moon",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "strawberry_bush_stage0",
+           itemTexture: "strawberry_bush_stage0",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable"
```

#### 1242. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6630` → after: `L9728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9728) · [Before (L6630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6630)

```diff
-         Wheatfish: {
+         ...(0, av.zb)("Strawberry Bush", {
```

#### 1243. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6632` → after: `L9730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9730) · [Before (L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6632)

```diff
-             translationKey: "item:wheatfish"
+             translationKey: "item:strawberries"
```

#### 1244. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6634-L6640` → after: `L9732-L9739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9732-L9739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9732-L9739) · [Before (L6634-L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6634-L6640)

```diff
-           type: "Chargeable",
-           textureInfo: "wheatfish",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0,
-           description: {
-             translationKey: "item:wheatfishDescription"
+           ttb: 400,
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: null
+         }, ["strawberry_bush_stage1", "strawberry_bush_stage2"], {
+           1: {
+             itemTexture: "strawberry_bush_stage1"
```

#### 1245. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6642-L6649` → after: `L9741-L9746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9741-L9746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9741-L9746) · [Before (L6642-L6649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6642-L6649)

```diff
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 750,
-           eatHealAmt: 15,
-           rootMetaDesc: "Wheatfish|meta|charging1"
-         },
-         Moonfish: {
+           2: {
+             itemTexture: "strawberry_bush_stage2",
+             onMinedAura: 5
+           }
+         }),
+         "Sugar Cane Plant": {
```

#### 1246. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6651` → after: `L9748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9748) · [Before (L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6651)

```diff
-             translationKey: "item:moonfish"
+             translationKey: "item:sugarCane"
```

#### 1247. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6653-L6657` → after: `L9750-L9755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9750-L9755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9750-L9755) · [Before (L6653-L6657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6653-L6657)

```diff
-           type: "Item",
-           textureInfo: "moonfish",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "sugar_cane_plant_stage0",
+           itemTexture: "sugar_cane_plant_stage0",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable"
```

#### 1248. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6659` → after: `L9757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9757) · [Before (L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6659)

```diff
-         Bombfish: {
+         ...(0, av.zb)("Sugar Cane Plant", {
```

#### 1249. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6661` → after: `L9759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9759) · [Before (L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6661)

```diff
-             translationKey: "item:bombfish"
+             translationKey: "item:sugarCane"
```

#### 1250. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6663-L6669` → after: `L9761-L9771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9761-L9771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9761-L9771) · [Before (L6663-L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6663-L6669)

```diff
-           type: "Item",
-           textureInfo: "bombfish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Boomerang Fish": {
+           ttb: 400,
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: null
+         }, ["sugar_cane_plant_stage1"], {
+           1: {
+             itemTexture: "sugar_cane_plant_stage1"
+           }
+         }),
+         "Sugar Cane Plant|FreshlyGrown": {
```

#### 1251. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6671` → after: `L9773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9773) · [Before (L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6671)

```diff
-             translationKey: "item:boomerangFish"
+             translationKey: "item:sugarCane"
```

#### 1252. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6673-L6677` → after: `L9775-L9781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9775-L9781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9775-L9781) · [Before (L6673-L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6673-L6677)

```diff
-           type: "Item",
-           textureInfo: "boomerang_fish",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "sugar_cane_plant_stage2",
+           itemTexture: "sugar_cane_plant_stage2",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           onMinedAura: 5
```

#### 1253. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6679` → after: `L9783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9783) · [Before (L6679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6679)

```diff
-         "Root Flounder": {
+         "Sugar Cane Plant|Top|FreshlyGrown": {
```

#### 1254. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6681` → after: `L9785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9785) · [Before (L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6681)

```diff
-             translationKey: "item:rootFlounder"
+             translationKey: "item:sugarCane"
```

#### 1255. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6683-L6687` → after: `L9787-L9793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9787-L9793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9787-L9793) · [Before (L6683-L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6683-L6687)

```diff
-           type: "Item",
-           textureInfo: "root_flounder",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "sugar_cane_plant_stage2_top",
+           itemTexture: "sugar_cane_plant_stage2_top",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           onMinedAura: 5
```

#### 1256. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6689` → after: `L9795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9795) · [Before (L6689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6689)

```diff
-         "Abyss Carp": {
+         "Lettuce Plant": {
```

#### 1257. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6691` → after: `L9797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9797) · [Before (L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6691)

```diff
-             translationKey: "item:abyssCarp"
+             translationKey: "item:lettuce"
```

#### 1258. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6693-L6697` → after: `L9799-L9804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9799-L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9799-L9804) · [Before (L6693-L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6693-L6697)

```diff
-           type: "Item",
-           textureInfo: "abyss_carp",
-           weight: 1,
-           heldItemScale: 1.5,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "lettuce_plant_stage0",
+           itemTexture: "lettuce_plant_stage0",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable"
```

#### 1259. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6699` → after: `L9806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9806) · [Before (L6699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6699)

```diff
-         "Boulder Bass": {
+         ...(0, av.zb)("Lettuce Plant", {
```

#### 1260. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6701` → after: `L9808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9808) · [Before (L6701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6701)

```diff
-             translationKey: "item:boulderBass"
+             translationKey: "item:lettuce"
```

#### 1261. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6703-L6709` → after: `L9810-L9820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9810-L9820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9810-L9820) · [Before (L6703-L6709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6703-L6709)

```diff
-           type: "Item",
-           textureInfo: "boulder_bass",
-           weight: 1,
-           heldItemScale: 2,
-           stackable: !0
-         },
-         Barnaclejaw: {
+           ttb: 400,
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: null
+         }, ["lettuce_plant_stage1"], {
+           1: {
+             itemTexture: "lettuce_plant_stage1"
+           }
+         }),
+         "Lettuce Plant|FreshlyGrown": {
```

#### 1262. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6711` → after: `L9822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9822) · [Before (L6711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6711)

```diff
-             translationKey: "item:barnacleJaw"
+             translationKey: "item:lettuce"
```

#### 1263. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6713-L6719` → after: `L9824-L9857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9824-L9857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9824-L9857) · [Before (L6713-L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6713-L6719)

```diff
-           type: "Item",
-           textureInfo: "barnaclejaw",
-           weight: 1,
-           heldItemScale: 2,
-           stackable: !0
-         },
-         "Crystalized Wheatfish": {
+           ttb: 400,
+           textureInfo: "lettuce_plant_stage2",
+           itemTexture: "lettuce_plant_stage2",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           onMinedAura: 5
+         },
+         "Coffee Plant": {
+           displayName: {
+             translationKey: "item:coffeeBean"
+           },
+           ttb: 400,
+           textureInfo: "coffee_plant_stage0",
+           itemTexture: "coffee_plant_stage0",
+           model: "CentreCross",
+ ... (18 more added lines; see GitHub link above)
```

#### 1264. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6721` → after: `L9859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9859) · [Before (L6721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6721)

```diff
-             translationKey: "item:crystalizedWheatfish"
+             translationKey: "item:coffeeBean"
```

#### 1265. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6723-L6727` → after: `L9861-L9867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9861-L9867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9861-L9867) · [Before (L6723-L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6723-L6727)

```diff
-           type: "Item",
-           textureInfo: "crystalized_wheatfish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "coffee_plant_stage2",
+           itemTexture: "coffee_plant_stage2",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           onMinedAura: 5
```

#### 1266. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6729` → after: `L9869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9869) · [Before (L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6729)

```diff
-         Darter: {
+         "Cauliflower Plant": {
```

#### 1267. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6731` → after: `L9871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9871) · [Before (L6731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6731)

```diff
-             translationKey: "item:darter"
+             translationKey: "item:cauliflower"
```

#### 1268. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6733-L6746` → after: `L9873-L9878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9873-L9878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9873-L9878) · [Before (L6733-L6746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6733-L6746)

```diff
-           type: "Chargeable",
-           textureInfo: "darter",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0,
-           description: {
-             translationKey: "item:darterDescription"
-           },
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 750,
-           eatHealAmt: 10,
-           rootMetaDesc: "Darter|meta|charging1"
+           ttb: 400,
+           textureInfo: "cauliflower_plant_stage0",
+           itemTexture: "cauliflower_plant_stage0",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable"
```

#### 1269. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6748` → after: `L9880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9880) · [Before (L6748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6748)

```diff
-         "Shadow Darter": {
+         ...(0, av.zb)("Cauliflower Plant", {
```

#### 1270. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6750` → after: `L9882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9882) · [Before (L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6750)

```diff
-             translationKey: "item:shadowDarter"
+             translationKey: "item:cauliflower"
```

#### 1271. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6752-L6758` → after: `L9884-L9894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9884-L9894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9884-L9894) · [Before (L6752-L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6752-L6758)

```diff
-           type: "Item",
-           textureInfo: "darter_shadow",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
-         },
-         "Electric Eel": {
+           ttb: 400,
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: null
+         }, ["cauliflower_plant_stage1"], {
+           1: {
+             itemTexture: "cauliflower_plant_stage1"
+           }
+         }),
+         "Cauliflower Plant|FreshlyGrown": {
```

#### 1272. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6760` → after: `L9896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9896) · [Before (L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6760)

```diff
-             translationKey: "item:electricEel"
+             translationKey: "item:cauliflower"
```

#### 1273. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6762-L6766` → after: `L9898-L9904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9898-L9904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9898-L9904) · [Before (L6762-L6766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6762-L6766)

```diff
-           type: "Item",
-           textureInfo: "electric_eel",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "cauliflower_plant_stage2",
+           itemTexture: "cauliflower_plant_stage2",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           onMinedAura: 5
```

#### 1274. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6768` → after: `L9906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9906) · [Before (L6768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6768)

```diff
-         "Grass Snapper": {
+         "Parsnip Plant": {
```

#### 1275. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6770` → after: `L9908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9908) · [Before (L6770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6770)

```diff
-             translationKey: "item:grassSnapper"
+             translationKey: "item:parsnip"
```

#### 1276. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6772-L6776` → after: `L9910-L9915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9910-L9915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9910-L9915) · [Before (L6772-L6776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6772-L6776)

```diff
-           type: "Item",
-           textureInfo: "grass_snapper",
-           weight: 1,
-           heldItemScale: 1.5,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "parsnip_plant_stage0",
+           itemTexture: "parsnip_plant_stage0",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable"
```

#### 1277. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6778` → after: `L9917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9917) · [Before (L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6778)

```diff
-         "Jungle Spinefish": {
+         ...(0, av.zb)("Parsnip Plant", {
```

#### 1278. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6780` → after: `L9919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9919) · [Before (L6780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6780)

```diff
-             translationKey: "item:jungleSpinefish"
+             translationKey: "item:parsnip"
```

#### 1279. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6782-L6788` → after: `L9921-L9931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9921-L9931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9921-L9931) · [Before (L6782-L6788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6782-L6788)

```diff
-           type: "Item",
-           textureInfo: "jungle_spinefish",
-           weight: 1,
-           heldItemScale: 1.5,
-           stackable: !0
-         },
-         "Mangler Catfish": {
+           ttb: 400,
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: null
+         }, ["parsnip_plant_stage1"], {
+           1: {
+             itemTexture: "parsnip_plant_stage1"
+           }
+         }),
+         "Parsnip Plant|FreshlyGrown": {
```

#### 1280. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6790` → after: `L9933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9933) · [Before (L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6790)

```diff
-             translationKey: "item:manglerCatfish"
+             translationKey: "item:parsnip"
```

#### 1281. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6792-L6796` → after: `L9935-L9941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9935-L9941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9935-L9941) · [Before (L6792-L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6792-L6796)

```diff
-           type: "Item",
-           textureInfo: "mangler_catfish",
-           weight: 1,
-           heldItemScale: 1.5,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "parsnip_plant_stage2",
+           itemTexture: "parsnip_plant_stage2",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           onMinedAura: 5
```

#### 1282. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6798` → after: `L9943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9943) · [Before (L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6798)

```diff
-         "Mossback Arapaima": {
+         "Blueberry Bush": {
```

#### 1283. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6800` → after: `L9945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9945) · [Before (L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6800)

```diff
-             translationKey: "item:mossbackArapaima"
+             translationKey: "item:blueberries"
```

#### 1284. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6802-L6806` → after: `L9947-L9952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9947-L9952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9947-L9952) · [Before (L6802-L6806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6802-L6806)

```diff
-           type: "Item",
-           textureInfo: "mossback_arapaima",
-           weight: 1,
-           heldItemScale: 1.5,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "blueberry_bush_stage0",
+           itemTexture: "blueberry_bush_stage0",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable"
```

#### 1285. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6808` → after: `L9954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9954) · [Before (L6808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6808)

```diff
-         "Sandbelly Piranha": {
+         ...(0, av.zb)("Blueberry Bush", {
```

#### 1286. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6810` → after: `L9956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9956) · [Before (L6810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6810)

```diff
-             translationKey: "item:sandbellyPiranha"
+             translationKey: "item:blueberries"
```

#### 1287. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6812-L6818` → after: `L9958-L9965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9958-L9965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9958-L9965) · [Before (L6812-L6818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6812-L6818)

```diff
-           type: "Chargeable",
-           textureInfo: "sandbelly_piranha",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:sandbellyPiranhaDescription"
+           ttb: 400,
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: null
+         }, ["blueberry_bush_stage1", "blueberry_bush_stage2"], {
+           1: {
+             itemTexture: "blueberry_bush_stage1"
```

#### 1288. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6820-L6827` → after: `L9967-L9972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9967-L9972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9967-L9972) · [Before (L6820-L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6820-L6827)

```diff
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 750,
-           eatHealAmt: 10,
-           rootMetaDesc: "Sandbelly Piranha|meta|charging1"
-         },
-         "Shadeback Ray": {
+           2: {
+             itemTexture: "blueberry_bush_stage2",
+             onMinedAura: 5
+           }
+         }),
+         "Red Cabbage Plant": {
```

#### 1289. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6829` → after: `L9974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9974) · [Before (L6829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6829)

```diff
-             translationKey: "item:shadebackRay"
+             translationKey: "item:redCabbage"
```

#### 1290. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6831-L6835` → after: `L9976-L9981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9976-L9981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9976-L9981) · [Before (L6831-L6835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6831-L6835)

```diff
-           type: "Item",
-           textureInfo: "shadeback_ray",
-           weight: 2,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "red_cabbage_stage0",
+           itemTexture: "red_cabbage_stage0",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable"
```

#### 1291. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6837` → after: `L9983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9983) · [Before (L6837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6837)

```diff
-         "Mudbelly Tilapia": {
+         ...(0, av.zb)("Red Cabbage Plant", {
```

#### 1292. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6839-L6847` → after: `L9985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9985) · [Before (L6839-L6847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6839-L6847)

```diff
-             translationKey: "item:mudbellyTilapia"
-           },
-           type: "Chargeable",
-           textureInfo: "mudbelly_tilapia",
-           weight: 1.5,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:mudbellyTilapiaDescription"
+             translationKey: "item:redCabbage"
```

#### 1293. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6849-L6856` → after: `L9987-L9997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9987-L9997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9987-L9997) · [Before (L6849-L6856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6849-L6856)

```diff
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 750,
-           eatHealAmt: 30,
-           rootMetaDesc: "Mudbelly Tilapia|meta|charging1"
-         },
-         "Mireback Carp": {
+           ttb: 400,
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: null
+         }, ["red_cabbage_stage1"], {
+           1: {
+             itemTexture: "red_cabbage_stage1"
+           }
+         }),
+         "Red Cabbage Plant|FreshlyGrown": {
```

#### 1294. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6858` → after: `L9999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R9999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L9999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L9999) · [Before (L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6858)

```diff
-             translationKey: "item:mirebackCarp"
+             translationKey: "item:redCabbage"
```

#### 1295. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6860-L6864` → after: `L10001-L10007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10001-L10007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10001-L10007) · [Before (L6860-L6864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6860-L6864)

```diff
-           type: "Item",
-           textureInfo: "mireback_carp",
-           weight: 1,
-           heldItemScale: 1.5,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "red_cabbage_stage2",
+           itemTexture: "red_cabbage_stage2",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           onMinedAura: 5
```

#### 1296. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6866` → after: `L10009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10009) · [Before (L6866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6866)

```diff
-         "Rotslab Eel": {
+         "Beetroot Plant": {
```

#### 1297. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6868` → after: `L10011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10011) · [Before (L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6868)

```diff
-             translationKey: "item:rotslabEel"
+             translationKey: "item:beetrootSeeds"
```

#### 1298. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6870-L6874` → after: `L10013-L10022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10013-L10022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10013-L10022) · [Before (L6870-L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6870-L6874)

```diff
-           type: "Item",
-           textureInfo: "rotslab_eel",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "beetroot_plant_stage0",
+           itemTexture: "beetroot_seeds",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: "Beetroot Seeds",
+           description: {
+             translationKey: "item:beetrootSeedsDescription"
+           }
```

#### 1299. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6876` → after: `L10024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10024) · [Before (L6876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6876)

```diff
-         "Aether Minnow": {
+         ...(0, av.zb)("Beetroot Plant", {
```

#### 1300. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6878` → after: `L10026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10026) · [Before (L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6878)

```diff
-             translationKey: "item:aetherMinnow"
+             translationKey: "item:beetrootSeeds"
```

#### 1301. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6880-L6886` → after: `L10028-L10038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10028-L10038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10028-L10038) · [Before (L6880-L6886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6880-L6886)

```diff
-           type: "Item",
-           textureInfo: "aether_minnow",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
-         },
-         "Murkborne Ray": {
+           ttb: 400,
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           itemTexture: "beetroot_seeds",
+           drops: "Beetroot Seeds",
+           description: {
+             translationKey: "item:beetrootSeedsDescription"
+           }
+         }, ["beetroot_plant_stage1"]),
+         "Beetroot Plant|FreshlyGrown": {
```

#### 1302. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6888` → after: `L10040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10040) · [Before (L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6888)

```diff
-             translationKey: "item:murkborneRay"
+             translationKey: "item:beetrootSeeds"
```

#### 1303. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6890-L6894` → after: `L10042-L10051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10042-L10051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10042-L10051) · [Before (L6890-L6894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6890-L6894)

```diff
-           type: "Item",
-           textureInfo: "murkborne_ray",
-           weight: 1,
-           heldItemScale: 2,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "beetroot_plant_stage2",
+           itemTexture: "beetroot_seeds",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           onMinedAura: 5,
+           description: {
+             translationKey: "item:beetrootSeedsDescription"
+           }
```

#### 1304. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6896` → after: `L10053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10053) · [Before (L6896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6896)

```diff
-         "Eldertide Leviathan": {
+         "Autumn Aspen Leaves": {
```

#### 1305. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6898` → after: `L10055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10055) · [Before (L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6898)

```diff
-             translationKey: "item:eldertideLeviathan"
+             translationKey: "item:autumnAspenLeaves"
```

#### 1306. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6900-L6904` → after: `L10057-L10059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10057-L10059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10057-L10059) · [Before (L6900-L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6900-L6904)

```diff
-           type: "Item",
-           textureInfo: "eldertide_leviathan",
-           weight: 1,
-           heldItemScale: 3,
-           stackable: !0
+           ttb: 350,
+           textureInfo: "leaves_aspen_autumn",
+           harvestType: "cuttable"
```

#### 1307. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6906-L6914` → after: `L10061-L10065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10061-L10065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10061-L10065) · [Before (L6906-L6914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6906-L6914)

```diff
-         Oarfish: {
-           displayName: {
-             translationKey: "item:oarfish"
-           },
-           type: "Item",
-           textureInfo: "oarfish",
-           weight: 1,
-           heldItemScale: 2,
-           stackable: !0
+         "Autumn Aspen Leaves|TreeCanopy": {
+           ttb: 350,
+           textureInfo: "leaves_aspen_autumn",
+           harvestType: "cuttable",
+           drops: "Autumn Aspen Leaves"
```

#### 1308. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6916` → after: `L10067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10067) · [Before (L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6916)

```diff
-         "Alpha Moon Strongfish": {
+         "Autumn Fern": {
```

#### 1309. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6918` → after: `L10069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10069) · [Before (L6918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6918)

```diff
-             translationKey: "item:alphaMoonStrongfish"
+             translationKey: "item:autumnFern"
```

#### 1310. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6920-L6928` → after: `L10071-L10080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10071-L10080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10071-L10080) · [Before (L6920-L6928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6920-L6928)

```diff
-           type: "Item",
-           textureInfo: "alpha_moon_strongfish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Bamboo Catfish": {
-           displayName: {
-             translationKey: "item:bambooCatfish"
+           ttb: 1,
+           textureInfo: "autumn_fern",
+           model: "CentreCross",
+           heldItemScale: .5,
+           solid: !1,
+           drops: null,
+           harvestType: "cuttable",
+           specialToolDrop: {
+             tool: "Shears",
+             drops: "Autumn Fern"
```

#### 1311. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6930-L6934` → after: `L10082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10082) · [Before (L6930-L6934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6930-L6934)

```diff
-           type: "Item",
-           textureInfo: "bamboo_catfish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           canBePlacedOver: !0
```

#### 1312. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6936` → after: `L10084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10084) · [Before (L6936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6936)

```diff
-         "Blackwater Bream": {
+         ...(0, av.Kb)("Iron Chest", {
```

#### 1313. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6938` → after: `L10086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10086) · [Before (L6938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6938)

```diff
-             translationKey: "item:blackwaterBream"
+             translationKey: "item:ironChest"
```

#### 1314. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6940-L6946` → after: `L10088-L10101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10088-L10101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10088-L10101) · [Before (L6940-L6946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6940-L6946)

```diff
-           type: "Item",
-           textureInfo: "blackwater_bream",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Blackwater Leviathan": {
+           ttb: 7200,
+           textureInfo: ["iron_chest_front", "iron_chest_side", "iron_chest_top[rot[1", "iron_chest_top[rot[2", "iron_chest_top[rot[3", "iron_chest_top[rot[4", "iron_chest_back"],
+           harvestType: "rock",
+           rootMetaDesc: "Iron Chest|meta|rot1",
+           description: {
+             translationKey: "item:ironChestDescription"
+           }
+         }, [
+           [1, 1, 2, 2, 0, 6],
+           [0, 6, 3, 3, 1, 1],
+           [1, 1, 4, 4, 6, 0],
+           [6, 0, 5, 5, 1, 1]
+         ]),
+         Crate: {
```

#### 1315. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6948` → after: `L10103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10103) · [Before (L6948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6948)

```diff
-             translationKey: "item:blackwaterLeviathan"
+             translationKey: "item:crate"
```

#### 1316. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6950-L6954` → after: `L10105-L10107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10105-L10107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10105-L10107) · [Before (L6950-L6954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6950-L6954)

```diff
-           type: "Item",
-           textureInfo: "blackwater_leviathan",
-           weight: 1,
-           heldItemScale: 5,
-           stackable: !0
+           ttb: 600,
+           textureInfo: "crate",
+           harvestType: "wood"
```

#### 1317. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6956` → after: `L10109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10109) · [Before (L6956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6956)

```diff
-         "Boned Sturgeon": {
+         "Carrot Block": {
```

#### 1318. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6958` → after: `L10111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10111) · [Before (L6958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6958)

```diff
-             translationKey: "item:bonedSturgeon"
+             translationKey: "item:carrotBlock"
```

#### 1319. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6960-L6964` → after: `L10113-L10116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10113-L10116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10113-L10116) · [Before (L6960-L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6960-L6964)

```diff
-           type: "Item",
-           textureInfo: "boned_sturgeon",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 600,
+           textureInfo: ["carrot_block_side", "carrot_block_top", "carrot_block_bottom"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "wood"
```

#### 1320. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6966` → after: `L10118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10118) · [Before (L6966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6966)

```diff
-         "Bull Shark": {
+         "Carrot Seeds": {
```

#### 1321. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6968` → after: `L10120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10120) · [Before (L6968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6968)

```diff
-             translationKey: "item:bullShark"
+             translationKey: "item:carrotSeeds"
```

#### 1322. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6970-L6974` → after: `L10122-L10130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10122-L10130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10122-L10130) · [Before (L6970-L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6970-L6974)

```diff
-           type: "Item",
-           textureInfo: "bull_shark",
-           weight: 1,
-           heldItemScale: 2,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "carrot_plant_stage0",
+           itemTexture: "carrot_seeds",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           description: {
+             translationKey: "item:carrotSeedsDescription"
+           }
```

#### 1323. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6976` → after: `L10132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10132) · [Before (L6976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6976)

```diff
-         "Channel Sawfish": {
+         "Potato Block": {
```

#### 1324. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6978` → after: `L10134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10134) · [Before (L6978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6978)

```diff
-             translationKey: "item:channelSawfish"
+             translationKey: "item:potatoBlock"
```

#### 1325. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6980-L6984` → after: `L10136-L10138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10136-L10138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10136-L10138) · [Before (L6980-L6984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6980-L6984)

```diff
-           type: "Item",
-           textureInfo: "channel_sawfish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 600,
+           textureInfo: "potato_block",
+           harvestType: "wood"
```

#### 1326. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6986` → after: `L10140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10140) · [Before (L6986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6986)

```diff
-         "Coastal Mullet": {
+         "Potato Seeds": {
```

#### 1327. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6988` → after: `L10142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10142) · [Before (L6988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6988)

```diff
-             translationKey: "item:coastalMullet"
+             translationKey: "item:potatoSeeds"
```

#### 1328. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6990-L6994` → after: `L10144-L10152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10144-L10152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10144-L10152) · [Before (L6990-L6994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6990-L6994)

```diff
-           type: "Item",
-           textureInfo: "coastal_mullet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "potato_plant_stage0",
+           itemTexture: "potato_seeds",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           description: {
+             translationKey: "item:potatoSeedsDescription"
+           }
```

#### 1329. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6996` → after: `L10154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10154) · [Before (L6996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6996)

```diff
-         Coelacanth: {
+         "Beetroot Block": {
```

#### 1330. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L6998` → after: `L10156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10156) · [Before (L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L6998)

```diff
-             translationKey: "item:coelacanth"
+             translationKey: "item:beetrootBlock"
```

#### 1331. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7000-L7004` → after: `L10158-L10161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10158-L10161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10158-L10161) · [Before (L7000-L7004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7000-L7004)

```diff
-           type: "Item",
-           textureInfo: "coelacanth",
-           weight: 1,
-           heldItemScale: 4,
-           stackable: !0
+           ttb: 600,
+           textureInfo: ["beetroot_block_side", "beetroot_block_top", "beetroot_block_bottom"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "wood"
```

#### 1332. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7006` → after: `L10163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10163) · [Before (L7006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7006)

```diff
-         "Driftwood Catfish": {
+         "Beetroot Seeds": {
```

#### 1333. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7008` → after: `L10165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10165) · [Before (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7008)

```diff
-             translationKey: "item:driftwoodCatfish"
+             translationKey: "item:beetrootSeeds"
```

#### 1334. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7010-L7014` → after: `L10167-L10175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10167-L10175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10167-L10175) · [Before (L7010-L7014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7010-L7014)

```diff
-           type: "Item",
-           textureInfo: "driftwood_catfish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "beetroot_plant_stage0",
+           itemTexture: "beetroot_seeds",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           description: {
+             translationKey: "item:beetrootSeedsDescription"
+           }
```

#### 1335. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7016` → after: `L10177-L10588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10177-L10588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10177-L10588) · [Before (L7016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7016)

```diff
-         "Eagle Ray": {
+         ...(0, av.x)("White Banner", {
+           displayName: {
+             translationKey: "item:whiteBanner"
+           },
+           ttb: 240,
+           itemTexture: "banner_white",
+           model: "rotatable",
+           harvestType: "cuttable",
+           rootMetaDesc: "White Banner|meta|rot1|bot",
+           particlesIgnoreBlack: !0,
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
+           },
+           solid: !1,
+           blockModel: "White Banner",
+ ... (396 more added lines; see GitHub link above)
```

#### 1336. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7018` → after: `L10590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10590) · [Before (L7018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7018)

```diff
-             translationKey: "item:eagleRay"
+             translationKey: "item:luckyBlock"
```

#### 1337. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7020-L7024` → after: `L10592-L10594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10592-L10594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10592-L10594) · [Before (L7020-L7024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7020-L7024)

```diff
-           type: "Item",
-           textureInfo: "eagle_ray",
-           weight: 1,
-           heldItemScale: 1.5,
-           stackable: !0
+           ttb: 1200,
+           textureInfo: "yellow_lucky_block",
+           harvestType: "rock"
```

#### 1338. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7026` → after: `L10596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10596) · [Before (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7026)

```diff
-         "Giant Grouper": {
+         "Ultra Lucky Block": {
```

#### 1339. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7028` → after: `L10598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10598) · [Before (L7028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7028)

```diff
-             translationKey: "item:giantGrouper"
+             translationKey: "item:ultraLuckyBlock"
```

#### 1340. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7030-L7034` → after: `L10600-L10602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10600-L10602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10600-L10602) · [Before (L7030-L7034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7030-L7034)

```diff
-           type: "Item",
-           textureInfo: "giant_grouper",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !0
+           ttb: 1200,
+           textureInfo: "light_blue_lucky_block",
+           harvestType: "rock"
```

#### 1341. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7036` → after: `L10604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10604) · [Before (L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7036)

```diff
-         "Giant Moray": {
+         ...(0, av.Jb)("Gold Trophy", {
```

#### 1342. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7038` → after: `L10606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10606) · [Before (L7038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7038)

```diff
-             translationKey: "item:giantMoray"
+             translationKey: "item:goldTrophy"
```

#### 1343. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7040-L7048` → after: `L10608-L10615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10608-L10615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10608-L10615) · [Before (L7040-L7048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7040-L7048)

```diff
-           type: "Item",
-           textureInfo: "giant_moray",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !0
-         },
-         "Giant Stingray": {
-           displayName: {
-             translationKey: "item:giantStingray"
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "rotatable",
+           itemTexture: "gold_trophy",
+           rootMetaDesc: "Gold Trophy|meta|rot1",
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
```

#### 1344. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7050-L7054` → after: `L10617-L10698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10617-L10698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10617-L10698) · [Before (L7050-L7054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7050-L7054)

```diff
-           type: "Item",
-           textureInfo: "giant_stingray",
-           weight: 1,
-           heldItemScale: 2,
-           stackable: !0
+           blockModel: "Gold Trophy"
+         }),
+         ...(0, av.Rb)("Magenta"),
+         ...(0, av.Rb)("Light Gray"),
+         ...(0, av.Rb)("Red"),
+         "INTERNAL_MESH_Gold Trophy": {
+           ttb: 2e3,
+           harvestType: "rock",
+           blockModel: "Gold Trophy",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1
+         },
+         ...(0, av.nb)("Frost Wraith"),
+         ...(0, av.nb)("Draugr Reaver"),
+         ...(0, av.Rb)("White"),
+ ... (66 more added lines; see GitHub link above)
```

#### 1345. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7056-L7067` → after: `L10700-L10711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10700-L10711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10700-L10711) · [Before (L7056-L7067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7056-L7067)

```diff
-         "Golden Mahseer": {
-           description: {
-             translationKey: "item:goldenMahseerDescription"
-           },
-           displayName: {
-             translationKey: "item:goldenMahseer"
-           },
-           type: "Item",
-           textureInfo: "golden_mahseer",
-           weight: 1,
-           heldItemScale: 1.5,
-           stackable: !0
+         "Bebek Bebek Bebek Statue": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           itemTexture: "bebek_bebek_bebek",
+           blockModel: "bebek_bebek_bebek",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 3,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1346. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7069-L7077` → after: `L10713-L10724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10713-L10724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10713-L10724) · [Before (L7069-L7077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7069-L7077)

```diff
-         "Greenfin Loach": {
-           displayName: {
-             translationKey: "item:greenfinLoach"
-           },
-           type: "Item",
-           textureInfo: "greenfin_loach",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "Bobino Musculino Statue": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           itemTexture: "bobino_musculino",
+           blockModel: "bobino_musculino",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 3,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1347. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7079-L7087` → after: `L10726-L10737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10726-L10737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10726-L10737) · [Before (L7079-L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7079-L7087)

```diff
-         "Mangrove Herring": {
-           displayName: {
-             translationKey: "item:mangroveHerring"
-           },
-           type: "Item",
-           textureInfo: "mangrove_herring",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "Bobzilla Statue": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           itemTexture: "bobzilla",
+           blockModel: "bobzilla",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 3,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1348. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7089-L7097` → after: `L10739-L10750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10739-L10750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10739-L10750) · [Before (L7089-L7097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7089-L7097)

```diff
-         "Moonlit Boomerang Fish": {
-           displayName: {
-             translationKey: "item:moonlitBoomerangFish"
-           },
-           type: "Item",
-           textureInfo: "moonlit_boomerang_fish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "Brra Brra Pachim Statue": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           itemTexture: "brra_brra_pachim",
+           blockModel: "brra_brra_pachim",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 2.5,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1349. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7099-L7116` → after: `L10752-L10763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10752-L10763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10752-L10763) · [Before (L7099-L7116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7099-L7116)

```diff
-         "Moonstone Pupfish": {
-           displayName: {
-             translationKey: "item:moonstonePupfish"
-           },
-           type: "Chargeable",
-           textureInfo: "moonstone_pupfish",
-           weight: 1,
-           heldItemScale: .75,
-           stackable: !0,
-           description: {
-             translationKey: "item:moonstonePupfishDescription"
-           },
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 750,
- ... (2 more removed lines; see GitHub link above)
+         "Capitano Explovissimo Statue": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           itemTexture: "capitano_explovissimo",
+           blockModel: "capitano_explovissimo",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 3,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1350. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7118-L7126` → after: `L10765-L10776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10765-L10776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10765-L10776) · [Before (L7118-L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7118-L7126)

```diff
-         "Mudline Perch": {
-           displayName: {
-             translationKey: "item:mudlinePerch"
-           },
-           type: "Item",
-           textureInfo: "mudline_perch",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "Cappuccino Ninjino Statue": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           itemTexture: "cappuccino_ninjino",
+           blockModel: "cappuccino_ninjino",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 3,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1351. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7128-L7136` → after: `L10778-L10789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10778-L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10778-L10789) · [Before (L7128-L7136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7128-L7136)

```diff
-         "Murk Stingray": {
-           displayName: {
-             translationKey: "item:murkStingray"
-           },
-           type: "Item",
-           textureInfo: "murk_stingray",
-           weight: 1,
-           heldItemScale: 1.5,
-           stackable: !0
+         "Chimpanzano Bananano Statue": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           itemTexture: "chimpanzano_bananano",
+           blockModel: "chimpanzano_bananano",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 3,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1352. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7138-L7146` → after: `L10791-L10802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10791-L10802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10791-L10802) · [Before (L7138-L7146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7138-L7146)

```diff
-         Needlefish: {
-           displayName: {
-             translationKey: "item:needlefish"
-           },
-           type: "Item",
-           textureInfo: "needlefish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "Il Wizardini Del Porko Statue": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           itemTexture: "il_wizardini_del_porko",
+           blockModel: "il_wizardini_del_porko",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 3,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1353. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7148-L7156` → after: `L10804-L10815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10804-L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10804-L10815) · [Before (L7148-L7156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7148-L7156)

```diff
-         "Nomai Moray": {
-           displayName: {
-             translationKey: "item:nomaiMoray"
-           },
-           type: "Item",
-           textureInfo: "nomai_moray",
-           weight: 1,
-           heldItemScale: 1.5,
-           stackable: !0
+         "Lucchia Blocchi Statue": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           itemTexture: "lucchia_blocchi",
+           blockModel: "lucchia_blocchi",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 3,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1354. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7158-L7166` → after: `L10817-L10828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10817-L10828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10817-L10828) · [Before (L7158-L7166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7158-L7166)

```diff
-         "Pearlescent Moonfish": {
-           displayName: {
-             translationKey: "item:pearlescentMoonfish"
-           },
-           type: "Item",
-           textureInfo: "pearlescent_moonfish",
-           weight: 1,
-           heldItemScale: .75,
-           stackable: !0
+         "Monsieur Bedwar Statue": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           itemTexture: "monsieur_bedwar",
+           blockModel: "monsieur_bedwar",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 3,
+           customModelInfo: {
+             yOffset: -.5
+           }
```

#### 1355. `bundles/bloxd.io/chunks/js/70.js` (Changed code · before: `L7168-L7176` → after: `L10830-L10841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2R10830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c4967aac688d2f4a3767f092520ec99a53cf5c3c50d15a83e6675c5d20d5bde2) · [After (L10830-L10841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/70.js#L10830-L10841) · [Before (L7168-L7176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/70.js#L7168-L7176)

```diff
-         "Rainbow Guppy": {
-           displayName: {
-             translationKey: "item:rainbowGuppy"
-           },
-           type: "Item",
-           textureInfo: "rainbow_guppy",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         "Twirlina Cappucina Statue": {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           itemTexture: "twirlina_cappucina",
+           blockModel: "twirlina_cappucina",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 3,
+           customModelInfo: {
+             yOffset: -.5
+           }
```
