# Changed — Bundle Modifications Report (Part 030 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `30 / 69` (**359** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 029](part-029.md) · [Part 031 →](part-031.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/73.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/73.js` (1683 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51)

#### 1337. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7152-L7158` → after: `L9693-L9703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9693-L9703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9693-L9703) · [Before (L7152-L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7152-L7158)

```diff
-           type: "Item",
-           textureInfo: "blackfin_icefish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Basalt Pipefish": {
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

#### 1338. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7160` → after: `L9705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9705) · [Before (L7160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7160)

```diff
-             translationKey: "item:basaltPipefish"
+             translationKey: "item:potatoSeeds"
```

#### 1339. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7162-L7166` → after: `L9707-L9716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9707-L9716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9707-L9716) · [Before (L7162-L7166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7162-L7166)

```diff
-           type: "Item",
-           textureInfo: "basalt_pipefish",
-           weight: 1,
-           heldItemScale: .5,
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

#### 1340. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7168` → after: `L9718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9718) · [Before (L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7168)

```diff
-         "Brimstone Spikefish": {
+         "Strawberry Bush": {
```

#### 1341. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7170` → after: `L9720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9720) · [Before (L7170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7170)

```diff
-             translationKey: "item:brimstoneSpikefish"
+             translationKey: "item:strawberries"
```

#### 1342. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7172-L7176` → after: `L9722-L9727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9722-L9727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9722-L9727) · [Before (L7172-L7176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7172-L7176)

