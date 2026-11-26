# Changed — Bundle Modifications Report (Part 138 / 154)

- **Updated at**: `2026-11-27T02:11 JST`
- **Part**: `138 / 154` (**452** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 137](part-137.md) · [Part 139 →](part-139.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/procGenWorker.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/procGenWorker.js` (1930 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2)

#### 1376. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13363-L13364` → after: `L13363-L13364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13363-L13364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13363-L13364) · [Before (L13363-L13364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13363-L13364)

```diff
-     const AH = `${HH}|${BH}`;
-     if (void 0 === (0, SL.H)(AH, LH)) throw new Error(`Custom world-gen cave decoration "${HH}" is missing directional variant "${AH}" required for wall/ceiling anchoring`)
+     const YB = `${BB}|${OB}`;
+     if (void 0 === (0, QG.J)(YB, GB)) throw new Error(`Custom world-gen cave decoration "${BB}" is missing directional variant "${YB}" required for wall/ceiling anchoring`)
```

#### 1377. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13368` → after: `L13368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13368) · [Before (L13368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13368)

```diff
-     if (HH < 0 || HH > 1) throw new Error(`Custom world-gen cave decoration "${BH}" ${LH} must be in [0, 1], got ${HH}`)
+     if (BB < 0 || BB > 1) throw new Error(`Custom world-gen cave decoration "${OB}" ${GB} must be in [0, 1], got ${BB}`)
```

#### 1378. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13372-L13378` → after: `L13372-L13378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13372-L13378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13372-L13378) · [Before (L13372-L13378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13372-L13378)

```diff
-     if (HH.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${HH.frequency}`);
-     if (void 0 === (0, SL.H)(HH.lr, BH)) throw new Error(`Custom world-gen biome topsoilBlock "${HH.lr}" not found in blockMetadata`);
-     if (void 0 === (0, SL.H)(HH.Kr, BH)) throw new Error(`Custom world-gen biome lowsoilBlock "${HH.Kr}" not found in blockMetadata`);
-     if (0 === HH.cr.length) throw new Error("Custom world-gen biome must have at least one stoneType");
-     for (const LH of HH.cr) {
-       if (LH.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${LH.frequency}`);
-       if (void 0 === (0, SL.H)(LH.blockName, BH)) throw new Error(`Custom world-gen biome stoneType blockName "${LH.blockName}" not found in blockMetadata`)
+     if (BB.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${BB.frequency}`);
+     if (void 0 === (0, QG.J)(BB.yQ, OB)) throw new Error(`Custom world-gen biome topsoilBlock "${BB.yQ}" not found in blockMetadata`);
+     if (void 0 === (0, QG.J)(BB.JQ, OB)) throw new Error(`Custom world-gen biome lowsoilBlock "${BB.JQ}" not found in blockMetadata`);
+     if (0 === BB.MQ.length) throw new Error("Custom world-gen biome must have at least one stoneType");
+     for (const GB of BB.MQ) {
+       if (GB.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${GB.frequency}`);
+       if (void 0 === (0, QG.J)(GB.blockName, OB)) throw new Error(`Custom world-gen biome stoneType blockName "${GB.blockName}" not found in blockMetadata`)
```

#### 1379. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13383-L13387` → after: `L13383-L13387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13383-L13387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13383-L13387) · [Before (L13383-L13387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13383-L13387)

```diff
-     if (void 0 === (0, SL.H)(HH.blockName, BH)) throw new Error(`Custom world-gen ore blockName "${HH.blockName}" not found in blockMetadata`);
-     if (HH.radius < 0) throw new Error(`Custom world-gen ore "${HH.blockName}" radius must be >= 0, got ${HH.radius}`);
-     if (HH.Nr <= 0) throw new Error(`Custom world-gen ore "${HH.blockName}" minDistBetweenDeposits must be > 0, got ${HH.Nr}`);
-     if (HH.Sr > HH.hr) throw new Error(`Custom world-gen ore "${HH.blockName}" minY (${HH.Sr}) must be <= maxY (${HH.hr})`);
-     if (HH.Rr < 0 || HH.Rr > 1) throw new Error(`Custom world-gen ore "${HH.blockName}" spawnChance must be in [0, 1], got ${HH.Rr}`)
+     if (void 0 === (0, QG.J)(BB.blockName, OB)) throw new Error(`Custom world-gen ore blockName "${BB.blockName}" not found in blockMetadata`);
+     if (BB.radius < 0) throw new Error(`Custom world-gen ore "${BB.blockName}" radius must be >= 0, got ${BB.radius}`);
+     if (BB.qQ <= 0) throw new Error(`Custom world-gen ore "${BB.blockName}" minDistBetweenDeposits must be > 0, got ${BB.qQ}`);
+     if (BB.XD > BB.wD) throw new Error(`Custom world-gen ore "${BB.blockName}" minY (${BB.XD}) must be <= maxY (${BB.wD})`);
+     if (BB.ZQ < 0 || BB.ZQ > 1) throw new Error(`Custom world-gen ore "${BB.blockName}" spawnChance must be in [0, 1], got ${BB.ZQ}`)
```

#### 1380. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13389` → after: `L13389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13389) · [Before (L13389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13389)

```diff
-   LH(41008);
+   GB(40744);
```

#### 1381. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13394-L13397` → after: `L13394-L13397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13394-L13397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13394-L13397) · [Before (L13394-L13397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13394-L13397)

```diff
-       Nr: 10,
-       Sr: -98,
-       hr: -78,
-       Rr: .4
+       qQ: 10,
+       XD: -98,
+       wD: -78,
+       ZQ: .4
```

#### 1382. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13402-L13405` → after: `L13402-L13405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13402-L13405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13402-L13405) · [Before (L13402-L13405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13402-L13405)

```diff
-       Nr: 6,
-       Sr: -40,
-       hr: 20,
-       Rr: .6
+       qQ: 6,
+       XD: -40,
+       wD: 20,
+       ZQ: .6
```

#### 1383. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13409-L13412` → after: `L13409-L13412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13409-L13412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13409-L13412) · [Before (L13409-L13412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13409-L13412)

```diff
-       Nr: 10,
-       Sr: -75,
-       hr: -55,
-       Rr: .4
+       qQ: 10,
+       XD: -75,
+       wD: -55,
+       ZQ: .4
```

#### 1384. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13416` → after: `L13416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13416) · [Before (L13416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13416)

```diff
-       Dr: null
+       AQ: null
```

#### 1385. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13419` → after: `L13419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13419) · [Before (L13419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13419)

```diff
-     [YL]: () => LH(40941).d
+     [lG]: () => GB(40694).b
```

#### 1386. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13421` → after: `L13421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13421) · [Before (L13421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13421)

```diff
-   var xL = LH(9943);
+   var RG = GB(9936);
```

#### 1387. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13454` → after: `L13454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13454) · [Before (L13454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13454)

```diff
-       this.rootName = HH, this.rootId = BH, this.metaStr = LH, this.rot = AH, this.open = rH, this.halfblockPlacement = SH, this.GB = hH, this.treeBase = tH, this.treeCanopy = zH, this.books = CH, this.freshlyGrown = EH, this.roots = XH, this.lava = GH, this.top = YH, this.grassR … [truncated]
+       this.rootName = BB, this.rootId = OB, this.metaStr = GB, this.rot = YB, this.open = DB, this.halfblockPlacement = QB, this.IB = oB, this.treeBase = jB, this.treeCanopy = yB, this.books = JB, this.freshlyGrown = MB, this.roots = PB, this.lava = zB, this.top = lB, this.grassR … [truncated]
```

#### 1388. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13461` → after: `L13461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13461) · [Before (L13461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13461)

```diff
-       const rH = null !== AH && void 0 !== AH ? AH : HH;
+       const DB = null !== YB && void 0 !== YB ? YB : BB;
```

#### 1389. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13482` → after: `L13482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13482) · [Before (L13482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13482)

```diff
-           vH = null !== (SH = VL.find((HH => BH.endsWith(`|${HH}`)))) && void 0 !== SH ? SH : null,
+           WB = null !== (QB = nG.find((BB => OB.endsWith(`|${BB}`)))) && void 0 !== QB ? QB : null,
```

#### 1390. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13555` → after: `L13555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13555) · [Before (L13555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13555)

```diff
-     return "" === AH ? 1 === BH ? HH : `${HH}|meta|rot${BH}` : `${HH}|meta|rot${BH}|${AH}`
+     return "" === YB ? 1 === OB ? BB : `${BB}|meta|rot${OB}` : `${BB}|meta|rot${OB}|${YB}`
```

#### 1391. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13653-L13654` → after: `L13653-L13654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13653-L13654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13653-L13654) · [Before (L13653-L13654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13653-L13654)

```diff
-     const tH = null !== (LH = null !== (AH = HH.blockModel) && void 0 !== AH ? AH : BH.blockModel) && void 0 !== LH ? LH : "";
-     "noticeboard_standing_leg" === tH ? hH = GA : tH.startsWith("noticeboard_standing") ? hH = EA : tH.startsWith("noticeboard_wall") ? hH = XA : HH.meta.rootName.endsWith(" Directional Arrow") ? hH = LA : HH.meta.rootName.endsWith(" Ladder") ? hH = CA : HH.meta.rootName.endsWith … [truncated]
+     const jB = null !== (GB = null !== (YB = BB.blockModel) && void 0 !== YB ? YB : OB.blockModel) && void 0 !== GB ? GB : "";
+     "noticeboard_standing_leg" === jB ? oB = zY : jB.startsWith("noticeboard_standing") ? oB = MY : jB.startsWith("noticeboard_wall") ? oB = PY : BB.meta.rootName.endsWith(" Directional Arrow") ? oB = GY : BB.meta.rootName.endsWith(" Ladder") ? oB = JY : BB.meta.rootName.endsWith … [truncated]
```

#### 1392. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13656` → after: `L13656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13656) · [Before (L13656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13656)

```diff
-     return null === (rH = hH) || void 0 === rH ? void 0 : rH[((null !== (SH = HH.meta.rot) && void 0 !== SH ? SH : 1) - 1 + zH) % 4]
+     return null === (DB = oB) || void 0 === DB ? void 0 : DB[((null !== (QB = BB.meta.rot) && void 0 !== QB ? QB : 1) - 1 + yB) % 4]
```

#### 1393. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13695-L13696` → after: `L13695-L13696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13695-L13696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13695-L13696) · [Before (L13695-L13696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13695-L13696)

```diff
-     const LH = [VA(BH), BH & TA ? UA : ""].filter(Boolean);
-     return LH.length ? `${HH}|meta|${LH.join("|")}` : HH
+     const GB = [nY(OB), OB & VY ? SY : ""].filter(Boolean);
+     return GB.length ? `${BB}|meta|${GB.join("|")}` : BB
```

#### 1394. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13733` → after: `L13733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13733) · [Before (L13733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13733)

```diff
-     const AH = `${HH}|${BH}|${LH}`;
+     const YB = `${BB}|${OB}|${GB}`;
```

#### 1395. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13751` → after: `L13751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13751) · [Before (L13751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13751)

```diff
-     return 1 !== BH || LH ? `${HH}|meta|rot${BH}|${LH?"open":"closed"}` : HH
+     return 1 !== OB || GB ? `${BB}|meta|rot${OB}|${GB?"open":"closed"}` : BB
```

#### 1396. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13757` → after: `L13757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13757) · [Before (L13757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13757)

```diff
-     return `${HH}|meta|rot${BH}|${LH}`
+     return `${BB}|meta|rot${OB}|${GB}`
```

#### 1397. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13760` → after: `L13760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13760) · [Before (L13760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13760)

```diff
-     NA = (gA.map((HH => `${HH} Boomerang`)), ["Cursemetal", "Kingly Amethite", "Kingly Diamond"]),
+     XY = (rY.map((BB => `${BB} Boomerang`)), ["Cursemetal", "Kingly Amethite", "Kingly Diamond"]),
```

#### 1398. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13762-L13763` → after: `L13762-L13763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13762-L13763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13762-L13763) · [Before (L13762-L13763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13762-L13763)

```diff
-   LH(330);
-   var jA = LH(599);
+   GB(363);
+   var EY = GB(624);
```

#### 1399. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13788-L13789` → after: `L13788-L13789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13788-L13789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13788-L13789) · [Before (L13788-L13789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13788-L13789)

```diff
-   sA.map((HH => `${HH} Torch`));
-   const JA = ["Wood Spade", "Stone Spade", "Iron Spade", "Gold Spade", "Diamond Spade", ...gA.map((HH => `${HH} Spade`))],
+   HY.map((BB => `${BB} Torch`));
+   const vY = ["Wood Spade", "Stone Spade", "Iron Spade", "Gold Spade", "Diamond Spade", ...rY.map((BB => `${BB} Spade`))],
```

#### 1400. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13804` → after: `L13804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13804) · [Before (L13804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13804)

```diff
-     return `${HH} Spawn Orb`
+     return `${BB} Spawn Orb`
```

#### 1401. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13808` → after: `L13808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13808) · [Before (L13808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13808)

```diff
-     return `${HH} Spawner Block`
+     return `${BB} Spawner Block`
```

#### 1402. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13812` → after: `L13812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13812) · [Before (L13812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13812)

```diff
-     return `Caught Mob ${HH.replaceAll(" ","_")} ${ZA(BH)}`
+     return `Caught Mob ${BB.replaceAll(" ","_")} ${TY(OB)}`
```

#### 1403. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13826` → after: `L13826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13826) · [Before (L13826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13826)

```diff
-     return Ar[HH] ? Ar[HH] : `${HH} Painting`
+     return YD[BB] ? YD[BB] : `${BB} Painting`
```

#### 1404. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13842` → after: `L13842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13842) · [Before (L13842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13842)

```diff
-       return HH > 0 && HH < BH ? HH : (HH % BH + BH) % BH
+       return BB > 0 && BB < OB ? BB : (BB % OB + OB) % OB
```

#### 1405. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13854` → after: `L13854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13854) · [Before (L13854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13854)

```diff
-       AH.min = HH, AH.max = "excludeMax" === LH ? BH : BH + 1;
+       YB.min = BB, YB.max = "excludeMax" === GB ? OB : OB + 1;
```

#### 1406. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13996` → after: `L13996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L13996) · [Before (L13996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L13996)

```diff
-     return null !== (LH = null === HH || void 0 === HH || null === (AH = HH.attributes) || void 0 === AH || null === (rH = AH.customAttributes) || void 0 === rH || null === (SH = rH.enchantments) || void 0 === SH ? void 0 : SH[BH]) && void 0 !== LH ? LH : null
+     return null !== (GB = null === BB || void 0 === BB || null === (YB = BB.attributes) || void 0 === YB || null === (DB = YB.customAttributes) || void 0 === DB || null === (QB = DB.enchantments) || void 0 === QB ? void 0 : QB[OB]) && void 0 !== GB ? GB : null
```

#### 1407. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14123` → after: `L14123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14123) · [Before (L14123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14123)

```diff
-     if (0 === BH.size) throw new Error(`No visible variations for mob type: ${HH}.`);
+     if (0 === OB.size) throw new Error(`No visible variations for mob type: ${BB}.`);
```

#### 1408. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14135` → after: `L14135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14135) · [Before (L14135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14135)

```diff
-         [`${HH}_stage${tH+1}`]: Object.assign({
+         [`${BB}_stage${jB+1}`]: Object.assign({
```

#### 1409. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14139` → after: `L14139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14139) · [Before (L14139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14139)

```diff
-         }, null !== (hH = null === AH || void 0 === AH ? void 0 : AH[tH + 1]) && void 0 !== hH ? hH : {})
+         }, null !== (oB = null === YB || void 0 === YB ? void 0 : YB[jB + 1]) && void 0 !== oB ? oB : {})
```

#### 1410. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14159` → after: `L14159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14159) · [Before (L14159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14159)

```diff
-             colour: `$t(colour:${aA(tH)})`
+             colour: `$t(colour:${CY(jB)})`
```

#### 1411. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14165` → after: `L14165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14165) · [Before (L14165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14165)

```diff
-             colour: `$t(colour:${aA(tH)})`
+             colour: `$t(colour:${CY(jB)})`
```

#### 1412. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14171` → after: `L14171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14171) · [Before (L14171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14171)

```diff
-         rootMetaDesc: `${zH}|meta|rot1|bot`,
+         rootMetaDesc: `${yB}|meta|rot1|bot`,
```

#### 1413. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14255` → after: `L14255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14255) · [Before (L14255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14255)

```diff
-         hW: Vr.bot
+         MZ: nD.bot
```

#### 1414. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14257` → after: `L14257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14257) · [Before (L14257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14257)

```diff
-       [`${HH}|meta|rot1|top`]: {
+       [`${BB}|meta|rot1|top`]: {
```

#### 1415. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14259` → after: `L14259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14259) · [Before (L14259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14259)

```diff
-         hW: Vr.top
+         MZ: nD.top
```

#### 1416. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14261` → after: `L14261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14261) · [Before (L14261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14261)

```diff
-       [`${HH}|meta|rot1|side`]: {
+       [`${BB}|meta|rot1|side`]: {
```

#### 1417. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14263` → after: `L14263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14263) · [Before (L14263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14263)

```diff
-         hW: Vr.side1
+         MZ: nD.side1
```

#### 1418. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14265` → after: `L14265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14265) · [Before (L14265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14265)

```diff
-       [`${HH}|meta|rot2|side`]: {
+       [`${BB}|meta|rot2|side`]: {
```

#### 1419. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14267` → after: `L14267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14267) · [Before (L14267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14267)

```diff
-         hW: Vr.side2
+         MZ: nD.side2
```

#### 1420. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14269` → after: `L14269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14269) · [Before (L14269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14269)

```diff
-       [`${HH}|meta|rot3|side`]: {
+       [`${BB}|meta|rot3|side`]: {
```

#### 1421. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14271` → after: `L14271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14271) · [Before (L14271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14271)

```diff
-         hW: Vr.side3
+         MZ: nD.side3
```

#### 1422. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14273` → after: `L14273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14273) · [Before (L14273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14273)

```diff
-       [`${HH}|meta|rot4|side`]: {
+       [`${BB}|meta|rot4|side`]: {
```

#### 1423. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14275` → after: `L14275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14275) · [Before (L14275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14275)

```diff
-         hW: Vr.side4
+         MZ: nD.side4
```

#### 1424. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14291-L14293` → after: `L14291-L14293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14291-L14293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14291-L14293) · [Before (L14291-L14293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14291-L14293)

```diff
-           rootMetaDesc: `${HH}|meta|rot1|bot`,
-           hW: SH
-         } : AH[`${HH}|meta|rot${BH}|${rH}`] = {
+           rootMetaDesc: `${BB}|meta|rot1|bot`,
+           MZ: QB
+         } : YB[`${BB}|meta|rot${OB}|${DB}`] = {
```

#### 1425. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14295` → after: `L14295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14295) · [Before (L14295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14295)

```diff
-           hW: SH
+           MZ: QB
```

#### 1426. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14309` → after: `L14309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14309) · [Before (L14309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14309)

```diff
-     return sA.map((LH => Ir(`${LH} ${HH} Stairs`, BH(LH))))
+     return HY.map((GB => uD(`${GB} ${BB} Stairs`, OB(GB))))
```

#### 1427. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14313` → after: `L14313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14313) · [Before (L14313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14313)

```diff
-     const LH = `_${HH} Top`,
+     const GB = `_${BB} Top`,
```

#### 1428. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14319` → after: `L14319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14319) · [Before (L14319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14319)

```diff
-         hW: kA[SH],
+         MZ: kY[QB],
```

#### 1429. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14325` → after: `L14325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14325) · [Before (L14325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14325)

```diff
-       hW: mA[rH],
+       MZ: dY[DB],
```

#### 1430. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14340` → after: `L14340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14340) · [Before (L14340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14340)

```diff
-         blockModel: `_${HH} Hanging`
+         blockModel: `_${BB} Hanging`
```

#### 1431. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14342` → after: `L14342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14342) · [Before (L14342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14342)

```diff
-       rH = `_${HH} Flag`,
+       DB = `_${BB} Flag`,
```

#### 1432. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14346-L14347` → after: `L14346-L14347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14346-L14347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14346-L14347) · [Before (L14346-L14347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14346-L14347)

```diff
-         rootMetaDesc: `${rH}|meta|rot1|top`,
-         blockModel: `${rH} Hanging`
+         rootMetaDesc: `${DB}|meta|rot1|top`,
+         blockModel: `${DB} Hanging`
```

#### 1433. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14359` → after: `L14359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14359) · [Before (L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14359)

```diff
-       [`${HH}|meta|rot2|bot`]: {
+       [`${BB}|meta|rot2|bot`]: {
```

#### 1434. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14362` → after: `L14362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14362) · [Before (L14362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14362)

```diff
-       [`${HH}|meta|rot3|bot`]: {
+       [`${BB}|meta|rot3|bot`]: {
```

#### 1435. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14365` → after: `L14365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14365) · [Before (L14365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14365)

```diff
-       [`${HH}|meta|rot4|bot`]: {
+       [`${BB}|meta|rot4|bot`]: {
```

#### 1436. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14369` → after: `L14369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14369) · [Before (L14369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14369)

```diff
-       [`${rH}|meta|rot2|top`]: {
+       [`${DB}|meta|rot2|top`]: {
```

#### 1437. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14372` → after: `L14372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14372) · [Before (L14372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14372)

```diff
-       [`${rH}|meta|rot3|top`]: {
+       [`${DB}|meta|rot3|top`]: {
```

#### 1438. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14375` → after: `L14375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14375) · [Before (L14375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14375)

```diff
-       [`${rH}|meta|rot4|top`]: {
+       [`${DB}|meta|rot4|top`]: {
```

#### 1439. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14378` → after: `L14378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14378) · [Before (L14378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14378)

```diff
-       [`${rH}|meta|rot1|side`]: {
+       [`${DB}|meta|rot1|side`]: {
```

#### 1440. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14381` → after: `L14381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14381) · [Before (L14381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14381)

```diff
-       [`${rH}|meta|rot2|side`]: {
+       [`${DB}|meta|rot2|side`]: {
```

#### 1441. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14384` → after: `L14384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14384) · [Before (L14384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14384)

```diff
-       [`${rH}|meta|rot3|side`]: {
+       [`${DB}|meta|rot3|side`]: {
```

#### 1442. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14387` → after: `L14387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14387) · [Before (L14387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14387)

```diff
-       [`${rH}|meta|rot4|side`]: {
+       [`${DB}|meta|rot4|side`]: {
```

#### 1443. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14390` → after: `L14390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14390) · [Before (L14390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14390)

```diff
-       [`${rH}|meta|rot1|bot`]: {
+       [`${DB}|meta|rot1|bot`]: {
```

#### 1444. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14393` → after: `L14393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14393) · [Before (L14393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14393)

```diff
-       [`${rH}|meta|rot2|bot`]: {
+       [`${DB}|meta|rot2|bot`]: {
```

#### 1445. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14396` → after: `L14396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14396) · [Before (L14396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14396)

```diff
-       [`${rH}|meta|rot3|bot`]: {
+       [`${DB}|meta|rot3|bot`]: {
```

#### 1446. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14399` → after: `L14399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14399) · [Before (L14399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14399)

```diff
-       [`${rH}|meta|rot4|bot`]: {
+       [`${DB}|meta|rot4|bot`]: {
```

#### 1447. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14402` → after: `L14402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14402) · [Before (L14402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14402)

```diff
-       [`${HH}|meta|rot1|top`]: {
+       [`${BB}|meta|rot1|top`]: {
```

#### 1448. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14405` → after: `L14405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14405) · [Before (L14405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14405)

```diff
-       [`${HH}|meta|rot2|top`]: {
+       [`${BB}|meta|rot2|top`]: {
```

#### 1449. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14408` → after: `L14408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14408) · [Before (L14408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14408)

```diff
-       [`${HH}|meta|rot3|top`]: {
+       [`${BB}|meta|rot3|top`]: {
```

#### 1450. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14411` → after: `L14411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14411) · [Before (L14411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14411)

```diff
-       [`${HH}|meta|rot4|top`]: {
+       [`${BB}|meta|rot4|top`]: {
```

#### 1451. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14414` → after: `L14414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14414) · [Before (L14414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14414)

```diff
-       [`${HH}|meta|rot1|side`]: {
+       [`${BB}|meta|rot1|side`]: {
```

#### 1452. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14417` → after: `L14417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14417) · [Before (L14417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14417)

```diff
-       [`${HH}|meta|rot2|side`]: {
+       [`${BB}|meta|rot2|side`]: {
```

#### 1453. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14420` → after: `L14420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14420) · [Before (L14420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14420)

```diff
-       [`${HH}|meta|rot3|side`]: {
+       [`${BB}|meta|rot3|side`]: {
```

#### 1454. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14423` → after: `L14423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14423) · [Before (L14423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14423)

```diff
-       [`${HH}|meta|rot4|side`]: {
+       [`${BB}|meta|rot4|side`]: {
```

#### 1455. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14432` → after: `L14432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14432) · [Before (L14432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14432)

```diff
-     return `${LH}_${AH}`
+     return `${GB}_${YB}`
```

#### 1456. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14440` → after: `L14440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14440) · [Before (L14440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14440)

```diff
-     return qr(BH) === qr(LH) ? `${HH}_straight_${qr(BH)}` : `${HH}_elbow_${er(BH,LH)}`
+     return gD(OB) === gD(GB) ? `${BB}_straight_${gD(OB)}` : `${BB}_elbow_${LD(OB,GB)}`
```

#### 1457. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14444-L14446` → after: `L14444-L14446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14444-L14446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14444-L14446) · [Before (L14444-L14446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14444-L14446)

```diff
-     const SH = `meta|${AH}|none`;
-     if (rH.rootMetaDesc.split("|").slice(1).join("|") !== SH) throw new Error(`${HH} root hub pipe .rootMetaDesc must be |${SH}, got "${rH.rootMetaDesc}"`);
-     if (void 0 !== rH.blockModel) throw new Error(`${HH} root hub pipe data must NOT set blockModel - the builder fills it per-variant`);
+     const QB = `meta|${YB}|none`;
+     if (DB.rootMetaDesc.split("|").slice(1).join("|") !== QB) throw new Error(`${BB} root hub pipe .rootMetaDesc must be |${QB}, got "${DB.rootMetaDesc}"`);
+     if (void 0 !== DB.blockModel) throw new Error(`${BB} root hub pipe data must NOT set blockModel - the builder fills it per-variant`);
```

#### 1458. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14457` → after: `L14457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14457) · [Before (L14457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14457)

```diff
-           blockModel: `${BH}_${AH}_${LH}`
+           blockModel: `${OB}_${YB}_${GB}`
```

#### 1459. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14460` → after: `L14460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14460) · [Before (L14460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14460)

```diff
-     for (const zH of cr) zH !== LH && (tH[`${HH}|meta|${AH}|${zH}`] = hH(`${BH}_${AH}_${zH}`));
+     for (const yB of iD) yB !== GB && (jB[`${BB}|meta|${YB}|${yB}`] = oB(`${OB}_${YB}_${yB}`));
```

#### 1460. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14465` → after: `L14465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14465) · [Before (L14465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14465)

```diff
-     console.assert("meta|conn|none" === LH.rootMetaDesc.split("|").slice(1).join("|"), `${HH} root pipe .rootMetaDesc must be |meta|conn|none`), console.assert(void 0 === LH.blockModel, `${HH} root pipe data must NOT set blockModel - the builder fills it per-variant`);
+     console.assert("meta|conn|none" === GB.rootMetaDesc.split("|").slice(1).join("|"), `${BB} root pipe .rootMetaDesc must be |meta|conn|none`), console.assert(void 0 === GB.blockModel, `${BB} root pipe data must NOT set blockModel - the builder fills it per-variant`);
```

#### 1461. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14476` → after: `L14476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14476) · [Before (L14476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14476)

```diff
-           blockModel: `${BH}_isolated`
+           blockModel: `${OB}_isolated`
```

#### 1462. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14479` → after: `L14479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14479) · [Before (L14479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14479)

```diff
-     for (const SH of cr) rH[`${HH}|meta|conn|${SH}`] = AH(`${BH}_end_${SH}`);
+     for (const QB of iD) DB[`${BB}|meta|conn|${QB}`] = YB(`${OB}_end_${QB}`);
```

#### 1463. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14483` → after: `L14483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14483) · [Before (L14483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14483)

```diff
-         rH[`${HH}|meta|conn|${er(hH,tH)}`] = AH(gr(BH, hH, tH))
+         DB[`${BB}|meta|conn|${LD(oB,jB)}`] = YB(rD(OB, oB, jB))
```

#### 1464. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14489` → after: `L14489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14489) · [Before (L14489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14489)

```diff
-     console.assert("meta|rot1" === BH.rootMetaDesc.split("|").slice(1).join("|"), `${HH} root block .rootMetaDesc must be |meta|rot1`);
+     console.assert("meta|rot1" === OB.rootMetaDesc.split("|").slice(1).join("|"), `${BB} root block .rootMetaDesc must be |meta|rot1`);
```

#### 1465. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14495` → after: `L14495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14495) · [Before (L14495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14495)

```diff
-       [`${HH}|meta|rot2`]: {
+       [`${BB}|meta|rot2`]: {
```

#### 1466. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14498` → after: `L14498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14498) · [Before (L14498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14498)

```diff
-       [`${HH}|meta|rot3`]: {
+       [`${BB}|meta|rot3`]: {
```

#### 1467. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14501` → after: `L14501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14501) · [Before (L14501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14501)

```diff
-       [`${HH}|meta|rot4`]: {
+       [`${BB}|meta|rot4`]: {
```

#### 1468. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14535` → after: `L14535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14535) · [Before (L14535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14535)

```diff
-       [`${HH}|meta|rot2`]: {
+       [`${BB}|meta|rot2`]: {
```

#### 1469. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14539` → after: `L14539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14539) · [Before (L14539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14539)

```diff
-       [`${HH}|meta|rot3`]: {
+       [`${BB}|meta|rot3`]: {
```

#### 1470. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14543` → after: `L14543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14543) · [Before (L14543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14543)

```diff
-       [`${HH}|meta|rot4`]: {
+       [`${BB}|meta|rot4`]: {
```

#### 1471. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14556` → after: `L14556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14556) · [Before (L14556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14556)

```diff
-           translationKey: `item:${dA(HH)}MobSpawnerBlock`
+           translationKey: `item:${bY(BB)}MobSpawnerBlock`
```

#### 1472. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14559` → after: `L14559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14559) · [Before (L14559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14559)

```diff
-           translationKey: `item:${dA(HH)}MobSpawnerBlockDescription`
+           translationKey: `item:${bY(BB)}MobSpawnerBlockDescription`
```

#### 1473. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14561` → after: `L14561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14561) · [Before (L14561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14561)

```diff
-         itemTexture: `${aA(HH)}_spawner_block_icon`,
+         itemTexture: `${CY(BB)}_spawner_block_icon`,
```

#### 1474. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14563` → after: `L14563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14563) · [Before (L14563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14563)

```diff
-         textureInfo: [`mob_spawner_${LH}_block_side`, "mob_spawner_block_top"],
+         textureInfo: [`mob_spawner_${GB}_block_side`, "mob_spawner_block_top"],
```

#### 1475. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14582` → after: `L14582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14582) · [Before (L14582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14582)

```diff
-       AH = `${aA(HH)}_painting`,
+       YB = `${CY(BB)}_painting`,
```

#### 1476. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14585` → after: `L14585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14585) · [Before (L14585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14585)

```diff
-       ...jr(`_${LH} Top Left`, {
+       ...ED(`_${GB} Top Left`, {
```

#### 1477. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14590` → after: `L14590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14590) · [Before (L14590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14590)

```diff
-         rootMetaDesc: `_${LH} Top Left|meta|rot1`,
+         rootMetaDesc: `_${GB} Top Left|meta|rot1`,
```

#### 1478. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14594` → after: `L14594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14594) · [Before (L14594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14594)

```diff
-         blockModel: `_${rH} Top Left`,
+         blockModel: `_${DB} Top Left`,
```

#### 1479. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14598` → after: `L14598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14598) · [Before (L14598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14598)

```diff
-       ...jr(`_${LH} Top Right`, {
+       ...ED(`_${GB} Top Right`, {
```

#### 1480. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14603` → after: `L14603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14603) · [Before (L14603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14603)

```diff
-         rootMetaDesc: `_${LH} Top Right|meta|rot1`,
+         rootMetaDesc: `_${GB} Top Right|meta|rot1`,
```

#### 1481. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14607` → after: `L14607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14607) · [Before (L14607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14607)

```diff
-         blockModel: `_${rH} Top Right`,
+         blockModel: `_${DB} Top Right`,
```

#### 1482. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14611` → after: `L14611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14611) · [Before (L14611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14611)

```diff
-       ...jr(`${LH}`, {
+       ...ED(`${GB}`, {
```

#### 1483. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14616` → after: `L14616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14616) · [Before (L14616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14616)

```diff
-         rootMetaDesc: `${LH}|meta|rot1`,
+         rootMetaDesc: `${GB}|meta|rot1`,
```

#### 1484. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14620` → after: `L14620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14620) · [Before (L14620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14620)

```diff
-         blockModel: `_${rH} Bottom Left`,
+         blockModel: `_${DB} Bottom Left`,
```

#### 1485. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14624` → after: `L14624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14624) · [Before (L14624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14624)

```diff
-       ...jr(`_${LH} Bottom Right`, {
+       ...ED(`_${GB} Bottom Right`, {
```

#### 1486. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14629` → after: `L14629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14629) · [Before (L14629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14629)

```diff
-         rootMetaDesc: `_${LH} Bottom Right|meta|rot1`,
+         rootMetaDesc: `_${GB} Bottom Right|meta|rot1`,
```

#### 1487. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14633` → after: `L14633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14633) · [Before (L14633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14633)

```diff
-         blockModel: `_${rH} Bottom Right`,
+         blockModel: `_${DB} Bottom Right`,
```

#### 1488. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14641-L14642` → after: `L14641-L14642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14641-L14642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14641-L14642) · [Before (L14641-L14642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14641-L14642)

```diff
-     const SH = `_${HH} Back`,
-       hH = `_${HH} Dish`,
+     const QB = `_${BB} Back`,
+       oB = `_${BB} Dish`,
```

#### 1489. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14649` → after: `L14649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14649) · [Before (L14649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14649)

```diff
-           translationKey: `item:${dA(HH)}`
+           translationKey: `item:${bY(BB)}`
```

#### 1490. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14657` → after: `L14657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14657) · [Before (L14657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14657)

```diff
-         rootMetaDesc: `${HH}|meta|rot1`
+         rootMetaDesc: `${BB}|meta|rot1`
```

#### 1491. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14670` → after: `L14670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14670) · [Before (L14670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14670)

```diff
-         rootMetaDesc: `${SH}|meta|rot1`
+         rootMetaDesc: `${QB}|meta|rot1`
```

#### 1492. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14677` → after: `L14677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14677) · [Before (L14677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14677)

```diff
-         rootMetaDesc: `${hH}|meta|rot1`,
+         rootMetaDesc: `${oB}|meta|rot1`,
```

#### 1493. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14719` → after: `L14719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14719) · [Before (L14719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14719)

```diff
-         rootMetaDesc: `${zH}|meta|rot1`,
+         rootMetaDesc: `${yB}|meta|rot1`,
```

#### 1494. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14771` → after: `L14771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14771) · [Before (L14771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14771)

```diff
-     return `_${Jr} ${LH} L${BH}`
+     return `_${vD} ${GB} L${OB}`
```

#### 1495. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14775` → after: `L14775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14775) · [Before (L14775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14775)

```diff
-     return 1 === HH ? Jr : `${Jr} S${HH}`
+     return 1 === BB ? vD : `${vD} S${BB}`
```

#### 1496. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14781` → after: `L14781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14781) · [Before (L14781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14781)

```diff
-         translationKey: `item:small${HH.replaceAll(" ","")}Pod`
+         translationKey: `item:small${BB.replaceAll(" ","")}Pod`
```

#### 1497. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14784` → after: `L14784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14784) · [Before (L14784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14784)

```diff
-       itemTexture: `small_pod_${aA(HH)}_icon`,
+       itemTexture: `small_pod_${CY(BB)}_icon`,
```

#### 1498. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14795` → after: `L14795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14795) · [Before (L14795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14795)

```diff
-       [`Small ${HH} Pod`]: {
+       [`Small ${BB} Pod`]: {
```

#### 1499. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14797` → after: `L14797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14797) · [Before (L14797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14797)

```diff
-         blockModel: `Small ${HH} Pod`
+         blockModel: `Small ${BB} Pod`
```

#### 1500. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14799` → after: `L14799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14799) · [Before (L14799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14799)

```diff
-       [`_Small ${HH} Pod Mid`]: {
+       [`_Small ${BB} Pod Mid`]: {
```

#### 1501. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14801` → after: `L14801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14801) · [Before (L14801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14801)

```diff
-         blockModel: `_Small ${HH} Pod Mid`
+         blockModel: `_Small ${BB} Pod Mid`
```

#### 1502. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14803` → after: `L14803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14803) · [Before (L14803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14803)

```diff
-       [`_Small ${HH} Pod Top`]: {
+       [`_Small ${BB} Pod Top`]: {
```

#### 1503. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14805` → after: `L14805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14805) · [Before (L14805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14805)

```diff
-         blockModel: `_Small ${HH} Pod Top`
+         blockModel: `_Small ${BB} Pod Top`
```

#### 1504. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14828` → after: `L14828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14828) · [Before (L14828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14828)

```diff
-     console.assert("meta|rot1|bot" === BH.rootMetaDesc.split("|").slice(1).join("|"), `${HH} root block .rootMetaDesc must be |meta|rot1|bot`), console.assert("string" === typeof BH.blockModel, `${HH} root block .blockModel must be a string`);
+     console.assert("meta|rot1|bot" === OB.rootMetaDesc.split("|").slice(1).join("|"), `${BB} root block .rootMetaDesc must be |meta|rot1|bot`), console.assert("string" === typeof OB.blockModel, `${BB} root block .blockModel must be a string`);
```

#### 1505. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14846` → after: `L14846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14846) · [Before (L14846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14846)

```diff
-         yRotOffset: Math.PI + (null !== SH && void 0 !== SH ? SH : 0),
+         yRotOffset: Math.PI + (null !== QB && void 0 !== QB ? QB : 0),
```

#### 1506. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14855` → after: `L14855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14855) · [Before (L14855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14855)

```diff
-         [`${HH}|meta|rot1|top`]: {
+         [`${BB}|meta|rot1|top`]: {
```

#### 1507. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14859` → after: `L14859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14859) · [Before (L14859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14859)

```diff
-       [`${HH}|meta|rot1|side`]: {
+       [`${BB}|meta|rot1|side`]: {
```

#### 1508. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14862` → after: `L14862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14862) · [Before (L14862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14862)

```diff
-       [`${HH}|meta|rot2|side`]: {
+       [`${BB}|meta|rot2|side`]: {
```

#### 1509. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14865` → after: `L14865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14865) · [Before (L14865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14865)

```diff
-       [`${HH}|meta|rot3|side`]: {
+       [`${BB}|meta|rot3|side`]: {
```

#### 1510. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14868` → after: `L14868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14868) · [Before (L14868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14868)

```diff
-       [`${HH}|meta|rot4|side`]: {
+       [`${BB}|meta|rot4|side`]: {
```

#### 1511. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14974` → after: `L14974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14974) · [Before (L14974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14974)

```diff
-       animTextures: [0, 1, 2, 3].map((BH => `${HH}_running${BH}`)),
+       animTextures: [0, 1, 2, 3].map((OB => `${BB}_running${OB}`)),
```

#### 1512. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14982-L14983` → after: `L14982-L14983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14982-L14983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14982-L14983) · [Before (L14982-L14983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14982-L14983)

```diff
-     const SH = LH ? xS(`${HH}_side`) : `${HH}_side`,
-       hH = null !== (AH = BH.underside) && void 0 !== AH ? AH : "machine_side";
+     const QB = GB ? RQ(`${BB}_side`) : `${BB}_side`,
+       oB = null !== (YB = OB.underside) && void 0 !== YB ? YB : "machine_side";
```

#### 1513. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14985` → after: `L14985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14985) · [Before (L14985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14985)

```diff
-       textureInfo: [SH, `${HH}_top`, hH],
+       textureInfo: [QB, `${BB}_top`, oB],
```

#### 1514. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14988-L14990` → after: `L14988-L14990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14988-L14990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14988-L14990) · [Before (L14988-L14990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14988-L14990)

```diff
-     const tH = LH && BH.backRuns ? xS(`${HH}_back`) : `${HH}_back`,
-       zH = [1, 2, 3, 4].map((BH => `${HH}_top[rot[${BH}`)),
-       CH = [null !== (rH = BH.front) && void 0 !== rH ? rH : `${HH}_front`, SH, ...zH, hH, tH];
+     const jB = GB && OB.backRuns ? RQ(`${BB}_back`) : `${BB}_back`,
+       yB = [1, 2, 3, 4].map((OB => `${BB}_top[rot[${OB}`)),
+       JB = [null !== (DB = OB.front) && void 0 !== DB ? DB : `${BB}_front`, QB, ...yB, oB, jB];
```

#### 1515. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14992` → after: `L14992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L14992) · [Before (L14992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L14992)

```diff
-       const BH = LH ? xS(`${HH}_side_flip`) : `${HH}_side_flip`;
+       const OB = GB ? RQ(`${BB}_side_flip`) : `${BB}_side_flip`;
```

#### 1516. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15007` → after: `L15007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15007) · [Before (L15007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15007)

```diff
-         translationKey: `item:${HH}`
+         translationKey: `item:${BB}`
```

#### 1517. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15010` → after: `L15010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15010) · [Before (L15010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15010)

```diff
-         translationKey: `item:${HH}Description`
+         translationKey: `item:${BB}Description`
```

#### 1518. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15029` → after: `L15029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15029) · [Before (L15029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15029)

```diff
-       rootMetaDesc: `${HH}|meta|rot1`
+       rootMetaDesc: `${BB}|meta|rot1`
```

#### 1519. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15040` → after: `L15040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15040) · [Before (L15040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15040)

```diff
-       tH[`${HH}|meta|rot${rH+1}|Running`] = {
+       jB[`${BB}|meta|rot${DB+1}|Running`] = {
```

#### 1520. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15043` → after: `L15043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15043) · [Before (L15043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15043)

```diff
-         Uu: AH
+         dp: YB
```

#### 1521. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15056` → after: `L15056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15056) · [Before (L15056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15056)

```diff
-     return null !== LH ? `${HH}|meta|rot${BH}|${LH}` : 1 === BH ? HH : `${HH}|meta|rot${BH}`
+     return null !== GB ? `${BB}|meta|rot${OB}|${GB}` : 1 === OB ? BB : `${BB}|meta|rot${OB}`
```

#### 1522. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15058` → after: `L15058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15058) · [Before (L15058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15058)

```diff
-   SL.D, SL.D;
+   QG.E, QG.E;
```

#### 1523. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15070` → after: `L15070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15070) · [Before (L15070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15070)

```diff
-         translationKey: `item:${HH}`
+         translationKey: `item:${BB}`
```

#### 1524. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15073` → after: `L15073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15073) · [Before (L15073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15073)

```diff
-         translationKey: `item:${HH}Description`
+         translationKey: `item:${BB}Description`
```

#### 1525. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15081` → after: `L15081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15081) · [Before (L15081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15081)

```diff
-       hW: mS,
+       MZ: dQ,
```

#### 1526. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15097` → after: `L15097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15097) · [Before (L15097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15097)

```diff
-       rootMetaDesc: `${HH}|meta|rot1`
+       rootMetaDesc: `${BB}|meta|rot1`
```

#### 1527. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15099` → after: `L15099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15099) · [Before (L15099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15099)

```diff
-     for (let hH = 1; hH <= 4; hH++) SH[1 === hH ? HH : `${HH}|meta|rot${hH}`].surfaceVelocity = IS(hH, rH);
+     for (let oB = 1; oB <= 4; oB++) QB[1 === oB ? BB : `${BB}|meta|rot${oB}`].surfaceVelocity = uQ(oB, DB);
```

#### 1528. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15107` → after: `L15107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15107) · [Before (L15107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15107)

```diff
-       const tH = `${LH}_${"turnLeft"===hH?"turn_left":"turn_right"}`;
+       const jB = `${GB}_${"turnLeft"===oB?"turn_left":"turn_right"}`;
```

#### 1529. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15122` → after: `L15122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15122) · [Before (L15122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15122)

```diff
-           translationKey: `item:${BH}`
+           translationKey: `item:${OB}`
```

#### 1530. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15125` → after: `L15125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15125) · [Before (L15125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15125)

```diff
-           translationKey: `item:${BH}Description`
+           translationKey: `item:${OB}Description`
```

#### 1531. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15128` → after: `L15128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15128) · [Before (L15128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15128)

```diff
-         textureInfo: ["belt_tunnel_mouth", "belt_tunnel_side", ...[1, 2, 3, 4].map((BH => `${HH}[rot[${BH}`)), "conveyor_belt_bottom", "belt_tunnel_back"],
+         textureInfo: ["belt_tunnel_mouth", "belt_tunnel_side", ...[1, 2, 3, 4].map((OB => `${BB}[rot[${OB}`)), "conveyor_belt_bottom", "belt_tunnel_back"],
```

#### 1532. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15135` → after: `L15135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15135) · [Before (L15135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15135)

```diff
-         rootMetaDesc: `${HH}|meta|rot1`
+         rootMetaDesc: `${BB}|meta|rot1`
```

#### 1533. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15138` → after: `L15138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15138) · [Before (L15138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15138)

```diff
-       AH[`${HH}|meta|rot${rH+1}|exit`] = {
+       YB[`${BB}|meta|rot${DB+1}|exit`] = {
```

#### 1534. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15148` → after: `L15148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15148) · [Before (L15148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15148)

```diff
-         translationKey: `item:${BH}`
+         translationKey: `item:${OB}`
```

#### 1535. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15151` → after: `L15151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15151) · [Before (L15151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15151)

```diff
-         translationKey: `item:${BH}Description`
+         translationKey: `item:${OB}Description`
```

#### 1536. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15154` → after: `L15154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15154) · [Before (L15154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15154)

```diff
-       textureInfo: [`${LH}_top`, `${LH}_side`, "conveyor_belt_bottom"],
+       textureInfo: [`${GB}_top`, `${GB}_side`, "conveyor_belt_bottom"],
```

#### 1537. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15179` → after: `L15179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15179) · [Before (L15179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15179)

```diff
-       Uu: LH,
+       dp: GB,
```

#### 1538. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15187` → after: `L15187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15187) · [Before (L15187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15187)

```diff
-         translationKey: `item:${BH}`
+         translationKey: `item:${OB}`
```

#### 1539. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15190` → after: `L15190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15190) · [Before (L15190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15190)

```diff
-         translationKey: `item:${BH}Description`
+         translationKey: `item:${OB}Description`
```

#### 1540. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15193` → after: `L15193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15193) · [Before (L15193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15193)

```diff
-       textureInfo: [`${LH}_side`, `${LH}_top`],
+       textureInfo: [`${GB}_side`, `${GB}_top`],
```

#### 1541. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15207` → after: `L15207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15207) · [Before (L15207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15207)

```diff
-         translationKey: `item:${BH}`
+         translationKey: `item:${OB}`
```

#### 1542. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15210` → after: `L15210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15210) · [Before (L15210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15210)

```diff
-         translationKey: `item:${BH}Description`
+         translationKey: `item:${OB}Description`
```

#### 1543. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15213` → after: `L15213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15213) · [Before (L15213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15213)

```diff
-       textureInfo: [`${LH}_top`, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : `${LH}_side`],
+       textureInfo: [`${GB}_top`, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : `${GB}_side`],
```

#### 1544. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15228` → after: `L15228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15228) · [Before (L15228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15228)

```diff
-         translationKey: `item:${BH}`
+         translationKey: `item:${OB}`
```

#### 1545. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15231` → after: `L15231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15231) · [Before (L15231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15231)

```diff
-         translationKey: `item:${BH}Description`
+         translationKey: `item:${OB}Description`
```

#### 1546. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15240` → after: `L15240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15240) · [Before (L15240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15240)

```diff
-         Uu: AH
+         dp: YB
```

#### 1547. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15255` → after: `L15255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15255) · [Before (L15255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15255)

```diff
-       underside: `${HH}_bottom`,
+       underside: `${BB}_bottom`,
```

#### 1548. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15265-L15266` → after: `L15265-L15266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15265-L15266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15265-L15266) · [Before (L15265-L15266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15265-L15266)

```diff
-     const AH = "cryo" === HH ? wS : DS;
-     return LH || 0 !== BH ? `${AH}|meta|conn|${sS(BH)}${LH?"|Full":""}` : AH
+     const YB = "cryo" === BB ? eQ : aQ;
+     return GB || 0 !== OB ? `${YB}|meta|conn|${HQ(OB)}${GB?"|Full":""}` : YB
```

#### 1549. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15271` → after: `L15271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15271) · [Before (L15271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15271)

```diff
-     return 0 === HH ? dS : `${dS}|meta|rot1|Fill${HH}`
+     return 0 === BB ? bQ : `${bQ}|meta|rot1|Fill${BB}`
```

#### 1550. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15282` → after: `L15282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15282) · [Before (L15282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15282)

```diff
-           translationKey: `item:${LH}`
+           translationKey: `item:${GB}`
```

#### 1551. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15302` → after: `L15302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15302) · [Before (L15302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15302)

```diff
-         blockModel: `${AH}_${sS(tH)}`,
+         blockModel: `${YB}_${HQ(jB)}`,
```

#### 1552. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15304` → after: `L15304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15304) · [Before (L15304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15304)

```diff
-           rootMetaDesc: `${LH}|meta|conn|none`
+           rootMetaDesc: `${GB}|meta|conn|none`
```

#### 1553. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15326` → after: `L15326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15326) · [Before (L15326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15326)

```diff
-       const LH = rh(`fluid_tank_fill${BH}`, 4, "_", 300),
+       const GB = Do(`fluid_tank_fill${OB}`, 4, "_", 300),
```

#### 1554. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15370` → after: `L15370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15370) · [Before (L15370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15370)

```diff
-       }, ((BH, AH) => `${HH}${LH}${AH}`)),
+       }, ((OB, YB) => `${BB}${GB}${YB}`)),
```

#### 1555. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15376` → after: `L15376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15376) · [Before (L15376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15376)

```diff
-     return [`${HH}0`, rh(HH, BH, "")]
+     return [`${BB}0`, Do(BB, OB, "")]
```

#### 1556. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15380` → after: `L15380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15380) · [Before (L15380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15380)

```diff
-     return [1, 2, 3, 4].map((BH => `${HH}[rot[${BH}`))
+     return [1, 2, 3, 4].map((OB => `${BB}[rot[${OB}`))
```

#### 1557. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15386` → after: `L15386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15386) · [Before (L15386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15386)

```diff
-         translationKey: `item:${HH}`
+         translationKey: `item:${BB}`
```

#### 1558. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15389` → after: `L15389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15389) · [Before (L15389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15389)

```diff
-         translationKey: `item:${HH}Description`
+         translationKey: `item:${BB}Description`
```

#### 1559. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15418` → after: `L15418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15418) · [Before (L15418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15418)

```diff
-       [`${HH}|meta|rot1|${LH}`]: {
+       [`${BB}|meta|rot1|${GB}`]: {
```

#### 1560. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15428` → after: `L15428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15428) · [Before (L15428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15428)

```diff
-       rootMetaDesc: `${HH}|meta|rot1`
+       rootMetaDesc: `${BB}|meta|rot1`
```

#### 1561. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15435` → after: `L15435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15435) · [Before (L15435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15435)

```diff
-       rH[`${HH}|meta|rot${SH+1}|${BH}`] = {
+       DB[`${BB}|meta|rot${QB+1}|${OB}`] = {
```

#### 1562. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15444` → after: `L15444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15444) · [Before (L15444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15444)

```diff
-     for (let SH = 1; SH <= 4; SH++) rH[`${HH}|meta|rot${SH}|${LH}`] = {
+     for (let QB = 1; QB <= 4; QB++) DB[`${BB}|meta|rot${QB}|${GB}`] = {
```

#### 1563. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15459` → after: `L15459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15459) · [Before (L15459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15459)

```diff
-           Uu: BH
+           dp: OB
```

#### 1564. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15465` → after: `L15465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15465) · [Before (L15465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15465)

```diff
-         animTextures: [`${SH.texture}0`, `${SH.texture}1`],
+         animTextures: [`${QB.texture}0`, `${QB.texture}1`],
```

#### 1565. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15483` → after: `L15483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15483) · [Before (L15483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15483)

```diff
-         Uu: CS
+         dp: JQ
```

#### 1566. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15542` → after: `L15542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15542) · [Before (L15542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15542)

```diff
-       Uu: [8, 3, 8]
+       dp: [8, 3, 8]
```

#### 1567. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15550` → after: `L15550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15550) · [Before (L15550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15550)

```diff
-       Uu: [2, 6, 3]
+       dp: [2, 6, 3]
```

#### 1568. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15559` → after: `L15559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15559) · [Before (L15559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15559)

```diff
-       Uu: [6, 10, 2]
+       dp: [6, 10, 2]
```

#### 1569. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15564` → after: `L15564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15564) · [Before (L15564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15564)

```diff
-     return th(HH, [`${BH}_side`, `${BH}_top`], {
+     return jo(BB, [`${OB}_side`, `${OB}_top`], {
```

#### 1570. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15590` → after: `L15590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15590) · [Before (L15590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15590)

```diff
-     return `${HH}|Flow${BH}`
+     return `${BB}|Flow${OB}`
```

#### 1571. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15594` → after: `L15594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15594) · [Before (L15594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15594)

```diff
-     return `${HH}|Falling`
+     return `${BB}|Falling`
```

#### 1572. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15605` → after: `L15605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15605) · [Before (L15605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15605)

```diff
-       UY: !0,
+       fl: !0,
```

#### 1573. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15609` → after: `L15609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15609) · [Before (L15609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15609)

```diff
-         Uu: [14, 8, 2]
+         dp: [14, 8, 2]
```

#### 1574. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15618-L15619` → after: `L15618-L15619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15618-L15619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15618-L15619) · [Before (L15618-L15619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15618-L15619)

```diff
-     if (BH.slice(AH.length) !== rH) throw new Error(`${HH} and ${BH}: an animation's frames must share a rotation to bake between them`);
-     return `${LH}~${AH}~50${rH}`
+     if (OB.slice(YB.length) !== DB) throw new Error(`${BB} and ${OB}: an animation's frames must share a rotation to bake between them`);
+     return `${GB}~${YB}~50${DB}`
```

#### 1575. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15625` → after: `L15625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15625) · [Before (L15625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15625)

```diff
-     const LH = null !== (BH = HH.animationInterval) && void 0 !== BH ? BH : 200,
+     const GB = null !== (OB = BB.animationInterval) && void 0 !== OB ? OB : 200,
```

#### 1576. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15851` → after: `L15851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15851) · [Before (L15851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15851)

```diff
-       block: "Maple" === HH ? "Showcase" : `${HH} Item Pedestal`
+       block: "Maple" === BB ? "Showcase" : `${BB} Item Pedestal`
```

#### 1577. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15878` → after: `L15878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R15878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L15878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L15878) · [Before (L15878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L15878)

```diff
-     Uu: [14, 8, 11],
+     dp: [14, 8, 11],
```

#### 1578. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L16209` → after: `L16209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R16209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L16209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L16209) · [Before (L16209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L16209)

```diff
-         translationKey: `item:${dA(HH)}ConcreteStairs`
+         translationKey: `item:${bY(BB)}ConcreteStairs`
```

#### 1579. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L16212` → after: `L16212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R16212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L16212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L16212) · [Before (L16212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L16212)

```diff
-       textureInfo: `${aA(HH)}_concrete`,
+       textureInfo: `${CY(BB)}_concrete`,
```

#### 1580. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L16216` → after: `L16216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R16216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L16216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L16216) · [Before (L16216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L16216)

```diff
-         colour: `$t(colour:${aA(HH)})`
+         colour: `$t(colour:${CY(BB)})`
```

#### 1581. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L16228` → after: `L16228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R16228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L16228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L16228) · [Before (L16228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L16228)

```diff
-         textureInfo: `chalk_${aA(HH)}`,
+         textureInfo: `chalk_${CY(BB)}`,
```

#### 1582. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L16233` → after: `L16233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R16233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L16233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L16233) · [Before (L16233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L16233)

```diff
-         colour: `$t(colour:${aA(HH)})`
+         colour: `$t(colour:${CY(BB)})`
```

#### 1583. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L16245` → after: `L16245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R16245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L16245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L16245) · [Before (L16245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L16245)

```diff
-         textureInfo: `chalk_bricks_${aA(HH)}`,
+         textureInfo: `chalk_bricks_${CY(BB)}`,
```

#### 1584. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L16633` → after: `L16633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R16633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L16633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L16633) · [Before (L16633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L16633)

```diff
-         Uu: [4, 4, 0]
+         dp: [4, 4, 0]
```

#### 1585. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L16643` → after: `L16643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R16643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L16643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L16643) · [Before (L16643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L16643)

```diff
-         Uu: [0, 0, 2]
+         dp: [0, 0, 2]
```

#### 1586. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L16653` → after: `L16653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R16653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L16653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L16653) · [Before (L16653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L16653)

```diff
-         Uu: [1, 3, 1]
+         dp: [1, 3, 1]
```

#### 1587. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L16675` → after: `L16675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R16675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L16675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L16675) · [Before (L16675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L16675)

```diff
-         Uu: [2, 5, 5]
+         dp: [2, 5, 5]
```

#### 1588. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L17209` → after: `L17209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R17209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L17209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L17209) · [Before (L17209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L17209)

```diff
-         Uu: [14, 10, 4]
+         dp: [14, 10, 4]
```

#### 1589. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L17455` → after: `L17455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R17455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L17455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L17455) · [Before (L17455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L17455)

```diff
-         Uu: [14, 14, 14]
+         dp: [14, 14, 14]
```

#### 1590. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L17467` → after: `L17467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R17467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L17467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L17467) · [Before (L17467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L17467)

```diff
-         UY: !0,
+         fl: !0,
```

#### 1591. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L17607` → after: `L17607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R17607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L17607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L17607) · [Before (L17607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L17607)

```diff
-         Uu: [5, 14, 14]
+         dp: [5, 14, 14]
```

#### 1592. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L17620` → after: `L17620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R17620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L17620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L17620) · [Before (L17620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L17620)

```diff
-         Uu: [15, 15, 13]
+         dp: [15, 15, 13]
```

#### 1593. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L17844` → after: `L17844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R17844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L17844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L17844) · [Before (L17844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L17844)

```diff
-         Uu: [8, 5, 2],
+         dp: [8, 5, 2],
```

#### 1594. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L19383` → after: `L19383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R19383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L19383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L19383) · [Before (L19383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L19383)

```diff
-         Uu: [6, 6, 6]
+         dp: [6, 6, 6]
```

#### 1595. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L19417` → after: `L19417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R19417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L19417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L19417) · [Before (L19417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L19417)

```diff
-         Uu: [9, 3, 1]
+         dp: [9, 3, 1]
```

#### 1596. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L21508` → after: `L21508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R21508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L21508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L21508) · [Before (L21508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L21508)

```diff
-         Uu: [14, 10, 4]
+         dp: [14, 10, 4]
```

#### 1597. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L21914` → after: `L21914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R21914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L21914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L21914) · [Before (L21914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L21914)

```diff
-         hW: ih,
+         MZ: to,
```

#### 1598. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L21931` → after: `L21931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R21931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L21931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L21931) · [Before (L21931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L21931)

```diff
-         hW: ih,
+         MZ: to,
```

#### 1599. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L21948` → after: `L21948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R21948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L21948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L21948) · [Before (L21948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L21948)

```diff
-         hW: ih,
+         MZ: to,
```

#### 1600. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L21965` → after: `L21965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R21965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L21965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L21965) · [Before (L21965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L21965)

```diff
-         hW: ih,
+         MZ: to,
```

#### 1601. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L21982` → after: `L21982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R21982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L21982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L21982) · [Before (L21982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L21982)

```diff
-         hW: ih,
+         MZ: to,
```

#### 1602. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L21999` → after: `L21999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R21999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L21999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L21999) · [Before (L21999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L21999)

```diff
-         hW: ih,
+         MZ: to,
```

#### 1603. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22016` → after: `L22016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22016) · [Before (L22016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22016)

```diff
-         hW: ih,
+         MZ: to,
```

#### 1604. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22033` → after: `L22033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22033) · [Before (L22033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22033)

```diff
-         hW: ih,
+         MZ: to,
```

#### 1605. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22050` → after: `L22050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22050) · [Before (L22050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22050)

```diff
-         hW: ih,
+         MZ: to,
```

#### 1606. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22067` → after: `L22067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22067) · [Before (L22067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22067)

```diff
-         hW: ih,
+         MZ: to,
```

#### 1607. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22084` → after: `L22084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22084) · [Before (L22084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22084)

```diff
-         hW: ih,
+         MZ: to,
```

#### 1608. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22101` → after: `L22101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22101) · [Before (L22101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22101)

```diff
-         hW: ih,
+         MZ: to,
```

#### 1609. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22118` → after: `L22118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22118) · [Before (L22118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22118)

```diff
-         hW: ih,
+         MZ: to,
```

#### 1610. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22135` → after: `L22135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22135) · [Before (L22135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22135)

```diff
-         hW: ih,
+         MZ: to,
```

#### 1611. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22152` → after: `L22152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22152) · [Before (L22152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22152)

```diff
-         hW: ih,
+         MZ: to,
```

#### 1612. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22169` → after: `L22169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22169) · [Before (L22169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22169)

```diff
-         hW: ih,
+         MZ: to,
```

#### 1613. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22209` → after: `L22209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22209) · [Before (L22209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22209)

```diff
-           [`${HH}|meta|rot2|books6`]: {
+           [`${BB}|meta|rot2|books6`]: {
```

#### 1614. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22212` → after: `L22212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22212) · [Before (L22212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22212)

```diff
-           [`${HH}|meta|rot3|books6`]: {
+           [`${BB}|meta|rot3|books6`]: {
```

#### 1615. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22215` → after: `L22215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22215) · [Before (L22215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22215)

```diff
-           [`${HH}|meta|rot4|books6`]: {
+           [`${BB}|meta|rot4|books6`]: {
```

#### 1616. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22218` → after: `L22218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22218) · [Before (L22218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22218)

```diff
-           [`Empty ${HH}`]: Object.assign({
+           [`Empty ${BB}`]: Object.assign({
```

#### 1617. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22225` → after: `L22225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22225) · [Before (L22225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22225)

```diff
-             rootMetaDesc: `Empty ${HH}|meta|rot1|books0`
+             rootMetaDesc: `Empty ${BB}|meta|rot1|books0`
```

#### 1618. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22227` → after: `L22227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22227) · [Before (L22227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22227)

```diff
-           [`Empty ${HH}|meta|rot2|books0`]: Object.assign({
+           [`Empty ${BB}|meta|rot2|books0`]: Object.assign({
```

#### 1619. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22232` → after: `L22232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22232) · [Before (L22232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22232)

```diff
-           [`Empty ${HH}|meta|rot3|books0`]: Object.assign({
+           [`Empty ${BB}|meta|rot3|books0`]: Object.assign({
```

#### 1620. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22237` → after: `L22237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22237) · [Before (L22237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22237)

```diff
-           [`Empty ${HH}|meta|rot4|books0`]: Object.assign({
+           [`Empty ${BB}|meta|rot4|books0`]: Object.assign({
```

#### 1621. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22244` → after: `L22244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22244) · [Before (L22244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22244)

```diff
-           [`${HH}|meta|rot1|books${zH}`]: Object.assign({
+           [`${BB}|meta|rot1|books${yB}`]: Object.assign({
```

#### 1622. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22250` → after: `L22250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22250) · [Before (L22250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22250)

```diff
-           [`${HH}|meta|rot2|books${zH}`]: Object.assign({
+           [`${BB}|meta|rot2|books${yB}`]: Object.assign({
```

#### 1623. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22256` → after: `L22256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22256) · [Before (L22256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22256)

```diff
-           [`${HH}|meta|rot3|books${zH}`]: Object.assign({
+           [`${BB}|meta|rot3|books${yB}`]: Object.assign({
```

#### 1624. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22262` → after: `L22262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22262) · [Before (L22262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22262)

```diff
-           [`${HH}|meta|rot4|books${zH}`]: Object.assign({
+           [`${BB}|meta|rot4|books${yB}`]: Object.assign({
```

#### 1625. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22305` → after: `L22305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22305) · [Before (L22305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22305)

```diff
-           [`${HH}|meta|rot2|empty`]: {
+           [`${BB}|meta|rot2|empty`]: {
```

#### 1626. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22308` → after: `L22308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22308) · [Before (L22308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22308)

```diff
-           [`${HH}|meta|rot3|empty`]: {
+           [`${BB}|meta|rot3|empty`]: {
```

#### 1627. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22311` → after: `L22311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22311) · [Before (L22311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22311)

```diff
-           [`${HH}|meta|rot4|empty`]: {
+           [`${BB}|meta|rot4|empty`]: {
```

#### 1628. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22314` → after: `L22314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22314) · [Before (L22314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22314)

```diff
-           [`${HH}|meta|rot1|full`]: Object.assign({
+           [`${BB}|meta|rot1|full`]: Object.assign({
```

#### 1629. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22319` → after: `L22319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22319) · [Before (L22319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22319)

```diff
-           [`${HH}|meta|rot2|full`]: Object.assign({
+           [`${BB}|meta|rot2|full`]: Object.assign({
```

#### 1630. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22324` → after: `L22324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22324) · [Before (L22324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22324)

```diff
-           [`${HH}|meta|rot3|full`]: Object.assign({
+           [`${BB}|meta|rot3|full`]: Object.assign({
```

#### 1631. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22329` → after: `L22329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22329) · [Before (L22329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22329)

```diff
-           [`${HH}|meta|rot4|full`]: Object.assign({
+           [`${BB}|meta|rot4|full`]: Object.assign({
```

#### 1632. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22598-L22599` → after: `L22598-L22599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22598-L22599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22598-L22599) · [Before (L22598-L22599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22598-L22599)

```diff
-           const LH = `${BH.toLowerCase().split(" ").join("_")}_concrete`;
-           Object.assign(HH, mr(`${BH} Concrete Slab`, {
+           const GB = `${OB.toLowerCase().split(" ").join("_")}_concrete`;
+           Object.assign(BB, dD(`${OB} Concrete Slab`, {
```

#### 1633. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22601` → after: `L22601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22601) · [Before (L22601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22601)

```diff
-               translationKey: `item:${dA(BH)}ConcreteSlab`
+               translationKey: `item:${bY(OB)}ConcreteSlab`
```

#### 1634. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22607-L22608` → after: `L22607-L22608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R22607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L22607-L22608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L22607-L22608) · [Before (L22607-L22608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L22607-L22608)

```diff
-             slabFullBlock: `${BH} Concrete`,
-             rootMetaDesc: `${BH} Concrete Slab|meta|rot1|bot`
+             slabFullBlock: `${OB} Concrete`,
+             rootMetaDesc: `${OB} Concrete Slab|meta|rot1|bot`
```

#### 1635. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23100-L23101` → after: `L23100-L23101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R23100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L23100-L23101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L23100-L23101) · [Before (L23100-L23101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L23100-L23101)

```diff
-       ...LS((HH => `${HH} Paintball Explosive`), {
-         textureInfo: HH => [`explosive_paint_${aA(HH)}_side`, `explosive_paint_${aA(HH)}_top`],
+       ...GQ((BB => `${BB} Paintball Explosive`), {
+         textureInfo: BB => [`explosive_paint_${CY(BB)}_side`, `explosive_paint_${CY(BB)}_top`],
```

#### 1636. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23106-L23107` → after: `L23106-L23107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R23106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L23106-L23107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L23106-L23107) · [Before (L23106-L23107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L23106-L23107)

```diff
-       ...LS((HH => `${HH} Quick Paintball Explosive`), {
-         textureInfo: HH => `explosive_paint_quick_${aA(HH)}`,
+       ...GQ((BB => `${BB} Quick Paintball Explosive`), {
+         textureInfo: BB => `explosive_paint_quick_${CY(BB)}`,
```

#### 1637. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23111-L23112` → after: `L23111-L23112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R23111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L23111-L23112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L23111-L23112) · [Before (L23111-L23112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L23111-L23112)

```diff
-       ...LS((HH => `${HH} Seeking Paintball Explosive`), {
-         textureInfo: HH => `explosive_paint_seeking_${aA(HH)}`,
+       ...GQ((BB => `${BB} Seeking Paintball Explosive`), {
+         textureInfo: BB => `explosive_paint_seeking_${CY(BB)}`,
```

#### 1638. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23116-L23117` → after: `L23116-L23117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R23116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L23116-L23117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L23116-L23117) · [Before (L23116-L23117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L23116-L23117)

```diff
-       ...LS((HH => `${HH} Sticky Paintball Explosive`), {
-         textureInfo: HH => `explosive_paint_sticky_${aA(HH)}`,
+       ...GQ((BB => `${BB} Sticky Paintball Explosive`), {
+         textureInfo: BB => `explosive_paint_sticky_${CY(BB)}`,
```

#### 1639. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23537` → after: `L23537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R23537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L23537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L23537) · [Before (L23537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L23537)

```diff
-         UY: !0,
+         fl: !0,
```

#### 1640. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23540` → after: `L23540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R23540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L23540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L23540) · [Before (L23540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L23540)

```diff
-         Uu: [14, 8, 2]
+         dp: [14, 8, 2]
```

#### 1641. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23798` → after: `L23798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R23798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L23798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L23798) · [Before (L23798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L23798)

```diff
-       ...LS((HH => `Spawn Block (${HH})`), {
+       ...GQ((BB => `Spawn Block (${BB})`), {
```

#### 1642. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23800` → after: `L23800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R23800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L23800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L23800) · [Before (L23800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L23800)

```diff
-           translationKey: `item:${dA(HH)}SpawnBlock`
+           translationKey: `item:${bY(BB)}SpawnBlock`
```

#### 1643. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23803` → after: `L23803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R23803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L23803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L23803) · [Before (L23803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L23803)

```diff
-         textureInfo: HH => [`${aA(HH)}_spawn_block_top[rot[1`, `${aA(HH)}_spawn_block_top[rot[2`, `${aA(HH)}_spawn_block_top[rot[3`, `${aA(HH)}_spawn_block_top[rot[4`, `${aA(HH)}_spawn_block_side`],
+         textureInfo: BB => [`${CY(BB)}_spawn_block_top[rot[1`, `${CY(BB)}_spawn_block_top[rot[2`, `${CY(BB)}_spawn_block_top[rot[3`, `${CY(BB)}_spawn_block_top[rot[4`, `${CY(BB)}_spawn_block_side`],
```

#### 1644. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23806` → after: `L23806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R23806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L23806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L23806) · [Before (L23806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L23806)

```diff
-         rootMetaDesc: HH => `Spawn Block (${HH})|meta|rot1`,
+         rootMetaDesc: BB => `Spawn Block (${BB})|meta|rot1`,
```

#### 1645. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23811` → after: `L23811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R23811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L23811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L23811) · [Before (L23811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L23811)

```diff
-       ...LS((HH => `Spawn Block (${HH})|meta|rot2`), {
+       ...GQ((BB => `Spawn Block (${BB})|meta|rot2`), {
```

#### 1646. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23813` → after: `L23813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R23813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L23813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L23813) · [Before (L23813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L23813)

```diff
-         textureInfo: HH => [`${aA(HH)}_spawn_block_top[rot[1`, `${aA(HH)}_spawn_block_top[rot[2`, `${aA(HH)}_spawn_block_top[rot[3`, `${aA(HH)}_spawn_block_top[rot[4`, `${aA(HH)}_spawn_block_side`],
+         textureInfo: BB => [`${CY(BB)}_spawn_block_top[rot[1`, `${CY(BB)}_spawn_block_top[rot[2`, `${CY(BB)}_spawn_block_top[rot[3`, `${CY(BB)}_spawn_block_top[rot[4`, `${CY(BB)}_spawn_block_side`],
```

#### 1647. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23817` → after: `L23817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R23817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L23817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L23817) · [Before (L23817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L23817)

```diff
-       ...LS((HH => `Spawn Block (${HH})|meta|rot3`), {
+       ...GQ((BB => `Spawn Block (${BB})|meta|rot3`), {
```

#### 1648. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23819` → after: `L23819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R23819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L23819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L23819) · [Before (L23819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L23819)

```diff
-         textureInfo: HH => [`${aA(HH)}_spawn_block_top[rot[1`, `${aA(HH)}_spawn_block_top[rot[2`, `${aA(HH)}_spawn_block_top[rot[3`, `${aA(HH)}_spawn_block_top[rot[4`, `${aA(HH)}_spawn_block_side`],
+         textureInfo: BB => [`${CY(BB)}_spawn_block_top[rot[1`, `${CY(BB)}_spawn_block_top[rot[2`, `${CY(BB)}_spawn_block_top[rot[3`, `${CY(BB)}_spawn_block_top[rot[4`, `${CY(BB)}_spawn_block_side`],
```

#### 1649. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23823` → after: `L23823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R23823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L23823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L23823) · [Before (L23823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L23823)

```diff
-       ...LS((HH => `Spawn Block (${HH})|meta|rot4`), {
+       ...GQ((BB => `Spawn Block (${BB})|meta|rot4`), {
```

#### 1650. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23825` → after: `L23825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R23825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L23825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L23825) · [Before (L23825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L23825)

```diff
-         textureInfo: HH => [`${aA(HH)}_spawn_block_top[rot[1`, `${aA(HH)}_spawn_block_top[rot[2`, `${aA(HH)}_spawn_block_top[rot[3`, `${aA(HH)}_spawn_block_top[rot[4`, `${aA(HH)}_spawn_block_side`],
+         textureInfo: BB => [`${CY(BB)}_spawn_block_top[rot[1`, `${CY(BB)}_spawn_block_top[rot[2`, `${CY(BB)}_spawn_block_top[rot[3`, `${CY(BB)}_spawn_block_top[rot[4`, `${CY(BB)}_spawn_block_side`],
```

#### 1651. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23863` → after: `L23863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R23863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L23863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L23863) · [Before (L23863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L23863)

```diff
-       ...LS((HH => `Generator Spawn Block (${HH})`), {
+       ...GQ((BB => `Generator Spawn Block (${BB})`), {
```

#### 1652. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23865` → after: `L23865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R23865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L23865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L23865) · [Before (L23865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L23865)

```diff
-           translationKey: `item:${dA(HH)}GeneratorSpawnBlock`
+           translationKey: `item:${bY(BB)}GeneratorSpawnBlock`
```

#### 1653. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23868` → after: `L23868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R23868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L23868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L23868) · [Before (L23868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L23868)

```diff
-         textureInfo: HH => [`${aA(HH)}_gen_spawn_top`, `${aA(HH)}_gen_spawn_coal`, `${aA(HH)}_gen_spawn_iron`],
+         textureInfo: BB => [`${CY(BB)}_gen_spawn_top`, `${CY(BB)}_gen_spawn_coal`, `${CY(BB)}_gen_spawn_iron`],
```

#### 1654. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24353` → after: `L24353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R24353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L24353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L24353) · [Before (L24353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L24353)

```diff
-         Uu: [2, 0, 2]
+         dp: [2, 0, 2]
```

#### 1655. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24369` → after: `L24369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R24369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L24369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L24369) · [Before (L24369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L24369)

```diff
-         Uu: [4, 0, 4]
+         dp: [4, 0, 4]
```

#### 1656. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24385` → after: `L24385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R24385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L24385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L24385) · [Before (L24385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L24385)

```diff
-         Uu: [6, 0, 6]
+         dp: [6, 0, 6]
```

#### 1657. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24401` → after: `L24401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R24401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L24401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L24401) · [Before (L24401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L24401)

```diff
-         Uu: [8, 0, 8]
+         dp: [8, 0, 8]
```

#### 1658. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24417` → after: `L24417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R24417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L24417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L24417) · [Before (L24417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L24417)

```diff
-         Uu: [10, 0, 10]
+         dp: [10, 0, 10]
```

#### 1659. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24532` → after: `L24532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R24532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L24532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L24532) · [Before (L24532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L24532)

```diff
-         Uu: [7, 7, 2]
+         dp: [7, 7, 2]
```

#### 1660. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24558` → after: `L24558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R24558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L24558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L24558) · [Before (L24558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L24558)

```diff
-       ...LS((HH => `${HH} Chalk`), {
+       ...GQ((BB => `${BB} Chalk`), {
```

#### 1661. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24562` → after: `L24562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R24562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L24562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L24562) · [Before (L24562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L24562)

```diff
-             colour: `$t(colour:${aA(HH)})`
+             colour: `$t(colour:${CY(BB)})`
```

#### 1662. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24568` → after: `L24568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R24568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L24568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L24568) · [Before (L24568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L24568)

```diff
-             colour: `$t(colour:${aA(HH)})`
+             colour: `$t(colour:${CY(BB)})`
```

#### 1663. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24572` → after: `L24572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R24572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L24572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L24572) · [Before (L24572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L24572)

```diff
-         textureInfo: HH => `chalk_${aA(HH)}`,
+         textureInfo: BB => `chalk_${CY(BB)}`,
```

#### 1664. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24575` → after: `L24575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R24575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L24575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L24575) · [Before (L24575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L24575)

```diff
-       ...LS((HH => `${HH} Chalk Bricks`), {
+       ...GQ((BB => `${BB} Chalk Bricks`), {
```

#### 1665. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24579` → after: `L24579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R24579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L24579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L24579) · [Before (L24579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L24579)

```diff
-             colour: `$t(colour:${aA(HH)})`
+             colour: `$t(colour:${CY(BB)})`
```

#### 1666. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24585` → after: `L24585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R24585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L24585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L24585) · [Before (L24585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L24585)

```diff
-             colour: `$t(colour:${aA(HH)})`
+             colour: `$t(colour:${CY(BB)})`
```

#### 1667. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24589` → after: `L24589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R24589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L24589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L24589) · [Before (L24589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L24589)

```diff
-         textureInfo: HH => `chalk_bricks_${aA(HH)}`,
+         textureInfo: BB => `chalk_bricks_${CY(BB)}`,
```

#### 1668. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25130` → after: `L25130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R25130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L25130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L25130) · [Before (L25130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L25130)

```diff
-         Uu: rS("Black")
+         dp: DQ("Black")
```

#### 1669. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25144` → after: `L25144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R25144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L25144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L25144) · [Before (L25144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L25144)

```diff
-         Uu: rS("Blue")
+         dp: DQ("Blue")
```

#### 1670. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25158` → after: `L25158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R25158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L25158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L25158) · [Before (L25158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L25158)

```diff
-         Uu: rS("Brown")
+         dp: DQ("Brown")
```

#### 1671. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25172` → after: `L25172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R25172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L25172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L25172) · [Before (L25172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L25172)

```diff
-         Uu: rS("Cyan")
+         dp: DQ("Cyan")
```

#### 1672. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25186` → after: `L25186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R25186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L25186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L25186) · [Before (L25186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L25186)

```diff
-         Uu: rS("Gray")
+         dp: DQ("Gray")
```

#### 1673. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25200` → after: `L25200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R25200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L25200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L25200) · [Before (L25200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L25200)

```diff
-         Uu: rS("Green")
+         dp: DQ("Green")
```

#### 1674. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25214` → after: `L25214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R25214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L25214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L25214) · [Before (L25214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L25214)

```diff
-         Uu: rS("Grey")
+         dp: DQ("Grey")
```

#### 1675. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25228` → after: `L25228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R25228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L25228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L25228) · [Before (L25228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L25228)

```diff
-         Uu: rS("Light Blue")
+         dp: DQ("Light Blue")
```

#### 1676. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25242` → after: `L25242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R25242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L25242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L25242) · [Before (L25242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L25242)

```diff
-         Uu: rS("Light Gray")
+         dp: DQ("Light Gray")
```

#### 1677. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25256` → after: `L25256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R25256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L25256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L25256) · [Before (L25256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L25256)

```diff
-         Uu: rS("Lime")
+         dp: DQ("Lime")
```

#### 1678. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25270` → after: `L25270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R25270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L25270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L25270) · [Before (L25270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L25270)

```diff
-         Uu: rS("Magenta")
+         dp: DQ("Magenta")
```

#### 1679. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25284` → after: `L25284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R25284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L25284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L25284) · [Before (L25284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L25284)

```diff
-         Uu: rS("Orange")
+         dp: DQ("Orange")
```

#### 1680. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25298` → after: `L25298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R25298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L25298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L25298) · [Before (L25298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L25298)

```diff
-         Uu: rS("Pink")
+         dp: DQ("Pink")
```

#### 1681. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25312` → after: `L25312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R25312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L25312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L25312) · [Before (L25312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L25312)

```diff
-         Uu: rS("Purple")
+         dp: DQ("Purple")
```

#### 1682. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25326` → after: `L25326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R25326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L25326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L25326) · [Before (L25326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L25326)

```diff
-         Uu: rS("Red")
+         dp: DQ("Red")
```

#### 1683. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25340` → after: `L25340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R25340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L25340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L25340) · [Before (L25340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L25340)

```diff
-         Uu: rS("White")
+         dp: DQ("White")
```

#### 1684. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25354` → after: `L25354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R25354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L25354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L25354) · [Before (L25354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L25354)

```diff
-         Uu: rS("Yellow")
+         dp: DQ("Yellow")
```

#### 1685. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L26839` → after: `L26839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R26839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L26839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L26839) · [Before (L26839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L26839)

```diff
-         Uu: [5, 6, 8]
+         dp: [5, 6, 8]
```

#### 1686. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27459` → after: `L27459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R27459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L27459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L27459) · [Before (L27459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L27459)

```diff
-         Uu: [14, 14, 12]
+         dp: [14, 14, 12]
```

#### 1687. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27470` → after: `L27470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R27470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L27470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L27470) · [Before (L27470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L27470)

```diff
-       }((HH => `${HH} Torch`), {
+       }((BB => `${BB} Torch`), {
```

#### 1688. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27473` → after: `L27473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R27473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L27473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L27473) · [Before (L27473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L27473)

```diff
-         itemTexture: HH => `torch_${aA(HH)}`,
+         itemTexture: BB => `torch_${CY(BB)}`,
```

#### 1689. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27481` → after: `L27481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R27481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L27481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L27481) · [Before (L27481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L27481)

```diff
-         blockModel: HH => `torch_${aA(HH)}`,
+         blockModel: BB => `torch_${CY(BB)}`,
```

#### 1690. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27485-L27488` → after: `L27485-L27488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R27485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L27485-L27488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L27485-L27488) · [Before (L27485-L27488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L27485-L27488)

```diff
-         rootMetaDesc: HH => `${HH} Torch|meta|rot1|bot`,
-         Uu: HH => tr[HH]
-       }, (HH => `torch_wall_${aA(HH)}`)),
-       ...LS((HH => `${HH} Neon`), {
+         rootMetaDesc: BB => `${BB} Torch|meta|rot1|bot`,
+         dp: BB => jD[BB]
+       }, (BB => `torch_wall_${CY(BB)}`)),
+       ...GQ((BB => `${BB} Neon`), {
```

#### 1691. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27495` → after: `L27495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R27495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L27495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L27495) · [Before (L27495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L27495)

```diff
-         textureInfo: HH => `neon_${aA(HH)}`,
+         textureInfo: BB => `neon_${CY(BB)}`,
```

#### 1692. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27497` → after: `L27497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R27497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L27497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L27497) · [Before (L27497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L27497)

```diff
-         Uu: HH => tr[HH]
+         dp: BB => jD[BB]
```

#### 1693. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27570` → after: `L27570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R27570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L27570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L27570) · [Before (L27570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L27570)

```diff
-       ...LS((HH => `Invisible ${HH} Light`), {
+       ...GQ((BB => `Invisible ${BB} Light`), {
```

#### 1694. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27580` → after: `L27580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R27580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L27580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L27580) · [Before (L27580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L27580)

```diff
-         Uu: HH => tr[HH],
+         dp: BB => jD[BB],
```

#### 1695. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27593` → after: `L27593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R27593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L27593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L27593) · [Before (L27593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L27593)

```diff
-         tW: 15,
+         PZ: 15,
```

#### 1696. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27682` → after: `L27682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R27682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L27682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L27682) · [Before (L27682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L27682)

```diff
-         Uu: [8, 15, 15]
+         dp: [8, 15, 15]
```

#### 1697. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27706` → after: `L27706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R27706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L27706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L27706) · [Before (L27706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L27706)

```diff
-         Uu: [8, 15, 7],
+         dp: [8, 15, 7],
```

#### 1698. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27826` → after: `L27826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R27826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L27826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L27826) · [Before (L27826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L27826)

```diff
-               translationKey: 1 === BH ? "item:rocketShip" : `item:rocketShipS${BH}`
+               translationKey: 1 === OB ? "item:rocketShip" : `item:rocketShipS${OB}`
```

#### 1699. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27840` → after: `L27840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R27840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L27840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L27840) · [Before (L27840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L27840)

```diff
-             blockModel: `rocket_${AH}_${BH}`,
+             blockModel: `rocket_${YB}_${OB}`,
```

#### 1700. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27917` → after: `L27917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R27917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L27917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L27917) · [Before (L27917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L27917)

```diff
-             rootMetaDesc: `${rH}|meta|rot1`,
+             rootMetaDesc: `${DB}|meta|rot1`,
```

#### 1701. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28016` → after: `L28016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28016) · [Before (L28016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28016)

```diff
-         Uu: [10, 3, 12]
+         dp: [10, 3, 12]
```

#### 1702. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28181` → after: `L28181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28181) · [Before (L28181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28181)

```diff
-         Uu: [15, 15, 13]
+         dp: [15, 15, 13]
```

#### 1703. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28197` → after: `L28197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28197) · [Before (L28197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28197)

```diff
-         hW: (0, xL.g)([
+         MZ: (0, RG.g)([
```

#### 1704. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28382` → after: `L28382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28382) · [Before (L28382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28382)

```diff
-         UY: !0,
+         fl: !0,
```

#### 1705. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28385` → after: `L28385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28385) · [Before (L28385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28385)

```diff
-         Uu: [6, 14, 4]
+         dp: [6, 14, 4]
```

#### 1706. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28423` → after: `L28423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28423) · [Before (L28423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28423)

```diff
-               for (let SH = 1; SH <= 4; SH++) BH[`${LH}|meta|rot${SH}|${AH}|${rH}`] = {
+               for (let QB = 1; QB <= 4; QB++) OB[`${GB}|meta|rot${QB}|${YB}|${DB}`] = {
```

#### 1707. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28425` → after: `L28425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28425) · [Before (L28425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28425)

```diff
-                 hW: HA[AH][rH][SH - 1]
+                 MZ: BY[YB][DB][QB - 1]
```

#### 1708. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28471` → after: `L28471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28471) · [Before (L28471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28471)

```diff
-             const BH = `Noticeboard ${LH}${AH?` ${AH}`:""}`;
+             const OB = `Noticeboard ${GB}${YB?` ${YB}`:""}`;
```

#### 1709. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28475` → after: `L28475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28475) · [Before (L28475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28475)

```diff
-                 translationKey: `item:${dA(BH)}`
+                 translationKey: `item:${bY(OB)}`
```

#### 1710. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28477` → after: `L28477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28477) · [Before (L28477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28477)

```diff
-               rootMetaDesc: `${BH}|meta|rot1`,
+               rootMetaDesc: `${OB}|meta|rot1`,
```

#### 1711. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28488` → after: `L28488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28488) · [Before (L28488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28488)

```diff
-           const HH = `${LH} Fence`;
+           const BB = `${GB} Fence`;
```

#### 1712. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28491` → after: `L28491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28491) · [Before (L28491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28491)

```diff
-               translationKey: `item:${dA(HH)}`
+               translationKey: `item:${bY(BB)}`
```

#### 1713. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28494-L28495` → after: `L28494-L28495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28494-L28495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28494-L28495) · [Before (L28494-L28495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28494-L28495)

```diff
-             textureInfo: `planks_${LH.toLowerCase()}`,
-             itemTexture: `${LH.toLowerCase()}_fence`,
+             textureInfo: `planks_${GB.toLowerCase()}`,
+             itemTexture: `${GB.toLowerCase()}_fence`,
```

#### 1714. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28511` → after: `L28511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28511) · [Before (L28511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28511)

```diff
-               translationKey: `item:${dA(lL)}`
+               translationKey: `item:${bY(IG)}`
```

#### 1715. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28523` → after: `L28523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28523) · [Before (L28523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28523)

```diff
-                 tH = `${LH}${RL[SH]}`;
+                 jB = `${GB}${wG[QB]}`;
```

#### 1716. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28526` → after: `L28526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28526) · [Before (L28526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28526)

```diff
-                 rootMetaDesc: `${BH}|meta|rot1`,
+                 rootMetaDesc: `${OB}|meta|rot1`,
```

#### 1717. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28544` → after: `L28544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28544) · [Before (L28544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28544)

```diff
-         yE: 9,
+         hJ: 9,
```

#### 1718. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28553` → after: `L28553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28553) · [Before (L28553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28553)

```diff
-         Uu: [6, 6, 6]
+         dp: [6, 6, 6]
```

#### 1719. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28564` → after: `L28564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28564) · [Before (L28564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28564)

```diff
-         yE: 9,
+         hJ: 9,
```

#### 1720. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28573` → after: `L28573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28573) · [Before (L28573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28573)

```diff
-         Uu: [6, 6, 6]
+         dp: [6, 6, 6]
```

#### 1721. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28584` → after: `L28584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28584) · [Before (L28584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28584)

```diff
-         yE: 9,
+         hJ: 9,
```

#### 1722. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28593` → after: `L28593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28593) · [Before (L28593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28593)

```diff
-         Uu: [6, 6, 0]
+         dp: [6, 6, 0]
```

#### 1723. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28604` → after: `L28604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28604) · [Before (L28604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28604)

```diff
-         yE: 9,
+         hJ: 9,
```

#### 1724. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28613` → after: `L28613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28613) · [Before (L28613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28613)

```diff
-         Uu: [2, 6, 6]
+         dp: [2, 6, 6]
```

#### 1725. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28624` → after: `L28624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28624) · [Before (L28624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28624)

```diff
-         yE: 9,
+         hJ: 9,
```

#### 1726. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28633` → after: `L28633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28633) · [Before (L28633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28633)

```diff
-         Uu: [6, 6, 6]
+         dp: [6, 6, 6]
```

#### 1727. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28638-L28639` → after: `L28638-L28639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28638-L28639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28638-L28639) · [Before (L28638-L28639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28638-L28639)

```diff
-           const HH = `${LH} Fence Gate`,
-             AH = `_${HH} Top`,
+           const BB = `${GB} Fence Gate`,
+             YB = `_${BB} Top`,
```

#### 1728. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28642` → after: `L28642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28642) · [Before (L28642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28642)

```diff
-                 translationKey: `item:${dA(HH)}`
+                 translationKey: `item:${bY(BB)}`
```

#### 1729. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28645-L28646` → after: `L28645-L28646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28645-L28646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28645-L28646) · [Before (L28645-L28646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28645-L28646)

```diff
-               textureInfo: `planks_${LH.toLowerCase()}`,
-               itemTexture: `${LH.toLowerCase()}_fence_gate`,
+               textureInfo: `planks_${GB.toLowerCase()}`,
+               itemTexture: `${GB.toLowerCase()}_fence_gate`,
```

#### 1730. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28657` → after: `L28657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28657) · [Before (L28657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28657)

```diff
-               rootMetaDesc: `${HH}|meta|rot1|closed`
+               rootMetaDesc: `${BB}|meta|rot1|closed`
```

#### 1731. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28659` → after: `L28659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28659) · [Before (L28659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28659)

```diff
-             hW: fA(!1, LH, SH),
+             MZ: mY(!1, GB, QB),
```

#### 1732. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28669` → after: `L28669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28669) · [Before (L28669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28669)

```diff
-               rootMetaDesc: `${AH}|meta|rot1|closed`
+               rootMetaDesc: `${YB}|meta|rot1|closed`
```

#### 1733. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28671` → after: `L28671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28671) · [Before (L28671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28671)

```diff
-             hW: fA(!0, LH, SH),
+             MZ: mY(!0, GB, QB),
```

#### 1734. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28711` → after: `L28711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28711) · [Before (L28711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28711)

```diff
-             rootMetaDesc: `${LH}|meta|rot1`,
+             rootMetaDesc: `${GB}|meta|rot1`,
```

#### 1735. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28728` → after: `L28728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28728) · [Before (L28728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28728)

```diff
-         Uu: [9, 15, 5]
+         dp: [9, 15, 5]
```

#### 1736. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28772` → after: `L28772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28772) · [Before (L28772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28772)

```diff
-           Uu: [4, 12, 14],
+           dp: [4, 12, 14],
```

#### 1737. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28822` → after: `L28822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28822) · [Before (L28822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28822)

```diff
-           Uu: [2, 6, 6],
+           dp: [2, 6, 6],
```

#### 1738. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28875` → after: `L28875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28875) · [Before (L28875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28875)

```diff
-           Uu: [6, 6, 10],
+           dp: [6, 6, 10],
```

#### 1739. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28891` → after: `L28891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28891) · [Before (L28891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28891)

```diff
-           Uu: [8, 6, 10],
+           dp: [8, 6, 10],
```

#### 1740. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28906` → after: `L28906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28906) · [Before (L28906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28906)

```diff
-           Uu: [12, 10, 14],
+           dp: [12, 10, 14],
```

#### 1741. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28920` → after: `L28920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28920) · [Before (L28920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28920)

```diff
-           Uu: [6, 6, 10],
+           dp: [6, 6, 10],
```

#### 1742. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28940` → after: `L28940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28940) · [Before (L28940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28940)

```diff
-           yE: 9,
+           hJ: 9,
```

#### 1743. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28948` → after: `L28948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28948) · [Before (L28948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28948)

```diff
-           Uu: [6, 6, 6],
+           dp: [6, 6, 6],
```

#### 1744. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28960` → after: `L28960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28960) · [Before (L28960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28960)

```diff
-           yE: 9,
+           hJ: 9,
```

#### 1745. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28968` → after: `L28968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R28968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L28968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L28968) · [Before (L28968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L28968)

```diff
-           Uu: [2, 6, 6],
+           dp: [2, 6, 6],
```

#### 1746. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29003` → after: `L29003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29003) · [Before (L29003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29003)

```diff
-         Uu: [9, 3, 1]
+         dp: [9, 3, 1]
```

#### 1747. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29137` → after: `L29137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29137) · [Before (L29137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29137)

```diff
-           animTextures: [0, 1, 2, 3, 4, 5, 6, 7].map((HH => `trading_terminal_front${HH}`)),
+           animTextures: [0, 1, 2, 3, 4, 5, 6, 7].map((BB => `trading_terminal_front${BB}`)),
```

#### 1748. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29209` → after: `L29209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29209) · [Before (L29209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29209)

```diff
-             translationKey: `item:${dA(LH)}`
+             translationKey: `item:${bY(GB)}`
```

#### 1749. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29227` → after: `L29227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29227) · [Before (L29227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29227)

```diff
-           Uu: [5, 8, 1]
+           dp: [5, 8, 1]
```

#### 1750. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29261` → after: `L29261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29261) · [Before (L29261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29261)

```diff
-           Uu: [5, 9, 2]
+           dp: [5, 9, 2]
```

#### 1751. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29270` → after: `L29270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29270) · [Before (L29270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29270)

```diff
-           Uu: [3, 5, 1]
+           dp: [3, 5, 1]
```

#### 1752. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29280` → after: `L29280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29280) · [Before (L29280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29280)

```diff
-           Uu: CS
+           dp: JQ
```

#### 1753. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29298` → after: `L29298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29298) · [Before (L29298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29298)

```diff
-           Uu: [4, 7, 1]
+           dp: [4, 7, 1]
```

#### 1754. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29303` → after: `L29303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29303) · [Before (L29303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29303)

```diff
-           Uu: [8, 12, 13]
+           dp: [8, 12, 13]
```

#### 1755. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29308` → after: `L29308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29308) · [Before (L29308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29308)

```diff
-           Uu: [5, 9, 2]
+           dp: [5, 9, 2]
```

#### 1756. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29314` → after: `L29314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29314) · [Before (L29314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29314)

```diff
-           Uu: [9, 3, 9]
+           dp: [9, 3, 9]
```

#### 1757. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29337` → after: `L29337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29337) · [Before (L29337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29337)

```diff
-           Uu: [8, 3, 8]
+           dp: [8, 3, 8]
```

#### 1758. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29365` → after: `L29365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29365) · [Before (L29365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29365)

```diff
-           Uu: [4, 10, 5]
+           dp: [4, 10, 5]
```

#### 1759. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29369` → after: `L29369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29369) · [Before (L29369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29369)

```diff
-           Uu: [5, 9, 2]
+           dp: [5, 9, 2]
```

#### 1760. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29375` → after: `L29375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29375) · [Before (L29375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29375)

```diff
-           yE: 9,
+           hJ: 9,
```

#### 1761. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29380` → after: `L29380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29380) · [Before (L29380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29380)

```diff
-           Uu: [6, 10, 2]
+           dp: [6, 10, 2]
```

#### 1762. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29387` → after: `L29387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29387) · [Before (L29387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29387)

```diff
-           Uu: [2, 6, 6]
+           dp: [2, 6, 6]
```

#### 1763. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29393` → after: `L29393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29393) · [Before (L29393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29393)

```diff
-         for (const BH of ["White", "Light Grey", "Light Blue", "Cyan", "Green", "Lime", "Yellow", "Orange", "Magenta", "Red"]) HH[`INTERNAL_MESH_${BH} Directional Arrow`] = {
+         for (const OB of ["White", "Light Grey", "Light Blue", "Cyan", "Green", "Lime", "Yellow", "Orange", "Magenta", "Red"]) BB[`INTERNAL_MESH_${OB} Directional Arrow`] = {
```

#### 1764. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29398` → after: `L29398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29398) · [Before (L29398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29398)

```diff
-           blockModel: `${BH} Directional Arrow`,
+           blockModel: `${OB} Directional Arrow`,
```

#### 1765. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29428` → after: `L29428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29428) · [Before (L29428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29428)

```diff
-           const rH = "water" === LH ? eh : [];
+           const DB = "water" === GB ? ro : [];
```

#### 1766. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29451` → after: `L29451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29451) · [Before (L29451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29451)

```diff
-     if (St > 65535) throw new Error(`block ID was ${St}, which is over 65535 - there is a limit of 65535 block types!`);
+     if (jj > 65535) throw new Error(`block ID was ${jj}, which is over 65535 - there is a limit of 65535 block types!`);
```

#### 1767. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29453-L29454` → after: `L29453-L29454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29453-L29454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29453-L29454) · [Before (L29453-L29454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29453-L29454)

```diff
-     if (HH.id = St, Ht[St] = HH, HH.name = hz, HH.stackable = !0, bL(Ht, HH), "door" === Ht[HH.meta.rootName].model) HH.hW = (Yt = HH.meta.rot, ut = HH.meta.open, Or[(Yt - 1 + Number(ut)) % 4]);
-     else if ("trapdoor" === Ht[HH.meta.rootName].model) HH.hW = kr(HH.meta.rot, HH.meta.open);
+     if (BB.id = jj, Gj[jj] = BB, BB.name = jy, BB.stackable = !0, fG(Gj, BB), "door" === Gj[BB.meta.rootName].model) BB.MZ = (qj = BB.meta.rot, Zj = BB.meta.open, UD[(qj - 1 + Number(Zj)) % 4]);
+     else if ("trapdoor" === Gj[BB.meta.rootName].model) BB.MZ = kD(BB.meta.rot, BB.meta.open);
```

#### 1768. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29457` → after: `L29457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29457) · [Before (L29457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29457)

```diff
-       BH && (HH.hW = BH)
+       OB && (BB.MZ = OB)
```

#### 1769. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29466` → after: `L29466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29466) · [Before (L29466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29466)

```diff
-         animationInterval: null !== (Xt = HH.textureInfo.animationInterval) && void 0 !== Xt ? Xt : 200
+         animationInterval: null !== (lj = BB.textureInfo.animationInterval) && void 0 !== lj ? lj : 200
```

#### 1770. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29477` → after: `L29477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29477) · [Before (L29477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29477)

```diff
-           animationInterval: null !== (Gt = BH.animationInterval) && void 0 !== Gt ? Gt : 200
+           animationInterval: null !== (pj = OB.animationInterval) && void 0 !== pj ? pj : 200
```

#### 1771. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29492` → after: `L29492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29492) · [Before (L29492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29492)

```diff
-     if (Math.log(HH) / Math.log(2) % 1 !== 0) throw new Error(`${hz} has ${HH} animation states, which is not a power of 2`);
+     if (Math.log(BB) / Math.log(2) % 1 !== 0) throw new Error(`${jy} has ${BB} animation states, which is not a power of 2`);
```

#### 1772. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29509` → after: `L29509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29509) · [Before (L29509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29509)

```diff
-         LH = null !== (Qt = Ct[BH]) && void 0 !== Qt ? Qt : ht++;
+         GB = null !== (Nj = Pj[OB]) && void 0 !== Nj ? Nj : yj++;
```

#### 1773. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29529` → after: `L29529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29529) · [Before (L29529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29529)

```diff
-           rH = "string" === typeof AH ? AH : AH.animTextures[0];
+           DB = "string" === typeof YB ? YB : YB.animTextures[0];
```

#### 1774. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29539` → after: `L29539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29539) · [Before (L29539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29539)

```diff
-     Mt[hz] = null !== (xt = Mt[HH.id]) && void 0 !== xt ? xt : new vL(HH)
+     Wj[jy] = null !== (Aj = Wj[BB.id]) && void 0 !== Aj ? Aj : new WG(BB)
```

#### 1775. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29546` → after: `L29546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29546) · [Before (L29546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29546)

```diff
-       const BH = null !== (Pt = vt[HH[0]]) && void 0 !== Pt ? Pt : [];
+       const OB = null !== (Sj = Vj[BB[0]]) && void 0 !== Sj ? Sj : [];
```

#### 1776. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29786` → after: `L29786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29786) · [Before (L29786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29786)

```diff
-   if (Ut !== Object.keys(Tt).at(-1)) throw new Error(`You have added new blocks. Please add the following to knownMetadataIds:\n"${Ut}": ${Vt.id},\nRemember that new blocks must come after existing blocks in blockInitInfo.`);
+   if (Uj !== Object.keys(nj).at(-1)) throw new Error(`You have added new blocks. Please add the following to knownMetadataIds:\n"${Uj}": ${fj.id},\nRemember that new blocks must come after existing blocks in blockInitInfo.`);
```

#### 1777. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29789` → after: `L29789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29789) · [Before (L29789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29789)

```diff
-     if (Mt[BH].id !== LH) throw new Error(`${BH} id is not ${LH}. This means you added a block _before_ other blocks. Blocks can only be added at the end of blockMetadata.ts`)
+     if (Wj[OB].id !== GB) throw new Error(`${OB} id is not ${GB}. This means you added a block _before_ other blocks. Blocks can only be added at the end of blockMetadata.ts`)
```

#### 1778. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29793` → after: `L29793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29793) · [Before (L29793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29793)

```diff
-     if (!Mt[HH]) throw new Error(`Missing Mob Spawner Block for mob type ${hz}: please add '...getMobSpawnerBlock("${hz}"),' to the end of blockInitInfo.ts`)
+     if (!Wj[BB]) throw new Error(`Missing Mob Spawner Block for mob type ${jy}: please add '...getMobSpawnerBlock("${jy}"),' to the end of blockInitInfo.ts`)
```

#### 1779. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29799` → after: `L29799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L29799) · [Before (L29799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29799)

```diff
-     if (!Mt[HH]) throw new Error(`Missing Mob Painting Block for mob type ${hz}: please add '...getMobPaintingBlock("${hz}"),' to the end of blockInitInfo`)
+     if (!Wj[BB]) throw new Error(`Missing Mob Painting Block for mob type ${jy}: please add '...getMobPaintingBlock("${jy}"),' to the end of blockInitInfo`)
```

#### 1780. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30332` → after: `L30332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L30332) · [Before (L30332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30332)

```diff
-       [`${HH}|meta|charging2`]: {
+       [`${BB}|meta|charging2`]: {
```

#### 1781. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30334` → after: `L30334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L30334) · [Before (L30334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30334)

```diff
-         textureInfo: `${BH.textureName}_charging_2`
+         textureInfo: `${OB.textureName}_charging_2`
```

#### 1782. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30336` → after: `L30336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L30336) · [Before (L30336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30336)

```diff
-       [`${HH}|meta|charging3`]: {
+       [`${BB}|meta|charging3`]: {
```

#### 1783. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30338` → after: `L30338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L30338) · [Before (L30338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30338)

```diff
-         textureInfo: `${BH.textureName}_charging_3`
+         textureInfo: `${OB.textureName}_charging_3`
```

#### 1784. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30340` → after: `L30340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L30340) · [Before (L30340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30340)

```diff
-       [`${HH}|meta|charging4`]: {
+       [`${BB}|meta|charging4`]: {
```

#### 1785. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30342` → after: `L30342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L30342) · [Before (L30342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30342)

```diff
-         textureInfo: `${BH.textureName}_charging_4`
+         textureInfo: `${OB.textureName}_charging_4`
```

#### 1786. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30353-L30354` → after: `L30353-L30354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30353-L30354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L30353-L30354) · [Before (L30353-L30354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30353-L30354)

```diff
-         heldItemGlb: `${BH}_${mt}`,
-         textureInfo: `${BH}_${mt}`
+         heldItemGlb: `${OB}_${uj}`,
+         textureInfo: `${OB}_${uj}`
```

#### 1787. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30357` → after: `L30357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L30357) · [Before (L30357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30357)

```diff
-     for (const rH of ot) AH[`${HH}|meta|${rH}`] = {
+     for (const DB of mj) YB[`${BB}|meta|${DB}`] = {
```

#### 1788. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30359-L30360` → after: `L30359-L30360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30359-L30360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L30359-L30360) · [Before (L30359-L30360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30359-L30360)

```diff
-       heldItemGlb: `${BH}_${rH}`,
-       textureInfo: `${BH}_${rH}`
+       heldItemGlb: `${OB}_${DB}`,
+       textureInfo: `${OB}_${DB}`
```

#### 1789. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30385` → after: `L30385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L30385) · [Before (L30385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30385)

```diff
-       [`${HH}|RequiresAmmo`]: {
+       [`${BB}|RequiresAmmo`]: {
```

#### 1790. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30388` → after: `L30388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L30388) · [Before (L30388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30388)

```diff
-         heldItemGlb: null !== (LH = AH.heldItemGlb) && void 0 !== LH ? LH : HH
+         heldItemGlb: null !== (GB = YB.heldItemGlb) && void 0 !== GB ? GB : BB
```

#### 1791. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30397` → after: `L30397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L30397) · [Before (L30397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30397)

```diff
-     return "" === BH ? HH : `${HH} ${BH}`
+     return "" === OB ? BB : `${BB} ${OB}`
```

#### 1792. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30404` → after: `L30404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L30404) · [Before (L30404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30404)

```diff
-     if (!rH.includes(SH)) throw new Error(`Cannot name assets for "${et(LH,AH)}": "${rH}" has no "${SH}" to replace`);
+     if (!DB.includes(QB)) throw new Error(`Cannot name assets for "${rj(GB,YB)}": "${DB}" has no "${QB}" to replace`);
```

#### 1793. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30426` → after: `L30426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L30426) · [Before (L30426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30426)

```diff
-       translationKey: `item:${dA(HH)}`
+       translationKey: `item:${bY(BB)}`
```

#### 1794. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30462` → after: `L30462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L30462) · [Before (L30462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30462)

```diff
-           kind: null !== (BH = jt[HH]) && void 0 !== BH ? BH : HH
+           kind: null !== (OB = hj[BB]) && void 0 !== OB ? OB : BB
```

#### 1795. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30478` → after: `L30478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L30478) · [Before (L30478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30478)

```diff
-     return `${HH} ${BH}`
+     return `${BB} ${OB}`
```

#### 1796. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L31010` → after: `L31010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R31010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L31010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L31010) · [Before (L31010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L31010)

```diff
-         Uu: [15, 15, 15],
+         dp: [15, 15, 15],
```

#### 1797. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L31029` → after: `L31029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R31029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L31029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L31029) · [Before (L31029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L31029)

```diff
-         Uu: [15, 14, 11],
+         dp: [15, 14, 11],
```

#### 1798. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L32417-L32419` → after: `L32417-L32419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R32417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L32417-L32419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L32417-L32419) · [Before (L32417-L32419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L32417-L32419)

```diff
-         const rH = `Partially Full ${HH}`,
-           SH = `Half Full ${HH}`,
-           hH = `Nearly Full ${HH}`,
+         const DB = `Partially Full ${BB}`,
+           QB = `Half Full ${BB}`,
+           oB = `Nearly Full ${BB}`,
```

#### 1799. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L32426` → after: `L32426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R32426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L32426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L32426) · [Before (L32426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L32426)

```diff
-             rootMetaDesc: `${rH}|meta|charging1`
+             rootMetaDesc: `${DB}|meta|charging1`
```

#### 1800. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L32432` → after: `L32432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R32432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L32432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L32432) · [Before (L32432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L32432)

```diff
-             rootMetaDesc: `${SH}|meta|charging1`
+             rootMetaDesc: `${QB}|meta|charging1`
```

#### 1801. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L32438` → after: `L32438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R32438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L32438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L32438) · [Before (L32438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L32438)

```diff
-             rootMetaDesc: `${hH}|meta|charging1`
+             rootMetaDesc: `${oB}|meta|charging1`
```

#### 1802. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L32444` → after: `L32444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R32444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L32444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L32444) · [Before (L32444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L32444)

```diff
-             rootMetaDesc: `${tH}|meta|charging1`
+             rootMetaDesc: `${jB}|meta|charging1`
```

#### 1803. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L32499` → after: `L32499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R32499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L32499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L32499) · [Before (L32499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L32499)

```diff
-         Uu: [4, 11, 11],
+         dp: [4, 11, 11],
```

#### 1804. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L32574` → after: `L32574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R32574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L32574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L32574) · [Before (L32574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L32574)

```diff
-         Uu: [12, 7, 2]
+         dp: [12, 7, 2]
```

#### 1805. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L32731` → after: `L32731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R32731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L32731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L32731) · [Before (L32731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L32731)

```diff
-       ...LS((HH => `${HH} Kart`), {
+       ...GQ((BB => `${BB} Kart`), {
```

#### 1806. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L32733` → after: `L32733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R32733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L32733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L32733) · [Before (L32733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L32733)

```diff
-           translationKey: `item:${dA(HH)}Kart`
+           translationKey: `item:${bY(BB)}Kart`
```

#### 1807. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L32735-L32736` → after: `L32735-L32736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R32735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L32735-L32736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L32735-L32736) · [Before (L32735-L32736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L32735-L32736)

```diff
-         textureInfo: HH => `${aA(HH)}_kart`,
-         heldItemGlb: HH => `${HH} Kart Item`,
+         textureInfo: BB => `${CY(BB)}_kart`,
+         heldItemGlb: BB => `${BB} Kart Item`,
```

#### 1808. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L32742-L32744` → after: `L32742-L32744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R32742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L32742-L32744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L32742-L32744) · [Before (L32742-L32744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L32742-L32744)

```diff
-       ...LS((HH => `INTERNAL_MESH_${HH} Kart`), {
-         textureInfo: HH => `${aA(HH)}_kart`,
-         heldItemGlb: HH => `${HH} Kart`,
+       ...GQ((BB => `INTERNAL_MESH_${BB} Kart`), {
+         textureInfo: BB => `${CY(BB)}_kart`,
+         heldItemGlb: BB => `${BB} Kart`,
```

#### 1809. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33453` → after: `L33453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L33453) · [Before (L33453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33453)

```diff
-           [`${HH}|meta|dir2`]: {
+           [`${BB}|meta|dir2`]: {
```

#### 1810. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33456` → after: `L33456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L33456) · [Before (L33456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33456)

```diff
-             textureInfo: `${BH.textureName}_dir_2`
+             textureInfo: `${OB.textureName}_dir_2`
```

#### 1811. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33458` → after: `L33458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L33458) · [Before (L33458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33458)

```diff
-           [`${HH}|meta|dir3`]: {
+           [`${BB}|meta|dir3`]: {
```

#### 1812. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33461` → after: `L33461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L33461) · [Before (L33461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33461)

```diff
-             textureInfo: `${BH.textureName}_dir_3`
+             textureInfo: `${OB.textureName}_dir_3`
```

#### 1813. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33463` → after: `L33463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L33463) · [Before (L33463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33463)

```diff
-           [`${HH}|meta|dir4`]: {
+           [`${BB}|meta|dir4`]: {
```

#### 1814. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33466` → after: `L33466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L33466) · [Before (L33466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33466)

```diff
-             textureInfo: `${BH.textureName}_dir_4`
+             textureInfo: `${OB.textureName}_dir_4`
```

#### 1815. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33468` → after: `L33468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L33468) · [Before (L33468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33468)

```diff
-           [`${HH}|meta|dir5`]: {
+           [`${BB}|meta|dir5`]: {
```

#### 1816. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33471` → after: `L33471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L33471) · [Before (L33471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33471)

```diff
-             textureInfo: `${BH.textureName}_dir_5`
+             textureInfo: `${OB.textureName}_dir_5`
```

#### 1817. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33473` → after: `L33473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L33473) · [Before (L33473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33473)

```diff
-           [`${HH}|meta|dir6`]: {
+           [`${BB}|meta|dir6`]: {
```

#### 1818. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33476` → after: `L33476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L33476) · [Before (L33476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33476)

```diff
-             textureInfo: `${BH.textureName}_dir_6`
+             textureInfo: `${OB.textureName}_dir_6`
```

#### 1819. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33478` → after: `L33478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L33478) · [Before (L33478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33478)

```diff
-           [`${HH}|meta|dir7`]: {
+           [`${BB}|meta|dir7`]: {
```

#### 1820. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33481` → after: `L33481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L33481) · [Before (L33481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33481)

```diff
-             textureInfo: `${BH.textureName}_dir_7`
+             textureInfo: `${OB.textureName}_dir_7`
```

#### 1821. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33483` → after: `L33483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L33483) · [Before (L33483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33483)

```diff
-           [`${HH}|meta|dir8`]: {
+           [`${BB}|meta|dir8`]: {
```

#### 1822. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33486` → after: `L33486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L33486) · [Before (L33486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33486)

```diff
-             textureInfo: `${BH.textureName}_dir_8`
+             textureInfo: `${OB.textureName}_dir_8`
```

#### 1823. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33488` → after: `L33488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L33488) · [Before (L33488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33488)

```diff
-           [`${HH}|meta|dir9`]: {
+           [`${BB}|meta|dir9`]: {
```

#### 1824. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33491` → after: `L33491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L33491) · [Before (L33491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33491)

```diff
-             textureInfo: `${BH.textureName}_dir_9`
+             textureInfo: `${OB.textureName}_dir_9`
```

#### 1825. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33493` → after: `L33493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L33493) · [Before (L33493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33493)

```diff
-           [`${HH}|meta|dir10`]: {
+           [`${BB}|meta|dir10`]: {
```

#### 1826. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33496` → after: `L33496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L33496) · [Before (L33496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33496)

```diff
-             textureInfo: `${BH.textureName}_dir_10`
+             textureInfo: `${OB.textureName}_dir_10`
```

#### 1827. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33498` → after: `L33498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L33498) · [Before (L33498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33498)

```diff
-           [`${HH}|meta|dir11`]: {
+           [`${BB}|meta|dir11`]: {
```
