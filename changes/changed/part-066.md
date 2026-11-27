# Changed — Bundle Modifications Report (Part 066 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `66 / 86` (**433** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 065](part-065.md) · [Part 067 →](part-067.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (1967 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1)

#### 1394. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13358-L13359` → after: `L13412-L13413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13412-L13413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13412-L13413) · [Before (L13358-L13359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13358-L13359)

```diff
-     if (QB && JG(GB, "meta|rot1|top", OB), MG(BB.xD, GB, "xD"), MG(BB.tD, GB, "tD"), !Number.isInteger(BB.BQ) || BB.BQ < 0) throw new Error(`Custom world-gen cave decoration "${GB}" minPlacements must be a non-negative integer, got ${BB.BQ}`);
-     if (!(0, QG.Q)(BB.OQ) && (MG(BB.OQ.YQ, GB, "depthRamp.deepClusterChance"), BB.OQ.DQ <= BB.OQ.QQ)) throw new Error(`Custom world-gen cave decoration "${GB}" deepY must be strictly smaller than shallowY, but ${BB.OQ.DQ} <= ${BB.OQ.QQ} `)
+     if (NW && ZO(OW, "meta|rot1|top", iW), xO(WW.Jm, OW, "Jm"), xO(WW.hm, OW, "hm"), !Number.isInteger(WW.Hm) || WW.Hm < 0) throw new Error(`Custom world-gen cave decoration "${OW}" minPlacements must be a non-negative integer, got ${WW.Hm}`);
+     if (!(0, LO.K)(WW.nm) && (xO(WW.nm.om, OW, "depthRamp.deepClusterChance"), WW.nm.dm <= WW.nm.gm)) throw new Error(`Custom world-gen cave decoration "${OW}" deepY must be strictly smaller than shallowY, but ${WW.nm.dm} <= ${WW.nm.gm} `)
```

#### 1395. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13363-L13364` → after: `L13417-L13418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13417-L13418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13417-L13418) · [Before (L13363-L13364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13363-L13364)

```diff
-     const YB = `${BB}|${OB}`;
-     if (void 0 === (0, QG.J)(YB, GB)) throw new Error(`Custom world-gen cave decoration "${BB}" is missing directional variant "${YB}" required for wall/ceiling anchoring`)
+     const mW = `${WW}|${iW}`;
+     if (void 0 === (0, LO.E)(mW, OW)) throw new Error(`Custom world-gen cave decoration "${WW}" is missing directional variant "${mW}" required for wall/ceiling anchoring`)
```

#### 1396. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13368` → after: `L13422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13422) · [Before (L13368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13368)

```diff
-     if (BB < 0 || BB > 1) throw new Error(`Custom world-gen cave decoration "${OB}" ${GB} must be in [0, 1], got ${BB}`)
+     if (WW < 0 || WW > 1) throw new Error(`Custom world-gen cave decoration "${iW}" ${OW} must be in [0, 1], got ${WW}`)
```

#### 1397. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13372-L13378` → after: `L13426-L13432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13426-L13432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13426-L13432) · [Before (L13372-L13378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13372-L13378)

