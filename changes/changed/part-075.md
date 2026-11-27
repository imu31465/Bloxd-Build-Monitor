# Changed — Bundle Modifications Report (Part 075 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `75 / 82` (**393** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 074](part-074.md) · [Part 076 →](part-076.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorker.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorker.js` (1123 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032)

#### 1089. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12268` → after: `L12306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12306) · [Before (L12268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12268)

```diff
-         if (He >= be.rb && He < be.Qb) return Me.getChunk(ee, ie, He - be.eM, ye);
+         if (OW >= EW.Am && OW < EW.bm) return NW.getChunk(WW, iW, OW - EW.jm, mW);
```

#### 1090. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12286-L12287` → after: `L12324-L12325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12324-L12325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12324-L12325) · [Before (L12286-L12287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12286-L12287)

```diff
-     if (ee.rb >= ee.Qb) throw new Error(`Custom world-gen layer has minY (${ee.rb}) >= maxY (${ee.Qb})`);
-     if (ee.rb % ti.D !== 0 || ee.Qb % ti.D !== 0 || ee.eM % ti.D !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${ti.D}); got minY=${ee.rb}, maxY=${ee.Qb}, groundY=${ee.eM}`);
+     if (WW.Am >= WW.bm) throw new Error(`Custom world-gen layer has minY (${WW.Am}) >= maxY (${WW.bm})`);
+     if (WW.Am % yi.A !== 0 || WW.bm % yi.A !== 0 || WW.jm % yi.A !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${yi.A}); got minY=${WW.Am}, maxY=${WW.bm}, groundY=${WW.jm}`);
```

#### 1091. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12289-L12292` → after: `L12327-L12330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12327-L12330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12327-L12330) · [Before (L12289-L12292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12289-L12292)

```diff
-         if (void 0 === (0, ti.I)(ee.bM, ie)) throw new Error(`Custom world-gen caves lavaPitBlock "${ee.bM}" not found in blockMetadata`);
-         if (ee.MM)
-           for (const He of ee.MM) Di(He, ie)
-       }(ee.HM, ie), 0 === ee.zM.length) throw new Error("Custom world-gen layer must have at least one biome");
+         if (void 0 === (0, yi.E)(WW.Mm, iW)) throw new Error(`Custom world-gen caves lavaPitBlock "${WW.Mm}" not found in blockMetadata`);
+         if (WW.Km)
+           for (const OW of WW.Km) Hi(OW, iW)
+       }(WW.km, iW), 0 === WW.Dm.length) throw new Error("Custom world-gen layer must have at least one biome");
```

#### 1092. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12294` → after: `L12332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12332) · [Before (L12294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12294)

```diff
-     for (const ye of ee.zM) Yi(ye, ie), He += ye.frequency;
+     for (const mW of WW.Dm) oi(mW, iW), OW += mW.frequency;
```

#### 1093. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12296` → after: `L12334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12334) · [Before (L12296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12296)

```diff
-     for (const ye of ee.WM) Vi(ye, ie)
+     for (const mW of WW.Bm) di(mW, iW)
```

#### 1094. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12302-L12304` → after: `L12340-L12342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12340-L12342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12340-L12342) · [Before (L12302-L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12302-L12304)

```diff
-       UM: ye,
-       FM: be,
-       JM: Me
+       Ym: mW,
+       ym: EW,
+       Tm: NW
```

#### 1095. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12306-L12307` → after: `L12344-L12345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12344-L12345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12344-L12345) · [Before (L12306-L12307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12306-L12307)

```diff
-     if (void 0 === (0, ti.I)(He, ie)) throw new Error(`Custom world-gen cave decoration blockName "${He}" not found in blockMetadata`);
-     if (!ye && !be && !Me) throw new Error(`Custom world-gen cave decoration "${He}" must allow at least one of floor/walls/ceiling anchoring`);
+     if (void 0 === (0, yi.E)(OW, iW)) throw new Error(`Custom world-gen cave decoration blockName "${OW}" not found in blockMetadata`);
+     if (!mW && !EW && !NW) throw new Error(`Custom world-gen cave decoration "${OW}" must allow at least one of floor/walls/ceiling anchoring`);
```

#### 1096. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12310-L12311` → after: `L12348-L12349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12348-L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12348-L12349) · [Before (L12310-L12311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12310-L12311)

```diff
-     if (Me && Pi(He, "meta|rot1|top", ie), Ai(ee.oM, He, "oM"), Ai(ee.RM, He, "RM"), !Number.isInteger(ee.kM) || ee.kM < 0) throw new Error(`Custom world-gen cave decoration "${He}" minPlacements must be a non-negative integer, got ${ee.kM}`);
-     if (!(0, ti.P)(ee.qM) && (Ai(ee.qM.TM, He, "depthRamp.deepClusterChance"), ee.qM.pM <= ee.qM.XM)) throw new Error(`Custom world-gen cave decoration "${He}" deepY must be strictly smaller than shallowY, but ${ee.qM.pM} <= ${ee.qM.XM} `)
+     if (NW && ni(OW, "meta|rot1|top", iW), ui(WW.Jm, OW, "Jm"), ui(WW.hm, OW, "hm"), !Number.isInteger(WW.Hm) || WW.Hm < 0) throw new Error(`Custom world-gen cave decoration "${OW}" minPlacements must be a non-negative integer, got ${WW.Hm}`);
+     if (!(0, yi.K)(WW.nm) && (ui(WW.nm.om, OW, "depthRamp.deepClusterChance"), WW.nm.dm <= WW.nm.gm)) throw new Error(`Custom world-gen cave decoration "${OW}" deepY must be strictly smaller than shallowY, but ${WW.nm.dm} <= ${WW.nm.gm} `)
```

#### 1097. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12315-L12316` → after: `L12353-L12354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12353-L12354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12353-L12354) · [Before (L12315-L12316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12315-L12316)

```diff
-     const ye = `${ee}|${ie}`;
-     if (void 0 === (0, ti.I)(ye, He)) throw new Error(`Custom world-gen cave decoration "${ee}" is missing directional variant "${ye}" required for wall/ceiling anchoring`)
+     const mW = `${WW}|${iW}`;
+     if (void 0 === (0, yi.E)(mW, OW)) throw new Error(`Custom world-gen cave decoration "${WW}" is missing directional variant "${mW}" required for wall/ceiling anchoring`)
```

#### 1098. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12320` → after: `L12358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12358) · [Before (L12320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12320)

```diff
-     if (ee < 0 || ee > 1) throw new Error(`Custom world-gen cave decoration "${ie}" ${He} must be in [0, 1], got ${ee}`)
+     if (WW < 0 || WW > 1) throw new Error(`Custom world-gen cave decoration "${iW}" ${OW} must be in [0, 1], got ${WW}`)
```

#### 1099. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12324-L12330` → after: `L12362-L12368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12362-L12368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12362-L12368) · [Before (L12324-L12330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12324-L12330)