```diff
-           type: "Item",
-           textureInfo: "brimstone_spikefish",
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

#### 1343. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7178` → after: `L9729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9729) · [Before (L7178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7178)

```diff
-         "Cinder Leviathan": {
+         ...(0, Up.Cb)("Strawberry Bush", {
```

#### 1344. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7180` → after: `L9731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9731) · [Before (L7180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7180)

```diff
-             translationKey: "item:cinderLeviathan"
+             translationKey: "item:strawberries"
```

#### 1345. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7182-L7188` → after: `L9733-L9747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9733-L9747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9733-L9747) · [Before (L7182-L7188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7182-L7188)

```diff
-           type: "Item",
-           textureInfo: "cinder_leviathan",
-           weight: 1,
-           heldItemScale: 3,
-           stackable: !0
-         },
-         "Crowned Flame Angelfish": {
+           ttb: 400,
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: null
+         }, ["strawberry_bush_stage1", "strawberry_bush_stage2"], {
+           1: {
+             itemTexture: "strawberry_bush_stage1"
+           },
+           2: {
+             itemTexture: "strawberry_bush_stage2",
+             onMinedAura: 5
+           }
+         }),
+         "Sugar Cane Plant": {
```

#### 1346. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7190` → after: `L9749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9749) · [Before (L7190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7190)

```diff
-             translationKey: "item:crownedFlameAngelfish"
+             translationKey: "item:sugarCane"
```

#### 1347. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7192-L7196` → after: `L9751-L9756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9751-L9756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9751-L9756) · [Before (L7192-L7196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7192-L7196)

```diff
-           type: "Item",
-           textureInfo: "crowned_flame_angelfish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "sugar_cane_plant_stage0",
+           itemTexture: "sugar_cane_plant_stage0",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable"
```

#### 1348. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7198` → after: `L9758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9758) · [Before (L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7198)

```diff
-         "Deepwater Lanternfish": {
+         ...(0, Up.Cb)("Sugar Cane Plant", {
```

#### 1349. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7200` → after: `L9760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9760) · [Before (L7200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7200)

```diff
-             translationKey: "item:deepwaterLanternfish"
+             translationKey: "item:sugarCane"
```

#### 1350. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7202-L7208` → after: `L9762-L9772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9762-L9772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9762-L9772) · [Before (L7202-L7208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7202-L7208)

```diff
-           type: "Item",
-           textureInfo: "deepwater_lanternfish",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
-         },
-         "Driftice Capelin": {
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

#### 1351. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7210` → after: `L9774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9774) · [Before (L7210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7210)

```diff
-             translationKey: "item:drifticeCapelin"
+             translationKey: "item:sugarCane"
```

#### 1352. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7212-L7216` → after: `L9776-L9782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9776-L9782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9776-L9782) · [Before (L7212-L7216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7212-L7216)

```diff
-           type: "Item",
-           textureInfo: "driftice_capelin",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "sugar_cane_plant_stage2",
+           itemTexture: "sugar_cane_plant_stage2",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           onMinedAura: 5
```

#### 1353. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7218` → after: `L9784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9784) · [Before (L7218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7218)

```diff
-         "Ember Chub": {
+         "Sugar Cane Plant|Top|FreshlyGrown": {
```

#### 1354. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7220` → after: `L9786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9786) · [Before (L7220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7220)

```diff
-             translationKey: "item:emberChub"
+             translationKey: "item:sugarCane"
```

#### 1355. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7222-L7226` → after: `L9788-L9794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9788-L9794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9788-L9794) · [Before (L7222-L7226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7222-L7226)

```diff
-           type: "Item",
-           textureInfo: "ember_chub",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "sugar_cane_plant_stage2_top",
+           itemTexture: "sugar_cane_plant_stage2_top",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           onMinedAura: 5
```

#### 1356. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7228` → after: `L9796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9796) · [Before (L7228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7228)

```diff
-         "Embermark Wrasse": {
+         "Lettuce Plant": {
```

#### 1357. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7230` → after: `L9798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9798) · [Before (L7230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7230)

```diff
-             translationKey: "item:embermarkWrasse"
+             translationKey: "item:lettuce"
```

#### 1358. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7232-L7236` → after: `L9800-L9805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9800-L9805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9800-L9805) · [Before (L7232-L7236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7232-L7236)

```diff
-           type: "Item",
-           textureInfo: "embermark_wrasse",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "lettuce_plant_stage0",
+           itemTexture: "lettuce_plant_stage0",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable"
```

#### 1359. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7238` → after: `L9807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9807) · [Before (L7238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7238)

```diff
-         "Eviota Vader": {
+         ...(0, Up.Cb)("Lettuce Plant", {
```

#### 1360. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7240` → after: `L9809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9809) · [Before (L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7240)

```diff
-             translationKey: "item:eviotaVader"
+             translationKey: "item:lettuce"
```

#### 1361. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7242-L7248` → after: `L9811-L9821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9811-L9821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9811-L9821) · [Before (L7242-L7248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7242-L7248)

```diff
-           type: "Item",
-           textureInfo: "eviota_vader",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
-         },
-         "Frost Herring": {
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

#### 1362. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7250` → after: `L9823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9823) · [Before (L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7250)

```diff
-             translationKey: "item:frostHerring"
+             translationKey: "item:lettuce"
```

#### 1363. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7252-L7258` → after: `L9825-L9858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9825-L9858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9825-L9858) · [Before (L7252-L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7252-L7258)

```diff
-           type: "Item",
-           textureInfo: "frost_herring",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
-         },
-         "Frost Wolf Eel": {
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

#### 1364. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7260` → after: `L9860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9860) · [Before (L7260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7260)

```diff
-             translationKey: "item:frostWolfEel"
+             translationKey: "item:coffeeBean"
```

#### 1365. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7262-L7266` → after: `L9862-L9868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9862-L9868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9862-L9868) · [Before (L7262-L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7262-L7266)

```diff
-           type: "Item",
-           textureInfo: "frost_wolf_eel",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "coffee_plant_stage2",
+           itemTexture: "coffee_plant_stage2",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           onMinedAura: 5
```

#### 1366. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7268` → after: `L9870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9870) · [Before (L7268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7268)

```diff
-         "Frostpaint Notie": {
+         "Cauliflower Plant": {
```

#### 1367. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7270` → after: `L9872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9872) · [Before (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7270)

```diff
-             translationKey: "item:frostpaintNotie"
+             translationKey: "item:cauliflower"
```

#### 1368. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7272-L7276` → after: `L9874-L9879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9874-L9879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9874-L9879) · [Before (L7272-L7276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7272-L7276)

```diff
-           type: "Item",
-           textureInfo: "frostpaint_notie",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "cauliflower_plant_stage0",
+           itemTexture: "cauliflower_plant_stage0",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable"
```

#### 1369. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7278` → after: `L9881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9881) · [Before (L7278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7278)

```diff
-         "Frozen Grenadier": {
+         ...(0, Up.Cb)("Cauliflower Plant", {
```

#### 1370. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7280` → after: `L9883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9883) · [Before (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7280)

```diff
-             translationKey: "item:frozenGrenadier"
+             translationKey: "item:cauliflower"
```

#### 1371. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7282-L7288` → after: `L9885-L9895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9885-L9895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9885-L9895) · [Before (L7282-L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7282-L7288)

```diff
-           type: "Item",
-           textureInfo: "frozen_grenadier",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Giant Trevally": {
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

#### 1372. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7290` → after: `L9897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9897) · [Before (L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7290)

```diff
-             translationKey: "item:giantTrevally"
+             translationKey: "item:cauliflower"
```

#### 1373. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7292-L7296` → after: `L9899-L9905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9899-L9905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9899-L9905) · [Before (L7292-L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7292-L7296)

```diff
-           type: "Item",
-           textureInfo: "giant_trevally",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "cauliflower_plant_stage2",
+           itemTexture: "cauliflower_plant_stage2",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           onMinedAura: 5
```

#### 1374. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7298` → after: `L9907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9907) · [Before (L7298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7298)

```diff
-         "Glacial Lanternfish": {
+         "Parsnip Plant": {
```

#### 1375. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7300` → after: `L9909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9909) · [Before (L7300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7300)

```diff
-             translationKey: "item:glacialLanternfish"
+             translationKey: "item:parsnip"
```

#### 1376. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7302-L7306` → after: `L9911-L9916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9911-L9916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9911-L9916) · [Before (L7302-L7306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7302-L7306)

```diff
-           type: "Item",
-           textureInfo: "glacial_lanternfish",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "parsnip_plant_stage0",
+           itemTexture: "parsnip_plant_stage0",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable"
```

#### 1377. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7308` → after: `L9918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9918) · [Before (L7308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7308)

```diff
-         "Glacial Silverfish": {
+         ...(0, Up.Cb)("Parsnip Plant", {
```

#### 1378. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7310` → after: `L9920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9920) · [Before (L7310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7310)

```diff
-             translationKey: "item:glacialSilverfish"
+             translationKey: "item:parsnip"
```

#### 1379. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7312-L7318` → after: `L9922-L9932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9922-L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9922-L9932) · [Before (L7312-L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7312-L7318)

```diff
-           type: "Item",
-           textureInfo: "glacial_silverfish",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
-         },
-         "Heatwarp Flounder": {
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

#### 1380. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7320` → after: `L9934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9934) · [Before (L7320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7320)

```diff
-             translationKey: "item:heatwarpFlounder"
+             translationKey: "item:parsnip"
```

#### 1381. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7322-L7326` → after: `L9936-L9942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9936-L9942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9936-L9942) · [Before (L7322-L7326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7322-L7326)

```diff
-           type: "Item",
-           textureInfo: "heatwarp_flounder",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "parsnip_plant_stage2",
+           itemTexture: "parsnip_plant_stage2",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           onMinedAura: 5
```

#### 1382. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7328` → after: `L9944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9944) · [Before (L7328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7328)

```diff
-         Hatchetfish: {
+         "Blueberry Bush": {
```

#### 1383. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7330` → after: `L9946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9946) · [Before (L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7330)

```diff
-             translationKey: "item:hatchetfish"
+             translationKey: "item:blueberries"
```

#### 1384. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7332-L7336` → after: `L9948-L9953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9948-L9953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9948-L9953) · [Before (L7332-L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7332-L7336)

```diff
-           type: "Item",
-           textureInfo: "hatchetfish",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "blueberry_bush_stage0",
+           itemTexture: "blueberry_bush_stage0",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable"
```

#### 1385. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7338` → after: `L9955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9955) · [Before (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7338)

```diff
-         "Ice Spined Notothenia": {
+         ...(0, Up.Cb)("Blueberry Bush", {
```

#### 1386. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7340` → after: `L9957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9957) · [Before (L7340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7340)

```diff
-             translationKey: "item:iceSpinedNotothenia"
+             translationKey: "item:blueberries"
```

#### 1387. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7342-L7350` → after: `L9959-L9966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9959-L9966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9959-L9966) · [Before (L7342-L7350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7342-L7350)

```diff
-           type: "Item",
-           textureInfo: "ice_spined_notothenia",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Iceshelf Skate": {
-           displayName: {
-             translationKey: "item:iceshelfSkate"
+           ttb: 400,
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: null
+         }, ["blueberry_bush_stage1", "blueberry_bush_stage2"], {
+           1: {
+             itemTexture: "blueberry_bush_stage1"
```

#### 1388. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7352-L7358` → after: `L9968-L9973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9968-L9973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9968-L9973) · [Before (L7352-L7358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7352-L7358)

```diff
-           type: "Item",
-           textureInfo: "iceshelf_skate",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !0
-         },
-         "Icy Sculpin": {
+           2: {
+             itemTexture: "blueberry_bush_stage2",
+             onMinedAura: 5
+           }
+         }),
+         "Red Cabbage Plant": {
```

#### 1389. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7360` → after: `L9975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9975) · [Before (L7360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7360)

```diff
-             translationKey: "item:icySculpin"
+             translationKey: "item:redCabbage"
```

#### 1390. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7362-L7366` → after: `L9977-L9982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9977-L9982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9977-L9982) · [Before (L7362-L7366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7362-L7366)

```diff
-           type: "Item",
-           textureInfo: "icy_sculpin",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "red_cabbage_stage0",
+           itemTexture: "red_cabbage_stage0",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable"
```

#### 1391. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7368` → after: `L9984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9984) · [Before (L7368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7368)

```diff
-         "Lavaflow Trout": {
+         ...(0, Up.Cb)("Red Cabbage Plant", {
```

#### 1392. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7370` → after: `L9986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9986) · [Before (L7370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7370)

```diff
-             translationKey: "item:lavaflowTrout"
+             translationKey: "item:redCabbage"
```

#### 1393. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7372-L7378` → after: `L9988-L9998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R9988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L9988-L9998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L9988-L9998) · [Before (L7372-L7378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7372-L7378)

```diff
-           type: "Item",
-           textureInfo: "lavaflow_trout",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Lavawake Slopefish": {
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

#### 1394. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7380` → after: `L10000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10000) · [Before (L7380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7380)

```diff
-             translationKey: "item:lavawakeSlopefish"
+             translationKey: "item:redCabbage"
```

#### 1395. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7382-L7386` → after: `L10002-L10008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10002-L10008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10002-L10008) · [Before (L7382-L7386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7382-L7386)

```diff
-           type: "Item",
-           textureInfo: "lavawake_slopefish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 400,
+           textureInfo: "red_cabbage_stage2",
+           itemTexture: "red_cabbage_stage2",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           onMinedAura: 5
```

#### 1396. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7388` → after: `L10010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10010) · [Before (L7388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7388)

```diff
-         "Magma Sardinella": {
+         "Beetroot Plant": {
```

#### 1397. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7390` → after: `L10012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10012) · [Before (L7390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7390)

```diff
-             translationKey: "item:magmaSardinella"
+             translationKey: "item:beetrootSeeds"
```

#### 1398. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7392-L7396` → after: `L10014-L10023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10014-L10023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10014-L10023) · [Before (L7392-L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7392-L7396)

```diff
-           type: "Item",
-           textureInfo: "magma_sardinella",
-           weight: 1,
-           heldItemScale: .5,
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

#### 1399. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7398` → after: `L10025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10025) · [Before (L7398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7398)

```diff
-         "Magma Trout": {
+         ...(0, Up.Cb)("Beetroot Plant", {
```

#### 1400. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7400` → after: `L10027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10027) · [Before (L7400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7400)

```diff
-             translationKey: "item:magmaTrout"
+             translationKey: "item:beetrootSeeds"
```

#### 1401. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7402-L7408` → after: `L10029-L10039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10029-L10039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10029-L10039) · [Before (L7402-L7408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7402-L7408)

```diff
-           type: "Item",
-           textureInfo: "magma_trout",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Marbled Moray Cod": {
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

#### 1402. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7410` → after: `L10041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10041) · [Before (L7410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7410)

```diff
-             translationKey: "item:marbledMorayCod"
+             translationKey: "item:beetrootSeeds"
```

#### 1403. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7412-L7416` → after: `L10043-L10052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10043-L10052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10043-L10052) · [Before (L7412-L7416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7412-L7416)

```diff
-           type: "Item",
-           textureInfo: "marbled_moray_cod",
-           weight: 1,
-           heldItemScale: 1.25,
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

#### 1404. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7418` → after: `L10054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10054) · [Before (L7418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7418)

```diff
-         "Molten Lotella Cod": {
+         "Autumn Aspen Leaves": {
```

#### 1405. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7420` → after: `L10056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10056) · [Before (L7420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7420)

```diff
-             translationKey: "item:moltenLotellaCod"
+             translationKey: "item:autumnAspenLeaves"
```

#### 1406. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7422-L7426` → after: `L10058-L10060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10058-L10060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10058-L10060) · [Before (L7422-L7426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7422-L7426)

```diff
-           type: "Item",
-           textureInfo: "molten_lotella_cod",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 350,
+           textureInfo: "leaves_aspen_autumn",
+           harvestType: "cuttable"
```

#### 1407. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7428-L7436` → after: `L10062-L10066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10062-L10066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10062-L10066) · [Before (L7428-L7436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7428-L7436)

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
+         "Autumn Aspen Leaves|TreeCanopy": {
+           ttb: 350,
+           textureInfo: "leaves_aspen_autumn",
+           harvestType: "cuttable",
+           drops: "Autumn Aspen Leaves"
```

#### 1408. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7438` → after: `L10068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10068) · [Before (L7438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7438)

```diff
-         "Paleice Rockcod": {
+         "Autumn Fern": {
```

#### 1409. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7440` → after: `L10070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10070) · [Before (L7440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7440)

```diff
-             translationKey: "item:paleiceRockcod"
+             translationKey: "item:autumnFern"
```

#### 1410. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7442-L7450` → after: `L10072-L10081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10072-L10081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10072-L10081) · [Before (L7442-L7450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7442-L7450)

```diff
-           type: "Item",
-           textureInfo: "paleice_rockcod",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Permafrost Halibut": {
-           displayName: {
-             translationKey: "item:permafrostHalibut"
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

#### 1411. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7452-L7456` → after: `L10083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10083) · [Before (L7452-L7456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7452-L7456)

```diff
-           type: "Item",
-           textureInfo: "permafrost_halibut",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !0
+           canBePlacedOver: !0
```

#### 1412. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7458` → after: `L10085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10085) · [Before (L7458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7458)

```diff
-         Pithead: {
+         ...(0, Up.Lb)("Iron Chest", {
```

#### 1413. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7460` → after: `L10087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10087) · [Before (L7460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7460)

```diff
-             translationKey: "item:pithead"
+             translationKey: "item:ironChest"
```

#### 1414. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7462-L7468` → after: `L10089-L10102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10089-L10102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10089-L10102) · [Before (L7462-L7468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7462-L7468)

```diff
-           type: "Item",
-           textureInfo: "pithead",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Polarflash Electron": {
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

#### 1415. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7470` → after: `L10104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10104) · [Before (L7470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7470)

```diff
-             translationKey: "item:polarflashElectron"
+             translationKey: "item:crate"
```

#### 1416. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7472-L7476` → after: `L10106-L10108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10106-L10108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10106-L10108) · [Before (L7472-L7476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7472-L7476)

```diff
-           type: "Item",
-           textureInfo: "polarflash_electron",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !0
+           ttb: 600,
+           textureInfo: "crate",
+           harvestType: "wood"
```

#### 1417. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7478` → after: `L10110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10110) · [Before (L7478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7478)

```diff
-         "Pyroclast Eel": {
+         "Carrot Block": {
```

#### 1418. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7480` → after: `L10112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10112) · [Before (L7480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7480)

```diff
-             translationKey: "item:pyroclastEel"
+             translationKey: "item:carrotBlock"
```

#### 1419. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7482-L7486` → after: `L10114-L10117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10114-L10117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10114-L10117) · [Before (L7482-L7486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7482-L7486)

```diff
-           type: "Item",
-           textureInfo: "pyroclast_eel",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !0
+           ttb: 600,
+           textureInfo: ["carrot_block_side", "carrot_block_top", "carrot_block_bottom"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "wood"
```

#### 1420. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7488` → after: `L10119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10119) · [Before (L7488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7488)

```diff
-         "Pyroscale Grouper": {
+         "Carrot Seeds": {
```

#### 1421. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7490` → after: `L10121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10121) · [Before (L7490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7490)

```diff
-             translationKey: "item:pyroscaleGrouper"
+             translationKey: "item:carrotSeeds"
```

#### 1422. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7492-L7496` → after: `L10123-L10131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10123-L10131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10123-L10131) · [Before (L7492-L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7492-L7496)

```diff
-           type: "Item",
-           textureInfo: "pyroscale_grouper",
-           weight: 1,
-           heldItemScale: 1.25,
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

#### 1423. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7498` → after: `L10133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10133) · [Before (L7498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7498)

```diff
-         "Red Pyreside": {
+         "Potato Block": {
```

#### 1424. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7500` → after: `L10135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10135) · [Before (L7500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7500)

```diff
-             translationKey: "item:redPyreside"
+             translationKey: "item:potatoBlock"
```

#### 1425. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7502-L7506` → after: `L10137-L10139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10137-L10139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10137-L10139) · [Before (L7502-L7506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7502-L7506)

```diff
-           type: "Item",
-           textureInfo: "red_pyreside",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 600,
+           textureInfo: "potato_block",
+           harvestType: "wood"
```

#### 1426. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7508` → after: `L10141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10141) · [Before (L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7508)

```diff
-         "Rimesnouted Lancetfish": {
+         "Potato Seeds": {
```

#### 1427. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7510` → after: `L10143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10143) · [Before (L7510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7510)

```diff
-             translationKey: "item:rimesnoutedLancetfish"
+             translationKey: "item:potatoSeeds"
```

#### 1428. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7512-L7516` → after: `L10145-L10153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10145-L10153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10145-L10153) · [Before (L7512-L7516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7512-L7516)

```diff
-           type: "Item",
-           textureInfo: "rimesnouted_lancetfish",
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

#### 1429. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7518` → after: `L10155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10155) · [Before (L7518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7518)

```diff
-         "Scorched Sunfish": {
+         "Beetroot Block": {
```

#### 1430. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7520` → after: `L10157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10157) · [Before (L7520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7520)

```diff
-             translationKey: "item:scorchedSunfish"
+             translationKey: "item:beetrootBlock"
```

#### 1431. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7522-L7526` → after: `L10159-L10162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10159-L10162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10159-L10162) · [Before (L7522-L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7522-L7526)

```diff
-           type: "Item",
-           textureInfo: "scorched_sunfish",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !0
+           ttb: 600,
+           textureInfo: ["beetroot_block_side", "beetroot_block_top", "beetroot_block_bottom"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "wood"
```

#### 1432. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7528` → after: `L10164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10164) · [Before (L7528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7528)

```diff
-         "Scored Dace": {
+         "Beetroot Seeds": {
```

#### 1433. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7530` → after: `L10166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10166) · [Before (L7530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7530)

```diff
-             translationKey: "item:scoredDace"
+             translationKey: "item:beetrootSeeds"
```

#### 1434. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7532-L7536` → after: `L10168-L10176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10168-L10176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10168-L10176) · [Before (L7532-L7536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7532-L7536)

```diff
-           type: "Item",
-           textureInfo: "scored_dace",
-           weight: 1,
-           heldItemScale: .5,
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

#### 1435. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7538` → after: `L10178-L10589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10178-L10589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10178-L10589) · [Before (L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7538)

```diff
-         "Silver Dragonfish": {
+         ...(0, Up.F)("White Banner", {
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

#### 1436. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7540` → after: `L10591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10591) · [Before (L7540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7540)

```diff
-             translationKey: "item:silverDragonfish"
+             translationKey: "item:luckyBlock"
```

#### 1437. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7542-L7546` → after: `L10593-L10595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10593-L10595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10593-L10595) · [Before (L7542-L7546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7542-L7546)

```diff
-           type: "Item",
-           textureInfo: "silver_dragonfish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 1200,
+           textureInfo: "yellow_lucky_block",
+           harvestType: "rock"
```

#### 1438. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7548` → after: `L10597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10597) · [Before (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7548)

```diff
-         "Snow Haddock": {
+         "Ultra Lucky Block": {
```

#### 1439. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7550` → after: `L10599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10599) · [Before (L7550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7550)

```diff
-             translationKey: "item:snowHaddock"
+             translationKey: "item:ultraLuckyBlock"
```

#### 1440. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7552-L7556` → after: `L10601-L10603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10601-L10603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10601-L10603) · [Before (L7552-L7556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7552-L7556)

```diff
-           type: "Item",
-           textureInfo: "snow_haddock",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 1200,
+           textureInfo: "light_blue_lucky_block",
+           harvestType: "rock"
```

#### 1441. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7558` → after: `L10605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10605) · [Before (L7558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7558)

```diff
-         "Volcanic Catfish": {
+         ...(0, Up.Jb)("Gold Trophy", {
```

#### 1442. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7560` → after: `L10607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10607) · [Before (L7560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7560)

```diff
-             translationKey: "item:volcanicCatfish"
+             translationKey: "item:goldTrophy"
```

#### 1443. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7562-L7570` → after: `L10609-L10616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10609-L10616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10609-L10616) · [Before (L7562-L7570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7562-L7570)

```diff
-           type: "Item",
-           textureInfo: "volcanic_catfish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Volcanic Semperi": {
-           displayName: {
-             translationKey: "item:volcanicSemperi"
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "rotatable",
+           itemTexture: "gold_trophy",
+           rootMetaDesc: "Gold Trophy|meta|rot1",
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
```

#### 1444. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7572-L7576` → after: `L10618-L10699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10618-L10699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10618-L10699) · [Before (L7572-L7576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7572-L7576)

```diff
-           type: "Item",
-           textureInfo: "volcanic_semperi",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           blockModel: "Gold Trophy"
+         }),
+         ...(0, Up.Nb)("Magenta"),
+         ...(0, Up.Nb)("Light Gray"),
+         ...(0, Up.Nb)("Red"),
+         "INTERNAL_MESH_Gold Trophy": {
+           ttb: 2e3,
+           harvestType: "rock",
+           blockModel: "Gold Trophy",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1
+         },
+         ...(0, Up.sb)("Frost Wraith"),
+         ...(0, Up.sb)("Draugr Reaver"),
+         ...(0, Up.Nb)("White"),
+ ... (66 more added lines; see GitHub link above)
```

#### 1445. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7578-L7592` → after: `L10701-L10712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10701-L10712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10701-L10712) · [Before (L7578-L7592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7578-L7592)

```diff
-         "Rusty Rod": {
-           description: {
-             translationKey: "item:rustyRodDescription"
-           },
-           displayName: {
-             translationKey: "item:rustyRod"
-           },
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [7e3, 9e3]
-           },
-           textureInfo: "rusty_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
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

#### 1446. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7594-L7608` → after: `L10714-L10725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10714-L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10714-L10725) · [Before (L7594-L7608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7594-L7608)

```diff
-         "Lucky Rod": {
-           description: {
-             translationKey: "item:luckyRodDescription"
-           },
-           displayName: {
-             translationKey: "item:luckyRod"
-           },
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
-           },
-           textureInfo: "lucky_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
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

#### 1447. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7610-L7624` → after: `L10727-L10738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10727-L10738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10727-L10738) · [Before (L7610-L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7610-L7624)

```diff
-         "Sturdy Rod": {
-           description: {
-             translationKey: "item:sturdyRodDescription"
-           },
-           displayName: {
-             translationKey: "item:sturdyRod"
-           },
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [5e3, 7e3]
-           },
-           textureInfo: "sturdy_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
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

#### 1448. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7626-L7637` → after: `L10740-L10751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10740-L10751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10740-L10751) · [Before (L7626-L7637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7626-L7637)

```diff
-         "Jungle Rod": {
-           displayName: {
-             translationKey: "item:jungleRod"
-           },
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
-           },
-           textureInfo: "jungle_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
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

#### 1449. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7639-L7650` → after: `L10753-L10764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10753-L10764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10753-L10764) · [Before (L7639-L7650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7639-L7650)

```diff
-         "Draugr Rod": {
-           displayName: {
-             translationKey: "item:draugrRod"
-           },
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
-           },
-           textureInfo: "draugr_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
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

#### 1450. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7652-L7663` → after: `L10766-L10777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10766-L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10766-L10777) · [Before (L7652-L7663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7652-L7663)

```diff
-         "Cursed Rod": {
-           displayName: {
-             translationKey: "item:cursedRod"
-           },
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
-           },
-           textureInfo: "cursed_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
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

#### 1451. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7665-L7676` → after: `L10779-L10790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10779-L10790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10779-L10790) · [Before (L7665-L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7665-L7676)

```diff
-         "Tangle Resistant Rod": {
-           displayName: {
-             translationKey: "item:tangleResistantRod"
-           },
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
-           },
-           textureInfo: "tangle_resistant_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
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

#### 1452. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7678-L7692` → after: `L10792-L10803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10792-L10803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10792-L10803) · [Before (L7678-L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7678-L7692)

```diff
-         "Speed Rod": {
-           description: {
-             translationKey: "item:speedRodDescription"
-           },
-           displayName: {
-             translationKey: "item:speedRod"
-           },
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
-           },
-           textureInfo: "speed_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
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

#### 1453. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7694-L7705` → after: `L10805-L10816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10805-L10816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10805-L10816) · [Before (L7694-L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7694-L7705)

```diff
-         "Carbon Rod": {
-           displayName: {
-             translationKey: "item:carbonRod"
-           },
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
-           },
-           textureInfo: "carbon_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
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

#### 1454. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7707-L7718` → after: `L10818-L10829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10818-L10829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10818-L10829) · [Before (L7707-L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7707-L7718)

```diff
-         "Deep Sea Rod": {
-           displayName: {
-             translationKey: "item:deepSeaRod"
-           },
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
-           },
-           textureInfo: "deep_sea_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
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

#### 1455. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7720-L7731` → after: `L10831-L10842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10831-L10842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10831-L10842) · [Before (L7720-L7731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7720-L7731)

```diff
-         "Master Rod": {
-           displayName: {
-             translationKey: "item:masterRod"
-           },
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
-           },
-           textureInfo: "master_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
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

#### 1456. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7733-L7744` → after: `L10844-L10864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10844-L10864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10844-L10864) · [Before (L7733-L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7733-L7744)

```diff
-         "Obsidian Rod": {
-           displayName: {
-             translationKey: "item:obsidianRod"
-           },
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
-           },
-           textureInfo: "obsidian_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
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

#### 1457. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7746-L7757` → after: `L10866-L10877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10866-L10877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10866-L10877) · [Before (L7746-L7757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7746-L7757)

```diff
-         "Molten Magma Rod": {
-           displayName: {
-             translationKey: "item:moltenMagmaRod"
-           },
-           type: "Item",
-           fishingRodInfo: {
-             biteDelayMs: [2e3, 4e3]
-           },
-           textureInfo: "molten_magma_rod",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1
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

#### 1458. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7759-L7770` → after: `L10879-L10890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10879-L10890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10879-L10890) · [Before (L7759-L7770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7759-L7770)

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

#### 1459. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7772-L7783` → after: `L10892-L10903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10892-L10903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10892-L10903) · [Before (L7772-L7783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7772-L7783)

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

#### 1460. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7785-L7796` → after: `L10905-L10916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10905-L10916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10905-L10916) · [Before (L7785-L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7785-L7796)

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

#### 1461. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7798-L7815` → after: `L10918-L10929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10918-L10929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10918-L10929) · [Before (L7798-L7815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7798-L7815)

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

#### 1462. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7817-L7833` → after: `L10931-L10942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10931-L10942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10931-L10942) · [Before (L7817-L7833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7817-L7833)

```diff
-         "Acorn Jelly": {
-           displayName: {
-             translationKey: "item:acornJelly"
-           },
-           type: "Chargeable",
-           textureInfo: "acorn_jelly",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:acornJellyDescription"
-           },
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 750,
- ... (1 more removed lines; see GitHub link above)
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

#### 1463. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7835` → after: `L10944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10944) · [Before (L7835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7835)

```diff
-         "Cow's Milk": {
+         ...(0, Up.Jb)("Wood Trophy", {
```

#### 1464. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7837` → after: `L10946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10946) · [Before (L7837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7837)

```diff
-             translationKey: "item:cowsMilk"
+             translationKey: "item:woodTrophy"
```

#### 1465. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7839-L7845` → after: `L10948-L10955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10948-L10955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10948-L10955) · [Before (L7839-L7845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7839-L7845)

```diff
-           type: "Chargeable",
-           textureInfo: "cows_milk",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:cowsMilkDescription"
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "rotatable",
+           itemTexture: "wood_trophy",
+           rootMetaDesc: "Wood Trophy|meta|rot1",
+           modelScale: 8,
+           customModelInfo: {
+             yOffset: -.5
```

#### 1466. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7847-L7852` → after: `L10957-L11070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R10957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L10957-L11070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L10957-L11070) · [Before (L7847-L7852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7847-L7852)

```diff
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           chargeTime: 500,
-           eatHealAmt: 3,
-           rootMetaDesc: "Cow's Milk|meta|charging1"
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
+         ...(0, Up.Jb)("Stone Trophy", {
+           displayName: {
+             translationKey: "item:stoneTrophy"
+           },
+           ttb: 2e3,
+           harvestType: "rock",
+ ... (98 more added lines; see GitHub link above)
```

#### 1467. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7854-L7870` → after: `L11072-L11082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11072-L11082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11072-L11082) · [Before (L7854-L7870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7854-L7870)

```diff
-         Cheese: {
-           displayName: {
-             translationKey: "item:cheese"
-           },
-           type: "Chargeable",
-           textureInfo: "cheese",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:cheeseDescription"
-           },
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 750,
- ... (1 more removed lines; see GitHub link above)
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

#### 1468. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7872-L7889` → after: `L11084-L11094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11084-L11094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11084-L11094) · [Before (L7872-L7889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7872-L7889)

```diff
-         "Caught Fish": {
-           displayName: {
-             translationKey: "item:caughtFish"
-           },
-           type: "Chargeable",
-           textureInfo: "caught_fish",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:caughtFishDescription"
-           },
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 500,
- ... (2 more removed lines; see GitHub link above)
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

#### 1469. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7891-L7907` → after: `L11096-L11106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11096-L11106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11096-L11106) · [Before (L7891-L7907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7891-L7907)

```diff
-         "Fish Fillet": {
-           displayName: {
-             translationKey: "item:fishFillet"
-           },
-           type: "Chargeable",
-           textureInfo: "fish_fillet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:fishFilletDescription"
-           },
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 750,
- ... (1 more removed lines; see GitHub link above)
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

#### 1470. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7909-L7926` → after: `L11108-L11118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11108-L11118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11108-L11118) · [Before (L7909-L7926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7909-L7926)

```diff
-         "Meaty Bone": {
-           displayName: {
-             translationKey: "item:meatyBone"
-           },
-           type: "Chargeable",
-           textureInfo: "meaty_bone",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:meatyBoneDescription"
-           },
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 500,
- ... (2 more removed lines; see GitHub link above)
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

#### 1471. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7928-L7940` → after: `L11120-L11130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11120-L11130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11120-L11130) · [Before (L7928-L7940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7928-L7940)

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
-           },
-           secondaryDamage: 15
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

#### 1472. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7942-L7959` → after: `L11132-L11142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11132-L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11132-L11142) · [Before (L7942-L7959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7942-L7959)

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

#### 1473. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7961-L7977` → after: `L11144-L11154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11144-L11154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11144-L11154) · [Before (L7961-L7977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7961-L7977)

```diff
-         "Yoghurt Pot": {
-           displayName: {
-             translationKey: "item:yoghurtPot"
-           },
-           type: "Chargeable",
-           textureInfo: "yoghurt_pot",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:yoghurtPotDescription"
-           },
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 750,
- ... (1 more removed lines; see GitHub link above)
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

#### 1474. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7979-L7996` → after: `L11156-L11166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11156-L11166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11156-L11166) · [Before (L7979-L7996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7979-L7996)

```diff
-         Truffle: {
-           displayName: {
-             translationKey: "item:truffle"
-           },
-           type: "Chargeable",
-           textureInfo: "truffle",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:truffleDescription"
-           },
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 500,
- ... (2 more removed lines; see GitHub link above)
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

#### 1475. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L7998-L8014` → after: `L11168-L11178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11168-L11178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11168-L11178) · [Before (L7998-L8014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L7998-L8014)

```diff
-         "Truffle Oil": {
-           displayName: {
-             translationKey: "item:truffleOil"
-           },
-           type: "Chargeable",
-           textureInfo: "truffle_oil",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:truffleOilDescription"
-           },
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           chargeTime: 750,
- ... (1 more removed lines; see GitHub link above)
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

#### 1476. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8016-L8033` → after: `L11180-L11190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11180-L11190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11180-L11190) · [Before (L8016-L8033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8016-L8033)

```diff
-         Oats: {
-           displayName: {
-             translationKey: "item:oats"
-           },
-           type: "Chargeable",
-           textureInfo: "oats",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:oatsDescription"
-           },
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 500,
- ... (2 more removed lines; see GitHub link above)
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

#### 1477. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8035-L8051` → after: `L11192-L11202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11192-L11202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11192-L11202) · [Before (L8035-L8051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8035-L8051)

```diff
-         Porridge: {
-           displayName: {
-             translationKey: "item:porridge"
-           },
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
- ... (1 more removed lines; see GitHub link above)
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

#### 1478. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8053-L8070` → after: `L11204-L11214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11204-L11214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11204-L11214) · [Before (L8053-L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8053-L8070)

```diff
-         Dates: {
-           displayName: {
-             translationKey: "item:dates"
-           },
-           type: "Chargeable",
-           textureInfo: "dates",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:datesDescription"
-           },
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 500,
- ... (2 more removed lines; see GitHub link above)
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

#### 1479. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8072-L8088` → after: `L11216-L11226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11216-L11226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11216-L11226) · [Before (L8072-L8088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8072-L8088)

```diff
-         "Date Pudding": {
-           displayName: {
-             translationKey: "item:datePudding"
-           },
-           type: "Chargeable",
-           textureInfo: "date_pudding",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:datePuddingDescription"
-           },
-           chargeStages: 1,
-           eatable: !0,
-           chargeSound: "eat1",
-           chargeTime: 750,
- ... (1 more removed lines; see GitHub link above)
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

#### 1480. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8090-L8102` → after: `L11228-L11238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11228-L11238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11228-L11238) · [Before (L8090-L8102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8090-L8102)

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

#### 1481. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8104-L8114` → after: `L11240-L11249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11240-L11249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11240-L11249) · [Before (L8104-L8114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8104-L8114)

```diff
-         Fertiliser: {
-           displayName: {
-             translationKey: "item:fertiliser"
-           },
-           type: "Item",
-           textureInfo: "fertiliser",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:fertiliserDescription"
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
```

#### 1482. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8117` → after: `L11252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11252) · [Before (L8117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8117)

```diff
-         Medkit: {
+         ...(0, Up.Jb)("White Directional Arrow", {
```

#### 1483. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8119` → after: `L11254-L11257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11254-L11257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11254-L11257) · [Before (L8119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8119)

```diff
-             translationKey: "item:medkit"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:white)"
+             }
```

#### 1484. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8121-L8127` → after: `L11259-L11271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11259-L11271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11259-L11271) · [Before (L8121-L8127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8121-L8127)

```diff
-           type: "Item",
-           textureInfo: "medkit",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Wood Spear": {
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
+         ...(0, Up.Jb)("Orange Directional Arrow", {
```

#### 1485. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8129-L8138` → after: `L11273-L11276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11273-L11276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11273-L11276) · [Before (L8129-L8138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8129-L8138)

```diff
-             translationKey: "item:woodSpear"
-           },
-           type: "Tool",
-           textureInfo: "wood_spear",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 18,
-           attackRange: 5,
-           description: {
-             translationKey: "item:spearDescription"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:orange)"
+             }
```

#### 1486. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8140-L8147` → after: `L11278-L11290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11278-L11290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11278-L11290) · [Before (L8140-L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8140-L8147)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 1,
-           abilityCooldownMs: 1600,
-           dashImpulse: 18
-         },
-         "Stone Spear": {
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
+         ...(0, Up.Jb)("Magenta Directional Arrow", {
```

#### 1487. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8149` → after: `L11292-L11295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11292-L11295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11292-L11295) · [Before (L8149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8149)

```diff
-             translationKey: "item:stoneSpear"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:magenta)"
+             }
```

#### 1488. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8151-L8158` → after: `L11297-L11314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11297-L11314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11297-L11314) · [Before (L8151-L8158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8151-L8158)

```diff
-           type: "Tool",
-           textureInfo: "stone_spear",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 22,
-           attackRange: 5,
-           description: {
-             translationKey: "item:spearDescription"
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
+         ...(0, Up.Jb)("Light Blue Directional Arrow", {
+           displayName: {
+             translationKey: "item:directionalArrow",
+             params: {
+ ... (2 more added lines; see GitHub link above)
```

#### 1489. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8160-L8167` → after: `L11316-L11328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11316-L11328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11316-L11328) · [Before (L8160-L8167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8160-L8167)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 2,
-           abilityCooldownMs: 1600,
-           dashImpulse: 20
-         },
-         "Iron Spear": {
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
+         ...(0, Up.Jb)("Yellow Directional Arrow", {
```

#### 1490. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8169` → after: `L11330-L11333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11330-L11333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11330-L11333) · [Before (L8169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8169)

```diff
-             translationKey: "item:ironSpear"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:yellow)"
+             }
```

#### 1491. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8171-L8178` → after: `L11335-L11352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11335-L11352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11335-L11352) · [Before (L8171-L8178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8171-L8178)

```diff
-           type: "Tool",
-           textureInfo: "iron_spear",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 28,
-           attackRange: 5,
-           description: {
-             translationKey: "item:spearDescription"
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
+         ...(0, Up.Jb)("Lime Directional Arrow", {
+           displayName: {
+             translationKey: "item:directionalArrow",
+             params: {
+ ... (2 more added lines; see GitHub link above)
```

#### 1492. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8180-L8187` → after: `L11354-L11366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11354-L11366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11354-L11366) · [Before (L8180-L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8180-L8187)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 3,
-           abilityCooldownMs: 1600,
-           dashImpulse: 22
-         },
-         "Gold Spear": {
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
+         ...(0, Up.Jb)("Pink Directional Arrow", {
```

#### 1493. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8189` → after: `L11368-L11371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11368-L11371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11368-L11371) · [Before (L8189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8189)

```diff
-             translationKey: "item:goldSpear"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:pink)"
+             }
```

#### 1494. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8191-L8198` → after: `L11373-L11390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11373-L11390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11373-L11390) · [Before (L8191-L8198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8191-L8198)

```diff
-           type: "Tool",
-           textureInfo: "gold_spear",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 30,
-           attackRange: 5,
-           description: {
-             translationKey: "item:spearDescription"
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
+         ...(0, Up.Jb)("Grey Directional Arrow", {
+           displayName: {
+             translationKey: "item:directionalArrow",
+             params: {
+ ... (2 more added lines; see GitHub link above)
```

#### 1495. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8200-L8207` → after: `L11392-L11404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11392-L11404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11392-L11404) · [Before (L8200-L8207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8200-L8207)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 4,
-           abilityCooldownMs: 1600,
-           dashImpulse: 25
-         },
-         "Diamond Spear": {
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
+         ...(0, Up.Jb)("Light Grey Directional Arrow", {
```

#### 1496. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8209` → after: `L11406-L11409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11406-L11409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11406-L11409) · [Before (L8209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8209)

```diff
-             translationKey: "item:diamondSpear"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:light_gray)"
+             }
```

#### 1497. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8211-L8218` → after: `L11411-L11428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11411-L11428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11411-L11428) · [Before (L8211-L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8211-L8218)

```diff
-           type: "Tool",
-           textureInfo: "diamond_spear",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 32,
-           attackRange: 5,
-           description: {
-             translationKey: "item:spearDescription"
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
+         ...(0, Up.Jb)("Cyan Directional Arrow", {
+           displayName: {
+             translationKey: "item:directionalArrow",
+             params: {
+ ... (2 more added lines; see GitHub link above)
```

#### 1498. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8220-L8227` → after: `L11430-L11442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11430-L11442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11430-L11442) · [Before (L8220-L8227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8220-L8227)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5,
-           abilityCooldownMs: 1600,
-           dashImpulse: 28
-         },
-         "Moonstone Spear": {
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
+         ...(0, Up.Jb)("Purple Directional Arrow", {
```

#### 1499. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8229` → after: `L11444-L11447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11444-L11447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11444-L11447) · [Before (L8229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8229)

```diff
-             translationKey: "item:moonstoneSpear"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:purple)"
+             }
```

#### 1500. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8231-L8372` → after: `L11449-L11466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11449-L11466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11449-L11466) · [Before (L8231-L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8231-L8372)

```diff
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
-           level: 5,
-           abilityCooldownMs: 1600,
-           dashImpulse: 28
-         },
- ... (126 more removed lines; see GitHub link above)
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
+         ...(0, Up.Jb)("Blue Directional Arrow", {
+           displayName: {
+             translationKey: "item:directionalArrow",
+             params: {
+ ... (2 more added lines; see GitHub link above)
```

#### 1501. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8374-L8379` → after: `L11468-L11480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11468-L11480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11468-L11480) · [Before (L8374-L8379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8374-L8379)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5
-         },
-         "Wood Boomerang": {
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
+         ...(0, Up.Jb)("Brown Directional Arrow", {
```

#### 1502. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8381` → after: `L11482-L11485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11482-L11485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11482-L11485) · [Before (L8381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8381)

```diff
-             translationKey: "item:woodBoomerang"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:brown)"
+             }
```

#### 1503. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8383-L8390` → after: `L11487-L11504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11487-L11504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11487-L11504) · [Before (L8383-L8390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8383-L8390)

```diff
-           type: "Tool",
-           textureInfo: "wood_boomerang",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 11,
-           secondaryDamage: 11,
-           description: {
-             translationKey: "item:boomerangDescription"
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
+         ...(0, Up.Jb)("Green Directional Arrow", {
+           displayName: {
+             translationKey: "item:directionalArrow",
+             params: {
+ ... (2 more added lines; see GitHub link above)
```

#### 1504. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8392-L8397` → after: `L11506-L11518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11506-L11518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11506-L11518) · [Before (L8392-L8397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8392-L8397)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 1
-         },
-         "Stone Boomerang": {
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
+         ...(0, Up.Jb)("Red Directional Arrow", {
```

#### 1505. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8399` → after: `L11520-L11523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11520-L11523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11520-L11523) · [Before (L8399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8399)

```diff
-             translationKey: "item:stoneBoomerang"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:red)"
+             }
```

#### 1506. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8401-L8408` → after: `L11525-L11542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11525-L11542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11525-L11542) · [Before (L8401-L8408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8401-L8408)

```diff
-           type: "Tool",
-           textureInfo: "stone_boomerang",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 14,
-           secondaryDamage: 14,
-           description: {
-             translationKey: "item:boomerangDescription"
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
+         ...(0, Up.Jb)("Black Directional Arrow", {
+           displayName: {
+             translationKey: "item:directionalArrow",
+             params: {
+ ... (2 more added lines; see GitHub link above)
```

#### 1507. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8410-L8413` → after: `L11544-L11643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11544-L11643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11544-L11643) · [Before (L8410-L8413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8410-L8413)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 2
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
+ ... (84 more added lines; see GitHub link above)
```

#### 1508. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8415` → after: `L11645-L11854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11645-L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11645-L11854) · [Before (L8415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8415)

```diff
-         "Iron Boomerang": {
+         UFO: {
+           ttb: 2e3,
+           harvestType: "rock",
+           model: "CustomModel",
+           blockModel: "ufo",
+           blockModelItem: !0,
+           twoDBlockItem: !0,
+           modelScale: 1
+         },
+         ...(0, Up.vb)("Torch", {
+           ttb: 300,
+           harvestType: "cuttable",
+           itemTexture: "torch",
+           solid: !1,
+           model: "CustomModel",
+           modelScale: 8,
+ ... (194 more added lines; see GitHub link above)
```

#### 1509. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8417-L8426` → after: `L11856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11856) · [Before (L8417-L8426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8417-L8426)

```diff
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
+             translationKey: "item:overgrownGrassBlock"
```

#### 1510. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8428-L8431` → after: `L11858-L11864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11858-L11864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11858-L11864) · [Before (L8428-L8431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8428-L8431)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 3
+           ttb: 720,
+           textureInfo: "grass_top",
+           harvestType: "granule",
+           soundType: {
+             break: "grass",
+             place: "grass"
+           }
```

#### 1511. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8433` → after: `L11866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11866) · [Before (L8433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8433)

```diff
-         "Gold Boomerang": {
+         "Overgrown Pine Grass Block": {
```

#### 1512. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8435-L8444` → after: `L11868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11868) · [Before (L8435-L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8435-L8444)

```diff
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
+             translationKey: "item:overgrownPineGrassBlock"
```

#### 1513. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8446-L8449` → after: `L11870-L11876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11870-L11876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11870-L11876) · [Before (L8446-L8449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8446-L8449)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 4
+           ttb: 720,
+           textureInfo: "pine_grass_block",
+           harvestType: "granule",
+           soundType: {
+             break: "grass",
+             place: "grass"
+           }
```

#### 1514. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8451` → after: `L11878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11878) · [Before (L8451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8451)

```diff
-         "Diamond Boomerang": {
+         "Overgrown Jungle Grass Block": {
```

#### 1515. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8453` → after: `L11880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11880) · [Before (L8453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8453)

```diff
-             translationKey: "item:diamondBoomerang"
+             translationKey: "item:overgrownJungleGrassBlock"
```

#### 1516. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8455-L8462` → after: `L11882-L11895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11882-L11895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11882-L11895) · [Before (L8455-L8462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8455-L8462)

```diff
-           type: "Tool",
-           textureInfo: "diamond_boomerang",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 20,
-           secondaryDamage: 20,
-           description: {
-             translationKey: "item:boomerangDescription"
+           ttb: 720,
+           textureInfo: "jungle_grass_block",
+           harvestType: "granule",
+           soundType: {
+             break: "grass",
+             place: "grass"
+           }
+         },
+         "Smoke Block": {
+           displayName: "Smoke Block",
+           ttb: 100,
+           textureInfo: {
+             animTextures: ["smoke0", "smoke1", "smoke2", "smoke3"],
+             animationInterval: 400
```

#### 1517. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8464-L8467` → after: `L11897-L11900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11897-L11900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11897-L11900) · [Before (L8464-L8467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8464-L8467)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5
+           transTex: !0,
+           solid: !1,
+           drops: null,
+           harvestType: "cuttable"
```

#### 1518. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8469` → after: `L11902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11902) · [Before (L8469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8469)

```diff
-         "Moonstone Boomerang": {
+         ...(0, Up.yb)("Pipe", "pipe", {
```

#### 1519. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8471` → after: `L11904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11904) · [Before (L8471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8471)

```diff
-             translationKey: "item:moonstoneBoomerang"
+             translationKey: "item:pipe"
```

#### 1520. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8480` → after: `L11907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11907) · [Before (L8480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8480)

```diff
-             translationKey: "item:boomerangDescription"
+             translationKey: "item:pipeDescription"
```

#### 1521. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8482-L8487` → after: `L11909-L11921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11909-L11921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11909-L11921) · [Before (L8482-L8487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8482-L8487)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5
-         },
-         "Wood Club": {
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
+         ...(0, Up.B)(),
+         "Auto Crafter": {
```

#### 1522. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8489` → after: `L11923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11923) · [Before (L8489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8489)

```diff
-             translationKey: "item:woodClub"
+             translationKey: "item:autoCrafter"
```

#### 1523. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8499` → after: `L11926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11926) · [Before (L8499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8499)

```diff
-             translationKey: "item:clubDescription"
+             translationKey: "item:autoCrafterDescription"
```

#### 1524. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8501-L8504` → after: `L11928-L11933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11928-L11933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11928-L11933) · [Before (L8501-L8504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8501-L8504)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 1
+           ttb: 3600,
+           textureInfo: ["autocrafter_side", "crafting_table_top", "autocrafter_bottom"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "rock",
+           particlesIgnoreBlack: !0,
+           altActionable: !0
```

#### 1525. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8506` → after: `L11935-L11936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11935-L11936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11935-L11936) · [Before (L8506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8506)

```diff
-         "Stone Club": {
+         ...(0, Up.Ib)(),
+         ...(0, Up.yb)("Extractor Pipe", "extractor_pipe", {
```

#### 1526. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8508` → after: `L11938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11938) · [Before (L8508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8508)

```diff
-             translationKey: "item:stoneClub"
+             translationKey: "item:extractorPipe"
```

#### 1527. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8518` → after: `L11941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11941) · [Before (L8518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8518)

```diff
-             translationKey: "item:clubDescription"
+             translationKey: "item:extractorPipeDescription"
```

#### 1528. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8520-L8525` → after: `L11943-L11954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11943-L11954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11943-L11954) · [Before (L8520-L8525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8520-L8525)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 2
-         },
-         "Iron Club": {
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

#### 1529. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8527` → after: `L11956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11956) · [Before (L8527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8527)

```diff
-             translationKey: "item:ironClub"
+             translationKey: "item:splitterPipe"
```

#### 1530. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8537` → after: `L11959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11959) · [Before (L8537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8537)

```diff
-             translationKey: "item:clubDescription"
+             translationKey: "item:splitterPipeDescription"
```

#### 1531. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8539-L8542` → after: `L11961-L11970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11961-L11970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11961-L11970) · [Before (L8539-L8542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8539-L8542)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 3
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

#### 1532. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8544` → after: `L11972-L11973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11972-L11973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11972-L11973) · [Before (L8544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8544)

```diff
-         "Gold Club": {
+         ...(0, Up.Pb)(),
+         ...(0, Up.yb)("Wire", "wire", {
```

#### 1533. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8546` → after: `L11975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11975) · [Before (L8546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8546)

```diff
-             translationKey: "item:goldClub"
+             translationKey: "item:wire"
```

#### 1534. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8556` → after: `L11978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11978) · [Before (L8556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8556)

```diff
-             translationKey: "item:clubDescription"
+             translationKey: "item:wireDescription"
```

#### 1535. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8558-L8563` → after: `L11980-L11991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11980-L11991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11980-L11991) · [Before (L8558-L8563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8558-L8563)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 4
-         },
-         "Diamond Club": {
+           ttb: 400,
+           itemTexture: "wire",
+           model: "CustomModel",
+           harvestType: "rock",
+           solid: !1,
+           modelScale: 8,
+           heldItemScale: 6,
+           blockModelItem: !0,
+           particlesIgnoreBlack: !0,
+           rootMetaDesc: "Wire|meta|conn|none"
+         }),
+         ...(0, Up.eb)("Filter Pipe", "filter_pipe", "pz", {
```

#### 1536. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8565` → after: `L11993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11993) · [Before (L8565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8565)

```diff
-             translationKey: "item:diamondClub"
+             translationKey: "item:filterPipe"
```

#### 1537. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8575` → after: `L11996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11996) · [Before (L8575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8575)

```diff
-             translationKey: "item:clubDescription"
+             translationKey: "item:filterPipeDescription"
```

#### 1538. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8577-L8582` → after: `L11998-L12010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R11998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L11998-L12010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L11998-L12010) · [Before (L8577-L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8577-L8582)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5
-         },
-         "Moonstone Club": {
+           ttb: 600,
+           itemTexture: "filter_pipe",
+           model: "CustomModel",
+           harvestType: "rock",
+           solid: !1,
+           modelScale: 8,
+           heldItemScale: 6,
+           blockModelItem: !0,
+           particlesIgnoreBlack: !0,
+           altActionable: !0,
+           rootMetaDesc: "Filter Pipe|meta|input|none"
+         }),
+         ...(0, Up.pb)("Merger Pipe", "merger_pipe", "pz", {
```

#### 1539. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8584` → after: `L12012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12012) · [Before (L8584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8584)

```diff
-             translationKey: "item:moonstoneClub"
+             translationKey: "item:mergerPipe"
```

#### 1540. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8594` → after: `L12015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12015) · [Before (L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8594)

```diff
-             translationKey: "item:clubDescription"
+             translationKey: "item:mergerPipeDescription"
```

#### 1541. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8596-L8601` → after: `L12017-L12029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12017-L12029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12017-L12029) · [Before (L8596-L8601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8596-L8601)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5
-         },
-         "Wood Mace": {
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

#### 1542. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8603` → after: `L12031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12031) · [Before (L8603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8603)

```diff
-             translationKey: "item:woodMace"
+             translationKey: "item:autoHarvester"
```

#### 1543. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8612` → after: `L12034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12034) · [Before (L8612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8612)

```diff
-             translationKey: "item:maceDescription"
+             translationKey: "item:autoHarvesterDescription"
```

#### 1544. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8614-L8617` → after: `L12036-L12041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12036-L12041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12036-L12041) · [Before (L8614-L8617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8614-L8617)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 1
+           ttb: 3600,
+           textureInfo: ["harvester_side0", "harvester_side1", "harvester_top", "harvester_bottom"],
+           texturePerSide: [0, 1, 2, 3, 0, 1],
+           harvestType: "rock",
+           particlesIgnoreBlack: !0,
+           altActionable: !0
```

#### 1545. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8619` → after: `L12043-L12044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12043-L12044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12043-L12044) · [Before (L8619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8619)

```diff
-         "Stone Mace": {
+         ...(0, Up.sb)("Stalker"),
+         "Lunite Ore": {
```

#### 1546. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8621` → after: `L12046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12046) · [Before (L8621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8621)

```diff
-             translationKey: "item:stoneMace"
+             translationKey: "item:luniteOre"
```

#### 1547. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8623-L8630` → after: `L12048-L12055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12048-L12055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12048-L12055) · [Before (L8623-L8630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8623-L8630)

```diff
-           type: "Tool",
-           textureInfo: "stone_mace",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 14,
-           velocityMultiplier: 2.4,
-           description: {
-             translationKey: "item:maceDescription"
+           ttb: 5e3,
+           textureInfo: "lunite_ore",
+           harvestType: "rock",
+           harvestLevel: 3,
+           drops: "Lunite",
+           specialToolDrop: {
+             tool: "Moonstone Pickaxe",
+             drops: "Lunite Ore"
```

#### 1548. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8632-L8639` → after: `L12057-L12058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12057-L12058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12057-L12058) · [Before (L8632-L8639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8632-L8639)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 2
-         },
-         "Iron Mace": {
-           displayName: {
-             translationKey: "item:ironMace"
+           specialToolBonusDrops: {
+             "Golem Pickaxe": Ap.v
```

#### 1549. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8648` → after: `L12061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12061) · [Before (L8648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8648)

```diff
-             translationKey: "item:maceDescription"
+             translationKey: "item:luniteOreDescription"
```

#### 1550. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8650-L8653` → after: `L12063-L12064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12063-L12064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12063-L12064) · [Before (L8650-L8653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8650-L8653)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 3
+           onMinedAura: 40,
+           Jy: [10, 3, 12]
```

#### 1551. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8655` → after: `L12066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12066) · [Before (L8655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8655)

```diff
-         "Gold Mace": {
+         "Block of Lunite": {
```

#### 1552. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8657` → after: `L12068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12068) · [Before (L8657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8657)

```diff
-             translationKey: "item:goldMace"
+             translationKey: "item:blockOfLunite"
```

#### 1553. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8666` → after: `L12071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12071) · [Before (L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8666)

```diff
-             translationKey: "item:maceDescription"
+             translationKey: "item:blockOfLuniteDescription"
```

#### 1554. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8668-L8671` → after: `L12073-L12075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12073-L12075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12073-L12075) · [Before (L8668-L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8668-L8671)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 4
+           ttb: 6750,
+           textureInfo: "lunite_block",
+           harvestType: "rock"
```

#### 1555. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8673` → after: `L12077-L12078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12077-L12078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12077-L12078) · [Before (L8673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8673)

```diff
-         "Diamond Mace": {
+         ...(0, Up.jb)(),
+         "Lunite Auto Crafter": {
```

#### 1556. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8675` → after: `L12080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12080) · [Before (L8675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8675)

```diff
-             translationKey: "item:diamondMace"
+             translationKey: "item:luniteAutoCrafter"
```

#### 1557. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8684` → after: `L12083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12083) · [Before (L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8684)

```diff
-             translationKey: "item:maceDescription"
+             translationKey: "item:luniteAutoCrafterDescription"
```

#### 1558. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8686-L8689` → after: `L12085-L12090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12085-L12090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12085-L12090) · [Before (L8686-L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8686-L8689)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5
+           ttb: 3600,
+           textureInfo: ["autocrafter_lunite_side", "crafting_table_top", "autocrafter_lunite_bottom"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "rock",
+           particlesIgnoreBlack: !0,
+           altActionable: !0
```

#### 1559. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8691` → after: `L12092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12092) · [Before (L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8691)

```diff
-         "Moonstone Mace": {
+         "Lunite Auto Harvester": {
```

#### 1560. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8693` → after: `L12094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12094) · [Before (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8693)

```diff
-             translationKey: "item:moonstoneMace"
+             translationKey: "item:luniteAutoHarvester"
```

#### 1561. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8702` → after: `L12097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12097) · [Before (L8702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8702)

```diff
-             translationKey: "item:maceDescription"
+             translationKey: "item:luniteAutoHarvesterDescription"
```

#### 1562. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8704-L8707` → after: `L12099-L12104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12099-L12104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12099-L12104) · [Before (L8704-L8707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8704-L8707)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5
+           ttb: 3600,
+           textureInfo: ["harvester_lunite_side_0", "harvester_lunite_side_1", "harvester_lunite_top", "harvester_lunite_bottom"],
+           texturePerSide: [0, 1, 2, 3, 0, 1],
+           harvestType: "rock",
+           particlesIgnoreBlack: !0,
+           altActionable: !0
```

#### 1563. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8709` → after: `L12106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12106) · [Before (L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8709)

```diff
-         "Wood Whip": {
+         "Bowling Alley Floor": {
```

#### 1564. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8711-L8721` → after: `L12108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12108) · [Before (L8711-L8721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8711-L8721)

```diff
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
+             translationKey: "item:bowlingAlleyFloor"
```

#### 1565. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8723-L8726` → after: `L12110-L12127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12110-L12127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12110-L12127) · [Before (L8723-L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8723-L8726)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 1
+           ttb: 960,
+           textureInfo: "bowling_alley_floor",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
+           }
+         },
+         ...(0, Up.sb)("Crone"),
+         ...(0, Up.sb)("Slime"),
+         "Slime Trail|meta|rot1|Decaying": {
+           ...dp
+         },
+         "Slime Trail|meta|rot2|Decaying": {
+           ...dp
+         },
+ ... (2 more added lines; see GitHub link above)
```

#### 1566. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8728` → after: `L12129-L12136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12129-L12136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12129-L12136) · [Before (L8728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8728)

```diff
-         "Stone Whip": {
+         "Slime Trail|meta|rot4|Decaying": {
+           ...dp
+         },
+         ...(0, Up.sb)("Iron Guardian"),
+         ...(0, Up.sb)("Gold Guardian"),
+         ...(0, Up.sb)("Diamond Guardian"),
+         ...(0, Up.sb)("Moonstone Guardian"),
+         "Dry Grass Block": {
```

#### 1567. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8730-L8740` → after: `L12138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12138) · [Before (L8730-L8740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8730-L8740)

```diff
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
+             translationKey: "item:dryGrassBlock"
```

#### 1568. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8742-L8745` → after: `L12140-L12147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12140-L12147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12140-L12147) · [Before (L8742-L8745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8742-L8745)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 2
+           ttb: 720,
+           textureInfo: ["dry_grass_block_side", "dry_grass_block", "dirt"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "granule",
+           soundType: {
+             break: "grass",
+             place: "grass"
+           }
```

#### 1569. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8747` → after: `L12149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12149) · [Before (L8747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8747)

```diff
-         "Iron Whip": {
+         "Overgrown Dry Grass Block": {
```

#### 1570. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8749` → after: `L12151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12151) · [Before (L8749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8749)

```diff
-             translationKey: "item:ironWhip"
+             translationKey: "item:overgrownDryGrassBlock"
```

#### 1571. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8751-L8764` → after: `L12153-L12159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12153-L12159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12153-L12159) · [Before (L8751-L8764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8751-L8764)

```diff
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
-           multiplier: 2,
-           level: 3
+           ttb: 720,
+           textureInfo: "dry_grass_block",
+           harvestType: "granule",
+           soundType: {
+             break: "grass",
+             place: "grass"
+           }
```

#### 1572. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8766` → after: `L12161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12161) · [Before (L8766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8766)

```diff
-         "Gold Whip": {
+         "Dead Bush": {
```

#### 1573. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8768-L8778` → after: `L12163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12163) · [Before (L8768-L8778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8768-L8778)

```diff
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
+             translationKey: "item:deadBush"
```

#### 1574. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8780-L8783` → after: `L12165-L12399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12165-L12399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12165-L12399) · [Before (L8780-L8783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8780-L8783)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 4
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

#### 1575. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8785` → after: `L12401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12401) · [Before (L8785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8785)

```diff
-         "Diamond Whip": {
+         "Toxic Waste": {
```

#### 1576. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8787` → after: `L12403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12403) · [Before (L8787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8787)

```diff
-             translationKey: "item:diamondWhip"
+             translationKey: "item:toxicWaste"
```

#### 1577. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8789-L8797` → after: `L12405-L12408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12405-L12408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12405-L12408) · [Before (L8789-L8797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8789-L8797)

```diff
-           type: "Tool",
-           textureInfo: "diamond_whip",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 17,
-           attackRange: 8,
-           knockbackHorizontalScalar: -1.8,
-           description: {
-             translationKey: "item:whipDescription"
+           textureInfo: {
+             colour: [.36, .93, .3, .95],
+             animTextures: ["toxic_waste0", "toxic_waste1", "toxic_waste2", "toxic_waste3", "toxic_waste4", "toxic_waste5", "toxic_waste6", "toxic_waste7"],
+             animationInterval: 800
```

#### 1578. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8799-L8802` → after: `L12410-L12413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12410-L12413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12410-L12413) · [Before (L8799-L8802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8799-L8802)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5
+           tW: !0,
+           drops: null,
+           harvestType: "rock",
+           Jy: [6, 14, 4]
```

#### 1579. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8804` → after: `L12415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12415) · [Before (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8804)

```diff
-         "Moonstone Whip": {
+         "Ancient Maple Log": {
```

#### 1580. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8806` → after: `L12417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12417) · [Before (L8806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8806)

```diff
-             translationKey: "item:moonstoneWhip"
+             translationKey: "item:ancientMapleLog"
```

#### 1581. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8816` → after: `L12420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12420) · [Before (L8816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8816)

```diff
-             translationKey: "item:whipDescription"
+             translationKey: "item:ancientMapleLogDescription"
```

#### 1582. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8818-L8821` → after: `L12422-L12424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12422-L12424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12422-L12424) · [Before (L8818-L8821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8818-L8821)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5
+           ttb: 2400,
+           textureInfo: "log_ancient_maple",
+           harvestType: "wood"
```

#### 1583. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8823` → after: `L12426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12426) · [Before (L8823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8823)

```diff
-         "Beef Stew": {
+         "Evil Lucky Block": {
```

#### 1584. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8825` → after: `L12428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12428) · [Before (L8825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8825)

```diff
-             translationKey: "item:beefStew"
+             translationKey: "item:evilLuckyBlock"
```

#### 1585. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8827-L8831` → after: `L12430-L12433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12430-L12433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12430-L12433) · [Before (L8827-L8831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8827-L8831)

```diff
-           type: "Item",
-           textureInfo: "beef_stew",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           ttb: 1200,
+           textureInfo: ["evil_lucky_block", "evil_lucky_block_face"],
+           texturePerSide: [1, 1, 0, 0, 0, 0],
+           harvestType: "rock",
```

#### 1586. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8833` → after: `L12435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12435) · [Before (L8833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8833)

```diff
-             translationKey: "item:beefStewDescription"
+             translationKey: "item:evilLuckyBlockDescription"
```

#### 1587. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8836-L8838` → after: `L12438-L12593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12438-L12593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12438-L12593) · [Before (L8836-L8838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8836-L8838)

```diff
-         Chicken: {
-           displayName: {
-             translationKey: "item:chicken"
+         ...(0, Up.Qb)(kp),
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

#### 1588. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8840-L8848` → after: `L12595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12595) · [Before (L8840-L8848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8840-L8848)

```diff
-           type: "Item",
-           textureInfo: "chicken",
-           heldItemGlb: "chicken",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:chickenDescription"
-           }
+           Jy: [9, 15, 5]
```

#### 1589. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8850-L8861` → after: `L12597-L12606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12597-L12606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12597-L12606) · [Before (L8850-L8861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8850-L8861)

```diff
-         Coleslaw: {
-           displayName: {
-             translationKey: "item:coleslaw"
-           },
-           type: "Item",
-           textureInfo: "coleslaw",
-           heldItemGlb: "coleslaw",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:coleslawDescription"
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
```

#### 1590. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8864` → after: `L12609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12609) · [Before (L8864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8864)

```diff
-         Egg: {
+         Ash: {
```

#### 1591. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8866` → after: `L12611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12611) · [Before (L8866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8866)

```diff
-             translationKey: "item:egg"
+             translationKey: "item:ash"
```

#### 1592. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8868-L8875` → after: `L12613-L12618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12613-L12618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12613-L12618) · [Before (L8868-L8875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8868-L8875)

```diff
-           type: "Item",
-           textureInfo: "egg",
-           heldItemGlb: "egg",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:eggDescription"
+           ttb: 600,
+           textureInfo: "ash",
+           harvestType: "granule",
+           soundType: {
+             break: "sand",
+             place: "sand"
```

#### 1593. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8878` → after: `L12621-L12622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12621-L12622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12621-L12622) · [Before (L8878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8878)

```diff
-         "Fish N Chips": {
+         ...(0, Ip.l)(),
+         Darkstone: {
```

#### 1594. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8880` → after: `L12624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12624) · [Before (L8880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8880)

```diff
-             translationKey: "item:fishNChips"
+             translationKey: "item:darkstone"
```

#### 1595. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8882-L8889` → after: `L12626-L12628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12626-L12628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12626-L12628) · [Before (L8882-L8889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8882-L8889)

```diff
-           type: "Item",
-           textureInfo: "fish_n_chips",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:fishNChipsDescription"
-           }
+           ttb: 1800,
+           textureInfo: "darkstone",
+           harvestType: "rock"
```

#### 1596. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8891` → after: `L12630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12630) · [Before (L8891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8891)

```diff
-         "Fried Rice": {
+         "Darkstone Bricks": {
```

#### 1597. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8893` → after: `L12632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12632) · [Before (L8893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8893)

```diff
-             translationKey: "item:friedRice"
+             translationKey: "item:darkstoneBricks"
```

#### 1598. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8895-L8902` → after: `L12634-L12636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12634-L12636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12634-L12636) · [Before (L8895-L8902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8895-L8902)

```diff
-           type: "Item",
-           textureInfo: "fried_rice",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:friedRiceDescription"
-           }
+           ttb: 1800,
+           textureInfo: "darkstone_bricks",
+           harvestType: "rock"
```

#### 1599. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8904` → after: `L12638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12638) · [Before (L8904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8904)

```diff
-         Lettuce: {
+         "Cracked Darkstone Bricks": {
```

#### 1600. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8906` → after: `L12640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12640) · [Before (L8906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8906)

```diff
-             translationKey: "item:lettuce"
+             translationKey: "item:crackedDarkstoneBricks"
```

#### 1601. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8908-L8916` → after: `L12642-L12644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12642-L12644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12642-L12644) · [Before (L8908-L8916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8908-L8916)

```diff
-           type: "Item",
-           textureInfo: "lettuce",
-           heldItemGlb: "lettuce",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:lettuceDescription"
-           }
+           ttb: 1800,
+           textureInfo: "darkstone_bricks_cracked",
+           harvestType: "rock"
```

#### 1602. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8918` → after: `L12646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12646) · [Before (L8918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8918)

```diff
-         Omelette: {
+         "Molten Darkstone Bricks": {
```

#### 1603. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8920` → after: `L12648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12648) · [Before (L8920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8920)

```diff
-             translationKey: "item:omelette"
+             translationKey: "item:moltenDarkstoneBricks"
```

#### 1604. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8922-L8930` → after: `L12650-L12653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12650-L12653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12650-L12653) · [Before (L8922-L8930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8922-L8930)

```diff
-           type: "Item",
-           textureInfo: "omelette",
-           heldItemGlb: "omelette",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:omeletteDescription"
-           }
+           ttb: 1800,
+           textureInfo: "darkstone_bricks_lava",
+           harvestType: "rock",
+           Jy: [9, 3, 1]
```

#### 1605. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8932` → after: `L12655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12655) · [Before (L8932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8932)

```diff
-         Onion: {
+         "Engraved Darkstone": {
```

#### 1606. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8934` → after: `L12657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12657) · [Before (L8934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8934)

```diff
-             translationKey: "item:onion"
+             translationKey: "item:engravedDarkstone"
```

#### 1607. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8936-L8944` → after: `L12659-L12661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12659-L12661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12659-L12661) · [Before (L8936-L8944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8936-L8944)

```diff
-           type: "Item",
-           textureInfo: "onion",
-           heldItemGlb: "onion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:onionDescription"
-           }
+           ttb: 1800,
+           textureInfo: "darkstone_engraved",
+           harvestType: "rock"
```

#### 1608. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8946` → after: `L12663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12663) · [Before (L8946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8946)

```diff
-         "Red Cabbage": {
+         "Smooth Darkstone": {
```

#### 1609. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8948` → after: `L12665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12665) · [Before (L8948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8948)

```diff
-             translationKey: "item:redCabbage"
+             translationKey: "item:smoothDarkstone"
```

#### 1610. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8950-L8957` → after: `L12667-L12669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12667-L12669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12667-L12669) · [Before (L8950-L8957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8950-L8957)

```diff
-           type: "Item",
-           textureInfo: "red_cabbage",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:redCabbageDescription"
-           }
+           ttb: 1800,
+           textureInfo: "darkstone_smooth",
+           harvestType: "rock"
```

#### 1611. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8959-L8970` → after: `L12671-L12680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12671-L12680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12671-L12680) · [Before (L8959-L8970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8959-L8970)

```diff
-         "Roast Dinner": {
-           displayName: {
-             translationKey: "item:roastDinner"
-           },
-           type: "Item",
-           textureInfo: "roast_dinner",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:roastDinnerDescription"
-           }
+         ...(0, Up.cb)(wp.p, mp),
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

#### 1612. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8972` → after: `L12682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12682) · [Before (L8972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8972)

```diff
-         Salad: {
+         "Scorpion Eggs Block": {
```

#### 1613. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8974` → after: `L12684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12684) · [Before (L8974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8974)

```diff
-             translationKey: "item:salad"
+             translationKey: "item:scorpionEggsBlock"
```

#### 1614. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8976-L8983` → after: `L12686-L12691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12686-L12691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12686-L12691) · [Before (L8976-L8983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8976-L8983)

```diff
-           type: "Item",
-           textureInfo: "salad",
-           heldItemGlb: "salad",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:saladDescription"
+           ttb: 600,
+           textureInfo: "scorpion_eggs",
+           harvestType: "cuttable",
+           soundType: {
+             break: "cloth",
+             place: "cloth"
```

#### 1615. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8986` → after: `L12694-L12772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12694-L12772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12694-L12772) · [Before (L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8986)

```diff
-         "Stuffed Pepper": {
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

#### 1616. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8988` → after: `L12774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12774) · [Before (L8988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8988)

```diff
-             translationKey: "item:stuffedPepper"
+             translationKey: "item:stoneGenerator"
```

#### 1617. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8996-L8997` → after: `L12777-L12783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12777-L12783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12777-L12783) · [Before (L8996-L8997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8996-L8997)

```diff
-             translationKey: "item:stuffedPepperDescription"
-           }
+             translationKey: "item:stoneGeneratorDescription"
+           },
+           ttb: 3e3,
+           textureInfo: ["stone_generator_side", "stone_generator_top", "messy_stone"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "rock",
+           harvestLevel: 0
```

#### 1618. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L8999` → after: `L12785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12785) · [Before (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L8999)

```diff
-         Sushi: {
+         "Wheat Helper": {
```

#### 1619. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9001` → after: `L12787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12787) · [Before (L9001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9001)

```diff
-             translationKey: "item:sushi"
+             translationKey: "item:wheatHelper"
```

#### 1620. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9010-L9011` → after: `L12790-L12797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12790-L12797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12790-L12797) · [Before (L9010-L9011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9010-L9011)

```diff
-             translationKey: "item:sushiDescription"
-           }
+             translationKey: "item:wheatHelperDescription"
+           },
+           ttb: 1500,
+           textureInfo: ["crate", "hay_block_top"],
+           texturePerSide: [0, 0, 1, 0, 0, 0],
+           harvestType: "wood",
+           harvestLevel: 0,
+           altActionable: !0
```

#### 1621. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9013` → after: `L12799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12799) · [Before (L9013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9013)

```diff
-         Tomato: {
+         "Carrot Helper": {
```

#### 1622. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9015` → after: `L12801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12801) · [Before (L9015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9015)

```diff
-             translationKey: "item:tomato"
+             translationKey: "item:carrotHelper"
```

#### 1623. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9024-L9025` → after: `L12804-L12811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12804-L12811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12804-L12811) · [Before (L9024-L9025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9024-L9025)

```diff
-             translationKey: "item:tomatoDescription"
-           }
+             translationKey: "item:carrotHelperDescription"
+           },
+           ttb: 1500,
+           textureInfo: ["crate", "carrot_block_top"],
+           texturePerSide: [0, 0, 1, 0, 0, 0],
+           harvestType: "wood",
+           harvestLevel: 0,
+           altActionable: !0
```

#### 1624. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9027` → after: `L12813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12813) · [Before (L9027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9027)

```diff
-         "Vegetable Soup": {
+         "Melon Helper": {
```

#### 1625. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9029` → after: `L12815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12815) · [Before (L9029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9029)

```diff
-             translationKey: "item:vegetableSoup"
+             translationKey: "item:melonHelper"
```

#### 1626. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9037-L9038` → after: `L12818-L12825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12818-L12825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12818-L12825) · [Before (L9037-L9038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9037-L9038)

```diff
-             translationKey: "item:vegetableSoupDescription"
-           }
+             translationKey: "item:melonHelperDescription"
+           },
+           ttb: 1500,
+           textureInfo: ["crate", "melon_top"],
+           texturePerSide: [0, 0, 1, 0, 0, 0],
+           harvestType: "wood",
+           harvestLevel: 0,
+           altActionable: !0
```

#### 1627. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9040-L9044` → after: `L12827-L12831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12827-L12831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12827-L12831) · [Before (L9040-L9044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9040-L9044)

```diff
-         "Common Lottery Ticket": {
-           displayName: [{
-             str: "Common Lottery Ticket",
-             style: {
-               color: "#4d4d4d"
+         ... function() {
+           const pp = {};
+           for (const {
+               wood: ip,
+               block: cp
```

#### 1628. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9046-L9232` → after: `L12833-L12835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12833-L12835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12833-L12835) · [Before (L9046-L9232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9046-L9232)

```diff
-           }],
-           description: "Take it to the Lottery stall in the spawn hub to redeem it for a reward.",
-           type: "Item",
-           textureInfo: "book",
-           heldItemGlb: "Book",
-           weight: 0,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         "Uncommon Lottery Ticket": {
-           displayName: [{
-             str: "Uncommon Lottery Ticket",
-             style: {
-               color: "#A9FF21"
-             }
-           }],
- ... (171 more removed lines; see GitHub link above)
+             of tp.c) pp[cp] = {
+             displayName: {
+               translationKey: `item:${(0,Dp.qe)(cp)}`
```

#### 1629. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9234-L9559` → after: `L12837-L12887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12837-L12887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12837-L12887) · [Before (L9234-L9559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9234-L9559)

```diff
-             nC = null === (GC = KC.description) || void 0 === GC ? void 0 : GC.call(KC, CC, zC);
-           if (void 0 !== nC && (bC.description = nC), !ZC) {
-             if (!KC.metadata) throw new Error(`Item family "${KC.name}" declares neither inheritsFrom nor metadata`);
-             const CC = (0, QC.ne)(wC);
-             gC[wC] = {
-               ...KC.metadata(zC),
-               ...bC,
-               textureInfo: CC,
-               heldItemGlb: CC
-             };
-             continue
-           }
-           const fC = (0, qC.m)(ZC.material, ZC.kind);
-           if (!gC[fC]) throw new Error(`Item family "${KC.name}" inherits "${wC}" from "${fC}", which is not registered`);
-           for (const QC of qC.b) {
-             const nC = gC[`${fC}${QC}`];
- ... (310 more removed lines; see GitHub link above)
+             ttb: 960,
+             harvestType: "wood",
+             ..."Maple" === ip ? {
+               showInCreativeInven: !1
+             } : {},
+             ...ep(cp, (0, Dp.se)(cp), {
+               rotatable: !1
+             })
+           };
+           return pp
+         }(),
+         ...(0, Sp.o)(),
+         ...(0, xp.d)()
+       };
+     for (const Kp of Object.values(Rp))
+       for (const pp of Array.isArray(Kp.textureInfo) ? Kp.textureInfo : [Kp.textureInfo]) "object" === typeof pp && null !== pp && "animTextures" in pp && (0, Yp.e)(pp);
+ ... (35 more added lines; see GitHub link above)
```

#### 1630. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9562-L9781` → after: `L12898-L12901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12898-L12901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12898-L12901) · [Before (L9562-L9781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9562-L9781)

```diff
-     gC["Moonstone Sword"] = {
-       ...gC["Diamond Sword"],
-       displayName: {
-         translationKey: "item:moonstoneSword"
-       },
-       textureInfo: "moonstone_sword",
-       showInCreativeInven: !1
-     }, gC["Magmaward Fuel"] = {
-       displayName: {
-         translationKey: "item:magmawardFuel"
-       },
-       description: {
-         translationKey: "item:magmawardFuelDescription"
-       },
-       type: "Item",
-       textureInfo: "magmaward_fuel",
- ... (204 more removed lines; see GitHub link above)
+       of Cp) {
+       const pp = Vp.length;
+       if (Math.log(pp) / Math.log(2) % 1 !== 0) throw new Error(`${Kp} has ${pp} animation states, which is not a power of 2`);
+       Xp[Vp[0]] ??= Mp++, ii.push(Xp[Vp[0]])
```

#### 1631. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9783-L9785` → after: `L12903-L12941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12903-L12941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12903-L12941) · [Before (L9783-L9785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9783-L9785)

```diff
- 
-     function AC(CC) {
-       return CC.split(" ")[0]
+     for (const {
+         animTextures: Kp,
+         atlasIndices: Vp,
+         animationInterval: ii
+       }
+       of Cp) {
+       lp[Vp[0]] ??= {
+         numAnimStates: Kp.length,
+         animStartIdx: Mp,
+         animationInterval: ii
+       };
+       for (let pp = 1; pp < Kp.length; pp++) {
+         var Bp;
+         const ip = Kp[pp],
+           cp = null !== (Bp = Xp[ip]) && void 0 !== Bp ? Bp : Mp++;
+         Xp[ip] = cp, Vp.push(cp)
+ ... (23 more added lines; see GitHub link above)
```

#### 1632. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9794` → after: `L12947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12947) · [Before (L9794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9794)

```diff
-       IC[KC] = null !== (iC = IC[CC.id]) && void 0 !== iC ? iC : new bC.h(CC)
+       Tp[Kp] = null !== (fp = Tp[pp.id]) && void 0 !== fp ? fp : new Ap.e(pp)
```

#### 1633. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9796-L9811` → after: `L12949-L12956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R12949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L12949-L12956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L12949-L12956) · [Before (L9796-L9811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9796-L9811)

```diff
-     const vC = {},
-       eC = [nC.g, IC].flatMap(Object.entries);
-     for (const [KC, YC] of eC) vC[KC] = YC, vC[YC.id] = YC;
-     for (const KC of FC.e) {
-       const CC = KC;
-       if (!vC[CC]) throw new Error(`Missing "${CC}" item for vehicle type "${KC}"`)
-     }
-     const hC = {};
-     for (const KC in gC)
-       if ("rock" === gC[KC].harvests) {
-         const CC = gC[KC].level;
-         if (void 0 !== CC && "string" === typeof KC)
-           for (let zC = 0; zC <= CC; zC++) {
-             const ZC = hC[zC];
-             (void 0 === ZC || CC < gC[ZC].level) && (hC[zC] = KC)
-           }
+     const bp = 39 == cp.j ? Tp : null,
+       hp = {};
+     for (const Kp in Tp) {
+       const pp = Kp.split("|");
+       if ("meta" === pp[1]) {
+         var ap;
+         const ip = null !== (ap = hp[pp[0]]) && void 0 !== ap ? ap : [];
+         ip.push(Kp), hp[pp[0]] = ip
```

#### 1634. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9814` → after: `L13225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13225) · [Before (L9814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9814)

```diff
-   36902: (CC, zC, ZC) => {
+   9359: (pp, ip, cp) => {
```

#### 1635. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9816` → after: `L13227-L13256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13227-L13256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13227-L13256) · [Before (L9816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9816)

```diff
-       e: () => MC,
+       $b: () => di,
+       A: () => qp,
+       B: () => ii,
+       Cb: () => Pp,
+       Db: () => ui,
+       Eb: () => sp,
+       F: () => lp,
+       G: () => yp,
+       H: () => Ii,
+       Ib: () => yi,
+       Jb: () => ap,
+       L: () => vi,
+       Lb: () => Gp,
+       Mb: () => jp,
+       Nb: () => Ui,
+       O: () => Hi,
+ ... (14 more added lines; see GitHub link above)
```

#### 1636. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9818` → after: `L13258-L13260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13258-L13260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13258-L13260) · [Before (L9818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9818)

```diff
-       i: () => fC,
+       gc: () => Wi,
+       ic: () => mp,
+       jb: () => ci,
```

#### 1637. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9820-L9823` → after: `L13262-L13272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13262-L13272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13262-L13272) · [Before (L9820-L9823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9820-L9823)

```diff
-       l: () => NC,
-       m: () => oC,
-       o: () => PC,
-       r: () => gC
+       lb: () => Wp,
+       n: () => Ai,
+       pb: () => bp,
+       qb: () => zp,
+       r: () => Yi,
+       sb: () => Zp,
+       u: () => Di,
+       vb: () => ti,
+       w: () => Rp,
+       xb: () => Fp,
+       yb: () => hp
```

#### 1638. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9825-L9828` → after: `L13274-L13300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13274-L13300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13274-L13300) · [Before (L9825-L9828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9825-L9828)

```diff
-     var QC = ZC(326),
-       wC = ZC(597),
-       bC = ZC(9217),
-       nC = ZC(36909);
+     var Op = cp(9340),
+       op = cp(9368),
+       Ip = cp(9375),
+       Sp = cp(9392),
+       xp = cp(9399),
+       Lp = cp(9404),
+       Yp = cp(337),
+       Dp = cp(9385),
+       Ap = cp(636);
+ 
+     function Pp(pp, ip, cp, Op) {
+       const op = {
+           ...ip
+         },
+         Ip = {};
+       for (let xp = 0; xp < cp.length; xp++) {
+ ... (11 more added lines; see GitHub link above)
```

#### 1639. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9831` → after: `L13303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13303) · [Before (L9831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9831)

```diff
-       console.assert("meta|charging1" === zC.rootMetaDesc.split("|").slice(1).join("|"), "charging root item .rootMetaDesc must be |meta|charging1");
+       console.assert("meta|rot1|empty" === ip.rootMetaDesc.split("|").slice(1).join("|"), "mailbox root block .rootMetaDesc must be |meta|rot1|empty");
```

#### 1640. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9835-L9838` → after: `L13307-L13328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13307-L13328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13307-L13328) · [Before (L9835-L9838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9835-L9838)

```diff
-       return delete ZC.rootMetaDesc, {
-         [CC]: {
-           ...zC,
-           textureInfo: zC.textureName
+       delete cp.rootMetaDesc;
+       const Op = {
+           ...cp
+         },
+         op = {
+           ...cp
+         },
+         Ip = {
+           ...cp
+         };
+       Object.assign(Op, {
+         texturePerSide: [0, 1, 1, 1, 1, 1]
+       }), Object.assign(op, {
+         texturePerSide: [1, 1, 1, 1, 1, 0]
+       }), Object.assign(Ip, {
+         texturePerSide: [1, 0, 1, 1, 1, 1]
+ ... (6 more added lines; see GitHub link above)
```

#### 1641. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9840-L9842` → after: `L13330-L13331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13330-L13331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13330-L13331) · [Before (L9840-L9842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9840-L9842)

```diff
-         [`${CC}|meta|charging2`]: {
-           ...ZC,
-           textureInfo: `${zC.textureName}_charging_2`
+         [`${pp}|meta|rot3|empty`]: {
+           ...op
```

#### 1642. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9844-L9846` → after: `L13333-L13334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13333-L13334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13333-L13334) · [Before (L9844-L9846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9844-L9846)

```diff
-         [`${CC}|meta|charging3`]: {
-           ...ZC,
-           textureInfo: `${zC.textureName}_charging_3`
+         [`${pp}|meta|rot4|empty`]: {
+           ...Ip
```

#### 1643. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9848-L9851` → after: `L13336-L13355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13336-L13355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13336-L13355) · [Before (L9848-L9851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9848-L9851)

```diff
-         [`${CC}|meta|charging4`]: {
-           ...ZC,
-           textureInfo: `${zC.textureName}_charging_4`
-         }
+         [`${pp}|meta|rot1|full`]: Object.assign({
+           ...cp
+         }, {
+           textureInfo: Sp
+         }),
+         [`${pp}|meta|rot2|full`]: Object.assign({
+           ...Op
+         }, {
+           textureInfo: Sp
+         }),
+         [`${pp}|meta|rot3|full`]: Object.assign({
+           ...op
+         }, {
+           textureInfo: Sp
+         }),
+         [`${pp}|meta|rot4|full`]: Object.assign({
+ ... (4 more added lines; see GitHub link above)
```

#### 1644. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9856` → after: `L13360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13360) · [Before (L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9856)

```diff
-       console.assert("meta|dir1" === zC.rootMetaDesc.split("|").slice(1).join("|"), "charging root item .rootMetaDesc must be |meta|dir1");
+       console.assert("meta|rot1|books6" === ip.rootMetaDesc.split("|").slice(1).join("|"), "bookshelf root block .rootMetaDesc must be |meta|rot1|books6");
```

#### 1645. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9860-L9874` → after: `L13364-L13392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13364-L13392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13364-L13392) · [Before (L9860-L9874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9860-L9874)

```diff
-       return delete ZC.rootMetaDesc, {
-         [CC]: {
-           ...zC,
-           heldItemGlb: CC,
-           textureInfo: zC.textureName
-         },
-         [`${CC}|meta|dir2`]: {
-           ...ZC,
-           displayName: CC,
-           textureInfo: `${zC.textureName}_dir_2`
-         },
-         [`${CC}|meta|dir3`]: {
-           ...ZC,
-           displayName: CC,
-           textureInfo: `${zC.textureName}_dir_3`
+       delete cp.rootMetaDesc;
+       const Op = {
+           ...cp
+         },
+         op = {
+           ...cp
+         },
+         Ip = {
+           ...cp
+         },
+         Sp = {
+           0: ["bookshelf_empty", "planks_maple"],
+           1: ["bookshelf_1", "planks_maple"],
+           2: ["bookshelf_2", "planks_maple"],
+           3: ["bookshelf_3", "planks_maple"],
+           4: ["bookshelf_4", "planks_maple"],
+ ... (13 more added lines; see GitHub link above)
```

#### 1646. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9876-L9879` → after: `L13394-L13395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13394-L13395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13394-L13395) · [Before (L9876-L9879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9876-L9879)

```diff
-         [`${CC}|meta|dir4`]: {
-           ...ZC,
-           displayName: CC,
-           textureInfo: `${zC.textureName}_dir_4`
+         [`${pp}|meta|rot3|books6`]: {
+           ...op
```

#### 1647. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9881-L9884` → after: `L13397-L13398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13397-L13398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13397-L13398) · [Before (L9881-L9884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9881-L9884)

```diff
-         [`${CC}|meta|dir5`]: {
-           ...ZC,
-           displayName: CC,
-           textureInfo: `${zC.textureName}_dir_5`
+         [`${pp}|meta|rot4|books6`]: {
+           ...Ip
```

#### 1648. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9886` → after: `L13400-L13496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13400-L13496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13400-L13496) · [Before (L9886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9886)

```diff
-         [`${CC}|meta|dir6`]: {
+         [`Empty ${pp}`]: Object.assign({
+           ...cp
+         }, {
+           textureInfo: Sp[0],
+           description: {
+             translationKey: "item:emptyBookshelfDescription"
+           },
+           rootMetaDesc: `Empty ${pp}|meta|rot1|books0`
+         }),
+         [`Empty ${pp}|meta|rot2|books0`]: Object.assign({
+           ...Op
+         }, {
+           textureInfo: Sp[0]
+         }),
+         [`Empty ${pp}|meta|rot3|books0`]: Object.assign({
+           ...op
+ ... (81 more added lines; see GitHub link above)
```

#### 1649. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9888-L9891` → after: `L13498-L13584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13498-L13584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13498-L13584) · [Before (L9888-L9891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9888-L9891)

```diff
-           displayName: CC,
-           textureInfo: `${zC.textureName}_dir_6`
-         },
-         [`${CC}|meta|dir7`]: {
+           rootMetaDesc: `${Lp}|meta|rot1|bot`,
+           ...Ip
+         }))
+       }
+       return Sp
+     }
+     const vp = {
+         bot: (0, Op.h)([
+           [
+             [0, 0, 0],
+             [8, 4, 8]
+           ]
+         ]),
+         top: (0, Op.h)([
+           [
+             [0, 4, 0],
+ ... (71 more added lines; see GitHub link above)
```

#### 1650. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9893-L9894` → after: `L13586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13586) · [Before (L9893-L9894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9893-L9894)

```diff
-           displayName: CC,
-           textureInfo: `${zC.textureName}_dir_7`
+           Ww: vp.bot
```

#### 1651. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9896` → after: `L13588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13588) · [Before (L9896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9896)

```diff
-         [`${CC}|meta|dir8`]: {
+         [`${pp}|meta|rot1|top`]: {
```

#### 1652. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9898-L9899` → after: `L13590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13590) · [Before (L9898-L9899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9898-L9899)

```diff
-           displayName: CC,
-           textureInfo: `${zC.textureName}_dir_8`
+           Ww: vp.top
```

#### 1653. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9901` → after: `L13592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13592) · [Before (L9901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9901)

```diff
-         [`${CC}|meta|dir9`]: {
+         [`${pp}|meta|rot1|side`]: {
```

#### 1654. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9903-L9904` → after: `L13594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13594) · [Before (L9903-L9904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9903-L9904)

```diff
-           displayName: CC,
-           textureInfo: `${zC.textureName}_dir_9`
+           Ww: vp.side1
```

#### 1655. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9906` → after: `L13596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13596) · [Before (L9906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9906)

```diff
-         [`${CC}|meta|dir10`]: {
+         [`${pp}|meta|rot2|side`]: {
```

#### 1656. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9908-L9909` → after: `L13598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13598) · [Before (L9908-L9909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9908-L9909)

```diff
-           displayName: CC,
-           textureInfo: `${zC.textureName}_dir_10`
+           Ww: vp.side2
```

#### 1657. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9911` → after: `L13600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13600) · [Before (L9911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9911)

```diff
-         [`${CC}|meta|dir11`]: {
+         [`${pp}|meta|rot3|side`]: {
```

#### 1658. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9913-L9914` → after: `L13602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13602) · [Before (L9913-L9914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9913-L9914)

```diff
-           displayName: CC,
-           textureInfo: `${zC.textureName}_dir_11`
+           Ww: vp.side3
```

#### 1659. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9916` → after: `L13604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13604) · [Before (L9916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9916)

```diff
-         [`${CC}|meta|dir12`]: {
+         [`${pp}|meta|rot4|side`]: {
```

#### 1660. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9918-L9919` → after: `L13606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13606) · [Before (L9918-L9919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9918-L9919)

```diff
-           displayName: CC,
-           textureInfo: `${zC.textureName}_dir_12`
+           Ww: vp.side4
```

#### 1661. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9926` → after: `L13611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13611) · [Before (L9926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9926)

```diff
-     function WC(CC, zC, ZC) {
+     function kp(pp, ip) {
```

#### 1662. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9930-L9931` → after: `L13614-L13627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13614-L13627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13614-L13627) · [Before (L9930-L9931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9930-L9931)

```diff
-           heldItemGlb: `${zC}_${qC}`,
-           textureInfo: `${zC}_${qC}`
+           model: "Stairs"
+         },
+         Op = {};
+       for (const Ip of ["bot", "top"])
+         for (let ip = 1; ip <= 4; ip++) {
+           const Sp = op.m[Ip][ip - 1];
+           1 === ip && "bot" === Ip ? Op[pp] = {
+             ...cp,
+             rootMetaDesc: `${pp}|meta|rot1|bot`,
+             Ww: Sp
+           } : Op[`${pp}|meta|rot${ip}|${Ip}`] = {
+             ...cp,
+             Ww: Sp
+           }
```

#### 1663. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9934` → after: `L13760-L13776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13760-L13776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13760-L13776) · [Before (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9934)

```diff
-       for (const wC of FC) QC[`${CC}|meta|${wC}`] = {
+       delete cp.rootMetaDesc;
+       const Op = {
+           ...cp,
+           blockModel: `_${pp} Hanging`
+         },
+         op = `_${pp} Flag`,
+         Ip = {
+           ...ip,
+           drops: pp,
+           rootMetaDesc: `${op}|meta|rot1|top`,
+           blockModel: `${op} Hanging`
+         },
+         Sp = {
+           ...Ip
+         };
+       delete Sp.rootMetaDesc;
+ ... (1 more added lines; see GitHub link above)
```

#### 1664. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9936-L9937` → after: `L13778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13778) · [Before (L9936-L9937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9936-L9937)

```diff
-         heldItemGlb: `${zC}_${wC}`,
-         textureInfo: `${zC}_${wC}`
+         blockModel: op
```

#### 1665. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9944-L9945` → after: `L13952-L13965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13952-L13965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13952-L13965) · [Before (L9944-L9945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9944-L9945)

```diff
-         QC = (0, bC.E)(CC, zC);
-       for (const wC in QC) Object.assign(ZC, fC(wC, QC[wC]));
+         ip = ["", "Top", "Bottom", "Left", "Right", "Top Left", "Top Right", "Bottom Left", "Bottom Right"];
+       for (const cp of ["Standing", "Wall"])
+         for (const Op of "Standing" === cp ? [...ip, "Leg"] : ip) {
+           const ip = `Noticeboard ${cp}${Op?` ${Op}`:""}`;
+           Object.assign(pp, ap(ip, {
+             ...np,
+             displayName: {
+               translationKey: `item:${(0,Yp.qe)(ip)}`
+             },
+             rootMetaDesc: `${ip}|meta|rot1`,
+             blockModel: (0, Yp.se)(ip),
+             itemTexture: (0, Yp.se)(ip)
+           }))
+         }
```

#### 1666. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9949-L9950` → after: `L13969-L14012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R13969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L13969-L14012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L13969-L14012) · [Before (L9949-L9950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9949-L9950)

```diff
-     function MC(CC, zC, ZC) {
-       console.assert(4 === ZC.length, "Must have 4 textures for bowl fill metadatas");
+     function gp() {
+       const pp = {};
+       for (const {
+           root: ip,
+           blockModelPrefix: cp
+         }
+         of Ip.l) {
+         const Op = {
+           ...np,
+           displayName: {
+             translationKey: `item:${(0,Yp.qe)(Ip.p)}`
+           },
+           drops: Ip.p,
+           itemTexture: "noticeboard",
+           customModelInfo: {
+             yOffset: -.5,
+ ... (28 more added lines; see GitHub link above)
```

#### 1667. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9954-L9959` → after: `L14016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R14016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L14016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L14016) · [Before (L9954-L9959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9954-L9959)

```diff
-       delete QC.rootMetaDesc, delete QC.textureInfo, delete QC.afterEatenItem;
-       const wC = `Partially Full ${CC}`,
-         bC = `Half Full ${CC}`,
-         nC = `Nearly Full ${CC}`,
-         fC = CC;
-       return {
+       return delete Op.rootMetaDesc, {
```

#### 1668. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9962-L9964` → after: `L14019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R14019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L14019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L14019) · [Before (L9962-L9964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9962-L9964)

```diff
-           textureInfo: ZC[0],
-           afterEatenItem: "Bowl",
-           rootMetaDesc: `${wC}|meta|charging1`
+           texturePerSide: cp[0]
```

#### 1669. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9966` → after: `L14021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R14021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L14021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L14021) · [Before (L9966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9966)

```diff
-         [bC]: {
+         [`${pp}|meta|rot2`]: {
```

#### 1670. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9968-L9970` → after: `L14023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R14023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L14023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L14023) · [Before (L9968-L9970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9968-L9970)

```diff
-           textureInfo: ZC[1],
-           afterEatenItem: wC,
-           rootMetaDesc: `${bC}|meta|charging1`
+           texturePerSide: cp[1]
```

#### 1671. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9972` → after: `L14025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R14025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L14025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L14025) · [Before (L9972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9972)

```diff
-         [nC]: {
+         [`${pp}|meta|rot3`]: {
```

#### 1672. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9974-L9976` → after: `L14027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R14027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L14027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L14027) · [Before (L9974-L9976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9974-L9976)

```diff
-           textureInfo: ZC[2],
-           afterEatenItem: bC,
-           rootMetaDesc: `${nC}|meta|charging1`
+           texturePerSide: cp[2]
```

#### 1673. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9978` → after: `L14029-L14054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R14029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L14029-L14054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L14029-L14054) · [Before (L9978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9978)

```diff
-         [fC]: {
+         [`${pp}|meta|rot4`]: {
+           ...Op,
+           texturePerSide: cp[3]
+         }
+       }
+     }
+ 
+     function rp(pp, ip) {
+       const cp = ["chest_double_front_lo", "chest_double_front_hi", "chest_side", "chest_double_top_1_lo", "chest_double_top_1_hi", "chest_double_top_2_lo", "chest_double_top_2_hi", "chest_double_back_lo", "chest_double_back_hi"],
+         Op = {
+           left: [
+             [2, 2, 6, 5, 0, 8],
+             [0, 8, 4, 4, 2, 2],
+             [2, 2, 5, 6, 8, 0],
+             [8, 0, 3, 3, 2, 2]
+           ],
+ ... (10 more added lines; see GitHub link above)
```

#### 1674. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9980-L9982` → after: `L14056-L14086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R14056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L14056-L14086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L14056-L14086) · [Before (L9980-L9982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9980-L9982)

```diff
-           textureInfo: ZC[3],
-           afterEatenItem: nC,
-           rootMetaDesc: `${fC}|meta|charging1`
+           textureInfo: cp,
+           texturePerSide: Op[Ip][Sp - 1]
+         };
+       return op
+     }
+ 
+     function Zp(pp) {
+       const ip = (0, Yp.Tb)(pp),
+         cp = Ap.s.includes(pp) || Ap.e.includes(pp) ? "passive" : Ap.w.has(pp) ? "hostile" : "neutral";
+       return {
+         [ip]: {
+           displayName: {
+             translationKey: `item:${(0,Yp.qe)(pp)}MobSpawnerBlock`
+           },
+           description: {
+             translationKey: `item:${(0,Yp.qe)(pp)}MobSpawnerBlockDescription`
+ ... (15 more added lines; see GitHub link above)
```

#### 1675. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9988-L9991` → after: `L14202-L14212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R14202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L14202-L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L14202-L14212) · [Before (L9988-L9991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9988-L9991)

```diff
-       return Object.fromEntries(wC.B.map((CC => {
-         const zC = (0, QC.ke)(CC),
-           ZC = (0, QC.ne)(CC);
-         return [(0, QC.Jb)(CC), {
+       const pp = "Solar Panel",
+         ip = [pp, "_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"],
+         cp = {
+           ttb: 2400,
+           textureInfo: ["solar_panel_side", "solar_panel_top", "solar_panel_bottom"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "rock"
+         },
+         Op = {};
+       for (const op of ip) {
+         const ip = op === pp ? {
```

#### 1676. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L9993` → after: `L14214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R14214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L14214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L14214) · [Before (L9993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L9993)

```diff
-             translationKey: `item:${zC}SpawnOrb`
+             translationKey: "item:solarPanel"
```

#### 1677. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L10001-L10007` → after: `L14217-L14266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R14217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L14217-L14266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L14217-L14266) · [Before (L10001-L10007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L10001-L10007)

```diff
-             translationKey: `item:${zC}SpawnOrbDescription`,
-             params: {
-               mob: CC
-             }
-           }
-         }]
-       })))
+             translationKey: "item:solarPanelDescription"
+           },
+           itemTexture: "solar_panel"
+         } : {
+           drops: pp
+         };
+         Object.assign(Op, ap(op, {
+           ...cp,
+           rootMetaDesc: `${op}|meta|rot1`,
+           ...ip
+         }))
+       }
+       return Op
+     }
+ 
+     function Vp(pp) {
+ ... (34 more added lines; see GitHub link above)
```

#### 1678. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L10018-L10033` → after: `L14270-L14369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R14270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L14270-L14369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L14270-L14369) · [Before (L10018-L10033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L10018-L10033)

```diff
-       return Object.fromEntries(wC.p.flatMap((CC => {
-         const zC = (0, QC.ne)(CC);
-         return wC.t[CC].map((ZC => {
-           var wC;
-           const bC = "default" !== ZC && (null === (wC = SC[CC]) || void 0 === wC ? void 0 : wC.includes(ZC)),
-             nC = bC ? {
-               heldItemGlb: (0, QC.ob)(CC, "default")
-             } : {};
-           return [(0, QC.ob)(CC, ZC), {
-             type: "Item",
-             textureInfo: `caught_${zC}_${bC?"default":ZC}`,
-             weight: 1,
-             heldItemScale: 1,
-             stackable: !1,
-             ...nC
-           }]
+       return Vp({
+         root: "Auto Miner",
+         cells: [
+           ["Auto Miner", "auto_miner_foot_back"],
+           ["_Auto Miner Drill Front", "auto_miner_drill_front"],
+           ["_Auto Miner Drill Back", "auto_miner_drill_back"],
+           ["_Auto Miner Foot Front", "auto_miner_foot_front"],
+           ["_Auto Miner Body", "auto_miner_body"]
+         ],
+         displayNameKey: "item:autoMiner",
+         descriptionKey: "item:autoMinerDescription",
+         itemTexture: "auto_miner"
+       })
+     }
+ 
+     function ci() {
+ ... (84 more added lines; see GitHub link above)
```

#### 1679. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L10035` → after: `L14371-L14372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R14371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L14371-L14372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L14371-L14372) · [Before (L10035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L10035)

```diff
-       })))
+       }
+       return ip
```

#### 1680. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L10039` → after: `L14401-L14409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R14401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L14401-L14409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L14401-L14409) · [Before (L10039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L10039)

```diff
-       var ZC;
+       const cp = pp[0].toUpperCase() + pp.slice(1);
+       return `_${Si} ${cp} L${ip}`
+     }
+ 
+     function Wi(pp) {
+       return 1 === pp ? Si : `${Si} S${pp}`
+     }
+ 
+     function yi() {
```

#### 1681. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L10041-L10047` → after: `L14411-L14468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R14411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L14411-L14468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L14411-L14468) · [Before (L10041-L10047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L10041-L10047)

```diff
-         type: "Gun",
-         textureInfo: CC,
-         weight: 1,
-         stackable: !1,
-         keepMetaInChest: !0,
-         ...zC,
-         ...nC.e[CC]
+           ttb: 3600,
+           model: "CustomModel",
+           modelScale: 8,
+           harvestType: "rock",
+           particlesIgnoreBlack: !0,
+           altActionable: !0
+         },
+         ip = ip => ({
+           ...pp,
+           blockModel: "rocket_southwest_1",
+           displayName: {
+             translationKey: 1 === ip ? "item:rocketShip" : `item:rocketShipS${ip}`
+           },
+           description: {
+             translationKey: "item:rocketShipDescription"
+           },
+ ... (42 more added lines; see GitHub link above)
```

#### 1682. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L10050-L10051` → after: `L14471-L14479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R14471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L14471-L14479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L14471-L14479) · [Before (L10050-L10051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L10050-L10051)

```diff
-         [CC]: QC,
-         [`${CC}|RequiresAmmo`]: {
+         [`Small ${pp} Pod`]: {
+           ...ip,
+           blockModel: `Small ${pp} Pod`
+         },
+         [`_Small ${pp} Pod Mid`]: {
+           ...ip,
+           blockModel: `_Small ${pp} Pod Mid`
+         },
+         [`_Small ${pp} Pod Top`]: {
```

#### 1683. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L10053-L10054` → after: `L14481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R14481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L14481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L14481) · [Before (L10053-L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L10053-L10054)

```diff
-           displayName: CC,
-           heldItemGlb: null !== (ZC = QC.heldItemGlb) && void 0 !== ZC ? ZC : CC
+           blockModel: `_Small ${pp} Pod Top`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/74.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/74.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b7b177a2e1c2f4caa25ddfe5311dc2ee5646eaa779c329452828570b5a4eec4c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/74.js` (Changed code · before: `L4` → after: `L4-L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b7b177a2e1c2f4caa25ddfe5311dc2ee5646eaa779c329452828570b5a4eec4cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b7b177a2e1c2f4caa25ddfe5311dc2ee5646eaa779c329452828570b5a4eec4c) · [After (L4-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/74.js#L4-L633) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/74.js#L4)

```diff
-   36926: (CC, zC, ZC) => {
+   37254: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Op
+     });
+     const Op = {
+       "AK-47": {
+         gunType: "semi_automatic",
+         scopeType: "none",
+         muzzleFlashOffsetFromGun: [-5.5, -.25, 0],
+         muzzleFlashScale: 1.5,
+         autoFireWithMouse: !0,
+         fireRate: 600,
+         cadenceMs: 75,
+         equipDelay: 24,
+         damage: 20,
+         reloadTime: 2300,
+ ... (614 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/74.js` (Changed code · before: `L7` → after: `L636-L9823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b7b177a2e1c2f4caa25ddfe5311dc2ee5646eaa779c329452828570b5a4eec4cR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b7b177a2e1c2f4caa25ddfe5311dc2ee5646eaa779c329452828570b5a4eec4c) · [After (L636-L9823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/74.js#L636-L9823) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/74.js#L7)

```diff
-       i: () => wC
+       f: () => dp,
+       j: () => ep,
+       k: () => Hp,
+       m: () => Rp,
+       n: () => Mp,
+       o: () => kp
+     });
+     var Op = cp(337),
+       op = cp(9385),
+       Ip = cp(4543),
+       Sp = cp(9338),
+       xp = cp(9359),
+       Lp = cp(37249),
+       Yp = cp(37262),
+       Dp = cp(37271),
+       Ap = cp(37277);
+ ... (9172 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/74.js` (Changed code · before: `L9-L10` → after: `L9825-L10057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b7b177a2e1c2f4caa25ddfe5311dc2ee5646eaa779c329452828570b5a4eec4cR9825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b7b177a2e1c2f4caa25ddfe5311dc2ee5646eaa779c329452828570b5a4eec4c) · [After (L9825-L10057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/74.js#L9825-L10057) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/74.js#L9-L10)

```diff
-     const QC = ["Boat", "Obsidian Boat", "Hovercraft", "Yellow Kart", "White Kart", "Red Kart", "Purple Kart", "Pink Kart", "Orange Kart", "Magenta Kart", "Lime Kart", "Light Gray Kart", "Light Blue Kart", "Green Kart", "Gray Kart", "Cyan Kart", "Brown Kart", "Blue Kart", "Black  … [truncated]
-       wC = 39 == ZC.j ? ["canAutoStep", "speedMultiplier"] : null
+     var Op = cp(337),
+       op = cp(636),
+       Ip = cp(9359),
+       Sp = cp(37254);
+ 
+     function xp(pp, ip) {
+       console.assert("meta|charging1" === ip.rootMetaDesc.split("|").slice(1).join("|"), "charging root item .rootMetaDesc must be |meta|charging1");
+       const cp = {
+         ...ip
+       };
+       return delete cp.rootMetaDesc, {
+         [pp]: {
+           ...ip,
+           textureInfo: ip.textureName
+         },
+         [`${pp}|meta|charging2`]: {
+ ... (217 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/75.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/75.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-18d30ce111cff5513ed6ec268eb06947b64828b2e680be9f267e7940ca13d4b1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/75.js` (Changed code · before: `L4-L340` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-18d30ce111cff5513ed6ec268eb06947b64828b2e680be9f267e7940ca13d4b1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-18d30ce111cff5513ed6ec268eb06947b64828b2e680be9f267e7940ca13d4b1) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/75.js#L4-L10) · [Before (L4-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/75.js#L4-L340)

```diff
-   36932: (CC, zC, ZC) => {
-     if (ZC.d(zC, {
-         e: () => oC,
-         g: () => wC,
-         h: () => nC,
-         i: () => bC,
-         j: () => xC,
-         l: () => PC
-       }), 39 == ZC.j) var QC = ZC(36938);
-     const wC = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
-       bC = ["Blade", "Guard", "Handle"],
-       nC = {
-         Wood: {
-           material: "Wood",
-           baseSword: "Wood Sword",
-           value: 1,
- ... (321 more removed lines; see GitHub link above)
+   37271: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Op,
+       f: () => op
+     });
+     const Op = ["Boat", "Obsidian Boat", "Hovercraft", "Yellow Kart", "White Kart", "Red Kart", "Purple Kart", "Pink Kart", "Orange Kart", "Magenta Kart", "Lime Kart", "Light Gray Kart", "Light Blue Kart", "Green Kart", "Gray Kart", "Cyan Kart", "Brown Kart", "Blue Kart", "Black  … [truncated]
+       op = 39 == cp.j ? ["canAutoStep", "speedMultiplier"] : null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/76.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/76.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L4-L17` → after: `L4-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L4-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/76.js#L4-L229) · [Before (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/76.js#L4-L17)

```diff
-   4630: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => FC
-     });
-     var QC = ZC(20),
-       wC = ZC(28),
-       bC = ZC(1240),
-       nC = ZC(2800);
-     const fC = 3e4,
-       oC = 1e3;
- 
-     function qC() {
-       return "visible" === document.visibilityState && "inGame" === QC.b.get("gameState") && (0, bC.x)()
-     }
+   37277: (pp, ip, cp) => {
+     if (cp.d(ip, {
+         b: () => Lp,
+         f: () => op,
+         j: () => Sp,
+         n: () => Ip,
+         p: () => ep,
+         s: () => vp
+       }), 39 == cp.j) var Op = cp(37286);
+     const op = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
+       Ip = ["Blade", "Guard", "Handle"],
+       Sp = {
+         Wood: {
+           material: "Wood",
+           baseSword: "Wood Sword",
+           value: 1,
+ ... (210 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L20-L39` → after: `L232-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L232-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/76.js#L232-L325) · [Before (L20-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/76.js#L20-L39)

```diff
-       (0, nC.l)() || function(CC, zC, ZC) {
-         let QC = 0;
-         const wC = setInterval((() => {
-           zC() && (QC += oC, QC >= CC && (clearInterval(wC), ZC()))
-         }), oC)
-       }(fC, qC, (() => {
-         zC().then((() => {
-           CC(`saved for the player after ${fC/1e3} s of play`), (0, nC.t)(), wC.o.bp("chat", {
-             content: [{
-               str: "Saved a debug file to your downloads: please send it to us with a screenshot of the game.",
-               style: {
-                 color: "#ffd84a"
-               }
-             }]
-           })
-         }))
- ... (4 more removed lines; see GitHub link above)
+       return `${pp} ${ip}`
+     }
+     op.flatMap((pp => Ip.map((ip => vp(pp, ip)))));
+ 
+     function tp(pp) {
+       let {
+         blade: ip,
+         guard: cp,
+         handle: Op
+       } = pp;
+       return `${wp}${ip.toLowerCase()}-${cp.toLowerCase()}-${Op.toLowerCase()}`
+     }
+ 
+     function Hp(pp) {
+       if (! function(pp) {
+           return "string" === typeof pp && pp.startsWith(wp)
+ ... (78 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L41-L378` → after: `L327-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L327-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/76.js#L327-L340) · [Before (L41-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/76.js#L41-L378)

```diff
-       return 0 === CC.length ? 0 : CC[Math.min(CC.length - 1, Math.floor(zC * CC.length))]
-     }
- 
-     function wC(CC) {
-       return CC.toFixed(1)
-     }
-     ZC.d(zC, {
-       b: () => wC,
-       e: () => QC
-     })
-   },
-   37778: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => qC,
-       d: () => FC,
-       f: () => AC,
- ... (322 more removed lines; see GitHub link above)
+       return "Blade" === ip ? pp.blade : "Guard" === ip ? pp.guard : pp.handle
+     }
+ 
+     function kp(pp) {
+       return Math.round(100 * pp) / 100
+     }
+ 
+     function mp(pp) {
+       return `${Math.round(100*pp)}%`
+     }
+ 
+     function Rp(pp) {
+       return `${pp>=0?"+":""}${mp(pp)}`
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/77.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/77.js` (48 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa)

#### 1. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L4-L56` → after: `L4-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L4-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L4-L458) · [Before (L4-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L4-L56)

```diff
-   4635: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => Tz,
-       h: () => WZ,
-       j: () => Oz,
-       k: () => zZ,
-       l: () => Lz,
-       o: () => kz,
-       s: () => cz,
-       u: () => Dz,
-       v: () => Kz,
-       w: () => FZ,
-       A: () => qZ,
-       C: () => jz,
-       E: () => Xz
-     });
- ... (37 more removed lines; see GitHub link above)
+   37468: (pp, ip, cp) => {
+     var Op = {
+       "./67/67_Atlas.png": 27343,
+       "./67/67_Model.glb": 33475,
+       "./67/67_Reconstructed.glb": 33477,
+       "./67/variations/0_67_default.png": 27351,
+       "./Armour Collector/Armour Collector_Atlas.png": 27354,
+       "./Armour Collector/Armour Collector_Model.glb": 33485,
+       "./Armour Collector/Armour Collector_Reconstructed.glb": 33488,
+       "./Armour Collector/variations/0_armour collector_default.png": 27361,
+       "./Bear/BearSaddle_Atlas.png": 27367,
+       "./Bear/Bear_Atlas.png": 27371,
+       "./Bear/Bear_Model.glb": 33496,
+       "./Bear/variations/0_bear_default.png": 27378,
+       "./Bobino Musculino/Bobino Musculino_Atlas.png": 27385,
+       "./Bobino Musculino/Bobino Musculino_Model.glb": 33501,
+ ... (439 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L58-L59` → after: `L460-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L460-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L460-L462) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L58-L59)

```diff
-     function eC(CC, zC) {
-       return CC === `function ${zC}() { [native code] }` || CC === `function ${zC}() {\n    [native code]\n}`
+     function op(pp) {
+       var ip = Ip(pp);
+       return cp(ip)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L66-L86` → after: `L465-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L465-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L465-L533) · [Before (L66-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L66-L86)

```diff
-     function mC(CC, zC, ZC) {
-       if (dC === YC && IC === RC && ! function() {
-           const CC = JC;
-           return vC >= PC && (iC(MC, NC, [CC]), vC = 0), CC[vC++] < 256 / pC
-         }()) return function(CC, zC, ZC) {
-         return iC(CC, zC, ZC ?? 0)
-       }(...arguments);
-       if (dC === hC || IC === AC) return nC(CC, zC, ZC);
-       let QC;
-       dC = hC;
-       try {
-         IC === GC && (IC = xC, IC = function() {
-           const CC = nC(wC, nC, []);
-           if (eC(CC, "apply")) return AC;
-           if (null === nC(bC, /\(\.\.\.arguments\)/, [CC]) && null === nC(bC, /^function\s*\(\.\.\.[\w$]+\)/, [CC])) return AC;
-           if ("function" !== typeof SC || "function" !== typeof fC || "function" !== typeof oC || "function" !== typeof qC || "function" !== typeof FC || "function" !== typeof MC || "function" !== typeof WC || !eC(nC(wC, fC, []), "call") || !eC(nC(wC, oC, []), "apply") || !eC(nC( … [truncated]
- ... (5 more removed lines; see GitHub link above)
+     function Ip(pp) {
+       if (!cp.o(Op, pp)) {
+         var ip = new Error("Cannot find module '" + pp + "'");
+         throw ip.code = "MODULE_NOT_FOUND", ip
+       }
+       return Op[pp]
+     }
+     op.keys = function() {
+       return Object.keys(Op)
+     }, op.resolve = Ip, pp.exports = op, op.id = 37468
+   },
+   38483: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       default: () => Ip
+     });
+     var Op = cp(38488),
+ ... (53 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L88-L92` → after: `L535-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L535-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L535-L537) · [Before (L88-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L88-L92)

```diff
-             if (!0 !== zC(QC, ZC, [ZC])) return AC;
-             const CC = new WC(PC);
-             zC(MC, NC, [CC]), JC = CC
-           } catch {
-             return AC
+             op()(ip, Ip)
+           } finally {
+             Op = null
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L94-L97` → after: `L539-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L539-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L539-L548) · [Before (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L94-L97)

```diff
-           return iC = zC, RC
-         }()), QC = nC(CC, zC, ZC)
-       } catch (gC) {
-         throw IC = AC, gC
+         }
+       };
+ 
+       function Sp(pp, ip) {
+         var cp = (pp[3] - pp[0]) / 2,
+           Op = pp[0] + cp,
+           op = pp[2] + cp,
+           Ip = xp(Op, ip[0], ip[3]) - Op,
+           Sp = xp(op, ip[2], ip[5]) - op;
+         return Ip * Ip + Sp * Sp <= cp * cp
```
