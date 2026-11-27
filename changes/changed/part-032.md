# Changed — Bundle Modifications Report (Part 032 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `32 / 86` (**308** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 031](part-031.md) · [Part 033 →](part-033.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/85.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/85.js` (1674 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d)

#### 1486. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8160-L8167` → after: `L11317-L11329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11317-L11329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11317-L11329) · [Before (L8160-L8167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8160-L8167)

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
+         ...(0, jW.Xb)("Yellow Directional Arrow", {
```

#### 1487. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8169` → after: `L11331-L11334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11331-L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11331-L11334) · [Before (L8169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8169)

```diff
-             translationKey: "item:ironSpear"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:yellow)"
+             }
```

#### 1488. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8171-L8178` → after: `L11336-L11353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11336-L11353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11336-L11353) · [Before (L8171-L8178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8171-L8178)

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
+         ...(0, jW.Xb)("Lime Directional Arrow", {
+           displayName: {
+             translationKey: "item:directionalArrow",
+             params: {
+ ... (2 more added lines; see GitHub link above)
```

#### 1489. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8180-L8187` → after: `L11355-L11367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11355-L11367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11355-L11367) · [Before (L8180-L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8180-L8187)

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
+         ...(0, jW.Xb)("Pink Directional Arrow", {
```

#### 1490. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8189` → after: `L11369-L11372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11369-L11372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11369-L11372) · [Before (L8189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8189)

```diff
-             translationKey: "item:goldSpear"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:pink)"
+             }
```

#### 1491. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8191-L8198` → after: `L11374-L11391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11374-L11391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11374-L11391) · [Before (L8191-L8198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8191-L8198)

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
+         ...(0, jW.Xb)("Grey Directional Arrow", {
+           displayName: {
+             translationKey: "item:directionalArrow",
+             params: {
+ ... (2 more added lines; see GitHub link above)
```

#### 1492. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8200-L8207` → after: `L11393-L11405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11393-L11405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11393-L11405) · [Before (L8200-L8207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8200-L8207)

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
+         ...(0, jW.Xb)("Light Grey Directional Arrow", {
```

#### 1493. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8209` → after: `L11407-L11410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11407-L11410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11407-L11410) · [Before (L8209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8209)

```diff
-             translationKey: "item:diamondSpear"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:light_gray)"
+             }
```

#### 1494. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8211-L8218` → after: `L11412-L11429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11412-L11429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11412-L11429) · [Before (L8211-L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8211-L8218)

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
+         ...(0, jW.Xb)("Cyan Directional Arrow", {
+           displayName: {
+             translationKey: "item:directionalArrow",
+             params: {
+ ... (2 more added lines; see GitHub link above)
```

#### 1495. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8220-L8227` → after: `L11431-L11443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11431-L11443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11431-L11443) · [Before (L8220-L8227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8220-L8227)

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
+         ...(0, jW.Xb)("Purple Directional Arrow", {
```

#### 1496. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8229` → after: `L11445-L11448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11445-L11448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11445-L11448) · [Before (L8229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8229)

```diff
-             translationKey: "item:moonstoneSpear"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:purple)"
+             }
```

#### 1497. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8231-L8372` → after: `L11450-L11467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11450-L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11450-L11467) · [Before (L8231-L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8231-L8372)

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
+         ...(0, jW.Xb)("Blue Directional Arrow", {
+           displayName: {
+             translationKey: "item:directionalArrow",
+             params: {
+ ... (2 more added lines; see GitHub link above)
```

#### 1498. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8374-L8379` → after: `L11469-L11481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11469-L11481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11469-L11481) · [Before (L8374-L8379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8374-L8379)

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
+         ...(0, jW.Xb)("Brown Directional Arrow", {
```

#### 1499. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8381` → after: `L11483-L11486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11483-L11486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11483-L11486) · [Before (L8381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8381)

```diff
-             translationKey: "item:woodBoomerang"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:brown)"
+             }
```

#### 1500. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8383-L8390` → after: `L11488-L11505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11488-L11505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11488-L11505) · [Before (L8383-L8390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8383-L8390)

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
+         ...(0, jW.Xb)("Green Directional Arrow", {
+           displayName: {
+             translationKey: "item:directionalArrow",
+             params: {
+ ... (2 more added lines; see GitHub link above)
```