```diff
-     if (ee.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${ee.frequency}`);
-     if (void 0 === (0, ti.I)(ee.EM, ie)) throw new Error(`Custom world-gen biome topsoilBlock "${ee.EM}" not found in blockMetadata`);
-     if (void 0 === (0, ti.I)(ee.gM, ie)) throw new Error(`Custom world-gen biome lowsoilBlock "${ee.gM}" not found in blockMetadata`);
-     if (0 === ee.OM.length) throw new Error("Custom world-gen biome must have at least one stoneType");
-     for (const He of ee.OM) {
-       if (He.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${He.frequency}`);
-       if (void 0 === (0, ti.I)(He.blockName, ie)) throw new Error(`Custom world-gen biome stoneType blockName "${He.blockName}" not found in blockMetadata`)
+     if (WW.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${WW.frequency}`);
+     if (void 0 === (0, yi.E)(WW.pm, iW)) throw new Error(`Custom world-gen biome topsoilBlock "${WW.pm}" not found in blockMetadata`);
+     if (void 0 === (0, yi.E)(WW.fm, iW)) throw new Error(`Custom world-gen biome lowsoilBlock "${WW.fm}" not found in blockMetadata`);
+     if (0 === WW.Cm.length) throw new Error("Custom world-gen biome must have at least one stoneType");
+     for (const OW of WW.Cm) {
+       if (OW.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${OW.frequency}`);
+       if (void 0 === (0, yi.E)(OW.blockName, iW)) throw new Error(`Custom world-gen biome stoneType blockName "${OW.blockName}" not found in blockMetadata`)
```

#### 1100. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12335-L12339` → after: `L12373-L12377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12373-L12377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12373-L12377) · [Before (L12335-L12339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12335-L12339)

```diff
-     if (void 0 === (0, ti.I)(ee.blockName, ie)) throw new Error(`Custom world-gen ore blockName "${ee.blockName}" not found in blockMetadata`);
-     if (ee.radius < 0) throw new Error(`Custom world-gen ore "${ee.blockName}" radius must be >= 0, got ${ee.radius}`);
-     if (ee.ZM <= 0) throw new Error(`Custom world-gen ore "${ee.blockName}" minDistBetweenDeposits must be > 0, got ${ee.ZM}`);
-     if (ee.rb > ee.Qb) throw new Error(`Custom world-gen ore "${ee.blockName}" minY (${ee.rb}) must be <= maxY (${ee.Qb})`);
-     if (ee.wM < 0 || ee.wM > 1) throw new Error(`Custom world-gen ore "${ee.blockName}" spawnChance must be in [0, 1], got ${ee.wM}`)
+     if (void 0 === (0, yi.E)(WW.blockName, iW)) throw new Error(`Custom world-gen ore blockName "${WW.blockName}" not found in blockMetadata`);
+     if (WW.radius < 0) throw new Error(`Custom world-gen ore "${WW.blockName}" radius must be >= 0, got ${WW.radius}`);
+     if (WW.Rm <= 0) throw new Error(`Custom world-gen ore "${WW.blockName}" minDistBetweenDeposits must be > 0, got ${WW.Rm}`);
+     if (WW.Am > WW.bm) throw new Error(`Custom world-gen ore "${WW.blockName}" minY (${WW.Am}) must be <= maxY (${WW.bm})`);
+     if (WW.Gm < 0 || WW.Gm > 1) throw new Error(`Custom world-gen ore "${WW.blockName}" spawnChance must be in [0, 1], got ${WW.Gm}`)
```

#### 1101. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12345-L12348` → after: `L12383-L12386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12383-L12386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12383-L12386) · [Before (L12345-L12348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12345-L12348)

```diff
-       ZM: 10,
-       rb: -98,
-       Qb: -78,
-       wM: .4
+       Rm: 10,
+       Am: -98,
+       bm: -78,
+       Gm: .4
```

#### 1102. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12353-L12356` → after: `L12391-L12394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12391-L12394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12391-L12394) · [Before (L12353-L12356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12353-L12356)

```diff
-       ZM: 6,
-       rb: -40,
-       Qb: 20,
-       wM: .6
+       Rm: 6,
+       Am: -40,
+       bm: 20,
+       Gm: .6
```

#### 1103. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12360-L12363` → after: `L12398-L12401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12398-L12401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12398-L12401) · [Before (L12360-L12363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12360-L12363)

```diff
-       ZM: 10,
-       rb: -75,
-       Qb: -55,
-       wM: .4
+       Rm: 10,
+       Am: -75,
+       bm: -55,
+       Gm: .4
```

#### 1104. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12367` → after: `L12405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12405) · [Before (L12367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12367)

```diff
-       YM: null
+       zm: null
```

#### 1105. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12370` → after: `L12408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12408) · [Before (L12370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12370)

```diff
-     [ai]: () => He(40768).e
+     [ei]: () => OW(41221).c
```

#### 1106. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12394` → after: `L12432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12432) · [Before (L12394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12394)

```diff
-       if (!Ii.includes(ie)) throw new Error(`Invalid port offset "${ee}". Must be one of: ${Ii.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
+       if (!ai.includes(iW)) throw new Error(`Invalid port offset "${WW}". Must be one of: ${ai.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
```

#### 1107. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12881` → after: `L12919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12919) · [Before (L12881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12881)

```diff
-     if (KH.has(ee)) throw new Error(`Duplicate leave code: ${ee}`);
+     if (PO.has(WW)) throw new Error(`Duplicate leave code: ${WW}`);
```

#### 1108. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12904` → after: `L12942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12942) · [Before (L12904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12904)

```diff
-     return ee === ie ? Me + ye * ye <= ee * ee : ee > ie ? Math.abs(ye) <= ie && Me + ye * ye <= ee * ee : Me <= ee * ee && Me + ye * ye <= ie * ie
+     return WW === iW ? NW + mW * mW <= WW * WW : WW > iW ? Math.abs(mW) <= iW && NW + mW * mW <= WW * WW : NW <= WW * WW && NW + mW * mW <= iW * iW
```

#### 1109. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12922` → after: `L12960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12960) · [Before (L12922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12922)

```diff
-     const ee = Promise.all([He.e(84), He.e(87), He.e(85), He.e(86), He.e(81)]).then((() => He(40871))).then((ee => {
+     const WW = Promise.all([OW.e(85), OW.e(89), OW.e(86), OW.e(87), OW.e(88), OW.e(82)]).then((() => OW(41308))).then((WW => {
```

#### 1110. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12965` → after: `L13003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13003) · [Before (L12965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12965)

```diff
-               reason: `its memory stats trapped (${String(ie)})`
+               reason: `its memory stats trapped (${String(iW)})`
```

#### 1111. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12971` → after: `L13009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13009) · [Before (L12971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12971)

```diff
-               const He = Fe.jp();
+               const OW = cW.rj();
```

#### 1112. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12974` → after: `L13012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13012) · [Before (L12974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12974)

```diff
-                 return String.fromCharCode(...new Uint8Array(Ae().buffer, ee.sp(), 32))
+                 return String.fromCharCode(...new Uint8Array(uW().buffer, WW.zj(), 32))
```

#### 1113. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12987` → after: `L13025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13025) · [Before (L12987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12987)

```diff
-               Ke = pe.BR, Re = new Uint16Array(Ke * Ke * Ke),
+               PW = jW.jZ, ZW = new Uint16Array(PW * PW * PW),
```

#### 1114. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12996` → after: `L13034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13034) · [Before (L12996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12996)

```diff
-                           reason: `the memory ceiling was not set (${String(ye)})`
+                           reason: `the memory ceiling was not set (${String(mW)})`
```

#### 1115. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13000` → after: `L13038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13038) · [Before (L13000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13000)

```diff
-                         Fe = new(Wi().Sp)
+                         cW = new(Yi().Ij)
```

#### 1116. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13004` → after: `L13042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13042) · [Before (L13004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13004)

```diff
-                           reason: `GeneratedChunkEncoder did not start (${String(ye)})`
+                           reason: `GeneratedChunkEncoder did not start (${String(mW)})`
```

#### 1117. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13014` → after: `L13052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13052) · [Before (L13014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13014)

```diff
-                           reason: `${kH} (${String(ie)})`
+                           reason: `${xO} (${String(iW)})`
```

#### 1118. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13019` → after: `L13057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13057) · [Before (L13019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13019)

```diff
-                       reason: `wasm did not start (${De()})`
+                       reason: `wasm did not start (${HW()})`
```

#### 1119. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13023` → after: `L13061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13061) · [Before (L13023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13023)

```diff
-                     reason: `chunk size ${Ke} is not the encoder's 32`
+                     reason: `chunk size ${PW} is not the encoder's 32`
```

#### 1120. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13034` → after: `L13072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13072) · [Before (L13034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13034)

```diff
-                 Je = new Zi(Ke, Ue.blockMetadata, Ue.itemMetadata, ee.jb, !1, ee.sb, ee.hb, ye, Te)
+                 wW = new Ti(PW, LW.blockMetadata, LW.itemMetadata, WW.Lm, !1, WW.wm, WW.Zm, mW, bW)
```

#### 1121. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13059` → after: `L13097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13097) · [Before (L13059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13059)

```diff
-                     const He = ee.Ip(),
+                     const OW = WW.Fj(),
```

#### 1122. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13061` → after: `L13099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13099) · [Before (L13061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13061)

```diff
-                       be = ie.byteLength >= ye ? ie : new ArrayBuffer(ye),
+                       EW = iW.byteLength >= mW ? iW : new ArrayBuffer(mW),
```

#### 1123. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13064` → after: `L13102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13102) · [Before (L13064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13064)

```diff
-                     return Ke.set(new Uint8Array(Me, ee.sp(), li)), Ke.set(new Uint8Array(Me, ee.hp(), He), li), {
+                     return PW.set(new Uint8Array(NW, WW.zj(), Bi)), PW.set(new Uint8Array(NW, WW.Qj(), OW), Bi), {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79)

#### 1. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L1-L2)

```diff
- export const id = 83;
- export const ids = [83];
+ export const id = 84;
+ export const ids = [84];
```

#### 2. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L4)

```diff
-   37192: (ee, ie, He) => {
+   37646: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L6)

```diff
-       b: () => be
+       e: () => EW
```

#### 4. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L44)

```diff
-           if (ie > 0 && He.searchParams.set("cache-bust", `${Date.now()}-${ie}`), await this.fetchWhole(He, ee)) return this.scriptUrl = He, !0;
+           if (iW > 0 && OW.searchParams.set("cache-bust", `${Date.now()}-${iW}`), await this.fetchWhole(OW, WW)) return this.scriptUrl = OW, !0;
```

#### 5. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L86)

```diff
-   54302: (ee, ie, He) => {
+   54840: (WW, iW, OW) => {
```

#### 6. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L94` → after: `L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L94) · [Before (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L94)

```diff
-     const ye = new(He(37192).b)(new URL(He.p + He.u(82), He.b), {
+     const mW = new(OW(37646).e)(new URL(OW.p + OW.u(83), OW.b), {
```

## `bloxd.io` · `bundles/bloxd.io/main.css` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/main.css` (1198 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1)

#### 1. `bundles/bloxd.io/main.css` (Changed code · before: `L72` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L74) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L72)

```diff
-   padding: max(var(--notchTop), 1rem) var(--home-inner-padding-right) max(var(--notchBottom), 1rem) var(--home-inner-padding-left);
+   padding: var(--home-inner-padding-top) var(--home-inner-padding-right) var(--home-inner-padding-bottom) var(--home-inner-padding-left);
```

#### 2. `bundles/bloxd.io/main.css` (Changed code · before: `L78` → after: `L80-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L80-L81) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L78)

```diff
-   padding-bottom: calc(250px + 2rem)
+   --home-body-padding-bottom: calc(250px + 2rem);
+   padding-bottom: var(--home-body-padding-bottom)
```

#### 3. `bundles/bloxd.io/main.css` (Changed code · before: `L315-L316` → after: `L424-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L424-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L424-L430) · [Before (L315-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L315-L316)

```diff
-   top: calc(100% + .25rem);
-   transform: translateX(-50%)
+   right: -.2rem;
+   top: -.6rem;
+   z-index: 1
+ }
+ 
+ .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderStoreButton .HomeHeaderStoreDealChip .svg-inline--fa path {
+   fill: currentColor
```

#### 4. `bundles/bloxd.io/main.css` (Changed code · before: `L807-L809` → after: `L921-L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L921-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L921-L923) · [Before (L807-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L807-L809)

```diff
-   right: -.36em;
-   rotate: 20deg;
-   top: -.51em;
+   right: -.08em;
+   rotate: 12deg;
+   top: -.42em;
```

#### 5. `bundles/bloxd.io/main.css` (Changed code · before: `L3608` → after: `L3717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L3717) · [Before (L3608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L3608)

```diff
-   background-color: rgba(60, 75, 104, .72);
+   background-color: var(--hud-key-face, rgba(60, 75, 104, .72));
```

#### 6. `bundles/bloxd.io/main.css` (Changed code · before: `L3610` → after: `L3719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L3719) · [Before (L3610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L3610)

```diff
-   box-shadow: inset 0 1.5px 0 #586e99, 0 3px 0 #1a1f2e;
+   box-shadow: inset 0 1.5px 0 var(--hud-key-bevel, #586e99), 0 3px 0 #1a1f2e;
```

#### 7. `bundles/bloxd.io/main.css` (Changed code · before: `L3662-L3663` → after: `L3771-L3772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3771-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L3771-L3772) · [Before (L3662-L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L3662-L3663)

```diff
-   background-color: rgba(75, 94, 130, .85);
-   box-shadow: inset 0 1.5px 0 #586e99, 0 1px 0 #1a1f2e;
+   background-color: var(--hud-key-pressed, rgba(75, 94, 130, .85));
+   box-shadow: inset 0 1.5px 0 var(--hud-key-bevel, #586e99), 0 1px 0 #1a1f2e;
```

#### 8. `bundles/bloxd.io/main.css` (Changed code · before: `L3719` → after: `L3828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L3828) · [Before (L3719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L3719)

```diff
-   background-color: rgba(60, 75, 104, .72);
+   background-color: var(--hud-key-face, rgba(60, 75, 104, .72));
```

#### 9. `bundles/bloxd.io/main.css` (Changed code · before: `L3721` → after: `L3830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L3830) · [Before (L3721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L3721)

```diff
-   box-shadow: inset 0 1.5px 0 #586e99, 0 3px 0 #1a1f2e;
+   box-shadow: inset 0 1.5px 0 var(--hud-key-bevel, #586e99), 0 3px 0 #1a1f2e;
```

#### 10. `bundles/bloxd.io/main.css` (Changed code · before: `L3773-L3774` → after: `L3882-L3883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3882-L3883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L3882-L3883) · [Before (L3773-L3774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L3773-L3774)

```diff
-   background-color: rgba(75, 94, 130, .85);
-   box-shadow: inset 0 1.5px 0 #586e99, 0 1px 0 #1a1f2e;
+   background-color: var(--hud-key-pressed, rgba(75, 94, 130, .85));
+   box-shadow: inset 0 1.5px 0 var(--hud-key-bevel, #586e99), 0 1px 0 #1a1f2e;
```

#### 11. `bundles/bloxd.io/main.css` (Changed code · before: `L3819` → after: `L3928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L3928) · [Before (L3819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L3819)

```diff
-   background-color: rgba(60, 75, 104, .72);
+   background-color: var(--hud-key-face, rgba(60, 75, 104, .72));
```

#### 12. `bundles/bloxd.io/main.css` (Changed code · before: `L3821` → after: `L3930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L3930) · [Before (L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L3821)

```diff
-   box-shadow: inset 0 1.5px 0 #586e99, 0 3px 0 #1a1f2e;
+   box-shadow: inset 0 1.5px 0 var(--hud-key-bevel, #586e99), 0 3px 0 #1a1f2e;
```

#### 13. `bundles/bloxd.io/main.css` (Changed code · before: `L3873-L3874` → after: `L3982-L3983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3982-L3983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L3982-L3983) · [Before (L3873-L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L3873-L3874)

```diff
-   background-color: rgba(75, 94, 130, .85);
-   box-shadow: inset 0 1.5px 0 #586e99, 0 1px 0 #1a1f2e;
+   background-color: var(--hud-key-pressed, rgba(75, 94, 130, .85));
+   box-shadow: inset 0 1.5px 0 var(--hud-key-bevel, #586e99), 0 1px 0 #1a1f2e;
```

#### 14. `bundles/bloxd.io/main.css` (Changed code · before: `L3919` → after: `L4028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L4028) · [Before (L3919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L3919)

```diff
-   background-color: rgba(60, 75, 104, .72);
+   background-color: var(--hud-key-face, rgba(60, 75, 104, .72));
```

#### 15. `bundles/bloxd.io/main.css` (Changed code · before: `L3921` → after: `L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L4030) · [Before (L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L3921)

```diff
-   box-shadow: inset 0 1.5px 0 #586e99, 0 3px 0 #1a1f2e;
+   box-shadow: inset 0 1.5px 0 var(--hud-key-bevel, #586e99), 0 3px 0 #1a1f2e;
```

#### 16. `bundles/bloxd.io/main.css` (Changed code · before: `L3973-L3974` → after: `L4082-L4083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4082-L4083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L4082-L4083) · [Before (L3973-L3974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L3973-L3974)

```diff
-   background-color: rgba(75, 94, 130, .85);
-   box-shadow: inset 0 1.5px 0 #586e99, 0 1px 0 #1a1f2e;
+   background-color: var(--hud-key-pressed, rgba(75, 94, 130, .85));
+   box-shadow: inset 0 1.5px 0 var(--hud-key-bevel, #586e99), 0 1px 0 #1a1f2e;
```

#### 17. `bundles/bloxd.io/main.css` (Changed code · before: `L4019` → after: `L4128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L4128) · [Before (L4019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4019)

```diff
-   background-color: rgba(60, 75, 104, .72);
+   background-color: var(--hud-key-face, rgba(60, 75, 104, .72));
```

#### 18. `bundles/bloxd.io/main.css` (Changed code · before: `L4021` → after: `L4130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L4130) · [Before (L4021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4021)

```diff
-   box-shadow: inset 0 1.5px 0 #586e99, 0 3px 0 #1a1f2e;
+   box-shadow: inset 0 1.5px 0 var(--hud-key-bevel, #586e99), 0 3px 0 #1a1f2e;
```

#### 19. `bundles/bloxd.io/main.css` (Changed code · before: `L4073-L4074` → after: `L4182-L4183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4182-L4183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L4182-L4183) · [Before (L4073-L4074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4073-L4074)

```diff
-   background-color: rgba(75, 94, 130, .85);
-   box-shadow: inset 0 1.5px 0 #586e99, 0 1px 0 #1a1f2e;
+   background-color: var(--hud-key-pressed, rgba(75, 94, 130, .85));
+   box-shadow: inset 0 1.5px 0 var(--hud-key-bevel, #586e99), 0 1px 0 #1a1f2e;
```

#### 20. `bundles/bloxd.io/main.css` (Changed code · before: `L4119` → after: `L4228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L4228) · [Before (L4119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4119)

```diff
-   background-color: rgba(60, 75, 104, .72);
+   background-color: var(--hud-key-face, rgba(60, 75, 104, .72));
```

#### 21. `bundles/bloxd.io/main.css` (Changed code · before: `L4121` → after: `L4230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L4230) · [Before (L4121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4121)

```diff
-   box-shadow: inset 0 1.5px 0 #586e99, 0 3px 0 #1a1f2e;
+   box-shadow: inset 0 1.5px 0 var(--hud-key-bevel, #586e99), 0 3px 0 #1a1f2e;
```

#### 22. `bundles/bloxd.io/main.css` (Changed code · before: `L4173-L4174` → after: `L4282-L4283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4282-L4283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L4282-L4283) · [Before (L4173-L4174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4173-L4174)

```diff
-   background-color: rgba(75, 94, 130, .85);
-   box-shadow: inset 0 1.5px 0 #586e99, 0 1px 0 #1a1f2e;
+   background-color: var(--hud-key-pressed, rgba(75, 94, 130, .85));
+   box-shadow: inset 0 1.5px 0 var(--hud-key-bevel, #586e99), 0 1px 0 #1a1f2e;
```

#### 23. `bundles/bloxd.io/main.css` (Changed code · before: `L4219` → after: `L4328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L4328) · [Before (L4219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4219)

```diff
-   background-color: rgba(60, 75, 104, .72);
+   background-color: var(--hud-key-face, rgba(60, 75, 104, .72));
```

#### 24. `bundles/bloxd.io/main.css` (Changed code · before: `L4221` → after: `L4330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L4330) · [Before (L4221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4221)

```diff
-   box-shadow: inset 0 1.5px 0 #586e99, 0 3px 0 #1a1f2e;
+   box-shadow: inset 0 1.5px 0 var(--hud-key-bevel, #586e99), 0 3px 0 #1a1f2e;
```

#### 25. `bundles/bloxd.io/main.css` (Changed code · before: `L4273-L4274` → after: `L4382-L4383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4382-L4383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L4382-L4383) · [Before (L4273-L4274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4273-L4274)

```diff
-   background-color: rgba(75, 94, 130, .85);
-   box-shadow: inset 0 1.5px 0 #586e99, 0 1px 0 #1a1f2e;
+   background-color: var(--hud-key-pressed, rgba(75, 94, 130, .85));
+   box-shadow: inset 0 1.5px 0 var(--hud-key-bevel, #586e99), 0 1px 0 #1a1f2e;
```

#### 26. `bundles/bloxd.io/main.css` (Changed code · before: `L4793` → after: `L4902-L4903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4902-L4903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L4902-L4903) · [Before (L4793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4793)

```diff
-   padding: 0 5rem
+   overflow-wrap: anywhere;
+   padding-inline: 5rem
```

#### 27. `bundles/bloxd.io/main.css` (Changed code · before: `L4845-L4850` → after: `L4955-L4957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4955-L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L4955-L4957) · [Before (L4845-L4850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4845-L4850)

```diff
- .CosmeticPackGrantedIcon {
-   font-size: 1rem;
-   height: 3.9rem;
-   overflow: hidden;
-   position: relative;
-   width: 3.9rem
+ .SaveProgressPopup .SaveProgressValue .SaveProgressHeader {
+   display: flex;
+   justify-content: center
```

#### 28. `bundles/bloxd.io/main.css` (Changed code · before: `L4853-L4857` → after: `L4960-L4964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4960-L4964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L4960-L4964) · [Before (L4853-L4857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4853-L4857)

```diff
- .AstroPackBackground {
-   background: radial-gradient(ellipse at 40% 40%, #1e1850 0, #141236 70%);
-   inset: 0;
-   overflow: hidden;
-   position: absolute
+ .SaveProgressPopup .SaveProgressValue .SaveProgressBadge {
+   font-size: 2.6rem;
+   height: 5rem;
+   position: relative;
+   width: 5rem
```

#### 29. `bundles/bloxd.io/main.css` (Changed code · before: `L4860-L4865` → after: `L4967-L4975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4967-L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L4967-L4975) · [Before (L4860-L4865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4860-L4865)

```diff
- .AstroPackBackground:before {
-   animation: astroStarfieldShimmer 6s ease-in-out infinite alternate;
-   background-image: radial-gradient(1px 1px at 3% 8%, hsla(0, 0%, 100%, .5) 50%, transparent 100%), radial-gradient(1px 1px at 8% 22%, hsla(0, 0%, 100%, .3) 50%, transparent 100%), radial-gradient(1px 1px at 14% 55%, hsla(0, 0%, 100%, .4) 50%, transparent 100%), radial-gradient(1 … [truncated]
-   content: "";
-   inset: 0;
-   position: absolute
+ .SaveProgressPopup .SaveProgressValue .SaveProgressBadge,
+ .SaveProgressPopup .SaveProgressValue .SaveProgressBadge .SaveProgressBadgeCheck {
+   align-items: center;
+   background-color: rgba(255, 185, 20, .15);
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   color: #ffb914;
+   display: flex;
+   justify-content: center
```

#### 30. `bundles/bloxd.io/main.css` (Changed code · before: `L4868-L4872` → after: `L4978-L4986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4978-L4986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L4978-L4986) · [Before (L4868-L4872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4868-L4872)

```diff
- .AstroPackBackground.PackBackgroundSimple .AstroPackBackgroundInner .AstroNebula,
- .AstroPackBackground.PackBackgroundSimple .AstroPackBackgroundInner .AstroPlanet,
- .AstroPackBackground.PackBackgroundSimple .AstroPackBackgroundInner .AstroStar,
- .AstroPackBackground.PackBackgroundSimple:before {
-   animation: none
+ .SaveProgressPopup .SaveProgressValue .SaveProgressBadge .SaveProgressBadgeCheck {
+   background-color: #303a59;
+   bottom: -.6rem;
+   color: #1dd06d;
+   font-size: 1.1rem;
+   height: 2rem;
+   position: absolute;
+   right: -.6rem;
+   width: 2rem
```

#### 31. `bundles/bloxd.io/main.css` (Changed code · before: `L4875-L4878` → after: `L4989-L4993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4989-L4993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L4989-L4993) · [Before (L4875-L4878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4875-L4878)

```diff
- .AstroPackBackground .AstroPackBackgroundInner {
-   inset: 0;
-   pointer-events: none;
-   position: absolute
+ .SaveProgressPopup .SaveProgressValue .SaveProgressBody {
+   color: #cfcfcf;
+   font-size: 1.05rem;
+   line-height: 1.4;
+   text-align: center
```

#### 32. `bundles/bloxd.io/main.css` (Changed code · before: `L4881-L4883` → after: `L4996-L5000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4996-L5000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L4996-L5000) · [Before (L4881-L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4881-L4883)

```diff
- .AstroPackBackground .AstroPackBackgroundInner .AstroNebula {
-   border-radius: 50%/100%;
-   position: absolute
+ .SaveProgressPopup .SaveProgressStays {
+   color: #cfcfcf;
+   font-size: .9rem;
+   text-align: center;
+   width: 100%
```

#### 33. `bundles/bloxd.io/main.css` (Changed code · before: `L4886-L4893` → after: `L5003-L5014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5003-L5014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5003-L5014) · [Before (L4886-L4893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4886-L4893)

```diff
- .AstroPackBackground .AstroPackBackgroundInner .AstroNebula1 {
-   animation: astroDrift1 35s ease-in-out infinite alternate;
-   background: linear-gradient(180deg, transparent, rgba(58, 45, 104, .25) 25%, rgba(58, 45, 104, .5) 50%, rgba(58, 45, 104, .25) 75%, transparent);
-   height: 30%;
-   left: -30%;
-   top: 15%;
-   transform: rotate(-25deg);
-   width: 160%
+ .SaveProgressChip {
+   align-items: stretch;
+   animation-duration: .2s;
+   animation-fill-mode: backwards;
+   animation-iteration-count: 1;
+   animation-name: fadeInScaleUp;
+   display: flex;
+   gap: .3rem;
+   isolation: isolate;
+   justify-content: flex-end;
+   margin-top: .4rem;
+   pointer-events: auto
```

#### 34. `bundles/bloxd.io/main.css` (Changed code · before: `L4896-L4903` → after: `L5017-L5020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5017-L5020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5017-L5020) · [Before (L4896-L4903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4896-L4903)

```diff
- .AstroPackBackground .AstroPackBackgroundInner .AstroNebula2 {
-   animation: astroDrift2 40s ease-in-out infinite alternate;
-   background: linear-gradient(180deg, transparent, rgba(58, 45, 104, .15) 30%, rgba(58, 45, 104, .35) 50%, rgba(58, 45, 104, .15) 70%, transparent);
-   height: 20%;
-   left: -20%;
-   top: 55%;
-   transform: rotate(-20deg);
-   width: 140%
+ .SaveProgressChip .SaveProgressChipSave {
+   font-size: 1rem;
+   gap: .4rem;
+   padding: .3rem .8rem
```

#### 35. `bundles/bloxd.io/main.css` (Changed code · before: `L4906-L4909` → after: `L5023-L5028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5023-L5028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5023-L5028) · [Before (L4906-L4909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4906-L4909)

```diff
- .AstroPackBackground .AstroPackBackgroundInner .AstroPlanet {
-   animation: astroFloat 8s ease-in-out infinite alternate;
-   border-radius: 50%;
-   position: absolute
+ @media(pointer:coarse) {
+   .SaveProgressChip .SaveProgressChipSave {
+     box-sizing: border-box;
+     min-height: 44px;
+     min-width: 44px
+   }
```

#### 36. `bundles/bloxd.io/main.css` (Changed code · before: `L4912-L4918` → after: `L5031-L5032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5031-L5032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5031-L5032) · [Before (L4912-L4918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4912-L4918)

```diff
- .AstroPackBackground .AstroPackBackgroundInner .AstroPlanetLargePink {
-   animation-delay: 0s;
-   background: radial-gradient(circle at 35% 35%, #f0a0c0, #e880b0 40%, #c05888 85%);
-   bottom: 5%;
-   height: 8em;
-   left: 23%;
-   width: 8em
+ .SaveProgressChip .SaveProgressChipClose {
+   padding: .3rem .6rem
```

#### 37. `bundles/bloxd.io/main.css` (Changed code · before: `L4921-L4926` → after: `L5035-L5040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5035-L5040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5035-L5040) · [Before (L4921-L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4921-L4926)

```diff
- .AstroPackBackground .AstroPackBackgroundInner .AstroPlanetLargePink:before {
-   background: linear-gradient(155deg, transparent 48%, rgba(0, 0, 0, .12) 49%, transparent 53%), linear-gradient(160deg, transparent 56%, rgba(0, 0, 0, .08) 57%, transparent 61%), linear-gradient(150deg, transparent 63%, rgba(0, 0, 0, .1) 64%, transparent 67%);
-   border-radius: 50%;
-   content: "";
-   inset: 0;
-   position: absolute
+ @media(pointer:coarse) {
+   .SaveProgressChip .SaveProgressChipClose {
+     box-sizing: border-box;
+     min-height: 44px;
+     min-width: 44px
+   }
```

#### 38. `bundles/bloxd.io/main.css` (Changed code · before: `L4929-L4936` → after: `L5043-L5047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5043-L5047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5043-L5047) · [Before (L4929-L4936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4929-L4936)

```diff
- .AstroPackBackground .AstroPackBackgroundInner .AstroPlanetRingedPink {
-   animation-delay: 1.5s;
-   background: radial-gradient(circle at 40% 35%, #f0a8c8, #e880b0 50%, #c86098);
-   height: 6.5em;
-   overflow: visible;
-   right: 18%;
-   top: 5%;
-   width: 6.5em
+ .SaveProgressChip.SaveProgressChipOverMenu {
+   position: fixed;
+   right: calc(.6rem + env(safe-area-inset-right, 0px));
+   top: calc(4.5rem + env(safe-area-inset-top, 0px));
+   z-index: 21
```

#### 39. `bundles/bloxd.io/main.css` (Changed code · before: `L4939-L4948` → after: `L5050-L5051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5050-L5051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5050-L5051) · [Before (L4939-L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4939-L4948)

```diff
- .AstroPackBackground .AstroPackBackgroundInner .AstroPlanetRingedPink:after {
-   border: .12em solid rgba(180, 230, 240, .5);
-   border-radius: 50%;
-   content: "";
-   height: 35%;
-   left: 50%;
-   position: absolute;
-   top: 50%;
-   transform: translate(-50%, -50%) rotate(-15deg);
-   width: 160%
+ .InGamePromptLuckySkinBlock {
+   font-size: 1.3rem
```

#### 40. `bundles/bloxd.io/main.css` (Changed code · before: `L4951-L4958` → after: `L5054-L5055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5054-L5055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5054-L5055) · [Before (L4951-L4958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4951-L4958)

```diff
- .AstroPackBackground .AstroPackBackgroundInner .AstroPlanetRingedBlue {
-   animation-delay: 2.8s;
-   background: radial-gradient(circle at 40% 35%, #70b8e8, #5090c8 50%, #3870a0);
-   height: 3.5em;
-   left: 8%;
-   overflow: visible;
-   top: 10%;
-   width: 3.5em
+ .InGamePromptHint {
+   color: #cfcfcf
```

#### 41. `bundles/bloxd.io/main.css` (Changed code · before: `L4961-L4970` → after: `L5058-L5064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5058-L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5058-L5064) · [Before (L4961-L4970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4961-L4970)

```diff
- .AstroPackBackground .AstroPackBackgroundInner .AstroPlanetRingedBlue:after {
-   border: .1em solid rgba(160, 200, 230, .45);
-   border-radius: 50%;
-   content: "";
-   height: 30%;
-   left: 50%;
-   position: absolute;
-   top: 50%;
-   transform: translate(-50%, -50%) rotate(-20deg);
-   width: 170%
+ .UiRequests {
+   align-items: flex-end;
+   display: flex;
+   flex-direction: column;
+   gap: .5rem;
+   pointer-events: auto;
+   z-index: 1
```

#### 42. `bundles/bloxd.io/main.css` (Changed code · before: `L4973-L4980` → after: `L5067-L5070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5067-L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5067-L5070) · [Before (L4973-L4980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4973-L4980)

```diff
- .AstroPackBackground .AstroPackBackgroundInner .AstroPlanetSmallLav {
-   animation-delay: .8s;
-   background: radial-gradient(circle at 40% 35%, #c0a8d8, #a08cc0 50%, #806aa0);
-   height: 2.5em;
-   right: 12%;
-   top: 55%;
-   width: 2.5em
- }
+ @media(orientation:portrait)and (max-width:600px) {
+   .UiRequests {
+     max-width: calc(65vw - 1rem)
+   }
```

#### 43. `bundles/bloxd.io/main.css` (Changed code · before: `L4982-L4991` → after: `L5072-L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5072-L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5072-L5073) · [Before (L4982-L4991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4982-L4991)

```diff
- .AstroPackBackground .AstroPackBackgroundInner .AstroStar {
-   animation: astroTwinkle 3s ease-in-out infinite alternate;
-   background: #f0d060;
-   clip-path: polygon(50% 0, 60% 35%, 100% 50%, 60% 65%, 50% 100%, 40% 65%, 0 50%, 40% 35%);
-   position: absolute
- }
- 
- @keyframes astroStarfieldShimmer {
-   0% {
-     opacity: .6
+   .UiRequests .UiRequestText {
+     overflow-wrap: anywhere
```

#### 44. `bundles/bloxd.io/main.css` (Changed code · before: `L4994-L4995` → after: `L5076-L5077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5076-L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5076-L5077) · [Before (L4994-L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4994-L4995)

```diff
-   to {
-     opacity: 1
+   .UiRequests .UiRequestText .TextFromServerEntityName {
+     white-space: normal
```

#### 45. `bundles/bloxd.io/main.css` (Changed code · before: `L4999-L5002` → after: `L5081-L5085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5081-L5085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5081-L5085) · [Before (L4999-L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L4999-L5002)

```diff
- @keyframes astroDrift1 {
-   0% {
-     transform: translate(0) rotate(-25deg)
-   }
+ .UiRequests .UiRequestContainer.UiRequestContainer-exit {
+   opacity: 1;
+   pointer-events: none;
+   transform: translateX(0)
+ }
```

#### 46. `bundles/bloxd.io/main.css` (Changed code · before: `L5004-L5006` → after: `L5087-L5091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5087-L5091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5087-L5091) · [Before (L5004-L5006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5004-L5006)

```diff
-   to {
-     transform: translate(3%, -2%) rotate(-23deg)
-   }
+ .UiRequests .UiRequestContainer.UiRequestContainer-exit-active {
+   opacity: 0;
+   pointer-events: none;
+   transform: translateX(1.5rem);
+   transition: opacity .2s ease-in, transform .2s ease-in
```

#### 47. `bundles/bloxd.io/main.css` (Changed code · before: `L5009-L5012` → after: `L5094-L5097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5094-L5097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5094-L5097) · [Before (L5009-L5012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5009-L5012)

```diff
- @keyframes astroDrift2 {
-   0% {
-     transform: translate(0) rotate(-20deg)
-   }
+ .UiRequests .UiRequestContainer.RewardedAdUiRequestContainer {
+   animation: shake 3s infinite;
+   animation-delay: 6s
+ }
```

#### 48. `bundles/bloxd.io/main.css` (Changed code · before: `L5014-L5016` → after: `L5099-L5103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5099-L5103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5099-L5103) · [Before (L5014-L5016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5014-L5016)

```diff
-   to {
-     transform: translate(-2%, 1.5%) rotate(-22deg)
-   }
+ .UiRequests .UiRequestContainer.RewardedAdUiRequestContainer .UiRequest .UiRequestInner {
+   animation: shine 4s linear infinite;
+   background: linear-gradient(110deg, #303a59, #303a59 2rem, #394980 0, #394980 4rem, #303a59 0, #303a59);
+   background-position: -4rem 0;
+   background-size: calc(200% + 4rem) 100%
```

#### 49. `bundles/bloxd.io/main.css` (Changed code · before: `L5019` → after: `L5106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5106) · [Before (L5019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5019)

```diff
- @keyframes astroFloat {
+ @keyframes shine {
```

#### 50. `bundles/bloxd.io/main.css` (Changed code · before: `L5021-L5025` → after: `L5108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5108) · [Before (L5021-L5025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5021-L5025)

```diff
-     transform: translateY(0)
-   }
- 
-   to {
-     transform: translateY(-.4em)
+     background-position: -4rem 0
```

#### 51. `bundles/bloxd.io/main.css` (Changed code · before: `L5029-L5032` → after: `L5111-L5112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5111-L5112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5111-L5112) · [Before (L5029-L5032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5029-L5032)

```diff
- @keyframes astroTwinkle {
-   0% {
-     opacity: .3;
-     transform: scale(.8)
+   12.5% {
+     background-position: -100% 0
```

#### 52. `bundles/bloxd.io/main.css` (Changed code · before: `L5036-L5037` → after: `L5116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5116) · [Before (L5036-L5037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5036-L5037)

```diff
-     opacity: 1;
-     transform: scale(1.1)
+     background-position: -100% 0
```

#### 53. `bundles/bloxd.io/main.css` (Changed code · before: `L5041` → after: `L5120-L5122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5120-L5122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5120-L5122) · [Before (L5041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5041)

```diff
- @media(prefers-reduced-motion:reduce) {
+ .UiRequests .UiRequestContainer.RewardedAdUiRequestContainer .UiRequest .UiRequestInner {
+   border-color: #ffb914
+ }
```

#### 54. `bundles/bloxd.io/main.css` (Changed code · before: `L5043-L5048` → after: `L5124-L5129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5124-L5129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5124-L5129) · [Before (L5043-L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5043-L5048)

```diff
-   .AstroPackBackground .AstroNebula,
-   .AstroPackBackground .AstroPlanet,
-   .AstroPackBackground .AstroStar,
-   .AstroPackBackground:before {
-     animation: none
-   }
+ .UiRequests .UiRequestContainer .UiRequest {
+   animation-duration: .25s;
+   animation-fill-mode: backwards;
+   animation-iteration-count: 1;
+   animation-name: topRightStackIn;
+   animation-timing-function: cubic-bezier(.2, .8, .2, 1)
```

#### 55. `bundles/bloxd.io/main.css` (Changed code · before: `L5051-L5057` → after: `L5132-L5140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5132-L5140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5132-L5140) · [Before (L5051-L5057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5051-L5057)

```diff
- .BeePackBackground {
-   background-color: #1a1206;
-   background-image: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 200 173.21%27><g stroke=%27%23311e05%27 stroke-width=%273%27 stroke-linejoin=%27round%27><polygon fill=%27%23a87018%27 points=%2750,0 100,28.87 100,86.6 50,115.47 0,86.6 0, … [truncated]
-   background-position: 50%;
-   background-repeat: repeat;
-   background-size: 25% auto;
-   inset: 0;
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner {
+   align-items: center;
+   background-color: #303a59;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   display: flex;
+   gap: .5rem;
+   justify-content: flex-start;
```

#### 56. `bundles/bloxd.io/main.css` (Changed code · before: `L5059` → after: `L5142-L5143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5142-L5143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5142-L5143) · [Before (L5059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5059)

```diff
-   position: absolute
+   padding: .5rem 1rem .5rem .5rem;
+   position: relative
```

#### 57. `bundles/bloxd.io/main.css` (Changed code · before: `L5062-L5066` → after: `L5146-L5152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5146-L5152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5146-L5152) · [Before (L5062-L5066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5062-L5066)

```diff
- .BeePackBackground:after {
-   animation: beeHoneyGloss 12s ease-in-out infinite alternate;
-   background: linear-gradient(125deg, transparent 35%, hsla(44, 87%, 69%, .18) 50%, transparent 65%);
-   content: "";
-   inset: 0;
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay {
+   align-items: center;
+   display: flex;
+   gap: 1rem;
+   height: 100%;
+   justify-content: center;
+   left: 0;
```

#### 58. `bundles/bloxd.io/main.css` (Changed code · before: `L5068` → after: `L5154-L5157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5154-L5157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5154-L5157) · [Before (L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5068)

```diff
-   position: absolute
+   position: absolute;
+   top: 0;
+   width: 100%;
+   z-index: 2
```

#### 59. `bundles/bloxd.io/main.css` (Changed code · before: `L5071-L5072` → after: `L5160-L5161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5160-L5161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5160-L5161) · [Before (L5071-L5072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5071-L5072)

```diff
- .BeePackBackground.PackBackgroundSimple:after {
-   animation: none
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay.UiRequestOverlayDefault {
+   background-color: transparent
```

#### 60. `bundles/bloxd.io/main.css` (Changed code · before: `L5075-L5082` → after: `L5164-L5166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5164-L5166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5164-L5166) · [Before (L5075-L5082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5075-L5082)

```diff
- @keyframes beeHoneyGloss {
-   0% {
-     transform: translateX(-12%)
-   }
- 
-   to {
-     transform: translateX(12%)
-   }
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay.UiRequestOverlayLoading {
+   background-color: rgba(48, 58, 89, .9);
+   font-size: 2rem
```

#### 61. `bundles/bloxd.io/main.css` (Changed code · before: `L5085-L5088` → after: `L5169-L5170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5169-L5170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5169-L5170) · [Before (L5085-L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5085-L5088)

```diff
- @media(prefers-reduced-motion:reduce) {
-   .BeePackBackground:after {
-     animation: none
-   }
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay.UiRequestOverlaySuccess {
+   background-color: rgba(48, 58, 89, .9)
```

#### 62. `bundles/bloxd.io/main.css` (Changed code · before: `L5091-L5095` → after: `L5173-L5175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5173-L5175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5173-L5175) · [Before (L5091-L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5091-L5095)

```diff
- .HighSocietyPackBackground {
-   background: #14141a;
-   inset: 0;
-   overflow: hidden;
-   position: absolute
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay.UiRequestOverlaySuccess .UiRequestSuccessOverlayIcon {
+   font-size: 2rem;
+   position: relative
```

#### 63. `bundles/bloxd.io/main.css` (Changed code · before: `L5098-L5099` → after: `L5178-L5180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5178-L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5178-L5180) · [Before (L5098-L5099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5098-L5099)

```diff
- .HighSocietyPackBackground.PackBackgroundSimple .HighSocietyPackBackgroundInner {
-   filter: blur(4em)
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestOverlay.UiRequestOverlaySuccess .UiRequestSuccessOverlayText {
+   font-size: 1.3rem;
+   font-weight: 700
```

#### 64. `bundles/bloxd.io/main.css` (Changed code · before: `L5102-L5103` → after: `L5183-L5189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5183-L5189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5183-L5189) · [Before (L5102-L5103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5102-L5103)

```diff
- .HighSocietyPackBackground.PackBackgroundSimple .HighSocietyPackBackgroundInner .HighSocietyBlob {
-   animation: none
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestLeft {
+   align-items: center;
+   display: flex;
+   font-size: 3rem;
+   height: 5rem;
+   justify-content: center;
+   width: 5rem
```

#### 65. `bundles/bloxd.io/main.css` (Changed code · before: `L5106-L5107` → after: `L5192-L5196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5192-L5196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5192-L5196) · [Before (L5106-L5107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5106-L5107)

```diff
- .HighSocietyPackBackground.PackBackgroundSimple .HighSocietyPackBackgroundInner .HighSocietyBlob:before {
-   filter: none
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight {
+   align-items: stretch;
+   display: flex;
+   flex-direction: column;
+   gap: .5rem
```

#### 66. `bundles/bloxd.io/main.css` (Changed code · before: `L5110-L5113` → after: `L5199-L5203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5199-L5203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5199-L5203) · [Before (L5110-L5113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5110-L5113)

```diff
- .HighSocietyPackBackground .HighSocietyPackBackgroundInner {
-   inset: -6em;
-   pointer-events: none;
-   position: absolute
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight .UiRequestText {
+   font-size: 1.3rem;
+   font-weight: 700;
+   margin-right: auto;
+   padding: .25rem 1.25rem .25rem .4rem
```

#### 67. `bundles/bloxd.io/main.css` (Changed code · before: `L5116-L5117` → after: `L5206-L5210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5206-L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5206-L5210) · [Before (L5116-L5117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5116-L5117)

```diff
- .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob {
-   position: absolute
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight .UiRequestButtonList {
+   align-items: center;
+   display: flex;
+   gap: .5rem;
+   justify-content: center
```

#### 68. `bundles/bloxd.io/main.css` (Changed code · before: `L5120-L5125` → after: `L5213-L5217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5213-L5217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5213-L5217) · [Before (L5120-L5125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5120-L5125)

```diff
- .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob:before {
-   border-radius: 50%;
-   content: "";
-   filter: blur(4em);
-   inset: 0;
-   position: absolute
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight .UiRequestButtonList .UiRequestButton {
+   box-shadow: none;
+   flex-grow: 1;
+   font-size: 1rem;
+   font-weight: 700
```

#### 69. `bundles/bloxd.io/main.css` (Changed code · before: `L5128-L5130` → after: `L5220-L5224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5220-L5224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5220-L5224) · [Before (L5128-L5130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5128-L5130)

```diff
- .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob1 {
-   height: 80%;
-   width: 70%
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight .UiRequestButtonList .UiRequestButton .ButtonBody {
+   align-items: center;
+   display: flex;
+   gap: 1rem;
+   justify-content: center
```

#### 70. `bundles/bloxd.io/main.css` (Changed code · before: `L5133-L5134` → after: `L5227-L5228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5227-L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5227-L5228) · [Before (L5133-L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5133-L5134)

```diff
- .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob1:before {
-   background: radial-gradient(circle, #6e1e2d 0, rgba(110, 30, 45, .7) 45%, transparent 70%)
+ .UiRequests .UiRequestContainer .UiRequest .UiRequestInner .UiRequestRight .UiRequestButtonList .UiRequestButton .KeyboardButtonRepresentation {
+   font-size: .8rem
```

#### 71. `bundles/bloxd.io/main.css` (Changed code · before: `L5137-L5141` → after: `L5231-L5234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5231-L5234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5231-L5234) · [Before (L5137-L5141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5137-L5141)

```diff
- .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob1 {
-   animation: hsMove1 28s ease-in-out infinite alternate;
-   left: -15%;
-   top: -25%
- }
+ @keyframes chestShake {
+   0% {
+     transform: translateX(-50%) rotate(6deg)
+   }
```

#### 72. `bundles/bloxd.io/main.css` (Changed code · before: `L5143-L5146` → after: `L5236-L5238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5236-L5238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5236-L5238) · [Before (L5143-L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5143-L5146)

```diff
- .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob2 {
-   height: 75%;
-   width: 65%
- }
+   25% {
+     transform: translateX(-50%) rotate(-4deg)
+   }
```

#### 73. `bundles/bloxd.io/main.css` (Changed code · before: `L5148-L5150` → after: `L5240-L5242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5240-L5242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5240-L5242) · [Before (L5148-L5150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5148-L5150)

```diff
- .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob2:before {
-   background: radial-gradient(circle, #23325a 0, rgba(35, 50, 90, .75) 45%, transparent 70%)
- }
+   50% {
+     transform: translateX(-50%) rotate(6deg)
+   }
```

#### 74. `bundles/bloxd.io/main.css` (Changed code · before: `L5152-L5156` → after: `L5244-L5246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5244-L5246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5244-L5246) · [Before (L5152-L5156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5152-L5156)

```diff
- .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob2 {
-   animation: hsMove2 32s ease-in-out infinite alternate;
-   right: -20%;
-   top: 20%
- }
+   75% {
+     transform: translateX(-50%) rotate(-4deg)
+   }
```

#### 75. `bundles/bloxd.io/main.css` (Changed code · before: `L5158-L5160` → after: `L5248-L5250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5248-L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5248-L5250) · [Before (L5158-L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5158-L5160)

```diff
- .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob3 {
-   height: 65%;
-   width: 75%
+   to {
+     transform: translateX(-50%) rotate(0)
+   }
```

#### 76. `bundles/bloxd.io/main.css` (Changed code · before: `L5163-L5165` → after: `L5253-L5257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5253-L5257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5253-L5257) · [Before (L5163-L5165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5163-L5165)

```diff
- .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob3:before {
-   background: radial-gradient(circle, #e8cd73 0, hsla(46, 72%, 68%, .55) 40%, transparent 70%)
- }
+ @keyframes pop {
+   0% {
+     bottom: 0;
+     opacity: 0
+   }
```

#### 77. `bundles/bloxd.io/main.css` (Changed code · before: `L5167-L5170` → after: `L5259-L5262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5259-L5262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5259-L5262) · [Before (L5167-L5170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5167-L5170)

```diff
- .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob3 {
-   animation: hsMove3 24s ease-in-out infinite alternate;
-   bottom: -20%;
-   right: 5%
+   to {
+     bottom: 1.5rem;
+     opacity: 0
+   }
```

#### 78. `bundles/bloxd.io/main.css` (Changed code · before: `L5173-L5194` → after: `L5265-L5268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5265-L5268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5265-L5268) · [Before (L5173-L5194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5173-L5194)

```diff
- .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob4 {
-   height: 70%;
-   width: 60%
- }
- 
- .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob4:before {
-   background: radial-gradient(circle, #463258 0, rgba(70, 50, 88, .7) 40%, transparent 70%)
- }
- 
- .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob4 {
-   animation: hsMove4 30s ease-in-out infinite alternate;
-   left: 25%;
-   top: 5%
- }
- 
- .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob5 {
- ... (6 more removed lines; see GitHub link above)
+ .ChestContainer {
+   height: 5.5rem;
+   position: relative;
+   width: 5rem
```

#### 79. `bundles/bloxd.io/main.css` (Changed code · before: `L5197-L5198` → after: `L5271-L5273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5271-L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5271-L5273) · [Before (L5197-L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5197-L5198)

```diff
- .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob5 {
-   animation: hsMove5 36s ease-in-out infinite alternate;
+ .ChestContainer .ChestImage {
+   -ms-interpolation-mode: nearest-neighbor;
+   animation: chestShake .4s 3;
```

#### 80. `bundles/bloxd.io/main.css` (Changed code · before: `L5200-L5205` → after: `L5275-L5284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5275-L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5275-L5284) · [Before (L5200-L5205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5200-L5205)

```diff
-   left: -15%
- }
- 
- .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob6 {
-   height: 50%;
-   width: 45%
+   image-rendering: optimizeSpeed;
+   image-rendering: -o-crisp-edges;
+   image-rendering: pixelated;
+   image-rendering: optimize-contrast;
+   left: 50%;
+   position: absolute;
+   transform: translateX(-50%);
+   transform-origin: center center;
+   transition: width .2s;
+   width: 4rem
```

#### 81. `bundles/bloxd.io/main.css` (Changed code · before: `L5208-L5209` → after: `L5287-L5288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5287-L5288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5287-L5288) · [Before (L5208-L5209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5208-L5209)

```diff
- .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob6:before {
-   background: radial-gradient(circle, #ebe1c8 0, hsla(43, 47%, 85%, .5) 50%, transparent 70%)
+ .ChestContainer .ChestImage.ChestImageSmall {
+   width: 2.5rem
```

#### 82. `bundles/bloxd.io/main.css` (Changed code · before: `L5212-L5215` → after: `L5291-L5303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5291-L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5291-L5303) · [Before (L5212-L5215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5212-L5215)

```diff
- .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob6 {
-   animation: hsMove6 22s ease-in-out infinite alternate;
-   left: 40%;
-   top: 40%
+ .ChestContainer .ChestShine {
+   animation-delay: .2s;
+   animation-duration: .2s;
+   animation-fill-mode: backwards;
+   animation-iteration-count: 1;
+   animation-name: fadeInScaleUp;
+   bottom: 1rem;
+   clip-path: polygon(0 0, 100% 0, 70% 100%, 30% 100%);
+   height: 2.5rem;
+   isolation: isolate;
+   left: calc(50% - 1.9rem);
+   position: absolute;
+   width: 3.8rem
```

#### 83. `bundles/bloxd.io/main.css` (Changed code · before: `L5218-L5229` → after: `L5306-L5312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5306-L5312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5306-L5312) · [Before (L5218-L5229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5218-L5229)

```diff
- @keyframes hsMove1 {
-   0% {
-     transform: translate(0) scale(1) rotate(0deg)
-   }
- 
-   50% {
-     transform: translate(25%, 15%) scale(1.1) rotate(60deg)
-   }
- 
-   to {
-     transform: translate(-10%, 30%) scale(.95) rotate(140deg)
-   }
+ .ChestContainer .ChestShine .ChestShineBackground {
+   background: linear-gradient(0, rgba(255, 185, 20, .8), rgba(255, 185, 20, 0));
+   bottom: 0;
+   height: 100%;
+   left: 0;
+   position: absolute;
+   width: 100%
```

#### 84. `bundles/bloxd.io/main.css` (Changed code · before: `L5232-L5243` → after: `L5315-L5324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5315-L5324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5315-L5324) · [Before (L5232-L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5232-L5243)

```diff
- @keyframes hsMove2 {
-   0% {
-     transform: translate(0) scale(1) rotate(0deg)
-   }
- 
-   50% {
-     transform: translate(-20%, -10%) scale(1.08) rotate(-50deg)
-   }
- 
-   to {
-     transform: translate(10%, -25%) scale(1.05) rotate(-130deg)
-   }
+ .ChestContainer .RewardItemsContainer {
+   align-items: center;
+   display: flex;
+   gap: .4rem;
+   height: 3rem;
+   justify-content: center;
+   left: 0;
+   position: absolute;
+   top: 0;
+   width: 100%
```

#### 85. `bundles/bloxd.io/main.css` (Changed code · before: `L5246-L5257` → after: `L5327-L5332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5327-L5332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5327-L5332) · [Before (L5246-L5257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5246-L5257)

```diff
- @keyframes hsMove3 {
-   0% {
-     transform: translate(0) scale(1) rotate(0deg)
-   }
- 
-   50% {
-     transform: translate(-18%, -20%) scale(1.15) rotate(50deg)
-   }
- 
-   to {
-     transform: translate(12%, -8%) scale(.92) rotate(120deg)
-   }
+ .ChestContainer .RewardItemsContainer .RewardItem {
+   font-size: 1.5rem;
+   height: 100%;
+   position: relative;
+   transform-origin: center bottom;
+   width: 0
```

#### 86. `bundles/bloxd.io/main.css` (Changed code · before: `L5260-L5271` → after: `L5335-L5337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5335-L5337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5335-L5337) · [Before (L5260-L5271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5260-L5271)

```diff
- @keyframes hsMove4 {
-   0% {
-     transform: translate(0) scale(1) rotate(0deg)
-   }
- 
-   50% {
-     transform: translate(18%, 20%) scale(1.08) rotate(-70deg)
-   }
- 
-   to {
-     transform: translate(-22%, 8%) scale(1.04) rotate(-150deg)
-   }
+ .ChestContainer .RewardItemsContainer .RewardItem.RewardItemShow .TextFromServer {
+   bottom: .25rem;
+   opacity: 1
```

#### 87. `bundles/bloxd.io/main.css` (Changed code · before: `L5274-L5285` → after: `L5340-L5346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5340-L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5340-L5346) · [Before (L5274-L5285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5274-L5285)

```diff
- @keyframes hsMove5 {
-   0% {
-     transform: translate(0) scale(1) rotate(0deg)
-   }
- 
-   50% {
-     transform: translate(25%, -18%) scale(1.12) rotate(70deg)
-   }
- 
-   to {
-     transform: translate(8%, -28%) scale(.95) rotate(150deg)
-   }
+ .ChestContainer .RewardItemsContainer .RewardItem .TextFromServer {
+   bottom: -1rem;
+   opacity: 0;
+   position: absolute;
+   transform: translateX(-50%);
+   transition: opacity .4s, bottom .4s;
+   transition-delay: .2s
```

#### 88. `bundles/bloxd.io/main.css` (Changed code · before: `L5288-L5299` → after: `L5349-L5354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5349-L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5349-L5354) · [Before (L5288-L5299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5288-L5299)

```diff
- @keyframes hsMove6 {
-   0% {
-     transform: translate(0) scale(1) rotate(0deg)
-   }
- 
-   50% {
-     transform: translate(-14%, 16%) scale(1.1) rotate(-40deg)
-   }
- 
-   to {
-     transform: translate(-26%, -12%) scale(1.05) rotate(-110deg)
-   }
+ .CosmeticPackGrantedIcon {
+   font-size: 1rem;
+   height: 3.9rem;
+   overflow: hidden;
+   position: relative;
+   width: 3.9rem
```

#### 89. `bundles/bloxd.io/main.css` (Changed code · before: `L5302-L5305` → after: `L5357-L5361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5357-L5361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5357-L5361) · [Before (L5302-L5305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5302-L5305)

```diff
- @media(prefers-reduced-motion:reduce) {
-   .HighSocietyPackBackground .HighSocietyBlob {
-     animation: none
-   }
+ .AstroPackBackground {
+   background: radial-gradient(ellipse at 40% 40%, #1e1850 0, #141236 70%);
+   inset: 0;
+   overflow: hidden;
+   position: absolute
```

#### 90. `bundles/bloxd.io/main.css` (Changed code · before: `L5308-L5309` → after: `L5364-L5367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5364-L5367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5364-L5367) · [Before (L5308-L5309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5308-L5309)

```diff
- .SpringPackBackground {
-   background: #48a058;
+ .AstroPackBackground:before {
+   animation: astroStarfieldShimmer 6s ease-in-out infinite alternate;
+   background-image: radial-gradient(1px 1px at 3% 8%, hsla(0, 0%, 100%, .5) 50%, transparent 100%), radial-gradient(1px 1px at 8% 22%, hsla(0, 0%, 100%, .3) 50%, transparent 100%), radial-gradient(1px 1px at 14% 55%, hsla(0, 0%, 100%, .4) 50%, transparent 100%), radial-gradient(1 … [truncated]
+   content: "";
```

#### 91. `bundles/bloxd.io/main.css` (Changed code · before: `L5315-L5316` → after: `L5372-L5375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5372-L5375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5372-L5375) · [Before (L5315-L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5315-L5316)

```diff
- .SpringPackBackground.PackBackgroundSimple .SpringPackBackgroundInner .SpringFlowerWrap .SpringFlower,
- .SpringPackBackground.PackBackgroundSimple .SpringPackBackgroundInner .SpringLeafWrap .SpringLeaf {
+ .AstroPackBackground.PackBackgroundSimple .AstroPackBackgroundInner .AstroNebula,
+ .AstroPackBackground.PackBackgroundSimple .AstroPackBackgroundInner .AstroPlanet,
+ .AstroPackBackground.PackBackgroundSimple .AstroPackBackgroundInner .AstroStar,
+ .AstroPackBackground.PackBackgroundSimple:before {
```

#### 92. `bundles/bloxd.io/main.css` (Changed code · before: `L5320` → after: `L5379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5379) · [Before (L5320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5320)

```diff
- .SpringPackBackground .SpringPackBackgroundInner {
+ .AstroPackBackground .AstroPackBackgroundInner {
```

#### 93. `bundles/bloxd.io/main.css` (Changed code · before: `L5326` → after: `L5385-L5386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5385-L5386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5385-L5386) · [Before (L5326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5326)

```diff
- .SpringPackBackground .SpringPackBackgroundInner .SpringLeafWrap {
+ .AstroPackBackground .AstroPackBackgroundInner .AstroNebula {
+   border-radius: 50%/100%;
```

#### 94. `bundles/bloxd.io/main.css` (Changed code · before: `L5330-L5333` → after: `L5390-L5397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5390-L5397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5390-L5397) · [Before (L5330-L5333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5330-L5333)

```diff
- .SpringPackBackground .SpringPackBackgroundInner .SpringLeafWrap .SpringLeaf {
-   animation: springSway 5s ease-in-out infinite alternate;
-   background-color: rgba(90, 160, 100, .3);
-   border-radius: 50% 0 50% 0
+ .AstroPackBackground .AstroPackBackgroundInner .AstroNebula1 {
+   animation: astroDrift1 35s ease-in-out infinite alternate;
+   background: linear-gradient(180deg, transparent, rgba(58, 45, 104, .25) 25%, rgba(58, 45, 104, .5) 50%, rgba(58, 45, 104, .25) 75%, transparent);
+   height: 30%;
+   left: -30%;
+   top: 15%;
+   transform: rotate(-25deg);
+   width: 160%
```

#### 95. `bundles/bloxd.io/main.css` (Changed code · before: `L5336-L5337` → after: `L5400-L5407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5400-L5407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5400-L5407) · [Before (L5336-L5337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5336-L5337)

```diff
- .SpringPackBackground .SpringPackBackgroundInner .SpringFlowerWrap {
-   position: absolute
+ .AstroPackBackground .AstroPackBackgroundInner .AstroNebula2 {
+   animation: astroDrift2 40s ease-in-out infinite alternate;
+   background: linear-gradient(180deg, transparent, rgba(58, 45, 104, .15) 30%, rgba(58, 45, 104, .35) 50%, rgba(58, 45, 104, .15) 70%, transparent);
+   height: 20%;
+   left: -20%;
+   top: 55%;
+   transform: rotate(-20deg);
+   width: 140%
```

#### 96. `bundles/bloxd.io/main.css` (Changed code · before: `L5340-L5343` → after: `L5410-L5413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5410-L5413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5410-L5413) · [Before (L5340-L5343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5340-L5343)

```diff
- .SpringPackBackground .SpringPackBackgroundInner .SpringFlowerWrap .SpringFlower {
-   animation: springFloat 4s ease-in-out infinite alternate;
-   display: block;
-   image-rendering: pixelated
+ .AstroPackBackground .AstroPackBackgroundInner .AstroPlanet {
+   animation: astroFloat 8s ease-in-out infinite alternate;
+   border-radius: 50%;
+   position: absolute
```

#### 97. `bundles/bloxd.io/main.css` (Changed code · before: `L5346-L5353` → after: `L5416-L5422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5416-L5422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5416-L5422) · [Before (L5346-L5353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5346-L5353)

```diff
- @keyframes springFloat {
-   0% {
-     transform: translateY(0)
-   }
- 
-   to {
-     transform: translateY(-.6em)
-   }
+ .AstroPackBackground .AstroPackBackgroundInner .AstroPlanetLargePink {
+   animation-delay: 0s;
+   background: radial-gradient(circle at 35% 35%, #f0a0c0, #e880b0 40%, #c05888 85%);
+   bottom: 5%;
+   height: 8em;
+   left: 23%;
+   width: 8em
```

#### 98. `bundles/bloxd.io/main.css` (Changed code · before: `L5356-L5360` → after: `L5425-L5497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5425-L5497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5425-L5497) · [Before (L5356-L5360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5356-L5360)

```diff
- @keyframes springSway {
-   0% {
-     transform: rotate(0deg) scale(1)
-   }
- 
+ .AstroPackBackground .AstroPackBackgroundInner .AstroPlanetLargePink:before {
+   background: linear-gradient(155deg, transparent 48%, rgba(0, 0, 0, .12) 49%, transparent 53%), linear-gradient(160deg, transparent 56%, rgba(0, 0, 0, .08) 57%, transparent 61%), linear-gradient(150deg, transparent 63%, rgba(0, 0, 0, .1) 64%, transparent 67%);
+   border-radius: 50%;
+   content: "";
+   inset: 0;
+   position: absolute
+ }
+ 
+ .AstroPackBackground .AstroPackBackgroundInner .AstroPlanetRingedPink {
+   animation-delay: 1.5s;
+   background: radial-gradient(circle at 40% 35%, #f0a8c8, #e880b0 50%, #c86098);
+   height: 6.5em;
+   overflow: visible;
+   right: 18%;
+   top: 5%;
+   width: 6.5em
+ ... (57 more added lines; see GitHub link above)
```

#### 99. `bundles/bloxd.io/main.css` (Changed code · before: `L5362` → after: `L5499-L5541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5499-L5541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5499-L5541) · [Before (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5362)

```diff
-     transform: rotate(8deg) scale(1.05)
+     opacity: 1
+   }
+ }
+ 
+ @keyframes astroDrift1 {
+   0% {
+     transform: translate(0) rotate(-25deg)
+   }
+ 
+   to {
+     transform: translate(3%, -2%) rotate(-23deg)
+   }
+ }
+ 
+ @keyframes astroDrift2 {
+   0% {
+ ... (27 more added lines; see GitHub link above)
```

#### 100. `bundles/bloxd.io/main.css` (Changed code · before: `L5368-L5369` → after: `L5547-L5550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5547-L5550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5547-L5550) · [Before (L5368-L5369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5368-L5369)

```diff
-   .SpringPackBackground .SpringFlower,
-   .SpringPackBackground .SpringLeaf {
+   .AstroPackBackground .AstroNebula,
+   .AstroPackBackground .AstroPlanet,
+   .AstroPackBackground .AstroStar,
+   .AstroPackBackground:before {
```

#### 101. `bundles/bloxd.io/main.css` (Changed code · before: `L5374-L5375` → after: `L5555-L5560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5555-L5560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5555-L5560) · [Before (L5374-L5375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5374-L5375)

```diff
- .Y2kPackBackground {
-   background: #b8a6ce;
+ .BeePackBackground {
+   background-color: #1a1206;
+   background-image: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 200 173.21%27><g stroke=%27%23311e05%27 stroke-width=%273%27 stroke-linejoin=%27round%27><polygon fill=%27%23a87018%27 points=%2750,0 100,28.87 100,86.6 50,115.47 0,86.6 0, … [truncated]
+   background-position: 50%;
+   background-repeat: repeat;
+   background-size: 25% auto;
```

#### 102. `bundles/bloxd.io/main.css` (Changed code · before: `L5381` → after: `L5566-L5602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5566-L5602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5566-L5602) · [Before (L5381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5381)

```diff
- .Y2kPackBackground.PackBackgroundSimple .Y2kPackBackgroundInner {
+ .BeePackBackground:after {
+   animation: beeHoneyGloss 12s ease-in-out infinite alternate;
+   background: linear-gradient(125deg, transparent 35%, hsla(44, 87%, 69%, .18) 50%, transparent 65%);
+   content: "";
+   inset: 0;
+   pointer-events: none;
+   position: absolute
+ }
+ 
+ .BeePackBackground.PackBackgroundSimple:after {
+   animation: none
+ }
+ 
+ @keyframes beeHoneyGloss {
+   0% {
+     transform: translateX(-12%)
+ ... (21 more added lines; see GitHub link above)
```

#### 103. `bundles/bloxd.io/main.css` (Changed code · before: `L5385` → after: `L5606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5606) · [Before (L5385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5385)

```diff
- .Y2kPackBackground.PackBackgroundSimple .Y2kPackBackgroundInner .Y2kBlob {
+ .HighSocietyPackBackground.PackBackgroundSimple .HighSocietyPackBackgroundInner .HighSocietyBlob {
```

#### 104. `bundles/bloxd.io/main.css` (Changed code · before: `L5389` → after: `L5610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5610) · [Before (L5389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5389)

```diff
- .Y2kPackBackground.PackBackgroundSimple .Y2kPackBackgroundInner .Y2kBlob:before {
+ .HighSocietyPackBackground.PackBackgroundSimple .HighSocietyPackBackgroundInner .HighSocietyBlob:before {
```

#### 105. `bundles/bloxd.io/main.css` (Changed code · before: `L5393` → after: `L5614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5614) · [Before (L5393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5393)

```diff
- .Y2kPackBackground .Y2kPackBackgroundInner {
+ .HighSocietyPackBackground .HighSocietyPackBackgroundInner {
```

#### 106. `bundles/bloxd.io/main.css` (Changed code · before: `L5399` → after: `L5620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5620) · [Before (L5399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5399)

```diff
- .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob {
+ .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob {
```

#### 107. `bundles/bloxd.io/main.css` (Changed code · before: `L5403` → after: `L5624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5624) · [Before (L5403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5403)

```diff
- .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob:before {
+ .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob:before {
```

#### 108. `bundles/bloxd.io/main.css` (Changed code · before: `L5411` → after: `L5632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5632) · [Before (L5411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5411)

```diff
- .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob1 {
+ .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob1 {
```

#### 109. `bundles/bloxd.io/main.css` (Changed code · before: `L5416-L5417` → after: `L5637-L5638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5637-L5638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5637-L5638) · [Before (L5416-L5417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5416-L5417)

```diff
- .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob1:before {
-   background: radial-gradient(circle, #f472b6 0, rgba(244, 114, 182, .6) 50%, transparent 70%)
+ .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob1:before {
+   background: radial-gradient(circle, #6e1e2d 0, rgba(110, 30, 45, .7) 45%, transparent 70%)
```

#### 110. `bundles/bloxd.io/main.css` (Changed code · before: `L5420-L5421` → after: `L5641-L5642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5641-L5642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5641-L5642) · [Before (L5420-L5421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5420-L5421)

```diff
- .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob1 {
-   animation: y2kMove1 14s ease-in-out infinite alternate;
+ .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob1 {
+   animation: hsMove1 28s ease-in-out infinite alternate;
```

#### 111. `bundles/bloxd.io/main.css` (Changed code · before: `L5426` → after: `L5647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5647) · [Before (L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5426)

```diff
- .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob2 {
+ .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob2 {
```

#### 112. `bundles/bloxd.io/main.css` (Changed code · before: `L5431-L5432` → after: `L5652-L5653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5652-L5653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5652-L5653) · [Before (L5431-L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5431-L5432)

```diff
- .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob2:before {
-   background: radial-gradient(circle, #6b3a91 0, rgba(107, 58, 145, .7) 40%, transparent 70%)
+ .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob2:before {
+   background: radial-gradient(circle, #23325a 0, rgba(35, 50, 90, .75) 45%, transparent 70%)
```

#### 113. `bundles/bloxd.io/main.css` (Changed code · before: `L5435-L5436` → after: `L5656-L5657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5656-L5657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5656-L5657) · [Before (L5435-L5436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5435-L5436)

```diff
- .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob2 {
-   animation: y2kMove2 18s ease-in-out infinite alternate;
+ .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob2 {
+   animation: hsMove2 32s ease-in-out infinite alternate;
```

#### 114. `bundles/bloxd.io/main.css` (Changed code · before: `L5441` → after: `L5662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5662) · [Before (L5441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5441)

```diff
- .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob3 {
+ .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob3 {
```

#### 115. `bundles/bloxd.io/main.css` (Changed code · before: `L5446-L5447` → after: `L5667-L5668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5667-L5668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5667-L5668) · [Before (L5446-L5447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5446-L5447)

```diff
- .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob3:before {
-   background: radial-gradient(circle, #ddd09e 0, hsla(48, 48%, 74%, .6) 45%, transparent 70%)
+ .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob3:before {
+   background: radial-gradient(circle, #e8cd73 0, hsla(46, 72%, 68%, .55) 40%, transparent 70%)
```

#### 116. `bundles/bloxd.io/main.css` (Changed code · before: `L5450-L5451` → after: `L5671-L5672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5671-L5672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5671-L5672) · [Before (L5450-L5451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5450-L5451)

```diff
- .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob3 {
-   animation: y2kMove3 12s ease-in-out infinite alternate;
+ .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob3 {
+   animation: hsMove3 24s ease-in-out infinite alternate;
```

#### 117. `bundles/bloxd.io/main.css` (Changed code · before: `L5456` → after: `L5677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5677) · [Before (L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5456)

```diff
- .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob4 {
+ .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob4 {
```

#### 118. `bundles/bloxd.io/main.css` (Changed code · before: `L5461-L5462` → after: `L5682-L5683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5682-L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5682-L5683) · [Before (L5461-L5462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5461-L5462)

```diff
- .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob4:before {
-   background: radial-gradient(circle, #4a1d6b 0, rgba(74, 29, 107, .7) 40%, transparent 70%)
+ .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob4:before {
+   background: radial-gradient(circle, #463258 0, rgba(70, 50, 88, .7) 40%, transparent 70%)
```

#### 119. `bundles/bloxd.io/main.css` (Changed code · before: `L5465-L5466` → after: `L5686-L5687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5686-L5687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5686-L5687) · [Before (L5465-L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5465-L5466)

```diff
- .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob4 {
-   animation: y2kMove4 16s ease-in-out infinite alternate;
+ .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob4 {
+   animation: hsMove4 30s ease-in-out infinite alternate;
```

#### 120. `bundles/bloxd.io/main.css` (Changed code · before: `L5471` → after: `L5692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5692) · [Before (L5471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5471)

```diff
- .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob5 {
+ .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob5 {
```

#### 121. `bundles/bloxd.io/main.css` (Changed code · before: `L5476-L5477` → after: `L5697-L5698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5697-L5698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5697-L5698) · [Before (L5476-L5477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5476-L5477)

```diff
- .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob5:before {
-   background: radial-gradient(circle, #e86baf 0, rgba(232, 107, 175, .5) 45%, transparent 70%)
+ .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob5:before {
+   background: radial-gradient(circle, #be8250 0, rgba(190, 130, 80, .6) 45%, transparent 70%)
```

#### 122. `bundles/bloxd.io/main.css` (Changed code · before: `L5480-L5481` → after: `L5701-L5702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5701-L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5701-L5702) · [Before (L5480-L5481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5480-L5481)

```diff
- .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob5 {
-   animation: y2kMove5 20s ease-in-out infinite alternate;
+ .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob5 {
+   animation: hsMove5 36s ease-in-out infinite alternate;
```

#### 123. `bundles/bloxd.io/main.css` (Changed code · before: `L5486-L5488` → after: `L5707-L5709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5707-L5709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5707-L5709) · [Before (L5486-L5488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5486-L5488)

```diff
- .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob6 {
-   height: 55%;
-   width: 50%
+ .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob6 {
+   height: 50%;
+   width: 45%
```

#### 124. `bundles/bloxd.io/main.css` (Changed code · before: `L5491-L5492` → after: `L5712-L5713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5712-L5713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5712-L5713) · [Before (L5491-L5492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5491-L5492)

```diff
- .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob6:before {
-   background: radial-gradient(circle, #b8a6ce 0, rgba(184, 166, 206, .6) 50%, transparent 70%)
+ .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob6:before {
+   background: radial-gradient(circle, #ebe1c8 0, hsla(43, 47%, 85%, .5) 50%, transparent 70%)
```

#### 125. `bundles/bloxd.io/main.css` (Changed code · before: `L5495-L5496` → after: `L5716-L5717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5716-L5717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5716-L5717) · [Before (L5495-L5496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5495-L5496)

```diff
- .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob6 {
-   animation: y2kMove6 10s ease-in-out infinite alternate;
+ .HighSocietyPackBackground .HighSocietyPackBackgroundInner .HighSocietyBlob6 {
+   animation: hsMove6 22s ease-in-out infinite alternate;
```

#### 126. `bundles/bloxd.io/main.css` (Changed code · before: `L5501` → after: `L5722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5722) · [Before (L5501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5501)

```diff
- @keyframes y2kMove1 {
+ @keyframes hsMove1 {
```

#### 127. `bundles/bloxd.io/main.css` (Changed code · before: `L5507` → after: `L5728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5728) · [Before (L5507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5507)

```diff
-     transform: translate(30%, 20%) scale(1.15) rotate(120deg)
+     transform: translate(25%, 15%) scale(1.1) rotate(60deg)
```

#### 128. `bundles/bloxd.io/main.css` (Changed code · before: `L5511` → after: `L5732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5732) · [Before (L5511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5511)

```diff
-     transform: translate(-10%, 35%) scale(.95) rotate(240deg)
+     transform: translate(-10%, 30%) scale(.95) rotate(140deg)
```

#### 129. `bundles/bloxd.io/main.css` (Changed code · before: `L5515` → after: `L5736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5736) · [Before (L5515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5515)

```diff
- @keyframes y2kMove2 {
+ @keyframes hsMove2 {
```

#### 130. `bundles/bloxd.io/main.css` (Changed code · before: `L5521` → after: `L5742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5742) · [Before (L5521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5521)

```diff
-     transform: translate(-25%, -15%) scale(1.1) rotate(-90deg)
+     transform: translate(-20%, -10%) scale(1.08) rotate(-50deg)
```

#### 131. `bundles/bloxd.io/main.css` (Changed code · before: `L5525` → after: `L5746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5746) · [Before (L5525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5525)

```diff
-     transform: translate(10%, -30%) scale(1.05) rotate(-200deg)
+     transform: translate(10%, -25%) scale(1.05) rotate(-130deg)
```

#### 132. `bundles/bloxd.io/main.css` (Changed code · before: `L5529` → after: `L5750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5750) · [Before (L5529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5529)

```diff
- @keyframes y2kMove3 {
+ @keyframes hsMove3 {
```

#### 133. `bundles/bloxd.io/main.css` (Changed code · before: `L5535` → after: `L5756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5756) · [Before (L5535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5535)

```diff
-     transform: translate(-20%, -25%) scale(1.2) rotate(80deg)
+     transform: translate(-18%, -20%) scale(1.15) rotate(50deg)
```

#### 134. `bundles/bloxd.io/main.css` (Changed code · before: `L5539` → after: `L5760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5760) · [Before (L5539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5539)

```diff
-     transform: translate(15%, -10%) scale(.9) rotate(180deg)
+     transform: translate(12%, -8%) scale(.92) rotate(120deg)
```

#### 135. `bundles/bloxd.io/main.css` (Changed code · before: `L5543` → after: `L5764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5764) · [Before (L5543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5543)

```diff
- @keyframes y2kMove4 {
+ @keyframes hsMove4 {
```

#### 136. `bundles/bloxd.io/main.css` (Changed code · before: `L5549` → after: `L5770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5770) · [Before (L5549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5549)

```diff
-     transform: translate(20%, 25%) scale(1.1) rotate(-110deg)
+     transform: translate(18%, 20%) scale(1.08) rotate(-70deg)
```

#### 137. `bundles/bloxd.io/main.css` (Changed code · before: `L5553` → after: `L5774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5774) · [Before (L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5553)

```diff
-     transform: translate(-25%, 10%) scale(1.05) rotate(-220deg)
+     transform: translate(-22%, 8%) scale(1.04) rotate(-150deg)
```

#### 138. `bundles/bloxd.io/main.css` (Changed code · before: `L5557` → after: `L5778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5778) · [Before (L5557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5557)

```diff
- @keyframes y2kMove5 {
+ @keyframes hsMove5 {
```

#### 139. `bundles/bloxd.io/main.css` (Changed code · before: `L5563` → after: `L5784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5784) · [Before (L5563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5563)

```diff
-     transform: translate(30%, -20%) scale(1.15) rotate(100deg)
+     transform: translate(25%, -18%) scale(1.12) rotate(70deg)
```

#### 140. `bundles/bloxd.io/main.css` (Changed code · before: `L5567` → after: `L5788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5788) · [Before (L5567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5567)

```diff
-     transform: translate(10%, -35%) scale(.95) rotate(200deg)
+     transform: translate(8%, -28%) scale(.95) rotate(150deg)
```

#### 141. `bundles/bloxd.io/main.css` (Changed code · before: `L5571` → after: `L5792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5792) · [Before (L5571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5571)

```diff
- @keyframes y2kMove6 {
+ @keyframes hsMove6 {
```

#### 142. `bundles/bloxd.io/main.css` (Changed code · before: `L5577` → after: `L5798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5798) · [Before (L5577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5577)

```diff
-     transform: translate(-15%, 20%) scale(1.1) rotate(-70deg)
+     transform: translate(-14%, 16%) scale(1.1) rotate(-40deg)
```

#### 143. `bundles/bloxd.io/main.css` (Changed code · before: `L5581` → after: `L5802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5802) · [Before (L5581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5581)

```diff
-     transform: translate(-30%, -15%) scale(1.05) rotate(-160deg)
+     transform: translate(-26%, -12%) scale(1.05) rotate(-110deg)
```

#### 144. `bundles/bloxd.io/main.css` (Changed code · before: `L5586` → after: `L5807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5807) · [Before (L5586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5586)

```diff
-   .Y2kPackBackground .Y2kBlob {
+   .HighSocietyPackBackground .HighSocietyBlob {
```

#### 145. `bundles/bloxd.io/main.css` (Changed code · before: `L5591-L5593` → after: `L5812-L5813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5812-L5813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5812-L5813) · [Before (L5591-L5593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5591-L5593)

```diff
- .MedievalPackBackground {
-   container-type: size;
-   background: radial-gradient(ellipse at 50% 45%, #9c1820 0, #7e1217 45%, #530a0d 100%);
+ .SpringPackBackground {
+   background: #48a058;
```

#### 146. `bundles/bloxd.io/main.css` (Changed code · before: `L5599` → after: `L5819-L5820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5819-L5820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5819-L5820) · [Before (L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5599)

```diff
- .MedievalPackBackground.PackBackgroundSimple .MedievalPackBackgroundInner:before {
+ .SpringPackBackground.PackBackgroundSimple .SpringPackBackgroundInner .SpringFlowerWrap .SpringFlower,
+ .SpringPackBackground.PackBackgroundSimple .SpringPackBackgroundInner .SpringLeafWrap .SpringLeaf {
```

#### 147. `bundles/bloxd.io/main.css` (Changed code · before: `L5603-L5607` → after: `L5824-L5825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5824-L5825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5824-L5825) · [Before (L5603-L5607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5603-L5607)

```diff
- .MedievalPackBackground .MedievalPackBackgroundInner {
-   container-type: size;
-   aspect-ratio: 1;
-   left: 50%;
-   overflow: visible;
+ .SpringPackBackground .SpringPackBackgroundInner {
+   inset: 0;
```

#### 148. `bundles/bloxd.io/main.css` (Changed code · before: `L5609-L5612` → after: `L5827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5827) · [Before (L5609-L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5609-L5612)

```diff
-   position: absolute;
-   top: 50%;
-   transform: translate(-50%, -50%);
-   width: max(100cqw, 100cqh)
+   position: absolute
```

#### 149. `bundles/bloxd.io/main.css` (Changed code · before: `L5615-L5622` → after: `L5830-L5831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5830-L5831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5830-L5831) · [Before (L5615-L5622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5615-L5622)

```diff
- .MedievalPackBackground .MedievalPackBackgroundInner:before {
-   animation: medievalSheen 14s ease-in-out infinite alternate;
-   background: linear-gradient(115deg, transparent, hsla(43, 83%, 79%, 0) 38%, hsla(43, 83%, 79%, .12) 50%, hsla(43, 83%, 79%, 0) 62%, transparent);
-   content: "";
-   inset: 0;
-   pointer-events: none;
-   position: absolute;
-   z-index: 1
+ .SpringPackBackground .SpringPackBackgroundInner .SpringLeafWrap {
+   position: absolute
```

#### 150. `bundles/bloxd.io/main.css` (Changed code · before: `L5625-L5632` → after: `L5834-L5837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5834-L5837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5834-L5837) · [Before (L5625-L5632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5625-L5632)

```diff
- .MedievalPackBackground .MedievalPackBackgroundInner .MedievalAccent,
- .MedievalPackBackground .MedievalPackBackgroundInner .MedievalFleur {
-   line-height: 1;
-   opacity: .45;
-   position: absolute;
-   transform: translate(-50%, -50%);
-   -webkit-user-select: none;
-   user-select: none
+ .SpringPackBackground .SpringPackBackgroundInner .SpringLeafWrap .SpringLeaf {
+   animation: springSway 5s ease-in-out infinite alternate;
+   background-color: rgba(90, 160, 100, .3);
+   border-radius: 50% 0 50% 0
```

#### 151. `bundles/bloxd.io/main.css` (Changed code · before: `L5635-L5636` → after: `L5840-L5841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5840-L5841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5840-L5841) · [Before (L5635-L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5635-L5636)

```diff
- .MedievalPackBackground .MedievalPackBackgroundInner .MedievalFleur {
-   font-size: 10cqw
+ .SpringPackBackground .SpringPackBackgroundInner .SpringFlowerWrap {
+   position: absolute
```

#### 152. `bundles/bloxd.io/main.css` (Changed code · before: `L5639-L5641` → after: `L5844-L5847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5844-L5847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5844-L5847) · [Before (L5639-L5641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5639-L5641)

```diff
- .MedievalPackBackground .MedievalPackBackgroundInner .MedievalAccent {
-   color: #ecca7a;
-   font-size: 4cqw
+ .SpringPackBackground .SpringPackBackgroundInner .SpringFlowerWrap .SpringFlower {
+   animation: springFloat 4s ease-in-out infinite alternate;
+   display: block;
+   image-rendering: pixelated
```

#### 153. `bundles/bloxd.io/main.css` (Changed code · before: `L5644` → after: `L5850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5850) · [Before (L5644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5644)

```diff
- @keyframes medievalSheen {
+ @keyframes springFloat {
```

#### 154. `bundles/bloxd.io/main.css` (Changed code · before: `L5646` → after: `L5852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5852) · [Before (L5646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5646)

```diff
-     transform: translateX(-15%)
+     transform: translateY(0)
```

#### 155. `bundles/bloxd.io/main.css` (Changed code · before: `L5650` → after: `L5856-L5866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5856-L5866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5856-L5866) · [Before (L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5650)

```diff
-     transform: translateX(15%)
+     transform: translateY(-.6em)
+   }
+ }
+ 
+ @keyframes springSway {
+   0% {
+     transform: rotate(0deg) scale(1)
+   }
+ 
+   to {
+     transform: rotate(8deg) scale(1.05)
```

#### 156. `bundles/bloxd.io/main.css` (Changed code · before: `L5655` → after: `L5871-L5873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5871-L5873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5871-L5873) · [Before (L5655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5655)

```diff
-   .MedievalPackBackground .MedievalPackBackgroundInner:before {
+ 
+   .SpringPackBackground .SpringFlower,
+   .SpringPackBackground .SpringLeaf {
```

#### 157. `bundles/bloxd.io/main.css` (Changed code · before: `L5660-L5662` → after: `L5878-L5879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5878-L5879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5878-L5879) · [Before (L5660-L5662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5660-L5662)

```diff
- .HalloweenPackBackground {
-   container-type: size;
-   background: linear-gradient(0deg, rgba(255, 122, 60, .3), rgba(255, 122, 60, .08) 25%, transparent 50%), radial-gradient(ellipse at 78% 22%, rgba(106, 79, 176, .5) 0, transparent 55%), linear-gradient(180deg, #0a0720, #1c1547 55%, #3a2466);
+ .Y2kPackBackground {
+   background: #b8a6ce;
```

#### 158. `bundles/bloxd.io/main.css` (Changed code · before: `L5668-L5673` → after: `L5885-L5886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5885-L5886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5885-L5886) · [Before (L5668-L5673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5668-L5673)

```diff
- .HalloweenPackBackground .HalloweenPackBackgroundInner {
-   --halloweenU: min(1cqh, 0.5cqw, 0.15em);
-   --halloweenGround: max(calc(var(--halloweenU)*16), 12cqh);
-   inset: 0;
-   pointer-events: none;
-   position: absolute
+ .Y2kPackBackground.PackBackgroundSimple .Y2kPackBackgroundInner {
+   filter: blur(4em)
```

#### 159. `bundles/bloxd.io/main.css` (Changed code · before: `L5676-L5681` → after: `L5889-L5890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5889-L5890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5889-L5890) · [Before (L5676-L5681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5676-L5681)

```diff
- .HalloweenPackBackground .HalloweenPackBackgroundInner:before {
-   animation: halloweenStarfieldShimmer 7s ease-in-out infinite alternate;
-   background-image: radial-gradient(1px 1px at 4% 10%, hsla(0, 0%, 100%, .55) 50%, transparent 100%), radial-gradient(1px 1px at 12% 32%, hsla(0, 0%, 100%, .35) 50%, transparent 100%), radial-gradient(1px 1px at 18% 6%, hsla(0, 0%, 100%, .45) 50%, transparent 100%), radial-gradie … [truncated]
-   content: "";
-   inset: 0;
-   position: absolute
+ .Y2kPackBackground.PackBackgroundSimple .Y2kPackBackgroundInner .Y2kBlob {
+   animation: none
```

#### 160. `bundles/bloxd.io/main.css` (Changed code · before: `L5684-L5687` → after: `L5893-L5899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5893-L5899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5893-L5899) · [Before (L5684-L5687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5684-L5687)

```diff
- .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenStar {
-   animation: halloweenTwinkle 3.2s ease-in-out infinite alternate;
-   background: #fff3c4;
-   clip-path: polygon(50% 0, 60% 35%, 100% 50%, 60% 65%, 50% 100%, 40% 65%, 0 50%, 40% 35%);
+ .Y2kPackBackground.PackBackgroundSimple .Y2kPackBackgroundInner .Y2kBlob:before {
+   filter: none
+ }
+ 
+ .Y2kPackBackground .Y2kPackBackgroundInner {
+   inset: -6em;
+   pointer-events: none;
```

#### 161. `bundles/bloxd.io/main.css` (Changed code · before: `L5691-L5699` → after: `L5903-L5904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5903-L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5903-L5904) · [Before (L5691-L5699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5691-L5699)

```diff
- .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenMoon {
-   aspect-ratio: 1;
-   background: radial-gradient(circle at 66% 28%, rgba(238, 199, 80, .5) 0 6%, transparent 7%), radial-gradient(circle at 34% 56%, rgba(238, 199, 80, .4) 0 10%, transparent 11%), radial-gradient(circle at 60% 70%, rgba(238, 199, 80, .35) 0 5%, transparent 6%), radial-gradient(circ … [truncated]
-   border-radius: 50%;
-   box-shadow: 0 0 calc(var(--halloweenU)*8) calc(var(--halloweenU)*2) hsla(45, 82%, 80%, .45), 0 0 calc(var(--halloweenU)*30) calc(var(--halloweenU)*10) rgba(106, 79, 176, .35);
-   position: absolute;
-   right: 11cqw;
-   top: 12cqh;
-   width: calc(var(--halloweenU)*58)
+ .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob {
+   position: absolute
```

#### 162. `bundles/bloxd.io/main.css` (Changed code · before: `L5702-L5704` → after: `L5907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5907) · [Before (L5702-L5704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5702-L5704)

```diff
- .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenMoon:before {
-   animation: halloweenMoonGlow 5s ease-in-out infinite alternate;
-   background: radial-gradient(circle, rgba(255, 251, 232, .28) 0, hsla(45, 82%, 80%, .1) 40%, transparent 70%);
+ .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob:before {
```

#### 163. `bundles/bloxd.io/main.css` (Changed code · before: `L5707` → after: `L5910-L5911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5910-L5911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5910-L5911) · [Before (L5707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5707)

```diff
-   inset: -50%;
+   filter: blur(4em);
+   inset: 0;
```

#### 164. `bundles/bloxd.io/main.css` (Changed code · before: `L5711-L5716` → after: `L5915-L5917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5915-L5917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5915-L5917) · [Before (L5711-L5716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5711-L5716)

```diff
- .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenCloud {
-   animation: halloweenCloudDrift 22s ease-in-out infinite alternate;
-   background: radial-gradient(ellipse at center, rgba(139, 123, 192, .55) 0, rgba(139, 123, 192, .2) 50%, transparent 72%);
-   border-radius: 50%;
-   height: calc(var(--halloweenU)*7);
-   position: absolute
+ .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob1 {
+   height: 80%;
+   width: 70%
```

#### 165. `bundles/bloxd.io/main.css` (Changed code · before: `L5719-L5722` → after: `L5920-L5921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5920-L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5920-L5921) · [Before (L5719-L5722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5719-L5722)

```diff
- .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenCloud1 {
-   right: calc(11cqw - var(--halloweenU)*24);
-   top: calc(12cqh + var(--halloweenU)*36);
-   width: calc(var(--halloweenU)*80)
+ .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob1:before {
+   background: radial-gradient(circle, #f472b6 0, rgba(244, 114, 182, .6) 50%, transparent 70%)
```

#### 166. `bundles/bloxd.io/main.css` (Changed code · before: `L5725-L5731` → after: `L5924-L5927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5924-L5927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5924-L5927) · [Before (L5725-L5731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5725-L5731)

```diff
- .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenCloud2 {
-   animation-direction: alternate-reverse;
-   animation-duration: 28s;
-   opacity: .7;
-   right: calc(11cqw + var(--halloweenU)*26);
-   top: calc(12cqh + var(--halloweenU)*12);
-   width: calc(var(--halloweenU)*56)
+ .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob1 {
+   animation: y2kMove1 14s ease-in-out infinite alternate;
+   left: -15%;
+   top: -25%
```

#### 167. `bundles/bloxd.io/main.css` (Changed code · before: `L5734-L5739` → after: `L5930-L5932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5930-L5932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5930-L5932) · [Before (L5734-L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5734-L5739)

```diff
- .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenHills {
-   background-size: 100% 100%;
-   bottom: 0;
-   left: 0;
-   position: absolute;
-   right: 0
+ .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob2 {
+   height: 75%;
+   width: 65%
```

#### 168. `bundles/bloxd.io/main.css` (Changed code · before: `L5742-L5744` → after: `L5935-L5936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5935-L5936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5935-L5936) · [Before (L5742-L5744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5742-L5744)

```diff
- .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenHillsFar {
-   background-image: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 400 40%27 preserveAspectRatio=%27none%27><path fill=%27%231a1240%27 d=%27M0 20C40 9 80 11 120 19C160 27 200 7 250 11C300 15 340 24 400 13V40H0Z%27/></svg>");
-   height: calc(var(--halloweenGround)*2)
+ .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob2:before {
+   background: radial-gradient(circle, #6b3a91 0, rgba(107, 58, 145, .7) 40%, transparent 70%)
```

#### 169. `bundles/bloxd.io/main.css` (Changed code · before: `L5747-L5749` → after: `L5939-L5942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5939-L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5939-L5942) · [Before (L5747-L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5747-L5749)

```diff
- .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenHillsNear {
-   background-image: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 400 40%27 preserveAspectRatio=%27none%27><path fill=%27%2306041a%27 d=%27M0 18C50 12 90 16 140 24C190 32 230 16 290 17C340 18 370 24 400 20V40H0Z%27/></svg>");
-   height: var(--halloweenGround)
+ .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob2 {
+   animation: y2kMove2 18s ease-in-out infinite alternate;
+   right: -20%;
+   top: 20%
```

#### 170. `bundles/bloxd.io/main.css` (Changed code · before: `L5752-L5758` → after: `L5945-L5947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5945-L5947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5945-L5947) · [Before (L5752-L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5752-L5758)

```diff
- .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenTree {
-   aspect-ratio: 60/80;
-   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 60 80%27><g fill=%27none%27 stroke=%27%2306041a%27 stroke-linecap=%27round%27><path stroke-width=%277%27 d=%27M30 80C30 60 27 48 30 34%27/><path stroke-width=%273.5%27 d=%27M30 4 … [truncated]
-   bottom: calc(var(--halloweenGround)*.45);
-   left: calc(var(--halloweenU)*-4);
-   position: absolute;
-   width: calc(var(--halloweenU)*36)
+ .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob3 {
+   height: 65%;
+   width: 75%
```

#### 171. `bundles/bloxd.io/main.css` (Changed code · before: `L5761-L5767` → after: `L5950-L5951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5950-L5951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5950-L5951) · [Before (L5761-L5767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5761-L5767)

```diff
- .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenManor {
-   aspect-ratio: 100/80;
-   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 80%27><g fill=%27%2306041a%27><rect x=%2721.4%27 y=%27-6%27 width=%271.2%27 height=%278%27/><polygon points=%2712,26 22,0 32,26%27/><rect x=%2714%27 y=%2724%27 width=%2716%27 … [truncated]
-   bottom: calc(var(--halloweenGround)*.5);
-   position: absolute;
-   right: 3cqw;
-   width: calc(var(--halloweenU)*44)
+ .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob3:before {
+   background: radial-gradient(circle, #ddd09e 0, hsla(48, 48%, 74%, .6) 45%, transparent 70%)
```

#### 172. `bundles/bloxd.io/main.css` (Changed code · before: `L5770-L5775` → after: `L5954-L5957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5954-L5957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5954-L5957) · [Before (L5770-L5775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5770-L5775)

```diff
- .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenManor:before {
-   animation: halloweenCandleFlicker 4s linear infinite;
-   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 80%27><g fill=%27%23ffb347%27><rect x=%2719%27 y=%2732%27 width=%276%27 height=%279%27 rx=%273%27/><rect x=%2736%27 y=%2754%27 width=%277%27 height=%279%27/><circle cx=%2753% … [truncated]
-   content: "";
-   inset: 0;
-   position: absolute
+ .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob3 {
+   animation: y2kMove3 12s ease-in-out infinite alternate;
+   bottom: -20%;
+   right: 5%
```

#### 173. `bundles/bloxd.io/main.css` (Changed code · before: `L5778-L5782` → after: `L5960-L5962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5960-L5962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5960-L5962) · [Before (L5778-L5782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5778-L5782)

```diff
- .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBat {
-   --batSize: 1;
-   aspect-ratio: 2;
-   position: absolute;
-   width: calc(var(--batSize)*max(var(--halloweenU)*18, 1.4em))
+ .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob4 {
+   height: 70%;
+   width: 60%
```

#### 174. `bundles/bloxd.io/main.css` (Changed code · before: `L5785-L5789` → after: `L5965-L5966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5965-L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5965-L5966) · [Before (L5785-L5789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5785-L5789)

```diff
- .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBat .HalloweenBatBob {
-   animation: halloweenBatBob .9s ease-in-out infinite alternate;
-   animation-delay: calc(var(--batSize)*-2.3s);
-   inset: 0;
-   position: absolute
+ .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob4:before {
+   background: radial-gradient(circle, #4a1d6b 0, rgba(74, 29, 107, .7) 40%, transparent 70%)
```

#### 175. `bundles/bloxd.io/main.css` (Changed code · before: `L5792-L5801` → after: `L5969-L5972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5969-L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5969-L5972) · [Before (L5792-L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5792-L5801)

```diff
- .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBat .HalloweenBatWing {
-   animation-direction: alternate;
-   animation-duration: .22s;
-   animation-iteration-count: infinite;
-   animation-timing-function: ease-in-out;
-   aspect-ratio: 50/23;
-   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 -1 50 23%27><path fill=%27%2306041a%27 d=%27M50 4C40 0 24-1 10 3C5 5 2 8 0 13C5 12 9 14 10 19C14 15 19 15 22 20C25 15 30 15 33 21C36 16 41 16 44 21C46 16 48 14 50 15Z%27/></svg>")  … [truncated]
-   position: absolute;
-   top: 18%;
-   width: 46%
+ .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob4 {
+   animation: y2kMove4 16s ease-in-out infinite alternate;
+   left: 25%;
+   top: 5%
```

#### 176. `bundles/bloxd.io/main.css` (Changed code · before: `L5804-L5816` → after: `L5975-L5977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5975-L5977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5975-L5977) · [Before (L5804-L5816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5804-L5816)

```diff
- .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBat .HalloweenBatWingLeft {
-   animation-name: halloweenBatFlapLeft;
-   left: 4%;
-   transform: rotate(10deg);
-   transform-origin: 100% 20%
- }
- 
- .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBat .HalloweenBatWingRight {
-   animation-name: halloweenBatFlapRight;
-   background-image: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 -1 50 23%27><path transform=%27matrix%28-1 0 0 1 50 0%29%27 fill=%27%2306041a%27 d=%27M50 4C40 0 24-1 10 3C5 5 2 8 0 13C5 12 9 14 10 19C14 15 19 15 22 20C25 15 30 15 33 21C36 … [truncated]
-   right: 4%;
-   transform: rotate(-10deg);
-   transform-origin: 0 20%
+ .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob5 {
+   height: 65%;
+   width: 55%
```

#### 177. `bundles/bloxd.io/main.css` (Changed code · before: `L5819-L5825` → after: `L5980-L5981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5980-L5981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5980-L5981) · [Before (L5819-L5825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5819-L5825)

```diff
- .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBat .HalloweenBatBody {
-   aspect-ratio: 16/24;
-   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 24%27><path fill=%27%2306041a%27 d=%27M3 0L6 6H10L13 0L14 9C16 14 13 20 8 24C3 20 0 14 2 9Z%27/></svg>") 50%/100% 100% no-repeat;
-   left: 43.5%;
-   position: absolute;
-   top: 10%;
-   width: 13%
+ .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob5:before {
+   background: radial-gradient(circle, #e86baf 0, rgba(232, 107, 175, .5) 45%, transparent 70%)
```

#### 178. `bundles/bloxd.io/main.css` (Changed code · before: `L5828-L5831` → after: `L5984-L5987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5984-L5987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5984-L5987) · [Before (L5828-L5831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5828-L5831)

```diff
- .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBatMoon {
-   --batSize: 0.8;
-   right: calc(11cqw + var(--halloweenU)*14);
-   top: calc(12cqh + var(--halloweenU)*20)
+ .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob5 {
+   animation: y2kMove5 20s ease-in-out infinite alternate;
+   bottom: 0;
+   left: -15%
```

#### 179. `bundles/bloxd.io/main.css` (Changed code · before: `L5834-L5836` → after: `L5990-L5992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5990-L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5990-L5992) · [Before (L5834-L5836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5834-L5836)

```diff
- .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBatMoon .HalloweenBatBob {
-   animation-duration: 2.4s;
-   animation-name: halloweenBatHover
+ .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob6 {
+   height: 55%;
+   width: 50%
```

#### 180. `bundles/bloxd.io/main.css` (Changed code · before: `L5839-L5840` → after: `L5995-L5996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5995-L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5995-L5996) · [Before (L5839-L5840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5839-L5840)

```diff
- .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBatFlying {
-   animation: halloweenBatFly 15s linear infinite
+ .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob6:before {
+   background: radial-gradient(circle, #b8a6ce 0, rgba(184, 166, 206, .6) 50%, transparent 70%)
```

#### 181. `bundles/bloxd.io/main.css` (Changed code · before: `L5843-L5851` → after: `L5999-L6002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R5999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L5999-L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L5999-L6002) · [Before (L5843-L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5843-L5851)

```diff
- .HalloweenPackBackground.PackBackgroundSimple .HalloweenPackBackgroundInner .HalloweenBat,
- .HalloweenPackBackground.PackBackgroundSimple .HalloweenPackBackgroundInner .HalloweenBat .HalloweenBatBob,
- .HalloweenPackBackground.PackBackgroundSimple .HalloweenPackBackgroundInner .HalloweenBat .HalloweenBatWing,
- .HalloweenPackBackground.PackBackgroundSimple .HalloweenPackBackgroundInner .HalloweenCloud,
- .HalloweenPackBackground.PackBackgroundSimple .HalloweenPackBackgroundInner .HalloweenManor:before,
- .HalloweenPackBackground.PackBackgroundSimple .HalloweenPackBackgroundInner .HalloweenMoon:before,
- .HalloweenPackBackground.PackBackgroundSimple .HalloweenPackBackgroundInner .HalloweenStar,
- .HalloweenPackBackground.PackBackgroundSimple .HalloweenPackBackgroundInner:before {
-   animation: none
+ .Y2kPackBackground .Y2kPackBackgroundInner .Y2kBlob6 {
+   animation: y2kMove6 10s ease-in-out infinite alternate;
+   left: 40%;
+   top: 40%
```

#### 182. `bundles/bloxd.io/main.css` (Changed code · before: `L5854` → after: `L6005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6005) · [Before (L5854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5854)

```diff
- @keyframes halloweenStarfieldShimmer {
+ @keyframes y2kMove1 {
```

#### 183. `bundles/bloxd.io/main.css` (Changed code · before: `L5856-L5860` → after: `L6007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6007) · [Before (L5856-L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5856-L5860)

```diff
-     opacity: .55
-   }
- 
-   to {
-     opacity: 1
+     transform: translate(0) scale(1) rotate(0deg)
```

#### 184. `bundles/bloxd.io/main.css` (Changed code · before: `L5864-L5867` → after: `L6010-L6011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6010-L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6010-L6011) · [Before (L5864-L5867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5864-L5867)

```diff
- @keyframes halloweenTwinkle {
-   0% {
-     opacity: .25;
-     transform: scale(.75)
+   50% {
+     transform: translate(30%, 20%) scale(1.15) rotate(120deg)
```

#### 185. `bundles/bloxd.io/main.css` (Changed code · before: `L5871-L5872` → after: `L6015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6015) · [Before (L5871-L5872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5871-L5872)

```diff
-     opacity: 1;
-     transform: scale(1.1)
+     transform: translate(-10%, 35%) scale(.95) rotate(240deg)
```

#### 186. `bundles/bloxd.io/main.css` (Changed code · before: `L5876` → after: `L6019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6019) · [Before (L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5876)

```diff
- @keyframes halloweenMoonGlow {
+ @keyframes y2kMove2 {
```

#### 187. `bundles/bloxd.io/main.css` (Changed code · before: `L5878-L5884` → after: `L6021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6021) · [Before (L5878-L5884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5878-L5884)

```diff
-     opacity: .55;
-     transform: scale(.92)
-   }
- 
-   to {
-     opacity: 1;
-     transform: scale(1.05)
+     transform: translate(0) scale(1) rotate(0deg)
```

#### 188. `bundles/bloxd.io/main.css` (Changed code · before: `L5888-L5890` → after: `L6024-L6025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6024-L6025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6024-L6025) · [Before (L5888-L5890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5888-L5890)

```diff
- @keyframes halloweenCloudDrift {
-   0% {
-     transform: translateX(calc(var(--halloweenU)*-10))
+   50% {
+     transform: translate(-25%, -15%) scale(1.1) rotate(-90deg)
```

#### 189. `bundles/bloxd.io/main.css` (Changed code · before: `L5894` → after: `L6029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6029) · [Before (L5894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5894)

```diff
-     transform: translateX(calc(var(--halloweenU)*10))
+     transform: translate(10%, -30%) scale(1.05) rotate(-200deg)
```

#### 190. `bundles/bloxd.io/main.css` (Changed code · before: `L5898-L5918` → after: `L6033-L6035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6033-L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6033-L6035) · [Before (L5898-L5918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5898-L5918)

```diff
- @keyframes halloweenCandleFlicker {
- 
-   0%,
-   to {
-     opacity: 1
-   }
- 
-   18% {
-     opacity: .8
-   }
- 
-   22% {
-     opacity: .55
-   }
- 
-   26% {
- ... (5 more removed lines; see GitHub link above)
+ @keyframes y2kMove3 {
+   0% {
+     transform: translate(0) scale(1) rotate(0deg)
```

#### 191. `bundles/bloxd.io/main.css` (Changed code · before: `L5921-L5922` → after: `L6038-L6039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6038-L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6038-L6039) · [Before (L5921-L5922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5921-L5922)

```diff
-   64% {
-     opacity: .7
+   50% {
+     transform: translate(-20%, -25%) scale(1.2) rotate(80deg)
```

#### 192. `bundles/bloxd.io/main.css` (Changed code · before: `L5925-L5926` → after: `L6042-L6043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6042-L6043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6042-L6043) · [Before (L5925-L5926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5925-L5926)

```diff
-   68% {
-     opacity: 1
+   to {
+     transform: translate(15%, -10%) scale(.9) rotate(180deg)
```

#### 193. `bundles/bloxd.io/main.css` (Changed code · before: `L5930` → after: `L6047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6047) · [Before (L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5930)

```diff
- @keyframes halloweenBatFly {
+ @keyframes y2kMove4 {
```

#### 194. `bundles/bloxd.io/main.css` (Changed code · before: `L5932-L5936` → after: `L6049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6049) · [Before (L5932-L5936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5932-L5936)

```diff
-     transform: translate(calc(-15cqw - var(--batX)))
-   }
- 
-   33% {
-     transform: translate(calc(28cqw - var(--batX)), -10cqh)
+     transform: translate(0) scale(1) rotate(0deg)
```

#### 195. `bundles/bloxd.io/main.css` (Changed code · before: `L5939-L5940` → after: `L6052-L6053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6052-L6053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6052-L6053) · [Before (L5939-L5940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5939-L5940)

```diff
-   66% {
-     transform: translate(calc(71cqw - var(--batX)), 6cqh)
+   50% {
+     transform: translate(20%, 25%) scale(1.1) rotate(-110deg)
```

#### 196. `bundles/bloxd.io/main.css` (Changed code · before: `L5944` → after: `L6057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6057) · [Before (L5944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5944)

```diff
-     transform: translate(calc(115cqw - var(--batX)))
+     transform: translate(-25%, 10%) scale(1.05) rotate(-220deg)
```

#### 197. `bundles/bloxd.io/main.css` (Changed code · before: `L5948` → after: `L6061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6061) · [Before (L5948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5948)

```diff
- @keyframes halloweenBatBob {
+ @keyframes y2kMove5 {
```

#### 198. `bundles/bloxd.io/main.css` (Changed code · before: `L5950-L5954` → after: `L6063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6063) · [Before (L5950-L5954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5950-L5954)

```diff
-     transform: translateY(-15%)
-   }
- 
-   to {
-     transform: translateY(15%)
+     transform: translate(0) scale(1) rotate(0deg)
```

#### 199. `bundles/bloxd.io/main.css` (Changed code · before: `L5958-L5960` → after: `L6066-L6067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6066-L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6066-L6067) · [Before (L5958-L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5958-L5960)

```diff
- @keyframes halloweenBatHover {
-   0% {
-     transform: translate(-10%, -20%) rotate(-6deg)
+   50% {
+     transform: translate(30%, -20%) scale(1.15) rotate(100deg)
```

#### 200. `bundles/bloxd.io/main.css` (Changed code · before: `L5964` → after: `L6071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6071) · [Before (L5964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5964)

```diff
-     transform: translate(10%, 20%) rotate(6deg)
+     transform: translate(10%, -35%) scale(.95) rotate(200deg)
```

#### 201. `bundles/bloxd.io/main.css` (Changed code · before: `L5968` → after: `L6075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6075) · [Before (L5968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5968)

```diff
- @keyframes halloweenBatFlapLeft {
+ @keyframes y2kMove6 {
```

#### 202. `bundles/bloxd.io/main.css` (Changed code · before: `L5970-L5974` → after: `L6077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6077) · [Before (L5970-L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5970-L5974)

```diff
-     transform: rotate(30deg) scaleY(.8)
-   }
- 
-   to {
-     transform: rotate(-20deg) scaleY(1)
+     transform: translate(0) scale(1) rotate(0deg)
```

#### 203. `bundles/bloxd.io/main.css` (Changed code · before: `L5978-L5980` → after: `L6080-L6081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6080-L6081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6080-L6081) · [Before (L5978-L5980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5978-L5980)

```diff
- @keyframes halloweenBatFlapRight {
-   0% {
-     transform: rotate(-30deg) scaleY(.8)
+   50% {
+     transform: translate(-15%, 20%) scale(1.1) rotate(-70deg)
```

#### 204. `bundles/bloxd.io/main.css` (Changed code · before: `L5984` → after: `L6085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6085) · [Before (L5984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5984)

```diff
-     transform: rotate(20deg) scaleY(1)
+     transform: translate(-30%, -15%) scale(1.05) rotate(-160deg)
```

#### 205. `bundles/bloxd.io/main.css` (Changed code · before: `L5989-L5997` → after: `L6090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6090) · [Before (L5989-L5997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L5989-L5997)

```diff
- 
-   .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBat,
-   .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBat .HalloweenBatBob,
-   .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBat .HalloweenBatWing,
-   .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenCloud,
-   .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenManor:before,
-   .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenMoon:before,
-   .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenStar,
-   .HalloweenPackBackground .HalloweenPackBackgroundInner:before {
+   .Y2kPackBackground .Y2kBlob {
```

#### 206. `bundles/bloxd.io/main.css` (Changed code · before: `L6002` → after: `L6095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6095) · [Before (L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6002)

```diff
- .CandyCanePackBackground {
+ .MedievalPackBackground {
```

#### 207. `bundles/bloxd.io/main.css` (Changed code · before: `L6004` → after: `L6097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6097) · [Before (L6004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6004)

```diff
-   background: repeating-linear-gradient(135deg, rgba(224, 40, 60, .07) 0 1.2em, transparent 1.2em 2.4em), radial-gradient(ellipse at 50% 40%, #fff1f3 0, #f9cdd6 100%);
+   background: radial-gradient(ellipse at 50% 45%, #9c1820 0, #7e1217 45%, #530a0d 100%);
```

#### 208. `bundles/bloxd.io/main.css` (Changed code · before: `L6010` → after: `L6103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6103) · [Before (L6010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6010)

```diff
- .CandyCanePackBackground.PackBackgroundSimple .CandyCanePackBackgroundInner .CandyCaneWrap .CandyCane {
+ .MedievalPackBackground.PackBackgroundSimple .MedievalPackBackgroundInner:before {
```

#### 209. `bundles/bloxd.io/main.css` (Changed code · before: `L6014-L6015` → after: `L6107-L6111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6107-L6111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6107-L6111) · [Before (L6014-L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6014-L6015)

```diff
- .CandyCanePackBackground .CandyCanePackBackgroundInner {
-   inset: 0;
+ .MedievalPackBackground .MedievalPackBackgroundInner {
+   container-type: size;
+   aspect-ratio: 1;
+   left: 50%;
+   overflow: visible;
```

#### 210. `bundles/bloxd.io/main.css` (Changed code · before: `L6017` → after: `L6113-L6116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6113-L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6113-L6116) · [Before (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6017)

```diff
-   position: absolute
+   position: absolute;
+   top: 50%;
+   transform: translate(-50%, -50%);
+   width: max(100cqw, 100cqh)
```

#### 211. `bundles/bloxd.io/main.css` (Changed code · before: `L6020-L6021` → after: `L6119-L6121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6119-L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6119-L6121) · [Before (L6020-L6021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6020-L6021)

```diff
- .CandyCanePackBackground .CandyCanePackBackgroundInner:before {
-   background-image: radial-gradient(circle at 8% 18%, hsla(0, 0%, 100%, .7) 0 1.5px, transparent 2px), radial-gradient(circle at 26% 64%, hsla(0, 0%, 100%, .7) 0 1.5px, transparent 2px), radial-gradient(circle at 41% 12%, hsla(0, 0%, 100%, .7) 0 1px, transparent 1.5px), radial-gr … [truncated]
+ .MedievalPackBackground .MedievalPackBackgroundInner:before {
+   animation: medievalSheen 14s ease-in-out infinite alternate;
+   background: linear-gradient(115deg, transparent, hsla(43, 83%, 79%, 0) 38%, hsla(43, 83%, 79%, .12) 50%, hsla(43, 83%, 79%, 0) 62%, transparent);
```

#### 212. `bundles/bloxd.io/main.css` (Changed code · before: `L6024` → after: `L6124-L6126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6124-L6126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6124-L6126) · [Before (L6024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6024)

```diff
-   position: absolute
+   pointer-events: none;
+   position: absolute;
+   z-index: 1
```

#### 213. `bundles/bloxd.io/main.css` (Changed code · before: `L6027-L6032` → after: `L6129-L6136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6129-L6136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6129-L6136) · [Before (L6027-L6032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6027-L6032)

```diff
- .CandyCanePackBackground .CandyCanePackBackgroundInner .CandyCanePeppermint {
-   background: radial-gradient(circle, snow 0 18%, transparent 19%), repeating-conic-gradient(#e0283c 0 30deg, snow 30deg 60deg);
-   border-radius: 50%;
-   box-shadow: 0 0 0 .08em #a3152a, inset -.12em -.12em 0 rgba(0, 0, 0, .12);
-   opacity: .9;
-   position: absolute
+ .MedievalPackBackground .MedievalPackBackgroundInner .MedievalAccent,
+ .MedievalPackBackground .MedievalPackBackgroundInner .MedievalFleur {
+   line-height: 1;
+   opacity: .45;
+   position: absolute;
+   transform: translate(-50%, -50%);
+   -webkit-user-select: none;
+   user-select: none
```

#### 214. `bundles/bloxd.io/main.css` (Changed code · before: `L6035-L6036` → after: `L6139-L6140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6139-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6139-L6140) · [Before (L6035-L6036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6035-L6036)

```diff
- .CandyCanePackBackground .CandyCanePackBackgroundInner .CandyCaneWrap {
-   position: absolute
+ .MedievalPackBackground .MedievalPackBackgroundInner .MedievalFleur {
+   font-size: 10cqw
```

#### 215. `bundles/bloxd.io/main.css` (Changed code · before: `L6039-L6044` → after: `L6143-L6145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6143-L6145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6143-L6145) · [Before (L6039-L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6039-L6044)

```diff
- .CandyCanePackBackground .CandyCanePackBackgroundInner .CandyCaneWrap .CandyCane {
-   animation: candyCaneSway 3.5s ease-in-out infinite alternate;
-   aspect-ratio: 30/80;
-   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 80%27><defs><pattern id=%27s%27 patternUnits=%27userSpaceOnUse%27 width=%277%27 height=%277%27 patternTransform=%27rotate%2840%29%27><rect width=%273.2%27 height=%277%27 fill= … [truncated]
-   filter: drop-shadow(.06em .1em 0 rgba(120, 20, 35, .25));
-   transform-origin: 50% 100%
+ .MedievalPackBackground .MedievalPackBackgroundInner .MedievalAccent {
+   color: #ecca7a;
+   font-size: 4cqw
```

#### 216. `bundles/bloxd.io/main.css` (Changed code · before: `L6047` → after: `L6148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6148) · [Before (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6047)

```diff
- @keyframes candyCaneSway {
+ @keyframes medievalSheen {
```

#### 217. `bundles/bloxd.io/main.css` (Changed code · before: `L6049` → after: `L6150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6150) · [Before (L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6049)

```diff
-     transform: rotate(-5deg)
+     transform: translateX(-15%)
```

#### 218. `bundles/bloxd.io/main.css` (Changed code · before: `L6053` → after: `L6154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6154) · [Before (L6053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6053)

```diff
-     transform: rotate(5deg)
+     transform: translateX(15%)
```

#### 219. `bundles/bloxd.io/main.css` (Changed code · before: `L6058` → after: `L6159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6159) · [Before (L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6058)

```diff
-   .CandyCanePackBackground .CandyCanePackBackgroundInner .CandyCaneWrap .CandyCane {
+   .MedievalPackBackground .MedievalPackBackgroundInner:before {
```

#### 220. `bundles/bloxd.io/main.css` (Changed code · before: `L6063` → after: `L6164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6164) · [Before (L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6063)

```diff
- .JingleBellsPackBackground {
+ .HalloweenPackBackground {
```

#### 221. `bundles/bloxd.io/main.css` (Changed code · before: `L6065` → after: `L6166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6166) · [Before (L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6065)

```diff
-   background: radial-gradient(ellipse at 45% 35%, #1f6b3e 0, #0d3a22 75%);
+   background: linear-gradient(0deg, rgba(255, 122, 60, .3), rgba(255, 122, 60, .08) 25%, transparent 50%), radial-gradient(ellipse at 78% 22%, rgba(106, 79, 176, .5) 0, transparent 55%), linear-gradient(180deg, #0a0720, #1c1547 55%, #3a2466);
```

#### 222. `bundles/bloxd.io/main.css` (Changed code · before: `L6071-L6075` → after: `L6172-L6174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6172-L6174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6172-L6174) · [Before (L6071-L6075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6071-L6075)

```diff
- .JingleBellsPackBackground.PackBackgroundSimple .JingleBellsPackBackgroundInner .JingleBell {
-   animation: none
- }
- 
- .JingleBellsPackBackground .JingleBellsPackBackgroundInner {
+ .HalloweenPackBackground .HalloweenPackBackgroundInner {
+   --halloweenU: min(1cqh, 0.5cqw, 0.15em);
+   --halloweenGround: max(calc(var(--halloweenU)*16), 12cqh);
```

#### 223. `bundles/bloxd.io/main.css` (Changed code · before: `L6081-L6082` → after: `L6180-L6182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6180-L6182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6180-L6182) · [Before (L6081-L6082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6081-L6082)

```diff
- .JingleBellsPackBackground .JingleBellsPackBackgroundInner:before {
-   background-image: radial-gradient(circle at 18% 72%, rgba(242, 193, 78, .5) 0 1.5px, transparent 2px), radial-gradient(circle at 30% 30%, rgba(242, 193, 78, .35) 0 1px, transparent 1.5px), radial-gradient(circle at 46% 84%, rgba(242, 193, 78, .4) 0 1.5px, transparent 2px), radi … [truncated]
+ .HalloweenPackBackground .HalloweenPackBackgroundInner:before {
+   animation: halloweenStarfieldShimmer 7s ease-in-out infinite alternate;
+   background-image: radial-gradient(1px 1px at 4% 10%, hsla(0, 0%, 100%, .55) 50%, transparent 100%), radial-gradient(1px 1px at 12% 32%, hsla(0, 0%, 100%, .35) 50%, transparent 100%), radial-gradient(1px 1px at 18% 6%, hsla(0, 0%, 100%, .45) 50%, transparent 100%), radial-gradie … [truncated]
```

#### 224. `bundles/bloxd.io/main.css` (Changed code · before: `L6088-L6093` → after: `L6188-L6199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6188-L6199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6188-L6199) · [Before (L6088-L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6088-L6093)

```diff
- .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarlands {
-   --jingleSwag: max(7.5em, min(15cqw, 30cqh));
-   display: flex;
-   flex-direction: column;
-   gap: calc(var(--jingleSwag)*.08);
-   left: 0;
+ .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenStar {
+   animation: halloweenTwinkle 3.2s ease-in-out infinite alternate;
+   background: #fff3c4;
+   clip-path: polygon(50% 0, 60% 35%, 100% 50%, 60% 65%, 50% 100%, 40% 65%, 0 50%, 40% 35%);
+   position: absolute
+ }
+ 
+ .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenMoon {
+   aspect-ratio: 1;
+   background: radial-gradient(circle at 66% 28%, rgba(238, 199, 80, .5) 0 6%, transparent 7%), radial-gradient(circle at 34% 56%, rgba(238, 199, 80, .4) 0 10%, transparent 11%), radial-gradient(circle at 60% 70%, rgba(238, 199, 80, .35) 0 5%, transparent 6%), radial-gradient(circ … [truncated]
+   border-radius: 50%;
+   box-shadow: 0 0 calc(var(--halloweenU)*8) calc(var(--halloweenU)*2) hsla(45, 82%, 80%, .45), 0 0 calc(var(--halloweenU)*30) calc(var(--halloweenU)*10) rgba(106, 79, 176, .35);
```

#### 225. `bundles/bloxd.io/main.css` (Changed code · before: `L6095-L6096` → after: `L6201-L6203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6201-L6203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6201-L6203) · [Before (L6095-L6096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6095-L6096)

```diff
-   top: 50%;
-   transform: translateY(-50%)
+   right: 11cqw;
+   top: 12cqh;
+   width: calc(var(--halloweenU)*58)
```

#### 226. `bundles/bloxd.io/main.css` (Changed code · before: `L6099-L6103` → after: `L6206-L6212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6206-L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6206-L6212) · [Before (L6099-L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6099-L6103)

```diff
- .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarlandsIcon {
-   --jingleSwag: 80cqw;
-   left: 10%;
-   top: 22%;
-   transform: none
+ .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenMoon:before {
+   animation: halloweenMoonGlow 5s ease-in-out infinite alternate;
+   background: radial-gradient(circle, rgba(255, 251, 232, .28) 0, hsla(45, 82%, 80%, .1) 40%, transparent 70%);
+   border-radius: 50%;
+   content: "";
+   inset: -50%;
+   position: absolute
```

#### 227. `bundles/bloxd.io/main.css` (Changed code · before: `L6106-L6107` → after: `L6215-L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6215-L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6215-L6220) · [Before (L6106-L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6106-L6107)

```diff
- .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarlandsIcon .JingleGarland .JingleSwag .JingleBow.JingleBowEnd {
-   left: 100%
+ .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenCloud {
+   animation: halloweenCloudDrift 22s ease-in-out infinite alternate;
+   background: radial-gradient(ellipse at center, rgba(139, 123, 192, .55) 0, rgba(139, 123, 192, .2) 50%, transparent 72%);
+   border-radius: 50%;
+   height: calc(var(--halloweenU)*7);
+   position: absolute
```

#### 228. `bundles/bloxd.io/main.css` (Changed code · before: `L6110-L6111` → after: `L6223-L6226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6223-L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6223-L6226) · [Before (L6110-L6111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6110-L6111)

```diff
- .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarlandsIcon .JingleGarland .JingleSwag .JingleSwagHang.JingleBellPair {
-   width: 60%
+ .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenCloud1 {
+   right: calc(11cqw - var(--halloweenU)*24);
+   top: calc(12cqh + var(--halloweenU)*36);
+   width: calc(var(--halloweenU)*80)
```

#### 229. `bundles/bloxd.io/main.css` (Changed code · before: `L6114-L6116` → after: `L6229-L6235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6229-L6235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6229-L6235) · [Before (L6114-L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6114-L6116)

```diff
- .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland {
-   display: flex;
-   padding-bottom: calc(var(--jingleSwag)*.1)
+ .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenCloud2 {
+   animation-direction: alternate-reverse;
+   animation-duration: 28s;
+   opacity: .7;
+   right: calc(11cqw + var(--halloweenU)*26);
+   top: calc(12cqh + var(--halloweenU)*12);
+   width: calc(var(--halloweenU)*56)
```

#### 230. `bundles/bloxd.io/main.css` (Changed code · before: `L6119-L6120` → after: `L6238-L6243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6238-L6243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6238-L6243) · [Before (L6119-L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6119-L6120)

```diff
- .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland.JingleGarlandShifted {
-   margin-left: calc(var(--jingleSwag)/-2)
+ .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenHills {
+   background-size: 100% 100%;
+   bottom: 0;
+   left: 0;
+   position: absolute;
+   right: 0
```

#### 231. `bundles/bloxd.io/main.css` (Changed code · before: `L6123-L6124` → after: `L6246-L6248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6246-L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6246-L6248) · [Before (L6123-L6124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6123-L6124)

```diff
- .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland.JingleGarlandExtra {
-   display: none
+ .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenHillsFar {
+   background-image: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 400 40%27 preserveAspectRatio=%27none%27><path fill=%27%231a1240%27 d=%27M0 20C40 9 80 11 120 19C160 27 200 7 250 11C300 15 340 24 400 13V40H0Z%27/></svg>");
+   height: calc(var(--halloweenGround)*2)
```

#### 232. `bundles/bloxd.io/main.css` (Changed code · before: `L6127-L6130` → after: `L6251-L6253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6251-L6253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6251-L6253) · [Before (L6127-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6127-L6130)

```diff
- @container (min-height: 400px) {
-   .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland.JingleGarlandExtra {
-     display: flex
-   }
+ .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenHillsNear {
+   background-image: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 400 40%27 preserveAspectRatio=%27none%27><path fill=%27%2306041a%27 d=%27M0 18C50 12 90 16 140 24C190 32 230 16 290 17C340 18 370 24 400 20V40H0Z%27/></svg>");
+   height: var(--halloweenGround)
```

#### 233. `bundles/bloxd.io/main.css` (Changed code · before: `L6133-L6137` → after: `L6256-L6262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6256-L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6256-L6262) · [Before (L6133-L6137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6133-L6137)

```diff
- .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland .JingleSwag {
-   aspect-ratio: 100/44;
-   flex: none;
-   position: relative;
-   width: var(--jingleSwag)
+ .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenTree {
+   aspect-ratio: 60/80;
+   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 60 80%27><g fill=%27none%27 stroke=%27%2306041a%27 stroke-linecap=%27round%27><path stroke-width=%277%27 d=%27M30 80C30 60 27 48 30 34%27/><path stroke-width=%273.5%27 d=%27M30 4 … [truncated]
+   bottom: calc(var(--halloweenGround)*.45);
+   left: calc(var(--halloweenU)*-4);
+   position: absolute;
+   width: calc(var(--halloweenU)*36)
```

#### 234. `bundles/bloxd.io/main.css` (Changed code · before: `L6140-L6142` → after: `L6265-L6277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6265-L6277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6265-L6277) · [Before (L6140-L6142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6140-L6142)

```diff
- .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland .JingleSwag .JingleSwagGarland {
-   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 44%27><g fill=%27none%27 stroke-linecap=%27round%27><path stroke=%27%230f4d2a%27 stroke-width=%2710%27 d=%27M-6 -1Q50 58 106 -1%27/><path stroke=%27%231d6e3c%27 stroke-width= … [truncated]
-   filter: drop-shadow(0 .1em .06em rgba(0, 0, 0, .35));
+ .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenManor {
+   aspect-ratio: 100/80;
+   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 80%27><g fill=%27%2306041a%27><rect x=%2721.4%27 y=%27-6%27 width=%271.2%27 height=%278%27/><polygon points=%2712,26 22,0 32,26%27/><rect x=%2714%27 y=%2724%27 width=%2716%27 … [truncated]
+   bottom: calc(var(--halloweenGround)*.5);
+   position: absolute;
+   right: 3cqw;
+   width: calc(var(--halloweenU)*44)
+ }
+ 
+ .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenManor:before {
+   animation: halloweenCandleFlicker 4s linear infinite;
+   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 80%27><g fill=%27%23ffb347%27><rect x=%2719%27 y=%2732%27 width=%276%27 height=%279%27 rx=%273%27/><rect x=%2736%27 y=%2754%27 width=%277%27 height=%279%27/><circle cx=%2753% … [truncated]
+   content: "";
```

#### 235. `bundles/bloxd.io/main.css` (Changed code · before: `L6147-L6150` → after: `L6282-L6284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6282-L6284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6282-L6284) · [Before (L6147-L6150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6147-L6150)

```diff
- .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland .JingleSwag .JingleBow {
-   aspect-ratio: 30/22;
-   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 22%27><g fill=%27%23d42a35%27 stroke=%27%238c1420%27 stroke-width=%270.8%27 stroke-linejoin=%27round%27><path d=%27M13 9L8 21L11 19L13 22L15 10Z%27/><path d=%27M17 9L22 21L19  … [truncated]
-   left: 0;
+ .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBat {
+   --batSize: 1;
+   aspect-ratio: 2;
```

#### 236. `bundles/bloxd.io/main.css` (Changed code · before: `L6152-L6155` → after: `L6286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6286) · [Before (L6152-L6155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6152-L6155)

```diff
-   top: 0;
-   transform: translate(-50%, -30%);
-   width: 30%;
-   z-index: 1
+   width: calc(var(--batSize)*max(var(--halloweenU)*18, 1.4em))
```

#### 237. `bundles/bloxd.io/main.css` (Changed code · before: `L6158-L6162` → after: `L6289-L6302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6289-L6302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6289-L6302) · [Before (L6158-L6162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6158-L6162)

```diff
- .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland .JingleSwag .JingleSwagHang {
-   display: flex;
-   gap: 4%;
-   justify-content: center;
-   left: 50%;
+ .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBat .HalloweenBatBob {
+   animation: halloweenBatBob .9s ease-in-out infinite alternate;
+   animation-delay: calc(var(--batSize)*-2.3s);
+   inset: 0;
+   position: absolute
+ }
+ 
+ .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBat .HalloweenBatWing {
+   animation-direction: alternate;
+   animation-duration: .22s;
+   animation-iteration-count: infinite;
+   animation-timing-function: ease-in-out;
+   aspect-ratio: 50/23;
+   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 -1 50 23%27><path fill=%27%2306041a%27 d=%27M50 4C40 0 24-1 10 3C5 5 2 8 0 13C5 12 9 14 10 19C14 15 19 15 22 20C25 15 30 15 33 21C36 16 41 16 44 21C46 16 48 14 50 15Z%27/></svg>")  … [truncated]
```

#### 238. `bundles/bloxd.io/main.css` (Changed code · before: `L6164-L6165` → after: `L6304-L6305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6304-L6305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6304-L6305) · [Before (L6164-L6165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6164-L6165)

```diff
-   top: 70%;
-   transform: translateX(-50%)
+   top: 18%;
+   width: 46%
```

#### 239. `bundles/bloxd.io/main.css` (Changed code · before: `L6168-L6169` → after: `L6308-L6312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6308-L6312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6308-L6312) · [Before (L6168-L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6168-L6169)

```diff
- .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland .JingleSwag .JingleSwagHang.JingleBellPair {
-   width: 32%
+ .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBat .HalloweenBatWingLeft {
+   animation-name: halloweenBatFlapLeft;
+   left: 4%;
+   transform: rotate(10deg);
+   transform-origin: 100% 20%
```

#### 240. `bundles/bloxd.io/main.css` (Changed code · before: `L6172-L6173` → after: `L6315-L6320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6315-L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6315-L6320) · [Before (L6172-L6173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6172-L6173)

```diff
- .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland .JingleSwag .JingleSwagHang.JingleBellPair .JingleBell {
-   width: 48%
+ .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBat .HalloweenBatWingRight {
+   animation-name: halloweenBatFlapRight;
+   background-image: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 -1 50 23%27><path transform=%27matrix%28-1 0 0 1 50 0%29%27 fill=%27%2306041a%27 d=%27M50 4C40 0 24-1 10 3C5 5 2 8 0 13C5 12 9 14 10 19C14 15 19 15 22 20C25 15 30 15 33 21C36 … [truncated]
+   right: 4%;
+   transform: rotate(-10deg);
+   transform-origin: 0 20%
```

#### 241. `bundles/bloxd.io/main.css` (Changed code · before: `L6176-L6181` → after: `L6323-L6329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6323-L6329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6323-L6329) · [Before (L6176-L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6176-L6181)

```diff
- .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland .JingleSwag .JingleSwagHang.JingleMistletoe {
-   aspect-ratio: 40/34;
-   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 40 34%27><g fill=%27%237fae4a%27 stroke=%27%234f7a2a%27 stroke-width=%270.8%27><ellipse cx=%2711%27 cy=%2716%27 rx=%2710%27 ry=%274%27 transform=%27rotate%28-28 11 16%29%27/><ell … [truncated]
-   filter: drop-shadow(0 .1em .08em rgba(0, 0, 0, .3));
-   top: 64%;
-   width: 30%
+ .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBat .HalloweenBatBody {
+   aspect-ratio: 16/24;
+   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 24%27><path fill=%27%2306041a%27 d=%27M3 0L6 6H10L13 0L14 9C16 14 13 20 8 24C3 20 0 14 2 9Z%27/></svg>") 50%/100% 100% no-repeat;
+   left: 43.5%;
+   position: absolute;
+   top: 10%;
+   width: 13%
```

#### 242. `bundles/bloxd.io/main.css` (Changed code · before: `L6184-L6189` → after: `L6332-L6335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6332-L6335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6332-L6335) · [Before (L6184-L6189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6184-L6189)

```diff
- .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland .JingleSwag .JingleBell {
-   animation: jingleBellSwing 1.4s ease-in-out infinite alternate;
-   aspect-ratio: 20/24;
-   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 24%27><defs><linearGradient id=%27g%27 x1=%270%27 y1=%270%27 x2=%271%27 y2=%270%27><stop offset=%270%27 stop-color=%27%23b8860b%27/><stop offset=%270.35%27 stop-color=%27%23ff … [truncated]
-   filter: drop-shadow(0 .08em .05em rgba(0, 0, 0, .35));
-   transform-origin: 50% 0
+ .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBatMoon {
+   --batSize: 0.8;
+   right: calc(11cqw + var(--halloweenU)*14);
+   top: calc(12cqh + var(--halloweenU)*20)
```

#### 243. `bundles/bloxd.io/main.css` (Changed code · before: `L6192-L6193` → after: `L6338-L6340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6338-L6340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6338-L6340) · [Before (L6192-L6193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6192-L6193)

```diff
- .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland .JingleSwag .JingleBell.JingleBellReverse {
-   animation-direction: alternate-reverse
+ .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBatMoon .HalloweenBatBob {
+   animation-duration: 2.4s;
+   animation-name: halloweenBatHover
```

#### 244. `bundles/bloxd.io/main.css` (Changed code · before: `L6196` → after: `L6343-L6358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6343-L6358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6343-L6358) · [Before (L6196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6196)

```diff
- @keyframes jingleBellSwing {
+ .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBatFlying {
+   animation: halloweenBatFly 15s linear infinite
+ }
+ 
+ .HalloweenPackBackground.PackBackgroundSimple .HalloweenPackBackgroundInner .HalloweenBat,
+ .HalloweenPackBackground.PackBackgroundSimple .HalloweenPackBackgroundInner .HalloweenBat .HalloweenBatBob,
+ .HalloweenPackBackground.PackBackgroundSimple .HalloweenPackBackgroundInner .HalloweenBat .HalloweenBatWing,
+ .HalloweenPackBackground.PackBackgroundSimple .HalloweenPackBackgroundInner .HalloweenCloud,
+ .HalloweenPackBackground.PackBackgroundSimple .HalloweenPackBackgroundInner .HalloweenManor:before,
+ .HalloweenPackBackground.PackBackgroundSimple .HalloweenPackBackgroundInner .HalloweenMoon:before,
+ .HalloweenPackBackground.PackBackgroundSimple .HalloweenPackBackgroundInner .HalloweenStar,
+ .HalloweenPackBackground.PackBackgroundSimple .HalloweenPackBackgroundInner:before {
+   animation: none
+ }
+ 
+ @keyframes halloweenStarfieldShimmer {
```

#### 245. `bundles/bloxd.io/main.css` (Changed code · before: `L6198` → after: `L6360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6360) · [Before (L6198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6198)

```diff
-     transform: rotate(-14deg)
+     opacity: .55
```

#### 246. `bundles/bloxd.io/main.css` (Changed code · before: `L6202` → after: `L6364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6364) · [Before (L6202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6202)

```diff
-     transform: rotate(14deg)
+     opacity: 1
```

#### 247. `bundles/bloxd.io/main.css` (Changed code · before: `L6206-L6208` → after: `L6368-L6371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6368-L6371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6368-L6371) · [Before (L6206-L6208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6206-L6208)

```diff
- @media(prefers-reduced-motion:reduce) {
-   .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleBell {
-     animation: none
+ @keyframes halloweenTwinkle {
+   0% {
+     opacity: .25;
+     transform: scale(.75)
```

#### 248. `bundles/bloxd.io/main.css` (Changed code · before: `L6212-L6217` → after: `L6374-L6377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6374-L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6374-L6377) · [Before (L6212-L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6212-L6217)

```diff
- .SnowflakesPackBackground {
-   container-type: size;
-   background: radial-gradient(ellipse at 70% 10%, rgba(191, 227, 255, .25) 0, transparent 55%), linear-gradient(180deg, #0a1a3f, #163a78 45%, #4f86c6 82%, #9cc8ec);
-   inset: 0;
-   overflow: hidden;
-   position: absolute
+   to {
+     opacity: 1;
+     transform: scale(1.1)
+   }
```

#### 249. `bundles/bloxd.io/main.css` (Changed code · before: `L6220-L6226` → after: `L6380-L6384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6380-L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6380-L6384) · [Before (L6220-L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6220-L6226)

```diff
- .SnowflakesPackBackground.PackBackgroundSimple .SnowflakesPackBackgroundInner .SnowflakesCrystal:before,
- .SnowflakesPackBackground.PackBackgroundSimple .SnowflakesPackBackgroundInner .SnowflakesCrystalSpin,
- .SnowflakesPackBackground.PackBackgroundSimple .SnowflakesPackBackgroundInner .SnowflakesGlint,
- .SnowflakesPackBackground.PackBackgroundSimple .SnowflakesPackBackgroundInner .SnowflakesSheen,
- .SnowflakesPackBackground.PackBackgroundSimple .SnowflakesPackBackgroundInner .SnowflakesSnowLayer {
-   animation: none
- }
+ @keyframes halloweenMoonGlow {
+   0% {
+     opacity: .55;
+     transform: scale(.92)
+   }
```

#### 250. `bundles/bloxd.io/main.css` (Changed code · before: `L6228-L6229` → after: `L6386-L6389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6386-L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6386-L6389) · [Before (L6228-L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6228-L6229)

```diff
- .SnowflakesPackBackground.PackBackgroundSimple .SnowflakesPackBackgroundInner .SnowflakesSheen {
-   display: none
+   to {
+     opacity: 1;
+     transform: scale(1.05)
+   }
```

#### 251. `bundles/bloxd.io/main.css` (Changed code · before: `L6232-L6235` → after: `L6392-L6399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6392-L6399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6392-L6399) · [Before (L6232-L6235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6232-L6235)

```diff
- .SnowflakesPackBackground .SnowflakesPackBackgroundInner {
-   inset: 0;
-   pointer-events: none;
-   position: absolute
+ @keyframes halloweenCloudDrift {
+   0% {
+     transform: translateX(calc(var(--halloweenU)*-10))
+   }
+ 
+   to {
+     transform: translateX(calc(var(--halloweenU)*10))
+   }
```

#### 252. `bundles/bloxd.io/main.css` (Changed code · before: `L6238-L6271` → after: `L6402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6402) · [Before (L6238-L6271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6238-L6271)

```diff
- .SnowflakesPackBackground .SnowflakesPackBackgroundInner .SnowflakesSnowLayer {
-   animation: snowflakesFall linear infinite, snowflakesSway ease-in-out infinite alternate;
-   height: 200%;
-   left: -10%;
-   position: absolute;
-   top: 0;
-   width: 120%
- }
- 
- .SnowflakesPackBackground .SnowflakesPackBackgroundInner .SnowflakesSnowFar {
-   animation-duration: 22s, 9s;
-   background-image: radial-gradient(circle at 8% 12%, hsla(0, 0%, 100%, .95) 0 1px, transparent 2px), radial-gradient(circle at 24% 58%, hsla(0, 0%, 100%, .95) 0 1px, transparent 2px), radial-gradient(circle at 40% 30%, hsla(0, 0%, 100%, .95) 0 1px, transparent 2px), radial-gradi … [truncated]
-   background-size: 50% 25%;
-   opacity: .55
- }
- 
- ... (18 more removed lines; see GitHub link above)
+ @keyframes halloweenCandleFlicker {
```

#### 253. `bundles/bloxd.io/main.css` (Changed code · before: `L6273-L6280` → after: `L6404-L6407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6404-L6407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6404-L6407) · [Before (L6273-L6280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6273-L6280)

```diff
- .SnowflakesPackBackground .SnowflakesPackBackgroundInner .SnowflakesCrystal:before {
-   animation: snowflakesPulse 4s ease-in-out infinite alternate;
-   background: radial-gradient(circle, rgba(191, 227, 255, .45) 0, rgba(191, 227, 255, .12) 45%, transparent 70%);
-   border-radius: 50%;
-   content: "";
-   inset: -25%;
-   position: absolute
- }
+   0%,
+   to {
+     opacity: 1
+   }
```

#### 254. `bundles/bloxd.io/main.css` (Changed code · before: `L6282-L6288` → after: `L6409-L6411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6409-L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6409-L6411) · [Before (L6282-L6288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6282-L6288)

```diff
- .SnowflakesPackBackground .SnowflakesPackBackgroundInner .SnowflakesCrystal .SnowflakesCrystalSpin {
-   animation: snowflakesSpin linear infinite;
-   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-50 -50 100 100%27><defs><path id=%27a%27 d=%27M0 0V-44M0-16L-9-25M0-16L9-25M0-28L-7-35M0-28L7-35M0-38L-4-42M0-38L4-42%27/><g id=%27h%27><use href=%27%23a%27/><use href=%27%23a%27 tr … [truncated]
-   filter: drop-shadow(0 0 .2em rgba(191, 227, 255, .9));
-   inset: 0;
-   position: absolute
- }
+   18% {
+     opacity: .8
+   }
```

#### 255. `bundles/bloxd.io/main.css` (Changed code · before: `L6290-L6297` → after: `L6413-L6415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6413-L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6413-L6415) · [Before (L6290-L6297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6290-L6297)

```diff
- .SnowflakesPackBackground .SnowflakesPackBackgroundInner .SnowflakesTumbler {
-   animation: snowflakesTumble linear infinite;
-   aspect-ratio: 1;
-   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-10 -10 20 20%27><defs><path id=%27a%27 d=%27M0 0V-9M0-5L-2.5-7.5M0-5L2.5-7.5%27/></defs><g fill=%27none%27 stroke=%27%23ffffff%27 stroke-width=%271.6%27 stroke-linecap=%27round%27>< … [truncated]
-   filter: drop-shadow(0 0 .15em rgba(191, 227, 255, .8));
-   position: absolute;
-   top: 0
- }
+   22% {
+     opacity: .55
+   }
```

#### 256. `bundles/bloxd.io/main.css` (Changed code · before: `L6299-L6304` → after: `L6417-L6419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6417-L6419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6417-L6419) · [Before (L6299-L6304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6299-L6304)

```diff
- .SnowflakesPackBackground .SnowflakesPackBackgroundInner .SnowflakesGlint {
-   animation: snowflakesGlint 2.8s ease-in-out infinite;
-   background: #fff;
-   clip-path: polygon(50% 0, 58% 42%, 100% 50%, 58% 58%, 50% 100%, 42% 58%, 0 50%, 42% 42%);
-   position: absolute
- }
+   26% {
+     opacity: .9
+   }
```

#### 257. `bundles/bloxd.io/main.css` (Changed code · before: `L6306-L6312` → after: `L6421-L6423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6421-L6423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6421-L6423) · [Before (L6306-L6312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6306-L6312)

```diff
- .SnowflakesPackBackground .SnowflakesPackBackgroundInner .SnowflakesSheen {
-   animation: snowflakesSheen 7s ease-in-out infinite;
-   background: linear-gradient(105deg, transparent 38%, hsla(0, 0%, 100%, .22) 50%, transparent 62%);
-   inset: 0;
-   position: absolute;
-   transform: translateX(-100%)
- }
+   60% {
+     opacity: 1
+   }
```

#### 258. `bundles/bloxd.io/main.css` (Changed code · before: `L6314-L6316` → after: `L6425-L6426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6425-L6426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6425-L6426) · [Before (L6314-L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6314-L6316)

```diff
- @keyframes snowflakesFall {
-   0% {
-     transform: translateY(-50%)
+   64% {
+     opacity: .7
```

#### 259. `bundles/bloxd.io/main.css` (Changed code · before: `L6319-L6320` → after: `L6429-L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6429-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6429-L6430) · [Before (L6319-L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6319-L6320)

```diff
-   to {
-     transform: translateY(0)
+   68% {
+     opacity: 1
```

#### 260. `bundles/bloxd.io/main.css` (Changed code · before: `L6324` → after: `L6434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6434) · [Before (L6324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6324)

```diff
- @keyframes snowflakesSway {
+ @keyframes halloweenBatFly {
```

#### 261. `bundles/bloxd.io/main.css` (Changed code · before: `L6326` → after: `L6436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6436) · [Before (L6326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6326)

```diff
-     translate: -2% 0
+     transform: translate(calc(-15cqw - var(--batX)))
```

#### 262. `bundles/bloxd.io/main.css` (Changed code · before: `L6329-L6330` → after: `L6439-L6440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6439-L6440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6439-L6440) · [Before (L6329-L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6329-L6330)

```diff
-   to {
-     translate: 2% 0
+   33% {
+     transform: translate(calc(28cqw - var(--batX)), -10cqh)
```

#### 263. `bundles/bloxd.io/main.css` (Changed code · before: `L6334-L6336` → after: `L6443-L6444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6443-L6444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6443-L6444) · [Before (L6334-L6336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6334-L6336)

```diff
- @keyframes snowflakesSpin {
-   0% {
-     transform: rotate(0deg)
+   66% {
+     transform: translate(calc(71cqw - var(--batX)), 6cqh)
```

#### 264. `bundles/bloxd.io/main.css` (Changed code · before: `L6340` → after: `L6448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6448) · [Before (L6340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6340)

```diff
-     transform: rotate(1turn)
+     transform: translate(calc(115cqw - var(--batX)))
```

#### 265. `bundles/bloxd.io/main.css` (Changed code · before: `L6344` → after: `L6452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6452) · [Before (L6344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6344)

```diff
- @keyframes snowflakesPulse {
+ @keyframes halloweenBatBob {
```

#### 266. `bundles/bloxd.io/main.css` (Changed code · before: `L6346-L6347` → after: `L6454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6454) · [Before (L6346-L6347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6346-L6347)

```diff
-     opacity: .45;
-     transform: scale(.9)
+     transform: translateY(-15%)
```

#### 267. `bundles/bloxd.io/main.css` (Changed code · before: `L6351-L6352` → after: `L6458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6458) · [Before (L6351-L6352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6351-L6352)

```diff
-     opacity: 1;
-     transform: scale(1.1)
+     transform: translateY(15%)
```

#### 268. `bundles/bloxd.io/main.css` (Changed code · before: `L6356` → after: `L6462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6462) · [Before (L6356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6356)

```diff
- @keyframes snowflakesTumble {
+ @keyframes halloweenBatHover {
```

#### 269. `bundles/bloxd.io/main.css` (Changed code · before: `L6358-L6362` → after: `L6464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6464) · [Before (L6358-L6362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6358-L6362)

```diff
-     transform: translateY(-15cqh) rotate(0deg)
-   }
- 
-   50% {
-     transform: translate(var(--drift), 50cqh) rotate(180deg)
+     transform: translate(-10%, -20%) rotate(-6deg)
```

#### 270. `bundles/bloxd.io/main.css` (Changed code · before: `L6366` → after: `L6468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6468) · [Before (L6366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6366)

```diff
-     transform: translateY(115cqh) rotate(1turn)
+     transform: translate(10%, 20%) rotate(6deg)
```

#### 271. `bundles/bloxd.io/main.css` (Changed code · before: `L6370-L6376` → after: `L6472-L6474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6472-L6474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6472-L6474) · [Before (L6370-L6376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6370-L6376)

```diff
- @keyframes snowflakesGlint {
- 
-   0%,
-   60%,
-   to {
-     opacity: 0;
-     transform: scale(.3) rotate(0deg)
+ @keyframes halloweenBatFlapLeft {
+   0% {
+     transform: rotate(30deg) scaleY(.8)
```

#### 272. `bundles/bloxd.io/main.css` (Changed code · before: `L6379-L6381` → after: `L6477-L6478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6477-L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6477-L6478) · [Before (L6379-L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6379-L6381)

```diff
-   75% {
-     opacity: 1;
-     transform: scale(1) rotate(45deg)
+   to {
+     transform: rotate(-20deg) scaleY(1)
```

#### 273. `bundles/bloxd.io/main.css` (Changed code · before: `L6385` → after: `L6482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6482) · [Before (L6385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6385)

```diff
- @keyframes snowflakesSheen {
+ @keyframes halloweenBatFlapRight {
```

#### 274. `bundles/bloxd.io/main.css` (Changed code · before: `L6387` → after: `L6484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6484) · [Before (L6387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6387)

```diff
-     transform: translateX(-100%)
+     transform: rotate(-30deg) scaleY(.8)
```

#### 275. `bundles/bloxd.io/main.css` (Changed code · before: `L6392` → after: `L6488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6488) · [Before (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6392)

```diff
-     transform: translateX(100%)
+     transform: rotate(20deg) scaleY(1)
```

#### 276. `bundles/bloxd.io/main.css` (Changed code · before: `L6398-L6403` → after: `L6494-L6501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6494-L6501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6494-L6501) · [Before (L6398-L6403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6398-L6403)

```diff
-   .SnowflakesPackBackground .SnowflakesPackBackgroundInner .SnowflakesCrystal:before,
-   .SnowflakesPackBackground .SnowflakesPackBackgroundInner .SnowflakesCrystalSpin,
-   .SnowflakesPackBackground .SnowflakesPackBackgroundInner .SnowflakesGlint,
-   .SnowflakesPackBackground .SnowflakesPackBackgroundInner .SnowflakesSheen,
-   .SnowflakesPackBackground .SnowflakesPackBackgroundInner .SnowflakesSnowLayer,
-   .SnowflakesPackBackground .SnowflakesPackBackgroundInner .SnowflakesTumbler {
+   .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBat,
+   .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBat .HalloweenBatBob,
+   .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenBat .HalloweenBatWing,
+   .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenCloud,
+   .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenManor:before,
+   .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenMoon:before,
+   .HalloweenPackBackground .HalloweenPackBackgroundInner .HalloweenStar,
+   .HalloweenPackBackground .HalloweenPackBackgroundInner:before {
```

#### 277. `bundles/bloxd.io/main.css` (Changed code · before: `L6413` → after: `L6506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6506) · [Before (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6413)

```diff
- .AuroraPackBackground {
+ .CandyCanePackBackground {
```

#### 278. `bundles/bloxd.io/main.css` (Changed code · before: `L6415` → after: `L6508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6508) · [Before (L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6415)

```diff
-   background: linear-gradient(180deg, #040817, #0a1934 55%, #123a4a);
+   background: repeating-linear-gradient(135deg, rgba(224, 40, 60, .07) 0 1.2em, transparent 1.2em 2.4em), radial-gradient(ellipse at 50% 40%, #fff1f3 0, #f9cdd6 100%);
```

#### 279. `bundles/bloxd.io/main.css` (Changed code · before: `L6421-L6424` → after: `L6514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6514) · [Before (L6421-L6424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6421-L6424)

```diff
- .AuroraPackBackground.PackBackgroundSimple .AuroraPackBackgroundInner .AuroraCurtain,
- .AuroraPackBackground.PackBackgroundSimple .AuroraPackBackgroundInner .AuroraSparkle,
- .AuroraPackBackground.PackBackgroundSimple .AuroraPackBackgroundInner .AuroraStar,
- .AuroraPackBackground.PackBackgroundSimple .AuroraPackBackgroundInner:before {
+ .CandyCanePackBackground.PackBackgroundSimple .CandyCanePackBackgroundInner .CandyCaneWrap .CandyCane {
```

#### 280. `bundles/bloxd.io/main.css` (Changed code · before: `L6428-L6432` → after: `L6518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6518) · [Before (L6428-L6432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6428-L6432)

```diff
- .AuroraPackBackground.PackBackgroundSimple .AuroraPackBackgroundInner .AuroraSparkle {
-   opacity: .6
- }
- 
- .AuroraPackBackground .AuroraPackBackgroundInner {
+ .CandyCanePackBackground .CandyCanePackBackgroundInner {
```

#### 281. `bundles/bloxd.io/main.css` (Changed code · before: `L6438-L6440` → after: `L6524-L6525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6524-L6525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6524-L6525) · [Before (L6438-L6440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6438-L6440)

```diff
- .AuroraPackBackground .AuroraPackBackgroundInner:before {
-   animation: auroraStarfieldShimmer 6s ease-in-out infinite alternate;
-   background-image: radial-gradient(1px 1px at 4% 22%, hsla(0, 0%, 100%, .5) 50%, transparent 100%), radial-gradient(1px 1px at 12% 6%, hsla(0, 0%, 100%, .35) 50%, transparent 100%), radial-gradient(1px 1px at 26% 16%, hsla(0, 0%, 100%, .45) 50%, transparent 100%), radial-gradien … [truncated]
+ .CandyCanePackBackground .CandyCanePackBackgroundInner:before {
+   background-image: radial-gradient(circle at 8% 18%, hsla(0, 0%, 100%, .7) 0 1.5px, transparent 2px), radial-gradient(circle at 26% 64%, hsla(0, 0%, 100%, .7) 0 1.5px, transparent 2px), radial-gradient(circle at 41% 12%, hsla(0, 0%, 100%, .7) 0 1px, transparent 1.5px), radial-gr … [truncated]
```

#### 282. `bundles/bloxd.io/main.css` (Changed code · before: `L6446-L6447` → after: `L6531-L6535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6531-L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6531-L6535) · [Before (L6446-L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6446-L6447)

```diff
- .AuroraPackBackground .AuroraPackBackgroundInner .AuroraStar {
-   animation: auroraStarSparkle ease-in-out infinite;
+ .CandyCanePackBackground .CandyCanePackBackgroundInner .CandyCanePeppermint {
+   background: radial-gradient(circle, snow 0 18%, transparent 19%), repeating-conic-gradient(#e0283c 0 30deg, snow 30deg 60deg);
+   border-radius: 50%;
+   box-shadow: 0 0 0 .08em #a3152a, inset -.12em -.12em 0 rgba(0, 0, 0, .12);
+   opacity: .9;
```

#### 283. `bundles/bloxd.io/main.css` (Changed code · before: `L6451-L6455` → after: `L6539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6539) · [Before (L6451-L6455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6451-L6455)

```diff
- .AuroraPackBackground .AuroraPackBackgroundInner .AuroraStar:after {
-   background: radial-gradient(circle, rgba(244, 251, 255, .55) 0, rgba(244, 251, 255, .15) 35%, transparent 65%);
-   border-radius: 50%;
-   content: "";
-   inset: -70%;
+ .CandyCanePackBackground .CandyCanePackBackgroundInner .CandyCaneWrap {
```

#### 284. `bundles/bloxd.io/main.css` (Changed code · before: `L6459-L6465` → after: `L6543-L6548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6543-L6548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6543-L6548) · [Before (L6459-L6465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6459-L6465)

```diff
- .AuroraPackBackground .AuroraPackBackgroundInner .AuroraStar:before {
-   background: radial-gradient(circle, #fff 0, #f4fbff 40%, #c9f2ff 100%);
-   clip-path: polygon(50% 0, 57% 43%, 100% 50%, 57% 57%, 50% 100%, 43% 57%, 0 50%, 43% 43%);
-   content: "";
-   inset: 0;
-   position: absolute;
-   z-index: 1
+ .CandyCanePackBackground .CandyCanePackBackgroundInner .CandyCaneWrap .CandyCane {
+   animation: candyCaneSway 3.5s ease-in-out infinite alternate;
+   aspect-ratio: 30/80;
+   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 80%27><defs><pattern id=%27s%27 patternUnits=%27userSpaceOnUse%27 width=%277%27 height=%277%27 patternTransform=%27rotate%2840%29%27><rect width=%273.2%27 height=%277%27 fill= … [truncated]
+   filter: drop-shadow(.06em .1em 0 rgba(120, 20, 35, .25));
+   transform-origin: 50% 100%
```

#### 285. `bundles/bloxd.io/main.css` (Changed code · before: `L6468-L6475` → after: `L6551-L6558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6551-L6558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6551-L6558) · [Before (L6468-L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6468-L6475)

```diff
- .AuroraPackBackground .AuroraPackBackgroundInner .AuroraSparkle {
-   animation: auroraSparkle 5.6s ease-in-out infinite;
-   background: radial-gradient(circle, #fff 0, #f4fbff 35%, rgba(43, 255, 160, .9) 100%);
-   clip-path: polygon(50% 0, 56% 44%, 100% 50%, 56% 56%, 50% 100%, 44% 56%, 0 50%, 44% 44%);
-   filter: drop-shadow(0 0 .25em rgba(43, 255, 160, .9));
-   opacity: 0;
-   position: absolute;
-   z-index: 1
+ @keyframes candyCaneSway {
+   0% {
+     transform: rotate(-5deg)
+   }
+ 
+   to {
+     transform: rotate(5deg)
+   }
```

#### 286. `bundles/bloxd.io/main.css` (Changed code · before: `L6478-L6485` → after: `L6561-L6564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6561-L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6561-L6564) · [Before (L6478-L6485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6478-L6485)

```diff
- .AuroraPackBackground .AuroraPackBackgroundInner .AuroraShootingStar {
-   animation: auroraShootingStar ease-in infinite;
-   background: linear-gradient(90deg, rgba(244, 251, 255, .95), rgba(244, 251, 255, 0));
-   height: .12em;
-   opacity: 0;
-   position: absolute;
-   transform-origin: 0 50%;
-   width: 6em
+ @media(prefers-reduced-motion:reduce) {
+   .CandyCanePackBackground .CandyCanePackBackgroundInner .CandyCaneWrap .CandyCane {
+     animation: none
+   }
```

#### 287. `bundles/bloxd.io/main.css` (Changed code · before: `L6488-L6492` → after: `L6567-L6572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6567-L6572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6567-L6572) · [Before (L6488-L6492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6488-L6492)

```diff
- .AuroraPackBackground .AuroraPackBackgroundInner .AuroraShootingStar.AuroraShootingStar1 {
-   animation-delay: 2s;
-   animation-duration: 9s;
-   left: 70cqw;
-   top: 6cqh
+ .JingleBellsPackBackground {
+   container-type: size;
+   background: radial-gradient(ellipse at 45% 35%, #1f6b3e 0, #0d3a22 75%);
+   inset: 0;
+   overflow: hidden;
+   position: absolute
```

#### 288. `bundles/bloxd.io/main.css` (Changed code · before: `L6495-L6499` → after: `L6575-L6576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6575-L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6575-L6576) · [Before (L6495-L6499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6495-L6499)

```diff
- .AuroraPackBackground .AuroraPackBackgroundInner .AuroraShootingStar.AuroraShootingStar2 {
-   animation-delay: 6s;
-   animation-duration: 11s;
-   left: 42cqw;
-   top: 18cqh
+ .JingleBellsPackBackground.PackBackgroundSimple .JingleBellsPackBackgroundInner .JingleBell {
+   animation: none
```

#### 289. `bundles/bloxd.io/main.css` (Changed code · before: `L6502-L6506` → after: `L6579-L6582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6579-L6582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6579-L6582) · [Before (L6502-L6506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6502-L6506)

```diff
- .AuroraPackBackground .AuroraPackBackgroundInner .AuroraShootingStar.AuroraShootingStar3 {
-   animation-delay: 9.5s;
-   animation-duration: 13s;
-   left: 96cqw;
-   top: 2cqh
+ .JingleBellsPackBackground .JingleBellsPackBackgroundInner {
+   inset: 0;
+   pointer-events: none;
+   position: absolute
```

#### 290. `bundles/bloxd.io/main.css` (Changed code · before: `L6509-L6514` → after: `L6585-L6596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6585-L6596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6585-L6596) · [Before (L6509-L6514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6509-L6514)

```diff
- .AuroraPackBackground .AuroraPackBackgroundInner .AuroraCurtain {
-   animation: auroraDrift linear infinite, auroraBreathe ease-in-out infinite alternate;
-   background-position: 0 0;
-   background-repeat: repeat-x;
-   background-size: 50% 100%;
-   filter: blur(.3em) saturate(1.35);
+ .JingleBellsPackBackground .JingleBellsPackBackgroundInner:before {
+   background-image: radial-gradient(circle at 18% 72%, rgba(242, 193, 78, .5) 0 1.5px, transparent 2px), radial-gradient(circle at 30% 30%, rgba(242, 193, 78, .35) 0 1px, transparent 1.5px), radial-gradient(circle at 46% 84%, rgba(242, 193, 78, .4) 0 1.5px, transparent 2px), radi … [truncated]
+   content: "";
+   inset: 0;
+   position: absolute
+ }
+ 
+ .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarlands {
+   --jingleSwag: max(7.5em, min(15cqw, 30cqh));
+   display: flex;
+   flex-direction: column;
+   gap: calc(var(--jingleSwag)*.08);
```

#### 291. `bundles/bloxd.io/main.css` (Changed code · before: `L6519` → after: `L6599-L6600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6599-L6600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6599-L6600) · [Before (L6519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6519)

```diff
-   width: 200%
+   top: 50%;
+   transform: translateY(-50%)
```

#### 292. `bundles/bloxd.io/main.css` (Changed code · before: `L6522-L6528` → after: `L6603-L6607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6603-L6607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6603-L6607) · [Before (L6522-L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6522-L6528)

```diff
- .AuroraPackBackground .AuroraPackBackgroundInner .AuroraCurtain.AuroraCurtainViolet {
-   --auroraPeak: 0.9;
-   animation-delay: -12s, -2s;
-   animation-duration: 32s, 9s;
-   background-image: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 400 120%27 preserveAspectRatio=%27none%27><defs><linearGradient id=%27g%27 x1=%270%27 y1=%270%27 x2=%270%27 y2=%271%27><stop offset=%270%27 stop-color=%27%23ff4fd8%27 stop- … [truncated]
-   height: 40%;
-   top: 0
+ .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarlandsIcon {
+   --jingleSwag: 80cqw;
+   left: 10%;
+   top: 22%;
+   transform: none
```

#### 293. `bundles/bloxd.io/main.css` (Changed code · before: `L6531-L6536` → after: `L6610-L6611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6610-L6611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6610-L6611) · [Before (L6531-L6536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6531-L6536)

```diff
- .AuroraPackBackground .AuroraPackBackgroundInner .AuroraCurtain.AuroraCurtainGreen {
-   --auroraPeak: 1;
-   animation-duration: 60s, 6.5s;
-   background-image: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 400 120%27 preserveAspectRatio=%27none%27><defs><linearGradient id=%27g%27 x1=%270%27 y1=%270%27 x2=%270%27 y2=%271%27><stop offset=%270%27 stop-color=%27%232bffa0%27 stop- … [truncated]
-   height: 44%;
-   top: 8%
+ .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarlandsIcon .JingleGarland .JingleSwag .JingleBow.JingleBowEnd {
+   left: 100%
```

#### 294. `bundles/bloxd.io/main.css` (Changed code · before: `L6539-L6545` → after: `L6614-L6615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6614-L6615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6614-L6615) · [Before (L6539-L6545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6539-L6545)

```diff
- .AuroraPackBackground .AuroraPackBackgroundInner .AuroraCurtain.AuroraCurtainCyan {
-   --auroraPeak: 1;
-   animation-delay: -7s, -1s;
-   animation-duration: 20s, 8s;
-   background-image: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 400 120%27 preserveAspectRatio=%27none%27><defs><linearGradient id=%27g%27 x1=%270%27 y1=%270%27 x2=%270%27 y2=%271%27><stop offset=%270%27 stop-color=%27%231fd8ff%27 stop- … [truncated]
-   height: 36%;
-   top: 34%
+ .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarlandsIcon .JingleGarland .JingleSwag .JingleSwagHang.JingleBellPair {
+   width: 60%
```

#### 295. `bundles/bloxd.io/main.css` (Changed code · before: `L6548-L6554` → after: `L6618-L6620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6618-L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6618-L6620) · [Before (L6548-L6554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6548-L6554)

```diff
- .AuroraPackBackground .AuroraPackBackgroundInner .AuroraRidge {
-   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 400 60%27 preserveAspectRatio=%27none%27><path fill=%27%230b1c33%27 d=%27M0 40L40 22L70 34L110 10L150 30L190 18L230 34L270 6L310 28L350 16L400 32V60H0Z%27/></svg>") bottom/100% 1 … [truncated]
-   bottom: 0;
-   height: 24%;
-   left: 0;
-   position: absolute;
-   right: 0
+ .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland {
+   display: flex;
+   padding-bottom: calc(var(--jingleSwag)*.1)
```

#### 296. `bundles/bloxd.io/main.css` (Changed code · before: `L6557-L6560` → after: `L6623-L6625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6623-L6625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6623-L6625) · [Before (L6557-L6560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6557-L6560)

```diff
- @keyframes auroraStarfieldShimmer {
-   0% {
-     opacity: .6
-   }
+ .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland.JingleGarlandShifted {
+   margin-left: calc(var(--jingleSwag)/-2)
+ }
```

#### 297. `bundles/bloxd.io/main.css` (Changed code · before: `L6562-L6563` → after: `L6627-L6633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6627-L6633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6627-L6633) · [Before (L6562-L6563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6562-L6563)

```diff
-   to {
-     opacity: 1
+ .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland.JingleGarlandExtra {
+   display: none
+ }
+ 
+ @container (min-height: 400px) {
+   .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland.JingleGarlandExtra {
+     display: flex
```

#### 298. `bundles/bloxd.io/main.css` (Changed code · before: `L6567` → after: `L6637-L6642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6637-L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6637-L6642) · [Before (L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6567)

```diff
- @keyframes auroraStarSparkle {
+ .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland .JingleSwag {
+   aspect-ratio: 100/44;
+   flex: none;
+   position: relative;
+   width: var(--jingleSwag)
+ }
```

#### 299. `bundles/bloxd.io/main.css` (Changed code · before: `L6569-L6573` → after: `L6644-L6649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6644-L6649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6644-L6649) · [Before (L6569-L6573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6569-L6573)

```diff
-   0%,
-   to {
-     opacity: .35;
-     transform: scale(.55) rotate(0deg)
-   }
+ .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland .JingleSwag .JingleSwagGarland {
+   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 44%27><g fill=%27none%27 stroke-linecap=%27round%27><path stroke=%27%230f4d2a%27 stroke-width=%2710%27 d=%27M-6 -1Q50 58 106 -1%27/><path stroke=%27%231d6e3c%27 stroke-width= … [truncated]
+   filter: drop-shadow(0 .1em .06em rgba(0, 0, 0, .35));
+   inset: 0;
+   position: absolute
+ }
```

#### 300. `bundles/bloxd.io/main.css` (Changed code · before: `L6575-L6578` → after: `L6651-L6659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6651-L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6651-L6659) · [Before (L6575-L6578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6575-L6578)

```diff
-   50% {
-     opacity: 1;
-     transform: scale(1.2) rotate(45deg)
-   }
+ .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland .JingleSwag .JingleBow {
+   aspect-ratio: 30/22;
+   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 22%27><g fill=%27%23d42a35%27 stroke=%27%238c1420%27 stroke-width=%270.8%27 stroke-linejoin=%27round%27><path d=%27M13 9L8 21L11 19L13 22L15 10Z%27/><path d=%27M17 9L22 21L19  … [truncated]
+   left: 0;
+   position: absolute;
+   top: 0;
+   transform: translate(-50%, -30%);
+   width: 30%;
+   z-index: 1
```

#### 301. `bundles/bloxd.io/main.css` (Changed code · before: `L6581` → after: `L6662-L6670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6662-L6670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6662-L6670) · [Before (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6581)

```diff
- @keyframes auroraSparkle {
+ .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland .JingleSwag .JingleSwagHang {
+   display: flex;
+   gap: 4%;
+   justify-content: center;
+   left: 50%;
+   position: absolute;
+   top: 70%;
+   transform: translateX(-50%)
+ }
```

#### 302. `bundles/bloxd.io/main.css` (Changed code · before: `L6583-L6588` → after: `L6672-L6674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6672-L6674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6672-L6674) · [Before (L6583-L6588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6583-L6588)

```diff
-   0%,
-   30%,
-   to {
-     opacity: 0;
-     transform: scale(.2) rotate(0deg)
-   }
+ .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland .JingleSwag .JingleSwagHang.JingleBellPair {
+   width: 32%
+ }
```

#### 303. `bundles/bloxd.io/main.css` (Changed code · before: `L6590-L6593` → after: `L6676-L6677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6676-L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6676-L6677) · [Before (L6590-L6593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6590-L6593)

```diff
-   15% {
-     opacity: 1;
-     transform: scale(1) rotate(45deg)
-   }
+ .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland .JingleSwag .JingleSwagHang.JingleBellPair .JingleBell {
+   width: 48%
```

#### 304. `bundles/bloxd.io/main.css` (Changed code · before: `L6596-L6599` → after: `L6680-L6686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6680-L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6680-L6686) · [Before (L6596-L6599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6596-L6599)

```diff
- @keyframes auroraBreathe {
-   0% {
-     opacity: calc(var(--auroraPeak)*.75)
-   }
+ .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland .JingleSwag .JingleSwagHang.JingleMistletoe {
+   aspect-ratio: 40/34;
+   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 40 34%27><g fill=%27%237fae4a%27 stroke=%27%234f7a2a%27 stroke-width=%270.8%27><ellipse cx=%2711%27 cy=%2716%27 rx=%2710%27 ry=%274%27 transform=%27rotate%28-28 11 16%29%27/><ell … [truncated]
+   filter: drop-shadow(0 .1em .08em rgba(0, 0, 0, .3));
+   top: 64%;
+   width: 30%
+ }
```

#### 305. `bundles/bloxd.io/main.css` (Changed code · before: `L6601-L6603` → after: `L6688-L6693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6688-L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6688-L6693) · [Before (L6601-L6603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6601-L6603)

```diff
-   to {
-     opacity: var(--auroraPeak)
-   }
+ .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland .JingleSwag .JingleBell {
+   animation: jingleBellSwing 1.4s ease-in-out infinite alternate;
+   aspect-ratio: 20/24;
+   background: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 24%27><defs><linearGradient id=%27g%27 x1=%270%27 y1=%270%27 x2=%271%27 y2=%270%27><stop offset=%270%27 stop-color=%27%23b8860b%27/><stop offset=%270.35%27 stop-color=%27%23ff … [truncated]
+   filter: drop-shadow(0 .08em .05em rgba(0, 0, 0, .35));
+   transform-origin: 50% 0
```

#### 306. `bundles/bloxd.io/main.css` (Changed code · before: `L6606` → after: `L6696-L6700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6696-L6700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6696-L6700) · [Before (L6606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6606)

```diff
- @keyframes auroraDrift {
+ .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleGarland .JingleSwag .JingleBell.JingleBellReverse {
+   animation-direction: alternate-reverse
+ }
+ 
+ @keyframes jingleBellSwing {
```

#### 307. `bundles/bloxd.io/main.css` (Changed code · before: `L6608` → after: `L6702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6702) · [Before (L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6608)

```diff
-     transform: translateX(0)
+     transform: rotate(-14deg)
```

#### 308. `bundles/bloxd.io/main.css` (Changed code · before: `L6612` → after: `L6706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6706) · [Before (L6612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6612)

```diff
-     transform: translateX(-50%)
+     transform: rotate(14deg)
```

#### 309. `bundles/bloxd.io/main.css` (Changed code · before: `L6616-L6623` → after: `L6710-L6712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6710-L6712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6710-L6712) · [Before (L6616-L6623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6616-L6623)

```diff
- @keyframes auroraShootingStar {
-   0% {
-     opacity: 0;
-     transform: translate(0) rotate(-20deg)
-   }
- 
-   2% {
-     opacity: 1
+ @media(prefers-reduced-motion:reduce) {
+   .JingleBellsPackBackground .JingleBellsPackBackgroundInner .JingleBell {
+     animation: none
```

#### 310. `bundles/bloxd.io/main.css` (Changed code · before: `L6626-L6629` → after: `L6716-L6722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6716-L6722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6716-L6722) · [Before (L6626-L6629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6626-L6629)

```diff
-   9% {
-     opacity: 0;
-     transform: translate(-45cqw, 18cqh) rotate(-20deg)
-   }
+ .SnowflakesPackBackground {
+   container-type: size;
+   background: radial-gradient(ellipse at 70% 10%, rgba(191, 227, 255, .25) 0, transparent 55%), linear-gradient(180deg, #0a1a3f, #163a78 45%, #4f86c6 82%, #9cc8ec);
+   inset: 0;
+   overflow: hidden;
+   position: absolute
+ }
```

#### 311. `bundles/bloxd.io/main.css` (Changed code · before: `L6631-L6634` → after: `L6724-L6729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6724-L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6724-L6729) · [Before (L6631-L6634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6631-L6634)

```diff
-   to {
-     opacity: 0;
-     transform: translate(-45cqw, 18cqh) rotate(-20deg)
-   }
+ .SnowflakesPackBackground.PackBackgroundSimple .SnowflakesPackBackgroundInner .SnowflakesCrystal:before,
+ .SnowflakesPackBackground.PackBackgroundSimple .SnowflakesPackBackgroundInner .SnowflakesCrystalSpin,
+ .SnowflakesPackBackground.PackBackgroundSimple .SnowflakesPackBackgroundInner .SnowflakesGlint,
+ .SnowflakesPackBackground.PackBackgroundSimple .SnowflakesPackBackgroundInner .SnowflakesSheen,
+ .SnowflakesPackBackground.PackBackgroundSimple .SnowflakesPackBackgroundInner .SnowflakesSnowLayer {
+   animation: none
```

#### 312. `bundles/bloxd.io/main.css` (Changed code · before: `L6637` → after: `L6732-L6734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6732-L6734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6732-L6734) · [Before (L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6637)

```diff
- @media(prefers-reduced-motion:reduce) {
+ .SnowflakesPackBackground.PackBackgroundSimple .SnowflakesPackBackgroundInner .SnowflakesSheen {
+   display: none
+ }
```

#### 313. `bundles/bloxd.io/main.css` (Changed code · before: `L6639-L6644` → after: `L6736-L6740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6736-L6740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6736-L6740) · [Before (L6639-L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6639-L6644)

```diff
-   .AuroraPackBackground .AuroraPackBackgroundInner .AuroraCurtain,
-   .AuroraPackBackground .AuroraPackBackgroundInner .AuroraSparkle,
-   .AuroraPackBackground .AuroraPackBackgroundInner .AuroraStar,
-   .AuroraPackBackground .AuroraPackBackgroundInner:before {
-     animation: none
-   }
+ .SnowflakesPackBackground .SnowflakesPackBackgroundInner {
+   inset: 0;
+   pointer-events: none;
+   position: absolute
+ }
```

#### 314. `bundles/bloxd.io/main.css` (Changed code · before: `L6646-L6648` → after: `L6742-L6749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6742-L6749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6742-L6749) · [Before (L6646-L6648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6646-L6648)

```diff
-   .AuroraPackBackground .AuroraPackBackgroundInner .AuroraSparkle {
-     opacity: .6
-   }
+ .SnowflakesPackBackground .SnowflakesPackBackgroundInner .SnowflakesSnowLayer {
+   animation: snowflakesFall linear infinite, snowflakesSway ease-in-out infinite alternate;
+   height: 200%;
+   left: -10%;
+   position: absolute;
+   top: 0;
+   width: 120%
+ }
```

#### 315. `bundles/bloxd.io/main.css` (Changed code · before: `L6650-L6652` → after: `L6751-L6755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6751-L6755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6751-L6755) · [Before (L6650-L6652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6650-L6652)

```diff
-   .AuroraPackBackground .AuroraPackBackgroundInner .AuroraShootingStar {
-     display: none
-   }
+ .SnowflakesPackBackground .SnowflakesPackBackgroundInner .SnowflakesSnowFar {
+   animation-duration: 22s, 9s;
+   background-image: radial-gradient(circle at 8% 12%, hsla(0, 0%, 100%, .95) 0 1px, transparent 2px), radial-gradient(circle at 24% 58%, hsla(0, 0%, 100%, .95) 0 1px, transparent 2px), radial-gradient(circle at 40% 30%, hsla(0, 0%, 100%, .95) 0 1px, transparent 2px), radial-gradi … [truncated]
+   background-size: 50% 25%;
+   opacity: .55
```

#### 316. `bundles/bloxd.io/main.css` (Changed code · before: `L6655-L6656` → after: `L6758-L6762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6758-L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6758-L6762) · [Before (L6655-L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6655-L6656)

```diff
- .UpdateLogPopupOuter {
-   z-index: 21
+ .SnowflakesPackBackground .SnowflakesPackBackgroundInner .SnowflakesSnowMid {
+   animation-duration: 14s, 7s;
+   background-image: radial-gradient(circle at 12% 20%, hsla(0, 0%, 100%, .95) 0 1.6px, transparent 2.6px), radial-gradient(circle at 38% 70%, hsla(0, 0%, 100%, .95) 0 1.6px, transparent 2.6px), radial-gradient(circle at 62% 34%, hsla(0, 0%, 100%, .95) 0 1.6px, transparent 2.6px), … [truncated]
+   background-size: 50% 25%;
+   opacity: .8
```

#### 317. `bundles/bloxd.io/main.css` (Changed code · before: `L6659-L6661` → after: `L6765-L7652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6765-L7652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L6765-L7652) · [Before (L6659-L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6659-L6661)

```diff
- .UpdateLogPopupOuter .UpdateLogPopup {
-   background: linear-gradient(125deg, #ffb914 25%, #9b39d5 0, #9b39d5 50%, #463bd9 0, #463bd9 75%, #e34f4f 0, #e34f4f);
-   padding: .2rem
+ .SnowflakesPackBackground .SnowflakesPackBackgroundInner .SnowflakesSnowNear {
+   animation-duration: 8s, 5s;
+   background-image: radial-gradient(circle at 20% 30%, hsla(0, 0%, 100%, .95) 0 2.6px, transparent 3.6px), radial-gradient(circle at 70% 75%, hsla(0, 0%, 100%, .95) 0 2.6px, transparent 3.6px), radial-gradient(circle at 52% 10%, hsla(0, 0%, 100%, .95) 0 2.6px, transparent 3.6px);
+   background-size: 33.333% 25%;
+   filter: blur(.5px)
+ }
+ 
+ .SnowflakesPackBackground .SnowflakesPackBackgroundInner .SnowflakesCrystal {
+   aspect-ratio: 1;
+   position: absolute
+ }
+ 
+ .SnowflakesPackBackground .SnowflakesPackBackgroundInner .SnowflakesCrystal:before {
+   animation: snowflakesPulse 4s ease-in-out infinite alternate;
+   background: radial-gradient(circle, rgba(191, 227, 255, .45) 0, rgba(191, 227, 255, .12) 45%, transparent 70%);
+   border-radius: 50%;
+ ... (872 more added lines; see GitHub link above)
```

#### 318. `bundles/bloxd.io/main.css` (Changed code · before: `L6664-L6669` → after: `L7655-L7658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7655-L7658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7655-L7658) · [Before (L6664-L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6664-L6669)

```diff
- .UpdateLogPopupOuter .UpdateLogPopup .UpdateLogPopupInner {
-   background-color: #303a59;
-   border-radius: 0;
-   max-height: 80vh;
-   overflow-y: auto;
-   padding: 1rem 1.5rem
+ .TitleContainer .TitleContainerTop .Title.TitleNinetyNineNightsBundle {
+   font-size: .65em;
+   line-height: 1.1;
+   white-space: pre-line
```

#### 319. `bundles/bloxd.io/main.css` (Changed code · before: `L6672` → after: `L7661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7661) · [Before (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6672)

```diff
- .UpdateLogPopupOuter .UpdateLogPopup .UpdateLogPopupInner .UpdateLogPopupTitle {
+ .TitleContainer .TitleContainerTop .LogoContainer {
```

#### 320. `bundles/bloxd.io/main.css` (Changed code · before: `L6675-L6679` → after: `L7664-L7666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7664-L7666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7664-L7666) · [Before (L6675-L6679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6675-L6679)

```diff
-   font-size: 3rem;
-   font-weight: 700;
-   justify-content: space-between;
-   padding-bottom: 3rem;
-   text-align: start
+   justify-content: center;
+   padding-top: .1rem;
+   position: relative
```

#### 321. `bundles/bloxd.io/main.css` (Changed code · before: `L6682` → after: `L7669-L7670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7669-L7670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7669-L7670) · [Before (L6682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6682)

```diff
- .UpdateLogsContainer {
+ .TitleContainer .TitleContainerBottom {
+   align-items: center;
```

#### 322. `bundles/bloxd.io/main.css` (Changed code · before: `L6684-L6685` → after: `L7672-L7674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7672-L7674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7672-L7674) · [Before (L6684-L6685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6684-L6685)

```diff
-   flex-direction: column;
-   gap: 1rem
+   flex-wrap: wrap;
+   gap: .4rem;
+   justify-content: center
```

#### 323. `bundles/bloxd.io/main.css` (Changed code · before: `L6688-L6690` → after: `L7677-L7679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7677-L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7677-L7679) · [Before (L6688-L6690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6688-L6690)

```diff
- .UpdateLogsContainer .UpdateLog {
-   background-color: #303a59;
-   border: 1px solid #0f0f0f;
+ .TitleContainer .TitleContainerBottom .HomeTitleCcu {
+   align-items: center;
+   background-color: rgba(57, 73, 128, .45);
```

#### 324. `bundles/bloxd.io/main.css` (Changed code · before: `L6692` → after: `L7681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7681) · [Before (L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6692)

```diff
-   box-sizing: border-box;
+   color: #f2f2f2;
```

#### 325. `bundles/bloxd.io/main.css` (Changed code · before: `L6694-L6697` → after: `L7683-L7688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7683-L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7683-L7688) · [Before (L6694-L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6694-L6697)

```diff
-   gap: 2rem;
-   justify-content: space-between;
-   padding: 1rem;
-   width: 100%
+   font-size: 1.2rem;
+   font-weight: 700;
+   gap: .4rem;
+   justify-content: center;
+   padding: .1rem .7rem;
+   white-space: nowrap
```

#### 326. `bundles/bloxd.io/main.css` (Changed code · before: `L6700-L6701` → after: `L7691-L7696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7691-L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7691-L7696) · [Before (L6700-L6701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6700-L6701)

```diff
- .UpdateLogsContainer .UpdateLog:last-of-type {
-   padding-bottom: 1rem
+ .TitleContainer .TitleContainerBottom .HomeTitleCcu .HomeTitleCcuDot {
+   animation: HomeTitleCcuPulse 1.6s ease-in-out infinite;
+   background-color: #1dd06d;
+   flex-shrink: 0;
+   height: .45rem;
+   width: .45rem
```

#### 327. `bundles/bloxd.io/main.css` (Changed code · before: `L6704-L6709` → after: `L7699-L7702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7699-L7702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7699-L7702) · [Before (L6704-L6709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6704-L6709)

```diff
- .UpdateLogsContainer .UpdateLog .UpdateLeft {
-   align-items: flex-start;
-   display: flex;
-   flex: 1 0 1rem;
-   flex-direction: column;
-   gap: .2rem
+ .TitleContainer .TitleContainerBottom .HomeTitleCcu .HomeTitleCcuDot.HomeTitleCcuDotImage {
+   animation: none;
+   background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAAoAAAAAHj8pNUAAAAaZmNUTAAAAAAAAAABAAAAAQAAAAAAAAAAACgD6AAALn3WhQAAAA1JREFUeNpjkL2Q+x8ABMICWrqFBgkAAAAaZmNUTAAAAAEAAAABAAAAAQAAAAAAAAAAACgD6AAAtQ48UQAAABFmZEFUAAAAAnjaY5C9kPsPAATBAlkx … [truncated]
+   transform: translateZ(0)
```

#### 328. `bundles/bloxd.io/main.css` (Changed code · before: `L6712-L6714` → after: `L7705-L7706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7705-L7706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7705-L7706) · [Before (L6712-L6714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6712-L6714)

```diff
- .UpdateLogsContainer .UpdateLog .UpdateLeft .UpdateDate {
-   font-size: 1rem;
-   opacity: .6
+ .TitleContainer .TitleContainerBottom .HomeTitleCcu.HomeTitleCcuUnknown {
+   color: #cfcfcf
```

#### 329. `bundles/bloxd.io/main.css` (Changed code · before: `L6717-L6721` → after: `L7709-L7711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7709-L7711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7709-L7711) · [Before (L6717-L6721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6717-L6721)

```diff
- .UpdateLogsContainer .UpdateLog .UpdateLeft .UpdateTitle {
-   font-size: 2rem;
-   font-weight: 700;
-   position: relative;
-   text-align: start
+ .TitleContainer .TitleContainerBottom .HomeTitleCcu.HomeTitleCcuUnknown .HomeTitleCcuDot {
+   animation: none;
+   background: #838383
```

#### 330. `bundles/bloxd.io/main.css` (Changed code · before: `L6724` → after: `L7714-L7721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7714-L7721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7714-L7721) · [Before (L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6724)

```diff
- .UpdateLogsContainer .UpdateLog .UpdateLeft .UpdateAuthor {
+ @media(orientation:portrait) {
+   .TitleContainer .TitleContainerBottom .HomeTitleCcu {
+     font-size: 1rem;
+     padding: .1rem .5rem
+   }
+ }
+ 
+ .TitleContainer .TitleContainerBottom .SubTitleList {
```

#### 331. `bundles/bloxd.io/main.css` (Changed code · before: `L6728` → after: `L7733-L7738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7733-L7738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7733-L7738) · [Before (L6728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6728)

```diff
-   opacity: .6
+   font-weight: 700;
+   padding: .2rem .8rem;
+   text-shadow: none;
+   white-space: nowrap;
+   width: -moz-fit-content;
+   width: fit-content
```

#### 332. `bundles/bloxd.io/main.css` (Changed code · before: `L6731-L6735` → after: `L7741-L7743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7741-L7743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7741-L7743) · [Before (L6731-L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6731-L6735)

```diff
- .UpdateLogsContainer .UpdateLog .UpdateLeft .UpdateAuthor img {
-   background-color: #cfcfcf;
-   height: 2rem;
-   margin-right: .5rem;
-   width: 2rem
+ .TitleContainer .TitleContainerBottom .SubTitleList .SubTitle.StudioSubTitle {
+   background-color: #ffb914;
+   color: #000
```

#### 333. `bundles/bloxd.io/main.css` (Changed code · before: `L6738-L6742` → after: `L7746-L7755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7746-L7755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7746-L7755) · [Before (L6738-L6742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6738-L6742)

```diff
- .UpdateLogsContainer .UpdateLog .UpdateLeft .UpdateDescription {
-   font-size: 1rem;
-   padding-top: 1rem;
-   text-align: start;
-   white-space: pre-line
+ @keyframes HomeTitleCcuPulse {
+ 
+   0%,
+   to {
+     opacity: 1
+   }
+ 
+   50% {
+     opacity: .25
+   }
```

#### 334. `bundles/bloxd.io/main.css` (Changed code · before: `L6745` → after: `L7758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7758) · [Before (L6745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6745)

```diff
- .UpdateLogsContainer .UpdateLog .UpdateLeft .CallToActionButton {
+ .SocialCountBadge {
```

#### 335. `bundles/bloxd.io/main.css` (Changed code · before: `L6747` → after: `L7760-L7761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7760-L7761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7760-L7761) · [Before (L6747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6747)

```diff
-   box-shadow: none;
+   box-sizing: border-box;
+   color: #303a59;
```

#### 336. `bundles/bloxd.io/main.css` (Changed code · before: `L6749` → after: `L7763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7763) · [Before (L6749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6749)

```diff
-   font-size: 1.4rem;
+   font-size: 1rem;
```

#### 337. `bundles/bloxd.io/main.css` (Changed code · before: `L6751` → after: `L7765-L7766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7765-L7766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7765-L7766) · [Before (L6751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6751)

```diff
-   gap: .5rem;
+   gap: .25rem;
+   height: 1.6rem;
```

#### 338. `bundles/bloxd.io/main.css` (Changed code · before: `L6753` → after: `L7768-L7769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7768-L7769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7768-L7769) · [Before (L6753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6753)

```diff
-   margin-top: 1rem
+   min-width: 1.6rem;
+   padding: 0 .4rem
```

#### 339. `bundles/bloxd.io/main.css` (Changed code · before: `L6756-L6763` → after: `L7772-L7773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7772-L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7772-L7773) · [Before (L6756-L6763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6756-L6763)

```diff
- .UpdateLogsContainer .UpdateLog .UpdateRight {
-   align-items: center;
-   display: flex;
-   flex: 1 0 1rem;
-   flex-direction: column;
-   gap: 1rem;
-   justify-content: center;
-   position: relative
+ .SocialCountBadge svg {
+   font-size: .8em
```

#### 340. `bundles/bloxd.io/main.css` (Changed code · before: `L6766-L6770` → after: `L7776-L7777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7776-L7777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7776-L7777) · [Before (L6766-L6770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6766-L6770)

```diff
- .UpdateLogsContainer .UpdateLog .UpdateRight .UpdateImage {
-   align-items: center;
-   display: flex;
-   justify-content: flex-end;
-   width: 100%
+ .SocialCountBadge.SocialCountBadgeOnline {
+   background-color: #1dd06d
```

#### 341. `bundles/bloxd.io/main.css` (Changed code · before: `L6773-L6776` → after: `L7780-L7783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7780-L7783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7780-L7783) · [Before (L6773-L6776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6773-L6776)

```diff
- .UpdateLogsContainer .UpdateLog .UpdateRight .UpdateImage img {
-   border-radius: 0;
-   max-height: 30vh;
-   max-width: 100%
+ .SocialCountBadge.SocialCountBadgeRequests {
+   background-color: #e34f4f;
+   color: #fff;
+   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59
```

#### 342. `bundles/bloxd.io/main.css` (Changed code · before: `L6779-L6783` → after: `L7786-L7788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7786-L7788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7786-L7788) · [Before (L6779-L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6779-L6783)

```diff
- .UpdateLogsContainer .UpdateLog .UpdateRight .UpdateImage .UpdateYoutubeEmbed {
-   aspect-ratio: 16/9;
-   border: none;
-   border-radius: 0;
-   width: min(100%, 53.3333333333vh)
+ .SocialCountBadge.SocialCountBadgeRequests .svg-inline--fa,
+ .SocialCountBadge.SocialCountBadgeRequests.svg-inline--fa {
+   paint-order: stroke fill
```

#### 343. `bundles/bloxd.io/main.css` (Changed code · before: `L6786-L6790` → after: `L7791-L7796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7791-L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7791-L7796) · [Before (L6786-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6786-L6790)

```diff
- .HyperRankLogo {
-   display: inline-block;
-   height: 1em;
-   vertical-align: -.125em;
-   width: auto
+ .SocialCountBadge.SocialCountBadgeRequests .svg-inline--fa path:only-of-type,
+ .SocialCountBadge.SocialCountBadgeRequests.svg-inline--fa path:only-of-type {
+   stroke: #303a59;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
```

#### 344. `bundles/bloxd.io/main.css` (Changed code · before: `L6793-L6796` → after: `L7799-L7804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7799-L7804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7799-L7804) · [Before (L6793-L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6793-L6796)

```diff
- .ProfilePicture {
-   height: 1.5em;
-   position: relative;
-   width: 1.5em
+ .DailyDropPointerOutline {
+   animation: DailyDropPointerFlash .9s ease-in-out 6 alternate;
+   border: max(min(4px, .15em), 2px) solid #ffb914;
+   inset: 0;
+   pointer-events: none;
+   position: absolute
```

#### 345. `bundles/bloxd.io/main.css` (Changed code · before: `L6799-L6802` → after: `L7807-L7809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7807-L7809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7807-L7809) · [Before (L6799-L6802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6799-L6802)

```diff
- .ProfilePicture:after {
-   content: "";
-   inset: .34em 0 -.34em;
-   position: absolute
+ .DailyDropPointerOutline[data-off-screen],
+ html[data-app-covered] .WholeAppWrapper .DailyDropPointerOutline {
+   animation-play-state: paused
```

#### 346. `bundles/bloxd.io/main.css` (Changed code · before: `L6805-L6806` → after: `L7812-L7815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7812-L7815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7812-L7815) · [Before (L6805-L6806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6805-L6806)

```diff
- .ProfilePicture.ProfilePictureLoading img {
-   opacity: 0
+ @media(prefers-reduced-motion:reduce) {
+   .DailyDropPointerOutline {
+     animation: none
+   }
```

#### 347. `bundles/bloxd.io/main.css` (Changed code · before: `L6809-L6814` → after: `L7818-L7834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7818-L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7818-L7834) · [Before (L6809-L6814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6809-L6814)

```diff
- .ProfilePicture .LogoLoader {
-   font-size: .5em;
-   left: 50%;
-   position: absolute;
-   top: 50%;
-   transform: translate(-50%, -50%)
+ .DailyDropBubble {
+   align-items: center;
+   animation: 1.8s ease-in-out 3;
+   background-color: #ffb914;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   color: #22283b;
+   cursor: pointer;
+   display: flex;
+   font-size: 1.35rem;
+   font-weight: 700;
+   gap: .5rem;
+   line-height: 1;
+   padding: .3rem .8rem .3rem .3rem;
+   position: relative;
+ ... (1 more added lines; see GitHub link above)
```

#### 348. `bundles/bloxd.io/main.css` (Changed code · before: `L6817-L6826` → after: `L7837-L7851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7837-L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7837-L7851) · [Before (L6817-L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6817-L6826)

```diff
- .ProfilePicture .ProfilePictureComponent {
-   height: auto;
-   left: 0;
-   opacity: 1;
-   pointer-events: none;
-   position: absolute;
-   top: .09em;
-   transform: translateX(-22%) translateY(-22%);
-   transition: opacity .2s;
-   width: 2.75em
+ .DailyDropBubble:after,
+ .DailyDropBubble:before {
+   border-color: transparent;
+   border-style: solid;
+   content: "";
+   position: absolute
+ }
+ 
+ .DailyDropBubble .DailyDropBubbleBlock {
+   animation: DailyDropBlockHop 1.8s ease-out 3;
+   background-color: #1a1f2e;
+   border: 1px solid #0f0f0f;
+   display: flex;
+   font-size: 1.35rem;
+   padding: .1rem
```

#### 349. `bundles/bloxd.io/main.css` (Changed code · before: `L6829-L6830` → after: `L7854-L7855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7854-L7855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7854-L7855) · [Before (L6829-L6830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6829-L6830)

```diff
- .ProfilePicture .ProfilePictureComponent.ProfilePictureComponentSkin {
-   z-index: 1
+ .DailyDropBubble.DailyDropBubbleBeside {
+   animation-name: DailyDropBubbleNudgeSideways
```

#### 350. `bundles/bloxd.io/main.css` (Changed code · before: `L6833-L6834` → after: `L7858-L7863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7858-L7863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7858-L7863) · [Before (L6833-L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6833-L6834)

```diff
- .ProfilePicture .ProfilePictureComponent.ProfilePictureComponentEyes {
-   z-index: 2
+ .DailyDropBubble.DailyDropBubbleBeside:before {
+   border-right-color: #0f0f0f;
+   border-width: calc(.5rem + 1px) calc(.5rem + 1px) calc(.5rem + 1px) 0;
+   margin-top: calc(-.5rem + -1px);
+   right: calc(100% + 1px);
+   top: 50%
```

#### 351. `bundles/bloxd.io/main.css` (Changed code · before: `L6837-L6838` → after: `L7866-L7871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7866-L7871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7866-L7871) · [Before (L6837-L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6837-L6838)

```diff
- .ProfilePicture .ProfilePictureComponent.ProfilePictureComponentEyebrows {
-   z-index: 3
+ .DailyDropBubble.DailyDropBubbleBeside:after {
+   border-right-color: #ffb914;
+   border-width: .5rem .5rem .5rem 0;
+   margin-top: -.5rem;
+   right: 100%;
+   top: 50%
```

#### 352. `bundles/bloxd.io/main.css` (Changed code · before: `L6841-L6842` → after: `L7874-L7878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R7874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L7874-L7878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/main.css#L7874-L7878) · [Before (L6841-L6842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/main.css#L6841-L6842)

```diff
- .ProfilePicture .ProfilePictureComponent.ProfilePictureComponentHead {
-   z-index: 4
+ .DailyDropBubble.DailyDropBubbleBelow {
+   animation-name: DailyDropBubbleNudgeDown;
+   position: absolute;
+   right: calc(var(--daily-drop-bubble-shift, 0px)*-1);
+   top: calc(100% + var(--daily-drop-bubble-clear, 0px) + .8rem)
```
