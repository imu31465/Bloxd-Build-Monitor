# Changed — Bundle Modifications Report (Part 134 / 137)

- **Updated at**: `2026-11-25T07:51 JST`
- **Part**: `134 / 137` (**403** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 133](part-133.md) · [Part 135 →](part-135.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorker.js` (7zvlu.7df130a9 → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorker.js` (1165 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032)

#### 606. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5937-L5939` → after: `L5937-L5939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5937-L5939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5937-L5939) · [Before (L5937-L5939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5937-L5939)

```diff
-                   if (IB > UB) throw new Error(`Prefab ${dB} has clearing radius ${IB} which is greater than the world generator's prefab radius ${UB}`);
-                   if (nB.groundingRadius > zB.maxPrefabGroundingRadius) throw new Error(`Prefab ${dB} has grounding radius ${nB.groundingRadius} which is greater than the world generator's max prefab grounding radius of ${zB.maxPrefabGroundingRadius}`);
-                   if ("centre" !== nB.groundingPoints && 0 === nB.groundingPoints.length) throw new Error(`Prefab ${dB} has no grounding points`);
+                   if (GB > cB) throw new Error(`Prefab ${oB} has clearing radius ${GB} which is greater than the world generator's prefab radius ${cB}`);
+                   if (JB.groundingRadius > ZB.maxPrefabGroundingRadius) throw new Error(`Prefab ${oB} has grounding radius ${JB.groundingRadius} which is greater than the world generator's max prefab grounding radius of ${ZB.maxPrefabGroundingRadius}`);
+                   if ("centre" !== JB.groundingPoints && 0 === JB.groundingPoints.length) throw new Error(`Prefab ${oB} has no grounding points`);
```

#### 607. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5941` → after: `L5941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5941) · [Before (L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5941)

```diff
-                   if (NB.x > zB.prefabSize || NB.y > zB.prefabSize || NB.z > zB.prefabSize) throw new Error(`Prefab ${dB} has dimensions ${JSON.stringify(NB)} which are too large for the world generator's prefab size of ${zB.prefabSize}`);
+                   if (vB.x > ZB.prefabSize || vB.y > ZB.prefabSize || vB.z > ZB.prefabSize) throw new Error(`Prefab ${oB} has dimensions ${JSON.stringify(vB)} which are too large for the world generator's prefab size of ${ZB.prefabSize}`);
```

#### 608. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5956` → after: `L5956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5956) · [Before (L5956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5956)

```diff
-             this.floraGenerator = new NB(this.blockMetadata, this.ZJ, `${this.seed}flora`, this.grassChance, this.tallGrassChance, this.cornChance, this.spectralGrassChance, this.pineGrassChance, this.pineFernChance, this.jungleTallGrassChance, this.catnipChance, this.autumnFernC … [truncated]
+             this.floraGenerator = new vB(this.blockMetadata, this.YN, `${this.seed}flora`, this.grassChance, this.tallGrassChance, this.cornChance, this.spectralGrassChance, this.pineGrassChance, this.pineFernChance, this.jungleTallGrassChance, this.catnipChance, this.autumnFernC … [truncated]
```

#### 609. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5990` → after: `L5990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5990) · [Before (L5990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5990)

```diff
-               treeType: nB.s.Maple,
+               treeType: JB.v.Maple,
```

#### 610. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5993` → after: `L5993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5993) · [Before (L5993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5993)

```diff
-               treeType: nB.s.Pine,
+               treeType: JB.v.Pine,
```

#### 611. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5996` → after: `L5996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5996) · [Before (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5996)

```diff
-               treeType: nB.s.Plum,
+               treeType: JB.v.Plum,
```

#### 612. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L5999` → after: `L5999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R5999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5999) · [Before (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L5999)

```diff
-               treeType: nB.s.Cedar,
+               treeType: JB.v.Cedar,
```

#### 613. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6002` → after: `L6002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6002) · [Before (L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6002)

```diff
-               treeType: nB.s.Aspen,
+               treeType: JB.v.Aspen,
```

#### 614. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6005` → after: `L6005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6005) · [Before (L6005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6005)

```diff
-               treeType: nB.s.Jungle,
+               treeType: JB.v.Jungle,
```

#### 615. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6008` → after: `L6008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6008) · [Before (L6008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6008)

```diff
-               treeType: nB.s.Palm,
+               treeType: JB.v.Palm,
```

#### 616. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6011` → after: `L6011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6011) · [Before (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6011)

```diff
-               treeType: nB.s.AutumnMaple,
+               treeType: JB.v.AutumnMaple,
```

#### 617. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6014` → after: `L6014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6014) · [Before (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6014)

```diff
-               treeType: nB.s.Pear,
+               treeType: JB.v.Pear,
```

#### 618. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6017` → after: `L6017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6017) · [Before (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6017)

```diff
-               treeType: nB.s.Cherry,
+               treeType: JB.v.Cherry,
```

#### 619. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6020` → after: `L6020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6020) · [Before (L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6020)

```diff
-               treeType: nB.s.Spectral,
+               treeType: JB.v.Spectral,
```

#### 620. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6023` → after: `L6023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6023) · [Before (L6023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6023)

```diff
-               treeType: nB.s.Mango,
+               treeType: JB.v.Mango,
```

#### 621. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6026` → after: `L6026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6026) · [Before (L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6026)

```diff
-               treeType: nB.s.AutumnAspen,
+               treeType: JB.v.AutumnAspen,
```

#### 622. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6029` → after: `L6029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6029) · [Before (L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6029)

```diff
-               treeType: nB.s.Dead,
+               treeType: JB.v.Dead,
```

#### 623. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6032` → after: `L6032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6032) · [Before (L6032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6032)

```diff
-               treeType: nB.s.FallenLog,
+               treeType: JB.v.FallenLog,
```

#### 624. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6041` → after: `L6041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6041) · [Before (L6041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6041)

```diff
-             return `${BB}|${jB}`
+             return `${BB}|${IB}`
```

#### 625. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6081` → after: `L6081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6081) · [Before (L6081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6081)

```diff
-             super(BB, jB, zB, `${nB}Desert`, dB, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null), this.key = "desert", this.grassChance = 0, this.tallGrassChance = 0, this.cactusChance = 6e-4, this.flowerPatchDistApart = 200, this.chiliPepperChance = 30, th … [truncated]
+             super(BB, IB, ZB, `${JB}Desert`, oB, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null), this.key = "desert", this.grassChance = 0, this.tallGrassChance = 0, this.cactusChance = 6e-4, this.flowerPatchDistApart = 200, this.chiliPepperChance = 30, th … [truncated]
```

#### 626. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6087` → after: `L6087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6087) · [Before (L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6087)

```diff
-             }], `${nB}DesertBiomeHeightMap`)
+             }], `${JB}DesertBiomeHeightMap`)
```

#### 627. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6097-L6098` → after: `L6097-L6098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6097-L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6097-L6098) · [Before (L6097-L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6097-L6098)

```diff
-             super(BB, jB, zB, dB, IB, fB(uB.j.VERY_HIGH, [{
-               BQ: "treePalmLarge1",
+             super(BB, IB, ZB, oB, GB, iB(kB.l.VERY_HIGH, [{
+               DZ: "treePalmLarge1",
```

#### 628. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6101` → after: `L6101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6101) · [Before (L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6101)

```diff
-               BQ: "treePalmLarge2",
+               DZ: "treePalmLarge2",
```

#### 629. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6103` → after: `L6103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6103) · [Before (L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6103)

```diff
-             }])), this.key = "oasis", this.hasScatteredLakes = !0, this.maxPrefabDistFromLakeEdge = 18, this.tags.push(nB.d.OASIS), this._heightmapSimplex = new QB.j([{
+             }])), this.key = "oasis", this.hasScatteredLakes = !0, this.maxPrefabDistFromLakeEdge = 18, this.tags.push(JB.d.OASIS), this._heightmapSimplex = new TB.g([{
```

#### 630. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6109` → after: `L6109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6109) · [Before (L6109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6109)

```diff
-             }], `${dB}OasisBiomeHeightMap`)
+             }], `${oB}OasisBiomeHeightMap`)
```

#### 631. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6117` → after: `L6117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6117) · [Before (L6117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6117)

```diff
-             super(BB, jB, zB, `${QB}RedDesert`, nB), this.key = "redDesert", this.chiliPepperChance = 30, this.lavaChiliPepperChance = 30, this.topsoilBlockType = jB["Red Sand"].id, this.lowsoilBlockType = jB["Red Sand"].id
+             super(BB, IB, ZB, `${TB}RedDesert`, JB), this.key = "redDesert", this.chiliPepperChance = 30, this.lavaChiliPepperChance = 30, this.topsoilBlockType = IB["Red Sand"].id, this.lowsoilBlockType = IB["Red Sand"].id
```

#### 632. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6122` → after: `L6122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6122) · [Before (L6122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6122)

```diff
-             super(BB, jB, zB, `${dB}Plains`, IB, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : fB(uB.j.MEDIUM, tB, SB)), this.key = "plains", this.grassChance = .162, this.tallGrassChance = .016, this.flowerPatchDistApart = 20, this.forgetMeNotChance = 100, thi … [truncated]
+             super(BB, IB, ZB, `${oB}Plains`, GB, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : iB(kB.l.MEDIUM, CB, QB)), this.key = "plains", this.grassChance = .162, this.tallGrassChance = .016, this.flowerPatchDistApart = 20, this.forgetMeNotChance = 100, thi … [truncated]
```

#### 633. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6128` → after: `L6128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6128) · [Before (L6128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6128)

```diff
-             }], `${dB}PlainsBiomeHeightMap`)
+             }], `${oB}PlainsBiomeHeightMap`)
```

#### 634. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6138-L6139` → after: `L6138-L6139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6138-L6139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6138-L6139) · [Before (L6138-L6139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6138-L6139)

```diff
-             super(BB, jB, zB, QB, nB, fB(uB.j.MEDIUM, [{
-               BQ: "treeMapleLarge1",
+             super(BB, IB, ZB, TB, JB, iB(kB.l.MEDIUM, [{
+               DZ: "treeMapleLarge1",
```

#### 635. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6142` → after: `L6142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6142) · [Before (L6142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6142)

```diff
-               BQ: "treeMapleLarge2",
+               DZ: "treeMapleLarge2",
```

#### 636. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6149` → after: `L6149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6149) · [Before (L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6149)

```diff
-             super(BB, jB, zB, QB, nB, fB(uB.j.MEDIUM, SB)), this.key = "snowyPlains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 9e-4, this.tallGrassChance = 1e-4, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTuli … [truncated]
+             super(BB, IB, ZB, TB, JB, iB(kB.l.MEDIUM, QB)), this.key = "snowyPlains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 9e-4, this.tallGrassChance = 1e-4, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTuli … [truncated]
```

#### 637. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6154` → after: `L6154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6154) · [Before (L6154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6154)

```diff
-             super(BB, jB, zB, `${nB}Forest`, dB, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : fB(uB.j.MEDIUM, MB.ruins, MB.trees)), this.key = "forest", this.mapleTreeChance = 15, this.aspenTreeChance = 1, this.flowerPatchDistApart = 28, this.redMushroomChance … [truncated]
+             super(BB, IB, ZB, `${JB}Forest`, oB, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : iB(kB.l.MEDIUM, sB.ruins, sB.trees)), this.key = "forest", this.mapleTreeChance = 15, this.aspenTreeChance = 1, this.flowerPatchDistApart = 28, this.redMushroomChance … [truncated]
```

#### 638. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6160` → after: `L6160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6160) · [Before (L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6160)

```diff
-             }], `${nB}ForestBiomeHeightMap`)
+             }], `${JB}ForestBiomeHeightMap`)
```

#### 639. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6175` → after: `L6175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6175) · [Before (L6175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6175)

```diff
-             super(BB, jB, zB, QB, dB, fB(uB.j.MEDIUM, MB.ruins)), this.key = "autumnForest", this.flowerPatchDistApart = 13, this.fallenMapleLeavesChance = 800, this.pumpkinChance = 30, this.melonChance = 0, this.autumnFernChance = .01, this.autumnMapleTreeChance = 15, this.autum … [truncated]
+             super(BB, IB, ZB, TB, oB, iB(kB.l.MEDIUM, sB.ruins)), this.key = "autumnForest", this.flowerPatchDistApart = 13, this.fallenMapleLeavesChance = 800, this.pumpkinChance = 30, this.melonChance = 0, this.autumnFernChance = .01, this.autumnMapleTreeChance = 15, this.autum … [truncated]
```

#### 640. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6180-L6181` → after: `L6180-L6181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6180-L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6180-L6181) · [Before (L6180-L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6180-L6181)

```diff
-             super(BB, jB, zB, QB, nB, fB(uB.j.HIGH, [{
-               BQ: "treeJungleLarge1",
+             super(BB, IB, ZB, TB, JB, iB(kB.l.HIGH, [{
+               DZ: "treeJungleLarge1",
```

#### 641. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6184` → after: `L6184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6184) · [Before (L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6184)

```diff
-               BQ: "treeJungleLarge2",
+               DZ: "treeJungleLarge2",
```

#### 642. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6187` → after: `L6187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6187) · [Before (L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6187)

```diff
-               BQ: "rockJungleLarge1",
+               DZ: "rockJungleLarge1",
```

#### 643. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6190` → after: `L6190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6190) · [Before (L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6190)

```diff
-               BQ: "rockJungleLarge2",
+               DZ: "rockJungleLarge2",
```

#### 644. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6193` → after: `L6193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6193) · [Before (L6193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6193)

```diff
-               BQ: "rockJungleLarge3",
+               DZ: "rockJungleLarge3",
```

#### 645. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6196` → after: `L6196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6196) · [Before (L6196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6196)

```diff
-               BQ: "rockJungleLarge4",
+               DZ: "rockJungleLarge4",
```

#### 646. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6199` → after: `L6199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6199) · [Before (L6199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6199)

```diff
-               BQ: "rockJungleLarge5",
+               DZ: "rockJungleLarge5",
```

#### 647. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6202` → after: `L6202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6202) · [Before (L6202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6202)

```diff
-               BQ: "rockJungleLarge6",
+               DZ: "rockJungleLarge6",
```

#### 648. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6209` → after: `L6209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6209) · [Before (L6209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6209)

```diff
-             super(BB, jB, zB, QB, nB, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : fB(uB.j.MEDIUM, EB.ruins, EB.trees)), this.key = "pineForest", this.minDistanceFromOrigin = 200, this.grassChance = 0, this.tallGrassChance = 0, this.pineGrassChance = .02, this … [truncated]
+             super(BB, IB, ZB, TB, JB, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : iB(kB.l.MEDIUM, wB.ruins, wB.trees)), this.key = "pineForest", this.minDistanceFromOrigin = 200, this.grassChance = 0, this.tallGrassChance = 0, this.pineGrassChance = .02, this … [truncated]
```

#### 649. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6219` → after: `L6219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6219) · [Before (L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6219)

```diff
-             super(BB, jB, zB, `${QB}Blue`, nB), this.key = "bluebellForest", this.bluebellChance = 10, this.melonChance = 0, this.flowerPatchDistApart = 12, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.redMushroomChance = 0, this.fatRedMushroomChance … [truncated]
+             super(BB, IB, ZB, `${TB}Blue`, JB), this.key = "bluebellForest", this.bluebellChance = 10, this.melonChance = 0, this.flowerPatchDistApart = 12, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.redMushroomChance = 0, this.fatRedMushroomChance … [truncated]
```

#### 650. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6224` → after: `L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6224) · [Before (L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6224)

```diff
-             super(BB, jB, zB, QB, nB, fB(uB.j.MEDIUM, MB.trees)), this.key = "cherryForest", this.mapleTreeChance = 1, this.aspenTreeChance = 1, this.cherryTreeChance = 15, this.flowerPatchDistApart = 12, this.defaultFlowerInsidePatchSpawnChance = .4, this.defaultFlowerPatchRadiu … [truncated]
+             super(BB, IB, ZB, TB, JB, iB(kB.l.MEDIUM, sB.trees)), this.key = "cherryForest", this.mapleTreeChance = 1, this.aspenTreeChance = 1, this.cherryTreeChance = 15, this.flowerPatchDistApart = 12, this.defaultFlowerInsidePatchSpawnChance = .4, this.defaultFlowerPatchRadiu … [truncated]
```

#### 651. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6229` → after: `L6229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6229) · [Before (L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6229)

```diff
-             super(BB, jB, zB, `${nB}RollingHills`, dB), this.key = "rollingHills", this.riceChance = 30, this.topsoilBlockType = jB["Grass Block"].id, this.treeMinDist = 25, this.offsettedHeight = 20, this._heightmapSimplex = new QB.j([{
+             super(BB, IB, ZB, `${JB}RollingHills`, oB), this.key = "rollingHills", this.riceChance = 30, this.topsoilBlockType = IB["Grass Block"].id, this.treeMinDist = 25, this.offsettedHeight = 20, this._heightmapSimplex = new TB.g([{
```

#### 652. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6235` → after: `L6235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6235) · [Before (L6235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6235)

```diff
-             }], `${nB}RollingHillsBiomeHeightMap`)
+             }], `${JB}RollingHillsBiomeHeightMap`)
```

#### 653. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6240` → after: `L6240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6240) · [Before (L6240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6240)

```diff
-             super(BB, jB, zB, `${nB}SnowyMountains`, dB), this.key = "snowyMountains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.ridgedNoiseAmplitude = void 0, this.ridgedNoiseOctave1 = void 0, this. … [truncated]
+             super(BB, IB, ZB, `${JB}SnowyMountains`, oB), this.key = "snowyMountains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.ridgedNoiseAmplitude = void 0, this.ridgedNoiseOctave1 = void 0, this. … [truncated]
```

#### 654. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6243` → after: `L6243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6243) · [Before (L6243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6243)

```diff
-             }], `${nB}SnowyMountainsBiomeRidgedNoise`), this.ridgedNoiseOctave2 = new QB.j([{
+             }], `${JB}SnowyMountainsBiomeRidgedNoise`), this.ridgedNoiseOctave2 = new TB.g([{
```

#### 655. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6246` → after: `L6246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6246) · [Before (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6246)

```diff
-             }], `${nB}SnowyMountainsBiomeRidgedNoiseOctave2`), this.nonRidgedNoise = new QB.j([{
+             }], `${JB}SnowyMountainsBiomeRidgedNoiseOctave2`), this.nonRidgedNoise = new TB.g([{
```

#### 656. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6249` → after: `L6249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6249) · [Before (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6249)

```diff
-             }], `${nB}SnowyMountainsBiomeNonRidgedNoise`), this.ridgedNoiseAmplitude = (0, QB.x)(this.ridgedNoiseOctave1) + (0, QB.x)(this.ridgedNoiseOctave2)
+             }], `${JB}SnowyMountainsBiomeNonRidgedNoise`), this.ridgedNoiseAmplitude = (0, TB.z)(this.ridgedNoiseOctave1) + (0, TB.z)(this.ridgedNoiseOctave2)
```

#### 657. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6264-L6265` → after: `L6264-L6265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6264-L6265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6264-L6265) · [Before (L6264-L6265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6264-L6265)

```diff
-             super(BB, jB, zB, nB, dB, fB(uB.j.HIGH, [{
-               BQ: "treeSpectralLarge1",
+             super(BB, IB, ZB, JB, oB, iB(kB.l.HIGH, [{
+               DZ: "treeSpectralLarge1",
```

#### 658. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6268` → after: `L6268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6268) · [Before (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6268)

```diff
-               BQ: "treeSpectralLarge2",
+               DZ: "treeSpectralLarge2",
```

#### 659. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6271` → after: `L6271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6271) · [Before (L6271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6271)

```diff
-               BQ: "rockSnowLarge1",
+               DZ: "rockSnowLarge1",
```

#### 660. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6274` → after: `L6274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6274) · [Before (L6274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6274)

```diff
-               BQ: "rockSnowLarge2",
+               DZ: "rockSnowLarge2",
```

#### 661. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6277` → after: `L6277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6277) · [Before (L6277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6277)

```diff
-               BQ: "rockSnowLarge3",
+               DZ: "rockSnowLarge3",
```

#### 662. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6280` → after: `L6280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6280) · [Before (L6280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6280)

```diff
-               BQ: "ruinSnowSmall1",
+               DZ: "ruinSnowSmall1",
```

#### 663. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6283` → after: `L6283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6283) · [Before (L6283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6283)

```diff
-               BQ: "ruinSnowSmall2",
+               DZ: "ruinSnowSmall2",
```

#### 664. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6286` → after: `L6286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6286) · [Before (L6286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6286)

```diff
-               BQ: "ruinSnowSmall3",
+               DZ: "ruinSnowSmall3",
```

#### 665. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6289` → after: `L6289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6289) · [Before (L6289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6289)

```diff
-               BQ: "ruinSnowSmall4",
+               DZ: "ruinSnowSmall4",
```

#### 666. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6292` → after: `L6292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6292) · [Before (L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6292)

```diff
-               BQ: "ruinSnowMedium1",
+               DZ: "ruinSnowMedium1",
```

#### 667. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6295` → after: `L6295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6295) · [Before (L6295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6295)

```diff
-               BQ: "ruinSnowMedium2",
+               DZ: "ruinSnowMedium2",
```

#### 668. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6298` → after: `L6298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6298) · [Before (L6298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6298)

```diff
-               BQ: "ruinSnowLarge1",
+               DZ: "ruinSnowLarge1",
```

#### 669. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6301` → after: `L6301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6301) · [Before (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6301)

```diff
-               BQ: "ruinSnowLarge2",
+               DZ: "ruinSnowLarge2",
```

#### 670. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6303` → after: `L6303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6303) · [Before (L6303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6303)

```diff
-             }])), this.key = "frozenBadlandsPlains", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChan … [truncated]
+             }])), this.key = "frozenBadlandsPlains", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChan … [truncated]
```

#### 671. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6309` → after: `L6309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6309) · [Before (L6309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6309)

```diff
-             }], `${nB}FrozenBadlandsPlainsHeightMap`)
+             }], `${JB}FrozenBadlandsPlainsHeightMap`)
```

#### 672. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6314-L6315` → after: `L6314-L6315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6314-L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6314-L6315) · [Before (L6314-L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6314-L6315)

```diff
-             super(BB, jB, zB, nB, dB, fB(uB.j.HIGH, [{
-               BQ: "treeSpectralLarge1",
+             super(BB, IB, ZB, JB, oB, iB(kB.l.HIGH, [{
+               DZ: "treeSpectralLarge1",
```

#### 673. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6318` → after: `L6318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6318) · [Before (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6318)

```diff
-               BQ: "treeSpectralLarge2",
+               DZ: "treeSpectralLarge2",
```

#### 674. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6321` → after: `L6321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6321) · [Before (L6321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6321)

```diff
-               BQ: "rockSnowLarge1",
+               DZ: "rockSnowLarge1",
```

#### 675. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6324` → after: `L6324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6324) · [Before (L6324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6324)

```diff
-               BQ: "rockSnowLarge2",
+               DZ: "rockSnowLarge2",
```

#### 676. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6327` → after: `L6327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6327) · [Before (L6327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6327)

```diff
-               BQ: "rockSnowLarge3",
+               DZ: "rockSnowLarge3",
```

#### 677. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6330` → after: `L6330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6330) · [Before (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6330)

```diff
-               BQ: "ruinSnowSmall1",
+               DZ: "ruinSnowSmall1",
```

#### 678. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6333` → after: `L6333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6333) · [Before (L6333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6333)

```diff
-               BQ: "ruinSnowSmall2",
+               DZ: "ruinSnowSmall2",
```

#### 679. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6336` → after: `L6336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6336) · [Before (L6336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6336)

```diff
-               BQ: "ruinSnowSmall3",
+               DZ: "ruinSnowSmall3",
```

#### 680. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6339` → after: `L6339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6339) · [Before (L6339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6339)

```diff
-               BQ: "ruinSnowSmall4",
+               DZ: "ruinSnowSmall4",
```

#### 681. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6342` → after: `L6342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6342) · [Before (L6342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6342)

```diff
-               BQ: "ruinSnowMedium1",
+               DZ: "ruinSnowMedium1",
```

#### 682. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6345` → after: `L6345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6345) · [Before (L6345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6345)

```diff
-               BQ: "ruinSnowMedium2",
+               DZ: "ruinSnowMedium2",
```

#### 683. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6348` → after: `L6348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6348) · [Before (L6348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6348)

```diff
-               BQ: "ruinSnowLarge1",
+               DZ: "ruinSnowLarge1",
```

#### 684. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6351` → after: `L6351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6351) · [Before (L6351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6351)

```diff
-               BQ: "ruinSnowLarge2",
+               DZ: "ruinSnowLarge2",
```

#### 685. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6353` → after: `L6353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6353) · [Before (L6353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6353)

```diff
-             }])), this.key = "frozenBadlandsForest", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChan … [truncated]
+             }])), this.key = "frozenBadlandsForest", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChan … [truncated]
```

#### 686. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6359` → after: `L6359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6359) · [Before (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6359)

```diff
-             }], `${nB}FrozenBadlandsForestHeightMap`)
+             }], `${JB}FrozenBadlandsForestHeightMap`)
```

#### 687. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6364` → after: `L6364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6364) · [Before (L6364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6364)

```diff
-             super(BB, jB, zB, `${dB}Custom_${NB.qQ}_${NB.fQ}`, IB), this.key = "custom", this.grassChance = 0, this.tallGrassChance = 0, this.mapleTreeChance = 0, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.flowerPatchDistApart = null, this.treeMinD … [truncated]
+             super(BB, IB, ZB, `${oB}Custom_${vB.QT}_${vB.sT}`, GB), this.key = "custom", this.grassChance = 0, this.tallGrassChance = 0, this.mapleTreeChance = 0, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.flowerPatchDistApart = null, this.treeMinD … [truncated]
```

#### 688. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6370` → after: `L6370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6370) · [Before (L6370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6370)

```diff
-             }], `${dB}CustomBiomeHeightMap`)
+             }], `${oB}CustomBiomeHeightMap`)
```

#### 689. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6374` → after: `L6374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6374) · [Before (L6374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6374)

```diff
-       39848: (BB, jB, zB) => {
+       39839: (BB, IB, ZB) => {
```

#### 690. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6377-L6379` → after: `L6377-L6379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6377-L6379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6377-L6379) · [Before (L6377-L6379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6377-L6379)

```diff
-           e: () => mB,
-           g: () => JB,
-           h: () => rB
+           d: () => gB,
+           f: () => NB,
+           g: () => zB
```

#### 691. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6381-L6387` → after: `L6381-L6387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6381-L6387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6381-L6387) · [Before (L6381-L6387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6381-L6387)

```diff
-         var QB = zB(39787),
-           nB = zB(39767),
-           dB = zB(39761),
-           IB = zB(658),
-           NB = zB(39796),
-           uB = zB(4347),
-           UB = zB(39846);
+         var TB = ZB(39774),
+           JB = ZB(39748),
+           oB = ZB(39735),
+           GB = ZB(665),
+           vB = ZB(39778),
+           kB = ZB(4428),
+           cB = ZB(39832);
```

#### 692. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6390` → after: `L6390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6390) · [Before (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6390)

```diff
-             this.biomePointGen = void 0, this.biomeOffsetSimplex = void 0, this.biomeOffsetBound = void 0, this.veryHighSurfacePrefabCells = new WeakMap, this.baseBiome = void 0, this.biomesTotalFrequency = void 0, this.EQ = void 0, this.anyStrata = void 0, this.biomeFrequencies  … [truncated]
+             this.biomePointGen = void 0, this.biomeOffsetSimplex = void 0, this.biomeOffsetBound = void 0, this.veryHighSurfacePrefabCells = new WeakMap, this.baseBiome = void 0, this.biomesTotalFrequency = void 0, this.dT = void 0, this.anyStrata = void 0, this.biomeFrequencies  … [truncated]
```

#### 693. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6396` → after: `L6396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6396) · [Before (L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6396)

```diff
-             }], `${zB}BiomeOffsetSimplex`), this.biomeOffsetBound = Math.ceil((0, dB.x)(this.biomeOffsetSimplex)), this.baseBiome = new QB.i(nB, IB, BB, zB, {
+             }], `${ZB}BiomeOffsetSimplex`), this.biomeOffsetBound = Math.ceil((0, oB.z)(this.biomeOffsetSimplex)), this.baseBiome = new TB.f(JB, GB, BB, ZB, {
```

#### 694. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6398` → after: `L6398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6398) · [Before (L6398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6398)

```diff
-             }), this.baseBiome.init(), this.EQ = uB, this.anyStrata = uB.some((BB => {
+             }), this.baseBiome.init(), this.dT = kB, this.anyStrata = kB.some((BB => {
```

#### 695. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6403-L6405` → after: `L6403-L6405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6403-L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6403-L6405) · [Before (L6403-L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6403-L6405)

```diff
-             })), this.biomesTotalFrequency = 0, this.biomeFrequencies = new Array(this.EQ.length);
-             for (let QB = 0; QB < this.EQ.length; QB++) {
-               const BB = this.EQ[QB],
+             })), this.biomesTotalFrequency = 0, this.biomeFrequencies = new Array(this.dT.length);
+             for (let TB = 0; TB < this.dT.length; TB++) {
+               const BB = this.dT[TB],
```

#### 696. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6412` → after: `L6412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6412) · [Before (L6412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6412)

```diff
-                 if (nB.init(), nB.minDistanceFromOrigin > 0) throw new Error(`Alt Biomes cannot have non-zero minDistanceFromOrigin: biomeId = ${QB}`);
+                 if (JB.init(), JB.minDistanceFromOrigin > 0) throw new Error(`Alt Biomes cannot have non-zero minDistanceFromOrigin: biomeId = ${TB}`);
```

#### 697. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6414-L6415` → after: `L6414-L6415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6414-L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6414-L6415) · [Before (L6414-L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6414-L6415)

```diff
-                 for (let jB = 0; jB < this.EQ.length; jB++)
-                   if (this.EQ[jB].biome === nB) {
+                 for (let IB = 0; IB < this.dT.length; IB++)
+                   if (this.dT[IB].biome === JB) {
```

#### 698. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6418-L6419` → after: `L6418-L6419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6418-L6419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6418-L6419) · [Before (L6418-L6419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6418-L6419)

```diff
-                   } if (!BB) throw new Error(`Alt Biome not found in list of biomes: biomeId = ${QB}`)
-               } else if (jB.minDistanceFromOrigin > 0) throw new Error(`Biome has non-zero minDistanceFromOrigin, but no altBiome: biomeId = ${QB}`);
+                   } if (!BB) throw new Error(`Alt Biome not found in list of biomes: biomeId = ${TB}`)
+               } else if (IB.minDistanceFromOrigin > 0) throw new Error(`Biome has non-zero minDistanceFromOrigin, but no altBiome: biomeId = ${TB}`);
```

#### 699. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6470` → after: `L6470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6470) · [Before (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6470)

```diff
-                     if (this.getBiomeForBiomePoint(BB).biome.hasPrefabs(nB.k.SURFACE, nB.j.VERY_HIGH)) {
+                     if (this.getBiomeForBiomePoint(BB).biome.hasPrefabs(JB.n.SURFACE, JB.l.VERY_HIGH)) {
```

#### 700. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6487` → after: `L6487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6487) · [Before (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6487)

```diff
-             const jB = (0, UB.g)(BB[0], BB[1]);
+             const IB = (0, cB.d)(BB[0], BB[1]);
```

#### 701. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6493` → after: `L6493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6493) · [Before (L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6493)

```diff
-               zB = new uB.i(`${BB[0]}|${BB[1]}|${this.seed}`);
+               ZB = new kB.j(`${BB[0]}|${BB[1]}|${this.seed}`);
```

#### 702. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6495` → after: `L6495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6495) · [Before (L6495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6495)

```diff
-               nB = this.EQ[QB].biome;
+               JB = this.dT[TB].biome;
```

#### 703. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6497-L6499` → after: `L6497-L6499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6497-L6499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6497-L6499) · [Before (L6497-L6499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6497-L6499)

```diff
-               nB = this.EQ[QB].altBiome;
-               for (let BB = 0; BB < this.EQ.length; BB++)
-                 if (this.EQ[BB].biome === nB) {
+               JB = this.dT[TB].altBiome;
+               for (let BB = 0; BB < this.dT.length; BB++)
+                 if (this.dT[BB].biome === JB) {
```

#### 704. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6514` → after: `L6514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6514) · [Before (L6514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6514)

```diff
-               oQ: zB,
+               wT: ZB,
```

#### 705. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6517-L6518` → after: `L6517-L6518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6517-L6518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6517-L6518) · [Before (L6517-L6518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6517-L6518)

```diff
-             } = this.EQ[jB], dB = {
-               stoneTypeId: zB[sB(QB, nB, new uB.i(`${BB[0]}|${BB[1]}|${this.seed}Modifiers`))].stoneId
+             } = this.dT[IB], oB = {
+               stoneTypeId: ZB[FB(TB, JB, new kB.j(`${BB[0]}|${BB[1]}|${this.seed}Modifiers`))].stoneId
```

#### 706. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6524-L6525` → after: `L6524-L6525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6524-L6525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6524-L6525) · [Before (L6524-L6525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6524-L6525)

```diff
-               biomeIds: new dB.g(this.ZJ, [BB, jB]),
-               stoneTypeIds: new dB.g(this.ZJ, [BB, jB])
+               biomeIds: new oB.e(this.YN, [BB, IB]),
+               stoneTypeIds: new oB.e(this.YN, [BB, IB])
```

#### 707. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6527-L6528` → after: `L6527-L6528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6527-L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6527-L6528) · [Before (L6527-L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6527-L6528)

```diff
-             for (let nB = BB; nB < BB + this.ZJ; nB++)
-               for (let BB = jB; BB < jB + this.ZJ; BB++) {
+             for (let JB = BB; JB < BB + this.YN; JB++)
+               for (let BB = IB; BB < IB + this.YN; BB++) {
```

#### 708. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6535` → after: `L6535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6535) · [Before (L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6535)

```diff
-             return this.EQ[BB].biome
+             return this.dT[BB].biome
```

#### 709. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6544` → after: `L6544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6544) · [Before (L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6544)

```diff
-             oQ: BB,
+             wT: BB,
```

#### 710. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6578` → after: `L6578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6578) · [Before (L6578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6578)

```diff
-             ZJ: jB,
+             YN: IB,
```

#### 711. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6584-L6585` → after: `L6584-L6586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6584-L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6584-L6586) · [Before (L6584-L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6584-L6585)

```diff
-           const NB = new QB.s(jB, zB, nB, dB, IB),
-             uB = new QB.J(jB, zB, nB, dB, IB),
+           const vB = new TB.p(IB, ZB, JB, oB, GB),
+             kB = new TB.B(IB, ZB, JB, oB, GB),
+             cB = new TB.F(IB, ZB, JB, oB, GB),
```

#### 712. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6587-L6589` → after: `L6588-L6592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6588-L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6588-L6592) · [Before (L6587-L6589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6587-L6589)

```diff
-             aB = new QB.W(jB, zB, nB, dB, IB),
-             pB = new QB.S(jB, zB, nB, dB, IB),
-             sB = new QB.v(jB, zB, nB, dB, IB),
+             hB = new TB.K(IB, ZB, JB, oB, GB),
+             FB = new TB.t(IB, ZB, JB, oB, GB),
+             NB = new TB.L(IB, ZB, JB, oB, GB),
+             gB = new TB.G(IB, ZB, JB, oB, GB),
+             qB = new TB.H(IB, ZB, JB, oB, GB),
```

#### 713. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6591` → after: `L6594-L6595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6594-L6595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6594-L6595) · [Before (L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6591)

```diff
-             mB = new QB.P(jB, zB, nB, dB, IB),
+             UB = new TB.y(IB, ZB, JB, oB, GB),
+             WB = new TB.b(IB, ZB, JB, oB, GB),
```

#### 714. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6593-L6597` → after: `L6597-L6598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6597-L6598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6597-L6598) · [Before (L6593-L6597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6593-L6597)

```diff
-             kB = new QB.$(jB, zB, nB, dB, IB),
-             GB = new QB.F(jB, zB, nB, dB, IB),
-             LB = new QB.e(jB, zB, nB, dB, IB),
-             gB = new QB.Z(jB, zB, nB, dB, IB),
-             tB = new QB._(jB, zB, nB, dB, IB),
+             CB = new TB.S(IB, ZB, JB, oB, GB),
+             QB = new TB.j(IB, ZB, JB, oB, GB),
```

#### 715. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6599-L6602` → after: `L6600-L6601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6600-L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6600-L6601) · [Before (L6599-L6602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6599-L6602)

```diff
-             MB = new QB.l(jB, zB, nB, dB, IB),
-             EB = new QB.bb(jB, zB, nB, dB, IB),
-             iB = new QB.eb(jB, zB, nB, dB, IB),
-             qB = new QB.K(jB, zB, nB, dB, IB),
+             wB = new TB.X(IB, ZB, JB, oB, GB),
+             OB = new TB.$(IB, ZB, JB, oB, GB),
```

#### 716. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6604` → after: `L6603-L6604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6603-L6604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6603-L6604) · [Before (L6604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6604)

```diff
-             oB = new QB.y(jB, zB, nB, dB, IB),
+             iB = new TB.x(IB, ZB, JB, oB, GB),
+             pB = new TB.w(IB, ZB, JB, oB, GB),
```

#### 717. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6718` → after: `L6718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6718) · [Before (L6718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6718)

```diff
-             ZJ: zB,
+             YN: ZB,
```

#### 718. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6726-L6728` → after: `L6726-L6728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6726-L6728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6726-L6728) · [Before (L6726-L6728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6726-L6728)

```diff
-             const jB = new QB.o(zB, nB, dB, NB, uB, BB),
-               UB = BB.oQ.map((BB => ({
-                 stoneId: (0, IB.C)(BB.blockName, nB),
+             const IB = new TB.n(ZB, JB, oB, vB, kB, BB),
+               cB = BB.wT.map((BB => ({
+                 stoneId: (0, GB.G)(BB.blockName, JB),
```

#### 719. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6740` → after: `L6740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6740) · [Before (L6740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6740)

```diff
-       39865: (BB, jB, zB) => {
+       39844: (BB, IB, ZB) => {
```

#### 720. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6742` → after: `L6742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6742) · [Before (L6742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6742)

```diff
-           d: () => mB
+           b: () => gB
```

#### 721. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6744-L6748` → after: `L6744-L6748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6744-L6748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6744-L6748) · [Before (L6744-L6748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6744-L6748)

```diff
-         var QB = zB(39761),
-           nB = zB(658),
-           dB = zB(39767),
-           IB = zB(39763),
-           NB = zB(4347);
+         var TB = ZB(39735),
+           JB = ZB(665),
+           oB = ZB(39748),
+           GB = ZB(39743),
+           vB = ZB(4428);
```

#### 722. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6751` → after: `L6751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6751) · [Before (L6751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6751)

```diff
-             this.ZJ = BB, this.pointsGenerator = jB, this.seed = QB, this.tempChunkCoord = [0, 0], this.chunkSearchRadius = void 0, this.chunkSearchRadius = Math.floor(.5 * zB / this.ZJ) + 1
+             this.YN = BB, this.pointsGenerator = IB, this.seed = TB, this.tempChunkCoord = [0, 0], this.chunkSearchRadius = void 0, this.chunkSearchRadius = Math.floor(.5 * ZB / this.YN) + 1
```

#### 723. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6754` → after: `L6754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6754) · [Before (L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6754)

```diff
-             return this.tempChunkCoord[0] = Math.floor(BB / this.ZJ), this.tempChunkCoord[1] = Math.floor(jB / this.ZJ), this.tempChunkCoord
+             return this.tempChunkCoord[0] = Math.floor(BB / this.YN), this.tempChunkCoord[1] = Math.floor(IB / this.YN), this.tempChunkCoord
```

#### 724. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6764-L6767` → after: `L6764-L6767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6764-L6767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6764-L6767) · [Before (L6764-L6767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6764-L6767)

```diff
-             const zB = BB * this.ZJ,
-               QB = jB * this.ZJ,
-               nB = new NB.i(`${BB}|${jB}|${this.seed}`);
-             return [zB + Math.floor(nB.next() * this.ZJ), QB + Math.floor(nB.next() * this.ZJ)]
+             const ZB = BB * this.YN,
+               TB = IB * this.YN,
+               JB = new vB.j(`${BB}|${IB}|${this.seed}`);
+             return [ZB + Math.floor(JB.next() * this.YN), TB + Math.floor(JB.next() * this.YN)]
```

#### 725. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6770-L6771` → after: `L6770-L6771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6770-L6771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6770-L6771) · [Before (L6770-L6771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6770-L6771)

```diff
-         var UB = zB(39796),
-           aB = zB(39846);
+         var cB = ZB(39778),
+           nB = ZB(39832);
```

#### 726. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6774` → after: `L6774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6774) · [Before (L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6774)

```diff
-             this.numCaveTypes = BB, this.caveTypeToBlockIds = jB, this.caveTypePrioritization = zB, this.ZJ = QB
+             this.numCaveTypes = BB, this.caveTypeToBlockIds = IB, this.caveTypePrioritization = ZB, this.YN = TB
```

#### 727. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6785` → after: `L6785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6785) · [Before (L6785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6785)

```diff
-             return new sB(this.numCaveTypes, this.caveTypeToBlockIds, this.caveTypePrioritization, this.ZJ, this.data.viewJustInnerChunk())
+             return new FB(this.numCaveTypes, this.caveTypeToBlockIds, this.caveTypePrioritization, this.YN, this.data.viewJustInnerChunk())
```

#### 728. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6809` → after: `L6809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6809) · [Before (L6809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6809)

```diff
-             this.ZJ = jB, this.caveMetadataForChunkCache = void 0, this.caveMetadataForChunkCache = new LB(BB, jB, zB, QB)
+             this.YN = IB, this.caveMetadataForChunkCache = void 0, this.caveMetadataForChunkCache = new WB(BB, IB, ZB, TB)
```

#### 729. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6820-L6823` → after: `L6820-L6823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6820-L6823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6820-L6823) · [Before (L6820-L6823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6820-L6823)

```diff
-             const UB = new NB.i(`caveBlocks${jB}|${zB}|${QB}`);
-             for (let NB = jB; NB < jB + uB.ZJ; NB++)
-               for (let aB = QB; aB < QB + uB.ZJ; aB++) {
-                 const pB = nB.get(NB, aB, dB.e.GroundHeight);
+             const cB = new vB.j(`caveBlocks${IB}|${ZB}|${TB}`);
+             for (let vB = IB; vB < IB + kB.YN; vB++)
+               for (let nB = TB; nB < TB + kB.YN; nB++) {
+                 const hB = JB.get(vB, nB, oB.f.GroundHeight);
```

#### 730. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6826` → after: `L6826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6826) · [Before (L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6826)

```diff
-                   if (rB === IB.l) continue;
+                   if (zB === GB.j) continue;
```

#### 731. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6828` → after: `L6828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6828) · [Before (L6828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6828)

```diff
-                     JB = Math.min(sB + 1, zB + uB.ZJ, pB + 1),
+                     NB = Math.min(FB + 1, ZB + kB.YN, hB + 1),
```

#### 732. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6831` → after: `L6831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6831) · [Before (L6831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6831)

```diff
-                     const dB = "number" === typeof mB ? mB : mB.sample(UB);
+                     const oB = "number" === typeof gB ? gB : gB.sample(cB);
```

#### 733. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6839` → after: `L6839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6839) · [Before (L6839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6839)

```diff
-               IB = new yB(this.caveMetadataForChunkCache, zB, this.ZJ),
+               GB = new qB(this.caveMetadataForChunkCache, ZB, this.YN),
```

#### 734. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6843-L6844` → after: `L6843-L6844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6843-L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6843-L6844) · [Before (L6843-L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6843-L6844)

```diff
-               aB = QB.d.create(this.ZJ, nB, NB, dB.c.NumFields, IB);
-             return new rB(NB, uB, UB, this.ZJ, aB)
+               nB = TB.b.create(this.YN, JB, vB, oB.c.NumFields, GB);
+             return new zB(vB, kB, cB, this.YN, nB)
```

#### 735. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6849` → after: `L6849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6849) · [Before (L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6849)

```diff
-             if (this.caveMetadataForChunkCache = BB, this.heightmapVals = jB, this.caveGeneratorsPerChunk = [], zB !== nB.y) throw new Error(`Cave generation is not supported for chunk sizes other than ${nB.y}`)
+             if (this.caveMetadataForChunkCache = BB, this.heightmapVals = IB, this.caveGeneratorsPerChunk = [], ZB !== JB.C) throw new Error(`Cave generation is not supported for chunk sizes other than ${JB.C}`)
```

#### 736. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6852-L6853` → after: `L6852-L6853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6852-L6853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6852-L6853) · [Before (L6852-L6853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6852-L6853)

```diff
-             const QB = (0, nB.P)(BB),
-               dB = (0, nB.P)(jB);
+             const TB = (0, JB.T)(BB),
+               oB = (0, JB.T)(IB);
```

#### 737. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6868` → after: `L6868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6868) · [Before (L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6868)

```diff
-             for (let QB = 0; QB < this.numCaveTypes; QB++) zB.set(BB, jB, QB, dB.c.FloorY, IB.l), zB.set(BB, jB, QB, dB.c.CeilingY, IB.l)
+             for (let TB = 0; TB < this.numCaveTypes; TB++) ZB.set(BB, IB, TB, oB.c.FloorY, GB.j), ZB.set(BB, IB, TB, oB.c.CeilingY, GB.j)
```

#### 738. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6875` → after: `L6875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6875) · [Before (L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6875)

```diff
-               if (NB === IB.c) continue;
+               if (vB === GB.d) continue;
```

#### 739. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6888` → after: `L6888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6888) · [Before (L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6888)

```diff
-               sB + 1 === this.heightmapVals.getOrGenerate(BB, jB, dB.e.GroundHeight) && sB++, zB.set(BB, jB, QB.caveType, dB.c.FloorY, rB), zB.set(BB, jB, QB.caveType, dB.c.CeilingY, sB)
+               FB + 1 === this.heightmapVals.getOrGenerate(BB, IB, oB.f.GroundHeight) && FB++, ZB.set(BB, IB, TB.caveType, oB.c.FloorY, zB), ZB.set(BB, IB, TB.caveType, oB.c.CeilingY, FB)
```

#### 740. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6914` → after: `L6914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6914) · [Before (L6914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6914)

```diff
-               JB = Math.floor(JB), mB = Math.floor(mB), (pB || mB + 1 === this.heightmapVals.getOrGenerate(BB, jB, dB.e.GroundHeight)) && mB++;
+               NB = Math.floor(NB), gB = Math.floor(gB), (hB || gB + 1 === this.heightmapVals.getOrGenerate(BB, IB, oB.f.GroundHeight)) && gB++;
```

#### 741. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6930` → after: `L6930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6930) · [Before (L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6930)

```diff
-                 sB = (0, QB.D)(IB, pB, rB);
+                 FB = (0, TB.I)(GB, hB, zB);
```

#### 742. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6935` → after: `L6935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6935) · [Before (L6935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6935)

```diff
-                 kB = (0, QB.t)(JB, mB, yB),
+                 yB = (0, TB.s)(NB, gB, qB),
```

#### 743. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6947` → after: `L6947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6947) · [Before (L6947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6947)

```diff
-               gB = Math.floor(gB), tB = Math.floor(tB), tB + 1 === this.heightmapVals.getOrGenerate(BB, jB, dB.e.GroundHeight) && tB++, zB.set(BB, jB, nB.caveType, dB.c.FloorY, gB), zB.set(BB, jB, nB.caveType, dB.c.CeilingY, tB)
+               dB = Math.floor(dB), CB = Math.floor(CB), CB + 1 === this.heightmapVals.getOrGenerate(BB, IB, oB.f.GroundHeight) && CB++, ZB.set(BB, IB, JB.caveType, oB.c.FloorY, dB), ZB.set(BB, IB, JB.caveType, oB.c.CeilingY, CB)
```

#### 744. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6964` → after: `L6964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6964) · [Before (L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6964)

```diff
-               JB + 1 === this.heightmapVals.getOrGenerate(BB, jB, dB.e.GroundHeight) && JB++, zB.set(BB, jB, QB.caveType, dB.c.FloorY, sB), zB.set(BB, jB, QB.caveType, dB.c.CeilingY, JB)
+               NB + 1 === this.heightmapVals.getOrGenerate(BB, IB, oB.f.GroundHeight) && NB++, ZB.set(BB, IB, TB.caveType, oB.c.FloorY, FB), ZB.set(BB, IB, TB.caveType, oB.c.CeilingY, NB)
```

#### 745. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6968-L6969` → after: `L6968-L6969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6968-L6969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6968-L6969) · [Before (L6968-L6969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6968-L6969)

```diff
-             const QB = this.heightmapVals.getOrGenerate(BB, jB, dB.e.CavesAllowedBelowY);
-             if (QB !== IB.j)
+             const TB = this.heightmapVals.getOrGenerate(BB, IB, oB.f.CavesAllowedBelowY);
+             if (TB !== GB.g)
```

#### 746. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6972` → after: `L6972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6972) · [Before (L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6972)

```diff
-                 zB.get(BB, jB, nB, dB.c.FloorY) <= QB ? zB.set(BB, jB, nB, dB.c.CeilingY, QB) : (zB.set(BB, jB, nB, dB.c.FloorY, IB.l), zB.set(BB, jB, nB, dB.c.CeilingY, IB.l))
+                 ZB.get(BB, IB, JB, oB.c.FloorY) <= TB ? ZB.set(BB, IB, JB, oB.c.CeilingY, TB) : (ZB.set(BB, IB, JB, oB.c.FloorY, GB.j), ZB.set(BB, IB, JB, oB.c.CeilingY, GB.j))
```

#### 747. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6977` → after: `L6977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6977) · [Before (L6977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6977)

```diff
-         const GB = new aB.c("cave chunk metadata", 100, 6e4);
+         const UB = new nB.b("cave chunk metadata", 100, 6e4);
```

#### 748. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7125-L7126` → after: `L7125-L7126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7125-L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7125-L7126) · [Before (L7125-L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7125-L7126)

```diff
-                     caveEdgeNoiseGenerator: new QB.j(zB.caveEdgeNoiseParams, `${BB}CaveCutoff${IB}${nB}`),
-                     caveHeightNoiseGenerator: new QB.m(zB.caveHeightNoiseParams, zB.caveHeightNoiseThresholdParams, `${BB}Cave${IB}${nB}`),
+                     caveEdgeNoiseGenerator: new TB.g(ZB.caveEdgeNoiseParams, `${BB}CaveCutoff${GB}${JB}`),
+                     caveHeightNoiseGenerator: new TB.i(ZB.caveHeightNoiseParams, ZB.caveHeightNoiseThresholdParams, `${BB}Cave${GB}${JB}`),
```

#### 749. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7130-L7131` → after: `L7130-L7131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7130-L7131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7130-L7131) · [Before (L7130-L7131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7130-L7131)

```diff
-                     caveXZPerturbNoiseGenerator: new QB.j(zB.caveXZPerturbNoiseParams, `${BB}CaveHeightPerturb${IB}${nB}`),
-                     caveYPerturbNoiseGenerator: new QB.j(zB.caveYPerturbNoiseParams, `${BB}CaveHeightNoise${IB}${nB}`),
+                     caveXZPerturbNoiseGenerator: new TB.g(ZB.caveXZPerturbNoiseParams, `${BB}CaveHeightPerturb${GB}${JB}`),
+                     caveYPerturbNoiseGenerator: new TB.g(ZB.caveYPerturbNoiseParams, `${BB}CaveHeightNoise${GB}${JB}`),
```

#### 750. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7226-L7227` → after: `L7226-L7227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7226-L7227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7226-L7227) · [Before (L7226-L7227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7226-L7227)

```diff
-                     fillBlockId: (0, nB.C)(dB, zB),
-                     wallBlockIds: new NB.e([{
+                     fillBlockId: (0, JB.G)(oB, ZB),
+                     wallBlockIds: new vB.i([{
```

#### 751. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7250-L7252` → after: `L7250-L7252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7250-L7252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7250-L7252) · [Before (L7250-L7252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7250-L7252)

```diff
-                       rB = new QB.j(nB.pitXZPerturbNoiseParams, `${BB}DistPitPerturb${dB}`),
-                       JB = `${BB}PitGen${dB}`,
-                       mB = new UB.e("cavePit", nB.numChunksBetweenPits, !0, !1, JB, 100, jB),
+                       zB = new TB.g(JB.pitXZPerturbNoiseParams, `${BB}DistPitPerturb${oB}`),
+                       NB = `${BB}PitGen${oB}`,
+                       gB = new cB.d("cavePit", JB.numChunksBetweenPits, !0, !1, NB, 100, IB),
```

#### 752. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7254-L7258` → after: `L7254-L7258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7254-L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7254-L7258) · [Before (L7254-L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7254-L7258)

```diff
-                     console.assert(yB.chunkSearchRadius <= nB.numChunksBetweenPits / 2, `Cannot have overlapping cave features (pits), ${yB.chunkSearchRadius} ${nB.numChunksBetweenPits/2}`);
-                     const kB = new NB.j(nB.pitMinWidth, nB.pitMaxWidth),
-                       GB = new NB.j(nB.pitMinFloorY, nB.pitMaxFloorY),
-                       LB = new NB.j(nB.pitMinHeight, nB.pitMaxHeight),
-                       gB = new QB.j(nB.pitFloorYPerturbNoiseParams, `${BB}yPitPerturb${dB}`);
+                     console.assert(qB.chunkSearchRadius <= JB.numChunksBetweenPits / 2, `Cannot have overlapping cave features (pits), ${qB.chunkSearchRadius} ${JB.numChunksBetweenPits/2}`);
+                     const yB = new vB.l(JB.pitMinWidth, JB.pitMaxWidth),
+                       UB = new vB.l(JB.pitMinFloorY, JB.pitMaxFloorY),
+                       WB = new vB.l(JB.pitMinHeight, JB.pitMaxHeight),
+                       dB = new TB.g(JB.pitFloorYPerturbNoiseParams, `${BB}yPitPerturb${oB}`);
```

#### 753. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7260-L7261` → after: `L7260-L7261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7260-L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7260-L7261) · [Before (L7260-L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7260-L7261)

```diff
-                     null !== nB.pitHeightPerturbNoiseParams && (tB = new QB.j(nB.pitHeightPerturbNoiseParams, `${BB}heightPitPerturb${dB}`));
-                     const SB = new QB.j(nB.pitMidpointNoiseParams, `${BB}edgesPitPerturb${dB}`),
+                     null !== JB.pitHeightPerturbNoiseParams && (CB = new TB.g(JB.pitHeightPerturbNoiseParams, `${BB}heightPitPerturb${oB}`));
+                     const QB = new TB.g(JB.pitMidpointNoiseParams, `${BB}edgesPitPerturb${oB}`),
```

#### 754. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7268` → after: `L7268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7268) · [Before (L7268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7268)

```diff
-                     null !== nB.ceilingParams && (iB = IB++, qB = new NB.j(nB.ceilingParams.minThickness, nB.ceilingParams.maxThickness), aB[iB] = nB.ceilingParams.blockIds), void 0 !== nB.priority && (pB[MB] = nB.priority, null !== EB && (pB[EB] = nB.priority), null !== iB && (p … [truncated]
+                     null !== JB.ceilingParams && (OB = GB++, YB = new vB.l(JB.ceilingParams.minThickness, JB.ceilingParams.maxThickness), nB[OB] = JB.ceilingParams.blockIds), void 0 !== JB.priority && (hB[sB] = JB.priority, null !== wB && (hB[wB] = JB.priority), null !== OB && (h … [truncated]
```

#### 755. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7331` → after: `L7331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7331) · [Before (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7331)

```diff
-                     pB = new QB.j(aB.ravineXZPerturbNoiseParams, `${BB}DistRavPerturb${IB}`);
+                     hB = new TB.g(nB.ravineXZPerturbNoiseParams, `${BB}DistRavPerturb${GB}`);
```

#### 756. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7334-L7336` → after: `L7334-L7336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7334-L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7334-L7336) · [Before (L7334-L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7334-L7336)

```diff
-                   const sB = new QB.j(aB.ravineYPerturbNoiseParams, `${BB}yRavinePerturb${IB}`),
-                     JB = `${BB}RavineGen${IB}`,
-                     mB = new UB.e("caveRav", aB.numChunksBetweenRavines, !0, !1, JB, 100, jB),
+                   const FB = new TB.g(nB.ravineYPerturbNoiseParams, `${BB}yRavinePerturb${GB}`),
+                     NB = `${BB}RavineGen${GB}`,
+                     gB = new cB.d("caveRav", nB.numChunksBetweenRavines, !0, !1, NB, 100, IB),
```

#### 757. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7338-L7343` → after: `L7338-L7343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7338-L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7338-L7343) · [Before (L7338-L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7338-L7343)

```diff
-                   console.assert(yB.chunkSearchRadius <= aB.numChunksBetweenRavines / 2, `Cannot have overlapping cave features (ravines), ${yB.chunkSearchRadius} ${aB.numChunksBetweenRavines/2}`);
-                   const kB = new NB.j(aB.ravineMinWidth, aB.ravineMaxWidth),
-                     GB = new NB.j(aB.ravineMinLength, aB.ravineMaxLength),
-                     LB = new NB.j(aB.ravineMinFloorY, aB.ravineMaxFloorY, !0),
-                     gB = new NB.j(aB.ravineMinHeight, aB.ravineMaxHeight),
-                     tB = new NB.l(-1, 1);
+                   console.assert(qB.chunkSearchRadius <= nB.numChunksBetweenRavines / 2, `Cannot have overlapping cave features (ravines), ${qB.chunkSearchRadius} ${nB.numChunksBetweenRavines/2}`);
+                   const yB = new vB.l(nB.ravineMinWidth, nB.ravineMaxWidth),
+                     UB = new vB.l(nB.ravineMinLength, nB.ravineMaxLength),
+                     WB = new vB.l(nB.ravineMinFloorY, nB.ravineMaxFloorY, !0),
+                     dB = new vB.l(nB.ravineMinHeight, nB.ravineMaxHeight),
+                     CB = new vB.o(-1, 1);
```

#### 758. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7385` → after: `L7385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7385) · [Before (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7385)

```diff
-                     pB = new QB.j(aB.sphereXZPerturbNoiseParams, `${BB}DistSpherePerturb${IB}`);
+                     hB = new TB.g(nB.sphereXZPerturbNoiseParams, `${BB}DistSpherePerturb${GB}`);
```

#### 759. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7388-L7389` → after: `L7388-L7389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7388-L7389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7388-L7389) · [Before (L7388-L7389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7388-L7389)

```diff
-                   const sB = `${BB}SphereGen${IB}`,
-                     JB = new UB.e("caveSph", aB.numChunksBetweenSpheres, !0, !1, sB, 100, jB),
+                   const FB = `${BB}SphereGen${GB}`,
+                     NB = new cB.d("caveSph", nB.numChunksBetweenSpheres, !0, !1, FB, 100, IB),
```

#### 760. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7391-L7393` → after: `L7391-L7393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7391-L7393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7391-L7393) · [Before (L7391-L7393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7391-L7393)

```diff
-                   console.assert(mB.chunkSearchRadius <= aB.numChunksBetweenSpheres / 2, `Cannot have overlapping cave features (spheres), ${mB.chunkSearchRadius} ${aB.numChunksBetweenSpheres/2}`);
-                   const yB = new NB.j(aB.sphereMinRadius, aB.sphereMaxRadius, !0),
-                     kB = new NB.j(aB.sphereMinCentreY, aB.sphereMaxCentreY);
+                   console.assert(gB.chunkSearchRadius <= nB.numChunksBetweenSpheres / 2, `Cannot have overlapping cave features (spheres), ${gB.chunkSearchRadius} ${nB.numChunksBetweenSpheres/2}`);
+                   const qB = new vB.l(nB.sphereMinRadius, nB.sphereMaxRadius, !0),
+                     yB = new vB.l(nB.sphereMinCentreY, nB.sphereMaxCentreY);
```

#### 761. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7427-L7428` → after: `L7427-L7428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7427-L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7427-L7428) · [Before (L7427-L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7427-L7428)

```diff
-             if (!(0, nB.I)(zB)) return zB;
-             const QB = [(0, nB.v)(BB), (0, nB.v)(jB)],
+             if (!(0, JB.L)(ZB)) return ZB;
+             const TB = [(0, JB.y)(BB), (0, JB.y)(IB)],
```

#### 762. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7446` → after: `L7446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7446) · [Before (L7446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7446)

```diff
-                   UB = new NB.i(`pit${IB}|${uB}|${nB}${this.seed}`),
+                   cB = new vB.j(`pit${GB}|${kB}|${JB}${this.seed}`),
```

#### 763. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7456` → after: `L7456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7456) · [Before (L7456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7456)

```diff
-                   LB = null !== (zB = null === (QB = dB.pitCeilingThicknessDistribution) || void 0 === QB ? void 0 : QB.sample(UB)) && void 0 !== zB ? zB : 0;
+                   WB = null !== (ZB = null === (TB = oB.pitCeilingThicknessDistribution) || void 0 === TB ? void 0 : TB.sample(cB)) && void 0 !== ZB ? ZB : 0;
```

#### 764. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7489` → after: `L7489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7489) · [Before (L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7489)

```diff
-                   uB = new NB.i(`rav${dB}|${IB}|${zB}${this.seed}`),
+                   kB = new vB.j(`rav${oB}|${GB}|${ZB}${this.seed}`),
```

#### 765. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7495` → after: `L7495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7495) · [Before (L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7495)

```diff
-                 (0, QB.B)(sB);
+                 (0, TB.G)(FB);
```

#### 766. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7526` → after: `L7526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7526) · [Before (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7526)

```diff
-                   IB = new NB.i(`sph${nB}|${dB}|${zB}${this.seed}`),
+                   GB = new vB.j(`sph${JB}|${oB}|${ZB}${this.seed}`),
```

#### 767. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7546` → after: `L7546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7546) · [Before (L7546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7546)

```diff
-       39773: (BB, jB, zB) => {
+       39751: (BB, IB, ZB) => {
```

#### 768. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7548` → after: `L7548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7548) · [Before (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7548)

```diff
-           d: () => yB
+           b: () => qB
```

#### 769. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7550-L7552` → after: `L7550-L7552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7550-L7552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7550-L7552) · [Before (L7550-L7552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7550-L7552)

```diff
-         var QB = zB(39767),
-           nB = zB(39761),
-           dB = zB(1672),
+         var TB = ZB(39748),
+           JB = ZB(39735),
+           oB = ZB(1723),
```

#### 770. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7554-L7555` → after: `L7554-L7555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7554-L7555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7554-L7555) · [Before (L7554-L7555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7554-L7555)

```diff
-           NB = zB(658),
-           uB = zB(2944),
+           vB = ZB(665),
+           kB = ZB(3e3),
```

#### 771. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7557-L7560` → after: `L7557-L7560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7557-L7560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7557-L7560) · [Before (L7557-L7560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7557-L7560)

```diff
-           aB = zB(37821),
-           pB = zB(39782),
-           rB = zB(39229),
-           sB = zB(39784);
+           nB = ZB(37794),
+           hB = ZB(39759),
+           zB = ZB(39207),
+           FB = ZB(39767);
```

#### 772. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7563` → after: `L7563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7563) · [Before (L7563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7563)

```diff
-           const QB = new rB.d;
+           const TB = new zB.e;
```

#### 773. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7566` → after: `L7566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7566) · [Before (L7566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7566)

```diff
-             if (!(0, NB.I)(BB)) throw new Error(`Duplicate chunk at ${nB.chunkX}, ${nB.chunkY}, ${nB.chunkZ}`);
+             if (!(0, vB.L)(BB)) throw new Error(`Duplicate chunk at ${JB.chunkX}, ${JB.chunkY}, ${JB.chunkZ}`);
```

#### 774. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7569` → after: `L7569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7569) · [Before (L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7569)

```diff
-           return new pB.d(BB, {
+           return new hB.b(BB, {
```

#### 775. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7584` → after: `L7584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7584) · [Before (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7584)

```diff
-             rle: (0, sB.c)("EAABgQEHHAGBARcAAR8HAAEf1wcAAYEBBxwBgQEXAAGBAQIcASIDHAEiAYEBFwABHwcAAR+1BwADgQEHHAOBARMAA4EBBxwDgQETAAGIAQKBAQEcAiICHAIiA4EBEwABiAECgQEHAAOBARMAA4EBBwADgQETAAMfBwADHxMAAxwHAAMcEwADHAcAAxwTAAMdBwABHAIdFQABHQcAAh3KBQANgQEHHAiBAQQAAYgBAR0BiAEKgQEHHAiBAQQA … [truncated]
+             rle: (0, FB.d)("EAABgQEHHAGBARcAAR8HAAEf1wcAAYEBBxwBgQEXAAGBAQIcASIDHAEiAYEBFwABHwcAAR+1BwADgQEHHAOBARMAA4EBBxwDgQETAAGIAQKBAQEcAiICHAIiA4EBEwABiAECgQEHAAOBARMAA4EBBwADgQETAAMfBwADHxMAAxwHAAMcEwADHAcAAxwTAAMdBwABHAIdFQABHQcAAh3KBQANgQEHHAiBAQQAAYgBAR0BiAEKgQEHHAiBAQQA … [truncated]
```

#### 776. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7589` → after: `L7589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7589) · [Before (L7589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7589)

```diff
-             rle: (0, sB.c)("gBgABIEBAYgBGwAEgQEBHRsABIEBAYgBGwABiAEEgQEcAAEdAx/7BgAEAgKBARoABAIBgQEBiAEaAAQCAoEBGgAEBAKBARwAApYBAh/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR0AAZYBAQABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHwABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHAAB1QgCAAEfHAAB … [truncated]
+             rle: (0, FB.d)("gBgABIEBAYgBGwAEgQEBHRsABIEBAYgBGwABiAEEgQEcAAEdAx/7BgAEAgKBARoABAIBgQEBiAEaAAQCAoEBGgAEBAKBARwAApYBAh/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR0AAZYBAQABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHwABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHAAB1QgCAAEfHAAB … [truncated]
```

#### 777. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7594` → after: `L7594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7594) · [Before (L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7594)

```diff
-             rle: (0, sB.c)("AwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwABgQELBAEfBhwCIgEcAR8GBAMAAR8BlgEHAAGWAQ4AAZYB5wYAAYEBDAIJHAcCAwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBCwQBHwYcAiIBHAEfBgQDAAEfAdUIAZYBBQABlgECAAGWAQ0AAZYBBwAB1gjeBgABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwAB … [truncated]
+             rle: (0, FB.d)("AwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwABgQELBAEfBhwCIgEcAR8GBAMAAR8BlgEHAAGWAQ4AAZYB5wYAAYEBDAIJHAcCAwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBCwQBHwYcAiIBHAEfBgQDAAEfAdUIAZYBBQABlgECAAGWAQ0AAZYBBwAB1gjeBgABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwAB … [truncated]
```

#### 778. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7599` → after: `L7599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7599) · [Before (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7599)

```diff
-             rle: (0, sB.c)("BQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEaAAGWAQQAAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYgBGgAFBAGBARwAA5YBAR/6BgAEAgKBARoABAIBgQEBiAEaAAQCAYEBAR0aAAQEAoEBGwABlgEB1QgBlgECHxwAAdYI … [truncated]
+             rle: (0, FB.d)("BQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEaAAGWAQQAAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYgBGgAFBAGBARwAA5YBAR/6BgAEAgKBARoABAIBgQEBiAEaAAQCAYEBAR0aAAQEAoEBGwABlgEB1QgBlgECHxwAAdYI … [truncated]
```

#### 779. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7609` → after: `L7609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7609) · [Before (L7609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7609)

```diff
-             rle: (0, sB.c)("IATgBwAHBAwCBwQGAgcADAQHAAYECwABlgG0BwADBBICAwQIAgMAEgQDAAKBAQYCDAABlgELAASBAQGIAQMcGAABiAECgQEBiAEBHRsABR+bAwAFHxsAAYEBAQABgQEBAAGBARsAAYgBAQABgQEBAAGBAQGIAQEdAYgBGAABHQQAAYEBGgABHQGIAQKBAQEAA4EBGwABgQEfAAWBAYACAAIEHgICABYECAIXAAGWAQWBAQMcGAAFgQEDHBgA … [truncated]
+             rle: (0, FB.d)("IATgBwAHBAwCBwQGAgcADAQHAAYECwABlgG0BwADBBICAwQIAgMAEgQDAAKBAQYCDAABlgELAASBAQGIAQMcGAABiAECgQEBiAEBHRsABR+bAwAFHxsAAYEBAQABgQEBAAGBARsAAYgBAQABgQEBAAGBAQGIAQEdAYgBGAABHQQAAYEBGgABHQGIAQKBAQEAA4EBGwABgQEfAAWBAYACAAIEHgICABYECAIXAAGWAQWBAQMcGAAFgQEDHBgA … [truncated]
```

#### 780. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7614` → after: `L7614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7614) · [Before (L7614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7614)

```diff
-             rle: (0, sB.c)("IATgBwAJAgkECAIPBAkACAQEAAGeAQYAAZYBugcADAIEBA0CAwQIAgQEBAANBAMAAxwBHQGIAQOBARsAAYgBA4EBAYgBGwAFH5sDAAUfGwABgQEBAAGBAQEAAR0YAASBAQEAAYEBAQABgQEaAAGBAQQAAYEBGAABiAEBHQGIAQEABIEBHAABiAEbAAOBAQGIAQEdmwIAHgICBAgCFgQCAAMcBYEBDQABlgEKAAMcBYEBGwABHwOBAQEfHAAD … [truncated]
+             rle: (0, FB.d)("IATgBwAJAgkECAIPBAkACAQEAAGeAQYAAZYBugcADAIEBA0CAwQIAgQEBAANBAMAAxwBHQGIAQOBARsAAYgBA4EBAYgBGwAFH5sDAAUfGwABgQEBAAGBAQEAAR0YAASBAQEAAYEBAQABgQEaAAGBAQQAAYEBGAABiAEBHQGIAQEABIEBHAABiAEbAAOBAQGIAQEdmwIAHgICBAgCFgQCAAMcBYEBDQABlgEKAAMcBYEBGwABHwOBAQEfHAAD … [truncated]
```

#### 781. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7619` → after: `L7619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7619) · [Before (L7619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7619)

```diff
-             rle: (0, sB.c)("AQQfAgEAAQQeAgIAAR0EHBUABBwDAAMcFwADHAQAAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx0AAYgBBIEBHAABzRcBgQEBzRccAASBAQGIARwAAc0XAYEBAc0XHAAFgQGZAgABBB8CAQABBB4CAgABHQQcFQAEHAMAAxwXAAMcBAAB7w8fAAHvDx8A … [truncated]
+             rle: (0, FB.d)("AQQfAgEAAQQeAgIAAR0EHBUABBwDAAMcFwADHAQAAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx0AAYgBBIEBHAABzRcBgQEBzRccAASBAQGIARwAAc0XAYEBAc0XHAAFgQGZAgABBB8CAQABBB4CAgABHQQcFQAEHAMAAxwXAAMcBAAB7w8fAAHvDx8A … [truncated]
```

#### 782. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7624` → after: `L7624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7624) · [Before (L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7624)

```diff
-             rle: (0, sB.c)("HwIBBB4CAQQBAAQcFQAFHAIAAxwXAAEdAhz8AwAFgQEcAAEcAYEBARwcAAEdA4EBAYgBHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAUcAgADHBcAAxz8AwAFgQEcAAEcAYEBARwcAAGIAQOBAQEdHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAQcAR0CAAEdAhwXAAIcAR38AwAFgQEbAAWBARsABIEBAYgBHAABHAGB … [truncated]
+             rle: (0, FB.d)("HwIBBB4CAQQBAAQcFQAFHAIAAxwXAAEdAhz8AwAFgQEcAAEcAYEBARwcAAEdA4EBAYgBHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAUcAgADHBcAAxz8AwAFgQEcAAEcAYEBARwcAAGIAQOBAQEdHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAQcAR0CAAEdAhwXAAIcAR38AwAFgQEbAAWBARsABIEBAYgBHAABHAGB … [truncated]
```

#### 783. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7629` → after: `L7629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7629) · [Before (L7629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7629)

```diff
-             this.ZJ = jB, this.chunkToFixedPointPrefabs = void 0;
+             this.YN = IB, this.chunkToFixedPointPrefabs = void 0;
```

#### 784. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7633` → after: `L7633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7633) · [Before (L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7633)

```diff
-                 BQ: nB,
+                 DZ: JB,
```

#### 785. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7640` → after: `L7640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7640) · [Before (L7640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7640)

```diff
-               if (void 0 === BB) throw new Error(`Fixed-point prefab "${nB}" has not been inlined into the build using the BloxdSchematicInliner tool.`);
+               if (void 0 === BB) throw new Error(`Fixed-point prefab "${JB}" has not been inlined into the build using the BloxdSchematicInliner tool.`);
```

#### 786. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7691` → after: `L7691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7691) · [Before (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7691)

```diff
-               nearestFixedPrefabInfoForChunk: nB.o.create(this.ZJ, [BB, jB], QB.g.NumFields, NB)
+               nearestFixedPrefabInfoForChunk: JB.o.create(this.YN, [BB, IB], TB.j.NumFields, vB)
```

#### 787. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7696` → after: `L7696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7696) · [Before (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7696)

```diff
-             const dB = nB.getOrGenerate(BB, jB, QB.g.DistanceToNearestFixedPrefab);
+             const oB = JB.getOrGenerate(BB, IB, TB.j.DistanceToNearestFixedPrefab);
```

#### 788. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7700` → after: `L7700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7700) · [Before (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7700)

```diff
-             const NB = nB.getOrGenerate(BB, jB, QB.g.HeightOfNearestFixedPrefab);
+             const vB = JB.getOrGenerate(BB, IB, TB.j.HeightOfNearestFixedPrefab);
```

#### 789. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7705` → after: `L7705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7705) · [Before (L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7705)

```diff
-             return zB.getOrGenerate(BB, jB, QB.g.DistanceToNearestFixedPrefab) <= GB
+             return ZB.getOrGenerate(BB, IB, TB.j.DistanceToNearestFixedPrefab) <= UB
```

#### 790. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7709` → after: `L7709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7709) · [Before (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7709)

```diff
-             return 0 === zB.getOrGenerate(BB, jB, QB.g.DistanceToNearestFixedPrefab)
+             return 0 === ZB.getOrGenerate(BB, IB, TB.j.DistanceToNearestFixedPrefab)
```

#### 791. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7727` → after: `L7727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7727) · [Before (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7727)

```diff
-             return `${BB}|${jB}`
+             return `${BB}|${IB}`
```

#### 792. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7732` → after: `L7732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7732) · [Before (L7732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7732)

```diff
-             if (!(0, NB.I)(zB)) return zB;
+             if (!(0, vB.L)(ZB)) return ZB;
```

#### 793. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7736-L7740` → after: `L7736-L7740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7736-L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7736-L7740) · [Before (L7736-L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7736-L7740)

```diff
-             for (let dB = 0; dB < QB.x; dB += NB.y)
-               for (let jB = 0; jB < QB.y; jB += NB.y)
-                 for (let zB = 0; zB < QB.z; zB += NB.y) {
-                   const IB = UB()(new Uint16Array(NB.y * NB.y * NB.y), [NB.y, NB.y, NB.y]),
-                     uB = BB.getRLEChunk((0, NB.P)(dB), (0, NB.P)(jB), (0, NB.P)(zB));
+             for (let oB = 0; oB < TB.x; oB += vB.C)
+               for (let IB = 0; IB < TB.y; IB += vB.C)
+                 for (let ZB = 0; ZB < TB.z; ZB += vB.C) {
+                   const GB = cB()(new Uint16Array(vB.C * vB.C * vB.C), [vB.C, vB.C, vB.C]),
+                     kB = BB.getRLEChunk((0, vB.T)(oB), (0, vB.T)(IB), (0, vB.T)(ZB));
```

#### 794. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7742-L7744` → after: `L7742-L7744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7742-L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7742-L7744) · [Before (L7742-L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7742-L7744)

```diff
-                   const pB = Math.min(NB.y, QB.x - dB),
-                     rB = Math.min(NB.y, QB.y - jB),
-                     sB = Math.min(NB.y, QB.z - zB);
+                   const hB = Math.min(vB.C, TB.x - oB),
+                     zB = Math.min(vB.C, TB.y - IB),
+                     FB = Math.min(vB.C, TB.z - ZB);
```

#### 795. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7779` → after: `L7779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7779) · [Before (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7779)

```diff
-             zB.set(BB, jB, QB.g.DistanceToNearestFixedPrefab, nB), zB.set(BB, jB, QB.g.HeightOfNearestFixedPrefab, dB)
+             ZB.set(BB, IB, TB.j.DistanceToNearestFixedPrefab, JB), ZB.set(BB, IB, TB.j.HeightOfNearestFixedPrefab, oB)
```

#### 796. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7784` → after: `L7784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7784) · [Before (L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7784)

```diff
-       39754: (BB, jB, zB) => {
+       39733: (BB, IB, ZB) => {
```

#### 797. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7787` → after: `L7787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7787) · [Before (L7787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7787)

```diff
-           g: () => uB,
+           h: () => kB,
```

#### 798. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7790-L7793` → after: `L7790-L7793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7790-L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7790-L7793) · [Before (L7790-L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7790-L7793)

```diff
-         var QB = zB(39761),
-           nB = zB(39767),
-           dB = zB(39763),
-           IB = zB(39773);
+         var TB = ZB(39735),
+           JB = ZB(39748),
+           oB = ZB(39743),
+           GB = ZB(39751);
```

#### 799. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7796` → after: `L7796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7796) · [Before (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7796)

```diff
-           return new QB.j([{
+           return new TB.g([{
```

#### 800. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7838` → after: `L7838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7838) · [Before (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7838)

```diff
-             null !== sB && (UB = sB, aB = dB.p, pB = sB - dB.d, rB = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(BB, jB, nB, IB, zB, UB, aB, pB, rB)
+             null !== FB && (cB = FB, nB = oB.n, hB = FB - oB.e, zB = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(BB, IB, JB, GB, ZB, cB, nB, hB, zB)
```

#### 801. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7851-L7852` → after: `L7851-L7852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7851-L7852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7851-L7852) · [Before (L7851-L7852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7851-L7852)

```diff
-               sB = dB.p,
-               JB = dB.j,
+               FB = oB.n,
+               NB = oB.g,
```

#### 802. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7862` → after: `L7862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7862) · [Before (L7862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7862)

```diff
-                 jB < 1 && (sB = UB + Math.floor((uB - UB) * jB), rB >= sB && (sB = dB.p, mB = dB.f))
+                 IB < 1 && (FB = cB + Math.floor((kB - cB) * IB), zB >= FB && (FB = oB.n, gB = oB.f))
```

#### 803. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7870` → after: `L7870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7870) · [Before (L7870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7870)

```diff
-               JB = rB - dB.d
+               NB = zB - oB.e
```

#### 804. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7880-L7881` → after: `L7880-L7881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7880-L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7880-L7881) · [Before (L7880-L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7880-L7881)

```diff
-             const rB = IB.d.smoothHeightmapForFixedPointPrefab(Math.round(BB + zB / 4), Math.round(jB + QB / 4), uB, this.nearestFixedPrefabInfoForChunk);
-             null !== rB && UB > (uB = rB) && (UB = dB.p, pB = 0), NB.set(BB, jB, nB.e.GroundHeight, uB), NB.set(BB, jB, nB.e.WaterHeight, UB), NB.set(BB, jB, nB.e.CavesAllowedBelowY, aB), NB.set(BB, jB, nB.e.IsLake, pB), this.shouldCurtailCave(BB, jB, null !== rB) && NB.set(BB, j … [truncated]
+             const zB = GB.b.smoothHeightmapForFixedPointPrefab(Math.round(BB + ZB / 4), Math.round(IB + TB / 4), kB, this.nearestFixedPrefabInfoForChunk);
+             null !== zB && cB > (kB = zB) && (cB = oB.n, hB = 0), vB.set(BB, IB, JB.f.GroundHeight, kB), vB.set(BB, IB, JB.f.WaterHeight, cB), vB.set(BB, IB, JB.f.CavesAllowedBelowY, nB), vB.set(BB, IB, JB.f.IsLake, hB), this.shouldCurtailCave(BB, IB, null !== zB) && vB.set(BB, I … [truncated]
```

#### 805. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7893` → after: `L7893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7893) · [Before (L7893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7893)

```diff
-       39796: (BB, jB, zB) => {
+       39778: (BB, IB, ZB) => {
```

#### 806. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7895` → after: `L7895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7895) · [Before (L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7895)

```diff
-           e: () => UB
+           d: () => cB
```

#### 807. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7897-L7898` → after: `L7897-L7898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7897-L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7897-L7898) · [Before (L7897-L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7897-L7898)

```diff
-         var QB = zB(39761),
-           nB = zB(39802),
+         var TB = ZB(39735),
+           JB = ZB(39784),
```

#### 808. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7900-L7902` → after: `L7900-L7902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7900-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7900-L7902) · [Before (L7900-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7900-L7902)

```diff
-           IB = zB(4347),
-           NB = zB(39846);
-         const uB = new NB.c("point cells", 500, 6e4);
+           GB = ZB(4428),
+           vB = ZB(39832);
+         const kB = new vB.b("point cells", 500, 6e4);
```

#### 809. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7919` → after: `L7919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7919) · [Before (L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7919)

```diff
-             if (this.gridSize < zB) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${zB} (chunkSize=${BB}, halfBox=${jB}). Points near chunk edges would be missed.`)
+             if (this.gridSize < ZB) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${ZB} (chunkSize=${BB}, halfBox=${IB}). Points near chunk edges would be missed.`)
```

#### 810. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7926` → after: `L7926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7926) · [Before (L7926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7926)

```diff
-             return !!QB.has((0, NB.g)(BB, jB))
+             return !!TB.has((0, vB.d)(BB, IB))
```

#### 811. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7935` → after: `L7935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7935) · [Before (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7935)

```diff
-               const zB = (0, QB.D)(uB, BB, jB);
+               const ZB = (0, TB.I)(kB, BB, IB);
```

#### 812. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7964` → after: `L7964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7964) · [Before (L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7964)

```diff
-               const BB = (0, QB.D)(UB, jB, zB);
+               const BB = (0, TB.I)(cB, IB, ZB);
```

#### 813. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7976` → after: `L7976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7976) · [Before (L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7976)

```diff
-               const pB = (0, QB.D)(aB, jB, zB) - IB;
+               const hB = (0, TB.I)(nB, IB, ZB) - GB;
```

#### 814. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8009` → after: `L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8009) · [Before (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8009)

```diff
-               const dB = new IB.i(`${BB}${jB}${this.seed}jitter`);
+               const oB = new GB.j(`${BB}${IB}${this.seed}jitter`);
```

#### 815. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8020` → after: `L8020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8020) · [Before (L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8020)

```diff
-               const NB = new IB.i(`${BB}${jB}${this.seed}pts`),
+               const vB = new GB.j(`${BB}${IB}${this.seed}pts`),
```

#### 816. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8048` → after: `L8048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8048) · [Before (L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8048)

```diff
-               for (const BB of nB) uB.add((0, NB.g)(BB[0], BB[1]))
+               for (const BB of JB) kB.add((0, vB.d)(BB[0], BB[1]))
```

#### 817. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8052` → after: `L8052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8052) · [Before (L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8052)

```diff
-               points: this.useKthClosestPoint ? nB : null
+               points: this.useKthClosestPoint ? JB : null
```

#### 818. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8057` → after: `L8057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8057) · [Before (L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8057)

```diff
-       39871: (BB, jB, zB) => {
+       39852: (BB, IB, ZB) => {
```

#### 819. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8061-L8070` → after: `L8061-L8070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8061-L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8061-L8070) · [Before (L8061-L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8061-L8070)

```diff
-         var QB = zB(39761),
-           nB = zB(39796),
-           dB = zB(39767),
-           IB = zB(39763),
-           NB = zB(37821),
-           uB = zB(39865),
-           UB = zB(628),
-           aB = zB(658),
-           pB = zB(39229),
-           rB = zB(4347);
+         var TB = ZB(39735),
+           JB = ZB(39778),
+           oB = ZB(39748),
+           GB = ZB(39743),
+           vB = ZB(37794),
+           kB = ZB(39844),
+           cB = ZB(641),
+           nB = ZB(665),
+           hB = ZB(39207),
+           zB = ZB(4428);
```

#### 820. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8085` → after: `L8085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8085) · [Before (L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8085)

```diff
-             return null !== (jB = mB[this.suffixMapping[BB]]) && void 0 !== jB ? jB : []
+             return null !== (IB = gB[this.suffixMapping[BB]]) && void 0 !== IB ? IB : []
```

#### 821. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8104` → after: `L8104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8104) · [Before (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8104)

```diff
-               jB[zB] = (null !== (IB = jB[zB]) && void 0 !== IB ? IB : 0) + 1, jB[zB] >= kB && QB.splice(QB.indexOf(zB), 1)
+               IB[ZB] = (null !== (GB = IB[ZB]) && void 0 !== GB ? GB : 0) + 1, IB[ZB] >= yB && TB.splice(TB.indexOf(ZB), 1)
```

#### 822. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8171` → after: `L8171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8171) · [Before (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8171)

```diff
-             return `r${BB}|m${Number(jB)}`
+             return `r${BB}|m${Number(IB)}`
```

#### 823. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8205` → after: `L8205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8205) · [Before (L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8205)

```diff
-             const [, sB, JB] = null !== (nB = tB.exec(pB)) && void 0 !== nB ? nB : [];
+             const [, FB, NB] = null !== (JB = CB.exec(hB)) && void 0 !== JB ? JB : [];
```

#### 824. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8208` → after: `L8208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8208) · [Before (L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8208)

```diff
-               rB = null !== (mB = null === (yB = dB[`${aB}|meta|${[gB.split("").filter(((BB,jB)=>sB.split("").some((BB=>{const zB=gB.indexOf(BB);return((QB?3-zB:zB)+IB)%4===jB})))).join(""),JB].filter(Boolean).join("|")}`]) || void 0 === yB ? void 0 : yB.id) && void 0 !== mB ? mB … [truncated]
+               zB = null !== (gB = null === (qB = oB[`${nB}|meta|${[dB.split("").filter(((BB,IB)=>FB.split("").some((BB=>{const ZB=dB.indexOf(BB);return((TB?3-ZB:ZB)+GB)%4===IB})))).join(""),NB].filter(Boolean).join("|")}`]) || void 0 === qB ? void 0 : qB.id) && void 0 !== gB ? gB … [truncated]
```

#### 825. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8213` → after: `L8213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8213) · [Before (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8213)

```diff
-               let jB = pB.replace(`rot${UB}`, `rot${BB}`);
+               let IB = hB.replace(`rot${cB}`, `rot${BB}`);
```

#### 826. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8218` → after: `L8218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8218) · [Before (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8218)

```diff
-                 jB = `${nB[1]}|${BB.join("")}`
+                 IB = `${JB[1]}|${BB.join("")}`
```

#### 827. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8220-L8221` → after: `L8220-L8221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8220-L8221) · [Before (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8220-L8221)

```diff
-               const IB = `${aB}|${jB}`;
-               if (rB = null !== (kB = null === (GB = dB[IB]) || void 0 === GB ? void 0 : GB.id) && void 0 !== kB ? kB : null, null === rB) {
+               const GB = `${nB}|${IB}`;
+               if (zB = null !== (yB = null === (UB = oB[GB]) || void 0 === UB ? void 0 : UB.id) && void 0 !== yB ? yB : null, null === zB) {
```

#### 828. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8229` → after: `L8229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8229) · [Before (L8229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8229)

```diff
-         var EB = zB(2944),
+         var wB = ZB(3e3),
```

#### 829. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8231` → after: `L8231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8231) · [Before (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8231)

```diff
-           qB = zB(39773);
+           YB = ZB(39751);
```

#### 830. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8237` → after: `L8237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8237) · [Before (L8237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8237)

```diff
-             if (uB === IB.l) continue;
+             if (kB === GB.j) continue;
```

#### 831. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8259` → after: `L8259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8259) · [Before (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8259)

```diff
-         const DB = new rB.e([{
+         const HB = new zB.i([{
```

#### 832. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8272` → after: `L8272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8272) · [Before (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8272)

```diff
-           FB = new rB.e([{
+           MB = new zB.i([{
```

#### 833. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8282` → after: `L8282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8282) · [Before (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8282)

```diff
-         const hB = new rB.e(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Oth … [truncated]
+         const RB = new zB.i(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Oth … [truncated]
```

#### 834. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8291` → after: `L8291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8291) · [Before (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8291)

```diff
-             const jB = `${hB.sample(BB)} ${this.mobType}`;
+             const IB = `${RB.sample(BB)} ${this.mobType}`;
```

#### 835. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8307` → after: `L8307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8307) · [Before (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8307)

```diff
-               const BB = new rB.j(QB.minItems, QB.maxItems + 1),
+               const BB = new zB.l(TB.minItems, TB.maxItems + 1),
```

#### 836. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8311-L8312` → after: `L8311-L8312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8311-L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8311-L8312) · [Before (L8311-L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8311-L8312)

```diff
-                 const BB = jB.amount ? new rB.j(jB.amount.min, jB.amount.max + 1) : null,
-                   QB = null !== (zB = jB.itemAttributesDistribution) && void 0 !== zB ? zB : null;
+                 const BB = IB.amount ? new zB.l(IB.amount.min, IB.amount.max + 1) : null,
+                   TB = null !== (ZB = IB.itemAttributesDistribution) && void 0 !== ZB ? ZB : null;
```

#### 837. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8322` → after: `L8322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8322) · [Before (L8322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8322)

```diff
-               const dB = new rB.e(nB);
+               const oB = new zB.i(JB);
```

#### 838. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8328` → after: `L8328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8328) · [Before (L8328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8328)

```diff
-             this.itemCategoryDistributions = jB, this.shouldEnchantDistribution = new rB.c(BB.enchantmentProbability), this.enchantmentTier = BB.enchantmentTier
+             this.itemCategoryDistributions = IB, this.shouldEnchantDistribution = new zB.e(BB.enchantmentProbability), this.enchantmentTier = BB.enchantmentTier
```

#### 839. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8331` → after: `L8331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8331) · [Before (L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8331)

```diff
-             const jB = Array(aB.k).fill(null);
+             const IB = Array(nB.j).fill(null);
```

#### 840. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8339-L8341` → after: `L8339-L8341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8339-L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8339-L8341) · [Before (L8339-L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8339-L8341)

```diff
-                   rB = null !== (QB = null === (nB = aB.amountDistribution) || void 0 === nB ? void 0 : nB.sample(BB)) && void 0 !== QB ? QB : null,
-                   sB = null !== (dB = null === (IB = aB.attributesDistribution) || void 0 === IB ? void 0 : IB.sample(BB)) && void 0 !== dB ? dB : {},
-                   JB = null !== (NB = this.getEnchantmentAttributesForItem(BB, pB)) && void 0 !== NB ? NB : {};
+                   zB = null !== (TB = null === (JB = nB.amountDistribution) || void 0 === JB ? void 0 : JB.sample(BB)) && void 0 !== TB ? TB : null,
+                   FB = null !== (oB = null === (GB = nB.attributesDistribution) || void 0 === GB ? void 0 : GB.sample(BB)) && void 0 !== oB ? oB : {},
+                   NB = null !== (vB = this.getEnchantmentAttributesForItem(BB, hB)) && void 0 !== vB ? vB : {};
```

#### 841. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8348` → after: `L8348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8348) · [Before (L8348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8348)

```diff
-                       ...null !== (uB = sB.customAttributes) && void 0 !== uB ? uB : {},
+                       ...null !== (kB = FB.customAttributes) && void 0 !== kB ? kB : {},
```

#### 842. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8355` → after: `L8355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8355) · [Before (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8355)

```diff
-             return (0, rB.p)(jB, BB), jB
+             return (0, zB.s)(IB, BB), IB
```

#### 843. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8661` → after: `L8661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8661) · [Before (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8661)

```diff
-           if (jB < 0 || jB > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${jB}`);
+           if (IB < 0 || IB > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${IB}`);
```

#### 844. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8732` → after: `L8732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8732) · [Before (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8732)

```diff
-           [aB.j.COMMON]: new ZB({
+           [nB.i.COMMON]: new mB({
```

#### 845. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8761` → after: `L8761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8761) · [Before (L8761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8761)

```diff
-           [aB.j.UNCOMMON]: new ZB({
+           [nB.i.UNCOMMON]: new mB({
```

#### 846. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8790` → after: `L8790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8790) · [Before (L8790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8790)

```diff
-           [aB.j.RARE]: new ZB({
+           [nB.i.RARE]: new mB({
```

#### 847. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8819` → after: `L8819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8819) · [Before (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8819)

```diff
-           [aB.j.EPIC]: new ZB({
+           [nB.i.EPIC]: new mB({
```

#### 848. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8856` → after: `L8856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8856) · [Before (L8856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8856)

```diff
-           [aB.j.LEGENDARY]: new ZB({
+           [nB.i.LEGENDARY]: new mB({
```

#### 849. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8981` → after: `L8981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8981) · [Before (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8981)

```diff
-             const BB = new rB.i(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
+             const BB = new zB.j(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
```

#### 850. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8986` → after: `L8986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8986) · [Before (L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8986)

```diff
-                   chestStr: (0, aB.B)(jB),
+                   chestStr: (0, nB.F)(IB),
```

#### 851. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8996` → after: `L8996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8996) · [Before (L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8996)

```diff
-             this.seed = void 0, this.ZJ = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
+             this.seed = void 0, this.YN = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
```

#### 852. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8999` → after: `L8999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8999) · [Before (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8999)

```diff
-               ZJ: zB,
+               YN: ZB,
```

#### 853. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9005` → after: `L9005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9005) · [Before (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9005)

```diff
-             nj.BLOCK_ID_MAPPINGS || (nj.BLOCK_ID_MAPPINGS = new MB(QB)), YB || (YB = new JB(IB)), this.seed = jB, this.ZJ = zB, this.invisibleSolidBlockId = QB["Invisible Solid"].id, this.emptySpawnerBlockId = QB["Empty Spawner Block"].id, this.chestToLootChestBlockId = new UB.c( … [truncated]
+             JI.BLOCK_ID_MAPPINGS || (JI.BLOCK_ID_MAPPINGS = new sB(TB)), jB || (jB = new NB(GB)), this.seed = IB, this.YN = ZB, this.invisibleSolidBlockId = TB["Invisible Solid"].id, this.emptySpawnerBlockId = TB["Empty Spawner Block"].id, this.chestToLootChestBlockId = new cB.c( … [truncated]
```

#### 854. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9012` → after: `L9012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9012) · [Before (L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9012)

```diff
-             for (const nB of dB.n) aB[nB] = QB[`${nB} Spawner Block`].id;
+             for (const JB of oB.q) nB[JB] = TB[`${JB} Spawner Block`].id;
```

#### 855. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9027` → after: `L9027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9027) · [Before (L9027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9027)

```diff
-                   uB = new nB.e(`prefab|${BB}|${IB}`, NB.minDistanceBetweenPrefabs, !1, !0, jB, QB, zB, null, !0)
+                   kB = new JB.d(`prefab|${BB}|${GB}`, vB.minDistanceBetweenPrefabs, !1, !0, IB, TB, ZB, null, !0)
```

#### 856. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9041` → after: `L9041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9041) · [Before (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9041)

```diff
-             return new rB.i(`${BB}|${jB}|${this.seed}|prefabGenerator`)
+             return new zB.j(`${BB}|${IB}|${this.seed}|prefabGenerator`)
```

#### 857. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9070` → after: `L9070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9070) · [Before (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9070)

```diff
-               UB = this.ZJ >> 1,
+               cB = this.YN >> 1,
```

#### 858. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9072` → after: `L9072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9072) · [Before (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9072)

```diff
-               rB = BB + this.ZJ + this.prefabRadius,
+               zB = BB + this.YN + this.prefabRadius,
```

#### 859. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9074` → after: `L9074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9074) · [Before (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9074)

```diff
-               JB = jB + this.ZJ + this.prefabRadius;
+               NB = IB + this.YN + this.prefabRadius;
```

#### 860. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9082` → after: `L9082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9082) · [Before (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9082)

```diff
-                 if (yB === dB.k.SURFACE && GB === dB.j.VERY_HIGH && !NB.regionMayHaveVeryHighSurfacePrefabs(aB, sB, rB, JB)) continue;
+                 if (qB === oB.n.SURFACE && UB === oB.l.VERY_HIGH && !vB.regionMayHaveVeryHighSurfacePrefabs(nB, FB, zB, NB)) continue;
```

#### 861. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9092` → after: `L9092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9092) · [Before (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9092)

```diff
-                   if (yB === dB.k.SURFACE && !UB.canPlaceSurfacePrefab(jB, NB)) continue;
+                   if (qB === oB.n.SURFACE && !cB.canPlaceSurfacePrefab(IB, vB)) continue;
```

#### 862. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9111` → after: `L9111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9111) · [Before (L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9111)

```diff
-                       console.error(`Invalid prefab rotation: ${LB}`)
+                       console.error(`Invalid prefab rotation: ${WB}`)
```

#### 863. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9128` → after: `L9128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9128) · [Before (L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9128)

```diff
-                   if (yB === dB.k.SURFACE && null !== UB.maxSurfacePrefabRelief) {
+                   if (qB === oB.n.SURFACE && null !== cB.maxSurfacePrefabRelief) {
```

#### 864. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9135` → after: `L9135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9135) · [Before (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9135)

```diff
-                   const oB = new pB.d;
+                   const pB = new hB.e;
```

#### 865. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9143` → after: `L9143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9143) · [Before (L9143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9143)

```diff
-                   const HB = new pB.d;
+                   const aB = new hB.e;
```

#### 866. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9173` → after: `L9173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9173) · [Before (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9173)

```diff
-                 const QB = nB.getOrGenerate(BB + aB, jB + zB, dB.e.GroundHeight);
+                 const TB = JB.getOrGenerate(BB + nB, IB + ZB, oB.f.GroundHeight);
```

#### 867. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9194-L9195` → after: `L9194-L9195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9194-L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9194-L9195) · [Before (L9194-L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9194-L9195)

```diff
-                 nQ: BB,
-                 dQ: zB
+                 BT: BB,
+                 IT: ZB
```

#### 868. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9208` → after: `L9208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9208) · [Before (L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9208)

```diff
-                   if (zB.getOrGenerate(UB, BB, dB.e.WaterHeight) !== IB.p) return {
+                   if (ZB.getOrGenerate(cB, BB, oB.f.WaterHeight) !== GB.n) return {
```

#### 869. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9212-L9213` → after: `L9212-L9213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9212-L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9212-L9213) · [Before (L9212-L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9212-L9213)

```diff
-                   const jB = zB.getOrGenerate(UB, BB, dB.e.GroundHeight);
-                   if (uB.d.isInCave(UB, jB, BB, QB)) return {
+                   const IB = ZB.getOrGenerate(cB, BB, oB.f.GroundHeight);
+                   if (kB.b.isInCave(cB, IB, BB, TB)) return {
```

#### 870. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9217` → after: `L9217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9217) · [Before (L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9217)

```diff
-                   if (qB.d.isNearFixedPointPrefab(UB, BB, nB)) return {
+                   if (YB.b.isNearFixedPointPrefab(cB, BB, JB)) return {
```

#### 871. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9264-L9265` → after: `L9264-L9265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9264-L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9264-L9265) · [Before (L9264-L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9264-L9265)

```diff
-             if (NB === this.emptySpawnerBlockId && (NB = null !== (uB = QB.spawnerBlockLocationToBlockId.get(BB, jB, zB)) && void 0 !== uB ? uB : this.defaultSpawnerBlockId), NB < 0) return NB;
-             if (NB = null !== (dB = null === (IB = QB.blockIdMapping) || void 0 === IB ? void 0 : IB[NB]) && void 0 !== dB ? dB : NB, void 0 !== this.chestToLootChestBlockId.reverseGet(NB)) {
+             if (vB === this.emptySpawnerBlockId && (vB = null !== (kB = TB.spawnerBlockLocationToBlockId.get(BB, IB, ZB)) && void 0 !== kB ? kB : this.defaultSpawnerBlockId), vB < 0) return vB;
+             if (vB = null !== (oB = null === (GB = TB.blockIdMapping) || void 0 === GB ? void 0 : GB[vB]) && void 0 !== oB ? oB : vB, void 0 !== this.chestToLootChestBlockId.reverseGet(vB)) {
```

#### 872. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9267` → after: `L9267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9267) · [Before (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9267)

```diff
-               const dB = null !== (UB = QB.chestLocationToQuality.get(BB, jB, zB)) && void 0 !== UB ? UB : nj.DEFAULT_CHEST_QUALITY,
+               const oB = null !== (cB = TB.chestLocationToQuality.get(BB, IB, ZB)) && void 0 !== cB ? cB : JI.DEFAULT_CHEST_QUALITY,
```

#### 873. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9294` → after: `L9294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9294) · [Before (L9294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9294)

```diff
-             } = BB, dB = iB()(new Int32Array(zB * QB * nB), [zB, QB, nB]), IB = new pB.d;
+             } = BB, oB = OB()(new Int32Array(ZB * TB * JB), [ZB, TB, JB]), GB = new hB.e;
```

#### 874. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9296` → after: `L9296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9296) · [Before (L9296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9296)

```diff
-             const uB = new pB.d;
+             const kB = new hB.e;
```

#### 875. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9298-L9302` → after: `L9298-L9302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9298-L9302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9298-L9302) · [Before (L9298-L9302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9298-L9302)

```diff
-             for (let UB = 0; UB < zB; UB += aB.y)
-               for (let jB = 0; jB < QB; jB += aB.y)
-                 for (let pB = 0; pB < nB; pB += aB.y) {
-                   const rB = iB()(new Uint16Array(aB.y * aB.y * aB.y), [aB.y, aB.y, aB.y]),
-                     sB = BB.schematic.getRLEChunk((0, aB.P)(UB), (0, aB.P)(jB), (0, aB.P)(pB));
+             for (let cB = 0; cB < ZB; cB += nB.C)
+               for (let IB = 0; IB < TB; IB += nB.C)
+                 for (let hB = 0; hB < JB; hB += nB.C) {
+                   const zB = OB()(new Uint16Array(nB.C * nB.C * nB.C), [nB.C, nB.C, nB.C]),
+                     FB = BB.schematic.getRLEChunk((0, nB.T)(cB), (0, nB.T)(IB), (0, nB.T)(hB));
```

#### 876. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9304-L9306` → after: `L9304-L9306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9304-L9306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9304-L9306) · [Before (L9304-L9306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9304-L9306)

```diff
-                   const JB = Math.min(aB.y, zB - UB),
-                     mB = Math.min(aB.y, QB - jB),
-                     yB = Math.min(aB.y, nB - pB);
+                   const NB = Math.min(nB.C, ZB - cB),
+                     gB = Math.min(nB.C, TB - IB),
+                     qB = Math.min(nB.C, JB - hB);
```

#### 877. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9315` → after: `L9315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9315) · [Before (L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9315)

```diff
-                         else if (this.emptySpawnerBlockId === NB) uB.get(aB, sB, JB) || console.error(`Empty spawner block found in prefab ${BB.schematic.name} at (${aB}, ${sB}, ${JB}) with no mob type specified. Defaulting to "${nj.DEFAULT_MOB_TYPE}" mob type.`);
+                         else if (this.emptySpawnerBlockId === vB) kB.get(nB, FB, NB) || console.error(`Empty spawner block found in prefab ${BB.schematic.name} at (${nB}, ${FB}, ${NB}) with no mob type specified. Defaulting to "${JI.DEFAULT_MOB_TYPE}" mob type.`);
```

#### 878. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9318` → after: `L9318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9318) · [Before (L9318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9318)

```diff
-                           void 0 !== jB && (IB.get(aB, sB, JB) || console.error(`Chest found in prefab ${BB.schematic.name} at (${aB}, ${sB}, ${JB}) with no quality specified. Defaulting to "${nj.DEFAULT_CHEST_QUALITY}" quality.`), NB = jB)
+                           void 0 !== IB && (GB.get(nB, FB, NB) || console.error(`Chest found in prefab ${BB.schematic.name} at (${nB}, ${FB}, ${NB}) with no quality specified. Defaulting to "${JI.DEFAULT_CHEST_QUALITY}" quality.`), vB = IB)
```

#### 879. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9341` → after: `L9341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9341) · [Before (L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9341)

```diff
-           }(BB, BB.shouldSwapXZ ? zB : jB)
+           }(BB, BB.shouldSwapXZ ? ZB : IB)
```

#### 880. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9348` → after: `L9348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9348) · [Before (L9348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9348)

```diff
-           }(BB, BB.shouldSwapXZ ? jB : zB)
+           }(BB, BB.shouldSwapXZ ? IB : ZB)
```

#### 881. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9350` → after: `L9350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9350) · [Before (L9350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9350)

```diff
-         nj.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, nj.BLOCK_ID_MAPPINGS = void 0, nj.DEFAULT_MOB_TYPE = "Draugr Zombie", nj.DEFAULT_CHEST_QUALITY = aB.j.COMMON;
+         JI.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, JI.BLOCK_ID_MAPPINGS = void 0, JI.DEFAULT_MOB_TYPE = "Draugr Zombie", JI.DEFAULT_CHEST_QUALITY = nB.i.COMMON;
```

#### 882. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9371` → after: `L9371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9371) · [Before (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9371)

```diff
-             const zB = new QB.g(2 * BB + 1, [-BB, -BB]);
+             const ZB = new TB.e(2 * BB + 1, [-BB, -BB]);
```

#### 883. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9380` → after: `L9380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9380) · [Before (L9380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9380)

```diff
-             this.ZJ = zB, this.seed = QB, this.blockMetadata = dB, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
+             this.YN = ZB, this.seed = TB, this.blockMetadata = oB, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
```

#### 884. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9383` → after: `L9383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9383) · [Before (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9383)

```diff
-                 [aB.s.Maple]: {
+                 [nB.v.Maple]: {
```

#### 885. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9391` → after: `L9391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9391) · [Before (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9391)

```diff
-                 [aB.s.Pine]: {
+                 [nB.v.Pine]: {
```

#### 886. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9401` → after: `L9401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9401) · [Before (L9401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9401)

```diff
-                 [aB.s.Plum]: {
+                 [nB.v.Plum]: {
```

#### 887. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9409` → after: `L9409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9409) · [Before (L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9409)

```diff
-                 [aB.s.Cedar]: {
+                 [nB.v.Cedar]: {
```

#### 888. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9417` → after: `L9417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9417) · [Before (L9417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9417)

```diff
-                 [aB.s.Aspen]: {
+                 [nB.v.Aspen]: {
```

#### 889. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9427` → after: `L9427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9427) · [Before (L9427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9427)

```diff
-                 [aB.s.Jungle]: {
+                 [nB.v.Jungle]: {
```

#### 890. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9437` → after: `L9437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9437) · [Before (L9437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9437)

```diff
-                 [aB.s.Palm]: {
+                 [nB.v.Palm]: {
```

#### 891. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9447` → after: `L9447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9447) · [Before (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9447)

```diff
-                 [aB.s.AutumnMaple]: {
+                 [nB.v.AutumnMaple]: {
```

#### 892. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9455` → after: `L9455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9455) · [Before (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9455)

```diff
-                 [aB.s.Pear]: {
+                 [nB.v.Pear]: {
```

#### 893. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9465` → after: `L9465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9465) · [Before (L9465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9465)

```diff
-                 [aB.s.Cherry]: {
+                 [nB.v.Cherry]: {
```

#### 894. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9475` → after: `L9475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9475) · [Before (L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9475)

```diff
-                 [aB.s.Spectral]: {
+                 [nB.v.Spectral]: {
```

#### 895. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9483` → after: `L9483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9483) · [Before (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9483)

```diff
-                 [aB.s.Mango]: {
+                 [nB.v.Mango]: {
```

#### 896. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9493` → after: `L9493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9493) · [Before (L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9493)

```diff
-                 [aB.s.AutumnAspen]: {
+                 [nB.v.AutumnAspen]: {
```

#### 897. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9503` → after: `L9503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9503) · [Before (L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9503)

```diff
-                 [aB.s.Dead]: {
+                 [nB.v.Dead]: {
```

#### 898. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9513` → after: `L9513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9513) · [Before (L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9513)

```diff
-                 [aB.s.FallenLog]: {
+                 [nB.v.FallenLog]: {
```

#### 899. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9523-L9524` → after: `L9523-L9524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9523-L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9523-L9524) · [Before (L9523-L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9523-L9524)

```diff
-               }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((BB => dB[BB].id)), this.maxTreeRadius = BB.maxTreeRadius, this.ZJ <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk si … [truncated]
-             if (this.ZJ <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
+               }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((BB => oB[BB].id)), this.maxTreeRadius = BB.maxTreeRadius, this.YN <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk si … [truncated]
+             if (this.YN <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
```

#### 900. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9598` → after: `L9598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9598) · [Before (L9598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9598)

```diff
-               if (BB.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${BB.radius} for canopy type "${nB}" is larger than tree radius ${this.maxTreeRadius}`)
+               if (BB.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${BB.radius} for canopy type "${JB}" is larger than tree radius ${this.maxTreeRadius}`)
```

#### 901. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9602-L9603` → after: `L9602-L9603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9602-L9603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9602-L9603) · [Before (L9602-L9603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9602-L9603)

```diff
-             for (const nB of BB.biomeSelector.EQ) nB.biome.treeMinDist && (NB = Math.min(NB, nB.biome.treeMinDist), uB = Math.max(uB, nB.biome.treeMinDist));
-             this.treePointGen = new nB.e("tree", 6, !0, !1, QB, 300, zB, {
+             for (const JB of BB.biomeSelector.dT) JB.biome.treeMinDist && (vB = Math.min(vB, JB.biome.treeMinDist), kB = Math.max(kB, JB.biome.treeMinDist));
+             this.treePointGen = new JB.d("tree", 6, !0, !1, TB, 300, ZB, {
```

#### 902. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9611-L9612` → after: `L9611-L9612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9611-L9612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9611-L9612) · [Before (L9611-L9612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9611-L9612)

```diff
-             for (let sB = BB - this.maxTreeRadius; sB < BB + this.ZJ + this.maxTreeRadius; sB++)
-               for (let BB = jB - this.maxTreeRadius; BB < jB + this.ZJ + this.maxTreeRadius; BB++) {
+             for (let FB = BB - this.maxTreeRadius; FB < BB + this.YN + this.maxTreeRadius; FB++)
+               for (let BB = IB - this.maxTreeRadius; BB < IB + this.YN + this.maxTreeRadius; BB++) {
```

#### 903. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9616-L9618` → after: `L9616-L9618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9616-L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9616-L9618) · [Before (L9616-L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9616-L9618)

```diff
-                   if (zB.getOrGenerate(sB, BB, dB.e.WaterHeight) !== IB.p) continue;
-                   const QB = zB.getOrGenerate(sB, BB, dB.e.GroundHeight);
-                   if (uB.d.isInCave(sB, QB, BB, nB)) continue;
+                   if (ZB.getOrGenerate(FB, BB, oB.f.WaterHeight) !== GB.n) continue;
+                   const TB = ZB.getOrGenerate(FB, BB, oB.f.GroundHeight);
+                   if (kB.b.isInCave(FB, TB, BB, JB)) continue;
```

#### 904. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9620-L9621` → after: `L9620-L9621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9620-L9621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9620-L9621) · [Before (L9620-L9621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9620-L9621)

```diff
-                   if (qB.d.isNearFixedPointPrefab(sB, BB, UB)) continue;
-                   const JB = new rB.i(`${sB}${BB}${this.seed}treeHeight`),
+                   if (YB.b.isNearFixedPointPrefab(FB, BB, cB)) continue;
+                   const NB = new zB.j(`${FB}${BB}${this.seed}treeHeight`),
```

#### 905. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9627` → after: `L9627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9627) · [Before (L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9627)

```diff
-                   if (mB === aB.s.FallenLog) {
+                   if (gB === nB.v.FallenLog) {
```

#### 906. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9630` → after: `L9630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9630) · [Before (L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9630)

```diff
-                       if (zB.getOrGenerate(0 === kB ? sB + jB : sB, 0 === kB ? BB : BB + jB, dB.e.GroundHeight) !== QB) {
+                       if (ZB.getOrGenerate(0 === yB ? FB + IB : FB, 0 === yB ? BB : BB + IB, oB.f.GroundHeight) !== TB) {
```

#### 907. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9651-L9652` → after: `L9651-L9652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9651-L9652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9651-L9652) · [Before (L9651-L9652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9651-L9652)

```diff
-               dB = null !== (zB = nB.minHeight) && void 0 !== zB ? zB : this.minTreeHeight,
-               IB = null !== (QB = nB.maxHeight) && void 0 !== QB ? QB : this.maxTreeHeight;
+               oB = null !== (ZB = JB.minHeight) && void 0 !== ZB ? ZB : this.minTreeHeight,
+               GB = null !== (TB = JB.maxHeight) && void 0 !== TB ? TB : this.maxTreeHeight;
```

#### 908. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9667-L9668` → after: `L9667-L9668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9667-L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9667-L9668) · [Before (L9667-L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9667-L9668)

```diff
-               const nB = new rB.i(`${dB.treeX}|${dB.treeZ}|${dB.trunkBase}|tree`);
-               if (dB.treeType === aB.s.Dead || dB.treeType === aB.s.FallenLog) {
+               const JB = new zB.j(`${oB.treeX}|${oB.treeZ}|${oB.trunkBase}|tree`);
+               if (oB.treeType === nB.v.Dead || oB.treeType === nB.v.FallenLog) {
```

#### 909. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9685` → after: `L9685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9685) · [Before (L9685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9685)

```diff
-                 nB >= jB && nB < jB + this.ZJ && dB >= zB && dB < zB + this.ZJ && NB >= QB && NB < QB + this.ZJ && BB.set(nB - jB, dB - zB, NB - QB, IB)
+                 JB >= IB && JB < IB + this.YN && oB >= ZB && oB < ZB + this.YN && vB >= TB && vB < TB + this.YN && BB.set(JB - IB, oB - ZB, vB - TB, GB)
```

#### 910. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9687` → after: `L9687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9687) · [Before (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9687)

```diff
-             if (nB.treeType === aB.s.FallenLog) {
+             if (JB.treeType === nB.v.FallenLog) {
```

#### 911. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9689` → after: `L9689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9689) · [Before (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9689)

```diff
-               for (let BB = -1; BB < pB - 1; BB++) rB(0 === nB.vineDir ? NB + BB : NB, UB, 0 === nB.vineDir ? uB : uB + BB);
+               for (let BB = -1; BB < hB - 1; BB++) zB(0 === JB.vineDir ? vB + BB : vB, cB, 0 === JB.vineDir ? kB : kB + BB);
```

#### 912. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9714` → after: `L9714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9714) · [Before (L9714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9714)

```diff
-               mB = Math.min(sB, zB + this.ZJ - 1);
+               gB = Math.min(FB, ZB + this.YN - 1);
```

#### 913. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9717` → after: `L9717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9717) · [Before (L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9717)

```diff
-               kB = Math.min(IB + pB.radius, jB + this.ZJ - 1);
+               yB = Math.min(GB + hB.radius, IB + this.YN - 1);
```

#### 914. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9720` → after: `L9720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9720) · [Before (L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9720)

```diff
-               LB = Math.min(NB + pB.radius, QB + this.ZJ - 1);
+               WB = Math.min(vB + hB.radius, TB + this.YN - 1);
```

#### 915. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9795` → after: `L9795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9795) · [Before (L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9795)

```diff
-               if (mB !== rj.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${mB}`);
+               if (gB !== zI.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${gB}`);
```

#### 916. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9802-L9804` → after: `L9802-L9804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9802-L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9802-L9804) · [Before (L9802-L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9802-L9804)

```diff
-             const IB = jB + this.ZJ,
-               NB = zB + this.ZJ,
-               uB = QB + this.ZJ,
+             const GB = IB + this.YN,
+               vB = ZB + this.YN,
+               kB = TB + this.YN,
```

#### 917. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9830` → after: `L9830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9830) · [Before (L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9830)

```diff
-             const jB = this.ZJ >> 1,
+             const IB = this.YN >> 1,
```

#### 918. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9852` → after: `L9852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9852) · [Before (L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9852)

```diff
-         var mj = zB(39846);
+         var gI = ZB(39832);
```

#### 919. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9856` → after: `L9856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9856) · [Before (L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9856)

```diff
-             this.biomeSelector = BB, this.noWaterHeightmapGenerator = jB, this.hydrology = zB, this.lakeRadiusNoiseModifier = dB, this.seed = IB, this.needOutsideWaterDist = uB, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
+             this.biomeSelector = BB, this.noWaterHeightmapGenerator = IB, this.hydrology = ZB, this.lakeRadiusNoiseModifier = oB, this.seed = GB, this.needOutsideWaterDist = kB, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
```

#### 920. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9866` → after: `L9866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9866) · [Before (L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9866)

```diff
-               if ((0, QB.H)(pB, BB, jB) > dB) continue;
+               if ((0, TB.L)(hB, BB, IB) > oB) continue;
```

#### 921. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9870` → after: `L9870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9870) · [Before (L9870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9870)

```diff
-               const nB = (0, QB.D)(zB.origin, BB, jB),
+               const JB = (0, TB.I)(ZB.origin, BB, IB),
```

#### 922. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9887` → after: `L9887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9887) · [Before (L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9887)

```diff
-             if (!(0, aB.I)(jB)) return jB.lake;
+             if (!(0, nB.L)(IB)) return IB.lake;
```

#### 923. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9900` → after: `L9900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9900) · [Before (L9900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9900)

```diff
-             } = this, dB = new rB.i(`${BB[0]}|${BB[1]}${this.seed}oasisLake`), IB = this.hydrology.getHydrologyWaterGenInfo(BB[0], BB[1]), NB = Math.floor(IB.distFromWater - IB.waterRadius - nB);
+             } = this, oB = new zB.j(`${BB[0]}|${BB[1]}${this.seed}oasisLake`), GB = this.hydrology.getHydrologyWaterGenInfo(BB[0], BB[1]), vB = Math.floor(GB.distFromWater - GB.waterRadius - JB);
```

#### 924. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9920` → after: `L9920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9920) · [Before (L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9920)

```diff
-             this.biomeSelector = BB, this.noWaterHeightmapGenerator = jB, this.needOutsideWaterBodyDist = IB, this.NQ = uB, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
+             this.biomeSelector = BB, this.noWaterHeightmapGenerator = IB, this.needOutsideWaterBodyDist = GB, this.TT = kB, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
```

#### 925. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9932` → after: `L9932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9932) · [Before (L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9932)

```diff
-             }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, Lj || (Lj = new mj.c("water cells", NB ? 800 : 60, 6e4)), this.waterBodyInfos = Lj.partition();
+             }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, WI || (WI = new gI.b("water cells", vB ? 800 : 60, 6e4)), this.waterBodyInfos = WI.partition();
```

#### 926. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9934` → after: `L9934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9934) · [Before (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9934)

```diff
-             this.cellCenterMaxOffset = this.gridSize / 2 - UB, this.seed = zB, this.lakeRadiusNoiseModifier = new QB.j([{
+             this.cellCenterMaxOffset = this.gridSize / 2 - cB, this.seed = ZB, this.lakeRadiusNoiseModifier = new TB.g([{
```

#### 927. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9940` → after: `L9940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9940) · [Before (L9940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9940)

```diff
-             }], `${zB}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, QB.x)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new kj(BB, jB, this, this.lakeRadiusNoiseModifier, zB, nB, IB, NB)
+             }], `${ZB}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, TB.z)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new yI(BB, IB, this, this.lakeRadiusNoiseModifier, ZB, JB, GB, vB)
```

#### 928. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9944` → after: `L9944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9944) · [Before (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9944)

```diff
-             if (!this.NQ) return Sj(this.needOutsideWaterBodyDist);
+             if (!this.TT) return QI(this.needOutsideWaterBodyDist);
```

#### 929. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9948` → after: `L9948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9948) · [Before (L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9948)

```diff
-             return null === nB || tj(QB) <= tj(nB) ? QB : nB
+             return null === JB || CI(TB) <= CI(JB) ? TB : JB
```

#### 930. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9974` → after: `L9974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9974) · [Before (L9974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9974)

```diff
-                 bI: BB,
+                 uG: BB,
```

#### 931. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9977` → after: `L9977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9977) · [Before (L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9977)

```diff
-               } = (0, QB.u)(zB, nB.origin, nB.downhill.origin);
+               } = (0, TB.w)(ZB, JB.origin, JB.downhill.origin);
```

#### 932. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9989` → after: `L9989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9989) · [Before (L9989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9989)

```diff
-                 bI: BB,
+                 uG: BB,
```

#### 933. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9992` → after: `L9992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9992) · [Before (L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9992)

```diff
-               } = (0, QB.u)(zB, rB.origin, nB.origin), JB = Math.floor(BB);
+               } = (0, TB.w)(ZB, zB.origin, JB.origin), NB = Math.floor(BB);
```

#### 934. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10013` → after: `L10013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10013) · [Before (L10013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10013)

```diff
-                 IB *= dB.lakeRadius / this.lakeSettings.maxRadius, rB = dB.lakeRadius - IB, zB = (0, QB.D)(nB.origin, BB, jB) - rB
+                 GB *= oB.lakeRadius / this.lakeSettings.maxRadius, zB = oB.lakeRadius - GB, ZB = (0, TB.I)(JB.origin, BB, IB) - zB
```

#### 935. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10027` → after: `L10027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10027) · [Before (L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10027)

```diff
-                 const zB = (0, QB.D)(nB.origin, BB, jB),
+                 const ZB = (0, TB.I)(JB.origin, BB, IB),
```

#### 936. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10054` → after: `L10054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10054) · [Before (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10054)

```diff
-             if (!(0, aB.I)(zB)) return this.lastReadInfo.cellX = BB, this.lastReadInfo.cellZ = jB, this.lastReadInfo.info = zB, zB;
+             if (!(0, nB.L)(ZB)) return this.lastReadInfo.cellX = BB, this.lastReadInfo.cellZ = IB, this.lastReadInfo.info = ZB, ZB;
```

#### 937. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10118` → after: `L10118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10118) · [Before (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10118)

```diff
-             return -1 !== nB ? QB : null
+             return -1 !== JB ? TB : null
```

#### 938. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10123` → after: `L10123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10123) · [Before (L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10123)

```diff
-               nB = new rB.i(`${BB}${jB}${this.seed}riverCell`);
+               JB = new zB.j(`${BB}${IB}${this.seed}riverCell`);
```

#### 939. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10163-L10166` → after: `L10163-L10166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10163-L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10163-L10166) · [Before (L10163-L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10163-L10166)

```diff
-           YQ: 40,
-           nQ: -85,
-           dQ: -85,
-           VQ: .5
+           pT: 40,
+           BT: -85,
+           IT: -85,
+           aT: .5
```

#### 940. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10170-L10173` → after: `L10170-L10173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10170-L10173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10170-L10173) · [Before (L10170-L10173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10170-L10173)

```diff
-           YQ: 13,
-           nQ: -100,
-           dQ: -85,
-           VQ: .28
+           pT: 13,
+           BT: -100,
+           IT: -85,
+           aT: .28
```

#### 941. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10177-L10180` → after: `L10177-L10180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10177-L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10177-L10180) · [Before (L10177-L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10177-L10180)

```diff
-           YQ: 10,
-           nQ: -100,
-           dQ: -75,
-           VQ: .4
+           pT: 10,
+           BT: -100,
+           IT: -75,
+           aT: .4
```

#### 942. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10184-L10187` → after: `L10184-L10187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10184-L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10184-L10187) · [Before (L10184-L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10184-L10187)

```diff
-           YQ: 5,
-           nQ: -80,
-           dQ: 15,
-           VQ: .5
+           pT: 5,
+           BT: -80,
+           IT: 15,
+           aT: .5
```

#### 943. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10191-L10194` → after: `L10191-L10194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10191-L10194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10191-L10194) · [Before (L10191-L10194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10191-L10194)

```diff
-           YQ: 4,
-           nQ: -60,
-           dQ: 40,
-           VQ: .5
+           pT: 4,
+           BT: -60,
+           IT: 40,
+           aT: .5
```

#### 944. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10198-L10199` → after: `L10198-L10199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10198-L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10198-L10199) · [Before (L10198-L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10198-L10199)

```diff
-             this.seed = jB, this.ZJ = zB, this.DQ = void 0, this.DQ = QB.map((QB => {
-               const dB = new nB.e("ore", QB.YQ, !1, !0, `${jB}${QB.blockName}`, 20, zB, null, !0);
+             this.seed = IB, this.YN = ZB, this.YT = void 0, this.YT = TB.map((TB => {
+               const oB = new JB.d("ore", TB.pT, !1, !0, `${IB}${TB.blockName}`, 20, ZB, null, !0);
```

#### 945. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10201` → after: `L10201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10201) · [Before (L10201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10201)

```diff
-                 dN: (0, aB.C)(QB.blockName, BB),
+                 KG: (0, nB.G)(TB.blockName, BB),
```

#### 946. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10203-L10206` → after: `L10203-L10206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10203-L10206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10203-L10206) · [Before (L10203-L10206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10203-L10206)

```diff
-                 YQ: QB.YQ,
-                 nQ: QB.nQ,
-                 dQ: QB.dQ,
-                 VQ: QB.VQ,
+                 pT: TB.pT,
+                 BT: TB.BT,
+                 IT: TB.IT,
+                 aT: TB.aT,
```

#### 947. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10213-L10216` → after: `L10213-L10216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10213-L10216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10213-L10216) · [Before (L10213-L10216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10213-L10216)

```diff
-               nB = new rB.i(`${BB}${jB}${this.seed}oreExists`);
-             for (const dB of this.DQ) {
-               const IB = dB.pointGenerator.getPointsAroundPoint(BB + this.ZJ / 2, jB + this.ZJ / 2),
-                 NB = BB + this.ZJ + dB.radius,
+               JB = new zB.j(`${BB}${IB}${this.seed}oreExists`);
+             for (const oB of this.YT) {
+               const GB = oB.pointGenerator.getPointsAroundPoint(BB + this.YN / 2, IB + this.YN / 2),
+                 vB = BB + this.YN + oB.radius,
```

#### 948. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10218` → after: `L10218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10218) · [Before (L10218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10218)

```diff
-                 UB = jB + this.ZJ + dB.radius,
+                 cB = IB + this.YN + oB.radius,
```

#### 949. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10222-L10223` → after: `L10222-L10223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10222-L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10222-L10223) · [Before (L10222-L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10222-L10223)

```diff
-                 const IB = new rB.i(`${pB[0]}${pB[1]}${this.seed}ore`),
-                   sB = Math.floor(IB.next() * (dB.dQ + 1 - dB.nQ)) + dB.nQ,
+                 const GB = new zB.j(`${hB[0]}${hB[1]}${this.seed}ore`),
+                   FB = Math.floor(GB.next() * (oB.IT + 1 - oB.BT)) + oB.BT,
```

#### 950. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10225` → after: `L10225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10225) · [Before (L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10225)

```diff
-                   mB = Math.min(BB + this.ZJ - 1, pB[0] + dB.radius),
+                   gB = Math.min(BB + this.YN - 1, hB[0] + oB.radius),
```

#### 951. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10227` → after: `L10227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10227) · [Before (L10227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10227)

```diff
-                   kB = Math.min(jB + this.ZJ - 1, pB[1] + dB.radius);
+                   yB = Math.min(IB + this.YN - 1, hB[1] + oB.radius);
```

#### 952. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10230` → after: `L10230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10230) · [Before (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10230)

```diff
-                     (0, QB.A)(pB, BB, jB) > dB.radius || (nB.next() >= dB.VQ || zB.push(BB, sB, jB, dB.dN))
+                     (0, TB.D)(hB, BB, IB) > oB.radius || (JB.next() >= oB.aT || ZB.push(BB, FB, IB, oB.KG))
```

#### 953. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10237` → after: `L10237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10237) · [Before (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10237)

```diff
-             const uB = zB + this.ZJ,
+             const kB = ZB + this.YN,
```

#### 954. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10244` → after: `L10244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10244) · [Before (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10244)

```diff
-               if (UB < IB.get(pB, rB, dB.e.GroundHeight) - nB) {
+               if (cB < GB.get(hB, zB, oB.f.GroundHeight) - JB) {
```

#### 955. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10251` → after: `L10251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10251) · [Before (L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10251)

```diff
-         var ij = zB(39848);
+         var OI = ZB(39839);
```

#### 956. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10261-L10262` → after: `L10261-L10262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10261-L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10261-L10262) · [Before (L10261-L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10261-L10262)

```diff
-             yQ: zB,
-             tQ: QB,
+             zT: ZB,
+             yT: TB,
```

#### 957. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10272` → after: `L10272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10272) · [Before (L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10272)

```diff
-           return zB.sQ && QB.push({
+           return ZB.cT && TB.push({
```

#### 958. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10274-L10275` → after: `L10274-L10275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10274-L10275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10274-L10275) · [Before (L10274-L10275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10274-L10275)

```diff
-             dN: BB[jB].id
-           }), zB.JQ && QB.push({
+             KG: BB[IB].id
+           }), ZB.nT && TB.push({
```

#### 959. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10277` → after: `L10277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10277) · [Before (L10277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10277)

```diff
-             dN: BB[`${jB}|meta|rot2|side`].id
+             KG: BB[`${IB}|meta|rot2|side`].id
```

#### 960. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10280` → after: `L10280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10280) · [Before (L10280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10280)

```diff
-             dN: BB[`${jB}|meta|rot4|side`].id
+             KG: BB[`${IB}|meta|rot4|side`].id
```

#### 961. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10283` → after: `L10283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10283) · [Before (L10283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10283)

```diff
-             dN: BB[`${jB}|meta|rot1|side`].id
+             KG: BB[`${IB}|meta|rot1|side`].id
```

#### 962. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10286-L10287` → after: `L10286-L10287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10286-L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10286-L10287) · [Before (L10286-L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10286-L10287)

```diff
-             dN: BB[`${jB}|meta|rot3|side`].id
-           }), zB.mQ && QB.push({
+             KG: BB[`${IB}|meta|rot3|side`].id
+           }), ZB.hT && TB.push({
```

#### 963. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10289` → after: `L10289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10289) · [Before (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10289)

```diff
-             dN: BB[`${jB}|meta|rot1|top`].id
+             KG: BB[`${IB}|meta|rot1|top`].id
```

#### 964. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10298-L10300` → after: `L10298-L10300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10298-L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10298-L10300) · [Before (L10298-L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10298-L10300)

```diff
-                 sQ: !0,
-                 JQ: !0,
-                 mQ: !0
+                 cT: !0,
+                 nT: !0,
+                 hT: !0
```

#### 965. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10303-L10306` → after: `L10303-L10306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10303-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10303-L10306) · [Before (L10303-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10303-L10306)

```diff
-               kQ: .8,
-               GQ: 0,
-               yQ: .12,
-               tQ: .25,
+               FT: .8,
+               NT: 0,
+               zT: .12,
+               yT: .25,
```

#### 966. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10312-L10314` → after: `L10312-L10314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10312-L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10312-L10314) · [Before (L10312-L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10312-L10314)

```diff
-                 sQ: !0,
-                 JQ: !0,
-                 mQ: !1
+                 cT: !0,
+                 nT: !0,
+                 hT: !1
```

#### 967. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10317-L10319` → after: `L10317-L10319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10317-L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10317-L10319) · [Before (L10317-L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10317-L10319)

```diff
-               kQ: .7,
-               GQ: 2,
-               yQ: .58
+               FT: .7,
+               NT: 2,
+               zT: .58
```

#### 968. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10322` → after: `L10322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10322) · [Before (L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10322)

```diff
-             const zB = jB.LQ;
+             const ZB = IB.gT;
```

#### 969. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10326-L10328` → after: `L10326-L10328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10326-L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10326-L10328) · [Before (L10326-L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10326-L10328)

```diff
-                 sQ: jB.sQ,
-                 JQ: jB.JQ,
-                 mQ: jB.mQ
+                 cT: IB.cT,
+                 nT: IB.nT,
+                 hT: IB.hT
```

#### 970. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10331-L10336` → after: `L10331-L10336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10331-L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10331-L10336) · [Before (L10331-L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10331-L10336)

```diff
-               kQ: jB.kQ,
-               GQ: jB.GQ,
-               yQ: jB.yQ,
-               tQ: null === zB || void 0 === zB ? void 0 : zB.tQ,
-               shallowClusterY: null === zB || void 0 === zB ? void 0 : zB.SQ,
-               deepClusterY: null === zB || void 0 === zB ? void 0 : zB.MQ
+               FT: IB.FT,
+               NT: IB.NT,
+               zT: IB.zT,
+               yT: null === ZB || void 0 === ZB ? void 0 : ZB.yT,
+               shallowClusterY: null === ZB || void 0 === ZB ? void 0 : ZB.UT,
+               deepClusterY: null === ZB || void 0 === ZB ? void 0 : ZB.WT
```

#### 971. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10355` → after: `L10355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10355) · [Before (L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10355)

```diff
-             const QB = this.heightmapVals.getOrGenerate(BB, jB, dB.e.GroundHeight) - this.surfaceMargin,
+             const TB = this.heightmapVals.getOrGenerate(BB, IB, oB.f.GroundHeight) - this.surfaceMargin,
```

#### 972. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10362` → after: `L10362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10362) · [Before (L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10362)

```diff
-               BB - dB.floorY + 1 < nB || IB.push(BB === dB.ceilingY ? dB : {
+               BB - oB.floorY + 1 < JB || GB.push(BB === oB.ceilingY ? oB : {
```

#### 973. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10372` → after: `L10372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10372) · [Before (L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10372)

```diff
-             this.heightmapVals = BB, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new QB.n(new Xj(jB)), this.decoratableCavesCache = new QB.n(new Zj(jB, BB, zB, nB))
+             this.heightmapVals = BB, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new TB.k(new rI(IB)), this.decoratableCavesCache = new TB.k(new mI(IB, BB, ZB, JB))
```

#### 974. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10378` → after: `L10378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10378) · [Before (L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10378)

```diff
-             return this.heightmapVals.getOrGenerate(BB, jB, dB.e.GroundHeight)
+             return this.heightmapVals.getOrGenerate(BB, IB, oB.f.GroundHeight)
```

#### 975. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10397` → after: `L10397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10397) · [Before (L10397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10397)

```diff
-             Tj(BB + uB.offset[0], jB + uB.offset[1], zB + uB.offset[2], dB) && (uB.offset === qj ? IB = uB : NB.push(uB))
+             LI(BB + kB.offset[0], IB + kB.offset[1], ZB + kB.offset[2], oB) && (kB.offset === YI ? GB = kB : vB.push(kB))
```

#### 976. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10399` → after: `L10399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10399) · [Before (L10399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10399)

```diff
-           return null !== IB ? IB : 0 === NB.length ? null : NB[Math.floor(nB * NB.length)]
+           return null !== GB ? GB : 0 === vB.length ? null : vB[Math.floor(JB * vB.length)]
```

#### 977. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10404` → after: `L10404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10404) · [Before (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10404)

```diff
-             this.ZJ = jB, this.seed = zB, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
+             this.YN = IB, this.seed = ZB, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
```

#### 978. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10410` → after: `L10410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10410) · [Before (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10410)

```diff
-               if (!Number.isInteger(nB.clusterBoxSize) || nB.clusterBoxSize < 2 || nB.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${nB.seedPrefix}" has invalid clusterBoxSize (${nB.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
+               if (!Number.isInteger(JB.clusterBoxSize) || JB.clusterBoxSize < 2 || JB.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${JB.seedPrefix}" has invalid clusterBoxSize (${JB.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
```

#### 979. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10412` → after: `L10412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10412) · [Before (L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10412)

```diff
-               BB > IB && (IB = BB), NB += Math.max(nB.yQ, null !== (uB = nB.tQ) && void 0 !== uB ? uB : nB.yQ)
+               BB > GB && (GB = BB), vB += Math.max(JB.zT, null !== (kB = JB.yT) && void 0 !== kB ? kB : JB.zT)
```

#### 980. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10414-L10415` → after: `L10414-L10415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10414-L10415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10414-L10415) · [Before (L10414-L10415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10414-L10415)

```diff
-             if (NB > 1) throw new Error(`Cave decoration cluster chances sum to ${NB} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
-             this.pointsGen = new nB.e("caveDeco", 10, !1, !0, zB, 4, jB, null, !0), this.pointsGen.assertReachableFromChunkCentre(jB, IB), this.configs = dB, this.maxHalfBox = IB
+             if (vB > 1) throw new Error(`Cave decoration cluster chances sum to ${vB} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
+             this.pointsGen = new JB.d("caveDeco", 10, !1, !0, ZB, 4, IB, null, !0), this.pointsGen.assertReachableFromChunkCentre(IB, GB), this.configs = oB, this.maxHalfBox = GB
```

#### 981. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10419` → after: `L10419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10419) · [Before (L10419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10419)

```diff
-               dB = this.ZJ,
+               oB = this.YN,
```

#### 982. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10436` → after: `L10436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10436) · [Before (L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10436)

```diff
-             for (const NB of dB) NB.y >= zB && NB.y < IB && BB.set(NB.x - jB, NB.y - zB, NB.z - QB, NB.dN)
+             for (const vB of oB) vB.y >= ZB && vB.y < GB && BB.set(vB.x - IB, vB.y - ZB, vB.z - TB, vB.KG)
```

#### 983. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10441` → after: `L10441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10441) · [Before (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10441)

```diff
-             const UB = new rB.i(`${this.seed}|${BB}|${jB}|cluster`),
+             const cB = new zB.j(`${this.seed}|${BB}|${IB}|cluster`),
```

#### 984. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10455` → after: `L10455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10455) · [Before (L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10455)

```diff
-             if (this.scatterClusterCells(BB, mB, jB, kB, IB, UB, GB), !(GB.length < kB.GQ))
+             if (this.scatterClusterCells(BB, gB, IB, yB, GB, cB, UB), !(UB.length < yB.NT))
```

#### 985. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10461` → after: `L10461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10461) · [Before (L10461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10461)

```diff
-               kQ: uB,
+               FT: kB,
```

#### 986. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10481` → after: `L10481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10481) · [Before (L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10481)

```diff
-                     dN: GB.dN
+                     KG: UB.KG
```

#### 987. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10495` → after: `L10495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10495) · [Before (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10495)

```diff
-             this.prefabGenerator = QB, this.seed = void 0, this.ZJ = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
+             this.prefabGenerator = TB, this.seed = void 0, this.YN = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
```

#### 988. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10498` → after: `L10498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10498) · [Before (L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10498)

```diff
-             if (zB + this.ZJ <= IB.r.bedrockLevel) return {
+             if (ZB + this.YN <= GB.r.bedrockLevel) return {
```

#### 989. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10501` → after: `L10501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10501) · [Before (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10501)

```diff
-             const LB = new pB.d,
+             const WB = new hB.e,
```

#### 990. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10505-L10507` → after: `L10505-L10507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10505-L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10505-L10507) · [Before (L10505-L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10505-L10507)

```diff
-             if (tB >= zB && gB < zB + this.ZJ)
-               for (let QB = jB; QB < jB + this.ZJ; QB++)
-                 for (let uB = nB; uB < nB + this.ZJ; uB++) {
+             if (CB >= ZB && dB < ZB + this.YN)
+               for (let TB = IB; TB < IB + this.YN; TB++)
+                 for (let kB = JB; kB < JB + this.YN; kB++) {
```

#### 991. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10510-L10512` → after: `L10510-L10512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10510-L10512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10510-L10512) · [Before (L10510-L10512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10510-L10512)

```diff
-                     pB = NB.get(QB, uB, dB.e.GroundHeight);
-                   if (pB >= zB && pB < zB + this.ZJ) {
-                     const UB = NB.get(QB, uB, dB.e.IsLake) === IB.f ? aB.getDryBedBlock(QB, pB, uB) : aB.getTopsoilBlock(QB, pB, uB);
+                     hB = vB.get(TB, kB, oB.f.GroundHeight);
+                   if (hB >= ZB && hB < ZB + this.YN) {
+                     const cB = vB.get(TB, kB, oB.f.IsLake) === GB.f ? nB.getDryBedBlock(TB, hB, kB) : nB.getTopsoilBlock(TB, hB, kB);
```

#### 992. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10516-L10518` → after: `L10516-L10518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10516-L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10516-L10518) · [Before (L10516-L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10516-L10518)

```diff
-             if (tB + 1 >= zB && gB - 4 < zB + this.ZJ)
-               for (let QB = jB; QB < jB + this.ZJ; QB++)
-                 for (let IB = nB; IB < nB + this.ZJ; IB++) {
+             if (CB + 1 >= ZB && dB - 4 < ZB + this.YN)
+               for (let TB = IB; TB < IB + this.YN; TB++)
+                 for (let GB = JB; GB < JB + this.YN; GB++) {
```

#### 993. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10521-L10522` → after: `L10521-L10522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10521-L10522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10521-L10522) · [Before (L10521-L10522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10521-L10522)

```diff
-                     aB = NB.get(QB, IB, dB.e.GroundHeight),
-                     pB = Math.min(aB, zB + this.ZJ);
+                     nB = vB.get(TB, GB, oB.f.GroundHeight),
+                     hB = Math.min(nB, ZB + this.YN);
```

#### 994. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10530-L10531` → after: `L10530-L10531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10530-L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10530-L10531) · [Before (L10530-L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10530-L10531)

```diff
-               for (let zB = Math.max(nB - 4, 0); zB < Math.min(nB, this.ZJ); zB++) BB.set(jB, zB, dB, this.dirtId);
-               nB >= 0 && nB < this.ZJ && BB.set(jB, nB, dB, this.grassBlockId)
+               for (let ZB = Math.max(JB - 4, 0); ZB < Math.min(JB, this.YN); ZB++) BB.set(IB, ZB, oB, this.dirtId);
+               JB >= 0 && JB < this.YN && BB.set(IB, JB, oB, this.grassBlockId)
```

#### 995. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10535-L10536` → after: `L10535-L10536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10535-L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10535-L10536) · [Before (L10535-L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10535-L10536)

```diff
-               for (let IB = jB; IB < jB + this.ZJ; IB++)
-                 for (let uB = nB; uB < nB + this.ZJ; uB++) {
+               for (let GB = IB; GB < IB + this.YN; GB++)
+                 for (let kB = JB; kB < JB + this.YN; kB++) {
```

#### 996. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10538-L10539` → after: `L10538-L10539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10538-L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10538-L10539) · [Before (L10538-L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10538-L10539)

```diff
-                     aB = NB.get(IB, uB, dB.e.GroundHeight),
-                     pB = Math.min(aB - 4, zB + this.ZJ),
+                     nB = vB.get(GB, kB, oB.f.GroundHeight),
+                     hB = Math.min(nB - 4, ZB + this.YN),
```

#### 997. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10544` → after: `L10544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10544) · [Before (L10544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10544)

```diff
-                     BB.set(IB - jB, QB - zB, uB - nB, 0 !== dB ? dB : UB)
+                     BB.set(GB - IB, TB - ZB, kB - JB, 0 !== oB ? oB : cB)
```

#### 998. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10548-L10550` → after: `L10548-L10550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10548-L10550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10548-L10550) · [Before (L10548-L10550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10548-L10550)

```diff
-             if (tB - 4 >= zB && this.oreGenerator.addOresToChunk(BB, jB, zB, nB, 4, NB, JB), tB >= zB && (uB.d.addCavesToChunk(BB, jB, zB, nB, NB, sB), Wj.addCaveDecorationsToChunk(BB, jB, zB, nB, this.ZJ, kB)), IB.r.bedrockLevel >= zB && IB.r.bedrockLevel < zB + this.ZJ)
-               for (let QB = jB; QB < jB + this.ZJ; QB++)
-                 for (let dB = nB; dB < nB + this.ZJ; dB++) BB.set(QB - jB, IB.r.bedrockLevel - zB, dB - nB, this.bedrockId);
+             if (CB - 4 >= ZB && this.oreGenerator.addOresToChunk(BB, IB, ZB, JB, 4, vB, NB), CB >= ZB && (kB.b.addCavesToChunk(BB, IB, ZB, JB, vB, FB), uI.addCaveDecorationsToChunk(BB, IB, ZB, JB, this.YN, yB)), GB.r.bedrockLevel >= ZB && GB.r.bedrockLevel < ZB + this.YN)
+               for (let TB = IB; TB < IB + this.YN; TB++)
+                 for (let oB = JB; oB < JB + this.YN; oB++) BB.set(TB - IB, GB.r.bedrockLevel - ZB, oB - JB, this.bedrockId);
```

#### 999. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10553-L10555` → after: `L10553-L10555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10553-L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10553-L10555) · [Before (L10553-L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10553-L10555)

```diff
-               for (let dB = jB; dB < jB + this.ZJ; dB++)
-                 for (let IB = zB; IB < zB + this.ZJ; IB++)
-                   for (let NB = nB; NB < nB + this.ZJ; NB++) {
+               for (let oB = IB; oB < IB + this.YN; oB++)
+                 for (let GB = ZB; GB < ZB + this.YN; GB++)
+                   for (let vB = JB; vB < JB + this.YN; vB++) {
```

#### 1000. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10566-L10567` → after: `L10566-L10567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10566-L10567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10566-L10567) · [Before (L10566-L10567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10566-L10567)

```diff
-               for (let zB = Math.max(dB, 0); zB < Math.min(IB, this.ZJ); zB++) BB.set(jB, zB, nB, this.waterId);
-               IB >= 0 && IB < this.ZJ && BB.set(jB, IB, nB, EB[QB + 4])
+               for (let ZB = Math.max(oB, 0); ZB < Math.min(GB, this.YN); ZB++) BB.set(IB, ZB, JB, this.waterId);
+               GB >= 0 && GB < this.YN && BB.set(IB, GB, JB, wB[TB + 4])
```

#### 1001. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10570-L10575` → after: `L10570-L10575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10570-L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10570-L10575) · [Before (L10570-L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10570-L10575)

```diff
-             if (this.addSurfaceBlocks(BB, zB, GB.lilyPads), SB && tB >= zB && gB < zB + this.ZJ)
-               for (let uB = jB; uB < jB + this.ZJ; uB++)
-                 for (let UB = nB; UB < nB + this.ZJ; UB++) {
-                   const aB = NB.get(uB, UB, dB.e.WaterHeight),
-                     pB = NB.get(uB, UB, dB.e.GroundHeight);
-                   if (aB !== IB.p && pB >= zB && pB < zB + this.ZJ)
+             if (this.addSurfaceBlocks(BB, ZB, UB.lilyPads), QB && CB >= ZB && dB < ZB + this.YN)
+               for (let kB = IB; kB < IB + this.YN; kB++)
+                 for (let cB = JB; cB < JB + this.YN; cB++) {
+                   const nB = vB.get(kB, cB, oB.f.WaterHeight),
+                     hB = vB.get(kB, cB, oB.f.GroundHeight);
+                   if (nB !== GB.n && hB >= ZB && hB < ZB + this.YN)
```

#### 1002. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10579` → after: `L10579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10579) · [Before (L10579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10579)

```diff
-                       if ((0, QB.H)(dB, uB, UB) < 100) iB === dB[0] && fB === dB[1] || (iB = dB[0], fB = dB[1], oB = new rB.i(`${this.seed}${iB}${fB}`).next() < .3 ? this.chalkId : this.clayId), BB.set(uB - jB, pB - zB, UB - nB, oB), pB - 1 >= zB && BB.set(uB - jB, pB - 1 - zB, U … [truncated]
+                       if ((0, TB.L)(oB, kB, cB) < 100) OB === oB[0] && iB === oB[1] || (OB = oB[0], iB = oB[1], pB = new zB.j(`${this.seed}${OB}${iB}`).next() < .3 ? this.chalkId : this.clayId), BB.set(kB - IB, hB - ZB, cB - JB, pB), hB - 1 >= ZB && BB.set(kB - IB, hB - 1 - ZB, c … [truncated]
```

#### 1003. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10588-L10591` → after: `L10588-L10591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10588-L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10588-L10591) · [Before (L10588-L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10588-L10591)

```diff
-               for (let dB = jB; dB < jB + this.ZJ; dB++)
-                 for (let IB = zB; IB < zB + this.ZJ; IB++)
-                   for (let NB = nB; NB < nB + this.ZJ; NB++) {
-                     const uB = qB.d.getBlockFromFixedPointPrefab(dB, IB, NB, QB);
+               for (let oB = IB; oB < IB + this.YN; oB++)
+                 for (let GB = ZB; GB < ZB + this.YN; GB++)
+                   for (let vB = JB; vB < JB + this.YN; vB++) {
+                     const kB = YB.b.getBlockFromFixedPointPrefab(oB, GB, vB, TB);
```

#### 1004. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10612` → after: `L10612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10612) · [Before (L10612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10612)

```diff
-               nB >= 0 && nB < this.ZJ && BB.set(zB[QB], nB, zB[QB + 2], zB[QB + 3])
+               JB >= 0 && JB < this.YN && BB.set(ZB[TB], JB, ZB[TB + 2], ZB[TB + 3])
```

#### 1005. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10626` → after: `L10626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10626) · [Before (L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10626)

```diff
-             this.ZJ = BB, this.biomeSelector = jB, this.seed = zB, this.random = new rB.i(""), this.lilyPadId = void 0, this.lilyPadId = QB["Lily Pad"].id
+             this.YN = BB, this.biomeSelector = IB, this.seed = ZB, this.random = new zB.j(""), this.lilyPadId = void 0, this.lilyPadId = TB["Lily Pad"].id
```

#### 1006. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10636-L10637` → after: `L10636-L10637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10636-L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10636-L10637) · [Before (L10636-L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10636-L10637)

```diff
-             for (let yB = BB; yB < BB + this.ZJ; yB++)
-               for (let kB = jB; kB < jB + this.ZJ; kB++) {
+             for (let qB = BB; qB < BB + this.YN; qB++)
+               for (let yB = IB; yB < IB + this.YN; yB++) {
```

#### 1007. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10639-L10640` → after: `L10639-L10640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10639-L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10639-L10640) · [Before (L10639-L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10639-L10640)

```diff
-                   LB = zB.getOrGenerate(yB, kB, dB.e.GroundHeight),
-                   gB = zB.getOrGenerate(yB, kB, dB.e.WaterHeight);
+                   WB = ZB.getOrGenerate(qB, yB, oB.f.GroundHeight),
+                   dB = ZB.getOrGenerate(qB, yB, oB.f.WaterHeight);
```

#### 1008. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10644-L10645` → after: `L10644-L10645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10644-L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10644-L10645) · [Before (L10644-L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10644-L10645)

```diff
-                 if (gB !== IB.p) {
-                   mB = !0, LB < gB && UB.push(tB, SB, LB + 1, gB, GB.topwaterBlockType), GB.hasScatteredLakes && 1 === zB.getOrGenerate(yB, kB, dB.e.IsLake) && (this.random.reseed(`${yB}|${kB}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(yB, kB, zB) && pB … [truncated]
+                 if (dB !== GB.n) {
+                   gB = !0, WB < dB && cB.push(CB, QB, WB + 1, dB, UB.topwaterBlockType), UB.hasScatteredLakes && 1 === ZB.getOrGenerate(qB, yB, oB.f.IsLake) && (this.random.reseed(`${qB}|${yB}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(qB, yB, ZB) && hB … [truncated]
```
