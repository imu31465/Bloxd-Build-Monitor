# Changed — Bundle Modifications Report (Part 150 / 154)

- **Updated at**: `2026-11-27T02:11 JST`
- **Part**: `150 / 154` (**432** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 149](part-149.md) · [Part 151 →](part-151.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorker.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorker.js` (1162 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032)

#### 1133. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12289-L12290` → after: `L12289-L12290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12289-L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12289-L12290) · [Before (L12289-L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12289-L12290)

```diff
-     if (void 0 === (0, OB.H)(LH, BH)) throw new Error(`Custom world-gen cave decoration blockName "${LH}" not found in blockMetadata`);
-     if (!AH && !rH && !SH) throw new Error(`Custom world-gen cave decoration "${LH}" must allow at least one of floor/walls/ceiling anchoring`);
+     if (void 0 === (0, UO.J)(GB, OB)) throw new Error(`Custom world-gen cave decoration blockName "${GB}" not found in blockMetadata`);
+     if (!YB && !DB && !QB) throw new Error(`Custom world-gen cave decoration "${GB}" must allow at least one of floor/walls/ceiling anchoring`);
```

#### 1134. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12293-L12294` → after: `L12293-L12294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12293-L12294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12293-L12294) · [Before (L12293-L12294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12293-L12294)

```diff
-     if (SH && oB(LH, "meta|rot1|top", BH), IB(HH.Mr, LH, "Mr"), IB(HH.vr, LH, "vr"), !Number.isInteger(HH.Pr) || HH.Pr < 0) throw new Error(`Custom world-gen cave decoration "${LH}" minPlacements must be a non-negative integer, got ${HH.Pr}`);
-     if (!(0, OB.M)(HH.Tr) && (IB(HH.Tr.Vr, LH, "depthRamp.deepClusterChance"), HH.Tr.br <= HH.Tr.kr)) throw new Error(`Custom world-gen cave decoration "${LH}" deepY must be strictly smaller than shallowY, but ${HH.Tr.br} <= ${HH.Tr.kr} `)
+     if (QB && KO(GB, "meta|rot1|top", OB), uO(BB.xD, GB, "xD"), uO(BB.tD, GB, "tD"), !Number.isInteger(BB.BQ) || BB.BQ < 0) throw new Error(`Custom world-gen cave decoration "${GB}" minPlacements must be a non-negative integer, got ${BB.BQ}`);
+     if (!(0, UO.Q)(BB.OQ) && (uO(BB.OQ.YQ, GB, "depthRamp.deepClusterChance"), BB.OQ.DQ <= BB.OQ.QQ)) throw new Error(`Custom world-gen cave decoration "${GB}" deepY must be strictly smaller than shallowY, but ${BB.OQ.DQ} <= ${BB.OQ.QQ} `)
```

#### 1135. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12298-L12299` → after: `L12298-L12299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12298-L12299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12298-L12299) · [Before (L12298-L12299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12298-L12299)

```diff
-     const AH = `${HH}|${BH}`;
-     if (void 0 === (0, OB.H)(AH, LH)) throw new Error(`Custom world-gen cave decoration "${HH}" is missing directional variant "${AH}" required for wall/ceiling anchoring`)
+     const YB = `${BB}|${OB}`;
+     if (void 0 === (0, UO.J)(YB, GB)) throw new Error(`Custom world-gen cave decoration "${BB}" is missing directional variant "${YB}" required for wall/ceiling anchoring`)
```

#### 1136. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12303` → after: `L12303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12303) · [Before (L12303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12303)

```diff
-     if (HH < 0 || HH > 1) throw new Error(`Custom world-gen cave decoration "${BH}" ${LH} must be in [0, 1], got ${HH}`)
+     if (BB < 0 || BB > 1) throw new Error(`Custom world-gen cave decoration "${OB}" ${GB} must be in [0, 1], got ${BB}`)
```

#### 1137. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12307-L12313` → after: `L12307-L12313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12307-L12313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12307-L12313) · [Before (L12307-L12313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12307-L12313)

```diff
-     if (HH.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${HH.frequency}`);
-     if (void 0 === (0, OB.H)(HH.lr, BH)) throw new Error(`Custom world-gen biome topsoilBlock "${HH.lr}" not found in blockMetadata`);
-     if (void 0 === (0, OB.H)(HH.Kr, BH)) throw new Error(`Custom world-gen biome lowsoilBlock "${HH.Kr}" not found in blockMetadata`);
-     if (0 === HH.cr.length) throw new Error("Custom world-gen biome must have at least one stoneType");
-     for (const LH of HH.cr) {
-       if (LH.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${LH.frequency}`);
-       if (void 0 === (0, OB.H)(LH.blockName, BH)) throw new Error(`Custom world-gen biome stoneType blockName "${LH.blockName}" not found in blockMetadata`)
+     if (BB.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${BB.frequency}`);
+     if (void 0 === (0, UO.J)(BB.yQ, OB)) throw new Error(`Custom world-gen biome topsoilBlock "${BB.yQ}" not found in blockMetadata`);
+     if (void 0 === (0, UO.J)(BB.JQ, OB)) throw new Error(`Custom world-gen biome lowsoilBlock "${BB.JQ}" not found in blockMetadata`);
+     if (0 === BB.MQ.length) throw new Error("Custom world-gen biome must have at least one stoneType");
+     for (const GB of BB.MQ) {
+       if (GB.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${GB.frequency}`);
+       if (void 0 === (0, UO.J)(GB.blockName, OB)) throw new Error(`Custom world-gen biome stoneType blockName "${GB.blockName}" not found in blockMetadata`)
```

#### 1138. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12318-L12322` → after: `L12318-L12322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12318-L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12318-L12322) · [Before (L12318-L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12318-L12322)

```diff
-     if (void 0 === (0, OB.H)(HH.blockName, BH)) throw new Error(`Custom world-gen ore blockName "${HH.blockName}" not found in blockMetadata`);
-     if (HH.radius < 0) throw new Error(`Custom world-gen ore "${HH.blockName}" radius must be >= 0, got ${HH.radius}`);
-     if (HH.Nr <= 0) throw new Error(`Custom world-gen ore "${HH.blockName}" minDistBetweenDeposits must be > 0, got ${HH.Nr}`);
-     if (HH.Sr > HH.hr) throw new Error(`Custom world-gen ore "${HH.blockName}" minY (${HH.Sr}) must be <= maxY (${HH.hr})`);
-     if (HH.Rr < 0 || HH.Rr > 1) throw new Error(`Custom world-gen ore "${HH.blockName}" spawnChance must be in [0, 1], got ${HH.Rr}`)
+     if (void 0 === (0, UO.J)(BB.blockName, OB)) throw new Error(`Custom world-gen ore blockName "${BB.blockName}" not found in blockMetadata`);
+     if (BB.radius < 0) throw new Error(`Custom world-gen ore "${BB.blockName}" radius must be >= 0, got ${BB.radius}`);
+     if (BB.qQ <= 0) throw new Error(`Custom world-gen ore "${BB.blockName}" minDistBetweenDeposits must be > 0, got ${BB.qQ}`);
+     if (BB.XD > BB.wD) throw new Error(`Custom world-gen ore "${BB.blockName}" minY (${BB.XD}) must be <= maxY (${BB.wD})`);
+     if (BB.ZQ < 0 || BB.ZQ > 1) throw new Error(`Custom world-gen ore "${BB.blockName}" spawnChance must be in [0, 1], got ${BB.ZQ}`)
```

#### 1139. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12328-L12331` → after: `L12328-L12331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12328-L12331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12328-L12331) · [Before (L12328-L12331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12328-L12331)

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

#### 1140. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12336-L12339` → after: `L12336-L12339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12336-L12339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12336-L12339) · [Before (L12336-L12339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12336-L12339)

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

#### 1141. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12343-L12346` → after: `L12343-L12346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12343-L12346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12343-L12346) · [Before (L12343-L12346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12343-L12346)

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

#### 1142. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12350` → after: `L12350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12350) · [Before (L12350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12350)

```diff
-       Dr: null
+       AQ: null
```

#### 1143. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12353` → after: `L12353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12353) · [Before (L12353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12353)

```diff
-     [KB]: () => LH(40941).d
+     [FO]: () => GB(40694).b
```

#### 1144. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12377` → after: `L12377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12377) · [Before (L12377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12377)

```diff
-       if (!dB.includes(BH)) throw new Error(`Invalid port offset "${HH}". Must be one of: ${dB.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
+       if (!bO.includes(OB)) throw new Error(`Invalid port offset "${BB}". Must be one of: ${bO.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
```

#### 1145. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12455` → after: `L12455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12455) · [Before (L12455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12455)

```diff
-     const BH = DB() ? iB : pB;
+     const OB = aO() ? sO : xO;
```

#### 1146. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12864` → after: `L12864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12864) · [Before (L12864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12864)

```diff
-     if (rL.has(HH)) throw new Error(`Duplicate leave code: ${HH}`);
+     if (DG.has(BB)) throw new Error(`Duplicate leave code: ${BB}`);
```

#### 1147. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12887` → after: `L12887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12887) · [Before (L12887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12887)

```diff
-     return HH === BH ? SH + AH * AH <= HH * HH : HH > BH ? Math.abs(AH) <= BH && SH + AH * AH <= HH * HH : SH <= HH * HH && SH + AH * AH <= BH * BH
+     return BB === OB ? QB + YB * YB <= BB * BB : BB > OB ? Math.abs(YB) <= OB && QB + YB * YB <= BB * BB : QB <= BB * BB && QB + YB * YB <= OB * OB
```

#### 1148. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12905` → after: `L12905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12905) · [Before (L12905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12905)

```diff
-     const HH = Promise.all([LH.e(84), LH.e(87), LH.e(85), LH.e(86), LH.e(81)]).then((() => LH(41064))).then((HH => {
+     const BB = Promise.all([GB.e(84), GB.e(87), GB.e(85), GB.e(86), GB.e(81)]).then((() => GB(40790))).then((BB => {
```

#### 1149. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12948` → after: `L12948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12948) · [Before (L12948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12948)

```diff
-               reason: `its memory stats trapped (${String(BH)})`
+               reason: `its memory stats trapped (${String(OB)})`
```

#### 1150. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12954` → after: `L12954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12954) · [Before (L12954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12954)

```diff
-               const LH = zH.eW();
+               const GB = yB.gZ();
```

#### 1151. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12957` → after: `L12957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12957) · [Before (L12957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12957)

```diff
-                 return String.fromCharCode(...new Uint8Array(fH().buffer, HH.qW(), 32))
+                 return String.fromCharCode(...new Uint8Array(mB().buffer, BB.rZ(), 32))
```

#### 1152. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12970` → after: `L12970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12970) · [Before (L12970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12970)

```diff
-               hH = WH.xX, XH = new Uint16Array(hH * hH * hH),
+               oB = ZB.pP, PB = new Uint16Array(oB * oB * oB),
```

#### 1153. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12979` → after: `L12979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12979) · [Before (L12979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12979)

```diff
-                           reason: `the memory ceiling was not set (${String(AH)})`
+                           reason: `the memory ceiling was not set (${String(YB)})`
```

#### 1154. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12983` → after: `L12983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12983) · [Before (L12983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12983)

```diff
-                         zH = new(VB().KW)
+                         yB = new(nO().iZ)
```

#### 1155. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12987` → after: `L12987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12987) · [Before (L12987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12987)

```diff
-                           reason: `GeneratedChunkEncoder did not start (${String(AH)})`
+                           reason: `GeneratedChunkEncoder did not start (${String(YB)})`
```

#### 1156. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12997` → after: `L12997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12997) · [Before (L12997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12997)

```diff
-                           reason: `${EL} (${String(BH)})`
+                           reason: `${MG} (${String(OB)})`
```

#### 1157. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13002` → after: `L13002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13002) · [Before (L13002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13002)

```diff
-                       reason: `wasm did not start (${oH()})`
+                       reason: `wasm did not start (${KB()})`
```

#### 1158. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13006` → after: `L13006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13006) · [Before (L13006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13006)

```diff
-                     reason: `chunk size ${hH} is not the encoder's 32`
+                     reason: `chunk size ${oB} is not the encoder's 32`
```

#### 1159. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13017` → after: `L13017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13017) · [Before (L13017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13017)

```diff
-                 CH = new bB(hH, tH.blockMetadata, tH.itemMetadata, HH.yA, !1, HH.Hr, HH.Lr, AH, QH)
+                 JB = new fO(oB, jB.blockMetadata, jB.itemMetadata, BB.uD, !1, BB.mD, BB.LD, YB, qB)
```

#### 1160. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13042` → after: `L13042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13042) · [Before (L13042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13042)

```diff
-                     const LH = HH.gW(),
+                     const GB = BB.XZ(),
```

#### 1161. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13044` → after: `L13044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13044) · [Before (L13044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13044)

```diff
-                       rH = BH.byteLength >= AH ? BH : new ArrayBuffer(AH),
+                       DB = OB.byteLength >= YB ? OB : new ArrayBuffer(YB),
```

#### 1162. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13047` → after: `L13047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13047) · [Before (L13047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13047)

```diff
-                     return hH.set(new Uint8Array(SH, HH.qW(), nB)), hH.set(new Uint8Array(SH, HH.NW(), LH), nB), {
+                     return oB.set(new Uint8Array(QB, BB.rZ(), cO)), oB.set(new Uint8Array(QB, BB.wZ(), GB), cO), {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79)

#### 1. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L4)

```diff
-   37297: (HH, BH, LH) => {
+   37085: (BB, OB, GB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L6)

```diff
-       b: () => rH
+       d: () => DB
```

#### 3. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L44)

```diff
-           if (BH > 0 && LH.searchParams.set("cache-bust", `${Date.now()}-${BH}`), await this.fetchWhole(LH, HH)) return this.scriptUrl = LH, !0;
+           if (OB > 0 && GB.searchParams.set("cache-bust", `${Date.now()}-${OB}`), await this.fetchWhole(GB, BB)) return this.scriptUrl = GB, !0;
```

#### 4. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L86)

```diff
-   54598: (HH, BH, LH) => {
+   54103: (BB, OB, GB) => {
```

#### 5. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L94` → after: `L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L94) · [Before (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L94)

```diff
-     const AH = new(LH(37297).b)(new URL(LH.p + LH.u(82), LH.b), {
+     const YB = new(GB(37085).d)(new URL(GB.p + GB.u(82), GB.b), {
```

## `bloxd.io` · `bundles/bloxd.io/main.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec)

- **File**: `bundles/bloxd.io/main.js` (1758 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 1. `bundles/bloxd.io/main.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L1)

```diff
- /*! For license information please see cwj32u.main.ae3e40c2.js.LICENSE.txt */
+ /*! For license information please see gw4e3a.main.937868ec.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/main.js` (Changed code · before: `L3` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L3) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L3)

```diff
-     var HH = [, , , , , , , , , , (HH, BH, LH) => {
+     var BB = [, , , , , , (BB, OB, GB) => {
```

#### 3. `bundles/bloxd.io/main.js` (Changed code · before: `L5-L7` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5) · [Before (L5-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5-L7)

```diff
-             $: () => PH,
-             B: () => XH,
-             E: () => lH,
+             C: () => PB,
```

#### 4. `bundles/bloxd.io/main.js` (Changed code · before: `L9-L11` → after: `L7-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7-L9) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L9-L11)

```diff
-             H: () => nH,
-             J: () => UH,
-             K: () => GH,
+             I: () => dB,
+             L: () => cB,
+             M: () => SB,
```

#### 5. `bundles/bloxd.io/main.js` (Changed code · before: `L13` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L11) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L13)

```diff
-             R: () => KH,
+             P: () => VB,
```

#### 6. `bundles/bloxd.io/main.js` (Changed code · before: `L17` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L15) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L17)

```diff
-             cb: () => CH,
+             ab: () => WB,
```

#### 7. `bundles/bloxd.io/main.js` (Changed code · before: `L19-L20` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L17) · [Before (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L19-L20)

```diff
-             db: () => IH,
-             gb: () => AH,
+             eb: () => AB,
```

#### 8. `bundles/bloxd.io/main.js` (Changed code · before: `L23` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23)

```diff
-             k: () => QH,
+             jb: () => uB,
```

#### 9. `bundles/bloxd.io/main.js` (Changed code · before: `L25-L28` → after: `L24-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24-L28) · [Before (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25-L28)

```diff
-             o: () => zH,
-             s: () => xH,
-             u: () => FH,
-             x: () => rH,
+             mb: () => YB,
+             p: () => yB,
+             t: () => RB,
+             v: () => hB,
+             w: () => DB,
```

#### 10. `bundles/bloxd.io/main.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L141)

```diff
-         }, , , (HH, BH, LH) => {
+         }, , (BB, OB, GB) => {
```

#### 11. `bundles/bloxd.io/main.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L143)

```diff
-             d: () => tH
+             b: () => jB
```

#### 12. `bundles/bloxd.io/main.js` (Changed code · before: `L145-L146` → after: `L145-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L145-L146) · [Before (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L145-L146)

```diff
-           var AH = LH(15),
-             rH = LH(729);
+           var YB = GB(16),
+             DB = GB(758);
```

#### 13. `bundles/bloxd.io/main.js` (Changed code · before: `L172` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L172) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L172)

```diff
-         }, , (HH, BH, LH) => {
+         }, , , , , , , , (BB, OB, GB) => {
```

#### 14. `bundles/bloxd.io/main.js` (Changed code · before: `L176-L178` → after: `L176-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L176-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L176-L178) · [Before (L176-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L176-L178)

```diff
-             j: () => xB,
-             l: () => MB,
-             m: () => PB
+             k: () => RO,
+             m: () => NO,
+             o: () => AO
```

#### 15. `bundles/bloxd.io/main.js` (Changed code · before: `L180-L185` → after: `L180-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L180-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L180-L185) · [Before (L180-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L180-L185)

```diff
-           var AH, rH, SH, hH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH, MH, xH, vH, PH, TH, UH, VH, OH, bH, kH, mH, oH, IH, fH, lH, KH, cH, eH, qH, gH, NH = LH(18),
-             RH = LH(304),
-             jH = LH(317),
-             nH = LH(30),
-             FH = LH(40),
-             DH = LH(22),
+           var YB, DB, QB, oB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB, NB, RB, WB, AB, VB, SB, nB, UB, fB, kB, dB, KB, uB, mB, IB, FB, iB, LB, gB, rB, XB = GB(25),
+             wB = GB(331),
+             EB = GB(353),
+             cB = GB(31),
+             hB = GB(52),
+             aB = GB(29),
```

#### 16. `bundles/bloxd.io/main.js` (Changed code · before: `L187-L200` → after: `L187-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L187-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L187-L200) · [Before (L187-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L187-L200)

```diff
-             ZH = LH(45),
-             dH = LH(69),
-             aH = LH(81),
-             sH = LH(229),
-             JH = LH(291),
-             iH = LH(293),
-             pH = LH(628),
-             yH = LH(105),
-             HB = LH(635),
-             BB = LH(642),
-             LB = LH(277),
-             AB = LH(692),
-             rB = LH(701),
-             SB = LH(703);
+             TB = GB(56),
+             bB = GB(70),
+             CB = GB(92),
+             HB = GB(248),
+             vB = GB(311),
+             sB = GB(320),
+             xB = GB(649),
+             tB = GB(113),
+             BO = GB(656),
+             OO = GB(662),
+             GO = GB(286),
+             YO = GB(729),
+             DO = GB(738),
+             QO = GB(747);
```

#### 17. `bundles/bloxd.io/main.js` (Changed code · before: `L204-L210` → after: `L204-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L204-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L204-L210) · [Before (L204-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L204-L210)

```diff
-             if (HB.g) return "webgl_holdback";
-             if (!0 === nH.e.getItem(yH.L)) return "old_intel_driver";
-             if (HB.h && !0 === nH.e.getItem(yH.K)) return "intel_gen9";
-             if (BB.K && (0, HB.e)(nH.e.getItem(yH.I))) return "gpu_class_webgl";
-             if (BB.K && !0 === nH.e.getItem(yH.R)) return "gpu_wasm_arm";
-             const HH = BB.K ? null : (0, HB.j)();
-             return 26 === HH && (0, HB.m)((0, LB.d)()) ? "safari_26" : 27 === HH && (0, HB.p)((0, LB.d)()) ? "safari_27" : (0, iH.x)() ? "off_after_loss" : null
+             if (BO.f) return "webgl_holdback";
+             if (!0 === cB.g.getItem(tB.J)) return "old_intel_driver";
+             if (BO.g && !0 === cB.g.getItem(tB.F)) return "intel_gen9";
+             if (OO.D && (0, BO.c)(cB.g.getItem(tB.D))) return "gpu_class_webgl";
+             if (OO.D && !0 === cB.g.getItem(tB.Q)) return "gpu_wasm_arm";
+             const BB = OO.D ? null : (0, BO.i)();
+             return 26 === BB && (0, BO.l)((0, GO.d)()) ? "safari_26" : 27 === BB && (0, BO.n)((0, GO.d)()) ? "safari_27" : (0, sB.y)() ? "off_after_loss" : null
```

#### 18. `bundles/bloxd.io/main.js` (Changed code · before: `L214` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L214) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L214)

```diff
-             return HB.t && null === tB()
+             return BO.q && null === jO()
```

#### 19. `bundles/bloxd.io/main.js` (Changed code · before: `L217-L218` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L217-L218) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L217-L218)

```diff
-           const EB = HB.t && null === CB;
-           let XB = null === nH.e.getItem(RH.zc);
+           const MO = BO.q && null === JO;
+           let PO = null === cB.g.getItem(wB.nc);
```

#### 20. `bundles/bloxd.io/main.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L232)

```diff
-             musicVolume: null !== (AH = nH.e.getItem("musicVol")) && void 0 !== AH ? AH : .5,
+             musicVolume: null !== (YB = cB.g.getItem("musicVol")) && void 0 !== YB ? YB : .5,
```

#### 21. `bundles/bloxd.io/main.js` (Changed code · before: `L247-L248` → after: `L247-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L247-L248) · [Before (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L247-L248)

```diff
-               const HH = nH.e.getItem("showDistantNametags");
-               return "boolean" === typeof HH ? HH : null
+               const BB = cB.g.getItem("showDistantNametags");
+               return "boolean" === typeof BB ? BB : null
```

#### 22. `bundles/bloxd.io/main.js` (Changed code · before: `L263-L264` → after: `L263-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L263-L264) · [Before (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L263-L264)

```diff
-             showDebugOverlay: null !== (rH = nH.e.getItem("showDebugOverlay")) && void 0 !== rH && rH,
-             enabledDebugFeatures: null !== (SH = nH.e.getItem("enabledDebugFeatures")) && void 0 !== SH ? SH : {},
+             showDebugOverlay: null !== (DB = cB.g.getItem("showDebugOverlay")) && void 0 !== DB && DB,
+             enabledDebugFeatures: null !== (QB = cB.g.getItem("enabledDebugFeatures")) && void 0 !== QB ? QB : {},
```

#### 23. `bundles/bloxd.io/main.js` (Changed code · before: `L274-L277` → after: `L274-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L274-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L274-L277) · [Before (L274-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L274-L277)

```diff
-               useProfanityFilter: null === (hH = nH.e.getItem("UseProfanityFilter")) || void 0 === hH || hH,
-               showChat: null === (tH = nH.e.getItem("showChat")) || void 0 === tH || tH,
-               showNewItemIndicator: null === (zH = nH.e.getItem("showNewItemIndicator")) || void 0 === zH || zH,
-               showFriendOnlineToasts: null === (CH = nH.e.getItem("showFriendOnlineToasts")) || void 0 === CH || CH,
+               useProfanityFilter: null === (oB = cB.g.getItem("UseProfanityFilter")) || void 0 === oB || oB,
+               showChat: null === (jB = cB.g.getItem("showChat")) || void 0 === jB || jB,
+               showNewItemIndicator: null === (yB = cB.g.getItem("showNewItemIndicator")) || void 0 === yB || yB,
+               showFriendOnlineToasts: null === (JB = cB.g.getItem("showFriendOnlineToasts")) || void 0 === JB || JB,
```

#### 24. `bundles/bloxd.io/main.js` (Changed code · before: `L280-L281` → after: `L280-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L280-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L280-L281) · [Before (L280-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L280-L281)

```diff
-                 const BH = nH.e.getItem("friendRequestNotifications");
-                 return null !== (HH = AB.b.find((HH => HH === BH))) && void 0 !== HH ? HH : "toastAndTray"
+                 const OB = cB.g.getItem("friendRequestNotifications");
+                 return null !== (BB = YO.d.find((BB => BB === OB))) && void 0 !== BB ? BB : "toastAndTray"
```

#### 25. `bundles/bloxd.io/main.js` (Changed code · before: `L283-L301` → after: `L283-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L283-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L283-L301) · [Before (L283-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L283-L301)

```diff
-               touchscreenSensitivity: null !== (EH = nH.e.getItem("touchscreenSensitivity")) && void 0 !== EH ? EH : 150,
-               mouseSensitivity: null !== (XH = nH.e.getItem("mouseSensitivity")) && void 0 !== XH ? XH : 15,
-               showCoordinates: null !== (GH = nH.e.getItem("showCoordinates")) && void 0 !== GH && GH,
-               showChunkCoordinates: null !== (YH = nH.e.getItem("showChunkCoordinates")) && void 0 !== YH && YH,
-               showFPS: null !== (uH = nH.e.getItem("showFPS")) && void 0 !== uH && uH,
-               disableBunnyHopping: null !== (QH = nH.e.getItem("disableBunnyHopping")) && void 0 !== QH && QH,
-               disableTexAtlas: null !== (WH = nH.e.getItem("disableTexAtlas")) && void 0 !== WH && WH,
-               disableFullscreen: null !== (MH = nH.e.getItem("disableFullscreen")) && void 0 !== MH && MH,
-               ezBridging: null === (xH = nH.e.getItem("ezBridging")) || void 0 === xH || xH,
-               ezTowering: null === (vH = nH.e.getItem("ezTowering")) || void 0 === vH || vH,
-               crouchIsToggle: null !== (PH = nH.e.getItem("crouchIsToggle")) && void 0 !== PH && PH,
-               vibration: null === (TH = nH.e.getItem("vibration")) || void 0 === TH || TH,
-               hideUiIsToggle: null !== (UH = nH.e.getItem("hideUiIsToggle")) && void 0 !== UH && UH,
-               enableLighting: null !== (VH = nH.e.getItem("enableLighting")) && void 0 !== VH && VH,
-               showFog: null !== (OH = nH.e.getItem("showFog")) && void 0 !== OH && OH,
-               fogChunkDistance: null !== (bH = nH.e.getItem("fogChunkDistance")) && void 0 !== bH ? bH : 2,
- ... (3 more removed lines; see GitHub link above)
+               touchscreenSensitivity: null !== (MB = cB.g.getItem("touchscreenSensitivity")) && void 0 !== MB ? MB : 150,
+               mouseSensitivity: null !== (PB = cB.g.getItem("mouseSensitivity")) && void 0 !== PB ? PB : 15,
+               showCoordinates: null !== (zB = cB.g.getItem("showCoordinates")) && void 0 !== zB && zB,
+               showChunkCoordinates: null !== (lB = cB.g.getItem("showChunkCoordinates")) && void 0 !== lB && lB,
+               showFPS: null !== (pB = cB.g.getItem("showFPS")) && void 0 !== pB && pB,
+               disableBunnyHopping: null !== (qB = cB.g.getItem("disableBunnyHopping")) && void 0 !== qB && qB,
+               disableTexAtlas: null !== (ZB = cB.g.getItem("disableTexAtlas")) && void 0 !== ZB && ZB,
+               disableFullscreen: null !== (NB = cB.g.getItem("disableFullscreen")) && void 0 !== NB && NB,
+               ezBridging: null === (RB = cB.g.getItem("ezBridging")) || void 0 === RB || RB,
+               ezTowering: null === (WB = cB.g.getItem("ezTowering")) || void 0 === WB || WB,
+               crouchIsToggle: null !== (AB = cB.g.getItem("crouchIsToggle")) && void 0 !== AB && AB,
+               vibration: null === (VB = cB.g.getItem("vibration")) || void 0 === VB || VB,
+               hideUiIsToggle: null !== (SB = cB.g.getItem("hideUiIsToggle")) && void 0 !== SB && SB,
+               enableLighting: null !== (nB = cB.g.getItem("enableLighting")) && void 0 !== nB && nB,
+               showFog: null !== (UB = cB.g.getItem("showFog")) && void 0 !== UB && UB,
+               fogChunkDistance: null !== (fB = cB.g.getItem("fogChunkDistance")) && void 0 !== fB ? fB : 2,
+ ... (3 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/main.js` (Changed code · before: `L305-L312` → after: `L305-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L305-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L305-L312) · [Before (L305-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L305-L312)

```diff
-               useWebGpu: null !== (IH = nH.e.getItem(RH.zc)) && void 0 !== IH ? IH : EB,
-               pixelScale: null !== (fH = nH.e.getItem("pixelScale")) && void 0 !== fH ? fH : (0, aH.getDeviceDefaultPixelScale)(),
-               pixelSmoothing: null === (lH = nH.e.getItem("pixelSmoothing")) || void 0 === lH || lH,
-               showChunkBorders: null !== (KH = nH.e.getItem("showChunkBorders")) && void 0 !== KH && KH,
-               showWeaponRaycasts: null !== (cH = nH.e.getItem("showWeaponRaycasts")) && void 0 !== cH && cH,
-               chunkFadeIn: null === (eH = nH.e.getItem("chunkFadeIn")) || void 0 === eH || eH,
-               enableClipping: null !== (qH = nH.e.getItem("enableClipping")) && void 0 !== qH && qH,
-               clipDurationSeconds: null !== (gH = nH.e.getItem("clipDurationSeconds")) && void 0 !== gH ? gH : rB.g,
+               useWebGpu: null !== (uB = cB.g.getItem(wB.nc)) && void 0 !== uB ? uB : MO,
+               pixelScale: null !== (mB = cB.g.getItem("pixelScale")) && void 0 !== mB ? mB : (0, CB.getDeviceDefaultPixelScale)(),
+               pixelSmoothing: null === (IB = cB.g.getItem("pixelSmoothing")) || void 0 === IB || IB,
+               showChunkBorders: null !== (FB = cB.g.getItem("showChunkBorders")) && void 0 !== FB && FB,
+               showWeaponRaycasts: null !== (iB = cB.g.getItem("showWeaponRaycasts")) && void 0 !== iB && iB,
+               chunkFadeIn: null === (LB = cB.g.getItem("chunkFadeIn")) || void 0 === LB || LB,
+               enableClipping: null !== (gB = cB.g.getItem("enableClipping")) && void 0 !== gB && gB,
+               clipDurationSeconds: null !== (rB = cB.g.getItem("clipDurationSeconds")) && void 0 !== rB ? rB : DO.c,
```

#### 27. `bundles/bloxd.io/main.js` (Changed code · before: `L320` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L320) · [Before (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L320)

```diff
-             const LH = null !== (BH = nH.e.getItem(JH.c)) && void 0 !== BH ? BH : (0, sH.k)();
+             const GB = null !== (OB = cB.g.getItem(vB.c)) && void 0 !== OB ? OB : (0, HB.g)();
```

#### 28. `bundles/bloxd.io/main.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L330)

```diff
-             return null !== nH.e.getItem(JH.c)
+             return null !== cB.g.getItem(vB.c)
```

#### 29. `bundles/bloxd.io/main.js` (Changed code · before: `L336` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L336) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L336)

```diff
-               for (const BH in HH) NH.k.AX(`appManagerUpdated|${BH}`, HH[BH])
+               for (const OB in BB) XB.o.tM(`appManagerUpdated|${OB}`, BB[OB])
```

#### 30. `bundles/bloxd.io/main.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L350)

```diff
-               for (const SH in HH)(0, jH.ne)(GB[SH], HH[SH]) || (BH[SH] = HH[SH], LH = !0);
+               for (const QB in BB)(0, EB.Fe)(zO[QB], BB[QB]) || (OB[QB] = BB[QB], GB = !0);
```

#### 31. `bundles/bloxd.io/main.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L357)

```diff
-                 nH.e.setItem("UseProfanityFilter", HH.useProfanityFilter), nH.e.setItem("showChat", HH.showChat), nH.e.setItem("showNewItemIndicator", HH.showNewItemIndicator), nH.e.setItem("showFriendOnlineToasts", HH.showFriendOnlineToasts), nH.e.setItem("friendRequestNotificat … [truncated]
+                 cB.g.setItem("UseProfanityFilter", BB.useProfanityFilter), cB.g.setItem("showChat", BB.showChat), cB.g.setItem("showNewItemIndicator", BB.showNewItemIndicator), cB.g.setItem("showFriendOnlineToasts", BB.showFriendOnlineToasts), cB.g.setItem("friendRequestNotificat … [truncated]
```

#### 32. `bundles/bloxd.io/main.js` (Changed code · before: `L359` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L359) · [Before (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L359)

```diff
-               void 0 !== BH.soundVolume && nH.e.setItem("soundVol", BH.soundVolume), void 0 !== BH.musicVolume && nH.e.setItem("musicVol", BH.musicVolume), void 0 !== BH.showDistantNametags && nH.e.setItem("showDistantNametags", BH.showDistantNametags), void 0 !== BH.showDebugOve … [truncated]
+               void 0 !== OB.soundVolume && cB.g.setItem("soundVol", OB.soundVolume), void 0 !== OB.musicVolume && cB.g.setItem("musicVol", OB.musicVolume), void 0 !== OB.showDistantNametags && cB.g.setItem("showDistantNametags", OB.showDistantNametags), void 0 !== OB.showDebugOve … [truncated]
```

#### 33. `bundles/bloxd.io/main.js` (Changed code · before: `L371` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L371) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L371)

```diff
-                 openEverythingMenuName: RH.o.SETTINGS,
+                 openEverythingMenuName: wB.p.SETTINGS,
```

#### 34. `bundles/bloxd.io/main.js` (Changed code · before: `L376-L377` → after: `L376-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L376-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L376-L377) · [Before (L376-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L376-L377)

```diff
-               const BH = uB() ? null : (0, sH.e)(HH);
-               return null !== BH && void 0 !== BH ? BH : GB.clientEscMenuOptions.antiAliasing
+               const OB = pO() ? null : (0, HB.b)(BB);
+               return null !== OB && void 0 !== OB ? OB : zO.clientEscMenuOptions.antiAliasing
```

#### 35. `bundles/bloxd.io/main.js` (Changed code · before: `L380-L381` → after: `L380-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L380-L381) · [Before (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L380-L381)

```diff
-               (0, sH.i)(HH);
-               const BH = uB() ? GB.clientEscMenuOptions.antiAliasing : (0, sH.k)();
+               (0, HB.f)(BB);
+               const OB = pO() ? zO.clientEscMenuOptions.antiAliasing : (0, HB.g)();
```

#### 36. `bundles/bloxd.io/main.js` (Changed code · before: `L405` → after: `L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L405) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L405)

```diff
-               let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, iH.m)(),
+               let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, sB.p)(),
```

#### 37. `bundles/bloxd.io/main.js` (Changed code · before: `L408-L409` → after: `L408-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L408-L409) · [Before (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L408-L409)

```diff
-               const AH = (0, iH.u)(HH, BH, LH);
-               return (0, iH.x)() && !0 === nH.e.getItem(RH.zc) && nH.e.removeItem(RH.zc), AH
+               const YB = (0, sB.v)(BB, OB, GB);
+               return (0, sB.y)() && !0 === cB.g.getItem(wB.nc) && cB.g.removeItem(wB.nc), YB
```

#### 38. `bundles/bloxd.io/main.js` (Changed code · before: `L412` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L412) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L412)

```diff
-               (0, pH.b)(HH) && (0, iH.x)() && XB && GB.clientEscMenuOptions.useWebGpu && (CB = tB(), this.setEscMenuOptionsUnstored({
+               (0, xB.b)(BB) && (0, sB.y)() && PO && zO.clientEscMenuOptions.useWebGpu && (JO = jO(), this.setEscMenuOptionsUnstored({
```

#### 39. `bundles/bloxd.io/main.js` (Changed code · before: `L420` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L420) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L420)

```diff
-               return (0, iH.E)() || !0 === nH.e.getItem(yH.L)
+               return (0, sB.E)() || !0 === cB.g.getItem(tB.J)
```

#### 40. `bundles/bloxd.io/main.js` (Changed code · before: `L423` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L423) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L423)

```diff
-               return (0, iH.x)()
+               return (0, sB.y)()
```

#### 41. `bundles/bloxd.io/main.js` (Changed code · before: `L426` → after: `L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L426) · [Before (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L426)

```diff
-               return XB ? CB : null
+               return PO ? JO : null
```

#### 42. `bundles/bloxd.io/main.js` (Changed code · before: `L429` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L429) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L429)

```diff
-               !0 === nH.e.getItem(yH.L) && (0, aH.hasUsableWebGpuAdapter)()
+               !0 === cB.g.getItem(tB.J) && (0, CB.hasUsableWebGpuAdapter)()
```

#### 43. `bundles/bloxd.io/main.js` (Changed code · before: `L473` → after: `L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L473) · [Before (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L473)

```diff
-         }, , , (HH, BH, LH) => {
+         }, , , , , , , , , (BB, OB, GB) => {
```

#### 44. `bundles/bloxd.io/main.js` (Changed code · before: `L475-L477` → after: `L475-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L475-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L475-L476) · [Before (L475-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L475-L477)

```diff
-             e: () => tH,
-             g: () => SH,
-             j: () => EH,
+             d: () => jB,
+             h: () => QB,
```

#### 45. `bundles/bloxd.io/main.js` (Changed code · before: `L479` → after: `L478-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L478-L479) · [Before (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L479)

```diff
-             m: () => XH
+             o: () => JB,
+             p: () => PB
```

#### 46. `bundles/bloxd.io/main.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L481)

```diff
-           var AH = LH(22),
+           var YB = GB(29),
```

#### 47. `bundles/bloxd.io/main.js` (Changed code · before: `L491` → after: `L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L491) · [Before (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L491)

```diff
-               super(...arguments), this.rM = !1, this.XM = [], this.YM = {}
+               super(...arguments), this.oN = !1, this.yN = [], this.zN = {}
```

#### 48. `bundles/bloxd.io/main.js` (Changed code · before: `L495` → after: `L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L495) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L495)

```diff
-               this.rM || !LH ? this.emit(HH, BH) : this.XM.push({
+               this.oN || !GB ? this.emit(BB, OB) : this.yN.push({
```

#### 49. `bundles/bloxd.io/main.js` (Changed code · before: `L502-L503` → after: `L502-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L502-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L502-L503) · [Before (L502-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L502-L503)

```diff
-               const AH = this.bM(HH, BH);
-               return this.on(HH, AH), this.YM[HH] = (null !== (LH = this.YM[HH]) && void 0 !== LH ? LH : 0) + 1, {
+               const YB = this.lN(BB, OB);
+               return this.on(BB, YB), this.zN[BB] = (null !== (GB = this.zN[BB]) && void 0 !== GB ? GB : 0) + 1, {
```

#### 50. `bundles/bloxd.io/main.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L512)

```diff
-               const LH = this.bM(HH, BH);
+               const GB = this.lN(BB, OB);
```

#### 51. `bundles/bloxd.io/main.js` (Changed code · before: `L521-L522` → after: `L521-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L521-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L521-L522) · [Before (L521-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L521-L522)

```diff
-                 LH = this.YM[BH];
-               LH > 1 ? this.YM[BH] = LH - 1 : 1 === LH && delete this.YM[BH]
+                 GB = this.zN[OB];
+               GB > 1 ? this.zN[OB] = GB - 1 : 1 === GB && delete this.zN[OB]
```

#### 52. `bundles/bloxd.io/main.js` (Changed code · before: `L529` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L529) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L529)

```diff
-                   console.error(`Error in PubSub listener for event ${HH}:`, AH)
+                   console.error(`Error in PubSub listener for event ${BB}:`, YB)
```

#### 53. `bundles/bloxd.io/main.js` (Changed code · before: `L534` → after: `L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L534) · [Before (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L534)

```diff
-               this.rM = HH, HH && (this.XM.forEach((HH => {
+               this.oN = BB, BB && (this.yN.forEach((BB => {
```

#### 54. `bundles/bloxd.io/main.js` (Changed code · before: `L539-L540` → after: `L539-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L539-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L539-L540) · [Before (L539-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L539-L540)

```diff
-                 this.AX(BH, LH)
-               })), this.XM = [])
+                 this.tM(OB, GB)
+               })), this.yN = [])
```

#### 55. `bundles/bloxd.io/main.js` (Changed code · before: `L543` → after: `L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L543) · [Before (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L543)

```diff
-               this.XM = []
+               this.yN = []
```

#### 56. `bundles/bloxd.io/main.js` (Changed code · before: `L549` → after: `L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L549) · [Before (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L549)

```diff
-             CH.pM(!0)
+             JB.ZN(!0)
```

#### 57. `bundles/bloxd.io/main.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L565)

```diff
-             this.EX = HH, this.context = BH, this.once = LH || !1
+             this.oP = BB, this.context = OB, this.once = GB || !1
```

#### 58. `bundles/bloxd.io/main.js` (Changed code · before: `L571-L572` → after: `L571-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L571-L572) · [Before (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L571-L572)

```diff
-               zH = LH ? LH + BH : BH;
-             return HH._events[zH] ? HH._events[zH].EX ? HH._events[zH] = [HH._events[zH], tH] : HH._events[zH].push(tH) : (HH._events[zH] = tH, HH._eventsCount++), HH
+               yB = GB ? GB + OB : OB;
+             return BB._events[yB] ? BB._events[yB].oP ? BB._events[yB] = [BB._events[yB], jB] : BB._events[yB].push(jB) : (BB._events[yB] = jB, BB._eventsCount++), BB
```

#### 59. `bundles/bloxd.io/main.js` (Changed code · before: `L576` → after: `L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L576) · [Before (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L576)

```diff
-             0 === --HH._eventsCount ? HH._events = new AH : delete HH._events[BH]
+             0 === --BB._eventsCount ? BB._events = new YB : delete BB._events[OB]
```

#### 60. `bundles/bloxd.io/main.js` (Changed code · before: `L588` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L588) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L588)

```diff
-             var BH = LH ? LH + HH : HH,
+             var OB = GB ? GB + BB : BB,
```

#### 61. `bundles/bloxd.io/main.js` (Changed code · before: `L591-L592` → after: `L591-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L591-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L591-L592) · [Before (L591-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L591-L592)

```diff
-             if (AH.EX) return [AH.EX];
-             for (var rH = 0, SH = AH.length, hH = new Array(SH); rH < SH; rH++) hH[rH] = AH[rH].EX;
+             if (YB.oP) return [YB.oP];
+             for (var DB = 0, QB = YB.length, oB = new Array(QB); DB < QB; DB++) oB[DB] = YB[DB].oP;
```

#### 62. `bundles/bloxd.io/main.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L595)

```diff
-             var BH = LH ? LH + HH : HH,
+             var OB = GB ? GB + BB : BB,
```

#### 63. `bundles/bloxd.io/main.js` (Changed code · before: `L597` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L597) · [Before (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L597)

```diff
-             return AH ? AH.EX ? 1 : AH.length : 0
+             return YB ? YB.oP ? 1 : YB.length : 0
```

#### 64. `bundles/bloxd.io/main.js` (Changed code · before: `L599` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L599) · [Before (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L599)

```diff
-             var tH = LH ? LH + HH : HH;
+             var jB = GB ? GB + BB : BB;
```

#### 65. `bundles/bloxd.io/main.js` (Changed code · before: `L603-L604` → after: `L603-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L603-L604) · [Before (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L603-L604)

```diff
-             if (EH.EX) {
-               switch (EH.once && this.removeListener(HH, EH.EX, void 0, !0), XH) {
+             if (MB.oP) {
+               switch (MB.once && this.removeListener(BB, MB.oP, void 0, !0), PB) {
```

#### 66. `bundles/bloxd.io/main.js` (Changed code · before: `L606` → after: `L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L606) · [Before (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L606)

```diff
-                   return EH.EX.call(EH.context), !0;
+                   return MB.oP.call(MB.context), !0;
```

#### 67. `bundles/bloxd.io/main.js` (Changed code · before: `L608` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L608) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L608)

```diff
-                   return EH.EX.call(EH.context, BH), !0;
+                   return MB.oP.call(MB.context, OB), !0;
```

#### 68. `bundles/bloxd.io/main.js` (Changed code · before: `L610` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L610) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L610)

```diff
-                   return EH.EX.call(EH.context, BH, AH), !0;
+                   return MB.oP.call(MB.context, OB, YB), !0;
```

#### 69. `bundles/bloxd.io/main.js` (Changed code · before: `L612` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L612) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L612)

```diff
-                   return EH.EX.call(EH.context, BH, AH, rH), !0;
+                   return MB.oP.call(MB.context, OB, YB, DB), !0;
```

#### 70. `bundles/bloxd.io/main.js` (Changed code · before: `L614` → after: `L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L614) · [Before (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L614)

```diff
-                   return EH.EX.call(EH.context, BH, AH, rH, SH), !0;
+                   return MB.oP.call(MB.context, OB, YB, DB, QB), !0;
```

#### 71. `bundles/bloxd.io/main.js` (Changed code · before: `L616` → after: `L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L616) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L616)

```diff
-                   return EH.EX.call(EH.context, BH, AH, rH, SH, hH), !0
+                   return MB.oP.call(MB.context, OB, YB, DB, QB, oB), !0
```

#### 72. `bundles/bloxd.io/main.js` (Changed code · before: `L619` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L619) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L619)

```diff
-               EH.EX.apply(EH.context, zH)
+               MB.oP.apply(MB.context, yB)
```

#### 73. `bundles/bloxd.io/main.js` (Changed code · before: `L622` → after: `L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L622) · [Before (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L622)

```diff
-               for (CH = 0; CH < YH; CH++) switch (EH[CH].once && this.removeListener(HH, EH[CH].EX, void 0, !0), XH) {
+               for (JB = 0; JB < lB; JB++) switch (MB[JB].once && this.removeListener(BB, MB[JB].oP, void 0, !0), PB) {
```

#### 74. `bundles/bloxd.io/main.js` (Changed code · before: `L624` → after: `L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L624) · [Before (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L624)

```diff
-                   EH[CH].EX.call(EH[CH].context);
+                   MB[JB].oP.call(MB[JB].context);
```

#### 75. `bundles/bloxd.io/main.js` (Changed code · before: `L627` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L627) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L627)

```diff
-                   EH[CH].EX.call(EH[CH].context, BH);
+                   MB[JB].oP.call(MB[JB].context, OB);
```

#### 76. `bundles/bloxd.io/main.js` (Changed code · before: `L630` → after: `L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L630) · [Before (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L630)

```diff
-                   EH[CH].EX.call(EH[CH].context, BH, AH);
+                   MB[JB].oP.call(MB[JB].context, OB, YB);
```

#### 77. `bundles/bloxd.io/main.js` (Changed code · before: `L633` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L633) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L633)

```diff
-                   EH[CH].EX.call(EH[CH].context, BH, AH, rH);
+                   MB[JB].oP.call(MB[JB].context, OB, YB, DB);
```

#### 78. `bundles/bloxd.io/main.js` (Changed code · before: `L638` → after: `L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L638) · [Before (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L638)

```diff
-                   EH[CH].EX.apply(EH[CH].context, zH)
+                   MB[JB].oP.apply(MB[JB].context, yB)
```

#### 79. `bundles/bloxd.io/main.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L647)

```diff
-             var SH = LH ? LH + HH : HH;
+             var QB = GB ? GB + BB : BB;
```

#### 80. `bundles/bloxd.io/main.js` (Changed code · before: `L651` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L651) · [Before (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L651)

```diff
-             if (tH.EX) tH.EX !== BH || rH && !tH.once || AH && tH.context !== AH || hH(this, SH);
+             if (jB.oP) jB.oP !== OB || DB && !jB.once || YB && jB.context !== YB || oB(this, QB);
```

#### 81. `bundles/bloxd.io/main.js` (Changed code · before: `L653-L654` → after: `L653-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L653-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L653-L654) · [Before (L653-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L653-L654)

```diff
-               for (var zH = 0, CH = [], EH = tH.length; zH < EH; zH++)(tH[zH].EX !== BH || rH && !tH[zH].once || AH && tH[zH].context !== AH) && CH.push(tH[zH]);
-               CH.length ? this._events[SH] = 1 === CH.length ? CH[0] : CH : hH(this, SH)
+               for (var yB = 0, JB = [], MB = jB.length; yB < MB; yB++)(jB[yB].oP !== OB || DB && !jB[yB].once || YB && jB[yB].context !== YB) && JB.push(jB[yB]);
+               JB.length ? this._events[QB] = 1 === JB.length ? JB[0] : JB : oB(this, QB)
```

#### 82. `bundles/bloxd.io/main.js` (Changed code · before: `L657` → after: `L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L657) · [Before (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L657)

```diff
-           }, tH.prototype.Bx = function(HH) {
+           }, jB.prototype.mN = function(BB) {
```

#### 83. `bundles/bloxd.io/main.js` (Changed code · before: `L659` → after: `L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L659) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L659)

```diff
-             return HH ? (BH = LH ? LH + HH : HH, this._events[BH] && hH(this, BH)) : (this._events = new AH, this._eventsCount = 0), this
+             return BB ? (OB = GB ? GB + BB : BB, this._events[OB] && oB(this, OB)) : (this._events = new YB, this._eventsCount = 0), this
```

#### 84. `bundles/bloxd.io/main.js` (Changed code · before: `L661` → after: `L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L661) · [Before (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L661)

```diff
-         }, , , , , , , , (HH, BH, LH) => {
+         }, , (BB, OB, GB) => {
```

#### 85. `bundles/bloxd.io/main.js` (Changed code · before: `L665-L666` → after: `L664-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L664-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L664-L665) · [Before (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L665-L666)

```diff
-             e: () => GH,
-             f: () => YH,
+             d: () => pB,
+             g: () => zB,
```

#### 86. `bundles/bloxd.io/main.js` (Changed code · before: `L670` → after: `L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L670) · [Before (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L670)

```diff
-           var AH = LH(32),
+           var YB = GB(39),
```

#### 87. `bundles/bloxd.io/main.js` (Changed code · before: `L672` → after: `L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L672) · [Before (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L672)

```diff
-             SH = LH(36),
+             QB = GB(45),
```

#### 88. `bundles/bloxd.io/main.js` (Changed code · before: `L676` → after: `L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L676) · [Before (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L676)

```diff
-               return `bloxd-${HH}`
+               return `bloxd-${BB}`
```

#### 89. `bundles/bloxd.io/main.js` (Changed code · before: `L702` → after: `L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L702) · [Before (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L702)

```diff
-                   ...LH ? CH : zH,
+                   ...GB ? JB : yB,
```

#### 90. `bundles/bloxd.io/main.js` (Changed code · before: `L714` → after: `L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L714) · [Before (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L714)

```diff
-                 return console.error("Caught error", LH, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (BH = this._cachedVals[HH]) && void 0 !== BH ? BH : null
+                 return console.error("Caught error", GB, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (OB = this._cachedVals[BB]) && void 0 !== OB ? OB : null
```

#### 91. `bundles/bloxd.io/main.js` (Changed code · before: `L723` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L723) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L723)

```diff
-                 hH().remove(HH, BH ? CH : zH)
+                 oB().remove(BB, OB ? JB : yB)
```

#### 92. `bundles/bloxd.io/main.js` (Changed code · before: `L751` → after: `L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L751) · [Before (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L751)

```diff
-                 return console.error("Caught error", LH, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
+                 return console.error("Caught error", GB, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
```

#### 93. `bundles/bloxd.io/main.js` (Changed code · before: `L782` → after: `L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L782) · [Before (L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L782)

```diff
-                 return console.error("Caught error", LH, "when attempting to read from sessionStorage."), null !== (BH = this._cachedVals[HH]) && void 0 !== BH ? BH : null
+                 return console.error("Caught error", GB, "when attempting to read from sessionStorage."), null !== (OB = this._cachedVals[BB]) && void 0 !== OB ? OB : null
```

#### 94. `bundles/bloxd.io/main.js` (Changed code · before: `L809` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L809) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L809)

```diff
-                 return null !== (AH = this._cachedVals[HH]) && void 0 !== AH ? AH : null
+                 return null !== (YB = this._cachedVals[BB]) && void 0 !== YB ? YB : null
```

#### 95. `bundles/bloxd.io/main.js` (Changed code · before: `L831` → after: `L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L831) · [Before (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L831)

```diff
-                   for (let AH, rH, SH = 0, hH = 0; rH = HH.charAt(hH++); ~rH && (AH = SH % 4 ? 64 * AH + rH : rH, SH++ % 4) ? BH += String.fromCharCode(255 & AH >> (-2 * SH & 6)) : 0) rH = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(rH);
+                   for (let YB, DB, QB = 0, oB = 0; DB = BB.charAt(oB++); ~DB && (YB = QB % 4 ? 64 * YB + DB : DB, QB++ % 4) ? OB += String.fromCharCode(255 & YB >> (-2 * QB & 6)) : 0) DB = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(DB);
```

#### 96. `bundles/bloxd.io/main.js` (Changed code · before: `L838` → after: `L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L838) · [Before (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L838)

```diff
-               return hH ? rH = hH : (rH = WH.FZAkcO(rH), HH[SH] = rH), rH
+               return oB ? DB = oB : (DB = ZB.FZAkcO(DB), BB[QB] = DB), DB
```

#### 97. `bundles/bloxd.io/main.js` (Changed code · before: `L880` → after: `L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L880) · [Before (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L880)

```diff
-         }, , (HH, BH, LH) => {
+         }, , , , , , , , (BB, OB, GB) => {
```

#### 98. `bundles/bloxd.io/main.js` (Changed code · before: `L1012` → after: `L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L1012) · [Before (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L1012)

```diff
-                 return HH instanceof this ? HH : SH.resolve(new this(rH), HH)
+                 return BB instanceof this ? BB : QB.resolve(new this(DB), BB)
```

#### 99. `bundles/bloxd.io/main.js` (Changed code · before: `L1061` → after: `L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L1061) · [Before (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L1061)

```diff
-                 return this.state !== zH ? XH(LH, this.state === tH ? HH : BH, this.outcome) : this.queue.push(new EH(LH, HH, BH)), LH
+                 return this.state !== yB ? PB(GB, this.state === jB ? BB : OB, this.outcome) : this.queue.push(new MB(GB, BB, OB)), GB
```

#### 100. `bundles/bloxd.io/main.js` (Changed code · before: `L1434` → after: `L1434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L1434) · [Before (L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L1434)

```diff
-                       return HH ? BH : fH(BH)
+                       return BB ? OB : mB(OB)
```

#### 101. `bundles/bloxd.io/main.js` (Changed code · before: `L1710` → after: `L1710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L1710) · [Before (L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L1710)

```diff
-                   HH instanceof ArrayBuffer ? (AH = HH, rH += LB) : (AH = HH.buffer, "[object Int8Array]" === LH ? rH += rB : "[object Uint8Array]" === LH ? rH += SB : "[object Uint8ClampedArray]" === LH ? rH += hB : "[object Int16Array]" === LH ? rH += tB : "[object Uint16Array] … [truncated]
+                   BB instanceof ArrayBuffer ? (YB = BB, DB += GO) : (YB = BB.buffer, "[object Int8Array]" === GB ? DB += DO : "[object Uint8Array]" === GB ? DB += QO : "[object Uint8ClampedArray]" === GB ? DB += oO : "[object Int16Array]" === GB ? DB += jO : "[object Uint16Array] … [truncated]
```

#### 102. `bundles/bloxd.io/main.js` (Changed code · before: `L1734` → after: `L1734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L1734) · [Before (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L1734)

```diff
-                   case LB:
+                   case GO:
```

#### 103. `bundles/bloxd.io/main.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L1736)

```diff
-                   case AB:
+                   case YO:
```

#### 104. `bundles/bloxd.io/main.js` (Changed code · before: `L1740` → after: `L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L1740) · [Before (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L1740)

```diff
-                   case rB:
+                   case DO:
```

#### 105. `bundles/bloxd.io/main.js` (Changed code · before: `L1742` → after: `L1742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L1742) · [Before (L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L1742)

```diff
-                   case SB:
+                   case QO:
```

#### 106. `bundles/bloxd.io/main.js` (Changed code · before: `L1744` → after: `L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L1744) · [Before (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L1744)

```diff
-                   case hB:
+                   case oO:
```

#### 107. `bundles/bloxd.io/main.js` (Changed code · before: `L1746` → after: `L1746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L1746) · [Before (L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L1746)

```diff
-                   case tB:
+                   case jO:
```

#### 108. `bundles/bloxd.io/main.js` (Changed code · before: `L1748` → after: `L1748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L1748) · [Before (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L1748)

```diff
-                   case CB:
+                   case JO:
```

#### 109. `bundles/bloxd.io/main.js` (Changed code · before: `L1750` → after: `L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L1750) · [Before (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L1750)

```diff
-                   case zB:
+                   case yO:
```

#### 110. `bundles/bloxd.io/main.js` (Changed code · before: `L1752` → after: `L1752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L1752) · [Before (L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L1752)

```diff
-                   case EB:
+                   case MO:
```

#### 111. `bundles/bloxd.io/main.js` (Changed code · before: `L1754` → after: `L1754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L1754) · [Before (L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L1754)

```diff
-                   case XB:
+                   case PO:
```

#### 112. `bundles/bloxd.io/main.js` (Changed code · before: `L1756` → after: `L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L1756) · [Before (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L1756)

```diff
-                   case GB:
+                   case zO:
```

#### 113. `bundles/bloxd.io/main.js` (Changed code · before: `L1794` → after: `L1794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L1794) · [Before (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L1794)

```diff
-                 return LH.Xx = vB, rH
+                 return GB.FN = WO, DB
```

#### 114. `bundles/bloxd.io/main.js` (Changed code · before: `L1816` → after: `L1816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L1816) · [Before (L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L1816)

```diff
-                         AH && (AH = rH.Xx.deserialize(AH)), BH(AH)
+                         YB && (YB = DB.FN.deserialize(YB)), OB(YB)
```

#### 115. `bundles/bloxd.io/main.js` (Changed code · before: `L1836` → after: `L1836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L1836) · [Before (L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L1836)

```diff
-                             if (CH && (CH = rH.Xx.deserialize(CH)), void 0 !== (CH = HH(CH, zH.key, tH + 1))) return void BH(CH)
+                             if (JB && (JB = DB.FN.deserialize(JB)), void 0 !== (JB = BB(JB, yB.key, jB + 1))) return void OB(JB)
```

#### 116. `bundles/bloxd.io/main.js` (Changed code · before: `L1856` → after: `L1856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L1856) · [Before (L1856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L1856)

```diff
-                     zH.Xx.serialize(BH, (function(BH, CH) {
+                     yB.FN.serialize(OB, (function(OB, JB) {
```

#### 117. `bundles/bloxd.io/main.js` (Changed code · before: `L2067` → after: `L2067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L2067) · [Before (L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L2067)

```diff
-                 return LH.keyPrefix = gB(HH, BH._defaultConfig), RB() ? (BH._dbInfo = LH, LH.Xx = vB, CH.resolve()) : CH.reject()
+                 return GB.keyPrefix = rO(BB, OB._defaultConfig), wO() ? (OB._dbInfo = GB, GB.FN = WO, JB.resolve()) : JB.reject()
```

#### 118. `bundles/bloxd.io/main.js` (Changed code · before: `L2087` → after: `L2087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L2087) · [Before (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L2087)

```diff
-                   return AH && (AH = BH.Xx.deserialize(AH)), AH
+                   return YB && (YB = OB.FN.deserialize(YB)), YB
```

#### 119. `bundles/bloxd.io/main.js` (Changed code · before: `L2099` → after: `L2099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L2099) · [Before (L2099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L2099)

```diff
-                         if (CH && (CH = BH.Xx.deserialize(CH)), void 0 !== (CH = HH(CH, zH.substring(rH), hH++))) return CH
+                         if (JB && (JB = OB.FN.deserialize(JB)), void 0 !== (JB = BB(JB, yB.substring(DB), oB++))) return JB
```

#### 120. `bundles/bloxd.io/main.js` (Changed code · before: `L2157` → after: `L2157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L2157) · [Before (L2157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L2157)

```diff
-                     hH.Xx.serialize(BH, (function(BH, AH) {
+                     oB.FN.serialize(OB, (function(OB, YB) {
```

#### 121. `bundles/bloxd.io/main.js` (Changed code · before: `L2377` → after: `L2377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L2377) · [Before (L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L2377)

```diff
-         }, , , , (HH, BH, LH) => {
+         }, , , , , , (BB, OB, GB) => {
```

#### 122. `bundles/bloxd.io/main.js` (Changed code · before: `L2446` → after: `L2446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L2446) · [Before (L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L2446)

```diff
-         }, , , , (HH, BH, LH) => {
+         }, , , , , , , (BB, OB, GB) => {
```

#### 123. `bundles/bloxd.io/main.js` (Changed code · before: `L2450` → after: `L2450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L2450) · [Before (L2450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L2450)

```diff
-           var AH = LH(30);
+           var YB = GB(31);
```

#### 124. `bundles/bloxd.io/main.js` (Changed code · before: `L2454` → after: `L2454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L2454) · [Before (L2454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L2454)

```diff
-             return null !== (HH = AH.e.getItem("soundVol")) && void 0 !== HH ? HH : .5
+             return null !== (BB = YB.g.getItem("soundVol")) && void 0 !== BB ? BB : .5
```

#### 125. `bundles/bloxd.io/main.js` (Changed code · before: `L2456-L2459` → after: `L2456-L2459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2456-L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L2456-L2459) · [Before (L2456-L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L2456-L2459)

```diff
-         }, , , , , (HH, BH, LH) => {
-           HH.exports = LH(54)
-         }, , , , , , , , , (HH, BH, LH) => {
-           var AH = LH(60),
+         }, , , , (BB, OB, GB) => {
+           BB.exports = GB(60)
+         }, , , , (BB, OB, GB) => {
+           var YB = GB(65),
```

#### 126. `bundles/bloxd.io/main.js` (Changed code · before: `L2570-L2571` → after: `L2570-L2571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2570-L2571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L2570-L2571) · [Before (L2570-L2571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L2570-L2571)

```diff
-                   case rH:
-                   case SH:
+                   case DB:
+                   case QB:
```

#### 127. `bundles/bloxd.io/main.js` (Changed code · before: `L2592` → after: `L2592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L2592) · [Before (L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L2592)

```diff
-                   return null === HH || "object" !== typeof HH ? null : "function" === typeof(HH = GH && HH[GH] || HH["@@iterator"]) ? HH : null
+                   return null === BB || "object" !== typeof BB ? null : "function" === typeof(BB = zB && BB[zB] || BB["@@iterator"]) ? BB : null
```

#### 128. `bundles/bloxd.io/main.js` (Changed code · before: `L2746` → after: `L2746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L2746) · [Before (L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L2746)

```diff
-         }, , , , , , HH => {
+         }, , , , , BB => {
```

#### 129. `bundles/bloxd.io/main.js` (Changed code · before: `L2779` → after: `L2779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L2779) · [Before (L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L2779)

```diff
-         }, , , , , , , , , (HH, BH, LH) => {
+         }, , , , , (BB, OB, GB) => {
```

#### 130. `bundles/bloxd.io/main.js` (Changed code · before: `L2786-L2790` → after: `L2786-L2790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2786-L2790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L2786-L2790) · [Before (L2786-L2790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L2786-L2790)

```diff
-           }(), HH.exports = LH(72)
-         }, , , (HH, BH, LH) => {
-           var AH = LH(45),
-             rH = LH(60),
-             SH = LH(75);
+           }(), BB.exports = GB(76)
+         }, , , , , , (BB, OB, GB) => {
+           var YB = GB(56),
+             DB = GB(65),
+             QB = GB(81);
```

#### 131. `bundles/bloxd.io/main.js` (Changed code · before: `L2877` → after: `L2877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L2877) · [Before (L2877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L2877)

```diff
-             }(BH) && (null === LH ? HH.removeAttribute(BH) : HH.setAttribute(BH, "" + LH)) : rH.mustUseProperty ? HH[rH.propertyName] = null === LH ? 3 !== rH.type && "" : LH : (BH = rH.attributeName, AH = rH.attributeNamespace, null === LH ? HH.removeAttribute(BH) : (LH = 3 ===  … [truncated]
+             }(OB) && (null === GB ? BB.removeAttribute(OB) : BB.setAttribute(OB, "" + GB)) : DB.mustUseProperty ? BB[DB.propertyName] = null === GB ? 3 !== DB.type && "" : GB : (OB = DB.attributeName, YB = DB.attributeNamespace, null === GB ? BB.removeAttribute(OB) : (GB = 3 ===  … [truncated]
```

#### 132. `bundles/bloxd.io/main.js` (Changed code · before: `L2918` → after: `L2918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L2918) · [Before (L2918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L2918)

```diff
-             return null === HH || "object" !== typeof HH ? null : "function" === typeof(HH = FH && HH[FH] || HH["@@iterator"]) ? HH : null
+             return null === BB || "object" !== typeof BB ? null : "function" === typeof(BB = hB && BB[hB] || BB["@@iterator"]) ? BB : null
```

#### 133. `bundles/bloxd.io/main.js` (Changed code · before: `L3016` → after: `L3016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L3016) · [Before (L3016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L3016)

```diff
-               case OH:
+               case UB:
```

#### 134. `bundles/bloxd.io/main.js` (Changed code · before: `L3018` → after: `L3018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L3018) · [Before (L3018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L3018)

```diff
-               case VH:
+               case nB:
```

#### 135. `bundles/bloxd.io/main.js` (Changed code · before: `L3020` → after: `L3020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L3020) · [Before (L3020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L3020)

```diff
-               case kH:
+               case kB:
```

#### 136. `bundles/bloxd.io/main.js` (Changed code · before: `L3022` → after: `L3022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L3022) · [Before (L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L3022)

```diff
-               case bH:
+               case fB:
```

#### 137. `bundles/bloxd.io/main.js` (Changed code · before: `L3024` → after: `L3024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L3024) · [Before (L3024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L3024)

```diff
-               case fH:
+               case mB:
```

#### 138. `bundles/bloxd.io/main.js` (Changed code · before: `L3026` → after: `L3026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L3026) · [Before (L3026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L3026)

```diff
-               case lH:
+               case IB:
```

#### 139. `bundles/bloxd.io/main.js` (Changed code · before: `L3030` → after: `L3030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L3030) · [Before (L3030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L3030)

```diff
-               case oH:
+               case KB:
```

#### 140. `bundles/bloxd.io/main.js` (Changed code · before: `L3032` → after: `L3032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L3032) · [Before (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L3032)

```diff
-               case mH:
+               case dB:
```

#### 141. `bundles/bloxd.io/main.js` (Changed code · before: `L3034` → after: `L3034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L3034) · [Before (L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L3034)

```diff
-               case IH:
+               case uB:
```

#### 142. `bundles/bloxd.io/main.js` (Changed code · before: `L3037` → after: `L3037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L3037) · [Before (L3037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L3037)

```diff
-               case KH:
+               case FB:
```

#### 143. `bundles/bloxd.io/main.js` (Changed code · before: `L3039` → after: `L3039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L3039) · [Before (L3039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L3039)

```diff
-               case eH:
+               case LB:
```

#### 144. `bundles/bloxd.io/main.js` (Changed code · before: `L3041` → after: `L3041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L3041) · [Before (L3041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L3041)

```diff
-               case cH:
+               case iB:
```

#### 145. `bundles/bloxd.io/main.js` (Changed code · before: `L3125` → after: `L3125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L3125) · [Before (L3125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L3125)

```diff
-               checked: null != LH ? LH : HH._wrapperState.initialChecked
+               checked: null != GB ? GB : BB._wrapperState.initialChecked
```

#### 146. `bundles/bloxd.io/main.js` (Changed code · before: `L3425` → after: `L3425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L3425) · [Before (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L3425)

```diff
-             HH: switch (BH) {
+             BB: switch (OB) {
```

#### 147. `bundles/bloxd.io/main.js` (Changed code · before: `L3491` → after: `L3491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L3491) · [Before (L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L3491)

```diff
-             return 3 === BH.tag ? LH : null
+             return 3 === OB.tag ? GB : null
```

#### 148. `bundles/bloxd.io/main.js` (Changed code · before: `L3563` → after: `L3563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L3563) · [Before (L3563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L3563)

```diff
-                 return LH.stateNode.current === LH ? HH : BH
+                 return GB.stateNode.current === GB ? BB : OB
```

#### 149. `bundles/bloxd.io/main.js` (Changed code · before: `L3775` → after: `L3775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L3775) · [Before (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L3775)

```diff
-             return 0 !== (HH = -1073741825 & HH.pendingLanes) ? HH : 1073741824 & HH ? 1073741824 : 0
+             return 0 !== (BB = -1073741825 & BB.pendingLanes) ? BB : 1073741824 & BB ? 1073741824 : 0
```

#### 150. `bundles/bloxd.io/main.js` (Changed code · before: `L3899` → after: `L3899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L3899) · [Before (L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L3899)

```diff
-             return zA = rH.slice(HH, 1 < BH ? 1 - BH : void 0)
+             return yY = DB.slice(BB, 1 < OB ? 1 - OB : void 0)
```

#### 151. `bundles/bloxd.io/main.js` (Changed code · before: `L3904` → after: `L3904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L3904) · [Before (L3904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L3904)

```diff
-             return "charCode" in HH ? 0 === (HH = HH.charCode) && 13 === BH && (HH = 13) : HH = BH, 10 === HH && (HH = 13), 32 <= HH || 13 === HH ? HH : 0
+             return "charCode" in BB ? 0 === (BB = BB.charCode) && 13 === OB && (BB = 13) : BB = OB, 10 === BB && (BB = 13), 32 <= BB || 13 === BB ? BB : 0
```

#### 152. `bundles/bloxd.io/main.js` (Changed code · before: `L3918` → after: `L3918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L3918) · [Before (L3918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L3918)

```diff
-               return this.isDefaultPrevented = (null != rH.defaultPrevented ? rH.defaultPrevented : !1 === rH.returnValue) ? XA : GA, this.isPropagationStopped = GA, this
+               return this.isDefaultPrevented = (null != DB.defaultPrevented ? DB.defaultPrevented : !1 === DB.returnValue) ? PY : zY, this.isPropagationStopped = zY, this
```

#### 153. `bundles/bloxd.io/main.js` (Changed code · before: `L4278` → after: `L4278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L4278) · [Before (L4278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L4278)

```diff
-               HH: {
+               BB: {
```

#### 154. `bundles/bloxd.io/main.js` (Changed code · before: `L4320` → after: `L4320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L4320) · [Before (L4320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L4320)

```diff
-             var AH = LH.window === LH ? LH.document : 9 === LH.nodeType ? LH : LH.ownerDocument;
+             var YB = GB.window === GB ? GB.document : 9 === GB.nodeType ? GB : GB.ownerDocument;
```

#### 155. `bundles/bloxd.io/main.js` (Changed code · before: `L4358` → after: `L4358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L4358) · [Before (L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L4358)

```diff
-               HH: {
+               BB: {
```

#### 156. `bundles/bloxd.io/main.js` (Changed code · before: `L4424` → after: `L4424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L4424) · [Before (L4424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L4424)

```diff
-             if (0 === (1 & BH) && 0 === (2 & BH) && null !== AH) HH: for (;;) {
+             if (0 === (1 & OB) && 0 === (2 & OB) && null !== YB) BB: for (;;) {
```

#### 157. `bundles/bloxd.io/main.js` (Changed code · before: `L4458` → after: `L4458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L4458) · [Before (L4458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L4458)

```diff
-               HH: {
+               BB: {
```

#### 158. `bundles/bloxd.io/main.js` (Changed code · before: `L4508-L4510` → after: `L4508-L4510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4508-L4510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L4508-L4510) · [Before (L4508-L4510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L4508-L4510)

```diff
-                     case KL:
-                     case cL:
-                     case eL:
+                     case FG:
+                     case iG:
+                     case LG:
```

#### 159. `bundles/bloxd.io/main.js` (Changed code · before: `L4513` → after: `L4513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L4513) · [Before (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L4513)

```diff
-                     case qL:
+                     case gG:
```

#### 160. `bundles/bloxd.io/main.js` (Changed code · before: `L4553-L4554` → after: `L4553-L4554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4553-L4554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L4553-L4554) · [Before (L4553-L4554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L4553-L4554)

```diff
-                 if (zH = "mouseout" === HH || "pointerout" === HH, (!(tH = "mouseover" === HH || "pointerover" === HH) || 0 !== (16 & BH) || !(CH = LH.relatedTarget || LH.fromElement) || !XS(CH) && !CH[CS]) && (zH || tH) && (tH = rH.window === rH ? rH : (tH = rH.ownerDocument) ?  … [truncated]
-                   if (EH = UA, QH = "onMouseLeave", GH = "onMouseEnter", uH = "mouse", "pointerout" !== HH && "pointerover" !== HH || (EH = gA, QH = "onPointerLeave", GH = "onPointerEnter", uH = "pointer"), XH = null == zH ? tH : YS(zH), YH = null == CH ? tH : YS(CH), (tH = new E … [truncated]
+                 if (yB = "mouseout" === BB || "pointerout" === BB, (!(jB = "mouseover" === BB || "pointerover" === BB) || 0 !== (16 & OB) || !(JB = GB.relatedTarget || GB.fromElement) || !PQ(JB) && !JB[JQ]) && (yB || jB) && (jB = DB.window === DB ? DB : (jB = DB.ownerDocument) ?  … [truncated]
+                   if (MB = SY, qB = "onMouseLeave", zB = "onMouseEnter", pB = "mouse", "pointerout" !== BB && "pointerover" !== BB || (MB = rY, qB = "onPointerLeave", zB = "onPointerEnter", pB = "pointer"), PB = null == yB ? jB : lQ(yB), lB = null == JB ? jB : lQ(JB), (jB = new M … [truncated]
```

#### 161. `bundles/bloxd.io/main.js` (Changed code · before: `L4600` → after: `L4600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L4600) · [Before (L4600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L4600)

```diff
-                 if (DA) HH: {
+                 if (aY) BB: {
```

#### 162. `bundles/bloxd.io/main.js` (Changed code · before: `L4618` → after: `L4618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L4618) · [Before (L4618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L4618)

```diff
-                 }), xH ? vH.data = xH : null !== (xH = iA(LH)) && (vH.data = xH))), (xH = ZA ? function(HH, BH) {
+                 }), RB ? WB.data = RB : null !== (RB = sY(GB)) && (WB.data = RB))), (RB = TY ? function(BB, OB) {
```

#### 163. `bundles/bloxd.io/main.js` (Changed code · before: `L4856` → after: `L4856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L4856) · [Before (L4856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L4856)

```diff
-             sS = void 0 !== RS ? RS : function() {},
+             HQ = void 0 !== wQ ? wQ : function() {},
```

#### 164. `bundles/bloxd.io/main.js` (Changed code · before: `L4861` → after: `L4861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L4861) · [Before (L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L4861)

```diff
-             Hh = 1e4 > yS ? jS : function() {
+             Bo = 1e4 > tQ ? EQ : function() {
```

#### 165. `bundles/bloxd.io/main.js` (Changed code · before: `L4867` → after: `L4867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L4867) · [Before (L4867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L4867)

```diff
-               case FS:
+               case hQ:
```

#### 166. `bundles/bloxd.io/main.js` (Changed code · before: `L4869` → after: `L4869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L4869) · [Before (L4869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L4869)

```diff
-               case DS:
+               case aQ:
```

#### 167. `bundles/bloxd.io/main.js` (Changed code · before: `L4871` → after: `L4871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L4871) · [Before (L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L4871)

```diff
-               case wS:
+               case eQ:
```

#### 168. `bundles/bloxd.io/main.js` (Changed code · before: `L4873` → after: `L4873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L4873) · [Before (L4873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L4873)

```diff
-               case ZS:
+               case TQ:
```

#### 169. `bundles/bloxd.io/main.js` (Changed code · before: `L4875` → after: `L4875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L4875) · [Before (L4875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L4875)

```diff
-               case dS:
+               case bQ:
```

#### 170. `bundles/bloxd.io/main.js` (Changed code · before: `L5028` → after: `L5028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5028) · [Before (L5028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5028)

```diff
-               null === LH ? BH.next = BH : (BH.next = LH.next, LH.next = BH), HH.pending = BH
+               null === GB ? OB.next = OB : (OB.next = GB.next, GB.next = OB), BB.pending = OB
```

#### 171. `bundles/bloxd.io/main.js` (Changed code · before: `L5048` → after: `L5048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5048) · [Before (L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5048)

```diff
-                   null === SH ? rH = SH = hH : SH = SH.next = hH, LH = LH.next
+                   null === QB ? DB = QB = oB : QB = QB.next = oB, GB = GB.next
```

#### 172. `bundles/bloxd.io/main.js` (Changed code · before: `L5050` → after: `L5050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5050) · [Before (L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5050)

```diff
-                 null === SH ? rH = SH = BH : SH = SH.next = BH
+                 null === QB ? DB = QB = OB : QB = QB.next = OB
```

#### 173. `bundles/bloxd.io/main.js` (Changed code · before: `L5060` → after: `L5060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5060) · [Before (L5060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5060)

```diff
-             null === (HH = LH.lastBaseUpdate) ? LH.firstBaseUpdate = BH : HH.next = BH, LH.lastBaseUpdate = BH
+             null === (BB = GB.lastBaseUpdate) ? GB.firstBaseUpdate = OB : BB.next = OB, GB.lastBaseUpdate = OB
```

#### 174. `bundles/bloxd.io/main.js` (Changed code · before: `L5073` → after: `L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5073) · [Before (L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5073)

```diff
-               CH.next = null, null === tH ? hH = EH : tH.next = EH, tH = CH;
+               JB.next = null, null === jB ? oB = MB : jB.next = MB, jB = JB;
```

#### 175. `bundles/bloxd.io/main.js` (Changed code · before: `L5077` → after: `L5077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5077) · [Before (L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5077)

```diff
-                 GH !== tH && (null === GH ? XH.firstBaseUpdate = EH : GH.next = EH, XH.lastBaseUpdate = CH)
+                 zB !== jB && (null === zB ? PB.firstBaseUpdate = MB : zB.next = MB, PB.lastBaseUpdate = JB)
```

#### 176. `bundles/bloxd.io/main.js` (Changed code · before: `L5093` → after: `L5093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5093) · [Before (L5093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5093)

```diff
-                   HH: {
+                   BB: {
```

#### 177. `bundles/bloxd.io/main.js` (Changed code · before: `L5146` → after: `L5146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5146) · [Before (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5146)

```diff
-             LH = null === (LH = LH(AH, BH = HH.memoizedState)) || void 0 === LH ? BH : rH({}, BH, LH), HH.memoizedState = LH, 0 === HH.lanes && (HH.updateQueue.baseState = LH)
+             GB = null === (GB = GB(YB, OB = BB.memoizedState)) || void 0 === GB ? OB : DB({}, OB, GB), BB.memoizedState = GB, 0 === BB.lanes && (BB.updateQueue.baseState = GB)
```

#### 178. `bundles/bloxd.io/main.js` (Changed code · before: `L5183` → after: `L5183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5183) · [Before (L5183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5183)

```diff
-             return "object" === typeof SH && null !== SH ? SH = Mh(SH) : (rH = kS(BH) ? OS : US.current, SH = (AH = null !== (AH = BH.contextTypes) && void 0 !== AH) ? bS(HH, rH) : TS), BH = new BH(LH, SH), HH.memoizedState = null !== BH.state && void 0 !== BH.state ? BH.state :  … [truncated]
+             return "object" === typeof QB && null !== QB ? QB = Ro(QB) : (DB = kQ(OB) ? UQ : SQ.current, QB = (YB = null !== (YB = OB.contextTypes) && void 0 !== YB) ? fQ(BB, DB) : VQ), OB = new OB(GB, QB), BB.memoizedState = null !== OB.state && void 0 !== OB.state ? OB.state :  … [truncated]
```

#### 179. `bundles/bloxd.io/main.js` (Changed code · before: `L5194` → after: `L5194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5194) · [Before (L5194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5194)

```diff
-             "object" === typeof SH && null !== SH ? rH.context = Mh(SH) : (SH = kS(BH) ? OS : US.current, rH.context = bS(HH, SH)), Oh(HH, LH, rH, AH), rH.state = HH.memoizedState, "function" === typeof(SH = BH.getDerivedStateFromProps) && (mh(HH, BH, SH, LH), rH.state = HH.memoi … [truncated]
+             "object" === typeof QB && null !== QB ? DB.context = Ro(QB) : (QB = kQ(OB) ? UQ : SQ.current, DB.context = fQ(BB, QB)), fo(BB, GB, DB, YB), DB.state = BB.memoizedState, "function" === typeof(QB = OB.getDerivedStateFromProps) && (uo(BB, OB, QB, GB), DB.state = BB.memoi … [truncated]
```

#### 180. `bundles/bloxd.io/main.js` (Changed code · before: `L5246` → after: `L5246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5246) · [Before (L5246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5246)

```diff
-               return BH.index = AH, HH ? null !== (AH = BH.alternate) ? (AH = AH.index) < LH ? (BH.flags = 2, LH) : AH : (BH.flags = 2, LH) : LH
+               return OB.index = YB, BB ? null !== (YB = OB.alternate) ? (YB = YB.index) < GB ? (OB.flags = 2, GB) : YB : (OB.flags = 2, GB) : GB
```

#### 181. `bundles/bloxd.io/main.js` (Changed code · before: `L5273` → after: `L5273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5273) · [Before (L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5273)

```diff
-                   case UH:
+                   case SB:
```

#### 182. `bundles/bloxd.io/main.js` (Changed code · before: `L5275` → after: `L5275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5275) · [Before (L5275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5275)

```diff
-                   case VH:
+                   case nB:
```

#### 183. `bundles/bloxd.io/main.js` (Changed code · before: `L5289` → after: `L5289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5289) · [Before (L5289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5289)

```diff
-                   case UH:
+                   case SB:
```

#### 184. `bundles/bloxd.io/main.js` (Changed code · before: `L5291` → after: `L5291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5291) · [Before (L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5291)

```diff
-                   case VH:
+                   case nB:
```

#### 185. `bundles/bloxd.io/main.js` (Changed code · before: `L5304-L5307` → after: `L5304-L5307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5304-L5307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5304-L5307) · [Before (L5304-L5307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5304-L5307)

```diff
-                   case UH:
-                     return HH = HH.get(null === AH.key ? LH : AH.key) || null, AH.type === OH ? XH(BH, HH, AH.props.children, rH, AH.key) : CH(BH, HH, AH, rH);
-                   case VH:
-                     return EH(BH, HH = HH.get(null === AH.key ? LH : AH.key) || null, AH, rH)
+                   case SB:
+                     return BB = BB.get(null === YB.key ? GB : YB.key) || null, YB.type === UB ? PB(OB, BB, YB.props.children, DB, YB.key) : JB(OB, BB, YB, DB);
+                   case nB:
+                     return MB(OB, BB = BB.get(null === YB.key ? GB : YB.key) || null, YB, DB)
```

#### 186. `bundles/bloxd.io/main.js` (Changed code · before: `L5323` → after: `L5323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5323) · [Before (L5323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5323)

```diff
-                 HH && XH && null === MH.alternate && BH(rH, XH), hH = SH(MH, hH, QH), null === EH ? CH = MH : EH.sibling = MH, EH = MH, XH = WH
+                 BB && PB && null === NB.alternate && OB(DB, PB), oB = QB(NB, oB, qB), null === MB ? JB = NB : MB.sibling = NB, MB = NB, PB = ZB
```

#### 187. `bundles/bloxd.io/main.js` (Changed code · before: `L5327` → after: `L5327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5327) · [Before (L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5327)

```diff
-                 for (; QH < tH.length; QH++) null !== (XH = GH(rH, tH[QH], zH)) && (hH = SH(XH, hH, QH), null === EH ? CH = XH : EH.sibling = XH, EH = XH);
+                 for (; qB < jB.length; qB++) null !== (PB = zB(DB, jB[qB], yB)) && (oB = QB(PB, oB, qB), null === MB ? JB = PB : MB.sibling = PB, MB = PB);
```

#### 188. `bundles/bloxd.io/main.js` (Changed code · before: `L5330` → after: `L5330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5330) · [Before (L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5330)

```diff
-               for (XH = AH(rH, XH); QH < tH.length; QH++) null !== (WH = uH(XH, rH, QH, tH[QH], zH)) && (HH && null !== WH.alternate && XH.delete(null === WH.key ? QH : WH.key), hH = SH(WH, hH, QH), null === EH ? CH = WH : EH.sibling = WH, EH = WH);
+               for (PB = YB(DB, PB); qB < jB.length; qB++) null !== (ZB = pB(PB, DB, qB, jB[qB], yB)) && (BB && null !== ZB.alternate && PB.delete(null === ZB.key ? qB : ZB.key), oB = QB(ZB, oB, qB), null === MB ? JB = ZB : MB.sibling = ZB, MB = ZB);
```

#### 189. `bundles/bloxd.io/main.js` (Changed code · before: `L5347` → after: `L5347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5347) · [Before (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5347)

```diff
-                 HH && QH && null === vH.alternate && BH(rH, QH), tH = SH(vH, tH, WH), null === XH ? EH = vH : XH.sibling = vH, XH = vH, QH = MH
+                 BB && qB && null === WB.alternate && OB(DB, qB), jB = QB(WB, jB, ZB), null === PB ? MB = WB : PB.sibling = WB, PB = WB, qB = NB
```

#### 190. `bundles/bloxd.io/main.js` (Changed code · before: `L5351` → after: `L5351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5351) · [Before (L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5351)

```diff
-                 for (; !xH.done; WH++, xH = zH.next()) null !== (xH = GH(rH, xH.value, CH)) && (tH = SH(xH, tH, WH), null === XH ? EH = xH : XH.sibling = xH, XH = xH);
+                 for (; !RB.done; ZB++, RB = yB.next()) null !== (RB = zB(DB, RB.value, JB)) && (jB = QB(RB, jB, ZB), null === PB ? MB = RB : PB.sibling = RB, PB = RB);
```

#### 191. `bundles/bloxd.io/main.js` (Changed code · before: `L5354` → after: `L5354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5354) · [Before (L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5354)

```diff
-               for (QH = AH(rH, QH); !xH.done; WH++, xH = zH.next()) null !== (xH = uH(QH, rH, WH, xH.value, CH)) && (HH && null !== xH.alternate && QH.delete(null === xH.key ? WH : xH.key), tH = SH(xH, tH, WH), null === XH ? EH = xH : XH.sibling = xH, XH = xH);
+               for (qB = YB(DB, qB); !RB.done; ZB++, RB = yB.next()) null !== (RB = pB(qB, DB, ZB, RB.value, JB)) && (BB && null !== RB.alternate && qB.delete(null === RB.key ? ZB : RB.key), jB = QB(RB, jB, ZB), null === PB ? MB = RB : PB.sibling = RB, PB = RB);
```

#### 192. `bundles/bloxd.io/main.js` (Changed code · before: `L5364-L5365` → after: `L5364-L5365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5364-L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5364-L5365) · [Before (L5364-L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5364-L5365)

```diff
-                 case UH:
-                   HH: {
+                 case SB:
+                   BB: {
```

#### 193. `bundles/bloxd.io/main.js` (Changed code · before: `L5385-L5386` → after: `L5385-L5386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5385-L5386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5385-L5386) · [Before (L5385-L5386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5385-L5386)

```diff
-                 case VH:
-                   HH: {
+                 case nB:
+                   BB: {
```

#### 194. `bundles/bloxd.io/main.js` (Changed code · before: `L5524` → after: `L5524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5524) · [Before (L5524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5524)

```diff
-               HH: {
+               BB: {
```

#### 195. `bundles/bloxd.io/main.js` (Changed code · before: `L5574` → after: `L5574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5574) · [Before (L5574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5574)

```diff
-             if (Xt = SH, Gt = BH, BH.memoizedState = null, BH.updateQueue = null, BH.lanes = 0, Ct.current = null === HH || null === HH.memoizedState ? dt : st, HH = LH(AH, rH), Wt) {
+             if (lj = QB, pj = OB, OB.memoizedState = null, OB.updateQueue = null, OB.lanes = 0, Pj.current = null === BB || null === BB.memoizedState ? Hj : vj, BB = GB(YB, DB), Rj) {
```

#### 196. `bundles/bloxd.io/main.js` (Changed code · before: `L5593` → after: `L5593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5593) · [Before (L5593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5593)

```diff
-             return null === ut ? Gt.memoizedState = ut = HH : ut = ut.next = HH, ut
+             return null === Zj ? pj.memoizedState = Zj = BB : Zj = Zj.next = BB, Zj
```

#### 197. `bundles/bloxd.io/main.js` (Changed code · before: `L5611` → after: `L5611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5611) · [Before (L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5611)

```diff
-               }, null === ut ? Gt.memoizedState = ut = HH : ut = ut.next = HH
+               }, null === Zj ? pj.memoizedState = Zj = BB : Zj = Zj.next = BB
```

#### 198. `bundles/bloxd.io/main.js` (Changed code · before: `L5660` → after: `L5660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5660) · [Before (L5660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5660)

```diff
-               null === zH ? SH = AH : zH.next = tH, Mr(AH, BH.memoizedState) || (pt = !0), BH.memoizedState = AH, BH.baseState = SH, BH.baseQueue = zH, LH.lastRenderedState = AH
+               null === yB ? QB = YB : yB.next = jB, ND(YB, OB.memoizedState) || (tj = !0), OB.memoizedState = YB, OB.baseState = QB, OB.baseQueue = yB, GB.lastRenderedState = YB
```

#### 199. `bundles/bloxd.io/main.js` (Changed code · before: `L5688` → after: `L5688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5688) · [Before (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5688)

```diff
-             if (null !== rH ? HH = rH === AH : (HH = HH.mutableReadLanes, (HH = (Xt & HH) === HH) && (BH._workInProgressVersionPrimary = AH, tt.push(BH))), HH) return LH(BH._source);
+             if (null !== DB ? BB = DB === YB : (BB = BB.mutableReadLanes, (BB = (lj & BB) === BB) && (OB._workInProgressVersionPrimary = YB, Jj.push(OB))), BB) return GB(OB._source);
```

#### 200. `bundles/bloxd.io/main.js` (Changed code · before: `L5770` → after: `L5770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5770) · [Before (L5770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5770)

```diff
-             }, Gt.updateQueue = BH, BH.lastEffect = HH.next = HH) : null === (LH = BH.lastEffect) ? BH.lastEffect = HH.next = HH : (AH = LH.next, LH.next = HH, HH.next = AH, BH.lastEffect = HH), HH
+             }, pj.updateQueue = OB, OB.lastEffect = BB.next = BB) : null === (GB = OB.lastEffect) ? OB.lastEffect = BB.next = BB : (YB = GB.next, GB.next = BB, BB.next = YB, OB.lastEffect = BB), BB
```

#### 201. `bundles/bloxd.io/main.js` (Changed code · before: `L5865` → after: `L5865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L5865) · [Before (L5865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L5865)

```diff
-             if (null === hH ? SH.next = SH : (SH.next = hH.next, hH.next = SH), BH.pending = SH, hH = HH.alternate, HH === Gt || null !== hH && hH === Gt) Wt = Qt = !0;
+             if (null === oB ? QB.next = QB : (QB.next = oB.next, oB.next = QB), OB.pending = QB, oB = BB.alternate, BB === pj || null !== oB && oB === pj) Rj = Nj = !0;
```

#### 202. `bundles/bloxd.io/main.js` (Changed code · before: `L6067` → after: `L6067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L6067) · [Before (L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L6067)

```diff
-             return hH = HH.child, 0 === (rH & SH) && (rH = hH.memoizedProps, (LH = null !== (LH = LH.compare) ? LH : vr)(rH, AH) && HH.ref === BH.ref) ? Tz(HH, BH, SH) : (BH.flags |= 1, (HH = GE(hH, AH)).ref = BH.ref, HH.return = BH, BH.child = HH)
+             return oB = BB.child, 0 === (DB & QB) && (DB = oB.memoizedProps, (GB = null !== (GB = GB.compare) ? GB : WD)(DB, YB) && BB.ref === OB.ref) ? Sy(BB, OB, QB) : (OB.flags |= 1, (BB = lM(oB, YB)).ref = OB.ref, BB.return = OB, OB.child = BB)
```

#### 203. `bundles/bloxd.io/main.js` (Changed code · before: `L6087` → after: `L6087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L6087) · [Before (L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L6087)

```diff
-                 if (0 === (1073741824 & LH)) return HH = null !== SH ? SH.baseLanes | LH : LH, BH.lanes = BH.childLanes = 1073741824, BH.memoizedState = {
+                 if (0 === (1073741824 & GB)) return BB = null !== QB ? QB.baseLanes | GB : GB, OB.lanes = OB.childLanes = 1073741824, OB.memoizedState = {
```

#### 204. `bundles/bloxd.io/main.js` (Changed code · before: `L6104` → after: `L6104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L6104) · [Before (L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L6104)

```diff
-             var SH = kS(LH) ? OS : US.current;
+             var QB = kQ(GB) ? UQ : SQ.current;
```

#### 205. `bundles/bloxd.io/main.js` (Changed code · before: `L6120` → after: `L6120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L6120) · [Before (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L6120)

```diff
-               "object" === typeof CH && null !== CH ? CH = Mh(CH) : CH = bS(BH, CH = kS(LH) ? OS : US.current);
+               "object" === typeof JB && null !== JB ? JB = Ro(JB) : JB = fQ(OB, JB = kQ(GB) ? UQ : SQ.current);
```

#### 206. `bundles/bloxd.io/main.js` (Changed code · before: `L6127` → after: `L6127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L6127) · [Before (L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L6127)

```diff
-               hH = BH.stateNode, Ph(HH, BH), tH = BH.memoizedProps, CH = BH.type === BH.elementType ? tH : zh(BH.type, tH), hH.props = CH, XH = BH.pendingProps, GH = hH.context, "object" === typeof(zH = LH.contextType) && null !== zH ? zH = Mh(zH) : zH = bS(BH, zH = kS(LH) ? OS : … [truncated]
+               oB = OB.stateNode, Vo(BB, OB), jB = OB.memoizedProps, JB = OB.type === OB.elementType ? jB : yo(OB.type, jB), oB.props = JB, PB = OB.pendingProps, zB = oB.context, "object" === typeof(yB = GB.contextType) && null !== yB ? yB = Ro(yB) : yB = fQ(OB, yB = kQ(GB) ? UQ : … [truncated]
```

#### 207. `bundles/bloxd.io/main.js` (Changed code · before: `L6210` → after: `L6210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L6210) · [Before (L6210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L6210)

```diff
-               mX: null,
+               UP: null,
```

#### 208. `bundles/bloxd.io/main.js` (Changed code · before: `L6216` → after: `L6216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L6216) · [Before (L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L6216)

```diff
-             } : (hH.isBackwards = BH, hH.mX = null, hH.renderingStartTime = 0, hH.last = AH, hH.tail = LH, hH.tailMode = rH, hH.lastEffect = SH)
+             } : (oB.isBackwards = OB, oB.UP = null, oB.renderingStartTime = 0, oB.last = YB, oB.tail = GB, oB.tailMode = DB, oB.lastEffect = QB)
```

#### 209. `bundles/bloxd.io/main.js` (Changed code · before: `L6225` → after: `L6225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L6225) · [Before (L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L6225)

```diff
-               if (null !== HH && 0 !== (64 & HH.flags)) HH: for (HH = BH.child; null !== HH;) {
+               if (null !== BB && 0 !== (64 & BB.flags)) BB: for (BB = OB.child; null !== BB;) {
```

#### 210. `bundles/bloxd.io/main.js` (Changed code · before: `L6374` → after: `L6374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L6374) · [Before (L6374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L6374)

```diff
-                     switch (CH = 9 === SH.nodeType ? SH : SH.ownerDocument, HH === YB && (HH = QB(LH)), HH === YB ? "script" === LH ? ((HH = CH.createElement("div")).innerHTML = "<script><\/script>", HH = HH.removeChild(HH.firstChild)) : "string" === typeof AH.is ? HH = CH.create … [truncated]
+                     switch (JB = 9 === QB.nodeType ? QB : QB.ownerDocument, BB === lO && (BB = qO(GB)), BB === lO ? "script" === GB ? ((BB = JB.createElement("div")).innerHTML = "<script><\/script>", BB = BB.removeChild(BB.firstChild)) : "string" === typeof YB.is ? BB = JB.create … [truncated]
```

#### 211. `bundles/bloxd.io/main.js` (Changed code · before: `L6451` → after: `L6451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L6451) · [Before (L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L6451)

```diff
-                   LH = wh(Dh.current), wh(nh.current), St(BH) ? (AH = BH.stateNode, LH = BH.memoizedProps, AH[tS] = BH, AH.nodeValue !== LH && (BH.flags |= 4)) : ((AH = (9 === LH.nodeType ? LH : LH.ownerDocument).createTextNode(AH))[tS] = BH, BH.stateNode = AH)
+                   GB = bo(To.current), bo(ao.current), jj(OB) ? (YB = OB.stateNode, GB = OB.memoizedProps, YB[jQ] = OB, YB.nodeValue !== GB && (OB.flags |= 4)) : ((YB = (9 === GB.nodeType ? GB : GB.ownerDocument).createTextNode(YB))[jQ] = OB, OB.stateNode = YB)
```

#### 212. `bundles/bloxd.io/main.js` (Changed code · before: `L6462` → after: `L6462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L6462) · [Before (L6462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L6462)

```diff
-                 if (tH = 0 !== (64 & BH.flags), null === (CH = AH.mX))
+                 if (jB = 0 !== (64 & OB.flags), null === (JB = YB.UP))
```

#### 213. `bundles/bloxd.io/main.js` (Changed code · before: `L6483` → after: `L6483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L6483) · [Before (L6483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L6483)

```diff
-                   AH.isBackwards ? (CH.sibling = BH.child, BH.child = CH) : (null !== (LH = AH.last) ? LH.sibling = CH : BH.child = CH, AH.last = CH)
+                   YB.isBackwards ? (JB.sibling = OB.child, OB.child = JB) : (null !== (GB = YB.last) ? GB.sibling = JB : OB.child = JB, YB.last = JB)
```

#### 214. `bundles/bloxd.io/main.js` (Changed code · before: `L6485` → after: `L6485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L6485) · [Before (L6485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L6485)

```diff
-                 return null !== AH.tail ? (LH = AH.tail, AH.mX = LH, AH.tail = LH.sibling, AH.lastEffect = BH.lastEffect, AH.renderingStartTime = Hh(), LH.sibling = null, BH = Jh.current, PS(Jh, tH ? 1 & BH | 2 : 1 & BH), LH) : null;
+                 return null !== YB.tail ? (GB = YB.tail, YB.UP = GB, YB.tail = GB.sibling, YB.lastEffect = OB.lastEffect, YB.renderingStartTime = Bo(), GB.sibling = null, OB = xo.current, AQ(xo, jB ? 1 & OB | 2 : 1 & OB), GB) : null;
```

#### 215. `bundles/bloxd.io/main.js` (Changed code · before: `L6635` → after: `L6635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L6635) · [Before (L6635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L6635)

```diff
-                 componentStack: null !== HH ? HH : ""
+                 componentStack: null !== BB ? BB : ""
```

#### 216. `bundles/bloxd.io/main.js` (Changed code · before: `L6666` → after: `L6666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L6666) · [Before (L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L6666)

```diff
-                   BH = (HH = BH.stateNode).getSnapshotBeforeUpdate(BH.elementType === BH.type ? LH : zh(BH.type, LH), AH), HH.__reactInternalSnapshotBeforeUpdate = BH
+                   OB = (BB = OB.stateNode).getSnapshotBeforeUpdate(OB.elementType === OB.type ? GB : yo(OB.type, GB), YB), BB.__reactInternalSnapshotBeforeUpdate = OB
```

#### 217. `bundles/bloxd.io/main.js` (Changed code · before: `L6805` → after: `L6805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L6805) · [Before (L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L6805)

```diff
-             HH: {
+             BB: {
```

#### 218. `bundles/bloxd.io/main.js` (Changed code · before: `L6824` → after: `L6824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L6824) · [Before (L6824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L6824)

```diff
-             16 & LH.flags && (PB(BH, ""), LH.flags &= -17);HH: BH: for (LH = HH;;) {
+             16 & GB.flags && (AO(OB, ""), GB.flags &= -17);BB: OB: for (GB = BB;;) {
```

#### 219. `bundles/bloxd.io/main.js` (Changed code · before: `L6865` → after: `L6865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L6865) · [Before (L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L6865)

```diff
-                 HH: for (;;) {
+                 BB: for (;;) {
```

#### 220. `bundles/bloxd.io/main.js` (Changed code · before: `L6881` → after: `L6881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L6881) · [Before (L6881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L6881)

```diff
-                 HH: for (var tH = HH, zH = rH, CH = zH;;)
+                 BB: for (var jB = BB, yB = DB, JB = yB;;)
```

#### 221. `bundles/bloxd.io/main.js` (Changed code · before: `L7026` → after: `L7026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7026) · [Before (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7026)

```diff
-             return 0 !== (48 & Jz) ? Hh() : -1 !== bC ? bC : bC = Hh()
+             return 0 !== (48 & sy) ? Bo() : -1 !== kJ ? kJ : kJ = Bo()
```

#### 222. `bundles/bloxd.io/main.js` (Changed code · before: `L7083` → after: `L7083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7083) · [Before (L7083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7083)

```diff
-             if (AH = DL(HH, HH === iz ? yz : 0), BH = nL, 0 === AH) null !== LH && (LH !== aS && gS(LH), HH.callbackNode = null, HH.callbackPriority = 0);
+             if (YB = aG(BB, BB === xy ? BJ : 0), OB = cG, 0 === YB) null !== GB && (GB !== CQ && rQ(GB), BB.callbackNode = null, BB.callbackPriority = 0);
```

#### 223. `bundles/bloxd.io/main.js` (Changed code · before: `L7123` → after: `L7123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7123) · [Before (L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7123)

```diff
-             var LH = DL(HH, HH === iz ? yz : 0);
+             var GB = aG(BB, BB === xy ? BJ : 0);
```

#### 224. `bundles/bloxd.io/main.js` (Changed code · before: `L7274` → after: `L7274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7274) · [Before (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7274)

```diff
-                 HH: {
+                 BB: {
```

#### 225. `bundles/bloxd.io/main.js` (Changed code · before: `L7356` → after: `L7356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7356) · [Before (L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7356)

```diff
-             return az.current = Zt, null === HH ? Zt : HH
+             return Hy.current = Cj, null === BB ? Cj : BB
```

#### 226. `bundles/bloxd.io/main.js` (Changed code · before: `L7396` → after: `L7396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7396) · [Before (L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7396)

```diff
-                 null !== HH && 0 === (2048 & HH.flags) && (null === HH.firstEffect && (HH.firstEffect = BH.firstEffect), null !== BH.lastEffect && (null !== HH.lastEffect && (HH.lastEffect.nextEffect = BH.firstEffect), HH.lastEffect = BH.lastEffect), 1 < BH.flags && (null !== HH. … [truncated]
+                 null !== BB && 0 === (2048 & BB.flags) && (null === BB.firstEffect && (BB.firstEffect = OB.firstEffect), null !== OB.lastEffect && (null !== BB.lastEffect && (BB.lastEffect.nextEffect = OB.firstEffect), BB.lastEffect = OB.lastEffect), 1 < OB.flags && (null !== BB. … [truncated]
```

#### 227. `bundles/bloxd.io/main.js` (Changed code · before: `L7430` → after: `L7430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7430) · [Before (L7430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7430)

```diff
-             if (null !== UC && 0 === (24 & AH) && UC.has(HH) && UC.delete(HH), HH === iz && (pz = iz = null, yz = 0), 1 < LH.flags ? null !== LH.lastEffect ? (LH.lastEffect.nextEffect = LH, AH = LH.firstEffect) : AH = LH : AH = LH.firstEffect, null !== AH) {
+             if (null !== nJ && 0 === (24 & YB) && nJ.has(BB) && nJ.delete(BB), BB === xy && (ty = xy = null, BJ = 0), 1 < GB.flags ? null !== GB.lastEffect ? (GB.lastEffect.nextEffect = GB, YB = GB.firstEffect) : YB = GB : YB = GB.firstEffect, null !== YB) {
```

#### 228. `bundles/bloxd.io/main.js` (Changed code · before: `L7436` → after: `L7436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7436) · [Before (L7436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7436)

```diff
-                 else HH: if (zH = (zH = tH.ownerDocument) && zH.defaultView || window, (EH = zH.getSelection && zH.getSelection()) && 0 !== EH.rangeCount) {
+                 else BB: if (yB = (yB = jB.ownerDocument) && yB.defaultView || window, (MB = yB.getSelection && yB.getSelection()) && 0 !== MB.rangeCount) {
```

#### 229. `bundles/bloxd.io/main.js` (Changed code · before: `L7451` → after: `L7451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7451) · [Before (L7451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7451)

```diff
-                   BH: for (;;) {
+                   OB: for (;;) {
```

#### 230. `bundles/bloxd.io/main.js` (Changed code · before: `L7523` → after: `L7523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7523) · [Before (L7523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7523)

```diff
-                 null !== tH && Or(vH) && (PH = tH.start, void 0 === (TH = tH.end) && (TH = PH), "selectionStart" in vH ? (vH.selectionStart = PH, vH.selectionEnd = Math.min(TH, vH.value.length)) : (TH = (PH = vH.ownerDocument || document) && PH.defaultView || window).getSelection … [truncated]
+                 null !== jB && UD(WB) && (AB = jB.start, void 0 === (VB = jB.end) && (VB = AB), "selectionStart" in WB ? (WB.selectionStart = AB, WB.selectionEnd = Math.min(VB, WB.value.length)) : (VB = (AB = WB.ownerDocument || document) && AB.defaultView || window).getSelection … [truncated]
```

#### 231. `bundles/bloxd.io/main.js` (Changed code · before: `L7688-L7689` → after: `L7688-L7689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7688-L7689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7688-L7689) · [Before (L7688-L7689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7688-L7689)

```diff
-             else HH: switch (HH) {
-               case OH:
+             else BB: switch (BB) {
+               case UB:
```

#### 232. `bundles/bloxd.io/main.js` (Changed code · before: `L7691` → after: `L7691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7691) · [Before (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7691)

```diff
-               case gH:
+               case rB:
```

#### 233. `bundles/bloxd.io/main.js` (Changed code · before: `L7694` → after: `L7694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7694) · [Before (L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7694)

```diff
-               case bH:
+               case fB:
```

#### 234. `bundles/bloxd.io/main.js` (Changed code · before: `L7697` → after: `L7697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7697) · [Before (L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7697)

```diff
-               case kH:
+               case kB:
```

#### 235. `bundles/bloxd.io/main.js` (Changed code · before: `L7699` → after: `L7699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7699) · [Before (L7699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7699)

```diff
-               case fH:
+               case mB:
```

#### 236. `bundles/bloxd.io/main.js` (Changed code · before: `L7701` → after: `L7701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7701) · [Before (L7701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7701)

```diff
-               case lH:
+               case IB:
```

#### 237. `bundles/bloxd.io/main.js` (Changed code · before: `L7703` → after: `L7703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7703) · [Before (L7703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7703)

```diff
-               case NH:
+               case XB:
```

#### 238. `bundles/bloxd.io/main.js` (Changed code · before: `L7705` → after: `L7705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7705) · [Before (L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7705)

```diff
-               case RH:
+               case wB:
```

#### 239. `bundles/bloxd.io/main.js` (Changed code · before: `L7709` → after: `L7709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7709) · [Before (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7709)

```diff
-                   case mH:
+                   case dB:
```

#### 240. `bundles/bloxd.io/main.js` (Changed code · before: `L7712` → after: `L7712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7712) · [Before (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7712)

```diff
-                   case oH:
+                   case KB:
```

#### 241. `bundles/bloxd.io/main.js` (Changed code · before: `L7715` → after: `L7715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7715) · [Before (L7715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7715)

```diff
-                   case IH:
+                   case uB:
```

#### 242. `bundles/bloxd.io/main.js` (Changed code · before: `L7718` → after: `L7718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7718) · [Before (L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7718)

```diff
-                   case KH:
+                   case FB:
```

#### 243. `bundles/bloxd.io/main.js` (Changed code · before: `L7721` → after: `L7721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7721) · [Before (L7721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7721)

```diff
-                   case cH:
+                   case iB:
```

#### 244. `bundles/bloxd.io/main.js` (Changed code · before: `L7724` → after: `L7724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7724) · [Before (L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7724)

```diff
-                   case eH:
+                   case LB:
```

#### 245. `bundles/bloxd.io/main.js` (Changed code · before: `L7728` → after: `L7728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7728) · [Before (L7728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7728)

```diff
-                 throw Error(hH(130, null == HH ? HH : typeof HH, ""))
+                 throw Error(oB(130, null == BB ? BB : typeof BB, ""))
```

#### 246. `bundles/bloxd.io/main.js` (Changed code · before: `L7761-L7762` → after: `L7761-L7762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7761-L7762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7761-L7762) · [Before (L7761-L7762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7761-L7762)

```diff
-             HH: if (LH) {
-               BH: {
+             BB: if (GB) {
+               OB: {
```

#### 247. `bundles/bloxd.io/main.js` (Changed code · before: `L7789` → after: `L7789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7789) · [Before (L7789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7789)

```diff
-             return null === BH.context ? BH.context = LH : BH.pendingContext = LH, (BH = Th(SH, tH)).payload = {
+             return null === OB.context ? OB.context = GB : OB.pendingContext = GB, (OB = So(QB, jB)).payload = {
```

#### 248. `bundles/bloxd.io/main.js` (Changed code · before: `L7801` → after: `L7801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7801) · [Before (L7801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7801)

```diff
-               HH.retryLane = 0 !== LH && LH < BH ? LH : BH
+               BB.retryLane = 0 !== GB && GB < OB ? GB : OB
```

#### 249. `bundles/bloxd.io/main.js` (Changed code · before: `L7903` → after: `L7903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7903) · [Before (L7903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7903)

```diff
-                       if (null !== (rH = BH.memoizedState) && (rH.mX = null, rH.tail = null, rH.lastEffect = null), PS(Jh, Jh.current), AH) break;
+                       if (null !== (DB = OB.memoizedState) && (DB.UP = null, DB.tail = null, DB.lastEffect = null), AQ(xo, xo.current), YB) break;
```

#### 250. `bundles/bloxd.io/main.js` (Changed code · before: `L7928` → after: `L7928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7928) · [Before (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7928)

```diff
-                 HH: {
+                 BB: {
```

#### 251. `bundles/bloxd.io/main.js` (Changed code · before: `L7954` → after: `L7954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7954) · [Before (L7954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7954)

```diff
-                 return AH = BH.type, rH = BH.pendingProps, Sz(HH, BH, AH, rH = BH.elementType === AH ? rH : zh(AH, rH), LH);
+                 return YB = OB.type, DB = OB.pendingProps, oy(BB, OB, YB, DB = OB.elementType === YB ? DB : yo(YB, DB), GB);
```

#### 252. `bundles/bloxd.io/main.js` (Changed code · before: `L7956` → after: `L7956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7956) · [Before (L7956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7956)

```diff
-                 return AH = BH.type, rH = BH.pendingProps, hz(HH, BH, AH, rH = BH.elementType === AH ? rH : zh(AH, rH), LH);
+                 return YB = OB.type, DB = OB.pendingProps, jy(BB, OB, YB, DB = OB.elementType === YB ? DB : yo(YB, DB), GB);
```

#### 253. `bundles/bloxd.io/main.js` (Changed code · before: `L7978` → after: `L7978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7978) · [Before (L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7978)

```diff
-                 return AH = BH.type, rH = BH.pendingProps, Hz(HH, BH, AH, rH = BH.elementType === AH ? rH : zh(AH, rH), LH);
+                 return YB = OB.type, DB = OB.pendingProps, Oy(BB, OB, YB, DB = OB.elementType === YB ? DB : yo(YB, DB), GB);
```

#### 254. `bundles/bloxd.io/main.js` (Changed code · before: `L7985` → after: `L7985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L7985) · [Before (L7985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L7985)

```diff
-                 HH: {
+                 BB: {
```

#### 255. `bundles/bloxd.io/main.js` (Changed code · before: `L8036` → after: `L8036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8036) · [Before (L8036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8036)

```diff
-                 return AH = BH.type, rH = BH.pendingProps, rH = BH.elementType === AH ? rH : zh(AH, rH), null !== HH && (HH.alternate = null, BH.alternate = null, BH.flags |= 2), BH.tag = 1, kS(AH) ? (HH = !0, fS(BH)) : HH = !1, Wh(BH, LH), fh(BH, AH, rH), Kh(BH, AH, rH, LH), tz( … [truncated]
+                 return YB = OB.type, DB = OB.pendingProps, DB = OB.elementType === YB ? DB : yo(YB, DB), null !== BB && (BB.alternate = null, OB.alternate = null, OB.flags |= 2), OB.tag = 1, kQ(YB) ? (BB = !0, mQ(OB)) : BB = !1, No(OB, GB), Fo(OB, YB, DB), Lo(OB, YB, DB, GB), yy( … [truncated]
```

#### 256. `bundles/bloxd.io/main.js` (Changed code · before: `L8193-L8195` → after: `L8193-L8195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8193-L8195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8193-L8195) · [Before (L8193-L8195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8193-L8195)

```diff
-         }, , , (HH, BH, LH) => {
-           HH.exports = LH(79)
-         }, , , , (HH, BH) => {
+         }, , , , , (BB, OB, GB) => {
+           BB.exports = GB(89)
+         }, , , , , , , , (BB, OB) => {
```

#### 257. `bundles/bloxd.io/main.js` (Changed code · before: `L8272` → after: `L8272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8272) · [Before (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8272)

```diff
-             HH: for (;;) {
+             BB: for (;;) {
```

#### 258. `bundles/bloxd.io/main.js` (Changed code · before: `L8290` → after: `L8290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8290) · [Before (L8290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8290)

```diff
-                 HH: for (var AH = 0, rH = HH.length; AH < rH;) {
+                 BB: for (var YB = 0, DB = BB.length; YB < DB;) {
```

#### 259. `bundles/bloxd.io/main.js` (Changed code · before: `L8309` → after: `L8309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8309) · [Before (L8309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8309)

```diff
-             return 0 !== LH ? LH : HH.id - BH.id
+             return 0 !== GB ? GB : BB.id - OB.id
```

#### 260. `bundles/bloxd.io/main.js` (Changed code · before: `L8349` → after: `L8349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8349) · [Before (L8349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8349)

```diff
-                   LH = BH.unstable_now(), "function" === typeof tH ? IH.callback = tH : IH === VH(kH) && OH(kH), eH(LH)
+                   GB = OB.unstable_now(), "function" === typeof jB ? uB.callback = jB : uB === nB(kB) && UB(kB), LB(GB)
```

#### 261. `bundles/bloxd.io/main.js` (Changed code · before: `L8409` → after: `L8409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8409) · [Before (L8409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8409)

```diff
-             switch ("object" === typeof hH && null !== hH ? hH = "number" === typeof(hH = hH.delay) && 0 < hH ? tH + hH : tH : hH = tH, HH) {
+             switch ("object" === typeof oB && null !== oB ? oB = "number" === typeof(oB = oB.delay) && 0 < oB ? jB + oB : jB : oB = jB, BB) {
```

#### 262. `bundles/bloxd.io/main.js` (Changed code · before: `L8445` → after: `L8445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8445) · [Before (L8445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8445)

```diff
-         }, , (HH, BH, LH) => {
+         }, , , (BB, OB, GB) => {
```

#### 263. `bundles/bloxd.io/main.js` (Changed code · before: `L8486-L8488` → after: `L8486-L8488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8486-L8488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8486-L8488) · [Before (L8486-L8488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8486-L8488)

```diff
-           var AH = LH(168),
-             rH = LH(176),
-             SH = LH(85),
+           var YB = GB(182),
+             DB = GB(192),
+             QB = GB(96),
```

#### 264. `bundles/bloxd.io/main.js` (Changed code · before: `L8490-L8493` → after: `L8490-L8493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8490-L8493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8490-L8493) · [Before (L8490-L8493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8490-L8493)

```diff
-             tH = LH(92),
-             zH = LH(101),
-             CH = LH(105),
-             EH = LH(30),
+             jB = GB(98),
+             yB = GB(104),
+             JB = GB(113),
+             MB = GB(31),
```

#### 265. `bundles/bloxd.io/main.js` (Changed code · before: `L8495-L8498` → after: `L8495-L8498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8495-L8498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8495-L8498) · [Before (L8495-L8498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8495-L8498)

```diff
-             GH = LH(155),
-             YH = LH(157),
-             uH = LH(114);
-           XH.subsiteUsed && !XH.subsiteUsedData[XH.subsiteUsed].enabled && console.error(`Selected subsiteUsed ${XH.subsiteUsed} but it is not enabled`);
+             zB = GB(165),
+             lB = GB(173),
+             pB = GB(118);
+           PB.subsiteUsed && !PB.subsiteUsedData[PB.subsiteUsed].enabled && console.error(`Selected subsiteUsed ${PB.subsiteUsed} but it is not enabled`);
```

#### 266. `bundles/bloxd.io/main.js` (Changed code · before: `L8506` → after: `L8506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8506) · [Before (L8506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8506)

```diff
-             return [`Browser: ${xH()}`, `Version: ${vH()}`, `Platform: ${navigator.platform}`, `Platform Type: ${kH()}`, `Input Type: ${(0,zH.d)()}`].join(HH)
+             return [`Browser: ${RB()}`, `Version: ${WB()}`, `Platform: ${navigator.platform}`, `Platform Type: ${kB()}`, `Input Type: ${(0,yB.d)()}`].join(BB)
```

#### 267. `bundles/bloxd.io/main.js` (Changed code · before: `L8553` → after: `L8553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8553) · [Before (L8553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8553)

```diff
-             return "macos" === HH && navigator.maxTouchPoints > 1 ? "ios" : "linux" !== HH || "Linux armv81" !== navigator.platform && "touchOnly" !== (0, zH.d)() ? AH.y.includes(HH) ? HH : "other" : "android"
+             return "macos" === BB && navigator.maxTouchPoints > 1 ? "ios" : "linux" !== BB || "Linux armv81" !== navigator.platform && "touchOnly" !== (0, yB.d)() ? YB.F.includes(BB) ? BB : "other" : "android"
```

#### 268. `bundles/bloxd.io/main.js` (Changed code · before: `L8566` → after: `L8566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8566) · [Before (L8566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8566)

```diff
-             return AH.I.includes(HH) ? HH : "other"
+             return YB.Q.includes(BB) ? BB : "other"
```

#### 269. `bundles/bloxd.io/main.js` (Changed code · before: `L8583` → after: `L8583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8583) · [Before (L8583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8583)

```diff
-             return (0, AH.s)(XH.siteUsed)
+             return (0, YB.x)(PB.siteUsed)
```

#### 270. `bundles/bloxd.io/main.js` (Changed code · before: `L8607-L8608` → after: `L8607-L8608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8607-L8608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8607-L8608) · [Before (L8607-L8608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8607-L8608)

```diff
-               useRecaptcha: !rH.g.recaptchaDisabled && !(0, XH.isDiscordClient)(),
-               useTurnstile: !rH.g.turnstileDisabled && !(0, XH.isDiscordClient)() && "mobileIos" !== XH.siteUsed && !GH.c,
+               useRecaptcha: !DB.f.recaptchaDisabled && !(0, PB.isDiscordClient)(),
+               useTurnstile: !DB.f.turnstileDisabled && !(0, PB.isDiscordClient)() && "mobileIos" !== PB.siteUsed && !zB.c,
```

#### 271. `bundles/bloxd.io/main.js` (Changed code · before: `L8661` → after: `L8661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8661) · [Before (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8661)

```diff
-               return void 0 === HH ? "not_probed" : (0, YH.b)(HH)
+               return void 0 === BB ? "not_probed" : (0, lB.c)(BB)
```

#### 272. `bundles/bloxd.io/main.js` (Changed code · before: `L8663` → after: `L8663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8663) · [Before (L8663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8663)

```diff
-             return yH ??= (0, YH.b)((0, uH.B)()), yH
+             return tB ??= (0, lB.c)((0, pB.F)()), tB
```

#### 273. `bundles/bloxd.io/main.js` (Changed code · before: `L8692` → after: `L8692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8692) · [Before (L8692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8692)

```diff
-             const AH = null !== (HH = null !== (BH = DH) && void 0 !== BH ? BH : null === (LH = (0, uH.B)()) || void 0 === LH ? void 0 : LH.vendor) && void 0 !== HH ? HH : null;
+             const YB = null !== (BB = null !== (OB = aB) && void 0 !== OB ? OB : null === (GB = (0, pB.F)()) || void 0 === GB ? void 0 : GB.vendor) && void 0 !== BB ? BB : null;
```

#### 274. `bundles/bloxd.io/main.js` (Changed code · before: `L8699` → after: `L8699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8699) · [Before (L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8699)

```diff
-               const AH = null !== (HH = null !== (BH = DH) && void 0 !== BH ? BH : null === (LH = (0, uH.x)()) || void 0 === LH ? void 0 : LH.vendor) && void 0 !== HH ? HH : null;
+               const YB = null !== (BB = null !== (OB = aB) && void 0 !== OB ? OB : null === (GB = (0, pB.x)()) || void 0 === GB ? void 0 : GB.vendor) && void 0 !== BB ? BB : null;
```

#### 275. `bundles/bloxd.io/main.js` (Changed code · before: `L8735` → after: `L8735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8735) · [Before (L8735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8735)

```diff
-               return EH.e.setItem(CH.L, (0, CH.d)(LH)), EH.e.setItem(CH.K, (0, CH.p)(LH)), "usable"
+               return MB.g.setItem(JB.J, (0, JB.d)(GB)), MB.g.setItem(JB.F, (0, JB.q)(GB)), "usable"
```

#### 276. `bundles/bloxd.io/main.js` (Changed code · before: `L8749` → after: `L8749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8749) · [Before (L8749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8749)

```diff
-                     for (let AH, rH, SH = 0, hH = 0; rH = HH.charAt(hH++); ~rH && (AH = SH % 4 ? 64 * AH + rH : rH, SH++ % 4) ? BH += String.fromCharCode(255 & AH >> (-2 * SH & 6)) : 0) rH = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(rH);
+                     for (let YB, DB, QB = 0, oB = 0; DB = BB.charAt(oB++); ~DB && (YB = QB % 4 ? 64 * YB + DB : DB, QB++ % 4) ? OB += String.fromCharCode(255 & YB >> (-2 * QB & 6)) : 0) DB = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(DB);
```

#### 277. `bundles/bloxd.io/main.js` (Changed code · before: `L8756` → after: `L8756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8756) · [Before (L8756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8756)

```diff
-                 return hH ? rH = hH : (rH = YB.kGdYVv(rH), HH[SH] = rH), rH
+                 return oB ? DB = oB : (DB = lO.kGdYVv(DB), BB[QB] = DB), DB
```

#### 278. `bundles/bloxd.io/main.js` (Changed code · before: `L8777` → after: `L8777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8777) · [Before (L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8777)

```diff
-                 HH = null !== (BH = HH) && void 0 !== BH ? BH : "";
+                 BB = null !== (OB = BB) && void 0 !== OB ? OB : "";
```

#### 279. `bundles/bloxd.io/main.js` (Changed code · before: `L8781` → after: `L8781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8781) · [Before (L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8781)

```diff
-                   LH += (null !== (AH = HH[rH]) && void 0 !== AH ? AH : rH.toString()).charCodeAt(0).toString(32)
+                   GB += (null !== (YB = BB[DB]) && void 0 !== YB ? YB : DB.toString()).charCodeAt(0).toString(32)
```

#### 280. `bundles/bloxd.io/main.js` (Changed code · before: `L8785` → after: `L8785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L8785) · [Before (L8785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L8785)

```diff
-               WB = LH(202).shouldUseUkPrivacyPolicy;
+               ZO = GB(224).shouldUseUkPrivacyPolicy;
```

#### 281. `bundles/bloxd.io/main.js` (Changed code · before: `L9070` → after: `L9070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L9070) · [Before (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L9070)

```diff
-               var AH, rH = (AH = LH(91)) && AH.__esModule ? AH : {
+               var YB, DB = (YB = GB(91)) && YB.__esModule ? YB : {
```

#### 282. `bundles/bloxd.io/main.js` (Changed code · before: `L9122` → after: `L9122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L9122) · [Before (L9122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L9122)

```diff
-                 return HH && HH.__esModule ? HH : {
+                 return BB && BB.__esModule ? BB : {
```

#### 283. `bundles/bloxd.io/main.js` (Changed code · before: `L9188` → after: `L9188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L9188) · [Before (L9188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L9188)

```diff
-                 }, BH.Iu = function() {
+                 }, OB.Lp = function() {
```

#### 284. `bundles/bloxd.io/main.js` (Changed code · before: `L9191` → after: `L9191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L9191) · [Before (L9191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L9191)

```diff
-                   return HH ? String(this.Iu().name).toLowerCase() || "" : this.Iu().name || ""
+                   return BB ? String(this.Lp().name).toLowerCase() || "" : this.Lp().name || ""
```

#### 285. `bundles/bloxd.io/main.js` (Changed code · before: `L9271` → after: `L9271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L9271) · [Before (L9271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L9271)

```diff
-               var AH, rH = (AH = LH(17)) && AH.__esModule ? AH : {
+               var YB, DB = (YB = GB(17)) && YB.__esModule ? YB : {
```

#### 286. `bundles/bloxd.io/main.js` (Changed code · before: `L9671` → after: `L9671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L9671) · [Before (L9671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L9671)

```diff
-               var AH, rH = (AH = LH(17)) && AH.__esModule ? AH : {
+               var YB, DB = (YB = GB(17)) && YB.__esModule ? YB : {
```

#### 287. `bundles/bloxd.io/main.js` (Changed code · before: `L9812` → after: `L9812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L9812) · [Before (L9812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L9812)

```diff
-               var AH, rH = (AH = LH(17)) && AH.__esModule ? AH : {
+               var YB, DB = (YB = GB(17)) && YB.__esModule ? YB : {
```

#### 288. `bundles/bloxd.io/main.js` (Changed code · before: `L10012` → after: `L10012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10012) · [Before (L10012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10012)

```diff
-               var AH, rH = (AH = LH(17)) && AH.__esModule ? AH : {
+               var YB, DB = (YB = GB(17)) && YB.__esModule ? YB : {
```

#### 289. `bundles/bloxd.io/main.js` (Changed code · before: `L10083` → after: `L10083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10083) · [Before (L10083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10083)

```diff
-         }, , , , , , , (HH, BH, LH) => {
+         }, , (BB, OB, GB) => {
```

#### 290. `bundles/bloxd.io/main.js` (Changed code · before: `L10122` → after: `L10122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10122) · [Before (L10122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10122)

```diff
-                 tH = rH.pathname + (hH ? `?${hH}` : "") + rH.hash;
+                 jB = DB.pathname + (oB ? `?${oB}` : "") + DB.hash;
```

#### 291. `bundles/bloxd.io/main.js` (Changed code · before: `L10139` → after: `L10139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10139) · [Before (L10139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10139)

```diff
-                     for (let AH, rH, SH = 0, hH = 0; rH = HH.charAt(hH++); ~rH && (AH = SH % 4 ? 64 * AH + rH : rH, SH++ % 4) ? BH += String.fromCharCode(255 & AH >> (-2 * SH & 6)) : 0) rH = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(rH);
+                     for (let YB, DB, QB = 0, oB = 0; DB = BB.charAt(oB++); ~DB && (YB = QB % 4 ? 64 * YB + DB : DB, QB++ % 4) ? OB += String.fromCharCode(255 & YB >> (-2 * QB & 6)) : 0) DB = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(DB);
```

#### 292. `bundles/bloxd.io/main.js` (Changed code · before: `L10146` → after: `L10146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10146) · [Before (L10146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10146)

```diff
-                 return tH ? rH = tH : (rH = SH.TgIWQA(rH), HH[hH] = rH), rH
+                 return jB ? DB = jB : (DB = QB.TgIWQA(DB), BB[oB] = DB), DB
```

#### 293. `bundles/bloxd.io/main.js` (Changed code · before: `L10158` → after: `L10158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10158) · [Before (L10158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10158)

```diff
-                 "string" === typeof(null === (BH = HH.data) || void 0 === BH ? void 0 : BH.type) && "updateSearchParam" === (null === (LH = HH.data) || void 0 === LH ? void 0 : LH.type) && (console.log(`Adding search param ${HH.data.name} with value ${HH.data.value}`), rH.setSear … [truncated]
+                 "string" === typeof(null === (OB = BB.data) || void 0 === OB ? void 0 : OB.type) && "updateSearchParam" === (null === (GB = BB.data) || void 0 === GB ? void 0 : GB.type) && (console.log(`Adding search param ${BB.data.name} with value ${BB.data.value}`), DB.setSear … [truncated]
```

#### 294. `bundles/bloxd.io/main.js` (Changed code · before: `L10185` → after: `L10185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10185) · [Before (L10185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10185)

```diff
-         }, , , , , , , , , (HH, BH, LH) => {
+         }, , , , , , (BB, OB, GB) => {
```

#### 295. `bundles/bloxd.io/main.js` (Changed code · before: `L10217` → after: `L10217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10217) · [Before (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10217)

```diff
-         }, , , , (HH, BH, LH) => {
+         }, , , , , , , , , (BB, OB, GB) => {
```

#### 296. `bundles/bloxd.io/main.js` (Changed code · before: `L10219-L10223` → after: `L10219-L10223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10219-L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10219-L10223) · [Before (L10219-L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10219-L10223)

```diff
-             A: () => SH.o,
-             E: () => MH,
-             I: () => QH,
-             K: () => uH,
-             L: () => GH,
+             A: () => QB.r,
+             C: () => NB,
+             D: () => qB,
+             F: () => pB,
+             J: () => zB,
```

#### 297. `bundles/bloxd.io/main.js` (Changed code · before: `L10225-L10226` → after: `L10225-L10226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10225-L10226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10225-L10226) · [Before (L10225-L10226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10225-L10226)

```diff
-             R: () => WH,
-             b: () => vH,
+             Q: () => ZB,
+             c: () => WB,
```

#### 298. `bundles/bloxd.io/main.js` (Changed code · before: `L10228-L10230` → after: `L10228-L10229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10228-L10229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10228-L10229) · [Before (L10228-L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10228-L10230)

```diff
-             g: () => EH,
-             k: () => CH,
-             n: () => XH,
+             h: () => MB,
+             l: () => JB,
```

#### 299. `bundles/bloxd.io/main.js` (Changed code · before: `L10232` → after: `L10231-L10232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10231-L10232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10231-L10232) · [Before (L10232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10232)

```diff
-             s: () => zH,
+             q: () => jB,
+             r: () => yB,
```

#### 300. `bundles/bloxd.io/main.js` (Changed code · before: `L10234` → after: `L10234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10234) · [Before (L10234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10234)

```diff
-             y: () => SH.l
+             w: () => QB.o
```

#### 301. `bundles/bloxd.io/main.js` (Changed code · before: `L10236` → after: `L10236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10236) · [Before (L10236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10236)

```diff
-           var AH = LH(85),
+           var YB = GB(96),
```

#### 302. `bundles/bloxd.io/main.js` (Changed code · before: `L10238` → after: `L10238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10238) · [Before (L10238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10238)

```diff
-             SH = LH(112);
+             QB = GB(116);
```

#### 303. `bundles/bloxd.io/main.js` (Changed code · before: `L10254` → after: `L10254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10254) · [Before (L10254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10254)

```diff
-             let AH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (BH = null === (LH = globalThis.navigator) || void 0 === LH ? void 0 : LH.userAgent) && void 0 !== BH ? BH : "";
+             let YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (OB = null === (GB = globalThis.navigator) || void 0 === GB ? void 0 : GB.userAgent) && void 0 !== OB ? OB : "";
```

#### 304. `bundles/bloxd.io/main.js` (Changed code · before: `L10260` → after: `L10260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10260) · [Before (L10260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10260)

```diff
-             let AH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (BH = null === (LH = globalThis.navigator) || void 0 === LH ? void 0 : LH.userAgent) && void 0 !== BH ? BH : "";
+             let YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (OB = null === (GB = globalThis.navigator) || void 0 === GB ? void 0 : GB.userAgent) && void 0 !== OB ? OB : "";
```

#### 305. `bundles/bloxd.io/main.js` (Changed code · before: `L10270` → after: `L10270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10270) · [Before (L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10270)

```diff
-             let AH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (BH = null === (LH = globalThis.navigator) || void 0 === LH ? void 0 : LH.userAgent) && void 0 !== BH ? BH : "";
+             let YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (OB = null === (GB = globalThis.navigator) || void 0 === GB ? void 0 : GB.userAgent) && void 0 !== OB ? OB : "";
```

#### 306. `bundles/bloxd.io/main.js` (Changed code · before: `L10281` → after: `L10281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10281) · [Before (L10281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10281)

```diff
-         }, , , , , , , (HH, BH, LH) => {
+         }, , , (BB, OB, GB) => {
```

#### 307. `bundles/bloxd.io/main.js` (Changed code · before: `L10283-L10287` → after: `L10283-L10287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10283-L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10283-L10287) · [Before (L10283-L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10283-L10287)

```diff
-             b: () => hH,
-             f: () => SH,
-             h: () => tH,
-             l: () => CH,
-             o: () => rH
+             e: () => oB,
+             g: () => QB,
+             k: () => jB,
+             o: () => JB,
+             r: () => DB
```

#### 308. `bundles/bloxd.io/main.js` (Changed code · before: `L10289` → after: `L10289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10289) · [Before (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10289)

```diff
-           var AH = LH(114);
+           var YB = GB(118);
```

#### 309. `bundles/bloxd.io/main.js` (Changed code · before: `L10331-L10332` → after: `L10331-L10332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10331-L10332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10331-L10332) · [Before (L10331-L10332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10331-L10332)

```diff
-               vendor: null !== (BH = null === (LH = HH.info) || void 0 === LH ? void 0 : LH.vendor) && void 0 !== BH ? BH : "",
-               architecture: null !== (AH = null === (rH = HH.info) || void 0 === rH ? void 0 : rH.architecture) && void 0 !== AH ? AH : ""
+               vendor: null !== (OB = null === (GB = BB.info) || void 0 === GB ? void 0 : GB.vendor) && void 0 !== OB ? OB : "",
+               architecture: null !== (YB = null === (DB = BB.info) || void 0 === DB ? void 0 : DB.architecture) && void 0 !== YB ? YB : ""
```

#### 310. `bundles/bloxd.io/main.js` (Changed code · before: `L10338` → after: `L10338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10338) · [Before (L10338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10338)

```diff
-             return /swiftshader/i.test(`${null!==(BH=null===(LH=HH.info)||void 0===LH?void 0:LH.vendor)&&void 0!==BH?BH:""} ${null!==(AH=null===(rH=HH.info)||void 0===rH?void 0:rH.architecture)&&void 0!==AH?AH:""}`)
+             return /swiftshader/i.test(`${null!==(OB=null===(GB=BB.info)||void 0===GB?void 0:GB.vendor)&&void 0!==OB?OB:""} ${null!==(YB=null===(DB=BB.info)||void 0===DB?void 0:DB.architecture)&&void 0!==YB?YB:""}`)
```

#### 311. `bundles/bloxd.io/main.js` (Changed code · before: `L10343` → after: `L10343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10343) · [Before (L10343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10343)

```diff
-             return null !== (BH = null !== (LH = null === (AH = HH.info) || void 0 === AH ? void 0 : AH.isFallbackAdapter) && void 0 !== LH ? LH : HH.isFallbackAdapter) && void 0 !== BH && BH
+             return null !== (OB = null !== (GB = null === (YB = BB.info) || void 0 === YB ? void 0 : YB.isFallbackAdapter) && void 0 !== GB ? GB : BB.isFallbackAdapter) && void 0 !== OB && OB
```

#### 312. `bundles/bloxd.io/main.js` (Changed code · before: `L10354` → after: `L10355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10355) · [Before (L10354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10354)

```diff
-             L: () => WH,
+             N: () => ZB,
```

#### 313. `bundles/bloxd.io/main.js` (Changed code · before: `L10356-L10360` → after: `L10357-L10361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10357-L10361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10357-L10361) · [Before (L10356-L10360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10356-L10360)

```diff
-             g: () => VH,
-             h: () => TH,
-             i: () => PH,
-             l: () => xH,
-             p: () => CH,
+             f: () => nB,
+             j: () => VB,
+             m: () => AB,
+             o: () => RB,
+             s: () => JB,
```

#### 314. `bundles/bloxd.io/main.js` (Changed code · before: `L10362-L10363` → after: `L10363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10363) · [Before (L10362-L10363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10362-L10363)

```diff
-             x: () => EH,
-             z: () => vH
+             x: () => MB
```

#### 315. `bundles/bloxd.io/main.js` (Changed code · before: `L10387` → after: `L10387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10387) · [Before (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10387)

```diff
-                     vendor: null !== (LH = HH.getParameter(null !== (AH = null === zH || void 0 === zH ? void 0 : zH.UNMASKED_VENDOR_WEBGL) && void 0 !== AH ? AH : HH.VENDOR)) && void 0 !== LH ? LH : "",
+                     vendor: null !== (GB = BB.getParameter(null !== (YB = null === yB || void 0 === yB ? void 0 : yB.UNMASKED_VENDOR_WEBGL) && void 0 !== YB ? YB : BB.VENDOR)) && void 0 !== GB ? GB : "",
```

#### 316. `bundles/bloxd.io/main.js` (Changed code · before: `L10414` → after: `L10414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10414) · [Before (L10414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10414)

```diff
-             return rH ? AH : void 0
+             return DB ? YB : void 0
```

#### 317. `bundles/bloxd.io/main.js` (Changed code · before: `L10441` → after: `L10441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10441) · [Before (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10441)

```diff
-             return rH && null !== (HH = AH) && void 0 !== HH && HH.renderer ? AH : GH
+             return DB && null !== (BB = YB) && void 0 !== BB && BB.renderer ? YB : zB
```

#### 318. `bundles/bloxd.io/main.js` (Changed code · before: `L10458` → after: `L10458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10458) · [Before (L10458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10458)

```diff
-             QH ??= null !== (BH = null === (LH = HH.getSupportedExtensions()) || void 0 === LH ? void 0 : LH.includes("KHR_parallel_shader_compile")) && void 0 !== BH ? BH : null
+             qB ??= null !== (OB = null === (GB = BB.getSupportedExtensions()) || void 0 === GB ? void 0 : GB.includes("KHR_parallel_shader_compile")) && void 0 !== OB ? OB : null
```

#### 319. `bundles/bloxd.io/main.js` (Changed code · before: `L10478` → after: `L10478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10478) · [Before (L10478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10478)

```diff
-         }, , , , , , (HH, BH, LH) => {
+         }, , (BB, OB, GB) => {
```

#### 320. `bundles/bloxd.io/main.js` (Changed code · before: `L10495-L10498` → after: `L10495-L10498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10495-L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10495-L10498) · [Before (L10495-L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10495-L10498)

```diff
-           var AH = LH(152),
-             rH = LH(30),
-             SH = LH(92),
-             hH = LH(129);
+           var YB = GB(162),
+             DB = GB(31),
+             QB = GB(98),
+             oB = GB(128);
```

#### 321. `bundles/bloxd.io/main.js` (Changed code · before: `L10679-L10680` → after: `L10679-L10680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10679-L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10679-L10680) · [Before (L10679-L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10679-L10680)

```diff
-             GH = AH.I.filter((HH => EH[HH].enabled)),
-             YH = AH.P.filter((HH => XH[HH].enabled)),
+             zB = YB.L.filter((BB => MB[BB].enabled)),
+             lB = YB.N.filter((BB => PB[BB].enabled)),
```

#### 322. `bundles/bloxd.io/main.js` (Changed code · before: `L10686` → after: `L10686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10686) · [Before (L10686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10686)

```diff
-             return AH.k.includes(HH) && EH[HH].enabled
+             return YB.p.includes(BB) && MB[BB].enabled
```

#### 323. `bundles/bloxd.io/main.js` (Changed code · before: `L10690` → after: `L10690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10690) · [Before (L10690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10690)

```diff
-               const BH = (0, hH.c)();
+               const OB = (0, oB.e)();
```

#### 324. `bundles/bloxd.io/main.js` (Changed code · before: `L10694` → after: `L10694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10694) · [Before (L10694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10694)

```diff
-                 return rH.f.setItem(WH, HH), HH
+                 return DB.i.setItem(ZB, BB), BB
```

#### 325. `bundles/bloxd.io/main.js` (Changed code · before: `L10700` → after: `L10700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10700) · [Before (L10700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10700)

```diff
-                 if (null !== (LH = null === (AH = EH[HH]) || void 0 === AH ? void 0 : AH.enabled) && void 0 !== LH && LH) return MH(HH) ? rH.f.setItem(WH, HH) : rH.f.removeItem(WH), HH;
+                 if (null !== (GB = null === (YB = MB[BB]) || void 0 === YB ? void 0 : YB.enabled) && void 0 !== GB && GB) return NB(BB) ? DB.i.setItem(ZB, BB) : DB.i.removeItem(ZB), BB;
```

#### 326. `bundles/bloxd.io/main.js` (Changed code · before: `L10703-L10704` → after: `L10703-L10704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10703-L10704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10703-L10704) · [Before (L10703-L10704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10703-L10704)

```diff
-               const zH = rH.f.getItem(WH);
-               if (MH(zH)) return console.info(`Site used is ${zH}, kept from this tab's entry URL`), zH;
+               const yB = DB.i.getItem(ZB);
+               if (NB(yB)) return console.info(`Site used is ${yB}, kept from this tab's entry URL`), yB;
```

#### 327. `bundles/bloxd.io/main.js` (Changed code · before: `L10710` → after: `L10710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10710) · [Before (L10710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10710)

```diff
-               return tH().includes("discord") && !tH().includes("/auth-callback/discord") && (HH = "discord"), (tH().includes("coolmathgames") || SH.currentUrl.hasSearchParam("coolmath")) && (HH = "coolmathgames"), tH().includes("gx.games") && (HH = "gxGames"), console.info(`Site … [truncated]
+               return jB().includes("discord") && !jB().includes("/auth-callback/discord") && (BB = "discord"), (jB().includes("coolmathgames") || QB.currentUrl.hasSearchParam("coolmath")) && (BB = "coolmathgames"), jB().includes("gx.games") && (BB = "gxGames"), console.info(`Site … [truncated]
```

#### 328. `bundles/bloxd.io/main.js` (Changed code · before: `L10746` → after: `L10746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10746) · [Before (L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10746)

```diff
-         }, , , , , , , , , (HH, BH, LH) => {
+         }, , , , , , , , (BB, OB, GB) => {
```

#### 329. `bundles/bloxd.io/main.js` (Changed code · before: `L10748-L10749` → after: `L10748-L10749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10748-L10749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10748-L10749) · [Before (L10748-L10749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10748-L10749)

```diff
-             c: () => hH,
-             g: () => tH
+             e: () => oB,
+             h: () => jB
```

#### 330. `bundles/bloxd.io/main.js` (Changed code · before: `L10751-L10752` → after: `L10751-L10752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10751-L10752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10751-L10752) · [Before (L10751-L10752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10751-L10752)

```diff
-           var AH = LH(133),
-             rH = LH(142);
+           var YB = GB(137),
+             DB = GB(145);
```

#### 331. `bundles/bloxd.io/main.js` (Changed code · before: `L10766-L10768` → after: `L10766-L10768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10766-L10768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10766-L10768) · [Before (L10766-L10768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10766-L10768)

```diff
-                 if ("object" !== typeof BH || null === BH || !Object.prototype.hasOwnProperty.call(BH, rH.d)) return null;
-                 const LH = rH.j.safeParse(BH[rH.d]);
-                 return LH.success ? LH.data : (console.warn(`App bridge: the app's injected hello is invalid: ${AH.J(LH.error)}`), null)
+                 if ("object" !== typeof OB || null === OB || !Object.prototype.hasOwnProperty.call(OB, DB.b)) return null;
+                 const GB = DB.h.safeParse(OB[DB.b]);
+                 return GB.success ? GB.data : (console.warn(`App bridge: the app's injected hello is invalid: ${YB.M(GB.error)}`), null)
```

#### 332. `bundles/bloxd.io/main.js` (Changed code · before: `L10781` → after: `L10781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10781) · [Before (L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10781)

```diff
-         }, , , , (HH, BH, LH) => {
+         }, , , , , , , , , (BB, OB, GB) => {
```

#### 333. `bundles/bloxd.io/main.js` (Changed code · before: `L10784` → after: `L10785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10785) · [Before (L10784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10784)

```diff
-             d: () => ZB,
+             g: () => wO,
```

#### 334. `bundles/bloxd.io/main.js` (Changed code · before: `L10786-L10787` → after: `L10787-L10788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10787-L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10787-L10788) · [Before (L10786-L10787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10786-L10787)

```diff
-             j: () => WL,
-             m: () => HL,
+             l: () => BG,
+             n: () => DG,
```

#### 335. `bundles/bloxd.io/main.js` (Changed code · before: `L10792` → after: `L10792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10792) · [Before (L10792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10792)

```diff
-             t: () => fB,
+             u: () => mO,
```

#### 336. `bundles/bloxd.io/main.js` (Changed code · before: `L10794-L10798` → after: `L10794-L10797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10794-L10797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10794-L10797) · [Before (L10794-L10798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10794-L10798)

```diff
-             y: () => gB,
-             C: () => aB,
-             D: () => EL,
-             G: () => xL,
-             J: () => cH,
+             B: () => rO,
+             E: () => CO,
+             H: () => MG,
+             K: () => RG,
```

#### 337. `bundles/bloxd.io/main.js` (Changed code · before: `L10801` → after: `L10800-L10801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10800-L10801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10800-L10801) · [Before (L10801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10801)

```diff
-             T: () => lB,
+             R: () => AG,
+             S: () => IO,
```

#### 338. `bundles/bloxd.io/main.js` (Changed code · before: `L10803-L10804` → after: `L10803-L10804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10803-L10804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10803-L10804) · [Before (L10803-L10804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10803-L10804)

```diff
-             X: () => eB,
-             Z: () => zL,
+             W: () => LO,
+             Y: () => yG,
```

#### 339. `bundles/bloxd.io/main.js` (Changed code · before: `L10806` → after: `L10806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10806) · [Before (L10806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10806)

```diff
-             cb: () => nB
+             bb: () => cO
```

#### 340. `bundles/bloxd.io/main.js` (Changed code · before: `L10835` → after: `L10835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10835) · [Before (L10835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10835)

```diff
-               const rH = LH?.Parent ? new SH : this;
+               const DB = GB?.Parent ? new QB : this;
```

#### 341. `bundles/bloxd.io/main.js` (Changed code · before: `L10858` → after: `L10858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L10858) · [Before (L10858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L10858)

```diff
-               super(`Encountered unidirectional transform during encode: ${HH}`), this.name = "ZodEncodeError"
+               super(`Encountered unidirectional transform during encode: ${BB}`), this.name = "ZodEncodeError"
```

#### 342. `bundles/bloxd.io/main.js` (Changed code · before: `L11006` → after: `L11006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L11006) · [Before (L11006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L11006)

```diff
-             return "string" === typeof HH ? HH : HH?.message
+             return "string" === typeof BB ? BB : BB?.message
```

#### 343. `bundles/bloxd.io/main.js` (Changed code · before: `L11044` → after: `L11044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L11044) · [Before (L11044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L11044)

```diff
-             for (const AH of LH) "number" === typeof AH ? BH.push(`[${AH}]`) : "symbol" === typeof AH ? BH.push(`[${JSON.stringify(String(AH))}]`) : /[^\w$]/.test(AH) ? BH.push(`[${JSON.stringify(AH)}]`) : (BH.length && BH.push("."), BH.push(AH));
+             for (const YB of GB) "number" === typeof YB ? OB.push(`[${YB}]`) : "symbol" === typeof YB ? OB.push(`[${JSON.stringify(String(YB))}]`) : /[^\w$]/.test(YB) ? OB.push(`[${JSON.stringify(YB)}]`) : (OB.length && OB.push("."), OB.push(YB));
```

#### 344. `bundles/bloxd.io/main.js` (Changed code · before: `L11051` → after: `L11051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L11051) · [Before (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L11051)

```diff
-             for (const AH of LH) BH.push(`\u2716 ${AH.message}`), AH.path?.length && BH.push(`  \u2192 at ${KH(AH.path)}`);
+             for (const YB of GB) OB.push(`\u2716 ${YB.message}`), YB.path?.length && OB.push(`  \u2192 at ${FB(YB.path)}`);
```

#### 345. `bundles/bloxd.io/main.js` (Changed code · before: `L11296` → after: `L11296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L11296) · [Before (L11296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L11296)

```diff
-               pH.init(HH, BH), HH._zod.pattern = [...HH?._zod.bag?.patterns ?? []].pop() ?? (LH = HH._zod.bag, new RegExp(`^${LH?`[\\s\\S]{${LH?.minimum??0},${LH?.maximum??""}}`:"[\\s\\S]*"}$`)), HH._zod.parse = (LH, AH) => {
+               xB.init(BB, OB), BB._zod.pattern = [...BB?._zod.bag?.patterns ?? []].pop() ?? (GB = BB._zod.bag, new RegExp(`^${GB?`[\\s\\S]{${GB?.minimum??0},${GB?.maximum??""}}`:"[\\s\\S]*"}$`)), BB._zod.parse = (GB, YB) => {
```

#### 346. `bundles/bloxd.io/main.js` (Changed code · before: `L11390` → after: `L11390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L11390) · [Before (L11390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L11390)

```diff
-               if (!HH.shape?.[rH]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${rH}": expected a Zod schema`);
+               if (!BB.shape?.[DB]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${DB}": expected a Zod schema`);
```

#### 347. `bundles/bloxd.io/main.js` (Changed code · before: `L11501` → after: `L11501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L11501) · [Before (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L11501)

```diff
-                 return new RegExp(`^(${HH.map((HH=>GH(HH.source))).join("|")})$`)
+                 return new RegExp(`^(${BB.map((BB=>zB(BB.source))).join("|")})$`)
```

#### 348. `bundles/bloxd.io/main.js` (Changed code · before: `L11531` → after: `L11531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L11531) · [Before (L11531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L11531)

```diff
-                 if (!AH || 0 === Object.keys(AH).length) throw new Error(`Invalid discriminated union option at index "${BH.options.indexOf(LH)}"`);
+                 if (!YB || 0 === Object.keys(YB).length) throw new Error(`Invalid discriminated union option at index "${OB.options.indexOf(GB)}"`);
```

#### 349. `bundles/bloxd.io/main.js` (Changed code · before: `L11544` → after: `L11544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L11544) · [Before (L11544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L11544)

```diff
-                 if (!HH || 0 === HH.size) throw new Error(`Invalid discriminated union option at index "${BH.options.indexOf(AH)}"`);
+                 if (!BB || 0 === BB.size) throw new Error(`Invalid discriminated union option at index "${OB.options.indexOf(YB)}"`);
```

#### 350. `bundles/bloxd.io/main.js` (Changed code · before: `L11546` → after: `L11546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L11546) · [Before (L11546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L11546)

```diff
-                   if (LH.has(BH)) throw new Error(`Duplicate discriminator value "${String(BH)}"`);
+                   if (GB.has(OB)) throw new Error(`Duplicate discriminator value "${String(OB)}"`);
```

#### 351. `bundles/bloxd.io/main.js` (Changed code · before: `L11648` → after: `L11648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L11648) · [Before (L11648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L11648)

```diff
-               HH._zod.values = AH, HH._zod.pattern = new RegExp(`^(${LH.filter((HH=>PH.has(typeof HH))).map((HH=>"string"===typeof HH?TH(HH):HH.toString())).join("|")})$`), HH._zod.parse = (BH, rH) => {
+               BB._zod.values = YB, BB._zod.pattern = new RegExp(`^(${GB.filter((BB=>AB.has(typeof BB))).map((BB=>"string"===typeof BB?VB(BB):BB.toString())).join("|")})$`), BB._zod.parse = (OB, DB) => {
```

#### 352. `bundles/bloxd.io/main.js` (Changed code · before: `L11661` → after: `L11661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L11661) · [Before (L11661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L11661)

```diff
-               HH._zod.values = LH, HH._zod.pattern = new RegExp(`^(${BH.values.map((HH=>"string"===typeof HH?TH(HH):HH?TH(HH.toString()):String(HH))).join("|")})$`), HH._zod.parse = (AH, rH) => {
+               BB._zod.values = GB, BB._zod.pattern = new RegExp(`^(${OB.values.map((BB=>"string"===typeof BB?VB(BB):BB?VB(BB.toString()):String(BB))).join("|")})$`), BB._zod.parse = (YB, DB) => {
```

#### 353. `bundles/bloxd.io/main.js` (Changed code · before: `L11676` → after: `L11676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L11676) · [Before (L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L11676)

```diff
-                   return (hH instanceof Promise ? hH : Promise.resolve(hH)).then((HH => (LH.value = HH, LH)))
+                   return (oB instanceof Promise ? oB : Promise.resolve(oB)).then((BB => (GB.value = BB, GB)))
```

#### 354. `bundles/bloxd.io/main.js` (Changed code · before: `L11692` → after: `L11692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L11692) · [Before (L11692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L11692)

```diff
-                 return HH ? new RegExp(`^(${GH(HH.source)})?$`) : void 0
+                 return BB ? new RegExp(`^(${zB(BB.source)})?$`) : void 0
```

#### 355. `bundles/bloxd.io/main.js` (Changed code · before: `L11698` → after: `L11698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L11698) · [Before (L11698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L11698)

```diff
-                 return void 0 === HH.value ? HH : BH.innerType._zod.run(HH, LH)
+                 return void 0 === BB.value ? BB : OB.innerType._zod.run(BB, GB)
```

#### 356. `bundles/bloxd.io/main.js` (Changed code · before: `L11704-L11705` → after: `L11704-L11705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11704-L11705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L11704-L11705) · [Before (L11704-L11705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L11704-L11705)

```diff
-                 return HH ? new RegExp(`^(${GH(HH.source)}|null)$`) : void 0
-               })), uH(HH._zod, "values", (() => BH.innerType._zod.values ? new Set([...BH.innerType._zod.values, null]) : void 0)), HH._zod.parse = (HH, LH) => null === HH.value ? HH : BH.innerType._zod.run(HH, LH)
+                 return BB ? new RegExp(`^(${zB(BB.source)}|null)$`) : void 0
+               })), pB(BB._zod, "values", (() => OB.innerType._zod.values ? new Set([...OB.innerType._zod.values, null]) : void 0)), BB._zod.parse = (BB, GB) => null === BB.value ? BB : OB.innerType._zod.run(BB, GB)
```

#### 357. `bundles/bloxd.io/main.js` (Changed code · before: `L11758` → after: `L11758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L11758) · [Before (L11758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L11758)

```diff
-                 rH = BH.EX(AH);
+                 DB = OB.oP(YB);
```

#### 358. `bundles/bloxd.io/main.js` (Changed code · before: `L11815` → after: `L11815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L11815) · [Before (L11815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L11815)

```diff
-                 return Object.keys(AH).length ? AH : void 0
+                 return Object.keys(YB).length ? YB : void 0
```

#### 359. `bundles/bloxd.io/main.js` (Changed code · before: `L12041` → after: `L12041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12041) · [Before (L12041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12041)

```diff
-               values: Array.isArray(HH) ? HH : [HH],
+               values: Array.isArray(BB) ? BB : [BB],
```

#### 360. `bundles/bloxd.io/main.js` (Changed code · before: `L12099` → after: `L12099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12099) · [Before (L12099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12099)

```diff
-               catchValue: "function" === typeof BH ? BH : () => BH
+               catchValue: "function" === typeof OB ? OB : () => OB
```

#### 361. `bundles/bloxd.io/main.js` (Changed code · before: `L12122` → after: `L12122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12122) · [Before (L12122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12122)

```diff
-                 EX: BH,
+                 oP: OB,
```

#### 362. `bundles/bloxd.io/main.js` (Changed code · before: `L12127` → after: `L12127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12127) · [Before (L12127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12127)

```diff
-         }, , , , , , , , , (HH, BH, LH) => {
+         }, , , , , , , , (BB, OB, GB) => {
```

#### 363. `bundles/bloxd.io/main.js` (Changed code · before: `L12129` → after: `L12129-L12130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12129-L12130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12129-L12130) · [Before (L12129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12129)

```diff
-             d: () => CH,
+             b: () => JB,
+             e: () => jB,
```

#### 364. `bundles/bloxd.io/main.js` (Changed code · before: `L12131-L12133` → after: `L12132-L12133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12132-L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12132-L12133) · [Before (L12131-L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12131-L12133)

```diff
-             j: () => hH,
-             n: () => EH,
-             r: () => zH
+             i: () => MB,
+             k: () => yB
```

#### 365. `bundles/bloxd.io/main.js` (Changed code · before: `L12135-L12141` → after: `L12135-L12141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12135-L12141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12135-L12141) · [Before (L12135-L12141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12135-L12141)

```diff
-           var AH = LH(133),
-             rH = LH(148);
-           const SH = AH.C({
-               safeArea: rH.l,
-               notificationCanAsk: AH.h(),
-               pushToken: AH.v(AH.X()),
-               privacyOptionsRequired: AH.v(AH.h())
+           var YB = GB(137),
+             DB = GB(153);
+           const QB = YB.E({
+               safeArea: DB.h,
+               notificationCanAsk: YB.g(),
+               pushToken: YB.v(YB.W()),
+               privacyOptionsRequired: YB.v(YB.g())
```

#### 366. `bundles/bloxd.io/main.js` (Changed code · before: `L12143-L12148` → after: `L12143-L12148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12143-L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12143-L12148) · [Before (L12143-L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12143-L12148)

```diff
-             hH = AH.C({
-               protocol: AH.y(),
-               platform: AH.o(["ios", "android"]),
-               appVersion: AH.X(),
-               build: AH.X(),
-               capabilities: AH.M(AH.X(), AH.y())
+             oB = YB.E({
+               protocol: YB.B(),
+               platform: YB.n(["ios", "android"]),
+               appVersion: YB.W(),
+               build: YB.W(),
+               capabilities: YB.P(YB.W(), YB.B())
```

#### 367. `bundles/bloxd.io/main.js` (Changed code · before: `L12150` → after: `L12150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12150) · [Before (L12150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12150)

```diff
-             tH = AH.p(hH, {
+             jB = YB.o(oB, {
```

#### 368. `bundles/bloxd.io/main.js` (Changed code · before: `L12153-L12155` → after: `L12153-L12155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12153-L12155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12153-L12155) · [Before (L12153-L12155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12153-L12155)

```diff
-             zH = AH.C({
-               protocols: AH.d(AH.y()),
-               webVersion: AH.X()
+             yB = YB.E({
+               protocols: YB.c(YB.B()),
+               webVersion: YB.W()
```

#### 369. `bundles/bloxd.io/main.js` (Changed code · before: `L12163` → after: `L12163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12163) · [Before (L12163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12163)

```diff
-         }, , , , , , (HH, BH, LH) => {
+         }, , , , , , , , (BB, OB, GB) => {
```

#### 370. `bundles/bloxd.io/main.js` (Changed code · before: `L12165-L12167` → after: `L12165-L12167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12165-L12167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12165-L12167) · [Before (L12165-L12167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12165-L12167)

```diff
-             e: () => hH,
-             h: () => SH,
-             l: () => rH
+             b: () => oB,
+             f: () => QB,
+             h: () => DB
```

#### 371. `bundles/bloxd.io/main.js` (Changed code · before: `L12169-L12174` → after: `L12169-L12174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12169-L12174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12169-L12174) · [Before (L12169-L12174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12169-L12174)

```diff
-           var AH = LH(133);
-           const rH = AH.C({
-               top: AH.y(),
-               right: AH.y(),
-               bottom: AH.y(),
-               left: AH.y()
+           var YB = GB(137);
+           const DB = YB.E({
+               top: YB.B(),
+               right: YB.B(),
+               bottom: YB.B(),
+               left: YB.B()
```

#### 372. `bundles/bloxd.io/main.js` (Changed code · before: `L12177-L12178` → after: `L12177-L12178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12177-L12178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12177-L12178) · [Before (L12177-L12178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12177-L12178)

```diff
-               setOrientation: AH.C({
-                 orientation: AH.o(["portrait", "landscape", "default"])
+               setOrientation: YB.E({
+                 orientation: YB.n(["portrait", "landscape", "default"])
```

#### 373. `bundles/bloxd.io/main.js` (Changed code · before: `L12184` → after: `L12184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12184) · [Before (L12184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12184)

```diff
-         }, , , , (HH, BH, LH) => {
+         }, , , , , , , , , (BB, OB, GB) => {
```

#### 374. `bundles/bloxd.io/main.js` (Changed code · before: `L12197` → after: `L12197-L12198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12197-L12198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12197-L12198) · [Before (L12197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12197)

```diff
-             B: () => GH,
+             A: () => QB,
+             E: () => PB,
```

#### 375. `bundles/bloxd.io/main.js` (Changed code · before: `L12201-L12204` → after: `L12203-L12205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12203-L12205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12203-L12205) · [Before (L12201-L12204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12201-L12204)

```diff
-             P: () => MH,
-             R: () => vH,
-             e: () => zH,
-             f: () => xH,
+             N: () => NB,
+             O: () => WB,
+             d: () => yB,
```

#### 376. `bundles/bloxd.io/main.js` (Changed code · before: `L12206-L12208` → after: `L12207-L12208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12207-L12208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12207-L12208) · [Before (L12206-L12208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12206-L12208)

```diff
-             h: () => CH,
-             k: () => QH,
-             o: () => hH,
+             j: () => lB,
+             l: () => JB,
```

#### 377. `bundles/bloxd.io/main.js` (Changed code · before: `L12210` → after: `L12210-L12211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12210-L12211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12210-L12211) · [Before (L12210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12210)

```diff
-             s: () => AH,
+             r: () => oB,
+             u: () => jB,
```

#### 378. `bundles/bloxd.io/main.js` (Changed code · before: `L12212-L12213` → after: `L12213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12213) · [Before (L12212-L12213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12212-L12213)

```diff
-             w: () => SH,
-             y: () => XH
+             w: () => DB
```

#### 379. `bundles/bloxd.io/main.js` (Changed code · before: `L12282-L12285` → after: `L12282-L12285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12282-L12285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12282-L12285) · [Before (L12282-L12285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12282-L12285)

```diff
-           var AH = LH(142),
-             rH = LH(129),
-             SH = LH(30),
-             hH = LH(92);
+           var YB = GB(145),
+             DB = GB(128),
+             QB = GB(31),
+             oB = GB(98);
```

#### 380. `bundles/bloxd.io/main.js` (Changed code · before: `L12290` → after: `L12290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12290) · [Before (L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12290)

```diff
-               hH.currentUrl.removeSearchParam(tH), HH ? SH.f.setItem(tH, "1") : SH.f.removeItem(tH)
+               oB.currentUrl.removeSearchParam(jB), BB ? QB.i.setItem(jB, "1") : QB.i.removeItem(jB)
```

#### 381. `bundles/bloxd.io/main.js` (Changed code · before: `L12292-L12293` → after: `L12292-L12293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12292-L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12292-L12293) · [Before (L12292-L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12292-L12293)

```diff
-             const HH = (0, rH.c)();
-             return null !== HH ? (0, AH.n)(HH, "appCheck") : !!(0, rH.g)() || "1" === SH.f.getItem(tH) && void 0 !== window.ReactNativeWebView
+             const BB = (0, DB.e)();
+             return null !== BB ? (0, YB.i)(BB, "appCheck") : !!(0, DB.h)() || "1" === QB.i.getItem(jB) && void 0 !== window.ReactNativeWebView
```

#### 382. `bundles/bloxd.io/main.js` (Changed code · before: `L12295` → after: `L12295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12295) · [Before (L12295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12295)

```diff
-         }, , (HH, BH, LH) => {
+         }, , , , , , , , (BB, OB, GB) => {
```

#### 383. `bundles/bloxd.io/main.js` (Changed code · before: `L12297` → after: `L12297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12297) · [Before (L12297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12297)

```diff
-             b: () => XH,
+             c: () => PB,
```

#### 384. `bundles/bloxd.io/main.js` (Changed code · before: `L12300` → after: `L12300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12300) · [Before (L12300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12300)

```diff
-             k: () => GH,
+             h: () => zB,
```

#### 385. `bundles/bloxd.io/main.js` (Changed code · before: `L12302` → after: `L12302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12302) · [Before (L12302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12302)

```diff
-             m: () => QH,
+             n: () => qB,
```

#### 386. `bundles/bloxd.io/main.js` (Changed code · before: `L12305` → after: `L12305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12305) · [Before (L12305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12305)

```diff
-           var AH = LH(159);
+           var YB = GB(180);
```

#### 387. `bundles/bloxd.io/main.js` (Changed code · before: `L12322` → after: `L12322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12322) · [Before (L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12322)

```diff
-             const BH = `${HH.vendor} ${HH.renderer}`;
+             const OB = `${BB.vendor} ${BB.renderer}`;
```

#### 388. `bundles/bloxd.io/main.js` (Changed code · before: `L12327` → after: `L12327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12327) · [Before (L12327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12327)

```diff
-             return "vm" === HH || AH.k.includes(HH)
+             return "vm" === BB || YB.f.includes(BB)
```

#### 389. `bundles/bloxd.io/main.js` (Changed code · before: `L12337-L12338` → after: `L12337-L12338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12337-L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12337-L12338) · [Before (L12337-L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12337-L12338)

```diff
-             (null !== (LH = HH.antiAliasing) && void 0 !== LH ? LH : BH.antiAliasing) && BH.antiAliasing && (rH.antiAliasing = HH.antiAliasing);
-             const SH = null !== (AH = HH.pixelScale) && void 0 !== AH ? AH : BH.pixelScale;
+             (null !== (GB = BB.antiAliasing) && void 0 !== GB ? GB : OB.antiAliasing) && OB.antiAliasing && (DB.antiAliasing = BB.antiAliasing);
+             const QB = null !== (YB = BB.pixelScale) && void 0 !== YB ? YB : OB.pixelScale;
```

#### 390. `bundles/bloxd.io/main.js` (Changed code · before: `L12345-L12346` → after: `L12345-L12346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12345-L12346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12345-L12346) · [Before (L12345-L12346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12345-L12346)

```diff
-             void 0 !== BH.antiAliasing && HH.antiAliasing === YH.antiAliasing && (AH.antiAliasing = null !== (rH = BH.antiAliasing) && void 0 !== rH ? rH : LH.antiAliasing);
-             void 0 !== BH.pixelScale && HH.pixelScale === YH.pixelScale && (AH.pixelScale = null !== (SH = BH.pixelScale) && void 0 !== SH ? SH : LH.pixelScale);
+             void 0 !== OB.antiAliasing && BB.antiAliasing === lB.antiAliasing && (YB.antiAliasing = null !== (DB = OB.antiAliasing) && void 0 !== DB ? DB : GB.antiAliasing);
+             void 0 !== OB.pixelScale && BB.pixelScale === lB.pixelScale && (YB.pixelScale = null !== (QB = OB.pixelScale) && void 0 !== QB ? QB : GB.pixelScale);
```

#### 391. `bundles/bloxd.io/main.js` (Changed code · before: `L12349` → after: `L12349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12349) · [Before (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12349)

```diff
-         }, , (HH, BH, LH) => {
+         }, , , , , , , (BB, OB, GB) => {
```

#### 392. `bundles/bloxd.io/main.js` (Changed code · before: `L12352-L12358` → after: `L12354-L12357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12354-L12357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12354-L12357) · [Before (L12352-L12358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12352-L12358)

```diff
-             F: () => YH,
-             J: () => WH,
-             L: () => rH,
-             O: () => hH,
-             S: () => uH,
-             T: () => QH,
-             e: () => GH,
+             G: () => qB,
+             b: () => zB,
+             c: () => PB,
+             f: () => NB,
```

#### 393. `bundles/bloxd.io/main.js` (Changed code · before: `L12362-L12364` → after: `L12362-L12364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12362-L12364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12362-L12364) · [Before (L12362-L12364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12362-L12364)

```diff
-             s: () => CH,
-             w: () => EH,
-             z: () => AH
+             q: () => jB,
+             u: () => lB,
+             x: () => ZB
```

#### 394. `bundles/bloxd.io/main.js` (Changed code · before: `L12384` → after: `L12384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12384) · [Before (L12384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12384)

```diff
-         }, , , , , , , , , (HH, BH, LH) => {
+         }, , (BB, OB, GB) => {
```

#### 395. `bundles/bloxd.io/main.js` (Changed code · before: `L12388-L12389` → after: `L12387-L12392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12387-L12392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12387-L12392) · [Before (L12388-L12389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12388-L12389)

```diff
-             E: () => QH,
-             I: () => zH,
+             C: () => PB,
+             F: () => jB,
+             J: () => MB,
+             N: () => QB,
+             P: () => qB,
+             Q: () => yB,
```

#### 396. `bundles/bloxd.io/main.js` (Changed code · before: `L12391-L12395` → after: `L12394-L12397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12394-L12397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12394-L12397) · [Before (L12391-L12395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12391-L12395)

```diff
-             f: () => rH,
-             i: () => YH,
-             j: () => CH,
-             m: () => uH,
-             n: () => hH,
+             e: () => DB,
+             g: () => lB,
+             k: () => JB,
+             o: () => pB,
```

#### 397. `bundles/bloxd.io/main.js` (Changed code · before: `L12399-L12400` → after: `L12400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L12400) · [Before (L12399-L12400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L12399-L12400)

```diff
-             v: () => XH,
-             y: () => tH
+             x: () => RB
```
