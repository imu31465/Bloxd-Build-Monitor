# Changed — Bundle Modifications Report (Part 030 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `30 / 86` (**380** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 029](part-029.md) · [Part 031 →](part-031.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/85.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/85.js` (1674 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d)

#### 725. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4216` → after: `L5164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5164) · [Before (L4216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4216)

```diff
-             translationKey: "item:boneMeal"
+             translationKey: "item:dioriteBricksSlab"
```

#### 726. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4218-L4227` → after: `L5166-L5174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5166-L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5166-L5174) · [Before (L4218-L4227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4218-L4227)

```diff
-           type: "Item",
-           textureInfo: "bone_meal",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:boneMealDescription"
-           }
-         },
-         Leather: {
+           ttb: 1200,
+           textureInfo: ["slab_diorite_brick_side", "diorite_brick"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           model: "Slab",
+           harvestType: "rock",
+           slabFullBlock: "Diorite Bricks",
+           rootMetaDesc: "Diorite Bricks Slab|meta|rot1|bot"
+         }),
+         ...(0, jW.bc)("Granite Slab", {
```

#### 727. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4229` → after: `L5176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5176) · [Before (L4229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4229)

```diff
-             translationKey: "item:leather"
+             translationKey: "item:graniteSlab"
```

#### 728. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4231-L4237` → after: `L5178-L5186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5178-L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5178-L5186) · [Before (L4231-L4237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4231-L4237)

```diff
-           type: "Item",
-           textureInfo: "leather",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         Saddle: {
+           ttb: 1200,
+           textureInfo: ["slab_stone_granite_side", "stone_granite"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           model: "Slab",
+           harvestType: "rock",
+           slabFullBlock: "Granite",
+           rootMetaDesc: "Granite Slab|meta|rot1|bot"
+         }),
+         ...(0, jW.bc)("Smooth Granite Slab", {
```

#### 729. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4239` → after: `L5188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5188) · [Before (L4239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4239)

```diff
-             translationKey: "item:saddle"
+             translationKey: "item:smoothGraniteSlab"
```

#### 730. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4241-L4247` → after: `L5190-L5198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5190-L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5190-L5198) · [Before (L4241-L4247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4241-L4247)

```diff
-           type: "Item",
-           textureInfo: "saddle",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1
-         },
-         "Spirit Saddle": {
+           ttb: 1200,
+           textureInfo: ["slab_stone_granite_smooth_side", "stone_granite_smooth"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           model: "Slab",
+           harvestType: "rock",
+           slabFullBlock: "Smooth Granite",
+           rootMetaDesc: "Smooth Granite Slab|meta|rot1|bot"
+         }),
+         ...(0, jW.bc)("Engraved Granite Slab", {
```

#### 731. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4249` → after: `L5200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5200) · [Before (L4249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4249)

```diff
-             translationKey: "item:spiritSaddle"
+             translationKey: "item:engravedGraniteSlab"
```

#### 732. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4251-L4260` → after: `L5202-L5210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5202-L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5202-L5210) · [Before (L4251-L4260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4251-L4260)

```diff
-           type: "Item",
-           textureInfo: "spirit_saddle",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:spiritSaddleDescription"
-           }
-         },
-         Fur: {
+           ttb: 1200,
+           textureInfo: ["slab_engraved_granite_side", "engraved_granite"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           model: "Slab",
+           harvestType: "rock",
+           slabFullBlock: "Engraved Granite",
+           rootMetaDesc: "Engraved Granite Slab|meta|rot1|bot"
+         }),
+         ...(0, jW.bc)("Granite Bricks Slab", {
```

#### 733. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4262` → after: `L5212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5212) · [Before (L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4262)

```diff
-             translationKey: "item:fur"
+             translationKey: "item:graniteBricksSlab"
```

#### 734. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4264-L4273` → after: `L5214-L5222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5214-L5222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5214-L5222) · [Before (L4264-L4273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4264-L4273)

```diff
-           type: "Item",
-           textureInfo: "fur",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:furDescription"
-           }
-         },
-         "Golem Eye": {
+           ttb: 1200,
+           textureInfo: ["slab_granite_brick_side", "granite_brick"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           model: "Slab",
+           harvestType: "rock",
+           slabFullBlock: "Granite Bricks",
+           rootMetaDesc: "Granite Bricks Slab|meta|rot1|bot"
+         }),
+         ...(0, jW.bc)("Sandstone Slab", {
```

#### 735. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4275` → after: `L5224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5224) · [Before (L4275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4275)

```diff
-             translationKey: "item:golemEye"
+             translationKey: "item:sandstoneSlab"
```

#### 736. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4277-L4286` → after: `L5226-L5234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5226-L5234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5226-L5234) · [Before (L4277-L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4277-L4286)

```diff
-           type: "Item",
-           textureInfo: "golem_eye",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:golemEyeDescription"
-           }
-         },
-         "Knight Heart": {
+           ttb: 640,
+           textureInfo: ["slab_sandstone_normal_side", "sandstone_normal"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           model: "Slab",
+           harvestType: "rock",
+           slabFullBlock: "Sandstone",
+           rootMetaDesc: "Sandstone Slab|meta|rot1|bot"
+         }),
+         ...(0, jW.bc)("Smooth Sandstone Slab", {
```

#### 737. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4288` → after: `L5236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5236) · [Before (L4288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4288)

```diff
-             translationKey: "item:knightHeart"
+             translationKey: "item:smoothSandstoneSlab"
```

#### 738. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4290-L4380` → after: `L5238-L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5238-L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5238-L5245) · [Before (L4290-L4380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4290-L4380)

```diff
-           type: "Item",
-           textureInfo: "knight_heart",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:knightHeartDescription"
-           }
-         },
-         "Teleport Heart": {
-           displayName: "Teleport Heart",
-           type: "Item",
-           textureInfo: "teleport_heart",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
- ... (75 more removed lines; see GitHub link above)
+           ttb: 640,
+           textureInfo: "sandstone_top",
+           model: "Slab",
+           harvestType: "rock",
+           slabFullBlock: "Smooth Sandstone",
+           rootMetaDesc: "Smooth Sandstone Slab|meta|rot1|bot"
+         }),
+         ...(0, jW.bc)("Engraved Sandstone Slab", {
```

#### 739. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4382` → after: `L5247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5247) · [Before (L4382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4382)

```diff
-             translationKey: "item:nameTag"
+             translationKey: "item:engravedSandstoneSlab"
```

#### 740. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4384-L4393` → after: `L5249-L5257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5249-L5257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5249-L5257) · [Before (L4384-L4393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4384-L4393)

```diff
-           type: "Item",
-           textureInfo: "name_tag",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:nameTagDescription"
-           }
-         },
-         Book: {
+           ttb: 640,
+           textureInfo: ["slab_chiseled_sandstone_side", "chiseled_sandstone"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           model: "Slab",
+           harvestType: "rock",
+           slabFullBlock: "Engraved Sandstone",
+           rootMetaDesc: "Engraved Sandstone Slab|meta|rot1|bot"
+         }),
+         ...(0, jW.bc)("Marked Sandstone Slab", {
```

#### 741. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4395` → after: `L5259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5259) · [Before (L4395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4395)

```diff
-             translationKey: "item:book"
+             translationKey: "item:markedSandstoneSlab"
```

#### 742. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4397-L4406` → after: `L5261-L5269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5261-L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5261-L5269) · [Before (L4397-L4406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4397-L4406)

```diff
-           type: "Item",
-           textureInfo: "book",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:bookDescription"
-           }
-         },
-         "Empty Bottle": {
+           ttb: 640,
+           textureInfo: ["slab_cut_sandstone_side", "cut_sandstone"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           model: "Slab",
+           harvestType: "rock",
+           slabFullBlock: "Marked Sandstone",
+           rootMetaDesc: "Marked Sandstone Slab|meta|rot1|bot"
+         }),
+         ...(0, jW.bc)("Sandstone Bricks Slab", {
```

#### 743. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4408` → after: `L5271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5271) · [Before (L4408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4408)

```diff
-             translationKey: "item:emptyBottle"
+             translationKey: "item:sandstoneBricksSlab"
```

#### 744. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4410-L4419` → after: `L5273-L5281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5273-L5281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5273-L5281) · [Before (L4410-L4419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4410-L4419)

```diff
-           type: "Item",
-           textureInfo: "empty_bottle",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:emptyBottleDescription"
-           }
-         },
-         "Water Bottle": {
+           ttb: 640,
+           textureInfo: ["slab_sandstone_brick_side", "sandstone_brick"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           model: "Slab",
+           harvestType: "rock",
+           slabFullBlock: "Sandstone Bricks",
+           rootMetaDesc: "Sandstone Bricks Slab|meta|rot1|bot"
+         }),
+         ...(0, jW.bc)("Red Sandstone Slab", {
```

#### 745. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4421` → after: `L5283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5283) · [Before (L4421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4421)

```diff
-             translationKey: "item:waterBottle"
+             translationKey: "item:redSandstoneSlab"
```

#### 746. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4423-L4432` → after: `L5285-L5295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5285-L5295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5285-L5295) · [Before (L4423-L4432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4423-L4432)

```diff
-           type: "Chargeable",
-           textureInfo: "water_bottle",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
-           description: {
-             translationKey: "item:waterBottleDescription"
+           ttb: 640,
+           textureInfo: ["slab_red_sandstone_side", "red_sandstone"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           model: "Slab",
+           harvestType: "rock",
+           slabFullBlock: "Red Sandstone",
+           rootMetaDesc: "Red Sandstone Slab|meta|rot1|bot"
+         }),
+         ...(0, jW.bc)("Smooth Red Sandstone Slab", {
+           displayName: {
+             translationKey: "item:smoothRedSandstoneSlab"
```