```diff
-     if (BB.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${BB.frequency}`);
-     if (void 0 === (0, QG.J)(BB.yQ, OB)) throw new Error(`Custom world-gen biome topsoilBlock "${BB.yQ}" not found in blockMetadata`);
-     if (void 0 === (0, QG.J)(BB.JQ, OB)) throw new Error(`Custom world-gen biome lowsoilBlock "${BB.JQ}" not found in blockMetadata`);
-     if (0 === BB.MQ.length) throw new Error("Custom world-gen biome must have at least one stoneType");
-     for (const GB of BB.MQ) {
-       if (GB.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${GB.frequency}`);
-       if (void 0 === (0, QG.J)(GB.blockName, OB)) throw new Error(`Custom world-gen biome stoneType blockName "${GB.blockName}" not found in blockMetadata`)
+     if (WW.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${WW.frequency}`);
+     if (void 0 === (0, LO.E)(WW.pm, iW)) throw new Error(`Custom world-gen biome topsoilBlock "${WW.pm}" not found in blockMetadata`);
+     if (void 0 === (0, LO.E)(WW.fm, iW)) throw new Error(`Custom world-gen biome lowsoilBlock "${WW.fm}" not found in blockMetadata`);
+     if (0 === WW.Cm.length) throw new Error("Custom world-gen biome must have at least one stoneType");
+     for (const OW of WW.Cm) {
+       if (OW.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${OW.frequency}`);
+       if (void 0 === (0, LO.E)(OW.blockName, iW)) throw new Error(`Custom world-gen biome stoneType blockName "${OW.blockName}" not found in blockMetadata`)
```

#### 1398. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13383-L13387` → after: `L13437-L13441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13437-L13441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13437-L13441) · [Before (L13383-L13387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13383-L13387)

```diff
-     if (void 0 === (0, QG.J)(BB.blockName, OB)) throw new Error(`Custom world-gen ore blockName "${BB.blockName}" not found in blockMetadata`);
-     if (BB.radius < 0) throw new Error(`Custom world-gen ore "${BB.blockName}" radius must be >= 0, got ${BB.radius}`);
-     if (BB.qQ <= 0) throw new Error(`Custom world-gen ore "${BB.blockName}" minDistBetweenDeposits must be > 0, got ${BB.qQ}`);
-     if (BB.XD > BB.wD) throw new Error(`Custom world-gen ore "${BB.blockName}" minY (${BB.XD}) must be <= maxY (${BB.wD})`);
-     if (BB.ZQ < 0 || BB.ZQ > 1) throw new Error(`Custom world-gen ore "${BB.blockName}" spawnChance must be in [0, 1], got ${BB.ZQ}`)
+     if (void 0 === (0, LO.E)(WW.blockName, iW)) throw new Error(`Custom world-gen ore blockName "${WW.blockName}" not found in blockMetadata`);
+     if (WW.radius < 0) throw new Error(`Custom world-gen ore "${WW.blockName}" radius must be >= 0, got ${WW.radius}`);
+     if (WW.Rm <= 0) throw new Error(`Custom world-gen ore "${WW.blockName}" minDistBetweenDeposits must be > 0, got ${WW.Rm}`);
+     if (WW.Am > WW.bm) throw new Error(`Custom world-gen ore "${WW.blockName}" minY (${WW.Am}) must be <= maxY (${WW.bm})`);
+     if (WW.Gm < 0 || WW.Gm > 1) throw new Error(`Custom world-gen ore "${WW.blockName}" spawnChance must be in [0, 1], got ${WW.Gm}`)
```

#### 1399. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13389` → after: `L13443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13443) · [Before (L13389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13389)

```diff
-   GB(40744);
+   OW(41259);
```

#### 1400. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13394-L13397` → after: `L13448-L13451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13448-L13451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13448-L13451) · [Before (L13394-L13397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13394-L13397)

```diff
-       qQ: 10,
-       XD: -98,
-       wD: -78,
-       ZQ: .4
+       Rm: 10,
+       Am: -98,
+       bm: -78,
+       Gm: .4
```

#### 1401. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13402-L13405` → after: `L13456-L13459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13456-L13459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13456-L13459) · [Before (L13402-L13405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13402-L13405)

```diff
-       qQ: 6,
-       XD: -40,
-       wD: 20,
-       ZQ: .6
+       Rm: 6,
+       Am: -40,
+       bm: 20,
+       Gm: .6
```

#### 1402. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13409-L13412` → after: `L13463-L13466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13463-L13466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13463-L13466) · [Before (L13409-L13412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13409-L13412)

```diff
-       qQ: 10,
-       XD: -75,
-       wD: -55,
-       ZQ: .4
+       Rm: 10,
+       Am: -75,
+       bm: -55,
+       Gm: .4
```

#### 1403. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13416` → after: `L13470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13470) · [Before (L13416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13416)

```diff
-       AQ: null
+       zm: null
```

#### 1404. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13419` → after: `L13473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13473) · [Before (L13419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13419)

```diff
-     [lG]: () => GB(40694).b
+     [bO]: () => OW(41221).c
```

#### 1405. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13421` → after: `L13475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13475) · [Before (L13421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13421)

```diff
-   var RG = GB(9936);
+   var MO = OW(5727);
```

#### 1406. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13454` → after: `L13508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13508) · [Before (L13454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13454)

```diff
-       this.rootName = BB, this.rootId = OB, this.metaStr = GB, this.rot = YB, this.open = DB, this.halfblockPlacement = QB, this.IB = oB, this.treeBase = jB, this.treeCanopy = yB, this.books = JB, this.freshlyGrown = MB, this.roots = PB, this.lava = zB, this.top = lB, this.grassR … [truncated]
+       this.rootName = WW, this.rootId = iW, this.metaStr = OW, this.rot = mW, this.open = EW, this.halfblockPlacement = NW, this.TW = PW, this.treeBase = LW, this.treeCanopy = cW, this.books = wW, this.freshlyGrown = tW, this.roots = ZW, this.lava = xW, this.top = lW, this.grassR … [truncated]
```

#### 1407. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13461` → after: `L13515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13515) · [Before (L13461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13461)

```diff
-       const DB = null !== YB && void 0 !== YB ? YB : BB;
+       const EW = null !== mW && void 0 !== mW ? mW : WW;
```

#### 1408. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13482` → after: `L13536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13536) · [Before (L13482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13482)

```diff
-           WB = null !== (QB = nG.find((BB => OB.endsWith(`|${BB}`)))) && void 0 !== QB ? QB : null,
+           sW = null !== (NW = TO.find((WW => iW.endsWith(`|${WW}`)))) && void 0 !== NW ? NW : null,
```

#### 1409. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13555` → after: `L13609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13609) · [Before (L13555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13555)

```diff
-     return "" === YB ? 1 === OB ? BB : `${BB}|meta|rot${OB}` : `${BB}|meta|rot${OB}|${YB}`
+     return "" === mW ? 1 === iW ? WW : `${WW}|meta|rot${iW}` : `${WW}|meta|rot${iW}|${mW}`
```

#### 1410. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13568` → after: `L13622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13622) · [Before (L13568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13568)

```diff
-     return (0, RG.g)(BB.map((BB => {
+     return (0, MO.d)(WW.map((WW => {
```

#### 1411. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13653-L13654` → after: `L13707-L13708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13707-L13708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13707-L13708) · [Before (L13653-L13654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13653-L13654)

```diff
-     const jB = null !== (GB = null !== (YB = BB.blockModel) && void 0 !== YB ? YB : OB.blockModel) && void 0 !== GB ? GB : "";
-     "noticeboard_standing_leg" === jB ? oB = zY : jB.startsWith("noticeboard_standing") ? oB = MY : jB.startsWith("noticeboard_wall") ? oB = PY : BB.meta.rootName.endsWith(" Directional Arrow") ? oB = GY : BB.meta.rootName.endsWith(" Ladder") ? oB = JY : BB.meta.rootName.endsWith … [truncated]
+     const LW = null !== (OW = null !== (mW = WW.blockModel) && void 0 !== mW ? mW : iW.blockModel) && void 0 !== OW ? OW : "";
+     "noticeboard_standing_leg" === LW ? PW = Am : LW.startsWith("noticeboard_standing") ? PW = xm : LW.startsWith("noticeboard_wall") ? PW = lm : WW.meta.rootName.endsWith(" Directional Arrow") ? PW = Em : WW.meta.rootName.endsWith(" Ladder") ? PW = Zm : WW.meta.rootName.endsWith … [truncated]
```

#### 1412. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13656` → after: `L13710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13710) · [Before (L13656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13656)

```diff
-     return null === (DB = oB) || void 0 === DB ? void 0 : DB[((null !== (QB = BB.meta.rot) && void 0 !== QB ? QB : 1) - 1 + yB) % 4]
+     return null === (EW = PW) || void 0 === EW ? void 0 : EW[((null !== (NW = WW.meta.rot) && void 0 !== NW ? NW : 1) - 1 + cW) % 4]
```

#### 1413. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13695-L13696` → after: `L13749-L13750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13749-L13750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13749-L13750) · [Before (L13695-L13696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13695-L13696)

```diff
-     const GB = [nY(OB), OB & VY ? SY : ""].filter(Boolean);
-     return GB.length ? `${BB}|meta|${GB.join("|")}` : BB
+     const OW = [Tm(iW), iW & Ym ? ym : ""].filter(Boolean);
+     return OW.length ? `${WW}|meta|${OW.join("|")}` : WW
```

#### 1414. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13700` → after: `L13754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13754) · [Before (L13700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13700)

```diff
-     return AY.map((OB => (0, RG.g)(function(BB, OB) {
+     return Sm.map((iW => (0, MO.d)(function(WW, iW) {
```

#### 1415. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13733` → after: `L13787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13787) · [Before (L13733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13733)

```diff
-     const YB = `${BB}|${OB}|${GB}`;
+     const mW = `${WW}|${iW}|${OW}`;
```

#### 1416. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13751` → after: `L13805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13805) · [Before (L13751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13751)

```diff
-     return 1 !== OB || GB ? `${BB}|meta|rot${OB}|${GB?"open":"closed"}` : BB
+     return 1 !== iW || OW ? `${WW}|meta|rot${iW}|${OW?"open":"closed"}` : WW
```

#### 1417. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13757` → after: `L13811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13811) · [Before (L13757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13757)

```diff
-     return `${BB}|meta|rot${OB}|${GB}`
+     return `${WW}|meta|rot${iW}|${OW}`
```

#### 1418. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13760` → after: `L13814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13814) · [Before (L13760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13760)

```diff
-     XY = (rY.map((BB => `${BB} Boomerang`)), ["Cursemetal", "Kingly Amethite", "Kingly Diamond"]),
+     Cm = (fm.map((WW => `${WW} Boomerang`)), ["Cursemetal", "Kingly Amethite", "Kingly Diamond"]),
```

#### 1419. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13762-L13763` → after: `L13816-L13817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13816-L13817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13816-L13817) · [Before (L13762-L13763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13762-L13763)

```diff
-   GB(363);
-   var EY = GB(624);
+   OW(352);
+   var Bm = OW(622);
```

#### 1420. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13788-L13789` → after: `L13842-L13843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13842-L13843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13842-L13843) · [Before (L13788-L13789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13788-L13789)

```diff
-   HY.map((BB => `${BB} Torch`));
-   const vY = ["Wood Spade", "Stone Spade", "Iron Spade", "Gold Spade", "Diamond Spade", ...rY.map((BB => `${BB} Spade`))],
+   Fm.map((WW => `${WW} Torch`));
+   const Qm = ["Wood Spade", "Stone Spade", "Iron Spade", "Gold Spade", "Diamond Spade", ...fm.map((WW => `${WW} Spade`))],
```

#### 1421. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13795` → after: `L13849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13849) · [Before (L13795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13795)

```diff
-   tY.LOG, tY.PLANK, tY.LEAF, tY.STONE, tY.STEM_FRUIT, new EY.c({
+   OE.LOG, OE.PLANK, OE.LEAF, OE.STONE, OE.STEM_FRUIT, new Bm.b({
```

#### 1422. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13804` → after: `L13858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13858) · [Before (L13804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13804)

```diff
-     return `${BB} Spawn Orb`
+     return `${WW} Spawn Orb`
```

#### 1423. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13808` → after: `L13862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13862) · [Before (L13808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13808)

```diff
-     return `${BB} Spawner Block`
+     return `${WW} Spawner Block`
```

#### 1424. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13812` → after: `L13866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13866) · [Before (L13812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13812)

```diff
-     return `Caught Mob ${BB.replaceAll(" ","_")} ${TY(OB)}`
+     return `Caught Mob ${WW.replaceAll(" ","_")} ${am(iW)}`
```

#### 1425. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13826` → after: `L13880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13880) · [Before (L13826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13826)

```diff
-     return YD[BB] ? YD[BB] : `${BB} Painting`
+     return PE[WW] ? PE[WW] : `${WW} Painting`
```

#### 1426. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13842` → after: `L13896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13896) · [Before (L13842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13842)

```diff
-       return BB > 0 && BB < OB ? BB : (BB % OB + OB) % OB
+       return WW > 0 && WW < iW ? WW : (WW % iW + iW) % iW
```

#### 1427. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13854` → after: `L13908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R13908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L13908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13908) · [Before (L13854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13854)

```diff
-       YB.min = BB, YB.max = "excludeMax" === GB ? OB : OB + 1;
+       mW.min = WW, mW.max = "excludeMax" === OW ? iW : iW + 1;
```

#### 1428. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13996` → after: `L14050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14050) · [Before (L13996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L13996)

```diff
-     return null !== (GB = null === BB || void 0 === BB || null === (YB = BB.attributes) || void 0 === YB || null === (DB = YB.customAttributes) || void 0 === DB || null === (QB = DB.enchantments) || void 0 === QB ? void 0 : QB[OB]) && void 0 !== GB ? GB : null
+     return null !== (OW = null === WW || void 0 === WW || null === (mW = WW.attributes) || void 0 === mW || null === (EW = mW.customAttributes) || void 0 === EW || null === (NW = EW.enchantments) || void 0 === NW ? void 0 : NW[iW]) && void 0 !== OW ? OW : null
```

#### 1429. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14123` → after: `L14177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14177) · [Before (L14123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14123)

```diff
-     if (0 === OB.size) throw new Error(`No visible variations for mob type: ${BB}.`);
+     if (0 === iW.size) throw new Error(`No visible variations for mob type: ${WW}.`);
```

#### 1430. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14135` → after: `L14189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14189) · [Before (L14135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14135)

```diff
-         [`${BB}_stage${jB+1}`]: Object.assign({
+         [`${WW}_stage${LW+1}`]: Object.assign({
```

#### 1431. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14139` → after: `L14193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14193) · [Before (L14139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14139)

```diff
-         }, null !== (oB = null === YB || void 0 === YB ? void 0 : YB[jB + 1]) && void 0 !== oB ? oB : {})
+         }, null !== (PW = null === mW || void 0 === mW ? void 0 : mW[LW + 1]) && void 0 !== PW ? PW : {})
```

#### 1432. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14159` → after: `L14213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14213) · [Before (L14159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14159)

```diff
-             colour: `$t(colour:${CY(jB)})`
+             colour: `$t(colour:${zm(LW)})`
```

#### 1433. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14165` → after: `L14219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14219) · [Before (L14165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14165)

```diff
-             colour: `$t(colour:${CY(jB)})`
+             colour: `$t(colour:${zm(LW)})`
```

#### 1434. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14171` → after: `L14225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14225) · [Before (L14171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14171)

```diff
-         rootMetaDesc: `${yB}|meta|rot1|bot`,
+         rootMetaDesc: `${cW}|meta|rot1|bot`,
```

#### 1435. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14178` → after: `L14232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14232) · [Before (L14178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14178)

```diff
-       bot: (0, RG.g)([
+       bot: (0, MO.d)([
```

#### 1436. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14184` → after: `L14238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14238) · [Before (L14184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14184)

```diff
-       top: (0, RG.g)([
+       top: (0, MO.d)([
```

#### 1437. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14190` → after: `L14244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14244) · [Before (L14190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14190)

```diff
-       side1: (0, RG.g)([
+       side1: (0, MO.d)([
```

#### 1438. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14196` → after: `L14250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14250) · [Before (L14196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14196)

```diff
-       side2: (0, RG.g)([
+       side2: (0, MO.d)([
```

#### 1439. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14202` → after: `L14256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14256) · [Before (L14202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14202)

```diff
-       side3: (0, RG.g)([
+       side3: (0, MO.d)([
```

#### 1440. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14208` → after: `L14262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14262) · [Before (L14208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14208)

```diff
-       side4: (0, RG.g)([
+       side4: (0, MO.d)([
```

#### 1441. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14215` → after: `L14269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14269) · [Before (L14215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14215)

```diff
-     UD = [(0, RG.g)([
+     hE = [(0, MO.d)([
```

#### 1442. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14220` → after: `L14274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14274) · [Before (L14220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14220)

```diff
-     ]), (0, RG.g)([
+     ]), (0, MO.d)([
```

#### 1443. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14225` → after: `L14279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14279) · [Before (L14225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14225)

```diff
-     ]), (0, RG.g)([
+     ]), (0, MO.d)([
```

#### 1444. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14230` → after: `L14284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14284) · [Before (L14230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14230)

```diff
-     ]), (0, RG.g)([
+     ]), (0, MO.d)([
```

#### 1445. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14236` → after: `L14290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14290) · [Before (L14236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14236)

```diff
-   const fD = (0, RG.g)([
+   const HE = (0, MO.d)([
```

#### 1446. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14255` → after: `L14309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14309) · [Before (L14255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14255)

```diff
-         MZ: nD.bot
+         sj: JE.bot
```

#### 1447. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14257` → after: `L14311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14311) · [Before (L14257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14257)

```diff
-       [`${BB}|meta|rot1|top`]: {
+       [`${WW}|meta|rot1|top`]: {
```

#### 1448. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14259` → after: `L14313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14313) · [Before (L14259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14259)

```diff
-         MZ: nD.top
+         sj: JE.top
```

#### 1449. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14261` → after: `L14315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14315) · [Before (L14261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14261)

```diff
-       [`${BB}|meta|rot1|side`]: {
+       [`${WW}|meta|rot1|side`]: {
```

#### 1450. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14263` → after: `L14317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14317) · [Before (L14263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14263)

```diff
-         MZ: nD.side1
+         sj: JE.side1
```

#### 1451. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14265` → after: `L14319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14319) · [Before (L14265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14265)

```diff
-       [`${BB}|meta|rot2|side`]: {
+       [`${WW}|meta|rot2|side`]: {
```

#### 1452. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14267` → after: `L14321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14321) · [Before (L14267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14267)

```diff
-         MZ: nD.side2
+         sj: JE.side2
```

#### 1453. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14269` → after: `L14323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14323) · [Before (L14269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14269)

```diff
-       [`${BB}|meta|rot3|side`]: {
+       [`${WW}|meta|rot3|side`]: {
```

#### 1454. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14271` → after: `L14325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14325) · [Before (L14271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14271)

```diff
-         MZ: nD.side3
+         sj: JE.side3
```

#### 1455. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14273` → after: `L14327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14327) · [Before (L14273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14273)

```diff
-       [`${BB}|meta|rot4|side`]: {
+       [`${WW}|meta|rot4|side`]: {
```

#### 1456. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14275` → after: `L14329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14329) · [Before (L14275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14275)

```diff
-         MZ: nD.side4
+         sj: JE.side4
```

#### 1457. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14291-L14293` → after: `L14345-L14347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14345-L14347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14345-L14347) · [Before (L14291-L14293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14291-L14293)

```diff
-           rootMetaDesc: `${BB}|meta|rot1|bot`,
-           MZ: QB
-         } : YB[`${BB}|meta|rot${OB}|${DB}`] = {
+           rootMetaDesc: `${WW}|meta|rot1|bot`,
+           sj: NW
+         } : mW[`${WW}|meta|rot${iW}|${EW}`] = {
```

#### 1458. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14295` → after: `L14349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14349) · [Before (L14295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14295)

```diff
-           MZ: QB
+           sj: NW
```

#### 1459. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14309` → after: `L14363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14363) · [Before (L14309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14309)

```diff
-     return HY.map((GB => uD(`${GB} ${BB} Stairs`, OB(GB))))
+     return Fm.map((OW => dE(`${OW} ${WW} Stairs`, iW(OW))))
```

#### 1460. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14313` → after: `L14367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14367) · [Before (L14313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14313)

```diff
-     const GB = `_${BB} Top`,
+     const OW = `_${WW} Top`,
```

#### 1461. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14319` → after: `L14373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14373) · [Before (L14319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14319)

```diff
-         MZ: kY[QB],
+         sj: Hm[NW],
```

#### 1462. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14325` → after: `L14379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14379) · [Before (L14325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14325)

```diff
-       MZ: dY[DB],
+       sj: nm[EW],
```

#### 1463. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14340` → after: `L14394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14394) · [Before (L14340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14340)

```diff
-         blockModel: `_${BB} Hanging`
+         blockModel: `_${WW} Hanging`
```

#### 1464. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14342` → after: `L14396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14396) · [Before (L14342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14342)

```diff
-       DB = `_${BB} Flag`,
+       EW = `_${WW} Flag`,
```

#### 1465. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14346-L14347` → after: `L14400-L14401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14400-L14401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14400-L14401) · [Before (L14346-L14347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14346-L14347)

```diff
-         rootMetaDesc: `${DB}|meta|rot1|top`,
-         blockModel: `${DB} Hanging`
+         rootMetaDesc: `${EW}|meta|rot1|top`,
+         blockModel: `${EW} Hanging`
```

#### 1466. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14359` → after: `L14413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14413) · [Before (L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14359)

```diff
-       [`${BB}|meta|rot2|bot`]: {
+       [`${WW}|meta|rot2|bot`]: {
```

#### 1467. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14362` → after: `L14416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14416) · [Before (L14362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14362)

```diff
-       [`${BB}|meta|rot3|bot`]: {
+       [`${WW}|meta|rot3|bot`]: {
```

#### 1468. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14365` → after: `L14419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14419) · [Before (L14365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14365)

```diff
-       [`${BB}|meta|rot4|bot`]: {
+       [`${WW}|meta|rot4|bot`]: {
```

#### 1469. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14369` → after: `L14423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14423) · [Before (L14369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14369)

```diff
-       [`${DB}|meta|rot2|top`]: {
+       [`${EW}|meta|rot2|top`]: {
```

#### 1470. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14372` → after: `L14426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14426) · [Before (L14372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14372)

```diff
-       [`${DB}|meta|rot3|top`]: {
+       [`${EW}|meta|rot3|top`]: {
```

#### 1471. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14375` → after: `L14429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14429) · [Before (L14375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14375)

```diff
-       [`${DB}|meta|rot4|top`]: {
+       [`${EW}|meta|rot4|top`]: {
```

#### 1472. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14378` → after: `L14432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14432) · [Before (L14378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14378)

```diff
-       [`${DB}|meta|rot1|side`]: {
+       [`${EW}|meta|rot1|side`]: {
```

#### 1473. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14381` → after: `L14435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14435) · [Before (L14381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14381)

```diff
-       [`${DB}|meta|rot2|side`]: {
+       [`${EW}|meta|rot2|side`]: {
```

#### 1474. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14384` → after: `L14438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14438) · [Before (L14384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14384)

```diff
-       [`${DB}|meta|rot3|side`]: {
+       [`${EW}|meta|rot3|side`]: {
```

#### 1475. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14387` → after: `L14441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14441) · [Before (L14387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14387)

```diff
-       [`${DB}|meta|rot4|side`]: {
+       [`${EW}|meta|rot4|side`]: {
```

#### 1476. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14390` → after: `L14444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14444) · [Before (L14390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14390)

```diff
-       [`${DB}|meta|rot1|bot`]: {
+       [`${EW}|meta|rot1|bot`]: {
```

#### 1477. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14393` → after: `L14447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14447) · [Before (L14393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14393)

```diff
-       [`${DB}|meta|rot2|bot`]: {
+       [`${EW}|meta|rot2|bot`]: {
```

#### 1478. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14396` → after: `L14450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14450) · [Before (L14396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14396)

```diff
-       [`${DB}|meta|rot3|bot`]: {
+       [`${EW}|meta|rot3|bot`]: {
```

#### 1479. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14399` → after: `L14453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14453) · [Before (L14399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14399)

```diff
-       [`${DB}|meta|rot4|bot`]: {
+       [`${EW}|meta|rot4|bot`]: {
```

#### 1480. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14402` → after: `L14456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14456) · [Before (L14402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14402)

```diff
-       [`${BB}|meta|rot1|top`]: {
+       [`${WW}|meta|rot1|top`]: {
```

#### 1481. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14405` → after: `L14459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14459) · [Before (L14405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14405)

```diff
-       [`${BB}|meta|rot2|top`]: {
+       [`${WW}|meta|rot2|top`]: {
```

#### 1482. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14408` → after: `L14462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14462) · [Before (L14408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14408)

```diff
-       [`${BB}|meta|rot3|top`]: {
+       [`${WW}|meta|rot3|top`]: {
```

#### 1483. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14411` → after: `L14465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14465) · [Before (L14411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14411)

```diff
-       [`${BB}|meta|rot4|top`]: {
+       [`${WW}|meta|rot4|top`]: {
```

#### 1484. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14414` → after: `L14468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14468) · [Before (L14414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14414)

```diff
-       [`${BB}|meta|rot1|side`]: {
+       [`${WW}|meta|rot1|side`]: {
```

#### 1485. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14417` → after: `L14471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14471) · [Before (L14417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14417)

```diff
-       [`${BB}|meta|rot2|side`]: {
+       [`${WW}|meta|rot2|side`]: {
```

#### 1486. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14420` → after: `L14474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14474) · [Before (L14420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14420)

```diff
-       [`${BB}|meta|rot3|side`]: {
+       [`${WW}|meta|rot3|side`]: {
```

#### 1487. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14423` → after: `L14477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14477) · [Before (L14423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14423)

```diff
-       [`${BB}|meta|rot4|side`]: {
+       [`${WW}|meta|rot4|side`]: {
```

#### 1488. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14432` → after: `L14486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14486) · [Before (L14432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14432)

```diff
-     return `${GB}_${YB}`
+     return `${OW}_${mW}`
```

#### 1489. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14440` → after: `L14494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14494) · [Before (L14440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14440)

```diff
-     return gD(OB) === gD(GB) ? `${BB}_straight_${gD(OB)}` : `${BB}_elbow_${LD(OB,GB)}`
+     return pE(iW) === pE(OW) ? `${WW}_straight_${pE(iW)}` : `${WW}_elbow_${VE(iW,OW)}`
```

#### 1490. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14444-L14446` → after: `L14498-L14500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14498-L14500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14498-L14500) · [Before (L14444-L14446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14444-L14446)

```diff
-     const QB = `meta|${YB}|none`;
-     if (DB.rootMetaDesc.split("|").slice(1).join("|") !== QB) throw new Error(`${BB} root hub pipe .rootMetaDesc must be |${QB}, got "${DB.rootMetaDesc}"`);
-     if (void 0 !== DB.blockModel) throw new Error(`${BB} root hub pipe data must NOT set blockModel - the builder fills it per-variant`);
+     const NW = `meta|${mW}|none`;
+     if (EW.rootMetaDesc.split("|").slice(1).join("|") !== NW) throw new Error(`${WW} root hub pipe .rootMetaDesc must be |${NW}, got "${EW.rootMetaDesc}"`);
+     if (void 0 !== EW.blockModel) throw new Error(`${WW} root hub pipe data must NOT set blockModel - the builder fills it per-variant`);
```

#### 1491. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14457` → after: `L14511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14511) · [Before (L14457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14457)

```diff
-           blockModel: `${OB}_${YB}_${GB}`
+           blockModel: `${iW}_${mW}_${OW}`
```

#### 1492. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14460` → after: `L14514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14514) · [Before (L14460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14460)

```diff
-     for (const yB of iD) yB !== GB && (jB[`${BB}|meta|${YB}|${yB}`] = oB(`${OB}_${YB}_${yB}`));
+     for (const cW of DE) cW !== OW && (LW[`${WW}|meta|${mW}|${cW}`] = PW(`${iW}_${mW}_${cW}`));
```

#### 1493. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14465` → after: `L14519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14519) · [Before (L14465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14465)

```diff
-     console.assert("meta|conn|none" === GB.rootMetaDesc.split("|").slice(1).join("|"), `${BB} root pipe .rootMetaDesc must be |meta|conn|none`), console.assert(void 0 === GB.blockModel, `${BB} root pipe data must NOT set blockModel - the builder fills it per-variant`);
+     console.assert("meta|conn|none" === OW.rootMetaDesc.split("|").slice(1).join("|"), `${WW} root pipe .rootMetaDesc must be |meta|conn|none`), console.assert(void 0 === OW.blockModel, `${WW} root pipe data must NOT set blockModel - the builder fills it per-variant`);
```

#### 1494. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14476` → after: `L14530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14530) · [Before (L14476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14476)

```diff
-           blockModel: `${OB}_isolated`
+           blockModel: `${iW}_isolated`
```

#### 1495. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14479` → after: `L14533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14533) · [Before (L14479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14479)

```diff
-     for (const QB of iD) DB[`${BB}|meta|conn|${QB}`] = YB(`${OB}_end_${QB}`);
+     for (const NW of DE) EW[`${WW}|meta|conn|${NW}`] = mW(`${iW}_end_${NW}`);
```

#### 1496. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14483` → after: `L14537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14537) · [Before (L14483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14483)

```diff
-         DB[`${BB}|meta|conn|${LD(oB,jB)}`] = YB(rD(OB, oB, jB))
+         EW[`${WW}|meta|conn|${VE(PW,LW)}`] = mW(fE(iW, PW, LW))
```

#### 1497. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14489` → after: `L14543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14543) · [Before (L14489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14489)

```diff
-     console.assert("meta|rot1" === OB.rootMetaDesc.split("|").slice(1).join("|"), `${BB} root block .rootMetaDesc must be |meta|rot1`);
+     console.assert("meta|rot1" === iW.rootMetaDesc.split("|").slice(1).join("|"), `${WW} root block .rootMetaDesc must be |meta|rot1`);
```

#### 1498. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14495` → after: `L14549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14549) · [Before (L14495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14495)

```diff
-       [`${BB}|meta|rot2`]: {
+       [`${WW}|meta|rot2`]: {
```

#### 1499. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14498` → after: `L14552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14552) · [Before (L14498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14498)

```diff
-       [`${BB}|meta|rot3`]: {
+       [`${WW}|meta|rot3`]: {
```

#### 1500. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14501` → after: `L14555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14555) · [Before (L14501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14501)

```diff
-       [`${BB}|meta|rot4`]: {
+       [`${WW}|meta|rot4`]: {
```

#### 1501. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14535` → after: `L14589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14589) · [Before (L14535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14535)

```diff
-       [`${BB}|meta|rot2`]: {
+       [`${WW}|meta|rot2`]: {
```

#### 1502. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14539` → after: `L14593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14593) · [Before (L14539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14539)

```diff
-       [`${BB}|meta|rot3`]: {
+       [`${WW}|meta|rot3`]: {
```

#### 1503. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14543` → after: `L14597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14597) · [Before (L14543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14543)

```diff
-       [`${BB}|meta|rot4`]: {
+       [`${WW}|meta|rot4`]: {
```

#### 1504. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14556` → after: `L14610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14610) · [Before (L14556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14556)

```diff
-           translationKey: `item:${bY(BB)}MobSpawnerBlock`
+           translationKey: `item:${rm(WW)}MobSpawnerBlock`
```

#### 1505. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14559` → after: `L14613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14613) · [Before (L14559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14559)

```diff
-           translationKey: `item:${bY(BB)}MobSpawnerBlockDescription`
+           translationKey: `item:${rm(WW)}MobSpawnerBlockDescription`
```

#### 1506. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14561` → after: `L14615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14615) · [Before (L14561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14561)

```diff
-         itemTexture: `${CY(BB)}_spawner_block_icon`,
+         itemTexture: `${zm(WW)}_spawner_block_icon`,
```

#### 1507. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14563` → after: `L14617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14617) · [Before (L14563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14563)

```diff
-         textureInfo: [`mob_spawner_${GB}_block_side`, "mob_spawner_block_top"],
+         textureInfo: [`mob_spawner_${OW}_block_side`, "mob_spawner_block_top"],
```

#### 1508. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14582` → after: `L14636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14636) · [Before (L14582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14582)

```diff
-       YB = `${CY(BB)}_painting`,
+       mW = `${zm(WW)}_painting`,
```

#### 1509. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14585` → after: `L14639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14639) · [Before (L14585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14585)

```diff
-       ...ED(`_${GB} Top Left`, {
+       ...BE(`_${OW} Top Left`, {
```

#### 1510. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14590` → after: `L14644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14644) · [Before (L14590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14590)

```diff
-         rootMetaDesc: `_${GB} Top Left|meta|rot1`,
+         rootMetaDesc: `_${OW} Top Left|meta|rot1`,
```

#### 1511. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14594` → after: `L14648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14648) · [Before (L14594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14594)

```diff
-         blockModel: `_${DB} Top Left`,
+         blockModel: `_${EW} Top Left`,
```

#### 1512. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14598` → after: `L14652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14652) · [Before (L14598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14598)

```diff
-       ...ED(`_${GB} Top Right`, {
+       ...BE(`_${OW} Top Right`, {
```

#### 1513. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14603` → after: `L14657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14657) · [Before (L14603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14603)

```diff
-         rootMetaDesc: `_${GB} Top Right|meta|rot1`,
+         rootMetaDesc: `_${OW} Top Right|meta|rot1`,
```

#### 1514. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14607` → after: `L14661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14661) · [Before (L14607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14607)

```diff
-         blockModel: `_${DB} Top Right`,
+         blockModel: `_${EW} Top Right`,
```

#### 1515. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14611` → after: `L14665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14665) · [Before (L14611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14611)

```diff
-       ...ED(`${GB}`, {
+       ...BE(`${OW}`, {
```

#### 1516. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14616` → after: `L14670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14670) · [Before (L14616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14616)

```diff
-         rootMetaDesc: `${GB}|meta|rot1`,
+         rootMetaDesc: `${OW}|meta|rot1`,
```

#### 1517. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14620` → after: `L14674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14674) · [Before (L14620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14620)

```diff
-         blockModel: `_${DB} Bottom Left`,
+         blockModel: `_${EW} Bottom Left`,
```

#### 1518. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14624` → after: `L14678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14678) · [Before (L14624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14624)

```diff
-       ...ED(`_${GB} Bottom Right`, {
+       ...BE(`_${OW} Bottom Right`, {
```

#### 1519. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14629` → after: `L14683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14683) · [Before (L14629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14629)

```diff
-         rootMetaDesc: `_${GB} Bottom Right|meta|rot1`,
+         rootMetaDesc: `_${OW} Bottom Right|meta|rot1`,
```

#### 1520. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14633` → after: `L14687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14687) · [Before (L14633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14633)

```diff
-         blockModel: `_${DB} Bottom Right`,
+         blockModel: `_${EW} Bottom Right`,
```

#### 1521. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14641-L14642` → after: `L14695-L14696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14695-L14696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14695-L14696) · [Before (L14641-L14642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14641-L14642)

```diff
-     const QB = `_${BB} Back`,
-       oB = `_${BB} Dish`,
+     const NW = `_${WW} Back`,
+       PW = `_${WW} Dish`,
```

#### 1522. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14649` → after: `L14703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14703) · [Before (L14649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14649)

```diff
-           translationKey: `item:${bY(BB)}`
+           translationKey: `item:${rm(WW)}`
```

#### 1523. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14657` → after: `L14711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14711) · [Before (L14657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14657)

```diff
-         rootMetaDesc: `${BB}|meta|rot1`
+         rootMetaDesc: `${WW}|meta|rot1`
```

#### 1524. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14670` → after: `L14724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14724) · [Before (L14670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14670)

```diff
-         rootMetaDesc: `${QB}|meta|rot1`
+         rootMetaDesc: `${NW}|meta|rot1`
```

#### 1525. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14677` → after: `L14731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14731) · [Before (L14677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14677)

```diff
-         rootMetaDesc: `${oB}|meta|rot1`,
+         rootMetaDesc: `${PW}|meta|rot1`,
```

#### 1526. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14719` → after: `L14773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14773) · [Before (L14719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14719)

```diff
-         rootMetaDesc: `${yB}|meta|rot1`,
+         rootMetaDesc: `${cW}|meta|rot1`,
```

#### 1527. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14771` → after: `L14825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14825) · [Before (L14771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14771)

```diff
-     return `_${vD} ${GB} L${OB}`
+     return `_${QE} ${OW} L${iW}`
```

#### 1528. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14775` → after: `L14829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14829) · [Before (L14775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14775)

```diff
-     return 1 === BB ? vD : `${vD} S${BB}`
+     return 1 === WW ? QE : `${QE} S${WW}`
```

#### 1529. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14781` → after: `L14835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14835) · [Before (L14781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14781)

```diff
-         translationKey: `item:small${BB.replaceAll(" ","")}Pod`
+         translationKey: `item:small${WW.replaceAll(" ","")}Pod`
```

#### 1530. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14784` → after: `L14838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14838) · [Before (L14784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14784)

```diff
-       itemTexture: `small_pod_${CY(BB)}_icon`,
+       itemTexture: `small_pod_${zm(WW)}_icon`,
```

#### 1531. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14795` → after: `L14849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14849) · [Before (L14795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14795)

```diff
-       [`Small ${BB} Pod`]: {
+       [`Small ${WW} Pod`]: {
```

#### 1532. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14797` → after: `L14851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14851) · [Before (L14797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14797)

```diff
-         blockModel: `Small ${BB} Pod`
+         blockModel: `Small ${WW} Pod`
```

#### 1533. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14799` → after: `L14853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14853) · [Before (L14799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14799)

```diff
-       [`_Small ${BB} Pod Mid`]: {
+       [`_Small ${WW} Pod Mid`]: {
```

#### 1534. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14801` → after: `L14855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14855) · [Before (L14801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14801)

```diff
-         blockModel: `_Small ${BB} Pod Mid`
+         blockModel: `_Small ${WW} Pod Mid`
```

#### 1535. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14803` → after: `L14857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14857) · [Before (L14803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14803)

```diff
-       [`_Small ${BB} Pod Top`]: {
+       [`_Small ${WW} Pod Top`]: {
```

#### 1536. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14805` → after: `L14859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14859) · [Before (L14805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14805)

```diff
-         blockModel: `_Small ${BB} Pod Top`
+         blockModel: `_Small ${WW} Pod Top`
```

#### 1537. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14828` → after: `L14882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14882) · [Before (L14828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14828)

```diff
-     console.assert("meta|rot1|bot" === OB.rootMetaDesc.split("|").slice(1).join("|"), `${BB} root block .rootMetaDesc must be |meta|rot1|bot`), console.assert("string" === typeof OB.blockModel, `${BB} root block .blockModel must be a string`);
+     console.assert("meta|rot1|bot" === iW.rootMetaDesc.split("|").slice(1).join("|"), `${WW} root block .rootMetaDesc must be |meta|rot1|bot`), console.assert("string" === typeof iW.blockModel, `${WW} root block .blockModel must be a string`);
```

#### 1538. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14846` → after: `L14900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14900) · [Before (L14846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14846)

```diff
-         yRotOffset: Math.PI + (null !== QB && void 0 !== QB ? QB : 0),
+         yRotOffset: Math.PI + (null !== NW && void 0 !== NW ? NW : 0),
```

#### 1539. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14855` → after: `L14909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14909) · [Before (L14855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14855)

```diff
-         [`${BB}|meta|rot1|top`]: {
+         [`${WW}|meta|rot1|top`]: {
```

#### 1540. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14859` → after: `L14913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14913) · [Before (L14859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14859)

```diff
-       [`${BB}|meta|rot1|side`]: {
+       [`${WW}|meta|rot1|side`]: {
```

#### 1541. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14862` → after: `L14916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14916) · [Before (L14862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14862)

```diff
-       [`${BB}|meta|rot2|side`]: {
+       [`${WW}|meta|rot2|side`]: {
```

#### 1542. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14865` → after: `L14919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14919) · [Before (L14865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14865)

```diff
-       [`${BB}|meta|rot3|side`]: {
+       [`${WW}|meta|rot3|side`]: {
```

#### 1543. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14868` → after: `L14922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R14922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L14922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14922) · [Before (L14868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14868)

```diff
-       [`${BB}|meta|rot4|side`]: {
+       [`${WW}|meta|rot4|side`]: {
```

#### 1544. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14974` → after: `L15028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15028) · [Before (L14974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14974)

```diff
-       animTextures: [0, 1, 2, 3].map((OB => `${BB}_running${OB}`)),
+       animTextures: [0, 1, 2, 3].map((iW => `${WW}_running${iW}`)),
```

#### 1545. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14982-L14983` → after: `L15036-L15037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15036-L15037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15036-L15037) · [Before (L14982-L14983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14982-L14983)

```diff
-     const QB = GB ? RQ(`${BB}_side`) : `${BB}_side`,
-       oB = null !== (YB = OB.underside) && void 0 !== YB ? YB : "machine_side";
+     const NW = OW ? KN(`${WW}_side`) : `${WW}_side`,
+       PW = null !== (mW = iW.underside) && void 0 !== mW ? mW : "machine_side";
```

#### 1546. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14985` → after: `L15039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15039) · [Before (L14985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14985)

```diff
-       textureInfo: [QB, `${BB}_top`, oB],
+       textureInfo: [NW, `${WW}_top`, PW],
```

#### 1547. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14988-L14990` → after: `L15042-L15044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15042-L15044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15042-L15044) · [Before (L14988-L14990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14988-L14990)

```diff
-     const jB = GB && OB.backRuns ? RQ(`${BB}_back`) : `${BB}_back`,
-       yB = [1, 2, 3, 4].map((OB => `${BB}_top[rot[${OB}`)),
-       JB = [null !== (DB = OB.front) && void 0 !== DB ? DB : `${BB}_front`, QB, ...yB, oB, jB];
+     const LW = OW && iW.backRuns ? KN(`${WW}_back`) : `${WW}_back`,
+       cW = [1, 2, 3, 4].map((iW => `${WW}_top[rot[${iW}`)),
+       wW = [null !== (EW = iW.front) && void 0 !== EW ? EW : `${WW}_front`, NW, ...cW, PW, LW];
```

#### 1548. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14992` → after: `L15046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15046) · [Before (L14992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L14992)

```diff
-       const OB = GB ? RQ(`${BB}_side_flip`) : `${BB}_side_flip`;
+       const iW = OW ? KN(`${WW}_side_flip`) : `${WW}_side_flip`;
```

#### 1549. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15007` → after: `L15061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15061) · [Before (L15007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15007)

```diff
-         translationKey: `item:${BB}`
+         translationKey: `item:${WW}`
```

#### 1550. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15010` → after: `L15064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15064) · [Before (L15010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15010)

```diff
-         translationKey: `item:${BB}Description`
+         translationKey: `item:${WW}Description`
```

#### 1551. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15029` → after: `L15083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15083) · [Before (L15029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15029)

```diff
-       rootMetaDesc: `${BB}|meta|rot1`
+       rootMetaDesc: `${WW}|meta|rot1`
```

#### 1552. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15040` → after: `L15094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15094) · [Before (L15040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15040)

```diff
-       jB[`${BB}|meta|rot${DB+1}|Running`] = {
+       LW[`${WW}|meta|rot${EW+1}|Running`] = {
```

#### 1553. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15043` → after: `L15097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15097) · [Before (L15043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15043)

```diff
-         dp: YB
+         oA: mW
```

#### 1554. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15056` → after: `L15110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15110) · [Before (L15056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15056)

```diff
-     return null !== GB ? `${BB}|meta|rot${OB}|${GB}` : 1 === OB ? BB : `${BB}|meta|rot${OB}`
+     return null !== OW ? `${WW}|meta|rot${iW}|${OW}` : 1 === iW ? WW : `${WW}|meta|rot${iW}`
```

#### 1555. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15058` → after: `L15112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15112) · [Before (L15058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15058)

```diff
-   QG.E, QG.E;
+   LO.A, LO.A;
```

#### 1556. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15060` → after: `L15114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15114) · [Before (L15060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15060)

```diff
-     dQ = (0, RG.g)([
+     uN = (0, MO.d)([
```

#### 1557. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15070` → after: `L15124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15124) · [Before (L15070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15070)

```diff
-         translationKey: `item:${BB}`
+         translationKey: `item:${WW}`
```

#### 1558. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15073` → after: `L15127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15127) · [Before (L15073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15073)

```diff
-         translationKey: `item:${BB}Description`
+         translationKey: `item:${WW}Description`
```

#### 1559. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15081` → after: `L15135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15135) · [Before (L15081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15081)

```diff
-       MZ: dQ,
+       sj: uN,
```

#### 1560. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15097` → after: `L15151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15151) · [Before (L15097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15097)

```diff
-       rootMetaDesc: `${BB}|meta|rot1`
+       rootMetaDesc: `${WW}|meta|rot1`
```

#### 1561. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15099` → after: `L15153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15153) · [Before (L15099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15099)

```diff
-     for (let oB = 1; oB <= 4; oB++) QB[1 === oB ? BB : `${BB}|meta|rot${oB}`].surfaceVelocity = uQ(oB, DB);
+     for (let PW = 1; PW <= 4; PW++) NW[1 === PW ? WW : `${WW}|meta|rot${PW}`].surfaceVelocity = dN(PW, EW);
```

#### 1562. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15107` → after: `L15161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15161) · [Before (L15107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15107)

```diff
-       const jB = `${GB}_${"turnLeft"===oB?"turn_left":"turn_right"}`;
+       const LW = `${OW}_${"turnLeft"===PW?"turn_left":"turn_right"}`;
```

#### 1563. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15122` → after: `L15176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15176) · [Before (L15122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15122)

```diff
-           translationKey: `item:${OB}`
+           translationKey: `item:${iW}`
```

#### 1564. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15125` → after: `L15179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15179) · [Before (L15125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15125)

```diff
-           translationKey: `item:${OB}Description`
+           translationKey: `item:${iW}Description`
```

#### 1565. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15128` → after: `L15182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15182) · [Before (L15128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15128)

```diff
-         textureInfo: ["belt_tunnel_mouth", "belt_tunnel_side", ...[1, 2, 3, 4].map((OB => `${BB}[rot[${OB}`)), "conveyor_belt_bottom", "belt_tunnel_back"],
+         textureInfo: ["belt_tunnel_mouth", "belt_tunnel_side", ...[1, 2, 3, 4].map((iW => `${WW}[rot[${iW}`)), "conveyor_belt_bottom", "belt_tunnel_back"],
```

#### 1566. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15135` → after: `L15189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15189) · [Before (L15135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15135)

```diff
-         rootMetaDesc: `${BB}|meta|rot1`
+         rootMetaDesc: `${WW}|meta|rot1`
```

#### 1567. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15138` → after: `L15192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15192) · [Before (L15138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15138)

```diff
-       YB[`${BB}|meta|rot${DB+1}|exit`] = {
+       mW[`${WW}|meta|rot${EW+1}|exit`] = {
```

#### 1568. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15148` → after: `L15202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15202) · [Before (L15148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15148)

```diff
-         translationKey: `item:${OB}`
+         translationKey: `item:${iW}`
```

#### 1569. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15151` → after: `L15205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15205) · [Before (L15151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15151)

```diff
-         translationKey: `item:${OB}Description`
+         translationKey: `item:${iW}Description`
```

#### 1570. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15154` → after: `L15208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15208) · [Before (L15154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15154)

```diff
-       textureInfo: [`${GB}_top`, `${GB}_side`, "conveyor_belt_bottom"],
+       textureInfo: [`${OW}_top`, `${OW}_side`, "conveyor_belt_bottom"],
```

#### 1571. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15179` → after: `L15233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15233) · [Before (L15179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15179)

```diff
-       dp: GB,
+       oA: OW,
```

#### 1572. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15187` → after: `L15241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15241) · [Before (L15187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15187)

```diff
-         translationKey: `item:${OB}`
+         translationKey: `item:${iW}`
```

#### 1573. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15190` → after: `L15244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15244) · [Before (L15190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15190)

```diff
-         translationKey: `item:${OB}Description`
+         translationKey: `item:${iW}Description`
```

#### 1574. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15193` → after: `L15247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15247) · [Before (L15193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15193)

```diff
-       textureInfo: [`${GB}_side`, `${GB}_top`],
+       textureInfo: [`${OW}_side`, `${OW}_top`],
```

#### 1575. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15207` → after: `L15261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15261) · [Before (L15207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15207)

```diff
-         translationKey: `item:${OB}`
+         translationKey: `item:${iW}`
```

#### 1576. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15210` → after: `L15264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15264) · [Before (L15210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15210)

```diff
-         translationKey: `item:${OB}Description`
+         translationKey: `item:${iW}Description`
```

#### 1577. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15213` → after: `L15267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15267) · [Before (L15213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15213)

```diff
-       textureInfo: [`${GB}_top`, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : `${GB}_side`],
+       textureInfo: [`${OW}_top`, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : `${OW}_side`],
```

#### 1578. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15228` → after: `L15282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15282) · [Before (L15228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15228)

```diff
-         translationKey: `item:${OB}`
+         translationKey: `item:${iW}`
```

#### 1579. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15231` → after: `L15285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15285) · [Before (L15231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15231)

```diff
-         translationKey: `item:${OB}Description`
+         translationKey: `item:${iW}Description`
```

#### 1580. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15240` → after: `L15294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15294) · [Before (L15240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15240)

```diff
-         dp: YB
+         oA: mW
```

#### 1581. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15255` → after: `L15309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15309) · [Before (L15255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15255)

```diff
-       underside: `${BB}_bottom`,
+       underside: `${WW}_bottom`,
```

#### 1582. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15265-L15266` → after: `L15319-L15320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15319-L15320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15319-L15320) · [Before (L15265-L15266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15265-L15266)

```diff
-     const YB = "cryo" === BB ? eQ : aQ;
-     return GB || 0 !== OB ? `${YB}|meta|conn|${HQ(OB)}${GB?"|Full":""}` : YB
+     const mW = "cryo" === WW ? IN : GN;
+     return OW || 0 !== iW ? `${mW}|meta|conn|${FN(iW)}${OW?"|Full":""}` : mW
```

#### 1583. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15271` → after: `L15325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15325) · [Before (L15271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15271)

```diff
-     return 0 === BB ? bQ : `${bQ}|meta|rot1|Fill${BB}`
+     return 0 === WW ? rN : `${rN}|meta|rot1|Fill${WW}`
```

#### 1584. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15282` → after: `L15336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15336) · [Before (L15282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15282)

```diff
-           translationKey: `item:${GB}`
+           translationKey: `item:${OW}`
```

#### 1585. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15302` → after: `L15356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15356) · [Before (L15302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15302)

```diff
-         blockModel: `${YB}_${HQ(jB)}`,
+         blockModel: `${mW}_${FN(LW)}`,
```

#### 1586. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15304` → after: `L15358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15358) · [Before (L15304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15304)

```diff
-           rootMetaDesc: `${GB}|meta|conn|none`
+           rootMetaDesc: `${OW}|meta|conn|none`
```

#### 1587. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15326` → after: `L15380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15380) · [Before (L15326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15326)

```diff
-       const GB = Do(`fluid_tank_fill${OB}`, 4, "_", 300),
+       const OW = LP(`fluid_tank_fill${iW}`, 4, "_", 300),
```

#### 1588. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15370` → after: `L15424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15424) · [Before (L15370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15370)

```diff
-       }, ((OB, YB) => `${BB}${GB}${YB}`)),
+       }, ((iW, mW) => `${WW}${OW}${mW}`)),
```

#### 1589. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15376` → after: `L15430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15430) · [Before (L15376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15376)

```diff
-     return [`${BB}0`, Do(BB, OB, "")]
+     return [`${WW}0`, LP(WW, iW, "")]
```

#### 1590. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15380` → after: `L15434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15434) · [Before (L15380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15380)

```diff
-     return [1, 2, 3, 4].map((OB => `${BB}[rot[${OB}`))
+     return [1, 2, 3, 4].map((iW => `${WW}[rot[${iW}`))
```

#### 1591. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15386` → after: `L15440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15440) · [Before (L15386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15386)

```diff
-         translationKey: `item:${BB}`
+         translationKey: `item:${WW}`
```

#### 1592. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15389` → after: `L15443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15443) · [Before (L15389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15389)

```diff
-         translationKey: `item:${BB}Description`
+         translationKey: `item:${WW}Description`
```

#### 1593. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15418` → after: `L15472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15472) · [Before (L15418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15418)

```diff
-       [`${BB}|meta|rot1|${GB}`]: {
+       [`${WW}|meta|rot1|${OW}`]: {
```

#### 1594. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15428` → after: `L15482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15482) · [Before (L15428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15428)

```diff
-       rootMetaDesc: `${BB}|meta|rot1`
+       rootMetaDesc: `${WW}|meta|rot1`
```

#### 1595. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15435` → after: `L15489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15489) · [Before (L15435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15435)

```diff
-       DB[`${BB}|meta|rot${QB+1}|${OB}`] = {
+       EW[`${WW}|meta|rot${NW+1}|${iW}`] = {
```

#### 1596. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15444` → after: `L15498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15498) · [Before (L15444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15444)

```diff
-     for (let QB = 1; QB <= 4; QB++) DB[`${BB}|meta|rot${QB}|${GB}`] = {
+     for (let NW = 1; NW <= 4; NW++) EW[`${WW}|meta|rot${NW}|${OW}`] = {
```

#### 1597. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15459` → after: `L15513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15513) · [Before (L15459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15459)

```diff
-           dp: OB
+           oA: iW
```

#### 1598. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15465` → after: `L15519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15519) · [Before (L15465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15465)

```diff
-         animTextures: [`${QB.texture}0`, `${QB.texture}1`],
+         animTextures: [`${NW.texture}0`, `${NW.texture}1`],
```

#### 1599. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15483` → after: `L15537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15537) · [Before (L15483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15483)

```diff
-         dp: JQ
+         oA: xN
```

#### 1600. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15542` → after: `L15596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15596) · [Before (L15542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15542)

```diff
-       dp: [8, 3, 8]
+       oA: [8, 3, 8]
```

#### 1601. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15550` → after: `L15604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15604) · [Before (L15550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15550)

```diff
-       dp: [2, 6, 3]
+       oA: [2, 6, 3]
```

#### 1602. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15559` → after: `L15613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15613) · [Before (L15559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15559)

```diff
-       dp: [6, 10, 2]
+       oA: [6, 10, 2]
```

#### 1603. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15564` → after: `L15618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15618) · [Before (L15564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15564)

```diff
-     return jo(BB, [`${OB}_side`, `${OB}_top`], {
+     return tP(WW, [`${iW}_side`, `${iW}_top`], {
```

#### 1604. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15590` → after: `L15644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15644) · [Before (L15590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15590)

```diff
-     return `${BB}|Flow${OB}`
+     return `${WW}|Flow${iW}`
```

#### 1605. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15594` → after: `L15648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15648) · [Before (L15594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15594)

```diff
-     return `${BB}|Falling`
+     return `${WW}|Falling`
```

#### 1606. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15605` → after: `L15659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15659) · [Before (L15605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15605)

```diff
-       fl: !0,
+       dl: !0,
```

#### 1607. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15609` → after: `L15663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15663) · [Before (L15609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15609)

```diff
-         dp: [14, 8, 2]
+         oA: [14, 8, 2]
```

#### 1608. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15618-L15619` → after: `L15672-L15673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15672-L15673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15672-L15673) · [Before (L15618-L15619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15618-L15619)

```diff
-     if (OB.slice(YB.length) !== DB) throw new Error(`${BB} and ${OB}: an animation's frames must share a rotation to bake between them`);
-     return `${GB}~${YB}~50${DB}`
+     if (iW.slice(mW.length) !== EW) throw new Error(`${WW} and ${iW}: an animation's frames must share a rotation to bake between them`);
+     return `${OW}~${mW}~50${EW}`
```

#### 1609. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15625` → after: `L15679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15679) · [Before (L15625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15625)

```diff
-     const GB = null !== (OB = BB.animationInterval) && void 0 !== OB ? OB : 200,
+     const OW = null !== (iW = WW.animationInterval) && void 0 !== iW ? iW : 200,
```

#### 1610. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15851` → after: `L15905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15905) · [Before (L15851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15851)

```diff
-       block: "Maple" === BB ? "Showcase" : `${BB} Item Pedestal`
+       block: "Maple" === WW ? "Showcase" : `${WW} Item Pedestal`
```

#### 1611. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15878` → after: `L15932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15932) · [Before (L15878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15878)

```diff
-     dp: [14, 8, 11],
+     oA: [14, 8, 11],
```

#### 1612. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L15905` → after: `L15959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R15959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15959) · [Before (L15905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L15905)

```diff
-   const to = (0, RG.g)([
+   const WL = (0, MO.d)([
```

#### 1613. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L16209` → after: `L16263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R16263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L16263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L16263) · [Before (L16209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L16209)

```diff
-         translationKey: `item:${bY(BB)}ConcreteStairs`
+         translationKey: `item:${rm(WW)}ConcreteStairs`
```

#### 1614. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L16212` → after: `L16266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R16266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L16266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L16266) · [Before (L16212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L16212)

```diff
-       textureInfo: `${CY(BB)}_concrete`,
+       textureInfo: `${zm(WW)}_concrete`,
```

#### 1615. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L16216` → after: `L16270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R16270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L16270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L16270) · [Before (L16216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L16216)

```diff
-         colour: `$t(colour:${CY(BB)})`
+         colour: `$t(colour:${zm(WW)})`
```

#### 1616. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L16228` → after: `L16282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R16282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L16282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L16282) · [Before (L16228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L16228)

```diff
-         textureInfo: `chalk_${CY(BB)}`,
+         textureInfo: `chalk_${zm(WW)}`,
```

#### 1617. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L16233` → after: `L16287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R16287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L16287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L16287) · [Before (L16233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L16233)

```diff
-         colour: `$t(colour:${CY(BB)})`
+         colour: `$t(colour:${zm(WW)})`
```

#### 1618. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L16245` → after: `L16299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R16299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L16299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L16299) · [Before (L16245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L16245)

```diff
-         textureInfo: `chalk_bricks_${CY(BB)}`,
+         textureInfo: `chalk_bricks_${zm(WW)}`,
```

#### 1619. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L16633` → after: `L16687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R16687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L16687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L16687) · [Before (L16633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L16633)

```diff
-         dp: [4, 4, 0]
+         oA: [4, 4, 0]
```

#### 1620. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L16643` → after: `L16697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R16697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L16697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L16697) · [Before (L16643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L16643)

```diff
-         dp: [0, 0, 2]
+         oA: [0, 0, 2]
```

#### 1621. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L16653` → after: `L16707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R16707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L16707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L16707) · [Before (L16653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L16653)

```diff
-         dp: [1, 3, 1]
+         oA: [1, 3, 1]
```

#### 1622. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L16675` → after: `L16729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R16729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L16729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L16729) · [Before (L16675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L16675)

```diff
-         dp: [2, 5, 5]
+         oA: [2, 5, 5]
```

#### 1623. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L17209` → after: `L17263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R17263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L17263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L17263) · [Before (L17209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L17209)

```diff
-         dp: [14, 10, 4]
+         oA: [14, 10, 4]
```

#### 1624. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L17455` → after: `L17509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R17509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L17509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L17509) · [Before (L17455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L17455)

```diff
-         dp: [14, 14, 14]
+         oA: [14, 14, 14]
```

#### 1625. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L17467` → after: `L17521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R17521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L17521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L17521) · [Before (L17467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L17467)

```diff
-         fl: !0,
+         dl: !0,
```

#### 1626. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L17607` → after: `L17661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R17661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L17661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L17661) · [Before (L17607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L17607)

```diff
-         dp: [5, 14, 14]
+         oA: [5, 14, 14]
```

#### 1627. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L17620` → after: `L17674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R17674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L17674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L17674) · [Before (L17620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L17620)

```diff
-         dp: [15, 15, 13]
+         oA: [15, 15, 13]
```

#### 1628. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L17844` → after: `L17898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R17898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L17898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L17898) · [Before (L17844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L17844)

```diff
-         dp: [8, 5, 2],
+         oA: [8, 5, 2],
```

#### 1629. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L19383` → after: `L19437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R19437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L19437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L19437) · [Before (L19383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L19383)

```diff
-         dp: [6, 6, 6]
+         oA: [6, 6, 6]
```

#### 1630. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L19417` → after: `L19471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R19471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L19471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L19471) · [Before (L19417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L19417)

```diff
-         dp: [9, 3, 1]
+         oA: [9, 3, 1]
```

#### 1631. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L21508` → after: `L21562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R21562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L21562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L21562) · [Before (L21508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L21508)

```diff
-         dp: [14, 10, 4]
+         oA: [14, 10, 4]
```

#### 1632. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L21914` → after: `L21968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R21968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L21968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L21968) · [Before (L21914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L21914)

```diff
-         MZ: to,
+         sj: WL,
```

#### 1633. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L21931` → after: `L21985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R21985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L21985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L21985) · [Before (L21931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L21931)

```diff
-         MZ: to,
+         sj: WL,
```

#### 1634. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L21948` → after: `L22002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22002) · [Before (L21948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L21948)

```diff
-         MZ: to,
+         sj: WL,
```

#### 1635. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L21965` → after: `L22019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22019) · [Before (L21965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L21965)

```diff
-         MZ: to,
+         sj: WL,
```

#### 1636. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L21982` → after: `L22036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22036) · [Before (L21982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L21982)

```diff
-         MZ: to,
+         sj: WL,
```

#### 1637. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L21999` → after: `L22053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22053) · [Before (L21999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L21999)

```diff
-         MZ: to,
+         sj: WL,
```

#### 1638. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22016` → after: `L22070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22070) · [Before (L22016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22016)

```diff
-         MZ: to,
+         sj: WL,
```

#### 1639. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22033` → after: `L22087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22087) · [Before (L22033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22033)

```diff
-         MZ: to,
+         sj: WL,
```

#### 1640. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22050` → after: `L22104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22104) · [Before (L22050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22050)

```diff
-         MZ: to,
+         sj: WL,
```

#### 1641. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22067` → after: `L22121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22121) · [Before (L22067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22067)

```diff
-         MZ: to,
+         sj: WL,
```

#### 1642. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22084` → after: `L22138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22138) · [Before (L22084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22084)

```diff
-         MZ: to,
+         sj: WL,
```

#### 1643. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22101` → after: `L22155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22155) · [Before (L22101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22101)

```diff
-         MZ: to,
+         sj: WL,
```

#### 1644. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22118` → after: `L22172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22172) · [Before (L22118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22118)

```diff
-         MZ: to,
+         sj: WL,
```

#### 1645. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22135` → after: `L22189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22189) · [Before (L22135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22135)

```diff
-         MZ: to,
+         sj: WL,
```

#### 1646. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22152` → after: `L22206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22206) · [Before (L22152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22152)

```diff
-         MZ: to,
+         sj: WL,
```

#### 1647. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22169` → after: `L22223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22223) · [Before (L22169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22169)

```diff
-         MZ: to,
+         sj: WL,
```

#### 1648. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22209` → after: `L22263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22263) · [Before (L22209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22209)

```diff
-           [`${BB}|meta|rot2|books6`]: {
+           [`${WW}|meta|rot2|books6`]: {
```

#### 1649. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22212` → after: `L22266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22266) · [Before (L22212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22212)

```diff
-           [`${BB}|meta|rot3|books6`]: {
+           [`${WW}|meta|rot3|books6`]: {
```

#### 1650. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22215` → after: `L22269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22269) · [Before (L22215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22215)

```diff
-           [`${BB}|meta|rot4|books6`]: {
+           [`${WW}|meta|rot4|books6`]: {
```

#### 1651. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22218` → after: `L22272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22272) · [Before (L22218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22218)

```diff
-           [`Empty ${BB}`]: Object.assign({
+           [`Empty ${WW}`]: Object.assign({
```

#### 1652. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22225` → after: `L22279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22279) · [Before (L22225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22225)

```diff
-             rootMetaDesc: `Empty ${BB}|meta|rot1|books0`
+             rootMetaDesc: `Empty ${WW}|meta|rot1|books0`
```

#### 1653. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22227` → after: `L22281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22281) · [Before (L22227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22227)

```diff
-           [`Empty ${BB}|meta|rot2|books0`]: Object.assign({
+           [`Empty ${WW}|meta|rot2|books0`]: Object.assign({
```

#### 1654. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22232` → after: `L22286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22286) · [Before (L22232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22232)

```diff
-           [`Empty ${BB}|meta|rot3|books0`]: Object.assign({
+           [`Empty ${WW}|meta|rot3|books0`]: Object.assign({
```

#### 1655. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22237` → after: `L22291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22291) · [Before (L22237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22237)

```diff
-           [`Empty ${BB}|meta|rot4|books0`]: Object.assign({
+           [`Empty ${WW}|meta|rot4|books0`]: Object.assign({
```

#### 1656. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22244` → after: `L22298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22298) · [Before (L22244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22244)

```diff
-           [`${BB}|meta|rot1|books${yB}`]: Object.assign({
+           [`${WW}|meta|rot1|books${cW}`]: Object.assign({
```

#### 1657. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22250` → after: `L22304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22304) · [Before (L22250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22250)

```diff
-           [`${BB}|meta|rot2|books${yB}`]: Object.assign({
+           [`${WW}|meta|rot2|books${cW}`]: Object.assign({
```

#### 1658. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22256` → after: `L22310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22310) · [Before (L22256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22256)

```diff
-           [`${BB}|meta|rot3|books${yB}`]: Object.assign({
+           [`${WW}|meta|rot3|books${cW}`]: Object.assign({
```

#### 1659. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22262` → after: `L22316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22316) · [Before (L22262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22262)

```diff
-           [`${BB}|meta|rot4|books${yB}`]: Object.assign({
+           [`${WW}|meta|rot4|books${cW}`]: Object.assign({
```

#### 1660. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22305` → after: `L22359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22359) · [Before (L22305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22305)

```diff
-           [`${BB}|meta|rot2|empty`]: {
+           [`${WW}|meta|rot2|empty`]: {
```

#### 1661. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22308` → after: `L22362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22362) · [Before (L22308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22308)

```diff
-           [`${BB}|meta|rot3|empty`]: {
+           [`${WW}|meta|rot3|empty`]: {
```

#### 1662. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22311` → after: `L22365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22365) · [Before (L22311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22311)

```diff
-           [`${BB}|meta|rot4|empty`]: {
+           [`${WW}|meta|rot4|empty`]: {
```

#### 1663. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22314` → after: `L22368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22368) · [Before (L22314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22314)

```diff
-           [`${BB}|meta|rot1|full`]: Object.assign({
+           [`${WW}|meta|rot1|full`]: Object.assign({
```

#### 1664. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22319` → after: `L22373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22373) · [Before (L22319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22319)

```diff
-           [`${BB}|meta|rot2|full`]: Object.assign({
+           [`${WW}|meta|rot2|full`]: Object.assign({
```

#### 1665. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22324` → after: `L22378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22378) · [Before (L22324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22324)

```diff
-           [`${BB}|meta|rot3|full`]: Object.assign({
+           [`${WW}|meta|rot3|full`]: Object.assign({
```

#### 1666. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22329` → after: `L22383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22383) · [Before (L22329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22329)

```diff
-           [`${BB}|meta|rot4|full`]: Object.assign({
+           [`${WW}|meta|rot4|full`]: Object.assign({
```

#### 1667. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22598-L22599` → after: `L22652-L22653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22652-L22653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22652-L22653) · [Before (L22598-L22599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22598-L22599)

```diff
-           const GB = `${OB.toLowerCase().split(" ").join("_")}_concrete`;
-           Object.assign(BB, dD(`${OB} Concrete Slab`, {
+           const OW = `${iW.toLowerCase().split(" ").join("_")}_concrete`;
+           Object.assign(WW, uE(`${iW} Concrete Slab`, {
```

#### 1668. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22601` → after: `L22655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22655) · [Before (L22601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22601)

```diff
-               translationKey: `item:${bY(OB)}ConcreteSlab`
+               translationKey: `item:${rm(iW)}ConcreteSlab`
```

#### 1669. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L22607-L22608` → after: `L22661-L22662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R22661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L22661-L22662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22661-L22662) · [Before (L22607-L22608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L22607-L22608)

```diff
-             slabFullBlock: `${OB} Concrete`,
-             rootMetaDesc: `${OB} Concrete Slab|meta|rot1|bot`
+             slabFullBlock: `${iW} Concrete`,
+             rootMetaDesc: `${iW} Concrete Slab|meta|rot1|bot`
```

#### 1670. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23100-L23101` → after: `L23154-L23155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R23154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L23154-L23155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23154-L23155) · [Before (L23100-L23101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23100-L23101)

```diff
-       ...GQ((BB => `${BB} Paintball Explosive`), {
-         textureInfo: BB => [`explosive_paint_${CY(BB)}_side`, `explosive_paint_${CY(BB)}_top`],
+       ...NN((WW => `${WW} Paintball Explosive`), {
+         textureInfo: WW => [`explosive_paint_${zm(WW)}_side`, `explosive_paint_${zm(WW)}_top`],
```

#### 1671. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23106-L23107` → after: `L23160-L23161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R23160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L23160-L23161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23160-L23161) · [Before (L23106-L23107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23106-L23107)

```diff
-       ...GQ((BB => `${BB} Quick Paintball Explosive`), {
-         textureInfo: BB => `explosive_paint_quick_${CY(BB)}`,
+       ...NN((WW => `${WW} Quick Paintball Explosive`), {
+         textureInfo: WW => `explosive_paint_quick_${zm(WW)}`,
```

#### 1672. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23111-L23112` → after: `L23165-L23166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R23165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L23165-L23166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23165-L23166) · [Before (L23111-L23112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23111-L23112)

```diff
-       ...GQ((BB => `${BB} Seeking Paintball Explosive`), {
-         textureInfo: BB => `explosive_paint_seeking_${CY(BB)}`,
+       ...NN((WW => `${WW} Seeking Paintball Explosive`), {
+         textureInfo: WW => `explosive_paint_seeking_${zm(WW)}`,
```

#### 1673. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23116-L23117` → after: `L23170-L23171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R23170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L23170-L23171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23170-L23171) · [Before (L23116-L23117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23116-L23117)

```diff
-       ...GQ((BB => `${BB} Sticky Paintball Explosive`), {
-         textureInfo: BB => `explosive_paint_sticky_${CY(BB)}`,
+       ...NN((WW => `${WW} Sticky Paintball Explosive`), {
+         textureInfo: WW => `explosive_paint_sticky_${zm(WW)}`,
```

#### 1674. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23537` → after: `L23591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R23591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L23591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23591) · [Before (L23537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23537)

```diff
-         fl: !0,
+         dl: !0,
```

#### 1675. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23540` → after: `L23594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R23594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L23594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23594) · [Before (L23540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23540)

```diff
-         dp: [14, 8, 2]
+         oA: [14, 8, 2]
```

#### 1676. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23798` → after: `L23852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R23852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L23852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23852) · [Before (L23798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23798)

```diff
-       ...GQ((BB => `Spawn Block (${BB})`), {
+       ...NN((WW => `Spawn Block (${WW})`), {
```

#### 1677. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23800` → after: `L23854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R23854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L23854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23854) · [Before (L23800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23800)

```diff
-           translationKey: `item:${bY(BB)}SpawnBlock`
+           translationKey: `item:${rm(WW)}SpawnBlock`
```

#### 1678. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23803` → after: `L23857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R23857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L23857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23857) · [Before (L23803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23803)

```diff
-         textureInfo: BB => [`${CY(BB)}_spawn_block_top[rot[1`, `${CY(BB)}_spawn_block_top[rot[2`, `${CY(BB)}_spawn_block_top[rot[3`, `${CY(BB)}_spawn_block_top[rot[4`, `${CY(BB)}_spawn_block_side`],
+         textureInfo: WW => [`${zm(WW)}_spawn_block_top[rot[1`, `${zm(WW)}_spawn_block_top[rot[2`, `${zm(WW)}_spawn_block_top[rot[3`, `${zm(WW)}_spawn_block_top[rot[4`, `${zm(WW)}_spawn_block_side`],
```

#### 1679. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23806` → after: `L23860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R23860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L23860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23860) · [Before (L23806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23806)

```diff
-         rootMetaDesc: BB => `Spawn Block (${BB})|meta|rot1`,
+         rootMetaDesc: WW => `Spawn Block (${WW})|meta|rot1`,
```

#### 1680. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23811` → after: `L23865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R23865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L23865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23865) · [Before (L23811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23811)

```diff
-       ...GQ((BB => `Spawn Block (${BB})|meta|rot2`), {
+       ...NN((WW => `Spawn Block (${WW})|meta|rot2`), {
```

#### 1681. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23813` → after: `L23867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R23867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L23867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23867) · [Before (L23813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23813)

```diff
-         textureInfo: BB => [`${CY(BB)}_spawn_block_top[rot[1`, `${CY(BB)}_spawn_block_top[rot[2`, `${CY(BB)}_spawn_block_top[rot[3`, `${CY(BB)}_spawn_block_top[rot[4`, `${CY(BB)}_spawn_block_side`],
+         textureInfo: WW => [`${zm(WW)}_spawn_block_top[rot[1`, `${zm(WW)}_spawn_block_top[rot[2`, `${zm(WW)}_spawn_block_top[rot[3`, `${zm(WW)}_spawn_block_top[rot[4`, `${zm(WW)}_spawn_block_side`],
```

#### 1682. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23817` → after: `L23871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R23871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L23871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23871) · [Before (L23817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23817)

```diff
-       ...GQ((BB => `Spawn Block (${BB})|meta|rot3`), {
+       ...NN((WW => `Spawn Block (${WW})|meta|rot3`), {
```

#### 1683. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23819` → after: `L23873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R23873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L23873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23873) · [Before (L23819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23819)

```diff
-         textureInfo: BB => [`${CY(BB)}_spawn_block_top[rot[1`, `${CY(BB)}_spawn_block_top[rot[2`, `${CY(BB)}_spawn_block_top[rot[3`, `${CY(BB)}_spawn_block_top[rot[4`, `${CY(BB)}_spawn_block_side`],
+         textureInfo: WW => [`${zm(WW)}_spawn_block_top[rot[1`, `${zm(WW)}_spawn_block_top[rot[2`, `${zm(WW)}_spawn_block_top[rot[3`, `${zm(WW)}_spawn_block_top[rot[4`, `${zm(WW)}_spawn_block_side`],
```

#### 1684. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23823` → after: `L23877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R23877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L23877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23877) · [Before (L23823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23823)

```diff
-       ...GQ((BB => `Spawn Block (${BB})|meta|rot4`), {
+       ...NN((WW => `Spawn Block (${WW})|meta|rot4`), {
```

#### 1685. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23825` → after: `L23879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R23879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L23879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23879) · [Before (L23825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23825)

```diff
-         textureInfo: BB => [`${CY(BB)}_spawn_block_top[rot[1`, `${CY(BB)}_spawn_block_top[rot[2`, `${CY(BB)}_spawn_block_top[rot[3`, `${CY(BB)}_spawn_block_top[rot[4`, `${CY(BB)}_spawn_block_side`],
+         textureInfo: WW => [`${zm(WW)}_spawn_block_top[rot[1`, `${zm(WW)}_spawn_block_top[rot[2`, `${zm(WW)}_spawn_block_top[rot[3`, `${zm(WW)}_spawn_block_top[rot[4`, `${zm(WW)}_spawn_block_side`],
```

#### 1686. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23863` → after: `L23917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R23917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L23917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23917) · [Before (L23863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23863)

```diff
-       ...GQ((BB => `Generator Spawn Block (${BB})`), {
+       ...NN((WW => `Generator Spawn Block (${WW})`), {
```

#### 1687. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23865` → after: `L23919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R23919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L23919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23919) · [Before (L23865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23865)

```diff
-           translationKey: `item:${bY(BB)}GeneratorSpawnBlock`
+           translationKey: `item:${rm(WW)}GeneratorSpawnBlock`
```

#### 1688. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L23868` → after: `L23922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R23922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L23922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23922) · [Before (L23868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L23868)

```diff
-         textureInfo: BB => [`${CY(BB)}_gen_spawn_top`, `${CY(BB)}_gen_spawn_coal`, `${CY(BB)}_gen_spawn_iron`],
+         textureInfo: WW => [`${zm(WW)}_gen_spawn_top`, `${zm(WW)}_gen_spawn_coal`, `${zm(WW)}_gen_spawn_iron`],
```

#### 1689. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24353` → after: `L24407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R24407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L24407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24407) · [Before (L24353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24353)

```diff
-         dp: [2, 0, 2]
+         oA: [2, 0, 2]
```

#### 1690. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24369` → after: `L24423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R24423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L24423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24423) · [Before (L24369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24369)

```diff
-         dp: [4, 0, 4]
+         oA: [4, 0, 4]
```

#### 1691. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24385` → after: `L24439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R24439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L24439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24439) · [Before (L24385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24385)

```diff
-         dp: [6, 0, 6]
+         oA: [6, 0, 6]
```

#### 1692. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24401` → after: `L24455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R24455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L24455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24455) · [Before (L24401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24401)

```diff
-         dp: [8, 0, 8]
+         oA: [8, 0, 8]
```

#### 1693. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24417` → after: `L24471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R24471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L24471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24471) · [Before (L24417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24417)

```diff
-         dp: [10, 0, 10]
+         oA: [10, 0, 10]
```

#### 1694. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24532` → after: `L24586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R24586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L24586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24586) · [Before (L24532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24532)

```diff
-         dp: [7, 7, 2]
+         oA: [7, 7, 2]
```

#### 1695. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24558` → after: `L24612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R24612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L24612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24612) · [Before (L24558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24558)

```diff
-       ...GQ((BB => `${BB} Chalk`), {
+       ...NN((WW => `${WW} Chalk`), {
```

#### 1696. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24562` → after: `L24616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R24616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L24616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24616) · [Before (L24562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24562)

```diff
-             colour: `$t(colour:${CY(BB)})`
+             colour: `$t(colour:${zm(WW)})`
```

#### 1697. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24568` → after: `L24622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R24622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L24622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24622) · [Before (L24568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24568)

```diff
-             colour: `$t(colour:${CY(BB)})`
+             colour: `$t(colour:${zm(WW)})`
```

#### 1698. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24572` → after: `L24626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R24626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L24626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24626) · [Before (L24572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24572)

```diff
-         textureInfo: BB => `chalk_${CY(BB)}`,
+         textureInfo: WW => `chalk_${zm(WW)}`,
```

#### 1699. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24575` → after: `L24629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R24629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L24629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24629) · [Before (L24575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24575)

```diff
-       ...GQ((BB => `${BB} Chalk Bricks`), {
+       ...NN((WW => `${WW} Chalk Bricks`), {
```

#### 1700. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24579` → after: `L24633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R24633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L24633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24633) · [Before (L24579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24579)

```diff
-             colour: `$t(colour:${CY(BB)})`
+             colour: `$t(colour:${zm(WW)})`
```

#### 1701. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24585` → after: `L24639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R24639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L24639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24639) · [Before (L24585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24585)

```diff
-             colour: `$t(colour:${CY(BB)})`
+             colour: `$t(colour:${zm(WW)})`
```

#### 1702. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L24589` → after: `L24643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R24643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L24643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24643) · [Before (L24589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L24589)

```diff
-         textureInfo: BB => `chalk_bricks_${CY(BB)}`,
+         textureInfo: WW => `chalk_bricks_${zm(WW)}`,
```

#### 1703. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25130` → after: `L25184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R25184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L25184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25184) · [Before (L25130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25130)

```diff
-         dp: DQ("Black")
+         oA: LN("Black")
```

#### 1704. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25144` → after: `L25198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R25198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L25198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25198) · [Before (L25144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25144)

```diff
-         dp: DQ("Blue")
+         oA: LN("Blue")
```

#### 1705. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25158` → after: `L25212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R25212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L25212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25212) · [Before (L25158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25158)

```diff
-         dp: DQ("Brown")
+         oA: LN("Brown")
```

#### 1706. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25172` → after: `L25226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R25226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L25226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25226) · [Before (L25172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25172)

```diff
-         dp: DQ("Cyan")
+         oA: LN("Cyan")
```

#### 1707. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25186` → after: `L25240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R25240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L25240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25240) · [Before (L25186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25186)

```diff
-         dp: DQ("Gray")
+         oA: LN("Gray")
```

#### 1708. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25200` → after: `L25254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R25254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L25254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25254) · [Before (L25200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25200)

```diff
-         dp: DQ("Green")
+         oA: LN("Green")
```

#### 1709. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25214` → after: `L25268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R25268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L25268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25268) · [Before (L25214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25214)

```diff
-         dp: DQ("Grey")
+         oA: LN("Grey")
```

#### 1710. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25228` → after: `L25282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R25282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L25282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25282) · [Before (L25228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25228)

```diff
-         dp: DQ("Light Blue")
+         oA: LN("Light Blue")
```

#### 1711. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25242` → after: `L25296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R25296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L25296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25296) · [Before (L25242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25242)

```diff
-         dp: DQ("Light Gray")
+         oA: LN("Light Gray")
```

#### 1712. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25256` → after: `L25310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R25310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L25310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25310) · [Before (L25256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25256)

```diff
-         dp: DQ("Lime")
+         oA: LN("Lime")
```

#### 1713. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25270` → after: `L25324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R25324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L25324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25324) · [Before (L25270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25270)

```diff
-         dp: DQ("Magenta")
+         oA: LN("Magenta")
```

#### 1714. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25284` → after: `L25338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R25338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L25338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25338) · [Before (L25284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25284)

```diff
-         dp: DQ("Orange")
+         oA: LN("Orange")
```

#### 1715. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25298` → after: `L25352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R25352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L25352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25352) · [Before (L25298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25298)

```diff
-         dp: DQ("Pink")
+         oA: LN("Pink")
```

#### 1716. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25312` → after: `L25366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R25366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L25366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25366) · [Before (L25312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25312)

```diff
-         dp: DQ("Purple")
+         oA: LN("Purple")
```

#### 1717. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25326` → after: `L25380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R25380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L25380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25380) · [Before (L25326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25326)

```diff
-         dp: DQ("Red")
+         oA: LN("Red")
```

#### 1718. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25340` → after: `L25394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R25394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L25394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25394) · [Before (L25340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25340)

```diff
-         dp: DQ("White")
+         oA: LN("White")
```

#### 1719. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L25354` → after: `L25408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R25408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L25408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25408) · [Before (L25354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L25354)

```diff
-         dp: DQ("Yellow")
+         oA: LN("Yellow")
```

#### 1720. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L26839` → after: `L26893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R26893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L26893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L26893) · [Before (L26839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L26839)

```diff
-         dp: [5, 6, 8]
+         oA: [5, 6, 8]
```

#### 1721. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27459` → after: `L27513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R27513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L27513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27513) · [Before (L27459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27459)

```diff
-         dp: [14, 14, 12]
+         oA: [14, 14, 12]
```

#### 1722. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27470` → after: `L27524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R27524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L27524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27524) · [Before (L27470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27470)

```diff
-       }((BB => `${BB} Torch`), {
+       }((WW => `${WW} Torch`), {
```

#### 1723. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27473` → after: `L27527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R27527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L27527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27527) · [Before (L27473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27473)

```diff
-         itemTexture: BB => `torch_${CY(BB)}`,
+         itemTexture: WW => `torch_${zm(WW)}`,
```

#### 1724. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27481` → after: `L27535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R27535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L27535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27535) · [Before (L27481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27481)

```diff
-         blockModel: BB => `torch_${CY(BB)}`,
+         blockModel: WW => `torch_${zm(WW)}`,
```

#### 1725. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27485-L27488` → after: `L27539-L27542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R27539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L27539-L27542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27539-L27542) · [Before (L27485-L27488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27485-L27488)

```diff
-         rootMetaDesc: BB => `${BB} Torch|meta|rot1|bot`,
-         dp: BB => jD[BB]
-       }, (BB => `torch_wall_${CY(BB)}`)),
-       ...GQ((BB => `${BB} Neon`), {
+         rootMetaDesc: WW => `${WW} Torch|meta|rot1|bot`,
+         oA: WW => tE[WW]
+       }, (WW => `torch_wall_${zm(WW)}`)),
+       ...NN((WW => `${WW} Neon`), {
```

#### 1726. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27495` → after: `L27549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R27549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L27549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27549) · [Before (L27495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27495)

```diff
-         textureInfo: BB => `neon_${CY(BB)}`,
+         textureInfo: WW => `neon_${zm(WW)}`,
```

#### 1727. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27497` → after: `L27551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R27551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L27551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27551) · [Before (L27497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27497)

```diff
-         dp: BB => jD[BB]
+         oA: WW => tE[WW]
```

#### 1728. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27570` → after: `L27624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R27624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L27624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27624) · [Before (L27570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27570)

```diff
-       ...GQ((BB => `Invisible ${BB} Light`), {
+       ...NN((WW => `Invisible ${WW} Light`), {
```

#### 1729. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27580` → after: `L27634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R27634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L27634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27634) · [Before (L27580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27580)

```diff
-         dp: BB => jD[BB],
+         oA: WW => tE[WW],
```

#### 1730. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27593` → after: `L27647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R27647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L27647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27647) · [Before (L27593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27593)

```diff
-         PZ: 15,
+         Mj: 15,
```

#### 1731. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27682` → after: `L27736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R27736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L27736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27736) · [Before (L27682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27682)

```diff
-         dp: [8, 15, 15]
+         oA: [8, 15, 15]
```

#### 1732. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27706` → after: `L27760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R27760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L27760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27760) · [Before (L27706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27706)

```diff
-         dp: [8, 15, 7],
+         oA: [8, 15, 7],
```

#### 1733. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27826` → after: `L27880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R27880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L27880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27880) · [Before (L27826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27826)

```diff
-               translationKey: 1 === OB ? "item:rocketShip" : `item:rocketShipS${OB}`
+               translationKey: 1 === iW ? "item:rocketShip" : `item:rocketShipS${iW}`
```

#### 1734. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27840` → after: `L27894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R27894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L27894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27894) · [Before (L27840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27840)

```diff
-             blockModel: `rocket_${YB}_${OB}`,
+             blockModel: `rocket_${mW}_${iW}`,
```

#### 1735. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L27917` → after: `L27971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R27971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L27971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27971) · [Before (L27917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L27917)

```diff
-             rootMetaDesc: `${DB}|meta|rot1`,
+             rootMetaDesc: `${EW}|meta|rot1`,
```

#### 1736. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28016` → after: `L28070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28070) · [Before (L28016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28016)

```diff
-         dp: [10, 3, 12]
+         oA: [10, 3, 12]
```

#### 1737. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28181` → after: `L28235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28235) · [Before (L28181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28181)

```diff
-         dp: [15, 15, 13]
+         oA: [15, 15, 13]
```

#### 1738. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28197` → after: `L28251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28251) · [Before (L28197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28197)

```diff
-         MZ: (0, RG.g)([
+         sj: (0, MO.d)([
```

#### 1739. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28382` → after: `L28436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28436) · [Before (L28382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28382)

```diff
-         fl: !0,
+         dl: !0,
```

#### 1740. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28385` → after: `L28439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28439) · [Before (L28385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28385)

```diff
-         dp: [6, 14, 4]
+         oA: [6, 14, 4]
```

#### 1741. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28423` → after: `L28477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28477) · [Before (L28423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28423)

```diff
-               for (let QB = 1; QB <= 4; QB++) OB[`${GB}|meta|rot${QB}|${YB}|${DB}`] = {
+               for (let NW = 1; NW <= 4; NW++) iW[`${OW}|meta|rot${NW}|${mW}|${EW}`] = {
```

#### 1742. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28425` → after: `L28479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28479) · [Before (L28425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28425)

```diff
-                 MZ: BY[YB][DB][QB - 1]
+                 sj: Om[mW][EW][NW - 1]
```

#### 1743. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28471` → after: `L28525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28525) · [Before (L28471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28471)

```diff
-             const OB = `Noticeboard ${GB}${YB?` ${YB}`:""}`;
+             const iW = `Noticeboard ${OW}${mW?` ${mW}`:""}`;
```

#### 1744. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28475` → after: `L28529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28529) · [Before (L28475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28475)

```diff
-                 translationKey: `item:${bY(OB)}`
+                 translationKey: `item:${rm(iW)}`
```

#### 1745. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28477` → after: `L28531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28531) · [Before (L28477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28477)

```diff
-               rootMetaDesc: `${OB}|meta|rot1`,
+               rootMetaDesc: `${iW}|meta|rot1`,
```

#### 1746. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28488` → after: `L28542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28542) · [Before (L28488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28488)

```diff
-           const BB = `${GB} Fence`;
+           const WW = `${OW} Fence`;
```

#### 1747. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28491` → after: `L28545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28545) · [Before (L28491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28491)

```diff
-               translationKey: `item:${bY(BB)}`
+               translationKey: `item:${rm(WW)}`
```

#### 1748. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28494-L28495` → after: `L28548-L28549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28548-L28549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28548-L28549) · [Before (L28494-L28495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28494-L28495)

```diff
-             textureInfo: `planks_${GB.toLowerCase()}`,
-             itemTexture: `${GB.toLowerCase()}_fence`,
+             textureInfo: `planks_${OW.toLowerCase()}`,
+             itemTexture: `${OW.toLowerCase()}_fence`,
```

#### 1749. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28511` → after: `L28565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28565) · [Before (L28511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28511)

```diff
-               translationKey: `item:${bY(IG)}`
+               translationKey: `item:${rm(eO)}`
```

#### 1750. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28523` → after: `L28577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28577) · [Before (L28523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28523)

```diff
-                 jB = `${GB}${wG[QB]}`;
+                 LW = `${OW}${CO[NW]}`;
```

#### 1751. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28526` → after: `L28580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28580) · [Before (L28526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28526)

```diff
-                 rootMetaDesc: `${OB}|meta|rot1`,
+                 rootMetaDesc: `${iW}|meta|rot1`,
```

#### 1752. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28544` → after: `L28598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28598) · [Before (L28544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28544)

```diff
-         hJ: 9,
+         ut: 9,
```

#### 1753. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28553` → after: `L28607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28607) · [Before (L28553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28553)

```diff
-         dp: [6, 6, 6]
+         oA: [6, 6, 6]
```

#### 1754. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28564` → after: `L28618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28618) · [Before (L28564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28564)

```diff
-         hJ: 9,
+         ut: 9,
```

#### 1755. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28573` → after: `L28627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28627) · [Before (L28573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28573)

```diff
-         dp: [6, 6, 6]
+         oA: [6, 6, 6]
```

#### 1756. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28584` → after: `L28638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28638) · [Before (L28584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28584)

```diff
-         hJ: 9,
+         ut: 9,
```

#### 1757. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28593` → after: `L28647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28647) · [Before (L28593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28593)

```diff
-         dp: [6, 6, 0]
+         oA: [6, 6, 0]
```

#### 1758. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28604` → after: `L28658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28658) · [Before (L28604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28604)

```diff
-         hJ: 9,
+         ut: 9,
```

#### 1759. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28613` → after: `L28667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28667) · [Before (L28613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28613)

```diff
-         dp: [2, 6, 6]
+         oA: [2, 6, 6]
```

#### 1760. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28624` → after: `L28678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28678) · [Before (L28624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28624)

```diff
-         hJ: 9,
+         ut: 9,
```

#### 1761. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28633` → after: `L28687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28687) · [Before (L28633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28633)

```diff
-         dp: [6, 6, 6]
+         oA: [6, 6, 6]
```

#### 1762. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28638-L28639` → after: `L28692-L28693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28692-L28693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28692-L28693) · [Before (L28638-L28639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28638-L28639)

```diff
-           const BB = `${GB} Fence Gate`,
-             YB = `_${BB} Top`,
+           const WW = `${OW} Fence Gate`,
+             mW = `_${WW} Top`,
```

#### 1763. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28642` → after: `L28696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28696) · [Before (L28642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28642)

```diff
-                 translationKey: `item:${bY(BB)}`
+                 translationKey: `item:${rm(WW)}`
```

#### 1764. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28645-L28646` → after: `L28699-L28700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28699-L28700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28699-L28700) · [Before (L28645-L28646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28645-L28646)

```diff
-               textureInfo: `planks_${GB.toLowerCase()}`,
-               itemTexture: `${GB.toLowerCase()}_fence_gate`,
+               textureInfo: `planks_${OW.toLowerCase()}`,
+               itemTexture: `${OW.toLowerCase()}_fence_gate`,
```

#### 1765. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28657` → after: `L28711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28711) · [Before (L28657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28657)

```diff
-               rootMetaDesc: `${BB}|meta|rot1|closed`
+               rootMetaDesc: `${WW}|meta|rot1|closed`
```

#### 1766. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28659` → after: `L28713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28713) · [Before (L28659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28659)

```diff
-             MZ: mY(!1, GB, QB),
+             sj: dm(!1, OW, NW),
```

#### 1767. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28669` → after: `L28723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28723) · [Before (L28669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28669)

```diff
-               rootMetaDesc: `${YB}|meta|rot1|closed`
+               rootMetaDesc: `${mW}|meta|rot1|closed`
```

#### 1768. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28671` → after: `L28725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28725) · [Before (L28671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28671)

```diff
-             MZ: mY(!0, GB, QB),
+             sj: dm(!0, OW, NW),
```

#### 1769. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28711` → after: `L28765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28765) · [Before (L28711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28711)

```diff
-             rootMetaDesc: `${GB}|meta|rot1`,
+             rootMetaDesc: `${OW}|meta|rot1`,
```

#### 1770. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28728` → after: `L28782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28782) · [Before (L28728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28728)

```diff
-         dp: [9, 15, 5]
+         oA: [9, 15, 5]
```

#### 1771. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28772` → after: `L28826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28826) · [Before (L28772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28772)

```diff
-           dp: [4, 12, 14],
+           oA: [4, 12, 14],
```

#### 1772. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28822` → after: `L28876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28876) · [Before (L28822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28822)

```diff
-           dp: [2, 6, 6],
+           oA: [2, 6, 6],
```

#### 1773. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28875` → after: `L28929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28929) · [Before (L28875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28875)

```diff
-           dp: [6, 6, 10],
+           oA: [6, 6, 10],
```

#### 1774. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28891` → after: `L28945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28945) · [Before (L28891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28891)

```diff
-           dp: [8, 6, 10],
+           oA: [8, 6, 10],
```

#### 1775. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28906` → after: `L28960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28960) · [Before (L28906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28906)

```diff
-           dp: [12, 10, 14],
+           oA: [12, 10, 14],
```

#### 1776. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28920` → after: `L28974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28974) · [Before (L28920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28920)

```diff
-           dp: [6, 6, 10],
+           oA: [6, 6, 10],
```

#### 1777. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28940` → after: `L28994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R28994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L28994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28994) · [Before (L28940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28940)

```diff
-           hJ: 9,
+           ut: 9,
```

#### 1778. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28948` → after: `L29002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29002) · [Before (L28948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28948)

```diff
-           dp: [6, 6, 6],
+           oA: [6, 6, 6],
```

#### 1779. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28960` → after: `L29014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29014) · [Before (L28960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28960)

```diff
-           hJ: 9,
+           ut: 9,
```

#### 1780. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L28968` → after: `L29022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29022) · [Before (L28968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L28968)

```diff
-           dp: [2, 6, 6],
+           oA: [2, 6, 6],
```

#### 1781. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29003` → after: `L29057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29057) · [Before (L29003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29003)

```diff
-         dp: [9, 3, 1]
+         oA: [9, 3, 1]
```

#### 1782. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29137` → after: `L29191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29191) · [Before (L29137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29137)

```diff
-           animTextures: [0, 1, 2, 3, 4, 5, 6, 7].map((BB => `trading_terminal_front${BB}`)),
+           animTextures: [0, 1, 2, 3, 4, 5, 6, 7].map((WW => `trading_terminal_front${WW}`)),
```

#### 1783. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29209` → after: `L29263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29263) · [Before (L29209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29209)

```diff
-             translationKey: `item:${bY(GB)}`
+             translationKey: `item:${rm(OW)}`
```

#### 1784. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29227` → after: `L29281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29281) · [Before (L29227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29227)

```diff
-           dp: [5, 8, 1]
+           oA: [5, 8, 1]
```

#### 1785. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29261` → after: `L29315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29315) · [Before (L29261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29261)

```diff
-           dp: [5, 9, 2]
+           oA: [5, 9, 2]
```

#### 1786. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29270` → after: `L29324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29324) · [Before (L29270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29270)

```diff
-           dp: [3, 5, 1]
+           oA: [3, 5, 1]
```

#### 1787. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29280` → after: `L29334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29334) · [Before (L29280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29280)

```diff
-           dp: JQ
+           oA: xN
```

#### 1788. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29298` → after: `L29352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29352) · [Before (L29298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29298)

```diff
-           dp: [4, 7, 1]
+           oA: [4, 7, 1]
```

#### 1789. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29303` → after: `L29357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29357) · [Before (L29303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29303)

```diff
-           dp: [8, 12, 13]
+           oA: [8, 12, 13]
```

#### 1790. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29308` → after: `L29362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29362) · [Before (L29308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29308)

```diff
-           dp: [5, 9, 2]
+           oA: [5, 9, 2]
```

#### 1791. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29314` → after: `L29368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29368) · [Before (L29314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29314)

```diff
-           dp: [9, 3, 9]
+           oA: [9, 3, 9]
```

#### 1792. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29337` → after: `L29391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29391) · [Before (L29337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29337)

```diff
-           dp: [8, 3, 8]
+           oA: [8, 3, 8]
```

#### 1793. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29365` → after: `L29419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29419) · [Before (L29365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29365)

```diff
-           dp: [4, 10, 5]
+           oA: [4, 10, 5]
```

#### 1794. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29369` → after: `L29423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29423) · [Before (L29369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29369)

```diff
-           dp: [5, 9, 2]
+           oA: [5, 9, 2]
```

#### 1795. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29375` → after: `L29429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29429) · [Before (L29375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29375)

```diff
-           hJ: 9,
+           ut: 9,
```

#### 1796. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29380` → after: `L29434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29434) · [Before (L29380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29380)

```diff
-           dp: [6, 10, 2]
+           oA: [6, 10, 2]
```

#### 1797. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29387` → after: `L29441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29441) · [Before (L29387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29387)

```diff
-           dp: [2, 6, 6]
+           oA: [2, 6, 6]
```

#### 1798. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29393` → after: `L29447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29447) · [Before (L29393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29393)

```diff
-         for (const OB of ["White", "Light Grey", "Light Blue", "Cyan", "Green", "Lime", "Yellow", "Orange", "Magenta", "Red"]) BB[`INTERNAL_MESH_${OB} Directional Arrow`] = {
+         for (const iW of ["White", "Light Grey", "Light Blue", "Cyan", "Green", "Lime", "Yellow", "Orange", "Magenta", "Red"]) WW[`INTERNAL_MESH_${iW} Directional Arrow`] = {
```

#### 1799. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29398` → after: `L29452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29452) · [Before (L29398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29398)

```diff
-           blockModel: `${OB} Directional Arrow`,
+           blockModel: `${iW} Directional Arrow`,
```

#### 1800. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29428` → after: `L29482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29482) · [Before (L29428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29428)

```diff
-           const DB = "water" === GB ? ro : [];
+           const EW = "water" === OW ? VP : [];
```

#### 1801. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29451` → after: `L29505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29505) · [Before (L29451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29451)

```diff
-     if (jj > 65535) throw new Error(`block ID was ${jj}, which is over 65535 - there is a limit of 65535 block types!`);
+     if (cL > 65535) throw new Error(`block ID was ${cL}, which is over 65535 - there is a limit of 65535 block types!`);
```

#### 1802. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29453-L29454` → after: `L29507-L29508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29507-L29508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29507-L29508) · [Before (L29453-L29454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29453-L29454)

```diff
-     if (BB.id = jj, Gj[jj] = BB, BB.name = jy, BB.stackable = !0, fG(Gj, BB), "door" === Gj[BB.meta.rootName].model) BB.MZ = (qj = BB.meta.rot, Zj = BB.meta.open, UD[(qj - 1 + Number(Zj)) % 4]);
-     else if ("trapdoor" === Gj[BB.meta.rootName].model) BB.MZ = kD(BB.meta.rot, BB.meta.open);
+     if (WW.id = cL, mL[cL] = WW, WW.name = cc, WW.stackable = !0, hO(mL, WW), "door" === mL[WW.meta.rootName].model) WW.sj = (jL = WW.meta.rot, UL = WW.meta.open, hE[(jL - 1 + Number(UL)) % 4]);
+     else if ("trapdoor" === mL[WW.meta.rootName].model) WW.sj = nE(WW.meta.rot, WW.meta.open);
```

#### 1803. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29457` → after: `L29511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29511) · [Before (L29457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29457)

```diff
-       OB && (BB.MZ = OB)
+       iW && (WW.sj = iW)
```

#### 1804. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29466` → after: `L29520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29520) · [Before (L29466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29466)

```diff
-         animationInterval: null !== (lj = BB.textureInfo.animationInterval) && void 0 !== lj ? lj : 200
+         animationInterval: null !== (AL = WW.textureInfo.animationInterval) && void 0 !== AL ? AL : 200
```

#### 1805. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29477` → after: `L29531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29531) · [Before (L29477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29477)

```diff
-           animationInterval: null !== (pj = OB.animationInterval) && void 0 !== pj ? pj : 200
+           animationInterval: null !== (bL = iW.animationInterval) && void 0 !== bL ? bL : 200
```

#### 1806. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29492` → after: `L29546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29546) · [Before (L29492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29492)

```diff
-     if (Math.log(BB) / Math.log(2) % 1 !== 0) throw new Error(`${jy} has ${BB} animation states, which is not a power of 2`);
+     if (Math.log(WW) / Math.log(2) % 1 !== 0) throw new Error(`${cc} has ${WW} animation states, which is not a power of 2`);
```

#### 1807. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29509` → after: `L29563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29563) · [Before (L29509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29509)

```diff
-         GB = null !== (Nj = Pj[OB]) && void 0 !== Nj ? Nj : yj++;
+         OW = null !== (kL = xL[iW]) && void 0 !== kL ? kL : wL++;
```

#### 1808. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29529` → after: `L29583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29583) · [Before (L29529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29529)

```diff
-           DB = "string" === typeof YB ? YB : YB.animTextures[0];
+           EW = "string" === typeof mW ? mW : mW.animTextures[0];
```

#### 1809. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29539` → after: `L29593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29593) · [Before (L29539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29539)

```diff
-     Wj[jy] = null !== (Aj = Wj[BB.id]) && void 0 !== Aj ? Aj : new WG(BB)
+     ML[cc] = null !== (KL = ML[WW.id]) && void 0 !== KL ? KL : new KO(WW)
```

#### 1810. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29546` → after: `L29600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29600) · [Before (L29546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29546)

```diff
-       const OB = null !== (Sj = Vj[BB[0]]) && void 0 !== Sj ? Sj : [];
+       const iW = null !== (YL = SL[WW[0]]) && void 0 !== YL ? YL : [];
```

#### 1811. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29786` → after: `L29840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29840) · [Before (L29786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29786)

```diff
-   if (Uj !== Object.keys(nj).at(-1)) throw new Error(`You have added new blocks. Please add the following to knownMetadataIds:\n"${Uj}": ${fj.id},\nRemember that new blocks must come after existing blocks in blockInitInfo.`);
+   if (TL !== Object.keys(yL).at(-1)) throw new Error(`You have added new blocks. Please add the following to knownMetadataIds:\n"${TL}": ${JL.id},\nRemember that new blocks must come after existing blocks in blockInitInfo.`);
```

#### 1812. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29789` → after: `L29843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29843) · [Before (L29789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29789)

```diff
-     if (Wj[OB].id !== GB) throw new Error(`${OB} id is not ${GB}. This means you added a block _before_ other blocks. Blocks can only be added at the end of blockMetadata.ts`)
+     if (ML[iW].id !== OW) throw new Error(`${iW} id is not ${OW}. This means you added a block _before_ other blocks. Blocks can only be added at the end of blockMetadata.ts`)
```

#### 1813. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29793` → after: `L29847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29847) · [Before (L29793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29793)

```diff
-     if (!Wj[BB]) throw new Error(`Missing Mob Spawner Block for mob type ${jy}: please add '...getMobSpawnerBlock("${jy}"),' to the end of blockInitInfo.ts`)
+     if (!ML[WW]) throw new Error(`Missing Mob Spawner Block for mob type ${cc}: please add '...getMobSpawnerBlock("${cc}"),' to the end of blockInitInfo.ts`)
```

#### 1814. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29799` → after: `L29853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R29853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L29853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29853) · [Before (L29799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L29799)

```diff
-     if (!Wj[BB]) throw new Error(`Missing Mob Painting Block for mob type ${jy}: please add '...getMobPaintingBlock("${jy}"),' to the end of blockInitInfo`)
+     if (!ML[WW]) throw new Error(`Missing Mob Painting Block for mob type ${cc}: please add '...getMobPaintingBlock("${cc}"),' to the end of blockInitInfo`)
```

#### 1815. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30332` → after: `L30386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R30386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L30386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30386) · [Before (L30332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30332)

```diff
-       [`${BB}|meta|charging2`]: {
+       [`${WW}|meta|charging2`]: {
```

#### 1816. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30334` → after: `L30388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R30388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L30388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30388) · [Before (L30334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30334)

```diff
-         textureInfo: `${OB.textureName}_charging_2`
+         textureInfo: `${iW.textureName}_charging_2`
```

#### 1817. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30336` → after: `L30390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R30390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L30390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30390) · [Before (L30336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30336)

```diff
-       [`${BB}|meta|charging3`]: {
+       [`${WW}|meta|charging3`]: {
```

#### 1818. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30338` → after: `L30392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R30392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L30392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30392) · [Before (L30338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30338)

```diff
-         textureInfo: `${OB.textureName}_charging_3`
+         textureInfo: `${iW.textureName}_charging_3`
```

#### 1819. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30340` → after: `L30394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R30394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L30394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30394) · [Before (L30340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30340)

```diff
-       [`${BB}|meta|charging4`]: {
+       [`${WW}|meta|charging4`]: {
```

#### 1820. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30342` → after: `L30396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R30396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L30396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30396) · [Before (L30342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30342)

```diff
-         textureInfo: `${OB.textureName}_charging_4`
+         textureInfo: `${iW.textureName}_charging_4`
```

#### 1821. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30353-L30354` → after: `L30407-L30408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R30407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L30407-L30408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30407-L30408) · [Before (L30353-L30354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30353-L30354)

```diff
-         heldItemGlb: `${OB}_${uj}`,
-         textureInfo: `${OB}_${uj}`
+         heldItemGlb: `${iW}_${uL}`,
+         textureInfo: `${iW}_${uL}`
```

#### 1822. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30357` → after: `L30411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R30411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L30411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30411) · [Before (L30357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30357)

```diff
-     for (const DB of mj) YB[`${BB}|meta|${DB}`] = {
+     for (const EW of oL) mW[`${WW}|meta|${EW}`] = {
```

#### 1823. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30359-L30360` → after: `L30413-L30414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R30413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L30413-L30414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30413-L30414) · [Before (L30359-L30360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30359-L30360)

```diff
-       heldItemGlb: `${OB}_${DB}`,
-       textureInfo: `${OB}_${DB}`
+       heldItemGlb: `${iW}_${EW}`,
+       textureInfo: `${iW}_${EW}`
```

#### 1824. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30385` → after: `L30439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R30439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L30439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30439) · [Before (L30385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30385)

```diff
-       [`${BB}|RequiresAmmo`]: {
+       [`${WW}|RequiresAmmo`]: {
```

#### 1825. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30388` → after: `L30442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R30442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L30442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30442) · [Before (L30388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30388)

```diff
-         heldItemGlb: null !== (GB = YB.heldItemGlb) && void 0 !== GB ? GB : BB
+         heldItemGlb: null !== (OW = mW.heldItemGlb) && void 0 !== OW ? OW : WW
```

#### 1826. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30397` → after: `L30451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R30451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L30451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30451) · [Before (L30397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L30397)

```diff
-     return "" === OB ? BB : `${BB} ${OB}`
+     return "" === iW ? WW : `${WW} ${iW}`
```