#### 1501. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8392-L8397` → after: `L11507-L11519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11507-L11519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11507-L11519) · [Before (L8392-L8397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8392-L8397)

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
+         ...(0, jW.Xb)("Red Directional Arrow", {
```

#### 1502. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8399` → after: `L11521-L11524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11521-L11524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11521-L11524) · [Before (L8399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8399)

```diff
-             translationKey: "item:stoneBoomerang"
+             translationKey: "item:directionalArrow",
+             params: {
+               colour: "$t(colour:red)"
+             }
```

#### 1503. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8401-L8408` → after: `L11526-L11543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11526-L11543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11526-L11543) · [Before (L8401-L8408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8401-L8408)

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
+         ...(0, jW.Xb)("Black Directional Arrow", {
+           displayName: {
+             translationKey: "item:directionalArrow",
+             params: {
+ ... (2 more added lines; see GitHub link above)
```

#### 1504. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8410-L8413` → after: `L11545-L11644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11545-L11644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11545-L11644) · [Before (L8410-L8413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8410-L8413)

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

#### 1505. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8415` → after: `L11646-L11855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11646-L11855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11646-L11855) · [Before (L8415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8415)

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
+         ...(0, jW.Ab)("Torch", {
+           ttb: 300,
+           harvestType: "cuttable",
+           itemTexture: "torch",
+           solid: !1,
+           model: "CustomModel",
+           modelScale: 8,
+ ... (194 more added lines; see GitHub link above)
```

#### 1506. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8417-L8426` → after: `L11857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11857) · [Before (L8417-L8426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8417-L8426)

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

#### 1507. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8428-L8431` → after: `L11859-L11865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11859-L11865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11859-L11865) · [Before (L8428-L8431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8428-L8431)

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

#### 1508. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8433` → after: `L11867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11867) · [Before (L8433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8433)

```diff
-         "Gold Boomerang": {
+         "Overgrown Pine Grass Block": {
```

#### 1509. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8435` → after: `L11869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11869) · [Before (L8435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8435)

```diff
-             translationKey: "item:goldBoomerang"
+             translationKey: "item:overgrownPineGrassBlock"
```

#### 1510. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8437-L8449` → after: `L11871-L11877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11871-L11877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11871-L11877) · [Before (L8437-L8449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8437-L8449)

```diff
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
-           level: 4
+           ttb: 720,
+           textureInfo: "pine_grass_block",
+           harvestType: "granule",
+           soundType: {
+             break: "grass",
+             place: "grass"
+           }
```

#### 1511. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8451` → after: `L11879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11879) · [Before (L8451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8451)

```diff
-         "Diamond Boomerang": {
+         "Overgrown Jungle Grass Block": {
```

#### 1512. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8453` → after: `L11881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11881) · [Before (L8453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8453)

```diff
-             translationKey: "item:diamondBoomerang"
+             translationKey: "item:overgrownJungleGrassBlock"
```

#### 1513. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8455-L8462` → after: `L11883-L11896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11883-L11896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11883-L11896) · [Before (L8455-L8462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8455-L8462)

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

#### 1514. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8464-L8467` → after: `L11898-L11901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11898-L11901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11898-L11901) · [Before (L8464-L8467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8464-L8467)

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

#### 1515. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8469` → after: `L11903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11903) · [Before (L8469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8469)

```diff
-         "Moonstone Boomerang": {
+         ...(0, jW.Gb)("Pipe", "pipe", {
```

#### 1516. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8471` → after: `L11905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11905) · [Before (L8471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8471)

```diff
-             translationKey: "item:moonstoneBoomerang"
+             translationKey: "item:pipe"
```

#### 1517. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8480` → after: `L11908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11908) · [Before (L8480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8480)

```diff
-             translationKey: "item:boomerangDescription"
+             translationKey: "item:pipeDescription"
```

#### 1518. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8482-L8487` → after: `L11910-L11922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11910-L11922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11910-L11922) · [Before (L8482-L8487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8482-L8487)

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
+         ...(0, jW.v)(),
+         "Auto Crafter": {
```

#### 1519. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8489` → after: `L11924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11924) · [Before (L8489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8489)

```diff
-             translationKey: "item:woodClub"
+             translationKey: "item:autoCrafter"
```

#### 1520. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8499` → after: `L11927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11927) · [Before (L8499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8499)

```diff
-             translationKey: "item:clubDescription"
+             translationKey: "item:autoCrafterDescription"
```

#### 1521. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8501-L8504` → after: `L11929-L11934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11929-L11934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11929-L11934) · [Before (L8501-L8504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8501-L8504)

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

#### 1522. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8506` → after: `L11936-L11937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11936-L11937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11936-L11937) · [Before (L8506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8506)

```diff
-         "Stone Club": {
+         ...(0, jW.Tb)(),
+         ...(0, jW.Gb)("Extractor Pipe", "extractor_pipe", {
```

#### 1523. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8508` → after: `L11939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11939) · [Before (L8508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8508)

```diff
-             translationKey: "item:stoneClub"
+             translationKey: "item:extractorPipe"
```

#### 1524. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8518` → after: `L11942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11942) · [Before (L8518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8518)

```diff
-             translationKey: "item:clubDescription"
+             translationKey: "item:extractorPipeDescription"
```

#### 1525. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8520-L8525` → after: `L11944-L11955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11944-L11955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11944-L11955) · [Before (L8520-L8525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8520-L8525)

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

#### 1526. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8527` → after: `L11957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11957) · [Before (L8527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8527)

```diff
-             translationKey: "item:ironClub"
+             translationKey: "item:splitterPipe"
```

#### 1527. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8537` → after: `L11960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11960) · [Before (L8537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8537)

```diff
-             translationKey: "item:clubDescription"
+             translationKey: "item:splitterPipeDescription"
```

#### 1528. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8539-L8542` → after: `L11962-L11971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11962-L11971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11962-L11971) · [Before (L8539-L8542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8539-L8542)

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

#### 1529. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8544` → after: `L11973-L11974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11973-L11974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11973-L11974) · [Before (L8544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8544)

```diff
-         "Gold Club": {
+         ...(0, jW.fc)(),
+         ...(0, jW.Gb)("Wire", "wire", {
```

#### 1530. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8546` → after: `L11976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11976) · [Before (L8546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8546)

```diff
-             translationKey: "item:goldClub"
+             translationKey: "item:wire"
```

#### 1531. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8556` → after: `L11979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11979) · [Before (L8556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8556)

```diff
-             translationKey: "item:clubDescription"
+             translationKey: "item:wireDescription"
```

#### 1532. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8558-L8563` → after: `L11981-L11992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11981-L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11981-L11992) · [Before (L8558-L8563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8558-L8563)

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
+         ...(0, jW.eb)("Filter Pipe", "filter_pipe", "pz", {
```

#### 1533. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8565` → after: `L11994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11994) · [Before (L8565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8565)

```diff
-             translationKey: "item:diamondClub"
+             translationKey: "item:filterPipe"
```

#### 1534. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8575` → after: `L11997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11997) · [Before (L8575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8575)

```diff
-             translationKey: "item:clubDescription"
+             translationKey: "item:filterPipeDescription"
```

#### 1535. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8577-L8582` → after: `L11999-L12011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR11999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L11999-L12011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L11999-L12011) · [Before (L8577-L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8577-L8582)

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
+         ...(0, jW.pb)("Merger Pipe", "merger_pipe", "pz", {
```

#### 1536. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8584` → after: `L12013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12013) · [Before (L8584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8584)

```diff
-             translationKey: "item:moonstoneClub"
+             translationKey: "item:mergerPipe"
```

#### 1537. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8594` → after: `L12016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12016) · [Before (L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8594)

```diff
-             translationKey: "item:clubDescription"
+             translationKey: "item:mergerPipeDescription"
```

#### 1538. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8596-L8601` → after: `L12018-L12030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12018-L12030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12018-L12030) · [Before (L8596-L8601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8596-L8601)

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

#### 1539. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8603` → after: `L12032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12032) · [Before (L8603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8603)

```diff
-             translationKey: "item:woodMace"
+             translationKey: "item:autoHarvester"
```

#### 1540. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8612` → after: `L12035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12035) · [Before (L8612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8612)

```diff
-             translationKey: "item:maceDescription"
+             translationKey: "item:autoHarvesterDescription"
```

#### 1541. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8614-L8617` → after: `L12037-L12042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12037-L12042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12037-L12042) · [Before (L8614-L8617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8614-L8617)

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

#### 1542. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8619` → after: `L12044-L12045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12044-L12045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12044-L12045) · [Before (L8619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8619)

```diff
-         "Stone Mace": {
+         ...(0, jW.wb)("Stalker"),
+         "Lunite Ore": {
```

#### 1543. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8621` → after: `L12047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12047) · [Before (L8621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8621)

```diff
-             translationKey: "item:stoneMace"
+             translationKey: "item:luniteOre"
```

#### 1544. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8623-L8630` → after: `L12049-L12056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12049-L12056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12049-L12056) · [Before (L8623-L8630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8623-L8630)

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

#### 1545. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8632-L8639` → after: `L12058-L12059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12058-L12059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12058-L12059) · [Before (L8632-L8639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8632-L8639)

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
+             "Golem Pickaxe": xW.p
```

#### 1546. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8648` → after: `L12062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12062) · [Before (L8648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8648)

```diff
-             translationKey: "item:maceDescription"
+             translationKey: "item:luniteOreDescription"
```

#### 1547. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8650-L8653` → after: `L12064-L12065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12064-L12065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12064-L12065) · [Before (L8650-L8653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8650-L8653)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 3
+           onMinedAura: 40,
+           oA: [10, 3, 12]
```

#### 1548. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8655` → after: `L12067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12067) · [Before (L8655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8655)

```diff
-         "Gold Mace": {
+         "Block of Lunite": {
```

#### 1549. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8657` → after: `L12069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12069) · [Before (L8657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8657)

```diff
-             translationKey: "item:goldMace"
+             translationKey: "item:blockOfLunite"
```

#### 1550. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8666` → after: `L12072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12072) · [Before (L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8666)

```diff
-             translationKey: "item:maceDescription"
+             translationKey: "item:blockOfLuniteDescription"
```

#### 1551. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8668-L8671` → after: `L12074-L12076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12074-L12076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12074-L12076) · [Before (L8668-L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8668-L8671)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 4
+           ttb: 6750,
+           textureInfo: "lunite_block",
+           harvestType: "rock"
```

#### 1552. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8673` → after: `L12078-L12079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12078-L12079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12078-L12079) · [Before (L8673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8673)

```diff
-         "Diamond Mace": {
+         ...(0, jW.kb)(),
+         "Lunite Auto Crafter": {
```

#### 1553. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8675` → after: `L12081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12081) · [Before (L8675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8675)

```diff
-             translationKey: "item:diamondMace"
+             translationKey: "item:luniteAutoCrafter"
```

#### 1554. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8684` → after: `L12084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12084) · [Before (L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8684)

```diff
-             translationKey: "item:maceDescription"
+             translationKey: "item:luniteAutoCrafterDescription"
```

#### 1555. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8686-L8689` → after: `L12086-L12091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12086-L12091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12086-L12091) · [Before (L8686-L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8686-L8689)

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

#### 1556. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8691` → after: `L12093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12093) · [Before (L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8691)

```diff
-         "Moonstone Mace": {
+         "Lunite Auto Harvester": {
```

#### 1557. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8693` → after: `L12095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12095) · [Before (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8693)

```diff
-             translationKey: "item:moonstoneMace"
+             translationKey: "item:luniteAutoHarvester"
```

#### 1558. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8702` → after: `L12098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12098) · [Before (L8702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8702)

```diff
-             translationKey: "item:maceDescription"
+             translationKey: "item:luniteAutoHarvesterDescription"
```

#### 1559. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8704-L8707` → after: `L12100-L12105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12100-L12105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12100-L12105) · [Before (L8704-L8707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8704-L8707)

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

#### 1560. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8709` → after: `L12107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12107) · [Before (L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8709)

```diff
-         "Wood Whip": {
+         "Bowling Alley Floor": {
```

#### 1561. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8711-L8721` → after: `L12109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12109) · [Before (L8711-L8721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8711-L8721)

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

#### 1562. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8723-L8726` → after: `L12111-L12131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12111-L12131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12111-L12131) · [Before (L8723-L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8723-L8726)

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
+         ...(0, jW.wb)("Crone"),
+         ...(0, jW.wb)("Slime"),
+         "Slime Trail|meta|rot1|Decaying": {
+           ...KW
+         },
+         "Slime Trail|meta|rot2|Decaying": {
+           ...KW
+         },
+ ... (5 more added lines; see GitHub link above)
```

#### 1563. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8728` → after: `L12133-L12137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12133-L12137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12133-L12137) · [Before (L8728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8728)

```diff
-         "Stone Whip": {
+         ...(0, jW.wb)("Iron Guardian"),
+         ...(0, jW.wb)("Gold Guardian"),
+         ...(0, jW.wb)("Diamond Guardian"),
+         ...(0, jW.wb)("Moonstone Guardian"),
+         "Dry Grass Block": {
```

#### 1564. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8730` → after: `L12139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12139) · [Before (L8730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8730)

```diff
-             translationKey: "item:stoneWhip"
+             translationKey: "item:dryGrassBlock"
```

#### 1565. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8732-L8745` → after: `L12141-L12148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12141-L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12141-L12148) · [Before (L8732-L8745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8732-L8745)

```diff
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

#### 1566. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8747` → after: `L12150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12150) · [Before (L8747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8747)

```diff
-         "Iron Whip": {
+         "Overgrown Dry Grass Block": {
```

#### 1567. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8749-L8759` → after: `L12152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12152) · [Before (L8749-L8759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8749-L8759)

```diff
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
+             translationKey: "item:overgrownDryGrassBlock"
```

#### 1568. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8761-L8764` → after: `L12154-L12160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12154-L12160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12154-L12160) · [Before (L8761-L8764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8761-L8764)

```diff
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

#### 1569. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8766` → after: `L12162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12162) · [Before (L8766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8766)

```diff
-         "Gold Whip": {
+         "Dead Bush": {
```

#### 1570. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8768-L8778` → after: `L12164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12164) · [Before (L8768-L8778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8768-L8778)

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

#### 1571. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8780-L8783` → after: `L12166-L12400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12166-L12400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12166-L12400) · [Before (L8780-L8783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8780-L8783)

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

#### 1572. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8785` → after: `L12402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12402) · [Before (L8785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8785)

```diff
-         "Diamond Whip": {
+         "Toxic Waste": {
```

#### 1573. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8787` → after: `L12404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12404) · [Before (L8787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8787)

```diff
-             translationKey: "item:diamondWhip"
+             translationKey: "item:toxicWaste"
```

#### 1574. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8789-L8797` → after: `L12406-L12409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12406-L12409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12406-L12409) · [Before (L8789-L8797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8789-L8797)

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

#### 1575. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8799-L8802` → after: `L12411-L12414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12411-L12414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12411-L12414) · [Before (L8799-L8802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8799-L8802)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5
+           dl: !0,
+           drops: null,
+           harvestType: "rock",
+           oA: [6, 14, 4]
```

#### 1576. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8804` → after: `L12416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12416) · [Before (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8804)

```diff
-         "Moonstone Whip": {
+         "Ancient Maple Log": {
```

#### 1577. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8806` → after: `L12418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12418) · [Before (L8806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8806)

```diff
-             translationKey: "item:moonstoneWhip"
+             translationKey: "item:ancientMapleLog"
```

#### 1578. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8816` → after: `L12421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12421) · [Before (L8816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8816)

```diff
-             translationKey: "item:whipDescription"
+             translationKey: "item:ancientMapleLogDescription"
```

#### 1579. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8818-L8821` → after: `L12423-L12425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12423-L12425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12423-L12425) · [Before (L8818-L8821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8818-L8821)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5
+           ttb: 2400,
+           textureInfo: "log_ancient_maple",
+           harvestType: "wood"
```

#### 1580. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8823` → after: `L12427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12427) · [Before (L8823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8823)

```diff
-         "Beef Stew": {
+         "Evil Lucky Block": {
```

#### 1581. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8825` → after: `L12429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12429) · [Before (L8825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8825)

```diff
-             translationKey: "item:beefStew"
+             translationKey: "item:evilLuckyBlock"
```

#### 1582. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8827-L8831` → after: `L12431-L12434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12431-L12434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12431-L12434) · [Before (L8827-L8831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8827-L8831)

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

#### 1583. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8833` → after: `L12436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12436) · [Before (L8833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8833)

```diff
-             translationKey: "item:beefStewDescription"
+             translationKey: "item:evilLuckyBlockDescription"
```

#### 1584. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8836-L8838` → after: `L12439-L12594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12439-L12594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12439-L12594) · [Before (L8836-L8838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8836-L8838)

```diff
-         Chicken: {
-           displayName: {
-             translationKey: "item:chicken"
+         ...(0, jW.gc)(yW),
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

#### 1585. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8840-L8848` → after: `L12596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12596) · [Before (L8840-L8848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8840-L8848)

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
+           oA: [9, 15, 5]
```

#### 1586. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8850-L8861` → after: `L12598-L12607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12598-L12607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12598-L12607) · [Before (L8850-L8861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8850-L8861)

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

#### 1587. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8864` → after: `L12610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12610) · [Before (L8864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8864)

```diff
-         Egg: {
+         Ash: {
```

#### 1588. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8866` → after: `L12612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12612) · [Before (L8866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8866)

```diff
-             translationKey: "item:egg"
+             translationKey: "item:ash"
```

#### 1589. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8868-L8875` → after: `L12614-L12619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12614-L12619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12614-L12619) · [Before (L8868-L8875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8868-L8875)

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

#### 1590. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8878` → after: `L12622-L12623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12622-L12623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12622-L12623) · [Before (L8878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8878)

```diff
-         "Fish N Chips": {
+         ...(0, NW.j)(),
+         Darkstone: {
```

#### 1591. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8880` → after: `L12625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12625) · [Before (L8880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8880)

```diff
-             translationKey: "item:fishNChips"
+             translationKey: "item:darkstone"
```

#### 1592. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8882-L8889` → after: `L12627-L12629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12627-L12629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12627-L12629) · [Before (L8882-L8889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8882-L8889)

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

#### 1593. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8891` → after: `L12631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12631) · [Before (L8891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8891)

```diff
-         "Fried Rice": {
+         "Darkstone Bricks": {
```

#### 1594. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8893` → after: `L12633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12633) · [Before (L8893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8893)

```diff
-             translationKey: "item:friedRice"
+             translationKey: "item:darkstoneBricks"
```

#### 1595. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8895-L8902` → after: `L12635-L12637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12635-L12637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12635-L12637) · [Before (L8895-L8902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8895-L8902)

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

#### 1596. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8904` → after: `L12639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12639) · [Before (L8904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8904)

```diff
-         Lettuce: {
+         "Cracked Darkstone Bricks": {
```

#### 1597. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8906` → after: `L12641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12641) · [Before (L8906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8906)

```diff
-             translationKey: "item:lettuce"
+             translationKey: "item:crackedDarkstoneBricks"
```

#### 1598. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8908-L8916` → after: `L12643-L12645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12643-L12645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12643-L12645) · [Before (L8908-L8916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8908-L8916)

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

#### 1599. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8918` → after: `L12647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12647) · [Before (L8918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8918)

```diff
-         Omelette: {
+         "Molten Darkstone Bricks": {
```

#### 1600. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8920` → after: `L12649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12649) · [Before (L8920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8920)

```diff
-             translationKey: "item:omelette"
+             translationKey: "item:moltenDarkstoneBricks"
```

#### 1601. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8922-L8930` → after: `L12651-L12654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12651-L12654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12651-L12654) · [Before (L8922-L8930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8922-L8930)

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
+           oA: [9, 3, 1]
```

#### 1602. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8932` → after: `L12656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12656) · [Before (L8932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8932)

```diff
-         Onion: {
+         "Engraved Darkstone": {
```

#### 1603. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8934` → after: `L12658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12658) · [Before (L8934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8934)

```diff
-             translationKey: "item:onion"
+             translationKey: "item:engravedDarkstone"
```

#### 1604. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8936-L8944` → after: `L12660-L12662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12660-L12662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12660-L12662) · [Before (L8936-L8944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8936-L8944)

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

#### 1605. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8946` → after: `L12664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12664) · [Before (L8946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8946)

```diff
-         "Red Cabbage": {
+         "Smooth Darkstone": {
```

#### 1606. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8948` → after: `L12666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12666) · [Before (L8948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8948)

```diff
-             translationKey: "item:redCabbage"
+             translationKey: "item:smoothDarkstone"
```

#### 1607. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8950-L8957` → after: `L12668-L12670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12668-L12670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12668-L12670) · [Before (L8950-L8957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8950-L8957)

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

#### 1608. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8959-L8970` → after: `L12672-L12681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12672-L12681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12672-L12681) · [Before (L8959-L8970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8959-L8970)

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
+         ...(0, jW.bb)(UW.i, TW),
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

#### 1609. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8972` → after: `L12683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12683) · [Before (L8972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8972)

```diff
-         Salad: {
+         "Scorpion Eggs Block": {
```

#### 1610. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8974` → after: `L12685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12685) · [Before (L8974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8974)

```diff
-             translationKey: "item:salad"
+             translationKey: "item:scorpionEggsBlock"
```

#### 1611. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8976-L8983` → after: `L12687-L12692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12687-L12692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12687-L12692) · [Before (L8976-L8983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8976-L8983)

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

#### 1612. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8986` → after: `L12695-L12773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12695-L12773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12695-L12773) · [Before (L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8986)

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

#### 1613. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8988` → after: `L12775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12775) · [Before (L8988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8988)

```diff
-             translationKey: "item:stuffedPepper"
+             translationKey: "item:stoneGenerator"
```

#### 1614. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8996-L8997` → after: `L12778-L12784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12778-L12784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12778-L12784) · [Before (L8996-L8997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8996-L8997)

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

#### 1615. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8999` → after: `L12786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12786) · [Before (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L8999)

```diff
-         Sushi: {
+         "Wheat Helper": {
```

#### 1616. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9001` → after: `L12788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12788) · [Before (L9001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9001)

```diff
-             translationKey: "item:sushi"
+             translationKey: "item:wheatHelper"
```

#### 1617. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9010-L9011` → after: `L12791-L12798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12791-L12798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12791-L12798) · [Before (L9010-L9011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9010-L9011)

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

#### 1618. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9013` → after: `L12800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12800) · [Before (L9013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9013)

```diff
-         Tomato: {
+         "Carrot Helper": {
```

#### 1619. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9015` → after: `L12802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12802) · [Before (L9015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9015)

```diff
-             translationKey: "item:tomato"
+             translationKey: "item:carrotHelper"
```

#### 1620. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9024-L9025` → after: `L12805-L12812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12805-L12812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12805-L12812) · [Before (L9024-L9025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9024-L9025)

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

#### 1621. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9027` → after: `L12814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12814) · [Before (L9027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9027)

```diff
-         "Vegetable Soup": {
+         "Melon Helper": {
```

#### 1622. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9029` → after: `L12816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12816) · [Before (L9029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9029)

```diff
-             translationKey: "item:vegetableSoup"
+             translationKey: "item:melonHelper"
```

#### 1623. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9037-L9038` → after: `L12819-L12826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12819-L12826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12819-L12826) · [Before (L9037-L9038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9037-L9038)

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

#### 1624. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9040-L9044` → after: `L12828-L12832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12828-L12832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12828-L12832) · [Before (L9040-L9044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9040-L9044)

```diff
-         "Common Lottery Ticket": {
-           displayName: [{
-             str: "Common Lottery Ticket",
-             style: {
-               color: "#4d4d4d"
+         ... function() {
+           const WW = {};
+           for (const {
+               wood: iW,
+               block: OW
```

#### 1625. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9046-L9053` → after: `L12834-L13289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR12834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L12834-L13289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L12834-L13289) · [Before (L9046-L9053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9046-L9053)

```diff
-           }],
-           description: "Take it to the Lottery stall in the spawn hub to redeem it for a reward.",
-           type: "Item",
-           textureInfo: "book",
-           heldItemGlb: "Book",
-           weight: 0,
-           heldItemScale: 1,
-           stackable: !0
+             of sW.c) WW[OW] = {
+             displayName: {
+               translationKey: `item:${(0,ZW.qe)(OW)}`
+             },
+             ttb: 960,
+             harvestType: "wood",
+             ..."Maple" === iW ? {
+               showInCreativeInven: !1
+             } : {},
+             ...SW(OW, (0, ZW.ue)(OW), {
+               rotatable: !1
+             })
+           };
+           return WW
+         }(),
+         ...(0, PW.y)(),
+ ... (440 more added lines; see GitHub link above)
```

#### 1626. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9055-L9068` → after: `L13291-L13331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR13291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L13291-L13331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L13291-L13331) · [Before (L9055-L9068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9055-L9068)

```diff
-         "Uncommon Lottery Ticket": {
-           displayName: [{
-             str: "Uncommon Lottery Ticket",
-             style: {
-               color: "#A9FF21"
-             }
-           }],
-           description: "Take it to the Lottery stall in the spawn hub to redeem it for a reward.",
-           type: "Item",
-           textureInfo: "book",
-           heldItemGlb: "Book",
-           weight: 0,
-           heldItemScale: 1,
-           stackable: !0
+         NW = {};
+       for (let LW = 0; LW < OW.length; LW++) {
+         var PW;
+         Object.assign(NW, {
+           [`${WW}_stage${LW+1}`]: Object.assign({
+             ...EW
+           }, {
+             textureInfo: OW[LW]
+           }, null !== (PW = null === mW || void 0 === mW ? void 0 : mW[LW + 1]) && void 0 !== PW ? PW : {})
+         })
+       }
+       return NW
+     }
+ 
+     function lW(WW, iW) {
+       console.assert("meta|rot1|empty" === iW.rootMetaDesc.split("|").slice(1).join("|"), "mailbox root block .rootMetaDesc must be |meta|rot1|empty");
+ ... (25 more added lines; see GitHub link above)
```

#### 1627. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9070-L9083` → after: `L13333-L13334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR13333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L13333-L13334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L13333-L13334) · [Before (L9070-L9083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9070-L9083)

```diff
-         "Rare Lottery Ticket": {
-           displayName: [{
-             str: "Rare Lottery Ticket",
-             style: {
-               color: "#84E0FF"
-             }
-           }],
-           description: "Take it to the Lottery stall in the spawn hub to redeem it for a reward.",
-           type: "Item",
-           textureInfo: "book",
-           heldItemGlb: "Book",
-           weight: 0,
-           heldItemScale: 1,
-           stackable: !0
+         [`${WW}|meta|rot3|empty`]: {
+           ...EW
```

#### 1628. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9085-L9098` → after: `L13336-L13337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR13336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L13336-L13337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L13336-L13337) · [Before (L9085-L9098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9085-L9098)

```diff
-         "Epic Lottery Ticket": {
-           displayName: [{
-             str: "Epic Lottery Ticket",
-             style: {
-               color: "#800080"
-             }
-           }],
-           description: "Take it to the Lottery stall in the spawn hub to redeem it for a reward.",
-           type: "Item",
-           textureInfo: "book",
-           heldItemGlb: "Book",
-           weight: 0,
-           heldItemScale: 1,
-           stackable: !0
+         [`${WW}|meta|rot4|empty`]: {
+           ...NW
```

#### 1629. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9100-L9113` → after: `L13339-L13395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR13339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L13339-L13395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L13339-L13395) · [Before (L9100-L9113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9100-L9113)

```diff
-         "Legendary Lottery Ticket": {
-           displayName: [{
-             str: "Legendary Lottery Ticket",
-             style: {
-               color: "#ffa500"
-             }
-           }],
-           description: "Take it to the Lottery stall in the spawn hub to redeem it for a reward.",
-           type: "Item",
-           textureInfo: "book",
-           heldItemGlb: "Book",
-           weight: 0,
-           heldItemScale: 1,
-           stackable: !0
+         [`${WW}|meta|rot1|full`]: Object.assign({
+           ...OW
+         }, {
+           textureInfo: PW
+         }),
+         [`${WW}|meta|rot2|full`]: Object.assign({
+           ...mW
+         }, {
+           textureInfo: PW
+         }),
+         [`${WW}|meta|rot3|full`]: Object.assign({
+           ...EW
+         }, {
+           textureInfo: PW
+         }),
+         [`${WW}|meta|rot4|full`]: Object.assign({
+ ... (41 more added lines; see GitHub link above)
```

#### 1630. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9115-L9122` → after: `L13397-L13406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR13397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L13397-L13406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L13397-L13406) · [Before (L9115-L9122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9115-L9122)

```diff
-         ...(0, yB.l)("Wood Clock", "clock_wood", {
-           displayName: {
-             translationKey: "item:woodClock"
-           },
-           type: "Item",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+         [`${WW}|meta|rot3|books6`]: {
+           ...EW
+         },
+         [`${WW}|meta|rot4|books6`]: {
+           ...NW
+         },
+         [`Empty ${WW}`]: Object.assign({
+           ...OW
+         }, {
+           textureInfo: PW[0],
```

#### 1631. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9124-L9129` → after: `L13408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR13408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L13408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L13408) · [Before (L9124-L9129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9124-L9129)

```diff
-             translationKey: "item:clockDescription"
-           }
-         }),
-         ...(0, yB.l)("Gold Clock", "clock_gold", {
-           displayName: {
-             translationKey: "item:goldClock"
+             translationKey: "item:emptyBookshelfDescription"
```

#### 1632. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9131-L9137` → after: `L13410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR13410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L13410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L13410) · [Before (L9131-L9137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9131-L9137)

```diff
-           type: "Item",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:clockDescription"
-           }
+           rootMetaDesc: `Empty ${WW}|meta|rot1|books0`
```

#### 1633. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9139-L9275` → after: `L13412-L13490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR13412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L13412-L13490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L13412-L13490) · [Before (L9139-L9275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9139-L9275)

```diff
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
-           textureInfo: "lucky_armour_upgrade",
-           weight: 0,
-           heldItemScale: 1,
- ... (121 more removed lines; see GitHub link above)
+         [`Empty ${WW}|meta|rot2|books0`]: Object.assign({
+           ...mW
+         }, {
+           textureInfo: PW[0]
+         }),
+         [`Empty ${WW}|meta|rot3|books0`]: Object.assign({
+           ...EW
+         }, {
+           textureInfo: PW[0]
+         }),
+         [`Empty ${WW}|meta|rot4|books0`]: Object.assign({
+           ...NW
+         }, {
+           textureInfo: PW[0]
+         })
+       };
+ ... (63 more added lines; see GitHub link above)
```

#### 1634. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9278` → after: `L13493-L13496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR13493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L13493-L13496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L13493-L13496) · [Before (L9278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9278)

```diff
-             translationKey: "item:stillWaterBucketDescription"
+             translationKey: EW,
+             params: {
+               colour: `$t(colour:${(0,wW.ue)(LW)})`
+             }
```

#### 1635. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9280-L9286` → after: `L13498-L13589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR13498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L13498-L13589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L13498-L13589) · [Before (L9280-L9286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9280-L9286)

```diff
-           showInCreativeInven: !1,
-           type: "Item",
-           textureInfo: "water_bucket",
-           heldItemGlb: "Water Bucket",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1
+           model: "Slab",
+           slabFullBlock: iW.replace("$colour$", LW),
+           ...tW,
+           rootMetaDesc: `${cW}|meta|rot1|bot`,
+           ...NW
+         }))
+       }
+       return PW
+     }
+     const UW = {
+         bot: (0, mW.d)([
+           [
+             [0, 0, 0],
+             [8, 4, 8]
+           ]
+         ]),
+ ... (76 more added lines; see GitHub link above)
```

#### 1636. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9288-L9302` → after: `L13591-L13609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR13591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L13591-L13609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L13591-L13609) · [Before (L9288-L9302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9288-L9302)

```diff
-         "Still Lava Bucket": {
-           displayName: {
-             translationKey: "item:stillLavaBucket"
-           },
-           description: {
-             translationKey: "item:stillLavaBucketDescription"
-           },
-           showInCreativeInven: !1,
-           type: "Item",
-           textureInfo: "lava_bucket",
-           heldItemGlb: "Lava Bucket",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           dp: [12, 7, 2]
+         [`${WW}|meta|rot1|top`]: {
+           ...OW,
+           sj: UW.top
+         },
+         [`${WW}|meta|rot1|side`]: {
+           ...OW,
+           sj: UW.side1
+         },
+         [`${WW}|meta|rot2|side`]: {
+           ...OW,
+           sj: UW.side2
+         },
+         [`${WW}|meta|rot3|side`]: {
+           ...OW,
+           sj: UW.side3
+         },
+ ... (3 more added lines; see GitHub link above)
```

#### 1637. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9304-L9339` → after: `L13611-L13629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR13611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L13611-L13629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L13611-L13629) · [Before (L9304-L9339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9304-L9339)

```diff
-       };
-     for (const KB of JB.q)
-       for (const BB of KB.materials)
-         for (const OB of KB.kinds) {
-           var qB, ZB, NB, RB;
-           const GB = null === (qB = KB.inheritsFrom) || void 0 === qB ? void 0 : qB.call(KB, OB),
-             DB = (0, JB.m)(BB, OB);
-           if (pB[DB]) throw new Error(`Item family "${KB.name}" would overwrite the existing item "${DB}"`);
-           const QB = {
-               displayName: null !== (ZB = null === (NB = KB.displayName) || void 0 === NB ? void 0 : NB.call(KB, DB)) && void 0 !== ZB ? ZB : DB
-             },
-             oB = null === (RB = KB.description) || void 0 === RB ? void 0 : RB.call(KB, BB, OB);
-           if (void 0 !== oB && (QB.description = oB), !GB) {
-             if (!KB.metadata) throw new Error(`Item family "${KB.name}" declares neither inheritsFrom nor metadata`);
-             const BB = (0, YB.if)(DB);
-             pB[DB] = {
- ... (20 more removed lines; see GitHub link above)
+       }
+     }
+ 
+     function YW(WW, iW) {
+       const OW = {
+           ...iW,
+           model: "Stairs"
+         },
+         mW = {};
+       for (const NW of ["bot", "top"])
+         for (let iW = 1; iW <= 4; iW++) {
+           const PW = EW.i[NW][iW - 1];
+           1 === iW && "bot" === NW ? mW[WW] = {
+             ...OW,
+             rootMetaDesc: `${WW}|meta|rot1|bot`,
+             sj: PW
+ ... (3 more added lines; see GitHub link above)
```

#### 1638. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9342-L9640` → after: `L13632-L13660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR13632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L13632-L13660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L13632-L13660) · [Before (L9342-L9640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9342-L9640)

```diff
-     pB["Cracked Rubellite Pickaxe"] = {
-       ...pB["Rubellite Pickaxe"],
-       displayName: "Cracked Rubellite Pickaxe",
-       description: "Ruby calls it cracked, not beaten. A sturdy pickaxe ready for the stubborn stone in her mine.",
-       multiplier: 4.75,
-       level: 3,
-       damage: 24
-     };
-     for (const [KB, uB] of [
-         ["Goldheart Engine", "goldheartEngine"],
-         ["Deepbite Drill Tip", "deepbiteDrillTip"],
-         ["Empty Fuel Cell", "emptyFuelCell"],
-         ["Blackfire Fuel Cell", "blackfireFuelCell"]
-       ]) pB[KB] = {
-       displayName: {
-         translationKey: `item:${uB}`
- ... (283 more removed lines; see GitHub link above)
+       return mW
+     }
+ 
+     function yW(WW, iW) {
+       return {
+         name: WW,
+         data: iW
+       }
+     }
+ 
+     function TW(WW, iW) {
+       return wW.yc.map((OW => yW(`${OW} ${WW} Stairs`, iW(OW))))
+     }
+ 
+     function JW(WW) {
+       const iW = {};
+ ... (13 more added lines; see GitHub link above)
```

#### 1639. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9726-L9742` → after: `L13952-L14566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR13952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L13952-L14566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L13952-L14566) · [Before (L9726-L9742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9726-L9742)

```diff
-     for (const [KB, uB, mB, IB] of [
-         ["Jet Chestplate", "jetChestplate", "jetpack", 0],
-         ["Nova Jet Chestplate", "novaJetChestplate", "nova_jetpack", .27]
-       ]) pB[KB] = {
-       displayName: {
-         translationKey: `item:${uB}`
-       },
-       description: {
-         translationKey: `item:${uB}Description`
-       },
-       type: "Armour",
-       textureInfo: mB,
-       weight: 1,
-       heldItemScale: 1,
-       stackable: !1,
-       armourReduction: IB,
- ... (1 more removed lines; see GitHub link above)
+ 
+     function BW() {
+       const WW = {},
+         iW = ["", "Top", "Bottom", "Left", "Right", "Top Left", "Top Right", "Bottom Left", "Bottom Right"];
+       for (const OW of ["Standing", "Wall"])
+         for (const mW of "Standing" === OW ? [...iW, "Leg"] : iW) {
+           const iW = `Noticeboard ${OW}${mW?` ${mW}`:""}`;
+           Object.assign(WW, CW(iW, {
+             ...XW,
+             displayName: {
+               translationKey: `item:${(0,wW.qe)(iW)}`
+             },
+             rootMetaDesc: `${iW}|meta|rot1`,
+             blockModel: (0, wW.ue)(iW),
+             itemTexture: (0, wW.ue)(iW)
+           }))
+ ... (599 more added lines; see GitHub link above)
```

#### 1640. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9744-L9755` → after: `L14568-L15116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR14568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L14568-L15116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L14568-L15116) · [Before (L9744-L9755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9744-L9755)

```diff
-     for (const [KB, uB] of [
-         ["Helmet", .15],
-         ["Chestplate", .27],
-         ["Gauntlets", .13],
-         ["Leggings", .21],
-         ["Boots", .12]
-       ]) pB[`Nova ${KB}`] = {
-       displayName: {
-         translationKey: `item:nova${KB}`
-       },
-       description: {
-         translationKey: `item:nova${KB}Description`
+ 
+     function si() {
+       const WW = {
+         ttb: 300,
+         model: "CustomModel",
+         harvestType: "cuttable",
+         solid: !1,
+         modelScale: 8,
+         customModelInfo: {
+           yOffset: -.5
+         },
+         particlesIgnoreBlack: !0,
+         canBePlacedOver: !1
+       };
+       return {
+         "Landing Pad": {
+ ... (533 more added lines; see GitHub link above)
```

#### 1641. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9757-L9767` → after: `L15118-L15119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR15118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L15118-L15119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L15118-L15119) · [Before (L9757-L9767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9757-L9767)

```diff
-       type: "Armour",
-       textureInfo: `nova_${KB.toLowerCase()}`,
-       weight: 1,
-       heldItemScale: 1,
-       stackable: !1,
-       armourReduction: uB,
-       showInCreativeInven: !1
-     };
-     pB["Nova Blade"] = {
-       displayName: {
-         translationKey: "item:novaBlade"
+       tW = {
+         underside: "electric_drill_bottom"
```

#### 1642. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9769-L9770` → after: `L15121-L15122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR15121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L15121-L15122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L15121-L15122) · [Before (L9769-L9770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9769-L9770)

```diff
-       description: {
-         translationKey: "item:novaBladeDescription"
+       ZW = {
+         underside: "deep_drill_bottom"
```

#### 1643. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9772-L9784` → after: `L15124-L15125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR15124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L15124-L15125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L15124-L15125) · [Before (L9772-L9784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9772-L9784)

```diff
-       type: "Tool",
-       textureInfo: "nova_blade",
-       weight: 1,
-       heldItemScale: 1.1,
-       damage: 50,
-       stackable: !1,
-       harvests: null,
-       multiplier: 2,
-       level: 1,
-       showInCreativeInven: !1
-     }, pB["Mob Cage"] = {
-       displayName: {
-         translationKey: "item:mobCage"
+       xW = {
+         backRuns: !0
```

#### 1644. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9786-L9787` → after: `L15127-L15128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR15127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L15127-L15128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L15127-L15128) · [Before (L9786-L9787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9786-L9787)

```diff
-       description: {
-         translationKey: "item:mobCageDescription"
+       lW = {
+         backRuns: !0
```

#### 1645. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9789-L9798` → after: `L15130-L15131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR15130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L15130-L15131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L15130-L15131) · [Before (L9789-L9798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9789-L9798)

```diff
-       type: "Item",
-       textureInfo: "mob_cage",
-       weight: 1,
-       heldItemScale: 1,
-       stackable: !0,
-       showInCreativeInven: !1
-     };
-     for (const KB of ["Pig", "Cow", "Sheep", "Deer", "Stag"]) pB[`Caged ${KB}`] = {
-       displayName: {
-         translationKey: `item:caged${KB}`
+       AW = {
+         underside: "sky_tap_bottom"
```

#### 1646. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9800-L9801` → after: `L15133-L15134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR15133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L15133-L15134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L15133-L15134) · [Before (L9800-L9801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9800-L9801)

```diff
-       description: {
-         translationKey: "item:cagedMobDescription"
+       bW = {
+         uniform: !0
```

#### 1647. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9803-L9808` → after: `L15136-L15288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR15136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L15136-L15288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L15136-L15288) · [Before (L9803-L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9803-L9808)

```diff
-       type: "Item",
-       textureInfo: "mob_cage_filled",
-       weight: 1,
-       heldItemScale: 1,
-       stackable: !1,
-       showInCreativeInven: !1
+       jW = {
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

#### 1648. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9810-L9812` → after: `L15290-L15407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR15290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L15290-L15407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L15290-L15407) · [Before (L9810-L9812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9810-L9812)

```diff
-     pB["Nova Multitool"] = {
-       displayName: {
-         translationKey: "item:novaMultitool"
+ 
+     function wW(WW) {
+       return {
+         front: "output",
+         underside: `${WW}_bottom`,
+         mirroredSides: !0,
+         backRuns: !0
+       }
+     }
+     const tW = "Fluid Pipe",
+       ZW = "Coolant Pipe";
+ 
+     function xW(WW) {
+       return WW === tW || WW === ZW
+     }
+     const lW = "Full",
+ ... (102 more added lines; see GitHub link above)
```

#### 1649. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9814-L9815` → after: `L15409-L15455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR15409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L15409-L15455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L15409-L15455) · [Before (L9814-L9815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9814-L9815)

```diff
-       description: {
-         translationKey: "item:novaMultitoolDescription"
+       uW = "reactor_frame",
+       oW = 4,
+       dW = 4,
+       eW = 400;
+ 
+     function vW(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
+         OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_running",
+         mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 250;
+       return {
+         animTextures: Array.from({
+           length: iW
+         }, ((iW, mW) => `${WW}${OW}${mW}`)),
+         animationInterval: mW
+       }
+     }
+ ... (31 more added lines; see GitHub link above)
```

#### 1650. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9817-L9829` → after: `L15457-L15459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR15457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L15457-L15459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L15457-L15459) · [Before (L9817-L9829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9817-L9829)

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
-     }, pB["Pocket Terminal"] = {
-       displayName: {
-         translationKey: "item:pocketTerminal"
+       fW = {
+         ...pW,
+         altActionable: !0
```

#### 1651. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9831-L9832` → after: `L15461-L15819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR15461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L15461-L15819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L15461-L15819) · [Before (L9831-L9832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9831-L9832)

```diff
-       description: {
-         translationKey: "item:pocketTerminalDescription"
+       CW = {
+         ttb: 5e11,
+         drops: null
+       };
+ 
+     function XW(WW, iW, OW, mW) {
+       return {
+         [WW]: iW,
+         [`${WW}|meta|rot1|${OW}`]: {
+           ...iW,
+           ...mW
+         }
+       }
+     }
+ 
+     function BW(WW, iW, OW) {
+ ... (343 more added lines; see GitHub link above)
```

#### 1652. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9834-L9848` → after: `L15821-L15824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR15821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L15821-L15824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L15821-L15824) · [Before (L9834-L9848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9834-L9848)

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
-     for (const [KB, uB, mB, IB] of [
-         ["Comet Beacon", "cometBeacon", "comet_beacon", !0],
-         ["Nova Wrench", "novaWrench", "nova_wrench", !1]
-       ]) pB[KB] = {
-       displayName: {
-         translationKey: `item:${uB}`
+       NW = {
+         root: "Standing Noticeboard",
+         blockModelPrefix: "noticeboard_standing",
+         faceOffset: .125
```

#### 1653. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9850-L9851` → after: `L15826-L15857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR15826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L15826-L15857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L15826-L15857) · [Before (L9850-L9851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9850-L9851)

```diff
-       description: {
-         translationKey: `item:${uB}Description`
+       PW = [EW, NW],
+       LW = PW.map((WW => {
+         let {
+           root: iW
+         } = WW;
+         return iW
+       })),
+       cW = EW.root,
+       wW = NW.root,
+       tW = cW,
+       ZW = ["l", "r", "u", "d"],
+       [xW, lW, AW, bW] = ZW.map(((WW, iW) => 1 << iW)),
+       jW = Array.from({
+         length: 1 << ZW.length
+       }, ((WW, iW) => iW)),
+       UW = {
+ ... (16 more added lines; see GitHub link above)
```

#### 1654. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9853-L9859` → after: `L15859-L15941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR15859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L15859-L15941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L15859-L15941) · [Before (L9853-L9859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9853-L9859)

```diff
-       type: "Item",
-       textureInfo: mB,
-       weight: 1,
-       heldItemScale: 1,
-       stackable: IB,
-       showInCreativeInven: !1
-     };
+       kW = Object.fromEntries(Object.entries(mW.d).map((WW => {
+         let [iW, [OW, mW]] = WW;
+         return [iW, [-mW, OW]]
+       }))),
+       sW = Object.fromEntries(Object.entries(mW.d).map((WW => {
+         let [iW, [OW, mW]] = WW;
+         return [iW, [
+           [OW, 0, mW],
+           [-OW, 0, -mW],
+           [0, 1, 0],
+           [0, -1, 0]
+         ]]
+       })));
+ 
+     function MW(WW, iW, OW) {
+       const mW = ZW.filter(((WW, iW) => OW & 1 << iW)).join("");
+ ... (67 more added lines; see GitHub link above)
```

#### 1655. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9862` → after: `L15944-L15945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR15944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L15944-L15945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L15944-L15945) · [Before (L9862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9862)

```diff
-       return [...BB, ...(0, JB.k)(JB.q, OB)].map((BB => fB[BB].id))
+       const OW = [tW(iW), iW & cW ? wW : ""].filter(Boolean);
+       return OW.length ? `${WW}|meta|${OW.join("|")}` : WW
```

#### 1656. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9866` → after: `L15949-L15958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR15949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L15949-L15958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L15949-L15958) · [Before (L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9866)

```diff
-       return BB.split(" ")[0]
+       var iW;
+       const OW = WW.split("|").slice(1),
+         mW = null !== (iW = OW.find((WW => WW !== wW))) && void 0 !== iW ? iW : "";
+       let NW = OW.includes(wW) ? cW : 0;
+       return EW.forEach(((WW, iW) => {
+         let {
+           letter: OW
+         } = WW;
+         mW.includes(OW) && (NW |= 1 << iW)
+       })), NW
```

#### 1657. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9868-L9872` → after: `L15960-L16018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR15960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L15960-L16018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L15960-L16018) · [Before (L9868-L9872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9868-L9872)

```diff
-     const VB = .0018;
-     let SB = Object.values(oB.h).reduce(((BB, OB) => Math.max(BB, OB.id)), 0) + 1;
-     for (const KB in pB) pB[KB].id = SB, pB[KB].name = KB, pB[SB] = pB[KB], (0, DB.j)(pB, pB[KB]), ++SB;
-     const nB = {};
-     for (const KB in pB) {
+ 
+     function lW(WW) {
+       return LW.map((iW => (0, mW.d)(function(WW, iW) {
+         let {
+           post: OW,
+           northArm: mW
+         } = WW;
+         const NW = [OW];
+         let PW = mW;
+         return EW.forEach(((WW, OW) => {
+           iW & 1 << OW && NW.push(PW), PW = function(WW) {
+             let [iW, OW, mW, EW, NW, PW] = WW;
+             return [8 - PW, OW, iW, 8 - mW, NW, EW]
+           }(PW)
+         })), NW
+       }(WW, iW).map((WW => {
+ ... (43 more added lines; see GitHub link above)
```

#### 1658. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9874-L9875` → after: `L16020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR16020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L16020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L16020) · [Before (L9874-L9875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9874-L9875)

```diff
-       const BB = pB[KB];
-       nB[KB] = null !== (UB = nB[BB.id]) && void 0 !== UB ? UB : new QB.i(BB)
+       return WW !== EW ? null : null !== (OW = NW.find((WW => iW.endsWith(`|${WW}`)))) && void 0 !== OW ? OW : null
```

#### 1659. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9877-L9882` → after: `L16022-L16029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR16022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L16022-L16029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L16022-L16029) · [Before (L9877-L9882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9877-L9882)

```diff
-     const fB = {},
-       kB = [oB.h, nB].flatMap(Object.entries);
-     for (const [KB, uB] of kB) fB[KB] = uB, fB[uB.id] = uB;
-     for (const KB of MB.b) {
-       const BB = KB;
-       if (!fB[BB]) throw new Error(`Missing "${BB}" item for vehicle type "${KB}"`)
+     const cW = {
+       left: "right",
+       right: "left"
+     };
+ 
+     function wW(WW, iW) {
+       const [OW, EW] = mW.d[WW];
+       return "left" === iW ? [-OW, -EW] : [OW, EW]
```

#### 1660. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9895` → after: `L16032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR16032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L16032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L16032) · [Before (L9895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9895)

```diff
-   37729: (BB, OB, GB) => {
+   5774: (WW, iW, OW) => {
```

#### 1661. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9897` → after: `L16034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR16034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L16034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L16034) · [Before (L9897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9897)

```diff
-       c: () => lB,
+       e: () => AW,
```

#### 1662. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9904` → after: `L16041-L16043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR16041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L16041-L16043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L16041-L16043) · [Before (L9904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9904)

```diff
-       s: () => pB
+       t: () => ZW,
+       x: () => PW,
+       y: () => NW
```

#### 1663. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9906-L9909` → after: `L16045-L16046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR16045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L16045-L16046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L16045-L16046) · [Before (L9906-L9909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9906-L9909)

```diff
-     var YB = GB(353),
-       DB = GB(635),
-       QB = GB(9955),
-       oB = GB(37737);
+     var mW = OW(5747);
+     const EW = "fenceGate";
```

#### 1664. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9911-L9932` → after: `L16048-L16105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR16048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L16048-L16105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L16048-L16105) · [Before (L9911-L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9911-L9932)

```diff
-     function jB(BB, OB) {
-       console.assert("meta|charging1" === OB.rootMetaDesc.split("|").slice(1).join("|"), "charging root item .rootMetaDesc must be |meta|charging1");
-       const GB = {
-         ...OB
-       };
-       return delete GB.rootMetaDesc, {
-         [BB]: {
-           ...OB,
-           textureInfo: OB.textureName
-         },
-         [`${BB}|meta|charging2`]: {
-           ...GB,
-           textureInfo: `${OB.textureName}_charging_2`
-         },
-         [`${BB}|meta|charging3`]: {
-           ...GB,
- ... (6 more removed lines; see GitHub link above)
+     function NW(WW) {
+       return (null === WW || void 0 === WW ? void 0 : WW.model) === EW
+     }
+ 
+     function PW(WW) {
+       return NW(WW) && void 0 !== WW.attachedTop
+     }
+     const LW = [{
+       dx: 0,
+       dz: -1
+     }, {
+       dx: -1,
+       dz: 0
+     }, {
+       dx: 0,
+       dz: 1
+ ... (42 more added lines; see GitHub link above)
```

#### 1665. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9937-L9990` → after: `L16139-L16158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR16139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L16139-L16158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L16139-L16158) · [Before (L9937-L9990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9937-L9990)

```diff
-       console.assert("meta|dir1" === OB.rootMetaDesc.split("|").slice(1).join("|"), "charging root item .rootMetaDesc must be |meta|dir1");
-       const GB = {
-         ...OB
-       };
-       return delete GB.rootMetaDesc, {
-         [BB]: {
-           ...OB,
-           heldItemGlb: BB,
-           textureInfo: OB.textureName
-         },
-         [`${BB}|meta|dir2`]: {
-           ...GB,
-           displayName: BB,
-           textureInfo: `${OB.textureName}_dir_2`
-         },
-         [`${BB}|meta|dir3`]: {
- ... (38 more removed lines; see GitHub link above)
+       return {
+         textureInfo: "water" === WW ? [...iW] : {
+           colour: [.95, .4, .05, .95],
+           animTextures: ["lava0", "lava1", "lava2", "lava3", "lava4", "lava5", "lava6", "lava7"],
+           animationInterval: 800
+         },
+         dl: !0,
+         drops: null,
+         harvestType: "rock",
+         ..."lava" === WW ? {
+           oA: [14, 8, 2]
+         } : {}
+       }
+     }
+ 
+     function cW() {
+ ... (4 more added lines; see GitHub link above)
```

#### 1666. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9992-L9995` → after: `L16160-L16163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR16160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L16160-L16163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L16160-L16163) · [Before (L9992-L9995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9992-L9995)

```diff
-         [`${BB}|meta|dir11`]: {
-           ...GB,
-           displayName: BB,
-           textureInfo: `${OB.textureName}_dir_11`
+         ...LW("water", PW)
+       }, WW["Placed Lava"] = {
+         displayName: {
+           translationKey: "item:placedLava"
```

#### 1667. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L9997-L10000` → after: `L16165-L16180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR16165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L16165-L16180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L16165-L16180) · [Before (L9997-L10000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L9997-L10000)

```diff
-         [`${BB}|meta|dir12`]: {
-           ...GB,
-           displayName: BB,
-           textureInfo: `${OB.textureName}_dir_12`
+         ...LW("lava", [])
+       };
+       for (const {
+           source: iW,
+           family: OW,
+           reach: cW
+         }
+         of mW) {
+         const mW = "water" === OW ? PW : [];
+         for (let NW = 1; NW <= cW; NW++) WW[EW(iW, NW)] = {
+           ...LW(OW, mW),
+           canBePlacedOver: !0
+         };
+         WW[NW(iW)] = {
+           ...LW(OW, mW),
+           canBePlacedOver: !0
```

#### 1668. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L10004-L10018` → after: `L16185-L16201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR16185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L16185-L16201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L16185-L16201) · [Before (L10004-L10018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L10004-L10018)

```diff
-     const JB = "midday",
-       MB = ["midnight", "late_night", "sunrise", "early_day", JB, "late_day", "sunset", "early_night"].filter((BB => BB !== JB));
- 
-     function PB(BB, OB, GB) {
-       const YB = {
-         [BB]: {
-           ...GB,
-           heldItemGlb: `${OB}_${JB}`,
-           textureInfo: `${OB}_${JB}`
-         }
-       };
-       for (const DB of MB) YB[`${BB}|meta|${DB}`] = {
-         ...GB,
-         heldItemGlb: `${OB}_${DB}`,
-         textureInfo: `${OB}_${DB}`
+   },
+   5801: (WW, iW, OW) => {
+     function mW() {
+       const WW = {};
+       for (const iW of ["White", "Light Grey", "Light Blue", "Cyan", "Green", "Lime", "Yellow", "Orange", "Magenta", "Red"]) WW[`INTERNAL_MESH_${iW} Directional Arrow`] = {
+         ttb: 400,
+         harvestType: "cuttable",
+         model: "rotatable",
+         solid: !1,
+         blockModel: `${iW} Directional Arrow`,
+         blockModelItem: !0,
+         twoDBlockItem: !0,
+         modelScale: 8,
+         customModelInfo: {
+           yOffset: -.5
+         },
+ ... (1 more added lines; see GitHub link above)
```

#### 1669. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L10024-L10026` → after: `L16246-L16250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR16246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L16246-L16250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L16246-L16250) · [Before (L10024-L10026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L10024-L10026)

```diff
-       const GB = {},
-         YB = (0, QB.F)(BB, OB);
-       for (const DB in YB) Object.assign(GB, jB(DB, YB[DB]));
+       let OW = [...WW];
+       for (let mW = 0; mW < iW; mW++) OW = OW.map((WW => {
+         let [iW, OW, mW, EW, NW, PW] = WW;
+         return [mW, OW, 8 - EW, PW, NW, 8 - iW]
+       }));
```

#### 1670. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L10030-L10065` → after: `L16254-L16261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR16254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L16254-L16261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L16254-L16261) · [Before (L10030-L10065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L10030-L10065)

```diff
-     function lB(BB, OB, GB) {
-       console.assert(4 === GB.length, "Must have 4 textures for bowl fill metadatas");
-       const YB = {
-         ...OB
-       };
-       delete YB.rootMetaDesc, delete YB.textureInfo, delete YB.afterEatenItem;
-       const DB = `Partially Full ${BB}`,
-         QB = `Half Full ${BB}`,
-         oB = `Nearly Full ${BB}`,
-         jB = BB;
-       return {
-         [DB]: {
-           ...OB,
-           textureInfo: GB[0],
-           afterEatenItem: "Bowl",
-           rootMetaDesc: `${DB}|meta|charging1`
- ... (20 more removed lines; see GitHub link above)
+     function LW(WW) {
+       return (0, mW.d)(WW.map((WW => {
+         let [iW, OW, mW, EW, NW, PW] = WW;
+         return [
+           [iW, OW, mW],
+           [EW, NW, PW]
+         ]
+       })))
```

#### 1671. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L10069-L10088` → after: `L16265-L16285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR16265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L16265-L16285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L16265-L16285) · [Before (L10069-L10088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L10069-L10088)

```diff
-       return Object.fromEntries(DB.w.map((BB => {
-         const OB = (0, YB.ef)(BB),
-           GB = (0, YB.if)(BB);
-         return [(0, YB.ic)(BB), {
-           displayName: {
-             translationKey: `item:${OB}SpawnOrb`
-           },
-           type: "Item",
-           textureInfo: `${GB}_spawn_orb`,
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: `item:${OB}SpawnOrbDescription`,
-             params: {
-               mob: BB
- ... (4 more removed lines; see GitHub link above)
+       for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
+       return [0, 1, 2, 3].map((WW => LW(PW(iW, WW))))
+     }
+ 
+     function wW(WW) {
+       return WW.map((WW => {
+         let [iW, OW, mW, EW, NW, PW] = WW;
+         return [iW, 8 - NW, mW, EW, 8 - OW, PW]
+       }))
+     }
+     const tW = [0, 0, 0, 8, 4, 8],
+       ZW = [0, 4, 0, 8, 8, 4],
+       xW = [tW, ZW],
+       lW = wW(xW),
+       AW = {
+         bot: cW(...xW),
+ ... (5 more added lines; see GitHub link above)
```

#### 1672. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L10091-L10096` → after: `L16288-L16335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR16288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L16288-L16335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L16288-L16335) · [Before (L10091-L10096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L10091-L10096)

```diff
-       Sheep: DB.p.Sheep,
-       "Cave Golem": ["corrupted"],
-       "Draugr Zombie": ["flower", "flower2", "mushroom", "vine", "vine2", "corrupted", "corrupted2"],
-       "Draugr Huntress": ["chainmail"],
-       "Frost Wraith": ["tattered", "frostKing", "accursed"]
-     };
+         innerLeft: [tW, ZW, [4, 4, 4, 8, 8, 8]],
+         innerRight: [tW, ZW, [0, 4, 4, 4, 8, 8]],
+         outerLeft: [tW, [4, 4, 0, 8, 8, 4]],
+         outerRight: [tW, [0, 4, 0, 4, 8, 4]]
+       },
+       UW = bW((WW => wW(jW[WW]))),
+       kW = {
+         bot: bW((WW => cW(...jW[WW]))),
+         top: bW((WW => cW(...UW[WW])))
+       },
+       sW = cW([0, 0, 0, 8, 8, 1]),
+       MW = cW([0, 0, 0, 8, 1, 8]),
+       KW = cW([0, 0, 0, 8, 6, 8]),
+       SW = cW([0, 0, 0, 8, 3, 8]),
+       YW = cW([0, 0, 3, 8, 8, 6]),
+       yW = cW([0, 0, 0, 8, 8, 2]),
+ ... (32 more added lines; see GitHub link above)
```

#### 1673. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L10098-L10116` → after: `L16337-L16367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR16337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L16337-L16367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L16337-L16367) · [Before (L10098-L10116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L10098-L10116)

```diff
-     function ZB() {
-       return Object.fromEntries(DB.o.flatMap((BB => {
-         const OB = (0, YB.if)(BB);
-         return DB.p[BB].map((GB => {
-           var DB;
-           const QB = "default" !== GB && (null === (DB = qB[BB]) || void 0 === DB ? void 0 : DB.includes(GB)),
-             oB = QB ? {
-               heldItemGlb: (0, YB.Lb)(BB, "default")
-             } : {};
-           return [(0, YB.Lb)(BB, GB), {
-             type: "Item",
-             textureInfo: `caught_${OB}_${QB?"default":GB}`,
-             weight: 1,
-             heldItemScale: 1,
-             stackable: !1,
-             ...oB
- ... (3 more removed lines; see GitHub link above)
+     function DW(WW, iW) {
+       var OW, mW, EW, PW;
+       let LW = gW[WW.meta.rootName];
+       const cW = null !== (OW = null !== (mW = WW.blockModel) && void 0 !== mW ? mW : iW.blockModel) && void 0 !== OW ? OW : "";
+       "noticeboard_standing_leg" === cW ? LW = uW : cW.startsWith("noticeboard_standing") ? LW = HW : cW.startsWith("noticeboard_wall") ? LW = nW : WW.meta.rootName.endsWith(" Directional Arrow") ? LW = MW : WW.meta.rootName.endsWith(" Ladder") ? LW = hW : WW.meta.rootName.endsWi … [truncated]
+       const wW = NW.k.includes(WW.meta.rootName) ? 2 : 0;
+       return null === (EW = LW) || void 0 === EW ? void 0 : EW[((null !== (PW = WW.meta.rot) && void 0 !== PW ? PW : 1) - 1 + wW) % 4]
+     }
+   },
+   5823: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => mW
+     });
+     const mW = ["Maple", "Pine", "Plum", "Cedar", "Aspen", "Jungle", "Palm", "Pear", "Cherry", "Spectral", "Mango"]
+   },
+   5766: (WW, iW, OW) => {
+ ... (15 more added lines; see GitHub link above)
```

#### 1674. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L10120-L10136` → after: `L16372-L16403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR16372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L16372-L16403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/85.js#L16372-L16403) · [Before (L10120-L10136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/85.js#L10120-L10136)

```diff
-       var GB;
-       const YB = {
-         type: "Gun",
-         textureInfo: BB,
-         weight: 1,
-         stackable: !1,
-         keepMetaInChest: !0,
-         ...OB,
-         ...oB.e[BB]
-       };
-       return {
-         [BB]: YB,
-         [`${BB}|RequiresAmmo`]: {
-           ...YB,
-           displayName: BB,
-           heldItemGlb: null !== (GB = YB.heldItemGlb) && void 0 !== GB ? GB : BB
- ... (1 more removed lines; see GitHub link above)
+       iW.meta = LW(iW.name, iW.id, (iW => WW[iW].id), iW.rootMetaDesc)
+     }
+ 
+     function LW(WW, iW, OW, PW) {
+       const LW = null !== PW && void 0 !== PW ? PW : WW;
+       if (LW.split("|").length > 1 || LW.startsWith("Caught Mob")) {
+         var cW;
+         const WW = LW.split("|")[0],
+           iW = LW.split("|").slice(1).join("|"),
+           PW = iW.includes("rot") ? parseInt(iW.split("rot")[1][0]) : null;
+         let wW = !!iW.includes("open") || null;
+         iW.includes("closed") && (wW = !1);
+         let tW = iW.includes("bot") ? mW.bot : null;
+         iW.includes("top") ? tW = mW.top : iW.includes("side") && (tW = mW.side);
+         const ZW = !!iW.includes("Growing") || null,
+           xW = !!iW.includes("TreeBase") || null,
+ ... (16 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/86.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/86.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14)

#### 1. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/86.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/86.js#L4)

```diff
-   37745: (BB, OB, GB) => {
+   35236: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/86.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/86.js#L6-L7)

```diff
-       b: () => YB,
-       d: () => DB
+       c: () => mW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L9-L10` → after: `L8-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L8-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/86.js#L8-L527) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/86.js#L9-L10)

```diff
-     const YB = ["Boat", "Obsidian Boat", "Hovercraft", "Yellow Kart", "White Kart", "Red Kart", "Purple Kart", "Pink Kart", "Orange Kart", "Magenta Kart", "Lime Kart", "Light Gray Kart", "Light Blue Kart", "Green Kart", "Gray Kart", "Cyan Kart", "Brown Kart", "Blue Kart", "Black  … [truncated]
-       DB = 46 == GB.j ? ["canAutoStep", "speedMultiplier"] : null
+     const mW = {
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
+         clipSize: 30,
+         tagSpeedMult: .8,
+         subsequentTagSpeedReductionScalar: .55,
+         inaccuracyStanding: 10,
+ ... (504 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/87.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/87.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L4-L14` → after: `L4-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L4-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/87.js#L4-L132) · [Before (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/87.js#L4-L14)

```diff
-   37747: (BB, OB, GB) => {
-     if (GB.d(OB, {
-         c: () => yB,
-         g: () => DB,
-         i: () => oB,
-         l: () => QB,
-         n: () => VB,
-         q: () => NB
-       }), 46 == GB.j) var YB = GB(37753);
-     const DB = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
-       QB = ["Blade", "Guard", "Handle"],
+   38204: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW,
+       d: () => cW,
+       h: () => wW,
+       j: () => tW,
+       n: () => LW,
+       r: () => jW
+     });
+     var mW = OW(344),
+       EW = OW(632),
+       NW = OW(349);
+     const PW = ["", "|meta|charging2", "|meta|charging3", "|meta|charging4"];
+ 
+     function LW(WW, iW) {
+       return "" === iW ? WW : `${WW} ${iW}`
+ ... (113 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L16-L66` → after: `L134-L6911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L134-L6911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/87.js#L134-L6911) · [Before (L16-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/87.js#L16-L66)

```diff
-         Wood: {
-           material: "Wood",
-           baseSword: "Wood Sword",
-           value: 1,
-           epithet: "Timber",
-           palette: ["#b88a52", "#7d5a32", "#3d2a14"],
-           trait: null,
-           bladeDamage: 0,
-           guardReduction: 0,
-           handleCooldown: 1,
-           handleKnockback: 0,
-           handleReach: 0
-         },
-         Stone: {
-           material: "Stone",
-           baseSword: "Stone Sword",
- ... (35 more removed lines; see GitHub link above)
+         "Wood Pickaxe": {
+           displayName: {
+             translationKey: "item:woodPickaxe"
+           },
+           type: "Tool",
+           textureInfo: "wooden_pickaxe",
+           weight: 1,
+           heldItemScale: 1,
+           damage: 18,
+           description: {
+             translationKey: "item:pickaxeDescription"
+           },
+           stackable: !1,
+           harvests: "rock",
+           multiplier: 2,
+           level: 1
+ ... (6762 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L68-L79` → after: `L6913-L6921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R6913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L6913-L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/87.js#L6913-L6921) · [Before (L68-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/87.js#L68-L79)

```diff
-         Diamond: {
-           material: "Diamond",
-           baseSword: "Diamond Sword",
-           value: 4,
-           epithet: "Brilliant",
-           palette: ["#8ff5ec", "#2fbcb0", "#0d4f4a"],
-           trait: "crit",
-           bladeDamage: .12,
-           guardReduction: .07,
-           handleCooldown: .92,
-           handleKnockback: .1,
-           handleReach: 0
+         "Paleice Rockcod": {
+           displayName: {
+             translationKey: "item:paleiceRockcod"
+           },
+           type: "Item",
+           textureInfo: "paleice_rockcod",
+           weight: 1,
+           heldItemScale: 1,
+           stackable: !0
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L81-L131` → after: `L6923-L8815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R6923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L6923-L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/87.js#L6923-L8815) · [Before (L81-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/87.js#L81-L131)

```diff
-         Moonstone: {
-           material: "Moonstone",
-           baseSword: "Moonstone Sword",
-           value: 4,
-           epithet: "Moonlit",
-           palette: ["#d9d2ff", "#8f7fe0", "#352a73"],
-           trait: "bossBane",
-           bladeDamage: .15,
-           guardReduction: .08,
-           handleCooldown: .9,
-           handleKnockback: .1,
-           handleReach: .25
-         },
-         Magmasteel: {
-           material: "Magmasteel",
-           baseSword: "Magmasteel Sword",
- ... (35 more removed lines; see GitHub link above)
+         "Permafrost Halibut": {
+           displayName: {
+             translationKey: "item:permafrostHalibut"
+           },
+           type: "Item",
+           textureInfo: "permafrost_halibut",
+           weight: 1,
+           heldItemScale: 1.25,
+           stackable: !0
+         },
+         Pithead: {
+           displayName: {
+             translationKey: "item:pithead"
+           },
+           type: "Item",
+           textureInfo: "pithead",
+ ... (1877 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L134-L139` → after: `L8834-L8835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R8834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L8834-L8835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/87.js#L8834-L8835) · [Before (L134-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/87.js#L134-L139)

```diff
-       jB = 4,
-       yB = "Coal",
-       JB = {
-         Blade: 1,
-         Guard: .6,
-         Handle: .4
+       description: {
+         translationKey: `item:${nW}Description`
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L141-L184` → after: `L8837-L8848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R8837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L8837-L8848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/87.js#L8837-L8848) · [Before (L141-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/87.js#L141-L184)

```diff
-       MB = 1.15,
-       PB = 1.35,
-       zB = .06,
-       lB = {
-         defence: {
-           name: "Bulwark",
-           amount: .06,
-           describe: BB => `${UB(.06*BB)} less damage taken`
-         },
-         coins: {
-           name: "Midas",
-           amount: 4,
-           describe: BB => `Mobs you slay drop ${Math.round(4*BB)}+ extra coins`
-         },
-         crit: {
-           name: "Keen Edge",
- ... (28 more removed lines; see GitHub link above)
+       type: "Item",
+       textureInfo: (0, mW.ue)(HW),
+       weight: 1,
+       heldItemScale: 1,
+       stackable: !0
+     };
+     for (const [HW, nW] of [
+         ["Doom Rivet", "doomRivet"],
+         ["Doom Crest", "doomCrest"]
+       ]) AW[HW] = {
+       displayName: {
+         translationKey: `item:${nW}`
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L186-L225` → after: `L8850-L9115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R8850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L8850-L9115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/87.js#L8850-L9115) · [Before (L186-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/87.js#L186-L225)

```diff
-       pB = {
-         eclipseField: {
-           name: "Eclipse Field",
-           description: "Right-click: slow every mob within 6 blocks for 3s",
-           cooldownMs: 25e3
-         },
-         starfall: {
-           name: "Meteor Shower",
-           description: "Right-click: call five falling stars around you",
-           cooldownMs: 3e4
-         },
-         magmaWave: {
-           name: "Magma Wave",
-           description: "Right-click: lay a line of fire pools ahead of you",
-           cooldownMs: 2e4
-         },
- ... (24 more removed lines; see GitHub link above)
+       description: {
+         translationKey: `item:${nW}Description`
+       },
+       type: "Item",
+       textureInfo: (0, mW.ue)(HW),
+       weight: 1,
+       heldItemScale: 1,
+       stackable: !0,
+       showInCreativeInven: !1
+     };
+     for (const [HW, nW, uW] of [
+         ["Raw Copper", "rawCopper", "raw_copper"],
+         ["Copper Bar", "copperBar", "copper_bar"],
+         ["Iron Grit", "ironGrit", "iron_grit"],
+         ["Gold Grit", "goldGrit", "gold_grit"],
+         ["Copper Grit", "copperGrit", "copper_grit"],
+ ... (250 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L228-L229` → after: `L9261-L9334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R9261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L9261-L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/87.js#L9261-L9334) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/87.js#L228-L229)

```diff
-       qB = 46 == GB.j ? YB.c : null,
-       ZB = "skyblock:forged:";
+       description: {
+         translationKey: "item:mobCageDescription"
+       },
+       type: "Item",
+       textureInfo: "mob_cage",
+       weight: 1,
+       heldItemScale: 1,
+       stackable: !0,
+       showInCreativeInven: !1
+     };
+     for (const HW of ["Pig", "Cow", "Sheep", "Deer", "Stag"]) AW[`Caged ${HW}`] = {
+       displayName: {
+         translationKey: `item:caged${HW}`
+       },
+       description: {
+         translationKey: "item:cagedMobDescription"
+ ... (58 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L232` → after: `L9337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R9337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L9337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/87.js#L9337) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/87.js#L232)

```diff
-       return `${BB} ${OB}`
+       return [...WW, ...(0, wW.j)(wW.r, iW)].map((WW => TW[WW].id))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L237-L242` → after: `L9341-L9357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R9341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L9341-L9357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/87.js#L9341-L9357) · [Before (L237-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/87.js#L237-L242)

```diff
-       let {
-         blade: OB,
-         guard: GB,
-         handle: YB
-       } = BB;
-       return `${ZB}${OB.toLowerCase()}-${GB.toLowerCase()}-${YB.toLowerCase()}`
+       return WW.split(" ")[0]
+     }
+     const KW = .0018;
+     let SW = Object.values(PW.j).reduce(((WW, iW) => Math.max(WW, iW.id)), 0) + 1;
+     for (const HW in AW) AW[HW].id = SW, AW[HW].name = HW, AW[SW] = AW[HW], (0, EW.i)(AW, AW[HW]), ++SW;
+     const YW = {};
+     for (const HW in AW) {
+       var yW;
+       const WW = AW[HW];
+       YW[HW] = null !== (yW = YW[WW.id]) && void 0 !== yW ? yW : new NW.j(WW)
+     }
+     const TW = {},
+       JW = [PW.j, YW].flatMap(Object.entries);
+     for (const [HW, nW] of JW) TW[HW] = nW, TW[nW.id] = nW;
+     for (const HW of tW.c) {
+       const WW = HW;
+ ... (1 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L245-L253` → after: `L9386-L9407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R9386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L9386-L9407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/87.js#L9386-L9407) · [Before (L245-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/87.js#L245-L253)

```diff
-     function WB(BB) {
-       if (! function(BB) {
-           return "string" === typeof BB && BB.startsWith(ZB)
-         }(BB)) return null;
-       const OB = BB.slice(ZB.length).split("-").map((BB => DB.find((OB => OB.toLowerCase() === BB))));
-       return 3 !== OB.length || OB.includes(void 0) ? null : {
-         blade: OB[0],
-         guard: OB[1],
-         handle: OB[2]
+     function LW(WW, iW) {
+       console.assert("meta|charging1" === iW.rootMetaDesc.split("|").slice(1).join("|"), "charging root item .rootMetaDesc must be |meta|charging1");
+       const OW = {
+         ...iW
+       };
+       return delete OW.rootMetaDesc, {
+         [WW]: {
+           ...iW,
+           textureInfo: iW.textureName
+         },
+         [`${WW}|meta|charging2`]: {
+           ...OW,
+           textureInfo: `${iW.textureName}_charging_2`
+         },
+         [`${WW}|meta|charging3`]: {
+           ...OW,
+ ... (6 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L258-L305` → after: `L9411-L9443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R9411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L9411-L9443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/87.js#L9411-L9443) · [Before (L258-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/87.js#L258-L305)

```diff
-     function VB(BB) {
-       var OB;
-       let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qB;
-       const YB = "string" === typeof BB ? WB(BB) : BB;
-       if (null === YB) return null;
-       const DB = RB(YB),
-         yB = GB === qB ? AB.get(DB) : void 0;
-       if (void 0 !== yB) return yB;
-       const ZB = function(BB, OB) {
-         var GB, YB, DB, yB, qB, ZB, NB, WB, AB;
-         const {
-           blade: VB,
-           guard: kB,
-           handle: dB
-         } = BB, KB = oB, uB = VB === kB && kB === dB, mB = nB((1 + KB[VB].bladeDamage) * (uB ? 1 + zB : 1)), IB = null !== (GB = OB.damageMultiplier) && void 0 !== GB ? GB : mB, FB = null !== (YB = OB.cooldownMultiplier) && void 0 !== YB ? YB : KB[dB].handleCooldown, iB = null != … [truncated]
-           const OB = {},
- ... (32 more removed lines; see GitHub link above)
+     function cW(WW, iW) {
+       console.assert("meta|dir1" === iW.rootMetaDesc.split("|").slice(1).join("|"), "charging root item .rootMetaDesc must be |meta|dir1");
+       const OW = {
+         ...iW
+       };
+       return delete OW.rootMetaDesc, {
+         [WW]: {
+           ...iW,
+           heldItemGlb: WW,
+           textureInfo: iW.textureName
+         },
+         [`${WW}|meta|dir2`]: {
+           ...OW,
+           displayName: WW,
+           textureInfo: `${iW.textureName}_dir_2`
+         },
+ ... (17 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L307-L320` → after: `L9445-L9487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R9445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L9445-L9487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/87.js#L9445-L9487) · [Before (L307-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/87.js#L307-L320)

```diff
-           lore: cB,
-           properties: TB,
-           effects: bB,
-           named: wB,
-           damageMultiplier: IB,
-           cooldownMultiplier: FB,
-           knockbackMultiplier: iB,
-           reachBonus: LB,
-           damageReduction: gB,
-           traits: rB,
-           ability: XB,
-           coalCost: hB,
-           enchantmentTier: eB,
-           powerMultiplier: nB(IB / FB)
+           textureInfo: `${iW.textureName}_dir_6`
+         },
+         [`${WW}|meta|dir7`]: {
+           ...OW,
+           displayName: WW,
+           textureInfo: `${iW.textureName}_dir_7`
+         },
+         [`${WW}|meta|dir8`]: {
+           ...OW,
+           displayName: WW,
+           textureInfo: `${iW.textureName}_dir_8`
+         },
+         [`${WW}|meta|dir9`]: {
+           ...OW,
+           displayName: WW,
+           textureInfo: `${iW.textureName}_dir_9`
+ ... (27 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L322-L323` → after: `L9489-L9495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R9489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L9489-L9495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/87.js#L9489-L9495) · [Before (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/87.js#L322-L323)

```diff
-       }(YB, null !== (OB = GB[DB]) && void 0 !== OB ? OB : {});
-       return GB === qB && AB.set(DB, ZB), ZB
+       };
+       for (const EW of tW) mW[`${WW}|meta|${EW}`] = {
+         ...OW,
+         heldItemGlb: `${iW}_${EW}`,
+         textureInfo: `${iW}_${EW}`
+       };
+       return mW
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L327` → after: `L9499-L9502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R9499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L9499-L9502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/87.js#L9499-L9502) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/87.js#L327)

```diff
-       return "Blade" === OB ? BB.blade : "Guard" === OB ? BB.guard : BB.handle
+       const OW = {},
+         mW = (0, NW.I)(WW, iW);
+       for (const EW in mW) Object.assign(OW, LW(EW, mW[EW]));
+       return OW
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L330-L331` → after: `L9505-L9540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R9505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L9505-L9540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/87.js#L9505-L9540) · [Before (L330-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/87.js#L330-L331)

```diff
-     function nB(BB) {
-       return Math.round(100 * BB) / 100
+     function lW(WW, iW, OW) {
+       console.assert(4 === OW.length, "Must have 4 textures for bowl fill metadatas");
+       const mW = {
+         ...iW
+       };
+       delete mW.rootMetaDesc, delete mW.textureInfo, delete mW.afterEatenItem;
+       const EW = `Partially Full ${WW}`,
+         NW = `Half Full ${WW}`,
+         PW = `Nearly Full ${WW}`,
+         LW = WW;
+       return {
+         [EW]: {
+           ...iW,
+           textureInfo: OW[0],
+           afterEatenItem: "Bowl",
+           rootMetaDesc: `${EW}|meta|charging1`
+ ... (20 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L334-L335` → after: `L9543-L9563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R9543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L9543-L9563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/87.js#L9543-L9563) · [Before (L334-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/87.js#L334-L335)

```diff
-     function UB(BB) {
-       return `${Math.round(100*BB)}%`
+     function AW() {
+       return Object.fromEntries(EW.t.map((WW => {
+         const iW = (0, mW.qe)(WW),
+           OW = (0, mW.ue)(WW);
+         return [(0, mW.Zb)(WW), {
+           displayName: {
+             translationKey: `item:${iW}SpawnOrb`
+           },
+           type: "Item",
+           textureInfo: `${OW}_spawn_orb`,
+           weight: 1,
+           heldItemScale: 1,
+           stackable: !0,
+           description: {
+             translationKey: `item:${iW}SpawnOrbDescription`,
+             params: {
+ ... (5 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L338-L339` → after: `L9573-L9612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R9573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L9573-L9612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/87.js#L9573-L9612) · [Before (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/87.js#L338-L339)

```diff
-     function fB(BB) {
-       return `${BB>=0?"+":""}${UB(BB)}`
+     function jW() {
+       return Object.fromEntries(EW.k.flatMap((WW => {
+         const iW = (0, mW.ue)(WW);
+         return EW.m[WW].map((OW => {
+           var EW;
+           const NW = "default" !== OW && (null === (EW = bW[WW]) || void 0 === EW ? void 0 : EW.includes(OW)),
+             PW = NW ? {
+               heldItemGlb: (0, mW.Cb)(WW, "default")
+             } : {};
+           return [(0, mW.Cb)(WW, OW), {
+             type: "Item",
+             textureInfo: `caught_${iW}_${NW?"default":OW}`,
+             weight: 1,
+             heldItemScale: 1,
+             stackable: !1,
+             ...PW
+ ... (24 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/88.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/88.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46)

#### 1. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L38605-L39025` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/88.js#L7) · [Before (L38605-L39025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/88.js#L38605-L39025)

```diff
-       f: () => YB,
-       j: () => QB,
-       k: () => oB
-     });
-     const DB = {
-       heldMs: 0,
-       released: !1
-     };
- 
-     function QB(BB, OB, GB, YB, QB, oB, jB) {
-       if (!OB || !GB || !YB) return DB;
-       if (BB.released) return BB;
-       const yB = QB ? BB.heldMs + oB : 0;
-       return {
-         heldMs: yB,
-         released: yB >= jB
- ... (405 more removed lines; see GitHub link above)
+       d: () => EW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L39027-L39071` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/88.js#L9-L10) · [Before (L39027-L39071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/88.js#L39027-L39071)

```diff
-     const YB = {
-         opaque: 1,
-         emissive: 2,
-         vegetation: 4,
-         dirt: 8,
-         sand: 16,
-         rock: 32,
-         slab: 64,
-         stairs: 128,
-         flat: 256,
-         sJ: 512,
-         dropped: 1024,
-         thrown: 2048,
-         placed: 4096,
-         lifeform: 65536
-       },
- ... (29 more removed lines; see GitHub link above)
+     const mW = ["Boat", "Obsidian Boat", "Hovercraft", "Yellow Kart", "White Kart", "Red Kart", "Purple Kart", "Pink Kart", "Orange Kart", "Magenta Kart", "Lime Kart", "Light Gray Kart", "Light Blue Kart", "Green Kart", "Gray Kart", "Cyan Kart", "Brown Kart", "Blue Kart", "Black  … [truncated]
+       EW = 47 == OW.j ? ["canAutoStep", "speedMultiplier"] : null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/89.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/89.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L4-L45` → after: `L4-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L4-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/89.js#L4-L253) · [Before (L4-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/89.js#L4-L45)

```diff
-   5165: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => cO,
-       d: () => PG,
-       e: () => sO,
-       i: () => OG,
-       k: () => CO,
-       l: () => xO,
-       m: () => rO,
-       n: () => eO,
-       r: () => KO,
-       s: () => MG,
-       w: () => JG,
-       z: () => TO,
-       C: () => gO
-     });
- ... (26 more removed lines; see GitHub link above)
+   38210: (WW, iW, OW) => {
+     if (OW.d(iW, {
+         b: () => cW,
+         e: () => EW,
+         i: () => PW,
+         j: () => NW,
+         m: () => KW,
+         n: () => UW
+       }), 47 == OW.j) var mW = OW(38214);
+     const EW = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
+       NW = ["Blade", "Guard", "Handle"],
+       PW = {
+         Wood: {
+           material: "Wood",
+           baseSword: "Wood Sword",
+           value: 1,
+ ... (234 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L47-L56` → after: `L255-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L255-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/89.js#L255-L324) · [Before (L47-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/89.js#L47-L56)

```diff
-     } catch {}
-     const ZB = 16,
-       NB = 256,
-       RB = 0,
-       WB = 1,
-       AB = 2,
-       VB = 3;
-     let SB, nB = RB,
-       UB = oB,
-       fB = 0;
+     }
+     const MW = new Map;
+ 
+     function KW(WW) {
+       var iW;
+       let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bW;
+       const mW = "string" === typeof WW ? sW(WW) : WW;
+       if (null === mW) return null;
+       const EW = kW(mW),
+         cW = OW === bW ? MW.get(EW) : void 0;
+       if (void 0 !== cW) return cW;
+       const jW = function(WW, iW) {
+         var OW, mW, EW, cW, bW, jW, UW, sW, MW;
+         const {
+           blade: KW,
+           guard: JW,
+ ... (54 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L59-L504` → after: `L327-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L327-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/89.js#L327-L339) · [Before (L59-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/89.js#L59-L504)

```diff
-       return BB === `function ${OB}() { [native code] }` || BB === `function ${OB}() {\n    [native code]\n}`
-     }
-     const dB = 0,
-       KB = 1,
-       uB = 2;
-     let mB = dB;
- 
-     function IB(BB, OB, GB) {
-       if (mB === uB && nB === WB && ! function() {
-           const BB = SB;
-           return fB >= NB && (UB(lB, zB, [BB]), fB = 0), BB[fB++] < 256 / ZB
-         }()) return function(BB, OB, GB) {
-         return UB(BB, OB, GB ?? 0)
-       }(...arguments);
-       if (mB === dB || nB === AB) return oB(BB, OB, GB);
-       let YB;
- ... (430 more removed lines; see GitHub link above)
+       return "Blade" === iW ? WW.blade : "Guard" === iW ? WW.guard : WW.handle
+     }
+ 
+     function YW(WW) {
+       return Math.round(100 * WW) / 100
+     }
+ 
+     function yW(WW) {
+       return `${Math.round(100*WW)}%`
+     }
+ 
+     function TW(WW) {
+       return `${WW>=0?"+":""}${yW(WW)}`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/90.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/90.js` (400 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L4-L16` → after: `L4-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L4-L470) · [Before (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L4-L16)

```diff
-   34660: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       EverythingMenu: () => gJ
-     });
-     var YB = GB(56),
-       DB = GB(1090),
-       QB = GB.n(DB),
-       oB = GB(1175),
-       jB = GB(1383),
-       yB = GB(2167),
-       JB = GB(1485),
-       MB = GB(1106),
-       PB = GB(1282);
+   38345: (WW, iW, OW) => {
+     var mW = {
+       "./67/67_Atlas.png": 28184,
+       "./67/67_Model.glb": 34226,
+       "./67/67_Reconstructed.glb": 34231,
+       "./67/variations/0_67_default.png": 28186,
+       "./Armour Collector/Armour Collector_Atlas.png": 28195,
+       "./Armour Collector/Armour Collector_Model.glb": 34240,
+       "./Armour Collector/Armour Collector_Reconstructed.glb": 34249,
+       "./Armour Collector/variations/0_armour collector_default.png": 28204,
+       "./Bear/BearSaddle_Atlas.png": 28212,
+       "./Bear/Bear_Atlas.png": 28215,
+       "./Bear/Bear_Model.glb": 34258,
+       "./Bear/variations/0_bear_default.png": 28221,
+       "./Bobino Musculino/Bobino Musculino_Atlas.png": 28229,
+       "./Bobino Musculino/Bobino Musculino_Model.glb": 34261,
+ ... (451 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L19-L94` → after: `L473-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L473-L474) · [Before (L19-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L19-L94)

```diff
-       let {
-         items: OB,
-         link: GB,
-         onClick: YB,
-         selectedItemId: DB,
-         className: zB,
-         padStartsOnTab: lB = !0
-       } = BB;
-       const {
-         t: pB
-       } = (0, oB.H)(), qB = (0, MB.g)(), ZB = [];
-       for (const QB of OB) {
-         var NB;
-         const BB = ZB[ZB.length - 1];
-         var RB;
-         if (BB && BB.title === (null !== (NB = QB.section) && void 0 !== NB ? NB : null)) BB.items.push(QB);
- ... (60 more removed lines; see GitHub link above)
+       var iW = NW(WW);
+       return OW(iW)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L111-L130` → after: `L478-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L478-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L478-L480) · [Before (L111-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L111-L130)

```diff
-       let {
-         setApplySettingsCallback: OB
-       } = BB;
-       const {
-         clientEscMenuOptions: GB
-       } = (0, UB.o)(["clientEscMenuOptions"]), [DB, QB] = (0, YB.useState)(!1), [oB, jB] = (0, YB.useState)(!1), [yB, MB] = (0, YB.useState)(6400), [zB, lB] = (0, YB.useState)(3600), [pB, qB] = (0, YB.useState)(!1), [ZB, NB] = (0, YB.useState)(!1);
- 
-       function RB(BB) {
-         const OB = "screenshot" === BB ? jB : QB;
-         OB(!0);
-         const GB = pB ? "normals" : ZB ? "depth" : null;
-         fB.devTools.downloadScene(BB, {
-           width: yB,
-           height: zB,
-           colouring: GB
-         }).catch((BB => {
- ... (4 more removed lines; see GitHub link above)
+       if (!OW.o(mW, WW)) {
+         var iW = new Error("Cannot find module '" + WW + "'");
+         throw iW.code = "MODULE_NOT_FOUND", iW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L132-L233` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L482) · [Before (L132-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L132-L233)

```diff
-       return (0, PB.jsxs)("div", {
-         className: "DeveloperToolsCategory",
-         children: [(0, PB.jsx)(nB.c, {
-           label: "Disable Ambient Occlusion",
-           checked: GB.disableAmbientOcclusion,
-           onClick: BB => {
-             UB.c.setClientEscMenuOptions({
-               disableAmbientOcclusion: BB
-             }), OB((() => nB.g))
-           },
-           circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
-         }), fB.devTools.supports("ambientLight") && (0, PB.jsx)(nB.f, {
-           name: "Ambient Lighting Intensity",
-           min: 0,
-           max: 1,
-           step: .01,
- ... (86 more removed lines; see GitHub link above)
+       return mW[WW]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L235-L248` → after: `L484-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L484-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L484-L493) · [Before (L235-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L235-L248)

```diff
-     var dB = GB(120),
-       KB = GB(1121),
-       uB = GB(34683),
-       mB = GB(3376),
-       IB = GB(1560),
-       FB = GB(1262),
-       iB = GB(1234),
-       LB = GB(2141),
-       gB = GB(1540),
-       rB = GB(353),
-       XB = GB(1620),
-       wB = GB(615),
-       EB = GB(2516);
-     const cB = "store:retiredRankEnds";
+     EW.keys = function() {
+       return Object.keys(mW)
+     }, EW.resolve = NW, WW.exports = EW, EW.id = 38345
+   },
+   39436: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => NW
+     });
+     var mW = OW(39441),
+       EW = OW.n(mW);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L251-L276` → after: `L496-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L496-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L496-L498) · [Before (L251-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L251-L276)

```diff
-       let {
-         until: OB,
-         className: GB
-       } = BB;
-       const {
-         t: YB,
-         selectedLanguage: DB
-       } = (0, oB.H)(), QB = new Date(OB).toLocaleDateString((0, oB.s)(DB.code, cB), {
-         year: "numeric",
-         month: "short",
-         day: "numeric"
-       });
-       return (0, PB.jsx)("span", {
-         className: GB,
-         children: YB(cB, {
-           date: QB
- ... (10 more removed lines; see GitHub link above)
+       var iW = [],
+         OW = [],
+         mW = null;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L278-L286` → after: `L500-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L500-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L500-L520) · [Before (L278-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L278-L286)

```diff
-     function sB(BB, OB, GB) {
-       const YB = wB.p[(0, wB.i)(wB.p, OB)],
-         DB = void 0 === YB ? void 0 : (0, bB.c)(BB.entitlements, YB.entitlementId);
-       return void 0 === DB || null === DB.expiresAt || (0, TB.e)(DB) <= GB ? null : DB.willRenew && null === DB.billingIssueDetectedAt ? {
-         renews: !0,
-         at: Math.max(DB.expiresAt, GB)
-       } : {
-         renews: !1,
-         at: (0, TB.e)(DB)
+       function NW(OW, EW) {
+         var NW = mW[OW],
+           LW = mW[EW];
+         NW && LW && (function(WW, iW, OW, mW) {
+           if (WW.MLW) return iW.MLW ? function(WW, iW) {
+             var OW = (WW[3] - WW[0]) / 2,
+               mW = (iW[3] - iW[0]) / 2,
+               EW = WW[0] + OW - (iW[0] + mW),
+               NW = WW[2] + OW - (iW[2] + mW),
+               PW = OW + mW;
+             return EW * EW + NW * NW <= PW * PW
+           }(OW, mW) : PW(OW, mW);
+           if (iW.MLW) return PW(mW, OW);
+           return !0
+         }(NW, LW, iW[OW], iW[EW]) && function(WW, iW, OW) {
+           var mW = iW.rD,
+ ... (5 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L288-L295` → after: `L522-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L522-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L522-L552) · [Before (L288-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L288-L295)

```diff
-     }
-     var xB = GB(3393),
-       tB = GB(3396);
-     const BO = {
-       cancel: !1,
-       resume: !1,
-       manage: !1
-     };
+       return {
+         name: "collideEntities",
+         order: 70,
+         state: {
+           MLW: !1,
+           UmW: 1,
+           kmW: 1,
+           callback: null,
+           bmW: 0,
+           jmW: 0
+         },
+         mY: null,
+         mH: null,
+         system: function(PW, LW) {
+           for (var cW = WW.EY, wW = 0; wW < LW.length; wW++) {
+             var tW = LW[wW].rD,
+ ... (15 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L298` → after: `L570-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L570-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L570-L587) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L298)

```diff
-       return BB instanceof eB.c && "storeUnavailable" === BB.code ? (console.warn("Billing: the store didn't take a subscription change:", BB), "store:subscriptionStoreUnavailable") : BB instanceof eB.c && "subscriptionActionUnavailable" === BB.code ? (console.warn("Billing: a su … [truncated]
+       return {
+         name: "collideTerrain",
+         order: 0,
+         state: {
+           callback: null
+         },
+         mY: function(iW, OW) {
+           var mW = WW.entities;
+           mW.SLW(iW) && (mW.zWW(iW).body.Vx = function(OW) {
+             var mW = WW.EY.YLW(iW).callback;
+             mW && mW(OW, iW)
+           })
+         },
+         mH: function(iW, OW) {
+           var mW = WW.entities;
+           mW.SLW(iW) && (mW.zWW(iW).body.Vx = null)
+ ... (2 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L300-L308` → after: `L589-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L589-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L589-L605) · [Before (L300-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L300-L308)

```diff
-     async function GO() {
-       try {
-         var BB;
-         const {
-           offering: OB
-         } = await (0, tB.getBillingClient)().getOfferings((0, EB.u)(Date.now()).placementId);
-         return null !== (BB = null === OB || void 0 === OB ? void 0 : OB.packages.find(xB.isPricedPackage)) && void 0 !== BB ? BB : null
-       } catch (OB) {
-         return console.warn("Billing: loading the rank plan's price failed:", OB), null
+     OW.r(iW), OW.d(iW, {
+       default: () => mW
+     })
+   },
+   39523: (WW, iW, OW) => {
+     function mW(WW) {
+       return {
+         name: "FWW",
+         order: 99,
+         state: {
+           bM: 1.5
+         },
+         mY: null,
+         mH: null,
+         system: function(iW, OW) {
+           for (var mW = WW.camera.JG, NW = 0; NW < OW.length; NW++) EW(OW[NW], mW, WW)
+ ... (1 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L312-L336` → after: `L609-L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L609-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L609-L614) · [Before (L312-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L312-L336)

```diff
-     function YO(BB) {
-       const {
-         userContext: OB
-       } = (0, pB.d)(), {
-         superRankInfo: GB
-       } = OB, DB = (0, aB.usePurchasesAllowed)(), QB = (0, rB.Oc)(GB), oB = BB && DB && (QB || OB.ranksMayChange), [jB, yB] = (0, YB.useState)(null), [JB, MB] = (0, YB.useState)(!1), [PB, zB] = (0, YB.useState)(!1), [lB, qB] = (0, YB.useState)(null);
-       (0, YB.useEffect)((() => {
-         if (!oB) return;
-         let BB = !1;
-         const GB = () => {
-           Promise.all([(0, tB.getBillingClient)().getSubscriptions(), GO()]).then((GB => {
-             let [YB, DB] = GB;
-             BB || (yB({
-               for: OB,
-               answer: YB,
-               pkg: DB
- ... (9 more removed lines; see GitHub link above)
+     function EW(WW, iW, OW) {
+       if (OW.EY.yLW(WW.rD)) {
+         var mW = OW.EY.XiW(WW.rD).mesh;
+         if (mW.metadata) {
+           var EW = iW < WW.bM;
+           OW.TZ.NWW(mW, !EW)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L338-L380` → after: `L616-L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L616-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L616-L646) · [Before (L338-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L338-L380)

```diff
-       }), [oB, OB]);
-       const ZB = oB && QB && null !== jB && jB.for === OB ? function(BB, OB, GB, YB) {
-         var DB;
-         const {
-           customerInfo: QB,
-           actions: oB
-         } = BB, jB = wB.p[(0, wB.i)(wB.p, OB)], yB = void 0 === jB ? void 0 : (0, bB.c)(QB.entitlements, jB.entitlementId), JB = sB(QB, OB, YB);
-         if (void 0 === yB || null === JB) return null;
-         const MB = Object.entries(QB.subscriptions).find((BB => {
-           let [, OB] = BB;
-           return OB.productId === yB.productId && OB.store === yB.store && !(0, TB.i)(OB.status)
-         }));
-         if (void 0 === MB) return null;
-         const [PB, zB] = MB;
-         return {
-           key: PB,
- ... (27 more removed lines; see GitHub link above)
+       }
+     }
+     OW.r(iW), OW.d(iW, {
+       default: () => mW
+     })
+   },
+   39511: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => NW
+     });
+     var mW = OW(352),
+       EW = OW.n(mW);
+ 
+     function NW(WW) {
+       let iW = 0;
+       const OW = EW().create(),
+ ... (15 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L383-L394` → after: `L662-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L662-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L662-L677) · [Before (L383-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L383-L394)

```diff
-         openManagePage: async function() {
-           if (null === ZB || PB) return;
-           const BB = window.open("", "_blank");
-           zB(!0), qB(null);
-           try {
-             const OB = await (0, tB.getBillingClient)().subscriptionManagementUrl(ZB.key, HB.e.get().getCurrentLanguageCode());
-             null === BB ? window.open(OB, "_blank", "noopener") : (BB.opener = null, BB.location.href = OB)
-           } catch (OB) {
-             null === BB || void 0 === BB || BB.close(), qB(OO(OB))
-           } finally {
-             zB(!1)
-           }
+         mY: function(OW, mW) {
+           mW.offset = mW.offset ? EW().clone(mW.offset) : EW().create();
+           const PW = WW.EY.jB(OW);
+           PW && (PW.JC = !1, EW().set(PW.Sj, 0, 0, 0), EW().set(PW.eC, 0, 0, 0), EW().set(PW.gC, 0, 0, 0)), iW++, NW(mW, !1), iW++, NW(mW, !0)
+         },
+         mH: function(iW) {
+           const OW = WW.EY.jB(iW);
+           OW && (OW.JC = !0, EW().set(OW.Sj, 0, 0, 0), EW().set(OW.eC, 0, 0, 0), EW().set(OW.gC, 0, 0, 0))
+         },
+         system: function(WW, OW) {
+           iW++;
+           for (const iW of OW) NW(iW, !1)
+         },
+         ZY: function(WW, OW) {
+           iW++;
+           for (const iW of OW) NW(iW, !0)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L398-L399` → after: `L681-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L681-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L681-L691) · [Before (L398-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L398-L399)

```diff
-     var DO = GB(1400),
-       QO = GB(3451);
+   },
+   39530: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => ZW
+     });
+     var mW = OW(352),
+       EW = OW.n(mW),
+       NW = OW(38663),
+       PW = OW(38493),
+       LW = OW(39539),
+       cW = OW(38688);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L402-L406` → after: `L694-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L694-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L694-L699) · [Before (L402-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L402-L406)

```diff
-       return new Date(BB).toLocaleDateString(OB, {
-         year: "numeric",
-         month: "short",
-         day: "numeric"
-       })
+       const OW = iW.WNW || iW;
+       void 0 === OW.bV?.aLightLevels && (OW.lV("aLightLevels", 4), OW.bV.aLightLevels = (0, NW.m)());
+       const {
+         bV: mW
+       } = iW;
+       !mW || void 0 !== mW.aLightLevels && null !== mW.aLightLevels && mW.aLightLevels !== OW.bV?.aLightLevels || (mW.aLightLevels = (0, NW.m)()), WW.TZ.lOW && OW.material && WW.TZ.lOW(OW.material)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L409-L502` → after: `L702-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L702-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L702-L705) · [Before (L409-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L409-L502)

```diff
-     function jO(BB) {
-       let {
-         showing: OB,
-         className: GB
-       } = BB;
-       const {
-         t: YB,
-         selectedLanguage: DB
-       } = (0, oB.H)(), {
-         subscription: yB,
-         loadFailed: MB,
-         busy: zB,
-         errorKey: lB,
-         change: pB,
-         openManagePage: qB
-       } = YO(OB);
- ... (78 more removed lines; see GitHub link above)
+     function tW(WW, iW) {
+       const OW = (0, NW.l)(iW);
+       for (const mW of OW) wW(WW, mW);
+       return OW
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L504-L522` → after: `L707-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L707-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L707-L761) · [Before (L504-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L504-L522)

```diff
-     var yO = GB(2437),
-       JO = GB(2974),
-       MO = GB(1896);
-     async function PO() {
-       try {
-         return function(BB) {
-           const OB = new Map;
-           for (const {
-               store: GB,
-               status: YB,
-               autoRenewStatus: DB,
-               managementUrl: QB
-             }
-             of Object.values(BB.subscriptions)) !(0, TB.h)(GB) || (0, TB.i)(YB) || "willNotRenew" === DB || OB.has(GB) || OB.set(GB, null !== QB && void 0 !== QB ? QB : TB.m[GB]);
-           return Array.from(OB, (BB => {
-             let [OB, GB] = BB;
- ... (3 more removed lines; see GitHub link above)
+ 
+     function ZW(WW) {
+       return {
+         name: "mesh",
+         order: 100,
+         state: {
+           uD: null,
+           OmW: null,
+           mesh: null,
+           offset: null,
+           uLW: null,
+           Fb: !1,
+           oLW: !0,
+           dLW: !0,
+           eLW: null,
+           vLW: null,
+ ... (39 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L524-L527` → after: `L763-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L763-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L763-L780) · [Before (L524-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L524-L527)

```diff
-           }))
-         }(await (0, MO.h)((0, tB.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
-       } catch (BB) {
-         return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", BB), null
+           }
+         }
+       }
+     }
+   },
+   39422: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       PhysicsState: () => NW,
+       default: () => PW,
+       setFloatingYValue: () => wW,
+       XLW: () => cW,
+       BLW: () => tW
+     });
+     var mW = OW(352),
+       EW = OW.n(mW);
+     class NW {
+ ... (2 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L563-L566` → after: `L786-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L786-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L786-L811) · [Before (L563-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L563-L566)

```diff
-         text: OB(zB, {
-           date: lB
-         }),
-         manageUrl: ZB
+         name: "physics",
+         order: 40,
+         state: new NW,
+         mY: function(iW, OW) {
+           OW.Hx = WW, OW.zN = null, OW.body = WW.physics.Rx(), cW(OW, WW.EY.YG(OW.rD))
+         },
+         mH: function(iW, OW) {
+           if (WW.EY.hasPosition(OW.rD)) {
+             var mW = WW.EY.YG(OW.rD);
+             tW(OW, mW), ZW(OW, mW, 0, !1)
+           }
+           WW.physics.Gx(OW.body)
+         },
+         system: function(iW, OW) {
+           for (var mW = 0; mW < OW.length; mW++) {
+             var EW = OW[mW];
+ ... (10 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L569-L574` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L814) · [Before (L569-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L569-L574)

```diff
-     var lO = GB(1405),
-       pO = GB(1204),
-       qO = GB(5377),
-       ZO = GB(1516),
-       NO = GB(4096),
-       RO = GB(2590);
+     var LW = EW().create();
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L576-L611` → after: `L816-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L816-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L816-L819) · [Before (L576-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L576-L611)

```diff
-     function WO(BB) {
-       let {
-         showing: OB
-       } = BB;
-       const {
-         t: GB
-       } = (0, oB.H)(), {
-         data: YB,
-         failed: DB
-       } = (0, JO.h)(NO.h, OB);
-       return 0 === (null === YB || void 0 === YB ? void 0 : YB.length) || null === YB && !DB ? null : (0, PB.jsxs)("div", {
-         className: "SettingBox AccountSettingsPaymentHistory",
-         children: [(0, PB.jsx)("div", {
-           className: "AccountSettingsLabel",
-           children: GB("paymentHistory:title")
-         }), null === YB && DB && (0, PB.jsx)("div", {
- ... (20 more removed lines; see GitHub link above)
+     function cW(WW, iW) {
+       var OW = WW.body.Mx,
+         mW = iW.WmW;
+       EW().copy(OW.base, mW), EW().set(OW.vec, iW.width, iW.height, iW.width), EW().add(OW.max, OW.base, OW.vec), wW(WW, iW, WW.zN)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L616-L619` → after: `L822-L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L822-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L822-L825) · [Before (L616-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L616-L619)

```diff
-     function SO() {
-       (0, VO.b)({
-         titleKey: "payments:logInToRestore"
-       })
+     function wW(WW, iW, OW) {
+       WW.zN = OW;
+       const mW = iW.Wl ?? WW.Hx.Wl;
+       WW.body.nC = null !== OW ? OW - mW[1] : null
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L622-L637` → after: `L828-L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L828-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L828-L849) · [Before (L622-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L622-L637)

```diff
-     function nO(BB) {
-       let {
-         status: OB
-       } = BB;
-       switch (OB) {
-         case "restored":
-           return (0, vB.g)(), {
-             key: "payments:purchasesRestored",
-             failed: !1
-           };
-         case "nothingToRestore":
-           return {
-             key: "payments:nothingToRestore", failed: !1
-           };
-         case "dismissed":
-           return null
+     function tW(WW, iW) {
+       var OW = WW.body.Mx.base,
+         mW = iW.width / 2,
+         EW = iW.JiW;
+       EW[0] = OW[0] + mW, EW[1] = OW[1], EW[2] = OW[2] + mW
+     }
+ 
+     function ZW(WW, iW, OW, mW) {
+       var NW = WW.body.Sj;
+       EW().GA(LW, iW.JiW, NW, OW), mW && EW().lerp(LW, iW.Yz, LW, .3), EW().copy(iW.Yz, LW)
+     }
+   },
+   39416: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       PositionState: () => EW,
+       default: () => NW,
+ ... (6 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L641-L647` → after: `L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L853) · [Before (L641-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L641-L647)

```diff
-     function UO() {
-       const BB = (0, tB.usePageBillingClient)(),
-         {
-           userContext: OB
-         } = (0, pB.d)(),
-         [GB, DB] = (0, YB.useState)(!1),
-         [QB, oB] = (0, YB.useState)(null);
+     function NW(WW) {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L649-L662` → after: `L855-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L855-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L855-L870) · [Before (L649-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L649-L662)

```diff
-         restoring: GB,
-         notice: QB,
-         restore: () => {
-           OB.isLoggedIn() ? (DB(!0), oB(null), BB.restorePurchases().then(nO, (BB => BB instanceof eB.c && "loginRequired" === BB.code ? (SO(), null) : function(BB) {
-             return BB instanceof eB.c && "storeBusy" === BB.code ? {
-               key: "payments:storeBusy",
-               failed: !0
-             } : (console.error("Billing: restoring purchases failed:", BB), (0, vB.g)(), {
-               key: "payments:restoreFailed",
-               failed: !0
-             })
-           }(BB))).then(oB).finally((() => {
-             DB(!1)
-           }))) : SO()
+         name: "position",
+         order: 41,
+         state: new EW,
+         mY: function(iW, OW) {
+           var EW = [0, 0, 0];
+           OW.position && mW.copy(EW, OW.position), OW.position = EW, OW.JiW = mW.create(), OW.Yz = mW.create(), OW.WmW = new Float32Array(6), WW.fiW(OW.position, null, OW.JiW), mW.copy(OW.Yz, OW.JiW), PW(OW)
+         },
+         mH: null,
+         system: function(iW, OW) {
+           for (var mW = 0; mW < OW.length; mW++) {
+             var EW = OW[mW],
+               NW = EW.Wl ?? WW.Wl,
+               LW = EW.position,
+               cW = EW.JiW;
+             LW[0] = cW[0] + NW[0], LW[1] = cW[1] + NW[1], LW[2] = cW[2] + NW[2], PW(EW)
+           }
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L668-L695` → after: `L876-L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L876-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L876-L879) · [Before (L668-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L668-L695)

```diff
-       let {
-         restoring: OB,
-         notice: GB,
-         restore: DB
-       } = BB;
-       const {
-         t: jB
-       } = (0, oB.H)(), yB = (0, aB.usePurchasesAllowed)(), MB = (0, aB.getBillingStore)(), zB = (0, YB.useRef)(null);
-       return (0, YB.useEffect)((() => {
-         var BB;
-         null === (BB = zB.current) || void 0 === BB || BB.scrollIntoView({
-           block: "nearest"
-         })
-       }), [GB]), yB && (0, AO.d)(MB) ? (0, PB.jsxs)("div", {
-         className: "AccountSettingsRestorePurchases",
-         children: [(0, PB.jsx)(JB.j, {
- ... (12 more removed lines; see GitHub link above)
+       var iW = WW.width / 2,
+         OW = WW.JiW,
+         mW = WW.WmW;
+       mW[0] = OW[0] - iW, mW[1] = OW[1], mW[2] = OW[2] - iW, mW[3] = OW[0] + iW, mW[4] = OW[1] + WW.height, mW[5] = OW[2] + iW
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L697-L714` → after: `L881-L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L881-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L881-L898) · [Before (L697-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L697-L714)

```diff
-     var kO = GB(1991),
-       dO = GB(1246),
-       KO = GB(1186),
-       uO = GB(1338),
-       mO = GB(331),
-       IO = GB(2712);
-     const FO = {
-       appStore: {
-         name: "App Store",
-         ...mO.bc.appStore
-       },
-       googlePlay: {
-         name: "Google Play",
-         ...mO.bc.googlePlay
-       },
-       discord: {
- ... (2 more removed lines; see GitHub link above)
+   },
+   39430: (WW, iW, OW) => {
+     function mW(WW) {
+       var iW = "GLW";
+       return {
+         name: iW,
+         order: 99,
+         state: {
+           time: 100.1
+         },
+         mY: null,
+         mH: null,
+         system: function(OW, mW) {
+           for (var EW = 0; EW < mW.length; EW++) {
+             var NW = mW[EW];
+             NW.time -= OW, NW.time < 0 && WW.EY.mV(NW.rD, iW)
+ ... (2 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L716` → after: `L900-L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L900-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L900-L988) · [Before (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L716)

```diff
-     };
+     }
+     OW.r(iW), OW.d(iW, {
+       default: () => mW
+     })
+   },
+   39398: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => jW,
+       e: () => MW,
+       i: () => lW
+     });
+     var mW = OW(39404),
+       EW = OW.n(mW),
+       NW = OW(352),
+       PW = OW.n(NW),
+       LW = OW(39416),
+ ... (73 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L719-L751` → after: `L991-L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L991-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L991-L1166) · [Before (L719-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L719-L751)

```diff
-       let {
-         warning: OB,
-         subscriptions: GB
-       } = BB;
-       const {
-         t: YB
-       } = (0, oB.H)();
-       return null !== GB && 0 === GB.length ? (0, PB.jsx)(PB.Fragment, {
-         children: YB(OB)
-       }) : (0, PB.jsxs)("div", {
-         className: "DeleteAccountSubtitle",
-         children: [YB(OB), null === GB && (0, PB.jsx)("div", {
-           className: "DeleteAccountSubtitleNote",
-           children: YB("auth:deleteAccountSubscriptionsLoadFailed")
-         }), null !== GB && (0, PB.jsxs)(PB.Fragment, {
-           children: [(0, PB.jsx)("div", {
- ... (17 more removed lines; see GitHub link above)
+       xW = WW
+     }
+     var AW = {
+       rLW: 10
+     };
+     const bW = {
+       physics: {
+         cZ: OW(39422),
+         server: !0
+       },
+       position: {
+         cZ: OW(39416),
+         server: !0
+       },
+       nZ: {},
+       GLW: {
+ ... (160 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L755-L828` → after: `L1169-L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1169-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L1169-L1172) · [Before (L755-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L755-L828)

```diff
-     function gO(BB) {
-       let {
-         showing: OB
-       } = BB;
-       const {
-         userContext: GB,
-         isUserContextUpdating: DB
-       } = (0, pB.d)(), {
-         t: QB
-       } = (0, oB.H)(), [jB, yB] = (0, YB.useState)(!1), [MB, zB] = (0, YB.useState)(null), lB = (0, YB.useRef)(OB);
-       (0, YB.useEffect)((() => (lB.current = OB, () => {
-         lB.current = !1
-       })), [OB]);
-       const qB = DB || jB;
-       return (0, PB.jsxs)("div", {
-         className: "AccountSettingsDeleteAccountButtonContainer",
- ... (58 more removed lines; see GitHub link above)
+     function UW(WW, iW, OW, mW, EW) {
+       var NW = WW[iW] + OW,
+         PW = WW[iW] + mW;
+       Math.abs(NW - Math.round(NW)) < .002 && (WW[iW] += .002), Math.abs(PW - Math.round(PW)) < .001 && (WW[iW] -= .001)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L832` → after: `L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L1177) · [Before (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L832)

```diff
-       return (0, dB.isDiscordClient)() ? "auth:discordActivityDeleteAccountLossWarning" : BB ? "auth:deleteAccountLossWarning" : OB ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
+       return !(WW[0] > iW[3]) && (!(WW[1] > iW[4]) && (!(WW[2] > iW[5]) && (!(WW[3] < iW[0]) && (!(WW[4] < iW[1]) && !(WW[5] < iW[2])))))
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L834-L843` → after: `L1179-L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1179-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L1179-L1225) · [Before (L834-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L834-L843)

```diff
-     async function XO(BB) {
-       try {
-         const {
-           accountCreatedAt: OB
-         } = await (0, MO.h)(gB.b.getPlayerProfile(BB, {
-           lowerCaseName: BB.getPlayerName().toLowerCase()
-         }), 5e3, "The player's profile got no answer in 5 s");
-         return null !== OB && Date.now() - OB >= 7 * rB.g
-       } catch (OB) {
-         return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", OB), !0
+     let MW = !1
+   },
+   38576: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => Ei,
+       f: () => ti,
+       j: () => Wi,
+       k: () => Oi,
+       o: () => aW,
+       q: () => rW,
+       r: () => FW,
+       v: () => IW,
+       y: () => zW,
+       B: () => Zi,
+       E: () => QW,
+       F: () => ii
+ ... (31 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L850-L902` → after: `L1229-L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1229-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L1229-L1235) · [Before (L850-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L850-L902)

```diff
-     function hO(BB) {
-       let {
-         showing: OB
-       } = BB;
-       const {
-         t: GB
-       } = (0, oB.H)(), {
-         data: YB,
-         failed: DB
-       } = (0, JO.h)(wO.d, OB), QB = null === YB ? null : (0, wO.f)(YB);
-       return (0, PB.jsxs)("div", {
-         className: "SettingBox BlockedAndIgnoredPlayers",
-         children: [(0, PB.jsx)("div", {
-           className: "AccountSettingsLabel",
-           children: GB("settingsMenu:blockedAndIgnoredPlayers")
-         }), null === QB && !DB && (0, PB.jsx)(SB.b, {}), null === QB && DB && (0, PB.jsxs)("div", {
- ... (37 more removed lines; see GitHub link above)
+     function xW(WW, iW, OW, mW, EW, NW) {
+       if ("number" !== typeof OW) {
+         for (let mW = 0; mW < OW.length; mW++)
+           if (!lW(WW[iW + mW], OW[mW])) return !1;
+         return !0
+       }
+       return !!lW(WW[iW], OW) && (void 0 === mW || !!lW(WW[iW + 1], mW) && (void 0 === EW || !!lW(WW[iW + 2], EW) && (void 0 === NW || lW(WW[iW + 3], NW))))
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L908-L923` → after: `L1238-L1240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1238-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L1238-L1240) · [Before (L908-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L908-L923)

```diff
-     function bO(BB) {
-       let {
-         userContext: OB
-       } = BB;
-       const {
-         t: GB
-       } = (0, oB.H)();
-       return eO.d && (0, aO.i)() && OB !== KB.NULL_USER_CONTEXT ? (0, PB.jsxs)("div", {
-         className: "SettingBox",
-         children: [(0, PB.jsx)("div", {
-           className: "AccountSettingsLabel",
-           children: GB("settingsMenu:playerId")
-         }), (0, PB.jsx)(TO.c, {
-           text: (0, aO.f)(OB)
-         })]
-       }) : null
+     function lW(WW, iW) {
+       const OW = Math.fround(iW);
+       return WW === OW && (0 !== OW || 1 / WW === 1 / OW)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L956-L1246` → after: `L1243-L1248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1243-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L1243-L1248) · [Before (L956-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L956-L1246)

```diff
-       function LO(BB) {
-         BB !== kB && ((0, FB.s)(BB) ? (BB = (0, FB.u)(BB), TB(MB("homePage:nameCharacters"))) : TB(null), RO.current && (RO.current.value = BB), cB(BB))
-       }
-       return (0, YB.useEffect)((() => (!0 === DB ? (clearInterval(AO.current), AO.current = setInterval(WB, 1e3)) : clearInterval(AO.current), () => {
-         clearInterval(AO.current)
-       })), [DB, WB]), (0, YB.useEffect)((() => {
-         var BB;
-         cB(null !== (BB = AB.getPlayerName()) && void 0 !== BB ? BB : "")
-       }), [AB]), (0, YB.useEffect)((() => {
-         if (!DB || !FO || fB) return;
-         let BB = !1;
-         return IO(!0), uO([]), gB.b.getPlayerProfile(AB, {
-           lowerCaseName: AB.getPlayerName().toLowerCase()
-         }).then((OB => {
-           BB || uO(OB.socialLinks)
-         })).catch((BB => {
- ... (275 more removed lines; see GitHub link above)
+     function AW(WW, iW, OW, mW) {
+       const EW = WW.getBuffer();
+       if (!EW || !WW.isUpdatable()) return;
+       const NW = WW._engine;
+       NW.bb >= 2 ? (bW(NW, EW, iW, OW, mW), jW(NW)) : WW.updateDirectly(iW.subarray(OW, mW), OW)
+     }
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L1248-L1249` → after: `L1250-L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1250-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L1250-L1251) · [Before (L1248-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L1248-L1249)

```diff
-     function HO(BB, OB) {
-       return BB ? OB ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
+     function bW(WW, iW, OW, mW, EW) {
+       WW.bindArrayBuffer(iW), WW._gl.bufferSubData(WW._gl.ARRAY_BUFFER, mW * Float32Array.BYTES_PER_ELEMENT, OW, mW, EW - mW)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L1258-L1267` → after: `L1254-L1255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1254-L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L1254-L1255) · [Before (L1258-L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L1258-L1267)

```diff
-     function GG() {
-       const {
-         t: BB
-       } = (0, oB.H)();
-       return (0, tO.g)("localPlayerAlive") ? (0, PB.jsx)(BG.d, {
-         icon: "camera-alt",
-         title: BB("screenshotMode:title"),
-         sub: BB("screenshotMode:entrySub"),
-         onClick: OG.d
-       }) : null
+     function jW(WW) {
+       WW._cachedVertexBuffers = null
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L1269-L1283` → after: `L1257-L1313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1257-L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L1257-L1313) · [Before (L1269-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L1269-L1283)

```diff
-     var YG = GB(34713);
-     const DG = (0, YB.memo)((function(BB) {
-         let {
-           inGame: OB
-         } = BB;
-         const {
-           t: GB,
-           selectedLanguage: YB
-         } = (0, oB.H)(), {
-           clientEscMenuOptions: DB,
-           showDebugOverlay: QB,
-           isTouchScreen: jB
-         } = (0, UB.o)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), yB = (0, qB.g)("hideCoordinates");
-         let JB = "settingsMenu:showCoordinates",
-           MB = "settingsMenu:showChunkCoordinates";
+     class UW {
+       constructor(WW) {
+         this.engine = WW, this.pages = []
+       }
+       static forEngine(WW) {
+         const iW = WW;
+         if (!(iW.bb >= 2) || !kW.test(iW.getGlInfo().renderer)) return null;
+         let OW = sW.get(WW);
+         if (!OW) {
+           const mW = new UW(iW);
+           OW = mW, sW.set(WW, mW);
+           const EW = WW.DA.add((() => {
+             for (const WW of mW.pages) WW.restore()
+           }));
+           WW.jD.addOnce((() => {
+             WW.DA.remove(EW), mW.dispose(), sW.delete(WW)
+ ... (41 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L1285-L1517` → after: `L1315-L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1315-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L1315-L1319) · [Before (L1285-L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L1285-L1517)

```diff
-         function zB(BB) {
-           const OB = new Intl.DisplayNames([BB], {
-             type: "language"
-           }).of(BB);
-           return OB.charAt(0).toUpperCase() + OB.slice(1)
-         }
-         return yB && (JB = "settingsMenu:showCoordinatesHidden", MB = "settingsMenu:showChunkCoordinatesHidden"), (0, PB.jsxs)("div", {
-           className: "SettingsMenuRightInner",
-           children: [OB && NB.featureFlags.canUseInviteLinks && (0, PB.jsxs)("div", {
-             className: "SettingBox",
-             children: [(0, PB.jsx)("div", {
-               className: "SettingsMenuInviteHeader",
-               children: GB("settingsMenu:inviteLink")
-             }), (0, PB.jsx)(vO.e, {})]
-           }), (0, PB.jsxs)("div", {
-             className: "SettingBox",
- ... (217 more removed lines; see GitHub link above)
+     function MW(WW, iW, OW, mW, EW) {
+       if (!(EW <= mW)) {
+         if (iW < 0 || iW + (EW - mW) > WW.size) throw new Error(`ThinInstanceArena: write of ${EW-mW} floats at ${iW} overruns a ${WW.size}-float slot`);
+         WW.page.write(WW.start + iW, OW, mW, EW)
+       }
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L1519-L1530` → after: `L1321-L1360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1321-L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L1321-L1360) · [Before (L1519-L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L1519-L1530)

```diff
- 
-     function RG(BB) {
-       return async function(BB) {
-         if (BB.remindersOn || (0, UB.g)(UB.c.get("gameState"))) return null;
-         const OB = await NG();
-         if (null !== ZG.g.getItem(OB)) return null;
-         const [GB, YB] = await Promise.all([(0, JG.c)().catch((BB => (console.error("Couldn't tell whether this device can take push notifications:", BB), null))), WG()]);
-         if (null === GB && !YB) return null;
-         if (null !== GB && ((0, pG.e)() || (0, JG.d)())) return null;
-         return {
-           askedKey: OB,
-           requester: GB
+     class KW {
+       constructor(WW, iW) {
+         this.engine = WW, this.data = void 0, this.buffer = void 0, this.free = void 0, this.runs = [], this.sorted = [], this.data = new Float32Array(iW), this.free = [0, iW], this.buffer = new((0, tW.c)().ArenaBuffer)(WW, this.data, !1, 0, !1, !0)
+       }
+       take(WW) {
+         const iW = this.free;
+         for (let OW = 0; OW < iW.length; OW += 2)
+           if (iW[OW + 1] >= WW) {
+             const mW = iW[OW];
+             return iW[OW + 1] === WW ? iW.splice(OW, 2) : (iW[OW] += WW, iW[OW + 1] -= WW), mW
+           } return -1
+       }
+       give(WW, iW) {
+         const OW = this.free;
+         let mW = 0;
+         for (; mW < OW.length && OW[mW] < WW;) mW += 2;
+ ... (24 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L1532-L1546` → after: `L1362-L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1362-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L1362-L1374) · [Before (L1532-L1546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L1532-L1546)

```diff
-       }(BB).catch((BB => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", BB), null)))
-     }
- 
-     function WG() {
-       return (0, yG.c)().then((BB => BB.app + BB.browser + BB.msnPlay > 0), (BB => (console.error("Couldn't tell where push notifications reach this account:", BB), !0)))
-     }
-     async function AG(BB) {
-       const OB = (0, lG.y)({
-           remindersOn: !0
-         }),
-         GB = null === BB ? Promise.resolve() : BB(),
-         [YB, DB] = await Promise.allSettled([OB, GB]);
-       "rejected" === YB.status && console.error("Failed to turn on Lucky Skin Block reminders:", YB.reason), "rejected" === DB.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", DB.reason), "rejected" !== YB.status && "rejected" !== DB … [truncated]
-         translationKey: "dailyDrop:remindFailed"
-       })
+         WW.length = 0;
+         const mW = this.engine;
+         let EW = OW[0],
+           NW = OW[1];
+         for (let PW = 2; PW <= OW.length; PW += 2) PW < OW.length && OW[PW] <= NW + 1024 ? NW = Math.max(NW, OW[PW + 1]) : (bW(mW, iW, this.data, EW, NW), PW < OW.length && (EW = OW[PW], NW = OW[PW + 1]));
+         jW(mW)
+       }
+       restore() {
+         this.runs.length = 0, this.buffer.restore()
+       }
+       dispose() {
+         this.buffer.dispose()
+       }
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L1548-L1559` → after: `L1376-L1391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1376-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L1376-L1391) · [Before (L1548-L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L1548-L1559)

```diff
-     const VG = {
-         toastAndTray: {
-           label: "notificationSettings:friendRequestsAll",
-           info: "notificationSettings:friendRequestsAllInfo"
-         },
-         trayOnly: {
-           label: "notificationSettings:friendRequestsQuiet",
-           info: "notificationSettings:friendRequestsQuietInfo"
-         },
-         off: {
-           label: "notificationSettings:friendRequestsOff",
-           info: "notificationSettings:friendRequestsOffInfo"
+     const SW = "matrix";
+     class YW {
+       constructor(WW, iW, OW, mW, EW, NW) {
+         let PW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
+         this.callbacks = iW, this.initialCapacity = OW, this.capacityIsConst = mW, this.strides = EW, this.flushQueue = NW, this.nextId = 0, this.pickable = void 0, this.arena = void 0, this.idToMetadata = {}, this.meshVariations = {}, this.bounds = void 0, this.tempBuffers = {}, … [truncated]
+         const LW = WW.KV(),
+           cW = YW.tempVector.set(Math.abs(LW.minimum.x), Math.abs(LW.minimum.y), Math.abs(LW.minimum.z));
+         if (cW.maximizeInPlaceFromFloats(Math.abs(LW.maximum.x), Math.abs(LW.maximum.y), Math.abs(LW.maximum.z)), this.bounds = {
+             sphere: {
+               radius: cW.length()
+             }
+           }, WW.pA = !0, WW.Fb = !1, WW.OOW = !0, WW.XA = !0, WW.WK(!1), this.setPickable(!1), OW < 1 || !Number.isInteger(OW)) throw new Error(`Capacity must be a positive integer, not ${OW}`);
+         for (const wW in this.strides) {
+           const WW = this.strides[wW];
+           if (WW < 1 || WW > 16 || !Number.isInteger(WW)) throw new Error(`Invalid stride for ${wW}, expected a positive integer <= 16, not ${WW}`);
+           this.tempBuffers[wW] = new Float32Array(WW)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L1561-L1569` → after: `L1393-L1411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1393-L1411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L1393-L1411) · [Before (L1561-L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L1561-L1569)

```diff
-       },
-       SG = {
-         remindersOn: {
-           label: "dailyDrop:settingReminders",
-           reportAs: "reminders"
-         },
-         hidden: {
-           label: "dailyDrop:settingHide",
-           reportAs: "hidden"
+         this.meshVariations[YW.DEFAULT_MESH_VARIATION_NAME] = new yW(WW, OW, mW, this.strides, NW, this.arena)
+       }
+       instantiate(WW) {
+         const iW = this.nextId++,
+           OW = this.meshVariations[YW.DEFAULT_MESH_VARIATION_NAME];
+         return OW.registerThinInstance(iW), this.idToMetadata[iW] = {
+           objectId: WW,
+           meshVariation: OW
+         }, iW
+       }
+       delete() {
+         for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
+         for (const mW of iW) {
+           const WW = this.idToMetadata[mW];
+           if (void 0 === WW) throw new Error(`ThinInstanceMesh.remove: ${mW} not found`);
+           const {
+ ... (3 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L1571-L1609` → after: `L1413-L1417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1413-L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L1413-L1417) · [Before (L1571-L1609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L1571-L1609)

```diff
-       };
- 
-     function nG(BB) {
-       let {
-         setting: OB,
-         value: GB
-       } = BB;
-       const {
-         t: DB
-       } = (0, oB.H)(), jB = (0, MG.c)(), [yB, JB] = (0, YB.useState)(null), [MB, zB] = (0, YB.useState)(!1), [lB, pB] = (0, YB.useState)(null);
-       return (0, YB.useEffect)((() => {
-         "remindersOn" === OB && (0, JG.c)().then((BB => {
-           jB.current && pB((() => BB))
-         }), (BB => {
-           console.error("Couldn't tell whether this device can take push notifications:", BB)
-         }))
- ... (23 more removed lines; see GitHub link above)
+       }
+       clear() {
+         this.nextId = 0;
+         for (const WW in this.meshVariations) {
+           this.meshVariations[WW].clear()
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L1611` → after: `L1419-L1522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1419-L1522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L1419-L1522) · [Before (L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L1611)

```diff
-       })
+         for (const WW in this.idToMetadata) delete this.idToMetadata[WW]
+       }
+       has(WW) {
+         return void 0 !== this.idToMetadata[WW]
+       }
+       count() {
+         let WW = 0;
+         for (const iW in this.meshVariations) {
+           WW += this.meshVariations[iW].numRegisteredThinInstances()
+         }
+         return WW
+       }
+       WK(WW, iW) {
+         if ("boolean" !== typeof iW) throw new Error(`ThinInstanceMesh.setEnabled: ${WW} given ${iW}, not a boolean`);
+         const OW = this.idToMetadata[WW];
+         if (void 0 === OW) throw new Error(`ThinInstanceMesh.setEnabled: ${WW} not found`);
+ ... (88 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L1613-L1670` → after: `L1524-L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1524-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L1524-L1759) · [Before (L1613-L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L1613-L1670)

```diff
-     const UG = (0, YB.memo)((function() {
-       const {
-         t: BB
-       } = (0, oB.H)(), {
-         clientEscMenuOptions: OB
-       } = (0, UB.o)(["clientEscMenuOptions"]), {
-         userContext: GB
-       } = (0, pB.d)(), YB = GB.dailyDrop;
-       return (0, PB.jsxs)("div", {
-         className: "SettingsMenuRightInner",
-         children: [NB.featureFlags.useSocialFeatures && (0, PB.jsx)(nB.d, {
-           label: BB("notificationSettings:friendRequests"),
-           options: oG.d.map((OB => ({
-             value: OB,
-             label: BB(VG[OB].label)
-           }))),
- ... (42 more removed lines; see GitHub link above)
+     YW.DEFAULT_MESH_VARIATION_NAME = "__DEFAULT__", YW.tempVector = new EW.fA;
+     class yW {
+       constructor(WW, iW, OW, mW, EW, NW) {
+         var PW, LW, wW;
+         this.mesh = WW, this.capacityIsConst = OW, this.strides = mW, this.flushQueue = EW, this.arena = NW, this.isEnabled = !1, this.batch = void 0, this.baseOffsets = {}, this.interleavedBuffer = null, this.v_ = void 0, this.matrixSlot = null, this.interleavedSlot = null, this … [truncated]
+         const tW = this.mesh.VA();
+         this.v_ = null !== (PW = null === (LW = (wW = tW).p_) || void 0 === LW ? void 0 : LW.call(wW, this.mesh, this.batch.kinds)) && void 0 !== PW ? PW : null;
+         const ZW = this.v_ ? null : tW,
+           xW = null === ZW || void 0 === ZW ? void 0 : ZW.DA.add((() => {
+             this.markAllForUpload()
+           }));
+         this.mesh.jD.addOnce((() => {
+           var WW, iW;
+           null === ZW || void 0 === ZW || ZW.DA.remove(null !== xW && void 0 !== xW ? xW : null), this.releaseSlots(), null === (WW = this.interleavedBuffer) || void 0 === WW || WW.dispose(), null === (iW = this.v_) || void 0 === iW || iW.release(), (0, cW.l)(this.batch)
+         })), this.baseOffsets[SW] = 0;
+         for (const {
+ ... (220 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L1673-L1676` → after: `L1762-L1763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1762-L1763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L1762-L1763) · [Before (L1673-L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L1673-L1676)

```diff
-     function XG(BB) {
-       if (!(0, IG.Q)(UB.c.get("clientEscMenuOptions")[BB])) return UB.c.get("clientEscMenuOptions")[BB];
-       const OB = rG(BB);
-       return null !== OB ? OB[gG.get(BB)] : ZG.g.getItem(BB)
+     function TW(WW, iW, OW) {
+       if (OW !== iW) throw new Error(`Value length ${OW} does not match stride ${iW} for kind ${WW}`)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L1678-L1688` → after: `L1765-L1833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1765-L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L1765-L1833) · [Before (L1678-L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L1678-L1688)

```diff
- 
-     function wG(BB, OB) {
-       if ("useTouchControls" === BB) return void(0, LG.d)(OB);
-       BB in UB.c.get("clientEscMenuOptions") && UB.c.setClientEscMenuOptions({
-         [BB]: OB
-       });
-       const GB = rG(BB);
-       null !== GB && RB.gameBridge.send("setChunkAddDistance", {
-         ...GB,
-         [gG.get(BB)]: OB
-       }), ZG.g.setItem(BB, OB)
+     var JW = OW(38678);
+     class hW {
+       constructor() {
+         this.count = 0, this.spheres = new Float64Array(256), this.ids = new Int32Array(64), this.flags = new Uint8Array(64), this.planes = new Float64Array(24), this.changed = []
+       }
+       add(WW) {
+         this.count === this.ids.length && this.grow();
+         const iW = this.count++;
+         return this.ids[iW] = WW, this.flags[iW] = 0, this.spheres.fill(0, 4 * iW, 4 * iW + 4), iW
+       }
+       remove(WW) {
+         const iW = --this.count;
+         return WW === iW ? -1 : (this.ids[WW] = this.ids[iW], this.flags[WW] = this.flags[iW], this.spheres.copyWithin(4 * WW, 4 * iW, 4 * iW + 4), this.ids[WW])
+       }
+       clear() {
+         this.count = 0
+ ... (53 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L1690-L1711` → after: `L1835-L1854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1835-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L1835-L1854) · [Before (L1690-L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L1690-L1711)

```diff
-     var EG = GB(4851),
-       cG = GB(34722),
-       hG = GB(34725),
-       aG = GB(4912),
-       eG = GB(34746);
- 
-     function TG(BB) {
-       var OB, DB, jB, yB;
-       let {
-         minChunkAddDist: JB,
-         getValue: MB,
-         onChange: zB,
-         setApplySettingsCallback: lB
-       } = BB;
-       const {
-         t: pB
- ... (6 more removed lines; see GitHub link above)
+     var HW = OW(38364),
+       nW = OW(38241);
+     let uW = 0,
+       oW = new Uint32Array(64),
+       dW = new Uint32Array(64),
+       eW = new Float64Array(64);
+     class vW {
+       constructor(WW, iW) {
+         this.rb = WW, this.callbacks = iW, this.nextObjectId = 0, this.nextThinMeshIndex = 0, this.types = {}, this.groups = {}, this.namedNodes = {}, this.nodeNames = {}, this.thinMeshes = [], this.flushQueue = new ZW, this.arena = void 0, this.arenaEnabledSeen = !0, this.object … [truncated]
+           this.updateDirtyNodes(), this.cullObjects(), this.flushBuffersToGpu(), this.recordSceneStats()
+         }))
+       }
+       newObjectType(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
+           aZ: 32,
+           capacityIsConst: !1,
+ ... (4 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L1713-L1735` → after: `L1856-L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1856-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L1856-L1964) · [Before (L1713-L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L1713-L1735)

```diff
-         return BB(), (0, hG.A)(BB)
-       }), []), (0, jG.f)("appManagerUpdated|clientEscMenuOptions", (() => {
-         iB((0, hG.s)())
-       }));
-       const [LB] = (0, YB.useState)((() => !0 === ZG.g.getItem(mO.nc))), [gB] = (0, YB.useState)((() => UB.c.isWebGpuOnStored()));
-       (0, YB.useEffect)((() => {
-         let BB = !1;
-         return (0, NB.hasUsableWebGpuAdapter)().then((async OB => {
-           const GB = LB || gB,
-             YB = !OB && iG.D && await (0, eG.e)(GB);
-           BB || (SB(OB || YB), dB(YB))
-         })), (0, uG.n)(NB.featureFlags.settings.canUseShaderPacks) && (0, KG.e)().then((async OB => {
-           const YB = null !== OB && await async function(BB) {
-             const [{
-               isShaderPackActive: OB
-             }, {
- ... (7 more removed lines; see GitHub link above)
+         const mW = [],
+           EW = {},
+           NW = OW.armourStrides ? [] : null,
+           PW = OW.armourStrides ? [] : null,
+           LW = OW.armourStrides ? [] : null,
+           cW = OW.armourStrides ? [] : null,
+           wW = OW.armourStrides ? [] : null,
+           tW = (WW, iW, ZW) => {
+             const xW = mW.length,
+               lW = WW.getClassName(),
+               AW = "Mesh" === lW || "LiteMesh" === lW ? WW : null,
+               bW = WW.getChildren(),
+               jW = bW.length,
+               UW = WW.position.clone(),
+               kW = WW.rotation.clone(),
+               sW = WW.rotationQuaternion,
+ ... (93 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L1737-L1884` → after: `L1966-L2301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1966-L2301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L1966-L2301) · [Before (L1737-L1884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L1737-L1884)

```diff
-       }), [LB, gB]);
-       const rB = (!(KB && !LB) || !kB) && VB,
-         XB = function(BB, OB, GB, YB, DB) {
-           return (0, mG.b)(GB, YB) && !0 === OB ? {
-             translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
-             checked: !0,
-             disabled: !0
-           } : {
-             translationKey: !1 !== OB ? "settingsMenu:newWebGpu" : DB ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
-             checked: BB && !1 !== OB,
-             disabled: !0 !== OB
-           }
-         }(ZB.useWebGpu, rB, KB, mB, IB),
-         wB = (ZB.useWebGpu || (0, mG.b)(KB, mB)) && KB && !0 === rB,
-         EB = (0, qB.g)("lightingOverride"),
-         cB = !(0, IG.Q)(EB);
- ... (132 more removed lines; see GitHub link above)
+         if (null !== WW) throw WW
+       }
+       clear() {
+         this.nextObjectId = 0, this.nextThinMeshIndex = 0;
+         for (const WW in this.groups) delete this.groups[WW];
+         for (const WW of this.thinMeshes) WW.clear();
+         this.thinMeshes.length = 0, this.flushQueue.clear();
+         for (const WW in this.objectData) {
+           const iW = this.objectData[WW],
+             OW = this.types[iW.type].typeNodes;
+           for (let WW = 0; WW < OW.length; WW++) this.disposeAllTransformNodesInternal(iW.nodes[WW]);
+           delete this.objectData[WW]
+         }
+         for (const WW in this.types) delete this.types[WW];
+         this.dirtyCount = 0, this.deferredObjectIds.clear(), this.reachQueue.clear(), this.cullSpheres.clear()
+       }
+ ... (320 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L1886-L1946` → after: `L2303-L2492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR2303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L2303-L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L2303-L2492) · [Before (L1886-L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L1886-L1946)

```diff
-         }), (0, PB.jsx)(nB.c, {
-           label: pB("settingsMenu:disableViewBobbing"),
-           checked: ZB.disableBobbing,
-           onClick: BB => {
-             UB.c.setClientEscMenuOptions({
-               disableBobbing: BB
-             })
-           },
-           circleInfoText: pB("settingsMenu:disableViewBobbingInfo")
-         }), (0, PB.jsx)(nB.c, {
-           label: pB("settingsMenu:antiAliasing"),
-           checked: ZB.antiAliasing,
-           onClick: BB => {
-             aB({
-               antiAliasing: BB
-             }), (0, EG.i)("antiAliasing"), UB.c.setClientEscMenuOptions({
- ... (45 more removed lines; see GitHub link above)
+         this.setForAttachedTransformNodes(mW, iW, OW)
+       }
+       setForAttachedTransformNodes(WW, iW, OW, mW, EW, NW) {
+         for (const PW of WW.nodes)
+           for (const WW of PW.attachedTransformNodes)
+             for (const PW of WW.getChildMeshes(!1)) {
+               const WW = PW.bV,
+                 LW = null === WW || void 0 === WW ? void 0 : WW[iW];
+               void 0 !== LW && ("number" === typeof LW ? WW[iW] = "number" === typeof OW ? OW : OW[0] : "number" !== typeof OW ? LW.yWW(OW[0], OW[1], OW[2], OW[3]) : LW.yWW(OW, null !== mW && void 0 !== mW ? mW : 0, null !== EW && void 0 !== EW ? EW : 0, null !== NW && void 0 !== … [truncated]
+             }
+       }
+       setDirty(WW, iW) {
+         const OW = this.getObjectData(WW);
+         this.getObjectNode(OW, iW);
+         this.setDirtyInternal(WW, OW, iW)
+       }
+ ... (174 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L1948-L2014` → after: `L2494-L2543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR2494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L2494-L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L2494-L2543) · [Before (L1948-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L1948-L2014)

```diff
-           circleInfoText: pB("settingsMenu:newWebGpuInfo"),
-           disabled: XB.disabled
-         })]
-       })
-     }
-     var bG = GB(4848),
-       CG = GB(9529),
-       HG = GB(34755),
-       vG = GB(9540),
-       sG = GB(34757);
-     const xG = {
-         color: 16777215,
-         name: "white"
-       },
-       tG = {
-         color: 0,
- ... (51 more removed lines; see GitHub link above)
+           eId: NW
+         }
+       }
+       defineType(WW, iW, OW, mW, EW, NW, PW, LW) {
+         if (!WW) throw new Error(`Falsy type name: ${WW}`);
+         if (this.hasType(WW)) throw new Error(`Type ${WW} already defined`);
+         this.validateTypeMeshes(WW, iW);
+         let cW = 0;
+         for (const wW of iW) {
+           const WW = wW.thinMeshIndex;
+           if (null === WW) continue;
+           const iW = this.thinMeshes[WW],
+             OW = vW.TEMP_SPHERE_SCALE,
+             mW = vW.TEMP_SPHERE_OFFSET;
+           wW.worldMatrix.decompose(OW, void 0, mW);
+           const EW = Math.max(Math.abs(OW.x), Math.abs(OW.y), Math.abs(OW.z)),
+ ... (34 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2016-L2047` → after: `L2545-L2557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR2545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L2545-L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L2545-L2557) · [Before (L2016-L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2016-L2047)

```diff
-             return (0, PB.jsx)("button", {
-               type: "button",
-               role: "radio",
-               "aria-checked": OB === GB,
-               "aria-label": jB(`crosshairSettings:color_${YB}`),
-               "data-pad-focusable": !0,
-               className: QB()("CrosshairSwatch", {
-                 Selected: OB === GB
-               }),
-               style: {
-                 background: (0, sG.l)(OB)
-               },
-               onClick: () => {
-                 DB(OB)
-               }
-             }, OB)
- ... (16 more removed lines; see GitHub link above)
+           if (null !== PW) {
+             if (null !== NW.thinMeshIndex && !this.thinMeshes[NW.thinMeshIndex]) throw new Error(`Node ${EW} of type ${WW} has invalid mesh index ${NW.thinMeshIndex}`);
+             if (EW === PW) throw new Error(`Node ${EW} of type ${WW} cannot be its own parent`);
+             if (EW < PW) throw new Error(`Node ${EW} of type ${WW} is defined before parent ${PW}`);
+             if (PW < 0 || !Number.isInteger(PW)) throw new Error(`Node ${EW} of type ${WW} has invalid parent index ${PW}`);
+             if (null === (mW = iW[PW].children) || void 0 === mW || !mW.includes(EW)) throw new Error(`Node ${EW} of type ${WW} is not listed as a child of parent ${PW}`);
+             if (null !== NW.children) {
+               if (0 === NW.children.length) throw new Error(`Node ${EW} of type ${WW} has a zero-length array at index ${EW} - use null instead`);
+               for (let OW = 0; OW < NW.children.length; OW++) {
+                 const mW = NW.children[OW];
+                 if (mW < 0 || !Number.isInteger(mW) || mW >= iW.length) throw new Error(`Node ${EW} of type ${WW} has invalid child ${mW}`);
+                 const PW = NW.children[OW - 1];
+                 if (OW > 0 && mW <= PW) throw new Error(`Node ${EW} of type ${WW} has children out of order:\n${OW-1}: ${PW}\n${OW}: ${mW}`)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2049-L2065` → after: `L2559-L2599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR2559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L2559-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L2559-L2599) · [Before (L2049-L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2049-L2065)

```diff
-             })
-           })]
-         })]
-       })
-     }
- 
-     function QY(BB) {
-       let {
-         settings: OB,
-         onChange: GB
-       } = BB;
-       const {
-         t: YB
-       } = (0, oB.H)(), DB = (BB, YB) => {
-         GB((0, sG.w)(OB, BB, YB))
-       }, QB = function(BB, GB) {
- ... (1 more removed lines; see GitHub link above)
+             }
+           } else OW++
+         }
+         if (1 !== OW) throw new Error(`Type ${WW} has ${OW} root nodes, expected 1`)
+       }
+       updateChildEnabled(WW, iW, OW, mW) {
+         const EW = this.getObjectNode(OW, iW),
+           NW = EW.enabled && mW;
+         if (EW.mmW === NW) return;
+         EW.mmW = NW, 0 === iW && this.updateCullActive(OW), NW && EW.worldStale && this.setDirtyInternal(WW, OW, iW);
+         const PW = this.types[OW.type].typeNodes[iW];
+         if (OW.visible && !OW.cull && (null !== EW.thinInstanceId && this.thinMeshes[PW.thinMeshIndex].WK(EW.thinInstanceId, NW), this.updateAttachmentsEnabled(EW, NW)), PW.children)
+           for (let LW of PW.children) this.updateChildEnabled(WW, LW, OW, NW)
+       }
+       cullObjects() {
+         if (0 !== this.dirtyCount) throw new Error("cullObjects called with dirty matrices - updateDirtyNodes must run first");
+ ... (25 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2067-L2079` → after: `L2601-L2668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L2601-L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L2601-L2668) · [Before (L2067-L2079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2067-L2079)

```diff
-           min: QB,
-           max: oB,
-           step: jB
-         } = sG.c[BB];
-         return (0, PB.jsx)(nB.f, {
-           name: GB,
-           min: QB,
-           max: oB,
-           step: jB,
-           initValue: OB[BB],
-           format: YB,
-           onChange: OB => {
-             DB(BB, OB)
+           x: EW,
+           y: NW,
+           z: PW
+         } = mW, LW = iW.boundingSphereRad * function(WW, iW, OW, mW) {
+           return Math.max(0 !== mW.x ? Math.abs(WW / mW.x) : 1, 0 !== mW.y ? Math.abs(iW / mW.y) : 1, 0 !== mW.z ? Math.abs(OW / mW.z) : 1)
+         }(EW, NW, PW, iW.typeNodes[0].scale) * WW.nodeScaleGrowth;
+         return Math.max(LW, WW.attachmentReach * Math.max(Math.abs(EW), Math.abs(NW), Math.abs(PW)))
+       }
+       isDeferrable(WW) {
+         return WW.cull && null === WW.parentThinObjectId && this.types[WW.type].cullable
+       }
+       catchUp(WW, iW) {
+         const OW = iW.parentThinObjectId;
+         if (null === OW) {
+           if (iW.cull && (this.notifyCatchUpCulled(WW, iW), this.objectData[WW] !== iW)) return !1;
+           this.deferredObjectIds.delete(WW)
+ ... (52 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2081-L2128` → after: `L2670-L2675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR2670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L2670-L2675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L2670-L2675) · [Before (L2081-L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2081-L2128)

```diff
-         }, BB)
-       }, jB = ["lines", "dot", "circle"].filter((BB => OB[BB])), yB = (BB, GB, YB) => (0, PB.jsx)(nB.c, {
-         label: GB,
-         checked: OB[BB],
-         disabled: 1 === jB.length && jB[0] === BB,
-         circleInfoText: YB,
-         onClick: OB => {
-           DB(BB, OB)
-         }
-       }, BB), JB = "shapes" === OB.style;
-       return (0, PB.jsxs)(PB.Fragment, {
-         children: [(0, PB.jsx)(nB.d, {
-           label: YB("crosshairSettings:style"),
-           options: [{
-             value: "classic",
-             label: YB("crosshairSettings:styleClassic")
- ... (32 more removed lines; see GitHub link above)
+           for (let mW = 0; mW < OW; mW++) {
+             const iW = WW[mW],
+               OW = this.objectData[iW];
+             if (this.isDeferrable(OW)) {
+               this.deferredObjectIds.add(iW);
+               continue
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2130-L2170` → after: `L2677-L2685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR2677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L2677-L2685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L2677-L2685) · [Before (L2130-L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2130-L2170)

```diff
-           })]
-         }), yB("growOnClick", YB("crosshairSettings:growOnClick")), JB && yB("forGuns", YB("crosshairSettings:forGuns"), YB("crosshairSettings:forGunsInfo"))]
-       })
-     }
-     var oY = GB(70),
-       jY = GB(1268),
-       yY = GB(13542),
-       JY = GB(14703),
-       MY = GB(16057),
-       PY = GB(16603);
-     const zY = ["sky", "grass", "stone", "sand", "snow", "night"],
-       lY = "4rem";
- 
-     function pY(BB) {
-       return {
-         backgroundImage: `url(${BB})`,
- ... (25 more removed lines; see GitHub link above)
+             const EW = OW.parentThinObjectId;
+             if (null !== EW && this.objectData[EW].inDirtyBatch && (!OW.nodes[0].mmW || !this.isDeferrable(this.objectData[EW]))) {
+               let {
+                 parentNodeIndex: WW
+               } = OW;
+               if (!OW.dirtyQueued) {
+                 const iW = this.objectData[EW],
+                   OW = this.types[iW.type].typeNodes;
+                 for (; null !== WW && !iW.nodes[WW].dirtyQueued;) WW = OW[WW].parent
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2173-L2174` → after: `L2691-L3010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR2691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L2691-L3010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L2691-L3010) · [Before (L2173-L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2173-L2174)

```diff
-         })(),
-         backgroundPosition: "center"
+           for (let mW = 0; mW < OW; mW++) this.objectData[WW[mW]].inDirtyBatch = !1
+         }
+         this.updateQueuedReach()
+       }
+       updateQueuedReach() {
+         if (this.reachQueue.size > 0) {
+           for (const WW of this.reachQueue) this.updateAttachmentReach(WW);
+           this.reachQueue.clear()
+         }
+       }
+       queueDirtyObject(WW, iW) {
+         iW.dirtyQueued || (iW.dirtyQueued = !0, this.dirtyList[this.dirtyCount++] = WW)
+       }
+       updateObjectNodes(WW, iW) {
+         const OW = WW.nodes,
+           mW = OW.length;
+ ... (304 more added lines; see GitHub link above)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2178-L2279` → after: `L3014-L3068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3014-L3068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3014-L3068) · [Before (L2178-L2279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2178-L2279)

```diff
-     function ZY(BB) {
-       return Object.freeze({
-         ...sG.d,
-         style: "shapes",
-         outline: 1,
-         lines: !1,
-         ...BB
-       })
-     }
-     const NY = [{
-         id: "default",
-         settings: sG.d
-       }, {
-         id: "cross",
-         settings: ZY({
-           color: 5046092,
- ... (86 more removed lines; see GitHub link above)
+     function gW(WW, iW, OW, mW) {
+       const EW = 0 !== mW.x ? WW / mW.x : 1,
+         NW = 0 !== mW.y ? iW / mW.y : 1,
+         PW = 0 !== mW.z ? OW / mW.z : 1;
+       return Math.max(Math.abs(EW), Math.abs(NW), Math.abs(PW)) + Math.max(Math.abs(1 - EW), Math.abs(1 - NW), Math.abs(1 - PW))
+     }
+ 
+     function DW(WW, iW) {
+       let OW = Math.hypot(WW[0], WW[1], WW[2]),
+         mW = Math.hypot(WW[4], WW[5], WW[6]),
+         EW = Math.hypot(WW[8], WW[9], WW[10]);
+       const NW = WW[0] * WW[4] + WW[1] * WW[5] + WW[2] * WW[6],
+         PW = WW[0] * WW[8] + WW[1] * WW[9] + WW[2] * WW[10],
+         LW = WW[4] * WW[8] + WW[5] * WW[9] + WW[6] * WW[10],
+         cW = 1e-6 * (OW * OW + mW * mW + EW * EW);
+       (Math.abs(NW) > cW || Math.abs(PW) > cW || Math.abs(LW) > cW) && (OW = mW = EW = Math.sqrt(OW * OW + mW * mW + EW * EW)), iW.set(OW, mW, EW)
+ ... (39 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2283-L2311` → after: `L3233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3233) · [Before (L2283-L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2283-L2311)

```diff
-       let {
-         backdrop: OB,
-         onChange: GB,
-         game: YB
-       } = BB;
-       const {
-         t: DB
-       } = (0, oB.H)();
-       return (0, PB.jsxs)("div", {
-         className: "CrosshairBackdrops",
-         role: "radiogroup",
-         "aria-label": DB("crosshairSettings:background"),
-         children: [YB && (0, PB.jsx)(AY, {
-           label: DB("crosshairSettings:bg_game"),
-           selected: YB.selected,
-           onClick: YB.onSelect,
- ... (13 more removed lines; see GitHub link above)
+       return !!(WW.parent || WW.OOW || WW.infiniteDistance || "__root__" === WW.name)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2315-L2364` → after: `L3237-L3244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3237-L3244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3237-L3244) · [Before (L2315-L2364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2315-L2364)

```diff
-       let {
-         settings: OB,
-         touch: GB,
-         backdrop: YB,
-         onChange: DB
-       } = BB;
-       const {
-         t: jB
-       } = (0, oB.H)(), yB = function(BB) {
-         var OB;
-         return null !== (OB = NY.find((OB => (0, sG.v)(OB.settings, BB, RY)))) && void 0 !== OB ? OB : null
-       }(OB);
-       return (0, PB.jsx)("div", {
-         className: "CrosshairPresets",
-         role: "radiogroup",
-         "aria-label": jB("crosshairSettings:presets"),
- ... (34 more removed lines; see GitHub link above)
+       (0, BW.k)(WW), WW.fEW.vEW(WW);
+       var iW = WW.Hx.camera.mF(),
+         OW = WW.Hx.Wl,
+         mW = Math.floor(iW[0] + OW[0]),
+         EW = Math.floor(iW[1] + OW[1]),
+         NW = Math.floor(iW[2] + OW[2]),
+         PW = WW.Hx.Yk(mW, EW, NW);
+       li(WW, PW)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2369-L2402` → after: `L3248-L3257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3248-L3257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3248-L3257) · [Before (L2369-L2402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2369-L2402)

```diff
-       const [GB, DB] = (0, YB.useState)(!1), QB = () => {
-         DB(!1)
-       }, [oB, jB] = (0, YB.useState)(!1), yB = (0, YB.useRef)({
-         growOnClick: BB.growOnClick,
-         forGuns: BB.forGuns
-       });
-       (0, YB.useEffect)((() => {
-         const OB = yB.current;
-         yB.current = {
-           growOnClick: BB.growOnClick,
-           forGuns: BB.forGuns
-         }, (BB.growOnClick && !OB.growOnClick || BB.forGuns && !OB.forGuns) && jB(!0)
-       }), [BB.growOnClick, BB.forGuns]), (0, YB.useEffect)((() => {
-         if (!oB) return;
-         const BB = setTimeout((() => {
-           jB(!1)
- ... (18 more removed lines; see GitHub link above)
+       var OW = WW.Hx.gM.cameraTint;
+       OW && Array.isArray(OW) && OW.length >= 4 ? WW.ycW = !0 : WW.ycW && (WW.ycW = !1, WW.YcW = -1);
+       const mW = iW !== WW.YcW;
+       if (!WW.ycW && mW && 0 !== iW) {
+         const mW = WW.Hx.ZZ.S_(iW, 0);
+         if (mW) {
+           const iW = WW.Hx.ZZ.Mb(mW),
+             EW = iW.color,
+             NW = iW.alpha;
+           EW && NW && NW < 1 && (OW = [EW[0], EW[1], EW[2], NW])
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2405` → after: `L3260-L3336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3260-L3336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3260-L3336) · [Before (L2405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2405)

```diff
-     }
+       WW.YcW = iW, (mW || WW.ycW) && (OW ? (! function(WW, iW) {
+         const {
+           emissiveColor: OW,
+           alpha: mW
+         } = (0, pW.bb)(WW);
+         iW[0] === OW[0] && iW[1] === OW[1] && iW[2] === OW[2] && iW[3] === mW || ((0, fW.ab)(WW, {
+           emissiveColor: [iW[0], iW[1], iW[2]],
+           alpha: iW[3]
+         }), WW.markDirty(!0))
+       }(WW.xcW, OW), WW.ZcW.WK(!0)) : WW.ZcW.WK(!1))
+     }
+     Ei.prototype.NWW = function(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       if (WW.metadata || (WW.metadata = {}), WW.metadata[Oi]) {
+         var OW = this.Lb?.Y5;
+         iW ? OW?.add(WW) : OW?.remove(WW)
+ ... (61 more added lines; see GitHub link above)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2407-L2432` → after: `L3338-L3357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3338-L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3338-L3357) · [Before (L2407-L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2407-L2432)

```diff
-     function fY(BB) {
-       let {
-         settings: OB,
-         touch: GB,
-         backdrop: YB,
-         className: DB,
-         children: oB,
-         label: jB
-       } = BB;
-       const yB = UY(OB, ".CrosshairStageControls");
-       return (0, PB.jsxs)("div", {
-         className: QB()("CrosshairStage", DB),
-         style: qY(YB),
-         ...yB.handlers,
-         children: [(0, PB.jsx)("div", {
-           className: "CrosshairStageHold",
- ... (10 more removed lines; see GitHub link above)
+       function lW(WW, iW) {
+         console.warn(WW.name + " --- " + iW)
+       }
+ 
+       function AW(WW, iW, OW) {
+         return !!WW && (!iW.includes(WW) && (!OW || !OW.includes(WW)))
+       }
+     }, Ei.prototype.dcW = function() {
+       var WW = {};
+       for (var iW in this.rb.meshes.forEach((iW => {
+           var OW = iW.name || "";
+           OW = (OW = (OW = (OW = OW.replace(/-\d+.*/, "#")).replace(/\d+.*/, "#")).replace(/(rotHolder|camHolder|camScreen)/, "rendering use")).replace(/atlas sprite .*/, "atlas sprites"), WW[OW] = WW[OW] || 0, WW[OW]++
+         })), WW) console.log("   " + (WW[iW] + "       ").substr(0, 7) + iW)
+     };
+     var Ai = () => {};
+     var bi = function() {}
+ ... (4 more added lines; see GitHub link above)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2437-L2470` → after: `L3361-L3421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3361-L3421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3361-L3421) · [Before (L2437-L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2437-L2470)

```diff
-       let {
-         settings: OB,
-         touch: GB,
-         backdrop: DB,
-         onBackdrop: yB,
-         inGame: MB,
-         onChange: zB,
-         onClose: lB
-       } = BB;
-       const {
-         t: pB
-       } = (0, oB.H)(), qB = (0, YB.useRef)(null);
-       (0, jY.v)("popup", qB, lB),
-       function(BB) {
-         const OB = (0, YB.useRef)(BB);
-         OB.current = BB, (0, YB.useEffect)((() => {
- ... (18 more removed lines; see GitHub link above)
+       const iW = WW[0],
+         OW = WW[1],
+         mW = WW[2],
+         EW = Math.atan2(iW, mW),
+         NW = Math.sqrt(iW * iW + mW * mW);
+       return {
+         PZ: EW,
+         hOW: Math.atan2(-OW, NW)
+       }
+     }
+     OW.d(iW, {
+       d: () => mW,
+       e: () => EW
+     })
+   },
+   39576: (WW, iW, OW) => {
+ ... (45 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2472-L2473` → after: `L3423-L3430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3423-L3430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3423-L3430) · [Before (L2472-L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2472-L2473)

```diff
-         return window.addEventListener("keydown", BB, !0), () => {
-           window.removeEventListener("keydown", BB, !0)
+         var LW = this.Zj;
+         if (OW.length !== LW.length || !OW.every(((WW, iW) => WW.i === LW[iW].i && WW.j === LW[iW].j && WW.k === LW[iW].k))) {
+           for (var cW of OW) {
+             var wW = lW(LW, cW.i, cW.j, cW.k);
+             wW && (cW.LEW = wW.LEW)
+           }
+           for (var tW of LW) !lW(OW, tW.i, tW.j, tW.k) && this.QcW.length < 16 && this.QcW.push(tW);
+           this.Zj = OW
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2475-L2485` → after: `L3432-L3448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3432-L3448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3432-L3448) · [Before (L2475-L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2475-L2485)

```diff
-       }), []);
-       const NB = UY(OB, ".CrosshairFullScreenPanel"),
-         [RB, WB] = (0, YB.useState)(!0),
-         AB = RB && MB;
-       (0, YB.useEffect)((() => {
-         if (AB) return UB.c.set({
-           crosshairGameView: !0
-         }), () => {
-           UB.c.set({
-             crosshairGameView: !1
-           })
+       }
+       isActive() {
+         return this.Zj.length > 0 || this.QcW.length > 0
+       }
+       EwW(WW, iW, OW) {
+         this.Zj.length > 0 && this.aA.set(WW + "|" + iW + "|" + OW, performance.now() + 5e3)
+       }
+       cEW(WW, iW, OW) {
+         if (0 === this.aA.size) return !1;
+         var mW = WW + "|" + iW + "|" + OW,
+           EW = this.aA.get(mW);
+         return void 0 !== EW && (performance.now() < EW || (this.aA.delete(mW), !1))
+       }
+       CcW(WW) {
+         if (this.rcW) {
+           for (var iW of this.Zj) AW(this.FcW, iW, WW);
+ ... (1 more added lines; see GitHub link above)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2487-L2604` → after: `L3450-L3471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3450-L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3450-L3471) · [Before (L2487-L2604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2487-L2604)

```diff
-       }), [AB]);
-       const [VB, SB] = (0, YB.useState)(!0);
-       return (0, oY.createPortal)((0, PB.jsxs)("div", {
-         ref: qB,
-         className: "CrosshairFullScreen",
-         style: AB ? void 0 : qY(DB),
-         ...NB.handlers,
-         children: [(0, PB.jsx)(WY.c, {
-           settings: OB,
-           touch: GB,
-           inEditor: !0,
-           ...NB.view
-         }), (0, PB.jsxs)("div", {
-           className: QB()("CrosshairFullScreenPanel", {
-             Collapsed: !VB
-           }),
- ... (102 more removed lines; see GitHub link above)
+         for (var OW of this.QcW) AW(this.FcW, OW, WW);
+         this.QcW.length = 0
+       }
+       IcW(WW, iW, OW, mW) {
+         var EW = this.WwW;
+         iW[0] === EW[0] && iW[1] === EW[1] && iW[2] === EW[2] || (EW[0] = iW[0], EW[1] = iW[1], EW[2] = iW[2], this.aA.clear()), !OW && this.Zj.length > 0 && !this.iwW && (console.warn("noa: second loading centres set without a chunkRequestArea, so they load chunks however far aw … [truncated]
+         for (var NW = OW || [1 / 0, 1 / 0], PW = this.GcW, LW = this.acW, cW = 0; cW < 3; cW++) LW.min[cW] = PW.min[cW], LW.max[cW] = PW.max[cW];
+         for (bW(PW, WW, NW, ZW, mW), bW(this.RcW, WW, NW, tW, mW), cW = 0; cW < 3; cW++) PW.min[cW] === LW.min[cW] && PW.max[cW] === LW.max[cW] || (this.rcW = !0)
+       }
+       NZ(WW, iW, OW) {
+         if (!jW(this.GcW, WW, iW, OW)) return !1;
+         for (var mW = this.Zj, EW = 0; EW < mW.length; EW++)
+           if (this.zcW(WW - mW[EW].i, iW - mW[EW].j, OW - mW[EW].k)) return !0;
+         return !1
+       }
+       NwW(WW, iW, OW, mW, EW) {
+ ... (6 more added lines; see GitHub link above)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2609-L2677` → after: `L3474-L3475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3474-L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3474-L3475) · [Before (L2609-L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2609-L2677)

```diff
-     function iY(BB) {
-       let {
-         showing: OB
-       } = BB;
-       const {
-         t: GB
-       } = (0, oB.H)(), {
-         isTouchScreen: DB,
-         gameState: QB,
-         clientEscMenuOptions: yB
-       } = (0, UB.o)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), MB = (0, IY.f)(), [zB, lB] = (0, YB.useState)(FY), pB = BB => {
-         FY = BB, lB(BB)
-       }, [qB, ZB] = (0, YB.useState)(!1);
-       return (0, YB.useEffect)((() => {
-         OB || ZB(!1)
-       }), [OB]), (0, PB.jsxs)("div", {
- ... (53 more removed lines; see GitHub link above)
+     function lW(WW, iW, OW, mW) {
+       return WW.find((WW => WW.i === iW && WW.j === OW && WW.k === mW))
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2706-L2707` → after: `L3478-L3486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3478-L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3478-L3486) · [Before (L2706-L2707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2706-L2707)

```diff
-       function NB() {
-         lB && RB.gameBridge.send("toggleRecording", null)
+     function AW(WW, iW, OW) {
+       for (var mW = 0; mW < WW.length; mW++) OW(iW.i + WW[mW][0], iW.j + WW[mW][1], iW.k + WW[mW][2])
+     }
+ 
+     function bW(WW, iW, OW, mW, EW) {
+       for (var NW = 0; NW < 3; NW++) {
+         var PW = 1 === NW ? 1 : 0,
+           LW = OW[PW] - mW[PW] * EW;
+         WW.min[NW] = Math.ceil((iW[NW] - LW) / EW), WW.max[NW] = Math.floor((iW[NW] + LW) / EW)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2709-L2896` → after: `L3488-L3512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3488-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3488-L3512) · [Before (L2709-L2896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2709-L2896)

```diff
-       return (0, PB.jsxs)("div", {
-         className: "SettingsMenuRightInner ReplayViewerCategory",
-         children: [(0, PB.jsxs)("div", {
-           className: "SettingBox",
-           children: [(0, PB.jsx)("div", {
-             className: "ReplayViewerCategoryRecordingRow",
-             children: OB ? (0, PB.jsxs)(PB.Fragment, {
-               children: [(0, PB.jsxs)(JB.Q, {
-                 className: "ReplayViewerCategoryButton",
-                 onClick: NB,
-                 disabled: !lB,
-                 children: [(0, PB.jsx)("span", {
-                   children: "Stop Recording"
-                 }), (0, PB.jsx)(EY.c, {
-                   noaAction: "recordGame"
-                 })]
- ... (172 more removed lines; see GitHub link above)
+     }
+ 
+     function jW(WW, iW, OW, mW) {
+       return iW >= WW.min[0] && iW <= WW.max[0] && OW >= WW.min[1] && OW <= WW.max[1] && mW >= WW.min[2] && mW <= WW.max[2]
+     }
+ 
+     function UW(WW, iW, OW) {
+       WW.empty();
+       for (var mW = 0; mW <= iW[0]; mW++)
+         for (var EW = 0; EW <= mW; EW++)
+           for (var NW = 0; NW <= iW[1]; NW++) OW(mW, NW, EW) && WW.add(mW, NW, EW)
+     }
+     var kW = {
+       jZ: 32,
+       YM: [2, 2],
+       GJ: [3, 3],
+ ... (9 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2900-L2905` → after: `L3640-L3642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3640-L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3640-L3642) · [Before (L2900-L2905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2900-L2905)

```diff
-     function TY() {
-       return Promise.all([GB.e(89), GB.e(149), GB.e(148), GB.e(144)]).then((() => GB(42069))).then((BB => ({
-         default: BB.ShaderPackCategory
-       })), (BB => (console.error("Failed to load the shader pack settings", BB), {
-         default: bY
-       })))
+     function MW(WW) {
+       var iW = WW.split("|");
+       return [parseInt(iW.shift()), parseInt(iW.shift()), parseInt(iW.shift()), iW.join("|")]
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2908-L2915` → after: `L3674-L3676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3674-L3676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3674-L3676) · [Before (L2908-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2908-L2915)

```diff
-     function bY() {
-       const {
-         t: BB
-       } = (0, oB.H)();
-       return (0, PB.jsx)("div", {
-         className: "SettingsMenuRightInner",
-         children: BB("shaderPack:tabLoadFailed")
-       })
+     function SW(WW, iW, OW, mW) {
+       let [EW, NW, PW, LW, cW, wW] = mW;
+       return WW >= EW && iW >= NW && OW >= PW && WW <= LW && iW <= cW && OW <= wW
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2922-L2923` → after: `L3679-L3686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3679-L3686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3679-L3686) · [Before (L2922-L2923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2922-L2923)

```diff
-     function xY(BB) {
-       return Object.keys(BB).some((BB => BB.startsWith("__reactFiber$")))
+     function YW(WW, iW, OW, mW, EW, NW, PW, LW) {
+       if (!EW && 0 === LW.length) return !1;
+       if (NW.has(mW)) return !1;
+       for (const cW of PW)
+         if (SW(WW, iW, OW, cW)) return !1;
+       for (const cW of LW)
+         if (SW(WW, iW, OW, cW)) return !0;
+       return EW || !1
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2927-L2929` → after: `L3689-L3697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3689-L3697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3689-L3697) · [Before (L2927-L2929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2927-L2929)

```diff
-     function BD(BB) {
-       var OB;
-       return (null !== (OB = BB.textContent) && void 0 !== OB ? OB : "").replace(/\s+/g, " ").trim()
+     function yW(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW) {
+       const ZW = `${WW}|${iW}|${OW}`;
+       if (EW.has(ZW)) return tW;
+       if (NW.has(ZW)) return !tW;
+       for (const xW of cW)
+         if (SW(WW, iW, OW, xW)) return tW;
+       for (const xW of wW)
+         if (SW(WW, iW, OW, xW)) return !tW;
+       return PW.has(mW) ? tW : (LW.has(mW), !tW)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2933-L2941` → after: `L3701-L3806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3701-L3806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3701-L3806) · [Before (L2933-L2941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2933-L2941)

```diff
-       for (const OB of function(BB) {
-           const OB = new Set;
-           for (const GB of BB.querySelectorAll(".MenuSideBarBodyTab, [data-pad-tab]")) OB.add(GB);
-           for (const GB of [BB, ...BB.querySelectorAll(tY)])
-             for (const BB of GB.children) OB.add(BB);
-           return [...OB]
-         }(BB))
-         if (!xY(OB) || !OB.matches(tY) && vY.test(BD(OB))) return OB;
-       return null
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW.Hx.entities.Vk(WW.Hx.Dv);
+       var [OW, mW, EW] = iW;
+       return WW.KmW(Math.floor(OW), Math.floor(mW), Math.floor(EW))
+     }
+     sW.prototype.xiW = function(WW, iW, OW) {
+       return this.Hx.gM.canChange ? yW(WW, iW, OW, this.jR(WW, iW, OW), this.XOW, this.pOW, this.BOW, this.fOW, this.qOW, this.COW, !1) : yW(WW, iW, OW, this.jR(WW, iW, OW), this.pOW, this.XOW, this.fOW, this.BOW, this.COW, this.qOW, !0)
+     }, sW.prototype.hZ = function() {
+       var WW = performance.now(),
+         iW = this.Hx.entities.Vk(this.Hx.Dv),
+         [OW, mW, EW] = TW(this, iW),
+         NW = this.xwW;
+       if ((OW !== NW[0] || mW !== NW[1] || EW !== NW[2]) && (this.emit("playerEnteredChunk", OW, mW, EW), this.xwW = [OW, mW, EW], this.lwW = 0, this.vwW()), this.kwW.size > 0 && function(WW, iW) {
+           var OW = !1;
+           WW.kwW.forEach(((mW, EW) => {
+             iW - mW >= 1e3 && (WW.kwW.delete(EW), OW = !0)
+           })), OW && (WW.lwW = 0)
+ ... (90 more added lines; see GitHub link above)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2945` → after: `L3825-L3843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3825-L3843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3825-L3843) · [Before (L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2945)

```diff
-       return BB.replace(/[^A-Za-z0-9_.-]+/g, "_").replace(/^_+|_+$/g, "")
+       var iW = WW.NOW;
+       if (iW.sZ()) return !0;
+       var OW = WW.POW.count(),
+         mW = WW.cOW.count();
+       if (OW >= WW.BiW) return !0;
+       if (mW >= WW.qiW) return !0;
+       var [EW, NW, PW] = iW.pop();
+       return function(WW, iW, OW, mW) {
+         var EW = WW.UZ,
+           NW = WW.Pb.DwW(),
+           PW = WW.Hx.RWW,
+           LW = [iW, OW, mW, PW].join("|"),
+           cW = iW * EW,
+           wW = OW * EW,
+           tW = mW * EW,
+           ZW = WW.POW.KJ(iW, OW, mW);
+ ... (3 more added lines; see GitHub link above)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2950-L2964` → after: `L3847-L3850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3847-L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3847-L3850) · [Before (L2950-L2964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2950-L2964)

```diff
-       const OB = document.createTreeWalker(BB, NodeFilter.SHOW_TEXT, {
-         acceptNode: BB => {
-           var OB, GB;
-           return YD.has(null !== (OB = null === (GB = BB.parentElement) || void 0 === GB ? void 0 : GB.tagName.toUpperCase()) && void 0 !== OB ? OB : "") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
-         }
-       });
-       for (let QB = OB.nextNode(); null !== QB; QB = OB.nextNode()) {
-         var GB;
-         const BB = (null !== (GB = QB.textContent) && void 0 !== GB ? GB : "").normalize("NFC").replace(/^[^\p{L}]+/u, "");
-         if ("" !== BB) {
-           var YB, DB;
-           return (null !== (YB = null === (DB = BB.match(/^[\p{L}\p{M}\s]*/u)) || void 0 === DB ? void 0 : DB[0]) && void 0 !== YB ? YB : "").split(/\s+/).filter(Boolean).slice(0, 2).join(" ")
-         }
-       }
-       return ""
+       var iW = WW.gb;
+       if (iW.sZ() && (iW = WW.eb), iW.sZ()) return !0;
+       var [OW, mW, EW] = iW.pop();
+       return fW(WW, OW, mW, EW), iW.sZ()
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2968-L2969` → after: `L3854-L3866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3854-L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3854-L3866) · [Before (L2968-L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2968-L2969)

```diff
-       const GB = GD(OB).slice(0, 40) || "blank";
-       return `${(GD(BB.toLowerCase())||"none").slice(0,Math.max(23,HY.X-1-GB.length))}:${GB}`.slice(0, HY.X)
+       var OW = WW.tOW.LZ,
+         mW = OW.length > 0 ? OW[OW.length - 1] : null,
+         EW = mW ? WW.Tb.Jb(mW[0], mW[1], mW[2]) : null;
+       if (WW.Hx.bY.sb(!(EW && EW.Eb))) return !0;
+       var NW = WW.tOW;
+       if (NW.sZ() && (NW = WW.wOW), NW.sZ() && !iW && (NW = WW.cOW), NW.sZ()) return !0;
+       var [PW, LW, cW] = NW.pop();
+       if (!WW.eb.includes(PW, LW, cW)) {
+         var wW = WW.Tb.Jb(PW, LW, cW);
+         wW && function(WW, iW) {
+           gW(WW, iW.i, iW.j, iW.k), iW.XT(), Wi("mesh")
+         }(WW, wW)
+       }
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2976-L2977` → after: `L3869-L3870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3869-L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3869-L3870) · [Before (L2976-L2977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L2976-L2977)

```diff
-     function yD(BB) {
-       return BB ? "general" : "account"
+     function gW(WW, iW, OW, mW) {
+       WW.cOW.remove(iW, OW, mW), WW.wOW.remove(iW, OW, mW), WW.tOW.remove(iW, OW, mW)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3070-L3181` → after: `L3873-L3885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3873-L3885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3873-L3885) · [Before (L3070-L3181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3070-L3181)

```diff
-         function EB() {
-           UB.c.set({
-             openEverythingMenuName: null
-           })
-         }
-         return (0, YB.useEffect)((() => {
-           GB((() => wB))
-         }), [wB, GB]), (0, PB.jsxs)("div", {
-           className: "SettingsMenu Menu",
-           style: OB ? {} : {
-             display: "none"
-           },
-           children: [(0, PB.jsx)("div", {
-             ref: gB,
-             className: "MenuSideBar",
-             children: (0, PB.jsx)("div", {
- ... (96 more removed lines; see GitHub link above)
+     function DW(WW, iW, OW) {
+       if (!iW.Yb && !iW.jy) return !1;
+       if (WW.tOW.includes(iW.i, iW.j, iW.k)) return !1;
+       if (OW) return WW.cOW.remove(iW.i, iW.j, iW.k), WW.wOW.remove(iW.i, iW.j, iW.k), WW.tOW.add(iW.i, iW.j, iW.k), !0;
+       if (WW.cOW.includes(iW.i, iW.j, iW.k)) return !1;
+       if (WW.wOW.includes(iW.i, iW.j, iW.k)) return !1;
+       var mW = 26 === iW.Uy ? WW.wOW : WW.cOW;
+       if (mW.add(iW.i, iW.j, iW.k), WW.AwW++, WW.AwW > 20) {
+         var [EW, NW, PW] = TW(WW);
+         WW.MwW.NwW(mW, aW, EW, NW, PW), WW.AwW = 0
+       }
+       return !0
+     }
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3183-L3230` → after: `L3887-L3888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3887-L3888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3887-L3888) · [Before (L3183-L3230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3183-L3230)

```diff
-     function ND(BB) {
-       var OB, GB, DB;
-       let {
-         show: QB
-       } = BB;
-       const {
-         userContext: oB
-       } = (0, pB.d)(), jB = (0, aB.usePurchasesAllowed)(), yB = (0, YB.useRef)(null);
-       var JB, MB;
-       oB !== KB.NULL_USER_CONTEXT && (null === (OB = yB.current) || void 0 === OB ? void 0 : OB.whamm) !== oB.whamm && (yB.current = {
-         whamm: oB.whamm,
-         mountKey: (null !== (JB = null === (MB = yB.current) || void 0 === MB ? void 0 : MB.mountKey) && void 0 !== JB ? JB : -1) + 1
-       });
-       const [lB, qB] = (0, YB.useState)("characters");
-       if ((0, jG.f)(ZD, qB), !QB) return null;
-       const ZB = null !== (0, zD.h)(Date.now()),
- ... (32 more removed lines; see GitHub link above)
+     function VW(WW, iW) {
+       return WW.Pb.release(iW), !1
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3233-L3240` → after: `L3903-L3919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3903-L3919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3903-L3919) · [Before (L3233-L3240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3233-L3240)

```diff
-     function RD() {
-       const {
-         t: BB
-       } = (0, oB.H)();
-       return (0, PB.jsx)("div", {
-         className: "CharacterCustomisationNoWebGl SmallTextBold",
-         children: BB((0, pD.f)((0, pD.d)()))
-       })
+     function fW(WW, iW, OW, mW) {
+       var EW = WW.Tb.Jb(iW, OW, mW);
+       if (EW) {
+         var NW = EW.El;
+         WW.emit("chunkBeingRemoved", EW.CA, EW.El, EW.Py), WW.Hx.TZ.ucW(EW), EW.dispose(), WW.Pb.release(NW), Wi("dispose"), rW(WW, iW, OW, mW, null)
+       }
+       WW.Tb.MJ(iW, OW, mW), WW.Pj.remove(iW, OW, mW), WW.swW.size > 0 && WW.swW.delete(iW + "|" + OW + "|" + mW), WW.eb.remove(iW, OW, mW), gW(WW, iW, OW, mW),
+         function(WW, iW, OW, mW) {
+           var EW = iW + "|" + mW,
+             NW = WW.JwW.get(EW);
+           if (void 0 === NW) return;
+           if (OW < NW) return;
+           var PW = null;
+           WW.Pj.LZ.forEach((function(WW) {
+             WW[0] === iW && WW[2] === mW && WW[1] !== OW && (null === PW || WW[1] > PW) && (PW = WW[1])
+           })), null !== PW ? WW.JwW.set(EW, PW) : WW.JwW.delete(EW)
+ ... (1 more added lines; see GitHub link above)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3263-L3268` → after: `L3922-L3927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3922-L3927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3922-L3927) · [Before (L3263-L3268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3263-L3268)

```diff
-     function ED(BB) {
-       return BB ? Object.keys(BB).sort(((OB, GB) => {
-         var YB, DB, QB, oB;
-         const jB = (null !== (YB = null === (DB = BB[GB]) || void 0 === DB ? void 0 : DB.sortPriority) && void 0 !== YB ? YB : 0) - (null !== (QB = null === (oB = BB[OB]) || void 0 === oB ? void 0 : oB.sortPriority) && void 0 !== QB ? QB : 0);
-         return 0 !== jB ? jB : OB.localeCompare(GB)
-       })) : []
+     function CW(WW, iW, OW) {
+       return [this.SwW(WW), this.SwW(iW), this.SwW(OW)]
+     }
+ 
+     function XW(WW, iW, OW) {
+       return [this.YwW(WW), this.YwW(iW), this.YwW(OW)]
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3285-L3293` → after: `L3931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3931) · [Before (L3285-L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3285-L3293)

```diff
-       for (const {
-           threshold: OB,
-           suffix: GB
-         }
-         of cD)
-         if (BB >= OB) {
-           const YB = BB / OB;
-           return YB >= 100 ? `${Math.floor(YB)}${GB}` : YB >= 10 ? `${YB.toFixed(1).replace(/\.0$/,"")}${GB}` : `${YB.toFixed(2).replace(/\.?0+$/,"")}${GB}`
-         } return String(BB)
+       return 0 | Math.floor(WW / this.UZ)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3319-L3333` → after: `L3935-L3937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3935-L3937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3935-L3937) · [Before (L3319-L3333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3319-L3333)

```diff
-       let {
-         amount: OB,
-         exact: GB = !1,
-         className: YB
-       } = BB;
-       return (0, PB.jsxs)("span", {
-         className: QB()("SmpGold", YB),
-         children: [(0, PB.jsx)("span", {
-           className: "SmpCoin",
-           children: (0, PB.jsx)(mD.c, {
-             itemName: "Gold Coin",
-             amount: 0
-           })
-         }), GB ? OB.toLocaleString("en-US") : hD(OB)]
-       })
+       var iW = this.UZ,
+         OW = WW % iW | 0;
+       return OW < 0 && (OW += iW), OW
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3337-L3357` → after: `L3941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3941) · [Before (L3337-L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3337-L3357)

```diff
-       let {
-         count: OB = 5,
-         grid: GB = !1
-       } = BB;
-       return (0, PB.jsx)("div", {
-         className: GB ? "SmpCardGrid" : "SmpList",
-         "aria-hidden": "true",
-         children: Array.from({
-           length: OB
-         }, ((BB, OB) => (0, PB.jsxs)("div", {
-           className: QB()(GB ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
-           children: [(0, PB.jsx)("div", {
-             className: QB()("SmpSlot", GB ? "SmpSlot-big" : "SmpSlot-normal")
-           }), (0, PB.jsxs)("div", {
-             className: "SmpRowText",
-             children: [(0, PB.jsx)("b", {}), (0, PB.jsx)("small", {})]
- ... (5 more removed lines; see GitHub link above)
+       return WW >> this.ywW
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3361-L3372` → after: `L3945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3945) · [Before (L3361-L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3361-L3372)

```diff
-       let {
-         title: OB,
-         children: GB
-       } = BB;
-       return (0, PB.jsxs)("div", {
-         className: "SmpEmpty",
-         children: [(0, PB.jsx)("b", {
-           children: OB
-         }), GB && (0, PB.jsx)("small", {
-           children: GB
-         })]
-       })
+       return WW & this.TwW
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3375-L3386` → after: `L3948-L3950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3948-L3950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3948-L3950) · [Before (L3375-L3386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3375-L3386)

```diff
-     function vD(BB) {
-       let {
-         entry: OB
-       } = BB;
-       return (0, PB.jsx)(HD, {
-         title: (0, PB.jsx)(ID.b, {
-           text: OB.item.customTitle
-         }),
-         children: (0, PB.jsx)(ID.b, {
-           text: OB.item.description
-         })
-       })
+     function IW(WW, iW, OW, mW, EW) {
+       let NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       void 0 === OW && ([OW, mW, EW] = TW(WW)), iW.dJ(((WW, iW, NW) => aW(OW - WW, mW - iW, EW - NW)), NW)
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3389-L3394` → after: `L3954-L3965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3954-L3965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3954-L3965) · [Before (L3389-L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3389-L3394)

```diff
-     function sD(BB) {
-       return (0, PB.jsx)(aD.c, {
-         ...BB,
-         className: QB()("SmpChoice", BB.className),
-         reselectable: !0
-       })
+     function rW(WW, iW, OW, mW, EW) {
+       for (var NW = !EW || EW && !EW.YA, PW = -1; PW <= 1; PW++)
+         for (var LW = -1; LW <= 1; LW++)
+           for (var cW = -1; cW <= 1; cW++)
+             if (0 !== (PW | LW | cW)) {
+               var wW = WW.Tb.Jb(iW + PW, OW + LW, mW + cW);
+               if (wW) {
+                 NW && (wW.Yb = !0, wW.Hb = !0, WW.Hx.bY.ib(wW)), EW && !EW.hA.get(PW, LW, cW) && (EW.Uy++, EW.hA.set(PW, LW, cW, wW));
+                 var tW = wW.hA.get(-PW, -LW, -cW);
+                 EW && !tW && (wW.Uy++, wW.hA.set(-PW, -LW, -cW, EW), 26 === wW.Uy && DW(WW, wW)), !EW && tW && (wW.Uy--, wW.hA.set(-PW, -LW, -cW, null))
+               }
+             }
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3397-L3401` → after: `L3968-L3974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3968-L3974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3968-L3974) · [Before (L3397-L3401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3397-L3401)

```diff
-     function xD() {
-       return (0, PB.jsx)("span", {
-         className: "SmpLoader",
-         children: (0, PB.jsx)(SB.b, {})
-       })
+     function zW(WW, iW) {
+       var OW = WW * WW,
+         mW = iW * iW;
+       return WW === iW ? (WW, iW, mW) => WW * WW + iW * iW + mW * mW <= OW : WW > iW ? (WW, mW, EW) => !(Math.abs(mW) > iW) && WW * WW + mW * mW + EW * EW <= OW : (WW, iW, EW) => {
+         var NW = WW * WW + EW * EW;
+         return !(NW > OW) && NW + iW * iW <= mW
+       }
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3404-L3413` → after: `L3977-L4038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR3977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L3977-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/90.js#L3977-L4038) · [Before (L3404-L3413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/90.js#L3404-L3413)

```diff
-     function tD(BB) {
-       let {
-         value: OB,
-         onChange: GB,
-         min: DB = 1,
-         max: QB,
-         step: oB = 1,
-         label: jB
-       } = BB;
-       const yB = (0, YB.useRef)(null),
+     function FW(WW, iW, OW, mW) {
+       var EW = 0,
+         NW = 0,
+         PW = 0,
+         LW = 0,
+         cW = [];
+       OW.forEach((iW => {
+         var OW = WW.Tb.Jb(iW[0], iW[1], iW[2]);
+         OW && (PW++, cW.push(OW.Ej), OW.sA && EW++, OW.YA && NW++, 26 === OW.Uy && LW++)
+       }));
+       var wW = OW.length.toString().padEnd(8);
+       if (wW += ("exist: " + PW).padEnd(12), wW += ("full: " + EW).padEnd(12), wW += ("empty: " + NW).padEnd(12), wW += ("surr: " + LW).padEnd(12), mW) {
+         var tW = cW.reduce(((WW, iW) => WW + iW), 0),
+           ZW = cW.reduce(((WW, iW) => Math.max(WW, iW)), 0),
+           xW = cW.reduce(((WW, iW) => Math.min(WW, iW)), 0);
+         wW += "times meshed: avg " + (tW / PW).toFixed(2), wW += "  max " + ZW, wW += "  min " + xW
+ ... (46 more added lines; see GitHub link above)
```
