# Changed — Bundle Modifications Report (Part 126 / 141)

- **Updated at**: `2026-11-25T05:21 JST`
- **Part**: `126 / 141` (**405** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 125](part-125.md) · [Part 127 →](part-127.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/procGenWorker.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9 · continued)

- **File**: `bundles/bloxd.io/chunks/js/procGenWorker.js` (1955 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2)

#### 653. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6301-L6303` → after: `L6301-L6303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6301-L6303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6301-L6303) · [Before (L6301-L6303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6301-L6303)

```diff
-                   if (gT > kT) throw new Error(`Prefab ${MT} has clearing radius ${gT} which is greater than the world generator's prefab radius ${kT}`);
-                   if (zT.groundingRadius > mT.maxPrefabGroundingRadius) throw new Error(`Prefab ${MT} has grounding radius ${zT.groundingRadius} which is greater than the world generator's max prefab grounding radius of ${mT.maxPrefabGroundingRadius}`);
-                   if ("centre" !== zT.groundingPoints && 0 === zT.groundingPoints.length) throw new Error(`Prefab ${MT} has no grounding points`);
+                   if (IB > UB) throw new Error(`Prefab ${dB} has clearing radius ${IB} which is greater than the world generator's prefab radius ${UB}`);
+                   if (nB.groundingRadius > zB.maxPrefabGroundingRadius) throw new Error(`Prefab ${dB} has grounding radius ${nB.groundingRadius} which is greater than the world generator's max prefab grounding radius of ${zB.maxPrefabGroundingRadius}`);
+                   if ("centre" !== nB.groundingPoints && 0 === nB.groundingPoints.length) throw new Error(`Prefab ${dB} has no grounding points`);
```

#### 654. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6305` → after: `L6305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6305) · [Before (L6305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6305)

```diff
-                   if (nT.x > mT.prefabSize || nT.y > mT.prefabSize || nT.z > mT.prefabSize) throw new Error(`Prefab ${MT} has dimensions ${JSON.stringify(nT)} which are too large for the world generator's prefab size of ${mT.prefabSize}`);
+                   if (NB.x > zB.prefabSize || NB.y > zB.prefabSize || NB.z > zB.prefabSize) throw new Error(`Prefab ${dB} has dimensions ${JSON.stringify(NB)} which are too large for the world generator's prefab size of ${zB.prefabSize}`);
```

#### 655. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6320` → after: `L6320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6320) · [Before (L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6320)

```diff
-             this.floraGenerator = new nT(this.blockMetadata, this.cB, `${this.seed}flora`, this.grassChance, this.tallGrassChance, this.cornChance, this.spectralGrassChance, this.pineGrassChance, this.pineFernChance, this.jungleTallGrassChance, this.catnipChance, this.autumnFernC … [truncated]
+             this.floraGenerator = new NB(this.blockMetadata, this.ZJ, `${this.seed}flora`, this.grassChance, this.tallGrassChance, this.cornChance, this.spectralGrassChance, this.pineGrassChance, this.pineFernChance, this.jungleTallGrassChance, this.catnipChance, this.autumnFernC … [truncated]
```

#### 656. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6354` → after: `L6354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6354) · [Before (L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6354)

```diff
-               treeType: zT.v.Maple,
+               treeType: nB.s.Maple,
```

#### 657. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6357` → after: `L6357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6357) · [Before (L6357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6357)

```diff
-               treeType: zT.v.Pine,
+               treeType: nB.s.Pine,
```

#### 658. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6360` → after: `L6360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6360) · [Before (L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6360)

```diff
-               treeType: zT.v.Plum,
+               treeType: nB.s.Plum,
```

#### 659. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6363` → after: `L6363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6363) · [Before (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6363)

```diff
-               treeType: zT.v.Cedar,
+               treeType: nB.s.Cedar,
```

#### 660. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6366` → after: `L6366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6366) · [Before (L6366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6366)

```diff
-               treeType: zT.v.Aspen,
+               treeType: nB.s.Aspen,
```

#### 661. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6369` → after: `L6369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6369) · [Before (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6369)

```diff
-               treeType: zT.v.Jungle,
+               treeType: nB.s.Jungle,
```

#### 662. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6372` → after: `L6372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6372) · [Before (L6372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6372)

```diff
-               treeType: zT.v.Palm,
+               treeType: nB.s.Palm,
```

#### 663. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6375` → after: `L6375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6375) · [Before (L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6375)

```diff
-               treeType: zT.v.AutumnMaple,
+               treeType: nB.s.AutumnMaple,
```

#### 664. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6378` → after: `L6378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6378) · [Before (L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6378)

```diff
-               treeType: zT.v.Pear,
+               treeType: nB.s.Pear,
```

#### 665. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6381` → after: `L6381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6381) · [Before (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6381)

```diff
-               treeType: zT.v.Cherry,
+               treeType: nB.s.Cherry,
```

#### 666. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6384` → after: `L6384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6384) · [Before (L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6384)

```diff
-               treeType: zT.v.Spectral,
+               treeType: nB.s.Spectral,
```

#### 667. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6387` → after: `L6387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6387) · [Before (L6387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6387)

```diff
-               treeType: zT.v.Mango,
+               treeType: nB.s.Mango,
```

#### 668. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6390` → after: `L6390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6390) · [Before (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6390)

```diff
-               treeType: zT.v.AutumnAspen,
+               treeType: nB.s.AutumnAspen,
```

#### 669. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6393` → after: `L6393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6393) · [Before (L6393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6393)

```diff
-               treeType: zT.v.Dead,
+               treeType: nB.s.Dead,
```

#### 670. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6396` → after: `L6396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6396) · [Before (L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6396)

```diff
-               treeType: zT.v.FallenLog,
+               treeType: nB.s.FallenLog,
```

#### 671. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6405` → after: `L6405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6405) · [Before (L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6405)

```diff
-             return `${TT}|${UT}`
+             return `${BB}|${jB}`
```

#### 672. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6445` → after: `L6445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6445) · [Before (L6445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6445)

```diff
-             super(TT, UT, mT, `${zT}Desert`, MT, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null), this.key = "desert", this.grassChance = 0, this.tallGrassChance = 0, this.cactusChance = 6e-4, this.flowerPatchDistApart = 200, this.chiliPepperChance = 30, th … [truncated]
+             super(BB, jB, zB, `${nB}Desert`, dB, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null), this.key = "desert", this.grassChance = 0, this.tallGrassChance = 0, this.cactusChance = 6e-4, this.flowerPatchDistApart = 200, this.chiliPepperChance = 30, th … [truncated]
```

#### 673. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6451` → after: `L6451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6451) · [Before (L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6451)

```diff
-             }], `${zT}DesertBiomeHeightMap`)
+             }], `${nB}DesertBiomeHeightMap`)
```

#### 674. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6461-L6462` → after: `L6461-L6462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6461-L6462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6461-L6462) · [Before (L6461-L6462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6461-L6462)

```diff
-             super(TT, UT, mT, MT, gT, dT(HT.p.VERY_HIGH, [{
-               om: "treePalmLarge1",
+             super(BB, jB, zB, dB, IB, fB(uB.j.VERY_HIGH, [{
+               BQ: "treePalmLarge1",
```

#### 675. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6465` → after: `L6465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6465) · [Before (L6465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6465)

```diff
-               om: "treePalmLarge2",
+               BQ: "treePalmLarge2",
```

#### 676. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6467` → after: `L6467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6467) · [Before (L6467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6467)

```diff
-             }])), this.key = "oasis", this.hasScatteredLakes = !0, this.maxPrefabDistFromLakeEdge = 18, this.tags.push(zT.b.OASIS), this._heightmapSimplex = new WT.g([{
+             }])), this.key = "oasis", this.hasScatteredLakes = !0, this.maxPrefabDistFromLakeEdge = 18, this.tags.push(nB.d.OASIS), this._heightmapSimplex = new QB.j([{
```

#### 677. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6473` → after: `L6473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6473) · [Before (L6473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6473)

```diff
-             }], `${MT}OasisBiomeHeightMap`)
+             }], `${dB}OasisBiomeHeightMap`)
```

#### 678. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6481` → after: `L6481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6481) · [Before (L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6481)

```diff
-             super(TT, UT, mT, `${WT}RedDesert`, zT), this.key = "redDesert", this.chiliPepperChance = 30, this.lavaChiliPepperChance = 30, this.topsoilBlockType = UT["Red Sand"].id, this.lowsoilBlockType = UT["Red Sand"].id
+             super(BB, jB, zB, `${QB}RedDesert`, nB), this.key = "redDesert", this.chiliPepperChance = 30, this.lavaChiliPepperChance = 30, this.topsoilBlockType = jB["Red Sand"].id, this.lowsoilBlockType = jB["Red Sand"].id
```

#### 679. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6486` → after: `L6486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6486) · [Before (L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6486)

```diff
-             super(TT, UT, mT, `${MT}Plains`, gT, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : dT(HT.p.MEDIUM, bT, OT)), this.key = "plains", this.grassChance = .162, this.tallGrassChance = .016, this.flowerPatchDistApart = 20, this.forgetMeNotChance = 100, thi … [truncated]
+             super(BB, jB, zB, `${dB}Plains`, IB, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : fB(uB.j.MEDIUM, tB, SB)), this.key = "plains", this.grassChance = .162, this.tallGrassChance = .016, this.flowerPatchDistApart = 20, this.forgetMeNotChance = 100, thi … [truncated]
```

#### 680. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6492` → after: `L6492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6492) · [Before (L6492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6492)

```diff
-             }], `${MT}PlainsBiomeHeightMap`)
+             }], `${dB}PlainsBiomeHeightMap`)
```

#### 681. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6502-L6503` → after: `L6502-L6503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6502-L6503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6502-L6503) · [Before (L6502-L6503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6502-L6503)

```diff
-             super(TT, UT, mT, WT, zT, dT(HT.p.MEDIUM, [{
-               om: "treeMapleLarge1",
+             super(BB, jB, zB, QB, nB, fB(uB.j.MEDIUM, [{
+               BQ: "treeMapleLarge1",
```

#### 682. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6506` → after: `L6506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6506) · [Before (L6506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6506)

```diff
-               om: "treeMapleLarge2",
+               BQ: "treeMapleLarge2",
```

#### 683. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6513` → after: `L6513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6513) · [Before (L6513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6513)

```diff
-             super(TT, UT, mT, WT, zT, dT(HT.p.MEDIUM, OT)), this.key = "snowyPlains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 9e-4, this.tallGrassChance = 1e-4, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTuli … [truncated]
+             super(BB, jB, zB, QB, nB, fB(uB.j.MEDIUM, SB)), this.key = "snowyPlains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 9e-4, this.tallGrassChance = 1e-4, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTuli … [truncated]
```

#### 684. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6518` → after: `L6518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6518) · [Before (L6518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6518)

```diff
-             super(TT, UT, mT, `${zT}Forest`, MT, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : dT(HT.p.MEDIUM, eT.ruins, eT.trees)), this.key = "forest", this.mapleTreeChance = 15, this.aspenTreeChance = 1, this.flowerPatchDistApart = 28, this.redMushroomChance … [truncated]
+             super(BB, jB, zB, `${nB}Forest`, dB, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : fB(uB.j.MEDIUM, MB.ruins, MB.trees)), this.key = "forest", this.mapleTreeChance = 15, this.aspenTreeChance = 1, this.flowerPatchDistApart = 28, this.redMushroomChance … [truncated]
```

#### 685. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6524` → after: `L6524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6524) · [Before (L6524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6524)

```diff
-             }], `${zT}ForestBiomeHeightMap`)
+             }], `${nB}ForestBiomeHeightMap`)
```

#### 686. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6539` → after: `L6539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6539) · [Before (L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6539)

```diff
-             super(TT, UT, mT, WT, MT, dT(HT.p.MEDIUM, eT.ruins)), this.key = "autumnForest", this.flowerPatchDistApart = 13, this.fallenMapleLeavesChance = 800, this.pumpkinChance = 30, this.melonChance = 0, this.autumnFernChance = .01, this.autumnMapleTreeChance = 15, this.autum … [truncated]
+             super(BB, jB, zB, QB, dB, fB(uB.j.MEDIUM, MB.ruins)), this.key = "autumnForest", this.flowerPatchDistApart = 13, this.fallenMapleLeavesChance = 800, this.pumpkinChance = 30, this.melonChance = 0, this.autumnFernChance = .01, this.autumnMapleTreeChance = 15, this.autum … [truncated]
```

#### 687. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6544-L6545` → after: `L6544-L6545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6544-L6545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6544-L6545) · [Before (L6544-L6545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6544-L6545)

```diff
-             super(TT, UT, mT, WT, zT, dT(HT.p.HIGH, [{
-               om: "treeJungleLarge1",
+             super(BB, jB, zB, QB, nB, fB(uB.j.HIGH, [{
+               BQ: "treeJungleLarge1",
```

#### 688. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6548` → after: `L6548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6548) · [Before (L6548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6548)

```diff
-               om: "treeJungleLarge2",
+               BQ: "treeJungleLarge2",
```

#### 689. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6551` → after: `L6551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6551) · [Before (L6551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6551)

```diff
-               om: "rockJungleLarge1",
+               BQ: "rockJungleLarge1",
```

#### 690. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6554` → after: `L6554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6554) · [Before (L6554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6554)

```diff
-               om: "rockJungleLarge2",
+               BQ: "rockJungleLarge2",
```

#### 691. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6557` → after: `L6557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6557) · [Before (L6557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6557)

```diff
-               om: "rockJungleLarge3",
+               BQ: "rockJungleLarge3",
```

#### 692. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6560` → after: `L6560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6560) · [Before (L6560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6560)

```diff
-               om: "rockJungleLarge4",
+               BQ: "rockJungleLarge4",
```

#### 693. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6563` → after: `L6563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6563) · [Before (L6563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6563)

```diff
-               om: "rockJungleLarge5",
+               BQ: "rockJungleLarge5",
```

#### 694. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6566` → after: `L6566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6566) · [Before (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6566)

```diff
-               om: "rockJungleLarge6",
+               BQ: "rockJungleLarge6",
```

#### 695. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6573` → after: `L6573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6573) · [Before (L6573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6573)

```diff
-             super(TT, UT, mT, WT, zT, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : dT(HT.p.MEDIUM, YT.ruins, YT.trees)), this.key = "pineForest", this.minDistanceFromOrigin = 200, this.grassChance = 0, this.tallGrassChance = 0, this.pineGrassChance = .02, this … [truncated]
+             super(BB, jB, zB, QB, nB, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : fB(uB.j.MEDIUM, EB.ruins, EB.trees)), this.key = "pineForest", this.minDistanceFromOrigin = 200, this.grassChance = 0, this.tallGrassChance = 0, this.pineGrassChance = .02, this … [truncated]
```

#### 696. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6583` → after: `L6583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6583) · [Before (L6583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6583)

```diff
-             super(TT, UT, mT, `${WT}Blue`, zT), this.key = "bluebellForest", this.bluebellChance = 10, this.melonChance = 0, this.flowerPatchDistApart = 12, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.redMushroomChance = 0, this.fatRedMushroomChance … [truncated]
+             super(BB, jB, zB, `${QB}Blue`, nB), this.key = "bluebellForest", this.bluebellChance = 10, this.melonChance = 0, this.flowerPatchDistApart = 12, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.redMushroomChance = 0, this.fatRedMushroomChance … [truncated]
```

#### 697. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6588` → after: `L6588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6588) · [Before (L6588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6588)

```diff
-             super(TT, UT, mT, WT, zT, dT(HT.p.MEDIUM, eT.trees)), this.key = "cherryForest", this.mapleTreeChance = 1, this.aspenTreeChance = 1, this.cherryTreeChance = 15, this.flowerPatchDistApart = 12, this.defaultFlowerInsidePatchSpawnChance = .4, this.defaultFlowerPatchRadiu … [truncated]
+             super(BB, jB, zB, QB, nB, fB(uB.j.MEDIUM, MB.trees)), this.key = "cherryForest", this.mapleTreeChance = 1, this.aspenTreeChance = 1, this.cherryTreeChance = 15, this.flowerPatchDistApart = 12, this.defaultFlowerInsidePatchSpawnChance = .4, this.defaultFlowerPatchRadiu … [truncated]
```

#### 698. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6593` → after: `L6593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6593) · [Before (L6593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6593)

```diff
-             super(TT, UT, mT, `${zT}RollingHills`, MT), this.key = "rollingHills", this.riceChance = 30, this.topsoilBlockType = UT["Grass Block"].id, this.treeMinDist = 25, this.offsettedHeight = 20, this._heightmapSimplex = new WT.g([{
+             super(BB, jB, zB, `${nB}RollingHills`, dB), this.key = "rollingHills", this.riceChance = 30, this.topsoilBlockType = jB["Grass Block"].id, this.treeMinDist = 25, this.offsettedHeight = 20, this._heightmapSimplex = new QB.j([{
```

#### 699. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6599` → after: `L6599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6599) · [Before (L6599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6599)

```diff
-             }], `${zT}RollingHillsBiomeHeightMap`)
+             }], `${nB}RollingHillsBiomeHeightMap`)
```

#### 700. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6604` → after: `L6604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6604) · [Before (L6604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6604)

```diff
-             super(TT, UT, mT, `${zT}SnowyMountains`, MT), this.key = "snowyMountains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.ridgedNoiseAmplitude = void 0, this.ridgedNoiseOctave1 = void 0, this. … [truncated]
+             super(BB, jB, zB, `${nB}SnowyMountains`, dB), this.key = "snowyMountains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.ridgedNoiseAmplitude = void 0, this.ridgedNoiseOctave1 = void 0, this. … [truncated]
```

#### 701. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6607` → after: `L6607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6607) · [Before (L6607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6607)

```diff
-             }], `${zT}SnowyMountainsBiomeRidgedNoise`), this.ridgedNoiseOctave2 = new WT.g([{
+             }], `${nB}SnowyMountainsBiomeRidgedNoise`), this.ridgedNoiseOctave2 = new QB.j([{
```

#### 702. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6610` → after: `L6610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6610) · [Before (L6610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6610)

```diff
-             }], `${zT}SnowyMountainsBiomeRidgedNoiseOctave2`), this.nonRidgedNoise = new WT.g([{
+             }], `${nB}SnowyMountainsBiomeRidgedNoiseOctave2`), this.nonRidgedNoise = new QB.j([{
```

#### 703. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6613` → after: `L6613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6613) · [Before (L6613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6613)

```diff
-             }], `${zT}SnowyMountainsBiomeNonRidgedNoise`), this.ridgedNoiseAmplitude = (0, WT.D)(this.ridgedNoiseOctave1) + (0, WT.D)(this.ridgedNoiseOctave2)
+             }], `${nB}SnowyMountainsBiomeNonRidgedNoise`), this.ridgedNoiseAmplitude = (0, QB.x)(this.ridgedNoiseOctave1) + (0, QB.x)(this.ridgedNoiseOctave2)
```

#### 704. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6628-L6629` → after: `L6628-L6629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6628-L6629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6628-L6629) · [Before (L6628-L6629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6628-L6629)

```diff
-             super(TT, UT, mT, zT, MT, dT(HT.p.HIGH, [{
-               om: "treeSpectralLarge1",
+             super(BB, jB, zB, nB, dB, fB(uB.j.HIGH, [{
+               BQ: "treeSpectralLarge1",
```

#### 705. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6632` → after: `L6632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6632) · [Before (L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6632)

```diff
-               om: "treeSpectralLarge2",
+               BQ: "treeSpectralLarge2",
```

#### 706. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6635` → after: `L6635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6635) · [Before (L6635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6635)

```diff
-               om: "rockSnowLarge1",
+               BQ: "rockSnowLarge1",
```

#### 707. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6638` → after: `L6638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6638) · [Before (L6638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6638)

```diff
-               om: "rockSnowLarge2",
+               BQ: "rockSnowLarge2",
```

#### 708. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6641` → after: `L6641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6641) · [Before (L6641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6641)

```diff
-               om: "rockSnowLarge3",
+               BQ: "rockSnowLarge3",
```

#### 709. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6644` → after: `L6644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6644) · [Before (L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6644)

```diff
-               om: "ruinSnowSmall1",
+               BQ: "ruinSnowSmall1",
```

#### 710. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6647` → after: `L6647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6647) · [Before (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6647)

```diff
-               om: "ruinSnowSmall2",
+               BQ: "ruinSnowSmall2",
```

#### 711. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6650` → after: `L6650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6650) · [Before (L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6650)

```diff
-               om: "ruinSnowSmall3",
+               BQ: "ruinSnowSmall3",
```

#### 712. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6653` → after: `L6653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6653) · [Before (L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6653)

```diff
-               om: "ruinSnowSmall4",
+               BQ: "ruinSnowSmall4",
```

#### 713. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6656` → after: `L6656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6656) · [Before (L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6656)

```diff
-               om: "ruinSnowMedium1",
+               BQ: "ruinSnowMedium1",
```

#### 714. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6659` → after: `L6659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6659) · [Before (L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6659)

```diff
-               om: "ruinSnowMedium2",
+               BQ: "ruinSnowMedium2",
```

#### 715. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6662` → after: `L6662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6662) · [Before (L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6662)

```diff
-               om: "ruinSnowLarge1",
+               BQ: "ruinSnowLarge1",
```

#### 716. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6665` → after: `L6665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6665) · [Before (L6665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6665)

```diff
-               om: "ruinSnowLarge2",
+               BQ: "ruinSnowLarge2",
```

#### 717. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6667` → after: `L6667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6667) · [Before (L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6667)

```diff
-             }])), this.key = "frozenBadlandsPlains", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChan … [truncated]
+             }])), this.key = "frozenBadlandsPlains", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChan … [truncated]
```

#### 718. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6673` → after: `L6673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6673) · [Before (L6673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6673)

```diff
-             }], `${zT}FrozenBadlandsPlainsHeightMap`)
+             }], `${nB}FrozenBadlandsPlainsHeightMap`)
```

#### 719. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6678-L6679` → after: `L6678-L6679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6678-L6679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6678-L6679) · [Before (L6678-L6679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6678-L6679)

```diff
-             super(TT, UT, mT, zT, MT, dT(HT.p.HIGH, [{
-               om: "treeSpectralLarge1",
+             super(BB, jB, zB, nB, dB, fB(uB.j.HIGH, [{
+               BQ: "treeSpectralLarge1",
```

#### 720. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6682` → after: `L6682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6682) · [Before (L6682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6682)

```diff
-               om: "treeSpectralLarge2",
+               BQ: "treeSpectralLarge2",
```

#### 721. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6685` → after: `L6685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6685) · [Before (L6685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6685)

```diff
-               om: "rockSnowLarge1",
+               BQ: "rockSnowLarge1",
```

#### 722. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6688` → after: `L6688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6688) · [Before (L6688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6688)

```diff
-               om: "rockSnowLarge2",
+               BQ: "rockSnowLarge2",
```

#### 723. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6691` → after: `L6691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6691) · [Before (L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6691)

```diff
-               om: "rockSnowLarge3",
+               BQ: "rockSnowLarge3",
```

#### 724. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6694` → after: `L6694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6694) · [Before (L6694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6694)

```diff
-               om: "ruinSnowSmall1",
+               BQ: "ruinSnowSmall1",
```

#### 725. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6697` → after: `L6697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6697) · [Before (L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6697)

```diff
-               om: "ruinSnowSmall2",
+               BQ: "ruinSnowSmall2",
```

#### 726. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6700` → after: `L6700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6700) · [Before (L6700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6700)

```diff
-               om: "ruinSnowSmall3",
+               BQ: "ruinSnowSmall3",
```

#### 727. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6703` → after: `L6703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6703) · [Before (L6703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6703)

```diff
-               om: "ruinSnowSmall4",
+               BQ: "ruinSnowSmall4",
```

#### 728. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6706` → after: `L6706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6706) · [Before (L6706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6706)

```diff
-               om: "ruinSnowMedium1",
+               BQ: "ruinSnowMedium1",
```

#### 729. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6709` → after: `L6709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6709) · [Before (L6709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6709)

```diff
-               om: "ruinSnowMedium2",
+               BQ: "ruinSnowMedium2",
```

#### 730. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6712` → after: `L6712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6712) · [Before (L6712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6712)

```diff
-               om: "ruinSnowLarge1",
+               BQ: "ruinSnowLarge1",
```

#### 731. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6715` → after: `L6715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6715) · [Before (L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6715)

```diff
-               om: "ruinSnowLarge2",
+               BQ: "ruinSnowLarge2",
```

#### 732. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6717` → after: `L6717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6717) · [Before (L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6717)

```diff
-             }])), this.key = "frozenBadlandsForest", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChan … [truncated]
+             }])), this.key = "frozenBadlandsForest", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChan … [truncated]
```

#### 733. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6723` → after: `L6723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6723) · [Before (L6723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6723)

```diff
-             }], `${zT}FrozenBadlandsForestHeightMap`)
+             }], `${nB}FrozenBadlandsForestHeightMap`)
```

#### 734. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6728` → after: `L6728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6728) · [Before (L6728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6728)

```diff
-             super(TT, UT, mT, `${MT}Custom_${nT.eW}_${nT.YW}`, gT), this.key = "custom", this.grassChance = 0, this.tallGrassChance = 0, this.mapleTreeChance = 0, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.flowerPatchDistApart = null, this.treeMinD … [truncated]
+             super(BB, jB, zB, `${dB}Custom_${NB.qQ}_${NB.fQ}`, IB), this.key = "custom", this.grassChance = 0, this.tallGrassChance = 0, this.mapleTreeChance = 0, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.flowerPatchDistApart = null, this.treeMinD … [truncated]
```

#### 735. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6734` → after: `L6734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6734) · [Before (L6734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6734)

```diff
-             }], `${MT}CustomBiomeHeightMap`)
+             }], `${dB}CustomBiomeHeightMap`)
```

#### 736. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6738` → after: `L6738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6738) · [Before (L6738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6738)

```diff
-       39873: (TT, UT, mT) => {
+       39848: (BB, jB, zB) => {
```

#### 737. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6741-L6743` → after: `L6742-L6743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6742-L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6742-L6743) · [Before (L6741-L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6741-L6743)

```diff
-           h: () => ZT,
-           k: () => BT,
-           m: () => LT
+           g: () => JB,
+           h: () => rB
```

#### 738. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6745-L6751` → after: `L6745-L6751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6745-L6751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6745-L6751) · [Before (L6745-L6751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6745-L6751)

```diff
-         var WT = mT(39815),
-           zT = mT(39799),
-           MT = mT(39793),
-           gT = mT(653),
-           nT = mT(39823),
-           HT = mT(4333),
-           kT = mT(39867);
+         var QB = zB(39787),
+           nB = zB(39767),
+           dB = zB(39761),
+           IB = zB(658),
+           NB = zB(39796),
+           uB = zB(4347),
+           UB = zB(39846);
```

#### 739. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6754` → after: `L6754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6754) · [Before (L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6754)

```diff
-             this.biomePointGen = void 0, this.biomeOffsetSimplex = void 0, this.biomeOffsetBound = void 0, this.veryHighSurfacePrefabCells = new WeakMap, this.baseBiome = void 0, this.biomesTotalFrequency = void 0, this.bW = void 0, this.anyStrata = void 0, this.biomeFrequencies  … [truncated]
+             this.biomePointGen = void 0, this.biomeOffsetSimplex = void 0, this.biomeOffsetBound = void 0, this.veryHighSurfacePrefabCells = new WeakMap, this.baseBiome = void 0, this.biomesTotalFrequency = void 0, this.EQ = void 0, this.anyStrata = void 0, this.biomeFrequencies  … [truncated]
```

#### 740. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6760` → after: `L6760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6760) · [Before (L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6760)

```diff
-             }], `${mT}BiomeOffsetSimplex`), this.biomeOffsetBound = Math.ceil((0, MT.D)(this.biomeOffsetSimplex)), this.baseBiome = new WT.g(zT, gT, TT, mT, {
+             }], `${zB}BiomeOffsetSimplex`), this.biomeOffsetBound = Math.ceil((0, dB.x)(this.biomeOffsetSimplex)), this.baseBiome = new QB.i(nB, IB, BB, zB, {
```

#### 741. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6762` → after: `L6762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6762) · [Before (L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6762)

```diff
-             }), this.baseBiome.init(), this.bW = HT, this.anyStrata = HT.some((TT => {
+             }), this.baseBiome.init(), this.EQ = uB, this.anyStrata = uB.some((BB => {
```

#### 742. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6767-L6769` → after: `L6767-L6769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6767-L6769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6767-L6769) · [Before (L6767-L6769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6767-L6769)

```diff
-             })), this.biomesTotalFrequency = 0, this.biomeFrequencies = new Array(this.bW.length);
-             for (let WT = 0; WT < this.bW.length; WT++) {
-               const TT = this.bW[WT],
+             })), this.biomesTotalFrequency = 0, this.biomeFrequencies = new Array(this.EQ.length);
+             for (let QB = 0; QB < this.EQ.length; QB++) {
+               const BB = this.EQ[QB],
```

#### 743. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6776` → after: `L6776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6776) · [Before (L6776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6776)

```diff
-                 if (zT.init(), zT.minDistanceFromOrigin > 0) throw new Error(`Alt Biomes cannot have non-zero minDistanceFromOrigin: biomeId = ${WT}`);
+                 if (nB.init(), nB.minDistanceFromOrigin > 0) throw new Error(`Alt Biomes cannot have non-zero minDistanceFromOrigin: biomeId = ${QB}`);
```

#### 744. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6778-L6779` → after: `L6778-L6779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6778-L6779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6778-L6779) · [Before (L6778-L6779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6778-L6779)

```diff
-                 for (let UT = 0; UT < this.bW.length; UT++)
-                   if (this.bW[UT].biome === zT) {
+                 for (let jB = 0; jB < this.EQ.length; jB++)
+                   if (this.EQ[jB].biome === nB) {
```

#### 745. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6782-L6783` → after: `L6782-L6783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6782-L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6782-L6783) · [Before (L6782-L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6782-L6783)

```diff
-                   } if (!TT) throw new Error(`Alt Biome not found in list of biomes: biomeId = ${WT}`)
-               } else if (UT.minDistanceFromOrigin > 0) throw new Error(`Biome has non-zero minDistanceFromOrigin, but no altBiome: biomeId = ${WT}`);
+                   } if (!BB) throw new Error(`Alt Biome not found in list of biomes: biomeId = ${QB}`)
+               } else if (jB.minDistanceFromOrigin > 0) throw new Error(`Biome has non-zero minDistanceFromOrigin, but no altBiome: biomeId = ${QB}`);
```

#### 746. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6834` → after: `L6834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6834) · [Before (L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6834)

```diff
-                     if (this.getBiomeForBiomePoint(TT).biome.hasPrefabs(zT.r.SURFACE, zT.p.VERY_HIGH)) {
+                     if (this.getBiomeForBiomePoint(BB).biome.hasPrefabs(nB.k.SURFACE, nB.j.VERY_HIGH)) {
```

#### 747. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6857` → after: `L6857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6857) · [Before (L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6857)

```diff
-               mT = new HT.k(`${TT[0]}|${TT[1]}|${this.seed}`);
+               zB = new uB.i(`${BB[0]}|${BB[1]}|${this.seed}`);
```

#### 748. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6859` → after: `L6859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6859) · [Before (L6859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6859)

```diff
-               zT = this.bW[WT].biome;
+               nB = this.EQ[QB].biome;
```

#### 749. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6861-L6863` → after: `L6861-L6863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6861-L6863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6861-L6863) · [Before (L6861-L6863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6861-L6863)

```diff
-               zT = this.bW[WT].altBiome;
-               for (let TT = 0; TT < this.bW.length; TT++)
-                 if (this.bW[TT].biome === zT) {
+               nB = this.EQ[QB].altBiome;
+               for (let BB = 0; BB < this.EQ.length; BB++)
+                 if (this.EQ[BB].biome === nB) {
```

#### 750. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6878` → after: `L6878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6878) · [Before (L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6878)

```diff
-               JW: mT,
+               oQ: zB,
```

#### 751. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6881-L6882` → after: `L6881-L6882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6881-L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6881-L6882) · [Before (L6881-L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6881-L6882)

```diff
-             } = this.bW[UT], MT = {
-               stoneTypeId: mT[pT(WT, zT, new HT.k(`${TT[0]}|${TT[1]}|${this.seed}Modifiers`))].stoneId
+             } = this.EQ[jB], dB = {
+               stoneTypeId: zB[sB(QB, nB, new uB.i(`${BB[0]}|${BB[1]}|${this.seed}Modifiers`))].stoneId
```

#### 752. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6888-L6889` → after: `L6888-L6889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6888-L6889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6888-L6889) · [Before (L6888-L6889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6888-L6889)

```diff
-               biomeIds: new MT.e(this.cB, [TT, UT]),
-               stoneTypeIds: new MT.e(this.cB, [TT, UT])
+               biomeIds: new dB.g(this.ZJ, [BB, jB]),
+               stoneTypeIds: new dB.g(this.ZJ, [BB, jB])
```

#### 753. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6891-L6892` → after: `L6891-L6892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6891-L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6891-L6892) · [Before (L6891-L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6891-L6892)

```diff
-             for (let zT = TT; zT < TT + this.cB; zT++)
-               for (let TT = UT; TT < UT + this.cB; TT++) {
+             for (let nB = BB; nB < BB + this.ZJ; nB++)
+               for (let BB = jB; BB < jB + this.ZJ; BB++) {
```

#### 754. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6899` → after: `L6899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6899) · [Before (L6899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6899)

```diff
-             return this.bW[TT].biome
+             return this.EQ[BB].biome
```

#### 755. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6908` → after: `L6908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6908) · [Before (L6908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6908)

```diff
-             JW: TT,
+             oQ: BB,
```

#### 756. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6942` → after: `L6942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6942) · [Before (L6942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6942)

```diff
-             cB: UT,
+             ZJ: jB,
```

#### 757. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6948-L6950` → after: `L6948-L6955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6948-L6955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6948-L6955) · [Before (L6948-L6950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6948-L6950)

```diff
-           const nT = new WT.o(UT, mT, zT, MT, gT),
-             HT = new WT.A(UT, mT, zT, MT, gT),
-             kT = new WT.G(UT, mT, zT, MT, gT),
+           const NB = new QB.s(jB, zB, nB, dB, IB),
+             uB = new QB.J(jB, zB, nB, dB, IB),
+             UB = new QB.O(jB, zB, nB, dB, IB),
+             aB = new QB.W(jB, zB, nB, dB, IB),
+             pB = new QB.S(jB, zB, nB, dB, IB),
+             sB = new QB.v(jB, zB, nB, dB, IB),
+             JB = new QB.T(jB, zB, nB, dB, IB),
+             mB = new QB.P(jB, zB, nB, dB, IB),
```

#### 758. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6952-L6961` → after: `L6957-L6961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6957-L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6957-L6961) · [Before (L6952-L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6952-L6961)

```diff
-             lT = new WT.N(UT, mT, zT, MT, gT),
-             pT = new WT.s(UT, mT, zT, MT, gT),
-             BT = new WT.Q(UT, mT, zT, MT, gT),
-             ZT = new WT.H(UT, mT, zT, MT, gT),
-             cT = new WT.L(UT, mT, zT, MT, gT),
-             vT = new WT.Y(UT, mT, zT, MT, gT),
-             fT = new WT.z(UT, mT, zT, MT, gT),
-             qT = new WT.b(UT, mT, zT, MT, gT),
-             iT = new WT.U(UT, mT, zT, MT, gT),
-             bT = new WT.V(UT, mT, zT, MT, gT),
+             kB = new QB.$(jB, zB, nB, dB, IB),
+             GB = new QB.F(jB, zB, nB, dB, IB),
+             LB = new QB.e(jB, zB, nB, dB, IB),
+             gB = new QB.Z(jB, zB, nB, dB, IB),
+             tB = new QB._(jB, zB, nB, dB, IB),
```

#### 759. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L6966-L6968` → after: `L6965-L6968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R6965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L6965-L6968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L6965-L6968) · [Before (L6966-L6968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L6966-L6968)

```diff
-             xT = new WT.E(UT, mT, zT, MT, gT),
-             dT = new WT.v(UT, mT, zT, MT, gT),
-             wT = new WT.t(UT, mT, zT, MT, gT),
+             iB = new QB.eb(jB, zB, nB, dB, IB),
+             qB = new QB.K(jB, zB, nB, dB, IB),
+             fB = new QB.C(jB, zB, nB, dB, IB),
+             oB = new QB.y(jB, zB, nB, dB, IB),
```

#### 760. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7082` → after: `L7082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7082) · [Before (L7082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7082)

```diff
-             cB: mT,
+             ZJ: zB,
```

#### 761. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7090-L7091` → after: `L7090-L7091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7090-L7091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7090-L7091) · [Before (L7090-L7091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7090-L7091)

```diff
-             const UT = new WT.m(mT, zT, MT, nT, HT, TT),
-               kT = TT.JW.map((TT => ({
+             const jB = new QB.o(zB, nB, dB, NB, uB, BB),
+               UB = BB.oQ.map((BB => ({
```

#### 762. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7104` → after: `L7104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7104) · [Before (L7104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7104)

```diff
-       39879: (TT, UT, mT) => {
+       39865: (BB, jB, zB) => {
```

#### 763. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7106-L7107` → after: `L7106-L7107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7106-L7107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7106-L7107) · [Before (L7106-L7107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7106-L7107)

```diff
-           b: () => ZT,
-           c: () => qT
+           d: () => mB,
+           g: () => LB
```

#### 764. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7109-L7113` → after: `L7109-L7113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7109-L7113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7109-L7113) · [Before (L7109-L7113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7109-L7113)

```diff
-         var WT = mT(39793),
-           zT = mT(653),
-           MT = mT(39799),
-           gT = mT(39796),
-           nT = mT(4333);
+         var QB = zB(39761),
+           nB = zB(658),
+           dB = zB(39767),
+           IB = zB(39763),
+           NB = zB(4347);
```

#### 765. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7116` → after: `L7116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7116) · [Before (L7116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7116)

```diff
-             this.cB = TT, this.pointsGenerator = UT, this.seed = WT, this.tempChunkCoord = [0, 0], this.chunkSearchRadius = void 0, this.chunkSearchRadius = Math.floor(.5 * mT / this.cB) + 1
+             this.ZJ = BB, this.pointsGenerator = jB, this.seed = QB, this.tempChunkCoord = [0, 0], this.chunkSearchRadius = void 0, this.chunkSearchRadius = Math.floor(.5 * zB / this.ZJ) + 1
```

#### 766. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7119` → after: `L7119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7119) · [Before (L7119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7119)

```diff
-             return this.tempChunkCoord[0] = Math.floor(TT / this.cB), this.tempChunkCoord[1] = Math.floor(UT / this.cB), this.tempChunkCoord
+             return this.tempChunkCoord[0] = Math.floor(BB / this.ZJ), this.tempChunkCoord[1] = Math.floor(jB / this.ZJ), this.tempChunkCoord
```

#### 767. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7129-L7132` → after: `L7129-L7132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7129-L7132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7129-L7132) · [Before (L7129-L7132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7129-L7132)

```diff
-             const mT = TT * this.cB,
-               WT = UT * this.cB,
-               zT = new nT.k(`${TT}|${UT}|${this.seed}`);
-             return [mT + Math.floor(zT.next() * this.cB), WT + Math.floor(zT.next() * this.cB)]
+             const zB = BB * this.ZJ,
+               QB = jB * this.ZJ,
+               nB = new NB.i(`${BB}|${jB}|${this.seed}`);
+             return [zB + Math.floor(nB.next() * this.ZJ), QB + Math.floor(nB.next() * this.ZJ)]
```

#### 768. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7135-L7136` → after: `L7135-L7136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7135-L7136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7135-L7136) · [Before (L7135-L7136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7135-L7136)

```diff
-         var kT = mT(39823),
-           jT = mT(39867);
+         var UB = zB(39796),
+           aB = zB(39846);
```

#### 769. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7139` → after: `L7139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7139) · [Before (L7139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7139)

```diff
-             this.numCaveTypes = TT, this.caveTypeToBlockIds = UT, this.caveTypePrioritization = mT, this.cB = WT
+             this.numCaveTypes = BB, this.caveTypeToBlockIds = jB, this.caveTypePrioritization = zB, this.ZJ = QB
```

#### 770. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7150` → after: `L7150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7150) · [Before (L7150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7150)

```diff
-             return new pT(this.numCaveTypes, this.caveTypeToBlockIds, this.caveTypePrioritization, this.cB, this.data.viewJustInnerChunk())
+             return new sB(this.numCaveTypes, this.caveTypeToBlockIds, this.caveTypePrioritization, this.ZJ, this.data.viewJustInnerChunk())
```

#### 771. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7174` → after: `L7174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7174) · [Before (L7174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7174)

```diff
-             this.cB = UT, this.caveMetadataForChunkCache = void 0, this.caveMetadataForChunkCache = new iT(TT, UT, mT, WT)
+             this.ZJ = jB, this.caveMetadataForChunkCache = void 0, this.caveMetadataForChunkCache = new gB(BB, jB, zB, QB)
```

#### 772. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7178-L7179` → after: `L7178-L7179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7178-L7179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7178-L7179) · [Before (L7178-L7179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7178-L7179)

```diff
-               const gT = WT.getOrGenerate(TT, mT, zT, MT.e.FloorY),
-                 nT = WT.getOrGenerate(TT, mT, zT, MT.e.CeilingY);
+               const IB = QB.getOrGenerate(BB, zB, nB, dB.c.FloorY),
+                 NB = QB.getOrGenerate(BB, zB, nB, dB.c.CeilingY);
```

#### 773. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7185-L7188` → after: `L7185-L7188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7185-L7188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7185-L7188) · [Before (L7185-L7188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7185-L7188)

```diff
-             const kT = new nT.k(`caveBlocks${UT}|${mT}|${WT}`);
-             for (let nT = UT; nT < UT + HT.cB; nT++)
-               for (let jT = WT; jT < WT + HT.cB; jT++) {
-                 const lT = zT.get(nT, jT, MT.i.GroundHeight);
+             const UB = new NB.i(`caveBlocks${jB}|${zB}|${QB}`);
+             for (let NB = jB; NB < jB + uB.ZJ; NB++)
+               for (let aB = QB; aB < QB + uB.ZJ; aB++) {
+                 const pB = nB.get(NB, aB, dB.e.GroundHeight);
```

#### 774. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7190-L7193` → after: `L7190-L7193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7190-L7193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7190-L7193) · [Before (L7190-L7193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7190-L7193)

```diff
-                   const LT = HT.getOrGenerate(nT, jT, zT, MT.e.FloorY);
-                   if (LT === gT.j) continue;
-                   const pT = HT.getOrGenerate(nT, jT, zT, MT.e.CeilingY),
-                     BT = Math.min(pT + 1, mT + HT.cB, lT + 1),
+                   const rB = uB.getOrGenerate(NB, aB, nB, dB.c.FloorY);
+                   if (rB === IB.l) continue;
+                   const sB = uB.getOrGenerate(NB, aB, nB, dB.c.CeilingY),
+                     JB = Math.min(sB + 1, zB + uB.ZJ, pB + 1),
```

#### 775. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7196` → after: `L7196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7196) · [Before (L7196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7196)

```diff
-                     const MT = "number" === typeof ZT ? ZT : ZT.sample(kT);
+                     const dB = "number" === typeof mB ? mB : mB.sample(UB);
```

#### 776. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7204` → after: `L7204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7204) · [Before (L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7204)

```diff
-               gT = new cT(this.caveMetadataForChunkCache, mT, this.cB),
+               IB = new yB(this.caveMetadataForChunkCache, zB, this.ZJ),
```

#### 777. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7208-L7209` → after: `L7208-L7209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7208-L7209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7208-L7209) · [Before (L7208-L7209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7208-L7209)

```diff
-               jT = WT.d.create(this.cB, zT, nT, MT.e.NumFields, gT);
-             return new LT(nT, HT, kT, this.cB, jT)
+               aB = QB.d.create(this.ZJ, nB, NB, dB.c.NumFields, IB);
+             return new rB(NB, uB, UB, this.ZJ, aB)
```

#### 778. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7214` → after: `L7214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7214) · [Before (L7214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7214)

```diff
-             if (this.caveMetadataForChunkCache = TT, this.heightmapVals = UT, this.caveGeneratorsPerChunk = [], mT !== zT.z) throw new Error(`Cave generation is not supported for chunk sizes other than ${zT.z}`)
+             if (this.caveMetadataForChunkCache = BB, this.heightmapVals = jB, this.caveGeneratorsPerChunk = [], zB !== nB.y) throw new Error(`Cave generation is not supported for chunk sizes other than ${nB.y}`)
```

#### 779. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7217-L7218` → after: `L7217-L7218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7217-L7218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7217-L7218) · [Before (L7217-L7218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7217-L7218)

```diff
-             const WT = (0, zT.H)(TT),
-               MT = (0, zT.H)(UT);
+             const QB = (0, nB.P)(BB),
+               dB = (0, nB.P)(jB);
```

#### 780. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7233` → after: `L7233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7233) · [Before (L7233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7233)

```diff
-             for (let WT = 0; WT < this.numCaveTypes; WT++) mT.set(TT, UT, WT, MT.e.FloorY, gT.j), mT.set(TT, UT, WT, MT.e.CeilingY, gT.j)
+             for (let QB = 0; QB < this.numCaveTypes; QB++) zB.set(BB, jB, QB, dB.c.FloorY, IB.l), zB.set(BB, jB, QB, dB.c.CeilingY, IB.l)
```

#### 781. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7240` → after: `L7240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7240) · [Before (L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7240)

```diff
-               if (nT === gT.b) continue;
+               if (NB === IB.c) continue;
```

#### 782. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7253` → after: `L7253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7253) · [Before (L7253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7253)

```diff
-               pT + 1 === this.heightmapVals.getOrGenerate(TT, UT, MT.i.GroundHeight) && pT++, mT.set(TT, UT, WT.caveType, MT.e.FloorY, LT), mT.set(TT, UT, WT.caveType, MT.e.CeilingY, pT)
+               sB + 1 === this.heightmapVals.getOrGenerate(BB, jB, dB.e.GroundHeight) && sB++, zB.set(BB, jB, QB.caveType, dB.c.FloorY, rB), zB.set(BB, jB, QB.caveType, dB.c.CeilingY, sB)
```

#### 783. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7279` → after: `L7279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7279) · [Before (L7279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7279)

```diff
-               BT = Math.floor(BT), ZT = Math.floor(ZT), (lT || ZT + 1 === this.heightmapVals.getOrGenerate(TT, UT, MT.i.GroundHeight)) && ZT++;
+               JB = Math.floor(JB), mB = Math.floor(mB), (pB || mB + 1 === this.heightmapVals.getOrGenerate(BB, jB, dB.e.GroundHeight)) && mB++;
```

#### 784. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7281` → after: `L7281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7281) · [Before (L7281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7281)

```diff
-               null !== WT.wallType && (vT <= .9 || fT <= .9) ? iT = WT.wallType : WT.pitCeilingThickness > 0 && (ZT -= WT.pitCeilingThickness, mT.set(TT, UT, WT.ceilingType, MT.e.FloorY, ZT), mT.set(TT, UT, WT.ceilingType, MT.e.CeilingY, ZT + WT.pitCeilingThickness)), mT.set(TT,  … [truncated]
+               null !== QB.wallType && (kB <= .9 || GB <= .9) ? gB = QB.wallType : QB.pitCeilingThickness > 0 && (mB -= QB.pitCeilingThickness, zB.set(BB, jB, QB.ceilingType, dB.c.FloorY, mB), zB.set(BB, jB, QB.ceilingType, dB.c.CeilingY, mB + QB.pitCeilingThickness)), zB.set(BB,  … [truncated]
```

#### 785. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7295` → after: `L7295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7295) · [Before (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7295)

```diff
-                 pT = (0, WT.M)(gT, lT, LT);
+                 sB = (0, QB.D)(IB, pB, rB);
```

#### 786. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7300` → after: `L7300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7300) · [Before (L7300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7300)

```diff
-                 vT = (0, WT.w)(BT, ZT, cT),
+                 kB = (0, QB.t)(JB, mB, yB),
```

#### 787. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7312` → after: `L7312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7312) · [Before (L7312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7312)

```diff
-               iT = Math.floor(iT), bT = Math.floor(bT), bT + 1 === this.heightmapVals.getOrGenerate(TT, UT, MT.i.GroundHeight) && bT++, mT.set(TT, UT, zT.caveType, MT.e.FloorY, iT), mT.set(TT, UT, zT.caveType, MT.e.CeilingY, bT)
+               gB = Math.floor(gB), tB = Math.floor(tB), tB + 1 === this.heightmapVals.getOrGenerate(BB, jB, dB.e.GroundHeight) && tB++, zB.set(BB, jB, nB.caveType, dB.c.FloorY, gB), zB.set(BB, jB, nB.caveType, dB.c.CeilingY, tB)
```

#### 788. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7329` → after: `L7329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7329) · [Before (L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7329)

```diff
-               BT + 1 === this.heightmapVals.getOrGenerate(TT, UT, MT.i.GroundHeight) && BT++, mT.set(TT, UT, WT.caveType, MT.e.FloorY, pT), mT.set(TT, UT, WT.caveType, MT.e.CeilingY, BT)
+               JB + 1 === this.heightmapVals.getOrGenerate(BB, jB, dB.e.GroundHeight) && JB++, zB.set(BB, jB, QB.caveType, dB.c.FloorY, sB), zB.set(BB, jB, QB.caveType, dB.c.CeilingY, JB)
```

#### 789. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7333-L7334` → after: `L7333-L7334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7333-L7334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7333-L7334) · [Before (L7333-L7334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7333-L7334)

```diff
-             const WT = this.heightmapVals.getOrGenerate(TT, UT, MT.i.CavesAllowedBelowY);
-             if (WT !== gT.h)
+             const QB = this.heightmapVals.getOrGenerate(BB, jB, dB.e.CavesAllowedBelowY);
+             if (QB !== IB.j)
```

#### 790. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7336-L7337` → after: `L7336-L7337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7336-L7337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7336-L7337) · [Before (L7336-L7337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7336-L7337)

```diff
-                 if (mT.get(TT, UT, zT, MT.e.CeilingY) <= WT) continue;
-                 mT.get(TT, UT, zT, MT.e.FloorY) <= WT ? mT.set(TT, UT, zT, MT.e.CeilingY, WT) : (mT.set(TT, UT, zT, MT.e.FloorY, gT.j), mT.set(TT, UT, zT, MT.e.CeilingY, gT.j))
+                 if (zB.get(BB, jB, nB, dB.c.CeilingY) <= QB) continue;
+                 zB.get(BB, jB, nB, dB.c.FloorY) <= QB ? zB.set(BB, jB, nB, dB.c.CeilingY, QB) : (zB.set(BB, jB, nB, dB.c.FloorY, IB.l), zB.set(BB, jB, nB, dB.c.CeilingY, IB.l))
```

#### 791. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7342` → after: `L7342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7342) · [Before (L7342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7342)

```diff
-         const fT = new jT.e("cave chunk metadata", 100, 6e4);
+         const GB = new aB.c("cave chunk metadata", 100, 6e4);
```

#### 792. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7494-L7495` → after: `L7494-L7495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7494-L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7494-L7495) · [Before (L7494-L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7494-L7495)

```diff
-                     caveEdgeNoiseGenerator: new WT.g(mT.caveEdgeNoiseParams, `${TT}CaveCutoff${gT}${zT}`),
-                     caveHeightNoiseGenerator: new WT.k(mT.caveHeightNoiseParams, mT.caveHeightNoiseThresholdParams, `${TT}Cave${gT}${zT}`),
+                     caveEdgeNoiseGenerator: new QB.j(zB.caveEdgeNoiseParams, `${BB}CaveCutoff${IB}${nB}`),
+                     caveHeightNoiseGenerator: new QB.m(zB.caveHeightNoiseParams, zB.caveHeightNoiseThresholdParams, `${BB}Cave${IB}${nB}`),
```

#### 793. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7499-L7500` → after: `L7499-L7500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7499-L7500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7499-L7500) · [Before (L7499-L7500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7499-L7500)

```diff
-                     caveXZPerturbNoiseGenerator: new WT.g(mT.caveXZPerturbNoiseParams, `${TT}CaveHeightPerturb${gT}${zT}`),
-                     caveYPerturbNoiseGenerator: new WT.g(mT.caveYPerturbNoiseParams, `${TT}CaveHeightNoise${gT}${zT}`),
+                     caveXZPerturbNoiseGenerator: new QB.j(zB.caveXZPerturbNoiseParams, `${BB}CaveHeightPerturb${IB}${nB}`),
+                     caveYPerturbNoiseGenerator: new QB.j(zB.caveYPerturbNoiseParams, `${BB}CaveHeightNoise${IB}${nB}`),
```

#### 794. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7596` → after: `L7596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7596) · [Before (L7596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7596)

```diff
-                     wallBlockIds: new nT.i([{
+                     wallBlockIds: new NB.e([{
```

#### 795. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7619-L7621` → after: `L7619-L7621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7619-L7621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7619-L7621) · [Before (L7619-L7621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7619-L7621)

```diff
-                       LT = new WT.g(zT.pitXZPerturbNoiseParams, `${TT}DistPitPerturb${MT}`),
-                       BT = `${TT}PitGen${MT}`,
-                       ZT = new kT.b("cavePit", zT.numChunksBetweenPits, !0, !1, BT, 100, UT),
+                       rB = new QB.j(nB.pitXZPerturbNoiseParams, `${BB}DistPitPerturb${dB}`),
+                       JB = `${BB}PitGen${dB}`,
+                       mB = new UB.e("cavePit", nB.numChunksBetweenPits, !0, !1, JB, 100, jB),
```

#### 796. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7623-L7627` → after: `L7623-L7627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7623-L7627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7623-L7627) · [Before (L7623-L7627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7623-L7627)

```diff
-                     console.assert(cT.chunkSearchRadius <= zT.numChunksBetweenPits / 2, `Cannot have overlapping cave features (pits), ${cT.chunkSearchRadius} ${zT.numChunksBetweenPits/2}`);
-                     const vT = new nT.l(zT.pitMinWidth, zT.pitMaxWidth),
-                       fT = new nT.l(zT.pitMinFloorY, zT.pitMaxFloorY),
-                       qT = new nT.l(zT.pitMinHeight, zT.pitMaxHeight),
-                       iT = new WT.g(zT.pitFloorYPerturbNoiseParams, `${TT}yPitPerturb${MT}`);
+                     console.assert(yB.chunkSearchRadius <= nB.numChunksBetweenPits / 2, `Cannot have overlapping cave features (pits), ${yB.chunkSearchRadius} ${nB.numChunksBetweenPits/2}`);
+                     const kB = new NB.j(nB.pitMinWidth, nB.pitMaxWidth),
+                       GB = new NB.j(nB.pitMinFloorY, nB.pitMaxFloorY),
+                       LB = new NB.j(nB.pitMinHeight, nB.pitMaxHeight),
+                       gB = new QB.j(nB.pitFloorYPerturbNoiseParams, `${BB}yPitPerturb${dB}`);
```

#### 797. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7629-L7630` → after: `L7629-L7630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7629-L7630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7629-L7630) · [Before (L7629-L7630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7629-L7630)

```diff
-                     null !== zT.pitHeightPerturbNoiseParams && (bT = new WT.g(zT.pitHeightPerturbNoiseParams, `${TT}heightPitPerturb${MT}`));
-                     const OT = new WT.g(zT.pitMidpointNoiseParams, `${TT}edgesPitPerturb${MT}`),
+                     null !== nB.pitHeightPerturbNoiseParams && (tB = new QB.j(nB.pitHeightPerturbNoiseParams, `${BB}heightPitPerturb${dB}`));
+                     const SB = new QB.j(nB.pitMidpointNoiseParams, `${BB}edgesPitPerturb${dB}`),
```

#### 798. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7637` → after: `L7637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7637) · [Before (L7637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7637)

```diff
-                     null !== zT.ceilingParams && (JT = gT++, xT = new nT.l(zT.ceilingParams.minThickness, zT.ceilingParams.maxThickness), jT[JT] = zT.ceilingParams.blockIds), void 0 !== zT.priority && (lT[eT] = zT.priority, null !== YT && (lT[YT] = zT.priority), null !== JT && (l … [truncated]
+                     null !== nB.ceilingParams && (iB = IB++, qB = new NB.j(nB.ceilingParams.minThickness, nB.ceilingParams.maxThickness), aB[iB] = nB.ceilingParams.blockIds), void 0 !== nB.priority && (pB[MB] = nB.priority, null !== EB && (pB[EB] = nB.priority), null !== iB && (p … [truncated]
```

#### 799. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7700` → after: `L7700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7700) · [Before (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7700)

```diff
-                     lT = new WT.g(jT.ravineXZPerturbNoiseParams, `${TT}DistRavPerturb${gT}`);
+                     pB = new QB.j(aB.ravineXZPerturbNoiseParams, `${BB}DistRavPerturb${IB}`);
```

#### 800. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7703-L7705` → after: `L7703-L7705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7703-L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7703-L7705) · [Before (L7703-L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7703-L7705)

```diff
-                   const pT = new WT.g(jT.ravineYPerturbNoiseParams, `${TT}yRavinePerturb${gT}`),
-                     BT = `${TT}RavineGen${gT}`,
-                     ZT = new kT.b("caveRav", jT.numChunksBetweenRavines, !0, !1, BT, 100, UT),
+                   const sB = new QB.j(aB.ravineYPerturbNoiseParams, `${BB}yRavinePerturb${IB}`),
+                     JB = `${BB}RavineGen${IB}`,
+                     mB = new UB.e("caveRav", aB.numChunksBetweenRavines, !0, !1, JB, 100, jB),
```

#### 801. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7707-L7712` → after: `L7707-L7712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7707-L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7707-L7712) · [Before (L7707-L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7707-L7712)

```diff
-                   console.assert(cT.chunkSearchRadius <= jT.numChunksBetweenRavines / 2, `Cannot have overlapping cave features (ravines), ${cT.chunkSearchRadius} ${jT.numChunksBetweenRavines/2}`);
-                   const vT = new nT.l(jT.ravineMinWidth, jT.ravineMaxWidth),
-                     fT = new nT.l(jT.ravineMinLength, jT.ravineMaxLength),
-                     qT = new nT.l(jT.ravineMinFloorY, jT.ravineMaxFloorY, !0),
-                     iT = new nT.l(jT.ravineMinHeight, jT.ravineMaxHeight),
-                     bT = new nT.n(-1, 1);
+                   console.assert(yB.chunkSearchRadius <= aB.numChunksBetweenRavines / 2, `Cannot have overlapping cave features (ravines), ${yB.chunkSearchRadius} ${aB.numChunksBetweenRavines/2}`);
+                   const kB = new NB.j(aB.ravineMinWidth, aB.ravineMaxWidth),
+                     GB = new NB.j(aB.ravineMinLength, aB.ravineMaxLength),
+                     LB = new NB.j(aB.ravineMinFloorY, aB.ravineMaxFloorY, !0),
+                     gB = new NB.j(aB.ravineMinHeight, aB.ravineMaxHeight),
+                     tB = new NB.l(-1, 1);
```

#### 802. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7754` → after: `L7754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7754) · [Before (L7754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7754)

```diff
-                     lT = new WT.g(jT.sphereXZPerturbNoiseParams, `${TT}DistSpherePerturb${gT}`);
+                     pB = new QB.j(aB.sphereXZPerturbNoiseParams, `${BB}DistSpherePerturb${IB}`);
```

#### 803. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7757-L7758` → after: `L7757-L7758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7757-L7758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7757-L7758) · [Before (L7757-L7758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7757-L7758)

```diff
-                   const pT = `${TT}SphereGen${gT}`,
-                     BT = new kT.b("caveSph", jT.numChunksBetweenSpheres, !0, !1, pT, 100, UT),
+                   const sB = `${BB}SphereGen${IB}`,
+                     JB = new UB.e("caveSph", aB.numChunksBetweenSpheres, !0, !1, sB, 100, jB),
```

#### 804. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7760-L7762` → after: `L7760-L7762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7760-L7762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7760-L7762) · [Before (L7760-L7762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7760-L7762)

```diff
-                   console.assert(ZT.chunkSearchRadius <= jT.numChunksBetweenSpheres / 2, `Cannot have overlapping cave features (spheres), ${ZT.chunkSearchRadius} ${jT.numChunksBetweenSpheres/2}`);
-                   const cT = new nT.l(jT.sphereMinRadius, jT.sphereMaxRadius, !0),
-                     vT = new nT.l(jT.sphereMinCentreY, jT.sphereMaxCentreY);
+                   console.assert(mB.chunkSearchRadius <= aB.numChunksBetweenSpheres / 2, `Cannot have overlapping cave features (spheres), ${mB.chunkSearchRadius} ${aB.numChunksBetweenSpheres/2}`);
+                   const yB = new NB.j(aB.sphereMinRadius, aB.sphereMaxRadius, !0),
+                     kB = new NB.j(aB.sphereMinCentreY, aB.sphereMaxCentreY);
```

#### 805. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7796-L7797` → after: `L7796-L7797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7796-L7797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7796-L7797) · [Before (L7796-L7797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7796-L7797)

```diff
-             if (!(0, zT.E)(mT)) return mT;
-             const WT = [(0, zT.y)(TT), (0, zT.y)(UT)],
+             if (!(0, nB.I)(zB)) return zB;
+             const QB = [(0, nB.v)(BB), (0, nB.v)(jB)],
```

#### 806. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7815` → after: `L7815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7815) · [Before (L7815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7815)

```diff
-                   kT = new nT.k(`pit${gT}|${HT}|${zT}${this.seed}`),
+                   UB = new NB.i(`pit${IB}|${uB}|${nB}${this.seed}`),
```

#### 807. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7825` → after: `L7825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7825) · [Before (L7825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7825)

```diff
-                   qT = null !== (mT = null === (WT = MT.pitCeilingThicknessDistribution) || void 0 === WT ? void 0 : WT.sample(kT)) && void 0 !== mT ? mT : 0;
+                   LB = null !== (zB = null === (QB = dB.pitCeilingThicknessDistribution) || void 0 === QB ? void 0 : QB.sample(UB)) && void 0 !== zB ? zB : 0;
```

#### 808. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7858` → after: `L7858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7858) · [Before (L7858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7858)

```diff
-                   HT = new nT.k(`rav${MT}|${gT}|${mT}${this.seed}`),
+                   uB = new NB.i(`rav${dB}|${IB}|${zB}${this.seed}`),
```

#### 809. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7864` → after: `L7864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7864) · [Before (L7864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7864)

```diff
-                 (0, WT.K)(pT);
+                 (0, QB.B)(sB);
```

#### 810. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7895` → after: `L7895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7895) · [Before (L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7895)

```diff
-                   gT = new nT.k(`sph${zT}|${MT}|${mT}${this.seed}`),
+                   IB = new NB.i(`sph${nB}|${dB}|${zB}${this.seed}`),
```

#### 811. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7915` → after: `L7915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7915) · [Before (L7915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7915)

```diff
-       39801: (TT, UT, mT) => {
+       39773: (BB, jB, zB) => {
```

#### 812. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7917` → after: `L7917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7917) · [Before (L7917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7917)

```diff
-           b: () => cT
+           d: () => yB
```

#### 813. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7919-L7921` → after: `L7919-L7921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7919-L7921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7919-L7921) · [Before (L7919-L7921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7919-L7921)

```diff
-         var WT = mT(39799),
-           zT = mT(39793),
-           MT = mT(1764),
+         var QB = zB(39767),
+           nB = zB(39761),
+           dB = zB(1672),
```

#### 814. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7923-L7924` → after: `L7923-L7924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7923-L7924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7923-L7924) · [Before (L7923-L7924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7923-L7924)

```diff
-           nT = mT(653),
-           HT = mT(2963),
+           NB = zB(658),
+           uB = zB(2944),
```

#### 815. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7926-L7929` → after: `L7926-L7929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7926-L7929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7926-L7929) · [Before (L7926-L7929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7926-L7929)

```diff
-           jT = mT(37857),
-           lT = mT(39809),
-           LT = mT(39275),
-           pT = mT(39812);
+           aB = zB(37821),
+           pB = zB(39782),
+           rB = zB(39229),
+           sB = zB(39784);
```

#### 816. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7932` → after: `L7932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7932) · [Before (L7932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7932)

```diff
-           const WT = new LT.e;
+           const QB = new rB.d;
```

#### 817. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7935` → after: `L7935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7935) · [Before (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7935)

```diff
-             if (!(0, nT.E)(TT)) throw new Error(`Duplicate chunk at ${zT.chunkX}, ${zT.chunkY}, ${zT.chunkZ}`);
+             if (!(0, NB.I)(BB)) throw new Error(`Duplicate chunk at ${nB.chunkX}, ${nB.chunkY}, ${nB.chunkZ}`);
```

#### 818. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7953` → after: `L7953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7953) · [Before (L7953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7953)

```diff
-             rle: (0, pT.d)("EAABgQEHHAGBARcAAR8HAAEf1wcAAYEBBxwBgQEXAAGBAQIcASIDHAEiAYEBFwABHwcAAR+1BwADgQEHHAOBARMAA4EBBxwDgQETAAGIAQKBAQEcAiICHAIiA4EBEwABiAECgQEHAAOBARMAA4EBBwADgQETAAMfBwADHxMAAxwHAAMcEwADHAcAAxwTAAMdBwABHAIdFQABHQcAAh3KBQANgQEHHAiBAQQAAYgBAR0BiAEKgQEHHAiBAQQA … [truncated]
+             rle: (0, sB.c)("EAABgQEHHAGBARcAAR8HAAEf1wcAAYEBBxwBgQEXAAGBAQIcASIDHAEiAYEBFwABHwcAAR+1BwADgQEHHAOBARMAA4EBBxwDgQETAAGIAQKBAQEcAiICHAIiA4EBEwABiAECgQEHAAOBARMAA4EBBwADgQETAAMfBwADHxMAAxwHAAMcEwADHAcAAxwTAAMdBwABHAIdFQABHQcAAh3KBQANgQEHHAiBAQQAAYgBAR0BiAEKgQEHHAiBAQQA … [truncated]
```

#### 819. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7958` → after: `L7958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7958) · [Before (L7958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7958)

```diff
-             rle: (0, pT.d)("gBgABIEBAYgBGwAEgQEBHRsABIEBAYgBGwABiAEEgQEcAAEdAx/7BgAEAgKBARoABAIBgQEBiAEaAAQCAoEBGgAEBAKBARwAApYBAh/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR0AAZYBAQABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHwABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHAAB1QgCAAEfHAAB … [truncated]
+             rle: (0, sB.c)("gBgABIEBAYgBGwAEgQEBHRsABIEBAYgBGwABiAEEgQEcAAEdAx/7BgAEAgKBARoABAIBgQEBiAEaAAQCAoEBGgAEBAKBARwAApYBAh/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR0AAZYBAQABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHwABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHAAB1QgCAAEfHAAB … [truncated]
```

#### 820. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7963` → after: `L7963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7963) · [Before (L7963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7963)

```diff
-             rle: (0, pT.d)("AwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwABgQELBAEfBhwCIgEcAR8GBAMAAR8BlgEHAAGWAQ4AAZYB5wYAAYEBDAIJHAcCAwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBCwQBHwYcAiIBHAEfBgQDAAEfAdUIAZYBBQABlgECAAGWAQ0AAZYBBwAB1gjeBgABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwAB … [truncated]
+             rle: (0, sB.c)("AwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwABgQELBAEfBhwCIgEcAR8GBAMAAR8BlgEHAAGWAQ4AAZYB5wYAAYEBDAIJHAcCAwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBCwQBHwYcAiIBHAEfBgQDAAEfAdUIAZYBBQABlgECAAGWAQ0AAZYBBwAB1gjeBgABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwAB … [truncated]
```

#### 821. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7968` → after: `L7968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7968) · [Before (L7968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7968)

```diff
-             rle: (0, pT.d)("BQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEaAAGWAQQAAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYgBGgAFBAGBARwAA5YBAR/6BgAEAgKBARoABAIBgQEBiAEaAAQCAYEBAR0aAAQEAoEBGwABlgEB1QgBlgECHxwAAdYI … [truncated]
+             rle: (0, sB.c)("BQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEaAAGWAQQAAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYgBGgAFBAGBARwAA5YBAR/6BgAEAgKBARoABAIBgQEBiAEaAAQCAYEBAR0aAAQEAoEBGwABlgEB1QgBlgECHxwAAdYI … [truncated]
```

#### 822. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7978` → after: `L7978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7978) · [Before (L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7978)

```diff
-             rle: (0, pT.d)("IATgBwAHBAwCBwQGAgcADAQHAAYECwABlgG0BwADBBICAwQIAgMAEgQDAAKBAQYCDAABlgELAASBAQGIAQMcGAABiAECgQEBiAEBHRsABR+bAwAFHxsAAYEBAQABgQEBAAGBARsAAYgBAQABgQEBAAGBAQGIAQEdAYgBGAABHQQAAYEBGgABHQGIAQKBAQEAA4EBGwABgQEfAAWBAYACAAIEHgICABYECAIXAAGWAQWBAQMcGAAFgQEDHBgA … [truncated]
+             rle: (0, sB.c)("IATgBwAHBAwCBwQGAgcADAQHAAYECwABlgG0BwADBBICAwQIAgMAEgQDAAKBAQYCDAABlgELAASBAQGIAQMcGAABiAECgQEBiAEBHRsABR+bAwAFHxsAAYEBAQABgQEBAAGBARsAAYgBAQABgQEBAAGBAQGIAQEdAYgBGAABHQQAAYEBGgABHQGIAQKBAQEAA4EBGwABgQEfAAWBAYACAAIEHgICABYECAIXAAGWAQWBAQMcGAAFgQEDHBgA … [truncated]
```

#### 823. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7983` → after: `L7983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7983) · [Before (L7983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7983)

```diff
-             rle: (0, pT.d)("IATgBwAJAgkECAIPBAkACAQEAAGeAQYAAZYBugcADAIEBA0CAwQIAgQEBAANBAMAAxwBHQGIAQOBARsAAYgBA4EBAYgBGwAFH5sDAAUfGwABgQEBAAGBAQEAAR0YAASBAQEAAYEBAQABgQEaAAGBAQQAAYEBGAABiAEBHQGIAQEABIEBHAABiAEbAAOBAQGIAQEdmwIAHgICBAgCFgQCAAMcBYEBDQABlgEKAAMcBYEBGwABHwOBAQEfHAAD … [truncated]
+             rle: (0, sB.c)("IATgBwAJAgkECAIPBAkACAQEAAGeAQYAAZYBugcADAIEBA0CAwQIAgQEBAANBAMAAxwBHQGIAQOBARsAAYgBA4EBAYgBGwAFH5sDAAUfGwABgQEBAAGBAQEAAR0YAASBAQEAAYEBAQABgQEaAAGBAQQAAYEBGAABiAEBHQGIAQEABIEBHAABiAEbAAOBAQGIAQEdmwIAHgICBAgCFgQCAAMcBYEBDQABlgEKAAMcBYEBGwABHwOBAQEfHAAD … [truncated]
```

#### 824. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7988` → after: `L7988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7988) · [Before (L7988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7988)

```diff
-             rle: (0, pT.d)("AQQfAgEAAQQeAgIAAR0EHBUABBwDAAMcFwADHAQAAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx0AAYgBBIEBHAABzRcBgQEBzRccAASBAQGIARwAAc0XAYEBAc0XHAAFgQGZAgABBB8CAQABBB4CAgABHQQcFQAEHAMAAxwXAAMcBAAB7w8fAAHvDx8A … [truncated]
+             rle: (0, sB.c)("AQQfAgEAAQQeAgIAAR0EHBUABBwDAAMcFwADHAQAAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx0AAYgBBIEBHAABzRcBgQEBzRccAASBAQGIARwAAc0XAYEBAc0XHAAFgQGZAgABBB8CAQABBB4CAgABHQQcFQAEHAMAAxwXAAMcBAAB7w8fAAHvDx8A … [truncated]
```

#### 825. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7993` → after: `L7993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7993) · [Before (L7993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7993)

```diff
-             rle: (0, pT.d)("HwIBBB4CAQQBAAQcFQAFHAIAAxwXAAEdAhz8AwAFgQEcAAEcAYEBARwcAAEdA4EBAYgBHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAUcAgADHBcAAxz8AwAFgQEcAAEcAYEBARwcAAGIAQOBAQEdHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAQcAR0CAAEdAhwXAAIcAR38AwAFgQEbAAWBARsABIEBAYgBHAABHAGB … [truncated]
+             rle: (0, sB.c)("HwIBBB4CAQQBAAQcFQAFHAIAAxwXAAEdAhz8AwAFgQEcAAEcAYEBARwcAAEdA4EBAYgBHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAUcAgADHBcAAxz8AwAFgQEcAAEcAYEBARwcAAGIAQOBAQEdHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAQcAR0CAAEdAhwXAAIcAR38AwAFgQEbAAWBARsABIEBAYgBHAABHAGB … [truncated]
```

#### 826. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L7998` → after: `L7998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R7998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L7998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L7998) · [Before (L7998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L7998)

```diff
-             this.cB = UT, this.chunkToFixedPointPrefabs = void 0;
+             this.ZJ = jB, this.chunkToFixedPointPrefabs = void 0;
```

#### 827. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8002` → after: `L8002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8002) · [Before (L8002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8002)

```diff
-                 om: zT,
+                 BQ: nB,
```

#### 828. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8009` → after: `L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8009) · [Before (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8009)

```diff
-               if (void 0 === TT) throw new Error(`Fixed-point prefab "${zT}" has not been inlined into the build using the BloxdSchematicInliner tool.`);
+               if (void 0 === BB) throw new Error(`Fixed-point prefab "${nB}" has not been inlined into the build using the BloxdSchematicInliner tool.`);
```

#### 829. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8060` → after: `L8060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8060) · [Before (L8060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8060)

```diff
-               nearestFixedPrefabInfoForChunk: zT.r.create(this.cB, [TT, UT], WT.m.NumFields, nT)
+               nearestFixedPrefabInfoForChunk: nB.o.create(this.ZJ, [BB, jB], QB.g.NumFields, NB)
```

#### 830. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8065` → after: `L8065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8065) · [Before (L8065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8065)

```diff
-             const MT = zT.getOrGenerate(TT, UT, WT.m.DistanceToNearestFixedPrefab);
+             const dB = nB.getOrGenerate(BB, jB, QB.g.DistanceToNearestFixedPrefab);
```

#### 831. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8069` → after: `L8069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8069) · [Before (L8069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8069)

```diff
-             const nT = zT.getOrGenerate(TT, UT, WT.m.HeightOfNearestFixedPrefab);
+             const NB = nB.getOrGenerate(BB, jB, QB.g.HeightOfNearestFixedPrefab);
```

#### 832. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8074` → after: `L8074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8074) · [Before (L8074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8074)

```diff
-             return mT.getOrGenerate(TT, UT, WT.m.DistanceToNearestFixedPrefab) <= fT
+             return zB.getOrGenerate(BB, jB, QB.g.DistanceToNearestFixedPrefab) <= GB
```

#### 833. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8078` → after: `L8078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8078) · [Before (L8078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8078)

```diff
-             return 0 === mT.getOrGenerate(TT, UT, WT.m.DistanceToNearestFixedPrefab)
+             return 0 === zB.getOrGenerate(BB, jB, QB.g.DistanceToNearestFixedPrefab)
```

#### 834. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8096` → after: `L8096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8096) · [Before (L8096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8096)

```diff
-             return `${TT}|${UT}`
+             return `${BB}|${jB}`
```

#### 835. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8101` → after: `L8101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8101) · [Before (L8101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8101)

```diff
-             if (!(0, nT.E)(mT)) return mT;
+             if (!(0, NB.I)(zB)) return zB;
```

#### 836. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8105-L8109` → after: `L8105-L8109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8105-L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8105-L8109) · [Before (L8105-L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8105-L8109)

```diff
-             for (let MT = 0; MT < WT.x; MT += nT.z)
-               for (let UT = 0; UT < WT.y; UT += nT.z)
-                 for (let mT = 0; mT < WT.z; mT += nT.z) {
-                   const gT = kT()(new Uint16Array(nT.z * nT.z * nT.z), [nT.z, nT.z, nT.z]),
-                     HT = TT.getRLEChunk((0, nT.H)(MT), (0, nT.H)(UT), (0, nT.H)(mT));
+             for (let dB = 0; dB < QB.x; dB += NB.y)
+               for (let jB = 0; jB < QB.y; jB += NB.y)
+                 for (let zB = 0; zB < QB.z; zB += NB.y) {
+                   const IB = UB()(new Uint16Array(NB.y * NB.y * NB.y), [NB.y, NB.y, NB.y]),
+                     uB = BB.getRLEChunk((0, NB.P)(dB), (0, NB.P)(jB), (0, NB.P)(zB));
```

#### 837. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8111-L8113` → after: `L8111-L8113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8111-L8113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8111-L8113) · [Before (L8111-L8113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8111-L8113)

```diff
-                   const lT = Math.min(nT.z, WT.x - MT),
-                     LT = Math.min(nT.z, WT.y - UT),
-                     pT = Math.min(nT.z, WT.z - mT);
+                   const pB = Math.min(NB.y, QB.x - dB),
+                     rB = Math.min(NB.y, QB.y - jB),
+                     sB = Math.min(NB.y, QB.z - zB);
```

#### 838. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8148` → after: `L8148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8148) · [Before (L8148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8148)

```diff
-             mT.set(TT, UT, WT.m.DistanceToNearestFixedPrefab, zT), mT.set(TT, UT, WT.m.HeightOfNearestFixedPrefab, MT)
+             zB.set(BB, jB, QB.g.DistanceToNearestFixedPrefab, nB), zB.set(BB, jB, QB.g.HeightOfNearestFixedPrefab, dB)
```

#### 839. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8153` → after: `L8153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8153) · [Before (L8153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8153)

```diff
-       39788: (TT, UT, mT) => {
+       39754: (BB, jB, zB) => {
```

#### 840. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8157` → after: `L8156-L8157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8156-L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8156-L8157) · [Before (L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8157)

```diff
-           e: () => nT
+           g: () => uB,
+           j: () => NB
```

#### 841. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8159-L8162` → after: `L8159-L8162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8159-L8162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8159-L8162) · [Before (L8159-L8162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8159-L8162)

```diff
-         var WT = mT(39793),
-           zT = mT(39799),
-           MT = mT(39796),
-           gT = mT(39801);
+         var QB = zB(39761),
+           nB = zB(39767),
+           dB = zB(39763),
+           IB = zB(39773);
```

#### 842. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8165` → after: `L8165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8165) · [Before (L8165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8165)

```diff
-           return new WT.g([{
+           return new QB.j([{
```

#### 843. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8171` → after: `L8171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8171) · [Before (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8171)

```diff
-           }], `${TT}GlobalHeightmapOffset`)
+           }], `${BB}GlobalHeightmapOffset`)
```

#### 844. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8207` → after: `L8207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8207) · [Before (L8207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8207)

```diff
-             null !== pT && (kT = pT, jT = MT.k, lT = pT - MT.d, LT = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(TT, UT, zT, gT, mT, kT, jT, lT, LT)
+             null !== sB && (UB = sB, aB = dB.p, pB = sB - dB.d, rB = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(BB, jB, nB, IB, zB, UB, aB, pB, rB)
```

#### 845. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8220-L8221` → after: `L8220-L8221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8220-L8221) · [Before (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8220-L8221)

```diff
-               pT = MT.k,
-               BT = MT.h,
+               sB = dB.p,
+               JB = dB.j,
```

#### 846. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8231` → after: `L8231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8231) · [Before (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8231)

```diff
-                 UT < 1 && (pT = kT + Math.floor((HT - kT) * UT), LT >= pT && (pT = MT.k, ZT = MT.g))
+                 jB < 1 && (sB = UB + Math.floor((uB - UB) * jB), rB >= sB && (sB = dB.p, mB = dB.f))
```

#### 847. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8249-L8250` → after: `L8249-L8250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8249-L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8249-L8250) · [Before (L8249-L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8249-L8250)

```diff
-             const LT = gT.b.smoothHeightmapForFixedPointPrefab(Math.round(TT + mT / 4), Math.round(UT + WT / 4), HT, this.nearestFixedPrefabInfoForChunk);
-             null !== LT && kT > (HT = LT) && (kT = MT.k, lT = 0), nT.set(TT, UT, zT.i.GroundHeight, HT), nT.set(TT, UT, zT.i.WaterHeight, kT), nT.set(TT, UT, zT.i.CavesAllowedBelowY, jT), nT.set(TT, UT, zT.i.IsLake, lT), this.shouldCurtailCave(TT, UT, null !== LT) && nT.set(TT, U … [truncated]
+             const rB = IB.d.smoothHeightmapForFixedPointPrefab(Math.round(BB + zB / 4), Math.round(jB + QB / 4), uB, this.nearestFixedPrefabInfoForChunk);
+             null !== rB && UB > (uB = rB) && (UB = dB.p, pB = 0), NB.set(BB, jB, nB.e.GroundHeight, uB), NB.set(BB, jB, nB.e.WaterHeight, UB), NB.set(BB, jB, nB.e.CavesAllowedBelowY, aB), NB.set(BB, jB, nB.e.IsLake, pB), this.shouldCurtailCave(BB, jB, null !== rB) && NB.set(BB, j … [truncated]
```

#### 848. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8262` → after: `L8262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8262) · [Before (L8262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8262)

```diff
-       39823: (TT, UT, mT) => {
+       39796: (BB, jB, zB) => {
```

#### 849. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8264-L8265` → after: `L8264-L8265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8264-L8265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8264-L8265) · [Before (L8264-L8265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8264-L8265)

```diff
-           b: () => jT,
-           d: () => kT
+           e: () => aB,
+           f: () => UB
```

#### 850. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8267-L8268` → after: `L8267-L8268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8267-L8268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8267-L8268) · [Before (L8267-L8268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8267-L8268)

```diff
-         var WT = mT(39793),
-           zT = mT(39826),
+         var QB = zB(39761),
+           nB = zB(39802),
```

#### 851. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8270-L8272` → after: `L8270-L8272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8270-L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8270-L8272) · [Before (L8270-L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8270-L8272)

```diff
-           gT = mT(4333),
-           nT = mT(39867);
-         const HT = new nT.e("point cells", 500, 6e4);
+           IB = zB(4347),
+           NB = zB(39846);
+         const uB = new NB.c("point cells", 500, 6e4);
```

#### 852. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8293` → after: `L8293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8293) · [Before (L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8293)

```diff
-             if (this.gridSize < mT) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${mT} (chunkSize=${TT}, halfBox=${UT}). Points near chunk edges would be missed.`)
+             if (this.gridSize < zB) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${zB} (chunkSize=${BB}, halfBox=${jB}). Points near chunk edges would be missed.`)
```

#### 853. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8309` → after: `L8309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8309) · [Before (L8309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8309)

```diff
-               const mT = (0, WT.M)(HT, TT, UT);
+               const zB = (0, QB.D)(uB, BB, jB);
```

#### 854. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8338` → after: `L8338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8338) · [Before (L8338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8338)

```diff
-               const TT = (0, WT.M)(kT, UT, mT);
+               const BB = (0, QB.D)(UB, jB, zB);
```

#### 855. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8350` → after: `L8350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8350) · [Before (L8350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8350)

```diff
-               const lT = (0, WT.M)(jT, UT, mT) - gT;
+               const pB = (0, QB.D)(aB, jB, zB) - IB;
```

#### 856. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8383` → after: `L8383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8383) · [Before (L8383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8383)

```diff
-               const MT = new gT.k(`${TT}${UT}${this.seed}jitter`);
+               const dB = new IB.i(`${BB}${jB}${this.seed}jitter`);
```

#### 857. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8394` → after: `L8394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8394) · [Before (L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8394)

```diff
-               const nT = new gT.k(`${TT}${UT}${this.seed}pts`),
+               const NB = new IB.i(`${BB}${jB}${this.seed}pts`),
```

#### 858. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8426` → after: `L8426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8426) · [Before (L8426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8426)

```diff
-               points: this.useKthClosestPoint ? zT : null
+               points: this.useKthClosestPoint ? nB : null
```

#### 859. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8431` → after: `L8431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8431) · [Before (L8431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8431)

```diff
-       39883: (TT, UT, mT) => {
+       39871: (BB, jB, zB) => {
```

#### 860. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8435-L8437` → after: `L8435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8435) · [Before (L8435-L8437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8435-L8437)

```diff
-         var WT = mT(39793),
-           zT = mT(39823),
-           MT = mT(39799),
+         var QB = zB(39761),
```

#### 861. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8439-L8444` → after: `L8437-L8444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8437-L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8437-L8444) · [Before (L8439-L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8439-L8444)

```diff
-           nT = mT(37857),
-           HT = mT(39879),
-           kT = mT(632),
-           jT = mT(653),
-           lT = mT(39275),
-           LT = mT(4333);
+           dB = zB(39767),
+           IB = zB(39763),
+           NB = zB(37821),
+           uB = zB(39865),
+           UB = zB(628),
+           aB = zB(658),
+           pB = zB(39229),
+           rB = zB(4347);
```

#### 862. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8459` → after: `L8459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8459) · [Before (L8459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8459)

```diff
-             return null !== (UT = ZT[this.suffixMapping[TT]]) && void 0 !== UT ? UT : []
+             return null !== (jB = mB[this.suffixMapping[BB]]) && void 0 !== jB ? jB : []
```

#### 863. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8478` → after: `L8478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8478) · [Before (L8478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8478)

```diff
-               UT[mT] = (null !== (gT = UT[mT]) && void 0 !== gT ? gT : 0) + 1, UT[mT] >= vT && WT.splice(WT.indexOf(mT), 1)
+               jB[zB] = (null !== (IB = jB[zB]) && void 0 !== IB ? IB : 0) + 1, jB[zB] >= kB && QB.splice(QB.indexOf(zB), 1)
```

#### 864. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8545` → after: `L8545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8545) · [Before (L8545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8545)

```diff
-             return `r${TT}|m${Number(UT)}`
+             return `r${BB}|m${Number(jB)}`
```

#### 865. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8579` → after: `L8579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8579) · [Before (L8579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8579)

```diff
-             const [, pT, BT] = null !== (zT = bT.exec(lT)) && void 0 !== zT ? zT : [];
+             const [, sB, JB] = null !== (nB = tB.exec(pB)) && void 0 !== nB ? nB : [];
```

#### 866. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8582` → after: `L8582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8582) · [Before (L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8582)

```diff
-               LT = null !== (ZT = null === (cT = MT[`${jT}|meta|${[iT.split("").filter(((TT,UT)=>pT.split("").some((TT=>{const mT=iT.indexOf(TT);return((WT?3-mT:mT)+gT)%4===UT})))).join(""),BT].filter(Boolean).join("|")}`]) || void 0 === cT ? void 0 : cT.id) && void 0 !== ZT ? ZT … [truncated]
+               rB = null !== (mB = null === (yB = dB[`${aB}|meta|${[gB.split("").filter(((BB,jB)=>sB.split("").some((BB=>{const zB=gB.indexOf(BB);return((QB?3-zB:zB)+IB)%4===jB})))).join(""),JB].filter(Boolean).join("|")}`]) || void 0 === yB ? void 0 : yB.id) && void 0 !== mB ? mB … [truncated]
```

#### 867. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8587` → after: `L8587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8587) · [Before (L8587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8587)

```diff
-               let UT = lT.replace(`rot${kT}`, `rot${TT}`);
+               let jB = pB.replace(`rot${UB}`, `rot${BB}`);
```

#### 868. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8592` → after: `L8592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8592) · [Before (L8592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8592)

```diff
-                 UT = `${zT[1]}|${TT.join("")}`
+                 jB = `${nB[1]}|${BB.join("")}`
```

#### 869. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8594-L8595` → after: `L8594-L8595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8594-L8595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8594-L8595) · [Before (L8594-L8595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8594-L8595)

```diff
-               const gT = `${jT}|${UT}`;
-               if (LT = null !== (vT = null === (fT = MT[gT]) || void 0 === fT ? void 0 : fT.id) && void 0 !== vT ? vT : null, null === LT) {
+               const IB = `${aB}|${jB}`;
+               if (rB = null !== (kB = null === (GB = dB[IB]) || void 0 === GB ? void 0 : GB.id) && void 0 !== kB ? kB : null, null === rB) {
```

#### 870. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8603` → after: `L8603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8603) · [Before (L8603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8603)

```diff
-         var YT = mT(2963),
+         var EB = zB(2944),
```

#### 871. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8605` → after: `L8605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8605) · [Before (L8605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8605)

```diff
-           xT = mT(39801);
+           qB = zB(39773);
```

#### 872. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8610-L8612` → after: `L8610-L8612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8610-L8612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8610-L8612) · [Before (L8610-L8612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8610-L8612)

```diff
-             const HT = mT.getOrGenerate(TT, UT, nT, MT.e.FloorY);
-             if (HT === gT.j) continue;
-             tT(zT, HT, mT.getOrGenerate(TT, UT, nT, MT.e.CeilingY))
+             const uB = zB.getOrGenerate(BB, jB, NB, dB.c.FloorY);
+             if (uB === IB.l) continue;
+             HB(nB, uB, zB.getOrGenerate(BB, jB, NB, dB.c.CeilingY))
```

#### 873. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8633` → after: `L8633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8633) · [Before (L8633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8633)

```diff
-         const aT = new LT.i([{
+         const DB = new rB.e([{
```

#### 874. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8646` → after: `L8646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8646) · [Before (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8646)

```diff
-           yT = new LT.i([{
+           FB = new rB.e([{
```

#### 875. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8656` → after: `L8656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8656) · [Before (L8656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8656)

```diff
-         const QT = new LT.i(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Oth … [truncated]
+         const hB = new rB.e(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Oth … [truncated]
```

#### 876. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8665` → after: `L8665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8665) · [Before (L8665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8665)

```diff
-             const UT = `${QT.sample(TT)} ${this.mobType}`;
+             const jB = `${hB.sample(BB)} ${this.mobType}`;
```

#### 877. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8681` → after: `L8681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8681) · [Before (L8681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8681)

```diff
-               const TT = new LT.l(WT.minItems, WT.maxItems + 1),
+               const BB = new rB.j(QB.minItems, QB.maxItems + 1),
```

#### 878. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8685-L8686` → after: `L8685-L8686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8685-L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8685-L8686) · [Before (L8685-L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8685-L8686)

```diff
-                 const TT = UT.amount ? new LT.l(UT.amount.min, UT.amount.max + 1) : null,
-                   WT = null !== (mT = UT.itemAttributesDistribution) && void 0 !== mT ? mT : null;
+                 const BB = jB.amount ? new rB.j(jB.amount.min, jB.amount.max + 1) : null,
+                   QB = null !== (zB = jB.itemAttributesDistribution) && void 0 !== zB ? zB : null;
```

#### 879. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8696` → after: `L8696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8696) · [Before (L8696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8696)

```diff
-               const MT = new LT.i(zT);
+               const dB = new rB.e(nB);
```

#### 880. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8702` → after: `L8702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8702) · [Before (L8702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8702)

```diff
-             this.itemCategoryDistributions = UT, this.shouldEnchantDistribution = new LT.e(TT.enchantmentProbability), this.enchantmentTier = TT.enchantmentTier
+             this.itemCategoryDistributions = jB, this.shouldEnchantDistribution = new rB.c(BB.enchantmentProbability), this.enchantmentTier = BB.enchantmentTier
```

#### 881. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8705` → after: `L8705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8705) · [Before (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8705)

```diff
-             const UT = Array(jT.l).fill(null);
+             const jB = Array(aB.k).fill(null);
```

#### 882. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8713-L8715` → after: `L8713-L8715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8713-L8715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8713-L8715) · [Before (L8713-L8715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8713-L8715)

```diff
-                   LT = null !== (WT = null === (zT = jT.amountDistribution) || void 0 === zT ? void 0 : zT.sample(TT)) && void 0 !== WT ? WT : null,
-                   pT = null !== (MT = null === (gT = jT.attributesDistribution) || void 0 === gT ? void 0 : gT.sample(TT)) && void 0 !== MT ? MT : {},
-                   BT = null !== (nT = this.getEnchantmentAttributesForItem(TT, lT)) && void 0 !== nT ? nT : {};
+                   rB = null !== (QB = null === (nB = aB.amountDistribution) || void 0 === nB ? void 0 : nB.sample(BB)) && void 0 !== QB ? QB : null,
+                   sB = null !== (dB = null === (IB = aB.attributesDistribution) || void 0 === IB ? void 0 : IB.sample(BB)) && void 0 !== dB ? dB : {},
+                   JB = null !== (NB = this.getEnchantmentAttributesForItem(BB, pB)) && void 0 !== NB ? NB : {};
```

#### 883. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8722` → after: `L8722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8722) · [Before (L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8722)

```diff
-                       ...null !== (HT = pT.customAttributes) && void 0 !== HT ? HT : {},
+                       ...null !== (uB = sB.customAttributes) && void 0 !== uB ? uB : {},
```

#### 884. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L8729` → after: `L8729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R8729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L8729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L8729) · [Before (L8729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L8729)

```diff
-             return (0, LT.r)(UT, TT), UT
+             return (0, rB.p)(jB, BB), jB
```

#### 885. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9016` → after: `L9016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9016) · [Before (L9016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9016)

```diff
-             name: `${TT} Pickaxe`,
+             name: `${BB} Pickaxe`,
```

#### 886. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9020` → after: `L9020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9020) · [Before (L9020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9020)

```diff
-             name: `${TT} Axe`,
+             name: `${BB} Axe`,
```

#### 887. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9024` → after: `L9024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9024) · [Before (L9024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9024)

```diff
-             name: `${TT} Spade`,
+             name: `${BB} Spade`,
```

#### 888. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9028` → after: `L9028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9028) · [Before (L9028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9028)

```diff
-             name: `${TT} Hoe`,
+             name: `${BB} Hoe`,
```

#### 889. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9035` → after: `L9035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9035) · [Before (L9035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9035)

```diff
-           if (UT < 0 || UT > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${UT}`);
+           if (jB < 0 || jB > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${jB}`);
```

#### 890. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9059` → after: `L9059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9059) · [Before (L9059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9059)

```diff
-             name: `${TT} Sword`,
+             name: `${BB} Sword`,
```

#### 891. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9063` → after: `L9063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9063) · [Before (L9063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9063)

```diff
-             name: `${TT} Bow`,
+             name: `${BB} Bow`,
```

#### 892. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9067` → after: `L9067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9067) · [Before (L9067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9067)

```diff
-             name: `${TT} Crossbow`,
+             name: `${BB} Crossbow`,
```

#### 893. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9080` → after: `L9080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9080) · [Before (L9080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9080)

```diff
-           if (TT === VT.STONE) throw new Error(`${TT} armour is not supported`);
+           if (BB === TB.STONE) throw new Error(`${BB} armour is not supported`);
```

#### 894. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9082` → after: `L9082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9082) · [Before (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9082)

```diff
-               name: `${TT} Helmet`,
+               name: `${BB} Helmet`,
```

#### 895. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9086` → after: `L9086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9086) · [Before (L9086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9086)

```diff
-               name: `${TT} Chestplate`,
+               name: `${BB} Chestplate`,
```

#### 896. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9090` → after: `L9090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9090) · [Before (L9090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9090)

```diff
-               name: `${TT} Gauntlets`,
+               name: `${BB} Gauntlets`,
```

#### 897. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9094` → after: `L9094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9094) · [Before (L9094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9094)

```diff
-               name: `${TT} Leggings`,
+               name: `${BB} Leggings`,
```

#### 898. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9098` → after: `L9098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9098) · [Before (L9098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9098)

```diff
-               name: `${TT} Boots`,
+               name: `${BB} Boots`,
```

#### 899. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9106` → after: `L9106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9106) · [Before (L9106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9106)

```diff
-           [jT.i.COMMON]: new FT({
+           [aB.j.COMMON]: new ZB({
```

#### 900. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9135` → after: `L9135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9135) · [Before (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9135)

```diff
-           [jT.i.UNCOMMON]: new FT({
+           [aB.j.UNCOMMON]: new ZB({
```

#### 901. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9164` → after: `L9164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9164) · [Before (L9164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9164)

```diff
-           [jT.i.RARE]: new FT({
+           [aB.j.RARE]: new ZB({
```

#### 902. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9193` → after: `L9193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9193) · [Before (L9193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9193)

```diff
-           [jT.i.EPIC]: new FT({
+           [aB.j.EPIC]: new ZB({
```

#### 903. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9230` → after: `L9230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9230) · [Before (L9230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9230)

```diff
-           [jT.i.LEGENDARY]: new FT({
+           [aB.j.LEGENDARY]: new ZB({
```

#### 904. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9355` → after: `L9355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9355) · [Before (L9355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9355)

```diff
-             const TT = new LT.k(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
+             const BB = new rB.i(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
```

#### 905. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9360` → after: `L9360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9360) · [Before (L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9360)

```diff
-                   chestStr: (0, jT.A)(UT),
+                   chestStr: (0, aB.B)(jB),
```

#### 906. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9370` → after: `L9370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9370) · [Before (L9370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9370)

```diff
-             this.seed = void 0, this.cB = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
+             this.seed = void 0, this.ZJ = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
```

#### 907. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9373` → after: `L9373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9373) · [Before (L9373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9373)

```diff
-               cB: mT,
+               ZJ: zB,
```

#### 908. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9379` → after: `L9379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9379) · [Before (L9379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9379)

```diff
-             zU.BLOCK_ID_MAPPINGS || (zU.BLOCK_ID_MAPPINGS = new eT(WT)), XT || (XT = new BT(gT)), this.seed = UT, this.cB = mT, this.invisibleSolidBlockId = WT["Invisible Solid"].id, this.emptySpawnerBlockId = WT["Empty Spawner Block"].id, this.chestToLootChestBlockId = new kT.e( … [truncated]
+             nj.BLOCK_ID_MAPPINGS || (nj.BLOCK_ID_MAPPINGS = new MB(QB)), YB || (YB = new JB(IB)), this.seed = jB, this.ZJ = zB, this.invisibleSolidBlockId = QB["Invisible Solid"].id, this.emptySpawnerBlockId = QB["Empty Spawner Block"].id, this.chestToLootChestBlockId = new UB.c( … [truncated]
```

#### 909. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9386` → after: `L9386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9386) · [Before (L9386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9386)

```diff
-             for (const zT of MT.u) jT[zT] = WT[`${zT} Spawner Block`].id;
+             for (const nB of dB.n) aB[nB] = QB[`${nB} Spawner Block`].id;
```

#### 910. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9401` → after: `L9401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9401) · [Before (L9401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9401)

```diff
-                   HT = new zT.b(`prefab|${TT}|${gT}`, nT.minDistanceBetweenPrefabs, !1, !0, UT, WT, mT, null, !0)
+                   uB = new nB.e(`prefab|${BB}|${IB}`, NB.minDistanceBetweenPrefabs, !1, !0, jB, QB, zB, null, !0)
```

#### 911. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9415` → after: `L9415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9415) · [Before (L9415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9415)

```diff
-             return new LT.k(`${TT}|${UT}|${this.seed}|prefabGenerator`)
+             return new rB.i(`${BB}|${jB}|${this.seed}|prefabGenerator`)
```

#### 912. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9444` → after: `L9444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9444) · [Before (L9444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9444)

```diff
-               kT = this.cB >> 1,
+               UB = this.ZJ >> 1,
```

#### 913. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9446` → after: `L9446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9446) · [Before (L9446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9446)

```diff
-               LT = TT + this.cB + this.prefabRadius,
+               rB = BB + this.ZJ + this.prefabRadius,
```

#### 914. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9448` → after: `L9448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9448) · [Before (L9448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9448)

```diff
-               BT = UT + this.cB + this.prefabRadius;
+               JB = jB + this.ZJ + this.prefabRadius;
```

#### 915. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9456` → after: `L9456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9456) · [Before (L9456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9456)

```diff
-                 if (cT === MT.r.SURFACE && fT === MT.p.VERY_HIGH && !nT.regionMayHaveVeryHighSurfacePrefabs(jT, pT, LT, BT)) continue;
+                 if (yB === dB.k.SURFACE && GB === dB.j.VERY_HIGH && !NB.regionMayHaveVeryHighSurfacePrefabs(aB, sB, rB, JB)) continue;
```

#### 916. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9466` → after: `L9466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9466) · [Before (L9466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9466)

```diff
-                   if (cT === MT.r.SURFACE && !kT.canPlaceSurfacePrefab(UT, nT)) continue;
+                   if (yB === dB.k.SURFACE && !UB.canPlaceSurfacePrefab(jB, NB)) continue;
```

#### 917. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9485` → after: `L9485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9485) · [Before (L9485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9485)

```diff
-                       console.error(`Invalid prefab rotation: ${qT}`)
+                       console.error(`Invalid prefab rotation: ${LB}`)
```

#### 918. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9502` → after: `L9502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9502) · [Before (L9502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9502)

```diff
-                   if (cT === MT.r.SURFACE && null !== kT.maxSurfacePrefabRelief) {
+                   if (yB === dB.k.SURFACE && null !== UB.maxSurfacePrefabRelief) {
```

#### 919. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9509` → after: `L9509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9509) · [Before (L9509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9509)

```diff
-                   const wT = new lT.e;
+                   const oB = new pB.d;
```

#### 920. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9517` → after: `L9517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9517) · [Before (L9517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9517)

```diff
-                   const tT = new lT.e;
+                   const HB = new pB.d;
```

#### 921. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9547` → after: `L9547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9547) · [Before (L9547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9547)

```diff
-                 const WT = zT.getOrGenerate(TT + jT, UT + mT, MT.i.GroundHeight);
+                 const QB = nB.getOrGenerate(BB + aB, jB + zB, dB.e.GroundHeight);
```

#### 922. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9568-L9569` → after: `L9568-L9569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9568-L9569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9568-L9569) · [Before (L9568-L9569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9568-L9569)

```diff
-                 UW: TT,
-                 mW: mT
+                 nQ: BB,
+                 dQ: zB
```

#### 923. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9582` → after: `L9582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9582) · [Before (L9582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9582)

```diff
-                   if (mT.getOrGenerate(kT, TT, MT.i.WaterHeight) !== gT.k) return {
+                   if (zB.getOrGenerate(UB, BB, dB.e.WaterHeight) !== IB.p) return {
```

#### 924. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9586-L9587` → after: `L9586-L9587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9586-L9587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9586-L9587) · [Before (L9586-L9587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9586-L9587)

```diff
-                   const UT = mT.getOrGenerate(kT, TT, MT.i.GroundHeight);
-                   if (HT.b.isInCave(kT, UT, TT, WT)) return {
+                   const jB = zB.getOrGenerate(UB, BB, dB.e.GroundHeight);
+                   if (uB.d.isInCave(UB, jB, BB, QB)) return {
```

#### 925. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9591` → after: `L9591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9591) · [Before (L9591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9591)

```diff
-                   if (xT.b.isNearFixedPointPrefab(kT, TT, zT)) return {
+                   if (qB.d.isNearFixedPointPrefab(UB, BB, nB)) return {
```

#### 926. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9638-L9639` → after: `L9638-L9639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9638-L9639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9638-L9639) · [Before (L9638-L9639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9638-L9639)

```diff
-             if (nT === this.emptySpawnerBlockId && (nT = null !== (HT = WT.spawnerBlockLocationToBlockId.get(TT, UT, mT)) && void 0 !== HT ? HT : this.defaultSpawnerBlockId), nT < 0) return nT;
-             if (nT = null !== (MT = null === (gT = WT.blockIdMapping) || void 0 === gT ? void 0 : gT[nT]) && void 0 !== MT ? MT : nT, void 0 !== this.chestToLootChestBlockId.reverseGet(nT)) {
+             if (NB === this.emptySpawnerBlockId && (NB = null !== (uB = QB.spawnerBlockLocationToBlockId.get(BB, jB, zB)) && void 0 !== uB ? uB : this.defaultSpawnerBlockId), NB < 0) return NB;
+             if (NB = null !== (dB = null === (IB = QB.blockIdMapping) || void 0 === IB ? void 0 : IB[NB]) && void 0 !== dB ? dB : NB, void 0 !== this.chestToLootChestBlockId.reverseGet(NB)) {
```

#### 927. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9641` → after: `L9641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9641) · [Before (L9641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9641)

```diff
-               const MT = null !== (kT = WT.chestLocationToQuality.get(TT, UT, mT)) && void 0 !== kT ? kT : zU.DEFAULT_CHEST_QUALITY,
+               const dB = null !== (UB = QB.chestLocationToQuality.get(BB, jB, zB)) && void 0 !== UB ? UB : nj.DEFAULT_CHEST_QUALITY,
```

#### 928. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9668` → after: `L9668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9668) · [Before (L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9668)

```diff
-             } = TT, MT = JT()(new Int32Array(mT * WT * zT), [mT, WT, zT]), gT = new lT.e;
+             } = BB, dB = iB()(new Int32Array(zB * QB * nB), [zB, QB, nB]), IB = new pB.d;
```

#### 929. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9670` → after: `L9670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9670) · [Before (L9670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9670)

```diff
-             const HT = new lT.e;
+             const uB = new pB.d;
```

#### 930. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9672-L9676` → after: `L9672-L9676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9672-L9676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9672-L9676) · [Before (L9672-L9676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9672-L9676)

```diff
-             for (let kT = 0; kT < mT; kT += jT.z)
-               for (let UT = 0; UT < WT; UT += jT.z)
-                 for (let lT = 0; lT < zT; lT += jT.z) {
-                   const LT = JT()(new Uint16Array(jT.z * jT.z * jT.z), [jT.z, jT.z, jT.z]),
-                     pT = TT.schematic.getRLEChunk((0, jT.H)(kT), (0, jT.H)(UT), (0, jT.H)(lT));
+             for (let UB = 0; UB < zB; UB += aB.y)
+               for (let jB = 0; jB < QB; jB += aB.y)
+                 for (let pB = 0; pB < nB; pB += aB.y) {
+                   const rB = iB()(new Uint16Array(aB.y * aB.y * aB.y), [aB.y, aB.y, aB.y]),
+                     sB = BB.schematic.getRLEChunk((0, aB.P)(UB), (0, aB.P)(jB), (0, aB.P)(pB));
```

#### 931. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9678-L9680` → after: `L9678-L9680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9678-L9680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9678-L9680) · [Before (L9678-L9680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9678-L9680)

```diff
-                   const BT = Math.min(jT.z, mT - kT),
-                     ZT = Math.min(jT.z, WT - UT),
-                     cT = Math.min(jT.z, zT - lT);
+                   const JB = Math.min(aB.y, zB - UB),
+                     mB = Math.min(aB.y, QB - jB),
+                     yB = Math.min(aB.y, nB - pB);
```

#### 932. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9689` → after: `L9689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9689) · [Before (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9689)

```diff
-                         else if (this.emptySpawnerBlockId === nT) HT.get(jT, pT, BT) || console.error(`Empty spawner block found in prefab ${TT.schematic.name} at (${jT}, ${pT}, ${BT}) with no mob type specified. Defaulting to "${zU.DEFAULT_MOB_TYPE}" mob type.`);
+                         else if (this.emptySpawnerBlockId === NB) uB.get(aB, sB, JB) || console.error(`Empty spawner block found in prefab ${BB.schematic.name} at (${aB}, ${sB}, ${JB}) with no mob type specified. Defaulting to "${nj.DEFAULT_MOB_TYPE}" mob type.`);
```

#### 933. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9692` → after: `L9692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9692) · [Before (L9692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9692)

```diff
-                           void 0 !== UT && (gT.get(jT, pT, BT) || console.error(`Chest found in prefab ${TT.schematic.name} at (${jT}, ${pT}, ${BT}) with no quality specified. Defaulting to "${zU.DEFAULT_CHEST_QUALITY}" quality.`), nT = UT)
+                           void 0 !== jB && (IB.get(aB, sB, JB) || console.error(`Chest found in prefab ${BB.schematic.name} at (${aB}, ${sB}, ${JB}) with no quality specified. Defaulting to "${nj.DEFAULT_CHEST_QUALITY}" quality.`), NB = jB)
```

#### 934. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9715` → after: `L9715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9715) · [Before (L9715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9715)

```diff
-           }(TT, TT.shouldSwapXZ ? mT : UT)
+           }(BB, BB.shouldSwapXZ ? zB : jB)
```

#### 935. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9722` → after: `L9722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9722) · [Before (L9722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9722)

```diff
-           }(TT, TT.shouldSwapXZ ? UT : mT)
+           }(BB, BB.shouldSwapXZ ? jB : zB)
```

#### 936. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9724` → after: `L9724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9724) · [Before (L9724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9724)

```diff
-         zU.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, zU.BLOCK_ID_MAPPINGS = void 0, zU.DEFAULT_MOB_TYPE = "Draugr Zombie", zU.DEFAULT_CHEST_QUALITY = jT.i.COMMON;
+         nj.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, nj.BLOCK_ID_MAPPINGS = void 0, nj.DEFAULT_MOB_TYPE = "Draugr Zombie", nj.DEFAULT_CHEST_QUALITY = aB.j.COMMON;
```

#### 937. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9745` → after: `L9745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9745) · [Before (L9745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9745)

```diff
-             const mT = new WT.e(2 * TT + 1, [-TT, -TT]);
+             const zB = new QB.g(2 * BB + 1, [-BB, -BB]);
```

#### 938. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9754` → after: `L9754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9754) · [Before (L9754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9754)

```diff
-             this.cB = mT, this.seed = WT, this.blockMetadata = MT, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
+             this.ZJ = zB, this.seed = QB, this.blockMetadata = dB, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
```

#### 939. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9757` → after: `L9757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9757) · [Before (L9757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9757)

```diff
-                 [jT.v.Maple]: {
+                 [aB.s.Maple]: {
```

#### 940. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9765` → after: `L9765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9765) · [Before (L9765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9765)

```diff
-                 [jT.v.Pine]: {
+                 [aB.s.Pine]: {
```

#### 941. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9775` → after: `L9775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9775) · [Before (L9775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9775)

```diff
-                 [jT.v.Plum]: {
+                 [aB.s.Plum]: {
```

#### 942. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9783` → after: `L9783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9783) · [Before (L9783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9783)

```diff
-                 [jT.v.Cedar]: {
+                 [aB.s.Cedar]: {
```

#### 943. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9791` → after: `L9791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9791) · [Before (L9791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9791)

```diff
-                 [jT.v.Aspen]: {
+                 [aB.s.Aspen]: {
```

#### 944. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9801` → after: `L9801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9801) · [Before (L9801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9801)

```diff
-                 [jT.v.Jungle]: {
+                 [aB.s.Jungle]: {
```

#### 945. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9811` → after: `L9811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9811) · [Before (L9811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9811)

```diff
-                 [jT.v.Palm]: {
+                 [aB.s.Palm]: {
```

#### 946. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9821` → after: `L9821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9821) · [Before (L9821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9821)

```diff
-                 [jT.v.AutumnMaple]: {
+                 [aB.s.AutumnMaple]: {
```

#### 947. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9829` → after: `L9829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9829) · [Before (L9829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9829)

```diff
-                 [jT.v.Pear]: {
+                 [aB.s.Pear]: {
```

#### 948. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9839` → after: `L9839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9839) · [Before (L9839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9839)

```diff
-                 [jT.v.Cherry]: {
+                 [aB.s.Cherry]: {
```

#### 949. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9849` → after: `L9849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9849) · [Before (L9849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9849)

```diff
-                 [jT.v.Spectral]: {
+                 [aB.s.Spectral]: {
```

#### 950. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9857` → after: `L9857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9857) · [Before (L9857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9857)

```diff
-                 [jT.v.Mango]: {
+                 [aB.s.Mango]: {
```

#### 951. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9867` → after: `L9867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9867) · [Before (L9867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9867)

```diff
-                 [jT.v.AutumnAspen]: {
+                 [aB.s.AutumnAspen]: {
```

#### 952. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9877` → after: `L9877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9877) · [Before (L9877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9877)

```diff
-                 [jT.v.Dead]: {
+                 [aB.s.Dead]: {
```

#### 953. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9887` → after: `L9887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9887) · [Before (L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9887)

```diff
-                 [jT.v.FallenLog]: {
+                 [aB.s.FallenLog]: {
```

#### 954. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9897-L9898` → after: `L9897-L9898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9897-L9898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9897-L9898) · [Before (L9897-L9898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9897-L9898)

```diff
-               }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((TT => MT[TT].id)), this.maxTreeRadius = TT.maxTreeRadius, this.cB <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk si … [truncated]
-             if (this.cB <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
+               }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((BB => dB[BB].id)), this.maxTreeRadius = BB.maxTreeRadius, this.ZJ <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk si … [truncated]
+             if (this.ZJ <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
```

#### 955. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9972` → after: `L9972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9972) · [Before (L9972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9972)

```diff
-               if (TT.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${TT.radius} for canopy type "${zT}" is larger than tree radius ${this.maxTreeRadius}`)
+               if (BB.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${BB.radius} for canopy type "${nB}" is larger than tree radius ${this.maxTreeRadius}`)
```

#### 956. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9976-L9977` → after: `L9976-L9977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9976-L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9976-L9977) · [Before (L9976-L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9976-L9977)

```diff
-             for (const zT of TT.biomeSelector.bW) zT.biome.treeMinDist && (nT = Math.min(nT, zT.biome.treeMinDist), HT = Math.max(HT, zT.biome.treeMinDist));
-             this.treePointGen = new zT.b("tree", 6, !0, !1, WT, 300, mT, {
+             for (const nB of BB.biomeSelector.EQ) nB.biome.treeMinDist && (NB = Math.min(NB, nB.biome.treeMinDist), uB = Math.max(uB, nB.biome.treeMinDist));
+             this.treePointGen = new nB.e("tree", 6, !0, !1, QB, 300, zB, {
```

#### 957. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9985-L9986` → after: `L9985-L9986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9985-L9986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9985-L9986) · [Before (L9985-L9986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9985-L9986)

```diff
-             for (let pT = TT - this.maxTreeRadius; pT < TT + this.cB + this.maxTreeRadius; pT++)
-               for (let TT = UT - this.maxTreeRadius; TT < UT + this.cB + this.maxTreeRadius; TT++) {
+             for (let sB = BB - this.maxTreeRadius; sB < BB + this.ZJ + this.maxTreeRadius; sB++)
+               for (let BB = jB - this.maxTreeRadius; BB < jB + this.ZJ + this.maxTreeRadius; BB++) {
```

#### 958. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9990-L9992` → after: `L9990-L9992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9990-L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9990-L9992) · [Before (L9990-L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9990-L9992)

```diff
-                   if (mT.getOrGenerate(pT, TT, MT.i.WaterHeight) !== gT.k) continue;
-                   const WT = mT.getOrGenerate(pT, TT, MT.i.GroundHeight);
-                   if (HT.b.isInCave(pT, WT, TT, zT)) continue;
+                   if (zB.getOrGenerate(sB, BB, dB.e.WaterHeight) !== IB.p) continue;
+                   const QB = zB.getOrGenerate(sB, BB, dB.e.GroundHeight);
+                   if (uB.d.isInCave(sB, QB, BB, nB)) continue;
```

#### 959. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L9994-L9995` → after: `L9994-L9995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R9994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L9994-L9995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L9994-L9995) · [Before (L9994-L9995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L9994-L9995)

```diff
-                   if (xT.b.isNearFixedPointPrefab(pT, TT, kT)) continue;
-                   const BT = new LT.k(`${pT}${TT}${this.seed}treeHeight`),
+                   if (qB.d.isNearFixedPointPrefab(sB, BB, UB)) continue;
+                   const JB = new rB.i(`${sB}${BB}${this.seed}treeHeight`),
```

#### 960. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10001` → after: `L10001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10001) · [Before (L10001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10001)

```diff
-                   if (ZT === jT.v.FallenLog) {
+                   if (mB === aB.s.FallenLog) {
```

#### 961. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10004` → after: `L10004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10004) · [Before (L10004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10004)

```diff
-                       if (mT.getOrGenerate(0 === vT ? pT + UT : pT, 0 === vT ? TT : TT + UT, MT.i.GroundHeight) !== WT) {
+                       if (zB.getOrGenerate(0 === kB ? sB + jB : sB, 0 === kB ? BB : BB + jB, dB.e.GroundHeight) !== QB) {
```

#### 962. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10025-L10026` → after: `L10025-L10026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10025-L10026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10025-L10026) · [Before (L10025-L10026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10025-L10026)

```diff
-               MT = null !== (mT = zT.minHeight) && void 0 !== mT ? mT : this.minTreeHeight,
-               gT = null !== (WT = zT.maxHeight) && void 0 !== WT ? WT : this.maxTreeHeight;
+               dB = null !== (zB = nB.minHeight) && void 0 !== zB ? zB : this.minTreeHeight,
+               IB = null !== (QB = nB.maxHeight) && void 0 !== QB ? QB : this.maxTreeHeight;
```

#### 963. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10041-L10042` → after: `L10041-L10042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10041-L10042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10041-L10042) · [Before (L10041-L10042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10041-L10042)

```diff
-               const zT = new LT.k(`${MT.treeX}|${MT.treeZ}|${MT.trunkBase}|tree`);
-               if (MT.treeType === jT.v.Dead || MT.treeType === jT.v.FallenLog) {
+               const nB = new rB.i(`${dB.treeX}|${dB.treeZ}|${dB.trunkBase}|tree`);
+               if (dB.treeType === aB.s.Dead || dB.treeType === aB.s.FallenLog) {
```

#### 964. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10059` → after: `L10059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10059) · [Before (L10059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10059)

```diff
-                 zT >= UT && zT < UT + this.cB && MT >= mT && MT < mT + this.cB && nT >= WT && nT < WT + this.cB && TT.set(zT - UT, MT - mT, nT - WT, gT)
+                 nB >= jB && nB < jB + this.ZJ && dB >= zB && dB < zB + this.ZJ && NB >= QB && NB < QB + this.ZJ && BB.set(nB - jB, dB - zB, NB - QB, IB)
```

#### 965. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10061` → after: `L10061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10061) · [Before (L10061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10061)

```diff
-             if (zT.treeType === jT.v.FallenLog) {
+             if (nB.treeType === aB.s.FallenLog) {
```

#### 966. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10063` → after: `L10063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10063) · [Before (L10063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10063)

```diff
-               for (let TT = -1; TT < lT - 1; TT++) LT(0 === zT.vineDir ? nT + TT : nT, kT, 0 === zT.vineDir ? HT : HT + TT);
+               for (let BB = -1; BB < pB - 1; BB++) rB(0 === nB.vineDir ? NB + BB : NB, UB, 0 === nB.vineDir ? uB : uB + BB);
```

#### 967. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10088` → after: `L10088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10088) · [Before (L10088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10088)

```diff
-               ZT = Math.min(pT, mT + this.cB - 1);
+               mB = Math.min(sB, zB + this.ZJ - 1);
```

#### 968. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10091` → after: `L10091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10091) · [Before (L10091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10091)

```diff
-               vT = Math.min(gT + lT.radius, UT + this.cB - 1);
+               kB = Math.min(IB + pB.radius, jB + this.ZJ - 1);
```

#### 969. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10094` → after: `L10094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10094) · [Before (L10094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10094)

```diff
-               qT = Math.min(nT + lT.radius, WT + this.cB - 1);
+               LB = Math.min(NB + pB.radius, QB + this.ZJ - 1);
```

#### 970. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10169` → after: `L10169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10169) · [Before (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10169)

```diff
-               if (ZT !== LU.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${ZT}`);
+               if (mB !== rj.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${mB}`);
```

#### 971. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10176-L10178` → after: `L10176-L10178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10176-L10178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10176-L10178) · [Before (L10176-L10178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10176-L10178)

```diff
-             const gT = UT + this.cB,
-               nT = mT + this.cB,
-               HT = WT + this.cB,
+             const IB = jB + this.ZJ,
+               NB = zB + this.ZJ,
+               uB = QB + this.ZJ,
```

#### 972. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10204` → after: `L10204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10204) · [Before (L10204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10204)

```diff
-             const UT = this.cB >> 1,
+             const jB = this.ZJ >> 1,
```

#### 973. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10226` → after: `L10226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10226) · [Before (L10226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10226)

```diff
-         var ZU = mT(39867);
+         var mj = zB(39846);
```

#### 974. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10230` → after: `L10230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10230) · [Before (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10230)

```diff
-             this.biomeSelector = TT, this.noWaterHeightmapGenerator = UT, this.hydrology = mT, this.lakeRadiusNoiseModifier = MT, this.seed = gT, this.needOutsideWaterDist = HT, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
+             this.biomeSelector = BB, this.noWaterHeightmapGenerator = jB, this.hydrology = zB, this.lakeRadiusNoiseModifier = dB, this.seed = IB, this.needOutsideWaterDist = uB, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
```

#### 975. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10240` → after: `L10240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10240) · [Before (L10240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10240)

```diff
-               if ((0, WT.P)(lT, TT, UT) > MT) continue;
+               if ((0, QB.H)(pB, BB, jB) > dB) continue;
```

#### 976. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10244` → after: `L10244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10244) · [Before (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10244)

```diff
-               const zT = (0, WT.M)(mT.origin, TT, UT),
+               const nB = (0, QB.D)(zB.origin, BB, jB),
```

#### 977. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10261` → after: `L10261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10261) · [Before (L10261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10261)

```diff
-             if (!(0, jT.E)(UT)) return UT.lake;
+             if (!(0, aB.I)(jB)) return jB.lake;
```

#### 978. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10274` → after: `L10274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10274) · [Before (L10274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10274)

```diff
-             } = this, MT = new LT.k(`${TT[0]}|${TT[1]}${this.seed}oasisLake`), gT = this.hydrology.getHydrologyWaterGenInfo(TT[0], TT[1]), nT = Math.floor(gT.distFromWater - gT.waterRadius - zT);
+             } = this, dB = new rB.i(`${BB[0]}|${BB[1]}${this.seed}oasisLake`), IB = this.hydrology.getHydrologyWaterGenInfo(BB[0], BB[1]), NB = Math.floor(IB.distFromWater - IB.waterRadius - nB);
```

#### 979. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10294` → after: `L10294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10294) · [Before (L10294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10294)

```diff
-             this.biomeSelector = TT, this.noWaterHeightmapGenerator = UT, this.needOutsideWaterBodyDist = gT, this.zW = HT, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
+             this.biomeSelector = BB, this.noWaterHeightmapGenerator = jB, this.needOutsideWaterBodyDist = IB, this.NQ = uB, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
```

#### 980. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10306` → after: `L10306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10306) · [Before (L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10306)

```diff
-             }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, qU || (qU = new ZU.e("water cells", nT ? 800 : 60, 6e4)), this.waterBodyInfos = qU.partition();
+             }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, Lj || (Lj = new mj.c("water cells", NB ? 800 : 60, 6e4)), this.waterBodyInfos = Lj.partition();
```

#### 981. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10308` → after: `L10308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10308) · [Before (L10308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10308)

```diff
-             this.cellCenterMaxOffset = this.gridSize / 2 - kT, this.seed = mT, this.lakeRadiusNoiseModifier = new WT.g([{
+             this.cellCenterMaxOffset = this.gridSize / 2 - UB, this.seed = zB, this.lakeRadiusNoiseModifier = new QB.j([{
```

#### 982. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10314` → after: `L10314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10314) · [Before (L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10314)

```diff
-             }], `${mT}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, WT.D)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new vU(TT, UT, this, this.lakeRadiusNoiseModifier, mT, zT, gT, nT)
+             }], `${zB}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, QB.x)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new kj(BB, jB, this, this.lakeRadiusNoiseModifier, zB, nB, IB, NB)
```

#### 983. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10318` → after: `L10318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10318) · [Before (L10318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10318)

```diff
-             if (!this.zW) return OU(this.needOutsideWaterBodyDist);
+             if (!this.NQ) return Sj(this.needOutsideWaterBodyDist);
```

#### 984. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10322` → after: `L10322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10322) · [Before (L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10322)

```diff
-             return null === zT || bU(WT) <= bU(zT) ? WT : zT
+             return null === nB || tj(QB) <= tj(nB) ? QB : nB
```

#### 985. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10348` → after: `L10348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10348) · [Before (L10348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10348)

```diff
-                 sg: TT,
+                 bI: BB,
```

#### 986. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10351` → after: `L10351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10351) · [Before (L10351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10351)

```diff
-               } = (0, WT.z)(mT, zT.origin, zT.downhill.origin);
+               } = (0, QB.u)(zB, nB.origin, nB.downhill.origin);
```

#### 987. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10363` → after: `L10363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10363) · [Before (L10363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10363)

```diff
-                 sg: TT,
+                 bI: BB,
```

#### 988. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10366` → after: `L10366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10366) · [Before (L10366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10366)

```diff
-               } = (0, WT.z)(mT, LT.origin, zT.origin), BT = Math.floor(TT);
+               } = (0, QB.u)(zB, rB.origin, nB.origin), JB = Math.floor(BB);
```

#### 989. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10387` → after: `L10387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10387) · [Before (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10387)

```diff
-                 gT *= MT.lakeRadius / this.lakeSettings.maxRadius, LT = MT.lakeRadius - gT, mT = (0, WT.M)(zT.origin, TT, UT) - LT
+                 IB *= dB.lakeRadius / this.lakeSettings.maxRadius, rB = dB.lakeRadius - IB, zB = (0, QB.D)(nB.origin, BB, jB) - rB
```

#### 990. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10401` → after: `L10401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10401) · [Before (L10401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10401)

```diff
-                 const mT = (0, WT.M)(zT.origin, TT, UT),
+                 const zB = (0, QB.D)(nB.origin, BB, jB),
```

#### 991. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10428` → after: `L10428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10428) · [Before (L10428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10428)

```diff
-             if (!(0, jT.E)(mT)) return this.lastReadInfo.cellX = TT, this.lastReadInfo.cellZ = UT, this.lastReadInfo.info = mT, mT;
+             if (!(0, aB.I)(zB)) return this.lastReadInfo.cellX = BB, this.lastReadInfo.cellZ = jB, this.lastReadInfo.info = zB, zB;
```

#### 992. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10492` → after: `L10492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10492) · [Before (L10492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10492)

```diff
-             return -1 !== zT ? WT : null
+             return -1 !== nB ? QB : null
```

#### 993. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10497` → after: `L10497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10497) · [Before (L10497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10497)

```diff
-               zT = new LT.k(`${TT}${UT}${this.seed}riverCell`);
+               nB = new rB.i(`${BB}${jB}${this.seed}riverCell`);
```

#### 994. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10537-L10540` → after: `L10537-L10540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10537-L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10537-L10540) · [Before (L10537-L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10537-L10540)

```diff
-           tW: 40,
-           UW: -85,
-           mW: -85,
-           aW: .5
+           YQ: 40,
+           nQ: -85,
+           dQ: -85,
+           VQ: .5
```

#### 995. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10544-L10547` → after: `L10544-L10547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10544-L10547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10544-L10547) · [Before (L10544-L10547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10544-L10547)

```diff
-           tW: 13,
-           UW: -100,
-           mW: -85,
-           aW: .28
+           YQ: 13,
+           nQ: -100,
+           dQ: -85,
+           VQ: .28
```

#### 996. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10551-L10554` → after: `L10551-L10554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10551-L10554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10551-L10554) · [Before (L10551-L10554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10551-L10554)

```diff
-           tW: 10,
-           UW: -100,
-           mW: -75,
-           aW: .4
+           YQ: 10,
+           nQ: -100,
+           dQ: -75,
+           VQ: .4
```

#### 997. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10558-L10561` → after: `L10558-L10561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10558-L10561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10558-L10561) · [Before (L10558-L10561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10558-L10561)

```diff
-           tW: 5,
-           UW: -80,
-           mW: 15,
-           aW: .5
+           YQ: 5,
+           nQ: -80,
+           dQ: 15,
+           VQ: .5
```

#### 998. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10565-L10568` → after: `L10565-L10568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10565-L10568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10565-L10568) · [Before (L10565-L10568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10565-L10568)

```diff
-           tW: 4,
-           UW: -60,
-           mW: 40,
-           aW: .5
+           YQ: 4,
+           nQ: -60,
+           dQ: 40,
+           VQ: .5
```

#### 999. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10572-L10573` → after: `L10572-L10573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10572-L10573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10572-L10573) · [Before (L10572-L10573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10572-L10573)

```diff
-             this.seed = UT, this.cB = mT, this.dW = void 0, this.dW = WT.map((WT => {
-               const MT = new zT.b("ore", WT.tW, !1, !0, `${UT}${WT.blockName}`, 20, mT, null, !0);
+             this.seed = jB, this.ZJ = zB, this.DQ = void 0, this.DQ = QB.map((QB => {
+               const dB = new nB.e("ore", QB.YQ, !1, !0, `${jB}${QB.blockName}`, 20, zB, null, !0);
```

#### 1000. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10575` → after: `L10575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10575) · [Before (L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10575)

```diff
-                 Gg: (0, jT.C)(WT.blockName, TT),
+                 dN: (0, aB.C)(QB.blockName, BB),
```

#### 1001. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10577-L10580` → after: `L10577-L10580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10577-L10580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10577-L10580) · [Before (L10577-L10580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10577-L10580)

```diff
-                 tW: WT.tW,
-                 UW: WT.UW,
-                 mW: WT.mW,
-                 aW: WT.aW,
+                 YQ: QB.YQ,
+                 nQ: QB.nQ,
+                 dQ: QB.dQ,
+                 VQ: QB.VQ,
```

#### 1002. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10587-L10590` → after: `L10587-L10590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10587-L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10587-L10590) · [Before (L10587-L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10587-L10590)

```diff
-               zT = new LT.k(`${TT}${UT}${this.seed}oreExists`);
-             for (const MT of this.dW) {
-               const gT = MT.pointGenerator.getPointsAroundPoint(TT + this.cB / 2, UT + this.cB / 2),
-                 nT = TT + this.cB + MT.radius,
+               nB = new rB.i(`${BB}${jB}${this.seed}oreExists`);
+             for (const dB of this.DQ) {
+               const IB = dB.pointGenerator.getPointsAroundPoint(BB + this.ZJ / 2, jB + this.ZJ / 2),
+                 NB = BB + this.ZJ + dB.radius,
```

#### 1003. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10592` → after: `L10592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10592) · [Before (L10592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10592)

```diff
-                 kT = UT + this.cB + MT.radius,
+                 UB = jB + this.ZJ + dB.radius,
```

#### 1004. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10596-L10597` → after: `L10596-L10597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10596-L10597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10596-L10597) · [Before (L10596-L10597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10596-L10597)

```diff
-                 const gT = new LT.k(`${lT[0]}${lT[1]}${this.seed}ore`),
-                   pT = Math.floor(gT.next() * (MT.mW + 1 - MT.UW)) + MT.UW,
+                 const IB = new rB.i(`${pB[0]}${pB[1]}${this.seed}ore`),
+                   sB = Math.floor(IB.next() * (dB.dQ + 1 - dB.nQ)) + dB.nQ,
```

#### 1005. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10599` → after: `L10599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10599) · [Before (L10599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10599)

```diff
-                   ZT = Math.min(TT + this.cB - 1, lT[0] + MT.radius),
+                   mB = Math.min(BB + this.ZJ - 1, pB[0] + dB.radius),
```

#### 1006. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10601` → after: `L10601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10601) · [Before (L10601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10601)

```diff
-                   vT = Math.min(UT + this.cB - 1, lT[1] + MT.radius);
+                   kB = Math.min(jB + this.ZJ - 1, pB[1] + dB.radius);
```

#### 1007. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10604` → after: `L10604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10604) · [Before (L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10604)

```diff
-                     (0, WT.G)(lT, TT, UT) > MT.radius || (zT.next() >= MT.aW || mT.push(TT, pT, UT, MT.Gg))
+                     (0, QB.A)(pB, BB, jB) > dB.radius || (nB.next() >= dB.VQ || zB.push(BB, sB, jB, dB.dN))
```

#### 1008. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10611` → after: `L10611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10611) · [Before (L10611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10611)

```diff
-             const HT = mT + this.cB,
+             const uB = zB + this.ZJ,
```

#### 1009. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10618` → after: `L10618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10618) · [Before (L10618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10618)

```diff
-               if (kT < gT.get(lT, LT, MT.i.GroundHeight) - zT) {
+               if (UB < IB.get(pB, rB, dB.e.GroundHeight) - nB) {
```

#### 1010. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10625` → after: `L10625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10625) · [Before (L10625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10625)

```diff
-         var JU = mT(39873);
+         var ij = zB(39848);
```

#### 1011. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10635-L10636` → after: `L10635-L10636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10635-L10636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10635-L10636) · [Before (L10635-L10636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10635-L10636)

```diff
-             pW: mT,
-             fW: WT,
+             yQ: zB,
+             tQ: QB,
```

#### 1012. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10646` → after: `L10646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10646) · [Before (L10646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10646)

```diff
-           return mT.jW && WT.push({
+           return zB.sQ && QB.push({
```

#### 1013. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10648-L10649` → after: `L10648-L10649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10648-L10649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10648-L10649) · [Before (L10648-L10649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10648-L10649)

```diff
-             Gg: TT[UT].id
-           }), mT.lW && WT.push({
+             dN: BB[jB].id
+           }), zB.JQ && QB.push({
```

#### 1014. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10651` → after: `L10651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10651) · [Before (L10651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10651)

```diff
-             Gg: TT[`${UT}|meta|rot2|side`].id
+             dN: BB[`${jB}|meta|rot2|side`].id
```

#### 1015. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10654` → after: `L10654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10654) · [Before (L10654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10654)

```diff
-             Gg: TT[`${UT}|meta|rot4|side`].id
+             dN: BB[`${jB}|meta|rot4|side`].id
```

#### 1016. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10657` → after: `L10657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10657) · [Before (L10657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10657)

```diff
-             Gg: TT[`${UT}|meta|rot1|side`].id
+             dN: BB[`${jB}|meta|rot1|side`].id
```

#### 1017. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10660-L10661` → after: `L10660-L10661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10660-L10661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10660-L10661) · [Before (L10660-L10661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10660-L10661)

```diff
-             Gg: TT[`${UT}|meta|rot3|side`].id
-           }), mT.LW && WT.push({
+             dN: BB[`${jB}|meta|rot3|side`].id
+           }), zB.mQ && QB.push({
```

#### 1018. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10663` → after: `L10663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10663) · [Before (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10663)

```diff
-             Gg: TT[`${UT}|meta|rot1|top`].id
+             dN: BB[`${jB}|meta|rot1|top`].id
```

#### 1019. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10672-L10674` → after: `L10672-L10674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10672-L10674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10672-L10674) · [Before (L10672-L10674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10672-L10674)

```diff
-                 jW: !0,
-                 lW: !0,
-                 LW: !0
+                 sQ: !0,
+                 JQ: !0,
+                 mQ: !0
```

#### 1020. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10677-L10680` → after: `L10677-L10680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10677-L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10677-L10680) · [Before (L10677-L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10677-L10680)

```diff
-               BW: .8,
-               ZW: 0,
-               pW: .12,
-               fW: .25,
+               kQ: .8,
+               GQ: 0,
+               yQ: .12,
+               tQ: .25,
```

#### 1021. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10686-L10688` → after: `L10686-L10688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10686-L10688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10686-L10688) · [Before (L10686-L10688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10686-L10688)

```diff
-                 jW: !0,
-                 lW: !0,
-                 LW: !1
+                 sQ: !0,
+                 JQ: !0,
+                 mQ: !1
```

#### 1022. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10691-L10693` → after: `L10691-L10693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10691-L10693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10691-L10693) · [Before (L10691-L10693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10691-L10693)

```diff
-               BW: .7,
-               ZW: 2,
-               pW: .58
+               kQ: .7,
+               GQ: 2,
+               yQ: .58
```

#### 1023. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10696` → after: `L10696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10696) · [Before (L10696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10696)

```diff
-             const mT = UT.cW;
+             const zB = jB.LQ;
```

#### 1024. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10700-L10702` → after: `L10700-L10702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10700-L10702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10700-L10702) · [Before (L10700-L10702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10700-L10702)

```diff
-                 jW: UT.jW,
-                 lW: UT.lW,
-                 LW: UT.LW
+                 sQ: jB.sQ,
+                 JQ: jB.JQ,
+                 mQ: jB.mQ
```

#### 1025. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10705-L10710` → after: `L10705-L10710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10705-L10710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10705-L10710) · [Before (L10705-L10710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10705-L10710)

```diff
-               BW: UT.BW,
-               ZW: UT.ZW,
-               pW: UT.pW,
-               fW: null === mT || void 0 === mT ? void 0 : mT.fW,
-               shallowClusterY: null === mT || void 0 === mT ? void 0 : mT.qW,
-               deepClusterY: null === mT || void 0 === mT ? void 0 : mT.iW
+               kQ: jB.kQ,
+               GQ: jB.GQ,
+               yQ: jB.yQ,
+               tQ: null === zB || void 0 === zB ? void 0 : zB.tQ,
+               shallowClusterY: null === zB || void 0 === zB ? void 0 : zB.SQ,
+               deepClusterY: null === zB || void 0 === zB ? void 0 : zB.MQ
```

#### 1026. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10729` → after: `L10729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10729) · [Before (L10729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10729)

```diff
-             const WT = this.heightmapVals.getOrGenerate(TT, UT, MT.i.GroundHeight) - this.surfaceMargin,
+             const QB = this.heightmapVals.getOrGenerate(BB, jB, dB.e.GroundHeight) - this.surfaceMargin,
```

#### 1027. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10736` → after: `L10736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10736) · [Before (L10736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10736)

```diff
-               TT - MT.floorY + 1 < zT || gT.push(TT === MT.ceilingY ? MT : {
+               BB - dB.floorY + 1 < nB || IB.push(BB === dB.ceilingY ? dB : {
```

#### 1028. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10746` → after: `L10746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10746) · [Before (L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10746)

```diff
-             this.heightmapVals = TT, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new WT.o(new sU(UT)), this.decoratableCavesCache = new WT.o(new FU(UT, TT, mT, zT))
+             this.heightmapVals = BB, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new QB.n(new Xj(jB)), this.decoratableCavesCache = new QB.n(new Zj(jB, BB, zB, nB))
```

#### 1029. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10752` → after: `L10752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10752) · [Before (L10752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10752)

```diff
-             return this.heightmapVals.getOrGenerate(TT, UT, MT.i.GroundHeight)
+             return this.heightmapVals.getOrGenerate(BB, jB, dB.e.GroundHeight)
```

#### 1030. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10771` → after: `L10771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10771) · [Before (L10771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10771)

```diff
-             VU(TT + HT.offset[0], UT + HT.offset[1], mT + HT.offset[2], MT) && (HT.offset === xU ? gT = HT : nT.push(HT))
+             Tj(BB + uB.offset[0], jB + uB.offset[1], zB + uB.offset[2], dB) && (uB.offset === qj ? IB = uB : NB.push(uB))
```

#### 1031. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10773` → after: `L10773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10773) · [Before (L10773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10773)

```diff
-           return null !== gT ? gT : 0 === nT.length ? null : nT[Math.floor(zT * nT.length)]
+           return null !== IB ? IB : 0 === NB.length ? null : NB[Math.floor(nB * NB.length)]
```

#### 1032. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10778` → after: `L10778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10778) · [Before (L10778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10778)

```diff
-             this.cB = UT, this.seed = mT, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
+             this.ZJ = jB, this.seed = zB, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
```

#### 1033. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10784` → after: `L10784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10784) · [Before (L10784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10784)

```diff
-               if (!Number.isInteger(zT.clusterBoxSize) || zT.clusterBoxSize < 2 || zT.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${zT.seedPrefix}" has invalid clusterBoxSize (${zT.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
+               if (!Number.isInteger(nB.clusterBoxSize) || nB.clusterBoxSize < 2 || nB.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${nB.seedPrefix}" has invalid clusterBoxSize (${nB.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
```

#### 1034. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10786` → after: `L10786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10786) · [Before (L10786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10786)

```diff
-               TT > gT && (gT = TT), nT += Math.max(zT.pW, null !== (HT = zT.fW) && void 0 !== HT ? HT : zT.pW)
+               BB > IB && (IB = BB), NB += Math.max(nB.yQ, null !== (uB = nB.tQ) && void 0 !== uB ? uB : nB.yQ)
```

#### 1035. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10788-L10789` → after: `L10788-L10789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10788-L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10788-L10789) · [Before (L10788-L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10788-L10789)

```diff
-             if (nT > 1) throw new Error(`Cave decoration cluster chances sum to ${nT} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
-             this.pointsGen = new zT.b("caveDeco", 10, !1, !0, mT, 4, UT, null, !0), this.pointsGen.assertReachableFromChunkCentre(UT, gT), this.configs = MT, this.maxHalfBox = gT
+             if (NB > 1) throw new Error(`Cave decoration cluster chances sum to ${NB} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
+             this.pointsGen = new nB.e("caveDeco", 10, !1, !0, zB, 4, jB, null, !0), this.pointsGen.assertReachableFromChunkCentre(jB, IB), this.configs = dB, this.maxHalfBox = IB
```

#### 1036. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10793` → after: `L10793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10793) · [Before (L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10793)

```diff
-               MT = this.cB,
+               dB = this.ZJ,
```

#### 1037. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10810` → after: `L10810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10810) · [Before (L10810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10810)

```diff
-             for (const nT of MT) nT.y >= mT && nT.y < gT && TT.set(nT.x - UT, nT.y - mT, nT.z - WT, nT.Gg)
+             for (const NB of dB) NB.y >= zB && NB.y < IB && BB.set(NB.x - jB, NB.y - zB, NB.z - QB, NB.dN)
```

#### 1038. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10815` → after: `L10815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10815) · [Before (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10815)

```diff
-             const kT = new LT.k(`${this.seed}|${TT}|${UT}|cluster`),
+             const UB = new rB.i(`${this.seed}|${BB}|${jB}|cluster`),
```

#### 1039. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10829` → after: `L10829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10829) · [Before (L10829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10829)

```diff
-             if (this.scatterClusterCells(TT, ZT, UT, vT, gT, kT, fT), !(fT.length < vT.ZW))
+             if (this.scatterClusterCells(BB, mB, jB, kB, IB, UB, GB), !(GB.length < kB.GQ))
```

#### 1040. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10835` → after: `L10835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10835) · [Before (L10835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10835)

```diff
-               BW: HT,
+               kQ: uB,
```

#### 1041. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10855` → after: `L10855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10855) · [Before (L10855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10855)

```diff
-                     Gg: fT.Gg
+                     dN: GB.dN
```

#### 1042. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10869` → after: `L10869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10869) · [Before (L10869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10869)

```diff
-             this.prefabGenerator = WT, this.seed = void 0, this.cB = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
+             this.prefabGenerator = QB, this.seed = void 0, this.ZJ = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
```

#### 1043. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10872` → after: `L10872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10872) · [Before (L10872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10872)

```diff
-             if (mT + this.cB <= gT.l.bedrockLevel) return {
+             if (zB + this.ZJ <= IB.r.bedrockLevel) return {
```

#### 1044. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10875` → after: `L10875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10875) · [Before (L10875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10875)

```diff
-             const qT = new lT.e,
+             const LB = new pB.d,
```

#### 1045. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10879-L10881` → after: `L10879-L10881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10879-L10881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10879-L10881) · [Before (L10879-L10881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10879-L10881)

```diff
-             if (bT >= mT && iT < mT + this.cB)
-               for (let WT = UT; WT < UT + this.cB; WT++)
-                 for (let HT = zT; HT < zT + this.cB; HT++) {
+             if (tB >= zB && gB < zB + this.ZJ)
+               for (let QB = jB; QB < jB + this.ZJ; QB++)
+                 for (let uB = nB; uB < nB + this.ZJ; uB++) {
```

#### 1046. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10884-L10886` → after: `L10884-L10886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10884-L10886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10884-L10886) · [Before (L10884-L10886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10884-L10886)

```diff
-                     lT = nT.get(WT, HT, MT.i.GroundHeight);
-                   if (lT >= mT && lT < mT + this.cB) {
-                     const kT = nT.get(WT, HT, MT.i.IsLake) === gT.g ? jT.getDryBedBlock(WT, lT, HT) : jT.getTopsoilBlock(WT, lT, HT);
+                     pB = NB.get(QB, uB, dB.e.GroundHeight);
+                   if (pB >= zB && pB < zB + this.ZJ) {
+                     const UB = NB.get(QB, uB, dB.e.IsLake) === IB.f ? aB.getDryBedBlock(QB, pB, uB) : aB.getTopsoilBlock(QB, pB, uB);
```

#### 1047. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10890-L10892` → after: `L10890-L10892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10890-L10892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10890-L10892) · [Before (L10890-L10892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10890-L10892)

```diff
-             if (bT + 1 >= mT && iT - 4 < mT + this.cB)
-               for (let WT = UT; WT < UT + this.cB; WT++)
-                 for (let gT = zT; gT < zT + this.cB; gT++) {
+             if (tB + 1 >= zB && gB - 4 < zB + this.ZJ)
+               for (let QB = jB; QB < jB + this.ZJ; QB++)
+                 for (let IB = nB; IB < nB + this.ZJ; IB++) {
```

#### 1048. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10895-L10896` → after: `L10895-L10896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10895-L10896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10895-L10896) · [Before (L10895-L10896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10895-L10896)

```diff
-                     jT = nT.get(WT, gT, MT.i.GroundHeight),
-                     lT = Math.min(jT, mT + this.cB);
+                     aB = NB.get(QB, IB, dB.e.GroundHeight),
+                     pB = Math.min(aB, zB + this.ZJ);
```

#### 1049. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10904-L10905` → after: `L10904-L10905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10904-L10905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10904-L10905) · [Before (L10904-L10905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10904-L10905)

```diff
-               for (let mT = Math.max(zT - 4, 0); mT < Math.min(zT, this.cB); mT++) TT.set(UT, mT, MT, this.dirtId);
-               zT >= 0 && zT < this.cB && TT.set(UT, zT, MT, this.grassBlockId)
+               for (let zB = Math.max(nB - 4, 0); zB < Math.min(nB, this.ZJ); zB++) BB.set(jB, zB, dB, this.dirtId);
+               nB >= 0 && nB < this.ZJ && BB.set(jB, nB, dB, this.grassBlockId)
```

#### 1050. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10909-L10910` → after: `L10909-L10910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10909-L10910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10909-L10910) · [Before (L10909-L10910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10909-L10910)

```diff
-               for (let gT = UT; gT < UT + this.cB; gT++)
-                 for (let HT = zT; HT < zT + this.cB; HT++) {
+               for (let IB = jB; IB < jB + this.ZJ; IB++)
+                 for (let uB = nB; uB < nB + this.ZJ; uB++) {
```

#### 1051. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10912-L10913` → after: `L10912-L10913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10912-L10913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10912-L10913) · [Before (L10912-L10913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10912-L10913)

```diff
-                     jT = nT.get(gT, HT, MT.i.GroundHeight),
-                     lT = Math.min(jT - 4, mT + this.cB),
+                     aB = NB.get(IB, uB, dB.e.GroundHeight),
+                     pB = Math.min(aB - 4, zB + this.ZJ),
```

#### 1052. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10918` → after: `L10918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10918) · [Before (L10918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10918)

```diff
-                     TT.set(gT - UT, WT - mT, HT - zT, 0 !== MT ? MT : kT)
+                     BB.set(IB - jB, QB - zB, uB - nB, 0 !== dB ? dB : UB)
```

#### 1053. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10922-L10924` → after: `L10922-L10924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10922-L10924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10922-L10924) · [Before (L10922-L10924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10922-L10924)

```diff
-             if (bT - 4 >= mT && this.oreGenerator.addOresToChunk(TT, UT, mT, zT, 4, nT, BT), bT >= mT && (HT.b.addCavesToChunk(TT, UT, mT, zT, nT, pT), CU.addCaveDecorationsToChunk(TT, UT, mT, zT, this.cB, vT)), gT.l.bedrockLevel >= mT && gT.l.bedrockLevel < mT + this.cB)
-               for (let WT = UT; WT < UT + this.cB; WT++)
-                 for (let MT = zT; MT < zT + this.cB; MT++) TT.set(WT - UT, gT.l.bedrockLevel - mT, MT - zT, this.bedrockId);
+             if (tB - 4 >= zB && this.oreGenerator.addOresToChunk(BB, jB, zB, nB, 4, NB, JB), tB >= zB && (uB.d.addCavesToChunk(BB, jB, zB, nB, NB, sB), Wj.addCaveDecorationsToChunk(BB, jB, zB, nB, this.ZJ, kB)), IB.r.bedrockLevel >= zB && IB.r.bedrockLevel < zB + this.ZJ)
+               for (let QB = jB; QB < jB + this.ZJ; QB++)
+                 for (let dB = nB; dB < nB + this.ZJ; dB++) BB.set(QB - jB, IB.r.bedrockLevel - zB, dB - nB, this.bedrockId);
```

#### 1054. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10927-L10929` → after: `L10927-L10929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10927-L10929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10927-L10929) · [Before (L10927-L10929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10927-L10929)

```diff
-               for (let MT = UT; MT < UT + this.cB; MT++)
-                 for (let gT = mT; gT < mT + this.cB; gT++)
-                   for (let nT = zT; nT < zT + this.cB; nT++) {
+               for (let dB = jB; dB < jB + this.ZJ; dB++)
+                 for (let IB = zB; IB < zB + this.ZJ; IB++)
+                   for (let NB = nB; NB < nB + this.ZJ; NB++) {
```

#### 1055. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10940-L10941` → after: `L10940-L10941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10940-L10941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10940-L10941) · [Before (L10940-L10941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10940-L10941)

```diff
-               for (let mT = Math.max(MT, 0); mT < Math.min(gT, this.cB); mT++) TT.set(UT, mT, zT, this.waterId);
-               gT >= 0 && gT < this.cB && TT.set(UT, gT, zT, YT[WT + 4])
+               for (let zB = Math.max(dB, 0); zB < Math.min(IB, this.ZJ); zB++) BB.set(jB, zB, nB, this.waterId);
+               IB >= 0 && IB < this.ZJ && BB.set(jB, IB, nB, EB[QB + 4])
```

#### 1056. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10944-L10949` → after: `L10944-L10949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10944-L10949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10944-L10949) · [Before (L10944-L10949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10944-L10949)

```diff
-             if (this.addSurfaceBlocks(TT, mT, fT.lilyPads), OT && bT >= mT && iT < mT + this.cB)
-               for (let HT = UT; HT < UT + this.cB; HT++)
-                 for (let kT = zT; kT < zT + this.cB; kT++) {
-                   const jT = nT.get(HT, kT, MT.i.WaterHeight),
-                     lT = nT.get(HT, kT, MT.i.GroundHeight);
-                   if (jT !== gT.k && lT >= mT && lT < mT + this.cB)
+             if (this.addSurfaceBlocks(BB, zB, GB.lilyPads), SB && tB >= zB && gB < zB + this.ZJ)
+               for (let uB = jB; uB < jB + this.ZJ; uB++)
+                 for (let UB = nB; UB < nB + this.ZJ; UB++) {
+                   const aB = NB.get(uB, UB, dB.e.WaterHeight),
+                     pB = NB.get(uB, UB, dB.e.GroundHeight);
+                   if (aB !== IB.p && pB >= zB && pB < zB + this.ZJ)
```

#### 1057. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10953` → after: `L10953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10953) · [Before (L10953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10953)

```diff
-                       if ((0, WT.P)(MT, HT, kT) < 100) JT === MT[0] && dT === MT[1] || (JT = MT[0], dT = MT[1], wT = new LT.k(`${this.seed}${JT}${dT}`).next() < .3 ? this.chalkId : this.clayId), TT.set(HT - UT, lT - mT, kT - zT, wT), lT - 1 >= mT && TT.set(HT - UT, lT - 1 - mT, k … [truncated]
+                       if ((0, QB.H)(dB, uB, UB) < 100) iB === dB[0] && fB === dB[1] || (iB = dB[0], fB = dB[1], oB = new rB.i(`${this.seed}${iB}${fB}`).next() < .3 ? this.chalkId : this.clayId), BB.set(uB - jB, pB - zB, UB - nB, oB), pB - 1 >= zB && BB.set(uB - jB, pB - 1 - zB, U … [truncated]
```