#### 747. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4434-L4438` → after: `L5297-L5304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5297-L5304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5297-L5304) · [Before (L4434-L4438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4434-L4438)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Water Bottle|meta|charging1"
-         },
-         "Slowness Potion": {
+           ttb: 640,
+           textureInfo: "red_sandstone_top",
+           model: "Slab",
+           harvestType: "rock",
+           slabFullBlock: "Smooth Red Sandstone",
+           rootMetaDesc: "Smooth Red Sandstone Slab|meta|rot1|bot"
+         }),
+         ...(0, jW.bc)("Engraved Red Sandstone Slab", {
```

#### 748. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4440` → after: `L5306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5306) · [Before (L4440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4440)

```diff
-             translationKey: "item:slownessPotion"
+             translationKey: "item:engravedRedSandstoneSlab"
```

#### 749. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4442-L4451` → after: `L5308-L5318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5308-L5318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5308-L5318) · [Before (L4442-L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4442-L4451)

```diff
-           type: "Chargeable",
-           textureInfo: "slowness_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           stackable: !1,
-           afterEatenItem: "Empty Bottle",
-           description: {
-             translationKey: "item:slownessPotionDescription"
+           ttb: 640,
+           textureInfo: ["slab_chiseled_red_sandstone_side", "chiseled_red_sandstone"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           model: "Slab",
+           harvestType: "rock",
+           slabFullBlock: "Engraved Red Sandstone",
+           rootMetaDesc: "Engraved Red Sandstone Slab|meta|rot1|bot"
+         }),
+         ...(0, jW.bc)("Marked Red Sandstone Slab", {
+           displayName: {
+             translationKey: "item:markedRedSandstoneSlab"
```

#### 750. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4453-L4457` → after: `L5320-L5328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5320-L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5320-L5328) · [Before (L4453-L4457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4453-L4457)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Slowness Potion|meta|charging1"
-         },
-         "Slowness Potion II": {
+           ttb: 640,
+           textureInfo: ["slab_cut_red_sandstone_side", "cut_red_sandstone"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           model: "Slab",
+           harvestType: "rock",
+           slabFullBlock: "Marked Red Sandstone",
+           rootMetaDesc: "Marked Red Sandstone Slab|meta|rot1|bot"
+         }),
+         ...(0, jW.bc)("Red Sandstone Bricks Slab", {
```

#### 751. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4459` → after: `L5330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5330) · [Before (L4459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4459)

```diff
-             translationKey: "item:slownessPotionII"
+             translationKey: "item:redSandstoneBricksSlab"
```

#### 752. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4461-L4471` → after: `L5332-L5342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5332-L5342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5332-L5342) · [Before (L4461-L4471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4461-L4471)

```diff
-           type: "Chargeable",
-           textureInfo: "slowness_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Slowness Potion",
-           eatable: !0,
-           chargeSound: "drink",
-           stackable: !1,
-           afterEatenItem: "Empty Bottle",
-           description: {
-             translationKey: "item:slownessPotionDescription"
+           ttb: 640,
+           textureInfo: ["slab_red_sandstone_brick_side", "red_sandstone_brick"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           model: "Slab",
+           harvestType: "rock",
+           slabFullBlock: "Red Sandstone Bricks",
+           rootMetaDesc: "Red Sandstone Bricks Slab|meta|rot1|bot"
+         }),
+         ...(0, jW.bc)("Bricks Slab", {
+           displayName: {
+             translationKey: "item:bricksSlab"
```

#### 753. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4473-L4475` → after: `L5344-L5418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5344-L5418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5344-L5418) · [Before (L4473-L4475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4473-L4475)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Slowness Potion II|meta|charging1"
+           ttb: 1600,
+           textureInfo: ["slab_brick_side", "brick"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           model: "Slab",
+           harvestType: "rock",
+           slabFullBlock: "Bricks",
+           rootMetaDesc: "Bricks Slab|meta|rot1|bot"
+         }),
+         ...(0, jW.bc)("Ice Bricks Slab", {
+           displayName: {
+             translationKey: "item:iceBricksSlab"
+           },
+           ttb: 1200,
+           textureInfo: ["slab_ice_brick_side", "ice_brick"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           model: "Slab",
+ ... (59 more added lines; see GitHub link above)
```

#### 754. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4477` → after: `L5420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5420) · [Before (L4477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4477)

```diff
-         "Splash Slowness Potion": {
+         "Plum Block": {
```

#### 755. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4479-L4487` → after: `L5422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5422) · [Before (L4479-L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4479-L4487)

```diff
-             translationKey: "item:splashSlownessPotion"
-           },
-           type: "Item",
-           textureInfo: "splash_slowness_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashSlownessPotionDescription"
+             translationKey: "item:plumBlock"
```

#### 756. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4489` → after: `L5424-L5427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5424-L5427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5424-L5427) · [Before (L4489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4489)

```diff
-           rootMetaDesc: "Splash Slowness Potion|meta|charging1"
+           ttb: 600,
+           textureInfo: ["plum_block_side", "plum_block_top", "plum_block_bottom"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "wood"
```

#### 757. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4491` → after: `L5429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5429) · [Before (L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4491)

```diff
-         "Splash Slowness Potion II": {
+         "Coconut Block": {
```

#### 758. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4493-L4502` → after: `L5431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5431) · [Before (L4493-L4502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4493-L4502)

```diff
-             translationKey: "item:splashSlownessPotionII"
-           },
-           type: "Item",
-           textureInfo: "splash_slowness_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Slowness Potion",
-           stackable: !1,
-           description: {
-             translationKey: "item:splashSlownessPotionDescription"
+             translationKey: "item:coconutBlock"
```

#### 759. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4504` → after: `L5433-L5436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5433-L5436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5433-L5436) · [Before (L4504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4504)

```diff
-           rootMetaDesc: "Splash Slowness Potion II|meta|charging1"
+           ttb: 600,
+           textureInfo: ["coconut_block_side", "coconut_block_top", "coconut_block_bottom"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "wood"
```

#### 760. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4506` → after: `L5438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5438) · [Before (L4506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4506)

```diff
-         "Arrow of Slowness": {
+         "Pear Log": {
```

#### 761. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4508` → after: `L5440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5440) · [Before (L4508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4508)

```diff
-             translationKey: "item:arrowOfSlowness"
+             translationKey: "item:pearLog"
```

#### 762. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4510-L4515` → after: `L5442-L5444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5442-L5444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5442-L5444) · [Before (L4510-L4515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4510-L4515)

```diff
-           type: "Item",
-           textureInfo: "slowness_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 2400,
+           textureInfo: "log_pear",
+           harvestType: "wood"
```

#### 763. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4517` → after: `L5446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5446) · [Before (L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4517)

```diff
-         "Poison Potion": {
+         "Pear Wood Planks": {
```

#### 764. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4519-L4530` → after: `L5448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5448) · [Before (L4519-L4530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4519-L4530)

```diff
-             translationKey: "item:poisonPotion"
-           },
-           type: "Chargeable",
-           textureInfo: "poison",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           stackable: !1,
-           afterEatenItem: "Empty Bottle",
-           description: {
-             translationKey: "item:poisonPotionDescription"
+             translationKey: "item:pearWoodPlanks"
```

#### 765. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4532-L4534` → after: `L5450-L5452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5450-L5452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5450-L5452) · [Before (L4532-L4534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4532-L4534)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Poison Potion|meta|charging1"
+           ttb: 1800,
+           textureInfo: "planks_pear",
+           harvestType: "wood"
```

#### 766. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4536` → after: `L5454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5454) · [Before (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4536)

```diff
-         "Poison Potion II": {
+         "Pear Leaves": {
```

#### 767. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4538` → after: `L5456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5456) · [Before (L4538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4538)

```diff
-             translationKey: "item:poisonPotionII"
+             translationKey: "item:pearLeaves"
```

#### 768. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4540-L4554` → after: `L5458-L5460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5458-L5460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5458-L5460) · [Before (L4540-L4554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4540-L4554)

```diff
-           type: "Chargeable",
-           textureInfo: "poison",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Poison Potion",
-           eatable: !0,
-           chargeSound: "drink",
-           stackable: !1,
-           afterEatenItem: "Empty Bottle",
-           description: {
-             translationKey: "item:poisonPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Poison Potion II|meta|charging1"
+           ttb: 350,
+           textureInfo: "leaves_pear",
+           harvestType: "cuttable"
```

#### 769. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4556` → after: `L5462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5462) · [Before (L4556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4556)

```diff
-         "Splash Poison Potion": {
+         "Pear Door": {
```

#### 770. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4558-L4566` → after: `L5464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5464) · [Before (L4558-L4566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4558-L4566)

```diff
-             translationKey: "item:splashPoisonPotion"
-           },
-           type: "Item",
-           textureInfo: "splash_poison",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashPoisonPotionDescription"
+             translationKey: "item:pearDoor"
```

#### 771. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4568` → after: `L5466-L5496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5466-L5496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5466-L5496) · [Before (L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4568)

```diff
-           rootMetaDesc: "Splash Poison Potion|meta|charging1"
+           ttb: 3600,
+           itemTexture: "pear_door",
+           model: "door",
+           harvestType: "wood",
+           rootMetaDesc: "Pear Door|meta|rot1|closed",
+           particlesIgnoreBlack: !0,
+           blockModel: "Pear Door"
+         },
+         "Pear Door|meta|rot1|open": {
+           ttb: 3600,
+           harvestType: "wood"
+         },
+         "Pear Door|meta|rot2|closed": {
+           ttb: 3600,
+           harvestType: "wood"
+         },
+ ... (15 more added lines; see GitHub link above)
```

#### 772. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4570` → after: `L5498-L5627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5498-L5627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5498-L5627) · [Before (L4570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4570)

```diff
-         "Splash Poison Potion II": {
+         "Pear Door|meta|rot4|open": {
+           ttb: 3600,
+           harvestType: "wood"
+         },
+         "_Pear Door Top": {
+           ttb: 3600,
+           itemTexture: "pear_door",
+           harvestType: "wood",
+           model: "door",
+           drops: "Pear Door",
+           rootMetaDesc: "_Pear Door Top|meta|rot1|closed",
+           particlesIgnoreBlack: !0,
+           blockModel: "_Pear Door Top"
+         },
+         "_Pear Door Top|meta|rot1|open": {
+           ttb: 3600,
+ ... (114 more added lines; see GitHub link above)
```

#### 773. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4572-L4581` → after: `L5629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5629) · [Before (L4572-L4581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4572-L4581)

```diff
-             translationKey: "item:splashPoisonPotionII"
-           },
-           type: "Item",
-           textureInfo: "splash_poison",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Poison Potion",
-           stackable: !1,
-           description: {
-             translationKey: "item:splashPoisonPotionDescription"
+             translationKey: "item:pearBlock"
```

#### 774. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4583` → after: `L5631-L5634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5631-L5634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5631-L5634) · [Before (L4583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4583)

```diff
-           rootMetaDesc: "Splash Poison Potion II|meta|charging1"
+           ttb: 600,
+           textureInfo: ["pear_block_side", "pear_block_top", "pear_block_bottom"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "wood"
```

#### 775. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4585` → after: `L5636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5636) · [Before (L4585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4585)

```diff
-         "Arrow of Poison": {
+         "Compressed Messy Stone": {
```

#### 776. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4587` → after: `L5638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5638) · [Before (L4587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4587)

```diff
-             translationKey: "item:arrowOfPoison"
+             translationKey: "item:compressedMessyStone"
```

#### 777. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4589-L4594` → after: `L5640-L5642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5640-L5642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5640-L5642) · [Before (L4589-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4589-L4594)

```diff
-           type: "Item",
-           textureInfo: "poison_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 12e3,
+           textureInfo: "compressed_messy_stone",
+           harvestType: "rock"
```

#### 778. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4596` → after: `L5644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5644) · [Before (L4596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4596)

```diff
-         "Weakness Potion": {
+         "Extra Compressed Messy Stone": {
```

#### 779. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4598-L4609` → after: `L5646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5646) · [Before (L4598-L4609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4598-L4609)

```diff
-             translationKey: "item:weaknessPotion"
-           },
-           type: "Chargeable",
-           textureInfo: "weakness_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           stackable: !1,
-           afterEatenItem: "Empty Bottle",
-           description: {
-             translationKey: "item:weaknessPotionDescription"
+             translationKey: "item:extraCompressedMessyStone"
```

#### 780. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4611-L4613` → after: `L5648-L5650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5648-L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5648-L5650) · [Before (L4611-L4613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4611-L4613)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Weakness Potion|meta|charging1"
+           ttb: 24e3,
+           textureInfo: "extra_compressed_messy_stone",
+           harvestType: "rock"
```

#### 781. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4615` → after: `L5652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5652) · [Before (L4615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4615)

```diff
-         "Weakness Potion II": {
+         "Super Compressed Messy Stone": {
```

#### 782. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4617` → after: `L5654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5654) · [Before (L4617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4617)

```diff
-             translationKey: "item:weaknessPotionII"
+             translationKey: "item:superCompressedMessyStone"
```

#### 783. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4619-L4633` → after: `L5656-L5658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5656-L5658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5656-L5658) · [Before (L4619-L4633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4619-L4633)

```diff
-           type: "Chargeable",
-           textureInfo: "weakness_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Weakness Potion",
-           eatable: !0,
-           chargeSound: "drink",
-           stackable: !1,
-           afterEatenItem: "Empty Bottle",
-           description: {
-             translationKey: "item:weaknessPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Weakness Potion II|meta|charging1"
+           ttb: 36e3,
+           textureInfo: "super_compressed_messy_stone",
+           harvestType: "rock"
```

#### 784. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4635` → after: `L5660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5660) · [Before (L4635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4635)

```diff
-         "Splash Weakness Potion": {
+         "Hyper Compressed Messy Stone": {
```

#### 785. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4637` → after: `L5662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5662) · [Before (L4637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4637)

```diff
-             translationKey: "item:splashWeaknessPotion"
+             translationKey: "item:hyperCompressedMessyStone"
```

#### 786. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4639-L4646` → after: `L5664-L5666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5664-L5666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5664-L5666) · [Before (L4639-L4646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4639-L4646)

```diff
-           type: "Item",
-           textureInfo: "splash_weakness_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashWeaknessPotionDescription"
-           }
+           ttb: 48e3,
+           textureInfo: "hyper_compressed_messy_stone",
+           harvestType: "rock"
```

#### 787. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4648` → after: `L5668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5668) · [Before (L4648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4648)

```diff
-         "Splash Weakness Potion II": {
+         "Ultra Compressed Messy Stone": {
```

#### 788. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4650` → after: `L5670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5670) · [Before (L4650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4650)

```diff
-             translationKey: "item:splashWeaknessPotionII"
+             translationKey: "item:ultraCompressedMessyStone"
```

#### 789. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4652-L4660` → after: `L5672-L5674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5672-L5674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5672-L5674) · [Before (L4652-L4660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4652-L4660)

```diff
-           type: "Item",
-           textureInfo: "splash_weakness_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Weakness Potion",
-           stackable: !1,
-           description: {
-             translationKey: "item:splashWeaknessPotionDescription"
-           }
+           ttb: 6e4,
+           textureInfo: "ultra_compressed_messy_stone",
+           harvestType: "rock"
```

#### 790. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4662` → after: `L5676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5676) · [Before (L4662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4662)

```diff
-         "Arrow of Weakness": {
+         "Mega Compressed Messy Stone": {
```

#### 791. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4664` → after: `L5678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5678) · [Before (L4664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4664)

```diff
-             translationKey: "item:arrowOfWeakness"
+             translationKey: "item:megaCompressedMessyStone"
```

#### 792. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4666-L4671` → after: `L5680-L5682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5680-L5682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5680-L5682) · [Before (L4666-L4671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4666-L4671)

```diff
-           type: "Item",
-           textureInfo: "weakness_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 72e3,
+           textureInfo: "mega_compressed_messy_stone",
+           harvestType: "rock"
```

#### 793. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4673` → after: `L5684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5684) · [Before (L4673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4673)

```diff
-         "Instant Damage Potion": {
+         ...(0, jW.Xb)("Board", {
```

#### 794. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4675-L4686` → after: `L5686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5686) · [Before (L4675-L4686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4675-L4686)

```diff
-             translationKey: "item:instantDamagePotion"
-           },
-           type: "Chargeable",
-           textureInfo: "instant_damage_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           stackable: !1,
-           afterEatenItem: "Empty Bottle",
-           description: {
-             translationKey: "item:instantDamagePotionDescription"
+             translationKey: "item:board"
```

#### 795. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4688-L4692` → after: `L5688-L5698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5688-L5698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5688-L5698) · [Before (L4688-L4692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4688-L4692)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Instant Damage Potion|meta|charging1"
-         },
-         "Instant Damage Potion II": {
+           ttb: 1200,
+           itemTexture: "board",
+           model: "rotatableOffset",
+           harvestType: "wood",
+           solid: !1,
+           rootMetaDesc: "Board|meta|rot1",
+           particlesIgnoreBlack: !0,
+           modelScale: .8,
+           blockModel: "Board"
+         }),
+         Net: {
```

#### 796. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4694` → after: `L5700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5700) · [Before (L4694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4694)

```diff
-             translationKey: "item:instantDamagePotionII"
+             translationKey: "item:net"
```

#### 797. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4696-L4698` → after: `L5702-L5704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5702-L5704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5702-L5704) · [Before (L4696-L4698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4696-L4698)

```diff
-           type: "Chargeable",
-           textureInfo: "instant_damage_potion",
-           weight: 1,
+           ttb: 400,
+           textureInfo: "net",
+           model: "CentreCross",
```

#### 798. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4700-L4704` → after: `L5706-L5707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5706-L5707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5706-L5707) · [Before (L4700-L4704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4700-L4704)

```diff
-           heldItemGlb: "Instant Damage Potion",
-           eatable: !0,
-           chargeSound: "drink",
-           stackable: !1,
-           afterEatenItem: "Empty Bottle",
+           solid: !1,
+           harvestType: "wood",
```

#### 799. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4706` → after: `L5709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5709) · [Before (L4706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4706)

```diff
-             translationKey: "item:instantDamagePotionDescription"
+             translationKey: "item:netDescription"
```

#### 800. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4708-L4710` → after: `L5711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5711) · [Before (L4708-L4710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4708-L4710)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Instant Damage Potion II|meta|charging1"
+           itemTexture: "net"
```

#### 801. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4712` → after: `L5713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5713) · [Before (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4712)

```diff
-         "Splash Instant Damage Potion": {
+         Cobweb: {
```

#### 802. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4714` → after: `L5715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5715) · [Before (L4714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4714)

```diff
-             translationKey: "item:splashInstantDamagePotion"
+             translationKey: "item:cobweb"
```

#### 803. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4716-L4718` → after: `L5717-L5719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5717-L5719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5717-L5719) · [Before (L4716-L4718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4716-L4718)

```diff
-           type: "Item",
-           textureInfo: "splash_instant_damage_potion",
-           weight: 1,
+           ttb: 300,
+           textureInfo: "cobweb",
+           model: "CentreCross",
```

#### 804. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4720` → after: `L5721-L5722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5721-L5722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5721-L5722) · [Before (L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4720)

```diff
-           stackable: !1,
+           solid: !1,
+           harvestType: "cuttable",
```

#### 805. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4722-L4723` → after: `L5724-L5726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5724-L5726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5724-L5726) · [Before (L4722-L4723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4722-L4723)

```diff
-             translationKey: "item:splashInstantDamagePotionDescription"
-           }
+             translationKey: "item:cobwebDescription"
+           },
+           itemTexture: "cobweb"
```

#### 806. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4725` → after: `L5728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5728) · [Before (L4725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4725)

```diff
-         "Splash Instant Damage Potion II": {
+         "Brown Mushroom Block": {
```

#### 807. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4727` → after: `L5730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5730) · [Before (L4727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4727)

```diff
-             translationKey: "item:splashInstantDamagePotionII"
+             translationKey: "item:brownMushroomBlock"
```

#### 808. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4729-L4737` → after: `L5732-L5734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5732-L5734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5732-L5734) · [Before (L4729-L4737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4729-L4737)

```diff
-           type: "Item",
-           textureInfo: "splash_instant_damage_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Instant Damage Potion",
-           stackable: !1,
-           description: {
-             translationKey: "item:splashInstantDamagePotionDescription"
-           }
+           ttb: 1200,
+           textureInfo: "brown_mushroom_block",
+           harvestType: "cuttable"
```

#### 809. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4739` → after: `L5736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5736) · [Before (L4739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4739)

```diff
-         "Arrow of Instant Damage": {
+         "Red Mushroom Block": {
```

#### 810. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4741` → after: `L5738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5738) · [Before (L4741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4741)

```diff
-             translationKey: "item:arrowOfInstantDamage"
+             translationKey: "item:redMushroomBlock"
```

#### 811. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4743-L4748` → after: `L5740-L5742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5740-L5742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5740-L5742) · [Before (L4743-L4748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4743-L4748)

```diff
-           type: "Item",
-           textureInfo: "instant_damage_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 1200,
+           textureInfo: "red_mushroom_block",
+           harvestType: "cuttable"
```

#### 812. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4750` → after: `L5744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5744) · [Before (L4750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4750)

```diff
-         "Milk Potion": {
+         "Mushroom Stem": {
```

#### 813. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4752-L4763` → after: `L5746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5746) · [Before (L4752-L4763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4752-L4763)

```diff
-             translationKey: "item:milkPotion"
-           },
-           type: "Chargeable",
-           textureInfo: "milk_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           stackable: !1,
-           afterEatenItem: "Empty Bottle",
-           description: {
-             translationKey: "item:milkPotionDescription"
+             translationKey: "item:mushroomStem"
```

#### 814. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4765-L4767` → after: `L5748-L5750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5748-L5750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5748-L5750) · [Before (L4765-L4767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4765-L4767)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Milk Potion|meta|charging1"
+           ttb: 1200,
+           textureInfo: "mushroom_stem",
+           harvestType: "cuttable"
```

#### 815. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4769` → after: `L5752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5752) · [Before (L4769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4769)

```diff
-         "Splash Milk Potion": {
+         "Fireball Block": {
```

#### 816. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4771` → after: `L5754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5754) · [Before (L4771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4771)

```diff
-             translationKey: "item:splashMilkPotion"
+             translationKey: "item:fireballBlock"
```

#### 817. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4773-L4780` → after: `L5756-L5759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5756-L5759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5756-L5759) · [Before (L4773-L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4773-L4780)

```diff
-           type: "Item",
-           textureInfo: "splash_milk_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:milkPotionDescription"
-           }
+           ttb: 1,
+           textureInfo: "fireball_block",
+           harvestType: "rock",
+           unlitStandaloneMesh: !0
```

#### 818. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4782` → after: `L5761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5761) · [Before (L4782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4782)

```diff
-         "Arrow of Milk": {
+         "Iceball Block": {
```

#### 819. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4784` → after: `L5763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5763) · [Before (L4784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4784)

```diff
-             translationKey: "item:arrowOfMilk"
+             translationKey: "item:iceballBlock"
```

#### 820. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4786-L4791` → after: `L5765-L5768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5765-L5768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5765-L5768) · [Before (L4786-L4791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4786-L4791)

```diff
-           type: "Item",
-           textureInfo: "milk_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 1,
+           textureInfo: "iceball_block",
+           harvestType: "rock",
+           unlitStandaloneMesh: !0
```

#### 821. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4793` → after: `L5770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5770) · [Before (L4793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4793)

```diff
-         "Speed Potion": {
+         "Watermelon Seeds": {
```

#### 822. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4795` → after: `L5772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5772) · [Before (L4795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4795)

```diff
-             translationKey: "item:speedPotion"
+             translationKey: "item:watermelonSeeds"
```

#### 823. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4797-L4804` → after: `L5774-L5779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5774-L5779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5774-L5779) · [Before (L4797-L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4797-L4804)

```diff
-           type: "Chargeable",
-           textureInfo: "speed_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           stackable: !1,
-           afterEatenItem: "Empty Bottle",
+           ttb: 400,
+           textureInfo: "melon_stem",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           itemTexture: "watermelon_seeds",
```

#### 824. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4806-L4810` → after: `L5781-L5782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5781-L5782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5781-L5782) · [Before (L4806-L4810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4806-L4810)

```diff
-             translationKey: "item:speedPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Speed Potion|meta|charging1"
+             translationKey: "item:watermelonSeedsDescription"
+           }
```

#### 825. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4812` → after: `L5784-L5814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5784-L5814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5784-L5814) · [Before (L4812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4812)

```diff
-         "Speed Potion II": {
+         "Watermelon Seeds|Growing": {
+           ttb: 400,
+           textureInfo: "melon_stem",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: "Watermelon Seeds"
+         },
+         ...(0, jW.Xb)("Attached Watermelon Stem", {
+           displayName: {
+             translationKey: "item:attachedWatermelonStem"
+           },
+           ttb: 400,
+           textureInfo: ["attached_melon_stem_wrapper", "attached_melon_stem"],
+           model: "CustomPlanes|rotatable",
+           solid: !1,
+ ... (15 more added lines; see GitHub link above)
```

#### 826. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4814` → after: `L5816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5816) · [Before (L4814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4814)

```diff
-             translationKey: "item:speedPotionII"
+             translationKey: "item:pumpkinSeeds"
```

#### 827. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4816-L4824` → after: `L5818-L5823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5818-L5823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5818-L5823) · [Before (L4816-L4824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4816-L4824)

```diff
-           type: "Chargeable",
-           textureInfo: "speed_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Speed Potion",
-           eatable: !0,
-           chargeSound: "drink",
-           stackable: !1,
-           afterEatenItem: "Empty Bottle",
+           ttb: 400,
+           textureInfo: "melon_stem",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           itemTexture: "pumpkin_seeds",
```

#### 828. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4826-L4830` → after: `L5825-L5826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5825-L5826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5825-L5826) · [Before (L4826-L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4826-L4830)

```diff
-             translationKey: "item:speedPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Speed Potion II|meta|charging1"
+             translationKey: "item:pumpkinSeedsDescription"
+           }
```

#### 829. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4832` → after: `L5828-L5858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5828-L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5828-L5858) · [Before (L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4832)

```diff
-         "Splash Speed Potion": {
+         "Pumpkin Seeds|Growing": {
+           ttb: 400,
+           textureInfo: "melon_stem",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: "Pumpkin Seeds"
+         },
+         ...(0, jW.Xb)("Attached Pumpkin Stem", {
+           displayName: {
+             translationKey: "item:attachedPumpkinStem"
+           },
+           ttb: 400,
+           textureInfo: ["attached_melon_stem_wrapper", "attached_melon_stem"],
+           model: "CustomPlanes|rotatable",
+           solid: !1,
+ ... (15 more added lines; see GitHub link above)
```

#### 830. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4834-L4842` → after: `L5860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5860) · [Before (L4834-L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4834-L4842)

```diff
-             translationKey: "item:splashSpeedPotion"
-           },
-           type: "Item",
-           textureInfo: "splash_speed_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashSpeedPotionDescription"
+             translationKey: "item:pumpkin"
```

#### 831. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4844` → after: `L5862-L5865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5862-L5865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5862-L5865) · [Before (L4844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4844)

```diff
-           rootMetaDesc: "Splash Speed Potion|meta|charging1"
+           ttb: 1200,
+           textureInfo: ["pumpkin_side", "pumpkin_top"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           harvestType: "wood"
```

#### 832. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4846` → after: `L5867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5867) · [Before (L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4846)

```diff
-         "Splash Speed Potion II": {
+         ...(0, jW.Zb)("Carved Pumpkin", {
```

#### 833. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4848` → after: `L5869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5869) · [Before (L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4848)

```diff
-             translationKey: "item:splashSpeedPotionII"
+             translationKey: "item:carvedPumpkin"
```

#### 834. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4850-L4860` → after: `L5871-L5876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5871-L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5871-L5876) · [Before (L4850-L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4850-L4860)

```diff
-           type: "Item",
-           textureInfo: "splash_speed_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Speed Potion",
-           stackable: !1,
-           description: {
-             translationKey: "item:splashSpeedPotionDescription"
-           }
-         },
-         "Arrow of Speed": {
+           ttb: 1200,
+           textureInfo: ["carved_pumpkin", "pumpkin_side", "pumpkin_top"],
+           harvestType: "wood",
+           rootMetaDesc: "Carved Pumpkin|meta|rot1"
+         }),
+         ...(0, jW.Zb)("Jack o'Lantern", {
```

#### 835. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4862` → after: `L5878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5878) · [Before (L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4862)

```diff
-             translationKey: "item:arrowOfSpeed"
+             translationKey: "item:jackO'Lantern"
```

#### 836. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4864-L4871` → after: `L5880-L5886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5880-L5886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5880-L5886) · [Before (L4864-L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4864-L4871)

```diff
-           type: "Item",
-           textureInfo: "speed_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
-         },
-         "Defense Potion": {
+           ttb: 1200,
+           textureInfo: ["pumpkin_face_on", "pumpkin_side", "pumpkin_top"],
+           harvestType: "wood",
+           rootMetaDesc: "Jack o'Lantern|meta|rot1",
+           oA: [14, 10, 4]
+         }),
+         "Melon Seeds": {
```

#### 837. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4873` → after: `L5888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5888) · [Before (L4873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4873)

```diff
-             translationKey: "item:defensePotion"
+             translationKey: "item:melonSeeds"
```

#### 838. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4875-L4882` → after: `L5890-L5895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5890-L5895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5890-L5895) · [Before (L4875-L4882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4875-L4882)

```diff
-           type: "Chargeable",
-           textureInfo: "defense_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
+           ttb: 400,
+           textureInfo: "melon_stem",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           itemTexture: "melon_seeds",
```

#### 839. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4884-L4888` → after: `L5897-L5898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5897-L5898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5897-L5898) · [Before (L4884-L4888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4884-L4888)

```diff
-             translationKey: "item:defensePotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Defense Potion|meta|charging1"
+             translationKey: "item:melonSeedsDescription"
+           }
```

#### 840. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4890` → after: `L5900-L5930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5900-L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5900-L5930) · [Before (L4890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4890)

```diff
-         "Defense Potion II": {
+         "Melon Seeds|Growing": {
+           ttb: 400,
+           textureInfo: "melon_stem",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: "Melon Seeds"
+         },
+         ...(0, jW.Xb)("Attached Melon Stem", {
+           displayName: {
+             translationKey: "item:attachedMelonStem"
+           },
+           ttb: 400,
+           textureInfo: ["attached_melon_stem_wrapper", "attached_melon_stem"],
+           model: "CustomPlanes|rotatable",
+           solid: !1,
+ ... (15 more added lines; see GitHub link above)
```

#### 841. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4892` → after: `L5932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5932) · [Before (L4892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4892)

```diff
-             translationKey: "item:defensePotionII"
+             translationKey: "item:melon"
```

#### 842. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4894-L4904` → after: `L5934-L5941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5934-L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5934-L5941) · [Before (L4894-L4904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4894-L4904)

```diff
-           type: "Chargeable",
-           textureInfo: "defense_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Defense Potion",
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
-           description: {
-             translationKey: "item:defensePotionDescription"
+           ttb: 1200,
+           textureInfo: ["melon_side", "melon_top"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           harvestType: "wood"
+         },
+         "Iron Watermelon": {
+           displayName: {
+             translationKey: "item:ironWatermelon"
```

#### 843. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4906-L4908` → after: `L5943-L5946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5943-L5946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5943-L5946) · [Before (L4906-L4908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4906-L4908)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Defense Potion II|meta|charging1"
+           ttb: 1200,
+           textureInfo: ["iron_watermelon_side", "iron_watermelon_top"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           harvestType: "rock"
```

#### 844. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4910` → after: `L5948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5948) · [Before (L4910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4910)

```diff
-         "Splash Defense Potion": {
+         "Patterned Black Glass": {
```

#### 845. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4912` → after: `L5950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5950) · [Before (L4912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4912)

```diff
-             translationKey: "item:splashDefensePotion"
+             translationKey: "item:patternedBlackGlass"
```

#### 846. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4914-L4920` → after: `L5952-L5958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5952-L5958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5952-L5958) · [Before (L4914-L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4914-L4920)

```diff
-           type: "Item",
-           textureInfo: "splash_defense_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashDefensePotionDescription"
+           ttb: 450,
+           textureInfo: "patterned_glass_black",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
```

#### 847. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4923` → after: `L5961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5961) · [Before (L4923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4923)

```diff
-         "Splash Defense Potion II": {
+         "Patterned Blue Glass": {
```

#### 848. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4925` → after: `L5963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5963) · [Before (L4925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4925)

```diff
-             translationKey: "item:splashDefensePotionII"
+             translationKey: "item:patternedBlueGlass"
```

#### 849. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4927-L4934` → after: `L5965-L5971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5965-L5971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5965-L5971) · [Before (L4927-L4934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4927-L4934)

```diff
-           type: "Item",
-           textureInfo: "splash_defense_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Defense Potion",
-           stackable: !1,
-           description: {
-             translationKey: "item:splashDefensePotionDescription"
+           ttb: 450,
+           textureInfo: "patterned_glass_blue",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
```

#### 850. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4937` → after: `L5974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5974) · [Before (L4937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4937)

```diff
-         "Arrow of Defense": {
+         "Patterned Brown Glass": {
```

#### 851. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4939` → after: `L5976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5976) · [Before (L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4939)

```diff
-             translationKey: "item:arrowOfDefense"
+             translationKey: "item:patternedBrownGlass"
```

#### 852. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4941-L4946` → after: `L5978-L5985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5978-L5985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5978-L5985) · [Before (L4941-L4946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4941-L4946)

```diff
-           type: "Item",
-           textureInfo: "defense_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 450,
+           textureInfo: "patterned_glass_brown",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 853. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4948` → after: `L5987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5987) · [Before (L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4948)

```diff
-         "Strength Potion": {
+         "Patterned Cyan Glass": {
```

#### 854. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4950` → after: `L5989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5989) · [Before (L4950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4950)

```diff
-             translationKey: "item:strengthPotion"
+             translationKey: "item:patternedCyanGlass"
```

#### 855. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4952-L4965` → after: `L5991-L5998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR5991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L5991-L5998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L5991-L5998) · [Before (L4952-L4965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4952-L4965)

```diff
-           type: "Chargeable",
-           textureInfo: "strength_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
-           description: {
-             translationKey: "item:strengthPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Strength Potion|meta|charging1"
+           ttb: 450,
+           textureInfo: "patterned_glass_cyan",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 856. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4967` → after: `L6000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6000) · [Before (L4967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4967)

```diff
-         "Strength Potion II": {
+         "Patterned Gray Glass": {
```

#### 857. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4969` → after: `L6002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6002) · [Before (L4969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4969)

```diff
-             translationKey: "item:strengthPotionII"
+             translationKey: "item:patternedGrayGlass"
```

#### 858. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4971-L4985` → after: `L6004-L6011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6004-L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6004-L6011) · [Before (L4971-L4985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4971-L4985)

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
-           description: {
-             translationKey: "item:strengthPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Strength Potion II|meta|charging1"
+           ttb: 450,
+           textureInfo: "patterned_glass_gray",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 859. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4987` → after: `L6013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6013) · [Before (L4987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4987)

```diff
-         "Splash Strength Potion": {
+         "Patterned Light Gray Glass": {
```

#### 860. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4989` → after: `L6015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6015) · [Before (L4989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4989)

```diff
-             translationKey: "item:splashStrengthPotion"
+             translationKey: "item:patternedLightGrayGlass"
```

#### 861. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4991-L4997` → after: `L6017-L6023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6017-L6023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6017-L6023) · [Before (L4991-L4997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L4991-L4997)

```diff
-           type: "Item",
-           textureInfo: "splash_strength_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashStrengthPotionDescription"
+           ttb: 450,
+           textureInfo: "patterned_glass_light_gray",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
```

#### 862. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5000` → after: `L6026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6026) · [Before (L5000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5000)

```diff
-         "Splash Strength Potion II": {
+         "Patterned Green Glass": {
```

#### 863. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5002` → after: `L6028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6028) · [Before (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5002)

```diff
-             translationKey: "item:splashStrengthPotionII"
+             translationKey: "item:patternedGreenGlass"
```

#### 864. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5004-L5011` → after: `L6030-L6036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6030-L6036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6030-L6036) · [Before (L5004-L5011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5004-L5011)

```diff
-           type: "Item",
-           textureInfo: "splash_strength_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Strength Potion",
-           stackable: !1,
-           description: {
-             translationKey: "item:splashStrengthPotionDescription"
+           ttb: 450,
+           textureInfo: "patterned_glass_green",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
```

#### 865. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5014` → after: `L6039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6039) · [Before (L5014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5014)

```diff
-         "Arrow of Strength": {
+         "Patterned Light Blue Glass": {
```

#### 866. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5016` → after: `L6041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6041) · [Before (L5016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5016)

```diff
-             translationKey: "item:arrowOfStrength"
+             translationKey: "item:patternedLightBlueGlass"
```

#### 867. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5018-L5023` → after: `L6043-L6050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6043-L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6043-L6050) · [Before (L5018-L5023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5018-L5023)

```diff
-           type: "Item",
-           textureInfo: "strength_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 450,
+           textureInfo: "patterned_glass_light_blue",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 868. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5025` → after: `L6052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6052) · [Before (L5025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5025)

```diff
-         "Invisibility Potion": {
+         "Patterned Lime Glass": {
```

#### 869. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5027-L5038` → after: `L6054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6054) · [Before (L5027-L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5027-L5038)

```diff
-             translationKey: "item:invisibilityPotion"
-           },
-           type: "Chargeable",
-           textureInfo: "invisibility_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
-           description: {
-             translationKey: "item:invisibilityPotionDescription"
+             translationKey: "item:patternedLimeGlass"
```

#### 870. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5040-L5042` → after: `L6056-L6063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6056-L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6056-L6063) · [Before (L5040-L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5040-L5042)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Invisibility Potion|meta|charging1"
+           ttb: 450,
+           textureInfo: "patterned_glass_lime",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 871. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5044` → after: `L6065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6065) · [Before (L5044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5044)

```diff
-         "Splash Invisibility Potion": {
+         "Patterned Magenta Glass": {
```

#### 872. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5046` → after: `L6067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6067) · [Before (L5046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5046)

```diff
-             translationKey: "item:splashInvisibilityPotion"
+             translationKey: "item:patternedMagentaGlass"
```

#### 873. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5048-L5054` → after: `L6069-L6075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6069-L6075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6069-L6075) · [Before (L5048-L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5048-L5054)

```diff
-           type: "Item",
-           textureInfo: "splash_invisibility_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashInvisibilityPotionDescription"
+           ttb: 450,
+           textureInfo: "patterned_glass_magenta",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
```

#### 874. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5057` → after: `L6078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6078) · [Before (L5057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5057)

```diff
-         "Arrow of Invisibility": {
+         "Patterned Orange Glass": {
```

#### 875. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5059` → after: `L6080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6080) · [Before (L5059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5059)

```diff
-             translationKey: "item:arrowOfInvisibility"
+             translationKey: "item:patternedOrangeGlass"
```

#### 876. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5061-L5066` → after: `L6082-L6089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6082-L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6082-L6089) · [Before (L5061-L5066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5061-L5066)

```diff
-           type: "Item",
-           textureInfo: "invisibility_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 450,
+           textureInfo: "patterned_glass_orange",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 877. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5068` → after: `L6091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6091) · [Before (L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5068)

```diff
-         "Jump Potion": {
+         "Patterned Pink Glass": {
```

#### 878. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5070-L5081` → after: `L6093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6093) · [Before (L5070-L5081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5070-L5081)

```diff
-             translationKey: "item:jumpPotion"
-           },
-           type: "Chargeable",
-           textureInfo: "jump_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
-           description: {
-             translationKey: "item:jumpPotionDescription"
+             translationKey: "item:patternedPinkGlass"
```

#### 879. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5083-L5085` → after: `L6095-L6102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6095-L6102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6095-L6102) · [Before (L5083-L5085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5083-L5085)

```diff
-           chargeStages: 1,
-           chargeTime: 1e3,
-           rootMetaDesc: "Jump Potion|meta|charging1"
+           ttb: 450,
+           textureInfo: "patterned_glass_pink",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 880. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5087` → after: `L6104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6104) · [Before (L5087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5087)

```diff
-         "Jump Potion II": {
+         "Patterned Purple Glass": {
```

#### 881. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5089-L5101` → after: `L6106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6106) · [Before (L5089-L5101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5089-L5101)

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
+             translationKey: "item:patternedPurpleGlass"
```

#### 882. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5103-L5105` → after: `L6108-L6115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6108-L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6108-L6115) · [Before (L5103-L5105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5103-L5105)

```diff
-           chargeStages: 1,
-           chargeTime: 1e3,
-           rootMetaDesc: "Jump Potion II|meta|charging1"
+           ttb: 450,
+           textureInfo: "patterned_glass_purple",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 883. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5107` → after: `L6117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6117) · [Before (L5107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5107)

```diff
-         "Splash Jump Potion": {
+         "Patterned Red Glass": {
```

#### 884. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5109` → after: `L6119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6119) · [Before (L5109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5109)

```diff
-             translationKey: "item:splashJumpPotion"
+             translationKey: "item:patternedRedGlass"
```

#### 885. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5111-L5117` → after: `L6121-L6127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6121-L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6121-L6127) · [Before (L5111-L5117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5111-L5117)

```diff
-           type: "Item",
-           textureInfo: "splash_jump_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashJumpPotionDescription"
+           ttb: 450,
+           textureInfo: "patterned_glass_red",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
```

#### 886. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5120` → after: `L6130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6130) · [Before (L5120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5120)

```diff
-         "Splash Jump Potion II": {
+         "Patterned White Glass": {
```

#### 887. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5122` → after: `L6132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6132) · [Before (L5122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5122)

```diff
-             translationKey: "item:splashJumpPotionII"
+             translationKey: "item:patternedWhiteGlass"
```

#### 888. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5124-L5131` → after: `L6134-L6140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6134-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6134-L6140) · [Before (L5124-L5131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5124-L5131)

```diff
-           type: "Item",
-           textureInfo: "splash_jump_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Jump Potion",
-           stackable: !1,
-           description: {
-             translationKey: "item:splashJumpPotionDescription"
+           ttb: 450,
+           textureInfo: "patterned_glass_white",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
```

#### 889. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5134` → after: `L6143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6143) · [Before (L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5134)

```diff
-         "Arrow of Jumping": {
+         "Patterned Yellow Glass": {
```

#### 890. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5136` → after: `L6145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6145) · [Before (L5136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5136)

```diff
-             translationKey: "item:arrowOfJumping"
+             translationKey: "item:patternedYellowGlass"
```

#### 891. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5138-L5143` → after: `L6147-L6154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6147-L6154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6147-L6154) · [Before (L5138-L5143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5138-L5143)

```diff
-           type: "Item",
-           textureInfo: "jump_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 450,
+           textureInfo: "patterned_glass_yellow",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 892. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5145` → after: `L6156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6156) · [Before (L5145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5145)

```diff
-         "Knockback Potion": {
+         ...(0, jW.Xb)("Potion Table", {
```

#### 893. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5147` → after: `L6158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6158) · [Before (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5147)

```diff
-             translationKey: "item:knockbackPotion"
+             translationKey: "item:potionTable"
```

#### 894. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5149-L5156` → after: `L6160-L6162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6160-L6162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6160-L6162) · [Before (L5149-L5156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5149-L5156)

```diff
-           type: "Chargeable",
-           textureInfo: "knockback_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           stackable: !1,
-           afterEatenItem: "Empty Bottle",
+           ttb: 1200,
+           harvestType: "wood",
+           rootMetaDesc: "Potion Table|meta|rot1",
```

#### 895. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5158-L5166` → after: `L6164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6164) · [Before (L5158-L5166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5158-L5166)

```diff
-             translationKey: "item:knockbackPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Knockback Potion|meta|charging1"
-         },
-         "Splash Knockback Potion": {
-           displayName: {
-             translationKey: "item:splashKnockbackPotion"
+             translationKey: "item:potionTableDescription"
```

#### 896. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5168-L5177` → after: `L6166-L6564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6166-L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6166-L6564) · [Before (L5168-L5177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5168-L5177)

```diff
-           type: "Item",
-           textureInfo: "splash_knockback_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashKnockbackPotionDescription"
-           }
-         },
-         "Splash Knockback Potion II": {
+           ...SW("Potion Table", "potion_table", {
+             textureAnimation: {
+               frames: 4,
+               animationInterval: 200
+             }
+           })
+         }),
+         ...(0, jW.Xb)("Pine Ladder", {
+           displayName: {
+             translationKey: "item:pineLadder"
+           },
+           ttb: 1e3,
+           itemTexture: "ladder_pine",
+           model: "rotatableOffset",
+           harvestType: "wood",
+           rootMetaDesc: "Pine Ladder|meta|rot1",
+ ... (383 more added lines; see GitHub link above)
```

#### 897. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5179` → after: `L6566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6566) · [Before (L5179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5179)

```diff
-             translationKey: "item:splashKnockbackPotionII"
+             translationKey: "item:mailbox"
```

#### 898. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5181-L5186` → after: `L6568-L6572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6568-L6572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6568-L6572) · [Before (L5181-L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5181-L5186)

```diff
-           type: "Item",
-           textureInfo: "splash_knockback_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Knockback Potion",
-           stackable: !1,
+           ttb: 4200,
+           textureInfo: ["mailbox_front", "mailbox_side"],
+           texturePerSide: [1, 1, 1, 1, 0, 1],
+           harvestType: "wood",
+           rootMetaDesc: "Mailbox|meta|rot1|empty",
```

#### 899. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5188` → after: `L6574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6574) · [Before (L5188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5188)

```diff
-             translationKey: "item:splashKnockbackPotionDescription"
+             translationKey: "item:mailboxDescription"
```

#### 900. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5190-L5202` → after: `L6576-L6577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6576-L6577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6576-L6577) · [Before (L5190-L5202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5190-L5202)

```diff
-         },
-         "Arrow of Knockback": {
-           displayName: {
-             translationKey: "item:arrowOfKnockback"
-           },
-           type: "Item",
-           textureInfo: "knockback_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
-         },
-         "Regeneration Potion": {
+         }),
+         Rice: {
```

#### 901. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5204` → after: `L6579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6579) · [Before (L5204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5204)

```diff
-             translationKey: "item:regenerationPotion"
+             translationKey: "item:rice"
```

#### 902. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5206-L5213` → after: `L6581-L6586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6581-L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6581-L6586) · [Before (L5206-L5213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5206-L5213)

```diff
-           type: "Chargeable",
-           textureInfo: "regen_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
+           ttb: 400,
+           textureInfo: "rice_stage0",
+           model: "SquareSided",
+           solid: !1,
+           harvestType: "cuttable",
+           itemTexture: "rice",
```

#### 903. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5215-L5219` → after: `L6588-L6589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6588-L6589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6588-L6589) · [Before (L5215-L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5215-L5219)

```diff
-             translationKey: "item:regenerationPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Regeneration Potion|meta|charging1"
+             translationKey: "item:riceDescription"
+           }
```

#### 904. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5221` → after: `L6591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6591) · [Before (L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5221)

```diff
-         "Regeneration Potion II": {
+         ...(0, jW.Kb)("Rice", {
```

#### 905. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5223` → after: `L6593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6593) · [Before (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5223)

```diff
-             translationKey: "item:regenerationPotionII"
+             translationKey: "item:rice"
```

#### 906. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5225-L5239` → after: `L6595-L6607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6595-L6607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6595-L6607) · [Before (L5225-L5239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5225-L5239)

```diff
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
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Regeneration Potion II|meta|charging1"
+           ttb: 400,
+           model: "SquareSided",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: "Rice"
+         }, ["rice_stage2", "rice_stage3", "rice_stage4", "rice_stage5", "rice_stage6"]),
+         "Rice|FreshlyGrown": {
+           ttb: 400,
+           textureInfo: "rice_stage7",
+           model: "SquareSided",
+           solid: !1,
+           harvestType: "cuttable",
+           onMinedAura: 5
```

#### 907. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5241` → after: `L6609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6609) · [Before (L5241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5241)

```diff
-         "Splash Regeneration Potion": {
+         Cranberries: {
```

#### 908. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5243` → after: `L6611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6611) · [Before (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5243)

```diff
-             translationKey: "item:splashRegenerationPotion"
+             translationKey: "item:cranberries"
```

#### 909. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5245-L5249` → after: `L6613-L6618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6613-L6618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6613-L6618) · [Before (L5245-L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5245-L5249)

```diff
-           type: "Item",
-           textureInfo: "splash_regen_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           ttb: 400,
+           textureInfo: "berry_bush_stage0",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           itemTexture: "cranberries",
```

#### 910. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5251` → after: `L6620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6620) · [Before (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5251)

```diff
-             translationKey: "item:splashRegenerationPotionDescription"
+             translationKey: "item:cranberriesDescription"
```

#### 911. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5254-L5265` → after: `L6623-L6631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6623-L6631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6623-L6631) · [Before (L5254-L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5254-L5265)

```diff
-         "Splash Regeneration Potion II": {
-           displayName: {
-             translationKey: "item:splashRegenerationPotionII"
-           },
-           type: "Item",
-           textureInfo: "splash_regen_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Regeneration Potion",
-           stackable: !1,
-           description: {
-             translationKey: "item:splashRegenerationPotionDescription"
+         ...(0, jW.Kb)("Cranberries", {
+           ttb: 400,
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: "Cranberries"
+         }, ["berry_bush_stage1", "berry_bush_stage2"], {
+           2: {
+             onMinedAura: 5
```

#### 912. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5267-L5268` → after: `L6633-L6634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6633-L6634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6633-L6634) · [Before (L5267-L5268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5267-L5268)

```diff
-         },
-         "Arrow of Regeneration": {
+         }),
+         "Red Mushroom": {
```

#### 913. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5270` → after: `L6636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6636) · [Before (L5270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5270)

```diff
-             translationKey: "item:arrowOfRegeneration"
+             translationKey: "item:redMushroom"
```

#### 914. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5272-L5277` → after: `L6638-L6643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6638-L6643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6638-L6643) · [Before (L5272-L5277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5272-L5277)

```diff
-           type: "Item",
-           textureInfo: "regen_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 400,
+           textureInfo: "red_mushroom",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           itemTexture: "red_mushroom"
```

#### 915. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5279` → after: `L6645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6645) · [Before (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5279)

```diff
-         "Instant Healing Potion": {
+         "Brown Mushroom": {
```

#### 916. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5281-L5292` → after: `L6647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6647) · [Before (L5281-L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5281-L5292)

```diff
-             translationKey: "item:instantHealingPotion"
-           },
-           type: "Chargeable",
-           textureInfo: "heal_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
-           description: {
-             translationKey: "item:instantHealingPotionDescription"
+             translationKey: "item:brownMushroom"
```

#### 917. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5294-L5296` → after: `L6649-L6654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6649-L6654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6649-L6654) · [Before (L5294-L5296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5294-L5296)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Instant Healing Potion|meta|charging1"
+           ttb: 400,
+           textureInfo: "brown_mushroom",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           itemTexture: "brown_mushroom"
```

#### 918. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5298` → after: `L6656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6656) · [Before (L5298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5298)

```diff
-         "Instant Healing Potion II": {
+         "Cotton Seeds": {
```

#### 919. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5300` → after: `L6658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6658) · [Before (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5300)

```diff
-             translationKey: "item:instantHealingPotionII"
+             translationKey: "item:cottonSeeds"
```

#### 920. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5302-L5310` → after: `L6660-L6665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6660-L6665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6660-L6665) · [Before (L5302-L5310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5302-L5310)

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
+           ttb: 400,
+           textureInfo: "cotton_plant_stage0",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           itemTexture: "cotton_seeds",
```

#### 921. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5312-L5316` → after: `L6667-L6668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6667-L6668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6667-L6668) · [Before (L5312-L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5312-L5316)

```diff
-             translationKey: "item:instantHealingPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Instant Healing Potion II|meta|charging1"
+             translationKey: "item:cottonSeedsDescription"
+           }
```

#### 922. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5318` → after: `L6670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6670) · [Before (L5318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5318)

```diff
-         "Splash Instant Healing Potion": {
+         ...(0, jW.Kb)("Cotton", {
```

#### 923. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5320` → after: `L6672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6672) · [Before (L5320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5320)

```diff
-             translationKey: "item:splashInstantHealingPotion"
+             translationKey: "item:cotton"
```

#### 924. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5322-L5328` → after: `L6674-L6681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6674-L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6674-L6681) · [Before (L5322-L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5322-L5328)

```diff
-           type: "Item",
-           textureInfo: "splash_heal_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashInstantHealingPotionDescription"
+           ttb: 400,
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: "Cotton Seeds"
+         }, ["cotton_plant_stage1", "cotton_plant_stage2", "cotton_plant_stage3"], {
+           3: {
+             onMinedAura: 5
```

#### 925. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5330-L5331` → after: `L6683-L6684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6683-L6684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6683-L6684) · [Before (L5330-L5331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5330-L5331)

```diff
-         },
-         "Splash Instant Healing Potion II": {
+         }),
+         "Tribe Protector": {
```

#### 926. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5333` → after: `L6686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6686) · [Before (L5333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5333)

```diff
-             translationKey: "item:splashInstantHealingPotionII"
+             translationKey: "item:tribeProtector"
```

#### 927. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5335-L5340` → after: `L6688-L6690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6688-L6690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6688-L6690) · [Before (L5335-L5340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5335-L5340)

```diff
-           type: "Item",
-           textureInfo: "splash_heal_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Instant Healing Potion",
-           stackable: !1,
+           ttb: 5e3,
+           textureInfo: "protector_tribe",
+           harvestType: "rock",
```

#### 928. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5342` → after: `L6692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6692) · [Before (L5342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5342)

```diff
-             translationKey: "item:splashInstantHealingPotionDescription"
+             translationKey: "item:tribeProtectorDescription"
```

#### 929. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5345-L5356` → after: `L6695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6695) · [Before (L5345-L5356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5345-L5356)

```diff
-         "Arrow of Instant Healing": {
-           displayName: {
-             translationKey: "item:arrowOfInstantHealing"
-           },
-           type: "Item",
-           textureInfo: "heal_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
-         },
-         "Haste Potion": {
+         "Tall Grass": {
```

#### 930. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5358` → after: `L6697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6697) · [Before (L5358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5358)

```diff
-             translationKey: "item:hastePotion"
+             translationKey: "item:tallGrass"
```

#### 931. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5360-L5369` → after: `L6699-L6723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6699-L6723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6699-L6723) · [Before (L5360-L5369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5360-L5369)

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
+           textureInfo: "tall_grass_bottom",
+           model: "CentreCross",
+           heldItemScale: .5,
+           solid: !1,
+           harvestType: "cuttable",
+           drops: null,
+           specialToolDrop: {
+             tool: "Shears",
+             drops: "Tall Grass"
+           },
+           itemTexture: "tall_grass_bottom",
+           canBePlacedOver: !0
+         },
+         "Tall Grass|Top": {
+           ttb: 1,
+ ... (9 more added lines; see GitHub link above)
```

#### 932. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5371-L5373` → after: `L6725-L6726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6725-L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6725-L6726) · [Before (L5371-L5373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5371-L5373)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Haste Potion|meta|charging1"
+           itemTexture: "tall_grass_top",
+           canBePlacedOver: !0
```

#### 933. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5375-L5393` → after: `L6728-L6732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6728-L6732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6728-L6732) · [Before (L5375-L5393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5375-L5393)

```diff
-         "Haste Potion II": {
-           displayName: {
-             translationKey: "item:hastePotionII"
-           },
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
-           },
- ... (3 more removed lines; see GitHub link above)
+         "Faction Protector": {
+           ttb: 5e3,
+           textureInfo: "protector_faction",
+           harvestType: "rock",
+           description: "Prevents other factions from changing blocks and\nopening chests in the placed chunk"
```

#### 934. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5395` → after: `L6734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6734) · [Before (L5395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5395)

```diff
-         "Splash Haste Potion": {
+         "Barkless Palm Log": {
```

#### 935. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5397` → after: `L6736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6736) · [Before (L5397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5397)

```diff
-             translationKey: "item:splashHastePotion"
+             translationKey: "item:barklessPalmLog"
```

#### 936. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5399-L5406` → after: `L6738-L6740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6738-L6740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6738-L6740) · [Before (L5399-L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5399-L5406)

```diff
-           type: "Item",
-           textureInfo: "splash_haste_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashHastePotionDescription"
-           }
+           ttb: 2e3,
+           textureInfo: "stripped_palm_log",
+           harvestType: "wood"
```

#### 937. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5408` → after: `L6742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6742) · [Before (L5408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5408)

```diff
-         "Splash Haste Potion II": {
+         "Barkless Pear Log": {
```

#### 938. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5410` → after: `L6744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6744) · [Before (L5410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5410)

```diff
-             translationKey: "item:splashHastePotionII"
+             translationKey: "item:barklessPearLog"
```

#### 939. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5412-L5420` → after: `L6746-L6784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6746-L6784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6746-L6784) · [Before (L5412-L5420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5412-L5420)

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
+           ttb: 2e3,
+           textureInfo: "stripped_pear_log",
+           harvestType: "wood"
+         },
+         "Barkless Maple Log|TreeBase|Maple": {
+           ttb: 2e3,
+           textureInfo: "stripped_maple_log",
+           harvestType: "wood",
+           drops: "Barkless Maple Log"
+         },
+         "Barkless Plum Log|TreeBase|Plum": {
+           ttb: 2e3,
+           textureInfo: "stripped_plum_log",
+           harvestType: "wood",
+           drops: "Barkless Plum Log"
+         },
+ ... (23 more added lines; see GitHub link above)
```

#### 940. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5422` → after: `L6786-L6798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6786-L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6786-L6798) · [Before (L5422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5422)

```diff
-         "Arrow of Haste": {
+         "Barkless Palm Log|TreeBase|Palm": {
+           ttb: 2e3,
+           textureInfo: "stripped_palm_log",
+           harvestType: "wood",
+           drops: "Barkless Palm Log"
+         },
+         "Barkless Pear Log|TreeBase|Pear": {
+           ttb: 2e3,
+           textureInfo: "stripped_pear_log",
+           harvestType: "wood",
+           drops: "Barkless Pear Log"
+         },
+         "Mystery Block": {
```

#### 941. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5424` → after: `L6800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6800) · [Before (L5424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5424)

```diff
-             translationKey: "item:arrowOfHaste"
+             translationKey: "item:mysteryBlock"
```

#### 942. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5426-L5431` → after: `L6802-L6804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6802-L6804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6802-L6804) · [Before (L5426-L5431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5426-L5431)

```diff
-           type: "Item",
-           textureInfo: "haste_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 1200,
+           textureInfo: "mystery_block",
+           harvestType: "rock"
```

#### 943. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5433` → after: `L6806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6806) · [Before (L5433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5433)

```diff
-         "Shield Potion": {
+         Rocket: {
```

#### 944. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5435-L5446` → after: `L6808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6808) · [Before (L5435-L5446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5435-L5446)

```diff
-             translationKey: "item:shieldPotion"
-           },
-           type: "Chargeable",
-           textureInfo: "shield_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
-           description: {
-             translationKey: "item:shieldPotionDescription"
+             translationKey: "item:rocket"
```

#### 945. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5448-L5450` → after: `L6810-L6813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6810-L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6810-L6813) · [Before (L5448-L5450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5448-L5450)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Shield Potion|meta|charging1"
+           ttb: 1,
+           textureInfo: "rocket_block",
+           harvestType: "rock",
+           unlitStandaloneMesh: !0
```

#### 946. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5452` → after: `L6815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6815) · [Before (L5452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5452)

```diff
-         "Shield Potion II": {
+         "Super Rocket": {
```

#### 947. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5454-L5466` → after: `L6817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6817) · [Before (L5454-L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5454-L5466)

```diff
-             translationKey: "item:shieldPotionII"
-           },
-           type: "Chargeable",
-           textureInfo: "shield_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Shield Potion",
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
-           description: {
-             translationKey: "item:shieldPotionDescription"
+             translationKey: "item:superRocket"
```

#### 948. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5468-L5470` → after: `L6819-L6822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6819-L6822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6819-L6822) · [Before (L5468-L5470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5468-L5470)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Shield Potion II|meta|charging1"
+           ttb: 1,
+           textureInfo: "super_rocket_block",
+           harvestType: "rock",
+           unlitStandaloneMesh: !0
```

#### 949. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5472` → after: `L6824-L6825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6824-L6825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6824-L6825) · [Before (L5472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5472)

```diff
-         "Splash Shield Potion": {
+         ...(0, jW.S)(),
+         Grenade: {
```

#### 950. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5474` → after: `L6827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6827) · [Before (L5474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5474)

```diff
-             translationKey: "item:splashShieldPotion"
+             translationKey: "item:grenade"
```

#### 951. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5476-L5483` → after: `L6829-L6832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6829-L6832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6829-L6832) · [Before (L5476-L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5476-L5483)

```diff
-           type: "Item",
-           textureInfo: "splash_shield_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashShieldPotionDescription"
-           }
+           ttb: 1,
+           textureInfo: "grenade_block",
+           harvestType: "rock",
+           unlitStandaloneMesh: !0
```

#### 952. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5485` → after: `L6834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6834) · [Before (L5485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5485)

```diff
-         "Splash Shield Potion II": {
+         "Cherry Log": {
```

#### 953. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5487` → after: `L6836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6836) · [Before (L5487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5487)

```diff
-             translationKey: "item:splashShieldPotionII"
+             translationKey: "item:cherryLog"
```

#### 954. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5489-L5497` → after: `L6838-L6840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6838-L6840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6838-L6840) · [Before (L5489-L5497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5489-L5497)

```diff
-           type: "Item",
-           textureInfo: "splash_shield_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Shield Potion",
-           stackable: !1,
-           description: {
-             translationKey: "item:splashShieldPotionDescription"
-           }
+           ttb: 2400,
+           textureInfo: "log_cherry",
+           harvestType: "wood"
```

#### 955. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5499` → after: `L6842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6842) · [Before (L5499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5499)

```diff
-         "Arrow of Shield": {
+         "Barkless Cherry Log": {
```

#### 956. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5501` → after: `L6844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6844) · [Before (L5501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5501)

```diff
-             translationKey: "item:arrowOfShield"
+             translationKey: "item:barklessCherryLog"
```

#### 957. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5503-L5508` → after: `L6846-L6848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6846-L6848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6846-L6848) · [Before (L5503-L5508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5503-L5508)

```diff
-           type: "Item",
-           textureInfo: "shield_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 2e3,
+           textureInfo: "stripped_cherry_log",
+           harvestType: "wood"
```

#### 958. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5510` → after: `L6850-L6856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6850-L6856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6850-L6856) · [Before (L5510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5510)

```diff
-         "Double Jump Potion": {
+         "Barkless Cherry Log|TreeBase|Cherry": {
+           ttb: 2e3,
+           textureInfo: "stripped_cherry_log",
+           harvestType: "wood",
+           drops: "Barkless Cherry Log"
+         },
+         "Cherry Wood Planks": {
```

#### 959. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5512-L5523` → after: `L6858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6858) · [Before (L5512-L5523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5512-L5523)

```diff
-             translationKey: "item:doubleJumpPotion"
-           },
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
+             translationKey: "item:cherryWoodPlanks"
```

#### 960. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5525-L5527` → after: `L6860-L6862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6860-L6862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6860-L6862) · [Before (L5525-L5527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5525-L5527)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Double Jump Potion|meta|charging1"
+           ttb: 1800,
+           textureInfo: "planks_cherry",
+           harvestType: "wood"
```

#### 961. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5529` → after: `L6864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6864) · [Before (L5529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5529)

```diff
-         "Splash Double Jump Potion": {
+         "Cherry Leaves": {
```

#### 962. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5531` → after: `L6866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6866) · [Before (L5531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5531)

```diff
-             translationKey: "item:splashDoubleJumpPotion"
+             translationKey: "item:cherryLeaves"
```

#### 963. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5533-L5540` → after: `L6868-L6870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6868-L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6868-L6870) · [Before (L5533-L5540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5533-L5540)

```diff
-           type: "Item",
-           textureInfo: "splash_double_jump_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashDoubleJumpPotionDescription"
-           }
+           ttb: 350,
+           textureInfo: "leaves_cherry",
+           harvestType: "cuttable"
```

#### 964. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5542` → after: `L6872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6872) · [Before (L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5542)

```diff
-         "Arrow of Double Jump": {
+         ...(0, jW.bc)("Fallen Cherry Leaves", {
```

#### 965. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5544` → after: `L6874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6874) · [Before (L5544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5544)

```diff
-             translationKey: "item:arrowOfDoubleJump"
+             translationKey: "item:fallenCherryLeaves"
```

#### 966. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5546-L5553` → after: `L6876-L7049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6876-L7049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L6876-L7049) · [Before (L5546-L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5546-L5553)

```diff
-           type: "Item",
-           textureInfo: "double_jump_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
-         },
-         "Heat Resistance Potion": {
+           ttb: 350,
+           textureInfo: ["fallen_cherry_leaves_side", "leaves_cherry"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           model: "Slab",
+           solid: !1,
+           harvestType: "cuttable",
+           rootMetaDesc: "Fallen Cherry Leaves|meta|rot1|bot"
+         }),
+         "Cherry Door": {
+           displayName: {
+             translationKey: "item:cherryDoor"
+           },
+           ttb: 3600,
+           itemTexture: "cherry_door",
+           model: "door",
+           harvestType: "wood",
+ ... (158 more added lines; see GitHub link above)
```

#### 967. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5555` → after: `L7051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7051) · [Before (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5555)

```diff
-             translationKey: "item:heatResistancePotion"
+             translationKey: "item:cherryLadder"
```

#### 968. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5557-L5559` → after: `L7053-L7060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7053-L7060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7053-L7060) · [Before (L5557-L5559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5557-L5559)

```diff
-           type: "Chargeable",
-           textureInfo: "heat_resistance_potion",
-           weight: 1,
+           ttb: 1e3,
+           itemTexture: "ladder_cherry",
+           model: "rotatableOffset",
+           harvestType: "wood",
+           rootMetaDesc: "Cherry Ladder|meta|rot1",
+           modelScale: 1,
+           solid: !1,
+           blockModel: "Cherry Ladder",
```

#### 969. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5561-L5572` → after: `L7062-L7064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7062-L7064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7062-L7064) · [Before (L5561-L5572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5561-L5572)

```diff
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
-         },
-         "Splash Heat Resistance Potion": {
+           blockModelItem: !0
+         }),
+         "Cherry Block": {
```

#### 970. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5574` → after: `L7066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7066) · [Before (L5574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5574)

```diff
-             translationKey: "item:splashHeatResistancePotion"
+             translationKey: "item:cherryBlock"
```

#### 971. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5576-L5583` → after: `L7068-L7071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7068-L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7068-L7071) · [Before (L5576-L5583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5576-L5583)

```diff
-           type: "Item",
-           textureInfo: "splash_heat_resistance_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashHeatResistancePotionDescription"
-           }
+           ttb: 600,
+           textureInfo: ["cherry_block_side", "cherry_block_top", "cherry_block_bottom"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "wood"
```

#### 972. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5585` → after: `L7073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7073) · [Before (L5585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5585)

```diff
-         "Arrow of Heat Resistance": {
+         "Bouncy Bomb Block": {
```

#### 973. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5587` → after: `L7075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7075) · [Before (L5587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5587)

```diff
-             translationKey: "item:arrowOfHeatResistance"
+             translationKey: "item:bouncyBombBlock"
```

#### 974. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5589-L5594` → after: `L7077-L7080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7077-L7080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7077-L7080) · [Before (L5589-L5594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5589-L5594)

```diff
-           type: "Item",
-           textureInfo: "heat_resistance_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 1,
+           textureInfo: "bouncy_bomb_block",
+           harvestType: "rock",
+           unlitStandaloneMesh: !0
```

#### 975. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5596` → after: `L7082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7082) · [Before (L5596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5596)

```diff
-         "X-Ray Vision Potion": {
+         "Obby Rocket": {
```

#### 976. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5598` → after: `L7084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7084) · [Before (L5598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5598)

```diff
-             translationKey: "item:xRayVisionPotion"
+             translationKey: "item:rocket"
```

#### 977. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5600-L5613` → after: `L7086-L7089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7086-L7089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7086-L7089) · [Before (L5600-L5613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5600-L5613)

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
+           ttb: 1,
+           textureInfo: "rocket_block",
+           harvestType: "rock",
+           unlitStandaloneMesh: !0
```

#### 978. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5615` → after: `L7091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7091) · [Before (L5615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5615)

```diff
-         "Splash X-Ray Vision Potion": {
+         "Wood Spikes": {
```

#### 979. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5617` → after: `L7093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7093) · [Before (L5617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5617)

```diff
-             translationKey: "item:splashXRayVisionPotion"
+             translationKey: "item:woodSpikes"
```

#### 980. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5619-L5623` → after: `L7095-L7104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7095-L7104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7095-L7104) · [Before (L5619-L5623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5619-L5623)

```diff
-           type: "Item",
-           textureInfo: "splash_x_ray_vision_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           ttb: 1200,
+           harvestType: "wood",
+           model: "CustomModel",
+           customModelInfo: {
+             yOffset: -2 / 16
+           },
+           itemTexture: "spikes_wood",
+           solid: !1,
+           modelScale: 10,
+           blockModel: "Spikes_Wood",
```

#### 981. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5625` → after: `L7106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7106) · [Before (L5625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5625)

```diff
-             translationKey: "item:splashXRayVisionPotionDescription"
+             translationKey: "item:spikesDescription"
```

#### 982. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5628` → after: `L7109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7109) · [Before (L5628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5628)

```diff
-         "Arrow of X-Ray Vision": {
+         "Stone Spikes": {
```

#### 983. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5630` → after: `L7111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7111) · [Before (L5630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5630)

```diff
-             translationKey: "item:arrowOfXRayVision"
+             translationKey: "item:stoneSpikes"
```

#### 984. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5632-L5641` → after: `L7113-L7117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7113-L7117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7113-L7117) · [Before (L5632-L5641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5632-L5641)

```diff
-           type: "Item",
-           textureInfo: "x_ray_vision_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
-         },
-         "Mining Yield Potion": {
-           displayName: {
-             translationKey: "item:miningYieldPotion"
+           ttb: 1200,
+           harvestType: "rock",
+           model: "CustomModel",
+           customModelInfo: {
+             yOffset: -2 / 16
```

#### 985. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5643-L5650` → after: `L7119-L7122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7119-L7122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7119-L7122) · [Before (L5643-L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5643-L5650)

```diff
-           type: "Chargeable",
-           textureInfo: "mining_yield_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
+           itemTexture: "spikes_stone",
+           solid: !1,
+           modelScale: 10,
+           blockModel: "Spikes_Stone",
```

#### 986. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5652-L5656` → after: `L7124-L7125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7124-L7125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7124-L7125) · [Before (L5652-L5656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5652-L5656)

```diff
-             translationKey: "item:miningYieldPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Mining Yield Potion|meta|charging1"
+             translationKey: "item:spikesDescription"
+           }
```

#### 987. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5658` → after: `L7127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7127) · [Before (L5658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5658)

```diff
-         "Mining Yield Potion II": {
+         "Iron Spikes": {
```

#### 988. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5660-L5672` → after: `L7129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7129) · [Before (L5660-L5672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5660-L5672)

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
+             translationKey: "item:ironSpikes"
```

#### 989. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5674-L5680` → after: `L7131-L7135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7131-L7135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7131-L7135) · [Before (L5674-L5680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5674-L5680)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Mining Yield Potion II|meta|charging1"
-         },
-         "Splash Mining Yield Potion": {
-           displayName: {
-             translationKey: "item:splashMiningYieldPotion"
+           ttb: 1200,
+           harvestType: "rock",
+           model: "CustomModel",
+           customModelInfo: {
+             yOffset: -2 / 16
```

#### 990. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5682-L5686` → after: `L7137-L7140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7137-L7140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7137-L7140) · [Before (L5682-L5686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5682-L5686)

```diff
-           type: "Item",
-           textureInfo: "splash_mining_yield_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           itemTexture: "spikes_iron",
+           solid: !1,
+           modelScale: 10,
+           blockModel: "Spikes_Iron",
```

#### 991. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5688` → after: `L7142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7142) · [Before (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5688)

```diff
-             translationKey: "item:splashMiningYieldPotionDescription"
+             translationKey: "item:spikesDescription"
```

#### 992. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5691` → after: `L7145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7145) · [Before (L5691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5691)

```diff
-         "Splash Mining Yield Potion II": {
+         "Gold Spikes": {
```

#### 993. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5693` → after: `L7147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7147) · [Before (L5693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5693)

```diff
-             translationKey: "item:splashMiningYieldPotionII"
+             translationKey: "item:goldSpikes"
```

#### 994. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5695-L5700` → after: `L7149-L7158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7149-L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7149-L7158) · [Before (L5695-L5700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5695-L5700)

```diff
-           type: "Item",
-           textureInfo: "splash_mining_yield_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Mining Yield Potion",
-           stackable: !1,
+           ttb: 1200,
+           harvestType: "rock",
+           model: "CustomModel",
+           customModelInfo: {
+             yOffset: -2 / 16
+           },
+           itemTexture: "spikes_gold",
+           solid: !1,
+           modelScale: 10,
+           blockModel: "Spikes_Gold",
```

#### 995. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5702` → after: `L7160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7160) · [Before (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5702)

```diff
-             translationKey: "item:splashMiningYieldPotionDescription"
+             translationKey: "item:spikesDescription"
```

#### 996. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5705` → after: `L7163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7163) · [Before (L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5705)

```diff
-         "Arrow of Mining Yield": {
+         "Diamond Spikes": {
```

#### 997. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5707` → after: `L7165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7165) · [Before (L5707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5707)

```diff
-             translationKey: "item:arrowOfMiningYield"
+             translationKey: "item:diamondSpikes"
```

#### 998. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5709-L5718` → after: `L7167-L7171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7167-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7167-L7171) · [Before (L5709-L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5709-L5718)

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
+           ttb: 1200,
+           harvestType: "rock",
+           model: "CustomModel",
+           customModelInfo: {
+             yOffset: -2 / 16
```

#### 999. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5720-L5727` → after: `L7173-L7176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7173-L7176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7173-L7176) · [Before (L5720-L5727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5720-L5727)

```diff
-           type: "Chargeable",
-           textureInfo: "brain_rot_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
+           itemTexture: "spikes_diamond",
+           solid: !1,
+           modelScale: 10,
+           blockModel: "Spikes_Diamond",
```

#### 1000. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5729-L5733` → after: `L7178-L7179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7178-L7179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7178-L7179) · [Before (L5729-L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5729-L5733)

```diff
-             translationKey: "item:brainRotPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Brain Rot Potion|meta|charging1"
+             translationKey: "item:spikesDescription"
+           }
```

#### 1001. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5735` → after: `L7181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7181) · [Before (L5735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5735)

```diff
-         "Splash Brain Rot Potion": {
+         "Kill Spikes": {
```

#### 1002. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5737` → after: `L7183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7183) · [Before (L5737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5737)

```diff
-             translationKey: "item:splashBrainRotPotion"
+             translationKey: "item:killSpikes"
```

#### 1003. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5739-L5743` → after: `L7185-L7194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7185-L7194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7185-L7194) · [Before (L5739-L5743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5739-L5743)

```diff
-           type: "Item",
-           textureInfo: "splash_brain_rot_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           ttb: 1200,
+           harvestType: "rock",
+           model: "CustomModel",
+           customModelInfo: {
+             yOffset: -2 / 16
+           },
+           itemTexture: "spikes_kill",
+           solid: !1,
+           modelScale: 10,
+           blockModel: "Spikes_Kill",
```

#### 1004. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5745` → after: `L7196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7196) · [Before (L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5745)

```diff
-             translationKey: "item:splashBrainRotPotionDescription"
+             translationKey: "item:killSpikesDescription"
```

#### 1005. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5748` → after: `L7199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7199) · [Before (L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5748)

```diff
-         "Arrow of Brain Rot": {
+         "Corn Block": {
```

#### 1006. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5750` → after: `L7201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7201) · [Before (L5750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5750)

```diff
-             translationKey: "item:arrowOfBrainRot"
+             translationKey: "item:cornBlock"
```

#### 1007. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5752-L5757` → after: `L7203-L7206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7203-L7206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7203-L7206) · [Before (L5752-L5757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5752-L5757)

```diff
-           type: "Item",
-           textureInfo: "brain_rot_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 600,
+           textureInfo: ["corn_block_side", "corn_block_top", "corn_block_bottom"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "wood"
```

#### 1008. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5759` → after: `L7208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7208) · [Before (L5759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5759)

```diff
-         "Chaos Potion": {
+         "Corn Seeds": {
```

#### 1009. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5761` → after: `L7210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7210) · [Before (L5761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5761)

```diff
-             translationKey: "item:chaosPotion"
+             translationKey: "item:cornSeeds"
```

#### 1010. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5763-L5770` → after: `L7212-L7217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7212-L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7212-L7217) · [Before (L5763-L5770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5763-L5770)

```diff
-           type: "Chargeable",
-           textureInfo: "chaos_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
+           ttb: 400,
+           textureInfo: "corn_stage0",
+           model: "SquareSided",
+           solid: !1,
+           harvestType: "cuttable",
+           itemTexture: "corn_seeds",
```

#### 1011. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5772-L5776` → after: `L7219-L7220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7219-L7220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7219-L7220) · [Before (L5772-L5776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5772-L5776)

```diff
-             translationKey: "item:chaosPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 600,
-           rootMetaDesc: "Chaos Potion|meta|charging1"
+             translationKey: "item:cornSeedsDescription"
+           }
```

#### 1012. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5778` → after: `L7222-L7248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7222-L7248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7222-L7248) · [Before (L5778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5778)

```diff
-         "Teleportation Potion": {
+         ...(0, jW.Kb)("Corn Seeds", {
+           displayName: {
+             translationKey: "item:cornSeeds"
+           },
+           ttb: 400,
+           model: "SquareSided",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: "Corn Seeds"
+         }, ["corn_stage1"]),
+         "Corn Seeds|FreshlyGrown": {
+           ttb: 400,
+           textureInfo: "corn_stage2",
+           model: "SquareSided",
+           solid: !1,
+           harvestType: "cuttable",
+ ... (11 more added lines; see GitHub link above)
```

#### 1013. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5780-L5791` → after: `L7250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7250) · [Before (L5780-L5791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5780-L5791)

```diff
-             translationKey: "item:teleportationPotion"
-           },
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
+             translationKey: "item:corn"
```

#### 1014. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5793-L5797` → after: `L7252-L7258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7252-L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7252-L7258) · [Before (L5793-L5797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5793-L5797)

```diff
-           chargeStages: 1,
-           chargeTime: 600,
-           rootMetaDesc: "Teleportation Potion|meta|charging1"
-         },
-         Ammo: {
+           ttb: 400,
+           model: "SquareSided",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: "Corn Seeds"
+         }, ["corn_stage0", "corn_stage1", "corn_stage2", "corn_stage3", "corn_stage4"]),
+         "Corn Plant": {
```

#### 1015. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5799` → after: `L7260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7260) · [Before (L5799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5799)

```diff
-             translationKey: "item:ammo"
+             translationKey: "item:corn"
```

#### 1016. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5801-L5808` → after: `L7262-L7316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7262-L7316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7262-L7316) · [Before (L5801-L5808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5801-L5808)

```diff
-           type: "Item",
-           textureInfo: "ammo",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         },
-         ...(0, yB.q)("AK-47", {
-           heldItemScale: 2
+           ttb: 400,
+           textureInfo: "corn_stage5",
+           model: "SquareSided",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: "Corn Seeds"
+         },
+         "Corn Plant|FreshlyGrown": {
+           ttb: 400,
+           textureInfo: "corn_stage5",
+           model: "SquareSided",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: "Corn Seeds",
+           onMinedAura: 10
+         },
+ ... (39 more added lines; see GitHub link above)
```

#### 1017. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5810-L5811` → after: `L7318-L7321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7318-L7321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7318-L7321) · [Before (L5810-L5811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5810-L5811)

```diff
-         ...(0, yB.q)("M16", {
-           heldItemScale: 2
+         ...(0, jW.I)((WW => `${WW} Quick Paintball Explosive`), {
+           textureInfo: WW => `explosive_paint_quick_${(0,ZW.ue)(WW)}`,
+           harvestType: "cuttable",
+           ttb: 50
```

#### 1018. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5813-L5814` → after: `L7323-L7326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7323-L7326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7323-L7326) · [Before (L5813-L5814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5813-L5814)

```diff
-         ...(0, yB.q)("MP40", {
-           heldItemScale: 2.5
+         ...(0, jW.I)((WW => `${WW} Seeking Paintball Explosive`), {
+           textureInfo: WW => `explosive_paint_seeking_${(0,ZW.ue)(WW)}`,
+           harvestType: "cuttable",
+           ttb: 50
```

#### 1019. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5816-L5817` → after: `L7328-L7331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7328-L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7328-L7331) · [Before (L5816-L5817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5816-L5817)

```diff
-         ...(0, yB.q)("TAR-21", {
-           heldItemScale: 2.5
+         ...(0, jW.I)((WW => `${WW} Sticky Paintball Explosive`), {
+           textureInfo: WW => `explosive_paint_sticky_${(0,ZW.ue)(WW)}`,
+           harvestType: "cuttable",
+           ttb: 50
```

#### 1020. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5819-L5820` → after: `L7333-L7344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7333-L7344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7333-L7344) · [Before (L5819-L5820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5819-L5820)

```diff
-         ...(0, yB.q)("M1911", {
-           heldItemScale: 2
+         ...(0, jW.Xb)("White Strongbed", {
+           displayName: {
+             translationKey: "item:whiteStrongbed"
+           },
+           ttb: 480,
+           itemTexture: "white_strongbed",
+           model: "rotatable",
+           harvestType: "rock",
+           rootMetaDesc: "White Strongbed|meta|rot1",
+           particlesIgnoreBlack: !0,
+           modelScale: 5,
+           blockModel: "White Strongbed"
```

#### 1021. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5822-L5825` → after: `L7346-L7355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7346-L7355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7346-L7355) · [Before (L5822-L5825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5822-L5825)

```diff
-         ...(0, yB.q)("One Shot Pistol", {
-           heldItemScale: 2,
-           heldItemGlb: "M1911",
-           textureInfo: "M1911"
+         ...(0, jW.Xb)("_White Strongbed Head", {
+           ttb: 480,
+           itemTexture: "white_strongbed",
+           model: "rotatable",
+           harvestType: "rock",
+           drops: "White Strongbed",
+           rootMetaDesc: "_White Strongbed Head|meta|rot1",
+           particlesIgnoreBlack: !0,
+           modelScale: 5,
+           blockModel: "_White Strongbed Head"
```

#### 1022. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5827-L5829` → after: `L7357-L7368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7357-L7368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7357-L7368) · [Before (L5827-L5829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5827-L5829)

```diff
-         ...(0, yB.q)("Double Barrel", {
-           heldItemScale: 2.5,
-           textureInfo: "Double-barreled"
+         ...(0, jW.Xb)("Orange Strongbed", {
+           displayName: {
+             translationKey: "item:orangeStrongbed"
+           },
+           ttb: 480,
+           itemTexture: "orange_strongbed",
+           model: "rotatable",
+           harvestType: "rock",
+           rootMetaDesc: "Orange Strongbed|meta|rot1",
+           particlesIgnoreBlack: !0,
+           modelScale: 5,
+           blockModel: "Orange Strongbed"
```

#### 1023. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5831-L5832` → after: `L7370-L7379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7370-L7379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7370-L7379) · [Before (L5831-L5832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5831-L5832)

```diff
-         ...(0, yB.q)("AWP", {
-           heldItemScale: 3
+         ...(0, jW.Xb)("_Orange Strongbed Head", {
+           ttb: 480,
+           itemTexture: "orange_strongbed",
+           model: "rotatable",
+           harvestType: "rock",
+           drops: "Orange Strongbed",
+           rootMetaDesc: "_Orange Strongbed Head|meta|rot1",
+           particlesIgnoreBlack: !0,
+           modelScale: 5,
+           blockModel: "_Orange Strongbed Head"
```

#### 1024. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5834-L5835` → after: `L7381-L7392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7381-L7392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7381-L7392) · [Before (L5834-L5835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5834-L5835)

```diff
-         ...(0, yB.q)("Deagle", {
-           heldItemScale: 2
+         ...(0, jW.Xb)("Magenta Strongbed", {
+           displayName: {
+             translationKey: "item:magentaStrongbed"
+           },
+           ttb: 480,
+           itemTexture: "magenta_strongbed",
+           model: "rotatable",
+           harvestType: "rock",
+           rootMetaDesc: "Magenta Strongbed|meta|rot1",
+           particlesIgnoreBlack: !0,
+           modelScale: 5,
+           blockModel: "Magenta Strongbed"
```

#### 1025. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5837-L5838` → after: `L7394-L7403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7394-L7403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7394-L7403) · [Before (L5837-L5838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5837-L5838)

```diff
-         ...(0, yB.q)("Striker-12", {
-           heldItemScale: 2.5
+         ...(0, jW.Xb)("_Magenta Strongbed Head", {
+           ttb: 480,
+           itemTexture: "magenta_strongbed",
+           model: "rotatable",
+           harvestType: "rock",
+           drops: "Magenta Strongbed",
+           rootMetaDesc: "_Magenta Strongbed Head|meta|rot1",
+           particlesIgnoreBlack: !0,
+           modelScale: 5,
+           blockModel: "_Magenta Strongbed Head"
```

#### 1026. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5840-L5841` → after: `L7405-L7416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7405-L7416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7405-L7416) · [Before (L5840-L5841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5840-L5841)

```diff
-         ...(0, yB.q)("VSR", {
-           heldItemScale: 2.5
+         ...(0, jW.Xb)("Light Blue Strongbed", {
+           displayName: {
+             translationKey: "item:lightBlueStrongbed"
+           },
+           ttb: 480,
+           itemTexture: "light_blue_strongbed",
+           model: "rotatable",
+           harvestType: "rock",
+           rootMetaDesc: "Light Blue Strongbed|meta|rot1",
+           particlesIgnoreBlack: !0,
+           modelScale: 5,
+           blockModel: "Light Blue Strongbed"
```

#### 1027. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5843-L5844` → after: `L7418-L7427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7418-L7427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7418-L7427) · [Before (L5843-L5844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5843-L5844)

```diff
-         ...(0, yB.q)("DMR", {
-           heldItemScale: 2.5
+         ...(0, jW.Xb)("_Light Blue Strongbed Head", {
+           ttb: 480,
+           itemTexture: "light_blue_strongbed",
+           model: "rotatable",
+           harvestType: "rock",
+           drops: "Light Blue Strongbed",
+           rootMetaDesc: "_Light Blue Strongbed Head|meta|rot1",
+           particlesIgnoreBlack: !0,
+           modelScale: 5,
+           blockModel: "_Light Blue Strongbed Head"
```

#### 1028. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5846-L5847` → after: `L7429-L7440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7429-L7440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7429-L7440) · [Before (L5846-L5847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5846-L5847)

```diff
-         ...(0, yB.q)("Minigun", {
-           heldItemScale: 3
+         ...(0, jW.Xb)("Yellow Strongbed", {
+           displayName: {
+             translationKey: "item:yellowStrongbed"
+           },
+           ttb: 480,
+           itemTexture: "yellow_strongbed",
+           model: "rotatable",
+           harvestType: "rock",
+           rootMetaDesc: "Yellow Strongbed|meta|rot1",
+           particlesIgnoreBlack: !0,
+           modelScale: 5,
+           blockModel: "Yellow Strongbed"
```

#### 1029. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5849-L5850` → after: `L7442-L7451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7442-L7451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7442-L7451) · [Before (L5849-L5850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5849-L5850)

```diff
-         ...(0, yB.q)("FMR", {
-           heldItemScale: 2
+         ...(0, jW.Xb)("_Yellow Strongbed Head", {
+           ttb: 480,
+           itemTexture: "yellow_strongbed",
+           model: "rotatable",
+           harvestType: "rock",
+           drops: "Yellow Strongbed",
+           rootMetaDesc: "_Yellow Strongbed Head|meta|rot1",
+           particlesIgnoreBlack: !0,
+           modelScale: 5,
+           blockModel: "_Yellow Strongbed Head"
```

#### 1030. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5852-L5853` → after: `L7453-L7464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7453-L7464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7453-L7464) · [Before (L5852-L5853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5852-L5853)

```diff
-         ...(0, yB.q)("SKAR", {
-           heldItemScale: 2.5
+         ...(0, jW.Xb)("Lime Strongbed", {
+           displayName: {
+             translationKey: "item:limeStrongbed"
+           },
+           ttb: 480,
+           itemTexture: "lime_strongbed",
+           model: "rotatable",
+           harvestType: "rock",
+           rootMetaDesc: "Lime Strongbed|meta|rot1",
+           particlesIgnoreBlack: !0,
+           modelScale: 5,
+           blockModel: "Lime Strongbed"
```

#### 1031. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5855-L5856` → after: `L7466-L7475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7466-L7475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7466-L7475) · [Before (L5855-L5856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5855-L5856)

```diff
-         ...(0, yB.q)("Block-19", {
-           heldItemScale: 2.5
+         ...(0, jW.Xb)("_Lime Strongbed Head", {
+           ttb: 480,
+           itemTexture: "lime_strongbed",
+           model: "rotatable",
+           harvestType: "rock",
+           drops: "Lime Strongbed",
+           rootMetaDesc: "_Lime Strongbed Head|meta|rot1",
+           particlesIgnoreBlack: !0,
+           modelScale: 5,
+           blockModel: "_Lime Strongbed Head"
```

#### 1032. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5858-L5859` → after: `L7477-L7488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7477-L7488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7477-L7488) · [Before (L5858-L5859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5858-L5859)

```diff
-         ...(0, yB.q)("Mini Izu", {
-           heldItemScale: 2
+         ...(0, jW.Xb)("Pink Strongbed", {
+           displayName: {
+             translationKey: "item:pinkStrongbed"
+           },
+           ttb: 480,
+           itemTexture: "pink_strongbed",
+           model: "rotatable",
+           harvestType: "rock",
+           rootMetaDesc: "Pink Strongbed|meta|rot1",
+           particlesIgnoreBlack: !0,
+           modelScale: 5,
+           blockModel: "Pink Strongbed"
```

#### 1033. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5861-L5862` → after: `L7490-L7499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7490-L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7490-L7499) · [Before (L5861-L5862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5861-L5862)

```diff
-         ...(0, yB.q)("GPMG", {
-           heldItemScale: 2.8
+         ...(0, jW.Xb)("_Pink Strongbed Head", {
+           ttb: 480,
+           itemTexture: "pink_strongbed",
+           model: "rotatable",
+           harvestType: "rock",
+           drops: "Pink Strongbed",
+           rootMetaDesc: "_Pink Strongbed Head|meta|rot1",
+           particlesIgnoreBlack: !0,
+           modelScale: 5,
+           blockModel: "_Pink Strongbed Head"
```

#### 1034. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5864-L5872` → after: `L7501-L7738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7501-L7738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7501-L7738) · [Before (L5864-L5872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5864-L5872)

```diff
-         "Gold Coin": {
-           displayName: {
-             translationKey: "item:goldCoin"
-           },
-           type: "Item",
-           textureInfo: "gold_coin",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+         ...(0, jW.Xb)("Gray Strongbed", {
+           displayName: {
+             translationKey: "item:grayStrongbed"
+           },
+           ttb: 480,
+           itemTexture: "gray_strongbed",
+           model: "rotatable",
+           harvestType: "rock",
+           rootMetaDesc: "Gray Strongbed|meta|rot1",
+           particlesIgnoreBlack: !0,
+           modelScale: 5,
+           blockModel: "Gray Strongbed"
+         }),
+         ...(0, jW.Xb)("_Gray Strongbed Head", {
+           ttb: 480,
+           itemTexture: "gray_strongbed",
+ ... (222 more added lines; see GitHub link above)
```

#### 1035. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5874` → after: `L7740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7740) · [Before (L5874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5874)

```diff
-         Updraft: {
+         Lava: {
```

#### 1036. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5876` → after: `L7742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7742) · [Before (L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5876)

```diff
-             translationKey: "item:updraft"
+             translationKey: "item:lava"
```

#### 1037. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5878-L5884` → after: `L7744-L7747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7744-L7747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7744-L7747) · [Before (L5878-L5884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5878-L5884)

```diff
-           type: "FullAuto",
-           textureInfo: "updraft",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:updraftDescription"
+           textureInfo: {
+             colour: [.95, .4, .05, .95],
+             animTextures: ["lava0", "lava1", "lava2", "lava3", "lava4", "lava5", "lava6", "lava7"],
+             animationInterval: 800
```

#### 1038. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5886` → after: `L7749-L7752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7749-L7752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7749-L7752) · [Before (L5886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5886)

```diff
-           fireInterval: 515
+           dl: !0,
+           drops: null,
+           harvestType: "rock",
+           oA: [14, 8, 2]
```

#### 1039. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5888` → after: `L7754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7754) · [Before (L5888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5888)

```diff
-         Snowdash: {
+         "Fat Brown Mushroom": {
```

#### 1040. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5890` → after: `L7756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7756) · [Before (L5890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5890)

```diff
-             translationKey: "item:snowdash"
+             translationKey: "item:fatBrownMushroom"
```

#### 1041. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5892-L5896` → after: `L7758-L7765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7758-L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7758-L7765) · [Before (L5892-L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5892-L5896)

```diff
-           type: "FullAuto",
-           textureInfo: "snowdash",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
+           ttb: 1200,
+           itemTexture: "fatBrownMushroom",
+           harvestType: "cuttable",
+           blockModel: "Fat Brown Mushroom",
+           blockModelItem: !0,
+           model: "CustomModel",
+           modelScale: 10,
+           heldItemScale: 10,
```

#### 1042. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5898-L5900` → after: `L7767-L7768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7767-L7768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7767-L7768) · [Before (L5898-L5900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5898-L5900)

```diff
-             translationKey: "item:snowdashDescription"
-           },
-           fireInterval: 515
+             translationKey: "item:fatMushroomDescription"
+           }
```

#### 1043. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5902` → after: `L7770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7770) · [Before (L5902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5902)

```diff
-         "Floor Creator": {
+         "Fat Red Mushroom": {
```

#### 1044. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5904` → after: `L7772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7772) · [Before (L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5904)

```diff
-             translationKey: "item:floorCreator"
+             translationKey: "item:fatRedMushroom"
```

#### 1045. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5906-L5910` → after: `L7774-L7781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7774-L7781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7774-L7781) · [Before (L5906-L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5906-L5910)

```diff
-           type: "Item",
-           textureInfo: "floor_creator",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
+           ttb: 1200,
+           itemTexture: "fatRedMushroom",
+           harvestType: "cuttable",
+           blockModel: "Fat Red Mushroom",
+           blockModelItem: !0,
+           model: "CustomModel",
+           modelScale: 10,
+           heldItemScale: 10,
```

#### 1046. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5912` → after: `L7783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7783) · [Before (L5912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5912)

```diff
-             translationKey: "item:floorCreatorDescription"
+             translationKey: "item:fatMushroomDescription"
```

#### 1047. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5915` → after: `L7786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7786) · [Before (L5915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5915)

```diff
-         "Moonstone Remote Explosive": {
+         "Chili Pepper Block": {
```

#### 1048. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5917-L5925` → after: `L7788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7788) · [Before (L5917-L5925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5917-L5925)

```diff
-             translationKey: "item:moonstoneRemoteExplosive"
-           },
-           type: "Item",
-           textureInfo: "moonstone_remote_explosive",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:moonstoneRemoteExplosiveDescription"
+             translationKey: "item:chiliPepperBlock"
```

#### 1049. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5927` → after: `L7790-L7793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7790-L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7790-L7793) · [Before (L5927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5927)

```diff
-           heldItemGlb: "Moonstone Remote"
+           ttb: 600,
+           textureInfo: ["chili_pepper_block_side", "chili_pepper_block_top", "chili_pepper_block_bottom"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "wood"
```

#### 1050. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5929` → after: `L7795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7795) · [Before (L5929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5929)

```diff
-         "Moonstone Remote": {
+         "Chili Pepper Seeds": {
```

#### 1051. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5931` → after: `L7797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7797) · [Before (L5931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5931)

```diff
-             translationKey: "item:moonstoneRemote"
+             translationKey: "item:chiliPepperSeeds"
```

#### 1052. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5933-L5944` → after: `L7799-L7804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7799-L7804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7799-L7804) · [Before (L5933-L5944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5933-L5944)

```diff
-           type: "Item",
-           textureInfo: "moonstone_remote",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:moonstoneRemoteDescription"
-           }
-         },
-         "Ice Bridge": {
-           displayName: {
-             translationKey: "item:iceBridge"
+           ttb: 400,
+           itemTexture: "chili_pepper_seeds",
+           model: "CustomModel",
+           modelScale: 10,
+           customModelInfo: {
+             yOffset: -.4375
```

#### 1053. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5946-L5950` → after: `L7806-L7808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7806-L7808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7806-L7808) · [Before (L5946-L5950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5946-L5950)

```diff
-           type: "Item",
-           textureInfo: "ice_bridge",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
+           harvestType: "cuttable",
+           solid: !1,
+           blockModel: "chili_pepper_stage0_model",
```

#### 1054. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5952-L5954` → after: `L7810-L7811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7810-L7811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7810-L7811) · [Before (L5952-L5954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5952-L5954)

```diff
-             translationKey: "item:iceBridgeDescription"
-           },
-           bridgeLength: zB
+             translationKey: "item:chiliPepperSeedsDescription"
+           }
```

#### 1055. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5956-L5968` → after: `L7813-L7999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR7813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L7813-L7999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L7813-L7999) · [Before (L5956-L5968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5956-L5968)

```diff
-         "Maple Planks Bridge": {
-           displayName: {
-             translationKey: "item:maplePlanksBridge"
-           },
-           type: "Item",
-           textureInfo: "maple_planks_bridge",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:maplePlanksBridgeDescription"
-           },
-           bridgeLength: zB
+         "Chili Pepper Plant_stage1": {
+           ttb: 400,
+           model: "CustomModel",
+           modelScale: 10,
+           customModelInfo: {
+             yOffset: -.4375
+           },
+           harvestType: "cuttable",
+           solid: !1,
+           blockModel: "chili_pepper_stage1_model",
+           drops: "Chili Pepper Seeds"
+         },
+         "Chili Pepper Plant_stage2": {
+           ttb: 400,
+           model: "CustomModel",
+           modelScale: 10,
+ ... (171 more added lines; see GitHub link above)
```

#### 1056. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5970` → after: `L8001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8001) · [Before (L5970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5970)

```diff
-         "Messy Stone Bridge": {
+         "Toxin Ball Block": {
```

#### 1057. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5972` → after: `L8003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8003) · [Before (L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5972)

```diff
-             translationKey: "item:messyStoneBridge"
+             translationKey: "item:toxinBallBlock"
```

#### 1058. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5974-L5982` → after: `L8005-L8008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8005-L8008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8005-L8008) · [Before (L5974-L5982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5974-L5982)

```diff
-           type: "Item",
-           textureInfo: "messy_stone_bridge",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:messyStoneBridgeDescription"
-           },
-           bridgeLength: zB
+           ttb: 1,
+           textureInfo: "toxin_ball_block",
+           harvestType: "rock",
+           unlitStandaloneMesh: !0
```

#### 1059. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5984` → after: `L8010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8010) · [Before (L5984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5984)

```diff
-         ...(0, jB.F)((BB => `${BB} Balloon`), {
+         ...(0, jW.I)((WW => `Spawn Block (${WW})`), {
```

#### 1060. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5986` → after: `L8012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8012) · [Before (L5986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5986)

```diff
-             translationKey: `item:${(0,YB.ef)(BB)}Balloon`
+             translationKey: `item:${(0,ZW.qe)(WW)}SpawnBlock`
```

#### 1061. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5988-L5993` → after: `L8014-L8018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8014-L8018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8014-L8018) · [Before (L5988-L5993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5988-L5993)

```diff
-           textureInfo: BB => `${(0,YB.if)(BB)}_balloon`,
-           heldItemGlb: BB => `${BB} Balloon Item`,
-           type: "Item",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
+           ttb: 1500,
+           textureInfo: WW => [`${(0,ZW.ue)(WW)}_spawn_block_top[rot[1`, `${(0,ZW.ue)(WW)}_spawn_block_top[rot[2`, `${(0,ZW.ue)(WW)}_spawn_block_top[rot[3`, `${(0,ZW.ue)(WW)}_spawn_block_top[rot[4`, `${(0,ZW.ue)(WW)}_spawn_block_side`],
+           texturePerSide: [4, 4, 2, 4, 4, 4],
+           harvestType: "rock",
+           rootMetaDesc: WW => `Spawn Block (${WW})|meta|rot1`,
```

#### 1062. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5995` → after: `L8020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8020) · [Before (L5995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5995)

```diff
-             translationKey: "item:balloonDescription"
+             translationKey: "item:spawnBlockDescription"
```

#### 1063. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L5998-L6004` → after: `L8023-L8027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8023-L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8023-L8027) · [Before (L5998-L6004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L5998-L6004)

```diff
-         ...(0, jB.F)((BB => `INTERNAL_MESH_${BB} Balloon`), {
-           textureInfo: BB => `${(0,YB.if)(BB)}_balloon`,
-           heldItemGlb: BB => `${BB} Balloon`,
-           type: "Item",
-           weight: 1,
-           heldItemScale: 4,
-           stackable: !1
+         ...(0, jW.I)((WW => `Spawn Block (${WW})|meta|rot2`), {
+           ttb: 1500,
+           textureInfo: WW => [`${(0,ZW.ue)(WW)}_spawn_block_top[rot[1`, `${(0,ZW.ue)(WW)}_spawn_block_top[rot[2`, `${(0,ZW.ue)(WW)}_spawn_block_top[rot[3`, `${(0,ZW.ue)(WW)}_spawn_block_top[rot[4`, `${(0,ZW.ue)(WW)}_spawn_block_side`],
+           texturePerSide: [4, 4, 3, 4, 4, 4],
+           harvestType: "rock"
```

#### 1064. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6006-L6017` → after: `L8029-L8033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8029-L8033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8029-L8033) · [Before (L6006-L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6006-L6017)

```diff
-         ...(0, jB.F)((BB => `${BB} Popup Tower`), {
-           displayName: BB => ({
-             translationKey: `item:${(0,YB.ef)(BB)}PopupTower`
-           }),
-           textureInfo: BB => `${(0,YB.if)(BB)}_popup_tower`,
-           type: "Item",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:popupTowerDescription"
-           }
+         ...(0, jW.I)((WW => `Spawn Block (${WW})|meta|rot3`), {
+           ttb: 1500,
+           textureInfo: WW => [`${(0,ZW.ue)(WW)}_spawn_block_top[rot[1`, `${(0,ZW.ue)(WW)}_spawn_block_top[rot[2`, `${(0,ZW.ue)(WW)}_spawn_block_top[rot[3`, `${(0,ZW.ue)(WW)}_spawn_block_top[rot[4`, `${(0,ZW.ue)(WW)}_spawn_block_side`],
+           texturePerSide: [4, 4, 0, 4, 4, 4],
+           harvestType: "rock"
```

#### 1065. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6019-L6034` → after: `L8035-L8039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8035-L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8035-L8039) · [Before (L6019-L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6019-L6034)

```diff
-         ...(0, jB.F)((BB => `${BB} Paintball Gun`), {
-           displayName: BB => ({
-             translationKey: `item:${(0,YB.ef)(BB)}PaintballGun`
-           }),
-           textureInfo: BB => `${(0,YB.if)(BB)}_paintball_gun`,
-           type: "FullAuto",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !1,
-           description: {
-             translationKey: "item:paintballGunDescription"
-           },
-           fireInterval: 167,
-           secondaryDamage: 100,
-           holdAsAiming: !0,
-           hideAimingUI: !0
+         ...(0, jW.I)((WW => `Spawn Block (${WW})|meta|rot4`), {
+           ttb: 1500,
+           textureInfo: WW => [`${(0,ZW.ue)(WW)}_spawn_block_top[rot[1`, `${(0,ZW.ue)(WW)}_spawn_block_top[rot[2`, `${(0,ZW.ue)(WW)}_spawn_block_top[rot[3`, `${(0,ZW.ue)(WW)}_spawn_block_top[rot[4`, `${(0,ZW.ue)(WW)}_spawn_block_side`],
+           texturePerSide: [4, 4, 1, 4, 4, 4],
+           harvestType: "rock"
```

#### 1066. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6036-L6044` → after: `L8041-L8048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8041-L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8041-L8048) · [Before (L6036-L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6036-L6044)

```diff
-         ...(0, jB.F)((BB => `${BB} Paintball`), {
-           displayName: BB => ({
-             translationKey: `item:${(0,YB.ef)(BB)}Paintball`
-           }),
-           textureInfo: BB => `${(0,YB.if)(BB)}_paintball`,
-           type: "Item",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+         ...(0, jW.Zb)("Checkpoint Block", {
+           displayName: {
+             translationKey: "item:checkpointBlock"
+           },
+           ttb: 1500,
+           textureInfo: ["checkpoint_block[rot[1", "checkpoint_block[rot[2", "checkpoint_block[rot[3", "checkpoint_block[rot[4"],
+           harvestType: "rock",
+           rootMetaDesc: "Checkpoint Block|meta|rot1",
```

#### 1067. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6046` → after: `L8050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8050) · [Before (L6046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6046)

```diff
-             translationKey: "item:paintballDescription"
+             translationKey: "item:checkpointBlockDescription"
```

#### 1068. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6048-L6049` → after: `L8052-L8075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8052-L8075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8052-L8075) · [Before (L6048-L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6048-L6049)

```diff
-         }),
-         ...(0, jB.F)((BB => `${BB} Heavy Paintball Gun`), {
+         }, [
+           [0, 0, 2, 0, 0, 0],
+           [0, 0, 3, 0, 0, 0],
+           [0, 0, 0, 0, 0, 0],
+           [0, 0, 1, 0, 0, 0]
+         ]),
+         ...(0, jW.Zb)("Custom Lobby Block", {
+           displayName: {
+             translationKey: "item:customLobbyBlock"
+           },
+           ttb: 1500,
+           textureInfo: ["custom_lobby_block_top[rot[1", "custom_lobby_block_top[rot[2", "custom_lobby_block_top[rot[3", "custom_lobby_block_top[rot[4", "custom_lobby_block_side"],
+           harvestType: "rock",
+           rootMetaDesc: "Custom Lobby Block|meta|rot1",
+           description: {
+             translationKey: "item:customLobbyBlockDescription"
+ ... (8 more added lines; see GitHub link above)
```

#### 1069. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6051` → after: `L8077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8077) · [Before (L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6051)

```diff
-             translationKey: `item:${(0,YB.ef)(BB)}HeavyPaintballGun`
+             translationKey: `item:${(0,ZW.qe)(WW)}GeneratorSpawnBlock`
```

#### 1070. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6053-L6057` → after: `L8079-L8082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8079-L8082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8079-L8082) · [Before (L6053-L6057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6053-L6057)

```diff
-           textureInfo: BB => `${(0,YB.if)(BB)}_heavy_paintball_gun`,
-           type: "FullAuto",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           ttb: 1500,
+           textureInfo: WW => [`${(0,ZW.ue)(WW)}_gen_spawn_top`, `${(0,ZW.ue)(WW)}_gen_spawn_coal`, `${(0,ZW.ue)(WW)}_gen_spawn_iron`],
+           texturePerSide: [2, 2, 0, 0, 1, 1],
+           harvestType: "rock",
```

#### 1071. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6059` → after: `L8084-L8089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8084-L8089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8084-L8089) · [Before (L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6059)

```diff
-             translationKey: "item:paintballGunDescription"
+             translationKey: "item:teamGeneratorSpawnBlockDescription"
+           }
+         }, ["Red", "Blue", "Lime", "Yellow", "Cyan", "White", "Pink", "Gray"]),
+         ...(0, jW.Zb)("Trader Shop Spawn Block", {
+           displayName: {
+             translationKey: "item:traderShopSpawnBlock"
```

#### 1072. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6061-L6074` → after: `L8091-L8094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8091-L8094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8091-L8094) · [Before (L6061-L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6061-L6074)

```diff
-           fireInterval: 1015,
-           secondaryDamage: 250,
-           holdAsAiming: !0,
-           hideAimingUI: !0
-         }),
-         ...(0, jB.F)((BB => `${BB} Paintball Explosive Item`), {
-           displayName: BB => ({
-             translationKey: `item:${(0,YB.ef)(BB)}PaintballExplosive`
-           }),
-           textureInfo: BB => `explosive_paint_${(0,YB.if)(BB)}`,
-           type: "Item",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
+           ttb: 1500,
+           textureInfo: ["shop_trader_spawn_top[rot[1", "shop_trader_spawn_top[rot[2", "shop_trader_spawn_top[rot[3", "shop_trader_spawn_top[rot[4", "shop_trader_spawn_side", "shop_trader_spawn_face"],
+           harvestType: "rock",
+           rootMetaDesc: "Trader Shop Spawn Block|meta|rot1",
```

#### 1073. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6076` → after: `L8096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8096) · [Before (L6076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6076)

```diff
-             translationKey: "item:paintballExplosiveDescription"
+             translationKey: "item:traderShopSpawnBlockDescription"
```

#### 1074. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6078-L6089` → after: `L8098-L8113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8098-L8113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8098-L8113) · [Before (L6078-L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6078-L6089)

```diff
-         }),
-         ...(0, jB.F)((BB => `${BB} Sticky Paintball Explosive Item`), {
-           displayName: BB => ({
-             translationKey: `item:${(0,YB.ef)(BB)}StickyPaintballExplosive`
-           }),
-           textureInfo: BB => `explosive_paint_sticky_${(0,YB.if)(BB)}`,
-           type: "Item",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:stickyPaintballExplosiveDescription"
+         }, [
+           [5, 5, 2, 4, 4, 4],
+           [5, 5, 3, 4, 4, 4],
+           [5, 5, 0, 4, 4, 4],
+           [5, 5, 1, 4, 4, 4]
+         ]),
+         ...(0, jW.Zb)("Wizard Shop Spawn Block", {
+           displayName: {
+             translationKey: "item:wizardShopSpawnBlock"
+           },
+           ttb: 1500,
+           textureInfo: ["shop_wizard_spawn_top[rot[1", "shop_wizard_spawn_top[rot[2", "shop_wizard_spawn_top[rot[3", "shop_wizard_spawn_top[rot[4", "shop_wizard_spawn_side", "shop_wizard_spawn_face"],
+           harvestType: "rock",
+           rootMetaDesc: "Wizard Shop Spawn Block|meta|rot1",
+           description: {
+             translationKey: "item:wizardShopSpawnBlockDescription"
```

#### 1075. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6091-L6102` → after: `L8115-L8130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8115-L8130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8115-L8130) · [Before (L6091-L6102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6091-L6102)

```diff
-         }),
-         ...(0, jB.F)((BB => `${BB} Seeking Paintball Explosive Item`), {
-           displayName: BB => ({
-             translationKey: `item:${(0,YB.ef)(BB)}SeekingPaintballExplosive`
-           }),
-           textureInfo: BB => `explosive_paint_seeking_${(0,YB.if)(BB)}`,
-           type: "Item",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:seekingPaintballExplosiveDescription"
+         }, [
+           [5, 5, 2, 4, 4, 4],
+           [5, 5, 3, 4, 4, 4],
+           [5, 5, 0, 4, 4, 4],
+           [5, 5, 1, 4, 4, 4]
+         ]),
+         "Generator Spawn Block (Diamond)": {
+           displayName: {
+             translationKey: "item:diamondGeneratorSpawnBlock"
+           },
+           ttb: 1500,
+           textureInfo: ["diamond_gen_spawn_top", "diamond_gen_spawn_side"],
+           texturePerSide: [1, 1, 0, 0, 1, 1],
+           harvestType: "rock",
+           description: {
+             translationKey: "item:diamondGeneratorSpawnBlockDescription"
```

#### 1076. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6104-L6113` → after: `L8132-L8140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8132-L8140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8132-L8140) · [Before (L6104-L6113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6104-L6113)

```diff
-         }),
-         ...(0, jB.F)((BB => `${BB} Quick Paintball Explosive Item`), {
-           displayName: BB => ({
-             translationKey: `item:${(0,YB.ef)(BB)}QuickPaintballExplosive`
-           }),
-           textureInfo: BB => `explosive_paint_quick_${(0,YB.if)(BB)}`,
-           type: "Item",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
+         },
+         "Generator Spawn Block (Moonstone)": {
+           displayName: {
+             translationKey: "item:moonstoneGeneratorSpawnBlock"
+           },
+           ttb: 1500,
+           textureInfo: ["moonstone_gen_spawn_top", "moonstone_gen_spawn_side"],
+           texturePerSide: [1, 1, 0, 0, 1, 1],
+           harvestType: "rock",
```

#### 1077. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6115` → after: `L8142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8142) · [Before (L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6115)

```diff
-             translationKey: "item:quickPaintballExplosiveDescription"
+             translationKey: "item:moonstoneGeneratorSpawnBlockDescription"
```

#### 1078. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6117-L6137` → after: `L8144-L8145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8144-L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8144-L8145) · [Before (L6117-L6137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6117-L6137)

```diff
-         }),
-         ...(0, yB.n)((BB => `${BB} Paint Bow`), {
-           displayName: BB => ({
-             translationKey: `item:${(0,YB.ef)(BB)}PaintBow`
-           }),
-           textureName: BB => `${(0,YB.if)(BB)}_paint_bow`,
-           rootMetaDesc: BB => `${BB} Paint Bow|meta|charging1`,
-           type: "Chargeable",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1,
-           chargeStages: 4,
-           chargeTime: 1500,
-           holdAsAiming: !0,
-           description: {
-             translationKey: "item:paintBowDescription"
- ... (5 more removed lines; see GitHub link above)
+         },
+         "Generator Spawn Block (Ore)": {
```

#### 1079. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6139` → after: `L8147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8147) · [Before (L6139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6139)

```diff
-             translationKey: "item:mobCatcher"
+             translationKey: "item:oreGeneratorSpawnBlock"
```

#### 1080. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6141-L6145` → after: `L8149-L8152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8149-L8152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8149-L8152) · [Before (L6141-L6145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6141-L6145)

```diff
-           type: "Item",
-           textureInfo: "mob_catcher",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           ttb: 1500,
+           textureInfo: ["ore_gen_spawn_top", "ore_gen_spawn_side"],
+           texturePerSide: [1, 1, 0, 0, 1, 1],
+           harvestType: "rock",
```

#### 1081. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6147` → after: `L8154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8154) · [Before (L6147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6147)

```diff
-             translationKey: "item:mobCatcherDescription"
+             translationKey: "item:oreGeneratorSpawnBlockDescription"
```

#### 1082. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6150-L6151` → after: `L8157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8157) · [Before (L6150-L6151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6150-L6151)

```diff
-         ...(0, yB.f)(),
-         ...(0, yB.h)("Timed Spike Bomb", {
+         "Goal Block (Red)": {
```

#### 1083. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6153` → after: `L8159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8159) · [Before (L6153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6153)

```diff
-             translationKey: "item:timedSpikeBomb"
+             translationKey: "item:redGoalBlock"
```

#### 1084. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6155-L6159` → after: `L8161-L8164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8161-L8164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8161-L8164) · [Before (L6155-L6159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6155-L6159)

```diff
-           type: "Chargeable",
-           textureName: "timed_spike_bomb",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           ttb: 1500,
+           textureInfo: ["explosive_paint_red_top", "red_spawn_block_top[rot[3"],
+           texturePerSide: [1, 1, 0, 0, 1, 1],
+           harvestType: "rock",
```

#### 1085. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6161-L6168` → after: `L8166-L8169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8166-L8169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8166-L8169) · [Before (L6161-L6168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6161-L6168)

```diff
-             translationKey: "item:timedSpikeBombDescription"
-           },
-           chargeStages: 4,
-           chargeTime: 2e3,
-           chargeSound: "fallsmall",
-           rootMetaDesc: "Timed Spike Bomb|meta|charging1"
-         }),
-         "Toxin Ball": {
+             translationKey: "item:goalBlockDescription"
+           }
+         },
+         "Goal Block (Blue)": {
```

#### 1086. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6170` → after: `L8171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8171) · [Before (L6170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6170)

```diff
-             translationKey: "item:toxinBall"
+             translationKey: "item:blueGoalBlock"
```

#### 1087. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6172-L6176` → after: `L8173-L8176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8173-L8176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8173-L8176) · [Before (L6172-L6176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6172-L6176)

```diff
-           type: "Item",
-           textureInfo: "toxin_ball",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
+           ttb: 1500,
+           textureInfo: ["explosive_paint_blue_top", "blue_spawn_block_top[rot[3"],
+           texturePerSide: [1, 1, 0, 0, 1, 1],
+           harvestType: "rock",
```

#### 1088. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6178-L6180` → after: `L8178-L8179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8178-L8179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8178-L8179) · [Before (L6178-L6180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6178-L6180)

```diff
-             translationKey: "item:toxinBallDescription"
-           },
-           secondaryDamage: 13
+             translationKey: "item:goalBlockDescription"
+           }
```

#### 1089. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6182` → after: `L8181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8181) · [Before (L6182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6182)

```diff
-         "Aura XP Fragment": {
+         "Finish Block": {
```

#### 1090. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6184` → after: `L8183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8183) · [Before (L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6184)

```diff
-             translationKey: "item:auraXpFragment"
+             translationKey: "item:finishBlock"
```

#### 1091. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6186-L6192` → after: `L8185-L8187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8185-L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8185-L8187) · [Before (L6186-L6192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6186-L6192)

```diff
-           type: "Chargeable",
-           textureInfo: "aura_xp_fragment",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           eatable: !0,
-           chargeSound: "eat1",
+           ttb: 1500,
+           textureInfo: "finish_block",
+           harvestType: "rock",
```

#### 1092. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6194-L6198` → after: `L8189-L8190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8189-L8190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8189-L8190) · [Before (L6194-L6198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6194-L6198)

```diff
-             translationKey: "item:auraXpFragmentDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 500,
-           rootMetaDesc: "Aura XP Fragment|meta|charging1"
+             translationKey: "item:finishBlockDescription"
+           }
```

#### 1093. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6200` → after: `L8192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8192) · [Before (L6200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6200)

```diff
-         "Aura XP Orb": {
+         "Drop Location Block": {
```

#### 1094. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6202` → after: `L8194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8194) · [Before (L6202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6202)

```diff
-             translationKey: "item:auraXpOrb"
+             translationKey: "item:dropLocationBlock"
```

#### 1095. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6204-L6229` → after: `L8196-L8199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8196-L8199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8196-L8199) · [Before (L6204-L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6204-L6229)

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
-           },
-           chargeStages: 1,
-           chargeTime: 1250,
-           rootMetaDesc: "Aura XP Orb|meta|charging1"
-         },
-         "Aura XP Potion": {
-           displayName: {
- ... (10 more removed lines; see GitHub link above)
+           ttb: 1500,
+           textureInfo: ["drop_location_block_top", "drop_location_block_side"],
+           texturePerSide: [1, 1, 0, 0, 1, 1],
+           harvestType: "rock",
```

#### 1096. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6231-L6235` → after: `L8201-L8202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8201-L8202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8201-L8202) · [Before (L6231-L6235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6231-L6235)

```diff
-             translationKey: "item:auraXpPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Aura XP Potion|meta|charging1"
+             translationKey: "item:dropLocationBlockDescription"
+           }
```

#### 1097. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6237` → after: `L8204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8204) · [Before (L6237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6237)

```diff
-         "Aura XP Potion II": {
+         "Obby Death Block": {
```

#### 1098. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6239` → after: `L8206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8206) · [Before (L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6239)

```diff
-             translationKey: "item:auraXpPotionII"
+             translationKey: "item:obbyDeathBlock"
```

#### 1099. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6241-L6248` → after: `L8208-L8210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8208-L8210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8208-L8210) · [Before (L6241-L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6241-L6248)

```diff
-           type: "Chargeable",
-           textureInfo: "aura_xp_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           stackable: !1,
-           afterEatenItem: "Empty Bottle",
+           ttb: 1500,
+           textureInfo: "obby_death_block",
+           harvestType: "rock",
```

#### 1100. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6250-L6254` → after: `L8212-L8213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8212-L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8212-L8213) · [Before (L6250-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6250-L6254)

```diff
-             translationKey: "item:auraXpPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Aura XP Potion II|meta|charging1"
+             translationKey: "item:obbyDeathBlockDescription"
+           }
```

#### 1101. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6256` → after: `L8215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8215) · [Before (L6256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6256)

```diff
-         "Splash Aura XP Potion": {
+         "Obby Absorb Block": {
```

#### 1102. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6258` → after: `L8217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8217) · [Before (L6258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6258)

```diff
-             translationKey: "item:splashAuraXpPotion"
+             translationKey: "item:obbyAbsorbBlock"
```

#### 1103. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6260-L6264` → after: `L8219-L8221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8219-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8219-L8221) · [Before (L6260-L6264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6260-L6264)

```diff
-           type: "Item",
-           textureInfo: "splash_aura_xp_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           ttb: 1500,
+           textureInfo: "obby_absorb_block",
+           harvestType: "rock",
```

#### 1104. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6266` → after: `L8223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L8223) · [Before (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L6266)

```diff
-             translationKey: "item:splashAuraXpPotionDescription"
+             translationKey: "item:obbyAbsorbBlockDescription"
```
