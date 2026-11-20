# Changed — Bundle Modifications Report (Part 024 / 058)

- **Updated at**: `2026-11-21T00:46 JST`
- **Part**: `24 / 58` (**386** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 023](part-023.md) · [Part 025 →](part-025.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/70.js` (ad2avs.90d9e4dd → bbb6l5.0244a119 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/70.js` (1640 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405)

#### 776. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4701-L4703` → after: `L5464-L5508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5464-L5508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5464-L5508) · [Before (L4701-L4703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4701-L4703)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Poison Potion|meta|charging1"
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
+ ... (29 more added lines; see GitHub link above)
```

#### 777. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4705` → after: `L5510-L5625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5510-L5625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5510-L5625) · [Before (L4705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4705)

```diff
-         "Poison Potion II": {
+         "_Pear Door Top|meta|rot1|open": {
+           ttb: 3600,
+           harvestType: "wood",
+           drops: "Pear Door"
+         },
+         "_Pear Door Top|meta|rot2|closed": {
+           ttb: 3600,
+           harvestType: "wood",
+           drops: "Pear Door"
+         },
+         "_Pear Door Top|meta|rot2|open": {
+           ttb: 3600,
+           harvestType: "wood",
+           drops: "Pear Door"
+         },
+         "_Pear Door Top|meta|rot3|closed": {
+ ... (100 more added lines; see GitHub link above)
```

#### 778. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4707` → after: `L5627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5627) · [Before (L4707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4707)

```diff
-             translationKey: "item:poisonPotionII"
+             translationKey: "item:pearBlock"
```

#### 779. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4709-L4719` → after: `L5629-L5636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5629-L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5629-L5636) · [Before (L4709-L4719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4709-L4719)

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
+           ttb: 600,
+           textureInfo: ["pear_block_side", "pear_block_top", "pear_block_bottom"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "wood"
+         },
+         "Compressed Messy Stone": {
+           displayName: {
+             translationKey: "item:compressedMessyStone"
```

#### 780. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4721-L4723` → after: `L5638-L5640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5638-L5640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5638-L5640) · [Before (L4721-L4723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4721-L4723)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Poison Potion II|meta|charging1"
+           ttb: 12e3,
+           textureInfo: "compressed_messy_stone",
+           harvestType: "rock"
```

#### 781. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4725` → after: `L5642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5642) · [Before (L4725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4725)

```diff
-         "Splash Poison Potion": {
+         "Extra Compressed Messy Stone": {
```

#### 782. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4727` → after: `L5644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5644) · [Before (L4727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4727)

```diff
-             translationKey: "item:splashPoisonPotion"
+             translationKey: "item:extraCompressedMessyStone"
```

#### 783. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4729-L4735` → after: `L5646-L5652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5646-L5652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5646-L5652) · [Before (L4729-L4735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4729-L4735)

```diff
-           type: "Item",
-           textureInfo: "splash_poison",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashPoisonPotionDescription"
+           ttb: 24e3,
+           textureInfo: "extra_compressed_messy_stone",
+           harvestType: "rock"
+         },
+         "Super Compressed Messy Stone": {
+           displayName: {
+             translationKey: "item:superCompressedMessyStone"
```

#### 784. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4737` → after: `L5654-L5656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5654-L5656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5654-L5656) · [Before (L4737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4737)

```diff
-           rootMetaDesc: "Splash Poison Potion|meta|charging1"
+           ttb: 36e3,
+           textureInfo: "super_compressed_messy_stone",
+           harvestType: "rock"
```

#### 785. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4739` → after: `L5658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5658) · [Before (L4739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4739)

```diff
-         "Splash Poison Potion II": {
+         "Hyper Compressed Messy Stone": {
```

#### 786. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4741` → after: `L5660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5660) · [Before (L4741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4741)

```diff
-             translationKey: "item:splashPoisonPotionII"
+             translationKey: "item:hyperCompressedMessyStone"
```

#### 787. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4743-L4750` → after: `L5662-L5668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5662-L5668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5662-L5668) · [Before (L4743-L4750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4743-L4750)

```diff
-           type: "Item",
-           textureInfo: "splash_poison",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Poison Potion",
-           stackable: !1,
-           description: {
-             translationKey: "item:splashPoisonPotionDescription"
+           ttb: 48e3,
+           textureInfo: "hyper_compressed_messy_stone",
+           harvestType: "rock"
+         },
+         "Ultra Compressed Messy Stone": {
+           displayName: {
+             translationKey: "item:ultraCompressedMessyStone"
```

#### 788. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4752` → after: `L5670-L5672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5670-L5672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5670-L5672) · [Before (L4752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4752)

```diff
-           rootMetaDesc: "Splash Poison Potion II|meta|charging1"
+           ttb: 6e4,
+           textureInfo: "ultra_compressed_messy_stone",
+           harvestType: "rock"
```

#### 789. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4754` → after: `L5674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5674) · [Before (L4754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4754)

```diff
-         "Arrow of Poison": {
+         "Mega Compressed Messy Stone": {
```

#### 790. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4756` → after: `L5676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5676) · [Before (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4756)

```diff
-             translationKey: "item:arrowOfPoison"
+             translationKey: "item:megaCompressedMessyStone"
```

#### 791. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4758-L4763` → after: `L5678-L5680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5678-L5680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5678-L5680) · [Before (L4758-L4763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4758-L4763)

```diff
-           type: "Item",
-           textureInfo: "poison_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 72e3,
+           textureInfo: "mega_compressed_messy_stone",
+           harvestType: "rock"
```

#### 792. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4765` → after: `L5682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5682) · [Before (L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4765)

```diff
-         "Weakness Potion": {
+         ...(0, aq.Lb)("Board", {
```

#### 793. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4767` → after: `L5684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5684) · [Before (L4767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4767)

```diff
-             translationKey: "item:weaknessPotion"
+             translationKey: "item:board"
```

#### 794. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4769-L4771` → after: `L5686-L5702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5686-L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5686-L5702) · [Before (L4769-L4771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4769-L4771)

```diff
-           type: "Chargeable",
-           textureInfo: "weakness_potion",
-           weight: 1,
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
+           displayName: {
+             translationKey: "item:net"
+           },
+           ttb: 400,
+           textureInfo: "net",
+ ... (1 more added lines; see GitHub link above)
```

#### 795. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4773-L4776` → after: `L5704-L5705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5704-L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5704-L5705) · [Before (L4773-L4776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4773-L4776)

```diff
-           eatable: !0,
-           chargeSound: "drink",
-           stackable: !1,
-           afterEatenItem: "Empty Bottle",
+           solid: !1,
+           harvestType: "wood",
```

#### 796. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4778` → after: `L5707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5707) · [Before (L4778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4778)

```diff
-             translationKey: "item:weaknessPotionDescription"
+             translationKey: "item:netDescription"
```

#### 797. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4780-L4782` → after: `L5709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5709) · [Before (L4780-L4782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4780-L4782)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Weakness Potion|meta|charging1"
+           itemTexture: "net"
```

#### 798. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4784` → after: `L5711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5711) · [Before (L4784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4784)

```diff
-         "Weakness Potion II": {
+         Cobweb: {
```

#### 799. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4786` → after: `L5713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5713) · [Before (L4786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4786)

```diff
-             translationKey: "item:weaknessPotionII"
+             translationKey: "item:cobweb"
```

#### 800. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4788-L4790` → after: `L5715-L5717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5715-L5717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5715-L5717) · [Before (L4788-L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4788-L4790)

```diff
-           type: "Chargeable",
-           textureInfo: "weakness_potion",
-           weight: 1,
+           ttb: 300,
+           textureInfo: "cobweb",
+           model: "CentreCross",
```

#### 801. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4792-L4796` → after: `L5719-L5720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5719-L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5719-L5720) · [Before (L4792-L4796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4792-L4796)

```diff
-           heldItemGlb: "Weakness Potion",
-           eatable: !0,
-           chargeSound: "drink",
-           stackable: !1,
-           afterEatenItem: "Empty Bottle",
+           solid: !1,
+           harvestType: "cuttable",
```

#### 802. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4798` → after: `L5722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5722) · [Before (L4798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4798)

```diff
-             translationKey: "item:weaknessPotionDescription"
+             translationKey: "item:cobwebDescription"
```

#### 803. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4800-L4802` → after: `L5724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5724) · [Before (L4800-L4802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4800-L4802)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Weakness Potion II|meta|charging1"
+           itemTexture: "cobweb"
```

#### 804. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4804` → after: `L5726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5726) · [Before (L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4804)

```diff
-         "Splash Weakness Potion": {
+         "Brown Mushroom Block": {
```

#### 805. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4806` → after: `L5728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5728) · [Before (L4806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4806)

```diff
-             translationKey: "item:splashWeaknessPotion"
+             translationKey: "item:brownMushroomBlock"
```

#### 806. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4808-L4815` → after: `L5730-L5732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5730-L5732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5730-L5732) · [Before (L4808-L4815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4808-L4815)

```diff
-           type: "Item",
-           textureInfo: "splash_weakness_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashWeaknessPotionDescription"
-           }
+           ttb: 1200,
+           textureInfo: "brown_mushroom_block",
+           harvestType: "cuttable"
```

#### 807. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4817` → after: `L5734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5734) · [Before (L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4817)

```diff
-         "Splash Weakness Potion II": {
+         "Red Mushroom Block": {
```

#### 808. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4819` → after: `L5736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5736) · [Before (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4819)

```diff
-             translationKey: "item:splashWeaknessPotionII"
+             translationKey: "item:redMushroomBlock"
```

#### 809. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4821-L4829` → after: `L5738-L5740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5738-L5740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5738-L5740) · [Before (L4821-L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4821-L4829)

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
+           ttb: 1200,
+           textureInfo: "red_mushroom_block",
+           harvestType: "cuttable"
```

#### 810. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4831` → after: `L5742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5742) · [Before (L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4831)

```diff
-         "Arrow of Weakness": {
+         "Mushroom Stem": {
```

#### 811. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4833` → after: `L5744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5744) · [Before (L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4833)

```diff
-             translationKey: "item:arrowOfWeakness"
+             translationKey: "item:mushroomStem"
```

#### 812. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4835-L4840` → after: `L5746-L5748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5746-L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5746-L5748) · [Before (L4835-L4840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4835-L4840)

```diff
-           type: "Item",
-           textureInfo: "weakness_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 1200,
+           textureInfo: "mushroom_stem",
+           harvestType: "cuttable"
```

#### 813. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4842` → after: `L5750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5750) · [Before (L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4842)

```diff
-         "Instant Damage Potion": {
+         "Fireball Block": {
```

#### 814. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4844-L4855` → after: `L5752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5752) · [Before (L4844-L4855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4844-L4855)

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
+             translationKey: "item:fireballBlock"
```

#### 815. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4857-L4859` → after: `L5754-L5757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5754-L5757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5754-L5757) · [Before (L4857-L4859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4857-L4859)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Instant Damage Potion|meta|charging1"
+           ttb: 1,
+           textureInfo: "fireball_block",
+           harvestType: "rock",
+           unlitStandaloneMesh: !0
```

#### 816. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4861` → after: `L5759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5759) · [Before (L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4861)

```diff
-         "Instant Damage Potion II": {
+         "Iceball Block": {
```

#### 817. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4863-L4875` → after: `L5761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5761) · [Before (L4863-L4875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4863-L4875)

```diff
-             translationKey: "item:instantDamagePotionII"
-           },
-           type: "Chargeable",
-           textureInfo: "instant_damage_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Instant Damage Potion",
-           eatable: !0,
-           chargeSound: "drink",
-           stackable: !1,
-           afterEatenItem: "Empty Bottle",
-           description: {
-             translationKey: "item:instantDamagePotionDescription"
+             translationKey: "item:iceballBlock"
```

#### 818. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4877-L4879` → after: `L5763-L5766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5763-L5766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5763-L5766) · [Before (L4877-L4879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4877-L4879)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Instant Damage Potion II|meta|charging1"
+           ttb: 1,
+           textureInfo: "iceball_block",
+           harvestType: "rock",
+           unlitStandaloneMesh: !0
```

#### 819. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4881` → after: `L5768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5768) · [Before (L4881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4881)

```diff
-         "Splash Instant Damage Potion": {
+         "Watermelon Seeds": {
```

#### 820. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4883` → after: `L5770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5770) · [Before (L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4883)

```diff
-             translationKey: "item:splashInstantDamagePotion"
+             translationKey: "item:watermelonSeeds"
```

#### 821. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4885-L4889` → after: `L5772-L5777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5772-L5777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5772-L5777) · [Before (L4885-L4889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4885-L4889)

```diff
-           type: "Item",
-           textureInfo: "splash_instant_damage_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           ttb: 400,
+           textureInfo: "melon_stem",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           itemTexture: "watermelon_seeds",
```

#### 822. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4891` → after: `L5779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5779) · [Before (L4891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4891)

```diff
-             translationKey: "item:splashInstantDamagePotionDescription"
+             translationKey: "item:watermelonSeedsDescription"
```

#### 823. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4894` → after: `L5782-L5812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5782-L5812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5782-L5812) · [Before (L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4894)

```diff
-         "Splash Instant Damage Potion II": {
+         "Watermelon Seeds|Growing": {
+           ttb: 400,
+           textureInfo: "melon_stem",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: "Watermelon Seeds"
+         },
+         ...(0, aq.Lb)("Attached Watermelon Stem", {
+           displayName: {
+             translationKey: "item:attachedWatermelonStem"
+           },
+           ttb: 400,
+           textureInfo: ["attached_melon_stem_wrapper", "attached_melon_stem"],
+           model: "CustomPlanes|rotatable",
+           solid: !1,
+ ... (15 more added lines; see GitHub link above)
```

#### 824. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4896` → after: `L5814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5814) · [Before (L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4896)

```diff
-             translationKey: "item:splashInstantDamagePotionII"
+             translationKey: "item:pumpkinSeeds"
```

#### 825. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4898-L4903` → after: `L5816-L5821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5816-L5821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5816-L5821) · [Before (L4898-L4903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4898-L4903)

```diff
-           type: "Item",
-           textureInfo: "splash_instant_damage_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Instant Damage Potion",
-           stackable: !1,
+           ttb: 400,
+           textureInfo: "melon_stem",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           itemTexture: "pumpkin_seeds",
```

#### 826. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4905` → after: `L5823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5823) · [Before (L4905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4905)

```diff
-             translationKey: "item:splashInstantDamagePotionDescription"
+             translationKey: "item:pumpkinSeedsDescription"
```

#### 827. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4908` → after: `L5826-L5856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5826-L5856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5826-L5856) · [Before (L4908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4908)

```diff
-         "Arrow of Instant Damage": {
+         "Pumpkin Seeds|Growing": {
+           ttb: 400,
+           textureInfo: "melon_stem",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: "Pumpkin Seeds"
+         },
+         ...(0, aq.Lb)("Attached Pumpkin Stem", {
+           displayName: {
+             translationKey: "item:attachedPumpkinStem"
+           },
+           ttb: 400,
+           textureInfo: ["attached_melon_stem_wrapper", "attached_melon_stem"],
+           model: "CustomPlanes|rotatable",
+           solid: !1,
+ ... (15 more added lines; see GitHub link above)
```

#### 828. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4910` → after: `L5858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5858) · [Before (L4910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4910)

```diff
-             translationKey: "item:arrowOfInstantDamage"
+             translationKey: "item:pumpkin"
```

#### 829. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4912-L4917` → after: `L5860-L5863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5860-L5863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5860-L5863) · [Before (L4912-L4917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4912-L4917)

```diff
-           type: "Item",
-           textureInfo: "instant_damage_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 1200,
+           textureInfo: ["pumpkin_side", "pumpkin_top"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           harvestType: "wood"
```

#### 830. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4919` → after: `L5865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5865) · [Before (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4919)

```diff
-         "Milk Potion": {
+         ...(0, aq.Nb)("Carved Pumpkin", {
```

#### 831. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4921` → after: `L5867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5867) · [Before (L4921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4921)

```diff
-             translationKey: "item:milkPotion"
+             translationKey: "item:carvedPumpkin"
```

#### 832. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4923-L4932` → after: `L5869-L5876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5869-L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5869-L5876) · [Before (L4923-L4932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4923-L4932)

```diff
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
+           ttb: 1200,
+           textureInfo: ["carved_pumpkin", "pumpkin_side", "pumpkin_top"],
+           harvestType: "wood",
+           rootMetaDesc: "Carved Pumpkin|meta|rot1"
+         }),
+         ...(0, aq.Nb)("Jack o'Lantern", {
+           displayName: {
+             translationKey: "item:jackO'Lantern"
```

#### 833. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4934-L4938` → after: `L5878-L5884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5878-L5884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5878-L5884) · [Before (L4934-L4938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4934-L4938)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Milk Potion|meta|charging1"
-         },
-         "Splash Milk Potion": {
+           ttb: 1200,
+           textureInfo: ["pumpkin_face_on", "pumpkin_side", "pumpkin_top"],
+           harvestType: "wood",
+           rootMetaDesc: "Jack o'Lantern|meta|rot1",
+           ma: [14, 10, 4]
+         }),
+         "Melon Seeds": {
```

#### 834. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4940` → after: `L5886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5886) · [Before (L4940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4940)

```diff
-             translationKey: "item:splashMilkPotion"
+             translationKey: "item:melonSeeds"
```

#### 835. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4942-L4946` → after: `L5888-L5893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5888-L5893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5888-L5893) · [Before (L4942-L4946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4942-L4946)

```diff
-           type: "Item",
-           textureInfo: "splash_milk_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           ttb: 400,
+           textureInfo: "melon_stem",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           itemTexture: "melon_seeds",
```

#### 836. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4948` → after: `L5895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5895) · [Before (L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4948)

```diff
-             translationKey: "item:milkPotionDescription"
+             translationKey: "item:melonSeedsDescription"
```

#### 837. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4951` → after: `L5898-L5928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5898-L5928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5898-L5928) · [Before (L4951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4951)

```diff
-         "Arrow of Milk": {
+         "Melon Seeds|Growing": {
+           ttb: 400,
+           textureInfo: "melon_stem",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: "Melon Seeds"
+         },
+         ...(0, aq.Lb)("Attached Melon Stem", {
+           displayName: {
+             translationKey: "item:attachedMelonStem"
+           },
+           ttb: 400,
+           textureInfo: ["attached_melon_stem_wrapper", "attached_melon_stem"],
+           model: "CustomPlanes|rotatable",
+           solid: !1,
+ ... (15 more added lines; see GitHub link above)
```

#### 838. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4953` → after: `L5930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5930) · [Before (L4953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4953)

```diff
-             translationKey: "item:arrowOfMilk"
+             translationKey: "item:melon"
```

#### 839. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4955-L4960` → after: `L5932-L5935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5932-L5935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5932-L5935) · [Before (L4955-L4960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4955-L4960)

```diff
-           type: "Item",
-           textureInfo: "milk_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 1200,
+           textureInfo: ["melon_side", "melon_top"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           harvestType: "wood"
```

#### 840. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4962` → after: `L5937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5937) · [Before (L4962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4962)

```diff
-         "Speed Potion": {
+         "Iron Watermelon": {
```

#### 841. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4964-L4975` → after: `L5939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5939) · [Before (L4964-L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4964-L4975)

```diff
-             translationKey: "item:speedPotion"
-           },
-           type: "Chargeable",
-           textureInfo: "speed_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           stackable: !1,
-           afterEatenItem: "Empty Bottle",
-           description: {
-             translationKey: "item:speedPotionDescription"
+             translationKey: "item:ironWatermelon"
```

#### 842. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4977-L4979` → after: `L5941-L5944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5941-L5944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5941-L5944) · [Before (L4977-L4979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4977-L4979)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Speed Potion|meta|charging1"
+           ttb: 1200,
+           textureInfo: ["iron_watermelon_side", "iron_watermelon_top"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           harvestType: "rock"
```

#### 843. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4981` → after: `L5946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5946) · [Before (L4981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4981)

```diff
-         "Speed Potion II": {
+         "Patterned Black Glass": {
```

#### 844. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4983` → after: `L5948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5948) · [Before (L4983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4983)

```diff
-             translationKey: "item:speedPotionII"
+             translationKey: "item:patternedBlackGlass"
```

#### 845. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L4985-L4999` → after: `L5950-L5957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5950-L5957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5950-L5957) · [Before (L4985-L4999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L4985-L4999)

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
-           description: {
-             translationKey: "item:speedPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Speed Potion II|meta|charging1"
+           ttb: 450,
+           textureInfo: "patterned_glass_black",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 846. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5001` → after: `L5959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5959) · [Before (L5001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5001)

```diff
-         "Splash Speed Potion": {
+         "Patterned Blue Glass": {
```

#### 847. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5003` → after: `L5961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5961) · [Before (L5003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5003)

```diff
-             translationKey: "item:splashSpeedPotion"
+             translationKey: "item:patternedBlueGlass"
```

#### 848. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5005-L5013` → after: `L5963-L5970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5963-L5970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5963-L5970) · [Before (L5005-L5013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5005-L5013)

```diff
-           type: "Item",
-           textureInfo: "splash_speed_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashSpeedPotionDescription"
-           },
-           rootMetaDesc: "Splash Speed Potion|meta|charging1"
+           ttb: 450,
+           textureInfo: "patterned_glass_blue",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 849. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5015` → after: `L5972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5972) · [Before (L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5015)

```diff
-         "Splash Speed Potion II": {
+         "Patterned Brown Glass": {
```

#### 850. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5017` → after: `L5974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5974) · [Before (L5017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5017)

```diff
-             translationKey: "item:splashSpeedPotionII"
+             translationKey: "item:patternedBrownGlass"
```

#### 851. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5019-L5026` → after: `L5976-L5982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5976-L5982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5976-L5982) · [Before (L5019-L5026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5019-L5026)

```diff
-           type: "Item",
-           textureInfo: "splash_speed_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Speed Potion",
-           stackable: !1,
-           description: {
-             translationKey: "item:splashSpeedPotionDescription"
+           ttb: 450,
+           textureInfo: "patterned_glass_brown",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
```

#### 852. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5029` → after: `L5985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5985) · [Before (L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5029)

```diff
-         "Arrow of Speed": {
+         "Patterned Cyan Glass": {
```

#### 853. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5031` → after: `L5987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5987) · [Before (L5031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5031)

```diff
-             translationKey: "item:arrowOfSpeed"
+             translationKey: "item:patternedCyanGlass"
```

#### 854. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5033-L5038` → after: `L5989-L5996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5989-L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5989-L5996) · [Before (L5033-L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5033-L5038)

```diff
-           type: "Item",
-           textureInfo: "speed_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 450,
+           textureInfo: "patterned_glass_cyan",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 855. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5040` → after: `L5998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R5998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L5998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L5998) · [Before (L5040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5040)

```diff
-         "Defense Potion": {
+         "Patterned Gray Glass": {
```

#### 856. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5042` → after: `L6000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6000) · [Before (L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5042)

```diff
-             translationKey: "item:defensePotion"
+             translationKey: "item:patternedGrayGlass"
```

#### 857. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5044-L5057` → after: `L6002-L6009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6002-L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6002-L6009) · [Before (L5044-L5057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5044-L5057)

```diff
-           type: "Chargeable",
-           textureInfo: "defense_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
-           description: {
-             translationKey: "item:defensePotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Defense Potion|meta|charging1"
+           ttb: 450,
+           textureInfo: "patterned_glass_gray",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 858. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5059` → after: `L6011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6011) · [Before (L5059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5059)

```diff
-         "Defense Potion II": {
+         "Patterned Light Gray Glass": {
```

#### 859. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5061` → after: `L6013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6013) · [Before (L5061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5061)

```diff
-             translationKey: "item:defensePotionII"
+             translationKey: "item:patternedLightGrayGlass"
```

#### 860. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5063-L5077` → after: `L6015-L6022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6015-L6022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6015-L6022) · [Before (L5063-L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5063-L5077)

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
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Defense Potion II|meta|charging1"
+           ttb: 450,
+           textureInfo: "patterned_glass_light_gray",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 861. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5079` → after: `L6024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6024) · [Before (L5079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5079)

```diff
-         "Splash Defense Potion": {
+         "Patterned Green Glass": {
```

#### 862. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5081` → after: `L6026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6026) · [Before (L5081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5081)

```diff
-             translationKey: "item:splashDefensePotion"
+             translationKey: "item:patternedGreenGlass"
```

#### 863. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5083-L5089` → after: `L6028-L6034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6028-L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6028-L6034) · [Before (L5083-L5089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5083-L5089)

```diff
-           type: "Item",
-           textureInfo: "splash_defense_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashDefensePotionDescription"
+           ttb: 450,
+           textureInfo: "patterned_glass_green",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
```

#### 864. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5092` → after: `L6037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6037) · [Before (L5092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5092)

```diff
-         "Splash Defense Potion II": {
+         "Patterned Light Blue Glass": {
```

#### 865. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5094` → after: `L6039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6039) · [Before (L5094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5094)

```diff
-             translationKey: "item:splashDefensePotionII"
+             translationKey: "item:patternedLightBlueGlass"
```

#### 866. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5096-L5103` → after: `L6041-L6047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6041-L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6041-L6047) · [Before (L5096-L5103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5096-L5103)

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
+           textureInfo: "patterned_glass_light_blue",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
```

#### 867. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5106` → after: `L6050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6050) · [Before (L5106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5106)

```diff
-         "Arrow of Defense": {
+         "Patterned Lime Glass": {
```

#### 868. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5108` → after: `L6052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6052) · [Before (L5108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5108)

```diff
-             translationKey: "item:arrowOfDefense"
+             translationKey: "item:patternedLimeGlass"
```

#### 869. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5110-L5115` → after: `L6054-L6061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6054-L6061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6054-L6061) · [Before (L5110-L5115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5110-L5115)

```diff
-           type: "Item",
-           textureInfo: "defense_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 450,
+           textureInfo: "patterned_glass_lime",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 870. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5117` → after: `L6063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6063) · [Before (L5117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5117)

```diff
-         "Strength Potion": {
+         "Patterned Magenta Glass": {
```

#### 871. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5119` → after: `L6065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6065) · [Before (L5119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5119)

```diff
-             translationKey: "item:strengthPotion"
+             translationKey: "item:patternedMagentaGlass"
```

#### 872. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5121-L5130` → after: `L6067-L6078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6067-L6078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6067-L6078) · [Before (L5121-L5130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5121-L5130)

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
+           ttb: 450,
+           textureInfo: "patterned_glass_magenta",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
+         },
+         "Patterned Orange Glass": {
+           displayName: {
+             translationKey: "item:patternedOrangeGlass"
```

#### 873. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5132-L5134` → after: `L6080-L6087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6080-L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6080-L6087) · [Before (L5132-L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5132-L5134)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Strength Potion|meta|charging1"
+           ttb: 450,
+           textureInfo: "patterned_glass_orange",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 874. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5136` → after: `L6089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6089) · [Before (L5136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5136)

```diff
-         "Strength Potion II": {
+         "Patterned Pink Glass": {
```

#### 875. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5138` → after: `L6091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6091) · [Before (L5138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5138)

```diff
-             translationKey: "item:strengthPotionII"
+             translationKey: "item:patternedPinkGlass"
```

#### 876. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5140-L5150` → after: `L6093-L6104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6093-L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6093-L6104) · [Before (L5140-L5150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5140-L5150)

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
+           ttb: 450,
+           textureInfo: "patterned_glass_pink",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
+         },
+         "Patterned Purple Glass": {
+           displayName: {
+             translationKey: "item:patternedPurpleGlass"
```

#### 877. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5152-L5154` → after: `L6106-L6113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6106-L6113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6106-L6113) · [Before (L5152-L5154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5152-L5154)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Strength Potion II|meta|charging1"
+           ttb: 450,
+           textureInfo: "patterned_glass_purple",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
+           }
```

#### 878. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5156` → after: `L6115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6115) · [Before (L5156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5156)

```diff
-         "Splash Strength Potion": {
+         "Patterned Red Glass": {
```

#### 879. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5158` → after: `L6117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6117) · [Before (L5158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5158)

```diff
-             translationKey: "item:splashStrengthPotion"
+             translationKey: "item:patternedRedGlass"
```

#### 880. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5160-L5166` → after: `L6119-L6125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6119-L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6119-L6125) · [Before (L5160-L5166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5160-L5166)

```diff
-           type: "Item",
-           textureInfo: "splash_strength_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashStrengthPotionDescription"
+           ttb: 450,
+           textureInfo: "patterned_glass_red",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
```

#### 881. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5169` → after: `L6128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6128) · [Before (L5169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5169)

```diff
-         "Splash Strength Potion II": {
+         "Patterned White Glass": {
```

#### 882. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5171` → after: `L6130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6130) · [Before (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5171)

```diff
-             translationKey: "item:splashStrengthPotionII"
+             translationKey: "item:patternedWhiteGlass"
```

#### 883. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5173-L5180` → after: `L6132-L6138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6132-L6138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6132-L6138) · [Before (L5173-L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5173-L5180)

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
+           textureInfo: "patterned_glass_white",
+           transTex: !0,
+           harvestType: "wood",
+           soundType: {
+             break: "glass",
+             place: "stone"
```

#### 884. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5183` → after: `L6141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6141) · [Before (L5183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5183)

```diff
-         "Arrow of Strength": {
+         "Patterned Yellow Glass": {
```

#### 885. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5185` → after: `L6143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6143) · [Before (L5185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5185)

```diff
-             translationKey: "item:arrowOfStrength"
+             translationKey: "item:patternedYellowGlass"
```

#### 886. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5187-L5192` → after: `L6145-L6152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6145-L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6145-L6152) · [Before (L5187-L5192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5187-L5192)

```diff
-           type: "Item",
-           textureInfo: "strength_arrow",
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

#### 887. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5194` → after: `L6154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6154) · [Before (L5194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5194)

```diff
-         "Invisibility Potion": {
+         ...(0, aq.Lb)("Potion Table", {
```

#### 888. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5196` → after: `L6156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6156) · [Before (L5196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5196)

```diff
-             translationKey: "item:invisibilityPotion"
+             translationKey: "item:potionTable"
```

#### 889. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5198-L5205` → after: `L6158-L6160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6158-L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6158-L6160) · [Before (L5198-L5205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5198-L5205)

```diff
-           type: "Chargeable",
-           textureInfo: "invisibility_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
+           ttb: 1200,
+           harvestType: "wood",
+           rootMetaDesc: "Potion Table|meta|rot1",
```

#### 890. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5207` → after: `L6162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6162) · [Before (L5207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5207)

```diff
-             translationKey: "item:invisibilityPotionDescription"
+             translationKey: "item:potionTableDescription"
```

#### 891. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5209-L5213` → after: `L6164-L6562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6164-L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6164-L6562) · [Before (L5209-L5213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5209-L5213)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Invisibility Potion|meta|charging1"
-         },
-         "Splash Invisibility Potion": {
+           ...Pq("Potion Table", "potion_table", {
+             textureAnimation: {
+               frames: 4,
+               animationInterval: 200
+             }
+           })
+         }),
+         ...(0, aq.Lb)("Pine Ladder", {
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

#### 892. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5215` → after: `L6564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6564) · [Before (L5215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5215)

```diff
-             translationKey: "item:splashInvisibilityPotion"
+             translationKey: "item:mailbox"
```

#### 893. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5217-L5221` → after: `L6566-L6584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6566-L6584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6566-L6584) · [Before (L5217-L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5217-L5221)

```diff
-           type: "Item",
-           textureInfo: "splash_invisibility_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           ttb: 4200,
+           textureInfo: ["mailbox_front", "mailbox_side"],
+           texturePerSide: [1, 1, 1, 1, 0, 1],
+           harvestType: "wood",
+           rootMetaDesc: "Mailbox|meta|rot1|empty",
+           description: {
+             translationKey: "item:mailboxDescription"
+           }
+         }),
+         Rice: {
+           displayName: {
+             translationKey: "item:rice"
+           },
+           ttb: 400,
+           textureInfo: "rice_stage0",
+           model: "SquareSided",
+ ... (3 more added lines; see GitHub link above)
```

#### 894. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5223` → after: `L6586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6586) · [Before (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5223)

```diff
-             translationKey: "item:splashInvisibilityPotionDescription"
+             translationKey: "item:riceDescription"
```

#### 895. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5226` → after: `L6589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6589) · [Before (L5226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5226)

```diff
-         "Arrow of Invisibility": {
+         ...(0, aq.Eb)("Rice", {
```

#### 896. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5228` → after: `L6591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6591) · [Before (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5228)

```diff
-             translationKey: "item:arrowOfInvisibility"
+             translationKey: "item:rice"
```

#### 897. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5230-L5235` → after: `L6593-L6605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6593-L6605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6593-L6605) · [Before (L5230-L5235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5230-L5235)

```diff
-           type: "Item",
-           textureInfo: "invisibility_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
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

#### 898. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5237` → after: `L6607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6607) · [Before (L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5237)

```diff
-         "Jump Potion": {
+         Cranberries: {
```

#### 899. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5239` → after: `L6609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6609) · [Before (L5239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5239)

```diff
-             translationKey: "item:jumpPotion"
+             translationKey: "item:cranberries"
```

#### 900. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5241-L5248` → after: `L6611-L6616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6611-L6616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6611-L6616) · [Before (L5241-L5248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5241-L5248)

```diff
-           type: "Chargeable",
-           textureInfo: "jump_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
+           ttb: 400,
+           textureInfo: "berry_bush_stage0",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           itemTexture: "cranberries",
```

#### 901. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5250-L5254` → after: `L6618-L6619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6618-L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6618-L6619) · [Before (L5250-L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5250-L5254)

```diff
-             translationKey: "item:jumpPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1e3,
-           rootMetaDesc: "Jump Potion|meta|charging1"
+             translationKey: "item:cranberriesDescription"
+           }
```

#### 902. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5256` → after: `L6621-L6632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6621-L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6621-L6632) · [Before (L5256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5256)

```diff
-         "Jump Potion II": {
+         ...(0, aq.Eb)("Cranberries", {
+           ttb: 400,
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: "Cranberries"
+         }, ["berry_bush_stage1", "berry_bush_stage2"], {
+           2: {
+             onMinedAura: 5
+           }
+         }),
+         "Red Mushroom": {
```

#### 903. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5258` → after: `L6634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6634) · [Before (L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5258)

```diff
-             translationKey: "item:jumpPotionII"
+             translationKey: "item:redMushroom"
```

#### 904. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5260-L5270` → after: `L6636-L6645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6636-L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6636-L6645) · [Before (L5260-L5270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5260-L5270)

```diff
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
+           ttb: 400,
+           textureInfo: "red_mushroom",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           itemTexture: "red_mushroom"
+         },
+         "Brown Mushroom": {
+           displayName: {
+             translationKey: "item:brownMushroom"
```

#### 905. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5272-L5274` → after: `L6647-L6652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6647-L6652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6647-L6652) · [Before (L5272-L5274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5272-L5274)

```diff
-           chargeStages: 1,
-           chargeTime: 1e3,
-           rootMetaDesc: "Jump Potion II|meta|charging1"
+           ttb: 400,
+           textureInfo: "brown_mushroom",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           itemTexture: "brown_mushroom"
```

#### 906. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5276` → after: `L6654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6654) · [Before (L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5276)

```diff
-         "Splash Jump Potion": {
+         "Cotton Seeds": {
```

#### 907. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5278` → after: `L6656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6656) · [Before (L5278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5278)

```diff
-             translationKey: "item:splashJumpPotion"
+             translationKey: "item:cottonSeeds"
```

#### 908. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5280-L5284` → after: `L6658-L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6658-L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6658-L6663) · [Before (L5280-L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5280-L5284)

```diff
-           type: "Item",
-           textureInfo: "splash_jump_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           ttb: 400,
+           textureInfo: "cotton_plant_stage0",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           itemTexture: "cotton_seeds",
```

#### 909. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5286` → after: `L6665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6665) · [Before (L5286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5286)

```diff
-             translationKey: "item:splashJumpPotionDescription"
+             translationKey: "item:cottonSeedsDescription"
```

#### 910. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5289` → after: `L6668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6668) · [Before (L5289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5289)

```diff
-         "Splash Jump Potion II": {
+         ...(0, aq.Eb)("Cotton", {
```

#### 911. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5291` → after: `L6670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6670) · [Before (L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5291)

```diff
-             translationKey: "item:splashJumpPotionII"
+             translationKey: "item:cotton"
```

#### 912. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5293-L5300` → after: `L6672-L6679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6672-L6679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6672-L6679) · [Before (L5293-L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5293-L5300)

```diff
-           type: "Item",
-           textureInfo: "splash_jump_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Jump Potion",
-           stackable: !1,
-           description: {
-             translationKey: "item:splashJumpPotionDescription"
+           ttb: 400,
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable",
+           drops: "Cotton Seeds"
+         }, ["cotton_plant_stage1", "cotton_plant_stage2", "cotton_plant_stage3"], {
+           3: {
+             onMinedAura: 5
```

#### 913. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5302-L5303` → after: `L6681-L6682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6681-L6682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6681-L6682) · [Before (L5302-L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5302-L5303)

```diff
-         },
-         "Arrow of Jumping": {
+         }),
+         "Tribe Protector": {
```

#### 914. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5305` → after: `L6684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6684) · [Before (L5305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5305)

```diff
-             translationKey: "item:arrowOfJumping"
+             translationKey: "item:tribeProtector"
```

#### 915. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5307-L5312` → after: `L6686-L6691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6686-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6686-L6691) · [Before (L5307-L5312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5307-L5312)

```diff
-           type: "Item",
-           textureInfo: "jump_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 5e3,
+           textureInfo: "protector_tribe",
+           harvestType: "rock",
+           description: {
+             translationKey: "item:tribeProtectorDescription"
+           }
```

#### 916. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5314` → after: `L6693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6693) · [Before (L5314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5314)

```diff
-         "Knockback Potion": {
+         "Tall Grass": {
```

#### 917. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5316` → after: `L6695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6695) · [Before (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5316)

```diff
-             translationKey: "item:knockbackPotion"
+             translationKey: "item:tallGrass"
```

#### 918. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5318-L5327` → after: `L6697-L6721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6697-L6721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6697-L6721) · [Before (L5318-L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5318-L5327)

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

#### 919. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5329-L5331` → after: `L6723-L6730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6723-L6730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6723-L6730) · [Before (L5329-L5331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5329-L5331)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Knockback Potion|meta|charging1"
+           itemTexture: "tall_grass_top",
+           canBePlacedOver: !0
+         },
+         "Faction Protector": {
+           ttb: 5e3,
+           textureInfo: "protector_faction",
+           harvestType: "rock",
+           description: "Prevents other factions from changing blocks and\nopening chests in the placed chunk"
```

#### 920. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5333` → after: `L6732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6732) · [Before (L5333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5333)

```diff
-         "Splash Knockback Potion": {
+         "Barkless Palm Log": {
```

#### 921. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5335` → after: `L6734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6734) · [Before (L5335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5335)

```diff
-             translationKey: "item:splashKnockbackPotion"
+             translationKey: "item:barklessPalmLog"
```

#### 922. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5337-L5344` → after: `L6736-L6738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6736-L6738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6736-L6738) · [Before (L5337-L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5337-L5344)

```diff
-           type: "Item",
-           textureInfo: "splash_knockback_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashKnockbackPotionDescription"
-           }
+           ttb: 2e3,
+           textureInfo: "stripped_palm_log",
+           harvestType: "wood"
```

#### 923. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5346` → after: `L6740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6740) · [Before (L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5346)

```diff
-         "Splash Knockback Potion II": {
+         "Barkless Pear Log": {
```

#### 924. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5348` → after: `L6742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6742) · [Before (L5348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5348)

```diff
-             translationKey: "item:splashKnockbackPotionII"
+             translationKey: "item:barklessPearLog"
```

#### 925. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5350-L5358` → after: `L6744-L6770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6744-L6770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6744-L6770) · [Before (L5350-L5358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5350-L5358)

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
+ ... (11 more added lines; see GitHub link above)
```

#### 926. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5360` → after: `L6772-L6796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6772-L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6772-L6796) · [Before (L5360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5360)

```diff
-         "Arrow of Knockback": {
+         "Barkless Jungle Log|TreeBase|Jungle": {
+           ttb: 2e3,
+           textureInfo: "stripped_jungle_log",
+           harvestType: "wood",
+           drops: "Barkless Jungle Log"
+         },
+         "Barkless Pine Log|TreeBase|Pine": {
+           ttb: 2e3,
+           textureInfo: "stripped_pine_log",
+           harvestType: "wood",
+           drops: "Barkless Pine Log"
+         },
+         "Barkless Palm Log|TreeBase|Palm": {
+           ttb: 2e3,
+           textureInfo: "stripped_palm_log",
+           harvestType: "wood",
+ ... (9 more added lines; see GitHub link above)
```

#### 927. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5362` → after: `L6798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6798) · [Before (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5362)

```diff
-             translationKey: "item:arrowOfKnockback"
+             translationKey: "item:mysteryBlock"
```

#### 928. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5364-L5369` → after: `L6800-L6802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6800-L6802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6800-L6802) · [Before (L5364-L5369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5364-L5369)

```diff
-           type: "Item",
-           textureInfo: "knockback_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 1200,
+           textureInfo: "mystery_block",
+           harvestType: "rock"
```

#### 929. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5371` → after: `L6804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6804) · [Before (L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5371)

```diff
-         "Regeneration Potion": {
+         Rocket: {
```

#### 930. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5373` → after: `L6806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6806) · [Before (L5373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5373)

```diff
-             translationKey: "item:regenerationPotion"
+             translationKey: "item:rocket"
```

#### 931. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5375-L5384` → after: `L6808-L6815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6808-L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6808-L6815) · [Before (L5375-L5384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5375-L5384)

```diff
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
+           ttb: 1,
+           textureInfo: "rocket_block",
+           harvestType: "rock",
+           unlitStandaloneMesh: !0
+         },
+         "Super Rocket": {
+           displayName: {
+             translationKey: "item:superRocket"
```

#### 932. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5386-L5388` → after: `L6817-L6820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6817-L6820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6817-L6820) · [Before (L5386-L5388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5386-L5388)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Regeneration Potion|meta|charging1"
+           ttb: 1,
+           textureInfo: "super_rocket_block",
+           harvestType: "rock",
+           unlitStandaloneMesh: !0
```

#### 933. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5390` → after: `L6822-L6823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6822-L6823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6822-L6823) · [Before (L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5390)

```diff
-         "Regeneration Potion II": {
+         ...(0, aq.V)(),
+         Grenade: {
```

#### 934. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5392` → after: `L6825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6825) · [Before (L5392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5392)

```diff
-             translationKey: "item:regenerationPotionII"
+             translationKey: "item:grenade"
```

#### 935. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5394-L5404` → after: `L6827-L6834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6827-L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6827-L6834) · [Before (L5394-L5404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5394-L5404)

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
+           ttb: 1,
+           textureInfo: "grenade_block",
+           harvestType: "rock",
+           unlitStandaloneMesh: !0
+         },
+         "Cherry Log": {
+           displayName: {
+             translationKey: "item:cherryLog"
```

#### 936. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5406-L5408` → after: `L6836-L6838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6836-L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6836-L6838) · [Before (L5406-L5408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5406-L5408)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Regeneration Potion II|meta|charging1"
+           ttb: 2400,
+           textureInfo: "log_cherry",
+           harvestType: "wood"
```

#### 937. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5410` → after: `L6840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6840) · [Before (L5410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5410)

```diff
-         "Splash Regeneration Potion": {
+         "Barkless Cherry Log": {
```

#### 938. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5412` → after: `L6842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6842) · [Before (L5412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5412)

```diff
-             translationKey: "item:splashRegenerationPotion"
+             translationKey: "item:barklessCherryLog"
```

#### 939. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5414-L5421` → after: `L6844-L6846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6844-L6846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6844-L6846) · [Before (L5414-L5421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5414-L5421)

```diff
-           type: "Item",
-           textureInfo: "splash_regen_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashRegenerationPotionDescription"
-           }
+           ttb: 2e3,
+           textureInfo: "stripped_cherry_log",
+           harvestType: "wood"
```

#### 940. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5423` → after: `L6848-L6854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6848-L6854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6848-L6854) · [Before (L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5423)

```diff
-         "Splash Regeneration Potion II": {
+         "Barkless Cherry Log|TreeBase|Cherry": {
+           ttb: 2e3,
+           textureInfo: "stripped_cherry_log",
+           harvestType: "wood",
+           drops: "Barkless Cherry Log"
+         },
+         "Cherry Wood Planks": {
```

#### 941. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5425` → after: `L6856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6856) · [Before (L5425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5425)

```diff
-             translationKey: "item:splashRegenerationPotionII"
+             translationKey: "item:cherryWoodPlanks"
```

#### 942. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5427-L5435` → after: `L6858-L6860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6858-L6860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6858-L6860) · [Before (L5427-L5435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5427-L5435)

```diff
-           type: "Item",
-           textureInfo: "splash_regen_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Regeneration Potion",
-           stackable: !1,
-           description: {
-             translationKey: "item:splashRegenerationPotionDescription"
-           }
+           ttb: 1800,
+           textureInfo: "planks_cherry",
+           harvestType: "wood"
```

#### 943. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5437` → after: `L6862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6862) · [Before (L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5437)

```diff
-         "Arrow of Regeneration": {
+         "Cherry Leaves": {
```

#### 944. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5439` → after: `L6864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6864) · [Before (L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5439)

```diff
-             translationKey: "item:arrowOfRegeneration"
+             translationKey: "item:cherryLeaves"
```

#### 945. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5441-L5446` → after: `L6866-L6868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6866-L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6866-L6868) · [Before (L5441-L5446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5441-L5446)

```diff
-           type: "Item",
-           textureInfo: "regen_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 350,
+           textureInfo: "leaves_cherry",
+           harvestType: "cuttable"
```

#### 946. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5448` → after: `L6870-L7047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R6870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L6870-L7047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L6870-L7047) · [Before (L5448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5448)

```diff
-         "Instant Healing Potion": {
+         ...(0, aq.Ob)("Fallen Cherry Leaves", {
+           displayName: {
+             translationKey: "item:fallenCherryLeaves"
+           },
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
+ ... (162 more added lines; see GitHub link above)
```

#### 947. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5450` → after: `L7049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7049) · [Before (L5450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5450)

```diff
-             translationKey: "item:instantHealingPotion"
+             translationKey: "item:cherryLadder"
```

#### 948. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5452-L5454` → after: `L7051-L7058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7051-L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7051-L7058) · [Before (L5452-L5454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5452-L5454)

```diff
-           type: "Chargeable",
-           textureInfo: "heal_potion",
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

#### 949. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5456-L5461` → after: `L7060-L7064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7060-L7064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7060-L7064) · [Before (L5456-L5461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5456-L5461)

```diff
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
-           description: {
-             translationKey: "item:instantHealingPotionDescription"
+           blockModelItem: !0
+         }),
+         "Cherry Block": {
+           displayName: {
+             translationKey: "item:cherryBlock"
```

#### 950. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5463-L5465` → after: `L7066-L7069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7066-L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7066-L7069) · [Before (L5463-L5465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5463-L5465)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Instant Healing Potion|meta|charging1"
+           ttb: 600,
+           textureInfo: ["cherry_block_side", "cherry_block_top", "cherry_block_bottom"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "wood"
```

#### 951. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5467` → after: `L7071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7071) · [Before (L5467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5467)

```diff
-         "Instant Healing Potion II": {
+         "Bouncy Bomb Block": {
```

#### 952. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5469` → after: `L7073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7073) · [Before (L5469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5469)

```diff
-             translationKey: "item:instantHealingPotionII"
+             translationKey: "item:bouncyBombBlock"
```

#### 953. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5471-L5481` → after: `L7075-L7082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7075-L7082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7075-L7082) · [Before (L5471-L5481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5471-L5481)

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
-           description: {
-             translationKey: "item:instantHealingPotionDescription"
+           ttb: 1,
+           textureInfo: "bouncy_bomb_block",
+           harvestType: "rock",
+           unlitStandaloneMesh: !0
+         },
+         "Obby Rocket": {
+           displayName: {
+             translationKey: "item:rocket"
```

#### 954. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5483-L5485` → after: `L7084-L7087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7084-L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7084-L7087) · [Before (L5483-L5485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5483-L5485)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Instant Healing Potion II|meta|charging1"
+           ttb: 1,
+           textureInfo: "rocket_block",
+           harvestType: "rock",
+           unlitStandaloneMesh: !0
```

#### 955. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5487` → after: `L7089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7089) · [Before (L5487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5487)

```diff
-         "Splash Instant Healing Potion": {
+         "Wood Spikes": {
```

#### 956. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5489` → after: `L7091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7091) · [Before (L5489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5489)

```diff
-             translationKey: "item:splashInstantHealingPotion"
+             translationKey: "item:woodSpikes"
```

#### 957. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5491-L5495` → after: `L7093-L7102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7093-L7102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7093-L7102) · [Before (L5491-L5495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5491-L5495)

```diff
-           type: "Item",
-           textureInfo: "splash_heal_potion",
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

#### 958. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5497` → after: `L7104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7104) · [Before (L5497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5497)

```diff
-             translationKey: "item:splashInstantHealingPotionDescription"
+             translationKey: "item:spikesDescription"
```

#### 959. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5500` → after: `L7107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7107) · [Before (L5500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5500)

```diff
-         "Splash Instant Healing Potion II": {
+         "Stone Spikes": {
```

#### 960. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5502` → after: `L7109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7109) · [Before (L5502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5502)

```diff
-             translationKey: "item:splashInstantHealingPotionII"
+             translationKey: "item:stoneSpikes"
```

#### 961. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5504-L5509` → after: `L7111-L7120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7111-L7120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7111-L7120) · [Before (L5504-L5509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5504-L5509)

```diff
-           type: "Item",
-           textureInfo: "splash_heal_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Instant Healing Potion",
-           stackable: !1,
+           ttb: 1200,
+           harvestType: "rock",
+           model: "CustomModel",
+           customModelInfo: {
+             yOffset: -2 / 16
+           },
+           itemTexture: "spikes_stone",
+           solid: !1,
+           modelScale: 10,
+           blockModel: "Spikes_Stone",
```

#### 962. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5511` → after: `L7122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7122) · [Before (L5511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5511)

```diff
-             translationKey: "item:splashInstantHealingPotionDescription"
+             translationKey: "item:spikesDescription"
```

#### 963. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5514` → after: `L7125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7125) · [Before (L5514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5514)

```diff
-         "Arrow of Instant Healing": {
+         "Iron Spikes": {
```

#### 964. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5516` → after: `L7127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7127) · [Before (L5516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5516)

```diff
-             translationKey: "item:arrowOfInstantHealing"
+             translationKey: "item:ironSpikes"
```

#### 965. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5518-L5527` → after: `L7129-L7133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7129-L7133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7129-L7133) · [Before (L5518-L5527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5518-L5527)

```diff
-           type: "Item",
-           textureInfo: "heal_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
-         },
-         "Haste Potion": {
-           displayName: {
-             translationKey: "item:hastePotion"
+           ttb: 1200,
+           harvestType: "rock",
+           model: "CustomModel",
+           customModelInfo: {
+             yOffset: -2 / 16
```

#### 966. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5529-L5536` → after: `L7135-L7138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7135-L7138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7135-L7138) · [Before (L5529-L5536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5529-L5536)

```diff
-           type: "Chargeable",
-           textureInfo: "haste_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
+           itemTexture: "spikes_iron",
+           solid: !1,
+           modelScale: 10,
+           blockModel: "Spikes_Iron",
```

#### 967. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5538-L5542` → after: `L7140-L7141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7140-L7141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7140-L7141) · [Before (L5538-L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5538-L5542)

```diff
-             translationKey: "item:hastePotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Haste Potion|meta|charging1"
+             translationKey: "item:spikesDescription"
+           }
```

#### 968. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5544` → after: `L7143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7143) · [Before (L5544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5544)

```diff
-         "Haste Potion II": {
+         "Gold Spikes": {
```

#### 969. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5546` → after: `L7145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7145) · [Before (L5546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5546)

```diff
-             translationKey: "item:hastePotionII"
+             translationKey: "item:goldSpikes"
```

#### 970. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5548-L5558` → after: `L7147-L7151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7147-L7151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7147-L7151) · [Before (L5548-L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5548-L5558)

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
+           ttb: 1200,
+           harvestType: "rock",
+           model: "CustomModel",
+           customModelInfo: {
+             yOffset: -2 / 16
```

#### 971. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5560-L5562` → after: `L7153-L7159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7153-L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7153-L7159) · [Before (L5560-L5562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5560-L5562)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Haste Potion II|meta|charging1"
+           itemTexture: "spikes_gold",
+           solid: !1,
+           modelScale: 10,
+           blockModel: "Spikes_Gold",
+           description: {
+             translationKey: "item:spikesDescription"
+           }
```

#### 972. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5564` → after: `L7161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7161) · [Before (L5564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5564)

```diff
-         "Splash Haste Potion": {
+         "Diamond Spikes": {
```

#### 973. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5566` → after: `L7163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7163) · [Before (L5566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5566)

```diff
-             translationKey: "item:splashHastePotion"
+             translationKey: "item:diamondSpikes"
```

#### 974. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5568-L5572` → after: `L7165-L7174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7165-L7174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7165-L7174) · [Before (L5568-L5572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5568-L5572)

```diff
-           type: "Item",
-           textureInfo: "splash_haste_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           ttb: 1200,
+           harvestType: "rock",
+           model: "CustomModel",
+           customModelInfo: {
+             yOffset: -2 / 16
+           },
+           itemTexture: "spikes_diamond",
+           solid: !1,
+           modelScale: 10,
+           blockModel: "Spikes_Diamond",
```

#### 975. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5574` → after: `L7176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7176) · [Before (L5574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5574)

```diff
-             translationKey: "item:splashHastePotionDescription"
+             translationKey: "item:spikesDescription"
```

#### 976. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5577` → after: `L7179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7179) · [Before (L5577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5577)

```diff
-         "Splash Haste Potion II": {
+         "Kill Spikes": {
```

#### 977. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5579` → after: `L7181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7181) · [Before (L5579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5579)

```diff
-             translationKey: "item:splashHastePotionII"
+             translationKey: "item:killSpikes"
```

#### 978. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5581-L5586` → after: `L7183-L7192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7183-L7192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7183-L7192) · [Before (L5581-L5586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5581-L5586)

```diff
-           type: "Item",
-           textureInfo: "splash_haste_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Haste Potion",
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

#### 979. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5588` → after: `L7194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7194) · [Before (L5588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5588)

```diff
-             translationKey: "item:splashHastePotionDescription"
+             translationKey: "item:killSpikesDescription"
```

#### 980. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5591` → after: `L7197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7197) · [Before (L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5591)

```diff
-         "Arrow of Haste": {
+         "Corn Block": {
```

#### 981. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5593` → after: `L7199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7199) · [Before (L5593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5593)

```diff
-             translationKey: "item:arrowOfHaste"
+             translationKey: "item:cornBlock"
```

#### 982. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5595-L5600` → after: `L7201-L7204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7201-L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7201-L7204) · [Before (L5595-L5600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5595-L5600)

```diff
-           type: "Item",
-           textureInfo: "haste_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 600,
+           textureInfo: ["corn_block_side", "corn_block_top", "corn_block_bottom"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "wood"
```

#### 983. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5602` → after: `L7206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7206) · [Before (L5602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5602)

```diff
-         "Shield Potion": {
+         "Corn Seeds": {
```

#### 984. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5604` → after: `L7208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7208) · [Before (L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5604)

```diff
-             translationKey: "item:shieldPotion"
+             translationKey: "item:cornSeeds"
```

#### 985. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5606-L5613` → after: `L7210-L7215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7210-L7215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7210-L7215) · [Before (L5606-L5613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5606-L5613)

```diff
-           type: "Chargeable",
-           textureInfo: "shield_potion",
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

#### 986. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5615` → after: `L7217-L7258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7217-L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7217-L7258) · [Before (L5615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5615)

```diff
-             translationKey: "item:shieldPotionDescription"
+             translationKey: "item:cornSeedsDescription"
+           }
+         },
+         ...(0, aq.Eb)("Corn Seeds", {
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
+ ... (26 more added lines; see GitHub link above)
```

#### 987. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5617-L5619` → after: `L7260-L7736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7260-L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7260-L7736) · [Before (L5617-L5619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5617-L5619)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Shield Potion|meta|charging1"
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
+ ... (461 more added lines; see GitHub link above)
```

#### 988. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5621` → after: `L7738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7738) · [Before (L5621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5621)

```diff
-         "Shield Potion II": {
+         Lava: {
```

#### 989. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5623` → after: `L7740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7740) · [Before (L5623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5623)

```diff
-             translationKey: "item:shieldPotionII"
+             translationKey: "item:lava"
```

#### 990. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5625-L5635` → after: `L7742-L7745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7742-L7745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7742-L7745) · [Before (L5625-L5635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5625-L5635)

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
-           description: {
-             translationKey: "item:shieldPotionDescription"
+           textureInfo: {
+             colour: [.95, .4, .05, .95],
+             animTextures: ["lava0", "lava1", "lava2", "lava3", "lava4", "lava5", "lava6", "lava7"],
+             animationInterval: 800
```

#### 991. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5637-L5639` → after: `L7747-L7750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7747-L7750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7747-L7750) · [Before (L5637-L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5637-L5639)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Shield Potion II|meta|charging1"
+           wW: !0,
+           drops: null,
+           harvestType: "rock",
+           ma: [14, 8, 2]
```

#### 992. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5641` → after: `L7752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7752) · [Before (L5641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5641)

```diff
-         "Splash Shield Potion": {
+         "Fat Brown Mushroom": {
```

#### 993. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5643` → after: `L7754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7754) · [Before (L5643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5643)

```diff
-             translationKey: "item:splashShieldPotion"
+             translationKey: "item:fatBrownMushroom"
```

#### 994. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5645-L5649` → after: `L7756-L7763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7756-L7763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7756-L7763) · [Before (L5645-L5649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5645-L5649)

```diff
-           type: "Item",
-           textureInfo: "splash_shield_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           ttb: 1200,
+           itemTexture: "fatBrownMushroom",
+           harvestType: "cuttable",
+           blockModel: "Fat Brown Mushroom",
+           blockModelItem: !0,
+           model: "CustomModel",
+           modelScale: 10,
+           heldItemScale: 10,
```

#### 995. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5651` → after: `L7765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7765) · [Before (L5651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5651)

```diff
-             translationKey: "item:splashShieldPotionDescription"
+             translationKey: "item:fatMushroomDescription"
```

#### 996. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5654` → after: `L7768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7768) · [Before (L5654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5654)

```diff
-         "Splash Shield Potion II": {
+         "Fat Red Mushroom": {
```

#### 997. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5656` → after: `L7770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7770) · [Before (L5656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5656)

```diff
-             translationKey: "item:splashShieldPotionII"
+             translationKey: "item:fatRedMushroom"
```

#### 998. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5658-L5663` → after: `L7772-L7779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7772-L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7772-L7779) · [Before (L5658-L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5658-L5663)

```diff
-           type: "Item",
-           textureInfo: "splash_shield_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Shield Potion",
-           stackable: !1,
+           ttb: 1200,
+           itemTexture: "fatRedMushroom",
+           harvestType: "cuttable",
+           blockModel: "Fat Red Mushroom",
+           blockModelItem: !0,
+           model: "CustomModel",
+           modelScale: 10,
+           heldItemScale: 10,
```

#### 999. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5665` → after: `L7781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7781) · [Before (L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5665)

```diff
-             translationKey: "item:splashShieldPotionDescription"
+             translationKey: "item:fatMushroomDescription"
```

#### 1000. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5668` → after: `L7784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7784) · [Before (L5668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5668)

```diff
-         "Arrow of Shield": {
+         "Chili Pepper Block": {
```

#### 1001. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5670` → after: `L7786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7786) · [Before (L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5670)

```diff
-             translationKey: "item:arrowOfShield"
+             translationKey: "item:chiliPepperBlock"
```

#### 1002. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5672-L5677` → after: `L7788-L7791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7788-L7791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7788-L7791) · [Before (L5672-L5677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5672-L5677)

```diff
-           type: "Item",
-           textureInfo: "shield_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 600,
+           textureInfo: ["chili_pepper_block_side", "chili_pepper_block_top", "chili_pepper_block_bottom"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "wood"
```

#### 1003. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5679` → after: `L7793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7793) · [Before (L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5679)

```diff
-         "Double Jump Potion": {
+         "Chili Pepper Seeds": {
```

#### 1004. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5681-L5692` → after: `L7795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7795) · [Before (L5681-L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5681-L5692)

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
+             translationKey: "item:chiliPepperSeeds"
```

#### 1005. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5694-L5700` → after: `L7797-L7802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7797-L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7797-L7802) · [Before (L5694-L5700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5694-L5700)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Double Jump Potion|meta|charging1"
-         },
-         "Splash Double Jump Potion": {
-           displayName: {
-             translationKey: "item:splashDoubleJumpPotion"
+           ttb: 400,
+           itemTexture: "chili_pepper_seeds",
+           model: "CustomModel",
+           modelScale: 10,
+           customModelInfo: {
+             yOffset: -.4375
```

#### 1006. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5702-L5706` → after: `L7804-L7806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7804-L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7804-L7806) · [Before (L5702-L5706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5702-L5706)

```diff
-           type: "Item",
-           textureInfo: "splash_double_jump_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           harvestType: "cuttable",
+           solid: !1,
+           blockModel: "chili_pepper_stage0_model",
```

#### 1007. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5708` → after: `L7808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7808) · [Before (L5708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5708)

```diff
-             translationKey: "item:splashDoubleJumpPotionDescription"
+             translationKey: "item:chiliPepperSeedsDescription"
```

#### 1008. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5711` → after: `L7811-L7999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R7811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L7811-L7999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L7811-L7999) · [Before (L5711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5711)

```diff
-         "Arrow of Double Jump": {
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
+ ... (173 more added lines; see GitHub link above)
```

#### 1009. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5713` → after: `L8001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8001) · [Before (L5713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5713)

```diff
-             translationKey: "item:arrowOfDoubleJump"
+             translationKey: "item:toxinBallBlock"
```

#### 1010. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5715-L5720` → after: `L8003-L8006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8003-L8006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8003-L8006) · [Before (L5715-L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5715-L5720)

```diff
-           type: "Item",
-           textureInfo: "double_jump_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 1,
+           textureInfo: "toxin_ball_block",
+           harvestType: "rock",
+           unlitStandaloneMesh: !0
```

#### 1011. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5722` → after: `L8008-L8039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8008-L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8008-L8039) · [Before (L5722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5722)

```diff
-         "Heat Resistance Potion": {
+         ...(0, aq.P)((qq => `Spawn Block (${qq})`), {
+           displayName: qq => ({
+             translationKey: `item:${(0,cq.ue)(qq)}SpawnBlock`
+           }),
+           ttb: 1500,
+           textureInfo: qq => [`${(0,cq.we)(qq)}_spawn_block_top[rot[1`, `${(0,cq.we)(qq)}_spawn_block_top[rot[2`, `${(0,cq.we)(qq)}_spawn_block_top[rot[3`, `${(0,cq.we)(qq)}_spawn_block_top[rot[4`, `${(0,cq.we)(qq)}_spawn_block_side`],
+           texturePerSide: [4, 4, 2, 4, 4, 4],
+           harvestType: "rock",
+           rootMetaDesc: qq => `Spawn Block (${qq})|meta|rot1`,
+           description: {
+             translationKey: "item:spawnBlockDescription"
+           }
+         }),
+         ...(0, aq.P)((qq => `Spawn Block (${qq})|meta|rot2`), {
+           ttb: 1500,
+           textureInfo: qq => [`${(0,cq.we)(qq)}_spawn_block_top[rot[1`, `${(0,cq.we)(qq)}_spawn_block_top[rot[2`, `${(0,cq.we)(qq)}_spawn_block_top[rot[3`, `${(0,cq.we)(qq)}_spawn_block_top[rot[4`, `${(0,cq.we)(qq)}_spawn_block_side`],
+ ... (16 more added lines; see GitHub link above)
```

#### 1012. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5724` → after: `L8041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8041) · [Before (L5724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5724)

```diff
-             translationKey: "item:heatResistancePotion"
+             translationKey: "item:checkpointBlock"
```

#### 1013. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5726-L5733` → after: `L8043-L8046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8043-L8046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8043-L8046) · [Before (L5726-L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5726-L5733)

```diff
-           type: "Chargeable",
-           textureInfo: "heat_resistance_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
+           ttb: 1500,
+           textureInfo: ["checkpoint_block[rot[1", "checkpoint_block[rot[2", "checkpoint_block[rot[3", "checkpoint_block[rot[4"],
+           harvestType: "rock",
+           rootMetaDesc: "Checkpoint Block|meta|rot1",
```

#### 1014. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5735` → after: `L8048-L8087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8048-L8087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8048-L8087) · [Before (L5735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5735)

```diff
-             translationKey: "item:heatResistancePotionDescription"
+             translationKey: "item:checkpointBlockDescription"
+           }
+         }, [
+           [0, 0, 2, 0, 0, 0],
+           [0, 0, 3, 0, 0, 0],
+           [0, 0, 0, 0, 0, 0],
+           [0, 0, 1, 0, 0, 0]
+         ]),
+         ...(0, aq.Nb)("Custom Lobby Block", {
+           displayName: {
+             translationKey: "item:customLobbyBlock"
+           },
+           ttb: 1500,
+           textureInfo: ["custom_lobby_block_top[rot[1", "custom_lobby_block_top[rot[2", "custom_lobby_block_top[rot[3", "custom_lobby_block_top[rot[4", "custom_lobby_block_side"],
+           harvestType: "rock",
+           rootMetaDesc: "Custom Lobby Block|meta|rot1",
+ ... (24 more added lines; see GitHub link above)
```

#### 1015. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5737-L5739` → after: `L8089-L8129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8089-L8129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8089-L8129) · [Before (L5737-L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5737-L5739)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Heat Resistance Potion|meta|charging1"
+           ttb: 1500,
+           textureInfo: ["shop_trader_spawn_top[rot[1", "shop_trader_spawn_top[rot[2", "shop_trader_spawn_top[rot[3", "shop_trader_spawn_top[rot[4", "shop_trader_spawn_side", "shop_trader_spawn_face"],
+           harvestType: "rock",
+           rootMetaDesc: "Trader Shop Spawn Block|meta|rot1",
+           description: {
+             translationKey: "item:traderShopSpawnBlockDescription"
+           }
+         }, [
+           [5, 5, 2, 4, 4, 4],
+           [5, 5, 3, 4, 4, 4],
+           [5, 5, 0, 4, 4, 4],
+           [5, 5, 1, 4, 4, 4]
+         ]),
+         ...(0, aq.Nb)("Wizard Shop Spawn Block", {
+           displayName: {
+             translationKey: "item:wizardShopSpawnBlock"
+ ... (25 more added lines; see GitHub link above)
```

#### 1016. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5741` → after: `L8131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8131) · [Before (L5741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5741)

```diff
-         "Splash Heat Resistance Potion": {
+         "Generator Spawn Block (Moonstone)": {
```

#### 1017. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5743` → after: `L8133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8133) · [Before (L5743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5743)

```diff
-             translationKey: "item:splashHeatResistancePotion"
+             translationKey: "item:moonstoneGeneratorSpawnBlock"
```

#### 1018. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5745-L5749` → after: `L8135-L8138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8135-L8138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8135-L8138) · [Before (L5745-L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5745-L5749)

```diff
-           type: "Item",
-           textureInfo: "splash_heat_resistance_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           ttb: 1500,
+           textureInfo: ["moonstone_gen_spawn_top", "moonstone_gen_spawn_side"],
+           texturePerSide: [1, 1, 0, 0, 1, 1],
+           harvestType: "rock",
```

#### 1019. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5751` → after: `L8140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8140) · [Before (L5751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5751)

```diff
-             translationKey: "item:splashHeatResistancePotionDescription"
+             translationKey: "item:moonstoneGeneratorSpawnBlockDescription"
```

#### 1020. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5754` → after: `L8143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8143) · [Before (L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5754)

```diff
-         "Arrow of Heat Resistance": {
+         "Generator Spawn Block (Ore)": {
```

#### 1021. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5756` → after: `L8145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8145) · [Before (L5756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5756)

```diff
-             translationKey: "item:arrowOfHeatResistance"
+             translationKey: "item:oreGeneratorSpawnBlock"
```

#### 1022. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5758-L5763` → after: `L8147-L8153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8147-L8153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8147-L8153) · [Before (L5758-L5763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5758-L5763)

```diff
-           type: "Item",
-           textureInfo: "heat_resistance_arrow",
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

#### 1023. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5765` → after: `L8155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8155) · [Before (L5765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5765)

```diff
-         "X-Ray Vision Potion": {
+         "Goal Block (Red)": {
```

#### 1024. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5767` → after: `L8157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8157) · [Before (L5767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5767)

```diff
-             translationKey: "item:xRayVisionPotion"
+             translationKey: "item:redGoalBlock"
```

#### 1025. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5769-L5776` → after: `L8159-L8162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8159-L8162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8159-L8162) · [Before (L5769-L5776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5769-L5776)

```diff
-           type: "Chargeable",
-           textureInfo: "x_ray_vision_potion",
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

#### 1026. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5778-L5782` → after: `L8164-L8165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8164-L8165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8164-L8165) · [Before (L5778-L5782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5778-L5782)

```diff
-             translationKey: "item:xRayVisionPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "X-Ray Vision Potion|meta|charging1"
+             translationKey: "item:goalBlockDescription"
+           }
```

#### 1027. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5784` → after: `L8167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8167) · [Before (L5784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5784)

```diff
-         "Splash X-Ray Vision Potion": {
+         "Goal Block (Blue)": {
```

#### 1028. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5786` → after: `L8169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8169) · [Before (L5786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5786)

```diff
-             translationKey: "item:splashXRayVisionPotion"
+             translationKey: "item:blueGoalBlock"
```

#### 1029. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5788-L5792` → after: `L8171-L8174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8171-L8174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8171-L8174) · [Before (L5788-L5792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5788-L5792)

```diff
-           type: "Item",
-           textureInfo: "splash_x_ray_vision_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           ttb: 1500,
+           textureInfo: ["explosive_paint_blue_top", "blue_spawn_block_top[rot[3"],
+           texturePerSide: [1, 1, 0, 0, 1, 1],
+           harvestType: "rock",
```

#### 1030. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5794` → after: `L8176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8176) · [Before (L5794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5794)

```diff
-             translationKey: "item:splashXRayVisionPotionDescription"
+             translationKey: "item:goalBlockDescription"
```

#### 1031. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5797` → after: `L8179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8179) · [Before (L5797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5797)

```diff
-         "Arrow of X-Ray Vision": {
+         "Finish Block": {
```

#### 1032. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5799` → after: `L8181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8181) · [Before (L5799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5799)

```diff
-             translationKey: "item:arrowOfXRayVision"
+             translationKey: "item:finishBlock"
```

#### 1033. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5801-L5806` → after: `L8183-L8188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8183-L8188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8183-L8188) · [Before (L5801-L5806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5801-L5806)

```diff
-           type: "Item",
-           textureInfo: "x_ray_vision_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 1500,
+           textureInfo: "finish_block",
+           harvestType: "rock",
+           description: {
+             translationKey: "item:finishBlockDescription"
+           }
```

#### 1034. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5808` → after: `L8190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8190) · [Before (L5808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5808)

```diff
-         "Mining Yield Potion": {
+         "Drop Location Block": {
```

#### 1035. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5810` → after: `L8192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8192) · [Before (L5810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5810)

```diff
-             translationKey: "item:miningYieldPotion"
+             translationKey: "item:dropLocationBlock"
```

#### 1036. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5812-L5819` → after: `L8194-L8197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8194-L8197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8194-L8197) · [Before (L5812-L5819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5812-L5819)

```diff
-           type: "Chargeable",
-           textureInfo: "mining_yield_potion",
-           weight: 1,
-           heldItemScale: 1,
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
+           ttb: 1500,
+           textureInfo: ["drop_location_block_top", "drop_location_block_side"],
+           texturePerSide: [1, 1, 0, 0, 1, 1],
+           harvestType: "rock",
```

#### 1037. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5821-L5825` → after: `L8199-L8200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8199-L8200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8199-L8200) · [Before (L5821-L5825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5821-L5825)

```diff
-             translationKey: "item:miningYieldPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Mining Yield Potion|meta|charging1"
+             translationKey: "item:dropLocationBlockDescription"
+           }
```

#### 1038. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5827` → after: `L8202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8202) · [Before (L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5827)

```diff
-         "Mining Yield Potion II": {
+         "Obby Death Block": {
```

#### 1039. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5829` → after: `L8204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8204) · [Before (L5829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5829)

```diff
-             translationKey: "item:miningYieldPotionII"
+             translationKey: "item:obbyDeathBlock"
```

#### 1040. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5831-L5839` → after: `L8206-L8208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8206-L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8206-L8208) · [Before (L5831-L5839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5831-L5839)

```diff
-           type: "Chargeable",
-           textureInfo: "mining_yield_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Mining Yield Potion",
-           eatable: !0,
-           chargeSound: "drink",
-           afterEatenItem: "Empty Bottle",
-           stackable: !1,
+           ttb: 1500,
+           textureInfo: "obby_death_block",
+           harvestType: "rock",
```

#### 1041. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5841-L5845` → after: `L8210-L8211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8210-L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8210-L8211) · [Before (L5841-L5845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5841-L5845)

```diff
-             translationKey: "item:miningYieldPotionDescription"
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Mining Yield Potion II|meta|charging1"
+             translationKey: "item:obbyDeathBlockDescription"
+           }
```

#### 1042. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5847` → after: `L8213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8213) · [Before (L5847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5847)

```diff
-         "Splash Mining Yield Potion": {
+         "Obby Absorb Block": {
```

#### 1043. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5849` → after: `L8215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8215) · [Before (L5849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5849)

```diff
-             translationKey: "item:splashMiningYieldPotion"
+             translationKey: "item:obbyAbsorbBlock"
```

#### 1044. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5851-L5855` → after: `L8217-L8219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8217-L8219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8217-L8219) · [Before (L5851-L5855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5851-L5855)

```diff
-           type: "Item",
-           textureInfo: "splash_mining_yield_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           ttb: 1500,
+           textureInfo: "obby_absorb_block",
+           harvestType: "rock",
```

#### 1045. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5857` → after: `L8221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8221) · [Before (L5857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5857)

```diff
-             translationKey: "item:splashMiningYieldPotionDescription"
+             translationKey: "item:obbyAbsorbBlockDescription"
```

#### 1046. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5860` → after: `L8224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8224) · [Before (L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5860)

```diff
-         "Splash Mining Yield Potion II": {
+         "Obby Absorb Death Block": {
```

#### 1047. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5862` → after: `L8226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8226) · [Before (L5862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5862)

```diff
-             translationKey: "item:splashMiningYieldPotionII"
+             translationKey: "item:obbyAbsorbDeathBlock"
```

#### 1048. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5864-L5869` → after: `L8228-L8230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8228-L8230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8228-L8230) · [Before (L5864-L5869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5864-L5869)

```diff
-           type: "Item",
-           textureInfo: "splash_mining_yield_potion",
-           weight: 1,
-           heldItemScale: 1,
-           heldItemGlb: "Splash Mining Yield Potion",
-           stackable: !1,
+           ttb: 1500,
+           textureInfo: "obby_absorb_death_block",
+           harvestType: "rock",
```

#### 1049. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5871` → after: `L8232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8232) · [Before (L5871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5871)

```diff
-             translationKey: "item:splashMiningYieldPotionDescription"
+             translationKey: "item:obbyAbsorbDeathBlockDescription"
```

#### 1050. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5874` → after: `L8235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8235) · [Before (L5874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5874)

```diff
-         "Arrow of Mining Yield": {
+         "Bone Block": {
```

#### 1051. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5876` → after: `L8237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8237) · [Before (L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5876)

```diff
-             translationKey: "item:arrowOfMiningYield"
+             translationKey: "item:boneBlock"
```

#### 1052. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5878-L5883` → after: `L8239-L8242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8239-L8242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8239-L8242) · [Before (L5878-L5883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5878-L5883)

```diff
-           type: "Item",
-           textureInfo: "mining_yield_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 960,
+           textureInfo: ["bone_block_side", "bone_block_top"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           harvestType: "rock"
```

#### 1053. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5885` → after: `L8244-L8250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8244-L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8244-L8250) · [Before (L5885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5885)

```diff
-         "Brain Rot Potion": {
+         ...(0, aq.yb)("Pig"),
+         ...(0, aq.yb)("Cow"),
+         ...(0, aq.yb)("Sheep"),
+         ...(0, aq.yb)("Cave Golem"),
+         ...(0, aq.yb)("Draugr Zombie"),
+         ...(0, aq.yb)("Draugr Skeleton"),
+         "Empty Spawner Block": {
```

#### 1054. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5887` → after: `L8252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8252) · [Before (L5887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5887)

```diff
-             translationKey: "item:brainRotPotion"
+             translationKey: "item:emptyMobSpawnerBlock"
```

#### 1055. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5898` → after: `L8255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8255) · [Before (L5898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5898)

```diff
-             translationKey: "item:brainRotPotionDescription"
+             translationKey: "item:emptyMobSpawnerBlockDescription"
```

#### 1056. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5900-L5902` → after: `L8257-L8269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8257-L8269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8257-L8269) · [Before (L5900-L5902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5900-L5902)

```diff
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Brain Rot Potion|meta|charging1"
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
+           },
+           particlesIgnoreBlack: !0,
+           twoDBlockItem: !0
```

#### 1057. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5904` → after: `L8271-L8274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8271-L8274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8271-L8274) · [Before (L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5904)

```diff
-         "Splash Brain Rot Potion": {
+         ...(0, aq.yb)("Frost Golem"),
+         ...(0, aq.yb)("Frost Zombie"),
+         ...(0, aq.yb)("Frost Skeleton"),
+         "Snowy Messy Stone": {
```

#### 1058. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5906` → after: `L8276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8276) · [Before (L5906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5906)

```diff
-             translationKey: "item:splashBrainRotPotion"
+             translationKey: "item:snowyMessyStone"
```

#### 1059. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5908-L5914` → after: `L8278-L8304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8278-L8304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8278-L8304) · [Before (L5908-L5914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5908-L5914)

```diff
-           type: "Item",
-           textureInfo: "splash_brain_rot_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashBrainRotPotionDescription"
+           ttb: 1800,
+           textureInfo: "snowy_messy_stone",
+           harvestType: "rock"
+         },
+         ...(0, aq.Ob)("Snowy Stone Slab", {
+           displayName: {
+             translationKey: "item:snowyStoneSlab"
+           },
+           ttb: 1200,
+           textureInfo: ["snowy_messy_stone_side", "snowy_messy_stone"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           model: "Slab",
+           harvestType: "rock",
+           slabFullBlock: "Snowy Messy Stone",
+           rootMetaDesc: "Snowy Stone Slab|meta|rot1|bot"
+         }),
+ ... (11 more added lines; see GitHub link above)
```

#### 1060. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5917` → after: `L8307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8307) · [Before (L5917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5917)

```diff
-         "Arrow of Brain Rot": {
+         "Carved Messy Stone": {
```

#### 1061. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5919` → after: `L8309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8309) · [Before (L5919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5919)

```diff
-             translationKey: "item:arrowOfBrainRot"
+             translationKey: "item:carvedMessyStone"
```

#### 1062. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5921-L5926` → after: `L8311-L8313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8311-L8313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8311-L8313) · [Before (L5921-L5926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5921-L5926)

```diff
-           type: "Item",
-           textureInfo: "brain_rot_arrow",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           secondaryDamage: 1
+           ttb: 1800,
+           textureInfo: "carved_messy_stone",
+           harvestType: "rock"
```

#### 1063. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5928` → after: `L8315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8315) · [Before (L5928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5928)

```diff
-         "Chaos Potion": {
+         "Spectral Grass": {
```

#### 1064. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5930` → after: `L8317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8317) · [Before (L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5930)

```diff
-             translationKey: "item:chaosPotion"
+             translationKey: "item:spectralGrass"
```

#### 1065. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5932-L5941` → after: `L8319-L8327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8319-L8327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8319-L8327) · [Before (L5932-L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5932-L5941)

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

#### 1066. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5943-L5945` → after: `L8329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8329) · [Before (L5943-L5945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5943-L5945)

```diff
-           chargeStages: 1,
-           chargeTime: 600,
-           rootMetaDesc: "Chaos Potion|meta|charging1"
+           canBePlacedOver: !0
```

#### 1067. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5947` → after: `L8331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8331) · [Before (L5947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5947)

```diff
-         "Teleportation Potion": {
+         "Spectral Log": {
```

#### 1068. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5949` → after: `L8333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8333) · [Before (L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5949)

```diff
-             translationKey: "item:teleportationPotion"
+             translationKey: "item:spectralLog"
```

#### 1069. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5951-L5964` → after: `L8335-L8337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8335-L8337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8335-L8337) · [Before (L5951-L5964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5951-L5964)

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
-           },
-           chargeStages: 1,
-           chargeTime: 600,
-           rootMetaDesc: "Teleportation Potion|meta|charging1"
+           ttb: 2400,
+           textureInfo: "log_spectral",
+           harvestType: "wood"
```

#### 1070. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5966` → after: `L8339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8339) · [Before (L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5966)

```diff
-         Ammo: {
+         "Barkless Spectral Log": {
```

#### 1071. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5968` → after: `L8341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8341) · [Before (L5968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5968)

```diff
-             translationKey: "item:ammo"
+             translationKey: "item:barklessSpectralLog"
```

#### 1072. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5970-L5974` → after: `L8343-L8345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8343-L8345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8343-L8345) · [Before (L5970-L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5970-L5974)

```diff
-           type: "Item",
-           textureInfo: "ammo",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 2e3,
+           textureInfo: "stripped_spectral_log",
+           harvestType: "wood"
```

#### 1073. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L5976-L6033` → after: `L8347-L8353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8347-L8353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8347-L8353) · [Before (L5976-L6033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L5976-L6033)

```diff
-         ...Rz("AK-47", {
-           heldItemScale: 2
-         }),
-         ...Rz("M16", {
-           heldItemScale: 2
-         }),
-         ...Rz("MP40", {
-           heldItemScale: 2.5
-         }),
-         ...Rz("TAR-21", {
-           heldItemScale: 2.5
-         }),
-         ...Rz("M1911", {
-           heldItemScale: 2
-         }),
-         ...Rz("One Shot Pistol", {
- ... (42 more removed lines; see GitHub link above)
+         "Barkless Spectral Log|TreeBase|Spectral": {
+           ttb: 2e3,
+           textureInfo: "stripped_spectral_log",
+           harvestType: "wood",
+           drops: "Barkless Spectral Log"
+         },
+         "Spectral Wood Planks": {
```

#### 1074. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6035` → after: `L8355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8355) · [Before (L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6035)

```diff
-             translationKey: "item:goldCoin"
+             translationKey: "item:spectralWoodPlanks"
```

#### 1075. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6037-L6041` → after: `L8357-L8359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8357-L8359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8357-L8359) · [Before (L6037-L6041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6037-L6041)

```diff
-           type: "Item",
-           textureInfo: "gold_coin",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
+           ttb: 1800,
+           textureInfo: "planks_spectral",
+           harvestType: "wood"
```

#### 1076. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6043` → after: `L8361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8361) · [Before (L6043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6043)

```diff
-         Updraft: {
+         "Spectral Leaves": {
```

#### 1077. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6045` → after: `L8363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8363) · [Before (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6045)

```diff
-             translationKey: "item:updraft"
+             translationKey: "item:spectralLeaves"
```

#### 1078. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6047-L6053` → after: `L8365-L8371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8365-L8371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8365-L8371) · [Before (L6047-L6053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6047-L6053)

```diff
-           type: "FullAuto",
-           textureInfo: "updraft",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:updraftDescription"
+           ttb: 350,
+           textureInfo: "leaves_spectral",
+           harvestType: "cuttable"
+         },
+         "Spectral Door": {
+           displayName: {
+             translationKey: "item:spectralDoor"
```

#### 1079. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6055` → after: `L8373-L8417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8373-L8417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8373-L8417) · [Before (L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6055)

```diff
-           fireInterval: 515
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
+ ... (29 more added lines; see GitHub link above)
```

#### 1080. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6057` → after: `L8419-L8534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8419-L8534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8419-L8534) · [Before (L6057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6057)

```diff
-         Snowdash: {
+         "_Spectral Door Top|meta|rot1|open": {
+           ttb: 3600,
+           harvestType: "wood",
+           drops: "Spectral Door"
+         },
+         "_Spectral Door Top|meta|rot2|closed": {
+           ttb: 3600,
+           harvestType: "wood",
+           drops: "Spectral Door"
+         },
+         "_Spectral Door Top|meta|rot2|open": {
+           ttb: 3600,
+           harvestType: "wood",
+           drops: "Spectral Door"
+         },
+         "_Spectral Door Top|meta|rot3|closed": {
+ ... (100 more added lines; see GitHub link above)
```

#### 1081. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6059` → after: `L8536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8536) · [Before (L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6059)

```diff
-             translationKey: "item:snowdash"
+             translationKey: "item:spectralLadder"
```

#### 1082. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6061-L6063` → after: `L8538-L8545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8538-L8545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8538-L8545) · [Before (L6061-L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6061-L6063)

```diff
-           type: "FullAuto",
-           textureInfo: "snowdash",
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

#### 1083. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6065` → after: `L8547-L8559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8547-L8559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8547-L8559) · [Before (L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6065)

```diff
-           stackable: !0,
+           blockModelItem: !0
+         }),
+         ...(0, aq.Lb)("Wood Enchanting Table", {
+           displayName: {
+             translationKey: "item:woodEnchantingTable"
+           },
+           ttb: 800,
+           harvestType: "wood",
+           model: "rotatable",
+           itemTexture: "wood_enchanting_table",
+           rootMetaDesc: "Wood Enchanting Table|meta|rot1",
+           modelScale: 10,
+           blockModel: "Wood Enchanting Table",
```

#### 1084. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6067` → after: `L8561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8561) · [Before (L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6067)

```diff
-             translationKey: "item:snowdashDescription"
+             translationKey: "item:enchantingTableDescription"
```

#### 1085. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6069-L6071` → after: `L8563-L8565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8563-L8565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8563-L8565) · [Before (L6069-L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6069-L6071)

```diff
-           fireInterval: 515
-         },
-         "Floor Creator": {
+           ma: [2, 0, 2]
+         }),
+         ...(0, aq.Lb)("Stone Enchanting Table", {
```

#### 1086. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6073` → after: `L8567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8567) · [Before (L6073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6073)

```diff
-             translationKey: "item:floorCreator"
+             translationKey: "item:stoneEnchantingTable"
```

#### 1087. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6075-L6079` → after: `L8569-L8575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8569-L8575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8569-L8575) · [Before (L6075-L6079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6075-L6079)

```diff
-           type: "Item",
-           textureInfo: "floor_creator",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
+           ttb: 1e3,
+           harvestType: "wood",
+           model: "rotatable",
+           itemTexture: "stone_enchanting_table",
+           rootMetaDesc: "Stone Enchanting Table|meta|rot1",
+           modelScale: 10,
+           blockModel: "Stone Enchanting Table",
```

#### 1088. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6081-L6084` → after: `L8577-L8581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8577-L8581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8577-L8581) · [Before (L6081-L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6081-L6084)

```diff
-             translationKey: "item:floorCreatorDescription"
-           }
-         },
-         "Moonstone Remote Explosive": {
+             translationKey: "item:enchantingTableDescription"
+           },
+           ma: [4, 0, 4]
+         }),
+         ...(0, aq.Lb)("Iron Enchanting Table", {
```

#### 1089. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6086` → after: `L8583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8583) · [Before (L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6086)

```diff
-             translationKey: "item:moonstoneRemoteExplosive"
+             translationKey: "item:ironEnchantingTable"
```

#### 1090. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6088-L6092` → after: `L8585-L8591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8585-L8591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8585-L8591) · [Before (L6088-L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6088-L6092)

```diff
-           type: "Item",
-           textureInfo: "moonstone_remote_explosive",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+           ttb: 1200,
+           harvestType: "wood",
+           model: "rotatable",
+           itemTexture: "iron_enchanting_table",
+           rootMetaDesc: "Iron Enchanting Table|meta|rot1",
+           modelScale: 10,
+           blockModel: "Iron Enchanting Table",
```

#### 1091. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6094` → after: `L8593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8593) · [Before (L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6094)

```diff
-             translationKey: "item:moonstoneRemoteExplosiveDescription"
+             translationKey: "item:enchantingTableDescription"
```

#### 1092. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6096-L6098` → after: `L8595-L8597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8595-L8597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8595-L8597) · [Before (L6096-L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6096-L6098)

```diff
-           heldItemGlb: "Moonstone Remote"
-         },
-         "Moonstone Remote": {
+           ma: [6, 0, 6]
+         }),
+         ...(0, aq.Lb)("Gold Enchanting Table", {
```

#### 1093. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6100` → after: `L8599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8599) · [Before (L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6100)

```diff
-             translationKey: "item:moonstoneRemote"
+             translationKey: "item:goldEnchantingTable"
```

#### 1094. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6102-L6106` → after: `L8601-L8623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8601-L8623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8601-L8623) · [Before (L6102-L6106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6102-L6106)

```diff
-           type: "Item",
-           textureInfo: "moonstone_remote",
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
+           description: {
+             translationKey: "item:enchantingTableDescription"
+           },
+           ma: [8, 0, 8]
+         }),
+         ...(0, aq.Lb)("Diamond Enchanting Table", {
+           displayName: {
+             translationKey: "item:diamondEnchantingTable"
+           },
+ ... (7 more added lines; see GitHub link above)
```

#### 1095. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6108` → after: `L8625-L8639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8625-L8639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8625-L8639) · [Before (L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6108)

```diff
-             translationKey: "item:moonstoneRemoteDescription"
+             translationKey: "item:enchantingTableDescription"
+           },
+           ma: [10, 0, 10]
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

#### 1096. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6111` → after: `L8642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8642) · [Before (L6111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6111)

```diff
-         "Ice Bridge": {
+         ...(0, aq.Ob)("Pine Grass Slab", {
```

#### 1097. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6113` → after: `L8644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8644) · [Before (L6113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6113)

```diff
-             translationKey: "item:iceBridge"
+             translationKey: "item:pineGrassSlab"
```

#### 1098. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6115-L6121` → after: `L8646-L8666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8646-L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8646-L8666) · [Before (L6115-L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6115-L6121)

```diff
-           type: "Item",
-           textureInfo: "ice_bridge",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:iceBridgeDescription"
+           ttb: 1200,
+           textureInfo: ["slab_pine_grass_top_side", "pine_grass_block"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           model: "Slab",
+           harvestType: "granule",
+           slabFullBlock: "Pine Grass Block",
+           rootMetaDesc: "Pine Grass Slab|meta|rot1|bot"
+         }),
+         "Pine Grass": {
+           displayName: {
+             translationKey: "item:pineGrass"
+           },
+           ttb: 1,
+           textureInfo: "pine_grass",
+           model: "CentreCross",
+           solid: !1,
+ ... (5 more added lines; see GitHub link above)
```

#### 1099. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6123` → after: `L8668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8668) · [Before (L6123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6123)

```diff
-           bridgeLength: fz
+           canBePlacedOver: !0
```

#### 1100. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6125` → after: `L8670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8670) · [Before (L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6125)

```diff
-         "Maple Planks Bridge": {
+         "Pine Fern": {
```

#### 1101. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6127` → after: `L8672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8672) · [Before (L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6127)

```diff
-             translationKey: "item:maplePlanksBridge"
+             translationKey: "item:pineFern"
```

#### 1102. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6129-L6135` → after: `L8674-L8682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8674-L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8674-L8682) · [Before (L6129-L6135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6129-L6135)

```diff
-           type: "Item",
-           textureInfo: "maple_planks_bridge",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:maplePlanksBridgeDescription"
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

#### 1103. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6137` → after: `L8684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8684) · [Before (L6137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6137)

```diff
-           bridgeLength: fz
+           canBePlacedOver: !0
```

#### 1104. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6139` → after: `L8686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8686) · [Before (L6139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6139)

```diff
-         "Messy Stone Bridge": {
+         "Fallen Pine Cone": {
```

#### 1105. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6141` → after: `L8688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8688) · [Before (L6141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6141)

```diff
-             translationKey: "item:messyStoneBridge"
+             translationKey: "item:fallenPineCone"
```

#### 1106. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6143-L6149` → after: `L8690-L8698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8690-L8698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8690-L8698) · [Before (L6143-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6143-L6149)

```diff
-           type: "Item",
-           textureInfo: "messy_stone_bridge",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:messyStoneBridgeDescription"
+           ttb: 1,
+           textureInfo: "fallen_pine_cone",
+           model: "CentreCross",
+           solid: !1,
+           harvestType: "cuttable"
+         },
+         "Pine Cone Block": {
+           displayName: {
+             translationKey: "item:pineConeBlock"
```

#### 1107. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6151` → after: `L8700-L8703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8700-L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8700-L8703) · [Before (L6151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6151)

```diff
-           bridgeLength: fz
+           ttb: 600,
+           textureInfo: ["pine_cone_block_side", "pine_cone_block_top"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           harvestType: "wood"
```

#### 1108. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6153-L6183` → after: `L8705-L8712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8705-L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8705-L8712) · [Before (L6153-L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6153-L6183)

```diff
-         ...(0, Mz.M)((zz => `${zz} Balloon`), {
-           displayName: zz => ({
-             translationKey: `item:${(0,Ez.ze)(zz)}Balloon`
-           }),
-           textureInfo: zz => `${(0,Ez.Ae)(zz)}_balloon`,
-           heldItemGlb: zz => `${zz} Balloon Item`,
-           type: "Item",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:balloonDescription"
-           }
-         }),
-         ...(0, Mz.M)((zz => `INTERNAL_MESH_${zz} Balloon`), {
-           textureInfo: zz => `${(0,Ez.Ae)(zz)}_balloon`,
- ... (15 more removed lines; see GitHub link above)
+         ...(0, aq.yb)("Wolf"),
+         ...(0, aq.yb)("Bear"),
+         ...(0, aq.yb)("Deer"),
+         ...(0, aq.yb)("Stag"),
+         ...(0, aq.Lb)("Bone Antlers", {
+           displayName: {
+             translationKey: "item:boneAntlers"
+           },
```

#### 1109. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6185-L6186` → after: `L8714-L8724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8714-L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8714-L8724) · [Before (L6185-L6186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6185-L6186)

```diff
-             translationKey: "item:popupTowerDescription"
-           }
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
```

#### 1110. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6188-L6196` → after: `L8726-L8729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8726-L8729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8726-L8729) · [Before (L6188-L6196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6188-L6196)

```diff
-         ...(0, Mz.M)((zz => `${zz} Paintball Gun`), {
-           displayName: zz => ({
-             translationKey: `item:${(0,Ez.ze)(zz)}PaintballGun`
-           }),
-           textureInfo: zz => `${(0,Ez.Ae)(zz)}_paintball_gun`,
-           type: "FullAuto",
-           weight: 1,
-           heldItemScale: .5,
-           stackable: !1,
+         ...(0, aq.Lb)("Gold Antlers", {
+           displayName: {
+             translationKey: "item:goldAntlers"
+           },
```

#### 1111. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6198` → after: `L8731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8731) · [Before (L6198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6198)

```diff
-             translationKey: "item:paintballGunDescription"
+             translationKey: "item:antlersDescription"
```

#### 1112. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6200-L6203` → after: `L8733-L8742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8733-L8742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8733-L8742) · [Before (L6200-L6203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6200-L6203)

```diff
-           fireInterval: 167,
-           secondaryDamage: 100,
-           holdAsAiming: !0,
-           hideAimingUI: !0
+           ttb: 1500,
+           itemTexture: "gold_antlers_icon",
+           model: "rotatableOffset",
+           harvestType: "rock",
+           rootMetaDesc: "Gold Antlers|meta|rot1",
+           solid: !1,
+           blockModel: "gold_antlers_model",
+           modelScale: 10,
+           particlesIgnoreBlack: !0,
+           ma: [7, 7, 2]
```

#### 1113. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6205-L6213` → after: `L8744-L8751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8744-L8751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8744-L8751) · [Before (L6205-L6213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6205-L6213)

```diff
-         ...(0, Mz.M)((zz => `${zz} Paintball`), {
-           displayName: zz => ({
-             translationKey: `item:${(0,Ez.ze)(zz)}Paintball`
-           }),
-           textureInfo: zz => `${(0,Ez.Ae)(zz)}_paintball`,
-           type: "Item",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+         ...(0, aq.yb)("Gold Watermelon Stag"),
+         ...(0, aq.Lb)("Salvaging Table", {
+           displayName: {
+             translationKey: "item:salvagingTable"
+           },
+           ttb: 1200,
+           harvestType: "wood",
+           rootMetaDesc: "Salvaging Table|meta|rot1",
```

#### 1114. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6215-L6216` → after: `L8753-L8755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8753-L8755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8753-L8755) · [Before (L6215-L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6215-L6216)

```diff
-             translationKey: "item:paintballDescription"
-           }
+             translationKey: "item:salvagingTableDescription"
+           },
+           ...Pq("Salvaging Table", "salvaging_table")
```

#### 1115. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6218-L6226` → after: `L8757-L8760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8757-L8760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8757-L8760) · [Before (L6218-L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6218-L6226)

```diff
-         ...(0, Mz.M)((zz => `${zz} Heavy Paintball Gun`), {
-           displayName: zz => ({
-             translationKey: `item:${(0,Ez.ze)(zz)}HeavyPaintballGun`
-           }),
-           textureInfo: zz => `${(0,Ez.Ae)(zz)}_heavy_paintball_gun`,
-           type: "FullAuto",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
+         Chalk: {
+           displayName: {
+             translationKey: "item:chalk"
+           },
```

#### 1116. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6228` → after: `L8762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8762) · [Before (L6228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6228)

```diff
-             translationKey: "item:paintballGunDescription"
+             translationKey: "item:chalkDescription"
```

#### 1117. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6230-L6235` → after: `L8764-L8768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8764-L8768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8764-L8768) · [Before (L6230-L6235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6230-L6235)

```diff
-           fireInterval: 1015,
-           secondaryDamage: 250,
-           holdAsAiming: !0,
-           hideAimingUI: !0
-         }),
-         ...(0, Mz.M)((zz => `${zz} Paintball Explosive Item`), {
+           ttb: 850,
+           textureInfo: "chalk",
+           harvestType: "rock"
+         },
+         ...(0, aq.P)((qq => `${qq} Chalk`), {
```

#### 1118. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6237` → after: `L8770-L8773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8770-L8773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8770-L8773) · [Before (L6237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6237)

```diff
-             translationKey: `item:${(0,Ez.ze)(zz)}PaintballExplosive`
+             translationKey: "item:colouredChalk",
+             params: {
+               colour: `$t(colour:${(0,cq.we)(qq)})`
+             }
```

#### 1119. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6239-L6250` → after: `L8775-L8779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8775-L8779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8775-L8779) · [Before (L6239-L6250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6239-L6250)

```diff
-           textureInfo: zz => `explosive_paint_${(0,Ez.Ae)(zz)}`,
-           type: "Item",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:paintballExplosiveDescription"
-           }
-         }),
-         ...(0, Mz.M)((zz => `${zz} Sticky Paintball Explosive Item`), {
-           displayName: zz => ({
-             translationKey: `item:${(0,Ez.ze)(zz)}StickyPaintballExplosive`
+           description: qq => ({
+             translationKey: "item:colouredChalkDescription",
+             params: {
+               colour: `$t(colour:${(0,cq.we)(qq)})`
+             }
```

#### 1120. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6252-L6259` → after: `L8781-L8783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8781-L8783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8781-L8783) · [Before (L6252-L6259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6252-L6259)

```diff
-           textureInfo: zz => `explosive_paint_sticky_${(0,Ez.Ae)(zz)}`,
-           type: "Item",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:stickyPaintballExplosiveDescription"
-           }
+           ttb: 850,
+           textureInfo: qq => `chalk_${(0,cq.we)(qq)}`,
+           harvestType: "rock"
```

#### 1121. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6261` → after: `L8785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8785) · [Before (L6261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6261)

```diff
-         ...(0, Mz.M)((zz => `${zz} Seeking Paintball Explosive Item`), {
+         ...(0, aq.P)((qq => `${qq} Chalk Bricks`), {
```

#### 1122. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6263` → after: `L8787-L8790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8787-L8790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8787-L8790) · [Before (L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6263)

```diff
-             translationKey: `item:${(0,Ez.ze)(zz)}SeekingPaintballExplosive`
+             translationKey: "item:colouredChalkBricks",
+             params: {
+               colour: `$t(colour:${(0,cq.we)(qq)})`
+             }
```

#### 1123. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6265-L6276` → after: `L8792-L8796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8792-L8796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8792-L8796) · [Before (L6265-L6276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6265-L6276)

```diff
-           textureInfo: zz => `explosive_paint_seeking_${(0,Ez.Ae)(zz)}`,
-           type: "Item",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:seekingPaintballExplosiveDescription"
-           }
-         }),
-         ...(0, Mz.M)((zz => `${zz} Quick Paintball Explosive Item`), {
-           displayName: zz => ({
-             translationKey: `item:${(0,Ez.ze)(zz)}QuickPaintballExplosive`
+           description: qq => ({
+             translationKey: "item:colouredChalkBricksDescription",
+             params: {
+               colour: `$t(colour:${(0,cq.we)(qq)})`
+             }
```

#### 1124. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6278-L6285` → after: `L8798-L8800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8798-L8800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8798-L8800) · [Before (L6278-L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6278-L6285)

```diff
-           textureInfo: zz => `explosive_paint_quick_${(0,Ez.Ae)(zz)}`,
-           type: "Item",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:quickPaintballExplosiveDescription"
-           }
+           ttb: 850,
+           textureInfo: qq => `chalk_bricks_${(0,cq.we)(qq)}`,
+           harvestType: "rock"
```

#### 1125. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6287-L6308` → after: `L8802-L8804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8802-L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8802-L8804) · [Before (L6287-L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6287-L6308)

```diff
-         ... function(zz, uz) {
-           const bz = {},
-             Ez = (0, Mz.M)(zz, uz);
-           for (const nz in Ez) Object.assign(bz, Oz(nz, Ez[nz]));
-           return bz
-         }((zz => `${zz} Paint Bow`), {
-           displayName: zz => ({
-             translationKey: `item:${(0,Ez.ze)(zz)}PaintBow`
-           }),
-           textureName: zz => `${(0,Ez.Ae)(zz)}_paint_bow`,
-           rootMetaDesc: zz => `${zz} Paint Bow|meta|charging1`,
-           type: "Chargeable",
-           weight: 1,
-           heldItemScale: 1.25,
-           stackable: !1,
-           chargeStages: 4,
- ... (6 more removed lines; see GitHub link above)
+         ...(0, aq.U)("$colour$ Chalk Slab", "$colour$ Chalk", "chalk_$colour$", "item:colouredChalkSlab", "item:colouredChalkSlabDescription", {
+           ttb: 550,
+           harvestType: "rock"
```

#### 1126. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6310-L6330` → after: `L8806-L8834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8806-L8834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8806-L8834) · [Before (L6310-L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6310-L6330)

```diff
-         ...Object.fromEntries(tz.u.map((zz => {
-           const uz = (0, Ez.ze)(zz),
-             bz = (0, Ez.Ae)(zz);
-           return [(0, Ez.Yb)(zz), {
-             displayName: {
-               translationKey: `item:${uz}SpawnOrb`
-             },
-             type: "Item",
-             textureInfo: `${bz}_spawn_orb`,
-             weight: 1,
-             heldItemScale: 1,
-             stackable: !0,
-             description: {
-               translationKey: `item:${uz}SpawnOrbDescription`,
-               params: {
-                 mob: zz
- ... (5 more removed lines; see GitHub link above)
+         ...(0, aq.U)("$colour$ Chalk Bricks Slab", "$colour$ Chalk Bricks", ["chalk_bricks_slab_side_$colour$", "chalk_bricks_$colour$"], "item:colouredChalkBricksSlab", "item:colouredChalkBricksSlabDescription", {
+           ttb: 550,
+           harvestType: "rock"
+         }),
+         ...(0, aq.Lb)("Leaf Bed", {
+           displayName: {
+             translationKey: "item:leafBed"
+           },
+           ttb: 240,
+           itemTexture: "leaf_bed",
+           model: "rotatable",
+           harvestType: "wood",
+           rootMetaDesc: "Leaf Bed|meta|rot1",
+           particlesIgnoreBlack: !0,
+           modelScale: 5,
+           blockModel: "Leaf Bed"
+ ... (13 more added lines; see GitHub link above)
```

#### 1127. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6332` → after: `L8836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8836) · [Before (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6332)

```diff
-             translationKey: "item:mobCatcher"
+             translationKey: "item:jungleGrassBlock"
```

#### 1128. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6334-L6361` → after: `L8838-L8847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8838-L8847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8838-L8847) · [Before (L6334-L6361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6334-L6361)

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
-         ...Object.fromEntries(tz.n.flatMap((zz => {
-           const uz = (0, Ez.Ae)(zz);
-           return tz.o[zz].map((bz => {
-             var nz;
-             const iz = "default" !== bz && (null === (nz = Zz[zz]) || void 0 === nz ? void 0 : nz.includes(bz)),
-               lz = iz ? {
-                 heldItemGlb: (0, Ez.Eb)(zz, "default")
- ... (12 more removed lines; see GitHub link above)
+           ttb: 720,
+           textureInfo: ["jungle_grass_block_side", "jungle_grass_block", "dirt"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "granule",
+           soundType: {
+             break: "grass",
+             place: "grass"
+           }
+         },
+         ...(0, aq.Ob)("Jungle Grass Slab", {
```

#### 1129. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6363-L6371` → after: `L8849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8849) · [Before (L6363-L6371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6363-L6371)

```diff
-             translationKey: "item:timedSpikeBomb"
-           },
-           type: "Chargeable",
-           textureName: "timed_spike_bomb",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:timedSpikeBombDescription"
+             translationKey: "item:jungleGrassSlab"
```

#### 1130. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6373-L6376` → after: `L8851-L8857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8851-L8857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8851-L8857) · [Before (L6373-L6376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6373-L6376)

```diff
-           chargeStages: 4,
-           chargeTime: 2e3,
-           chargeSound: "fallsmall",
-           rootMetaDesc: "Timed Spike Bomb|meta|charging1"
+           ttb: 1200,
+           textureInfo: ["slab_jungle_grass_top_side", "jungle_grass_block"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           model: "Slab",
+           harvestType: "granule",
+           slabFullBlock: "Jungle Grass Block",
+           rootMetaDesc: "Jungle Grass Slab|meta|rot1|bot"
```

#### 1131. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6378` → after: `L8859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8859) · [Before (L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6378)

```diff
-         "Toxin Ball": {
+         "Jungle Tall Grass": {
```

#### 1132. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6380` → after: `L8861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8861) · [Before (L6380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6380)

```diff
-             translationKey: "item:toxinBall"
+             translationKey: "item:jungleTallGrass"
```

#### 1133. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6382-L6388` → after: `L8863-L8887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8863-L8887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8863-L8887) · [Before (L6382-L6388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6382-L6388)

```diff
-           type: "Item",
-           textureInfo: "toxin_ball",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:toxinBallDescription"
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

#### 1134. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6390` → after: `L8889-L8890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8889-L8890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8889-L8890) · [Before (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6390)

```diff
-           secondaryDamage: 13
+           itemTexture: "jungle_tall_grass_top",
+           canBePlacedOver: !0
```

#### 1135. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6392` → after: `L8892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8892) · [Before (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6392)

```diff
-         "Aura XP Fragment": {
+         Catnip: {
```

#### 1136. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6394` → after: `L8894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8894) · [Before (L6394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6394)

```diff
-             translationKey: "item:auraXpFragment"
+             translationKey: "item:catnip"
```

#### 1137. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6396-L6404` → after: `L8896-L8905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8896-L8905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8896-L8905) · [Before (L6396-L6404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6396-L6404)

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
```

#### 1138. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6406-L6408` → after: `L8907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8907) · [Before (L6406-L6408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6406-L6408)

```diff
-           chargeStages: 1,
-           chargeTime: 500,
-           rootMetaDesc: "Aura XP Fragment|meta|charging1"
+           canBePlacedOver: !0
```

#### 1139. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6410` → after: `L8909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8909) · [Before (L6410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6410)

```diff
-         "Aura XP Orb": {
+         "Mango Log": {
```

#### 1140. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6412-L6422` → after: `L8911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8911) · [Before (L6412-L6422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6412-L6422)

```diff
-             translationKey: "item:auraXpOrb"
-           },
-           type: "Chargeable",
-           textureInfo: "aura_xp_orb",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           eatable: !0,
-           chargeSound: "eat1",
-           description: {
-             translationKey: "item:auraXpOrbDescription"
+             translationKey: "item:mangoLog"
```

#### 1141. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6424-L6426` → after: `L8913-L8915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8913-L8915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8913-L8915) · [Before (L6424-L6426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6424-L6426)

```diff
-           chargeStages: 1,
-           chargeTime: 1250,
-           rootMetaDesc: "Aura XP Orb|meta|charging1"
+           ttb: 2400,
+           textureInfo: "log_mango",
+           harvestType: "wood"
```

#### 1142. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6428` → after: `L8917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8917) · [Before (L6428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6428)

```diff
-         "Aura XP Potion": {
+         "Barkless Mango Log": {
```

#### 1143. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6430` → after: `L8919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8919) · [Before (L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6430)

```diff
-             translationKey: "item:auraXpPotion"
+             translationKey: "item:barklessMangoLog"
```

#### 1144. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6432-L6445` → after: `L8921-L8929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8921-L8929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8921-L8929) · [Before (L6432-L6445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6432-L6445)

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
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Aura XP Potion|meta|charging1"
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

#### 1145. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6447` → after: `L8931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8931) · [Before (L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6447)

```diff
-         "Aura XP Potion II": {
+         "Mango Wood Planks": {
```

#### 1146. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6449` → after: `L8933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8933) · [Before (L6449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6449)

```diff
-             translationKey: "item:auraXpPotionII"
+             translationKey: "item:mangoWoodPlanks"
```

#### 1147. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6451-L6464` → after: `L8935-L8937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8935-L8937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8935-L8937) · [Before (L6451-L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6451-L6464)

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
-           },
-           chargeStages: 1,
-           chargeTime: 1600,
-           rootMetaDesc: "Aura XP Potion II|meta|charging1"
+           ttb: 1800,
+           textureInfo: "planks_mango",
+           harvestType: "wood"
```

#### 1148. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6466` → after: `L8939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8939) · [Before (L6466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6466)

```diff
-         "Splash Aura XP Potion": {
+         "Mango Leaves": {
```

#### 1149. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6468` → after: `L8941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8941) · [Before (L6468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6468)

```diff
-             translationKey: "item:splashAuraXpPotion"
+             translationKey: "item:mangoLeaves"
```

#### 1150. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6470-L6477` → after: `L8943-L8945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8943-L8945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8943-L8945) · [Before (L6470-L6477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6470-L6477)

```diff
-           type: "Item",
-           textureInfo: "splash_aura_xp_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashAuraXpPotionDescription"
-           }
+           ttb: 350,
+           textureInfo: "leaves_mango",
+           harvestType: "cuttable"
```

#### 1151. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6479` → after: `L8947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8947) · [Before (L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6479)

```diff
-         "Splash Aura XP Potion II": {
+         "Mango Door": {
```

#### 1152. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6481` → after: `L8949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8949) · [Before (L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6481)

```diff
-             translationKey: "item:splashAuraXpPotionII"
+             translationKey: "item:mangoDoor"
```

#### 1153. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6483-L6490` → after: `L8951-L8985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8951-L8985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8951-L8985) · [Before (L6483-L6490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6483-L6490)

```diff
-           type: "Item",
-           textureInfo: "splash_aura_xp_potion",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           description: {
-             translationKey: "item:splashAuraXpPotionDescription"
-           }
+           ttb: 3600,
+           itemTexture: "mango_door",
+           model: "door",
+           harvestType: "wood",
+           rootMetaDesc: "Mango Door|meta|rot1|closed",
+           particlesIgnoreBlack: !0,
+           blockModel: "Mango Door"
+         },
+         "Mango Door|meta|rot1|open": {
+           ttb: 3600,
+           harvestType: "wood"
+         },
+         "Mango Door|meta|rot2|closed": {
+           ttb: 3600,
+           harvestType: "wood"
+         },
+ ... (19 more added lines; see GitHub link above)
```

#### 1154. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6492` → after: `L8987-L9112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R8987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L8987-L9112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L8987-L9112) · [Before (L6492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6492)

```diff
-         "Arrow of Aura XP": {
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

#### 1155. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6494` → after: `L9114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R9114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L9114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L9114) · [Before (L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6494)

```diff
-             translationKey: "item:arrowOfAuraXp"
+             translationKey: "item:mangoLadder"
```

#### 1156. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6496-L6498` → after: `L9116-L9123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R9116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L9116-L9123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L9116-L9123) · [Before (L6496-L6498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6496-L6498)

```diff
-           type: "Item",
-           textureInfo: "aura_xp_arrow",
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

#### 1157. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6500-L6503` → after: `L9125-L9127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R9125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L9125-L9127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L9125-L9127) · [Before (L6500-L6503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6500-L6503)

```diff
-           stackable: !0,
-           secondaryDamage: 1
-         },
-         Firecracker: {
+           blockModelItem: !0
+         }),
+         "Mango Block": {
```

#### 1158. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6505` → after: `L9129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R9129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L9129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L9129) · [Before (L6505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6505)

```diff
-             translationKey: "item:firecracker"
+             translationKey: "item:mangoBlock"
```

#### 1159. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6507-L6513` → after: `L9131-L9138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R9131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L9131-L9138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L9131-L9138) · [Before (L6507-L6513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6507-L6513)

```diff
-           type: "Item",
-           textureInfo: "firecracker",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0,
-           description: {
-             translationKey: "item:firecrackerDescription"
+           ttb: 600,
+           textureInfo: ["mango_block_side", "mango_block_top", "mango_block_bottom"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "wood"
+         },
+         "Banana Block": {
+           displayName: {
+             translationKey: "item:bananaBlock"
```

#### 1160. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6515` → after: `L9140-L9143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R9140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L9140-L9143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L9140-L9143) · [Before (L6515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6515)

```diff
-           secondaryDamage: 15
+           ttb: 1200,
+           textureInfo: ["banana_block_side", "banana_block_top"],
+           texturePerSide: [0, 0, 1, 1, 0, 0],
+           harvestType: "wood"
```

#### 1161. `bundles/preprod.bloxd.io/chunks/js/70.js` (Changed code · before: `L6517` → after: `L9145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405R9145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fbceaf8abb6e8f0e2a59fea8ea257225e5f7a28bf212a237a188b53b8bc50405) · [After (L9145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/70.js#L9145) · [Before (L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/70.js#L6517)

```diff
-         "Rainbow Firecracker": {
+         "Banana Seeds": {
```
